import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const values = props.dataPoints.map((data) => data.value);
  const maxValue = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
