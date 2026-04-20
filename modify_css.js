const fs = require('fs');
const path = require('path');

const filePath = 'c:\\xampp\\htdocs\\WS03\\Public\\css\\custom.css';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace :root
const old_root = `:root {
  --bg: #f3f4f6;
  --surface: #ffffff;
  --surface-soft: #f9fafb;
  --text: #1f2937;
  --text-soft: #4b5563;
  --text-muted: #6b7280;
  --primary: #0f766e;
  --primary-dark: #115e59;
  --secondary: #334155;
  --border: #d1d5db;
  --border-soft: #e5e7eb;
  --danger: #b91c1c;
  --danger-dark: #991b1b;
  --shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 6px 16px rgba(0, 0, 0, 0.08);
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 999px;
  --font-body: 'Inter', sans-serif;
}`;

const new_root = `:root {
  --bg: #09090b;
  --surface: #121216;
  --surface-soft: #18181f;
  --text: #f8fafc;
  --text-soft: #cbd5e1;
  --text-muted: #94a3b8;
  --primary: #0ea5e9;
  --primary-dark: #0284c7;
  --secondary: #1e293b;
  --border: #27272a;
  --border-soft: #1f1f22;
  --danger: #ef4444;
  --danger-dark: #b91c1c;
  --shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 6px 16px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 15px rgba(14, 165, 233, 0.4);
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 999px;
  --font-body: 'Inter', sans-serif;
}`;
content = content.replace(old_root, new_root);

// Replace .site-header
const old_header = `.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #1f2937;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}`;

const new_header = `.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(18, 18, 22, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}`;
content = content.replace(old_header, new_header);

// .brand-mark
const old_brand_mark = `.brand-mark {
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--primary);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
}`;

const new_brand_mark = `.brand-mark {
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--primary);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  box-shadow: var(--shadow-glow);
}`;
content = content.replace(old_brand_mark, new_brand_mark);

// buttons
const old_btns = `.btn-primary,
.bg-yellow-500,
.bg-blue-500,
.nav-cta {
  background: var(--primary) !important;
  color: #ffffff !important;
}

.btn-secondary {
  background: #e5e7eb !important;
  color: #111827 !important;
}`;

const new_btns = `.btn-primary,
.bg-yellow-500,
.bg-blue-500,
.nav-cta {
  background: var(--primary) !important;
  color: #ffffff !important;
  box-shadow: var(--shadow-glow);
  transition: all 0.3s ease;
}

.btn-primary:hover,
.nav-cta:hover {
  box-shadow: 0 0 25px rgba(14, 165, 233, 0.7);
  transform: translateY(-1px);
}

.btn-secondary {
  background: var(--secondary) !important;
  color: var(--text) !important;
  border: 1px solid var(--border);
}`;
content = content.replace(old_btns, new_btns);

// .hero-section
const old_hero_section = `.hero-section {
  position: relative;
  min-height: 520px;
  display: flex;
  align-items: center;
  background:
    linear-gradient(rgba(31, 41, 55, 0.55), rgba(31, 41, 55, 0.55)),
    url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80');
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(17, 24, 39, 0.18);
}`;

const new_hero_section = `.hero-section {
  position: relative;
  min-height: 520px;
  display: flex;
  align-items: center;
  background:
    linear-gradient(rgba(9, 9, 11, 0.75), rgba(9, 9, 11, 0.85)),
    url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80');
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
}`;
content = content.replace(old_hero_section, new_hero_section);

// .hero-badge
const old_hero_badge = `.hero-badge {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.45rem 0.9rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.16);
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 600;
}`;

const new_hero_badge = `.hero-badge {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.45rem 0.9rem;
  border-radius: var(--radius-pill);
  background: rgba(14, 165, 233, 0.15);
  border: 1px solid rgba(14, 165, 233, 0.3);
  color: var(--primary);
  font-size: 0.82rem;
  font-weight: 600;
  box-shadow: var(--shadow-glow);
}`;
content = content.replace(old_hero_badge, new_hero_badge);

// .hero-search-form
const old_search_form = `.hero-search-form {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.12);
}

.input-group {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  min-height: 56px;
  padding: 0 1rem;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid var(--border);
}`;

const new_search_form = `.hero-search-form {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 16px;
  background: rgba(18, 18, 22, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border);
}

.input-group {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  min-height: 56px;
  padding: 0 1rem;
  border-radius: 12px;
  background: var(--surface);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.input-group:focus-within {
  border-color: var(--primary);
  box-shadow: 0 0 10px rgba(14, 165, 233, 0.2);
}`;
content = content.replace(old_search_form, new_search_form);

