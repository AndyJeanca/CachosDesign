/*
                                                        ______                 _         ____            _           
                                                      /_  __/__  ____  ____  (_)____   / __ \___  _____(_)___ _____ 
                                                       / / / _ \/ __ \/ __ \/ / ___/  / / / / _ \/ ___/ / __ `/ __ \
                                                      / / /  __/ / / / / / / (__  )  / /_/ /  __(__  ) / /_/ / / / /
                                                     /_/  \___/_/ /_/_/ /_/_/____/  /_____/\___/____/_/\__, /_/ /_/ 
                                                                                                      /____/        
 */


// --- file[Class.js] ---

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


// --- file[Colors.js] ---

/*
                                                                    ______      __               
                                                                  / ____/___  / /___  __________
                                                                 / /   / __ \/ / __ \/ ___/ ___/
                                                                / /___/ /_/ / / /_/ / /  (__  ) 
                                                                \____/\____/_/\____/_/  /____/  

 */



var Colors = Class.extend({
    init : function() {
        this._colors = [];
        this._RGBcolors = [];
        this.loadColors();
        
    },  
    
     loadColors : function(){
       //Blue 
       for(var numberOfColors = 0 ; numberOfColors<17; numberOfColors++){
           this._colors.push("");
           var newRGBColor = new RGBColor(0,0,0);
           this._RGBcolors.push(newRGBColor);
       };
       //Red 1 
       this._colors[0] = "#FF3333";
       this._RGBcolors[0].setRed(255);
       this._RGBcolors[0].setGreen(51);
       this._RGBcolors[0].setBlue(51);
        //Brown 
       this._colors[1] = "#FF9933";
       this._RGBcolors[1].setRed(255);
       this._RGBcolors[1].setGreen(253);
       this._RGBcolors[1].setBlue(51);
        //Yellow
       this._colors[2] = "#FFFF33";
       this._RGBcolors[2].setRed(255);
       this._RGBcolors[2].setGreen(255);
       this._RGBcolors[2].setBlue(51);
        //Green 1
       this._colors[3] = "#99FF33";
       this._RGBcolors[3].setRed(153);
       this._RGBcolors[3].setGreen(255);
       this._RGBcolors[3].setBlue(51);
        // Purple 
       this._colors[4] = "#FF3399";
       this._RGBcolors[4].setRed(255);
       this._RGBcolors[4].setGreen(51);
       this._RGBcolors[4].setBlue(153);
        //Red 2
       this._colors[5]= "#F50000";
       this._RGBcolors[5].setRed(245);
       this._RGBcolors[5].setGreen(0);
       this._RGBcolors[5].setBlue(0);
        //Vine
       this._colors[6]= "#B80000";
       this._RGBcolors[6].setRed(184);
       this._RGBcolors[6].setGreen(0);
       this._RGBcolors[6].setBlue(0);
        //Green 2
       this._colors[7]="#33FF33";
       this._RGBcolors[7].setRed(51);
       this._RGBcolors[7].setGreen(255);
       this._RGBcolors[7].setBlue(51);
        //Purple 2
       this._colors[8]="#FF33FF";
       this._RGBcolors[8].setRed(255);
       this._RGBcolors[8].setGreen(51);
       this._RGBcolors[8].setBlue(255);
        //Blue
       this._colors[9]="#00B8B8";
       this._RGBcolors[9].setRed(0);
       this._RGBcolors[9].setGreen(184);
       this._RGBcolors[9].setBlue(184);
        //Blue 2
       this._colors[10]= "#00F5F5";
       this._RGBcolors[10].setRed(0);
       this._RGBcolors[10].setGreen(245);
       this._RGBcolors[10].setBlue(245);
        //Green 3
       this._colors[11]="#33FF99";
       this._RGBcolors[11].setRed(51);
       this._RGBcolors[11].setGreen(255);
       this._RGBcolors[11].setBlue(153);
        //Orange 
       this._colors[12]="#00F5F5";
       this._RGBcolors[12].setRed(0);
       this._RGBcolors[12].setGreen(245);
       this._RGBcolors[12].setBlue(245);
        //=purple 3
       this._colors[13]="#9933FF";
       this._RGBcolors[13].setRed(153);
       this._RGBcolors[13].setGreen(51);
       this._RGBcolors[13].setBlue(255);
        //Blue 3
       this._colors[14]="#3333FF";
       this._RGBcolors[14].setRed(51);
       this._RGBcolors[14].setGreen(51);
       this._RGBcolors[14].setBlue(255);
        //Blue 3
       this._colors[15]="#3399FF";
       this._RGBcolors[15].setRed(51);
       this._RGBcolors[15].setGreen(153);
       this._RGBcolors[15].setBlue(255);
       //Blue 3
       this._colors[16]="#FFFFFF";
       this._RGBcolors[16].setRed(255);
       this._RGBcolors[16].setGreen(255);
       this._RGBcolors[16].setBlue(255);
 
 
     },
             
     getColor : function (pNumber){
        return this._colors[pNumber];
     },
     getRGBColor : function (pColorId,pColor){
        /*pColor = 
         * 1 red
         * 2 Green
         * 3 Blue
         */
        switch(pColor){
               case 1: 
                    return this._RGBcolors[pColorId].getRed();
                    break;
               case 2: 
                    return this._RGBcolors[pColorId].getGreen();
                    break;
               case 3: 
                    return this._RGBcolors[pColorId].getBlue();
                    break;
            
        }
       
     }
});

var RGBColor = Class.extend({
    init : function(red,green,blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        
    },
    
    getRed : function(){
        return this.red;
    },
    
    setRed : function(pRed){
        this.red=pRed;
    },
    
    getGreen : function(){
        return this.green ;
    },
    
    setGreen  : function(pGreen){
        this.green=pGreen ;
    },
    
    getBlue : function(){
        return this.blue;
    },
    
    setBlue : function(pBlue){
        this.blue=pBlue;
    }
    
    
    
});
// --- file[Point.js] ---


/*
                                                                        ____        _       __ 
                                                                       / __ \____  (_)___  / /_
                                                                      / /_/ / __ \/ / __ \/ __/
                                                                     / ____/ /_/ / / / / / /_  
                                                                    /_/    \____/_/_/ /_/\__/  

 */


var  point = Class.extend({
    init: function(pPointX,pPointY){
   
    //pPosition is the same that id
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
    
});

// --- file[Figure.js] ---

/*
                                                                    _______                     
                                                                   / ____(_)___ ___  __________ 
                                                                  / /_  / / __ `/ / / / ___/ _ \
                                                                 / __/ / / /_/ / /_/ / /  /  __/
                                                                /_/   /_/\__, /\__,_/_/   \___/ 
                                                                        /____/                  
 */

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
    
    getX : function(){
        return this.initialPoint.getX();
     }, 
             
     getY : function(){
        return this.initialPoint.getY();
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
    
    drawFigure : function () {
        
    },
    
    paintFigure : function () {
        
    },
     
   
    movePoint : function(pPointX,pPointY) {
        this.initialPoint.setX(pPointX);
        this.initialPoint.setY(pPointY);

    }
    
});

// --- file[Line.js] ---

/*
                                                                           __    _          
                                                                          / /   (_)___  ___ 
                                                                         / /   / / __ \/ _ \
                                                                        / /___/ / / / /  __/
                                                                       /_____/_/_/ /_/\___/ 
                     
 */

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
    
    
    drawFigure : function (pPaint) {
    if (pPaint){
        var strokeColor = this.colorList.getColor(this.color);
        var strokeWidth = this.borderSize + 3;
    }
    else{
         strokeColor = this.colorList.getColor(0);
         strokeWidth =  4 ;
        
    }
    
    var line = new Kinetic.Line({
          points: [this.initialPoint.getX(),this.initialPoint.getY(),this.endingPoint.getX(),this.endingPoint.getY()],
          stroke: strokeColor,
          strokeWidth: strokeWidth,
          lineCap: 'round',
          draggable : true,
          lineJoin: 'round',
          opacity: 0.75
        });
        return line;
      }
      
    
    
});

// --- file[Arc.js] ---

