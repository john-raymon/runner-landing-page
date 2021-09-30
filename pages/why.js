import Head from 'next/head'
import WhyRunnerSvg from './../public/why-runner.svg';

export default function WhyPage() {
  return (
    <div className="w-full px-0 xl:px-20">
      <Head>
        <title>Runner - Why?</title>
        <meta name="description" content="Fractional Hiring & Hires" />
        <link rel="icon" href="/favicon.png" />
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </Head>
      <main className="flex relative w-full w-full mt-[0.5rem] md:mt-[2rem] lg:mt-[4rem] pt-4 pb-[5rem]">
        <div className="w-full flex flex-col md:flex-row px-0 md:px-10 lg:px-20 items-center md:items-start">
          <div className="order-last flex mx-auto flex-col w-full md:w-[40%] lg:w-[35%] max-w-[34.375rem] md:max-w-full max-h-[full] z-10">
              <div className="w-full mx-auto md:mt-[-10px]">
                <blockquote className="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Exactly why <a href="https://twitter.com/hirerunner?ref_src=twsrc%5Etfw">@hirerunner</a> was created💜 Head on over… <a href="https://t.co/WRcZNstn3j">https://t.co/WRcZNstn3j</a></p>&mdash; HireRunner (@hirerunner) <a href="https://twitter.com/hirerunner/status/1442342286386348033?ref_src=twsrc%5Etfw">September 27, 2021</a></blockquote>
              </div>
              <div>
                <blockquote className="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">We agree! For many, a Head of People seems out of reach today. <a href="https://twitter.com/hirerunner?ref_src=twsrc%5Etfw">@hirerunner</a> and we’ll help you get there sooner🙌🏾 <a href="https://t.co/RDFreKlpTd">https://t.co/RDFreKlpTd</a></p>&mdash; HireRunner (@hirerunner) <a href="https://twitter.com/hirerunner/status/1441984877302140928?ref_src=twsrc%5Etfw">September 26, 2021</a></blockquote>
              </div>
              <div>
                <blockquote className="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Agreed! That’s why you should <a href="https://twitter.com/hirerunner?ref_src=twsrc%5Etfw">@hirerunner</a> 💜 <a href="https://t.co/ocQhVn5hTz">https://t.co/ocQhVn5hTz</a></p>&mdash; Arlan 👊🏾 (@ArlanWasHere) <a href="https://twitter.com/ArlanWasHere/status/1443037219984343040?ref_src=twsrc%5Etfw">September 29, 2021</a></blockquote>
              </div>
          </div>
          <div className="relative max-w-[34.375rem] md:max-w-full w-[100%] px-2 sm:px-0 md:w-[60%] lg:w-[65%] md:pr-[1.25rem] md:mt-0 h-[50vh] min-h-[18rem] xl:h-[65vh] md:sticky md:top-[10rem] rounded-lg pb-4 md:pb-0">
            <div className="w-[6.5rem] md:w-[10rem] xl:w-[10rem] absolute left-0 top-0 mt-[-3rem] md:mt-[-4rem] xl:mt-[-4.5rem] ml-[-1.8rem] sm:ml-[-3rem] md:ml-[-4rem] xl:ml-[-5rem] z-10">
              <WhyRunnerSvg className="transform rotate-90" width="100%" height="100%" />
            </div>
            <div className="flex items-center justify-center w-full h-full rounded-lg bg-runner-black py-12 md:py-10 box-glow-2 bg-opacity-50">
              <video autoPlay controls loop playsInline={true} poster="/runner-why-image.jpeg" className="rounded-lg w-full h-[100%]">
                <source src="/runner-why-video.mp4" type="video/mp4"/>
                <source src="/runner-why-video.webm" type="video/webm"/>
                <source src="/runner-why-video.ogv" type="video/ogg"/>
              </video>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
