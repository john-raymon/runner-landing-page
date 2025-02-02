import Head from 'next/head'
import { Button } from 'lite-react-ui';
import HorizDividerSvg from './../public/horiz-divider.svg';

function EventListItem({ imagePath, date, city, hostName, location, hostLink = '', locationLink = ''}) {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between items-center w-full">
        <div>
          <div className="w-14 h-14 md:w-[5.75rem] md:h-[5.75rem] sm:w-12 sm:h-12 rounded-full overflow-hidden mr-1 md:mr-3">
            <img src={imagePath} className="object-cover" />
          </div>
        </div>

        <div className="text-right text-xs md:text-2xl pl-[0.75rem] md:pl-[6rem]">
          <span className="block text-runner-orange font-medium opacity-95 leading-tight">{date}</span>
          <span className="block font-light opacity-[0.9] leading-tight">
            {city}, hosted by <a target="_blank" rel="noopener noreferrer" href={hostLink}><span className="font-medium button-purple-underline">{hostName}</span></a> at <a target="_blank" rel="noopener noreferrer" href={locationLink}><span className="font-medium button-purple-underline">{location}</span></a>
          </span>
        </div>
      </div>
      <div className="block mt-6 opacity-[0.60] w-full">
        <HorizDividerSvg />
      </div>
    </div>
  )
}

export default function TourDates() {

  const allEvents = [
    {
      imagePath: '/aniyia.jpeg',
      date: 'Thursday, Nov 4',
      city: 'San Francisco',
      hostName: 'Aniyia Williams',
      location: 'Canopy',
      hostLink: 'https://www.aniyiawilliams.com/',
      locationLink: 'https://www.canopy.space/locations/jackson-square/',
    },
    {
      imagePath: '/henry.jpeg',
      date: 'Friday, Nov 5',
      city: 'Austin',
      hostName: 'John Henry',
      location: 'Capital Factory',
      hostLink: 'https://johnhenry-matos.squarespace.com/',
      locationLink: 'https://www.capitalfactory.com/event/meet-greet-arlan-hamilton/',
    },
    {
      imagePath: '/wilson.jpeg',
      date: 'Saturday, Nov 6',
      city: 'Atlanta',
      hostName: 'Ryan Wilson',
      location: 'Gathering Spot',
      hostLink: 'https://thegatheringspot.club/ryan-wilson/',
      locationLink: 'https://thegatheringspot.club/arlan-hamilton-rsvp/',
    },
    {
      imagePath: '/amy.jpeg',
      date: 'Monday, Nov 8',
      city: 'NYC',
      hostName: 'Amy Nelson',
      location: 'Company',
      hostLink: 'https://theriveter.co/voice/author/amy-nelson/',
      locationLink: 'https://company.co/the-building/',
    },
  ];
  return (
    <div className="w-full px-0 xl:px-20">
      <Head>
        <title>Runner - Fireside + Meet & Greet Tour Dates</title>
        <meta name="description" content="Each event is from 7pm to 9pm local time. There are no tix for these events, but there is a guest list. Please show ID at door. There are limited capacities due to Covid safety regulations. Proof of vaccination will be required to attend." />
      </Head>
      <main className="relative w-full w-full pt-10 pb-[5rem]">
        <div className="w-full">
          <h1 className="font-semibold text-[3.5rem] md:text-[7.5rem] text-runner-white leading-[3rem] md:leading-[6.25rem] text-center">
            Fireside +
            <br/>
            Meet <span className="font-sans">&</span> Greet
            <br/>
            Tour
          </h1>
          <div className="flex -mb-6">
            <div className="visible md:invisible md:absolute relative flex items-center flex-col justify-between rounded-full mx-auto mt-2 z-10">
              <p className="text-runner-white text-center text-xs font-semibold opacity-[0.8] tracking-[0.02em] px-4 mb-2">
                Please click below to sign up for the guest list.
              </p>
              <a target="_blank" rel="noopener noreferrer" href={process.env.NEXT_PUBLIC_GUEST_LIST_LINK}>
                <Button buttonType="secondary" className="bg-gradient-orange font-base !font-medium !border-none text-[0.8rem] !tracking-[0.2rem] lg:!tracking-[0.26rem] uppercase w-full !rounded-full !text-runner-white">
                  Join the guest list
                </Button>
              </a>
            </div>
            <div className="invisible md:visible absolute md:relative flex items-center flex-row justify-between colorful-button-bar rounded-full mx-auto mt-4 z-10 p-2">
              <p className="text-runner-black text-xs lg:text-sm font-semibold tracking-[0.02em] px-4">
                Please click the button to sign up for the guest list.
              </p>
              <a target="_blank" rel="noopener noreferrer" href={process.env.NEXT_PUBLIC_GUEST_LIST_LINK}>
                <Button buttonType="secondary" className="!w-auto bg-gradient-orange font-base !font-medium !border-none text-xs lg:text-[0.8rem] !tracking-[0.2rem] lg:!tracking-[0.26rem] uppercase w-full !rounded-full !text-runner-white">
                  Join the guest list
                </Button>
              </a>
            </div>
          </div>
          <div className="relative w-[90%] md:w-full md:max-w-[31.75rem] mx-auto z-0 -mb-32">
            <img src="/arlan-image.png" width="100%" height="auto" />
          </div>
          <div className="relative flex flex-col w-full z-10">
            <div className="background-shadow">
            </div>
            <p className="relative z-10 mx-auto text-runner-white text-center font-light text-xs md:text-base leading-[1rem] md:leading-[1.0625rem] tracking-[0.03em]">
              <span className="font-medium">Each event is from 7pm to 9pm local time.</span>
              <br/>
              Please show ID at door. There are limited capacities due to Covid safety regulations.
              <br/>
              <span className="font-medium">Proof of vaccination will be required to attend.</span>
            </p>
            <div className="w-auto mx-auto">
              <h2 className="font-semibold self-start text-2xl text-runner-white my-8">Dates</h2>
              <ul className="flex flex-col w-full text-white w-full space-y-16">
                {
                  allEvents.map(({imagePath, date, city, hostName, location, hostLink, locationLink}, i) => {
                    return (
                      <li key={i + city}>
                        <EventListItem 
                          imagePath={imagePath}
                          date={date}
                          city={city}
                          hostName={hostName}
                          location={location}
                          hostLink={hostLink}
                          locationLink={locationLink}
                        />
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
