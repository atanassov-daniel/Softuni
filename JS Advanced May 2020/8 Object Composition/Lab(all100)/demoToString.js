let obj = {
    toString() {
        console.log(JSON.stringify(this)); // || console.log(this);
        return JSON.stringify(this);
    }
};

obj.toString(); // {} || { toString: [Function: toString] }
obj.width = 10;
obj.toString(); // {"width":10} || { toString: [Function: toString], width: 10 }
obj.isReady = true;
obj.toString(); // {"width":10,"isReady":true}
obj.command = "begin work";
obj.toString(); // {"width":10,"isReady":true,"command":"begin work"}
obj.empty = null;
obj.toString(); // {"width":10,"isReady":true,"command":"begin work","empty":null}
obj.undef = undefined;
obj.toString(); // {"width":10,"isReady":true,"command":"begin work","empty":null}
obj.arr = [1, true, "ready"];
obj.toString(); // {"width":10,"isReady":true,"command":"begin work","empty":null,"arr":[1,true,"ready"]}
obj.object = {
    lat: 42.3455646,
    long: 23.8574893
};
obj.toString(); // {"width":10,"isReady":true,"command":"begin work","empty":null,"arr":[1,true,"ready"],"object":{"lat":42.3455646,"long":23.8574893}}
obj.func = function () {
    return Math.max(Object.values(this.object));
}
obj.toString(); // {"width":10,"isReady":true,"command":"begin work","empty":null,"arr":[1,true,"ready"],"object":{"lat":42.3455646,"long":23.8574893}}