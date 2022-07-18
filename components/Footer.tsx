import React from 'react';
import { NextPage } from 'next';
import { footer} from '../utils/constants';


const Footer: NextPage = () => (
 
    <div className='mt-6 hidden xl:block text-gray-500 text-md '>
      <p>
        Click to enter {footer}
      </p> 
     <p className='text-gray-500 text-sm mt-5'>2022 Tika Taka Created by Konstantinos Giovanitsas</p>
    </div>

)

export default Footer