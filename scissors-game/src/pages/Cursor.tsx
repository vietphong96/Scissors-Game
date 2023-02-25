import styles from '../styles/Cursor.module.css'
import {useEffect, useRef} from "react";


const Cursor = () => {

  useEffect(() => {
    const cursor: HTMLElement | null = document.querySelector('.cursor')
    if (cursor) {
      const handleMouseMove = (evt: MouseEvent) => {
        let x = evt.pageX
        let y = evt.pageY
        cursor.style.top = y + 'px'
        cursor.style.left = x + 'px'
        cursor.style.display = 'block'
      }

      const handleMouseOut = () => {
        cursor.style.display = 'none'
      }

      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseover', handleMouseOut)

      return () => {
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseout', handleMouseOut)
      }
    }
  }, [])

  return <div style={styles} className={`${styles.cursor} cursor`}></div>
}

export default Cursor


