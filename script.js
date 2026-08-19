/* =====================================================
   CARE-PLUS HOSPITAL MANAGEMENT SYSTEM
   SIGN UP + SIGN IN + DASHBOARD
===================================================== */


/* =====================================================
   AUTHENTICATION ELEMENTS
===================================================== */

const authPage = document.getElementById("authPage");

const dashboard = document.getElementById("dashboardSection");

const signupCard = document.getElementById("signupCard");

const signinCard = document.getElementById("signinCard");

const signupForm = document.getElementById("signupForm");

const signinForm = document.getElementById("signinForm");

const signupSuccess = document.getElementById("signupSuccess");

const signupError = document.getElementById("signupError");

const signupErrorText = document.getElementById("signupErrorText");

const signinError = document.getElementById("signinError");

const signinErrorText = document.getElementById("signinErrorText");


/* =====================================================
   STORAGE KEYS
===================================================== */

const USER_STORAGE_KEY = "careplus_users";

const SESSION_KEY = "careplus_logged_in";

const PATIENT_STORAGE_KEY = "hms_patients_v1";


/* =====================================================
   USER FUNCTIONS
===================================================== */

function loadUsers() {

    return JSON.parse(
        localStorage.getItem(USER_STORAGE_KEY) || "[]"
    );

}


function saveUsers(users) {

    localStorage.setItem(
        USER_STORAGE_KEY,
        JSON.stringify(users)
    );

}


/* =====================================================
   SHOW SIGN UP
===================================================== */

document.getElementById("showSignup").addEventListener("click", () => {

    signinCard.classList.remove("active");

    signupCard.classList.add("active");

    clearAuthMessages();

});


/* =====================================================
   SHOW SIGN IN
===================================================== */

document.getElementById("showSignin").addEventListener("click", () => {

    signupCard.classList.remove("active");

    signinCard.classList.add("active");

    clearAuthMessages();

});


/* =====================================================
   CLEAR AUTH MESSAGES
===================================================== */

function clearAuthMessages() {

    signupSuccess.style.display = "none";

    signupError.style.display = "none";

    signinError.style.display = "none";

}


/* =====================================================
   PASSWORD SHOW / HIDE
===================================================== */

function togglePassword(inputId, button) {

    const input = document.getElementById(inputId);

    const icon = button.querySelector("i");

    if (input.type === "password") {

        input.type = "text";

        icon.classList.remove("fa-eye");

        icon.classList.add("fa-eye-slash");

    } else {

        input.type = "password";

        icon.classList.remove("fa-eye-slash");

        icon.classList.add("fa-eye");

    }

}


/* =====================================================
   SIGN UP
===================================================== */

signupForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("signupName")
        .value
        .trim();


    const username =
        document.getElementById("signupUsername")
        .value
        .trim();


    const password =
        document.getElementById("signupPassword")
        .value;


    const confirmPassword =
        document.getElementById("signupConfirmPassword")
        .value;


    /* Clear previous messages */

    signupSuccess.style.display = "none";

    signupError.style.display = "none";


    /* Username validation */

    if (username.length < 3) {

        signupErrorText.textContent =
            "Username must contain at least 3 characters.";

        signupError.style.display = "block";

        return;

    }


    /* Password validation */

    if (password.length < 6) {

        signupErrorText.textContent =
            "Password must contain at least 6 characters.";

        signupError.style.display = "block";

        return;

    }


    /* Confirm password */

    if (password !== confirmPassword) {

        signupErrorText.textContent =
            "Passwords do not match.";

        signupError.style.display = "block";

        return;

    }


    /* Load users */

    let users = loadUsers();


    /* Check duplicate username */

    const existingUser = users.find(
        user =>
            user.username.toLowerCase() ===
            username.toLowerCase()
    );


    if (existingUser) {

        signupErrorText.textContent =
            "Username already exists. Please choose another username.";

        signupError.style.display = "block";

        return;

    }


    /* Create user */

    const newUser = {

        name: name,

        username: username,

        password: password

    };


    users.push(newUser);


    /* Save user */

    saveUsers(users);


    /* Show success */

    signupSuccess.style.display = "block";


    /* Clear form */

    signupForm.reset();


    /*
       After 1.5 seconds,
       automatically open Sign In.
    */

    setTimeout(() => {

        signupCard.classList.remove("active");

        signinCard.classList.add("active");

        signupSuccess.style.display = "none";

        document.getElementById("username").value =
            username;

        document.getElementById("password").focus();

    }, 1500);

});


