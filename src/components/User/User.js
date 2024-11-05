import React from 'react'
import styles from './User.module.css'

export default function User({name,location}) {
  
  return (
    <div className={styles.User}>
      <ul>
        <li>{name} {location}</li>
      </ul>
    </div>
  )
}

