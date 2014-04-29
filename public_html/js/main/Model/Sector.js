
/*
                                                                        _____           __            
                                                                      / ___/___  _____/ /_____  _____
                                                                      \__ \/ _ \/ ___/ __/ __ \/ ___/
                                                                     ___/ /  __/ /__/ /_/ /_/ / /    
                                                                    /____/\___/\___/\__/\____/_/     
                                 
 */
//document.write("<script type='text/javascript' src = '../Vendor/Class.js'></script>");
//document.write("<script type='text/javascript' src = '../Model/Point.js'></script>");

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