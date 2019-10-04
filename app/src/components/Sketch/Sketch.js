import React, { Component } from 'react';
import './Sketch.css';
import '../../styles/flexborder.css';

class Sketch extends Component {
    //to do
    //set props -> Sketch
    //
    constructor(props){
        super(props);
        this.state={

        }
        this.paint=this.paint.bind(this);
    }

    componentDidUpdate(){
        this.paint();
    }

    paint(){
        const { width, height, rotation } = this.props;
        const context = this.refs.canvas.getContext("2d");
        context.clearRect(0, 0, width, height);
        context.save();
        context.translate(100, 100);
        context.rotate(rotation, 100, 100);
        context.fillStyle = "#F00";
        context.fillRect(-50, -50, 100, 100);
        context.restore();
    }
  render() {
    const { width, height } = this.props;

    return (
          <canvas
            className="Sketch"
            ref="canvas"
            width={width}
            height={height}
          />
    );
  }
}

export default Sketch;


