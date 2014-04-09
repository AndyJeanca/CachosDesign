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


