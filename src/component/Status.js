import React from "react";

function Status() {
	return (
		<fieldset>
			<legend>User Status</legend>
			<span className='user-indicator'></span>
			<p>User is logged out</p>
			<p>
				Name : <b>Mr. XYZ</b>
			</p>
			<p>
				Email : <b> email@gmail.com</b>
			</p>
		</fieldset>
	);
}

export default Status;
