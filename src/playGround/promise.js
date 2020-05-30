
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I recived my resolved data');
    }, 3000)
});

console.log('I have request data');

promise.then((response) => {
    console.log(response);
});

console.log('please wait');

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('my data');
    },4000)
})
.then((res)=>{
    console.log('My data');
})