// hero stat
const old_hero_stat = `.hero-stat {
  min-width: 140px;
  padding: 0.95rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;
}

.hero-stat strong {
  display: block;
  font-size: 1.2rem;
  color: #ffffff;
}

.hero-stat span {
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.9rem;
}`;

const new_hero_stat = `.hero-stat {
  min-width: 140px;
  padding: 0.95rem;
  border-radius: 12px;
  background: var(--surface-soft);
  border: 1px solid var(--border);
  color: var(--text);
}

.hero-stat strong {
  display: block;
  font-size: 1.2rem;
  color: var(--primary);
  text-shadow: 0 0 8px rgba(14, 165, 233, 0.4);
}

.hero-stat span {
  color: var(--text-soft);
  font-size: 0.9rem;
}`;
content = content.replace(old_hero_stat, new_hero_stat);

// top banner
const old_top_banner = `.top-banner {
  padding: 3rem 1rem;
  text-align: center;
  background: #e5e7eb;
}`;

const new_top_banner = `.top-banner {
  padding: 3rem 1rem;
  text-align: center;
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}`;
content = content.replace(old_top_banner, new_top_banner);


// jobs-section-badge
const old_jobs_badge = `.jobs-section-badge {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius-pill);
  background: #d1fae5;
  color: #065f46;
  font-size: 0.8rem;
  font-weight: 600;
}`;

const new_jobs_badge = `.jobs-section-badge {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius-pill);
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary);
  border: 1px solid rgba(14, 165, 233, 0.2);
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 0 10px rgba(14, 165, 233, 0.2);
}`;
content = content.replace(old_jobs_badge, new_jobs_badge);

// job card
const old_job_card = `.job-card {
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}`;

const new_job_card = `.job-card {
  border-radius: 18px;
  background: var(--surface);
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: all 0.3s ease;
}

.job-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-glow);
  transform: translateY(-4px);
}`;
content = content.replace(old_job_card, new_job_card);

// job-card-category
const old_card_category = `.job-card-category {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius-pill);
  background: #ecfdf5;
  color: #065f46;
  border: 1px solid #d1fae5;
  font-size: 0.78rem;
  font-weight: 600;
}`;

const new_card_category = `.job-card-category {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius-pill);
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary);
  border: 1px solid rgba(14, 165, 233, 0.2);
  font-size: 0.78rem;
  font-weight: 600;
}`;
content = content.replace(old_card_category, new_card_category);

// job-card-meta
const old_card_meta = `.job-card-meta {
  padding: 1rem;
  margin-bottom: 1.1rem;
  border-radius: 14px;
  background: #f9fafb;
  border: 1px solid var(--border-soft);
}`;
const new_card_meta = `.job-card-meta {
  padding: 1rem;
  margin-bottom: 1.1rem;
  border-radius: 14px;
  background: var(--surface-soft);
  border: 1px solid var(--border-soft);
}`;
content = content.replace(old_card_meta, new_card_meta);

// job-location
const old_job_location = `.job-location {
  color: #374151;
}`;
const new_job_location = `.job-location {
  color: var(--text-soft);
}`;
content = content.replace(old_job_location, new_job_location);

// job-salary
const old_job_salary = `.job-salary {
  color: var(--primary-dark);
  font-weight: 700;
}`;
const new_job_salary = `.job-salary {
  color: var(--primary);
  font-weight: 700;
  text-shadow: 0 0 5px rgba(14, 165, 233, 0.3);
}`;
content = content.replace(old_job_salary, new_job_salary);

// job-badge
const old_job_badge = `.job-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius-pill);
  background: var(--primary);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
}

.job-badge.remote {
  background: #475569;
}`;
const new_job_badge = `.job-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius-pill);
  background: var(--primary);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: 0 0 8px rgba(14, 165, 233, 0.5);
}

.job-badge.remote {
  background: var(--secondary);
  box-shadow: none;
}`;
content = content.replace(old_job_badge, new_job_badge);

// job-tag
const old_job_tag = `.job-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.38rem 0.7rem;
  border-radius: var(--radius-pill);
  background: #ffffff;
  color: #065f46;
  border: 1px solid #d1fae5;
  font-size: 0.8rem;
  font-weight: 600;
}`;
const new_job_tag = `.job-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.38rem 0.7rem;
  border-radius: var(--radius-pill);
  background: var(--bg);
  color: var(--text-soft);
  border: 1px solid var(--border);
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.job-tag:hover {
  border-color: var(--primary);
  color: var(--primary);
}`;
content = content.replace(old_job_tag, new_job_tag);

