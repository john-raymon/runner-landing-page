import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { Button } from 'lite-react-ui';
import DownTriangleSvg from './../public/down-triangle.svg';
import GradientCircleSvg from './../public/gradient-circle.svg';
import WhiteCircleSvg from './../public/white-circle.svg';
import DividerSvg from './../public/vertical-divider.svg';
import PlanetSvg from './../public/planet.svg';
import HorizDividerSvg from './../public/horiz-divider.svg';
import head from 'next/head';
import { loadStripe } from "@stripe/stripe-js";

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  // https://stackoverflow.com/a/16233919/8320709
  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

function PaginationButton({step, currentActiveStep, prevStep, nextStep}) {
  // by default disables pagination if not next or prev step, to prevent skipping beyond next step
  const isActive = step === +currentActiveStep;
  const isNextStep = !isActive && step === +currentActiveStep + 1;
  const isPrevStep = !isActive && step === +currentActiveStep - 1;
  return (
    <button 
      disabled={!isNextStep && !isPrevStep && !isActive} 
      onClick={(e) => (isActive ? null : isNextStep ? nextStep(e, currentActiveStep) : (isPrevStep ? prevStep(e, currentActiveStep) : null) )} 
      className={`w-[0.7rem] h-[0.7rem] mx-6 cursor-pointer disabled:opacity-[0.20] ${isActive ? 'transform scale-[1.75]' : ''}`}>
      {
        isActive ?
        <GradientCircleSvg height="0.7rem" width="0.7rem" />
        :
        <WhiteCircleSvg height="0.7rem" width="0.7rem" />
      }
    </button>
  )
}

