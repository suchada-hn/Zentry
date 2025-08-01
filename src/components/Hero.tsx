import { useEffect, useRef, useState } from "react"
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef<HTMLVideoElement | null>(null);

    const nextVideoIndex = (currentIndex % totalVideos) + 1;
    const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;

    const handleMiniVideoClick = () => {
        setHasClicked(true);
        setCurrentIndex(nextVideoIndex);
    }

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    useEffect(() => {
        if (loadedVideos === totalVideos - 1) {
            setIsLoading(false);
        }
    }, [loadedVideos])

    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-video', { visibility: "visible" })

            gsap.to('#next-video', {
                transformOrigin: "center center",
                scale: 1,
                width: "100%",
                height: "100%",
                duration: 1,
                ease: "power1.inOut",
                onStart: () => {
                    const playPromise = nextVideoRef.current?.play();
                    if (playPromise !== undefined) {
                        playPromise.catch((e) => console.log("Playback error:", e));
                    }
                },
            })

            gsap.from('#current-video', {
                transformOrigin: "center center",
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true })

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: "0 0 40% 10%",
        })

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: "0 0 0 0",
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true
            }
        })
    })

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            {isLoading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    <div className="three-body">
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                    </div>
                </div>
            )}
            <div id="video-frame" className="relative z-10 overflow-hidden rounded-lg bg-blue-75 h-dvh w-screen">
                <div className="mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer rounded-lg overflow-hidden">
                    <div className="origin-center scale-50 opacity-0 transistion-all duration-500 ease-in hover:scale-100 hover:opacity-100" onClick={handleMiniVideoClick}>
                        <video
                            ref={nextVideoRef}
                            src={getVideoSrc(nextVideoIndex)}
                            loop
                            muted
                            id="current-video"
                            className="size-64 origin-center object-cover object-center scale-150"
                            onLoadedData={handleVideoLoad}
                        />
                    </div>
                </div>
                <video
                    ref={nextVideoRef}
                    src={getVideoSrc(currentIndex)}
                    loop
                    muted
                    id="next-video"
                    className="absolute-center invisible z-20 absolute size-64 object-cover object-center"
                    onLoadedData={handleVideoLoad}
                />
                <video
                    src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                    autoPlay
                    loop
                    muted
                    className="absolute left-0 top-0 size-full object-cover object-center"
                    onLoadedData={handleVideoLoad}
                />

                <h1 className="special-font hero-heading bottom-5 absolute z-40 right-5 text-blue-75">
                    c<b>o</b>ol
                </h1>

                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="special-font hero-heading text-blue-100">the fut<b>u</b>re is</h1>
                        <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                            Clean Energy Solutions <br /> Thailand's No.1 Provider
                        </p>
                        <Button id="discover-solutions" title="Discover Solutions" leftIcon={<TiLocationArrow />} containerClass="!bg-yellow-300 flex-center gap-1" />
                    </div>
                </div>
            </div>

            <h1 className="special-font hero-heading bottom-5 absolute right-5 text-black">
                c<b>o</b>ol
            </h1>
        </div>
    )
}

export default Hero;