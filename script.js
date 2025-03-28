// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', () => {
    // Get reference to the feedback form
    const form = document.getElementById('feedbackForm');
    
    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Get values from form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const department = document.getElementById('department').value;
        const location = document.getElementById('location').value;
        const rating = document.getElementById('rating').value;
        const feedback = document.getElementById('feedback').value.trim();

        // Simple validation - ensure all fields are filled
        if (!name || !email || !department || !location || !rating || !feedback) {
            alert('Please fill in all the mandatory fields.');
            return;
        }
        
        // Basic email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Process form data - log to console
        console.log('Form submission:', { 
            name, 
            email, 
            department,
            location,
            rating, 
            feedback 
        });
        
        // Show success message
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.remove('hidden');
        
        // Hide the success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
        
        // Reset the form
        form.reset();
    });
});
