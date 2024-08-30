import { VideoCard } from "./VideoCard";

const videos = [
  {
    image: "thumb.jpg",
    title: "Howt to Learn coding in 30 days",
    avatar: "icon.jpg",
    author: "John Doe",
    views: "100k",
    timestamp: "2 days ago"
  },
  {
    image: "thumb.jpg",
    title: "Howt to Learn coding in 30 days",
    avatar: "icon.jpg",
    author: "John Doe",
    views: "100k",
    timestamp: "2 days ago"
  },
  {
    image: "thumb.jpg",
    title: "Howt to Learn coding in 30 days",
    avatar: "icon.jpg",
    author: "John Doe",
    views: "100k",
    timestamp: "2 days ago"
  },
  {
    image: "thumb.jpg",
    title: "Howt to Learn coding in 30 days",
    avatar: "icon.jpg",
    author: "John Doe",
    views: "100k",
    timestamp: "2 days ago"
  },
  {
    image: "thumb.jpg",
    title: "Howt to Learn coding in 30 days",
    avatar: "icon.jpg",
    author: "John Doe",
    views: "100k",
    timestamp: "2 days ago"
  },
];
const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {videos.map(
        (video) => <div className="p-2">
          <VideoCard 
            image={video.image}
            title={video.title}
            avatar={video.avatar}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}></VideoCard>
        </div>
      )}
    </div>
  );
};

export default VideoGrid;