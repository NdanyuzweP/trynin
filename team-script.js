document.addEventListener('DOMContentLoaded', function() {
   // Initialize data
   loadTeamData();
   
   // Add click listeners
   addEventListeners();
});

function loadTeamData() {
   // Sample team member data
   const teamMembers = [
       { userId: '53542', line: 1, vipLevel: 'FREE', joinDate: '19 Mar, 2025', balance: '$1.06' }
   ];
   
   // Populate the team log table
   const tableBody = document.getElementById('teamLogTable');
   if (!tableBody) return;
   
   if (teamMembers.length === 0) {
       const emptyRow = document.createElement('tr');
       emptyRow.innerHTML = `<td colspan="5" style="text-align: center; padding: 20px;">No team members found</td>`;
       tableBody.appendChild(emptyRow);
       return;
   }
   
   teamMembers.forEach(member => {
       const row = document.createElement('tr');
       row.innerHTML = `
           <td>${member.userId}</td>
           <td>${member.line}</td>
           <td>${member.vipLevel}</td>
           <td>${member.joinDate}</td>
           <td>${member.balance}</td>
       `;
       tableBody.appendChild(row);
   });
}

function addEventListeners() {
   // Tab buttons functionality
   const tabButtons = document.querySelectorAll('.tab-btn');
   tabButtons.forEach(button => {
       button.addEventListener('click', function() {
           // Remove active class from all buttons
           tabButtons.forEach(btn => btn.classList.remove('active'));
           // Add active class to clicked button
           this.classList.add('active');
           
           // Get the tab data
           const tabType = this.getAttribute('data-tab');
           
           // Here you would update the data based on the selected tab
           console.log(`Showing ${tabType} data`);
           
           // For demonstration, we're not changing any data
           // In a real implementation, you would reload the team data
           // based on the selected time period
       });
   });
   
   // Contact team leader button
   const contactBtn = document.querySelector('.contact-btn');
   if (contactBtn) {
       contactBtn.addEventListener('click', function() {
           // Here you would implement the contact functionality
           alert('Please contact your team leader through Telegram or WhatsApp');
       });
   }
   
   // Search functionality
   const searchBtn = document.querySelector('.search-btn');
   if (searchBtn) {
       searchBtn.addEventListener('click', function() {
           const searchInput = document.querySelector('.search-input').value;
           if (searchInput.trim() === '') {
               alert('Please enter an ID to search');
               return;
           }
           
           // Here you would implement the actual search functionality
           alert(`Searching for ID: ${searchInput}`);
       });
   }
   
   // Bottom navigation
   const navItems = document.querySelectorAll('.nav-item');
   navItems.forEach(item => {
       item.addEventListener('click', function() {
           const navType = this.querySelector('span').textContent;
           
           // Don't do anything if already on the Teams page
           if (navType === 'Teams') return;
           
        //    // Simulate navigation
        //    alert(`Navigating to: ${navType}`);
           
           // In a real implementation, you would redirect to the appropriate page
           // For example:
           // if (navType === 'Home') {
           //     window.location.href = 'index.html';
           // }
       });
   });
   
   // Logout button
   const logoutBtn = document.querySelector('.logout-btn');
   if (logoutBtn) {
       logoutBtn.addEventListener('click', function() {
           // Here you would implement the logout functionality
           if (confirm('Are you sure you want to logout?')) {
               alert('Logging out...');
               // window.location.href = 'login.html';
           }
       });
   }
}

// In a real implementation, you might want to add these functions:

// Function to load data based on selected period (total, today, last 7 days)
function loadPeriodData(period) {
   // This would make an API call to get data for the specified period
   console.log(`Loading data for period: ${period}`);
   
   // Then update the UI based on the retrieved data
   // For example:
   // updateTeamSizeDisplay(data.teamSize);
   // updateCommissionDisplay(data.commission);
   // etc.
}

// Function to search for team members
function searchTeamMembers(searchId) {
   // This would make an API call to search for team members matching the ID
   console.log(`Searching for team member with ID: ${searchId}`);
   
   // Then update the table with the search results
}

// Function to open messaging app for contacting team leader
function contactTeamLeader() {
   // This would open the appropriate messaging app or provide instructions
   console.log('Contacting team leader...');
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