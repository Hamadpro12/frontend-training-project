// Mobile Menu

// const menuBtn = document.querySelector(".menu-btn");
// const navLinks = document.querySelector(".nav-links");

// menuBtn.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
// });
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Contact Form

// const form = document.getElementById("contactForm");

// form.addEventListener("submit", function(event){

//     event.preventDefault();

//     const name = document.getElementById("name").value;

//     if(name === ""){
//         alert("Please enter your name");
//         return;
//     }

//     alert("Message submitted successfully!");
//     form.reset();
// });
const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", function(event){

        event.preventDefault();

        const name = document.getElementById("name").value;

        if(name === ""){
            alert("Please enter your name");
            return;
        }

        alert("Message submitted successfully!");
        form.reset();

    });

}


//register page 
const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Clear previous errors
        document.querySelectorAll(".error").forEach(error => {
            error.textContent = "";
        });

        let isValid = true;

        // Get form values
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const city = document.getElementById("city").value;

        const gender = document.querySelector(
            'input[name="gender"]:checked'
        );

        // Full Name Validation
        if (fullname === "") {
            document.getElementById("nameError").textContent =
                "Full Name is required";
            isValid = false;
        }

        // Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent =
                "Enter a valid email address";
            isValid = false;
        }

        // Mobile Validation
        const mobilePattern = /^[0-9]{10}$/;

        if (!mobilePattern.test(mobile)) {
            document.getElementById("mobileError").textContent =
                "Enter a valid 10-digit mobile number";
            isValid = false;
        }

        // Password Validation
       
if(password.trim() === ""){
    document.getElementById("passwordError").textContent =
    "Password is required";
    isValid = false;
}
else if(password.length < 6){
    document.getElementById("passwordError").textContent =
    "Password must be at least 6 characters";
    isValid = false;
}

// Confirm Password Validation
if(confirmPassword.trim() === ""){
    document.getElementById("confirmPasswordError").textContent =
    "Confirm Password is required";
    isValid = false;
}
else if(password !== confirmPassword){
    document.getElementById("confirmPasswordError").textContent =
    "Passwords do not match";
    isValid = false;
}

        // Gender Validation
        if (!gender) {
            document.getElementById("genderError").textContent =
                "Please select a gender";
            isValid = false;
        }

        // City Validation
        if (city === "") {
            document.getElementById("cityError").textContent =
                "Please select a city";
            isValid = false;
        }

        // Success Message
        if(isValid){

    localStorage.setItem("fullname", fullname);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("gender", gender.value);
    localStorage.setItem("city", city);

    window.open("success.html", "_blank");

    registrationForm.reset();
}

    });

}
    /* ===================================
   TO-DO LIST APPLICATION
=================================== */

// Get To-Do Input Field
const taskInput = document.getElementById("taskInput");

// Check if To-Do Page Exists
if (taskInput) {

    /* ===================================
       ADD TASK
    =================================== */
    function addTask() {

        const taskText = taskInput.value.trim();
        const error = document.getElementById("error");

        // Empty Input Validation
        if (taskText === "") {
            error.textContent = "Please enter a task.";
            return;
        }

        error.textContent = "";

        // Create New Task Item
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${taskText}</span>

            <div class="actions">

                <button class="edit"
                    onclick="editTask(this)">
                    Edit
                </button>

                <button class="complete"
                    onclick="completeTask(this)">
                    Complete
                </button>

                <button class="delete"
                    onclick="deleteTask(this)">
                    Delete
                </button>

            </div>
        `;

        // Add Task to Pending List
        document
            .getElementById("pendingTasks")
            .appendChild(li);

        // Clear Input Field
        taskInput.value = "";
    }

    // Make Function Available Globally
    window.addTask = addTask;
}


/* ===================================
   EDIT TASK
=================================== */

function editTask(button) {

    const taskText =
        button.parentElement.previousElementSibling;

    const updatedTask =
        prompt("Edit Task", taskText.innerText);

    if (
        updatedTask !== null &&
        updatedTask.trim() !== ""
    ) {
        taskText.innerText = updatedTask;
    }
}


/* ===================================
   DELETE TASK
=================================== */

function deleteTask(button) {

    const taskItem =
        button.parentElement.parentElement;

    taskItem.remove();
}


/* ===================================
   MARK TASK AS COMPLETED
=================================== */

function completeTask(button) {

    const taskItem =
        button.parentElement.parentElement;

    // Remove Complete Button
    button.remove();

    // Move Task to Completed List
    document
        .getElementById("completedTasks")
        .appendChild(taskItem);
}
