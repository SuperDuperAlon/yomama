import React from 'react'

interface PropsCard {
    flower: Flower;
}

const CardFlower = (flower: PropsCard) => {
    return (
        <>
            <div>
                <img src="" alt="" />
                <div>
                    {flower.flower.name}
                </div>
                <div>
                    {flower.flower.price}
                </div>
            </div>
        </>

    )
}

export default CardFlower