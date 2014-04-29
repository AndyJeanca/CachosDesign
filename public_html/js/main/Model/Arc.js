/*
                                                                            ___             
                                                                          /   |  __________
                                                                         / /| | / ___/ ___/
                                                                        / ___ |/ /  / /__  
                                                                       /_/  |_/_/   \___/  
                    
 */

//.write("<script type='text/javascript' src = '../Model/Figure.js'></script>");

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
        stroke: this.colorList.getColor(0),
        strokeWidth: 2,
        lineCap: 'round',
        draggable : true
      });
	return arc; 
    },
    paintFigure : function () {
        var arc = new Kinetic.Shape({
            sceneFunc: function(context) {
              context.beginPath();
              //Point A
             context.moveTo(this.initialPoint.getX(),this.initialPoint.getY());
             //Point A curve 
             context.quadraticCurveTo(this.middlePoint.getX(),this.middlePoint.getY(),this.endingPoint.getX(),this.endingPoint.getY());
             //Point C
              // KineticJS specific context method
            context.fillStrokeShape(this);
            },
        // points: [this.initialPoint.getX(),this.initialPoint.getY(),this.middlePoint.getX(),this.middlePoint.getY(),this.endingPoint.getX(),this.endingPoint.getY()],
        stroke: this.colorList.getColor(this.pColor),
        strokeWidth: this.borderSize,
        lineCap: 'round',
        draggable : true
       
       
      });
	return arc; 
    }
    
});