// ── COPY TO CLIPBOARD ──
function copyCode(btn) {
  const code = btn.previousElementSibling.textContent;
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = '✓ Copied';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    // fallback
    const ta = document.createElement('textarea');
    ta.value = code;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = '✓ Copied';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
  });
}

// ── SEARCH ──
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  let totalVisible = 0;

  document.querySelectorAll('.section').forEach(section => {
    const cards = section.querySelectorAll('.cmd-card');
    let sectionVisible = 0;

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        card.classList.remove('hidden');
        sectionVisible++;
      } else {
        card.classList.add('hidden');
      }
    });

    // Also check info-cards
    section.querySelectorAll('.info-card').forEach(card => {
      if (!q || card.textContent.toLowerCase().includes(q)) {
        card.classList.remove('hidden');
        sectionVisible++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (sectionVisible === 0 && q) {
      section.classList.add('hidden');
    } else {
      section.classList.remove('hidden');
    }

    totalVisible += sectionVisible;
  });

  noResults.classList.toggle('visible', totalVisible === 0 && q.length > 0);
});

// ── ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => observer.observe(s));
