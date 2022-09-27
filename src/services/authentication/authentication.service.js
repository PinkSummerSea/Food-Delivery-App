import * as firebase from "firebase";

export const loginRequest = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((u) => u.user)
    .catch((e) => e);
};
