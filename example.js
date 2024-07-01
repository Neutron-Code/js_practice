function logingMessage(log){
    console.log(log);
}

const newfunction = logingMessage.bind(null, 'Hello Harish, this is void')
setTimeout(newfunction, 1000);
