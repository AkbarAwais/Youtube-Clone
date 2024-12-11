import React, { forwardRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { LIST_VIDEOS_API } from '../constants/constants';
import ShimmerUI from './ShimmerUI';
import VideoCard from "./VideoCard"

const MainVideoCardContainer = forwardRef(({ }, scrollRef) => {
    const isMenuCollapsed = useSelector((store) => store.menu.menuState);
    const [youtubeVideos, setYoutubeVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState("");
    const [showShimmer, setShimmer] = useState(false);

    const fetchYoutubeVideos = async () => {
        try {
            setShimmer(true);
            const data = await fetch(LIST_VIDEOS_API(nextPageToken));
            const json = await data.json();
            setNextPageToken(json.nextPageToken);
            setShimmer(false);
            setYoutubeVideos((youtubeVideos) => [...youtubeVideos, ...json.items]);
        } catch (error) {
            console.error('Error fetching YouTube videos:', error);
        }
    };
    const handleScroll = () => {
        const scrollTop = scrollRef.current.scrollTop;
        const containerHeight = scrollRef.current.clientHeight;
        const scrollHeight = scrollRef.current.scrollHeight;

        if (scrollTop + containerHeight >= scrollHeight - 1) {
            fetchYoutubeVideos();
        }
    };
    useEffect(() => {
        scrollRef.current.addEventListener("scroll", handleScroll);
        fetchYoutubeVideos();
        return () => {
            scrollRef.current.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div
            className={`mt-14 ${isMenuCollapsed ? 'ml-16' : 'ml-60'} p-4 bg-[#0f0f0f] text-white transition-all duration-300`}
        >
            {/* Grid Layout */}
            <div
                className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          ml-10
          gap-5
        "
            >
                {youtubeVideos?.map((video, index) => (
                    <VideoCard
                        key={index}
                        {...video.snippet}
                        {...video.statistics}
                        videoId={video.id}
                    />
                ))}
                {showShimmer && Array.from({ length: 20 }).map((_, index) => (
                    <ShimmerUI key={index} />
                ))}
            </div>
        </div>
    );
});

export default MainVideoCardContainer;
