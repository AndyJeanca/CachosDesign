/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Line (pId, pLabel, pType, pColor, pBorderSize, pX, pY, pX2, pY2) {
    this.prototype = new Figure;
    Figure.call(this, pId, pLabel, pType, pColor, pBorderSize, pX, pY);
    var x2 = pX2;
    var y2 = pY2;
    
    this.getX2 = function () {
      return x2;  
    }; 
    
    this.getY2 = function () {
        return y2;
    };
    
    this.setX2 = function (pX2) {
        x2 = pX2;
    };
    
    this.setY2 = function (pY2) {
        y2 = pY2;
    };
    
    this.prototype.isInPointIn = function () {
        
    };
    
    this.prototype.drawFigure = function () {
        
    };
    
    this.prototype.drawFigure = function () {
        
    };
}


