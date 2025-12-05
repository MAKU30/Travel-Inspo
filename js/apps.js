// // TravSpo Website JavaScript
// console.log('TravSpo website loaded successfully');

// // Navigation functionality
// document.addEventListener('DOMContentLoaded', function() {
    
//     // Explore button click handler
//     const exploreBtn = document.getElementById('explore-btn');
//     if (exploreBtn) {
//         exploreBtn.addEventListener('click', function() {
//             window.location.href = 'destinations.html';
//         });
//     }

//     // View all destinations button
//     const viewAllBtn = document.getElementById('viewall-btn');
//     if (viewAllBtn) {
//         viewAllBtn.addEventListener('click', function() {
//             window.location.href = 'destinations.html';
//         });
//     }

//     // Search button functionality
//     const searchBtn = document.getElementById('srch-btn');
//     if (searchBtn) {
//         searchBtn.addEventListener('click', function() {
//             alert('Search functionality coming soon!');
//         });
//     }

//     // Category buttons - add active state
//     const categoryButtons = document.querySelectorAll('.des-btn');
//     categoryButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             // Remove 'spec' class from all buttons
//             categoryButtons.forEach(btn => btn.classList.remove('spec'));
//             // Add 'spec' class to clicked button
//             this.classList.add('spec');
//         });
//     });

//     // Category navigation buttons on home page
//     const beachesBtn = document.getElementById('beaches-btn');
//     const cityBtn = document.getElementById('city-btn');
//     const natureBtn = document.getElementById('nature-btn');
//     const culturalBtn = document.getElementById('cultural-btn');
//     const adventureBtn = document.getElementById('adventure-btn');

//     if (beachesBtn) {
//         beachesBtn.addEventListener('click', function() {
//             window.location.href = 'destinations.html';
//         });
//     }

//     // Smooth scroll for internal links
//     const internalLinks = document.querySelectorAll('a[href^="#"]');
//     internalLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const target = document.querySelector(this.getAttribute('href'));
//             if (target) {
//                 target.scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//     });

//     // Add hover effect to cards
//     const cards = document.querySAll('.exp-img');
//     cards.forEach(card => {
//         card.addEventListener('mouseenter', function() {
//             this.style.transform = 'scale(1.02)';
//         });
//         card.addEventListener('mouseleave', function() {
//             this.style.transform = 'scale(1)';
//         });
//     });

//     // Load more photos button
//     const loadMoreBtn = document.querySelector('.load-btn');
//     if (loadMoreBtn) {
//         loadMoreBtn.addEventListener('click', function() {
//             alert('More photos coming soon!');
//         });
//     }

//     // Custom itinerary request
//     const requestBtn = document.querySelector('#srch-btn');
//     if (requestBtn && window.location.pathname.includes('itineraries')) {
//         requestBtn.addEventListener('click', function() {
//             alert('Custom itinerary request form coming soon!');
//         });
//     }

//     // Download PDF buttons
//     const downloadButtons = document.querySelectorAll('.des-btn');
//     downloadButtons.forEach(button => {
//         if (button.textContent.includes('Download PDF')) {
//             button.addEventListener('click', function() {
//                 alert('PDF download functionality coming soon!');
//             });
//         }
//     });

//     console.log('All event listeners initialized');
// });