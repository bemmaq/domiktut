import React from 'react'
import styles from './Container.module.css'

const Container = ({children}) => {
  return (
<>
    <div className={styles.wrapper}>

    </div>

    <div className='w-[1200px] m-auto'>{children}</div>
</>

  )
}

export default Container