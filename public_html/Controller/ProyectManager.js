/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function ProjectManager(){
    var actualDesign;
    
this.getActualDesign  = function(){
    return actualDesign;
};

this.setActualDesign = function(pActualDesign){
  actualDesign = pActualDesign;  
};

this.addCircle = function(pLabel, pColor,pBorderSize, pX, pY, pRadius, pFill){
    actualDesign.addCircle(pLabel, pColor,pBorderSize, pX, pY, pRadius, pFill);
 };
 
 this.drawFigure=function(pId){
   var _FigureToDraw = actualDesign.getFigure(pId);
   var pointsToDraw = _FigureToDraw.drawFigure();
   drawFromList(pointsToDraw);
 };
 
this.drawAsquare = function (pX, pY, pWidth, pHeight) {
  var designCanvas = document.getElementById("_Canvas").getContext("2d");
  designCanvas.fillRect(pX, pY, pWidth, pHeight);
};

this.drawAline = function(pXstarting, pYstarting, pXending, pYending) {
    var designCanvas = document.getElementById("_Canvas").getContext("2d");
    designCanvas.moveTo(pXstarting, pYstarting);
    designCanvas.lineTo(pXending, pYending);
    designCanvas.stroke();
};

this.drawAarc = function (pX, pY, pRadius, pAngleStarting, pAngleEnding, pAntiClockWise) {
    var designCanvas = document.getElementById("_Canvas").getContext("2d");
    designCanvas.beginPath(); 
    designCanvas.arc(pX, pY, pRadius, pAngleStarting, pAngleEnding, pAntiClockWise); 
    designCanvas.stroke(); 
};

this.designDefault = function() {
    var designCanvas = document.getElementById("_Canvas").getContext("2d");
    drawAarc(475, 150, 125, 0, 2.9, false); // A-B
    drawAline(600, 150, 720, 325); // B-C
    drawAline(720, 325, 880, 390); // C-D
    drawAarc(165, 250, 200, 0.77, 5.9, true); // A-E
    drawAline(310, 390, 880, 390);
};


this.paintApixel= function(pX, pY) {  
    var designCanvas = document.getElementById("_Canvas").getContext("2d");
    designCanvas.fillRect(pX, pY, 1, 1);
    designCanvas.stroke(); 
};

this.drawFromList=function(pListOfPoints){
    var ListOfPoints = [];
    ListOfPoints =pListOfPoints;
    
    var amountOfPointsLeft=ListOfPoints.length;
    
    for(var positionOfActualPoint = 0; positionOfActualPoint<amountOfPointsLeft;positionOfActualPoint++){
        var actualPoint = getPointfromListById(positionOfActualPoint,ListOfPoints);
        paintApixel(actualPoint.getX(),actualPoint.getY());
    }
};

this.getPointfromListById = function(pId,pListOfPoints){
       var ListOfPoints = [];
       ListOfPoints =pListOfPoints;
       var arrayWithfigureWithTheId = ListOfPoints.slice(pId,pId);
       var figureWithTheId = arrayWithfigureWithTheId.pop();
       return figureWithTheId;
     };
}