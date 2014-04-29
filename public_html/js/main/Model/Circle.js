/*
                                                            _______           __   
                                                          / ____(_)_________/ /__ 
                                                         / /   / / ___/ ___/ / _ \
                                                        / /___/ / /  / /__/ /  __/
                                                        \____/_/_/   \___/_/\___/ 
                          
 */

//document.write("<script type='text/javascript' src = '../Model/Figure.js'></script>");

var Circle = Figure.extend({
    
    init: function(pId, pColor, pBorderSize,pInitialPoint, pRadius, pFill) {
        this._super(pId, pColor, pBorderSize,pInitialPoint);
        this.radius = pRadius;
        //Is the color of the filler
        this.fill = pFill;
    },
    
    getRadius : function () {
        return this.radius;
    },
    
    getFill : function () {
        return this.fill;
    },
    
    setRadius : function (pRadius) {
        this.radius = pRadius;
    },
    
    setFill : function (pFill) {
        this.fill = pFill;
    },
            
     getX : function(){
        return this.initialPoint.getX();
     }, 
             
     getY : function(){
        return this.initialPoint.getY();
     },
             
    isInPointIn : function (pPoint) {
        //We are making a range between the borders of the circle to know if the pont x,y 
        //its in the area of the circle
        var pointX1 = (this.initialPoint.getX() - this.getRadius());
        var pointX2 = (this.initialPoint.getX() + this.getRadius());
        
        var pointY1 = (this.initialPoint.getY() - this.getRadius());
        var pointY2 = (this.initialPoint.getY() + this.getRadius());
        
        if((pPoint.getX()>=pointX1 && pPoint.getX()<=pointX2)&&(pPoint.getY()>=pointY1 && pPoint.getY()<=pointY2)){
            return true;
        }
        else{
            return false;
        }
        
    },
    drawFigure : function () {
        var startPoint = this.initialPoint;
        var circle = new Kinetic.Circle({
        x: startPoint.getX(),
        y: startPoint.getY(),
        radius: this.radius,
        fill: this.colorList.getColor(16) ,
        stroke: this.colorList.getColor(0) ,
        opacity: 0.75,
        draggable : true,
        strokeWidth: this.borderSize
      });

     return circle;
        
    },
    paintFigure : function (){
        var startPoint = this.initialPoint;
        var circle = new Kinetic.Circle({
        x: startPoint.getX(),
        y: startPoint.getY(),
        radius: this.radius,
        fill: this.colorList.getColor(this.color),
        stroke: this.colorList.getColor(this.color) ,
        opacity: 0.75,
        draggable : true,
        strokeWidth: this.borderSize
      });

     return circle;
        
        
    }
});