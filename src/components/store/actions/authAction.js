export const login = (user) => {
    console.log(user);
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            user.email,
            user.password
        ).then(() => {
            dispatch({
                type:'LOGIN_SUCCESS'
            })
        }).catch((err) => {
            dispatch({
                type:'LOGIN_ERROR', err
            })
        })
    }
}

export const SignOut = () => {
    return (dispatch,getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({
                type:"SIGNOUT_SUCCESS"
            })
        })
    }
}

export const SignUp = (user) => {
    return (dispatch, getState, {getFirestore,getFirebase}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
         firebase.auth().createUserWithEmailAndPassword(
            user.email,
            user.password
        ).then((res) => {
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: user.firstname,
                lastName: user.lastname,
                initials: user.firstname[0].toUpperCase() + user.lastname[0].toUpperCase() 
            })
        }).then(() => {
            dispatch({
                type:"SIGNUP_SUCCESS"
            })
        }).catch(err => {
            dispatch({
                type:"SIGNUP_ERROR", 
                err
            })
        })
    }
}
