import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'


const Rating = ({ value, text, color }) => {



    return (
        <div className="rating">
            <span>
                {value >= 1 ? <BsStarFill fill={color} /> :
                    value >= 0.5 ? <BsStarHalf fill={color} /> : <BsStar />}
            </span>
            <span>
                {value >= 2 ? <BsStarFill fill={color} /> :
                    value >= 1.5 ? <BsStarHalf fill={color} /> : <BsStar />}
            </span>
            <span>
                {value >= 3 ? <BsStarFill fill={color} /> :
                    value >= 2.5 ? <BsStarHalf fill={color} /> : <BsStar />}
            </span>
            <span>
                {value >= 4 ? <BsStarFill fill={color} /> :
                    value >= 3.5 ? <BsStarHalf fill={color} /> : <BsStar />}
            </span>
            <span>
                {value >= 5 ? <BsStarFill fill={color} /> :
                    value >= 4.5 ? <BsStarHalf fill={color} /> : <BsStar />}
            </span>
            <br />
            <span style={{ fontWeight: 'bold', color: '#077E8C' }}>{text && text}</span>
        </div>
    )
}

export default Rating