/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function point(pPointX,pPointY,pColor){
    var pointX = pPointX;
    var pointY = pPointY;
    var color = pColor;
    
    this.setX=function(pX){
        pointX=pX;
    };
    this.setY=function(pX){
        pointX=pX;
    };
    this.getX=function(){
        return pointX;
    };
    this.getY=function(){
        return pointY;
    };
     this.setColor=function(pColor){
        color=pColor;
    };
    this.getColor=function(){
        return color;
    };
    
    
}