/*
                                                                            ___             
                                                                          /   |  __________
                                                                         / /| | / ___/ ___/
                                                                        / ___ |/ /  / /__  
                                                                       /_/  |_/_/   \___/  
                    
 */


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
     
    
    drawFigure : function (pPaint) {
    if (pPaint){
        var strokeColor = this.colorList.getColor(this.color);
        var strokeWidth = this.borderSize + 3 ;
    }
    else{
         strokeColor = this.colorList.getColor(0);
         strokeWidth =  4 ;
        
    }
    var startPoint =this.initialPoint;
    var controlPoint = this.middlePoint;
    var finalPoint = this. endingPoint;
        var arc = new Kinetic.Shape({
            
            sceneFunc: function(context) {
              context.beginPath();
              //Point A
             context.moveTo(startPoint.getX(),startPoint.getY());
             //Point A curve 
             context.quadraticCurveTo(controlPoint.getX(),controlPoint.getY(),finalPoint.getX(),finalPoint.getY());
             //Point C
             // KineticJS specific context method
            context.fillStrokeShape(this);
            },
        stroke: strokeColor,
        strokeWidth: strokeWidth,
        lineCap: 'round',
        draggable : false
      });
	return arc; 
    }
    
});

// --- file[Circle.js] ---

/*
                                                            _______           __   
                                                          / ____(_)_________/ /__ 
                                                         / /   / / ___/ ___/ / _ \
                                                        / /___/ / /  / /__/ /  __/
                                                        \____/_/_/   \___/_/\___/ 
                          
 */


