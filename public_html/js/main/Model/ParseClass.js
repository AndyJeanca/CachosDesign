/* 
                                                                        ____                     
                                                                       / __ \____ ______________ 
                                                                      / /_/ / __ `/ ___/ ___/ _ \
                                                                     / ____/ /_/ / /  (__  )  __/
                                                                    /_/    \__,_/_/  /____/\___/ 

 */
// document.write("<script type='text/javascript' src = '../Model/Figure.js'></script>");
//document.write("<script type='text/javascript' src = '../Model/Square.js'></script>");
//document.write("<script type='text/javascript' src = '../Model/Arc.js'></script>");
//document.write("<script type='text/javascript' src = '../Model/Circle.js'></script>");
//document.write("<script type='text/javascript' src = '../Model/Line.js'></script>");
//document.write("<script type='text/javascript' src = '../Model/Sector.js'></script>");
//document.write("<script type='text/javascript' src = '../Model/Tennis.js'></script>");
//document.write("<script type='text/javascript' src = '../Model/Design.js'></script>")
    
    // This variable is to get a design
    var _GlobalDesign = new Design("globalDesign");
    //-------------------------------------------------------------------------------------------//
    
    // This function is to reset the value of the global variable
    function resetGlobalDesign () {
        _GlobalDesign.setDesignName("globalDesign");
        var arrayGlobalFigure = _GlobalDesign.getFigures();
        var currentFigure = 0;
        for (currentFigure; currentFigure < _GlobalDesign.getAmountOfFigures(); currentFigure++) {
            arrayGlobalFigure.pop();
        }
        _GlobalDesign.setAmountOfFigures(0);
    };
    //-------------------------------------------------------------------------------------------//
 

    // This function is to get the status of the global variable
    function statusGlobalDesign () {
        alert(_GlobalDesign.getDesignName());
        alert(_GlobalDesign.getFigures().length);
        alert(_GlobalDesign.getAmountOfFigures());
    };
    //-------------------------------------------------------------------------------------------//
    
    // This function allows save a especify design, receives a design
    // This is a auxiliary function
    function saveDesign (pDesign) {
        Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
        
        // Save the figures individually
        var arrayFigures = pDesign.getFigures();
        var designName = pDesign.getDesignName();
        var nAmountOfFigures = nDesign.getAmountOfFigures();
        var currentFigure = 0;
        for (currentFigure; currentFigure < arrayFigures.length; currentFigure++) {
            if (arrayFigures[currentFigure].getType() === "Circle")
                saveCircle(designName, arrayFigures[currentFigure]);
            if (arrayFigures[currentFigure].getType() === "Square")
                saveSquare(designName, arrayFigures[currentFigure]);
            if (arrayFigures[currentFigure].getType() === "Line")
                saveLine(designName, arrayFigures[currentFigure]);      
        };
        
        // Save the design in parse.com
        var Designs = Parse.Object.extend("Designs");
        var newDesign = new Designs();
        newDesign.set("Name", designName);
        newDesign.set("AmountOfFigures", nAmountOfFigures);
        newDesign.save(null, {
              success: function(object) {
                alert("The Design " + designName + " was saved succesfull");
              },
              error: function(newDesign, error) {
                alert("Error to save design: " + "Error code" + error.code + "Error message" + error.message);
              }
            });
    };
    //-------------------------------------------------------------------------------------------//
    
    // This function allows save a circle, receives an owner name design and a circle
    function saveCircle (pDesignName, pCircle) {
        Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
        var Circles = Parse.Object.extend("Circles");
        var newCircle = new Circles();
        newCircle.set("Design", pDesignName);
        newCircle.set("Id", pCircle.getId());
        newCircle.set("Label", pCircle.getLabel());
        newCircle.set("Type", pCircle.getType());
        newCircle.set("Color", pCircle.getColor());
        newCircle.set("BorderSize", pCircle.getBorderSize());
        newCircle.set("X", pCircle.getX());
        newCircle.set("Y", pCircle.getY());
        newCircle.set("Radius", pCircle.getRadius());
        newCircle.set("Fill", pCircle.getFill());
        
        // Save Circle in parse.com
        newCircle.save(null, {
              success: function(object) {
                alert("The Circle property of " + pDesignName + " was saved succesfull");
              },
              error: function(newCircle, error) {
                alert("Error to save circle: " + "Error code" + error.code + "Error message" + error.message);
              }
        });
    };
    //-------------------------------------------------------------------------------------------//
    
    // This function allows save an arc, receives an owner name design and an arc
    function saveArc(pDesignName, pArc) {
        Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
        var Arcs = Parse.Object.extend("Arcs");
        var newArc = new Arcs();
        newArc.set("Design", pDesignName);
        newArc.set("Id", pArc.getId());
        newArc.set("Label", pArc.getLabel());
        newArc.set("Type", pArc.getType());
        newArc.set("Color", pArc.getColor());
        newArc.set("BorderSize", pArc.getBorderSize());
        newArc.set("X", pArc.getColor());
        newArc.set("Y", pArc.getY());
        newArc.set("StartingAngle", pArc.getStartingAngle());
        newArc.set("EndingAngle", pArc.getEndingAngle());
        newArc.set("Radius", pArc.getRadius());
        newArc.set("AntiClockWise", pArc.getAntiClockWise());
        
        // Save Arc in parse.com
        newArc.save(null, {
              success: function(object) {
                alert("The Arc property of " + pDesignName + " was saved succesfull");
              },
              error: function(newArc, error) {
                alert("Error to save arc: " + "Error code" + error.code + "Error message" + error.message);
              }
        });
    };
    //-------------------------------------------------------------------------------------------//
  
    
    // This function allows save a line, receives an owner name design and a line
    function saveLine(pDesignName, pLine) {
        Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
        var Lines = Parse.Object.extend("Lines");
        var newLine = new Lines();
        newLine.set("Design", pDesignName);
        newLine.set("Id", pLine.getId());
        newLine.set("Label", pLine.getLabel());
        newLine.set("Type", pLine.getType());
        newLine.set("Color", pLine.getColor());
        newLine.set("BorderSize", pLine.getBorderSize());
        newLine.set("X1", pLine.getX());
        newLine.set("Y1", pLine.getY());
        newLine.set("X2", pLine.getX2());
        newLine.set("Y2", pLine.getY2());
        
        // Save Line in parse.com
        newLine.save(null, {
              success: function(object) {
                alert("The Line property of " + pDesignName + " was saved succesfull");
              },
              error: function(newLine, error) {
                alert("Error to save line: " + "Error code" + error.code + "Error message" + error.message);
              }
        });
    };
    //-------------------------------------------------------------------------------------------//
    
    
    // This function allows save a square, receives an owner name design and a square
    function saveSquare (pDesignName, pSquare) {
        Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
        var Squares = Parse.Object.extend("Squares");
        var newSquare = new Squares();
        newSquare.set("Design", pDesignName);
        newSquare.set("Id", pSquare.getId());
        newSquare.set("Label", pSquare.getLabel());
        newSquare.set("Type", pSquare.getType());
        newSquare.set("Color", pSquare.getColor());
        newSquare.set("BorderSize", pSquare.getBorderSize());
        newSquare.set("X", pSquare.getX());
        newSquare.set("Y", pSquare.getY());
        newSquare.set("Width", pSquare.getWidth());
        newSquare.set("Height", pSquare.getHeight());
        newSquare.set("Fill", pSquare.getFill());
        
        // Save
        newSquare.save(null, {
              success: function(object) {
                alert("The Square property of " + pDesignName + " was saved succesfull");
              },
              error: function(newSquare, error) {
                alert("Error to save square: " + "Error code" + error.code + "Error message" + error.message);
              }
        });
    };
    //-------------------------------------------------------------------------------------------//
    
    
    // This function verify if a design already exists 
    // if already exists not saved
    // else the new design is saved
    function verifyExistenceDesign (pDesign) {         
       Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
        var Designs = Parse.Object.extend("Designs");
        var designQuery = new Parse.Query(Designs);
        designQuery.equalTo("Name", pDesign.getDesignName());
        designQuery.find({
            success: function (results) {
                if (results.length > 0){
                    alert("This name already exists");
                }
                else {
                    saveDesign(pDesign);
                }
            },
            error: function (object, error) {
                alert("Error unexpected " + "Error code" + error.code + "Error message" + error.message);
            }
        });
    };
    //-------------------------------------------------------------------------------------------//
    
    
    function updateDesign (pDesignName) {
        Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
        var Designs = Parse.Object.extend("Designs");
        var designQuery = new Parse.Query(Designs);
        designQuery.equalTo("Name", pDesignName);
        designQuery.find({
            success: function (results) {
                alert("The design " + pDesignName + " was retrieved succesfull ");
                // Here, we can do something with the object retrieved
                    var object = results[0];
                    alert(object.id + ' - ' + object.get('Name'));
                    object.set("Name", "Design2");
                    alert(object.id + ' - ' + object.get('Name'));
                    object.save();
            },
            error: function (object, error) {
                alert("Error: " + "Error code" + error.code + "Error message" + error.message);
            }
        });
    };
    //-------------------------------------------------------------------------------------------//
    
    
    // This function retrieves a design in the cloud and replaces the values of the global design
    // with the values of the design retrieved.
    function loadDesign (pDesignName) {
            Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
            
            // Reset the gobal variable
            resetGlobalDesign();
            
            var Designs = Parse.Object.extend("Designs");
            var designQuery = new Parse.Query(Designs);
            designQuery.equalTo("Name", pDesignName);
            designQuery.find({
            success: function (results) {
                // Here, we can do something with the design retrieved
                if (results.length === 1) {
                    _GlobalDesign.setDesignName(pDesignName);
                    loadCircles(pDesignName);
                    loadSquares(pDesignName);
                    loadLines(pDesignName);
                    alert("The design " + pDesignName + " was retrieved succesfull ");
                }
                else {
                    alert("This name is incorrect");
                }
            },
            error: function (object, error) {
                alert("Error to load design: " + "Error code" + error.code + "Error message" + error.message);
            }
        });
    };
    //-------------------------------------------------------------------------------------------//
    
    // This function searches all the squares of a specific design
    function loadSquares (pDesignName) {
        Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
        var Squares = Parse.Object.extend("Squares");
        var squareQuery = new Parse.Query(Squares);
        squareQuery.equalTo("Design", pDesignName);
        squareQuery.find({
            success: function (results) {
                // Here, we can load the global design
                alert("Squares found with this name" + results.length);
                loadGlobalSquares(results);
            },
            error: function (object, error) {
                alert("Error to load squares: " + "Error code" + error.code + "Error message" + error.message);
            }
        });
    };
    //-------------------------------------------------------------------------------------------//
    
    
    // This function searches all the lines of a specific design
    function loadLines (pDesignName) {
        Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
        var Lines = Parse.Object.extend("Lines");
        var lineQuery = new Parse.Query(Lines);
        lineQuery.equalTo("Design", pDesignName);
        lineQuery.find({
            success: function (results) {
                // Here, we can load the global design
                alert("Lines found with this name" + results.length);
                loadGlobalLines(results);
            },
            error: function (object, error) {
                alert("Error to load lines: " + "Error code" + error.code + "Error message" + error.message);
            }
        });
    };
    //-------------------------------------------------------------------------------------------//
    
    
    // This function searches all the circles of a specific design
    function loadCircles (pDesignName) {
        Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
        var Circles = Parse.Object.extend("Circles");
        var circleQuery = new Parse.Query(Circles);
        circleQuery.equalTo("Design", pDesignName);
        circleQuery.find({
            success: function (results) {
                // Here, we can load the global design
                alert("Circles found with this name" + results.length);
                loadGlobalCircles(results);
            },
            error: function (object, error) {
                alert("Error to load circles: " + "Error code" + error.code + "Error message" + error.message);
            }
        });
    };
    //-------------------------------------------------------------------------------------------//
    
    
    // This function will load the square design specific, and replace the values of the
    function loadGlobalSquares (pResults) {
        var currentSquare = 0;
        for (currentSquare; currentSquare < pResults.length; currentSquare++) {
            var nId = pResults[currentSquare].get('Id');
            var nLabel = pResults[currentSquare].get('Label');
            var nType = pResults[currentSquare].get('Type');
            var nColor = pResults[currentSquare].get('Color');
            var nBorderSize = pResults[currentSquare].get('BorderSize');
            var nX = pResults[currentSquare].get('X');
            var nY = pResults[currentSquare].get('Y');
            var nWidth = pResults[currentSquare].get('Width');
            var nHeight = pResults[currentSquare].get('Height');
            var nFill = pResults[currentSquare].get('Fill');
            _GlobalDesign.addSquare(nId, nLabel, nType, nColor, nBorderSize, nX, nY, nWidth, nHeight, nFill);
        }
        alert("Global Square/s loaded");
    };
    //-------------------------------------------------------------------------------------------//
    
    
    // This function will load the lines design specific, and replace the values of the
    // global design with these, receives an array of lines
    function loadGlobalLines (pResults) {
        var currentLine = 0;
        for (currentLine; currentLine < pResults.length; currentLine++) {
            var nId = pResults[currentLine].get('Id');
            var nLabel = pResults[currentLine].get('Label');
            var nType = pResults[currentLine].get('Type');
            var nColor = pResults[currentLine].get('Color');
            var nBorderSize = pResults[currentLine].get('BorderSize');
            var nX1 = pResults[currentLine].get('X1');
            var nY1 = pResults[currentLine].get('Y1');
            var nX2 = pResults[currentLine].get('X2');
            var nY2 = pResults[currentLine].get('Y2');
            _GlobalDesign.addLine(nId, nLabel, nType, nColor, nBorderSize, nX1, nY1, nX2, nY2);
        }
        alert("Global Line/s loaded");
    };
    //-------------------------------------------------------------------------------------------//
    
    
    // This function will load the circles design specific, and replace the values of the
    // global design with these, receives an array of circles
    function loadGlobalCircles (pResults) {
        var currentCircle = 0;
        for (currentCircle; currentCircle < pResults.length; currentCircle++) {
            var nId = pResults[currentCircle].get('Id');
            var nLabel = pResults[currentCircle].get('Label');
            var nType = pResults[currentCircle].get('Type');
            var nColor = pResults[currentCircle].get('Color');
            var nBorderSize = pResults[currentCircle].get('BorderSize');
            var nX = pResults[currentCircle].get('X');
            var nY = pResults[currentCircle].get('Y');
            var nRadius = pResults[currentCircle].get('Radius');
            var nFill = pResults[currentCircle].get("Fill");
            _GlobalDesign.addCircle(nId, nLabel, nType, nColor, nBorderSize, nX, nY, nRadius, nFill);
        }
        alert("Global Circle/s loaded");  
    };