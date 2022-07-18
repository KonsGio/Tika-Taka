import React from 'react';
import { footerList1,footerList2, footerList3   } from '../utils/constants';


  // we map through all footer items
  // in typescript we spacify which type is the item element it is an array of strings   const List = ({items} : {items: string[] }) => {
  const List = ({items, mt} : {items: string[], mt:boolean }) => (
    <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
        {items.map((item) => (
          <p key={item} className='text-gray-400 text-sm hover:underline cursor-pointer'>
            {item}
          </p>
        ))}
      </div>
)

  const Footer = () => {
  return (
    <div className='mt-6 hidden xl:block'>
      <List items={footerList1} mt={false}/>
      <p className='text-gray-400 text-sm mt-5'>2022 Tika Taka Created by Konstantinos Giovanitsas</p>
    </div>
  )
}

export default Footer