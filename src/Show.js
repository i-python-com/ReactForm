import React, {Component} from 'react';


class Show extends Component {
 

  constructor(props) {
    super(props);
    this.state = {
      value: '0'
    };
  }

  // 初始化render时不会执行
  // 子组件获取新props时触发，此生命周期在shouldComponentUpdate前触发
  // 作用是在子组件render前，更新子组件自己的state
  /*
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
    //console.log('props:', nextProps) // 新接受的props
    this.setState({
      value: nextProps.value
    })
  }
  */

  // 接收的props或者组件的state发生变化 都会触发该生命周期
  /*
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    //console.log(nextState); // new state
    //console.log(this.state); // 原来的state
    // 此处做一下渲染优化，如果新state+旧state字符串长度大于3就不再渲染了
    let resultStr = this.state.value + nextState.value;
    if(resultStr.length > 3) {
      console.log(resultStr.length);
      return false;
    }
    return true;
  }
  */

  // 替代 componentWillReceiveProps 返回的结果会送给setState 如果什么都不改变就返回null
  // static 声明静态函数，无法访问this，也就是一个纯函数，输出完全由输入决定
  // 除了shouldComponentUpdate之外，render前的所有声明周期都被替代
  // 返回新的state，react会去控制不在进行新的更新
  // AJAX请求在componentDidMount 中进行
  // 貌似用的场景很少
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps); // 新传入的props
    console.log(prevState); // 旧的state
    //console.log(this.props);
    return {
      value: nextProps.value
    }


  }

  render () {
    console.log('render')
    return (
      <span>{this.state.value}</span>
    )
  }
}


export default Show;
