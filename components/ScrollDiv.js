import React, { useState } from 'react'
import AutoScrollContainer from 'auto-scroll-container'
import styles from '../styles/Components.module.css'

export default function ScrollDiv() {
  return (
    <AutoScrollContainer className={styles.scrollstyle}>
      <p>
        Lorem200 
      </p>
      <p>
        Lorem200 
      </p>
      <p>
        Lorem200 
      </p>
      <p>
        Lorem200 
      </p>
      <p>
        Lorem200 
      </p>
      <p>
        Lorem200 
      </p>
      <p>
        Lorem200 
      </p>
      <p>
        Lorem200 
      </p>
    </AutoScrollContainer>
  )
}