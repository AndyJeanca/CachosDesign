/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
 
  // The base Class implementation (does nothing)
  this.Class = function(){};
 
  // Create a new Class that inherits from this class
  Class.extend = function(prop) {
    var _super = this.prototype;
   
    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;
   
    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
           
            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];
           
            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);        
            this._super = tmp;
           
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
   
    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }
   
    // Populate our constructed prototype object
    Class.prototype = prototype;
   
    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;
 
    // And make this class extendable
    Class.extend = arguments.callee;
   
    return Class;
  };



var  point = Class.extend({
    init: function(pPosition,pPointX,pPointY,pColor){
    this.position = pPosition;
    this.pointX = pPointX;
    this.pointY = pPointY;
    this.color = pColor;
    this.pointSize = 0;
    },
    
    
    setX : function(pX){
        this.pointX=pX;
    },
    
    setY : function(pY){
        this.pointY=pY;
    },
    
    getX : function(){
        return this.pointX;
    },
    
    getY : function(){
        return this.pointY;
    },
    
    movePoint : function(pX,pY){
        this.setX(pX);
        this.setY(pY);
    },
    
    setColor : function(pColor){
        this.color=pColor;
    },
    
    getColor : function(){
        return this.color;
    },
    
    setSize : function(pSize){
        this.pointSize=pSize;
    },
    
    getSize : function(){
        return this.pointSize;
    }
    
});

var Figure = Class.extend({
    init : function(pId, pLabel, pColor, pBorderSize, pX, pY) {
 
    this.id = pId;
    this.label = pLabel;
    this.color = pColor;
    this.borderSize = pBorderSize;
    this.x = pX;
    this.y = pY;
    },
    
    getId : function(){
        return this.id;
    }, 
    
    getLabel : function(){
        return this.label;
    },
        
    getType : function(){
    return this.type;
    },
        
    getColor : function(){
    return this.color;
    },
    
    getBorderSize : function(){
    return this.borderSize;
    },
        
    getX : function(){
    return this.x;
    },
    
        
    getY : function(){
    return this.y;
    },
    
    setX : function(pX) {
        x = this.pX;
    },
    
    setY : function(pY) {
        y = this.pY;
    },
    
    setColor : function(pColor) {
        color = this.pColor;
    },
    
    setBorderSize : function(pBorderSize) {
        borderSize = this.pBorderSize;
    },
    
    setLabel : function(pLabel) {
        label = this.pLabel;
    },
    
    printInformationOfFigure : function () {
        
    },
    
    isInPointIn : function () {
        
    },
    
    drawFigure : function () {
        
    },
            
    //Points in range is a function that add all the points that are between the range given in pointInRange
     pointsInRange : function(pX1,pX2,pY1,pY2,pColorsOfThePoints,pointsInRange){
        for (var actualPointY=pY1; actualPointY<pY2; actualPointY++){
            for (var actualPointX=pX1; actualPointY<pX2; actualPointX++){
                var actualPoint = new point(actualPointX,actualPointY,pColorsOfThePoints);
                pointsInRange.push(actualPoint);
            }
        }
        return pointsInRange;
    }
});

var Circle = Figure.extend({
    init: function(pId, pLabel, pType, pColor, pBorderSize, pX, pY, pRadius, pFill) {
        this._super(pId, pLabel, pType, pColor, pBorderSize, pX, pY);
        this.radius = pRadius;
        this.fill = pFill;
    },
    
    getRadius : function () {
        return this.radius;
    },
    
    getFill : function () {
        return this.fill;
    },
    
    setRadius : function (pRadius) {
        this.radius = pRadius;
    },
    
    setFill : function (pFill) {
        this.fill = pFill;
    },
    
    isInPointIn : function (pX,pY) {
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
        
    },
    
    drawFigure : function () {
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
        
        
        
    }               
});

var Line = Figure.extend({
    init : function (pId, pLabel, pType, pColor, pBorderSize, pX, pY, pX2, pY2) {
        
        this._super(pId, pLabel, pColor, pBorderSize, pX, pY);
        this.x2 = pX2;
        this.y2 = pY2;
    },
    
    getX2  :function () {
      return this.x2;  
    },
    
    getY2 : function () {
        return this.y2;
    },
    
    setX2 : function (pX2) {
        this.x2 = pX2;
    },
    
    setY2 : function (pY2) {
        y2 = pY2;
    },
    
    isInPointIn : function () {
        
    },
    
    drawFigure : function (canvasContext) {

        alert(this.x+" "+this.y);
        canvasContext.moveTo(this.x,this.y);
        canvasContext.lineTo(this.x2,this.y2);
        canvasContext.stroke()
    }
    
});