// job-details-btn
const old_details_btn = `.job-details-btn {
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  background: #e5e7eb;
  border: 1px solid #d1d5db;
  color: #111827 !important;
  font-weight: 600;
}`;
const new_details_btn = `.job-details-btn {
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  background: var(--surface-soft);
  border: 1px solid var(--border);
  color: var(--text) !important;
  font-weight: 600;
  transition: all 0.2s ease;
}

.job-details-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: #ffffff !important;
  box-shadow: var(--shadow-glow);
}`;
content = content.replace(old_details_btn, new_details_btn);

// jobs-footer-link
const old_footer_link = `.jobs-footer-link,
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.85rem 1.15rem;
  border-radius: var(--radius-pill);
  background: #ffffff;
  border: 1px solid var(--border);
  color: var(--text) !important;
  font-weight: 600;
  box-shadow: var(--shadow-sm);
}`;
const new_footer_link = `.jobs-footer-link,
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.85rem 1.15rem;
  border-radius: var(--radius-pill);
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text) !important;
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.jobs-footer-link:hover,
.back-link:hover {
  border-color: var(--primary);
  color: var(--primary) !important;
  box-shadow: 0 0 15px rgba(14, 165, 233, 0.2);
}`;
content = content.replace(old_footer_link, new_footer_link);

// cta-banner
const old_cta_banner = `.cta-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.8rem;
  border-radius: 18px;
  background: #334155;
  color: #ffffff;
}

.cta-banner h2 {
  color: #ffffff !important;
  font-size: 1.5rem;
  margin-bottom: 0.45rem;
}

.cta-banner p {
  color: rgba(255, 255, 255, 0.88) !important;
  margin: 0;
}`;
const new_cta_banner = `.cta-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.8rem;
  border-radius: 18px;
  background: var(--surface-soft);
  border: 1px solid var(--border);
  color: var(--text);
  position: relative;
  overflow: hidden;
}

.cta-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--primary);
  box-shadow: var(--shadow-glow);
}

.cta-banner h2 {
  color: var(--text) !important;
  font-size: 1.5rem;
  margin-bottom: 0.45rem;
  position: relative;
  z-index: 1;
}

.cta-banner p {
  color: var(--text-soft) !important;
  margin: 0;
  position: relative;
  z-index: 1;
}`;
content = content.replace(old_cta_banner, new_cta_banner);

// form-shell
const old_form_shell = `.form-shell {
  background: #ffffff;
  border: 1px solid var(--border-soft);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.form-hero {
  padding: 2.25rem;
  color: white;
  background: #0f766e;
}

.form-badge {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.45rem 0.8rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.18);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.form-hero h1 {
  margin: 0 0 0.75rem;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #fff !important;
}

.form-hero p {
  margin: 0;
  max-width: 620px;
  color: rgba(255, 255, 255, 0.9) !important;
}`;
const new_form_shell = `.form-shell {
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.form-hero {
  padding: 2.25rem;
  color: var(--text);
  background: linear-gradient(135deg, var(--surface-soft), var(--surface));
  border-bottom: 1px solid var(--border);
  position: relative;
}

.form-hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--primary);
  box-shadow: 0 0 15px var(--primary);
}

.form-badge {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.45rem 0.8rem;
  border-radius: var(--radius-pill);
  background: rgba(14, 165, 233, 0.15);
  color: var(--primary);
  border: 1px solid rgba(14, 165, 233, 0.3);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  box-shadow: 0 0 10px rgba(14, 165, 233, 0.2);
  position: relative;
  z-index: 1;
}

.form-hero h1 {
  margin: 0 0 0.75rem;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--text) !important;
  position: relative;
  z-index: 1;
}

.form-hero p {
  margin: 0;
  max-width: 620px;
  color: var(--text-soft) !important;
  position: relative;
  z-index: 1;
}`;
content = content.replace(old_form_shell, new_form_shell);

// form-section
const old_form_section = `.form-section {
  margin-bottom: 2rem;
  padding: 1.6rem;
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  background: #f9fafb;
}

.form-section h2 {
  margin: 0 0 1.25rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text);
}`;
const new_form_section = `.form-section {
  margin-bottom: 2rem;
  padding: 1.6rem;
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  background: var(--surface-soft);
}

.form-section h2 {
  margin: 0 0 1.25rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text);
}`;
content = content.replace(old_form_section, new_form_section);

// form-group label
const old_form_group = `.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #374151;
  font-size: 0.92rem;
  font-weight: 600;
}

.form-input {
  width: 100%;
  padding: 0.95rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: #ffffff;
  color: var(--text);
  font-size: 0.96rem;
  outline: none;
}

.form-input::placeholder {
  color: #9ca3af;
}`;
const new_form_group = `.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-soft);
  font-size: 0.92rem;
  font-weight: 600;
}

.form-input {
  width: 100%;
  padding: 0.95rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 0.96rem;
  outline: none;
  transition: all 0.3s ease;
}

.form-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 10px rgba(14, 165, 233, 0.2);
}

.form-input::placeholder {
  color: var(--text-muted);
}`;
content = content.replace(old_form_group, new_form_group);

