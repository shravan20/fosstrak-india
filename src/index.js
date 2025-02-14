const HTML_TEMPLATE = (events, showForm = false, error = null, formData = {}) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="../public/ft_logo.png">
  <title>FOSSTrak India - FOSS Events</title>
  <style>
    :root {
      --primary: #2c3e50;
      --secondary: #3498db;
      --light: #ecf0f1;
      --dark: #2c3e50;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      background: var(--light);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .header {
      background: var(--primary);
      color: white;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .nav {
      display: flex;
      gap: 1rem;
      justify-content: center;
      padding: 1rem;
      background: var(--dark);
      flex-wrap: wrap;
    }
    .nav a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background 0.3s;
    }
    .nav a:hover {
      background: var(--secondary);
    }
    .events-container {
      padding: 1rem;
      max-width: 1200px;
      margin: 0 auto;
      flex-grow: 1;
    }
    .event-card {
      background: white;
      border-radius: 8px;
      margin: 1rem 0;
      padding: 1.5rem;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .event-date {
      color: var(--secondary);
      font-weight: bold;
    }
    .event-location {
      color: #7f8c8d;
      font-size: 0.9rem;
      margin: 0.5rem 0;
    }
    .event-tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-top: 1rem;
    }
    .tag {
      background: var(--light);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
    }
    .footer {
      background: var(--dark);
      color: white;
      text-align: center;
      padding: 1rem;
      position: sticky;
      top: 100vh;
      margin-top: auto;
    }
    /* Event form styles */
    .event-form {
      max-width: 800px;
      margin: 2rem auto;
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      font-weight: 600;
      margin-bottom: 0.3rem;
    }
    input, select, textarea {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #bdc3c7;
      border-radius: 4px;
    }
    button {
      background: var(--secondary);
      color: white;
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: opacity 0.3s;
    }
    button:hover {
      opacity: 0.9;
    }
    fieldset {
      border: 1px solid #bdc3c7;
      border-radius: 4px;
      padding: 1rem;
      margin-bottom: 1.5rem;
    }
    legend {
      font-weight: bold;
      padding: 0 0.5rem;
    }
    .checkbox-group {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
    .checkbox-group label {
      display: flex;
      align-items: center;
      font-weight: normal;
    }
    @media (max-width: 768px) {
      .events-container {
        grid-template-columns: 1fr;
      }
      .event-form {
        padding: 1rem;
        margin: 1rem;
      }
    }
    /* Filters styles (unchanged) */
    .filters {
      max-width: 1200px;
      margin: 1rem auto 0;
      padding: 1rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .filter-group {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .filter-item {
      flex: 1;
      min-width: 200px;
    }
    .filter-item label {
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
      display: block;
      color: #7f8c8d;
    }
    .date-range {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    .date-range span {
      color: #7f8c8d;
    }
    select, input[type="date"] {
      padding: 0.5rem;
      font-size: 0.9rem;
      border: 1px solid #bdc3c7;
      border-radius: 4px;
      width: 100%;
    }
    .empty-state {
      text-align: center;
      padding: 4rem 2rem;
      color: #7f8c8d;
    }
    .empty-illustration {
      max-width: 300px;
      margin: 0 auto 2rem;
      opacity: 0.8;
    }
    .empty-state h2 {
      color: var(--primary);
      margin-bottom: 1rem;
    }
    .empty-state .cta {
      margin-top: 2.5rem;
      display: flex;
      justify-content: center;
    }
    .empty-state .cta-btn {
      background: var(--secondary);
      color: white;
      padding: 1rem 2rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11);
    }
    .empty-state .cta-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1);
      background: #2a80b9;
    }
    .empty-state svg {
      width: 100%;
      height: auto;
    }
    .empty-state .cta-btn::after {
      content: '➔';
      transition: transform 0.3s ease;
    }
    .empty-state .cta-btn:hover::after {
      transform: translateX(3px);
    }
  </style>
</head>
<body class="container">
  <header class="header">
    <h1>FOSSTrak India</h1>
    <p>Open Source Events in India</p>
  </header>
  <nav class="nav">
    <a href="/" class="nav-link">Upcoming</a>
    <a href="/#past" class="nav-link">Past Events</a>
    <a href="/submit" class="nav-link">Submit Event</a>
  </nav>

  ${showForm ? `
  <div class="event-form">
    <h2>Submit New Event</h2>
    ${error ? `<div class="error-message">${error}</div>` : ''}
    <form id="submitForm" method="POST" enctype="multipart/form-data">
      <fieldset>
        <legend>Mandatory Data</legend>
        <div class="form-group">
          <label for="commonName">Common Name:</label>
          <input type="text" id="commonName" name="commonName" maxlength="40" placeholder="e.g. OhMyFOSS" required>
        </div>
        <div class="form-group">
          <label for="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" maxlength="80" placeholder="e.g. Oh My Free and Open Source Software" required>
        </div>
        <div class="form-group">
          <label for="homepage">Homepage (Event Website):</label>
          <input type="url" id="homepage" name="homepage" placeholder="e.g. https://fosdem.org/2023/" required>
        </div>
        <div class="form-group">
          <label for="startDate">Start Date:</label>
          <input type="date" id="startDate" name="startDate" required>
        </div>
        <div class="form-group">
          <label for="endDate">End Date:</label>
          <input type="date" id="endDate" name="endDate" required>
        </div>
        <div class="form-group">
          <label for="selfDescription">Self-Description (Markdown supported):</label>
          <textarea id="selfDescription" name="selfDescription" rows="10" required></textarea>
        </div>
        <div class="form-group">
          <label for="presentationForm">Presentation Form:</label>
          <select id="presentationForm" name="presentationForm" required>
            <option value="">Select</option>
            <option value="online">online</option>
            <option value="physical">physical</option>
            <option value="hybrid">hybrid</option>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Optional Information</legend>
        <div class="form-group">
          <label for="city">City (Location):</label>
          <input type="text" id="city" name="city" placeholder="e.g. Bangalore">
        </div>
        <div class="form-group">
          <label for="state">State:</label>
          <select id="state" name="state">
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Delhi">Delhi</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          </select>
        </div>
        <div class="form-group">
          <label for="venue">Venue:</label>
          <input type="text" id="venue" name="venue" placeholder="e.g. Bagmane Tech Park">
        </div>
        <div class="form-group">
          <label for="osmLink">OSM-Link:</label>
          <input type="url" id="osmLink" name="osmLink" placeholder="OSM map link example">
        </div>
        <div class="form-group">
          <label for="latitude">Latitude (lan):</label>
          <input type="number" id="latitude" name="latitude" step="any" placeholder="50.81295">
        </div>
        <div class="form-group">
          <label for="longitude">Longitude (lon):</label>
          <input type="number" id="longitude" name="longitude" step="any" placeholder="4.38002">
        </div>
      </fieldset>

      <fieldset>
        <legend>Other Important Data</legend>
        <div class="form-group">
          <label for="cfpLink">Call for Participation Link:</label>
          <input type="url" id="cfpLink" name="cfpLink">
        </div>
        <div class="form-group">
          <label for="cfpDeadline">CfP Deadline:</label>
          <input type="date" id="cfpDeadline" name="cfpDeadline">
        </div>
        <div class="form-group">
          <label for="participationFee">Standard Participation Fee (Rs):</label>
          <input type="number" id="participationFee" name="participationFee" placeholder="fee in Rs">
        </div>
        <div class="form-group">
          <label for="registrationLink">Registration Link:</label>
          <input type="url" id="registrationLink" name="registrationLink">
        </div>
        <div class="form-group">
          <label for="codeOfConduct">Code of Conduct Link:</label>
          <input type="url" id="codeOfConduct" name="codeOfConduct">
        </div>
        <div class="form-group">
          <label for="mainOrganiser">Main Organiser:</label>
          <input type="text" id="mainOrganiser" name="mainOrganiser" placeholder="e.g. FOSSIE Team">
        </div>
      </fieldset>

      <fieldset>
        <legend>Additional Optional Information</legend>
        <div class="form-group">
          <label for="officialHashtags">Official Hashtag(s):</label>
          <input type="text" id="officialHashtags" name="officialHashtags" maxlength="80">
        </div>
        <div class="form-group">
          <label for="pictureBanner">Picture/Banner:</label>
          <input type="file" id="pictureBanner" name="pictureBanner" accept="image/*">
        </div>
        <div class="form-group">
          <label>Type:</label>
          <div class="checkbox-group">
            <label><input type="checkbox" name="eventTypes" value="Community Event"> Community Event</label>
            <label><input type="checkbox" name="eventTypes" value="Hackathon"> Hackathon</label>
            <label><input type="checkbox" name="eventTypes" value="Technical Fest"> Technical Fest</label>
            <label><input type="checkbox" name="eventTypes" value="Business Event"> Business Event</label>
            <label><input type="checkbox" name="eventTypes" value="Workshops & Training Sessions"> Workshops & Training Sessions</label>
            <label><input type="checkbox" name="eventTypes" value="Expos & Showcases"> Expos & Showcases</label>
            <label><input type="checkbox" name="eventTypes" value="Conferences"> Conferences</label>
            <label><input type="checkbox" name="eventTypes" value="Monthly Meetups"> Monthly Meetups</label>
          </div>
        </div>
        <div class="form-group">
          <label for="tags">Tags:</label>
          <textarea id="tags" name="tags" rows="10"></textarea>
        </div>
        <div class="form-group">
          <label for="mainSponsor">Main Sponsor:</label>
          <textarea id="mainSponsor" name="mainSponsor" rows="10"></textarea>
        </div>
        <div class="social-accounts">
          <h3>Social Accounts</h3>
          <div class="form-group">
            <label for="mastodon">Mastodon Link:</label>
            <input type="url" id="mastodon" name="mastodon" placeholder="Mastodon URL example">
          </div>
          <div class="form-group">
            <label for="matrix">Matrix:</label>
            <input type="text" id="matrix" name="matrix">
          </div>
          <div class="form-group">
            <label for="mailinglist">Mailinglist Link:</label>
            <input type="url" id="mailinglist" name="mailinglist">
          </div>
          <div class="form-group">
            <label for="instagram">Instagram:</label>
            <input type="url" id="instagram" name="instagram">
          </div>
          <div class="form-group">
            <label for="github">Github:</label>
            <input type="url" id="github" name="github">
          </div>
          <div class="form-group">
            <label for="discourse">Discourse:</label>
            <input type="url" id="discourse" name="discourse">
          </div>
          <div class="form-group">
            <label for="contactEmail">Contact Email:</label>
            <input type="email" id="contactEmail" name="contactEmail">
          </div>
        </div>
      </fieldset>

      <button type="submit" class="submit-btn">Submit Event</button>
    </form>
  </div>
  ` : `
  <div class="filters">
    <div class="filter-group">
      <div class="filter-item">
        <label>State</label>
        <select id="stateFilter">
          <option value="">All States</option>
          ${events.length ? [...new Set(events.flatMap(event => {
	const parts = event.location.split(', ');
	return parts.length > 1 ? [parts[1].trim()] : [];
}))].map(state => `<option value="${state}">${state}</option>`).join('') : ''}
        </select>
      </div>
      <div class="filter-item">
        <label>Type</label>
        <select id="typeFilter">
          <option value="">All Types</option>
          ${events.length ? [...new Set(events.map(event => event.type))].map(type => `<option value="${type}">${type}</option>`).join('') : ''}
        </select>
      </div>
      <div class="filter-item">
        <label>Date Range</label>
        <div class="date-range">
          <input type="date" id="startDate" placeholder="Start">
          <span>to</span>
          <input type="date" id="endDate" placeholder="End">
        </div>
      </div>
    </div>
  </div>
  <div class="events-container" id="eventsList">
    ${events.length > 0 ? events.map(event => `
      <div class="event-card" data-date="${event.date}" data-state="${event.location.split(', ').pop()}" data-type="${event.type}">
        <div class="event-date">${new Date(event.date).toLocaleDateString('en-IN')}</div>
        <h2>${event.name}</h2>
        <div class="event-location">${event.location}</div>
        <p>${event.description}</p>
        <div class="event-tags">
          <span class="tag">${event.type}</span>
          ${event.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    `).join('') : `
      <div class="empty-state">
        <div class="empty-illustration">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#f3f4f6"/>
            <path d="M32 40a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 3 0v6A1.5 1.5 0 0 1 32 40zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#9ca3af"/>
            <path d="M44.5 49h-25a2 2 0 0 1-2-2V23a2 2 0 0 1 2-2h25a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2zm-25-26v24h25V23h-25z" fill="#9ca3af"/>
            <path d="M41.5 34.5h-5a1.5 1.5 0 0 1 0-3h5a1.5 1.5 0 0 1 0 3zm0 4h-5a1.5 1.5 0 0 1 0-3h5a1.5 1.5 0 0 1 0 3zm-14-10h-5a1.5 1.5 0 0 1 0-3h5a1.5 1.5 0 0 1 0 3zm0 4h-5a1.5 1.5 0 0 1 0-3h5a1.5 1.5 0 0 1 0 3z" fill="#9ca3af"/>
          </svg>
        </div>
        <h2>No Events Found</h2>
        <p>Be the first to add an open source event!</p>
        <div class="cta">
          <a href="/submit" class="cta-btn">Submit Your Event</a>
        </div>
      </div>
    `}
  </div>
  `}
  <footer class="footer">
    <p>FOSSTrak India - Part of the global FOSS movement</p>
    <p>Powered by Open Source & Cloudflare Workers</p>
  </footer>
  <script>
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('/')) return;
        e.preventDefault();
        window.history.pushState({}, '', href);
        filterEvents();
      });
    });
    function filterEvents() {
      const hash = window.location.hash.substring(1);
      const today = new Date().toISOString().split('T')[0];
      document.querySelectorAll('.event-card').forEach(card => {
        const eventDate = card.dataset.date;
        const isPast = eventDate < today;
        const stateMatch = !document.getElementById('stateFilter').value ||
                           card.dataset.state === document.getElementById('stateFilter').value;
        const typeMatch = !document.getElementById('typeFilter').value ||
                          card.dataset.type === document.getElementById('typeFilter').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const dateInRange = (!startDate || eventDate >= startDate) &&
                            (!endDate || eventDate <= endDate);
        const shouldShow = dateInRange && stateMatch && typeMatch && (
          (hash === 'past' && isPast) ||
          (hash === 'upcoming' && !isPast) ||
          (!hash && !isPast)
        );
        card.style.display = shouldShow ? 'block' : 'none';
      });
    }
    document.getElementById('stateFilter').addEventListener('change', filterEvents);
    document.getElementById('typeFilter').addEventListener('change', filterEvents);
    document.getElementById('startDate').addEventListener('change', filterEvents);
    document.getElementById('endDate').addEventListener('change', filterEvents);
    window.addEventListener('hashchange', filterEvents);
    filterEvents();
  </script>
