import React from 'react';
import Pattern from '../pattern.png'
import { Button, IconButton,Typography } from '@material-ui/core';
import ArrowL from '../arrowL.png';
import ArrowR from '../arrowR.png';
import {Link} from 'react-router-dom';
import {stylePage,
    arrLStyle,
    arrRStyle,
    styleButt,
    upBlock,
    downBlock,
    buttBack} from './Styles/CVpageStyles';
import CvPiece from './Components/CvPiece';


export default class CVpage extends React.Component{
    constructor(props){
        super(props);
        this.state={index:0,
                    max:5,
                    zero : true};
        this.goLeft = this.goLeft.bind(this);
        this.goRight = this.goRight.bind(this);
        this.hoverIn = this.hoverIn.bind(this);
        this.hoverOut = this.hoverOut.bind(this);
    }
    render(){
        
        const {zero,index} = this.state
        return <div style={stylePage}>{/*hole page*/}
            <div style={buttBack}>
                <Link to='/'>
                    <IconButton>
                        <img src={ArrowL} style={buttBack}/>
                    </IconButton>
                </Link>
            </div>
            
        <div style={arrLStyle}>{/*left arrow*/}
            <IconButton onClick={this.goLeft} onMouseEnter={this.hoverIn} onMouseLeave={this.hoverOut}>
                <img src={ArrowL} style={styleButt}/>
            </IconButton>
        </div>
        
        <div style={arrRStyle}>{/*right arrow*/}
            <IconButton onClick={this.goRight} onMouseEnter={this.hoverIn} onMouseLeave={this.hoverOut}>
                <img src={ArrowR} style={styleButt}/>
            </IconButton>
        </div>
        <div style={upBlock(zero)}>{/*upper block*/}
            {index === 1 && !zero && <div style={{padding:5}}>
                <Typography variant='h4' align='center'>
                        Présentation
                    </Typography>
            </div>}
            {index === 2 && !zero && <div style={{padding:5}}>
                <Typography variant='h4' align='center'>
                    Developpement Jeux Video
                    </Typography>
            </div>}
        </div>
        <div style={downBlock(zero)}>{/*upper block*/}
            {index === 0  && !zero &&<div style={{padding:5}}>
                <Typography variant='h4' align='center'>
                        Developpement Web
                    </Typography>
            </div>}
            {index === 1  && !zero &&<div style={{padding:5}}>
                <Typography variant='h4' align='center'>
                        Developpement Jeux Video
                    </Typography>
                    
            </div>}
            {index === 2  && !zero &&<div style={{padding:5}}>
                <Typography variant='h4' align='center'>
                    Autres Oeuvres
                    </Typography>
                    
            </div>}
        </div>

        <CvPiece val ={index}/>
        </div> 
    }
    goRight(){
        if(this.state.index < this.state.max){
            this.setState({index:this.state.index+1,update:true});
            
        }
        
    }
    goLeft(){
        
        if(this.state.index >0){
            this.setState({index:this.state.index-1});
        }
    }
    hoverIn(){
        this.setState({zero:false})
    }
    hoverOut(){
        this.setState({zero:true})
    }
}