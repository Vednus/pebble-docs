import React from "react"

const VideoPlaylist = ({ videoId }) => {
  return (
    <div
      style={{
        width: "100%",
        margin: "30px auto 0",
        border: "2px solid #3F749B",
      }}
    >
      <iframe
        style={{ display: "block" }}
        width="100%"
        height="360"
        src={
          videoId
            ? `https://www.youtube.com/embed/${videoId}`
            : "https://www.youtube.com/embed/videoseries?list=PLlwZMDZck-30rhh6n7hwnlbnX6ZkRjEN0"
        }
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default VideoPlaylist
