const SUPABASE_URL = 'https://xncrfxhqvktkkaotpws.supabase.co';
const SUPABASE_ANON_KEY = 'https://xncrfxhqvkttkkaotpws.supabase.co/rest/v1/';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let allServices = [];

async function fetchServices() {
  const loadingEl = document.getElementById('loading');
  const servicesList = document.getElementById('servicesList');

  const { data, error } = await supabaseClient
    .from('services')
    .select('*')
    .eq('status', 'published')
    .order('name', { ascending: true });

  if (error) {
    loadingEl.innerText = 'Services load karne me dikkat aayi.';
    return;
  }

  allServices = data || [];
  loadingEl.style.display = 'none';
  renderServices(allServices);
}

function renderServices(services) {
  const servicesList = document.getElementById('servicesList');
  servicesList.innerHTML = '';

  if (services.length === 0) {
    servicesList.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color: #64748b;">No services found.</p>';
    return;
  }

  services.forEach(item => {
    const docs = Array.isArray(item.documents) ? item.documents : [];
    const docsHtml = docs.map(d => `<li>${d}</li>`).join('');
    
    const whatsappMessage = encodeURIComponent(
      `*${item.name}* Required Documents:\n\n` +
      docs.map(d => `• ${d}`).join('\n') +
      `\n\nOfficial Link: ${item.official_url}`
    );

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div>
        <div class="card-header">
          <h3>${item.name}</h3>
          <span class="badge">${item.category}</span>
        </div>
        <p style="font-size:0.85rem; color:#64748b; margin-bottom:12px;">${item.description || ''}</p>
        <div class="detail-row"><strong>Fee:</strong> ${item.fee || 'Free'}</div>
        <div class="detail-row"><strong>Processing Time:</strong> ${item.processing_time || 'N/A'}</div>
        <div class="detail-row"><strong>Eligibility:</strong> ${item.eligibility || 'Standard'}</div>
        <div class="detail-row" style="margin-top:10px;"><strong>Required Documents:</strong></div>
        <ul class="docs-list">${docsHtml}</ul>
      </div>
      <div class="card-actions">
        <a href="${item.official_url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Official Portal</a>
        <a href="https://wa.me/?text=${whatsappMessage}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">WhatsApp Share</a>
      </div>
    `;
    servicesList.appendChild(card);
  });
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = allServices.filter(s => 
    s.name.toLowerCase().includes(query) || 
    (s.description && s.description.toLowerCase().includes(query)) ||
    s.category.toLowerCase().includes(query)
  );
  renderServices(filtered);
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    const category = e.target.getAttribute('data-cat');
    if (category === 'all') {
      renderServices(allServices);
    } else {
      const filtered = allServices.filter(s => s.category.toLowerCase() === category.toLowerCase());
      renderServices(filtered);
    }
  });
});

fetchServices();
