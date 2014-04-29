
document.write("<script type='text/javascript' src = '../js/Model/ProjectManager.js'></script>");

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