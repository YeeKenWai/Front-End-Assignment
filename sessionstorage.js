/* Religion JavaScript */
function submitclick() {
	// Get the values from the form
	var name = document.getElementById("name").value;
	var religion = document.getElementById("religionSelect").value;
	var capitalizedReligion = religion.charAt(0).toUpperCase() + religion.slice(1);

	// Create a sentence with the user's name and selected religion
	var sentence = "Hello, " + name + "! You have selected " + capitalizedReligion + " as your religion.";

	// Display the sentence
	if (religion === 'islam') {
		document.getElementById("i").innerHTML = sentence;
	} else if (religion === 'buddhism') {
		document.getElementById("b").innerHTML = sentence;
	} else if (religion === 'hinduism') {
		document.getElementById("h").innerHTML = sentence;
	} else if (religion === 'christianity') {
		document.getElementById("c").innerHTML = sentence;
	}

	// Store user's name, selected religion, and sentence in sessionStorage
	sessionStorage.setItem("userName", name);
	sessionStorage.setItem("selectedReligion", religion);
	sessionStorage.setItem("selectedSentence", sentence);

	// Change the background color of the selected religion section
	changeBackgroundColor(religion);

	// Prevent the default form submission
	return false;
};

// Function to change background color based on selected religion and save user info
function changeBackgroundColor(religion) {
	// Save user's name and selected religion to sessionStorage
	var name = document.getElementById("name").value;
	sessionStorage.setItem("userName", name);
	sessionStorage.setItem("selectedReligion", religion);

	// Reset background color for all sections
	const sections = document.querySelectorAll('.religion-section');
	sections.forEach(section => {
		section.style.backgroundColor = section.dataset.originalColor
	});

	// Set the background color of the selected section
	const selectedSection = document.getElementById(religion);
	if (selectedSection) {
		selectedSection.style.backgroundColor = selectedSection.dataset.selectedColor || '#7F00FF';
	}
};

function clearForm() {
	// Clear form fields
	document.getElementById("name").value = "";
	document.getElementById("religionSelect").value = "Select One Religion";

	// Clear displayed sentence
	document.getElementById("i").innerHTML = "";
	document.getElementById("b").innerHTML = "";
	document.getElementById("h").innerHTML = "";
	document.getElementById("c").innerHTML = "";

	// Reset background color for all sections
	const sections = document.querySelectorAll('.religion-section');
	sections.forEach(section => {
		section.style.backgroundColor = section.dataset.originalColor;
	});

	// Clear sessionStorage
	sessionStorage.removeItem("userName");
	sessionStorage.removeItem("selectedReligion");
	sessionStorage.removeItem("selectedSentence");
};

// Function to populate form fields with stored user information
function populateFormFields() {
	// Check if there's stored user information in sessionStorage
	var storedName = sessionStorage.getItem("userName");
	var storedReligion = sessionStorage.getItem("selectedReligion");

	// Populate form fields with stored user information
	if (storedName) {
		document.getElementById("name").value = storedName;
	}
	if (storedReligion) {
		document.getElementById("religionSelect").value = storedReligion;
		changeBackgroundColor(storedReligion); // Change background color based on stored religion
	}
};

// Populate form fields with stored user information when the page loads
window.onload = function () {
	populateFormFields();
	var storedName = sessionStorage.getItem("userName");
	var storedReligion = sessionStorage.getItem("selectedReligion");
	var storedSentence = sessionStorage.getItem("selectedSentence");

	// Display the stored sentence if it exists
	if (storedName && storedReligion && storedSentence) {
		// Display the sentence
		var capitalizedReligion = storedReligion.charAt(0).toUpperCase() + storedReligion.slice(1);
		var sentence = "Hello, " + storedName + "! You have selected " + capitalizedReligion + " as your religion.";
		document.getElementById(storedReligion.charAt(0)).innerHTML = sentence;
	}
};