import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { Button } from 'lite-react-ui';
import DownTriangleSvg from './../public/down-triangle.svg';
import GradientCircleSvg from './../public/gradient-circle.svg';
import WhiteCircleSvg from './../public/white-circle.svg';
import DividerSvg from './../public/vertical-divider.svg';
import head from 'next/head';

export default function WhyPage() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(null); 
  const [decodedEmail, setDecodedEmail] = useState('');
  const [headcount, setHeadcount] = useState('');
  const [selectWrapperFocus, setSelectWrapperFocus] = useState(false);
  const [disableNext, setDisableNext] = useState(true);

  const selectInputRef = useRef(null);

  const emailRegEx = /\S+@\S+\.\S+/;
  const headcounts = Array(101)
    .fill('')
    .reduce((acc, cur, i) => {
      acc[i+1] = `${i + 1 !== 101 ? i + 1 : `${i + 1}+ (more than 100)`} ${i + 1 > 1 ? 'employees' : 'employee'}`
      return acc;
    }, {});

  function handleHeadcountChange(e) {
    setHeadcount(e.target.value);
  }

  useEffect(() => {
    if (!headcount) {
      setDisableNext(true);
    }

    if (headcount && headcount !== '101') {
      setDisableNext(false);
    };
  }, [headcount])

  useEffect(() => {
    if(!router.isReady) return;
    const { email } = router.query;
    setDecodedEmail(decodeURIComponent(email));
  }, [router.isReady]);

  useEffect(() => {
    if (!decodedEmail) return;
    if (emailRegEx.test(decodedEmail)) {
      setCurrentStep('1');
      setLoading(false);
    } else {
      // do something email is invalid 
      setCurrentStep('invalidEmail');
      setLoading(false);
    }
  }, [decodedEmail])

  function nextStep(currentStep) {
    if (currentStep === '1') {
      setDisableNext(true);
      if (headcount && headcount !== '101') {
        setCurrentStep('2');
      }
    }
  }
    
  const allHeadcountOptions = Object.keys(headcounts).map((headcount) => {
    return (
      <option value={headcount} key={headcount}>
        { headcounts[headcount] }
      </option>
    )
  });

  return (
    <div className="w-full px-10 md:px-14 xl:px-24 text-runner-white font-base mt-16 mb-24">
      <Head>
        <title>Runner - Last Step</title>
      </Head>
      <main className="w-full">
        {
          isLoading ?
          (
            <p className="text-lg text-runner-white">
              Loading...
            </p>
          ) :
          (() => { 
              switch(currentStep) {
                case '1': 
                  return (
                    <div className="flex w-full">
                      <div className="w-[70%] pr-[4rem] space-y-12 mr-[-0.5px]">
                        <h1 className="font-base w-full md:w-[80%] text-[3rem] font-semibold capitalize text-left tracking-[0.03em] leading-[3rem]">
                          Finish registering
                        </h1>

                        <div className="checkout-inner-container flex items-center px-[3rem] py-[7.5rem]">
                          <div className="flex flex-col space-y-6 w-full">
                            <label className="text-runner-white text-[1.375rem] leading-[0.75rem] tracking-[0.02em] font-medium">
                              How many employees do you currently have?
                              <p className="font-light tracking-[0.06em] text-[0.9rem] opacity-[0.8] leading-[0.75rem] mt-3">
                                Including yourself, full-time, part-time and contracts
                              </p>
                            </label>
                            <button 
                              tabIndex="-1"
                              type="button" 
                              onFocus={() => { selectInputRef.current.focus(); setSelectWrapperFocus(true); }} 
                              className={`${selectWrapperFocus ? 'scale-105 border-opacity-[0.3] border-runner-white' : 'scale-100 border-opacity-[0] border-transparent'} border-[0.1rem] transform transition duration-300 ease-in-out hover:scale-105 base-select relative flex justify-between rounded-[1.5rem] bg-runner-dark-purple px-[2.5rem] py-[1.875rem] w-full cursor-pointer`}
                            >
                              <p className="text-[1rem] opacity-[0.5] tracking-[0.06rem] font-light leading-[0.75rem]">
                                { headcounts[headcount] || 'Select a number of employees' }
                              </p>
                              <div className="w-[1rem] h-auto">
                                <DownTriangleSvg />
                              </div>
                              <select
                                name="headcount"
                                onChange={handleHeadcountChange}
                                onBlur={() => setSelectWrapperFocus(false)}
                                value={headcount}
                                ref={selectInputRef}
                                placeholder="Headcount"
                                className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer w-full h-full">
                                <option value="" disabled>
                                  Select a number of employees
                                </option>
                                {allHeadcountOptions}
                              </select>
                            </button>
                          </div>
                        </div>
                        
                        <div className="w-full flex justify-between items-center">
                          <div className="flex space-x-8">
                            <div className="w-[0.7rem] h-auto cursor-pointer">
                              {
                                currentStep === '1' ?
                                <GradientCircleSvg />
                                :
                                <WhiteCircleSvg />
                              }
                            </div>
                            <div className="w-[0.7rem] h-auto cursor-pointer">
                              {
                                currentStep === '2' ?
                                <GradientCircleSvg />
                                :
                                <WhiteCircleSvg />
                              }
                            </div>
                          </div>
                          <Button 
                            onClick={() => nextStep(currentStep)}
                            tabIndex="0"
                            disabled={headcount === '101' || !!disableNext}
                            className={`${(headcount !== '101' || !disableNext ) ? 'opacity-1' : 'opacity-[0.1]'} !max-w-[20rem] !w-full md:mt-4 bg-gradient-orange font-base !font-medium !border-none text-[0.8rem] !tracking-[0.2rem] lg:!tracking-[0.26rem] uppercase !rounded-full !text-runner-white`}
                            type="button"
                          >
                            Continue to payment
                          </Button>
                        </div>
                      </div>
                      <div className={`${headcount !== '101' ? 'opacity-0' : 'opacity-[1]'} transition ease-in-out duration-300 relative h-[100%] w-[0.5px]`}>
                        <DividerSvg height="100%" />
                      </div>
                      <div className={`${headcount !== '101' ? 'opacity-0' : 'opacity-[1]'} transition ease-in-out duration-700 flex items-center ml-[-0.5px] max-w-[30%] flex-grow pl-[4rem]`}>
                        <p className="text-wrap sm:h-[4rem] lg:h-[5rem] text-[1.4rem] md:text-[1rem] lg:text-[1.2625rem] leading-[1.5rem] lg:leading-[1.4rem] font-base font-extralight tracking-[0.03em] text-runner-white text-right"> 
                          More than 100 current employees?
                          <a className="cursor-pointer block text-runner-white text-[0.9rem] tracking-[0.05em] font-semibold pb-[0.2rem] mt-2">
                            <span className="border-runner-purple border-b-[0.18rem] py-[0.4rem]">Reach out</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  )
                case 'invalidEmail':
                  return (
                    <div>
                      The email is invalid
                    </div>
                  )
                default: 
                  return (
                    <div>
                      No step specified!
                    </div>
                  )
              }
            }
          )()
        }
      </main>
    </div>
  )
}