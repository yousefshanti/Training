function validateForm() {
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		if (email == "" || password == "") {
			alert("Please fill in all fields");
			return false;
		}
		else if ( !email.includes("@") ) {
			alert("Email is not valid");
			return false;
		}
		else if ( !/[0-9]/.test(password) ) {
			alert("Password must contain at least one number");
			return false;
		}
		else if ( !/[a-zA-Z]/.test(password) ) {
			alert("Password must contain at least one letter");
			return false;
		}
		else if ( password.length < 8 ) {
			alert("Password must be at least 8 characters");
			return false;
		}
		else if ( !/[A-Z]/.test(password) ) {
			alert("Password must contain at least one uppercase letter");
			return false;
		}
		else if ( !/[a-z]/.test(password) ) {
			alert("Password must contain at least one lowercase letter");
			return false;
		}

		else if ( !/[!@#$%^&*]/.test(password) ) {
			alert("Password must contain at least one special character");
			return false;
		}
		else {
			return true;
		}
	}
