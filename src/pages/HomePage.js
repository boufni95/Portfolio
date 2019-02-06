import React from 'react';
import Pattern from '../pattern.png'
import {BgWholeScreen,BgBigPartDeskt} from './Styles/HomePageStyles';
import Slider from './Components/CardSlider';
import { Typography, Button,GridList, GridListTile } from '@material-ui/core';
import {Route,Link} from 'react-router-dom';
import NameImg from '../myName.png';
import FrontIco from '@material-ui/icons/Devices';
import BackIco from '@material-ui/icons/CloudQueue';
import ResICo from '@material-ui/icons/FilterBAndW';
import DynIco from '@material-ui/icons/BurstMode';
export default class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selected:''//tipo url
        }
        this.mainScreen = this.mainScreen.bind(this);
    }
    render(){
        const {x,y,mobile,scrollY} = this.props.screen;
        return <div style={BgWholeScreen({x:x,y:y,img:Pattern,mobile:mobile,n:2})}>
                <div style={BgBigPartDeskt({x:x,y:y,scroll:scrollY,mobile:mobile})}>
                    {
                        this.mainScreen()
                    }
                </div>
                <Slider screen={this.props.screen}>
                    <div>
                            <div>
                                <Typography variant='h4'>
                                    Go To CV
                                </Typography>
                            </div>
                            <div>
                                <Link to='/cv'>
                                    <Button>
                                        here
                                    </Button>
                                </Link>
                            </div>
                    </div>
                    <div>
                            <div>
                            <Typography variant='h4'>
                                    ______
                                </Typography>
                            </div>
                            <div>
                                <Link to='/opt2'>
                                    <Button>
                                        here
                                    </Button>
                                </Link>
                            </div>
                    </div>
                </Slider>
        </div>
        
    }
    mainScreen(){
        const {x,y,mobile,scrollY} = this.props.screen;
        const styleCoso={
            width:'100%'
        }
        const listFont=(mobile)?{
            fontSize:x*0.05+'px'
        }:{
            fontSize:x*0.017+'px'
        }
        const midFont=(mobile)?{
            fontSize:x*0.08+'px'
        }:{
            fontSize:x*0.02+'px',
            //color: #131313;
            //background: #e7e5e4;
            letterSpacing: '.15em',
            textShadow: '1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, -4px 8px 1px #7b7a7a, -5px 10px 1px #7f7d7d, -6px 12px 1px #828181, -7px 14px 1px #868585, -8px 16px 1px #8b8a89, -9px 18px 1px #8f8e8d, -10px 20px 1px #949392, -11px 22px 1px #999897, -12px 24px 1px #9e9c9c, -13px 26px 1px #a3a1a1, -14px 28px 1px #a8a6a6, -15px 30px 1px #adabab, -16px 32px 1px #b2b1b0, -17px 34px 1px #b7b6b5, -18px 36px 1px #bcbbba, -19px 38px 1px #c1bfbf, -20px 40px 1px #c6c4c4, -21px 42px 1px #cbc9c8, -22px 44px 1px #cfcdcd, -23px 46px 1px #d4d2d1, -24px 48px 1px #d8d6d5, -25px 50px 1px #dbdad9, -26px 52px 1px #dfdddc, -27px 54px 1px #e2e0df, -28px 56px 1px #e4e3e2'
        }
        const styleImg=(mobile)?{
            width:'90%',
        }:{
            width:x*0.5+'px',
        }
        const styleText={
            position:'relative',
            top:-x*0.03+'px',
            left:x*0.1+'px',
            color:'red',
            fontSize:x*0.03+'px'

        }
        const icoSize=(mobile)?{
            height:x*0.3+'px',
            width:x*0.3+'px'
        }:{
            height:x*0.1+'px',
            width:x*0.1+'px'
        }
        const styleBox={
            width:'50%',
            display:'inline-block'
        }
        
        return <div style={styleCoso}>
                
                <img style={styleImg} src={NameImg} alt='image'/>
                <Typography variant='h1'style={styleText}>Web Developer</Typography>
                <div style={styleBox}> 
                <Typography variant='h4'style={midFont} ><strong>Complete solutions</strong></Typography>
                <GridList cellHeight='auto' cols={(mobile)?1:2}>
                    <GridListTile >
                        <Typography variant='h6'style={listFont} align='center'>Front end</Typography>
                        <FrontIco style={icoSize}/>
                        </GridListTile>
                        <GridListTile>
                        <Typography variant='h6'style={listFont} >Back end</Typography>
                        <BackIco style={icoSize}/>
                    </GridListTile>
                </GridList>
                </div>
                <div style={styleBox}> 
                <Typography variant='h4'style={midFont} ><strong>Cool Styles</strong></Typography>
                <GridList cellHeight='auto' cols={(mobile)?1:2}>
                    <GridListTile >
                        <Typography variant='h6'style={listFont} align='center'>Responsive</Typography>
                        <ResICo style={icoSize}/>
                        </GridListTile>
                        <GridListTile>
                        <Typography variant='h6'style={listFont} >Dynamic</Typography>
                        <DynIco style={icoSize}/>
                    </GridListTile>
                </GridList>
                </div>
                
                 
              
            </div>
    }

}

/*slider structure
<div>elemento
    <div>content elemento
    </div>content action
    <div>content action
    </div>
</div>*/
/*{(scrollY>y*0.382)?<div>
                        <Route exact path='/' render={this.mainScreen}/>
                        <Route path='/opt' render={()=><div>swag14</div>}/>
                        <Route path='/opt2' render={()=><div>swag18</div>}/>
                    </div>:this.mainScreen()}*/
                    /**/