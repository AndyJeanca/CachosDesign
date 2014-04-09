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
        alert('Modificated');
        this._basicPoints[pId] = pPoint;
 
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
         _DesignName = this.pNewDesignName;
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