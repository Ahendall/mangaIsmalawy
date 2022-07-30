function validateEmail(email) {
	// Regular expression for email validation
	let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
	return regex.test(email);
}

function validatePhoneNumber(phoneNumber) {
	// Regular expression for phone number validation
	let regex = new RegExp("^[0-9]{11}$");
	return regex.test(phoneNumber);
}

function verifyMangos(mango1, mango2, mango3) {
	if (0 <= mango1 <= 10 && 0 <= mango2 <= 10 && 0 <= mango3 <= 10) {
		return true;
	} else {
		return false;
	}
}

function validateForm() {
	// Pull elements from DOM
	let email = document.getElementById("emailInput").value;
	let phoneNumber = document.getElementById("phoneNumber").value;
	let mango_3eweasy = document.getElementById("mango_3eweasy").value;
	let mango_fas = document.getElementById("mango_fas").value;
	let mango_sedekah = document.getElementById("mango_sedekah").value;

	console.log(email);
	console.log(phoneNumber);
	console.log(mango_3eweasy);
	console.log(mango_fas);
	console.log(mango_sedekah);

	errorString = ""; // String that we'll alert to the user if there is an errror

	// Validate email
	if (email == "" || email == "someone@example.com") {
		errorString += "البريد الالكتروني مطلوب.\n";
	} else if (!validateEmail(email)) {
		errorString += "البريد الالكتروني غير صحيح.\n";
	}

	// Validate phone number
	if (phoneNumber == "" || phoneNumber == "0") {
		errorString += "رقم المحمول مطلوب.\n";
	} else if (!validatePhoneNumber(phoneNumber)) {
		errorString += "رقم المحمول غير صحيح.\n";
	}

	// Validate mangoes
	if (!verifyMangos(mango_3eweasy, mango_fas, mango_sedekah)) {
		// make a string with the following text translated to arabic: The amount of mangos is not valid.
		errorString += "الكمية المطلوبة للمنجوزات غير صحيحة.\n";
	}

	// If there is an error, alert the user
	if (errorString != "") {
		alert(errorString);
		return false;
	} else {
		return true;
	}
}

clickCount = 0;
function authSuperUser() {
    if (clickCount < 4) {
        clickCount++;
        return false;
    }

	let password = prompt("Enter superuser password");
	if (password == "Password00@work") {
		return true;
	} else {
		return false;
	}
}
