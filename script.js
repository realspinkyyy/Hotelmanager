let balance = 10000;
let roomPrice = 100;
let staffCount = 0;
let hotelLevel = 1;
let guests = [];

function logToConsole(message) {
    const consoleDiv = document.getElementById("debugConsole");
    const newLog = document.createElement("div");
    newLog.textContent = message;
    consoleDiv.appendChild(newLog);
}

function hireStaff() {
    if (balance >= 500) {
        staffCount++;
        balance -= 500;
        document.getElementById("staffCount").innerText = staffCount;
        logToConsole("Staff hired. Total staff: " + staffCount);
        updateBalance();
    } else {
        alert("Not enough money to hire staff!");
        logToConsole("Attempted to hire staff but not enough balance.");
    }
}

function addGuest() {
    let guest = {
        satisfaction: Math.floor(Math.random() * 100),
        budget: Math.floor(Math.random() * 500) + 100,
    };

    let guestDiv = document.createElement("div");
    guestDiv.innerHTML = `Guest: $${guest.budget} | Satisfaction: ${guest.satisfaction}%`;
    document.getElementById("guestList").appendChild(guestDiv);

    setTimeout(() => {
        if (guest.budget >= roomPrice) {
            balance += roomPrice;
            guest.satisfaction += Math.floor(Math.random() * 20);
            logToConsole("Guest checked in. Balance updated.");
        } else {
            guest.satisfaction -= 10;  // Guest is unhappy with pricing
            logToConsole("Guest could not afford the room.");
        }
        guestDiv.innerHTML = `Guest: $${guest.budget} | Satisfaction: ${guest.satisfaction}%`;
        updateBalance();
    }, 3000);
}

function updatePrices() {
    roomPrice = document.getElementById("roomPrice").value;
    logToConsole(`Room price updated to $${roomPrice}`);
}

function upgradeHotel() {
    if (balance >= 2000) {
        hotelLevel++;
        balance -= 2000;
        document.getElementById("hotelLevel").innerText = `${hotelLevel} Star`;
        logToConsole(`Hotel upgraded to ${hotelLevel} stars.`);
        updateBalance();
    } else {
        alert("Not enough money to upgrade the hotel!");
        logToConsole("Attempted to upgrade hotel but not enough balance.");
    }
}

function expandHotel() {
    if (balance >= 1000) {
        balance -= 1000;
        logToConsole("Hotel expanded. Balance reduced.");
        updateBalance();
    } else {
        alert("Not enough money to expand hotel.");
        logToConsole("Attempted to expand hotel but not enough balance.");
    }
}

function updateBalance() {
    document.getElementById("balance").innerText = balance;
}

setInterval(addGuest, 5000); // Add a guest every 5 seconds

// Debugging: Log the initial balance and hotel level
logToConsole("Game started with balance: $" + balance + " and hotel level: " + hotelLevel);
