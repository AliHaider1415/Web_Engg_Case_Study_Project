document.querySelectorAll(".view-details").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent page scroll

    const card = this.closest(".card");

    const title = card.querySelector(".card-title").textContent;
    const startDate = card
      .querySelector(".card-text")
      .textContent.replace("Starting ", "");
    const imageSrc = card.querySelector("img").src;
    const description = "A detailed description of ";

    console.log(startDate, title, description, imageSrc);

    // Example data - replace with actual data
    const courseData = {
      title: "Mastering Illustrator",
      description:
        "Learn the fundamentals of Illustrator to create stunning graphics.",
      startDate: "November 10th, 2024",
      price: "$199",
      packages: [
        {
          name: "Standard",
          price: "$199",
          features: "Access to all basic lessons",
          duration: "4 weeks",
          tentativeStart: "November 10th, 2024",
        },
        {
          name: "Gold",
          price: "$299",
          features: "Includes all features from Standard + one-on-one sessions",
          duration: "6 weeks",
          tentativeStart: "November 15th, 2024",
        },
        {
          name: "Premium",
          price: "$399",
          features: "Includes all features from Gold + premium resources",
          duration: "8 weeks",
          tentativeStart: "November 20th, 2024",
        },
      ],
    };

    // Set course data in modal
    document.getElementById("modalCourseTitle").textContent = title;
    document.getElementById("modalCourseDescription").textContent = description;
    document.getElementById("modalCourseStartDate").textContent = startDate;
    document.getElementById("modalCoursePrice").textContent = courseData.price;

    // Generate package table rows
    const packageTableBody = document.getElementById("modalPackageTable");
    packageTableBody.innerHTML = ""; // Clear any existing rows
    courseData.packages.forEach((pkg) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${pkg.name}</td>
          <td>${pkg.price}</td>
          <td>${pkg.features}</td>
          <td>${pkg.duration}</td>
          <td>${pkg.tentativeStart}</td>
        `;
      packageTableBody.appendChild(row);
    });

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById("courseModal"));
    modal.show();
  });
});

function toggleTheme() {
  const navbar = document.getElementById("navbar");
  const navbarBrand = document.getElementById("navbarBrand");
  const loginLink = document.getElementById("loginLink");
  const createAccountLink = document.getElementById("createAccountLink");
  const searchInput = document.getElementById("searchInput");
  const isChecked = document.getElementById("flexSwitchCheckDefault").checked;

  if (isChecked) {
    // Change navbar to light mode
    navbar.style.backgroundColor = "white";
    navbar.style.color = "#4d0099";
    const links = navbar.getElementsByClassName("nav-link");
    for (let link of links) {
      link.style.color = "#4d0099"; // Set the text color of links
    }

    // Change navbar brand color
    navbarBrand.style.color = "#4d0099";

    // Change login and create account link color
    loginLink.style.color = "#4d0099";
    createAccountLink.style.color = "#4d0099";

    // Change input field style
    searchInput.style.backgroundColor = "#4d0099";
    searchInput.style.color = "white";
    searchInput.style.borderColor = "#4d0099";
  } else {
    // Change navbar back to dark mode
    navbar.style.backgroundColor = "";
    navbar.style.color = "";
    const links = navbar.getElementsByClassName("nav-link");
    for (let link of links) {
      link.style.color = ""; // Reset the text color of links
    }

    // Reset navbar brand color
    navbarBrand.style.color = "";

    // Reset login and create account link color
    loginLink.style.color = "";
    createAccountLink.style.color = "";

    // Reset input field style
    searchInput.style.backgroundColor = "";
    searchInput.style.color = "";
    searchInput.style.borderColor = "";
  }
}

const changeTextStyleBtn = document.getElementById("changeTextStyle");
const resetTextStyleBtn = document.getElementById("resetTextStyle");
const introDescription = document.querySelector(".intro-description");

// Change text style
changeTextStyleBtn.addEventListener("click", () => {
  introDescription.style.fontWeight = "bold";
  introDescription.style.color = "red";
  introDescription.style.fontStyle = "italic";
});

// Reset text style to original
resetTextStyleBtn.addEventListener("click", () => {
  introDescription.style.fontWeight = "normal";
  introDescription.style.color = "";
  introDescription.style.fontStyle = "normal";
});
