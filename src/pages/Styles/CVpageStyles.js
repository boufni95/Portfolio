import Pattern from '../../pattern.png'
const stylePage={
    position:'fixed',
    backgroundImage: "url(" + Pattern + ")",
    width:'100%',
    height:'100%'
}
const arrLStyle={
    position:'absolute',
    width:'10%',
    height:'12%',
    left:'19%',
    top:'3.5%',
    backgroundColor:'#EEEEEE',
    borderRadius:'4px',
    boxShadow:'2px 2px 10px'
}
const arrRStyle={
    position:'absolute',
    width:'10%',
    height:'12%',
    right:'19%',
    bottom:'3.5%',
    backgroundColor:'#EEEEEE',
    borderRadius:'4px',
    boxShadow:'2px 2px 10px',
    
}
const styleButt = {
    //height:'50%',
    width:'50%'
}
function upBlock(hover){
    return{
        position:'absolute',
        width:(hover)?'0%':'70%',
        height:'12%',
        right:'0%',
        top:'3.5%',
        backgroundColor:'#EEEEEE',
        borderRadius:'4px',
        boxShadow:'2px 2px 10px',
        transition:'width 0.5s'
    }
}
function downBlock(hover){
    return{
        position:'absolute',
        width:(hover)?'0%':'70%',
        height:'12%',
        left:'0%',
        bottom:'3.5%',
        backgroundColor:'#EEEEEE',
        borderRadius:'4px',
        boxShadow:'2px 2px 10px',
        transition:'width 0.5s',
        
    }
}
const buttBack ={
    position:'absolute',
    width:'50px',
    height:'50px',
    top:'0px',
    left:'0px',
    backgroundColor:'#EEEEEE'
}

export {stylePage,arrLStyle,arrRStyle,styleButt,upBlock,downBlock,buttBack};