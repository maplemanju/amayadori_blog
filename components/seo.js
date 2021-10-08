import Head from 'next/head'

export const siteTitle = 'Amayadori'
export const siteDesc = 'My name is Maya and I am a nomad web engineer living in Japan.'

export default function Seo({ pageTitle, pageDesc, hero }) {
  let homeSrc;
  if (typeof window !== 'undefined') {
    homeSrc = window.location.origin
  }

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={homeSrc + (hero ? hero : `/images/profile.png`)}/>

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@amayadoring" />
      <meta name="twitter:creator" content="@amayadoring" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png"/>
      <link rel="manifest" href="/manifest.json"/>
      <link rel="mask-icon" href="/logo/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#e2edda"/>
      <meta name="theme-color" content="#e2edda"/>
    </Head>
  )
}