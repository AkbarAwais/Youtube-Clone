import React, { useEffect } from 'react'
import { VIDEO_API } from '../../constants/constants'
import { useNavigate, useSearchParams } from 'react-router'
import CommentsView from './CommentsView';

const MainVideoContent = () => {
    const [params] = useSearchParams();
    const videoId = params.get('v');
    const navigate = useNavigate();
    useEffect(() => {
        if (!videoId) {
            navigate('/');
        }
    }, [videoId, navigate]);
    return (
        <div>
            <div className='p-10 ml-32 mt-10 rounded-lg'>
                <iframe
                    className='rounded-lg aspect-video w-[1050px] h-[600px]'
                    src={VIDEO_API(videoId)}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>
            <div>
                <CommentsView videoId={videoId} />
            </div>
        </div>
    )
}

export default MainVideoContent
