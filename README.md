# UAS website

Pages: `index.html` (home + globe), `chi-siamo.html` (about + Comitato Direttivo), `progetti.html` (communities abroad, presentations, CIUP), `novita.html`, `sponsor.html`, `partecipa.html`.
Shared code: `assets/style.css`, `assets/app.js`.

## Where to edit
- **Social and sponsor links:** top of `assets/app.js` (`SOCIAL`, `SPONSOR_URL`). Empty social links stay hidden.
- **Comitato Direttivo:** `assets/team.json`, one entry per person; put photos in `assets/` (e.g. `assets/team/nome.jpg`):
  `{"name":"Nome Cognome","role":{"it":"Presidente","en":"President"},"photo":"assets/team/nome.jpg","links":{"linkedin":"https://www.linkedin.com/in/..."}}`
- **Presentations:** `assets/presentations.json`: `{"title":{"it":"...","en":"..."},"date":"2026-05-14","place":"San Marino","file":"assets/nome.pdf"}` (or `"link":"https://..."`).
- **Communities abroad / CIUP call:** `assets/community.json`, `assets/ciup.json`: `{"title":{"it":"..."},"text":{"it":"..."},"date":"2026-05-14","link":"https://..."}`.
- **Sponsors:** `assets/sponsors.json`: `{"name":"Azienda","logo":"assets/sponsors/azienda.png","url":"https://..."}`. Empty tiles say "Il tuo logo qui" and link to `SPONSOR_URL`.
- **Several cities for one member:** in `members.json` add `"places":[{"city":"Grenoble","lat":45.19,"lon":5.72,"continent":"europe"},{"city":"Tokyo","lat":35.68,"lon":139.69,"continent":"asia"}]`.
- Empty `[]` lists show "Contenuti in arrivo".

Address: https://unioneaccademicasammarinese.github.io/Web/
