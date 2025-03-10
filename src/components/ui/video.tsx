"use client"
import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Settings } from 'lucide-react';

interface VideoProps {
  src: string;
  className?: string;
  thumbnail?: string;
}

export const Video: React.FC<VideoProps> = ({ src, className = '', thumbnail }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
      setCurrentTime(video.currentTime);
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', () => {
      setDuration(video.duration);
    });

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const progress = progressRef.current;
    if (!video || !progress) return;

    const rect = progress.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    video.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.volume = volume || 1;
      setIsMuted(false);
    } else {
      video.volume = 0;
      setIsMuted(true);
    }
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  return (
    <div 
      className="relative group rounded-lg overflow-hidden bg-black"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {thumbnail && !isPlaying && (
        <img 
          src={thumbnail} 
          alt="Video thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${className}`}
        loop
        playsInline
        poster={thumbnail}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div 
        className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Progress bar */}
        <div 
          ref={progressRef}
          className="relative h-1 bg-gray-600 cursor-pointer"
          onClick={handleProgressClick}
        >
          <div 
            className="absolute h-full bg-red-600"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls */}
        <div className="p-4 flex items-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white" />
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-white" />
              ) : (
                <Volume2 className="w-6 h-6 text-white" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-20 accent-red-600"
            />
          </div>

          <div className="text-white text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>

          <div className="flex-grow" />

          <button
            onClick={() => {}}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <Settings className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <Maximize2 className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};