
import React from "react";
import Colors from "../colors";
import style from "./segments.css";
import Drill from "./drill";

export default class Ring extends React.Component {

  constructor() {
    super();
    this.state = {
      "tunnel": {
        radius: 180
      },
      "drills": [
        {
          id: "drill1",
          position: [180,180],
          data: [
            {
              depth: 0,
              position: [0,0]
            }
          ]
        },
        {
          id: "drill2",
          position: [120,120],
          data: [
            {
              depth: 0,
              position: [0,0]
            }
          ]
        },
        {
          id: "drill3",
          position: [240,120],
          data: [
            {
              depth: 0,
              position: [0,0]
            }
          ]
        },
        {
          id: "drill4",
          position: [120,240],
          data: [
            {
              depth: 0,
              position: [0,0]
            }
          ]
        },
        {
          id: "drill5",
          position: [240,240],
          data: [
            {
              depth: 0,
              position: [0,0]
            }
          ]
        }
      ]
    }
  }

  render() {
    let strokeMainColor = Colors.black;
    let radius = this.state.tunnel.radius;
    let padding = 10;
    let ringSvgWidth = (radius + padding) * 2;
    let ringSvgHeight = (radius + padding) * 2;
    let cX = radius;
    let cY = radius;

    return (
      <div class="ring">
        <svg className="ring__svg" version="1.1" viewBox={"-" + padding + " -" + padding + " " + ringSvgWidth  + " " + ringSvgHeight}>
          <circle cx={cX} cy={cY} r={radius} fill="none" stroke={strokeMainColor} strokeWidth="1"/>
          {
            this.state.drills.map(function(item) {
              return <Drill key={item.id} cx={item.position[0]} cy={item.position[1]}/>
            })
          };

        </svg>
      </div>
    )
  }
}
