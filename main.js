// Variables
let cookieButton = document.getElementById("cookieButton")
let cookieAmount = document.getElementById("cookieAmount")
let grandmaUpgrade = document.getElementById("grandmaUpgrade")

let cookies = 0

let grandmas = 0
let grandmaCost = 100

// Used to update the text to display the number of cookies
function updateCookieAmount() {
    cookieAmount.innerText = "You have " + cookies + " cookies!"
}

// Used when the cookie is clicked
function clickCookie() {
    cookies++
    updateCookieAmount()
}

// Handles the purchasing of grandmas
function purchaseGrandma() {
    if (cookies >= grandmaCost) {
        cookies -= grandmaCost
        grandmaCost *= 1.25
        grandmaCost = Math.round(grandmaCost)
        grandmas++

        updateCookieAmount()
        grandmaUpgrade.innerText = "Grandma for " + grandmaCost + " cookies"
    }
}

// Adds cookies every second using the number of grandmas purchased
setInterval(function() {
    cookies += grandmas
    updateCookieAmount()
}, 1000)