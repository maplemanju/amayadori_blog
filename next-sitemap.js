/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://amayadori.cloud',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
}