export const LIST_VIDEOS_API = (nextPageToken) => `https://youtube.googleapis.com/youtube/v3/videos?pageToken=${nextPageToken}&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_API_KEY}`;
export const VIDEO_API = (videoId) => `https://www.youtube.com/embed/${videoId}?si=hQOdHQWm0xz1EdeH?&autoplay=1&mute=1&loop=1&rel=0&modestbranding=1`;
export const COMMENT_API = (videoId) => `https://www.googleapis.com/youtube/v3/commentThreads?&part=snippet,replies&videoId=${videoId}&key=${process.env.REACT_APP_API_KEY}`
