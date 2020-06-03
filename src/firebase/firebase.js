import * as firebase from 'firebase';

//Changes - since we are using 2 database we need to use node env
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_MESSAGING_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default }

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


//Fectching the data from the server
/* const onValueChange = database.ref().on('value', (snapShot) => {
    const val = snapShot.val();
    console.log(`Hi ${val.name} here I am from ${val.location.city} which is in ${val.location.country} and I work in ${val.job.company}, Thanks`);
}, (e) => {
    console.log('There was an error', e);
});

setTimeout(()=>{
    database.ref('location/country').set('Spain');
},3500);
 */

//pushing Arrays based data to firebase using push 

/*  database.ref('Expenses').push({
     description:'Alsaad test Expenses 1',
     note:'Optional',
     amount:52000,
     createdAt:1475412
 });

 database.ref('Expenses').push({
    description:'Alsaad test Expenses 2',
    note:'Optional',
    amount:1200,
    createdAt:4754
});

database.ref('Expenses').push({
    description:'Alsaad test Expenses 3',
    note:'Optional',
    amount:3251,
    createdAt:777
}); */

//to read objects and store it in an array from firebase
/* database.ref('Expenses').once('value', (snapshot) => {
    let Expenses = [];
    snapshot.forEach((childSnapshot) =>{
        Expenses.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
        })
    })
    console.log(Expenses);
}); */

// creating a firebase array version of list
/* const onchangeExpensesData = database.ref('Expenses').on('value', (snapshot) => {
    const Expenses = [];
    snapshot.forEach((childSnapshot) => {
        Expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    });
    console.log(Expenses);
}, (e) => {
    console.log('There was error', e);
});

//setting up the event listner when a child is removed from the database
database.ref('Expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//setting up the event listner when a child value is changed from the database
database.ref('Expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//setting up the event listner when a child value is added from the database
database.ref('Expenses').on('child_added',(snapshot)=>{
    console.log(snapshot.key,snapshot.val(),'You added expenses');
}); */