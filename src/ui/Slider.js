
import React from "react";
import ReactDOM from "react-dom";
import Colors from "../colors";

export default class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      dragging: false,
      pos: {
        x: 0,
        y: 0
      },
      rel: {
        x: 0,
        y: 0
      },
      boundaries: {
        top: 0,
        bottom: 0
      }
    };
  }

  componentDidMount () {
    document.addEventListener("mouseup", this.stopDrag.bind(this));
  }

  onMouseMove (e) {
    if (!this.state.dragging) {return;}
    e.stopPropagation();
    e.preventDefault();

    let top = this.state.boundaries.top;
    let bottom = this.state.boundaries.bottom;
    let relY = this.state.rel.y;
    let pos = this.state.pos;

    // only slide inside of boundaries
    if (e.pageY - relY > top && e.pageY - relY < bottom) {
      pos.x = e.pageX - this.state.rel.x;
      pos.y = e.pageY - relY;
      this.setState({
        pos
      });
    }
    ReactDOM.findDOMNode(this.refs.sliderHandle).setAttribute("y", pos.y);

    // calculate the value returned
    let min = this.props.min || 0;
    let max = this.props.max || 10;
    let step = this.props.step || 1;
    let steps = (max - min) / step;

    let value = Math.round(pos.y / (bottom - top) * steps);
    this.props.onSlide(value);
  }

  startDrag (e) {
    // get initial boundaries
    let top = Number(ReactDOM.findDOMNode(this.refs.sliderBar).getAttribute("y"));
    let bottom = top + Number(ReactDOM.findDOMNode(this.refs.sliderBar).getAttribute("height"));
    this.setState({
      dragging: true,
      rel: {
        x: e.pageX - ReactDOM.findDOMNode(this.refs.sliderHandle).getAttribute("x"),
        y: e.pageY - ReactDOM.findDOMNode(this.refs.sliderHandle).getAttribute("y")
      },
      pos: {
        x: Number(ReactDOM.findDOMNode(this.refs.sliderHandle).getAttribute("x")),
        y: Number(ReactDOM.findDOMNode(this.refs.sliderHandle).getAttribute("y"))
      },
      boundaries: {
        top: top,
        bottom: bottom
      }
    });
    document.addEventListener("mousemove", this.onMouseMove.bind(this));
  }

  stopDrag (e) {
    this.setState({
      dragging: false
    });
    document.removeEventListener("mousemove", this.onMouseMove.bind(this));
  }

  render() {
    let min = this.props.min || 0;
    let max = this.props.max || 10;
    let step = this.props.step || 1;
    let steps = (max - min) / step;
    let value = this.props.value || 1;

    let barBgColor = Colors.grayLightest;
    let barColor = Colors.grayLighter;
    let width = 50;
    let height = 300;
    let padding = 10;
    let labelWidth = 15;
    let sliderSvgWidth = labelWidth + width + padding * 2;
    let sliderSvgHeight = labelWidth + height + padding * 2;

    let barWidth = 6;
    let labelYShift = 6;
    let handleWidth = 20;
    let handleHeight = 10;
    let handleColor = Colors.green;

    return (
      <svg className="slider__svg" version="1.1" viewBox={"-" + padding + " -" + padding + " " + sliderSvgWidth  + " " + sliderSvgHeight}>
        <rect x={labelWidth} y={0} width={width} height={height} rx={5} ry={5} fill={barBgColor}/>
          {(function (rows, i, len) {
            for (i; i <= len; i++) {
              let y = height / len * i;
              rows.push(
                <g key={i}>
                  <line x1={labelWidth} y1={y} x2={labelWidth + width} y2={y} strokeWidth="1" stroke={barColor}/>
                  <text x={0} y={y + labelYShift} class="slider__label">{i}</text>
                </g>
              )
            }
            return rows;
          })([], 0, steps)}
        <rect
          class="slider__bar"
          x={labelWidth + width / 2 - barWidth / 2}
          y={0}
          width={barWidth}
          height={height}
          fill={barColor}
          ref="sliderBar"
          />
        <rect
          class="slider__handle"
          x={labelWidth + width / 2 - handleWidth / 2}
          y={height / steps * value - handleHeight / 2}
          width={handleWidth}
          height={handleHeight}
          fill={handleColor}
          onMouseDown={this.startDrag.bind(this)}
          onMouseUp={this.stopDrag.bind(this)}
          transform={"translate(0 -" + handleHeight / 2 + ")"}
          ref="sliderHandle"/>
      </svg>
    );
  }

}
