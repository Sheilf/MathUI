import React, { Component } from 'react';
import './Notes.css';
import '../../styles/flexborder.css';
import Sketch from '../Sketch/Sketch';
class Notes extends Component {
    constructor(props){
        super(props);
        this.state={
            rotation: 0,
            stop: 0


        }
        this.tick=this.tick.bind(this);
    }

    componentDidMount(){
        requestAnimationFrame(this.tick)
    }


    componentWillUnmount(){
       cancelAnimationFrame(this.state.stop);
    }
    tick(){
        const rotation = this.state.rotation + 0.04;
        this.setState({
            rotation: rotation
        })
        requestAnimationFrame(this.tick);

    }
    render() {
        console.log(this.state.rotation);
        return (
                <Sketch rotation={this.state.rotation} width={200} height={200} />
        );
    }
}

export default Notes;


