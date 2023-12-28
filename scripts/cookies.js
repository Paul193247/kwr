if (localStorage.getItem("cookies-zoerb") === "accept") {
  const cookieBanner = document.getElementById("cookie-banner");
  cookieBanner.style.display = "none";
}
function hideBanner() {
  const cookieBanner = document.getElementById("cookie-banner");
  cookieBanner.style.display = "none";
  localStorage.setItem("cookies-zoerb", "accept");
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
