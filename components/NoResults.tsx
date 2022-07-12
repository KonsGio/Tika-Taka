import React from 'react'
// 1.We create IProps

interface IProps{
    text:string;
}

// 2.Second way to specify type destucturing text 
const NoResults = ({text} : IProps) => {
  return (
    <div>NoResults</div>
  )
}

export default NoResults