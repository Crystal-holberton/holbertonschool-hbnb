document.addEventListener('DOMContentLoaded', () => {
  const placesContainer = document.getElementById('places-container');

  // Mock data - replace with API call later
    const places = [
    {
      name: 'Cozy Cabin',
      price: '$120/night',
      location: 'Aspen, CO',
      image: 'assets/Cozy Cabin.jpg'
    },
    {
      name: 'Beach Resort',
      price: '$150/night',
      location: 'Malibu, CA',
      image: 'assets/Beach resort.jpg'
    },
    {
      name: 'City Apartment',
      price: '$200/night',
      location: 'New York, NY',
      image: 'assets/City Apartment.jpg'
    }
  ];

  function displayPlaces(data) {
    placesContainer.innerHTML = ''; // Clear
    data.forEach(place => {
      const card = document.createElement('div');
      card.className = 'place-card';
      card.innerHTML = `
        <img src="${place.image}" alt="${place.name}" class="place-img"/>
        <h3>${place.name}</h3>
        <p>${place.location}</p>
        <p><strong>${place.price}</strong></p>
      `;
      placesContainer.appendChild(card);
    });
  }

  displayPlaces(places);

  // Filter functionality (basic text match)
  document.getElementById('filterBtn').addEventListener('click', () => {
    const searchVal = document.getElementById('search').value.toLowerCase();
    const filtered = places.filter(place =>
      place.name.toLowerCase().includes(searchVal) ||
      place.location.toLowerCase().includes(searchVal)
    );
    displayPlaces(filtered);
  });
});

// Login form
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Replace with real API call
      if (email === 'test@example.com' && password === '123') {
        window.location.href = 'index.html';
      } else {
        document.getElementById('loginError').textContent = 'Invalid credentials';
      }
    });
  }

  const reviewForm = document.getElementById('reviewForm');
  if (reviewForm) {
    reviewForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('reviewerName').value;
      const text = document.getElementById('reviewText').value;
      const rating = document.getElementById('rating').value;

      if (name && text && rating) {
        document.getElementById('reviewMsg').textContent = 'Review submitted!';
        reviewForm.reset();
      } else {
        document.getElementById('reviewMsg').textContent = 'Please complete all fields.';
      }
    });
  }
});
  