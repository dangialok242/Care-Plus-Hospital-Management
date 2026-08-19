🏥 CarePlus Hospital Management System

<p align="center">
  <img src="https://img.shields.io/badge/CarePlus-Hospital%20Management-0b8f87?style=for-the-badge&logo=heart&logoColor=white" alt="CarePlus Hospital Management">
  <br><br>
  <b>A Modern Web-Based Hospital & Patient Management System</b>
  <br>
  Built with <b>HTML5</b> • <b>CSS3</b> • <b>JavaScript</b> • <b>C</b>
</p>

<p align="center">
  <a href="#-about-the-project">About</a> •
  <a href="#-features">Features</a> •
  <a href="#-screenshots">Screenshots</a> •
  <a href="#-how-it-works">How It Works</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-future-improvements">Future</a>
</p>

🩺 About The Project

CarePlus Hospital Management System is a clean, responsive web application designed to simplify basic hospital patient management.

The system provides a modern hospital login page and an administrator dashboard where users can register patients, view all patient records, search patients by ID, and delete records.

The frontend stores patient records in the browser using Local Storage, while the accompanying C program demonstrates how patient information can also be written to a binary file named hospital.dat.

💡 This project is intended as an educational/demo hospital management system. It can be extended with a real database, backend authentication, APIs, role-based access and cloud deployment.

✨ Features

Feature

Description

🔐 Admin Login

Login screen with predefined credentials and session-based access

🏥 Hospital Dashboard

Central dashboard for patient-management operations

➕ Patient Registration

Add patient ID, name, age, disease, doctor and contact details

📋 All Patient Records

Display all stored patient records in a table

🔎 Search Patient

Find a patient quickly using their unique patient ID

🗑️ Delete Patient

Remove an existing patient record by ID

📊 Patient Counter

Shows the current number of stored patients

💾 Local Storage

Persists patient records in the browser

📱 Responsive UI

Designed to work across desktop, tablet and mobile layouts

🎨 Modern Medical UI

Clean healthcare-themed interface with icons, cards and animations

💻 C File Storage Demo

Demonstrates saving patient records into hospital.dat

🖼️ Project Preview

<p align="center">
  <img src="Screenshot/README-Preview.png" width="850" alt="CarePlus Hospital Management System Preview">
</p>

📌 The preview image above is included in this repository under Screenshot/README-Preview.png.

🔐 Login Page

The application starts with a dedicated hospital login interface featuring:

🫀 CarePlus Hospital branding

🏥 Medical-themed visual design

🔒 Username and password authentication

⚠️ Invalid-login error message

⌨️ Enter-key login support

🔑 Session-based login state

The login page and dashboard are implemented directly in index.html.

🏠 Hospital Dashboard

After successful login, the administrator is taken to the Hospital Dashboard.

The dashboard provides:

                    🏥 CAREPLUS HOSPITAL
                           │
                           ▼
                 ┌─────────────────────┐
                 │  Hospital Dashboard │
                 └──────────┬──────────┘
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
     ➕ Add Patient    📋 View Records    🔎 Search Patient
          │                                   │
          └───────────────┬───────────────────┘
                          ▼
                    🗑️ Delete Record
                          │
                          ▼
                  💾 Local Storage

The dashboard also displays the total patient count, care availability and local record-storage status.

👨‍⚕️ Patient Registration

The registration form collects:

Patient ID
Full Name
Age
Disease / Condition
Doctor Assigned
Contact Number

When the form is submitted, the patient record is saved to browser Local Storage. Existing records with the same patient ID are updated instead of creating another entry.

The registration interface is defined in the patient-registration section of the HTML.

📋 Patient Records

The All Patients section displays stored records in a structured table containing:

Field

Information

🆔 Patient ID

Unique patient identifier

👤 Name

Patient full name

🎂 Age

Patient age

🩺 Disease

Disease / medical condition

👨‍⚕️ Doctor

Assigned doctor

📞 Contact

Contact number

The interface renders these records dynamically from Local Storage.

🔎 Search Patient

Patients can be searched using their unique Patient ID.

If a matching record exists, the application displays:

Patient name

Patient ID

Age

Disease

Assigned doctor

Contact number

If no matching record exists, the application displays a No patient record found message.

🗑️ Delete Patient

The delete module allows the administrator to remove a patient record by entering the patient ID.

Before deletion, the system asks for confirmation:

Are you sure you want to delete this patient record?

After successful deletion, the patient count is updated automatically.

💾 Data Storage

🌐 Web Application

The JavaScript application uses:

localStorage
└── hms_patients_v1

Patient records are stored as JSON in the browser.

The project therefore works without requiring an external database for this demo.

💻 C Program

The included C program demonstrates file-based patient storage using:

hospital.dat

The C program stores:

Patient ID
Name
Age
Disease
Doctor
Contact

using a binary file and the C struct patient data structure.

⚠️ The C file is a separate file-storage demonstration; it is not directly connected to the browser's Local Storage.

🎨 UI & Design

The interface follows a modern healthcare design system with:

🩵 Medical teal color palette

🏥 Hospital-inspired visual elements

✨ Smooth hover effects

📦 Card-based dashboard layout

🔐 Clean login experience

📱 Responsive mobile layout

🎯 Clear action buttons

🧩 Font Awesome medical icons

The CSS defines the main teal, navy, white, border, danger and shadow design tokens.

The layout includes responsive breakpoints for smaller screens, including mobile dashboard cards and horizontally scrollable patient tables.

🖥️ Screenshots

🔐 Login Page

<p align="center">
  <img src="Screenshot/Login Page.png" width="750" alt="CarePlus Login Page">
