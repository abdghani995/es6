

'use strict'


let myPromise = new Promise((resolve,reject) => {
	setTimeout(()=>{
		resolve('Good To go');
	},1000);

});

let myPromise2 = new Promise((resolve,reject) =>{
	
	setTimeout(()=>{
		//due to this reject promise.all is not called
		reject('Promise 2 called')
	},1500)	

})

let myPromise3 = new Promise((resolve,reject) => {
	setTimeout(()=>{
		resolve('third promise')
	},2000)
})

// all wil only enter if all promises are resolved
Promise.all([myPromise,myPromise2,myPromise3])
	.then((data) => {
		console.log(data);
},(err)=>{
	console.log(err);
})

// feteches from a url . Inbuilt :) . 
fetch('http://api.icndb.com/jokes/random/50')
	.then((res) => {
		res.json().then((data) => {
				console.log(data)
		})
	})
	.catch((err) => {
		console.log(err);
});

	