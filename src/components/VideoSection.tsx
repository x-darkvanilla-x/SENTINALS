'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Replace these with your actual video details
  const thumbnailUrl = '/scrims-thumbnail.jpg';
  const videoUrl = 'https://www.youtube.com/watch?v=Yozxh8e-E4k'; // Replace with your video URL

  return (
    <div className="relative aspect-video">
      {!isPlaying ? (
        // Thumbnail with play button
        <div 
          className="relative cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          <Image 
            src={thumbnailUrl} 
            alt="Video thumbnail" 
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/40 transition-colors rounded-lg">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/90 rounded-full group-hover:bg-white transition-colors">
              <FaPlay className="text-[#005792] w-6 h-6 md:w-8 md:h-8 ml-1" />
            </div>
          </div>
        </div>
      ) : (
        // Embedded video player
        <iframe
          className="w-full h-full rounded-lg"
          src={videoUrl}
          title="Video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoSection;