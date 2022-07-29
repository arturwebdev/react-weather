import React from 'react'
import s from './ThisDayInfo.module.scss'
import { IndicatorSvgSelector } from '../IndicatorSvgSelector'
function ThisDayItems({item}) {
   const {icon_id, name, value} = item
  return (
    <div className={s.item}>
         <div className={s.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
         <div className={s.indicator_name}>{name}</div>
         <div className={s.indicator_value}>{value}</div>
         
    </div>
    

  )
}

export default ThisDayItems