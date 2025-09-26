welcomemassage();

function welcomemassage() {
    let username = prompt("Masukan nama");
    
    if (username) 
        document.getElementById('username').textContent = username;
     else {
        document.getElementById('username').textContent = "Customer";
    }
}
function openPopup(title, desc, img) {
  document.getElementById('popupTitle').textContent = title;
  document.getElementById('popupDesc').textContent = desc;
  document.getElementById('popupImage').src = img;

  const popup = document.getElementById('popup');
  const content = document.getElementById('popupContent');

  popup.classList.remove('hidden');
  popup.classList.add('flex');

  // animasi in
  setTimeout(() => {
    content.classList.remove('opacity-0', 'translate-y-5');
    content.classList.add('opacity-100', 'translate-y-0');
  }, 10);
}

function closecontent() {
  const popup = document.getElementById('popup');
  const content = document.getElementById('popupContent');

  // animasi out
  content.classList.remove('opacity-100', 'translate-y-0');
  content.classList.add('opacity-0', 'translate-y-5');

  // delay
  setTimeout(() => {
    popup.classList.remove('flex');
    popup.classList.add('hidden');
  }, 300);
}

function submitReservation() {
  let valid = true;

  // ambil semua field
  const fields = ["name", "email", "date", "time", "people"];
  fields.forEach(field => {
    const input = document.getElementById(field);
    const error = document.getElementById(`error-${field}`);
    if (!input.value.trim()) {
      error.classList.remove("hidden");
      valid = false;
      input.classList.add("border", "border-red-500"); // highlight merah
    } else {
      error.classList.add("hidden");
      input.classList.remove("border", "border-red-500");
    }
  });

  // jika semua valid → tampilkan popup
  if (valid) {
    document.getElementById("reservationForm").reset();
    document.getElementById("popupSuccess").classList.remove("hidden");
  }
}

function closePopup() {
  document.getElementById("popupSuccess").classList.add("hidden");
  
}

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.remove("bg-transparent");
    header.classList.add("liquid-glass");
  } else {
    header.classList.add("bg-transparent");
    header.classList.remove("liquid-glass");
  }
});

