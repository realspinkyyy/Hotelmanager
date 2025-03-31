let balance = 10000;
let roomCount = 1;
let staffCount = 0;

function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));

    document.getElementById(`${section}Section`).classList.add('active');
}

// Hotel Management
function expandHotel() {
    if (balance >= 1000) {
        balance -= 1000;
        updateUI();
        logToConsole("Hotel expanded!");
    } else {
        logToConsole("Not enough money to expand hotel!");
    }
}

function buyRoom() {
    if (balance >= 500) {
        balance -= 500;
        roomCount += 1;
        updateUI();
        logToConsole("Room bought!");
    } else {
        logToConsole("Not enough money to buy a room!");
    }
}

function upgradeHotel() {
    if (balance >= 2000) {
        balance -= 2000;
        updateUI();
        logToConsole("Hotel upgraded!");
    } else {
        logToConsole("Not enough money to upgrade hotel!");
    }
}

// Staff Management
function hireStaff() {
    if (balance >= 500) {
        balance -= 500;
        staffCount += 1;
        updateUI();
        logToConsole("Staff hired!");
    } else {
        logToConsole("Not enough money to hire staff!");
    }
}

// Guests Management
function addGuest() {
    const guestList = document.getElementById('guestList');
    const guestDiv = document.createElement('div');
    guestDiv.textContent = "Guest Added";
    guestList.appendChild(guestDiv);
    logToConsole("New guest added!");
}

// UI Update
function updateUI() {
    document.getElementById('balance').textContent = balance;
    document.getElementById('roomCount').textContent = roomCount;
    document.getElementById('staffCount').textContent = staffCount;
}

// Debugging Console
function logToConsole(message) {
    const debugConsole = document.getElementById('debugConsole');
    const logMessage = document.createElement('div');
    logMessage.textContent = message;
    debugConsole.appendChild(logMessage);
}

// Initial Section Display
showSection('hotel');let balance = 10000;
let roomCount = 1;
let staffCount = 0;

function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));

    document.getElementById(`${section}Section`).classList.add('active');
}

// Hotel Management
function expandHotel() {
    if (balance >= 1000) {
        balance -= 1000;
        updateUI();
        logToConsole("Hotel expanded!");
    } else {
        logToConsole("Not enough money to expand hotel!");
    }
}

function buyRoom() {
    if (balance >= 500) {
        balance -= 500;
        roomCount += 1;
        updateUI();
        logToConsole("Room bought!");
    } else {
        logToConsole("Not enough money to buy a room!");
    }
}

function upgradeHotel() {
    if (balance >= 2000) {
        balance -= 2000;
        updateUI();
        logToConsole("Hotel upgraded!");
    } else {
        logToConsole("Not enough money to upgrade hotel!");
    }
}

// Staff Management
function hireStaff() {
    if (balance >= 500) {
        balance -= 500;
        staffCount += 1;
        updateUI();
        logToConsole("Staff hired!");
    } else {
        logToConsole("Not enough money to hire staff!");
    }
}

// Guests Management
function addGuest() {
    const guestList = document.getElementById('guestList');
    const guestDiv = document.createElement('div');
    guestDiv.textContent = "Guest Added";
    guestList.appendChild(guestDiv);
    logToConsole("New guest added!");
}

// UI Update
function updateUI() {
    document.getElementById('balance').textContent = balance;
    document.getElementById('roomCount').textContent = roomCount;
    document.getElementById('staffCount').textContent = staffCount;
}

// Debugging Console
function logToConsole(message) {
    const debugConsole = document.getElementById('debugConsole');
    const logMessage = document.createElement('div');
    logMessage.textContent = message;
    debugConsole.appendChild(logMessage);
}

// Initial Section Display
showSection('hotel');
