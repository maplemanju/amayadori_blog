// next.config.js

const prism = require("remark-prism")

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [prism],
  },
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],

  async redirects() {
    return [
      {
        source: '/auto-fill-japan-address-from-zipcode',
        destination: '/blog/auto-fill-japan-address-from-zipcode',
        permanent: true,
      },
      {
        source: '/auto-fill-japan-address-yubinbango',
        destination: '/blog/auto-fill-japan-address-yubinbango',
        permanent: true,
      },
      {
        source: '/best-pokemon-go-location-in-okinawa',
        destination: '/blog/best-pokemon-go-location-in-okinawa',
        permanent: true,
      },
      {
        source: '/charset-shift-jis-utf8',
        destination: '/blog/charset-shift-jis-utf8',
        permanent: true,
      },
      {
        source: '/form-input-ui-for-better-user-experience',
        destination: '/blog/form-input-ui-for-better-user-experience',
        permanent: true,
      },
      {
        source: '/full-width-half-width-conversion',
        destination: '/blog/full-width-half-width-conversion',
        permanent: true,
      },
      {
        source: '/japanese-font-family',
        destination: '/blog/japanese-font-family',
        permanent: true,
      },
      {
        source: '/japanese-ui-font-guidelines',
        destination: '/blog/japanese-ui-font-guidelines',
        permanent: true,
      },
      {
        source: '/japanese-web-form-practices',
        destination: '/blog/japanese-web-form-practices',
        permanent: true,
      },
      {
        source: '/js-regex-japanese-form-validation',
        destination: '/blog/js-regex-japanese-form-validation',
        permanent: true,
      },
      {
        source: '/kyoto-scenic-railway-onsen',
        destination: '/blog/kyoto-scenic-railway-onsen',
        permanent: true,
      },
      {
        source: '/js-regex-japanese-form-validation',
        destination: '/blog/js-regex-japanese-form-validation',
        permanent: true,
      },
      {
        source: '/my-time-in-portia-review',
        destination: '/blog/my-time-in-portia-review',
        permanent: true,
      },
      {
        source: '/organic-shampoos-in-japan',
        destination: '/blog/organic-shampoos-in-japan',
        permanent: true,
      },
    ]
  },
})