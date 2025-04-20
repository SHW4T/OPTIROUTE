document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([20.5937, 78.9629], 8); // Centered on India

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    document.getElementById('routeForm').addEventListener('submit', (e) => {
        e.preventDefault();
        calculateAndDisplayRoute();
    });

    function calculateAndDisplayRoute() {
        const start = document.getElementById('start').value.split(',');
        const end = document.getElementById('end').value.split(',');

        const startLatLng = L.latLng(parseFloat(start[0]), parseFloat(start[1]));
        const endLatLng = L.latLng(parseFloat(end[0]), parseFloat(end[1]));

        L.Routing.control({
            waypoints: [startLatLng, endLatLng],
            createMarker: function() { return null; }
        }).addTo(map);
        
        // Clear input fields after submission
        document.getElementById('start').value = '';
        document.getElementById('end').value = '';
        
        // Close the menu if it's open
        toggleMenu(false);
    }

   // Hamburger Menu Functionality
   const hamburger = document.getElementById('hamburger');
   const menu = document.getElementById('menu');

   hamburger.addEventListener('click', () => {
       const isVisible = menu.style.display === 'block';
       toggleMenu(!isVisible);
   });

   function toggleMenu(show) {
       menu.style.display = show ? 'block' : 'none';
   }
});