/* =====================================================
   SIGN IN
===================================================== */

signinForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const username =
        document.getElementById("username")
        .value
        .trim();


    const password =
        document.getElementById("password")
        .value;


    signinError.style.display = "none";


    /* Load registered users */

    const users = loadUsers();


    /* Find matching user */

    const user = users.find(

        account =>
            account.username.toLowerCase() ===
                username.toLowerCase()
            &&
            account.password === password

    );


    /* Invalid login */

    if (!user) {

        signinErrorText.textContent =
            "Invalid username or password.";

        signinError.style.display = "block";

        return;

    }


    /* Successful login */

    sessionStorage.setItem(

        SESSION_KEY,

        JSON.stringify({

            username: user.username,

            name: user.name

        })

    );


    /* Open dashboard */

    openDashboard(user);

});


/* =====================================================
   OPEN DASHBOARD
===================================================== */

function openDashboard(user) {

    authPage.style.display = "none";

    dashboard.style.display = "block";


    const loggedInUser =
        document.getElementById("loggedInUser");


    if (loggedInUser) {

        loggedInUser.textContent =
            user.name || user.username;

    }


    updatePatientCount();

}


/* =====================================================
   CHECK LOGIN ON PAGE LOAD
===================================================== */

function checkLogin() {

    const session =
        sessionStorage.getItem(SESSION_KEY);


    if (session) {

        const user = JSON.parse(session);

        openDashboard(user);

    } else {

        authPage.style.display = "flex";

        dashboard.style.display = "none";

        /*
           Default page:
           Sign Up
        */

        signupCard.classList.add("active");

        signinCard.classList.remove("active");

    }

}


checkLogin();


/* =====================================================
   LOGOUT
===================================================== */

document.getElementById("btnExit").addEventListener(
    "click",
    function() {

        sessionStorage.removeItem(SESSION_KEY);

        location.reload();

    }
);


/* =====================================================
   PATIENT STORAGE
===================================================== */

function loadPatients() {

    return JSON.parse(

        localStorage.getItem(
            PATIENT_STORAGE_KEY
        ) || "[]"

    );

}


function savePatients(list) {

    localStorage.setItem(

        PATIENT_STORAGE_KEY,

        JSON.stringify(list)

    );

}


/* =====================================================
   PATIENT COUNT
===================================================== */

function updatePatientCount() {

    const countElement =
        document.getElementById("patientCount");


    if (!countElement) return;


    countElement.textContent =
        loadPatients().length;

}


/* =====================================================
   DASHBOARD SECTIONS
===================================================== */

const sections = {

    register:
        document.getElementById("registerSection"),

    view:
        document.getElementById("viewSection"),

    search:
        document.getElementById("searchSection"),

    del:
        document.getElementById("deleteSection")

};


function show(name) {

    Object.values(sections).forEach(
        section =>
            section.classList.remove("active")
    );


    sections[name].classList.add("active");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    if (name === "view") {

        renderRecords();

    }


    updatePatientCount();

}


/* =====================================================
   DASHBOARD BUTTONS
===================================================== */

document.getElementById("btnAdd").onclick =
    () => show("register");


document.getElementById("btnView").onclick =
    () => show("view");


document.getElementById("btnSearch").onclick =
    () => show("search");


document.getElementById("btnDelete").onclick =
    () => show("del");


/* =====================================================
   HIDE SECTION
===================================================== */

