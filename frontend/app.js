const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:3001' 
  : window.location.origin + '/api';

let products = [];

async function add() {
  const name = document.getElementById('name').value;
  if (!name) return;
  
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    
    const data = await response.json();
    products = data.products || [];
    render();
    document.getElementById('name').value = '';
  } catch (error) {
    console.error('Erro ao adicionar produto:', error);
  }
}

async function loadProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    products = data;
    render();
  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
  }
}

function render() {
  document.getElementById('list').innerHTML = products
    .map(p => `<li>${typeof p === 'string' ? p : p.name}</li>`)
    .join('');
}

// Carregar produtos ao iniciar
loadProducts();