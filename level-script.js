document.addEventListener('DOMContentLoaded', function() {
   // Initialize the page
   setupEventListeners();
});

function setupEventListeners() {
   // Logout button functionality
   const logoutBtn = document.querySelector('.logout-btn');
   if (logoutBtn) {
       logoutBtn.addEventListener('click', function() {
           if (confirm('Are you sure you want to logout?')) {
               console.log('Logging out...');
               // In a real implementation, redirect to login page
               // window.location.href = 'login.html';
           }
       });
   }

   // Upgrade buttons functionality
   const upgradeButtons = document.querySelectorAll('.upgrade-btn');
   upgradeButtons.forEach(button => {
       button.addEventListener('click', function() {
           const buttonText = this.textContent;
           const amount = buttonText.match(/USD\s(\d+)/)[1];
           
           if (confirm(`Are you sure you want to upgrade? This will charge USD ${amount} to your account.`)) {
               // In a real implementation, perform the upgrade API call
               console.log(`Processing upgrade payment of USD ${amount}...`);
               alert('Upgrade request submitted. Please wait for confirmation.');
           }
       });
   });

   // Bottom navigation
   const navItems = document.querySelectorAll('.nav-item');
   navItems.forEach(item => {
       item.addEventListener('click', function() {
           // Don't need any action for the current page (Level)
           if (this.classList.contains('active')) {
               return;
           }
           
           // In a real implementation, this would navigate to different pages
           console.log(`Navigating to: ${this.querySelector('span').textContent}`);
       });
   });

   // Highlight current navigation based on URL
   highlightCurrentNav();
}

function highlightCurrentNav() {
   // Get the current page path
   const currentPath = window.location.pathname;
   const pageName = currentPath.split('/').pop();
   
   // Highlight the correct navigation item
   const navItems = document.querySelectorAll('.nav-item');
   navItems.forEach(item => {
       const href = item.getAttribute('href');
       if (href === pageName) {
           item.classList.add('active');
       } else {
           item.classList.remove('active');
       }
   });
}

// Helper function to format currency
function formatCurrency(amount) {
   return new Intl.NumberFormat('en-US', {
       style: 'currency',
       currency: 'USD',
       minimumFractionDigits: 2
   }).format(amount);
}

// For demonstration purposes - not used in current implementation
function simulateUpgradeProcess(level, amount) {
   // This would be replaced with actual API calls in a real application
   return new Promise((resolve, reject) => {
       // Simulate network delay
       setTimeout(() => {
           // Simulate successful upgrade 90% of the time
           if (Math.random() > 0.1) {
               resolve({
                   success: true,
                   message: `Successfully upgraded to Level ${level}`,
                   newLevel: level
               });
           } else {
               reject({
                   success: false,
                   message: "Payment processing failed. Please try again later."
               });
           }
       }, 2000);
   });
}

document.addEventListener('DOMContentLoaded', function() {
   const navItems = document.querySelectorAll('.nav-item');
   const currentPage = window.location.pathname.split('/').pop();

   navItems.forEach(item => {
       const href = item.getAttribute('href');
       if (currentPage === href) {
           item.classList.add('active');
       } else {
           item.classList.remove('active');
       }
   });
});