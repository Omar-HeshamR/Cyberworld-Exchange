import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
  AiTwotoneStar,
  AiOutlineGlobal,
  AiOutlineFieldTime,
  AiOutlineCreditCard,
  AiOutlineCluster,
} from 'react-icons/ai' 
import { BiTrendingUp } from 'react-icons/bi'
import { RiCoinsLine, RiNotification3Line } from 'react-icons/ri'
import { MdWeb } from 'react-icons/md'
import { BsPersonPlus } from 'react-icons/bs'

export const navItems = [
  {
    title: 'Dashboard',
    icon: <AiOutlinePieChart />,
  },
  {
    title: 'Watchlist',
    icon: <AiTwotoneStar />,
  },
  {
    title: 'Big News',
    icon: <AiOutlineGlobal />,
  },
  {
    title: 'Special Offers',
    icon: <AiOutlineFieldTime />,
  },
  {
    title: 'CyberWorld Card',
    icon: <AiOutlineCreditCard />,
  },
  {
    title: 'Learn and earn',
    icon: <AiOutlineCluster />,
  },
  {
    title: 'Notifications',
    icon: <RiNotification3Line />,
  },
  {
    title: 'Refer Friends',
    icon: <BsPersonPlus />,
  },
  {
    title: 'Send a gift',
    icon: <AiOutlineGift />,
  },
]

