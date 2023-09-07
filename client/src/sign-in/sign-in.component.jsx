import React, { useState } from "react";

import FormInput from "../Components/Form-input/form-input.component";
import CustomButton from "../Components/custom-button/custom-button.component";

// import { auth } from "../Components/firebase/firebase.utils";
import { signInWithGoogle } from "../Components/firebase/firebase.utils";
import { googleSignInStart, emailSignInStart } from "../Redux/user/user.action";

import { connect } from "react-redux";

import "./sign-in.styles.scss";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredenitals] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
    // try{
    //   await auth.signInWithEmailAndPassword(email,password);
    //   this.setState({email:'',password:''})
    // } catch(error){
    //   console.log(error);
    // }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredenitals({...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="email"
          required
          handleChange={handleChange}
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          label="password"
          required
          handleChange={handleChange}
        />

        <div className="buttons">
          <CustomButton type="submit" onClick={handleSubmit}>
            {" "}
            Sign in
          </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
