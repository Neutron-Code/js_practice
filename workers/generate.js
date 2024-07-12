addEventListener('message', function(message){
    if(message.data !== 'Start') return;
    let sum = 0;
    for(let i =0; i < 10000000000; i++){
        sum+=i;
    }
    console.log(message);
    postMessage(sum);
})