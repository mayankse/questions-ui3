import React from 'react'
import styles from  './Footer.module.css'
export const Footer = () => {
  return (
    <div className={`position-fixed bottom-0 bg-primary w-100 text-center text-white ${styles.footer}`}>&copy; rights belong to me</div>
  )
}

