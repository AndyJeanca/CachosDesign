/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.write("<script type='text/javascript' src = '../Model/FigureClass.js'></script>");

function Circle (pId, pLabel, pType, pColor, pBorderSize, pX, pY, pRadius, pFill) {
    this.prototype = new Figure();
    Figure.call(this, pId, pLabel, pType, pColor, pBorderSize, pX, pY);
    var radius = pRadius;
    var fill = pFill;
    
    this.getRadius = function () {
        return radius;
    };
    
    this.getFill = function () {
        return fill;
    };
    
    this.setRadius = function (pRadius) {
        radius = pRadius;
    };
    
    this.setFill = function (pFill) {
        fill = pFill;
    };
    
    this.isInPointIn = function (pX,pY) {
        //We are making a range between the borders of the circle to know if the pont x,y 
        //its in the area of the circle
        var pointX1 = (this.getX() - this.getRadius());
        var pointX2 = (this.getX() + this.getRadius());
        
        var pointY1 = (this.getY() - this.getRadius());
        var pointY2 = (this.getY() + this.getRadius());
        
        if((pX>=pointX1 && pX<=pointX2)&&(pY>=pointY1 && pY<=pointY2)){
            return true;
        }
        else{
            return false;
        }
        
    };
    
    this.prototype.drawFigure = function () {
        var _pointArray = [];
        var pointX1 = (this.getX() - this.getRadius());
        var pointX2 = (this.getX() + this.getRadius());
        
        var pointY1 = (this.getY() - this.getRadius());
        var pointY2 = (this.getY() + this.getRadius());
        
        var distanceBetweenPoints = 0;
        for(pointY2;pointY2>pointY1;pointY2--){
            _pointArray=this.pointsInRange(pX-distanceBetweenPoints,pX+distanceBetweenPoints,pointY2,pointY2,_pointArray);
            if(pointY2>pY){
                distanceBetweenPoints++;
            }
            else{
                distanceBetweenPoints--;
            }
        }
        
        
        
    };
   
    this.prototype.drawFigure = function () {
        
    };
                
}



    
   
    



