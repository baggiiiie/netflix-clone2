import React, { useEffect, useRef, useState } from "react";
import "./SignUpForm.css";
import { auth } from "../firebase";

function SignUpForm(props) {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const [signUpForm, setSignUpForm] = useState(false);

	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then((user) => {
				console.log(user);
			})
			.catch((error) => {
				alert(error.message);
			});
	};
	const signIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then((user) => {
				console.log(user);
			})
			.catch((error) => {
				alert(error.message);
			});
	};
	useEffect(() => {
		const cleanup = auth.onAuthStateChanged((user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const uid = user.uid;
				// ...
				console.log(user);
			} else {
				// User is signed out
				// ...
			}
		});
		return () => cleanup;
	}, []);

	return (
		<div className="signUpScreen">
			<form>
				<h1>{signUpForm ? "Sign Up" : "Sign In"}</h1>
				<input ref={emailRef} placeholder="Email" type="email" />
				<input ref={passwordRef} placeholder="Password" type="password" />
				{signUpForm ? (
					<>
						<button type="submit" onClick={register}>
							Sign Up
						</button>
						<h4>
							<span className="signUpScreen_gray">
								Already have an account?{" "}
							</span>
							<span
								className="signUpScreen_link"
								onClick={() => setSignUpForm(false)}
							>
								Sign In!
							</span>
						</h4>
					</>
				) : (
					<>
						<button type="submit" onClick={signIn}>
							Sign In
						</button>
						<h4>
							<span className="signUpScreen_gray">New to Netflix? </span>
							<span
								className="signUpScreen_link"
								onClick={() => setSignUpForm(true)}
							>
								Sign up now!
							</span>
						</h4>
					</>
				)}
			</form>
		</div>
	);
}

export default SignUpForm;
