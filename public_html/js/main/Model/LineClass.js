var Line = Figure.extend({
    init : function (pId, pColor, pBorderSize,pInitialPoint, pEndingPoint) {
        
       this._Super(pId, pColor, pBorderSize, pInitialPoint);
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
        points: [this.initialPoint.getX(),this.initialPoint.getY(),this.endingPoint.getX(),this.finalPoint.getY()],
        stroke: this.colorList.getColor(this.color),
        strokeWidth: this.borderSize,
        lineCap: 'round',
        draggable : true,
        lineJoin: 'round'
      });
      return line;
    }
    
});