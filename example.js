function helloVoid(msg){
    console.log(msg)
}

const functionBind = helloVoid.bind(null, 'This is a normal loging message');

setTimeout(helloVoid, 1000);