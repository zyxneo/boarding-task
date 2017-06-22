
import React from "react";

export default function Drill (props) {

  let cX = props.cx || 0;
  let cY = props.cy || 0;
  let radius = props.radius || 5;
  let fill = props.fill || "red";
  let stroke = props.stroke || "none";

  return (
    <g className="drill">
      <circle cx={cX} cy={cY} r={radius} fill={fill} stroke={stroke}/>
    </g>
  );

}
