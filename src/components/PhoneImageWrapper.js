import React from "react"

const ImageWrapper = ({ src, alt }) => {
  return (
    <div
      style={{
        width: 300,
        margin: "50px auto",
        paddingRight: 100,
      }}
    >
      <img style={{ width: 300 }} src={src} alt={alt} />
    </div>
  )
}

export default ImageWrapper
