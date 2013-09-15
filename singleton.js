var bean1 = function() {
    var privateA = 10;
    var privateF = function() {
        return privateA + 1;
    }
    
    return {
        getA : function() {
            return privateF() + 1;
        }
    }
    
}();

var rest = bean1.getA();
this.document.body.innerHTML = rest;