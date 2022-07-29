import React from 'react'


import s from './Popup.module.scss'

import ThisDayItems from '../../../pages/Home/components/ThisDayInfo/ThisDayItems'
import { GlobalSvgSelector } from '../../../pages/Home/components/GlobalSvgSelector';


function Popup() {
   const items = [{
      icon_id: 'temp', 
      name: 'Ջերմաստիճան: ',
      value: '20 թվում է 17 '
    },
    {
      icon_id: 'pressure', 
      name: 'ճնշում:',
      value: '765 մմ սնդիկի սյուն, հարաբերական կայուն '
    },
    {
      icon_id: 'precipitation', 
      name: 'տեղումներ,',
      value: 'առանց տեղումների եղանակ '
    },
    {
      icon_id: 'wind', 
      name: 'քամի-',
      value: '3/ մ/ս հյուսիս-հարավ - թույլ քամի '
    }]
   
  return (
   <>  
   <div className={s.blur}> </div>
    <div className={s.popup}>
       <div className='day'>
         <div className={s.day__temp}>20°</div>
         <div className={s.day__name}>Չորեքշաբթի</div>
         <div className={s.img}><GlobalSvgSelector id='sun'/></div>

         <div className={s.day__time}> Ժամանակ: 
   <span>21:54</span></div>
   <div className={s.day__city}> Լոկացիա: 
   <span>Երևան</span></div>



       </div>
  <div className={s.this__day_info_items}>
    {items.map((item)=> (
<ThisDayItems key={item.icon_id} item={item}/>
    ))}
  </div>
  <div className={s.close}>
   <GlobalSvgSelector id='close'/>
  </div>
    </div>
    </>
  );
};

export default Popup
