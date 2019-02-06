function CardStyle(data,fun){
    const {x,y,mobile,scroll,i}=data;
    var {topVal,rightVal,endSc,right,top,width,height,left}=0
    if(mobile){
        topVal=y+i*y*0.818
        endSc = (topVal-scroll<=0)? true:false;
        
        top=(endSc)?-(topVal-scroll):0
        fun(top)
        left=(!endSc)?0:(i%2===0)?(topVal-scroll):-(topVal-scroll)
    }else{
        rightVal = x+0.33*x*i-0.015*x+y*0.382-scroll
        endSc =(rightVal<0)?true:false;
        right = (endSc)?0:rightVal;
        top = (endSc)?y*0.618+rightVal:y*0.618;
        width =(endSc)?x*0.146:x*0.3
        height =y*0.382
    }

    
    return (mobile)?{
        position:'relative',
        top:top+'px',
        marginTop:y*0.19+'px',
        marginLeft:x*0.19+'px',
        width:x*0.618+'px',
        left:left,
        height:y*0.618+'px'
    }:{
        position:'fixed',
        width:width+'px',
        height:height+'px',
        top:top+'px',
        //left:left+'px' 
        right:right,
        transition: 'width 0.2s'
    }
}

export {CardStyle};