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
       for(var numberOfColors = 0 ; numberOfColors<16; numberOfColors++){
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
        
    getInitailPoint : function(){
    return this.initialPoint;
    },
    
    
    setX : function(pPoint) {
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
    init : function(pId, pColor, pBorderSize, pInitialPoint, pWidth, pHeight, pFill) {
    this._super(pId, pColor, pBorderSize, pInitialPoint);
    this.width = pWidth;
    this.height = pHeight;
    
    //Is the color of the filler
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
    
    isInPointIn : function (pPoint) {
        var pointX1 = (this.initialPoint.getX() - this.width/2);
        var pointX2 = (this.initialPoint.getX() + this.width/2);
        
        var pointY1 = (this.initialPoint.getY() - this.height/2);
        var pointY2 = (this.initialPoint.getY() + this.height/2);
        
       if((pPoint.getX()>=pointX1 && pPoint.getX()<=pointX2)&&(pPoint.getY()>=pointY1 && pPoint.getY()<=pointY2)){
            return true;
        }
        else{
            return false;
        }
        
        
    },
    
    drawFigure : function () {
    var rect = new Kinetic.Rect({
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        fill: this.colorList.getColot(color),
        stroke: 'black',
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
    
    setEndingPoint : function (pEndingAngle) {
        this.endingPoint = pEndingAngle;
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
        fill: this.colorList.getColor(this.color),
        stroke: 'black',
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
    
    setEndingPoint : function (pEndingAngle) {
        this.endingPoint = pEndingAngle;
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
        stroke: this.colorList.getColor(this.color),
        strokeWidth: this.borderSize,
        lineCap: 'round',
        draggable : true,
        lineJoin: 'round'
      });
      return line;
    }
    
});
var Design= Class.extend({
    init : function (pDesignName){
        
     this._DesignName =pDesignName;
     
        
        
        //figures is a array composed of all the child classes of figure(Arc,Line,Circle,Square)
        this._figures = [];
         
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
         var newCircle = Circle(this.amountOFFigures, pColor, pBorderSize,pInitialPoint, pRadius, pFill);
         this._figures.push(newCircle);
         this.amountOFFigures++;
     },
     
     addSquare : function (pId, pColor, pBorderSize, pInitialPoint, pWidth, pHeight, pFill){
         var newSquare = Square(this.amountOFFigures, pColor, pBorderSize, pInitialPoint, pWidth, pHeight, pFill);
         this._figures.push(newSquare);
         this.amountOFFigures++;  
     },
     
     addLine  : function ( pColor, pBorderSize,pInitialPoint, pEndingPoint){
         var newLine = Line(this.amountOFFigures, pColor, pBorderSize,pInitialPoint, pEndingPoint);
         this._figures.push(newLine);
         this.amountOFFigures++;  
     },
     
     getBasicPoints : function(){
         return this._basicPoints;
     },
     
     getBasicLines : function(){
       return this._contourLines;  
     },
     
     // As we are using the following functions to get a figure by its id
     
     getFigure : function(pId){
       return this._figures[pId];
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
        this.currentXpostion = 0;
        this.currentYposition = 0;
        this.kineticBase;
        //This layer contains the basic points and basic lines
        this.firstlayer = new Kinetic.Layer();
        this.message = 'hola :)!!!';
    },
    
    
    
    //This function is the one that as soon as the program load, it loads canvasManagment
    
    startCachosDesign : function(){
      this.kineticManagment();
      this.cleanLayer();
      this.reloadCachosDesign();
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
    
    
    alarm : function (){
        alert(this.currentXpostion);
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
        var basicPoint = basicPointCircle.drawFigure();
        
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
        basicPoint.on('dragend',function(){
            var newBasicPoint = new point (pPositionOfPoint,this.getX(),this.getY(),5);
            updatePoint(newBasicPoint);
        });
        
        this.firstlayer.add(basicPoint);
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

    
 


















 



    
    
    
   