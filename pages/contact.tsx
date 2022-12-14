import Head from "next/head"
import MainLayout from "../components/layout/MainLayout"

const contact = () => {
  return (
    <div>
      <Head>
        <title>Be Fickle | Contact</title>
        <meta name="description" content="Be Fickle. Be Flawed. Be You." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section className="container mx-auto my-32">
          <h1 className="text-6xl font-semibold text-center text-white uppercase">Get In Touch</h1>
          <div className="flex flex-wrap items-center justify-around mt-32">
            <h2 className="mb-0 text-4xl font-bold uppercase md:">Be Flawed</h2>
            <div className="flex flex-wrap items-center gap-12 mx-auto text-xl font-semibold md:gap-40">
              <p className="mx-auto uppercase">600 Broadway Ave NW<br/>Grand Rapids, MI 49504</p>
              <div className="hidden w-1 h-20 bg-white sm:inline"></div>
              <a className="mx-auto" href="tel:616.555.1212">616.555.1212</a>
            </div>
          </div>
          <div className="mt-40 grayscale">

          <iframe title='Map' src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCStRhTZOQOSax7HXfFlpiccRX3jn0DKLg&q=Union+Square,Grand+Rapids+Michigan" width="100%" height="400px" loading="lazy" />
          </div>
        </section>
      </MainLayout>
    </div>
  )
}

export default contact