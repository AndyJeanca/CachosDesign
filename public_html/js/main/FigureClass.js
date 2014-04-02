/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function point(pPosition,pPointX,pPointY,pColor){
    var position = pPosition;
    var pointX = pPointX;
    var pointY = pPointY;
    var color = pColor;
    
    this.setX=function(pX){
        pointX=pX;
    };
    
    this.setY=function(pY){
        pointY=pY;
    };
    
    this.getX=function(){
        return pointX;
    };
    
    this.getY=function(){
        return pointY;
    };
    
    this.movePoint = function(pX,pY){
        this.setX(pX);
        this.setY(pY);
    };
    
     this.setColor=function(pColor){
        color=pColor;
    };
    
    this.getColor=function(){
        return color;
    };
    
    
}

function Figure(pId, pLabel, pColor, pBorderSize, pX, pY) {
 
    var id = pId;
    var label = pLabel;
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
    //Points in range is a function that add all the points that are between the range given in pointInRange
     this.prototype.pointsInRange=function(pX1,pX2,pY1,pY2,pColorsOfThePoints,pointsInRange){
        for (var actualPointY=pY1; actualPointY<pY2; actualPointY++){
            for (var actualPointX=pX1; actualPointY<pX2; actualPointX++){
                var actualPoint = point(actualPointX,actualPointY,pColorsOfThePoints);
                pointsInRange.push(actualPoint);
            }
        }
        return pointsInRange;
    };
}

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
    
    this.prototype.isInPointIn = function (pX,pY) {
        //We are making a range between the borders of the circle to know if the pont x,y 
        //its in the area of the circle
        var pointX1 = (this.getX() - this.getRadius());
        var pointX2 = (this.getX() + this.getRadius());
        
        var pointY1 = (this.getY() - this.getRadius());
        var pointY2 = (this.getY() + this.getRadius());
        
        if((pX>=pointX1 && pX<=pointX2)&&(pY>=pointY1 && pY<=pointY2)){
            return true;
        }
        else{
            return false;
        }
        
    };
    
    this.prototype.drawFigure = function () {
        var _pointArray = [];
        var pointX1 = (this.getX() - this.getRadius());
        var pointX2 = (this.getX() + this.getRadius());
        
        var pointY1 = (this.getY() - this.getRadius());
        var pointY2 = (this.getY() + this.getRadius());
        
        var distanceBetweenPoints = 0;
        for(pointY2;pointY2>pointY1;pointY2--){
            _pointArray=this.pointsInRange(pX-distanceBetweenPoints,pX+distanceBetweenPoints,pointY2,pointY2,pColor,_pointArray);
            if(pointY2>pY){
                distanceBetweenPoints++;
            }
            else{
                distanceBetweenPoints--;
            }
        }
        return _pointArray;
        
        
        
    };
   
    this.prototype.drawFigure = function () {
        
    };
                
}

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
        var _pointArray = [];
        _pointArray=this.pointsInRange(pX,x2,y2,pY,pColor,_pointArray);
        return _pointArray;
    };
    
    this.prototype.drawFigure = function () {
        
    };
}

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

function Design(pDesignName){
     
     var _DesignName =pDesignName;
     var _figures = [];
     var _basicPoints = [];
     var _basicLinesBetweenPoints= [];
     //Amount of figures its used as a counter in the design. The actual amount of figures will be the id of any new figure added to the project.
     var amountOFFigures = 0;
     
     
       
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
     
     this.drawBasicPoints();

 
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
 
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 */

function ProjectManager(){
    var actualDesign = new Design("New");
    var canvasContext =  document.getElementById("_Canvas").getContext('2d');
    var currentXpostion;
    var currentYposition;
    
    
    
    //This function is the one that as soon as the program load, it loads canvasManagment
    
    this.startCachosDesign = function(){
          this.canvasManagment();
          this.drawBasicPoints();
    };
 
    // This is the function that controls the interactions between the user and the canvas
    this.canvasManagment = function(){
        canvasContext.canvas.addEventListener('mousemove',function(event){
        var xPosition = event.clientX - canvasContext.canvas.offsetLeft;
        var yPosition = event.clientY - canvasContext.canvas.offsetTop;
        document.getElementById('mousePositionText').innerHTML ='Mouse Position X '+xPosition+' , Y '+yPosition;},false);
        this.drawBasicPoints();
    };

    //These function are to controll the mose movement and to save the x and y position when it is clicked.
    
    this.drawBasicPoints= function(){
        var actualPoints=actualDesign.getBasicPoints();
        for( var amountOfPoints = 0;amountOfPoints<9;amountOfPoints++){
            var positionX = actualPoints[amountOfPoints].getX();
            var positionY = actualPoints[amountOfPoints].getY();
            this.paintApixel(positionX,positionY);
            
        }
        
    };


    this.getActualDesign  = function(){
        return actualDesign;
    };

    this.setActualDesign = function(pActualDesign){
      actualDesign = pActualDesign;  
    };


    this.addCircle = function(pLabel, pColor,pBorderSize, pX, pY, pRadius, pFill){
        actualDesign.addCircle(pLabel, pColor,pBorderSize, pX, pY, pRadius, pFill);
     };

     this.addAsquare = function (pX, pY, pWidth, pHeight) {
      actualDesign.addSquare(pX, pY, pWidth, pHeight);
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

    this.drawFigure=function(pId){
       var _FigureToDraw = actualDesign.getFigure(pId);
       var pointsToDraw = _FigureToDraw.drawFigure();
       drawFromList(pointsToDraw);
     };

    this.paintApixel= function(pX, pY) {  
        var designCanvas = document.getElementById("_Canvas").getContext("2d");
        designCanvas.fillRect(pX, pY, 9, 9);
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
    
    window.addEventListener('load',function(){
        projectObject = new ProjectManager();
        projectObject.startCachosDesign();});