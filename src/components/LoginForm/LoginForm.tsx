import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Image from "../Image/Image";

import "./style.css";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const LoginForm = () => {
	const [form, setForm] = useState({ username: "", password: "" });

	const handleLogin = (e) => {
		e.preventDefault();
		console.log("details sent", form);
		setForm({
			username: "",
			password: "",
		});
	};

	const canSubmit = form.username !== "" && form.password !== "";
	const hasError = form.password !== "" && !form.password.match(passwordRegex);

	return (
		<section className="login">
			<div className="login__logo-container">
				<Image mediaImages={[{ url: "/DCM-logo.svg", mediaQuery: "min-width: 600px" }]} defaultImgUrl={"/DCM-logo-without-text.svg"} alt="DCM logo" />
			</div>
			<div className="login__form-container">
				<form onSubmit={handleLogin}>
					<h1 className="login__title">Login</h1>
					<p className="login__instructions">Please sign in to continue</p>
					<div className="login__fields-container">
						<div className="login__field">
							<Input id="email" type="email" name="email" labelText="Email address" placeHolder="email@address.com" value={form.username} onChange={(e) => setForm((prev) => ({ ...prev, username: e.target.value }))} />
						</div>
						<div className="login__field">
							<Input extraClassName={hasError ? "input--error" : ""} id="password" type="password" name="password" labelText="Password" value={form.password} onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))} />
							{hasError && (
								<ul className="login__error">
									<li>At least 8 characters</li>
									<li>Contains at least one lowercase letter</li>
									<li>Contains at least one uppercase letter</li>
									<li>Contains at least one digit</li>
								</ul>
							)}
							<a href="#">Forgot password</a>
						</div>
						<Button extraClassName="btn--login" disabled={!canSubmit || hasError} type="submit">
							Login
						</Button>
					</div>
				</form>
			</div>
			<div className="login__footer">
				<p className="login__footer-paragraph">
					For access and support please email{" "}
					<a className="login__footer-link" href="#">
						support@DCM.com
					</a>
				</p>
				<p className="login__footer-paragraph">DCM Origination Technologies Ltd 2023</p>
			</div>
		</section>
	);
};

export default LoginForm;
