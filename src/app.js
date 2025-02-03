module.exports = {
                    content: ["./src/**/*.{html,js}"], // Ensure this path includes your files
                    theme: {
                      extend: {},
                    },
                    plugins: [],
                  };
                  
                  function showToast(type, title, message) {
                    const container = document.querySelector('.toast-container');
                    if (!container) {
                      console.error('Toast container not found');
                      return;
                    }
                  
                    const toast = document.createElement('div');
                  
                    // Set purple background for all toasts
                    const colors = {
                      purple: 'bg-purple-500',
                    };
                  
                    toast.className = `toast ${colors[type] || 'bg-gray-500'} text-white p-4 rounded-lg shadow-lg flex items-center justify-between space-x-4 relative overflow-hidden`;
                  
                    toast.innerHTML = `
                      <div class="flex-1">
                        <h3 class="font-bold">${title}</h3>
                        <p class="text-sm opacity-90">${message}</p>
                      </div>
                      <button class="cancel-button text-white text-lg font-bold">&times;</button>
                      <div class="progress-bar"></div>
                    `;
                  
                    container.appendChild(toast);
                  
                    // Cancel button functionality
                    const cancelButton = toast.querySelector('.cancel-button');
                    cancelButton.addEventListener('click', () => {
                      toast.classList.add('hide');
                      setTimeout(() => toast.remove(), 500);
                    });
                  
                    // Automatically remove the toast after 10 seconds
                    setTimeout(() => {
                      toast.classList.add('hide');
                      setTimeout(() => toast.remove(), 500);
                    }, 10000);
                  }
                  
                  document.addEventListener('DOMContentLoaded', () => {
                    const hamburger = document.getElementById('hamburger');
                    const mobileMenu = document.getElementById('mobile-menu');
                  
                    // Check if hamburger or mobile menu exists
                    if (!hamburger || !mobileMenu) {
                      console.error('Hamburger or mobile menu not found');
                      return;
                    }
                  
                    const productButton = document.querySelector('#mobile-menu button');
                    if (!productButton) {
                      console.error('Product button not found');
                      return;
                    }
                  
                    const productDropdown = productButton.nextElementSibling;
                    if (!productDropdown) {
                      console.error('Product dropdown not found');
                      return;
                    }
                  
                    // Toggle mobile menu on hamburger click
                    hamburger.addEventListener('click', () => {
                      mobileMenu.classList.toggle('hidden');
                    });
                  
                    // Toggle product dropdown on button click
                    productButton.addEventListener('click', () => {
                      productDropdown.classList.toggle('hidden');
                    });
                  });
                  


                   // Get the 'to top' button element by ID
  var toTopButton = document.getElementById("to-top-button");
  
  // Check if the button exists
  if (toTopButton) {
  
      // On scroll event, toggle button visibility based on scroll position
      window.onscroll = function() {
          if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
              toTopButton.classList.remove("hidden");
          } else {
              toTopButton.classList.add("hidden");
          }
      };
  
      // Function to scroll to the top of the page smoothly
      window.goToTop = function() {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      };
  }

  

 
                  