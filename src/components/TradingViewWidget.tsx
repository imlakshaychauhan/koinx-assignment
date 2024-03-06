import { useState, useEffect, useRef, memo } from "react";
import "./styles/chart.css";

function TradingViewWidget() {
  const container = useRef();


  useEffect(() => {
    // Create a new script element
    const newScript = document.createElement("script");
    newScript.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    newScript.type = "text/javascript";
    newScript.async = true;
    newScript.innerHTML = `
      {
        "width": "900",
        "height": "450",
        "symbol": "BITSTAMP:BTCUSD",
        "interval": "W",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "2",
        "locale": "en",
        "enable_publishing": false,
        "gridColor": "rgba(66, 66, 66, 0.06)",
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;

    // Check if there's an existing script element inside the container
    const existingScript = container.current.querySelector("script");

    // If there's an existing script element, replace it with the new script
    if (existingScript) {
      container.current.replaceChild(newScript, existingScript);
    } else {
      // If no existing script element, simply append the new script
      container.current.appendChild(newScript);
    }
  }, []);

  return (
    <div className="chart">
      <div className="tradingview-widget-container hihi" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}

export default TradingViewWidget;
