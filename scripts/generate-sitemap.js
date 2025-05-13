const fs = require('fs');
const path = require('path');

// Define your base URL
const baseUrl = 'https://www.drdubay.in';

// Define the URLs to include in the sitemap
const links = [
  // Main Pages
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/blogs', changefreq: 'weekly', priority: 0.7 },
  { url: '/gallery', changefreq: 'monthly', priority: 0.6 },
  { url: '/youtube', changefreq: 'monthly', priority: 0.6 },
  { url: '/contact', changefreq: 'yearly', priority: 0.5 },
  { url: '/events', changefreq: 'monthly', priority: 0.6 },

  // Services Pages
  { url: '/services/total-knee-replacement', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/total-hip-replacement', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/revision-knee-surgery', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/revision-hip-surgery', changefreq: 'monthly', priority: 0.8 },

  // Blog Pages
  { url: '/blogs/total-knee-replacement', changefreq: 'weekly', priority: 0.7 },
  { url: '/blogs/Joint-Replacement-Surgery-A-Step-by-Step-Guide', changefreq: 'weekly', priority: 0.7 },
  { url: '/blogs/joint-replacement-recovery-tips', changefreq: 'weekly', priority: 0.7 },
  { url: '/blogs/signs-need-joint-replacement-surgery', changefreq: 'weekly', priority: 0.7 },
  { url: '/blogs/hip-pain-causes-hip-replacement-jaipur', changefreq: 'weekly', priority: 0.7 },
  { url: '/blogs/hip-replacement-surgery-jaipur-dr-dheeraj-dubay', changefreq: 'weekly', priority: 0.7 },
  { url: '/blogs/foods-for-joint-health-inflammation-relief', changefreq: 'weekly', priority: 0.7 },
  { url: '/blogs/how-to-prepare-for-knee-replacement-surgery', changefreq: 'weekly', priority: 0.7 }
];

// Create the XML Sitemap Content
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${links
    .map(
      ({ url, changefreq, priority }) => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

// Save the sitemap.xml file in the public folder
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);

console.log('Sitemap has been generated and saved to public/sitemap.xml');
