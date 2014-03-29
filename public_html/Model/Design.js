/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
 function Design(pDesignName){
     var _DesignName =pDesignName;
     var _figures = [];
     var amountOFFigures = 0;
     
     this.getDesignName = function(){
         return _DesignName;
     };
     
     this.setDesignName = function(pNewDesignName){
         _DesignName = pNewDesignName;
     };
     
     this.addCircle = function(pLabel, pColor,pBorderSize, pX, pY, pRadius, pFill){
         var newCircle = Circle(amountOFFigures,pLabel, pColor, pBorderSize, pX, pY, pRadius, pFill);
         _figures.push(newCircle);
         amountOFFigures++;
         
     };
     
     this.addSquare = function (pId, pLabel, pType, pColor, pBorderSize, pX, pY, pWidth, pHeight, pFill){
         var newSquare = Square(pId, pLabel, pType, pColor, pBorderSize, pX, pY, pWidth, pHeight, pFill);
         _figures.push(newSquare);
         amountOFFigures++;  
     };
     this.addLine =function (pId, pLabel, pType, pColor, pBorderSize, pX, pY, pX2, pY2){
         var newLine = Line(pId, pLabel, pType, pColor, pBorderSize, pX, pY, pX2, pY2);
         _figures.push(newLine);
         amountOFFigures++;  
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
     
     
 }

