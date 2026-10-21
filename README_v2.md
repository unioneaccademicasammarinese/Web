# UAS website v2 – data files (all in `assets/`, edit on GitHub with the pencil icon)
Rename `index_v2.html` to `index.html` when going live. Each section appears only when its file has items.
- `news.json`: {date, title{it,en}, text{it,en}, link}
- `events.json`: {date YYYY-MM-DD, label{it,en} (optional text shown instead of the date), title{it,en}}
- `docs.json`: {title{it,en}, file "assets/name.pdf", type "PDF"}  (add the statute and rules here)
- `team.json`: {name, role{it,en}, org, photo "assets/name.jpg", links{linkedin:"https://…", scholar:"https://…"}}
- `members.json`: {name, field, org, country}. Only list people who gave written consent.
- `partners.json`: {name, url, logo "assets/logo-x.png" (optional)}
- Top banner: change `BANNER` (true/false) and the `xbn` texts in the script.
Keep valid JSON: commas between items, double quotes everywhere.

## Globe / "Get on the Map"
- `members.json` drives the globe: {name (first name + surname), city, continent, lat, lon, role{it,en} (optional, UAS board role such as Presidente/President, shown with a larger dot)}.
  `continent` is one of: europe, asia, africa, north-america, south-america, oceania.
  Find lat/lon on Google Maps (right-click a city, click the numbers to copy). City-level only, never a home address.
- `members.json` now holds the UAS soci from the spreadsheet (board members have a `role`). Dots on the same place are grouped (hover/click shows everyone there).
- The globe shows only `categoria` "Socio" (line `GLOBE_CATS` in `index_v2.html`). Sostenitori are NOT in `members.json` because the file is public once on GitHub: keep them in your private list.
- A person asking to appear sends the form (city + "map" consent arrive in your message); you then add them to `members.json` by hand. Add only people who gave consent, and remove them on request.

## Contact button (privacy relay)
- Click a dot (or the "Contact" button in the list): a visitor writes a reason and message. It arrives in the UAS Gmail with subject "Messaggio per <Name> (UAS)" and the visitor's email as reply-to; the visitor gets an automatic confirmation.
- You forward it to the member, who decides whether to reply. Member emails are never in `members.json` or anywhere on the site: keep them in your private records.
- Spam: a hidden honeypot field is included; if the inbox gets flooded, say so and we add a stronger check.

## v3 globe
- Dashed arcs link every member to San Marino (the hub, with a pulsing ring); soft atmosphere glow and a latitude/longitude grid; drag now has inertia.

## Going live (GitHub Pages)
Repository name must be `unioneaccademicasammarinese.github.io` → site at https://unioneaccademicasammarinese.github.io (Settings → Pages → Deploy from branch → main / root).
