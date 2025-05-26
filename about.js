const stateTemples = {
  'andhra-pradesh': [
    {
      name: 'Tirupati Balaji',
      description: 'The Tirupati Balaji Temple, in Tirumala, is one of the most visited religious places. Devotees believe that donating here brings spiritual fulfillment. It is dedicated to Lord Venkateswara and is an important Vaishnavite pilgrimage site.'
    },
    {
      name: 'Srisailam Temple',
      description: 'Located on the banks of the Krishna River, this Jyotirlinga temple is devoted to Lord Mallikarjuna (Shiva). The site combines spiritual importance and scenic surroundings.'
    },
    {
      name: 'Kanaka Durga Temple',
      description: 'This famous temple in Vijayawada sits atop Indrakeeladri Hill and honors Goddess Durga. It’s a cultural and spiritual symbol for locals and tourists alike.'
    }
  ],
  
};

// Handle sidebar state clicks
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const state = event.target.getAttribute('data-state');
    loadTemples(state);
  });
});

// Load temple list
function loadTemples(state) {
  const templesList = document.getElementById('temple-list');
  templesList.innerHTML = '';

  if (!stateTemples[state]) {
    templesList.innerHTML = '<p>No temples found for this state.</p>';
    return;
  }

  stateTemples[state].forEach(temple => {
    const item = document.createElement('div');
    item.className = 'temple-item';

    const btn = document.createElement('button');
    btn.className = 'accordion-btn';
    btn.innerHTML = `${temple.name} <span class="arrow">⌄</span>`;

    const content = document.createElement('div');
    content.className = 'accordion-content';
    content.textContent = temple.description;

    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      content.classList.toggle('show');
      const arrow = btn.querySelector('.arrow');
      arrow.textContent = content.classList.contains('show') ? '⌃' : '⌄';
    });

    item.appendChild(btn);
    item.appendChild(content);
    templesList.appendChild(item);
  });
}


