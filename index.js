let scoreHomeEl = document.getElementById("scorehome-el")
let scoreHome = 0



function plus1Home() {
  scoreHome += 1
  scoreHomeEl.textContent = scoreHome
}

function plus2Home() {
  scoreHome += 2
  scoreHomeEl.textContent = scoreHome
}

function plus3Home() {
  scoreHome += 3
  scoreHomeEl.textContent = scoreHome
}

let scoreGuestEl = document.getElementById("scoreguest-el")
let scoreGuest = 0


function plus1Guest() {
  scoreGuest += 1
  scoreGuestEl.textContent = scoreGuest
}

function plus2Guest() {
  scoreGuest += 2
  scoreGuestEl.textContent = scoreGuest
}

function plus3Guest() {
  scoreGuest += 3
  scoreGuestEl.textContent = scoreGuest
}