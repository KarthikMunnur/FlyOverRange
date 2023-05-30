import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserHistory } from "history";
import firebase from "firebase";
import { UserData } from "../../components/models/UserData";

export const browserHistory = createBrowserHistory();

toast.configure();
export const passwordReset = (email) => {
  return () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        toast.success("Please check your mail");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((resp) => {
        if (!resp.user.emailVerified) {
          //firebase.auth().signOut();
          window.location.href = "/";
        }
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ err });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = new UserData(); // creating an object instance based on model class

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        resp.user.sendEmailVerification();
        window.localStorage.setItem("emailForSignIn", resp.user.email);
        user.displayName = newUser.name;
        user.userid = resp.user.uid;
        user.mailid = resp.user.email;

        resp.user.updateProfile({
          displayName: newUser.name,
          photoURL: "",
        });

        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            ...user,
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
        firebase.auth().signOut();
        if (!firebase.auth().emailVerified) {
          window.location.href = "/";
        }
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

export const signInWithGoogle = async () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();

        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const searchValue = (search) => (dispatch, getState) => {
  dispatch({ type: "SOME_ACTION", payload: search });
};
