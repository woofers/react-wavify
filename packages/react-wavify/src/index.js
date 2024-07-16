import React from "react";
import WaveBase from "./wave";

const defaults = {
  fill: "#fff",
  paused: false,
  height: 20,
  amplitude: 20,
  speed: 0.15,
  points: 3,
};

const Wave = ({ options, ...rest }) => (
  <WaveBase {...Object.assign({}, defaults, options, rest)} />
);

if (__isDev__) {
  Wave.displayName = "Wave";
}

export default Wave;
