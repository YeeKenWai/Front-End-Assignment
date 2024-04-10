// Get the form element
var form = document.getElementById('opinion-form');

// Add event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    var formData = new FormData(form);

    // Send the form data asynchronously using fetch (POST request)
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                // Show a thank you message
                alert('Thank you for your feedback, it is really appreciated!');
                // Reset the form
                form.reset();
            } else {
                // Handle error responses if needed
                throw new Error('Failed to submit form');
            }
        })
});