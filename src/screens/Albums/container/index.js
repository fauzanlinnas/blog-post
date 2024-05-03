import React from 'react'
import { StateToProps, DispatchToProps } from './container'
import Albums from '..'

export default function AlbumsContainer() {
  return (
    <StateToProps.Provider>
      <DispatchToProps.Provider>
        <Albums />
      </DispatchToProps.Provider>
    </StateToProps.Provider>
  )
}
