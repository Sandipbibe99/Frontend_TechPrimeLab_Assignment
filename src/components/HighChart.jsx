import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HighChart = () => {
    const options = {
        chart: {
          type: 'column',
          height: 380,
          borderRadius : '10px',
          padding : "20px",
          spacing: [30, 10, 10, 10]
        },
        title: {
          text: '',
          align: 'left'
      },
        xAxis: {
          categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
         
         
        },
        yAxis: {
          min: 0,
          title: {
            text: ''
          }
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            name: 'Corn',
            data: [406292, 260000, 107000, 68300, 27500, 14500]
          },
          {
            name: 'Wheat',
            data: [51086, 136000, 5500, 141000, 107180, 77000]
          }
        ]
      };
  return (
    <div className='w-2/5 sm:w-[95vw] ml-20  mt-1 sm:ml-2'>

      <h1 className='mb-3 text-lg sm:text-base font-medium fontfamilyMon '>Department wise - Total Vs Closed</h1>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default HighChart