var Square = Figure.extend({
    init : function(pId, pLabel, pType, pColor, pBorderSize, pX, pY, pWidth, pHeight, pFill) {
    this._super(pId, pLabel, pType, pColor, pBorderSize, pX, pY);
    this.width = pWidth;
    this.height = pHeight;
    this.fill = pFill;
    },
    
    getWidth : function () {
      return this.width;  
    },
    
    getHeight : function () {
        return this.height;
    },
    
    getFill : function () {
        return this.fill;
    },
    
    setWidth : function (pWidth) {
      this.width = pWidth;  
    },
    
    setHeight : function (pHeight) {
        this.height = pHeight;
    },
    
    setFill : function () {
      this.fill = pFill;  
    },
    
    isInPointIn : function () {
        
    },
    
    drawFigure : function () {
        
    }
    
});

var Design= Class.extend({
    init : function (pDesignName){
     
     this._DesignName =pDesignName;
     this._figures = [];
     this._basicPoints = [];
     this._basicLinesBetweenPoints= [];
     //Amount of figures its used as a counter in the design. The actual amount of figures will be the id of any new figure added to the project.
     this.amountOFFigures = 0;
     this.drawBasicPoints();
     this.createLinesBetweenPoints();
    },
     
     
     drawBasicPoints : function(){
         for (var amountOfBasicPoint = 0; amountOfBasicPoint<9; amountOfBasicPoint++){
             var newPoint = new point (amountOfBasicPoint,0,0,1);
             this._basicPoints.push(newPoint);
         }
         //Point A
         this._basicPoints[0].movePoint(100,100);
         //Point A curve 1
         this._basicPoints[1].movePoint(170,147);
         //Point A curve 2
         this._basicPoints[2].movePoint(270,147);
         //Point B
         this._basicPoints[3].movePoint(400,100);
         //Point C
         this._basicPoints[4].movePoint(450,180);
         //PointD
         this._basicPoints[5].movePoint(600,300);
         //pointE
         this._basicPoints[6].movePoint(100,300);
         //pointE curve1
         this._basicPoints[7].movePoint(120,170);
         //pointECurve2
         this._basicPoints[8].movePoint(120,250);
         
         
     },
     
     
     createLinesBetweenPoints : function(){
         for (var amountOfBasicPoint = 0; amountOfBasicPoint<8; amountOfBasicPoint++){
             var initialPoint = this._basicPoints[amountOfBasicPoint];
             var finalPoint = this._basicPoints[amountOfBasicPoint+1];
             
             var line = new Line(amountOfBasicPoint, "", "Line", 7, 7,initialPoint.getX() , initialPoint.getY(), finalPoint.getX(), finalPoint.getY());
                                   
             this._basicLinesBetweenPoints.push(line);
         }
         
         
     },
     

 
     //These are the functions to modificate the name of the design
     
     getDesignName : function(){
         return this._DesignName;
     },
     
     setDesignName : function(pNewDesignName){
         _DesignName = this.pNewDesignName;
     },
     
     //These are the functions to add a figure to the project
     
     
     addCircle : function(pLabel, pColor,pBorderSize, pX, pY, pRadius, pFill){
         var newCircle = Circle(amountOFFigures,pLabel, pColor, pBorderSize, pX, pY, pRadius, pFill);
         this._figures.push(newCircle);
         this.amountOFFigures++;
     },
     
     addSquare : function (pLabel, pType, pColor, pBorderSize, pX, pY, pWidth, pHeight, pFill){
         var newSquare = Square(amountOFFigures, pLabel, pType, pColor, pBorderSize, pX, pY, pWidth, pHeight, pFill);
         this._figures.push(newSquare);
         this.amountOFFigures++;  
     },
     
     addLine  : function (pLabel, pType, pColor, pBorderSize, pX, pY, pX2, pY2){
         var newLine = Line(amountOFFigures, pLabel, pType, pColor, pBorderSize, pX, pY, pX2, pY2);
         this._figures.push(newLine);
         this.amountOFFigures++;  
     },
     
     getBasicPoints : function(){
         return this._basicPoints;
     },
     
     getBasicLines : function(){
       return this._basicLinesBetweenPoints;  
     },
     
     // As we are using the following functions to get a figure by its id
     
     getFigure : function(pId){
       var arrayWithfigureWithTheId = this._figures.slice(pId,pId);
       var figureWithTheId = arrayWithfigureWithTheId.pop();
       return figureWithTheId;
     },
     
     modificateConourColor : function(){
         
         
     },
     
     modificateSoleColor : function(){
         
         
     },
     
     modificateContourBorderSize : function(){
         
         
     },
     
     modificateSoleBorderSize : function(){
         
     },
     
     whatFigureIsinThisPoint : function(pX,pY){
         
     }
 });
 
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 */

