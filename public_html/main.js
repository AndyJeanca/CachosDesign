/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
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
      prototype[name] = typeof prop[name] === "function" &&
        typeof _super[name] === "function" && fnTest.test(prop[name]) ?
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
//Colrs is basically a class with an array of 16 colors that are aviable to paint all the elements in the project
var Colors = Class.extend({
    init : function() {
        this._colors = [];
        this.loadColors();
    },
   loadColors : function(){
       //Blue 
       for(var numberOfColors = 0 ; numberOfColors<17; numberOfColors++){
           this._colors.push("");
       };
       //Red 1 
       this._colors[0] = "#FF3333";
        //Brown 
       this._colors[1] = "#FF9933";
        //Yellow
       this._colors[2] = "#FFFF33";
        //Green 1
       this._colors[3] = "#99FF33";
        // Purple 
       this._colors[4] = "#FF3399";
        //Red 2
       this._colors[5]= "#F50000";
        //Vine
       this._colors[6]= "#B80000";
        //Green 2
       this._colors[7]="#33FF33";
        //Purple 2
       this._colors[8]="#FF33FF";
        //Blue
       this._colors[9]="#00B8B8";
        //Blue 2
       this._colors[10]= "#00F5F5";
        //Green 3
       this._colors[11]="#33FF99";
        //Orange 
       this._colors[12]="#00F5F5";
        //=purple 3
       this._colors[13]="#9933FF";
        //Blue 3
       this._colors[14]="#3333FF";
        //Blue 3
       this._colors[15]="#3399FF";
       //Blue 3
       this._colors[16]="#FFFFFF";
 
 
     },
             
     getColor : function (pNumber){
        return this._colors[pNumber];
     }
});



