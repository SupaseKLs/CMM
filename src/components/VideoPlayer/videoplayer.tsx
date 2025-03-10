"use client"
import { useState, useRef } from "react";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="relative">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full cursor-pointer rounded-lg" // Added border-radius here
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={toggleModal}
        />
      </div>

      {/* Modal for popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={toggleModal}
        >
          <div className="relative w-4/5 h-4/5">
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full rounded-lg" // Added border-radius here for the modal video
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
  