import React from 'react'
import classes from './Battery.module.scss'

const Battery = ({ item }) => {
  const colors = (item) => {
    return item < 1
      ? []
      : item >= 1 && item <= 3
      ? ['#BD1616']
      : item >= 4 && item <= 5
      ? ['#BD8E16', '#BD8E16']
      : item >= 6 && item <= 9
      ? ['#9CBD16', '#9CBD16', '#9CBD16']
      : ['#23BD16', '#23BD16', '#23BD16', '#23BD16']
  }

  return (
    <div className={classes['battery']}>
      {colors(item).map((color, index) => (
        <div
          style={{ background: color }}
          key={index}
          className={classes['battery__item']}
        />
      ))}
    </div>
  )
}

export default Battery
