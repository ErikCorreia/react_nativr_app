import axios from 'axios';

export function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{ return response.json()})
    .catch(error => console.log(error));
}
