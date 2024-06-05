import React from 'react'
import { useNavigate } from 'react-router-dom';

const LandingVideo = () => {

  const navigate = useNavigate()

    const [showVideo, setShowVideo] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
          setShowVideo(false);
          navigate("/Home")
        }, 10000);
        return () => clearTimeout(timer);
      }, []);

      

  return (
    showVideo && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black z-[1000]">
        <video autoPlay muted className="w-full h-full object-cover">
          <source src="./landingVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  )
}

export default LandingVideo