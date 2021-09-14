import Head from 'next/head'
// import { useState } from 'react';
import DividerSvg from './../public/divider.svg';
import HorizDividerSvg from './../public/horiz-divider.svg';
import RunnerIconSvg from './../public/runner-icon.svg';
import { Button } from 'lite-react-ui';

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Runner</title>
        <meta name="description" content="Fractional Hiring & Hires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col relative w-full w-full">
        <section>
          <div className="w-full">
            <p className="text-[0.5rem] lg:text-sm text-runner-purple tracking-[0.4em] lg:tracking-[0.23em] text-center uppercase font-light mb-4 lg:mb-6">
              Run your company...at the speed of you.
            </p>
            <p className="w-full sm:w-1/2 lg:w-3/5 hero-text-gradient text-[1.5rem] sm:text-3xl md:text-4xl lg:text-6xl font-bold hero-text-glow uppercase mx-auto text-center tracking-[0.03em] leading-[2rem] lg:leading-tight">
              Connecting outstanding operation talent with the most inclusive startups
            </p>
          </div>
        </section>
        <section className="flex-grow my-5 lg:my-0">
          <div className="flex flex-col md:flex-row w-full md:mx-px py-10 space-y-10 md:space-y-0">
            <div className="w-full md:w-1/2 self-center md:-mx-px">
              <div className="px-2 md:px-3 lg:px-4 xl:px-24 space-y-5">
                <p className="sm:h-[4rem] lg:h-[5rem] text-[1.4rem] md:text-[1rem] lg:text-[1.2625rem] leading-[1.5rem] lg:leading-[1.6875rem] font-base font-extralight tracking-[0.03em] text-runner-white text-center md:text-left pb-4 sm:pb-2"> 
                  We help you add the people your team needs fractionally, when they&apos;re needed.
                </p>
                <a href={process.env.NEXT_PUBLIC_COMPANY_TYPEFORM_URL}>
                  <Button className="md:mt-4 bg-gradient-orange font-base !font-normal !border-none text-[0.6rem] sm:text-[0.65rem] xl:text-[0.8rem] !tracking-[0.2rem] lg:!tracking-[0.26rem] uppercase w-full !rounded-full !text-runner-white">
                    Reserve
                  </Button>
                </a>
              </div>
            </div>
            <div className="mx-1 hidden w-px md:block">
              <DividerSvg />
            </div>
            <div className="my-2 h-px w-full md:hidden">
              <HorizDividerSvg />
            </div>
            <div className="w-full md:w-1/2 self-center md:-mx-px">
              <div className="px-2 md:px-3 lg:px-4 xl:px-24 space-y-5">
                <p className="sm:h-[4rem] lg:h-[5rem] text-[1.4rem] md:text-[1rem] lg:text-[1.2625rem] leading-[1.5rem] lg:leading-[1.6875rem] tracking-[0.03em] font-base font-extralight text-runner-white text-center md:text-right pb-4 sm:pb-2"> 
                  Looking to curate your career?
                  <br/>
                  We got you.
                </p>
                <a href={process.env.NEXT_PUBLIC_RUNNER_TYPEFORM_URL}>
                  <Button className="md:mt-4 bg-gradient-orange font-base !font-normal !border-none text-[0.6rem] sm:text-[0.65rem] xl:text-[0.8rem] !tracking-[0.2rem] lg:!tracking-[0.26rem] uppercase w-full !rounded-full !text-runner-white">
                    Apply
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}