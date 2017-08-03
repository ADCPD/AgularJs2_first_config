// const message = 'hello';
//
// function saySomething(message: string = 'what\'s up!' ){
//     console.log(message);
// }
//
// saySomething(258);
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = "what's up!"; }
        return message + ' something !';
    };
    return Greeter;
}());
var greeter = new Greeter;
console.log(greeter.saySomething('25'));
//# sourceMappingURL=magic.js.map