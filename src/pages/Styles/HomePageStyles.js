function BgWholeScreen(data){
 return (data.mobile)?{
     width:'100%',
     height:data.y*6+'px',
    //backgroundImage: "url(" + data.img + ")",
    backgroundColor:'black',
 }:{
    width:data.x-17+'px',
    height:data.y*6+'px',
   backgroundImage: "url(" + data.img + ")",
 }
}
function BgBigPartDeskt(data){
    
    const offsetY=(data.scroll > data.y*0.382)?
                                data.y*0.382:
                                data.scroll;
    const offsetX=(data.scroll > data.x*0.146)?
                                data.x*0.146:
                                data.scroll;
    return (data.mobile)?{
        //position:'fixed',
       width:'100%',
        height:data.y,
        //height:(data.y-data.scroll>0)?data.y-data.scroll:0,
        backgroundColor:'white',
        textAlign:'center'
    }:{
        position:'fixed',
        width:data.x-offsetX+'px',//1-(0.382)^2
        height:data.y-offsetY+'px',
        backgroundColor:'white',
        textAlign:'center',
        borderRadius:'2px'
        
        
    }
}
export {BgWholeScreen,BgBigPartDeskt};