// Jalankan setelah DOM siap
window.onload = () => {
    welcomeMessage();
};

// Fungsi welcome message
function welcomeMessage() {
    let username = prompt("Masukkan nama");
    document.getElementById('username').textContent = username || "Customer";
}

// Fungsi membuka popup
function openPopupContent(title, desc, img) {
    const popup = document.getElementById('popup');
    const content = document.getElementById('popupContent');

    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupDesc').textContent = desc;
    document.getElementById('popupImage').src = img;

    popup.classList.remove('hidden');
    popup.classList.add('flex');

    // animasi in
    setTimeout(() => {
        content.classList.remove('opacity-0', 'translate-y-5');
        content.classList.add('opacity-100', 'translate-y-0');
    }, 10);
}

// Fungsi menutup popup content
function closePopupContent() {
    const popup = document.getElementById('popup');
    const content = document.getElementById('popupContent');

    // animasi out
    content.classList.remove('opacity-100', 'translate-y-0');
    content.classList.add('opacity-0', 'translate-y-5');

    // delay hide
    setTimeout(() => {
        popup.classList.remove('flex');
        popup.classList.add('hidden');
    }, 300);
}

// Fungsi submit reservation
function submitReservation() {
    let valid = true;
    const fields = ["name", "email", "date", "time", "people"];

    fields.forEach(field => {
        const input = document.getElementById(field);
        const error = document.getElementById(`error-${field}`);
        const value = input.value.trim();

        // toggle error & border
        error.classList.toggle("hidden", !!value);
        input.classList.toggle("border-red-500", !value);

        if (!value) valid = false;
    });

    if (valid) {
        document.getElementById("reservationForm").reset();
        document.getElementById("popupSuccess").classList.remove("hidden");
    }
}

// Fungsi menutup popup success
function closePopup() {
    document.getElementById("popupSuccess").classList.add("hidden");
}

// Scroll header effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 50;
    header.classList.toggle("bg-transparent", !isScrolled);
    header.classList.toggle("liquid-glass", isScrolled);
});
