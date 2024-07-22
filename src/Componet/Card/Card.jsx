import React, { useState } from 'react';
import { motion ,AnimatePresence } from 'framer-motion';// motion and AnimatePresence from framer-motion to add sophisticated animations to our React components.
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';//we use CircularProgressbar and buildStyles from react-circular-progressbar to create and customize circular progress bars in our React application
import 'react-circular-progressbar/dist/styles.css';//we import 'react-circular-progressbar/dist/styles.css' to include the default styles provided by the react-circular-progressbar library.
import './CircularProgress.css';//some css of CircularProgressBar does not supported by tailwind so that i use css file
import { RxCross2 } from "react-icons/rx";//react icons
import Chart from 'react-apexcharts'//we use Chart from react-apexcharts to create interactive and visually appealing charts in your React application
function Card({id, title, color, barvalue, value, png, series })//card taking props as argument
 {
    const [expanded, setExpanded] = useState(false);//default value is false
    return (
        <AnimatePresence>
            {expanded ? (
                <ExpandedCard 
                    id={id}
                    title={title}
                    color={color}
                    barvalue={barvalue}
                    value={value}
                    png={png}
                    series={series}
                    setExpanded={()=>setExpanded(false)}// Collapse the card when setExpanded is called
                 />
            ) : (
                <CompactCard
                    id={id}
                    title={title}
                    color={color}
                    barvalue={barvalue}
                    value={value}
                    png={png}
                    series={series}
                    setExpanded={()=>{setExpanded(true)}}// Expand the card when setExpanded is called
                />
            )}
        </AnimatePresence>
    );
}

// CompactCard component for the non-expanded state
function CompactCard({ id,title, color, barvalue, value, png,series,setExpanded })
{    const Png=png;
    return(
        <motion.div className={`${color.background} ${color.shadow} shadow-xl flex flex-1 max-xl:w-full max-md:w-180   h-40 w-80 p-4 text-white relative cursor-pointer  rounded-xl
        hover:shadow-none`} layoutId={`expandableCard-${id}`}  onClick={setExpanded} >
       
            <div className='flex-1 flex flex-col justify-end  gap-4 overflow-visible '  >
            <div style={{
                        width: '60px',
                        height: '60px',
                    }}
                    className='circularProgressbar'>
                <CircularProgressbar
                           styles={buildStyles({
                            textSize: '24px', // Adjust text size
                            pathColor: '#ffffff', // Set path color to white
                            textColor: '#ffffff', // Adjust the text color
                            trailColor:'transparent', //  Set trail color
                        })}
                    value={barvalue}
                    text={`${barvalue}%`}

                />
                </div>
                <span className='font-bold circularProgressbar'>{title}</span>
            </div>
            <div className=' flex flex-1 flex-col justify-between items-end'>
             <Png size={22}/>
             <span className='text-xl font-bold'>${value}</span>
             <span className='text-sm '>Last 24 hours</span>
            </div>
        </motion.div>
    )
}

// ExpandedCard component for example purposes
function ExpandedCard({ id,title, color, barvalue, value, png,series,setExpanded  }) {
     const data={
        options:
        {
            chart:
            {
                type:"area",
                height:"auto",

            },
            dropShadow:
            {
                enabled:false,
                enabledOnSeries:undefined,
                top:0,
                left:0,
                blur:3,
                color:"#000",
                opacity:0.35,
            },
            fill:
            {
                colors:['#fff'],
                type:"gradient",

            },
            dataLables:
            {
                enabled:false,
            },
            stroke:{
                curve:"smooth",
                colors:["white"],
            },
            tooltip:
            {
                x:{
                    format:"dd/mm/yy HH:mm"
                },
                grid:
                {
                    show:true,
                },
                xaxis:
                {
                  type:"datetime",
                  categories:
                  [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                  ]
                }
            }
        }
     }
    return (
         //Using layoutId in two div elements allows you to create a shared layout animation
        <motion.div className={`${color.background} ${color.shadow} absolute w-51 h-71 max-xl:top-8 max-md:h-80 max-md:w-full max-md:left-0 max-xl:h-1/2 max-xl:left-20 z-20 left-52 rounded-2xl
        flex flex-col items-center justify-between p-4`}  layoutId={`expandableCard-${id}`}>
        <div className='self-end cursor-pointer  text-white'>
           <RxCross2 onClick={setExpanded} size={24}/> {/* Collapse the card when the close icon is clicked */}
        </div>
        <span className='text-white text-2xl font-bold circularProgressbar'>
            {title}
        </span>
        {/* chart container */}
        <div className='w-61 '>
            <Chart series={series} type='area' options={data.options}/>
        </div>
          <span className='text-white text-sm'>Last 24 hours</span>  
        </motion.div>
    );
}

export default Card;
