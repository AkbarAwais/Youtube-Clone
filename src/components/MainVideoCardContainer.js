import React, { useEffect, useState } from 'react'
import { PlayCircle } from 'lucide-react'
import { useSelector } from 'react-redux';
import { LIST_VIDEOS_API } from '../constants/constants';
import ShimmerUI from './ShimmerUI';

const videoData = [
    {
        thumbnail: 'https://via.placeholder.com/250x140',
        title: 'Amazing JavaScript Tutorial',
        channel: 'Dev Channel',
        views: '1.2M',
        time: '3 days ago'
    },
    {
        thumbnail: 'https://via.placeholder.com/250x140',
        title: 'React 18 Advanced Concepts',
        channel: 'React Mastery',
        views: '850K',
        time: '1 week ago'
    }
    ,
    {
        thumbnail: 'https://via.placeholder.com/250x140',
        title: 'Machine Learning Roadmap 2024',
        channel: 'Tech Insights',
        views: '500K',
        time: '5 days ago'
    }
    ,
    {
        thumbnail: 'https://via.placeholder.com/250x140',
        title: 'Machine Learning Roadmap 2024',
        channel: 'Tech Insights',
        views: '500K',
        time: '5 days ago'
    }
    ,
    {
        thumbnail: 'https://via.placeholder.com/250x140',
        title: 'Machine Learning Roadmap 2024',
        channel: 'Tech Insights',
        views: '500K',
        time: '5 days ago'
    }
];

const VideoCard = ({ thumbnails, title, channelTitle, viewCount, publishedAt, videoId }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='
          w-[250px]
          cursor-pointer
          transition-transform
          hover:scale-105
          space-y-2
          mb-4
          relative
        '
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='relative'>
                {/* Show video or thumbnail */}
                {isHovered ? (
                    <iframe
                        className='rounded-xl w-full h-[140px] object-cover'
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&modestbranding=1&controls=0&loop=1&rel=0`}
                        title={title}
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                    />
                ) : (
                    <img
                        src={thumbnails.high.url}
                        alt={title}
                        className='rounded-xl w-full h-[140px] object-cover'
                    />
                )}
                {/* Video duration */}
                {!isHovered && (
                    <div
                        className='
                absolute
                bottom-2
                right-2
                bg-black/70
                text-white
                px-2
                rounded
                text-xs
              '
                    >
                        15:30
                    </div>
                )}
            </div>

            <div className='flex space-x-3'>
                <div className='flex-shrink-0'>
                    <PlayCircle className='w-10 h-10 text-white' />
                </div>
                <div>
                    <h3 className='text-sm font-bold line-clamp-2'>{title}</h3>
                    <p className='text-xs text-gray-400'>{channelTitle}</p>
                    <p className='text-xs text-gray-400'>
                        {viewCount} •{' '}
                        {(() => {
                            const now = new Date();
                            const publishedDate = new Date(publishedAt);
                            const difference = now - publishedDate;

                            const minutes = Math.floor(difference / (1000 * 60));
                            const hours = Math.floor(difference / (1000 * 60 * 60));
                            const days = Math.floor(difference / (1000 * 60 * 60 * 24));

                            if (days > 1) {
                                return `${days} days ago`;
                            } else if (hours >= 1) {
                                return `${hours} hours ago`;
                            } else {
                                return `${minutes} minutes ago`;
                            }
                        })()}
                    </p>
                </div>
            </div>
        </div>
    );
};


const MainVideoCardContainer = () => {
    const isMenuCollapsed = useSelector((store) => store.menu.menuState);
    const [youtubeVideos, setYoutubeVideos] = useState([]);

    const fetchYoutubeVideos = async () => {
        const data = await fetch(LIST_VIDEOS_API);
        const json = await data.json();
        setYoutubeVideos(json?.items);
    };

    useEffect(() => {
        fetchYoutubeVideos();
    }, []);

    return (
        <div className={`
            mt-32
            ${isMenuCollapsed ? 'ml-16' : 'ml-60'}
            p-4
            bg-[#0f0f0f]
            text-white
            transition-all
            duration-300
        `}>
            {/* Grid Layout */}
            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    gap-4
                "
            >
                {/* Show Shimmer or Video Cards */}
                {youtubeVideos.length === 0
                    ? videoData.map((video, index) => (
                        <ShimmerUI key={index} {...video} />
                    ))
                    : youtubeVideos.map((video, index) => (
                        <VideoCard
                            key={index}
                            {...video.snippet}
                            {...video.statistics}
                            videoId={video.id}
                        />

                    ))}
            </div>
        </div>
    );
};


export default MainVideoCardContainer
