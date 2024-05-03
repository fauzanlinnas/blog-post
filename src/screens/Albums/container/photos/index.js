import React from 'react'
import { StateToProps, DispatchToProps } from './container'
import Photos from 'screens/Albums/Photos'

export default function PhotosContainer() {
  return (
    <StateToProps.Provider>
      <DispatchToProps.Provider>
        <Photos />
      </DispatchToProps.Provider>
    </StateToProps.Provider>
  )
}
