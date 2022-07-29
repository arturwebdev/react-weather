import React from 'react'
import Card from './Card';

import { useSelector } from 'react-redux'
import { selectData } from '../../../../store/slices/data/data'

import s from './Days.module.scss'
import Tabs from './Tabs';




const Days = () => {
    // const days =  [
    //     {
    //       day: 'Այսօր',
    //       day_info: 'Օգոստոսի 8 ',
    //       icon_id: 'sun',
    //       temp_day: '+18',
    //       temp_night: '+15',
    //       info: 'Արև',
    //     },
    //     {
    //       day: 'վաղը',
    //       day_info: 'Օգոստոսի 29',
    //       icon_id: 'small_rain_sun',
    //       temp_day: '+18',
    //       temp_night: '+15',
    //       info: 'թույլ տեղումներ անձրևի տեսքով',
    //     },
    //     {
    //       day: 'Չորեքշաբթի',
    //       day_info: 'Օգոստոսի 30',
    //       icon_id: 'small_rain',
    //       temp_day: '+18',
    //       temp_night: '+15',
    //       info: 'թույլ տեղումներ',
    //     },
    //     {
    //       day: 'հինգշաբթի',
    //       day_info: 'Հուլիսի 1',
    //       icon_id: 'mainly_cloudy',
    //       temp_day: '+18',
    //       temp_night: '+15',
    //       info: 'Արև',
    //     },
    //     {
    //       day: 'ՈՒրբաթ',
    //       day_info: 'Հուլիսի 2',
    //       icon_id: 'sun',
    //       temp_day: '+18',
    //       temp_night: '+15',
    //       info: 'Արև',
    //     },
    //     {
    //       day: 'Շաբաթ',
    //       day_info: 'Հուլիսի 3',
    //       icon_id: 'sun',
    //       temp_day: '+18',
    //       temp_night: '+15',
    //       info: 'Արև',
    //     },
    //     {
    //       day: 'Կիրակի',
    //       day_info: 'Հուլիսի 4',
    //       icon_id: 'sun',
    //       temp_day: '+18',
    //       temp_night: '+15',
    //       info: 'արև',
    //     },
    //   ];
  const days = useSelector(selectData).corentCountry.forecast
  return (
      <>  
      {/* <Tabs /> */}
  <div className={s.days}>

{days.map((data, idx) => (
    <Card key={idx} data={data} />
))}
  </div>
  </>
  )
}

export default Days