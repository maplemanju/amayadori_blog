// next.config.js

const prism = require("remark-prism")

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [prism],
  },
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx']
})