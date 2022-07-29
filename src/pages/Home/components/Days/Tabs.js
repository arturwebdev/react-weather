import React from 'react'


import s from './Days.module.scss'



const Tabs = () => {
  const tabs = [
    {
      value: 'Շաբաթվա համար',
    },
    {
      value: '10 օրվա համար',
    },
    {
      value: 'Ամսվա համար',
    },
  ];
  return(
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map(tab => (
          <div className={s.tab } key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Չեղարկել</div>
    </div>
  );
};
export default Tabs