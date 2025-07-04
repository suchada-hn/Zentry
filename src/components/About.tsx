import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    });

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className="font-general text-sm uppercase md:text[10px]">Welcome to Coral Life</h2>

                <AnimatedTitle title="Breathe b<b>e</b>tter. Live sm<b>a</b>rter. <br /> Build a he<b>a</b>lthier future" containerClass="mt-5 !text-black text-center" />

                <div className="about-subtext">
                    <p>The future of sustainable living begins with clean energy</p>
                    <p>Coral Life transforms spaces into healthier, more efficient environments</p>
                </div>
            </div>

            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img
                        src="img/well-1.jpg"
                        alt="Healthy Living Environment"
                        className="absolute left-0 top-0 size-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default About