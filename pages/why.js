import Head from 'next/head'

export default function WhyPage() {
  return (
    <div className="w-full">
      <Head>
        <title>Runner - Why?</title>
        <meta name="description" content="Fractional Hiring & Hires" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex flex-col relative w-full w-full">
        <video autoPlay controls loop poster="/runner-why-image.jpg" className="rounded-large w-full h-[50vh]">
          <source src="/runner-why-video.mp4" type="video/mp4"/>
          <source src="/runner-why-video.webm" type="video/webm"/>
          <source src="/runner-why-video.ogv" type="video/ogg"/>
        </video>
      </main>
    </div>
  )
}
