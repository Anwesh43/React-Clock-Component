import React,{Component} from 'react'
export default class Overlay extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const h = window.innerHeight,w = window.innerWidth
        const styleObj = {background:'black',opacity:0.8,width:`${w}px`,height:`${h}px`}
        return (<div style={styleObj}>
        </div>)
    }
}
