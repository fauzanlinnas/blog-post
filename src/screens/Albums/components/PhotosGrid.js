import React from 'react'

const PhotosGrid = ({ photos, setActivePhoto }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {photos.map((photo) => (
        <div
          key={photo.id}
          onClick={() => {
            setActivePhoto(photo)
          }}
          className="cursor-pointer flex flex-col items-center hover:bg-gray-200 p-2"
        >
          <img
            src={photo.thumbnailUrl}
            alt={photo.title}
            className="max-w-full h-auto"
          />
          <p className="mt-1 text-center">{photo.title}</p>
        </div>
      ))}
    </div>
  )
}

export default PhotosGrid
