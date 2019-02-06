import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardStyle} from '../Styles/CardStyles';

export default class myCard extends React.Component{
  render(){
    const {x,y,mobile,scrollY}= this.props.screen;
    const {index} = this.props; 
    return (
        <Card raised={true} style={CardStyle({x:x,y:y,scroll:scrollY,mobile:mobile,i:index},(val)=>{console.log(val)})}>
          <CardContent>
            {React.Children.map(this.props.children,(elem, i)=>{
                if(i===0){
                    return elem
                }
            })}
          </CardContent>
          <CardActions>
            {React.Children.map(this.props.children,(elem, i)=>{
                if(i===1){
                    return elem
                }
            })}
          </CardActions>
        </Card>
      );
  }
}


