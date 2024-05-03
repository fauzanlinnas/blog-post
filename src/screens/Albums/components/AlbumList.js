import React from 'react'
import { Link } from 'react-router-dom'

const AlbumList = ({ albumList, userId }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {albumList.map((album) => (
        <Link
          className="flex items-center justify-center hover:underline font-semibold text-lg text-center border border-gray-400 rounded px-2 py-6"
          key={album.id}
          to={`/user/${userId}/album/${album.id}`}
        >
          {album.title}
        </Link>
      ))}
    </div>
  )
}

export default AlbumList
