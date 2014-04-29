
/*
                                                                        ____        _       __ 
                                                                       / __ \____  (_)___  / /_
                                                                      / /_/ / __ \/ / __ \/ __/
                                                                     / ____/ /_/ / / / / / /_  
                                                                    /_/    \____/_/_/ /_/\__/  

 */
//document.write("<script type='text/javascript' src = '../Vendor/Class.js'></script>");

var  point = Class.extend({
    init: function(pPosition,pPointX,pPointY,pColor){
   
    //pPosition is the same that id
    this.position = pPosition;
    this.pointX = pPointX;
    this.pointY = pPointY;
    },
    
    setX : function(pX){
        this.pointX=pX;
    },
    
    setY : function(pY){
        this.pointY=pY;
    },
    
    getX : function(){
        return this.pointX;
    },
    
    getY : function(){
        return this.pointY;
    },
    
    movePoint : function(pX,pY){
        this.setX(pX);
        this.setY(pY);
    },
    
    setColor : function(pColor){
        this.color=pColor;
    },
    
    getColor : function(){
        return this.color;
    },
    
    setSize : function(pSize){
        this.pointSize=pSize;
    },
    
    getSize : function(){
        return this.pointSize;
    },
    
    comparePosition : function(pPoint){
        if(pPoint.getX()===this.pointX && pPoint.getY()===this.pointY){
            return true;
        }
        else{
            return false;
        }    
    }
});