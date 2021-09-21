import '../styles/globals.css';
import 'lite-react-ui/css';
import RunnerSvg from './../public/runner-pilot.svg';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative w-full flex-grow">
      <div className="absolute md:h-auto top-0 left-0 w-full">
          <img src="/hero-lines.png" className="object-cover h-[43rem] opacity-80 w-full" />
      </div>
      <div className="font-base relative min-h-screen lg:max-w-[77.87rem] w-full mx-auto justify-center px-8 xl:px-0">
        <header className="px-2 md:px-6 xl:px-24">
          <div className="w-full my-16">
            <div className="w-[7.25rem] lg:w-[12rem] h-auto">
              <RunnerSvg className="fill-current text-runner-white"/>
            </div>
          </div>
        </header>
        <main className="w-full">
          <Component {...pageProps} />
        </main>
        <footer className="flex flex-col items-center justify-center flex-grow mt-8 mb-14">
          <p className="font-base text-sm py-1 text-runner-white tracking-wider opacity-75">
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