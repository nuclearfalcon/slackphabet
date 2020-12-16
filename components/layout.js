import Head from 'next/head'

export const siteTitle = 'Slack Emoji Alphabetizer'

function Layout({children}) {

  return (
    <div>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        
        <main className="container">
            {children}
        </main>
    </div>
  )
}

export default Layout