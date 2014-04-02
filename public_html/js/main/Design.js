/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
 function Design(pDesignName){
     
     var _DesignName =pDesignName;
     var _figures = [];
     var _basicPoints = [];
     var _basicLinesBetweenPoints= [];
      
     //Amount of figures its used as a counter in the design. The actual amount of figures will be the id of any new figure added to the project.
     var amountOFFigures = 0;
     
     this.drawBasicPoints();
       
     this.createLinesBetweenPoints = function(){
         
         
     };
     
     this.drawBasicPoints = function(){
         for (var amountOfBasicPoint = 0; amountOfBasicPoint<9; amountOfBasicPoint++){
             var newPoint = new point (amountOfBasicPoint,0,0,1);
             _basicPoints.push(newPoint);
         }
         //Point A
         _basicPoints[0].movePoint(100,100);
         //Point A curve 1
         _basicPoints[1].movePoint(195,134);
         //Point A curve 2
         _basicPoints[2].movePoint(295,134);
         //Point B
         _basicPoints[3].movePoint(400,100);
         //Point C
         _basicPoints[4].movePoint(500,200);
         //PointD
         _basicPoints[5].movePoint(634,400);
         //pointE
         _basicPoints[6].movePoint(100,400);
         //pointE curve1
         _basicPoints[7].movePoint(195,300);
         //pointECurve2
         _basicPoints[8].movePoint(195,300);
         
         
     };
     //These are the functions to modificate the name of the design
     
     this.getDesignName = function(){
         return _DesignName;
     };
     
     this.setDesignName = function(pNewDesignName){
         _DesignName = pNewDesignName;
     };
     
     //These are the functions to add a figure to the project
     
     
     this.addCircle = function(pLabel, pColor,pBorderSize, pX, pY, pRadius, pFill){
         var newCircle = Circle(amountOFFigures,pLabel, pColor, pBorderSize, pX, pY, pRadius, pFill);
         _figures.push(newCircle);
         amountOFFigures++;
         
     };
     
     this.addSquare = function (pLabel, pType, pColor, pBorderSize, pX, pY, pWidth, pHeight, pFill){
         var newSquare = Square(amountOFFigures, pLabel, pType, pColor, pBorderSize, pX, pY, pWidth, pHeight, pFill);
         _figures.push(newSquare);
         amountOFFigures++;  
     };
     
     this.addLine =function (pLabel, pType, pColor, pBorderSize, pX, pY, pX2, pY2){
         var newLine = Line(amountOFFigures, pLabel, pType, pColor, pBorderSize, pX, pY, pX2, pY2);
         _figures.push(newLine);
         amountOFFigures++;  
     };
     
     this.getBasicPoints = function(){
         return _basicPoints;
     };
     
     // As we are using the following functions to get a figure by its id
     
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
     
   
     
     
 }

