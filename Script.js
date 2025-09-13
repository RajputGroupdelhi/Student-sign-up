const lTab = document.getElementById('lTab'),
      rTab = document.getElementById('rTab'),
      loginForm = document.getElementById('loginForm'),
      regForm = document.getElementById('regForm'),
      msg = document.getElementById('msg');

lTab.addEventListener('click', () => {
  loginForm.classList.remove('hidden');
  regForm.classList.add('hidden');
  lTab.classList.add('text-blue-600','border-blue-600');
  rTab.classList.remove('text-blue-600','border-blue-600');
  rTab.classList.add('text-gray-500');
  msg.textContent = '';
});

rTab.addEventListener('click', () => {
  regForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
  rTab.classList.add('text-blue-600','border-blue-600');
  lTab.classList.remove('text-blue-600','border-blue-600');
  lTab.classList.add('text-gray-500');
  msg.textContent = '';
});

regForm.addEventListener('submit', e => {
  e.preventDefault();
  const id = document.getElementById('studentId').value,
        mo = document.getElementById('mobile').value,
        pw = document.getElementById('password').value;
  if (id.length !== 11) return msg.textContent = 'Student ID 11 digit होना चाहिए।';
  if (mo.length !== 10) return msg.textContent = 'Mobile 10 digit होना चाहिए।';
  if (pw.length < 6) return msg.textContent = 'Password कम से कम 6 character होनी चाहिए।';
  localStorage.setItem('user_' + id, JSON.stringify({id, mo, pw}));
  msg.classList.remove('text-red-600');
  msg.classList.add('text-green-600');
  msg.textContent = '✅ Registration सफल!';
  regForm.reset();
});

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const id = document.getElementById('loginId').value,
        pw = document.getElementById('loginPass').value;
  const u = localStorage.getItem('user_' + id);
  if (!u) {
    msg.textContent = '❌ User नहीं मिला इस ID से।';
    return;
  }
  const obj = JSON.parse(u);
  if (obj.pw !== pw) {
    msg.textContent = '❌ Password गलत है।';
    return;
  }
  msg.classList.remove('text-red-600');
  msg.classList.add('text-green-600');
  msg.textContent = '🔑 Login Successful! Redirecting...';
  setTimeout(() => {
    window.location.href = "https://chat.whatsapp.com/EztJzrccBfaL7sot42QtNs?mode=ems_copy_t";
  }, 1500);
});