// site-footer
const old_footer = `.site-footer,
footer {
  margin-top: 4rem;
  padding: 2.25rem 1rem;
  background: #1f2937;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 2rem;
  text-align: left;
  margin-bottom: 2rem;
}

.site-footer h3,
.site-footer h4 {
  color: #ffffff !important;
  margin-bottom: 1rem;
}

.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.site-footer li {
  margin-bottom: 0.75rem;
  color: #d1d5db;
}

.site-footer li i {
  width: 18px;
  margin-right: 0.45rem;
}

.site-footer p,
.site-footer a {
  color: #d1d5db !important;
}

.footer-bottom {
  padding-top: 1.1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
}`;
const new_footer = `.site-footer,
footer {
  margin-top: 4rem;
  padding: 2.25rem 1rem;
  background: var(--surface);
  border-top: 1px solid var(--border);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 2rem;
  text-align: left;
  margin-bottom: 2rem;
}

.site-footer h3,
.site-footer h4 {
  color: var(--text) !important;
  margin-bottom: 1rem;
}

.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.site-footer li {
  margin-bottom: 0.75rem;
  color: var(--text-soft);
}

.site-footer li i {
  width: 18px;
  margin-right: 0.45rem;
  color: var(--primary);
}

.site-footer p,
.site-footer a {
  color: var(--text-soft) !important;
  transition: color 0.2s;
}

.site-footer a:hover {
  color: var(--primary) !important;
  text-shadow: 0 0 8px rgba(14, 165, 233, 0.4);
}

.footer-bottom {
  padding-top: 1.1rem;
  border-top: 1px solid var(--border);
  text-align: center;
  color: var(--text-muted);
}`;
content = content.replace(old_footer, new_footer);

// error page
const old_error = `.error-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  background: #f3f4f6;
}

.error-wrap {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
}

.error-card {
  padding: 3rem 2rem;
  text-align: center;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-md);
}

.error-glow {
  display: none;
}

.error-icon-wrap {
  margin-bottom: 1.4rem;
}

.error-icon-spin {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 2.5rem;
  background: var(--danger);
  border: 2px solid #ef4444;
}

.error-icon-spin i {
  filter: none;
}

.error-badge {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.45rem 0.85rem;
  border-radius: var(--radius-pill);
  background: #fee2e2;
  border: 1px solid #fecaca;
  color: var(--danger-dark);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.error-title {
  margin: 0 0 1rem;
  color: var(--text) !important;
  font-size: clamp(2.1rem, 5vw, 3.4rem);
  font-weight: 700;
}

.error-text {
  max-width: 620px;
  margin: 0 auto 2rem;
  color: var(--text-soft) !important;
  font-size: 1rem;
  line-height: 1.7;
}

.error-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.error-btn-primary {
  background: var(--danger) !important;
  color: #ffffff !important;
}

.error-btn-secondary {
  background: #e5e7eb !important;
  color: #111827 !important;
  border: 1px solid #d1d5db;
}`;

const new_error = `.error-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  background: var(--bg);
}

.error-wrap {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
}

.error-card {
  padding: 3rem 2rem;
  text-align: center;
  border-radius: 20px;
  background: var(--surface);
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.error-glow {
  display: block;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%);
  z-index: 0;
}

.error-icon-wrap, .error-title, .error-text, .error-actions {
  position: relative;
  z-index: 1;
}

.error-icon-spin {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--danger);
  font-size: 2.5rem;
  background: rgba(239, 68, 68, 0.1);
  border: 2px solid var(--danger);
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
}

.error-icon-spin i {
  filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.6));
}

.error-badge {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.45rem 0.85rem;
  border-radius: var(--radius-pill);
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: var(--danger);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  box-shadow: 0 0 10px rgba(239, 68, 68, 0.2);
}

.error-title {
  margin: 0 0 1rem;
  color: var(--text) !important;
  font-size: clamp(2.1rem, 5vw, 3.4rem);
  font-weight: 700;
}

.error-text {
  max-width: 620px;
  margin: 0 auto 2rem;
  color: var(--text-soft) !important;
  font-size: 1rem;
  line-height: 1.7;
}

.error-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.error-btn-primary {
  background: var(--danger) !important;
  color: #ffffff !important;
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.4);
}

.error-btn-secondary {
  background: var(--surface-soft) !important;
  color: var(--text) !important;
  border: 1px solid var(--border);
}`;
content = content.replace(old_error, new_error);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('done');
