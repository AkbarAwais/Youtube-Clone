import React, { useEffect, useState } from 'react'
import { COMMENT_API } from '../../constants/constants'

const CommentsView = ({ videoId }) => {
    const [nextPageToken, setNextPageToken] = useState('');
    const [comments, setComments] = useState([]);
    const fetchComments = async () => {
        const data = await fetch(COMMENT_API(videoId));
        const json = await data.json();
        setNextPageToken(json.nextPageToken);
        console.log(json);
        setComments(json.items)
    }
    useEffect(() => {
        fetchComments();
    }, [])

    return (
        <div className=''>
            {comments.map((comment) =>
                <ul>
                    <item>{comment.snippet.topLevelComment.snippet.textDisplay}</item>
                </ul>
            )}
        </div>
    )
}

export default CommentsView