var  point = Class.extend({
    init: function(pPosition,pPointX,pPointY,pColor){
   
    //pPosition is the same that id
    this.position = pPosition;
    this.pointX = pPointX;
    this.pointY = pPointY;
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
    },
    
    comparePosition : function(pPoint){
        if(pPoint.getX()===this.pointX && pPoint.getY()===this.pointY){
            return true;
        }
        else{
            return false;
        }    
    }
});
var Figure = Class.extend({
   
    init : function(pId, pColor, pBorderSize, pInitialPoint) {
        this.id = pId;
        
        //Color is a number that represents the position of the color in the colorList
        this.color = pColor;
        this.borderSize = pBorderSize;
        
        this.initialPoint = pInitialPoint;
        
        //colorList is a list composed of 16 hex numbers that are used to represnt colors
        this.colorList = new Colors();
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
        
    getInitialPoint : function(){
    return this.initialPoint;
    },
   
    
     setInitialPoint : function(pPoint) {
        this.initialPoint= pPoint;
    },
 
    setColor : function(pColor) {
        this.color = pColor;
    },
    
    setBorderSize : function(pBorderSize) {
        this.borderSize = pBorderSize;
    },
    
    setLabel : function(pLabel) {
        this.label = pLabel;
    },
    
    printInformationOfFigure : function () {
        
    },
    
    isInPointIn : function () {
        
    },
    
    drawFigure : function () {
        
    },
    
    paintFigure : function () {
        
    },
     
   
    movePoint : function(pPointX,pPointY) {
        this.initialPoint.setX(pPointX);
        this.initialPoint.setY(pPointY);

    },
            
    /*Points in range is a function that add all the points that are between the range given in pointInRange
    *We are giving the array because we want that no matter if the array is empty or with elements,
    *it takes the array push the elements and return the same array plus the new elements.*/
    
     pointsInRange : function(pInitialPoint,pEndingPoing,pPointsInRange){
        for (var actualPointY=pInitialPoint.getY(); actualPointY<pEndingPoing.getY(); actualPointY++){
            for (var actualPointX=pInitialPoint.getX(); actualPointY<pEndingPoing.getX(); actualPointX++){
                var actualPoint = new point(actualPointX,actualPointY);
                pPointsInRange.push(actualPoint);
            }
        }
        return pPointsInRange;
    }
});
var Square = Figure.extend({
    init : function(pId, pColor, pBorderSize, pInitialPoint, pWidth, pHeight) {
    this._super(pId, pColor, pBorderSize, pInitialPoint);
    this.width = pWidth;
    this.height = pHeight;
    },
    
    getWidth : function () {
      return this.width;  
    },
    
    getHeight : function () {
        return this.height;
    },
    
    
    
    setWidth : function (pWidth) {
      this.width = pWidth;  
    },
    
    setHeight : function (pHeight) {
        this.height = pHeight;
    },
   
    
    drawFigure : function () {
    var rect = new Kinetic.Rect({
        x: this.initialPoint.getX(),
        y: this.initialPoint.getY(),
        width: this.width,
        height: this.height,
        opacity : 0.5,
        fill: this.colorList.getColor(16) ,
        stroke: this.colorList.getColor(0) ,
        draggable : true,
        strokeWidth: this.borderSize
      });

      return rect;
        
    },
    paintFigure : function () {
    var rect = new Kinetic.Rect({
        x: this.initialPoint.getX(),
        y: this.initialPoint.getY(),
        width: this.width,
        height: this.height,
        opacity : 0.5,
        fill: this.colorList.getColor(this.color),
        stroke: this.colorList.getColor(this.color) ,
        draggable : true,
        strokeWidth: this.borderSize
      });

      return rect;
        
    }
    
});
var Arc = Figure.extend({  
    
    init : function(pId, pColor, pBorderSize,pInitialPoint, pMiddlePoint, pEndingPoint) {
        
        this._super(pId, pColor, pBorderSize, pInitialPoint);
        //_points is an array composed by two points the (initial point will be a point composed by the pX,pY, the middle point and the finalpoint
       this.middlePoint = pMiddlePoint;
       this.endingPoint=pEndingPoint;
        
    },
    getMiddlePoint: function () {
        return this.middlePoint;
    },
    
    getEndingPoint :function () {
        return this.endingPoint;
    },
    
    
    setMiddlePoint : function (pStartingAngle) {
         this.middlePoint = pStartingAngle;
    },
    
    setEndingPoint : function (pEndingPoint) {
        this.endingPoint = pEndingPoint;
    },
     
    isInPointIn : function (pPoint) {
        var _pointInRange =[];
        _pointInRange = this.pointsInRange(this.initialPoint,this.middlePoint,_pointInRange);
        _pointInRange = this.pointsInRange(this.middlePoint,this.endingPoint,_pointInRange);
        
        for(var currentPointPosition = 0 ; currentPointPosition>_pointInRange.length;currentPointPosition++){
            if(pPoint.comparePosition(_pointInRange[currentPointPosition])){
                return true;
            }
            else{
                
            }
        }
        return false;
        
    },
    
    drawFigure : function () {
        var arc = new Kinetic.Line({
       
        points: [this.initialPoint.getX(),this.initialPoint.getY(),this.middlePoint.getX(),this.middlePoint.getY(),this.endingPoint.getX(),this.endingPoint.getY()],
        stroke: this.colorList.getColor(this.color),
        strokeWidth: this.borderSize,
        lineCap: 'round',
        draggable : true,
        tension: 1
      });
	return arc; 
    }
    
});
var Circle = Figure.extend({
    
    init: function(pId, pColor, pBorderSize,pInitialPoint, pRadius, pFill) {
        this._super(pId, pColor, pBorderSize,pInitialPoint);
        this.radius = pRadius;
        //Is the color of the filler
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
            
     getX : function(){
        return this.initialPoint.getX();
     }, 
             
     getY : function(){
        return this.initialPoint.getY();
     },
             
    isInPointIn : function (pPoint) {
        //We are making a range between the borders of the circle to know if the pont x,y 
        //its in the area of the circle
        var pointX1 = (this.initialPoint.getX() - this.getRadius());
        var pointX2 = (this.initialPoint.getX() + this.getRadius());
        
        var pointY1 = (this.initialPoint.getY() - this.getRadius());
        var pointY2 = (this.initialPoint.getY() + this.getRadius());
        
        if((pPoint.getX()>=pointX1 && pPoint.getX()<=pointX2)&&(pPoint.getY()>=pointY1 && pPoint.getY()<=pointY2)){
            return true;
        }
        else{
            return false;
        }
        
    },
    drawFigure : function () {
        var circle = new Kinetic.Circle({
        x: this.initialPoint.getX(),
        y: this.initialPoint.getY(),
        radius: this.radius,
        fill: this.colorList.getColor(16) ,
        stroke: this.colorList.getColor(0) ,
        opacity: 0.75,
        draggable : true,
        strokeWidth: this.borderSize
      });

     return circle;
        
    },
    paintFigure : function (){
        var circle = new Kinetic.Circle({
        x: this.initialPoint.getX(),
        y: this.initialPoint.getY(),
        radius: this.radius,
        fill: this.colorList.getColor(this.color),
        stroke: this.colorList.getColor(this.color) ,
        opacity: 0.75,
        draggable : true,
        strokeWidth: this.borderSize
      });

     return circle;
        
        
    }
});
var Line = Figure.extend({
    init : function (pId, pColor, pBorderSize,pInitialPoint, pEndingPoint) {
        
       this._super(pId, pColor, pBorderSize, pInitialPoint);
       this.endingPoint=pEndingPoint;
    },
    
     getEndingPoint :function () {
        return this.endingPoint;
    },
    
    setEndingPoint : function (pEndingPoint) {
        this.endingPoint = pEndingPoint;
    },
    modifyLine : function( pInitialPoint,pEndingPoint){
        this.setInitialPoint(pInitialPoint);
        this.setEndingPoint(pEndingPoint);
        
    },
    
    
   
   
            
    isInPointIn : function (pPoint) {
        var _pointInRange =[];
        _pointInRange = this.pointsInRange(this.initialPoint,this.endingPoint,_pointInRange);
        
        for(var currentPointPosition = 0 ; currentPointPosition>_pointInRange.length;currentPointPosition++){
            if(pPoint.comparePosition(_pointInRange[currentPointPosition])){
                return true;
            }
            else{
                
            }
        }
        return false;
    },
    
    drawFigure : function () {
    var line = new Kinetic.Line({
        points: [this.initialPoint.getX(),this.initialPoint.getY(),this.endingPoint.getX(),this.endingPoint.getY()],
        stroke: this.colorList.getColor(0),
        strokeWidth: this.borderSize,
        lineCap: 'round',
        draggable : true,
        lineJoin: 'round',
        opacity: 0.75
      });
      return line;
    },
    paintFigure : function () {
    var line = new Kinetic.Line({
        points: [this.initialPoint.getX(),this.initialPoint.getY(),this.endingPoint.getX(),this.endingPoint.getY()],
        stroke: this.colorList.getColor(this.color),
        strokeWidth: this.borderSize,
        lineCap: 'round',
        draggable : true,
        lineJoin: 'round',
        opacity: 0.75
      });
      return line;
    }
    
    
});
var Sector = Class.extend({
        init : function (pFirstPoint,pSecondPoint,pThirdPoint,pForthPoint){
            this._sectorPoints = [];
            
            this._sectorPoints.push(pFirstPoint);
            this._sectorPoints.push(pSecondPoint);
            this._sectorPoints.push(pThirdPoint);
            this._sectorPoints.push(pForthPoint);
            this.pointSort();
            
            
        },
                
        /*This function sort the point in order that:
         * the firstPoint is the onw top-left
         * the secondPoint is the one in the top-right
         * the third one is the one down-left
         * the forth one is the one down rigth
         */
        pointSort : function(){
            this.highestToLowestPointSort();
            this.leftAndRightSort();
    
        },
                
       //In this sort we are sorting from the one with the lowest x value (because that means is the highest) to the one with lthe highest point x
        highestToLowestPointSort : function(){
            for(var amountOfPoints = 0;amountOfPoints<3;amountOfPoints++ ){
                var point1ToCompare = this._sectorPoints[amountOfPoints];
                var point2ToCompare = this._sectorPoints[amountOfPoints+1];
                if(point1ToCompare.getX()>point2ToCompare.getX()){
                    //Switch the points
                   this._sectorPoints[amountOfPoints]=point2ToCompare;
                   this._sectorPoints[amountOfPoints+1]=point1ToCompare;
                   //Reset the cycle
                   this.highestToLowestPointSort();
                 
                };
            };
    
        },
                
        leftAndRightSort : function(){
             alert(this._sectorPoints[0].getX());
             alert(this._sectorPoints[1].getX());
             alert(this._sectorPoints[2].getX());
             alert(this._sectorPoints[3].getX());
            //This function is after the highestToLowestPointSort()
            var point1HighToCompare = this._sectorPoints[0];
            var point2HighToCompare = this._sectorPoints[1];
            
            if(point1HighToCompare.getY()>point2HighToCompare.getY()){
                //Switch
                this._sectorPoints[0]=point2HighToCompare;
                this._sectorPoints[1]=point1HighToCompare;
                
                
            };
            
            var point1LowToCompare = this._sectorPoints[2];
            var point2LowToCompare = this._sectorPoints[3];
           
            
            if(point1LowToCompare.getY()>point2LowToCompare.getY()){
                //Switch
                this._sectorPoints[2]=point2LowToCompare;
                this._sectorPoints[3]=point1LowToCompare;
                
                
            };
            
            
            
    
        },
        
        getPoints : function(){
    
           return this._sectorPoints;
                
        }
        /*
         * To paint the sector is divided into two parts partLeft and PartRight.
         * Part Left = are all points from the point high-left to point low-left and to point low-right
         * Part Right= are all points from point high-left to point high-right and to point low-right
         *
         *then we make lines that go from one part to the other part
         */
        
                
        
        
        

   
});
var Design= Class.extend({
    init : function (pDesignName){
        
        this._DesignName =pDesignName;
     
        //figures is a array composed of all the child classes of figure(Arc,Line,Circle,Square)
        this._figures = [];
        
        /*_lineFigures is an array composed by all the ids of the figure lines. It is used to know where the lines are because
         * in _figures the lines are always after the two endpoints that determine how the line is.
         */
        this._lineFigures = [];
        
        //Basic point is a list composed of the 5 basic points that all design have
         this._basicPoints = [];
         
         /*Conotour lines is composed 
          * by two straight basic lines, 
          * two curved basic lines and a 
          * sole that is also a straight line but that its characteristics can be modified independently
          */
          
         this._contourLines= [];
         
        //Amount of figures its used as a counter in the design. The actual amount of figures will be the id of any new figure added to the project.
         this.amountOFFigures = 0;
         
         this.ubicateBasicPoints();
         
         this.createContourLines();
    },
     
     
     ubicateBasicPoints : function(){
         for (var amountOfBasicPoint = 0; amountOfBasicPoint<7; amountOfBasicPoint++){
             var newPoint = new point (amountOfBasicPoint,0,0,1);
             this._basicPoints.push(newPoint);
         }
         //Point A
         this._basicPoints[0].movePoint(100,100);
         //Point A curve 
         this._basicPoints[1].movePoint(220,147);
         //Point B
         this._basicPoints[2].movePoint(400,100);
         //Point C
         this._basicPoints[3].movePoint(450,180);
         //PointD
         this._basicPoints[4].movePoint(600,300);
         //pointE
         this._basicPoints[5].movePoint(100,300);
         //pointE curve
         this._basicPoints[6].movePoint(120,210);
         
         
     },
     modificatePointById : function (pId,pPoint){
        this._basicPoints[pId].movePoint(pPoint.getX(),pPoint.getY());
 
     },
             
     modificateFigureById : function (pId,pPoint){
        this._figures[pId].movePoint(pPoint.getX(),pPoint.getY());
 
     },
     
     modificateFigureColorById : function (pId,pColor){
        this._figures[pId].setColor(pColor);
 
     },
     
     createBasicLines : function(){
        this._contourLines= [];
        this.createContourLines();
        this.createContourArcs();
     },
     createContourLines: function(){
         /*In this functionn we create:
          * _contourLines[0]= line B-C
          * _contourLines[1]= line C-D
          * _contourLines[2]= line D-E
          */
         
         for (var amountOfBasicPoint = 2; amountOfBasicPoint<5; amountOfBasicPoint++){
             var initialPoint = this._basicPoints[amountOfBasicPoint];
             var endingPoint = this._basicPoints[amountOfBasicPoint+1];
             
             var line = new Line(amountOfBasicPoint, 1, 1,initialPoint, endingPoint);
                                   
             this._contourLines.push(line);
         } 
     },
     
     createContourArcs : function(){
        
        /*In this functionn we create:
          * _contourLines[3]= line A-B
          * _contourLines[4]= line E-A
          */
         
        var initialPoint1 = this._basicPoints[0];
        var middlePoint1 = this._basicPoints[1];
        var endingPoint1 = this._basicPoints[2];
        
        var newArc = new Arc(2, 1, 1,initialPoint1, middlePoint1, endingPoint1);
        this._contourLines.push(newArc);
        
        var initialPoint2 = this._basicPoints[5];
        var middlePoint2 = this._basicPoints[6];
        var endingPoint2 = this._basicPoints[0];
        
        var newArc2 = new Arc(2, 1, 1,initialPoint2, middlePoint2, endingPoint2);
        this._contourLines.push(newArc2);
 
     },
     

 
     //These are the functions to modificate the name of the design
     
     getDesignName : function(){
         return this._DesignName;
     },
     
     setDesignName : function(pNewDesignName){
          this._DesignName =pNewDesignName;
     },
     
     //These are the functions to add a figure to the project
     
     
     addCircle : function(pColor, pBorderSize,pInitialPoint, pRadius, pFill){
         var newCircle = new Circle(this.amountOFFigures, pColor, pBorderSize,pInitialPoint, pRadius, pFill);
         this._figures.push(newCircle);
         this.amountOFFigures++;
     },
     
     addSquare : function (pColor, pBorderSize, pInitialPoint, pWidth, pHeight){
         var newSquare = new Square(this.amountOFFigures, pColor, pBorderSize, pInitialPoint, pWidth, pHeight);
         this._figures.push(newSquare);
         this.amountOFFigures++;  
     },
     
     addLine  : function ( pColor, pBorderSize,pInitialPoint, pEndingPoint){
         this.addCircle(pColor, pBorderSize,pInitialPoint, 7,1);
         this.addCircle(pColor, pBorderSize,pEndingPoint, 7,1); 
         var newLine = new Line(this.amountOFFigures, pColor, pBorderSize,pInitialPoint, pEndingPoint);
         this._figures.push(newLine);
         this._lineFigures.push(this.amountOFFigures);
         this.amountOFFigures++;  
     },
    
    
     reloadFigureLines : function(){
        for(var actualLine = 0; actualLine< this._lineFigures.length;actualLine++){
            //linePositionFigure is the position where the line is in _figure and it is stored in _lineFigures
            var linePositionInFigure= this._lineFigures[actualLine];
            
            //The initial point and the ending point of the line are right behind it.
            var newEndingPoint = this._figures[linePositionInFigure-1].getInitialPoint();
            var newInitialPoint = this._figures[linePositionInFigure-2].getInitialPoint();
            this._figures[linePositionInFigure].modifyLine(newInitialPoint,newEndingPoint);
            
        }
        
    
      },
     
     getBasicPoints : function(){
         return this._basicPoints;
     },
     
     getBasicLines : function(){
       return this._contourLines;  
     },
     
     // As we are using the following functions to get a figure by its id
     
     getFigure : function(pId){
       var figureDraw=this._figures[pId];
       return figureDraw;
     },
     
     getAmountOfFigures : function(){
        return this.amountOFFigures;
     },
     
     modificateConourColor : function(pColor){
         //Line A-B
         this._basicPoints[3].setColor(pColor);
         //Point B-C
         this._basicPoints[0].setColor(pColor);
         //Point C-D
         this._basicPoints[1].setColor(pColor);
         //point E-A
         this._basicPoints[4].setColor(pColor);
         
         
     },
     
     modificateSoleColor : function(){
         //PointD-E
         this._basicPoints[2].setColor(pColor);
         
         
     },
     
     modificateContourBorderSize : function(pBorderSize){
        //Line A-B
         this._basicPoints[3].setBorderSize(pBorderSize);
         //Point B-C
         this._basicPoints[0].setBorderSize(pBorderSize);
         //Point C-D
         this._basicPoints[1].setBorderSize(pBorderSize);
         //point E-A
         this._basicPoints[4].setBorderSize(pBorderSize);
         
         
     },
     
     modificateSoleBorderSize : function(pBorderSize){
        this._basicPoints[2].setBorderSize(pBorderSize);
     },
     
     whatFigureIsinThisPoint : function(pPoint){
        for(var actualFigure =0; actualFigure<this.amountOFFigures;actualFigure++){
            if(this._figures[actualFigure].isInPointIn(pPoint)){
                return this._figures[actualFigure];
            }
        }
        return false;
         
     }
 });
var ProjectManager = Class.extend({
    init : function(){
        this.actualDesign = new Design("New");
        this.currentXpostion = 170;
        this.currentYposition = 170;
        this.kineticBase;
        //This layer contains the basic points and basic lines
        this.firstlayer = new Kinetic.Layer();
    },
    
    
    
    //This function is the one that as soon as the program load, it loads canvasManagment
    
    startCachosDesign : function(){
        
      this.kineticManagment();
      this.cleanLayer();
      this.reloadCachosDesign();
      this.drawFigures();
      this.drawBasicLines();
      this.drawBasicPoints();
      
    },
    cleanLayer : function(){
        this.firstlayer = new Kinetic.Layer();

    },
    reloadCachosDesign : function(){
        this.kineticBase.add(this.firstlayer);
    },
            
    // This is the function that controls the interactions between the user and the canvas
    kineticManagment : function(){
         this.kineticBase = new Kinetic.Stage({
            container: 'container',
            width: 700,
            height: 400
          });

    },
    

    //These function are to controll the mose movement and to save the x and y position when it is clicked.
    
    drawBasicPoints :  function(){
        
        var actualPoints=this.actualDesign.getBasicPoints();
        for( var amountOfPoints = 0;amountOfPoints<9;amountOfPoints++){
            var basicPoint = actualPoints[amountOfPoints];
            this.buildBasicPoint(basicPoint,amountOfPoints,this);
              
        }   
    },
    
    buildBasicPoint: function(pBasicPoint,pPositionOfPoint,pProject){
        var actualProject = pProject;
        var basicPointCircle = new Circle(pPositionOfPoint, 1, 4,pBasicPoint, 7, 1);
        var basicPoint = basicPointCircle.paintFigure();
        
        var drawInProject = function(){
            actualProject.firstlayer.draw();
        };
        
        var updatePoint = function(pNewPoint){
            actualProject.actualDesign.modificatePointById(pPositionOfPoint,pNewPoint);
            actualProject.startCachosDesign();
            
        };
        
        
        basicPoint.on('mouseover',function(){
            this.radius(12);
            drawInProject();
        });
        
        basicPoint.on('mouseout',function(){
            this.radius(7);
            drawInProject();
        });
        
        basicPoint.on('dragend',function(){
            var newBasicPoint = new point (pPositionOfPoint,this.getX(),this.getY(),5);
            updatePoint(newBasicPoint);
        });
        
        this.firstlayer.add(basicPoint);
        this.reloadCachosDesign();
           
    },
    
     createConfiguration : function(pFigureId,pX,pY){
    var boxGeneralGroup = new Kinetic.Group({
        x: pX,
        y: pY
        
    });
    var colorGroup=new Kinetic.Group({
        
    });
    var colorList = new Colors();
    for(var actualColor = 0; actualColor<16 ; actualColor++){
        var positionPoint = new point (0,actualColor*2,actualColor*2,5)
        var circleForColor = new Circle(0, 1, 4,positionPoint, 4, actualColor);
        var colorDrawn = circleForColor.paintFigure();
       colorDrawn.on('mouseover',function(){
            this.radius(7);
            this.firstlayer.draw();
        });
        
        colorDrawn.on('mouseout',function(){
            this.radius(4);
            this.firstlayer.draw();
        });
        
        colorDrawn.on('click',function(){
            this.actualDesign.modificateFigureColorById(pFigureId,actualColor);
        });
        
        
        colorGroup.add(colorDrawn);
        
    }
    
    this.firstLayer.add(colorGroup);
    this.reloadCachosDesign();

    },
    
    
    buildFigure: function(pFigureDrawn,pPositionOfFigures,pProject){
        var actualProject = pProject;
        
        var drawInProject = function(){
            actualProject.firstlayer.draw();
        };
        
        var updatePoint = function(pNewPoint){
            actualProject.actualDesign.modificateFigureById(pPositionOfFigures,pNewPoint);
            actualProject.startCachosDesign();
            
        };
        
        var openConfigurationBox = function(pX,pY){
            alert( 'Double Click');
            this.createConfiguration(pFigureDrawn,pX,pY);
            
        };
        
        
        pFigureDrawn.on('mouseover',function(){
            this.opacity(1);
            drawInProject();
        });
        
        pFigureDrawn.on('mouseout',function(){
            this.opacity(0.5);
            drawInProject();
        });
        
        pFigureDrawn.on('dragend',function(){
            var newBasicPoint = new point (pPositionOfFigures,this.getX(),this.getY(),5);
            updatePoint(newBasicPoint);
        });
        
        pFigureDrawn.on('dblclick',function(){
            openConfigurationBox(this.getX(),this.getY());
            
        });
        
        this.firstlayer.add(pFigureDrawn);
        this.reloadCachosDesign();
           
    },
    
   
    drawBasicLines : function(){
        this.actualDesign.createBasicLines();
        var actualLines= this.actualDesign.getBasicLines();
        for(var amountOfLines= 0;amountOfLines<5;amountOfLines++){
           var actualLine = actualLines[amountOfLines].drawFigure();
           this.firstlayer.add(actualLine);
           this.firstlayer.draw();
       }
       
    },
     pointFromCurrentPosition : function(){
        var pointInCurrentPosition = new point (0,this.currentXpostion,this.currentYposition,1);
        return pointInCurrentPosition;
     },
     
     endingPointFromCurrentPositionForLine : function(){
        var pointInCurrentPosition = new point (0,this.currentXpostion+40,this.currentYposition+40,1);
        return pointInCurrentPosition;
     },
    
    getActualDesign  : function(){
        return this.actualDesign;
    },

    setActualDesign :  function(pActualDesign){
      this.actualDesign = pActualDesign;  
    },
            
    addCircle :  function( pColor, pBorderSize,pInitialPoint, pRadius, pFill){
        this.actualDesign.addCircle(pColor, pBorderSize,pInitialPoint, pRadius, pFill);
     },

    addSquare : function (pColor, pBorderSize, pInitialPoint, pWidth, pHeight){
       this.actualDesign.addSquare(pColor, pBorderSize, pInitialPoint, pWidth, pHeight);
    },
    addLine :  function (pColor, pBorderSize,pInitialPoint, pEndingPoint){
         this.actualDesign.addLine(pColor, pBorderSize,pInitialPoint, pEndingPoint);


    },
    
    drawFigures : function(){
    this.actualDesign.reloadFigureLines();
    for(var actualFigure = 0; actualFigure<this.actualDesign.getAmountOfFigures();actualFigure++){
        var _FigureToDraw = this.actualDesign.getFigure(actualFigure);
        var figureDrawn = _FigureToDraw.drawFigure();
        this.buildFigure(figureDrawn,actualFigure,this);
        
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
       projectObject = new ProjectManager();
       projectObject.startCachosDesign();
      
       
   });
   
   addCircleClick = function(){
       var initialPoint = projectObject.pointFromCurrentPosition();
       projectObject.addCircle(1, 1,initialPoint, 40, 1);
       projectObject.startCachosDesign();
   };
   
    addLineClick = function(){
       var initialPoint = projectObject.pointFromCurrentPosition();
       var endingPoint = projectObject.endingPointFromCurrentPositionForLine();
       projectObject.addLine(1, 1,initialPoint, endingPoint);
       projectObject.startCachosDesign();
   };
   
   addSquareClick = function(){
       var initialPoint = projectObject.pointFromCurrentPosition();
       projectObject.addSquare(1, 1, initialPoint, 40, 40);
       projectObject.startCachosDesign();
   };