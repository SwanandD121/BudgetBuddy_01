import React, { useState } from 'react'
import Header from './Header'
import Input from './Input'
import Button from './Button';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { toast } from 'react-toastify';

const Signupsignin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function signupWithEmail(){
    setLoading(true);
    console.log("Name", name);
    console.log("Email", email);
    console.log("password", password);
    console.log("confirmpassword", confirmPassword);

    // Authenticate a user or create a new acc using email and pass
    if(name != "" && email != "" && password != "" && confirmPassword != ""){
      if(password == confirmPassword){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("User -->", user)
          toast.success("Account Created")
          setLoading(false);
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");

          // Create a doc with user id as the following id
          createDoc(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
          setLoading(false);
          // ..
        });
      } else {
        toast.error("Password and Confirm Password do not match.")
        setLoading(false);
      }
    } else {
      toast.error("All fields are mandatory.")
      setLoading(false);
    }
  }

function createDoc(){
  // Make sure the doc woth the uid dosent exist
    // Create doc
}

  return (
    <div className='wrapper p-6  max-w-[600px] w-[70%] h-auto shadow-md shadow-slate-400  rounded-md border border-gray-400 flex flex-col gap-4'>
      <h2 className='text-md text-center text-xl'>SignUp on <span className='text-blue-600 font-bold'>BudgetBuddy</span></h2>
      <form action="">
        <Input className='' label={"Full Name"} state={name} setState={setName} placeholder={"John Doe"} />
        <Input className='' type="email" label={"Email"} state={email} setState={setEmail} placeholder={"johndoe123@gmail.com"} />
        <Input className='' type="password" label={"Password"} state={password} setState={setPassword} placeholder={"Example@123"} />
        <Input className='' type="password" label={"Confirm Password"} state={confirmPassword} setState={setConfirmPassword} placeholder={"Example@123"} />

        
        <Button disabled={loading} text={loading ? "Loading..." : "Signup using Email"} blue={true} onClick={signupWithEmail}/>
        <p className='text-center mt-4'>OR</p>
        <Button text={loading ? "Loading..." : "Signup using Google"} blue={false} />
      </form>
    </div>
  )
}

export default Signupsignin