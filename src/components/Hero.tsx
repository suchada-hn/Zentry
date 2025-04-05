const Hero = () => {
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-10 overflow-hidden rounded-lg bg-blue-75 h-dvh w-screen">
            <div className="mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer rounded-lg overflow-hidden">
                <div>
                    MinVideoPlayer
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero