/* ================= LOGIN ================= */
const loginPage = document.getElementById('loginPage');
const dashboard = document.getElementById('dashboardSection');
const loginBtn = document.getElementById('loginBtn');
const errorMsg = document.getElementById('errorMsg');

loginBtn.addEventListener('click', () => {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();

  if(user === "Alok" && pass === "Alok@242") {
    sessionStorage.setItem('isLoggedIn','true');
    loginPage.style.display='none';
    dashboard.style.display='block';
    updatePatientCount();
  } else {
    errorMsg.style.display='block';
  }
});

document.getElementById('password').addEventListener('keydown', e => {
  if(e.key === 'Enter') loginBtn.click();
});

if(sessionStorage.getItem('isLoggedIn') === 'true') {
  loginPage.style.display='none';
  dashboard.style.display='block';
}

/* ================= SECTIONS ================= */
const sections = {
  register: document.getElementById('registerSection'),
  view: document.getElementById('viewSection'),
  search: document.getElementById('searchSection'),
  del: document.getElementById('deleteSection')
};

function show(name) {
  Object.values(sections).forEach(s => s.classList.remove('active'));
  sections[name].classList.add('active');
  window.scrollTo(0,0);

  if(name === 'view') renderRecords();
  updatePatientCount();
}

document.getElementById('btnAdd').onclick = () => show('register');
document.getElementById('btnView').onclick = () => show('view');
document.getElementById('btnSearch').onclick = () => show('search');
document.getElementById('btnDelete').onclick = () => show('del');

function hideSection(name) {
  sections[name].classList.remove('active');
  window.scrollTo(0,0);
}

document.getElementById('backFromRegister').onclick = () => hideSection('register');
document.getElementById('backFromView').onclick = () => hideSection('view');
document.getElementById('backFromSearch').onclick = () => hideSection('search');
document.getElementById('backFromDelete').onclick = () => hideSection('del');

document.getElementById('btnExit').onclick = () => {
  sessionStorage.removeItem('isLoggedIn');
  location.reload();
};

/* ================= PATIENT STORAGE ================= */
const STORAGE_KEY = 'hms_patients_v1';

const loadPatients = () =>
  JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

const savePatients = list =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));

function updatePatientCount() {
  document.getElementById('patientCount').textContent = loadPatients().length;
}

/* ================= REGISTER ================= */
document.getElementById('patientForm').onsubmit = (e) => {
  e.preventDefault();

  const id = +document.getElementById('pid').value;
  const name = document.getElementById('pname').value.trim();
  const age = +document.getElementById('page').value;
  const disease = document.getElementById('pdisease').value.trim();
  const doctor = document.getElementById('pdoctor').value.trim();
  const contact = document.getElementById('pcontact').value.trim();

  let list = loadPatients();
  const idx = list.findIndex(p => p.id === id);

  if(idx >= 0) {
    list[idx] = {id,name,age,disease,doctor,contact};
  } else {
    list.push({id,name,age,disease,doctor,contact});
  }

  savePatients(list);

  const success = document.getElementById('regSuccess');
  success.style.display = 'block';

  setTimeout(() => {
    success.style.display = 'none';
  }, 1800);

  document.getElementById('patientForm').reset();
  updatePatientCount();
};

/* ================= VIEW RECORDS ================= */
function renderRecords() {
  const list = loadPatients();
  const area = document.getElementById('recordsArea');

  if(!list.length) {
    area.innerHTML = '<div class="muted">No patient records available.</div>';
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

  list.forEach(p => {
    html += `
      <tr>
        <td><strong>${p.id}</strong></td>
        <td>${p.name}</td>
        <td>${p.age}</td>
        <td>${p.disease}</td>
        <td>${p.doctor}</td>
        <td>${p.contact}</td>
      </tr>
    `;
  });

  html += '</tbody></table>';
  area.innerHTML = html;
}

/* ================= SEARCH ================= */
document.getElementById('doSearch').onclick = () => {
  const id = +document.getElementById('searchId').value;
  const list = loadPatients();
  const result = document.getElementById('searchResult');

  const p = list.find(x => x.id === id);

  if(p) {
    result.innerHTML = `
      <div class="stat" style="box-shadow:none">
        <strong style="font-size:20px">${p.name}</strong>
        <p><b>Patient ID:</b> ${p.id}</p>
        <p><b>Age:</b> ${p.age}</p>
        <p><b>Disease:</b> ${p.disease}</p>
        <p><b>Doctor:</b> ${p.doctor}</p>
        <p><b>Contact:</b> ${p.contact}</p>
      </div>
    `;
  } else {
    result.innerHTML = '<span class="muted">No patient record found.</span>';
  }
};

/* ================= DELETE ================= */
document.getElementById('doDelete').onclick = () => {
  const id = +document.getElementById('deleteId').value;
  let list = loadPatients();
  const msg = document.getElementById('deleteMsg');

  const idx = list.findIndex(p => p.id === id);

  if(idx < 0) {
    msg.innerHTML = '<span style="color:#d14d4d">No patient record found.</span>';
    return;
  }

  if(confirm('Are you sure you want to delete this patient record?')) {
    list.splice(idx,1);
    savePatients(list);
    msg.innerHTML = '<span style="color:#16744f">Patient record deleted successfully.</span>';
    updatePatientCount();
  }
};

updatePatientCount();