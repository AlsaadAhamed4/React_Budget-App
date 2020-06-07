import { firebase, googleAuthProvider } from '../firebase/firebase';


export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
};

export const Logout = () => ({
    type: 'LOGOUT',
});

export const startLogOut = () => {
    return (dispatch) => {
        return firebase.auth().signOut();
    };
};