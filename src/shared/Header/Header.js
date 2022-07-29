import React from 'react'
import { Outlet } from 'react-router'
import s from './Header.module.scss'
import { GlobalSvgSelector } from '../../pages/Home/components/GlobalSvgSelector'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchInput, typeText } from '../../store/slices/searchInput/serachInputSlice'
import { changeCorentCountry, deleteCountry, fatchData, selectData } from '../../store/slices/data/data'



const Header = () => {

  const searchInput = useSelector(selectSearchInput)
  const data = useSelector(selectData).countres
  const corentCountry = useSelector(selectData).corentCountry

  const dispatch = useDispatch()

  return (
    <div className={s.Header}  >
        <div className={s.wrapper}>
          <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
</div>  
          <div className={s.title}> Եղանակի Տեսություն</div>  
        </div>
        <div className={s.wrapper}></div>
        
          <div className={s.wrapper}>

          <form  
            onSubmit={(e) => {
              e.preventDefault()
              dispatch(fatchData(searchInput))
              dispatch(typeText(''))
            }}
            className="form-wrapper">
          <input value={searchInput} onChange={(e) => dispatch(typeText(e.target.value))} type='text' placeholder='Search'  className='submit'></input>
            <button type='Search' name='Search' className='search'>Search</button>
          </form>
          
          <select value={corentCountry.name} onChange={(e) => dispatch(changeCorentCountry(e.target.value))}>
            {
            data.map(el => <option value={el.name} key={el.name} selected={el.name === corentCountry.name}>{el.name}</option>)
            }
          </select>
          </div>
      <span style={{ cursor: 'pointer' }} onClick={() => dispatch(deleteCountry(corentCountry.name))} ><GlobalSvgSelector id="close" /></span>
       
        <Outlet />
    </div>
  )
}

export default Header