import { getFirestore, collection, addDoc, getDoc } from "firebase/firestore"; 
import { getAuth } from "firebase/auth"

export function fetchUser() {
    return ((dispatch) => {
        getDoc(collection(getFirestore()))
        .then((snapshot) => {
            if(snapshot.exists){
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
            }
        })
    })
}