import Head from 'next/head'

export const siteTitle = 'Quantized Meridiem'

function Layout({children}) {

  return (
    <div>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout