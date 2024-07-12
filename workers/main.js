const Myworker = new Worker('generate.js');

function changeBackground(){
    document.body.classList.toggle('green');
}

function logMessage(){
    if(window.Worker){
        Myworker.postMessage('Start');

        Myworker.addEventListener('message', function(event){
            const result = event.data;
            alert(`Script is Executed: ${result}`);
        })
    }
}