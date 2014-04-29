/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
document.write("<script type='text/javascript' src = '../Model/CircleClass.js'></script>");
document.write("<script type='text/javascript' src = '../Model/LineClass.js'></script> ");
document.write("<script type='text/javascript' src = '../Model/SquareClass.js'></script>");
document.write("<script type='text/javascript' src = '../Model/TestClass.js'></script>");
document.write("<script type='text/javascript' src = '../Model/ArcClass.js'></script>");

 function Design(pDesignName){
     var _DesignName = pDesignName;
     var _figures = new Array();
     var amountOFFigures = 0;
     
     this.getDesignName = function(){
         return _DesignName;
     };
     this.getFigures = function () {
         return _figures;
     };
     
     this.getAmountOfFigures = function () {
         return amountOFFigures;
     };
     
     this.setDesignName = function(pNewDesignName){
         _DesignName = pNewDesignName;
     };
     
     this.setFigures = function (pFigures) {
       _figures = pFigures;  
     };
     
     this.setAmountOfFigures = function (pAmountOfFigures) {
         amountOFFigures = pAmountOfFigures;
     };
     
     this.addCircle = function(pLabel, pColor, pBorderSize, pX, pY, pRadius, pFill){
         var newCircle = new Circle(amountOFFigures, pLabel, "Circle", pColor, pBorderSize, pX, pY, pRadius, pFill);
         _figures.push(newCircle);
         var newAmountOfFigures = this.getAmountOfFigures() + 1;
         this.setAmountOfFigures(newAmountOfFigures);
         
     };
     
     this.addSquare = function (pLabel, pColor, pBorderSize, pX, pY, pWidth, pHeight, pFill){
         var newSquare = new Square(amountOFFigures, pLabel, "Square", pColor, pBorderSize, pX, pY, pWidth, pHeight, pFill);
         _figures.push(newSquare);
          var newAmountOfFigures = this.getAmountOfFigures() + 1;
         this.setAmountOfFigures(newAmountOfFigures);
     };
     
     this.addLine =function (pLabel, pColor, pBorderSize, pX, pY, pX2, pY2){
         var newLine = new Line(amountOFFigures, pLabel, "Line", pColor, pBorderSize, pX, pY, pX2, pY2);
         _figures.push(newLine);
         var newAmountOfFigures = this.getAmountOfFigures() + 1;
         this.setAmountOfFigures(newAmountOfFigures);
     };
     
     this.addFigure = function (pLabel, pType, pColor, pBorderSize, pX, pY) {
         var newFigure = new Figure(amountOFFigures, pLabel, pType, pColor, pBorderSize, pX, pY);
         _figures.push(newFigure);
         var newAmountOfFigures = this.getAmountOfFigures() + 1;
         this.setAmountOfFigures(newAmountOfFigures);
     };
     
     this.getFigure = function(pId){
       var arrayWithfigureWithTheId = _figures.slice(pId,pId);
       var figureWithTheId = arrayWithfigureWithTheId.pop();
       return figureWithTheId;
     };
     
     this.modificateConourColor = function(){
         
         
     };
     
     this.modificateSoleColor = function(){
         
         
     };
     
     this.modificateContourBorderSize = function(){
         
         
     };
     
     this.modificateSoleBorderSize = function(){
         
     };
     
     this.whatFigureIsinThisPoint=function(pX,pY){
         
     };
     
     this.loadDefaultLines = function(){
         
     };
     
 };

