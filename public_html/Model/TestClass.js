/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Test(pId, pName) {
    var  id = pId;
    var name = pName;
    
    this.getIde = function () {
        return id;
    };
    
    this.getName = function () {
        return name;
    };
}


