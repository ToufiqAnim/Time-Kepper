import React, {useState, useEffect} from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import initilizeAuthentication from '../Firebase/initilizeAuthentication';
initilizeAuthentication()

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
const [user, setUser] = useState({});
const [name, setName] = useState('');
const [email, setEmail]= useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [isLogin, setIsLogin] = useState(false);
  const auth = getAuth();

  const googleSignIn = () =>{
    return signInWithPopup(auth, googleProvider)
    .then(result =>{
     const user = result.user;
     console.log(user);

    })
  }
  const logOut = () => {
    signOut(auth)
    .then(() =>{
      setUser({})
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(user){
        setUser(user);
      }
    })
  },[]);

  const handleNameChange = e =>{
    setName(e.target.value)
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleRegistration = e =>{
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
    }
     if (isLogin) {
      loginProcess(email, password);
    }
    else {
      registerNewUser(email, password);
    } 
  }

  const loginProcess = (email, password) =>{
    signInWithEmailAndPassword(auth,email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setError('')
    })
    .catch(error =>{
      setError(error.message)
    })
  };
  const registerNewUser = (email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      setError('');
      /* verifyEmail();*/
        setUserName();
    })
  }
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
    .then(result =>{

    })
  }
  return {
    googleSignIn,
    logOut,
    user,
    isLogin,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    setUserName,
    loginProcess,
    error
  }
};

export default useFirebase;