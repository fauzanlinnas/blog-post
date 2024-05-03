import React from 'react'
import { Link } from 'react-router-dom'

const AlbumList = ({ albumList, userId }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {albumList.map((album) => (
        <Link
          className="hover:underline font-semibold text-lg text-center border border-gray-400 rounded py-6"
          key={album.id}
          to={`/users/${userId}/album/${album.id}`}
        >
          {album.title}
        </Link>
      ))}
    </div>
  )
}

export default AlbumList