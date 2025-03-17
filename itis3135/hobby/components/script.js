// Grab all the navigation links and the toggle button
const navLinks = document.querySelectorAll('.nav-link');
const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('main');


// Function to hide all sections
function hideSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
}

// Event listener for navigation links
navLinks.forEach(link => {

    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        const target = link.getAttribute('data-target'); // Get the target section ID
        hideSections(); // Hide all sections
        document.getElementById(target).classList.add('active'); // Show the clicked section
    });
});

// Toggle sidebar visibility when the button is clicked
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('hidden'); // Toggle the hidden class to show/hide the sidebar
    mainContent.classList.toggle('shifted'); // Shift the main content when sidebar is hidden
});
// Ensure that the first section ("home") is shown on page load
document.addEventListener('DOMContentLoaded', () => {
    // Hide all sections first
    hideSections();
    // Show the 'home' section by default
    document.getElementById('home').classList.add('active');
});
//Listener for Table Links
const rows = document.querySelectorAll('#producer-table tbody tr');
        rows.forEach(row => {
            row.addEventListener('click', () => {
                const url = row.getAttribute('data-url');
                window.open(url, '_blank'); // Open the link in a new tab
            });
        });
