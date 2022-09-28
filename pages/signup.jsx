import SignUp from "../components/SignUp";
import ConfirmSignUp from "../components/ConfirmSignUp";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import Onboarding from "../components/Onboarding";
import  { DataStore } from '@aws-amplify/datastore';
import  { UserProfile } from '../src/models';
import Head from "next/head";

const signup = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formType, setFormType] = useState("signUp");
  const [authCode, setAuthCode] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [userAuthData, setUserAuthData] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const getAuthUser = async () => {
      const { username, attributes } = await Auth.currentAuthenticatedUser();
      setUserAuthData(attributes);
      setUser(username);
      console.log(user, userAuthData);
    };

    getAuthUser();
  }, [formType]);

  ///////////// Handling Confirm Sign Up ///////////////

  const handleConfirmSignUp = async () => {
    console.log("Username for Confirm :", username);
    try {
      await Auth.confirmSignUp(username, authCode);
      await Auth.signIn(username, password);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
    setFormType("onboarding");

    // router.push("/login");
  };

  const handleAuthCode = (e) => {
    setAuthCode(e.target.value);
  };

  ///////////// Handling Signing Up ////////////////

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  ////////// Handling Onboarding ////////////

  const handleOnBoard =async () => {
    if (
      displayName === "" ||
      displayName === null 
    ) {
      alert("Please Enter your Display Name ");
      return;
    }
    await DataStore.save(
      new UserProfile({
      "username": username,
      "email": email,
      "displayName": displayName,
      "imageUrl":  imageUrl,
      "password": password
    })
  );

    console.log("UserProfile:",{username, email, password, displayName, imageUrl});
    setFormType("signedIn");
    router.push("/dashboard");
  };

  const handleDisplayName = (e) => {
    setDisplayName(e.target.value);
  };

  const handleImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: { email },
      });
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }

    setFormType("confirmSignUp");
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>SignUp - TaskUpp</title>
        <link rel="icon" href="/taskupp-logo.png" />
      </Head>
      {/* Sign Up Form   */}
      {formType === "signUp" && (
        <SignUp
          username={username}
          email={email}
          password={password}
          handlePassword={handlePassword}
          handleUsername={handleUsername}
          handleEmail={handleEmail}
          handleSignUp={handleSignUp}
        />
      )}

      {formType === "confirmSignUp" && (
        <ConfirmSignUp
          username={username}
          authCode={authCode}
          handleAuthCode={handleAuthCode}
          handleConfirmSignUp={handleConfirmSignUp}
        />
      )}

      {formType === "onboarding" && (
        <Onboarding
          username={username}
          displayName={displayName}
          imageUrl={imageUrl}
          handleOnBoard={handleOnBoard}
          handleDisplayName={handleDisplayName}
          handleImageUrl={handleImageUrl}
        />
      )}
    </div>
  );
};

export default signup;
