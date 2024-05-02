import React from 'react'
import { StateToProps, DispatchToProps } from './container'
import PostDetail from 'screens/Posts/PostDetail'

export default function PostDetailContainer() {
  return (
    <StateToProps.Provider>
      <DispatchToProps.Provider>
        <PostDetail />
      </DispatchToProps.Provider>
    </StateToProps.Provider>
  )
}
