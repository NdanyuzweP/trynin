document.addEventListener('DOMContentLoaded', function() {
   // Add event listeners
   addEventListeners();
   
   // Highlight current page in navigation
   highlightCurrentNav();
});

function addEventListeners() {
   // Settings items click events
   const settingsItems = document.querySelectorAll('.settings-item');
   
   settingsItems.forEach(item => {
       item.addEventListener('click', function() {
           const itemText = this.querySelector('.item-content span').textContent;
           
           switch(itemText) {
               case 'Transaction History':
                   navigateTo('transaction-history.html');
                   break;
               case 'Change Password':
                   navigateTo('change-password.html');
                   break;
               case 'FAQ':
                   navigateTo('faq.html');
                   break;
               case 'Logout':
                   handleLogout();
                   break;
               case 'Support 1':
                   openSupport(1);
                   break;
               case 'Support 2':
                   openSupport(2);
                   break;
               case 'Support 3':
                   openSupport(3);
                   break;
               default:
                   console.log('Unknown setting item clicked');
           }
       });
   });
   
   // Header logout button
   const logoutBtn = document.querySelector('.logout-btn');
   if (logoutBtn) {
       logoutBtn.addEventListener('click', handleLogout);
   }
   
   // Bottom navigation items
   const navItems = document.querySelectorAll('.nav-item');
   navItems.forEach(item => {
       item.addEventListener('click', function(e) {
           if (this.classList.contains('active')) {
               e.preventDefault(); // Don't navigate if already on this page
           }
       });
   });
}

function highlightCurrentNav() {
   const navItems = document.querySelectorAll('.nav-item');
   const currentPage = window.location.pathname.split('/').pop();

   navItems.forEach(item => {
       const href = item.getAttribute('href');
       if (currentPage === href || 
           (currentPage === 'settings.html' && href === 'settings.html')) {
           item.classList.add('active');
       } else {
           item.classList.remove('active');
       }
   });
}

function navigateTo(page) {
   // In a real app, this would navigate to the specified page
   console.log(`Navigating to: ${page}`);
   // window.location.href = page;
}

function handleLogout() {
   if (confirm('Are you sure you want to logout?')) {
       console.log('Logging out...');
       // In a real app, this would clear session data and redirect to login
       // window.location.href = 'login.html';
   }
}

function openSupport(supportNumber) {
   // In a real app, this would open a support chat or contact page
   console.log(`Opening support channel ${supportNumber}`);
   alert(`Opening support channel ${supportNumber}`);
   // You could implement a chat window or redirect to a support page
   // window.location.href = `support.html?channel=${supportNumber}`;
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