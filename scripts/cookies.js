function hideBanner() {
  const cookieBanner = document.getElementById("cookie-banner");
  cookieBanner.style.display = "none";
}

function hideDeclineButton() {
  const cookieBanner = document.getElementById("cookie-banner");
  cookieBanner.style.display = "none";
}

const ablehnen = document.getElementById("decline-btn");

function move() {
  if (ablehnen.classList.contains("right")) {
    ablehnen.classList = "left";
  } else {
    ablehnen.classList = "right";
  }
}

ablehnen.addEventListener("mouseover", move);
