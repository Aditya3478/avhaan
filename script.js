const sections = Array.from(document.querySelectorAll(
  ".sutra section, .manogat section, .startup section, .aanya section, .vishesh section, .aadhunik section, .vyavstapna section, .sihavlokan section, .sad section, .shevatchapan section"
)).reverse(); // <== Reverse the section order

const pageContainer = document.querySelector(".page");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn1 = document.getElementById("prevBtn1");
const nextBtn1 = document.getElementById("nextBtn1");

const pages = [];
const sectionsPerPage = 1;

for (let i = 0; i < sections.length; i += sectionsPerPage) {
  const page = document.createElement("div");
  page.classList.add("page");
  if (i === 0) page.classList.add("active");

  for (let j = i; j < i + sectionsPerPage && j < sections.length; j++) {
    page.appendChild(sections[j]);
  }

  pageContainer.parentNode.insertBefore(page, pageContainer);
  pages.push(page);
}

pageContainer.remove();

let currentPage = 0;

// Unified page update function
function updatePages() {
  pages.forEach((page, index) => {
    page.classList.toggle("active", index === currentPage);
  });

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;
  prevBtn1.disabled = currentPage === 0;
  nextBtn1.disabled = currentPage === pages.length - 1;
}

// All navigation handlers
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updatePages();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePages();
  }
});

prevBtn1.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updatePages();
  }
});

nextBtn1.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePages();
  }
});

// Initialize
updatePages();



// toggle buttun 
function toggleNavbar() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

//date
const dateElement = document.getElementById("date-display");
const today = new Date();

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-IN', options);

dateElement.textContent = `📅 Today is: ${formattedDate}`;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            