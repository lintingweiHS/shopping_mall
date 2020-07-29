import React from 'react'

export default class Time extends React.Component {


    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {date: new Date(),name:props.name};
      }
    FormattedDate(props) {
        return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
      }
    // componentDidMount声明周期函数   表示组件渲染完成后
    componentDidMount(){
        this.timer =setInterval(() => {
            this.setState({//  this.setState固定 更改state中的data值
                 date:new Date(),
           })  
        }, 1000);
     
    }

    // 为了防止内存泄漏  清除定时器
    componentWillUnmount(){
        clearInterval(this.timer);
    }
  
    // 定义的组件   toLocaleTimeString转为一个具体的时间
    render(){
        
        return(
            <div>
                {this.state.name}:{this.state.date.toLocaleTimeString()}
                
                {this.FormattedDate(this.state)}
            </div>
        )
    }

}