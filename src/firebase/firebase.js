import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB8Pp6_6KCLNZ74oL2DkLHON4PJxFN6vPk",
    authDomain: "react-budget-app-ee181.firebaseapp.com",
    databaseURL: "https://react-budget-app-ee181.firebaseio.com",
    projectId: "react-budget-app-ee181",
    storageBucket: "react-budget-app-ee181.appspot.com",
    messagingSenderId: "269843971912",
    appId: "1:269843971912:web:0876340e5c2c817c0dfd7d",
    measurementId: "G-MESFP1G3PC"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

/* database.ref().set({
    name: 'Alsaad Ahamed',
    age: 23,
    isSingle: true,
    loaction: {
        city: 'Kaup',
        country: 'India'
    }
}).then(() => {
    console.log('data is been saved');
}).catch((e) => {
    console.log('There was an error', e);
});

database.ref('location/city').set('majoor')
    .then(() => {
        console.log('Saved Location data in Database');
    }).catch((e) => {
        console.log('There was an  error', e);
    });

database.ref('attributes').set({
    heigth: '5.2cm',
    weight: '68kg'
}).then(() => {
    console.log('Attributes data was saved in database');
}).catch((e) => {
    console.log('There was an  error', e);
});


database.ref('isSingle').remove()
    .then(() => {
        console.log('Removed isSingle from DB');
    }).catch((e) => {
        console.log('There was an Erron while removing', e)
    }); */


/* database.ref().update({
    name: 'Saad Ahamed',
    age: 23,
    isSingle: null,
    streeLevel:6,
    job:{
        title:'Software Developer',
        company:'Cerner'
    }
}).then(() => {
    console.log('Update data from DB');
}).catch((e) => {
    console.log('There was an Erron while updating', e)
}); */

/* database.ref().update({
    streeLevel:4,
    'job/company':'Paytm',
    'location/country':'Bangalore'
}).then(() => {
    console.log('Update data from DB');
}).catch((e) => {
    console.log('There was an Erron while updating', e)
});  */


/* database.ref().once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    }).catch((e) => {
        console.log('There was an error', e)
    }); */

//on return the callback function so we store in a variable an can be used to unsubscribe

/* const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('There was an error', e)
});

setTimeout(() => {
    database.ref('name').set('Alsaad Ahamed');
}, 5000);

setTimeout(() => {
    database.ref().off('value', onValueChange); // to unscribe the changes displayed
}, 6000);

setTimeout(() => {
    database.ref('name').set('saad Ahamed');
}, 8000); */

const onValueChange = database.ref().on('value', (snapShot) => {
    const val = snapShot.val();
    console.log(`Hi ${val.name} here I am from ${val.location.city} which is in ${val.location.country} and I work in ${val.job.company}, Thanks`);
}, (e) => {
    console.log('There was an error', e);
});

setTimeout(()=>{
    database.ref('location/country').set('Spain');
},3500);
