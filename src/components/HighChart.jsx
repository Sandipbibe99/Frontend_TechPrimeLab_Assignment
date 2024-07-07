import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { BASE_URL } from '../Json/Json';

const HighChart = () => {

  const [graphData, setGraphData] = useState({
    categories: [],
    percentageArray: [],
    series: []
  });

  const getChartData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/project/getCountByStatusAndDepartment`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include"
      });
      const data = await response.json();
      if (response.ok) {
        setGraphData(data.result)
        console.log(data);

      } else {
        console.log(data);
      }
    } catch (error) {
      console.log("Internal server error" + error);
    }
  }
  useEffect(() => {
    getChartData()
  }, [])



  const xAxisLabels = graphData.categories.map((category, index) => {
    return `<span style="fontWeight : 900">${graphData.percentageArray[index]}</span> <br> ${category} `;
  });

  const options = {
    chart: {
      type: 'column',
      height: 380,
      borderRadius: 10,
      padding: 20 ,
      spacing: [30, 10, 10, 10]
    },
    title: {
      text: '',
      align: 'left'
    },
    xAxis: {
      categories: xAxisLabels
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