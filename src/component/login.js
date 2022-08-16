import React from "react";

function login() {
	return (
		<fieldset>
			<legend>Login</legend>
			<form action='#'>
				<div className='error-message'>
					<p className='error-message'>Error will look like this</p>
				</div>
				<input type='email' name='email' id='email' placeholder='Email' />
				<input
					type='password'
					name='password'
					id='password'
					placeholder='Password'
				/>
				<button type='submit'>Log in</button>
			</form>
		</fieldset>
	);
}

export default login;
