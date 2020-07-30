import React from "react";
import GaugeChart from "react-gauge-chart";
import "./WeatherWidget.css";
import { useRocket } from "../api/Rocket";
import clear from "../assets/clear.png";
import danger from "../assets/danger.png";

const chartStyle = {
  height: 250
};

/**
 *  This is the Weather widget for the Dashboard.
 *  It renders the wind speed/direction and cloud coverage
 *  It uses weather conditions stored by the Weather page.
 */
const WeatherWidget = () => {
  const [rocket] = useRocket();
  return (
    <div className="WeatherWidget">
      <GaugeChart
        id="gauge-chart1"
        nrOfLevels={420}
        arcsLength={[0.3, 0.5, 0.2]}
        colors={["#5BE12C", "#F5CD19", "#EA4228"]}
        percent={Number(rocket.wind)}
        arcPadding={0.02}
        formatTextValue={value => value + " m/s"}
        style={chartStyle}
      />
      <div className="Coverage">
        {rocket.conditions === "clear" ? (
          <img src={clear} alt="Good Weather Icon" />
        ) : (
          <img src={danger} alt="Dangerous Weather Icon" />
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;
