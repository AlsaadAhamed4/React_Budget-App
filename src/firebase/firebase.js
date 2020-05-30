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

database.ref().set({
    name: 'Alsaad Ahamed',
    age: 23,
    isSingle: true,
    loaction: {
        city: 'Kaup',
        country: 'India'
    }
});

database.ref('location/city').set('majoor');

database.ref('attributes').set({
    heigth: '5.2cm',
    weight: '68kg'
});