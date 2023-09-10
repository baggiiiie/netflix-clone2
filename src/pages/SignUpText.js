import React from "react";
import "./LoginScreen.css";

const SignUpText = ({ onClick }) => {
	return (
		<>
			<h1>This is a project built by yingchao / baggiiiie</h1>
			<h2>Click 'Sign In' below or top right to get started</h2>
			<div>
				<p>With this project, you can:</p>
				<p>
					- Register with Google Firebase authentication <br /> - Login and
					logout
					<br />- Browse Netflix shows <br />- Use Stripe to buy a subscription
					plan with credit card 4242 4242 4242 4242 <br />- Unsubscribe from
					subscription
				</p>
			</div>
			<div className="loginScreen_input">
				<form>
					<button className="loginScreen_getStarted" onClick={onClick}>
						Get Started
					</button>
				</form>
			</div>
		</>
	);
};

export default SignUpText;
