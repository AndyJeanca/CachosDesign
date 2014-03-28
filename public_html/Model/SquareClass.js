/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Square (pId, pLabel, pType, pColor, pBorderSize, pX, pY, pWidth, pHeight, pFill) {
    this.protype = new Figure;
    Figure.call (pId, pLabel, pType, pColor, pBorderSize, pX, pY);
    var width = pWidth;
    var height = pHeight;
    var fill = pFill;
    
    this.getWidth = function () {
      return width;  
    };
    
    this.getHeight = function () {
        return height;
    };
    
    this.getFill = function () {
        return fill;
    };
    
    this.setWidth = function (pWidth) {
      width = pWidth;  
    };
    
    this.setHeight = function (pHeight) {
        height = pHeight;
    };
    
    this.setFill = function () {
      fill = pFill;  
    };
    
    this.prototype.isInPointIn = function () {
        
    };
    
    this.prototype.drawFigure = function () {
        
    };
    
    this.prototype.drawFigure = function () {
        
    };
}



