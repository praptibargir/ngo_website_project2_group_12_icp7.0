document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
        let isAnyFieldEmpty = false;

        inputs.forEach(function(input) {
            if (input.value.trim() === '') {
                isAnyFieldEmpty = true;
            }
        });

        if (isAnyFieldEmpty) {
            // Show the popup or alert
            alert('All fields are required!');
        } else {
            // Submit the form
            form.submit();
        }
    });
});