import React from 'react'

import { LinkButton } from 'components'

const User = ({ userData, onSelectUser }) => {
  return (
    <div
      key={userData.id}
      className="flex justify-between flex-col md:flex-row p-2 border border-gray-200 rounded-xl shadow space-y-1"
    >
      <div>
        <p className="text-xl font-medium">{userData.name}</p>
        <p>{userData.email.toLowerCase()}</p>
      </div>

      <div className="space-y-2">
        <LinkButton
          href={`/user/${userData.id}/posts`}
          variant="primary"
          title="Posts"
          onClick={() => onSelectUser(userData.name)}
        />
        <LinkButton
          href={`/user/${userData.id}/album`}
          variant="secondary"
          title="Albums"
          onClick={() => onSelectUser(userData.name)}
        />
      </div>
    </div>
  )
}

const UserList = ({ userList, onSelectUser }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {userList.map((userData) => (
        <User
          userData={userData}
          key={userData.id}
          onSelectUser={onSelectUser}
        />
      ))}
    </div>
  )
}

export default UserList
