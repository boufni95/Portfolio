import React from 'react';
import Card from './Card';
export default class CardSlider extends React.Component{
    
    render(){
        return <div>
                {React.Children.map(this.props.children,(elem, i)=>{
                    return <Card key={i} index={i} screen={this.props.screen}>
                            {elem}
                            </Card>
                })}
                
                </div>
    }
}
/*<Card key={0} index={0} screen={this.props.screen}>
                    {'swag'}
                </Card>
                <Card key={1} index={1} screen={this.props.screen}>
                {'swo'}
                </Card>*/