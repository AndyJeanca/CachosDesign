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
         
         this.started = false;
         
         this.ubicateBasicPoints();
         
         this.createBasicLines();
         
         this.started = true;
         
         
    },
  
    //These are the getters and setters of the design class
     
     getDesignName : function(){
         return this._DesignName;
     },
     
     setDesignName : function(pNewDesignName){
          this._DesignName =pNewDesignName;
     },
     
     getBasicPoints : function(){
         return this._basicPoints;
     },
     
     setBasicPoints : function(pBasicPoints){
         this._basicPoints=pBasicPoints;
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
       var figureDraw=this._figures[pId];
       return figureDraw;
     },
     
     getAmountOfFigures : function(){
        return this.amountOFFigures;
     },
     
     setAmountOfFigures : function(pAmountOfFigures){
        this.amountOFFigures=pAmountOfFigures;
     },
    
    addFigure:function(pFigure){
        this._figures.push(pFigure);
        this.amountOFFigures++;

    },
    
    //These are the functions to start or reload a design :)
    
     ubicateBasicPoints : function(){
         for (var amountOfBasicPoint = 0; amountOfBasicPoint<7; amountOfBasicPoint++){
             var newPoint = new point (amountOfBasicPoint,0,0,1);
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
     
     createTennisBackground : function(){
        if(this.amountOFFigures===0){
            var newTennisShape= new tennis(0, 0, 1,this._basicPoints);
            this.addFigure(newTennisShape);
            
        }
        else{
            var tennisColor = this.getFigureColorById(0);
            var tennisBorderSize = this.getFigureBorderSizeById(0);
            var updatedTennisShape= new tennis(0, tennisColor, tennisBorderSize,this._basicPoints);
            this._figures[0]=updatedTennisShape;
        }
     
 
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
    
     addCircle : function(pColor, pBorderSize,pInitialPoint, pRadius, pFill){
         var newCircle = new Circle(this.amountOFFigures, pColor, pBorderSize,pInitialPoint, pRadius, pFill);
         this.addFigure(newCircle);
     },
     
     addSquare : function (pColor, pBorderSize, pInitialPoint, pWidth, pHeight){
         var newSquare = new Square(this.amountOFFigures, pColor, pBorderSize, pInitialPoint, pWidth, pHeight);
         this.addFigure(newSquare); 
     },
     
     addLine  : function ( pColor, pBorderSize,pInitialPoint, pEndingPoint){
         this.addCircle(pColor, pBorderSize,pInitialPoint, 7,1);
         this.addCircle(pColor, pBorderSize,pEndingPoint, 7,1); 
         var newLine = new Line(this.amountOFFigures, pColor, pBorderSize,pInitialPoint, pEndingPoint);
         this._lineFigures.push(this.amountOFFigures);
         this.addFigure(newLine); 
     },
             
     //These functions are made to modificate all the components

    modificatePointById : function (pId,pPoint){
        this._basicPoints[pId].movePoint(pPoint.getX(),pPoint.getY());
 
     },
             
     modificateFigureById : function (pId,pPoint){
        this._figures[pId].movePoint(pPoint.getX(),pPoint.getY());
 
     },
     
     modificateFigureColorById : function (pId,pColor){
        this._figures[pId].setColor(pColor);
 
     },
     
     modificateFigureBorderSizeById : function (pId,pBorderSize){
        this._figures[pId].setBorderSize(pBorderSize);
 
     },
     
     getFigureColorById : function (pId){
        return this._figures[pId].getColor();
 
     },
     
     getFigureBorderSizeById : function (pId){
        return this._figures[pId].getBorderSize();
 
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
     
      modificateContourColor : function(pColor){
  
         //Line A-B
         this._contourLines[3].setColor(pColor);
         //Point B-C
         this._contourLines[0].setColor(pColor);
         //Point C-D
         this._contourLines[1].setColor(pColor);
         //point E-A
         this._contourLines[4].setColor(pColor);
         
         
     },
     
     modificateSoleColor : function(pColor){
         //PointD-E
         this._contourLines[2].setColor(pColor);
         
         
     },
     
     modificateContourBorderSize : function(pBorderSize){
        //Line A-B
         this._contourLines[3].setBorderSize(pBorderSize);
         //Point B-C
         this._contourLines[0].setBorderSize(pBorderSize);
         //Point C-D
         this._contourLines[1].setBorderSize(pBorderSize);
         //point E-A
         this._contourLines[4].setBorderSize(pBorderSize);
         
         
     },
     
     checkSectors : function(){
        
 
     },
     
     modificateSoleBorderSize : function(pBorderSize){
        this._contourLines[2].setBorderSize(pBorderSize);
     }        
 
     
 });