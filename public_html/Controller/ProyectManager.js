/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function drawAsquare (pX, pY, pWidth, pHeight) {
  var designCanvas = document.getElementById("_Canvas").getContext("2d");
  designCanvas.fillRect(pX, pY, pWidth, pHeight);
};

function drawAline (pXstarting, pYstarting, pXending, pYending) {
    var designCanvas = document.getElementById("_Canvas").getContext("2d");
    designCanvas.moveTo(pXstarting, pYstarting);
    designCanvas.lineTo(pXending, pYending);
    designCanvas.stroke();
};

function drawAarc (pX, pY, pRadius, pAngleStarting, pAngleEnding, pAntiClockWise) {
    var designCanvas = document.getElementById("_Canvas").getContext("2d");
    designCanvas.beginPath(); 
    designCanvas.arc(pX, pY, pRadius, pAngleStarting, pAngleEnding, pAntiClockWise); 
    designCanvas.stroke(); 
};

function designDefault() {
    var designCanvas = document.getElementById("_Canvas").getContext("2d");
    drawAarc(475, 150, 125, 0, 2.9, false); // A-B
    drawAline(600, 150, 720, 325); // B-C
    drawAline(720, 325, 880, 390); // C-D
    drawAarc(165, 250, 200, 0.77, 5.9, true); // A-E
    drawAline(310, 390, 880, 390);
};


function paintApixel (pX, pY) {  
    var designCanvas = document.getElementById("_Canvas").getContext("2d");
    designCanvas.fillRect(pX, pY, 1, 1);
    designCanvas.stroke(); 
};