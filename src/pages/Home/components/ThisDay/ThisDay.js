import React from 'react'
import s from './ThisDay.module.scss'
import { GlobalSvgSelector } from '../GlobalSvgSelector'
import { useSelector } from 'react-redux'
import { selectData } from '../../../../store/slices/data/data'


const ThisDay = () => {
  const [dateState, setDateState] = React.useState(new Date());
  React.useEffect(() => {
         setInterval(() => setDateState(new Date()), 1000);
  }, []);


  
  const data = useSelector(selectData)
  return (
  <div className={s.this__day}>

 <div className={s.top__block}>

   <div className={s.top_block_wrapper}> 
   <div className={s.this__temp}>{Math.floor(data.corentCountry.temp)}°</div>
   <div className={s.this__day_name}>Այսօր</div>
   </div>
   {/* <GlobalSvgSelector id="sun" /> */}
   <img src={require(`../../../../assets/icons${data.corentCountry.icon}`)} alt="" />
 </div>
 <div className={s.bottom__block}>
   <div className={s.this__time}> Ժամանակ: 
   <span>
              {' '}
              {dateState.toLocaleDateString('en-Am', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })},
               {dateState.toLocaleString('en-Am', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            </span></div>
   <div className={s.this__city}>{data.corentCountry.location}
   <span>{data.corentCountry.name}</span></div>
 </div>


  </div>
  )
}

export default ThisDay