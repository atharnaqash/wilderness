export async function onRequestGet() {
  const feedUrl = 'https://www.outsideonline.com/rss/adventure/rss.xml';

  try {
    const response = await fetch(feedUrl);

    if (!response.ok) {
      return Response.json({ error: 'Failed to load outdoor news' }, { status: 502 });
    }

    const xml = await response.text();

    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 10).map((match) => {
      const item = match[1];

      return {
        title: getValue(item, 'title'),
        link: getValue(item, 'link'),
        pubDate: getValue(item, 'pubDate'),
      };
    });

    return Response.json(items, {
      headers: {
        'Cache-Control': 'public, max-age=900',
      },
    });
  } catch (error) {
    return Response.json({ error: 'News service unavailable' }, { status: 500 });
  }
}

function getValue(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));

  if (!match) {
    return '';
  }

  return match[1]
    .replace(/<!\[CDATA\[|\]\]>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#8217;/g, '’')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&nbsp;/g, ' ')
    .trim();
}
