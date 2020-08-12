import React from "react";


// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data


// STEP 3 - Creating the JSON object to store the chart configurations


const Pie3D = ({ data }) => {
  
  const chartConfigs = {
    type: "pie3D", // The chart type
    width: "40%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Languages",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data
      data
    }
  };
  return (<ReactFC {...chartConfigs} />);
}

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component


export default Pie3D ;