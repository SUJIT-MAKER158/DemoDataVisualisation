import React from 'react'
import Chart from 'react-apexcharts' // Importing the Chart component from react-apexcharts
function CustomerReview() {
    // Defining the data and configuration options for the chart
    const data=
    {
        series: 
        [
            {
                name:"Review",
                data:[10,50,30,90,40,120,100],// Data points for the review chart
            }
        ],
        options:{
            chart:
            {
                type:"area",// Type of chart
                height:"auto",// Automatic height adjustment
            },
            fill:
            {
                colors:["#fff"],// Fill color for the area
                type:"gradient",// Type of fill
            },
            dataLabels:
            {
                enabled:false,// Disabling data labels on the chart
            },
            stroke:{
                curve:"smooth",// Smooth curve for the stroke
                colors:["#ff929f"],// Stroke color

            },
            tooltip:
            {
                x:
                {
                    format:"dd/MM/yy HH:mm",// Format for the x-axis tooltip
                },

            },
            grid:{
                show:false,// Hiding the grid
            },
            xaxis:
            {
                type:"datetime",// x-axis type as datetime
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
                      // Categories for the x-axis

            },
            yaxis:
            {
                show:false// Hiding the y-axis
            },
            toolbar:
            {
                show:false// Hiding the toolbar
            }
        }

    }
  return (
    <div>
      <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default CustomerReview
