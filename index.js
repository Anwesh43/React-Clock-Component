import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Overlay from './components/Overlay'
import Clock from './components/Clock'
export class TotalComponent extends Component {
    render() {
        return (<div>
                    <Overlay/>
                    <Clock/>
               </div>)
    }
}
ReactDOM.render(<TotalComponent/>,document.getElementById('comp'))
