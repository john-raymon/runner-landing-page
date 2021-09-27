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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex flex-col relative w-full w-full">
        <section>
          <div className="w-full my-8 md:mb-2">
            <h4 className="text-[0.5625rem] lg:text-sm text-runner-purple tracking-[0.4em] lg:tracking-[0.23em] text-center uppercase font-light mb-4 lg:mb-6">
              Run your company...at the speed of you.
            </h4>
            <h1 className="w-full md:w-[80%] hero-text-gradient text-[1.9375rem] sm:text-3xl md:text-[2.5625rem] lg:text-[3.4125rem] font-bold hero-text-glow uppercase mx-auto text-center tracking-[0.03em] leading-[2rem] md:leading-[2.75rem] lg:leading-[4.3125rem]">
              Connecting outstanding operations talent with the most inclusive startups
            </h1>
          </div>
        </section>
        <section className="flex-grow my-8 md:mt-2 md:mb-0">
          <div className="flex flex-col md:flex-row w-full md:mx-px py-10 space-y-10 md:space-y-0">
            <div className="w-full md:w-1/2 self-center md:-mx-px">
              <div className="px-2 md:px-6 xl:px-24 space-y-5">
                <p className="sm:h-[4rem] lg:h-[5rem] text-[1.4rem] md:text-[1rem] lg:text-[1.2625rem] leading-[1.5rem] lg:leading-[1.4rem] font-base font-extralight tracking-[0.03em] text-runner-white text-center md:text-left pb-4 sm:pb-2"> 
                  We help you add the people your team needs fractionally, when they&apos;re needed.
                </p>
                <a href={process.env.NEXT_PUBLIC_COMPANY_TYPEFORM_URL}>
                  <Button className="md:mt-4 bg-gradient-orange font-base !font-medium !border-none text-[0.8rem] !tracking-[0.2rem] lg:!tracking-[0.26rem] uppercase w-full !rounded-full !text-runner-white">
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
              <div className="px-2 md:px-6 xl:px-24 space-y-5">
                <p className="sm:h-[4rem] lg:h-[5rem] text-[1.4rem] md:text-[1rem] lg:text-[1.2625rem] leading-[1.5rem] lg:leading-[1.4rem] tracking-[0.03em] font-base font-extralight text-runner-white text-center md:text-right pb-4 sm:pb-2"> 
                  Looking to curate your career?
                  <br/>
                  We got you.
                </p>
                <a href={process.env.NEXT_PUBLIC_RUNNER_TYPEFORM_URL}>
                  <Button className="md:mt-4 bg-gradient-orange font-base !font-medium !border-none text-[0.8rem] !tracking-[0.2rem] lg:!tracking-[0.26rem] uppercase w-full !rounded-full !text-runner-white">
                    Apply
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="text-runner-white font-base mb-16 space-y-[4rem] text-center w-full w-full mx-auto px-2 md:px-6 xl:px-24">
          <div className="text-center mx-auto w-9/12 sm:w-1/2 text-[0.9rem] sm:text-[1.125rem]">
            <p className="relative text-runner-white font-light opacity-60 leading-[1.2rem] sm:leading-[1.8rem] tracking-[0.03em] px-[0.7rem] md:px-[3rem]">
              <img src="/quotation-marks.png" className="absolute w-[17%] md:w-[16%] top-[-1rem] left-0 ml-[-18%] sm:ml-[-15%]"/>
              <img src="/quotation-marks.png" className="absolute w-[17%] md:w-[16%] right-0 bottom-[-1rem] mr-[-18%] sm:mr-[-15%] transform rotate-180"/>
              You. Are. Fast! I didn&apos;t expect you to have someone so quickly. This is a seamless process 🔥
            </p>
            <div className="flex flex-row justify-center items-center mt-6">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 max-height-[3rem] rounded-full overflow-hidden mr-3">
                  <img src="/harold-hughes-pic.jpg" className="object-cover" />
                </div>
              </div>

              <p className="flex-shrink-0 text-left">
                <span className="block font-medium opacity-95 leading-tight">Harold Hughes</span>
                <span className="block font-light opacity-70 leading-tight">
                  CEO, Bandwagon (customer)
                </span>
              </p>
            </div>
          </div>


          <div className="text-center mx-auto w-9/12 sm:w-1/2 text-[0.9rem] sm:text-[1.125rem]">
            <p className="relative text-runner-white font-light opacity-60 leading-[1.2rem] sm:leading-[1.8rem] tracking-[0.03em] px-[0.7rem] md:px-[3rem]">
              <img src="/quotation-marks.png" className="absolute w-[17%] md:w-[16%] top-[-1rem] left-0 ml-[-18%] sm:ml-[-15%]"/>
              <img src="/quotation-marks.png" className="absolute w-[17%] md:w-[16%] right-0 bottom-[-1rem] mr-[-18%] sm:mr-[-15%] transform rotate-180"/>
              It was great to chat with you. Your interviewing style made me feel I belong. 🙏
            </p>
            <div className="flex flex-row justify-center items-center mt-6">
              <p className="flex-shrink-0 text-left">
                <span className="block font-medium opacity-95 leading-tight">potential Runner</span>
              </p>
            </div>
          </div>
          
          
          <div className="text-center mx-auto w-9/12 sm:w-1/2 text-[0.9rem] sm:text-[1.125rem]">
            <p className="relative text-runner-white font-light opacity-60 leading-[1.2rem] sm:leading-[1.8rem] tracking-[0.03em] px-[0.7rem] md:px-[3rem]">
              <img src="/quotation-marks.png" className="absolute w-[17%] md:w-[16%] top-[-1rem] left-0 ml-[-18%] sm:ml-[-15%]"/>
              <img src="/quotation-marks.png" className="absolute w-[17%] md:w-[16%] right-0 bottom-[-1rem] mr-[-18%] sm:mr-[-15%] transform rotate-180"/>
              I found my current job (that I love!) during Runner&apos;s pilot. I was first introduced to WorkFrom by Runner in early 2020, started working as a remote contracted Executive Assistant just a few days later, and switched to full-time employee after 3 months. I&apos;m now a marketing/operations lead for the company.
            </p>
            <div className="flex flex-row justify-center items-center mt-6">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3">
                  <img src="/jessica-avatar.jpeg" className="object-cover" />
                </div>
              </div>
              <p className="flex-grow-0 text-left">
                <span className="block font-medium opacity-95 leading-tight">Jessica</span>
                <span className="block font-light opacity-70 leading-tight">
                  WorkFrom (Runner)
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
