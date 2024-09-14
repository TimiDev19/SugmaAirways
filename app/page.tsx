import { Nunito } from 'next/font/google'
import { Gothic_A1 } from "next/font/google";
import { FadeInWhenVisible } from "@/components/FadeInWhenVisible";
import { FadeInFromSide } from "@/components/FadeInFromSide";
import { FadeInFromOtherSide } from "@/components/FadeInFromOtherSide";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const gothic_a1 = Gothic_A1({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700']
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800', '900'], // Choose available weights
});


export default function Home() {
  return (
    <div>
      <FadeInWhenVisible>
        <div className=" h-[100vh]" id="home">
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/videos/homeee.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10 flex items-center justify-center h-full w-[100vw]">
            <FadeInWhenVisible>
              <div className="text-center text-white mx-auto">
                <h1 className={`${gothic_a1.className} text-2xl md:text-5xl font-light uppercase`}>Comfort is the maximum priority ✈️</h1>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Overlay (Optional) */}
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        </div >
      </FadeInWhenVisible>



      <div className=" h-[80vh] promo-bg w-full" id='about'>
        <FadeInWhenVisible>
          <div className={` ${nunito.className} w-[100vw] h-[80vh] flex items-center justify-center text-white`}>
            <div className=" w-full md:w-[50%] mx-auto text-center px-3 md:px-0">
              <h1 className=" text-2xl md:text-4xl uppercase mb-4 text-gray-400 font-light w-[80%] mx-auto">We value your time and commitment.</h1>
              <p className=" mb-2 text-sm md:text-lg">
                At Sugma Airways, we deeply value our customers time and are committed to providing a punctual and efficient travel experience. Our dedicated team employs advanced scheduling systems and real-time tracking technology to ensure that flights operate on time.
              </p>
              <p className=" mb-2 text-sm md:text-lg">
                We also prioritize proactive communication, offering timely updates and support to keep you informed about any changes. By continuously refining our processes and monitoring performance, Sugma Airways strives to respect your schedule and deliver a smooth, reliable journey from start to finish.
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>



      <FadeInWhenVisible>
        <div className="relative w-full h-[80vh] overflow-hidden">
          {/* Background video */}
          <video
            className="absolute top-0 left-0 w-full lg:w-[75%] h-full object-cover"
            src="/videos/safety.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay content */}

          <FadeInFromSide>
            <div className="relative z-10 flex items-center justify-start lg:justify-end h-full w-full lg:mx-10 ">
              <div className={` ${nunito.className} h-fit w-fit lg:w-[40%] bg-white p-5`}>
                <h1 className="text-black text-center text-3xl uppercase font-semibold mb-4">MODERN EQUALS SAFE 👷‍♂️</h1>
                <p className=" text-lg mb-2">
                  Sugma Airways values the trust customers put in us which is why we have made safety a huge priority. Several methods have been put in place
                  to ensure not just the safety of passangers but to ensure the safety of their luggage. It ruins your travel experience when you arrive at your destination but your luggage doesnt.
                </p>
                <p className=" text-lg mb-2">
                  Below are some of the measures currently in place
                </p>
                <div>
                  <ul>
                    <li>- Aircraft checks by 3 different teams.</li>
                    <li>- Regular maintenance of aircraft.</li>
                    <li>- Trackers assigned to each luggage item and made available to each passanger.</li>
                    <li>- Multiple security checks pre-boarding.</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeInFromSide>



          {/* Optional dark overlay */}
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div> */}
        </div>
      </FadeInWhenVisible>

      <div className="relative h-screen">
        {/* Split background */}

        <div className="absolute top-0 left-0 w-1/2 h-full">
          <div className="firstclassright-bg h-full w-full"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="firstclassleft-bg h-full w-full"></div>
        </div>



        {/* Main content that runs across both sections */}
        <FadeInFromOtherSide>
          <div className="relative z-10 flex justify-center items-center h-full w-full lg:w-[50%] mx-auto">
            <div className=" w-[80%] lg:w-3/4 bg-white shadow-lg p-10 text-center">
              <h1 className={` ${nunito.className} text-2xl md:text-4xl font-bold text-gray-900 uppercase`}>Luxury is the ultimate satisfaction</h1>
              <p className="mt-4 text-xs md:text-lg text-gray-700">
                At Sugma Airways, luxury isn&apos;t just a service—it&apos;s a way of life. From the moment you step onboard, you&apos;re enveloped in an atmosphere of sophistication and comfort. Our spacious seating, gourmet dining options, and personalized service redefine air travel, turning every journey into an indulgent experience. Whether you&apos;re flying for business or pleasure, Sugma Airways ensures that you arrive at your destination refreshed, pampered, and inspired. Experience the art of travel like never before, where every detail is designed to exceed your expectations. Luxury is not optional at Sugma Airways—it&apos;s a guarantee.
              </p>
            </div>
          </div>
        </FadeInFromOtherSide>

        <div className='hidden ticket-bg m-auto w-full h-[80vh] lg:flex items-center justify-center' id='tickets'>
          <Carousel className=' w-[70%] lg:w-[80%]'>
            <FadeInWhenVisible>
              <CarouselContent className=' w-fit'>
                <CarouselItem className=' w-fit'>
                  <div className=' bg-white w-[70vw] mx-4 h-[60vh] flex lg:flex-row flex-col items-center justify-between'>
                    <div className={` ${gothic_a1.className} w-[45%] h-full text-left flex justify-center items-center`}>
                      <div className=' w-[90%]'>
                        <h1 className={` uppercase font-bold text-3xl mb-4`}>maldives</h1>
                        <p className={` ${nunito.className} mb-4`}>
                          We are thrilled to have you onboard as you embark on an unforgettable journey to the Maldives. Get ready to immerse yourself in the pristine beauty of turquoise waters, white sandy beaches, and endless sunshine. Whether you&apos;re seeking relaxation, adventure, or a little bit of both, the Maldives has it all.

                          At Sugma Airways, we are dedicated to providing a smooth, comfortable, and enjoyable flight experience, so sit back, relax, and let us take you to paradise. Thank you for choosing us, and we look forward to serving you again!

                          Safe travels and enjoy your stay in the Maldives! 🌴✈️
                        </p>
                        <button className=' bg-slate-200 bg-opacity-50 backdrop-blur-md font-bold py-2 px-4 border border-gray-500 hover:border-2 hover:bg-transparent transition-all duration-300'>Book Ticket ✈️</button>
                      </div>
                    </div>
                    <div className=' w-[45%] h-full maldives bg-red-500'>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className=' w-fit'>
                  <div className=' bg-white w-[70vw] mx-4 h-[60vh] flex items-center justify-between'>
                    <div className={` ${gothic_a1.className} w-[45%] h-full text-left flex justify-center items-center`}>
                      <div className=' w-[90%]'>
                        <h1 className={` uppercase font-bold text-3xl mb-4`}>paris</h1>
                        <p className={` ${nunito.className} mb-4`}>
                          We&apos;re delighted to have you onboard as you make your way to the enchanting city of Paris. Get ready to experience the charm of the &quot;City of Light&quot; with its iconic landmarks, world-class cuisine, and rich culture. From the majestic Eiffel Tower to the historic streets of Montmartre, Paris offers something for everyone—romance, art, fashion, and unforgettable memories.

                          At Sugma Airways, we strive to ensure your journey is as smooth and comfortable as possible. Thank you for choosing us, and we hope you enjoy every moment of your Parisian adventure!

                          Bon voyage and see you in Paris! 🌟✈️
                        </p>
                        <button className=' bg-slate-200 bg-opacity-50 backdrop-blur-md font-bold py-2 px-4 border border-gray-500 hover:border-2 hover:bg-transparent transition-all duration-300'>Book Ticket ✈️</button>
                      </div>
                    </div>
                    <div className=' w-[45%] h-full paris bg-red-500'>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className=' w-fit'>
                  <div className=' bg-white w-[70vw] mx-4 h-[60vh] flex items-center justify-between'>
                    <div className={` ${gothic_a1.className} w-[45%] h-full text-left flex justify-center items-center`}>
                      <div className=' w-[90%]'>
                        <h1 className={` uppercase font-bold text-3xl mb-4`}>new york</h1>
                        <p className={` ${nunito.className} mb-4`}>
                          We&apos;re excited to have you onboard as you journey to the vibrant city of New York. Get ready to dive into the energy of the &quot;City That Never Sleeps,&quot; where iconic landmarks like Times Square, Central Park, and the Statue of Liberty await. Whether you&apos;re exploring world-class museums, enjoying Broadway shows, or simply soaking in the skyline, New York is a city of endless possibilities.

                          At Sugma Airways, your comfort and satisfaction are our top priorities. Thank you for flying with us, and we hope your time in New York is as unforgettable as the city itself!

                          Safe travels, and see you in the Big Apple! 🗽✈️
                        </p>
                        <button className=' bg-slate-200 bg-opacity-50 backdrop-blur-md font-bold py-2 px-4 border border-gray-500 hover:border-2 hover:bg-transparent transition-all duration-300'>Book Ticket ✈️</button>
                      </div>
                    </div>
                    <div className=' w-[45%] h-full ny bg-red-500'>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className=' w-fit'>
                  <div className=' bg-white w-[70vw] mx-4 h-[60vh] flex items-center justify-between'>
                    <div className={` ${gothic_a1.className} w-[45%] h-full text-left flex justify-center items-center`}>
                      <div className=' w-[90%]'>
                        <h1 className={` uppercase font-bold text-3xl mb-4`}>madrid</h1>
                        <p className={` ${nunito.className} mb-4`}>
                          We&apos;re thrilled to have you onboard as you fly to the lively city of Madrid. Get ready to immerse yourself in Spain&apos;s vibrant capital, where historic architecture meets modern flair. From the grandeur of the Royal Palace to the energy of Puerta del Sol and the world-famous Prado Museum, Madrid offers a rich tapestry of culture, art, and delicious cuisine.

                          At Sugma Airways, we&apos;re committed to making your journey as smooth and enjoyable as possible. Thank you for choosing to fly with us, and we hope you enjoy every moment in the heart of Spain!

                          ¡Buen viaje, and welcome to Madrid! 🇪🇸✈️
                        </p>
                        <button className=' bg-slate-200 bg-opacity-50 backdrop-blur-md font-bold py-2 px-4 border border-gray-500 hover:border-2 hover:bg-transparent transition-all duration-300'>Book Ticket ✈️</button>
                      </div>
                    </div>
                    <div className=' w-[45%] h-full madrid bg-red-500'>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </FadeInWhenVisible>
          </Carousel>
        </div>