export default function WhyPage() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(null); 
  const [decodedEmail, setDecodedEmail] = useState('');
  const [headcount, setHeadcount] = useState('');
  const [selectWrapperFocus, setSelectWrapperFocus] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const stripeRef = useRef(null);
  const stripeCardRef = useRef(null);
  const selectInputRef = useRef(null);
  const [totalCosts, setTotalCosts] = useState(0); 
  const [totalCostsFormatted, setTotalCostsFormatted] = useState('');
  const [charged, setCharged] = useState(false);

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

  // set up Stripe.js card element
  function setUpStripeElementCard() {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY).then(stripe => {
      stripeRef.current = stripe;
      // Create an instance of Elements
      const elements = stripeRef.current.elements();
      // Custom styling can be passed to options when creating an Element.
      // (Note that this demo uses a wider set of styles than the guide below.)
      const style = {
        base: {
          color: '#FCEFED',
          fontWeight: '300',
          fontSize: '16px',
          letterSpacing: '0.01em',
          '::placeholder': {
            color: '#FCEFED'
          },
          textTransform: 'capitalize',
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#FCEFED'
        }
      };
      // Create an instance of the card Element
      stripeCardRef.current = elements.create("card", { style });
      // Add an instance of the card Element into the `card-element` <div>
      stripeCardRef.current.mount("#card-element");
    });
  }

  useEffect(() => {
    if (currentStep === '2') {
      setUpStripeElementCard();
    }
  }, [currentStep])

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

  function nextStep(e, currentStep) {
    e.preventDefault();
    if (currentStep === '1') {
      setDisableNext(true);
      if (headcount && headcount !== '101') {
        // calc price and update state
        const totalCosts = +headcount <= 3 ? 600 : (+headcount * 200);
        setTotalCosts(totalCosts);
        setTotalCostsFormatted(formatter.format(totalCosts));
        setCurrentStep(+currentStep + 1 + '');
        setDisableNext(false);
      }
    }
  }

  function prevStep(e, currentStep) {
    e.preventDefault();
    setCurrentStep(+currentStep - 1 < 1 ? '1' : +currentStep - 1 + '');
  }
    
  const allHeadcountOptions = Object.keys(headcounts).map((headcount) => {
    return (
      <option value={headcount} key={headcount}>
        { headcounts[headcount] }
      </option>
    )
  });

  const stripeTokenHandler = (token) => {
    // Example POST method implementation:
    async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    };

    return postData('/api/checkout', {
      tokenId: token.id,
      email: router.query.email,
      headcount,
      totalCosts,
    });
  }

  function checkout(e) {
    e.preventDefault();
    setDisableNext(true);
    stripeRef.current.createToken(stripeCardRef.current)
      .then(function(result) {
        if (result.error) {
          // TODO: remove alert errors, render custom UI errors
          // Inform the customer that there was an error.
          console.log('Error', result.error.message);
          throw result.error;
        } else {
          // Send the token to your server.
          return stripeTokenHandler(result.token);
        }
      })
      .then((res) => {
        if (res.success) {
          console.log(res);
          setCharged(true);
        }
      })
      .catch((error) => {
        setDisableNext(false);
        console.log('Error', error);
        alert(error && error.message || "Sorry, we weren't able to charge your card. Please try again.");
      })
  }

  return (
    <div className="w-full px-1 sm:px-3 md:px-14 xl:px-24 text-runner-white font-base mt-4 mb-6 md:mt-16 md:mb-24">
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
                    <div className="flex w-full flex-col md:flex-row">
                      <div className="w-full md:w-[70%] md:pr-[4rem] space-y-6 md:space-y-12 md:mr-[-1px]">
                        <h1 className="font-base w-full text-[2.5rem] md:text-[3rem] font-semibold capitalize text-left tracking-[0.03em] leading-[2.5rem] md:leading-[3rem]">
                          Finish registering
                        </h1>

                        <div className={`${headcount !== '101' ? 'h-0' : 'h-auto'} flex flex-col space-y-4 md:hidden w-full`}>
                          <div className={`${headcount !== '101' ? 'opacity-0 h-0' : 'opacity-[1] h-[0.5px]'} my-2 w-full`}>
                            <HorizDividerSvg />
                          </div>
                          <div className={`${headcount !== '101' ? 'opacity-0 h-0' : 'opacity-[1] h-auto'} flex transition ease-in-out duration-700 items-center flex-grow`}>
                            <p className={`${headcount !== '101' ? 'h-0' : 'h-auto'} text-wrap text-[1.4rem] md:text-[1rem] lg:text-[1.2625rem] leading-[1.5rem] lg:leading-[1.4rem] font-base font-extralight tracking-[0.03em] text-runner-white text-left`}> 
                              More than 100 current employees?
                              <a className="cursor-pointer block text-runner-white text-[0.9rem] tracking-[0.05em] font-semibold pb-[0.2rem] mt-2">
                                <span className="border-runner-purple border-b-[0.18rem] py-[0.4rem]">Reach out</span>
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="checkout-inner-container flex items-center px-[1.5rem] py-[4rem] md:px-[3rem] md:py-[7.5rem]">
                          <div className="flex flex-col space-y-6 w-full">
                            <label className="text-runner-white text-[1.375rem] leading-[1.5rem] tracking-[0.02em] font-medium">
                              How many employees do you currently have?
                              <p className="font-light tracking-[0.06em] text-[0.9rem] opacity-[0.8] leading-[0.95rem] mt-3">
                                Including yourself, full-time, and part-time employees.
                              </p>
                            </label>
                            <button 
                              tabIndex="-1"
                              type="button"
                              onFocus={() => { selectInputRef.current.focus(); setSelectWrapperFocus(true); }} 
                              onClick={() => { selectInputRef.current.focus(); setSelectWrapperFocus(true); }} 
                              className={`${selectWrapperFocus ? 'md:scale-105 border-opacity-[0.2] border-runner-white' : 'md:scale-100 border-opacity-[0] border-transparent'} border-[0.1rem] transform transition md:duration-300 ease-in-out md:hover:scale-105 base-select relative flex items-center justify-between rounded-[1.5rem] bg-[#372E40] bg-opacity-[0.6] px-[2.5rem] py-[1.875rem] w-full cursor-pointer`}
                            >
                              <p className="text-left text-[1rem] text-runner-white text-opacity-[0.70] tracking-[0.06rem] font-light leading-[1rem] pr-1">
                                { headcounts[headcount] || 'Select a number of employees' }
                              </p>
                              <div className="w-[1rem] h-auto">
                                <DownTriangleSvg width="1rem" />
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
                        
                        <div className="w-full flex flex-col md:flex-row justify-between items-center !mb-6 md:mb-0">
                          <div className="flex py-4 mb-6 md:mb-0">
                            {
                              Array(2).fill('').map((_, i) => <PaginationButton step={i + 1} currentActiveStep={currentStep} prevStep={prevStep} nextStep={nextStep} key={i+'_pagination'} />)
                            }
                          </div>
                          <Button 
                            onClick={(e) => nextStep(e, currentStep)}
                            disabled={headcount === '101' || !!disableNext}
                            className={`${(headcount !== '101' || !disableNext ) ? 'opacity-1' : 'opacity-[0.1]'} md:ml-5 lg:ml-0 md:button-glow transition duration-300 hover:scale-105 active:scale-100 focus:scale-105 !max-w-[20rem] !w-full bg-gradient-orange font-base !font-medium !border-none text-[0.8rem] !tracking-[0.2rem] lg:!tracking-[0.26rem] uppercase !rounded-full !text-runner-white`}
                            type="button"
                          >
                            Continue
                          </Button>
                        </div>
                      </div>
                      <div className={`${headcount !== '101' ? 'opacity-0' : 'opacity-[1]'} hidden md:flex self-center transition ease-in-out duration-300 relative h-[100%] w-[0.5px]`}>
                        <DividerSvg width="0.5px" height="100%" />
                      </div>
                      <div className={`${headcount !== '101' ? 'opacity-0' : 'opacity-[1]'} hidden md:flex transition ease-in-out duration-700 items-center ml-[-0.5px] max-w-[30%] flex-grow pl-[4rem]`}>
                        <p className="text-wrap sm:h-[4rem] lg:h-[5rem] text-[1rem] lg:text-[1.2625rem] leading-[1.2rem] lg:leading-[1.2625rem] font-base font-extralight tracking-[0.03em] text-runner-white text-right"> 
                          More than 100 current employees?
                          <a className="cursor-pointer block text-runner-white text-[0.9rem] tracking-[0.05em] font-semibold pb-[0.2rem] mt-2">
                            <span className="border-runner-purple border-b-[0.18rem] py-[0.4rem]">Reach out</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  )
                case '2':
                  return (
                    <div className="flex flex-col md:flex-row w-full text-white-runner">
                      <div className="w-full md:w-[70%] pr-0 md:pr-[4rem] space-y-3 md:space-y-[3rem] md:mr-[-1px] text-white-runner">
                        <h1 className="text-[2.5rem] md:text-[3rem] text-runner-white font-base w-full font-bold capitalize text-left leading-[2.5rem] md:leading-[3rem]">
                          { !charged ? 'Membership Checkout' : 'Thank you for trying Runner!'}
                        </h1>
                        <h4 className="text-runner-white !mt-[0.75rem] w-full text-[1rem] md:text-[1.3rem] font-light text-left tracking-[0.03em] leading-[1.15rem] md:leading-[1.4rem] text-opacity-[0.75]">
                          { !charged ? 
                            `Runner’s membership cost $200 per current employee per year with a $600 minimum.`
                            : `You’re set for a year of Runner. This covers unlimited matching and booking, with no recruitment fees (an average savings of at least $10,000/year). You'll receive an email from us soon.`
                          }
                        </h4>


                        <div className="flex flex-col md:hidden w-full pb-4 md:pb-0">
                          <div className={`my-2 w-full`}>
                            <HorizDividerSvg />
                          </div>
                          <div className={`flex transition ease-in-out duration-700 items-center flex-grow mt-3`}>
                            <p className={`text-wrap text-[1rem] lg:text-[1.2625rem] leading-[1.1rem] lg:leading-[1.4rem] font-base font-extralight tracking-[0.03em] text-runner-white text-left`}> 
                              { !charged ? `Have any questions? Set up call with us before making a purchase.` : `Have any questions? Set up a call.` }
                              <a className="cursor-pointer block text-runner-white text-[0.9rem] tracking-[0.05em] font-semibold pb-[0.2rem] mt-2">
                                <span className="border-runner-purple border-b-[0.18rem] py-[0.4rem]">Reach out</span>
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="checkout-inner-container checkout-inner-container--multicolor-border flex flex-col items-center px-[1.5rem] sm:px-[1rem] py-[4rem] md:px-[3rem] md:py-[4rem]">
                          <div className="flex flex-col space-y-8 w-full">
                            <p className="text-runner-white text-[1.075rem] leading-[0.75rem] tracking-[0.02em] font-medium text-opacity-[0.8]">
                              Payment Summary
                            </p>
                            <div className="flex items-center justify-between rounded-[0.875rem] px-[0.5rem] lg:p-[2.21875rem] w-full bg-opacity-[0.2]">
                              <div className="w-[2rem] h-auto">
                                <PlanetSvg width="100%" />  
                              </div>
                              <div className="flex font-light items-center space-x-[0.2rem] justify-between w-full pl-[0.5rem] lg:pl-[1.59375rem] text-[0.8rem] lg:text-[1.125rem] lg:tracking-[0.02em] leading-[0.8rem] lg:leading-[1rem] text-opacity-[0.9]">
                                <p>
                                  {headcounts[headcount]}
                                </p>
                                <p className="text-right">
                                  {totalCostsFormatted} USD / per year
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          {
                            !charged ?
                            <div className="flex flex-col space-y-8 w-full mt-[3rem]">
                              <p className="text-runner-white text-[1.075rem] leading-[0.75rem] tracking-[0.02em] font-medium text-opacity-[0.8]">
                                Payment Method
                              </p>
                              <div className="w-full">
                                <div className="rounded-[0.875rem] bg-[#372E40] bg-opacity-[0.6] leading-[1rem] text-[16px] py-[1rem] px-[0.45rem] md:p-[2.21875rem]">
                                  <div id="card-element"></div>
                                </div>
                              </div>
                            </div>
                            : ''
                          }
                        </div>
                        
                        <div className="w-full flex justify-between text-runner-white items-center w-full text-[1.3rem] font-light capitalize text-left tracking-[0.03em] leading-[1.7rem]">
                          <p className="text-runner-white text-opacity-[0.85]">Total Costs:</p>
                          <p className="font-normal">{totalCostsFormatted }</p>
                        </div>

                        {
                          !charged ?
                          <div className="w-full flex flex-col md:flex-row justify-between items-center !mb-6 md:mb-0">
                            <div className="flex py-4 mb-6 md:mb-0">
                              {
                                Array(2).fill('').map((_, i) => <PaginationButton step={i + 1} currentActiveStep={currentStep} prevStep={prevStep} nextStep={nextStep} key={i+'_pagination'} />)
                              }
                            </div>
                            <Button 
                              onClick={(e) => checkout(e)}
                              tabIndex="0"
                              disabled={headcount === '101' || disableNext}
                              className={`${(headcount !== '101' || !disableNext ) ? 'opacity-1' : 'opacity-[0.1]'} md:ml-5 md:button-glow transition duration-300 hover:scale-105 active:scale-100 focus:scale-105 !max-w-[20rem] !w-full md:mt-4 bg-gradient-orange font-base !font-medium !border-none text-[0.8rem] !tracking-[0.2rem] lg:!tracking-[0.26rem] uppercase !rounded-full !text-runner-white`}
                              type="button"
                            >
                              Proceed to pay
                            </Button>
                          </div>
                          : ''
                        }
                      </div>
                      <div className={`hidden md:flex transition ease-in-out duration-300 relative h-[100%] w-[0.5px] flex-stretch self-center`}>
                        <DividerSvg width="0.5px" height="100%" />
                      </div>
                      <div className={`hidden md:flex transition ease-in-out duration-700 items-center ml-[-1px] w-[29%] flex-grow pl-[4rem]`}>
                        <p className="text-wrap sm:h-[4rem] lg:h-[5rem] text-[1rem] lg:text-[1.2625rem] leading-[1.2rem] lg:leading-[1.4rem] font-base font-extralight tracking-[0.03em] text-runner-white text-right"> 
                          { !charged ? `Have any questions? Set up call with us before making a purchase.` : `Have any questions? Set up a call.` }
                          <a href={process.env.NEXT_PUBLIC_CALENDLY_LINK} className="cursor-pointer block text-runner-white text-[0.9rem] tracking-[0.05em] font-semibold pb-[0.2rem] mt-2">
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