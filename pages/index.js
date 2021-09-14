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
      <main className="relative w-full w-full">
        <section>
          <div className="w-full">
            <p className="text-[0.5rem] lg:text-sm text-runner-purple tracking-[0.23em] text-center uppercase font-light mb-4 lg:mb-6">
              WHERE PROFESSIONALS RUN
            </p>
            <p className="w-full lg:w-3/5 hero-text-gradient text-[1.6rem] lg:text-6xl font-medium hero-text-glow uppercase mx-auto text-center tracking-[0.03em] leading-[2rem] lg:leading-tight">
              {/* LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. */}
              Connecting Top Operators And Organizations
            </p>
          </div>
        </section>
        <section className="flex-grow my-5 lg:my-0">
          <div className="flex flex-col lg:flex-row w-full lg:mx-px py-10 space-y-10 lg:space-y-0">
            <div className="w-full lg:w-1/2 self-center lg:-mx-px">
              <div className="lg:px-28 space-y-5">
                <p className="text-[1rem] lg:text-[1.2625rem] leading-[1.6875rem] tracking-[0.03em] font-base font-extralight text-runner-white text-center lg:text-left pb-4"> 
                  Looking for a fractional operational job? We’ll help you find your perfect role.
                </p>
                <Button className="bg-gradient-orange font-base !font-normal !border-none text-[0.6rem] lg:text-[0.8125rem] !tracking-[0.26rem] uppercase w-full !rounded-full !text-runner-white">
                  join early as a <span className="font-semibold text-runner-dark-purple">runner</span>
                </Button>
              </div>
            </div>
            <div className="mx-1 hidden w-px lg:block">
              <DividerSvg />
            </div>
            <div className="my-1 h-px w-full lg:hidden">
              <HorizDividerSvg />
            </div>
            <div className="w-full lg:w-1/2 self-center lg:-mx-px">
              <div className="lg:px-28 space-y-5">
                <p className="text-[1rem] lg:text-[1.2625rem] font-base font-extralight tracking-[0.03em] text-runner-white text-center lg:text-right pb-4"> 
                  We help you add the people your team needs fractionally, when they’re needed.
                </p>
                <Button className="bg-gradient-orange font-base !font-normal !border-none text-[0.6rem] lg:text-[0.8125rem] !tracking-[0.26rem] uppercase w-full !rounded-full !text-runner-white">
                  join early as a <span className="font-semibold text-runner-dark-purple">company</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="text-runner-dark-purple flex items-center relative py-[3.5rem] lg:py-[5.5rem] w-full bg-runner-white box-glow rounded-[4rem] mb-8">
            <div className="space-y-6 lg:space-y-0 w-full px-8 lg:px-36 mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center z-20">
              <p className="w-full lg:w-4/5 lg:pr-20 text-[1.2rem] lg:text-[2.68rem] tracking-[0.03em] leading-[1.3rem] lg:leading-[2.93rem] font-semibold text-left lg:pr-[2rem]">
                Precision and results matter, and we understand that.
              </p>
              <div className="w-4/6 lg:w-1/5">
                <div className="w-[2.2rem] h-[2.2em] lg:w-[2.9rem] lg:h-[2.9rem]">
                  <RunnerIconSvg />
                </div>
                <p className="font-light tracking-[0.03em] text-[0.6rem] lg:text-[1.1rem] pt-2 leading-[1.25]">
                  We find fractional operators perfect for a range of businesses.
                </p>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-10">
                <img src="/lines.png" className="object-cover h-full w-full" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}