import React, { Component } from 'react';
//import Card from './pages/Components/Card';
import {Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CVpage from './pages/CVpage';
import './App.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state={x:0,
                y:0,
                mobile:false,
                scrollY:0};
    this.handleScroll = this.handleScroll.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
          
  }
  
  componentDidMount(){
    document.title ="Boufnichel"
  }
  render() {
      const workInP={
        position:'fixed',
        backgroundColor:'red',
        zIndex:10,
        right:0+'px'
      }
    return (
      <div className="All" >
        <div style={workInP}>This site is a work in progress</div>
        <div className='Sub'>
          <Route exact path='/' render={()=><HomePage screen={this.state}/>}/>
          <Route path='/cv' component={CVpage}/> 
        </div>
      </div>
    );
  }//
  handleScroll(event){
    this.setState({scrollY :window.scrollY });
    //console.log(this.state.offY);
}
  updateWindowDimensions() {
    if(window.innerWidth/window.innerHeight < 1/* || window.innerWidth <700*/){
        this.setState({mobile:true});
    }else{
        this.setState({mobile:false})
    }
    this.setState({ x: window.innerWidth, y: window.innerHeight });
  }
  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('scroll',this.handleScroll);
    window.addEventListener('resize', this.updateWindowDimensions);
}
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll',this.handleScroll);
  }
}


export default App;