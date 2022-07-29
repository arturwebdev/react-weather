import React from 'react'
import { GlobalSvgSelector } from '../GlobalSvgSelector';
import s from './Days.module.scss'



function  Card  ({data})  {
    const { date, maxTemp,minTemp, icon } = data

  return (
    <div className={s.card}>
    <div className={s.day}>{date}</div>
    {/* <div className={s.day__info}>{day_info}</div> */}
    <div className={s.img}>
      {/* <GlobalSvgSelector id={icon_id} /> */}
      <img src={require(`../../../../assets/icons${icon}`)} alt="" />
    </div>
    <div className={s.temp__day}>MAX {maxTemp}</div>
    <div className={s.temp__day}>MIN {minTemp}</div>
    {/* <div className={s.info}>{info}</div> */}
  </div>
);
};

export default Card