var ProjectManager = Class.extend({
    init : function(){
    this.actualDesign = new Design("New");
    this.currentXpostion;
    this.currentYposition;
    },
    
    
    
    //This function is the one that as soon as the program load, it loads canvasManagment
    
    startCachosDesign : function(){
          this.canvasManagment();
          this.drawBasicPoints();
          this.drawBasicLines();
    },
 
    // This is the function that controls the interactions between the user and the canvas
    canvasManagment : function(){
        var canvasContext = document.getElementById("_Canvas").getContext('2d');
        canvasContext.canvas.addEventListener('mousemove',function(event){
        var xPosition = event.clientX - canvasContext.canvas.offsetLeft ;
        var yPosition = event.clientY - canvasContext.canvas.offsetTop ;
        document.getElementById('mousePositionText').innerHTML ='Mouse Position X '+xPosition+' , Y '+yPosition;},false);
        
    },

    //These function are to controll the mose movement and to save the x and y position when it is clicked.
    
    drawBasicPoints :  function(){
        
        var actualPoints=this.actualDesign.getBasicPoints();
        for( var amountOfPoints = 0;amountOfPoints<9;amountOfPoints++){
            var positionX = actualPoints[amountOfPoints].getX();
            var positionY = actualPoints[amountOfPoints].getY();
            this.paintApixel(positionX,positionY,7);   
        }   
    },
    
    drawBasicLines : function(){
        var canvasContext = document.getElementById("_Canvas").getContext('2d');
        var actualLines=this.actualDesign.getBasicLines();
        for(var amountOfLines= 0;amountOfLines<8;amountOfLines++){
           actualLines[amountOfLines].drawFigure(canvasContext);
       }
    },
    
    paintApixel :  function(pX, pY,pPixelSize) {  
        var canvasContext = document.getElementById("_Canvas").getContext('2d');
        canvasContext.fillRect(pX, pY, pPixelSize, pPixelSize);
        canvasContext.stroke(); 
    },


    getActualDesign  : function(){
        return this.actualDesign;
    },

    setActualDesign :  function(pActualDesign){
      this.actualDesign = pActualDesign;  
    },
            
    addCircle :  function(pLabel, pColor,pBorderSize, pX, pY, pRadius, pFill){
        this.actualDesign.addCircle(pLabel, pColor,pBorderSize, pX, pY, pRadius, pFill);
     },

    addAsquare : function (pX, pY, pWidth, pHeight) {
      this.actualDesign.addSquare(pX, pY, pWidth, pHeight);
    },

    
   drawFigure : function(pId){
       var _FigureToDraw = actualDesign.getFigure(pId);
       var pointsToDraw = _FigureToDraw.drawFigure();
       drawFromList(pointsToDraw);
     },

    

    drawFromList : function(pListOfPoints){
        var ListOfPoints = [];
        ListOfPoints =pListOfPoints;

        var amountOfPointsLeft=ListOfPoints.length;

        for(var positionOfActualPoint = 0; positionOfActualPoint<amountOfPointsLeft;positionOfActualPoint++){
            var actualPoint = getPointfromListById(positionOfActualPoint,ListOfPoints);
            this.paintApixel(actualPoint.getX(),actualPoint.getY());
        }
    },

    getPointfromListById : function(pId,pListOfPoints){
           var ListOfPoints = [];
           ListOfPoints =pListOfPoints;
           var arrayWithfigureWithTheId = ListOfPoints.slice(pId,pId);
           var figureWithTheId = arrayWithfigureWithTheId.pop();
           return figureWithTheId;
         }
    });
    
    
    
    window.addEventListener('load',function(){
        var projectObject = new ProjectManager();
        projectObject.startCachosDesign();
    });
    })();
    