import { Nunito } from 'next/font/google'
import { Gothic_A1 } from "next/font/google";
import { FadeInWhenVisible } from "@/components/FadeInWhenVisible";
import { FadeInFromSide } from "@/components/FadeInFromSide";
import { FadeInFromOtherSide } from "@/components/FadeInFromOtherSide";

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
        <div className=" h-[100vh]">
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
                <h1 className={`${gothic_a1.className} text-3xl md:text-5xl font-light uppercase`}>Comfort is the maximum priority ✈️</h1>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Overlay (Optional) */}
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        </div >
      </FadeInWhenVisible>



      <div className=" h-[80vh] promo-bg w-full">
        <FadeInWhenVisible>
          <div className={` ${nunito.className} w-[100vw] h-[80vh] flex items-center justify-center text-white`}>
            <div className=" w-[50%] mx-auto text-center">
              <h1 className=" text-4xl uppercase mb-4 text-gray-400 font-light w-[80%] mx-auto">We value your time and commitment.</h1>
              <p className=" mb-2 text-lg">
                At Sugma Airways, we deeply value our customers time and are committed to providing a punctual and efficient travel experience. Our dedicated team employs advanced scheduling systems and real-time tracking technology to ensure that flights operate on time.
              </p>
              <p className=" mb-2 text-lg">
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
            className="absolute top-0 left-0 w-[75%] h-full object-cover"
            src="/videos/safety.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay content */}

          <FadeInFromSide>
            <div className="relative z-10 flex items-center justify-end h-full mx-10 ">
              <div className={` ${nunito.className} h-fit w-[40%] bg-white p-5`}>
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
          <FadeInFromOtherSide>
            <div className="firstclassright-bg h-full w-full"></div>
          </FadeInFromOtherSide>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <FadeInFromSide>
            <div className="firstclassleft-bg h-full w-full"></div>
          </FadeInFromSide>
        </div>



        {/* Main content that runs across both sections */}
        <div className="relative z-10 flex justify-center items-center h-full w-[50%] mx-auto">
          <div className="w-3/4 bg-white shadow-lg p-10 text-center">
            <h1 className={` ${nunito.className} text-4xl font-bold text-gray-900 uppercase`}>Luxury is the ultimate satisfaction</h1>
            <p className="mt-4 text-lg text-gray-700">
              At Sugma Airways, luxury isn&apos;t just a service—it&apos;s a way of life. From the moment you step onboard, you&apos;re enveloped in an atmosphere of sophistication and comfort. Our spacious seating, gourmet dining options, and personalized service redefine air travel, turning every journey into an indulgent experience. Whether you&apos;re flying for business or pleasure, Sugma Airways ensures that you arrive at your destination refreshed, pampered, and inspired. Experience the art of travel like never before, where every detail is designed to exceed your expectations. Luxury is not optional at Sugma Airways—it&apos;s a guarantee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
