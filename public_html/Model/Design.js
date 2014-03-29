/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
 function Design(pDesignName){
     var _DesignName =pDesignName;
     var _figures = [];
     var amountOFFigures = 0;
     
     getDesignName = function(){
         return _DesignName;
     };
     setDesignName = function(pNewDesignName){
         _DesignName = pNewDesignName;
     };
     
     addCircle = function(pLabel, pColor,pBorderSize, pX, pY, pRadius, pFill){
         var newCircle = Circle(amountOFFigures,pLabel, pColor, pBorderSize, pX, pY, pRadius, pFill);
         _figures.push(newCircle);
         amountOFFigures++;
         
     };
     
     addSquare = function (pId, pLabel, pType, pColor, pBorderSize, pX, pY, pWidth, pHeight, pFill){
         var newSquare = Square(pId, pLabel, pType, pColor, pBorderSize, pX, pY, pWidth, pHeight, pFill);
         _figures.push(newSquare);
         amountOFFigures++;  
     };
     addLine =function (pId, pLabel, pType, pColor, pBorderSize, pX, pY, pX2, pY2){
         var newLine = Line(pId, pLabel, pType, pColor, pBorderSize, pX, pY, pX2, pY2);
         _figures.push(newLine);
         amountOFFigures++;  
     };
     
     getFigure = function(pId){
       var arrayWithfigureWithTheId = _figures.slice(pId,pId);
       var figureWithTheId = arrayWithfigureWithTheId.pop();
       return figureWithTheId;
     };
     
     modificateConourColor = function(){
         
         
     };
     
     modificateSoleColor = function(){
         
         
     };
     
     modificateContourBorderSize = function(){
         
         
     };
     
     modificateSoleBorderSize = function(){
         
     };
     
     whatFigureIsinThisPoint=function(pX,pY){
         
     };
     
     loadDefaultLines = function(){
         
     };
     
     
 }

