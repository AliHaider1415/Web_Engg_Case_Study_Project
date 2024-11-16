function toggleTheme() {
  const navbar = document.getElementById('navbar');
  const navbarBrand = document.getElementById('navbarBrand');
  const loginLink = document.getElementById('loginLink');
  const createAccountLink = document.getElementById('createAccountLink');
  const searchInput = document.getElementById('searchInput');
  const isChecked = document.getElementById('flexSwitchCheckDefault').checked;

  if (isChecked) {
    // Change navbar to light mode
    navbar.style.backgroundColor = 'white';
    navbar.style.color = '#4d0099';
    const links = navbar.getElementsByClassName('nav-link');
    for (let link of links) {
      link.style.color = '#4d0099'; // Set the text color of links
    }
    
    // Change navbar brand color
    navbarBrand.style.color = '#4d0099';

    // Change login and create account link color
    loginLink.style.color = '#4d0099';
    createAccountLink.style.color = '#4d0099';

    // Change input field style
    searchInput.style.backgroundColor = '#4d0099';
    searchInput.style.color = 'white';
    searchInput.style.borderColor = '#4d0099';
  } else {
    // Change navbar back to dark mode
    navbar.style.backgroundColor = '';
    navbar.style.color = '';
    const links = navbar.getElementsByClassName('nav-link');
    for (let link of links) {
      link.style.color = ''; // Reset the text color of links
    }
    
    // Reset navbar brand color
    navbarBrand.style.color = '';
    
    // Reset login and create account link color
    loginLink.style.color = '';
    createAccountLink.style.color = '';

    // Reset input field style
    searchInput.style.backgroundColor = '';
    searchInput.style.color = '';
    searchInput.style.borderColor = '';
  }
}


// Array to store course data
const courses = [
    {
      title: "Intro to Graphic Design",
      description: "A beginner's guide to layout, colors, and typography.",
      duration: "4 Weeks",
      price: 199,
    },
    {
      title: "Advanced Photoshop Techniques",
      description: "Take your design skills to the next level with Photoshop.",
      duration: "6 Weeks",
      price: 299,
    },
    {
      title: "Web Design for Creatives",
      description: "Learn how to create stunning web designs from scratch.",
      duration: "5 Weeks",
      price: 249,
    },
    {
      title: "Mastering Illustrator",
      description: "Discover the full potential of Adobe Illustrator.",
      duration: "4 Weeks",
      price: 199,
    },
    {
      title: "Creative Branding",
      description: "Learn how to create and develop a brand identity.",
      duration: "5 Weeks",
      price: 249,
    },
  ];
  
  // Function to render courses in the table
  const renderCourses = () => {
    const tableBody = document.getElementById("coursesTableBody");
    tableBody.innerHTML = ""; // Clear existing rows
  
    courses.forEach((course, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${course.title}</td>
        <td>${course.description}</td>
        <td>${course.duration}</td>
        <td>$${course.price}</td>
        <td>
          <a href="/enroll/${course.title.toLowerCase().replace(/\s+/g, "-")}" class="btn btn-primary btn-sm">
            Enroll
          </a>
        </td>
  
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteCourse(${index})">
            <i class="bi bi-trash"></i> Delete
          </button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  };
  
  // Function to delete a course
  function deleteCourse(index) {
    // Remove the course from the array
    courses.splice(index, 1);
    // Re-render the table
    renderCourses();
  }
  
  // Event listener for Add Course form submission
  document.getElementById("addCourseForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
  
    // Get form values
    const title = document.getElementById("courseTitle").value.trim();
    const description = document.getElementById("courseDescription").value.trim();
    const duration = document.getElementById("courseDuration").value.trim();
    const price = parseFloat(document.getElementById("coursePrice").value.trim());
  
    // Validate inputs
    if (!title || !description || !duration || isNaN(price) || price <= 0) {
      alert("Please fill out all fields with valid data.");
      return;
    }
  
    // Add new course to array
    courses.push({ title, description, duration, price });
  
    // Update table
    renderCourses();
  
    // Reset form
    document.getElementById("addCourseForm").reset();
  
    // Close the modal
    const addCourseModal = bootstrap.Modal.getInstance(document.getElementById("addCourseModal"));
    addCourseModal.hide();
  
    // Ensure modal backdrop is removed
    document.querySelectorAll('.modal-backdrop').forEach((backdrop) => backdrop.remove());
  
    // Allow body scrolling
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = ''; // Remove any padding added by Bootstrap
  });
  
  // Initial rendering of courses
  document.addEventListener("DOMContentLoaded", renderCourses);
  