var Circle = Figure.extend({
    
    init: function(pId, pColor, pBorderSize,pInitialPoint, pRadius,pFill) {
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
    
    setFill : function (pFill) {
        this.fill = pFill;
    },
    
    setRadius : function (pRadius) {
        this.radius = pRadius;
    },
    
    
            
     getX : function(){
        return this.initialPoint.getX();
     }, 
             
     getY : function(){
        return this.initialPoint.getY();
     },
             
    drawFigure : function (pPaint) {
        if (pPaint){
                var strokeColor = this.colorList.getColor(this.color);
                var fillColor = this.colorList.getColor(this.fill);
                var strokeWidth = this.borderSize + 3 ;
            }
        else{
                 fillColor = this.colorList.getColor(16);
                 strokeColor = this.colorList.getColor(0);
                 strokeWidth =  4 ;

            }
        var startPoint = this.initialPoint;
        var circle = new Kinetic.Circle({
        x: startPoint.getX(),
        y: startPoint.getY(),
        radius: this.radius,
        fill: fillColor,
        stroke: strokeColor ,
        opacity: 0.75,
        draggable : true,
        strokeWidth: strokeWidth
      });

     return circle;
        
    },
    
});

// --- file[Square.js] ---

/*
                                                                        _____                           
                                                                      / ___/____ ___  ______ _________ 
                                                                      \__ \/ __ `/ / / / __ `/ ___/ _ \
                                                                     ___/ / /_/ / /_/ / /_/ / /  /  __/
                                                                    /____/\__, /\__,_/\__,_/_/   \___/ 
                                                                            /_/                        
 */


var Square = Figure.extend({
    init : function(pId, pColor, pBorderSize, pInitialPoint, pWidth, pHeight,pFill) {
    this._super(pId, pColor, pBorderSize, pInitialPoint);
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
    
    setFill : function (pFill) {
        this.fill = pFill;
    },
      
    setWidth : function (pWidth) {
      this.width = pWidth;  
    },
    
    setHeight : function (pHeight) {
        this.height = pHeight;
    },
   
    
    drawFigure : function (pPaint) {
    if (pPaint){
                   var strokeColor = this.colorList.getColor(this.color);
                   var fillColor = this.colorList.getColor(this.fill);
                   var strokeWidth = this.borderSize + 3 ;
               }
    else{
                    fillColor = this.colorList.getColor(16);
                    strokeColor = this.colorList.getColor(0);
                    strokeWidth =  4 ;

               }   
    var rect = new Kinetic.Rect({
        x: this.initialPoint.getX(),
        y: this.initialPoint.getY(),
        width: this.width,
        height: this.height,
        opacity : 0.5,
        fill: fillColor ,
        stroke: strokeColor,
        draggable : true,
        strokeWidth: strokeWidth
      });

      return rect;
        
    }
    
});
        
 

var timeRecord = Class.extend({
     init : function () {
         this.bestArcadeTime = 0;
         this.bestFireTime= 0;
    },
     
     getBestArcadeTimes: function(){
        return this.bestArcadeTime;
     },
     
     setArcadeTime: function(pNewArcadeTime){
        if(pNewArcadeTime<this.bestArcadeTime){
            this.bestArcadeTime = pNewArcadeTime;
        }
 
     },
     
     getBestFireTimes: function(){
        return this.bestFireTime;
     },
       
     setFireTime: function(pNewFireTime){
        if(pNewFireTime<this.bestFireTime){
            this.bestFireTime = pNewFireTime;
        }
 
     },
     
     generateReport : function(pNameOfDesign){
        var report = "          "+ pNameOfDesign+"\n\
                     Arcade best time = " + this.bestArcadeTime+ " \n\
                     Fire best time = " + this.bestFireTime +"  \n\
                                          :)";
        return report;
         
     }
    


});

// --- file[Design.js] ---

/*
 * 
                                                                      ____            _           
                                                                     / __ \___  _____(_)___ _____ 
                                                                    / / / / _ \/ ___/ / __ `/ __ \
                                                                   / /_/ /  __(__  ) / /_/ / / / /
                                                                  /_____/\___/____/_/\__, /_/ /_/ 
                                                                                    /____/                                                                                      
 */


var Design= Class.extend({
    init : function (pDesignName){
        
        this._DesignName =pDesignName;
     
        //figures is a array composed of all the child classes of figure(Arc,Line,Circle,Square)
        this._figures = [];
        
        
         //Sectors are points of colors used to paint a sector
         this._sectors=[];
        
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
         
         this.started = false;
         
         this.ubicateBasicPoints();
         
         this.createBasicLines();
         
         this.started = true;
         
         
         this.timeRecords = new timeRecord();
         
         
    },
  
    //These are the getters and setters of the design class
     
     getDesignName : function(){
         return this._DesignName;
     },
     
     setDesignName : function(pNewDesignName){
          this._DesignName =pNewDesignName;
     },
     
     getDesignFigures : function() {
        return this._figures;
    },
    
    setDesignFigures : function (pDesignFigures) {
         this._figures = pDesignFigures;
     },
     
     getBasicPoints : function(){
         return this._basicPoints;
     },
     getAmountOfFigures : function(){
        return this._figures.length;
     },
     
     
     setBasicPoints : function(pBasicPoints){
         this._basicPoints=pBasicPoints;
     },
     
     getSectors : function(){
         return this._sectors;
     },
     
     
     setSectors: function(pSectors){
         this._sectors=pSectors;
     },
     
     
     getBasicLines : function(){
       return this._contourLines;  
     },
     
     setBasicLines : function(pContourLines){
        this._contourLines=pContourLines;
     },
     
      getFigureLines : function(){
       return this._lineFigures;  
     },
     
     setFigureLines : function(pFigureLines){
        this._lineFigures=pFigureLines;
     },
     // As we are using the following functions to get a figure by its id
     
     getFigure : function(pId){
       var figureRequired=this._figures[pId];
       return  figureRequired;
     },
    
    getSector : function(pId){
       var sectorDraw=this._sectors[pId];
       return sectorDraw;
     },
    
    //These are the functions to start or reload a design :)
    
     ubicateBasicPoints : function(){
         for (var amountOfBasicPoint = 0; amountOfBasicPoint<7; amountOfBasicPoint++){
             var newPoint = new point (0,0);
             this._basicPoints.push(newPoint);
         }
         //Point A
         this._basicPoints[0].movePoint(100,100);
         //Point A curve 1
         this._basicPoints[1].movePoint(250,150);
         //Point B
         this._basicPoints[2].movePoint(400,100);
         //Point C
         this._basicPoints[3].movePoint(450,180);
         //PointD
         this._basicPoints[4].movePoint(600,300);
         //pointE
         this._basicPoints[5].movePoint(100,300);
         //pointE curve
         this._basicPoints[6].movePoint(120,200);
         
         
     },
             
     createBasicLines : function(){
        if(this.started){
             
            var contourColor =this.getContourColor();
            var contourBorder = this.getContourBorderSize();
            
            var soleColor =this.getSoleColor();
            var soleBorder = this.getSoleBorderSize();
         }
         
         else{
             var soleColor = 1;
             var soleBorder = 1;
            
             var contourColor =1;
             var contourBorder =1;
             
         }
         this._contourLines= [];
        this.createContourLines(contourColor,contourBorder,soleColor,soleBorder);
        this.createContourArcs(contourColor,contourBorder,soleColor,soleBorder);
     },
             
     createContourLines: function(pContourColor,pContourBorder,pSoleColor,pSoleBorder){
         /*In this functionn we create:
          * _contourLines[0]= line B-C
          * _contourLines[1]= line C-D
          * _contourLines[2]= line D-E
          */
         
         
         for (var amountOfBasicPoint = 2; amountOfBasicPoint<5; amountOfBasicPoint++){
             var initialPoint = this._basicPoints[amountOfBasicPoint];
             var endingPoint = this._basicPoints[amountOfBasicPoint+1];
             var line = new Line(amountOfBasicPoint, pContourColor, pContourBorder,initialPoint, endingPoint);
             if (amountOfBasicPoint === 4){
                 line = new Line(amountOfBasicPoint, pSoleColor, pSoleBorder,initialPoint, endingPoint);
                 
             }
             this._contourLines.push(line);
         }
     },
     
     createContourArcs : function(pContourColor,pContourBorder,pSoleColor,pSoleBorder){
        
        /*In this functionn we create:
          * _contourLines[3]= line A-B
          * _contourLines[4]= line E-A
          */
         
        var initialPoint1 = this._basicPoints[0];
        var middlePoint1 = this._basicPoints[1];
        var endingPoint1 = this._basicPoints[2];
       
            
        var newArc = new Arc(2, pContourColor, pContourBorder,initialPoint1, middlePoint1, endingPoint1);
        this._contourLines.push(newArc);
        
        var initialPoint2 = this._basicPoints[5];
        var middlePoint2 = this._basicPoints[6];
        var endingPoint2 = this._basicPoints[0];
        
        var newArc2 = new Arc(2, pContourColor, pContourBorder,initialPoint2, middlePoint2, endingPoint2);
        this._contourLines.push(newArc2);
 
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
              
     //These are the functions to add a figure to the project
      
      // All of this add component there work with multiple workarounds, 
      // like using the arguments object, to check with how many arguments a function has been invoked:
    
    addComponents :  function (pColor, pBorderSize,pInitialPoint,pSpecificChar1,pSpecificChar2,pSpecificChar3){
        var amountOfParameters = arguments.length;
         switch (amountOfParameters){
             case(3): {
                     alert(this._sectors.length);
                     var newSector = new Figure(this._sectors.length, pColor, pBorderSize, pInitialPoint);
                     this._sectors.push(newSector); 
                     break;  
             };
             case(4): {
                     var linePoint1 = new Circle(this._sectors.length, pColor, pBorderSize,pInitialPoint, 10,1);
                     this._figures.push(linePoint1);
                     var linePoint2 = new Circle(this._sectors.length, pColor, pBorderSize,pSpecificChar1, 10,1);
                     this._figures.push(linePoint2);
                     var newLine = new Line(this._figures.length, pColor, pBorderSize,pInitialPoint, pSpecificChar1);
                     this._lineFigures.push(this._figures.length);
                     this._figures.push(newLine);
                     break;  
             };
             case(5): {
                     var newCircle = new Circle(this._figures.length, pColor, pBorderSize,pInitialPoint, pSpecificChar1, pSpecificChar2);
                     this._figures.push(newCircle);
                     break;  
             };
             case(6): {
                      var newSquare = new Square(this._figures.length, pColor, pBorderSize, pInitialPoint, pSpecificChar1, pSpecificChar2,pSpecificChar3);
                     this._figures.push(newSquare);
                      break;  
             };
             
         }
        
    },
     //These functions are made to modificate all the components
   
   /*Components to modificate =
    * 0.BasicComponents
    * 1.Sector
    * 2.Figure
    * 
    *  CharateristicToChange = 
    *  
    *  0.Ubication
    *  1.StrokeColor
    *  2.FillColor
    *  3.BorderWidth
    *  
    */
   modificateComponent : function (pComponentToModificate,pCharateristicToChange,pId,pChange){
       switch(pComponentToModificate){
           case(0):{
                   this.modificateBasicComponents(pCharateristicToChange,pId,pChange);
                   break;
           }
           case(1):{
                   this.modificateSector(pCharateristicToChange,pId,pChange);
                   break;
           }
           case(2):{
                   this.modificateFigure(pCharateristicToChange,pId,pChange);
                   break;
           }
       }
   },
   
   modificateBasicComponents : function (pCharateristicToChange,pId,pChange){
       switch(pCharateristicToChange){
           //this change the basic point position
           case (0):{
                   //pChange acts like a new point with the new x and y
                   this._basicPoints[pId].movePoint(pChange.getX(),pChange.getY());
                   break;
           }
           
           //11 stands for 1.1 and is to change the strokeColor of the contourLines
           case (11):{

            //Line A-B
            this._contourLines[3].setColor(pChange);
            //Point B-C
            this._contourLines[0].setColor(pChange);
            //Point C-D
            this._contourLines[1].setColor(pChange);
            //point E-A
            this._contourLines[4].setColor(pChange);
             break;
                   
           }
           //11 stands for 1.2 and is to change the strokeColor of the contourLines
           case (12):{
             //PointD-E
             this._contourLines[2].setColor(pChange);
              break;
           }
           
           //21 stands for 2.1 and is to change the borderWidth of the contourLines
           case (21):{
                    //Line A-B
                    this._contourLines[3].setBorderSize(pChange);
                    //Point B-C
                    this._contourLines[0].setBorderSize(pChange);
                    //Point C-D
                    this._contourLines[1].setBorderSize(pChange);
                    //point E-A
                    this._contourLines[4].setBorderSize(pChange);
                    break;
         
                   
           }
           //22 stands for 2.2 and is to change the borderWidth of the contourLines
           case (22):{
                   //PointD-E
                   this._contourLines[2].setBorderSize(pChange);
                    break;
                   
           }
       }
   },
   
   modificateSector : function (pCharateristicToChange,pId,pChange){
       switch(pCharateristicToChange){
           case (0):{
                    this._sectors[pId].movePoint(pChange.getX(),pChange.getY());
                    break;    
           }
           
           case (1):{
                   this._sectors[pId].setColor(pChange);
                    break;    
           }
       }
   },
   
   modificateFigure : function (pCharateristicToChange,pId,pChange){
       switch(pCharateristicToChange){
           case (0):{
                   this._figures[pId].movePoint(pChange.getX(),pChange.getY());
                   break;
           }
           
           case (1):{
                   this._figures[pId].setColor(pChange);
                   break;
                   
           }
           
           case (2):{
                   this._figures[pId].setFill(pChange);
                   break;
                   
           }
           case (3):{
                   this._figures[pId].setBorderWidth(pChange);
                   break;       
           }
       }
   },
   
   //Getters and setters
   
     getSectorLength : function (){
         return this._sectors.length;
         
     },
     
     getSectorById : function (pId){
        return this._sectors[pId];
     },
     
     getFigureColorById : function (pId){
        return this._figures[pId].getColor();
 
     },
     
     getFigureBorderSizeById : function (pId){
        return this._figures[pId].getBorderSize();
 
     },
     
      getSectorColorById : function (pId){
        return this._sectors[pId].getColor();
 
     },
     
     getSectorBorderSizeById : function (pId){
        return this._sectors[pId].getBorderSize();
 
     },
     
      setSectorColorById : function (pId,pColor){
        return this._sectors[pId].setColor(pColor);
 
     },
     
     setSectorBorderSizeById : function (pId){
        return this._sectors[pId].setBorderSize();
 
     },
     
     getSoleColor : function(){
        return this._contourLines[2].getColor();
     },
     
     getSoleBorderSize : function(){
        return this._contourLines[2].getBorderSize();
     },
     
    
    getContourColor : function(){
        return this._contourLines[3].getColor();
     },
    
    getContourBorderSize : function(){
        return this._contourLines[3].getBorderSize();
     },
     
     //To manage time records
     
     addArcadeTime : function (pNewTime){
        this.timeRecords.setArcadeTime(pNewTime);
 
     },
     
      addFireTime : function (pNewTime){
        this.timeRecords.setFireTime(pNewTime);
 
     },
     
     generateReport : function (pDesignName){
        return this.timeRecords.generateReport(pDesignName);
 
     }
             
 });

// --- file[ProjectManager.js] ---

/*
                                                ____               _           __     __  ___                                 
                                               / __ \_________    (_)__  _____/ /_   /  |/  /___ _____  ____ _____ ____  _____
                                              / /_/ / ___/ __ \  / / _ \/ ___/ __/  / /|_/ / __ `/ __ \/ __ `/ __ `/ _ \/ ___/
                                             / ____/ /  / /_/ / / /  __/ /__/ /_   / /  / / /_/ / / / / /_/ / /_/ /  __/ /    
                                            /_/   /_/   \____/_/ /\___/\___/\__/  /_/  /_/\__,_/_/ /_/\__,_/\__, /\___/_/     
                                                            /___/                                          /____/             
 */


var ProjectManager = Class.extend({
    init : function(){
        this.actualDesign = new Design("New");
         
        //This is the current position of the mouse. It is changed when the user click the kinectCanvas
        this.currentXpostion = 170;
        this.currentYposition = 170;
        
       
        //This actual figure is changed every time a figure is doubleClicked
        this.actualFigure = 0;
        
         //This actual sector is changed every time a sector is doubleClicked
        this.actualSector = 0;
        
        this.kineticBase;
        //This layer contains the basic points and basic lines
        this.firstlayer = new Kinetic.Layer();
    },
            
   // These are the getters and setters
    
    getActualFigure : function(){
        return this.actualFigure;
    },
    
   
   getActualSector : function(){
     return this.actualSector;  
   },
    
    getActualDesign  : function(){
        return this.actualDesign;
    },

    setActualDesign :  function(pActualDesign){
      this.actualDesign = pActualDesign;  
      this.startCachosDesign(false);
      
    },
    //These functions are the one in charge to load the design and theri feautres
    
    startCachosDesign : function(pPaint){
        
      this.kineticManagment();
      this.reloadDesignName();
      this.cleanLayer();
      this.drawFigures(pPaint);
      this.drawBasicLines(pPaint);
      if(!pPaint){
        this.drawSectors();
        this.drawBasicPoints();
      }
      
      this.reloadCachosDesign();
    },
    
    cachosArcadePaint : function(){
        var startTime = new Date().getTime();
        this.startCachosDesign(true);
        for (var actualSector = 0; actualSector<this.actualDesign.getSectorLength();actualSector++){
            var sectorToPaint = this.actualDesign.getSectorById(actualSector);
            this.sectorArcadePaintCachosDesign(sectorToPaint);
            
        }
        var elapsedTime = (new Date().getTime() - startTime)/1000;
        this.actualDesign.addArcadeTime(elapsedTime);

    },
    
     sectorArcadePaintCachosDesign : function(pSectorToPaint){
        var layerCanvas = this.firstlayer.getCanvas();
        
        var toPaint = new paintAlgotithms(pSectorToPaint.getX(),pSectorToPaint.getY(),layerCanvas,pSectorToPaint.getColor());
        var imagePainted = toPaint.paintSector();
        layerCanvas.getContext().putImageData(imagePainted, 0, 0);
    },
   
   cachosFirePaint : function(){
       var startTime = new Date().getTime();
        this.startCachosDesign(true);
        for (var actualSector = 0; actualSector<this.actualDesign.getSectorLength();actualSector++){
            var sectorToPaint = this.actualDesign.getSectorById(actualSector);
            this.sectorFirePaintCachosDesign(sectorToPaint);
            
        }
        var elapsedTime = (new Date().getTime() - startTime)/1000;
        this.actualDesign.addFireTime(elapsedTime);
        
        

    },
    
    sectorFirePaintCachosDesign : function(pSectorToPaint){
        var layerCanvas = this.firstlayer.getCanvas();
        
        var toPaint = new paintAlgotithms(pSectorToPaint.getX(),pSectorToPaint.getY(),layerCanvas,pSectorToPaint.getColor());
        var imagePainted = toPaint.firePaint();
        layerCanvas.getContext().putImageData(imagePainted, 0, 0);
    },
    
    reloadDesignName: function(){
        var actualDesignName = this.actualDesign.getDesignName();
        document.getElementById("designsTitle").innerHTML=actualDesignName;

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
    
    
    drawBasicPoints :  function(){
        
        var actualPoints=this.actualDesign.getBasicPoints();
        var amountOfBasicPoints = 9;
        for( var actualBasicPoint = 0;actualBasicPoint<amountOfBasicPoints;actualBasicPoint++){
            var basicPoint = actualPoints[actualBasicPoint];
            this.buildBasicPoint(basicPoint,actualBasicPoint,this);
              
        }   
    },
    
    buildBasicPoint: function(pBasicPoint,pPositionOfPoint,pProject){
        var actualProject = pProject;
        var basicPointCircle = new Circle(pPositionOfPoint, 1, 4,pBasicPoint, 7, 1);
        var basicPoint = basicPointCircle.drawFigure(false);
        
        var drawInProject = function(){
            actualProject.firstlayer.draw();
        };
        
        var updatePoint = function(pNewPoint){
            actualProject.actualDesign.modificateComponent(0,0,pPositionOfPoint,pNewPoint);
            actualProject.startCachosDesign(false);
            
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
            var newBasicPoint = new point (this.getX(),this.getY());
            updatePoint(newBasicPoint);
        });
        
        this.firstlayer.add(basicPoint);
        this.reloadCachosDesign();
           
    },
    
  
   
     drawSectors :  function(){
        for( var amountOfSectors = 0;amountOfSectors<this.actualDesign.getSectorLength();amountOfSectors++){
            var basicSector = this.actualDesign.getSectorById(amountOfSectors);
            this.buildBasicSector(basicSector,amountOfSectors,this);
              
        }   
    },
    
    buildBasicSector: function(pBasicSector,pPositionOfSectors,pProject){
        var actualProject = pProject;
        var basicSectorSquare = new Square(pPositionOfSectors, pBasicSector.getColor(), 4,pBasicSector.getInitialPoint(), 12, 12,1);
        var basicSector = basicSectorSquare.drawFigure(true);
        
         var openConfigurationBox = function(pId){
                actualProject.actualSector=pId;
                actualProject.reloadSectorClicked(pId);
                
            
        };
        
        var drawInProject = function(){
            actualProject.firstlayer.draw();
        };
        
        var updatePoint = function(pNewPoint){
            actualProject.actualDesign.modificateComponent(1,0,pPositionOfSectors,pNewPoint);;
            actualProject.startCachosDesign(false);
            
        };
        
        
        basicSector.on('mouseover',function(){
            this.width(16);
            this.height(16);
            drawInProject();
        });
        
        basicSector.on('mouseout',function(){
            this.width(12);
            this.height(12);
            drawInProject();
        });
        
        basicSector.on('dragend',function(){
            var newBasicPoint = new point (this.getX(),this.getY());
            updatePoint(newBasicPoint);
        });
        
        basicSector.on('dblclick',function(){
            openConfigurationBox(pPositionOfSectors);
            
        });
        this.firstlayer.add(basicSector);
        this.reloadCachosDesign();
           
    },
    
    buildFigure: function(pFigureDrawn,pPositionOfFigures,pProject){
        var actualProject = pProject;
        
        
        var drawInProject = function(){
            actualProject.firstlayer.draw();
        };
        
        var updatePoint = function(pNewPoint){
            actualProject.actualDesign.modificateComponent(2,0,pPositionOfFigures,pNewPoint);
            actualProject.startCachosDesign(false);
            
        };
        
        var openConfigurationBox = function(pId){
                actualProject.actualFigure=pId;
                actualProject.reloadFigureClicked(pId);
                
            
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
            var newBasicPoint = new point (this.getX(),this.getY());
            updatePoint(newBasicPoint);
        });
        
        pFigureDrawn.on('dblclick',function(){
            openConfigurationBox(pPositionOfFigures);
            
        });
        
        this.firstlayer.add(pFigureDrawn);
        this.reloadCachosDesign();
           
    },
    
   
    drawBasicLines : function(pPaint){
        this.actualDesign.createBasicLines();
        var actualLines= this.actualDesign.getBasicLines();
        for(var amountOfLines= 0;amountOfLines<5;amountOfLines++){
           var actualLine = actualLines[amountOfLines].drawFigure(pPaint);
           this.firstlayer.add(actualLine);
           this.firstlayer.draw();
       }
       
    },
    
    
    // These functions are the one in charge to show the properties of the design 
     reloadFigureClicked : function (pId){
                document.getElementById("actualFigureId").innerHTML=pId;
                var actualColor = this.actualDesign.getFigureColorById(pId); 
                document.getElementById("actualFigureColor").innerHTML= actualColor ;
                var actualBorderSize = this.actualDesign.getFigure(pId).getBorderSize();
                document.getElementById("actualFigureBorderSize").innerHTML=actualBorderSize;
    },
    
    reloadSoleClicked : function (){
                document.getElementById("actualFigureId").innerHTML="Sole";
                var actualColor = this.actualDesign.getSoleColor(); 
                document.getElementById("actualFigureColor").innerHTML= actualColor ;
                var actualBorderSize = this.actualDesign.getSoleBorderSize();
                document.getElementById("actualFigureBorderSize").innerHTML=actualBorderSize;
    },
    
     reloadContourClicked : function (){
                document.getElementById("actualFigureId").innerHTML="Contour Lines";
                var actualColor = this.actualDesign.getContourColor(); 
                document.getElementById("actualFigureColor").innerHTML= actualColor ;
                var actualBorderSize = this.actualDesign.getContourBorderSize();
                document.getElementById("actualFigureBorderSize").innerHTML=actualBorderSize;
    },
     
     reloadSectorClicked : function (pId){
                document.getElementById("actualFigureId").innerHTML=pId;
                var actualColor = this.actualDesign.getSectorColorById(pId); 
                document.getElementById("actualFigureColor").innerHTML= actualColor ;
                var actualBorderSize = "Sector";
                document.getElementById("actualFigureBorderSize").innerHTML=actualBorderSize;
                this.startCachosDesign(false);
    },
            
            
     getPointFromCurrentPosition : function(){
        var pointInCurrentPosition = new point (this.currentXpostion,this.currentYposition);
        return pointInCurrentPosition;
     },
     
     getEndingPointFromCurrentPositionForLine : function(){
        var pointInCurrentPosition = new point (this.currentXpostion+40,this.currentYposition+40);
        return pointInCurrentPosition;
     },
    
     changeDesignName  : function (pNewName){
        this.actualDesign.setDesignName(pNewName);
        this.reloadDesignName();;
     },
         
             
    // These are the function to paint and draw figures
    
    drawFigures : function(pPaint){
    this.actualDesign.reloadFigureLines();
    for(var actualFigure = 0; actualFigure<this.actualDesign.getAmountOfFigures();actualFigure++){
        var _FigureToDraw = this.actualDesign.getFigure(actualFigure);
        var figureDrawn = _FigureToDraw.drawFigure(pPaint);
        this.buildFigure(figureDrawn,actualFigure,this);
        
    }

    }

    });

//Arcade paint is a function that takes a image data of a sector of the design and applies a flood paint
// algorithm
var paintAlgotithms = Class.extend({
        init : function(pStartX,pStartY,pLayerCanvas,pColorToPaint){
            this.startX = pStartX;
            this.startY = pStartY;
            this.pixelStack = [[this.startX, this.startY]];
            this.colors = new Colors();
            
            var layerCanvas = pLayerCanvas;
            var layerContext = layerCanvas.getContext();
            this.canvasWidth = layerCanvas.getWidth();
            this.canvasHeigth = layerCanvas.getHeight();
            this.imageFromContext = layerContext.getImageData(0,0,this.canvasWidth,this.canvasHeigth);
            this.colorToPaint = pColorToPaint;
                    
        },
         paintSector : function (){
            console.log(":)");
            while(this.pixelStack.length) {
                 
                  var newPos = this.pixelStack.pop();
                  var x = newPos[0];
                  var y = newPos[1];
                  
                  var pixelPos = (y*this.canvasWidth + x) * 4;
                    while(y-- >= 0 && this.matchStartColor(pixelPos)){
                      pixelPos -= this.canvasWidth * 4;
                    }
                      pixelPos += this.canvasWidth * 4;
                    
                    ++y;
                    var reachLeft = false;
                    var reachRight = false;
                    while(y++ < this.canvasHeigth-1 && this.matchStartColor(pixelPos)) {
                      this.colorPixel(pixelPos);
                      if(x > 0){
                          if(this.matchStartColor(pixelPos - 4)){
                            if(!reachLeft){
                              this.pixelStack.push([x - 1, y]);
                              reachLeft = true;
                            }
                          }
                          else if(reachLeft)
                          {
                            reachLeft = false;
                          }
                        }
                      if(x < this.canvasWidth-1){
                          if(this.matchStartColor(pixelPos + 4)){
                            if(!reachRight) {
                              this.pixelStack.push([x + 1, y]);
                              reachRight = true;
                            }
                          }
                          else if(reachRight) {
                            reachRight = false;
                          }
                        }

                        pixelPos += this.canvasWidth * 4;
                }

                  }
                  return this.imageFromContext;
     
         },
                 
         matchStartColor : function(pixelPos)
            {
              var r = this.imageFromContext.data[pixelPos];	
              var g = this.imageFromContext.data[pixelPos+1];	
              var b = this.imageFromContext.data[pixelPos+2];
              
           
              var startR = 0;
              var startG = 0;
              var startB = 0;
                
               
              return (r === startR && g === startG && b === startB);
            },
        
          colorPixel : function(pixelPos){
              var fillColorR = this.colors.getRGBColor(this.colorToPaint,1);
              var fillColorG = this.colors.getRGBColor(this.colorToPaint,2);
              var fillColorB = this.colors.getRGBColor(this.colorToPaint,3); 
                
              this.imageFromContext.data[pixelPos] = fillColorR;
              this.imageFromContext.data[pixelPos+1] = fillColorG;
              this.imageFromContext.data[pixelPos+2] = fillColorB;
              this.imageFromContext.data[pixelPos+3] = 255;
          },
          firePaint: function(){
              this.floodFillScanline(this.startX,this.starY,this.canvasWidth, this.canvasHeigth);
              return this.imageFromContext;
      
          },  
            floodFillScanline: function () {
                // x, y, down[true] / up[false], extendLeft, extendRight
                var x = this.startX;
                var y = this.startY;
                var ranges = [[x, y]];
                var pixelPos = (y*this.canvasWidth + x) * 4;
                var centerLine =[];

                while(ranges.length>0) {
                    var actualLine = ranges.pop();
                    var currentY=actualLine[1];
                    // extendLeft
                       
                       var newLine =[];
                       centerLine.push(actualLine);
                       var leftX= actualLine[0];
                        
                        pixelPos = (currentY*this.canvasWidth + leftX) * 4;
                        
                        
                        while( leftX>0 && this.matchStartColor(pixelPos)){
                            --leftX;
                            pixelPos = (currentY*this.canvasWidth + leftX) * 4;
                            var newPoint = [leftX,currentY];
                            newLine.push(newPoint);
                        }
                       
                    
                    // extendRight
                    var rightX = actualLine[0];
                    pixelPos = (y*this.canvasWidth + rightX)* 4;
                    
                            while(this.matchStartColor(pixelPos)) {
                                    rightX++;
                                    pixelPos = (currentY*this.canvasWidth + rightX)* 4;
                                    var newPoint = [rightX,currentY];
                                    newLine.push(newPoint);

                            }
                    this.paintLine(newLine);
                    //New Line is also used to go abobe
                   
                    while(newLine.length>0){
                        
                        var actualLine = newLine.pop();
                    

                    // extendUp
                       
                       var currentX = actualLine[0];
                       var upY= actualLine[1]-1;
                        
                        pixelPos = (upY*this.canvasWidth + currentX) * 4;
                        
                       
                        if( this.matchStartColor(pixelPos)){
                            var newPoint = [currentX,upY];
                            ranges.push(newPoint);
                          
                        }
                       
                    
                    // extendDown
                    
                       var downY= actualLine[1]+2;
                        
                        pixelPos = (downY*this.canvasWidth + currentX) * 4;
                        if(this.matchStartColor(pixelPos)){
                            var newPoint = [currentX,downY];
                            ranges.push(newPoint);
                           
                        }
                        
                    }
                    
                        
	}
         this.paintLine(centerLine);
            },
        paintLine : function ( pLine ){
            for(var actualPoint =0; actualPoint< pLine.length ; actualPoint++){
                var point = pLine[actualPoint];
                var x = point[0];
                var y = point[1];
                var pixelPos = (y*this.canvasWidth + x)* 4;
                this.colorPixel(pixelPos);
            }
            
        }
    });


actualOptionOfConfiguration = 0;
window.addEventListener('load',function(){
       projectObject = new ProjectManager();
       projectObject.startCachosDesign(false);       
   });
   
   addCircleClick = function(){
       var initialPoint = projectObject.getPointFromCurrentPosition();
       projectObject.getActualDesign().addComponents(1, 1,initialPoint, 40, 1);
       projectObject.startCachosDesign(false);
   };
   
    addLineClick = function(){
       var initialPoint = projectObject.getPointFromCurrentPosition();
       var endingPoint = projectObject.getEndingPointFromCurrentPositionForLine();
       projectObject.getActualDesign().addComponents(1, 1,initialPoint, endingPoint);
       projectObject.startCachosDesign(false);
   };
   
   addSquareClick = function(){
       var initialPoint = projectObject.getPointFromCurrentPosition();
       projectObject.getActualDesign().addComponents(1, 1, initialPoint, 40, 40,1);
       projectObject.startCachosDesign(false);
   };
   
   addSectorClick = function(){
       var initialPoint = projectObject.getPointFromCurrentPosition();
       projectObject.getActualDesign().addComponents(1, 1, initialPoint);
       projectObject.startCachosDesign(false);
   };
   
   onColorClickFigure = function(pColor){
       //modifyActualFigureColor(pColor);
       var actualFigure = projectObject.getActualFigure();
       projectObject.getActualDesign().modificateComponent(2,1,actualFigure,pColor);
       projectObject.reloadFigureClicked(actualFigure);
       
   };
  
    onColorClickSector = function(pColor){
         //modifyActualFigureColor(pColor);
       var actualSector = projectObject.getActualSector();
       projectObject.getActualDesign().modificateComponent(1,1,actualSector,pColor);
       projectObject.reloadSectorClicked(actualSector);
     };
   
   onBorderSizeClickFigure = function(pBorderSize){
       var actualFigure = projectObject.getActualFigure();
       projectObject.getActualDesign().modificateComponent(2,3,actualFigure,pBorderSize);
        projectObject.reloadFigureClicked(actualFigure);
   };
   
   onColorClickSole = function(pColor){
       var soleDoesNotHaveId = 0;
       projectObject.getActualDesign().modificateComponent(0,12,soleDoesNotHaveId,pColor);
        projectObject.reloadSoleClicked();
   };
   
   onBorderSizeClickSole = function(pBorderSize){
       var soleDoesNotHaveId = 0;
       projectObject.getActualDesign().modificateComponent(0,22,soleDoesNotHaveId,pBorderSize);
        projectObject.reloadSoleClicked();
   };
   
    onColorClickContour = function(pColor){
       var soleDoesNotHaveId = 0;
       projectObject.getActualDesign().modificateComponent(0,11,soleDoesNotHaveId,pColor);
       projectObject.reloadContourClicked();
   };
   
   onBorderSizeClickContour = function(pBorderSize){
      var soleDoesNotHaveId = 0;
      projectObject.getActualDesign().modificateComponent(0,21,soleDoesNotHaveId,pBorderSize);  
      projectObject.reloadContourClicked();
   };
   
   changeActualOption = function (newOption){
       actualOptionOfConfiguration = newOption;
       switch (newOption){
           case 0: 
                    document.getElementById("modifying").innerHTML= "Figures" ;
                    break;
           case 1:
                   document.getElementById("modifying").innerHTML= "Sole" ;
                   projectObject.reloadSoleClicked();
                   break;
           case 2:
                   document.getElementById("modifying").innerHTML= "Contour Lines" ;
                   projectObject.reloadContourClicked();
                   break;
          case 3:
                   document.getElementById("modifying").innerHTML= "Sector" ;
                   projectObject.reloadSectorClicked();
                   
                   break;
       }
   };
   
   changeColor = function(pColor){
       switch (actualOptionOfConfiguration){
           case 0:
                   onColorClickFigure(pColor);
                   break;
                   
           case 1:
                   onColorClickSole(pColor);
                   break;
           
           case 2:
                   onColorClickContour(pColor);
                   break;
           case 3:
                   onColorClickSector(pColor);
                   break;
       }
   };
   
   changeBorderSize = function(pBorderSize){
       switch (actualOptionOfConfiguration){
           case 0: 
               onBorderSizeClickFigure(pBorderSize);
               break;
           case 1: 
               onBorderSizeClickSole(pBorderSize);
               break;
           case 2: 
               onBorderSizeClickContour(pBorderSize);
               break;
       }
   };
   
   changeBorderNow = function(){
       var number = document.getElementById('number').value;
       changeBorderSize(number);

   };
   
   changeTheDesignName = function(){
     var newName= prompt("Please enter the design name","myCrazyDesign");
     projectObject.changeDesignName(newName);
  
   };
   
   
   toDesignMode = function(){
        projectObject.startCachosDesign(false);
       
   };
   paintArcadeMode = function(){
       projectObject.cachosArcadePaint();
       
       
   };
   
   paintFireMode = function(){
       projectObject.cachosFirePaint();
   };
   
   saveActualDesign = function(){
       var actualDesign = projectObject.getActualDesign();
       saveDesign(actualDesign);
   };
   
   loadASavedDesign = function (){
      var designToLoad= prompt("Please enter the design name you want to load","new");
      retrieveDesign(designToLoad);
      var designRetrived = getGlobalDesign();
      projectObject.setActualDesign(designRetrived);
      statusGlobalDesign();
       
       
   };
   recordTime = function(){
       var actualDesignName = projectObject.getActualDesign().getDesignName();
       alert(projectObject.getActualDesign().generateReport(actualDesignName));
   };
   
   
   
    /* 
                                                                        ____                     
                                                                       / __ \____ ______________ 
                                                                      / /_/ / __ `/ ___/ ___/ _ \
                                                                     / ____/ /_/ / /  (__  )  __/
                                                                    /_/    \__,_/_/  /____/\___/ 
*/
/* 
                                                                        ____                     
                                                                       / __ \____ ______________ 
                                                                      / /_/ / __ `/ ___/ ___/ _ \
                                                                     / ____/ /_/ / /  (__  )  __/
                                                                    /_/    \__,_/_/  /____/\___/ on
 */

   // This variable is to get a design
   var _GlobalDesign = new Design("globalDesign");
   
    //-------------------------------------------------------------------------------------------//
   
   function isEmptyGlobalDesign() {
        if (_GlobalDesign.getDesignName() === "globalDesign") {
            alert("Global design is empty");
            return true;
        }
        else
            return false;
   };
   
    //-------------------------------------------------------------------------------------------//
    
    function getGlobalDesign () {
        return _GlobalDesign;
    };
   
   //-------------------------------------------------------------------------------------------//
   
   // This function is to reset the global design
   function resetGlobalDesign () {
       var nDesignName = "globalDesign";
       var nFigures = [];
       var nSectors = [];
       var nLineFigures = [];
       var nBasicPoints = [];
       var nContourLines = [];
       _GlobalDesign.setDesignName(nDesignName);
       _GlobalDesign.setDesignFigures(nFigures);
       _GlobalDesign.setSectors(nSectors);
       _GlobalDesign.setFigureLines(nLineFigures);
       _GlobalDesign.setBasicPoints(nBasicPoints);
       _GlobalDesign.setBasicLines(nContourLines);
       _GlobalDesign.setAmountOfFigures(0);
   };
   
   //-------------------------------------------------------------------------------------------//
   
   // This function shows status of the global design
   
   
   function statusGlobalDesign () {
       if (_GlobalDesign.getDesignName() === "globalDesign")
           alert("Empty");
       else {
           actualFigure = 0;
           var totalFigures = _GlobalDesign.getDesignFigures();
           for (actualFigure; actualFigure < totalFigures.length; actualFigure++) {
               var nFigure = totalFigures[actualFigure];
               if (nFigure instanceof Circle) { 
                   alert("This is a Circle");
                   alert(nFigure.getColor());
                   alert(nFigure.getBorderSize());
                   alert(nFigure.getInitialPoint());
                   alert(nFigure.getRadius());
                   alert(nFigure.getFill());
               }
               if (nFigure instanceof Square) {
                   alert("This is a Square");
                   alert(nFigure.getColor());
                   alert(nFigure.getBorderSize());
                   alert(nFigure.getInitialPoint());
                   alert(nFigure.getWidth());
                   alert(nFigure.getHeight());
                   // alert(nFigure.getFill());
               }
               if (nFigure instanceof Arc) {
                   alert("This is a Arc");
                   
               }
               if (nFigure instanceof Line) {
                   alert("This is a Line");
                   alert(nFigure.getColor());
                   alert(nFigure.getBorderSize());
                   alert(nFigure.getInitialPoint());
                   alert(nFigure.getEndingPoint());
               }
           }
        }
       
   };
   
   //-------------------------------------------------------------------------------------------//
   
   // This function verify if a design already exists, if already exists shows alert, if not exists call to save Design
   function verifyExistenceOfDesign (pDesignName) {         
       Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
        var Designs = Parse.Object.extend("Designs");
        var designQuery = new Parse.Query(Designs);
        designQuery.equalTo("Name", pDesignName);
        designQuery.find({
            success: function (results) {
                if (results.length === 1){
                    alert("Existe");
                }
                else {
                    alert("No existe");
                }
            },
            error: function (object, error) {
                alert("Error unexpected " + "Error code" + error.code + "Error message" + error.message);
            }
        });
    };
    
    //-------------------------------------------------------------------------------------------//
    
    // This function converts a circle to json with his properties and add to pArray    
    function addCircleArray (pArray, pCircle) {
        alert("El x es: " + pCircle.getInitialPoint().getX());
        alert("El y es: " + pCircle.getInitialPoint().getY())
        nArrayCircle = {"Type": "Circle", "Color": pCircle.getColor(), "BorderSize": pCircle.getBorderSize(), "InitialPointX": pCircle.getInitialPoint().getX(), "InitialPointY": pCircle.getInitialPoint().getY(), 
            "Radius": pCircle.getRadius(), "Fill": pCircle.getFill()};
        pArray.push(nArrayCircle);
    };
    
    //-------------------------------------------------------------------------------------------//
    
    // This function converts a line to json with his properties and add to pArray
    function addLineArray (pArray, pLine) {
        nArrayLine = {"Type": "Line", "Color": pLine.getColor(), "BorderSize": pLine.getBorderSize(), "InitialPointX": pLine.getInitialPoint().getX(), 
            "InitialPointY": pLine.getInitialPoint().getY(), "EndingPointX": pLine.getEndingPoint().getX, "EndingPointY": pLine.getEndingPoint().getY()};
            pArray.push(nArrayLine);
    };
    
    //-------------------------------------------------------------------------------------------//
    
    // This function converts a square to json with his properties and add to pArray
    function addSquareArray (pArray, pSquare) {
        nArraySquare = {"Type": "Square", "Color": pSquare.getColor(), "BorderSize": pSquare.getBorderSize(), "InitialPointX": pSquare.getInitialPoint().getX(), "InitialPointY": pSquare.getInitialPoint().getY(), 
            "Width": pSquare.getWidth(), "Height": pSquare.getHeight(), "Fill": pSquare.getFill()};
            pArray.push(nArraySquare);
    };
    
    //-------------------------------------------------------------------------------------------//
    
    // This function converts a figure to JSON and add it to nArray, return an array of json figures
    function addGeneralFigure(pArrayOfFigures) {
        var nArray = new Array ();
        var currentFigure = 0;
        for (currentFigure; currentFigure < pArrayOfFigures.length; currentFigure++) {
            var actualFigure = pArrayOfFigures[currentFigure];
            if (actualFigure instanceof Circle)
                addCircleArray(nArray, actualFigure);
            if (actualFigure instanceof Line)
                addLineArray(nArray, actualFigure);
            if (actualFigure instanceof Square)
                addSquareArray(nArray, actualFigure);
        }
        return nArray;
    };
    
    //-------------------------------------------------------------------------------------------//
    
    // This function converts a figure to JSON and add it to nArray, return an array of json figures
    function addSectorArray(pSectors) {
        var nArray = new Array ();
        var currentSector = 0;
        for (currentSector; currentSector < pSectors.length; currentSector++) {
            var actualSector = pSectors[currentSector];
            var nSector = {
                "Color": actualSector.getColor(), "BorderSize": actualDector.getBorderSize(), "InitialPointX": actualSector.getInitialPoint().getX(), "InitialPointY": actualSector.getInitialPoint().getY()
            };
            nArray.push(nSector);
        }
        return nArray;
    };
    
    //-------------------------------------------------------------------------------------------//
  
    // This function save a design in parse.com
    function saveDesign (pDesign) {
        var savingDesgin = pDesign;
        
        var jsonDesign = {
            "Name": savingDesgin.getDesignName(),
            "Figures": addGeneralFigure(savingDesgin.getDesignFigures()),
            "Sectors": addSectorArray(savingDesgin.getSectors()),
            "Lines": savingDesgin.getFigureLines(),
            "BasicPoints": addBasicPointsArray(savingDesgin.getBasicPoints()),
            "ContourLines": addContourLinesArray(savingDesgin.getBasicLines()),
        };
 
        Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
        var Designs = Parse.Object.extend("Designs");
        var newDesign = new Designs();
        newDesign.set(jsonDesign);
        newDesign.save({
              success: function(object) {
                alert("The Design " + savingDesgin.getDesignName() + " was saved");
              },
              error: function(newDesign, error) {
                alert("ERROR TO SAVE DESIGN: " + savingDesgin.getDesignName() + " ERROR CODE: " + error.code + " ERROR MESSAGE: " + error.message);
              }
        });   
    };
    
    //-------------------------------------------------------------------------------------------//
    
    
    // This function converts a points Array to JSON and add it to jsonArray, return an array of json points
    function addBasicPointsArray (pArrayBasicPoints) {
        var jsonArray = new Array ();
        var currentPoint = 0;
        for (currentPoint; currentPoint < pArrayBasicPoints.length; currentPoint++) {
            var actualPoint = pArrayBasicPoints[currentPoint];
            var nPoint = {
                "PointX": actualPoint.getX(), "PointY": actualPoint.getY()
            };
            jsonArray.push(nPoint);
        }
        return jsonArray;
    };
    
    //-------------------------------------------------------------------------------------------//
    
    // This function converts a line to JSON and add it to jsonArray, return an array of json lines
    function addContourLinesArray (pArrayContourLines) {
        var jsonArray = new Array ();
        var currentContourLine = 0;
        for (currentContourLine; currentContourLine < pArrayContourLines.length; currentContourLine++) {
            var actuallContourLine = pArrayContourLines[currentContourLine];
            addLineArray(jsonArray, actuallContourLine);
        }
        return jsonArray;
    };
    
     //-------------------------------------------------------------------------------------------//
     
     
     // This function receives an array of json figures, converts these json array in an array of figures
     function loadGlobalFigures (pArrayOfFigures) {
         var actuallFigure = 0;
         for (actuallFigure; actuallFigure < pArrayOfFigures.length; actuallFigure++) {
             var currentFigure = pArrayOfFigures[actuallFigure];
             var nType = currentFigure.Type;
             if (nType === "Circle" && currentFigure.Radius === 10) {
     
             }
             else if (nType === "Circle") {
                 var nPoint = new point(currentFigure.InitialPointX, currentFigure.InitialPointY);
                 alert("El x cargado es: " + currentFigure.InitialPointX);
                 alert("El y cargado es: " + currentFigure.InitialPointY);
                 _GlobalDesign.addCircle(currentFigure.Color, currentFigure.BorderSize, nPoint, currentFigure.Radius, currentFigure.Fill);
             }
             else if (nType === "Square") {
                 var nPoint = new point (currentFigure.InitialPointX, currentFigure.InitialPointY);
                 _GlobalDesign.addSquare(currentFigure.Color, currentFigure.BorderSize, nPoint, currentFigure.Width, currentFigure.Height, currentFigure.Fill);
             }
             else if (nType === "Line") {
                 var nInitialPoint = new point (currentFigure.InitialPointX, currentFigure.InitialPointY);
                 var nEndingPoint = new point (currentFigure.EndingPointX, currentFigure.EndingPointY);
                 _GlobalDesign.addLine(currentFigure.Color, currentFigure.BorderSize, nInitialPoint, nEndingPoint);
             }
         }
     };
     
     //-------------------------------------------------------------------------------------------//
     
     
     // This function receives an array of json figures, converts these json array to figures and loads to global design
     function loadGlobalSector (pSectors) {
         var arraySectors = [];
         var actualSector = 0;
         for (actualSector; actualSector < pSectors.length; actualSector++) {
             var currentSector = pSectors[actualSector];
             var nPoint = new point(currentSector.InitialPointX, currentSector.InitialPointY);
             var nSector = new Figure(currentSector.Color, currentSector.BorderSize, nPoint);
             arraySectors.push(nSector);
         }
         _GlobalDesign.setSectors(arraySectors);
     };
     
     //-------------------------------------------------------------------------------------------//
     
     
     // This function receives an array of json points, converts these json array to points and loads to global design
     function loadGlobalBasicPoints (pBasicPoints) {
         var currentPoint = 0;
         var nBasicPoint = [];
         for (currentPoint; currentPoint < pBasicPoints.length; currentPoint++) {
             var actuallPoint = pBasicPoints[currentPoint];
             var _nPoint = new point(actuallPoint.PointX, actuallPoint.PointY);
             nBasicPoint.push(_nPoint);
         }
         _GlobalDesign.setBasicPoints(nBasicPoint);
     };
     
     //-------------------------------------------------------------------------------------------//
     
     // This function receives an array of json lines, converts these json array in an lines and loads to global design
     function loadGlobalBasicLines (pContourLines) {
         var currentLine = 0;
         var nContourLines = [];
         for (currentLine; currentLine < pContourLines.length; currentLine++) {
             var actualLine = pContourLines[currentLine];
             var nInitialPoint = new point (actualLine.InitialPointX, actualLine.InitialPointY);
             var nEndingPoint = new point (actualLine.EndingPointX, actualLine.EndingPointY);
             var _nLine = new Line (actualLine.Color, actualLine.BorderSize, nInitialPoint, nEndingPoint);
             nContourLines.push(_nLine);
         }
         _GlobalDesign.setBasicLines(nContourLines);
     };
     
     //-------------------------------------------------------------------------------------------//


     // This function updates the values of the global design
     function loadGlobalDesign(pDesign) {
       _GlobalDesign.setDesignName(pDesign.get('Name'));
       loadGlobalFigures(pDesign.get('Figures'));
       loadGlobalSector(pDesign.get('Sectors'));
       _GlobalDesign.setFigureLines(pDesign.get('Lines'));
       loadGlobalBasicPoints(pDesign.get('BasicPoints'));
       loadGlobalBasicLines(pDesign.get('ContourLines'));
     };
     
      //-------------------------------------------------------------------------------------------//
     
     // This function retrieves a design, if it exists
     function retrieveDesign (pDesignName){
         Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
            
            var Designs = Parse.Object.extend("Designs");
            var designQuery = new Parse.Query(Designs);
            designQuery.equalTo("Name", pDesignName);
            designQuery.find({
                success: function (results) {
                    // Here, we can do something with the design retrieved
                    if (results.length === 1) {
                        
                        // Reset the gobal variable
                        resetGlobalDesign();
                        
                        loadGlobalDesign(results[0]);
                        alert("The design " + pDesignName + " was retrieved");
                    }
                    else
                        alert("This design dosn´t exists");
                },
                error: function (object, error) {
                    alert("Error to load design: " + "Error code" + error.code + "Error message" + error.message);
                }
            });
     };
     
     //-------------------------------------------------------------------------------------------//
     
     function updateDesign (pDesign) {
         Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
         var Designs = Parse.Object.extend("Designs");
        var designQuery = new Parse.Query(Designs);
        designQuery.equalTo("Name", pDesign.getDesignName());
        designQuery.find({
            success: function (results) {
                var nDesign = results[0];
                var jsonDesign = {
                    "Name": pDesign.getDesignName(),
                    "Figures": addGeneralFigure(pDesign.getDesignFigures()),
                    "Lines": pDesign.getFigureLines(),
                    "BasicPoints": addBasicPointsArray(pDesign.getBasicPoints()),
                    // Falta guardar contour lines
                    // Modificar addContourLinesArray
                    "AmountOfFigures": pDesign.getAmountOfFigures()
                };
                nDesign.set(jsonDesign);
                nDesign.save({
                      success: function(object) {
                        alert("Update");
                      },
                      error: function(newDesign, error) {
                        alert("ERROR TO SAVE DESIGN: " + pDesign.getDesignName() + " ERROR CODE: " + error.code + " ERROR MESSAGE: " + error.message);
                      }
                }); 

            },
            error: function (object, error) {
                alert("Error to load design: " + "Error code" + error.code + "Error message" + error.message);
            }
        });
     };
     
     //-------------------------------------------------------------------------------------------//
     
     
     function getTimeArcade () {
         Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
         var arcadeTime = Parse.Object.extend("arcadeTime");
            var designQuery = new Parse.Query(arcadeTime);
            designQuery.find({
                success: function (results) {
                    // Here, we can do something with the design retrieved
                    alert(results[0].get('BestArcadeTime'));
                },
                error: function (object, error) {
                    alert("Error to get Arcade time: " + "Error code" + error.code + "Error message" + error.message);
                }
            });
     };
     
     //-------------------------------------------------------------------------------------------//
     
     function getTimeFire () {
         Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
         var FireTime = Parse.Object.extend("FireTime");
            var designQuery = new Parse.Query(FireTime);
            designQuery.find({
                success: function (results) {
                    // Here, we can do something with the design retrieved
                    alert(results[0].get('BestFireTime'));
                },
                error: function (object, error) {
                    alert("Error to get Fire time: " + "Error code" + error.code + "Error message" + error.message);
                }
            });
     };
     
     //-------------------------------------------------------------------------------------------//
     
     function saveTimeArcade (pTimeArcade) {
         Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
         var ArcadeTime = Parse.Object.extend("ArcadeTime");
         var newTimeArcade = new ArcadeTime();
         newTimeArcade.set("BestArcadeTime", pTimeArcade);
         newTimeArcade.save({
              success: function(object) {
                alert("The Arcade time " + pTimeArcade + " was saved");
              },
              error: function(newDesign, error) {
                alert("ERROR TO SAVE ARCADETIME: " + pTimeArcade + " ERROR CODE: " + error.code + " ERROR MESSAGE: " + error.message);
              }
        }); 
     };
     
     //-------------------------------------------------------------------------------------------//
     
     function saveTimeFire (pTimeFire) {
         Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
         var FireTime = Parse.Object.extend("FireTime");
         var newTimeFire = new FireTime();
         newTimeFire.set("BestFireTime", pTimeFire);
         newTimeFire.save({
              success: function(object) {
                alert("The Fire time " + pTimeFire + " was saved");
              },
              error: function(newDesign, error) {
                alert("ERROR TO SAVE ARCADETIME: " + pTimeFire + " ERROR CODE: " + error.code + " ERROR MESSAGE: " + error.message);
              }
        });
     };
     
     //-------------------------------------------------------------------------------------------//
     
     
     function uploadArcade (pArcadeTime) {
         Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
         var ArcadeTime = Parse.Object.extend("ArcadeTime");
         var designQuery = new Parse.Query(ArcadeTime);
         designQuery.find({
            success: function (results) { 
                var actualArcadeTime = results[0];
                actualArcadeTime.set("BestArcadeTime", pArcadeTime);
                actualArcadeTime.save({
                      success: function(object) {
                        alert("Update the arcade time");
                      },
                      error: function(newDesign, error) {
                        alert("ERROR to upload the arcade time");
                      }
                });       
            },
            error: function (object, error) {
                alert("Error to upload the arcade time");
            }
        });
    };
    
    //-------------------------------------------------------------------------------------------//
    
    function uploadFire (pFireTime) {
        Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
         var FireTime = Parse.Object.extend("FireTime");
         var designQuery = new Parse.Query(FireTime);
         designQuery.find({
            success: function (results) { 
                var actualFireTime = results[0];
                actualFireTime.set("BestFireTime", pFireTime);
                actualFireTime.save({
                      success: function(object) {
                        alert("Update the fire time");
                      },
                      error: function(newDesign, error) {
                        alert("ERROR TO upload the fire time");
                      }
                });       
            },
            error: function (object, error) {
                alert("Error to upload the fire time");
            }
        });
    };