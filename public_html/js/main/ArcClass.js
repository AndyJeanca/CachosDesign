/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Arc (pId, pLabel, pType, pColor, pBorderSize, pX, pY, pStartingAngle, pEndingAngle, pRadius, pAntiClockWise) {
    this.prototype = new Figure;
    Figure.call(this, pId, pLabel, pType, pColor, pBorderSize, pX, pY);
    var startingAngle = pStartingAngle;
    var endingAngle = pEndingAngle;
    var radius = pRadius;
    var antiClockWise = pAntiClockWise;
    
    this.getStartingAngle = function () {
        return startingAngle;
    };
    
    this.getEndingAngle = function () {
        return endingAngle;
    };
    
    this.getRadius = function () {
        return radius;
    };
    
    this.getAntiClockWise = function () {
        return antiClockWise;
    };
    
    this.setStartingAngle = function (pStartingAngle) {
        startingAngle = pStartingAngle;
    };
    
    this.setEndingAngle = function (pEndingAngle) {
        endingAngle = pEndingAngle;
    };
    
    this.setRadius = function (pRadius) {
        radius = pRadius;
    };
    
    this.setAntiClockWise = function (pAntiClockWise) {
      antiClockWise = pAntiClockWise;
    };
    
    this.prototype.isInPointIn = function () {
        
    };
    
    this.prototype.drawFigure = function () {
        
    };
    
    this.prototype.drawFigure = function () {
        
    };
}


