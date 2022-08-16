import React from "react";

function Signup() {
	return (
		<fieldset>
			<legend>Signup</legend>
			<form action='#'>
				<div className='error-message'>
					<p className='error-message'>Error will look like this</p>
				</div>
				<input
					type='email'
					name='signup-email'
					id='signup-email'
					placeholder='Email'
				/>
				<input
					type='password'
					name='signup-password'
					id='signup-password'
					placeholder='Password'
				/>
				<input
					type='password'
					name='confirm-password'
					id='confirm-password'
					placeholder='Confirm Password'
				/>
				<button type='submit'>Signup</button>
			</form>
		</fieldset>
	);
}

export default Signup;