function hideSection(name) {

    sections[name].classList.remove("active");

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =====================================================
   BACK BUTTONS
===================================================== */

document.getElementById(
    "backFromRegister"
).onclick = () =>
    hideSection("register");


document.getElementById(
    "backFromView"
).onclick = () =>
    hideSection("view");


document.getElementById(
    "backFromSearch"
).onclick = () =>
    hideSection("search");


document.getElementById(
    "backFromDelete"
).onclick = () =>
    hideSection("del");


/* =====================================================
   REGISTER PATIENT
===================================================== */

document.getElementById(
    "patientForm"
).onsubmit = function(event) {

    event.preventDefault();


    const id =
        Number(
            document.getElementById("pid").value
        );


    const name =
        document.getElementById("pname")
        .value
        .trim();


    const age =
        Number(
            document.getElementById("page").value
        );


    const disease =
        document.getElementById("pdisease")
        .value
        .trim();


    const doctor =
        document.getElementById("pdoctor")
        .value
        .trim();


    const contact =
        document.getElementById("pcontact")
        .value
        .trim();


    let list = loadPatients();


    const idx =
        list.findIndex(
            patient =>
                patient.id === id
        );


    if (idx >= 0) {

        list[idx] = {

            id,
            name,
            age,
            disease,
            doctor,
            contact

        };

    } else {

        list.push({

            id,
            name,
            age,
            disease,
            doctor,
            contact

        });

    }


    savePatients(list);


    const success =
        document.getElementById("regSuccess");


    success.style.display = "block";


    setTimeout(() => {

        success.style.display = "none";

    }, 1800);


    document
        .getElementById("patientForm")
        .reset();


    updatePatientCount();

};


/* =====================================================
   VIEW RECORDS
===================================================== */

function renderRecords() {

    const list = loadPatients();

    const area =
        document.getElementById("recordsArea");


    if (!list.length) {

        area.innerHTML =
            '<div class="muted">No patient records available.</div>';

        return;

    }


    let html = `

        <table>

            <thead>

                <tr>

                    <th>ID</th>

                    <th>Name</th>

                    <th>Age</th>

                    <th>Disease</th>

                    <th>Doctor</th>

                    <th>Contact</th>

                </tr>

            </thead>

            <tbody>

    `;


    list.forEach(patient => {

        html += `

            <tr>

                <td>
                    <strong>
                        ${patient.id}
                    </strong>
                </td>

                <td>
                    ${escapeHTML(patient.name)}
                </td>

                <td>
                    ${patient.age}
                </td>

                <td>
                    ${escapeHTML(patient.disease)}
                </td>

                <td>
                    ${escapeHTML(patient.doctor)}
                </td>

                <td>
                    ${escapeHTML(patient.contact)}
                </td>

            </tr>

        `;

    });


    html += `

            </tbody>

        </table>

    `;


    area.innerHTML = html;

}


/* =====================================================
   SEARCH PATIENT
===================================================== */

document.getElementById(
    "doSearch"
).onclick = function() {

    const id =
        Number(
            document.getElementById("searchId").value
        );


    const list = loadPatients();


    const result =
        document.getElementById("searchResult");


    const patient =
        list.find(
            item =>
                item.id === id
        );


    if (patient) {

        result.innerHTML = `

            <div class="patient-result">

                <div class="patient-result-icon">

                    <i class="fa-solid fa-user"></i>

                </div>

                <div>

                    <h3>
                        ${escapeHTML(patient.name)}
                    </h3>

                    <p>
                        <b>Patient ID:</b>
                        ${patient.id}
                    </p>

                    <p>
                        <b>Age:</b>
                        ${patient.age}
                    </p>

                    <p>
                        <b>Disease:</b>
                        ${escapeHTML(patient.disease)}
                    </p>

                    <p>
                        <b>Doctor:</b>
                        ${escapeHTML(patient.doctor)}
                    </p>

                    <p>
                        <b>Contact:</b>
                        ${escapeHTML(patient.contact)}
                    </p>

                </div>

            </div>

        `;

    } else {

        result.innerHTML = `

            <div class="not-found">

                <i class="fa-solid fa-circle-exclamation"></i>

                No patient record found.

            </div>

        `;

    }

};


/* =====================================================
   DELETE PATIENT
===================================================== */

document.getElementById(
    "doDelete"
).onclick = function() {

    const id =
        Number(
            document.getElementById("deleteId").value
        );


    let list = loadPatients();


    const msg =
        document.getElementById("deleteMsg");


    const idx =
        list.findIndex(
            patient =>
                patient.id === id
        );


    if (idx < 0) {

        msg.innerHTML = `

            <span class="delete-error">

                No patient record found.

            </span>

        `;

        return;

    }


    if (
        confirm(
            "Are you sure you want to delete this patient record?"
        )
    ) {

        list.splice(idx, 1);


        savePatients(list);


        msg.innerHTML = `

            <span class="delete-success">

                <i class="fa-solid fa-circle-check"></i>

                Patient record deleted successfully.

            </span>

        `;


        updatePatientCount();

    }

};


/* =====================================================
   ESCAPE HTML
   Prevents unwanted HTML inside patient records.
===================================================== */

function escapeHTML(value) {

    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}


/* =====================================================
   INITIAL COUNT
===================================================== */

updatePatientCount();