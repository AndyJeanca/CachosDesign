/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function Figure(pId, pLabel, pType, pColor, pBorderSize, pX, pY) {
 
    var id = pId;
    var label = pLabel;
    var type = pType;
    var color = pColor;
    var borderSize = pBorderSize;
    var x = pX;
    var y = pY;
    
    this.getId = function(){
        return id;
    };    
    
    this.getLabel = function(){
        return label;
    };
        
    this.getType= function(){
    return type;
    };
        
    this.getColor = function(){
    return color;
    };
    
    this.getBorderSize = function(){
    return borderSize;
    };
        
    this.getX = function(){
    return x;
    };
    
        
    this.getY = function(){
    return y;
    };
    
    this.setX = function(pX) {
        x = pX;
    };
    
    this.setY = function(pY) {
        y = pY;
    };
    
    this.setColor = function(pColor) {
        color = pColor;
    };
    
    this.setBorderSize = function(pBorderSize) {
        borderSize = pBorderSize;
    };
    
    this.setLabel = function(pLabel) {
        label = pLabel;
    };
    
    this.printInformationOfFigure = function () {};
    
    this.isInPointIn = function () {};
    
    this.drawFigure = function () {};
    
     this.prototype.pointsInRange=function(pX1,pX2,pY1,pY2,pColorOfThePoints){
        var pointsInRange = [];
        for (var actualPointY=pY1; actualPointY<pY2; actualPointY++){
            for (var actualPointX=pX1; actualPointY<pX2; actualPointX++){
                var actualPoint = point(actualPointX,actualPointY,pColorOfThePoints);
                pointsInRange.push(actualPoint);
            }
        }
        return pointsInRange;
    };
}

function printInformationOfCircle () {
    var nCircle = new Circle(1, "nCircle", "Circle", "Green", 1, 2, 3, 3.14, true);
    var print = nCircle.getId();
    document.getElementById("demoColor").innerHTML="El id del circulo es: ------------>";
    alert(print);  
};

function testParse () {
    var _Arc = new Arc(2, "This is a Arc", "Arc", "Green", 10, 3, 4);
    var info = _Arc.getType();
    document.getElementById("demoColor").innerHTML="La info es: --------------->";
    alert(info);
};