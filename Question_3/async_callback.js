function fetchData(url, callback){
    const error = Math.random() > 0.5;
    console.log(error);
    setTimeout(() => {
        if(error){
            callback(`error`, url);
        } else {
            callback(`success`, url);
        }
    }, 1000);
}

function handleCallback(message, url){
    if(message === `error`) {
        console.log(`Error occured: ${message} ${url}`);
    } else {
        console.log(`Response is successful. The URL is ${url} and message is ${message}`);
    }
}

const url = 'https://example.com';
fetchData(url,handleCallback);