/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* Menambahkan variabel untuk setiap elemen view*/
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* Membuat variabel untuk menyimpan informasi email dan pasword */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* Membuat aksi klik pada button */ 
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  // mendapatkan nilai dari masing masing input
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  //memastikan bahwa email dan password sesuai dengan nilai yang tersimpan
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
    // Jika sesuai maka akan ke halaman home
  } else {
    //jika salah maka akan menampilkan informasi bahwa input salah
    showPopUp();
  }
});