</body>
</html>`;

export default {
	async fetch(request, env, ctx) {

		const getEvents = async (env) => {
			// Get events from KV storage
			const storedEvents = await env.EVENTS.get('events', 'json');
			return storedEvents || [];
		};

		const url = new URL(request.url);
		const path = url.pathname;

		// Load events from KV
		let events = await getEvents(env);

		// Handle form submission
		if (request.method === 'POST' && path === '/submit') {
			const formData = await request.formData();
			const newEvent = {
				id: Date.now(),
				commonName: formData.get('commonName')?.trim(),
				fullName: formData.get('fullName')?.trim(),
				homepage: formData.get('homepage'),
				startDate: formData.get('startDate'),
				endDate: formData.get('endDate'),
				selfDescription: formData.get('selfDescription')?.trim(),
				presentationForm: formData.get('presentationForm'),
				city: formData.get('city')?.trim(),
				state: formData.get('state'),
				venue: formData.get('venue')?.trim(),
				osmLink: formData.get('osmLink'),
				latitude: formData.get('latitude'),
				longitude: formData.get('longitude'),
				cfpLink: formData.get('cfpLink'),
				cfpDeadline: formData.get('cfpDeadline'),
				participationFee: formData.get('participationFee'),
				registrationLink: formData.get('registrationLink'),
				codeOfConduct: formData.get('codeOfConduct'),
				mainOrganiser: formData.get('mainOrganiser')?.trim(),
				officialHashtags: formData.get('officialHashtags')?.trim(),
				eventTypes: formData.getAll('eventTypes'),
				tags: formData.get('tags'),
				mainSponsor: formData.get('mainSponsor'),
				mastodon: formData.get('mastodon'),
				matrix: formData.get('matrix'),
				mailinglist: formData.get('mailinglist'),
				instagram: formData.get('instagram'),
				github: formData.get('github'),
				discourse: formData.get('discourse'),
				contactEmail: formData.get('contactEmail'),
			};

			// Check for duplicates
			const isDuplicate = events.some(event =>
				event.commonName.toLowerCase() === newEvent.commonName.toLowerCase() &&
				event.startDate === newEvent.startDate
			);

			if (isDuplicate) {
				return new Response(HTML_TEMPLATE([], true, 'Event with this name and date already exists!', newEvent), {
					headers: { 'Content-Type': 'text/html' }
				});
			}

			events.push(newEvent);
			await env.EVENTS.put('events', JSON.stringify(events));
			return Response.redirect(url.origin, 303);
		}

		// Show submit form
		if (path === '/submit') {
			return new Response(HTML_TEMPLATE([], true), {
				headers: { 'Content-Type': 'text/html' }
			});
		}

		// Sort events (if applicable) and render
		const sortedEvents = events.sort((a, b) => a.date.localeCompare(b.date));

		return new Response(HTML_TEMPLATE(sortedEvents), {
			headers: { 'Content-Type': 'text/html' }
		});
	},
};
