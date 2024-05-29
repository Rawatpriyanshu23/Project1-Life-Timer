let isDOBOpen = false;
const settingsCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");

const toggleDateofBirthdaySelector = () => {
  settingContentEl.classList.toggle("hide");
  isDOBOpen = !isDOBOpen;
  console.log("Toggle", isDOBOpen);
};

settingsCogEl.addEventListener("click", toggleDateofBirthdaySelector);

