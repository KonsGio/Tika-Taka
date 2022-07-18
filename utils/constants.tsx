import { BsCode, BsEmojiLaughing, BsEmojiSunglasses } from 'react-icons/bs';
import { GiAndroidMask, GiCakeSlice, GiGalaxy, GiLipstick } from 'react-icons/gi';
import { FaPaw, FaMedal, FaGamepad, FaFlushed } from 'react-icons/fa';

export const topics = [
  {
    name: 'coding',
    icon: <BsCode />,
  },
  {
    name: 'gaming',
    icon: <FaGamepad />,
  },
  {
    name: 'food',
    icon: <GiCakeSlice />,
  },
  {
    name: 'animals',
    icon: <FaPaw />,
  },
  {
    name: 'sports',
    icon: <FaMedal />,
  },
  {
    name: 'awesome',
    icon: <FaFlushed />,
  },
  {
    name: 'funny',
    icon: <BsEmojiLaughing />,
  },
  {
    name: 'anime',
    icon: <GiAndroidMask />,
  },
  {
    name: 'WTF',
    icon: <FaMedal />,
  },
];

const github = <a href='https://github.com/KonsGio' target='_blank'>Github</a>
const portfolio = <a href='https://www.kgio.dev' target='_blank'>My Portfolio</a>
const linkedin = <a href='https://www.linkedin.com/in/konstantinos-giovanitsas-10b511150/' target='_blank'>LinkedIn</a>

export const footerList1 = [portfolio,' | ',github,' | ',linkedin ]
