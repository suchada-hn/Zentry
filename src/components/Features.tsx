import { TiLocationArrow } from "react-icons/ti";
import BentoTilt from "./Tilt";
import BentoCard from "./Card";

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Into the Energy Revolution
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Experience a comprehensive ecosystem of energy solutions that converge into 
          an intelligent, sustainable living environment for your world.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              Total Sol<b>u</b>tion
            </>
          }
          description="A comprehensive energy management system, integrating ERV technology with smart building solutions for optimal efficiency."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                ERV Syst<b>e</b>m
              </>
            }
            description="Energy Recovery Ventilation technology that provides fresh air while maintaining energy efficiency and indoor air quality."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                Smart H<b>o</b>me
              </>
            }
            description="Intelligent building automation that optimizes energy consumption while enhancing comfort and air quality."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                Digital Tw<b>i</b>ns
              </>
            }
            description="Real-time energy monitoring and optimization through advanced digital twin technology and data analytics."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re inn<b>o</b>vations c<b>o</b>ming.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;