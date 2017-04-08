import React,{Component} from 'react'
import ReactDOM from 'react-dom'
class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = this.setTime()
    }
    addZeroIfReq(digit) {
        return digit>=10?digit:"0"+digit
    }
    setTime() {
        const date = new Date()
        var h = date.getHours()
        const period = h>=12?"PM":"AM"
        const hStr = this.addZeroIfReq(h)
        const m = date.getMinutes()
        const mStr = this.addZeroIfReq(m)
        const s = date.getSeconds()
        const sStr = this.addZeroIfReq(s)
        return {hStr,mStr,sStr,period}
    }
    componentDidMount() {

    }
    render() {
        const w = window.innerWidth,h = window.innerHeight
        const styleObj = {fontSize:`${h/5}px`,position:'absolute',color:'white',left:`${w/2-w/6-h/6}px`,top:`${h/2-h/6}px`,width:`${w/3}px`,height:`${h/10}px`}
        return (<div style={styleObj}>
                  {this.state.hStr+":"+this.state.mStr+":"+this.state.sStr+":"+this.state.period}
              </div>)
    }
}
ReactDOM.render(<Clock/>,document.getElementById('comp'))
