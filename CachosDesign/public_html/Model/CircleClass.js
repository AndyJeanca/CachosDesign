/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Circle (pId, pLabel, pType, pColor, pBorderSize, pX, pY, pRadius, pFill) {
    this.prototype = new Figure;
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
    
    this.prototype.isInPointIn = function () {
        
    };
    
    this.prototype.drawFigure = function () {
        
    };
    
    this.prototype.drawFigure = function () {
        
    };
                
}



    
   
    



