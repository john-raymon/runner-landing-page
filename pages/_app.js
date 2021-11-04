import '../styles/globals.css';
import 'lite-react-ui/css';
import RunnerSvg from './../public/runner-pilot.svg';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative w-full flex-grow">
    <Head>
      <title>Runner</title>
      <meta name="description" content="Fractional Hiring & Hires" />
      <link rel="icon" href="/favicon.png" />
    </Head>
      <div className="absolute md:h-auto top-0 left-0 w-full">
          <img src="/hero-lines.png" className="object-cover h-[43rem] opacity-[0.5] w-full" />
      </div>
      <header className="sticky top-0 transparent-background-shadow z-20">
        <div className="w-full flex justify-between items-center lg:max-w-[77.87rem] mx-auto px-6 sm:px-10 pb-10 pt-14 md:px-14 xl:px-24">
          <Link href="/">
            <a className="w-[7.25rem] lg:w-[10rem] h-auto">
              <RunnerSvg className="fill-current text-runner-white"/>
            </a>
          </Link>
          <ul className="flex space-x-4 items-center justify-center">
            <li className="flex items-center">
              <Link href="/why">
                <a className="text-runner-white text-[0.50rem] tracking-[0.1em] md:text-[0.7rem] font-bold pb-[0.3rem]">
                  <span className="border-runner-purple border-b-[0.1rem] py-[0.3rem]">Why?</span>
                </a>
            </Link>
            </li>
            <li className="flex items-center">
              <Link href="/tour-dates">
                <a className="text-runner-white text-[0.50rem] tracking-[0.1em] md:text-[0.7rem] font-bold pb-[0.3rem]">
                  <span className="border-runner-purple border-b-[0.1rem] py-[0.3rem]">Tour Dates</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="font-base relative min-h-screen lg:max-w-[77.87rem] w-full mx-auto justify-center px-4 sm:px-8 xl:px-0">

        <main className="w-full">
          <Component {...pageProps} />
        </main>
        <footer className="relative z-10 flex flex-col items-center justify-center flex-grow mt-8 mb-14">
          <p className="font-base text-[0.7rem] py-1 text-runner-white tracking-wider opacity-75">
            This landing page was built by a Runner :)
          </p>
          <a href="https://backstagecapital.com/" rel="noreferrer" target="_blank">
            <img src="/by-backstage.png" className="w-[6.125rem]" />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default MyApp;