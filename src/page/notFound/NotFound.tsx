import React from 'react'

import style from "./style.module.scss"

const NotFound = () => {
  return (
    <div className={style.error}>
      <h2 className={style.error__title}>404</h2>
      <p className={style.error__text}>
        такой страницы нет. <br />
        <span className={style.error__span}>Иногда такое бывает</span>
      </p>
    </div>
  )
}

export default NotFound
