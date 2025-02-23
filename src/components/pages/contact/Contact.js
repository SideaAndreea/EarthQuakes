import React from "react";
import { useFormik } from "formik";

const Contact = () => {
	let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

	const formik = useFormik({
		initialValues: {
			email: "",
			name: "",
			message: "",
		},
		onSubmit: (values) => {
			alert("Form submitted!");
			console.log("Form data: ", values);
			formik.resetForm();
		},
		validate: (values) => {
			let errors = {};

			if (!values.email) {
				errors.email = "Required";
			} else if (!values.email.match(regex)) {
				errors.email = "Invalid email format";
			}
			if (!values.name) {
				errors.name = "Required";
			}
			return errors;
		},
	});

	console.log("Form errors --> ", formik.errors);
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<h1 className="title">Contact</h1>
				<div className="form-container">
					<h3 className="mess">Send us a message</h3>
					<div className="form-control">
						<label htmlFor="email">Your email:</label>
						<input
							type="text"
							id="email"
							name="email"
							onChange={formik.handleChange}
							value={formik.values.email}
						/>
						{formik.errors.email ? (
							<div className="error">{formik.errors.email}</div>
						) : null}
					</div>

					<div className="form-control">
						<label htmlFor="name">Name:</label>
						<input
							type="text"
							id="name"
							name="name"
							onChange={formik.handleChange}
							value={formik.values.name}
						/>
						{formik.errors.name ? (
							<div className="error">{formik.errors.name}</div>
						) : null}
					</div>

					<div className="form-control">
						<label htmlFor="message">Message:</label>
						<textarea
							className="message-container"
							id="message"
							name="message"
							onChange={formik.handleChange}
							value={formik.values.message}
						/>
					</div>

					<div className="button-container">
						<button
							className="button button-reset"
							type="reset"
							onClick={() => formik.resetForm()}
						>
							Reset form
						</button>
						<button className="button button-submit" type="submit">
							Send message
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Contact;
