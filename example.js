const fetchThree = fetch('https://jsonplaceholder.typicode.com/todos/3');

async function processPromise(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
        if(!response.ok) throw new Error(`Http Error: ${response.status}`);

        const data = await response.json();
        console.log(data);
        return {
            message: 'This is the message from another async funciton',
            port: 90937,
            urlId: 'user.web/malware.com',
            refId: 'x0eRf574xd'
        }
    }
    
    catch(err){
        console.error(err)
    }
    
    finally{
        console.log('Request Finished')
    }
}

document.getElementById('xhr').addEventListener('click', async () => {
    const resultOfPromise = processPromise();
    const res = await resultOfPromise;
    console.log(res); 
})
