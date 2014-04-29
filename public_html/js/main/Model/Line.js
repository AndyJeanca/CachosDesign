/*
                                                                           __    _          
                                                                          / /   (_)___  ___ 
                                                                         / /   / / __ \/ _ \
                                                                        / /___/ / / / /  __/
                                                                       /_____/_/_/ /_/\___/ 
                     
 */

//document.write("<script type='text/javascript' src = '../Model/Figure.js'></script>");

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
        strokeWidth: 1,
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