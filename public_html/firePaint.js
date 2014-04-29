var arcadePaint = Class.extend({
        init : function(pStartX,pStartY,pLayerCanvas,pColorToPaint,pBackgroundColor){
            this.startX = pStartX;
            this.startY = pStartY;
            this.pixelStack = [[this.startX, this.startY]];
            this.colors = new Colors();
            
            var layerCanvas = pLayerCanvas;
            var layerContext = layerCanvas.getContext();
            this.canvasWidth = layerCanvas.getWidth();
            this.canvasHeigth = layerCanvas.getHeight();
            this.imageFromContext = layerContext.getImageData(0,0,this.canvasWidth,this.canvasHeigth);
            this.colorToPaint = pColorToPaint;
            this.backgroundColor = pBackgroundColor;
                    
        },
         paintSector : function (){
            while(this.pixelStack.length) {
                 
                  var newPos = this.pixelStack.pop();
                  var x = newPos[0];
                  var y = newPos[1];
                  
                  var pixelPos = (y*this.canvasWidth + x) * 4;
                    while(y-- >= 0 && this.matchStartColor(pixelPos)){
                      pixelPos -= this.canvasWidth * 4;
                    }
                      pixelPos += this.canvasWidth * 4;
                    
                    ++y;
                    var reachLeft = false;
                    var reachRight = false;
                    while(y++ < this.canvasHeigth-1 && this.matchStartColor(pixelPos)) {
                      this.colorPixel(pixelPos);
                      if(x > 0){
                          if(this.matchStartColor(pixelPos - 4)){
                            if(!reachLeft){
                              this.pixelStack.push([x - 1, y]);
                              reachLeft = true;
                            }
                          }
                          else if(reachLeft)
                          {
                            reachLeft = false;
                          }
                        }
                      if(x < this.canvasWidth-1){
                          if(this.matchStartColor(pixelPos + 4)){
                            if(!reachRight) {
                              this.pixelStack.push([x + 1, y]);
                              reachRight = true;
                            }
                          }
                          else if(reachRight) {
                            reachRight = false;
                          }
                        }

                        pixelPos += this.canvasWidth * 4;
                }

                  }
                  return this.imageFromContext;
     
         },
                 
         matchStartColor : function(pixelPos)
            {
              var r = this.imageFromContext.data[pixelPos];	
              var g = this.imageFromContext.data[pixelPos+1];	
              var b = this.imageFromContext.data[pixelPos+2];
              
              var startR = this.colors.getRGBColor(this.backgroundColor,1);
              var startG = this.colors.getRGBColor(this.backgroundColor,2);
              var startB = this.colors.getRGBColor(this.backgroundColor,3);
                
               
              return (r === startR && g === startG && b === startB);
            },
        
          colorPixel : function(pixelPos){
              var fillColorR = this.colors.getRGBColor(this.colorToPaint,1);
              var fillColorG = this.colors.getRGBColor(this.colorToPaint,2);
              var fillColorB = this.colors.getRGBColor(this.colorToPaint,3); 
                
              this.imageFromContext.data[pixelPos] = fillColorR;
              this.imageFromContext.data[pixelPos+1] = fillColorG;
              this.imageFromContext.data[pixelPos+2] = fillColorB;
              this.imageFromContext.data[pixelPos+3] = 255;
            },
            
            floodFillScanline : function(x, y, width, height) {
                // xMin, xMax, y, down[true] / up[false], extendLeft, extendRight
                var ranges = [[x, x, y, null, true, true]];
                paint(x, y);

                while(ranges.length) {
                        var r = ranges.pop();
                        var down = r[3] === true;
                        var up =   r[3] === false;

                        // extendLeft
                        var minX = r[0];
                        var y = r[2];
                        if(r[4]) {
                                while(minX>0 && test(minX-1, y)) {
                                        minX--;
                                        paint(minX, y);
                                }
                        }
                        var maxX = r[1];
                        // extendRight
                        if(r[5]) {
                                while(maxX<width-1 && test(maxX+1, y)) {
                                        maxX++;
                                        paint(maxX, y);
                                }
                        }

                                // extend range ignored from previous line
                                r[0]--;
                                r[1]++;

                        function addNextLine(newY, isNext, downwards) {
                                var rMinX = minX;
                                var inRange = false;
                                for(var x=minX; x<=maxX; x++) {
                                        // skip testing, if testing previous line within previous range
                                        var empty = (isNext || (x<r[0] || x>r[1])) && test(x, newY);
                                        if(!inRange && empty) {
                                                rMinX = x;
                                                inRange = true;
                                        }
                                        else if(inRange && !empty) {
                                                ranges.push([rMinX, x-1, newY, downwards, rMinX==minX, false]);
                                                inRange = false;
                                        }
                                        if(inRange) {
                                                paint(x, newY);
                                        }
                                        // skip
                                        if(!isNext && x==r[0]) {
                                                x = r[1];
                                        }
                                }
                                if(inRange) {
                                        ranges.push([rMinX, x-1, newY, downwards, rMinX==minX, true]);
                                }
                        }

                        if(y<height)
                                addNextLine(y+1, !up, true);
                        if(y>0)
                                addNextLine(y-1, !down, false);
                }
        }

        
    });


