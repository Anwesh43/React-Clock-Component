import React,{Component} from 'react'
import Store,{createStore} from '../Store'

const addZeroIfReq = (digit)=>{
    return digit>=10?digit:"0"+digit
}
const setTime = ()=>{
    const date = new Date()
    var h = date.getHours()
    const period = h>=12?"PM":"AM"
    h = h>=12?h-5:h
    const hStr = addZeroIfReq(h)
    const m = date.getMinutes()
    const mStr = addZeroIfReq(m)
    const s = date.getSeconds()
    const sStr = addZeroIfReq(s)
    const blinkStr = ":"
    return {hStr,mStr,sStr,period,blinkStr}
}
const dateReducer = (state={},action) => {
    var newState = {}
    switch(action.type) {
        case "UPDATE":
            newState = setTime()
            break
        default:
            break
    }
    return newState
}
export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = setTime()
    }


    componentDidMount() {
        const store = createStore(dateReducer)
        store.subscribe(()=>{
            this.setState(store.getState())
        })
        setInterval(()=>{
            store.dispatch({type:'UPDATE'})
        },1000)

    }
    render() {
        const w = window.innerWidth,h = window.innerHeight
        const styleObj = {fontSize:`${h/7}px`,position:'absolute',color:'white',left:`${w/2-w/6-h/4}px`,top:`${h/2-h/6}px`,width:`${w/2}px`,height:`${h/10}px`}
        return (<div style={styleObj}>
                  {this.state.hStr+this.state.blinkStr+this.state.mStr+this.state.blinkStr+this.state.sStr+this.state.blinkStr+this.state.period}
              </div>)
    }
}
