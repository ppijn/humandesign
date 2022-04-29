let nav = 0;
let clicked = null;
let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];

const calendar = document.getElementById("calendar");
const weekdays = [
  "Maandag",
  "Dinsdag",
  "Woensdag",
  "Donderdag",
  "Vrijdag",
  "Zaterdag",
  "Zondag",
];

function openModal(date) {
  clicked = date;

  const eventForDay = events.find((e) => e.date === clicked);

  if (eventForDay) {
    console.log("Event already exists");
  } else {
  }
}

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dateString = firstDayOfMonth.toLocaleDateString("nl", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  console.log(dateString);
  const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);
  console.log(paddingDays);

  document.getElementById("monthDisplay").innerText = `${dt.toLocaleDateString(
    "nl-nl",
    { month: "long" }
  )} ${year}`;

  calendar.innerHTML = "";

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement("div");
    daySquare.classList.add("day");

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;

      daySquare.addEventListener("click", () => console.log("click"));
    } else {
      daySquare.classList.add("padding");
    }
    calendar.appendChild(daySquare);
  }
}

function initButtons() {
  document.getElementById("nextbutton").addEventListener("click", () => {
    nav++;
    load();
  });

  document.getElementById("backbutton").addEventListener("click", () => {
    nav--;
    load();
  });
}

initButtons();
load();
