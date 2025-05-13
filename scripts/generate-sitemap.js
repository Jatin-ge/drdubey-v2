const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

async function generateSitemap() {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/services', changefreq: 'monthly', priority: 0.8 },
    { url: '/blogs', changefreq: 'weekly', priority: 0.7 },
    { url: '/gallery', changefreq: 'monthly', priority: 0.6 },
    { url: '/youtube', changefreq: 'monthly', priority: 0.6 },
    { url: '/contact', changefreq: 'yearly', priority: 0.5 },
    { url: '/events', changefreq: 'monthly', priority: 0.6 },
  ];

  const stream = new SitemapStream({ hostname: 'https://www.drdubay.in' });

  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(data =>
    data.toString()
  );

  const writeStream = createWriteStream('public/sitemap.xml');
  writeStream.write(xml);
  writeStream.end();
}

generateSitemap();
