import '../styles/globals.css';
import 'lite-react-ui/css';
import RunnerSvg from './../public/runner.svg';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 w-full">
          {/* <img href="/./../public/hero-lines.png" objectFit="cover"/> */}
          <img src="/hero-lines.png" className="object-cover w-full xl:max-h-[619px]" />
      </div>
      <div className="font-base relative min-h-screen max-w-[77.87rem] w-full mx-auto sitems-center justify-center xl:px-0">
        <header>
          <div className="w-full my-16 px-10">
            <div className="w-52 h-auto">
              <RunnerSvg className="fill-current text-runner-white"/>
            </div>
          </div>
        </header>
        <main className="w-full">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;