'use client';

import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

const VideoSection = () => {
  const thumbnailUrl = '/scrims-thumbnail.jpg';
  const videoUrl = 'https://www.instagram.com/reel/C6n77yhLhW1/?igsh=YzN5MHB2MjNleTI0';

  return (
    <div className="relative aspect-video">
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative cursor-pointer group block"
      >
        <Image
          width={1280}
          height={720}
          src={thumbnailUrl}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/40 transition-colors rounded-lg">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/90 rounded-full group-hover:bg-white transition-colors">
            <FaPlay className="text-[#005792] w-6 h-6 md:w-8 md:h-8 ml-1" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default VideoSection;