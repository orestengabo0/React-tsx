import { set } from 'mongoose';
import React, { ReactNode, useState } from 'react'
import { BsHeart , BsHeartFill} from "react-icons/bs";
interface Props{
    onClick: () => void
}
const Like = ({onClick}: Props) => {
    const [clicked, setClicked] = useState(true)
    const toggle = () => {
        setClicked(!clicked)
            onClick()
    }
    if(clicked) return <BsHeart  size={20} onClick={toggle}/>
    return <BsHeartFill color='#ff6b81' size={20} onClick={toggle}/>
}

export default Like