document.addEventListener('DOMContentLoaded', function() {
   // Initialize Charts
   initializeBalanceChart();
   
   // Add click listeners
   addEventListeners();
   
   // Simulate loading transactions
   loadTransactions();
});

function initializeBalanceChart() {
   const ctx = document.getElementById('balanceChart').getContext('2d');
   
   // Chart.js configuration
   const balanceChart = new Chart(ctx, {
       type: 'line',
       data: {
           labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
           datasets: [{
               label: 'Balance',
               data: [0.5, 1.2, 2.0, 2.8, 3.5, 4.0, 4.1],
               borderColor: 'rgba(255, 255, 255, 0.8)',
               backgroundColor: 'rgba(255, 255, 255, 0.1)',
               tension: 0.4,
               borderWidth: 2,
               pointBackgroundColor: 'white',
               pointRadius: 3,
               fill: true
           }]
       },
       options: {
           maintainAspectRatio: false,
           plugins: {
               legend: {
                   display: false
               },
               tooltip: {
                   backgroundColor: 'white',
                   titleColor: '#333',
                   bodyColor: '#333',
                   borderColor: '#e0e0e0',
                   borderWidth: 1,
                   callbacks: {
                       title: function(tooltipItems) {
                           return tooltipItems[0].label;
                       },
                       label: function(context) {
                           return `$${context.parsed.y.toFixed(2)}`;
                       }
                   }
               }
           },
           scales: {
               x: {
                   grid: {
                       display: false
                   },
                   ticks: {
                       color: 'rgba(255, 255, 255, 0.7)'
                   }
               },
               y: {
                   grid: {
                       color: 'rgba(255, 255, 255, 0.1)',
                       borderDash: [5, 5]
                   },
                   ticks: {
                       color: 'rgba(255, 255, 255, 0.7)',
                       callback: function(value) {
                           return '$' + value.toFixed(2);
                       }
                   }
               }
           }
       }
   });
}

function addEventListeners() {
   // Bottom navigation
   const navItems = document.querySelectorAll('.nav-item');
   navItems.forEach(item => {
       item.addEventListener('click', function() {
           navItems.forEach(nav => nav.classList.remove('active'));
           this.classList.add('active');
           
           // Handle navigation
           const navType = this.querySelector('span').textContent;
           console.log(`Navigated to: ${navType}`);
           
           // You could implement actual navigation here
           if (navType === 'Personal') {
               // Show Personal content
               alert('Personal section clicked!');
           }
       });
   });
   
   // Logout button
   document.querySelector('.logout-btn').addEventListener('click', function() {
       alert('Logout clicked!');
       // Implement logout functionality here
   });
   
   // Action buttons
   const actionButtons = document.querySelectorAll('.action-btn');
   actionButtons.forEach(btn => {
       btn.addEventListener('click', function() {
           const action = this.querySelector('span').textContent;
           alert(`${action} clicked!`);
       });
   });
   
   // Social buttons
   document.querySelector('.telegram-btn').addEventListener('click', function() {
       alert('Opening Telegram...');
   });
   
   document.querySelector('.whatsapp-btn').addEventListener('click', function() {
       alert('Opening WhatsApp...');
   });
   
   // Telegram join section
   document.querySelector('.telegram-join').addEventListener('click', function() {
       alert('Joining Telegram group...');
   });
   
   // Referral banner
   document.querySelector('.referral-banner').addEventListener('click', function() {
       alert('Opening referral challenge...');
   });
   
   // View all transactions
   document.querySelector('.view-all-btn').addEventListener('click', function() {
       alert('Viewing all transactions...');
   });
}

function loadTransactions() {
   // Sample transaction data
   const transactions = [
       { 
           date: '2025-04-10', 
           type: 'Referral Bonus', 
           amount: 1.50, 
           status: 'Completed' 
       },
       { 
           date: '2025-04-08', 
           type: 'Task Completion', 
           amount: 0.75, 
           status: 'Completed' 
       },
       { 
           date: '2025-04-05', 
           type: 'Commission', 
           amount: 0.25, 
           status: 'Completed' 
       }
   ];
   
   const transactionsList = document.querySelector('.transactions-list');
   
   if (transactions.length === 0) {
       transactionsList.innerHTML = '<div class="no-transactions">No recent transactions</div>';
       return;
   }
   
   transactions.forEach(transaction => {
       const transactionElement = document.createElement('div');
       transactionElement.classList.add('transaction-item');
       
       // Format date
       const date = new Date(transaction.date);
       const formattedDate = new Intl.DateTimeFormat('en-US', { 
           month: 'short', 
           day: 'numeric', 
           year: 'numeric' 
       }).format(date);
       
       transactionElement.innerHTML = `
           <div class="transaction-info">
               <div class="transaction-type">${transaction.type}</div>
               <div class="transaction-date">${formattedDate}</div>
           </div>
           <div class="transaction-amount ${transaction.amount > 0 ? 'positive' : 'negative'}">
               $${Math.abs(transaction.amount).toFixed(2)}
           </div>
           <div class="transaction-status ${transaction.status.toLowerCase()}">
               ${transaction.status}
           </div>
       `;
       
       transactionsList.appendChild(transactionElement);
   });
   
   // Add some CSS for the transactions
   const style = document.createElement('style');
   style.textContent = `
       .transaction-item {
           display: flex;
           justify-content: space-between;
           align-items: center;
           padding: 15px 0;
           border-bottom: 1px solid #f0f0f0;
       }
       .transaction-item:last-child {
           border-bottom: none;
       }
       .transaction-type {
           font-weight: bold;
           margin-bottom: 5px;
       }
       .transaction-date {
           font-size: 0.8rem;
           color: #777;
       }
       .transaction-amount {
           font-weight: bold;
       }
       .transaction-amount.positive {
           color: #4caf50;
       }
       .transaction-amount.negative {
           color: #f44336;
       }
       .transaction-status {
           font-size: 0.8rem;
           padding: 3px 8px;
           border-radius: 10px;
       }
       .transaction-status.completed {
           background-color: #e8f5e9;
           color: #4caf50;
       }
       .transaction-status.pending {
           background-color: #fff8e1;
           color: #ff9800;
       }
       .no-transactions {
           text-align: center;
           padding: 20px;
           color: #777;
       }
   `;
   document.head.appendChild(style);
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