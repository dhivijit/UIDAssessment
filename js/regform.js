function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Cannot proceed without location");
    }
}

function showPosition(position) {
    document.getElementById("location").value = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}



// calculate age from the given date of birth

function calculateAge() {
    var dob = document.getElementById("dob").value;
    var dobDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    var m = today.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }
    document.getElementById("age").value = age;
}
document.getElementById("dob").addEventListener("change", calculateAge);
document.getElementById("sessionduration").value = sessiontime.innerHTML;

document.addEventListener("DOMContentLoaded", function () {
    var form = document.forms["myForm"];
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        getLocation();

        var name = form.elements["name"].value;
        var dob = form.elements["dob"].value;
        var age = form.elements["age"].value;
        var edu = form.elements["edu"].value;
        var country = form.elements["country"].value;
        var mail = form.elements["mail"].value;
        var location = form.elements["location"].value;
        var recaptcha = grecaptcha.getResponse();

        if (name === "") {
            Swal.fire({
                icon: 'error',
                title: 'Name is required',
                text: 'Please enter your name.'
            });
            return;
        }

        if (dob === "") {
            Swal.fire({
                icon: 'error',
                title: 'Date of Birth is required',
                text: 'Please select your date of birth.'
            });
            return;
        }

        if (age === "" || age <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Age',
                text: 'Please enter a valid age.'
            });
            return;
        }

        if (edu === null) {
            Swal.fire({
                icon: 'error',
                title: 'Education is required',
                text: 'Please select your education level.'
            });
            return;
        }

        if (location === "") {
            Swal.fire({
                icon: 'error',
                title: 'Location is required',
                text: 'Please enter your location.'
            });
            return;
        }

        if (country === "") {
            Swal.fire({
                icon: 'error',
                title: 'Country is required',
                text: 'Please enter your country.'
            });
            return;
        }

        if (mail === "") {
            Swal.fire({
                icon: 'error',
                title: 'Email is required',
                text: 'Please enter your email address.'
            });
            return;
        }

        // Email validation using a regular expression
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!mail.match(emailRegex)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email Address',
                text: 'Please enter a valid email address.'
            });
            return;
        }

        if (!recaptcha) {
            Swal.fire({
                icon: 'error',
                title: 'reCAPTCHA Validation',
                text: 'Please complete the reCAPTCHA verification.'
            });
            return;
        }

        form.submit();
    });
});
