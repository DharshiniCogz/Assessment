function fetchData(url, callback){
    const error = Math.random() > 0.5;
    console.log(error);
    setTimeout(() => { 
        error ? callback(`error`, url) : callback(`success`, url);}, 1000);
}

function handleCallback(message, url){
    message === 'error' ? console.log(`Error occured: ${message} ${url}`) : console.log(`Response is successful. The URL is ${url} and message is ${message}`);
}

const url = 'https://google.com';
fetchData(url,handleCallback);