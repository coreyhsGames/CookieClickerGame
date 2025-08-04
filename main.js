let cookieButton = document.getElementById("cookieButton")
let cookieAmount = document.getElementById("cookieAmount")
let grandmaUpgrade = document.getElementById("grandmaUpgrade")

let cookies = 0

let grandmas = 0
let grandmaCost = 100

function updateCookieAmount() {
    cookieAmount.innerText = "You have " + cookies + " cookies!"
}

function clickCookie() {
    cookies++
    updateCookieAmount()
}

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

setInterval(function() {
    cookies += grandmas
    updateCookieAmount()
}, 1000)