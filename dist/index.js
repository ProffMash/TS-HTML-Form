"use strict";
//display html form data after submission
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const password = formData.get('password');
            // Display the form data below the form
            let resultDiv = document.getElementById('form-result');
            if (!resultDiv) {
                resultDiv = document.createElement('div');
                resultDiv.id = 'form-result';
                form.parentNode?.insertBefore(resultDiv, form.nextSibling);
            }
            resultDiv.innerHTML = `
                <h2>Submitted Data</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Password:</strong> ${password}</p>
            `;
        });
    }
});
