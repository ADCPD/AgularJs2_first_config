// const message = 'hello';
//
// function saySomething(message: string = 'what\'s up!' ){
//     console.log(message);
// }
//
// saySomething(258);


class Greeter {
    saySomething(message: string ="what's up!"){
        return message + ' something !';
    }
}

var greeter = new Greeter;
console.log(greeter.saySomething('25'));