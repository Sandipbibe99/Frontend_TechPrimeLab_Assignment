import React, { useMemo, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HighChart = () => {

  const [graphData , setGraphData] = useState("")

  const getChartData = useMemo(async () => {
    try {
        const response = await fetch("https://backend-techprimelab-assignment.onrender.com/api/project/getCountByStatusAndDepartment", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
            credentials: "include"
        });
        const data = await response.json();
        if (response.ok) {
          setGraphData(data);
          console.log("fdfdfddf" , data)
        } else {
            console.log(data);
        }
    } catch (error) {
        console.log("Internal server error" + error);
    }
} , [])

// const totalData = graphData.series.find(series => series.name === 'total').data;
// const percentages = totalData.map((total, index) => {
//   if (total === 0) {
//     return "0.00"; 
//   }
//   const closed = graphData.series.find(series => series.name === 'closed').data[index];
//   return ((closed / total) * 100).toFixed(2);;
// });


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
        categories: graphData.categories
        // graphData.categories.map((category, index) => ` <span style="fontWeight : 1000"> </span><br/> ${category} `)
      },
      // ${percentages[index]}
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
        
        series: graphData.series
      };
  return (
    <div className='w-2/5 sm:w-[95vw] ml-20  mt-1 sm:ml-2'>

      <h1 className='mb-3 text-lg sm:text-base font-medium fontfamilyMon '>Department wise - Total Vs Closed</h1>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default HighChart