{/* mobile */}
        <div className=' ticket-bg m-auto w-full h-[80vh] flex items-center justify-center' id='tickets'>
          <Carousel className=' w-[70%] lg:w-[80%]'>
            <FadeInWhenVisible>
              <CarouselContent className=' w-fit'>
                <CarouselItem className='block lg:hidden w-fit'>
                  <div className=' bg-white w-[70vw] mx-4 h-[60vh] maldives text-white flex items-center justify-between'>
                    <div className={` ${gothic_a1.className} w-[80%] h-full text-left flex justify-center items-center`}>
                      <div className=' w-[90%]'>
                        <h1 className={` uppercase font-bold text-3xl mb-4`}>maldives</h1>
                        <p className={` ${nunito.className} mb-4 text-xs`}>
                          We are thrilled to have you onboard as you embark on an unforgettable journey to the Maldives. Get ready to immerse yourself in the pristine beauty of turquoise waters, white sandy beaches, and endless sunshine. Whether you&apos;re seeking relaxation, adventure, or a little bit of both, the Maldives has it all.

                          At Sugma Airways, we are dedicated to providing a smooth, comfortable, and enjoyable flight experience, so sit back, relax, and let us take you to paradise. Thank you for choosing us, and we look forward to serving you again!

                          Safe travels and enjoy your stay in the Maldives! 🌴✈️
                        </p>
                        <button className=' bg-slate-200 bg-opacity-50 backdrop-blur-md font-bold py-2 px-4 border border-gray-500 hover:border-2 hover:bg-transparent transition-all duration-300'>Book Ticket ✈️</button>
                      </div>
                    </div>
                    
                  </div>
                </CarouselItem>
                <CarouselItem className='block lg:hidden w-fit'>
                  <div className=' bg-white w-[70vw] mx-4 h-[60vh] paris text-white flex items-center justify-between'>
                    <div className={` ${gothic_a1.className} w-[80%] h-full text-left flex justify-center items-center`}>
                      <div className=' w-[90%]'>
                        <h1 className={` uppercase font-bold text-3xl mb-4`}>paris</h1>
                        <p className={` ${nunito.className} mb-4 text-xs`}>
                          We&apos;re delighted to have you onboard as you make your way to the enchanting city of Paris. Get ready to experience the charm of the &quot;City of Light&quot; with its iconic landmarks, world-class cuisine, and rich culture. From the majestic Eiffel Tower to the historic streets of Montmartre, Paris offers something for everyone—romance, art, fashion, and unforgettable memories.

                          At Sugma Airways, we strive to ensure your journey is as smooth and comfortable as possible. Thank you for choosing us, and we hope you enjoy every moment of your Parisian adventure!

                          Bon voyage and see you in Paris! 🌟✈️
                        </p>
                        <button className=' bg-slate-200 bg-opacity-50 backdrop-blur-md font-bold py-2 px-4 border border-gray-500 hover:border-2 hover:bg-transparent transition-all duration-300'>Book Ticket ✈️</button>
                      </div>
                    </div>
                    
                  </div>
                </CarouselItem>
                <CarouselItem className='block lg:hidden w-fit'>
                  <div className=' bg-white w-[70vw] mx-4 h-[60vh] ny text-white flex items-center justify-between'>
                    <div className={` ${gothic_a1.className} w-[80%] h-full text-left flex justify-center items-center`}>
                      <div className=' w-[90%]'>
                        <h1 className={` uppercase font-bold text-3xl mb-4`}>new york</h1>
                        <p className={` ${nunito.className} mb-4 text-xs`}>
                          We&apos;re excited to have you onboard as you journey to the vibrant city of New York. Get ready to dive into the energy of the &quot;City That Never Sleeps,&quot; where iconic landmarks like Times Square, Central Park, and the Statue of Liberty await. Whether you&apos;re exploring world-class museums, enjoying Broadway shows, or simply soaking in the skyline, New York is a city of endless possibilities.

                          At Sugma Airways, your comfort and satisfaction are our top priorities. Thank you for flying with us, and we hope your time in New York is as unforgettable as the city itself!

                          Safe travels, and see you in the Big Apple! 🗽✈️
                        </p>
                        <button className=' bg-slate-200 bg-opacity-50 backdrop-blur-md font-bold py-2 px-4 border border-gray-500 hover:border-2 hover:bg-transparent transition-all duration-300'>Book Ticket ✈️</button>
                      </div>
                    </div>
                    
                  </div>
                </CarouselItem>
                <CarouselItem className='block lg:hidden w-fit'>
                  <div className=' bg-white w-[70vw] mx-4 h-[60vh] madrid text-white flex items-center justify-between'>
                    <div className={` ${gothic_a1.className} w-[80%] h-full text-left flex justify-center items-center`}>
                      <div className=' w-[90%]'>
                        <h1 className={` uppercase font-bold text-3xl mb-4`}>madrid</h1>
                        <p className={` ${nunito.className} mb-4 text-xs`}>
                          We&apos;re thrilled to have you onboard as you fly to the lively city of Madrid. Get ready to immerse yourself in Spain&apos;s vibrant capital, where historic architecture meets modern flair. From the grandeur of the Royal Palace to the energy of Puerta del Sol and the world-famous Prado Museum, Madrid offers a rich tapestry of culture, art, and delicious cuisine.

                          At Sugma Airways, we&apos;re committed to making your journey as smooth and enjoyable as possible. Thank you for choosing to fly with us, and we hope you enjoy every moment in the heart of Spain!

                          ¡Buen viaje, and welcome to Madrid! 🇪🇸✈️
                        </p>
                        <button className=' bg-slate-200 bg-opacity-50 backdrop-blur-md font-bold py-2 px-4 border border-gray-500 hover:border-2 hover:bg-transparent transition-all duration-300'>Book Ticket ✈️</button>
                      </div>
                    </div>
                    
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </FadeInWhenVisible>
          </Carousel>
        </div>

        <div className={`${nunito.className} h-[100vh] flex items-center justify-between`} id='contact'>
          <div className=' w-[90%] h-[85%] bg-white mx-auto contact flex items-start justify-between p-10'>
            <div className=' w-full lg:w-[45%]'>
              <FadeInWhenVisible>
                <form action="">
                  <h1 className=' text-5xl text-white uppercase mb-6'>Contact Us !</h1>
                  <div className="relative w-[80%] mb-6">
                    <label

                      className=" text-white font-semibold text-sm mb-6"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className=" placeholder:text-white placeholder:text-sm block w-full py-2 text-sm font-thin text-white bg-transparent border-b border-white focus:outline-none peer"
                      placeholder="John"
                    />
                  </div>

                  <div className="relative w-[80%] mb-6">
                    <label

                      className=" text-white font-semibold text-sm mb-6"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className=" placeholder:text-white placeholder:text-sm block w-full py-2 text-sm font-thin text-white bg-transparent border-b border-white focus:outline-none peer"
                      placeholder="Doe"
                    />
                  </div>

                  <div className="relative w-[80%] mb-6">
                    <label

                      className=" text-white font-semibold text-sm mb-6"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="name"
                      name="name"
                      className=" placeholder:text-white placeholder:text-sm block w-full py-2 text-sm font-thin text-white bg-transparent border-b border-white focus:outline-none peer"
                      placeholder="youremail@gmail.com"
                    />
                  </div>

                  <div className="relative w-[80%] mb-6">
                    <label

                      className=" text-white font-semibold text-sm mb-6"
                    >
                      Message
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className=" placeholder:text-white placeholder:text-sm block w-full py-2 text-sm font-thin text-white bg-transparent border-b border-white focus:outline-none peer"
                      placeholder="Your Message"
                    />
                  </div>

                  <button className='bg-white/10 backdrop-blur-lg border border-white text-white font-semibold py-2 px-4 rounded-full hover:bg-white/0 duration-700'>Contact</button>
                </form>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