</p>

🏠 Hospital Dashboard

<p align="center">
  <img src="Screenshot/Hospital Dashboard.png" width="750" alt="Hospital Dashboard">
</p>

➕ Patient Registration

<p align="center">
  <img src="Screenshot/Patient Registration.png" width="750" alt="Patient Registration">
</p>

📋 All Patients

<p align="center">
  <img src="Screenshot/All Patient.png" width="750" alt="All Patient Records">
</p>

🔎 Search Patient

<p align="center">
  <img src="Screenshot/Search Patient.png" width="750" alt="Search Patient">
</p>

🗑️ Delete Patient

<p align="center">
  <img src="Screenshot/Delete Patient.png" width="750" alt="Delete Patient">
</p>

📌 Keep the screenshot filenames exactly as shown above, or update the paths if your repository uses different names.

🛠️ Technologies Used

🌐 Frontend

HTML5 — Page structure and hospital management interface

CSS3 — Responsive layout, styling, animations and visual design

JavaScript — Login, patient management, search, delete and storage logic

💻 Programming / Storage

C — File-based patient record demonstration

Local Storage API — Browser-based patient record persistence

Session Storage API — Login-session state

🎨 External Resources

Google Fonts — Inter

Font Awesome 6.7.2 — Medical and interface icons

🔑 Demo Login

Username: Alok
Password: Alok@242

⚠️ Security Notice: These credentials are hard-coded in the frontend JavaScript. This is suitable only for a demonstration/project submission and should not be used as production authentication.

🚀 How To Run

1️⃣ Clone the Repository

git clone https://github.com/YOUR-USERNAME/CarePlus-Hospital-Management-System.git

2️⃣ Open the Project

cd CarePlus-Hospital-Management-System

3️⃣ Run the Web Application

Open:

index.html

in a modern web browser.

No server or database is required for the basic frontend demo.

▶️ C Program

Compile the C program using GCC:

gcc main.c -o hospital

Run:

./hospital

On Windows:

hospital.exe

The program creates/appends patient records to:

hospital.dat

📂 Project Structure

CarePlus-Hospital-Management-System/
│
├── 📄 index.html
├── 🎨 style.css
├── ⚙️ script.js
├── 💻 main.c
├── 📘 README.md
│
├── 📁 Screenshot/
│   ├── 🖼️ README-Preview.png
│   ├── 🖼️ Login Page.png
│   ├── 🖼️ Hospital Dashboard.png
│   ├── 🖼️ Patient Registration.png
│   ├── 🖼️ All Patient.png
│   ├── 🖼️ Search Patient.png
│   └── 🖼️ Delete Patient.png
│
└── 💾 hospital.dat

🔗 Quick Links

<p align="center">

<a href="index.html">
  <img src="https://img.shields.io/badge/🌐%20Open%20Application-0b8f87?style=for-the-badge" alt="Open Application">
</a>

<a href="main.c">
  <img src="https://img.shields.io/badge/💻%20C%20Program-123047?style=for-the-badge" alt="C Program">
</a>

<a href="style.css">
  <img src="https://img.shields.io/badge/🎨%20CSS%20Styles-e9fbf8?style=for-the-badge&labelColor=08726c" alt="CSS">
</a>

<a href="script.js">
  <img src="https://img.shields.io/badge/⚙️%20JavaScript-253746?style=for-the-badge" alt="JavaScript">
</a>

</p>

🧭 Application Flow

                 🔐 LOGIN
                    │
                    ▼
          🏥 HOSPITAL DASHBOARD
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
   ➕ REGISTER   📋 VIEW     🔎 SEARCH
        │           │           │
        └───────────┴─────┬─────┘
                          ▼
                     🗑️ DELETE
                          │
                          ▼
                    💾 LOCAL STORAGE

📊 System Capabilities

🔐 Authentication
      ↓
🏥 Dashboard
      ↓
👨‍⚕️ Patient Registration
      ↓
💾 Local Storage
      ↓
📋 Record Management
      ↓
🔎 Patient Search
      ↓
🗑️ Record Deletion
      ↓
📈 Live Patient Count

🚀 Future Improvements

The project can be upgraded into a complete production-ready hospital management platform by adding:

🗄️ MySQL / PostgreSQL database

🔙 Node.js / PHP / Python backend

🔐 Secure server-side authentication

👥 Role-based access for Admin, Doctor and Receptionist

🧾 Patient medical history

💊 Prescription management

📅 Doctor appointment scheduling

🏥 Bed / room management

💳 Billing and payment management

📧 Email / SMS notifications

☁️ Cloud deployment

📊 Hospital analytics dashboard

📱 Mobile application

🔒 Encryption and audit logs

🔗 REST API integration

🎯 Project Objective

The main objective of CarePlus Hospital Management System is to demonstrate how modern web technologies can be used to build a simple, responsive and interactive hospital patient-management application.

The project combines:

HTML5
  +
CSS3
  +
JavaScript
  +
Browser Storage
  +
C File Handling
      ↓
🏥 CarePlus Hospital Management System

👨‍💻 Developer

<p align="center">
  <b>Alok Kumar Dangi</b>
  <br>
  CarePlus Hospital Management System
  <br><br>
  <code>HTML5</code> • <code>CSS3</code> • <code>JavaScript</code> • <code>C</code>
</p>

⭐ Support

If you found this project useful or interesting:

⭐ Give the repository a star

🍴 Fork the project

🐛 Report issues

💡 Suggest improvements

🤝 Contribute new features

<p align="center">
  <b>🏥 Better care. Better health.</b>
  <br>
  <sub>CarePlus Hospital Management System • 2026</sub>
</p>