import React from 'react'
import { CardsData } from '../../Data/CardData'//cards data
import Card from '../Card/Card'// Importing the Card component
function Cards() {
  return (
    <React.Fragment>
      <div className='max-xl:flex-col flex gap-3'>{/* Flex container with gap between cards */}
        {CardsData.map((card,id)=>
        {// Iterating over the CardsData array
            return(
                <React.Fragment>
                    <div className='w-full'>
                        <Card
                        // props
                        id={id}
                        title={card.title}
                        color={card.color}
                        barvalue={card.barvalue}
                        value={card.value}
                        png={card.png}
                        series={card.series}
                        />
                    </div>
                </React.Fragment>
            )
        })}
      </div>
    </React.Fragment>
  )
}

export default Cards
