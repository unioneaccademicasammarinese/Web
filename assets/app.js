
var SOCIAL={eurodoc:"https://eurodoc.net",instagram:"",linkedin:""}; // paste the full profile URLs here, e.g. "https://www.instagram.com/yourprofile/"; empty ones stay hidden
var SPONSOR_URL="mailto:unioneaccademicasammarinese@gmail.com?subject=Sponsorizzazione%20UAS"; // or a link to a donation / sponsorship page
var ENDPOINT="https://formsubmit.co/ajax/unioneaccademicasammarinese@gmail.com";
var T={
it:{nh:"Home",pj:"Progetti",sp:"Sponsor",pjh:"Progetti",pjl:"Le iniziative di UAS, in un solo posto.",cmh:"Comunità all’estero",cmp:"Iniziative con i sammarinesi nel mondo: incontri, censimento e opportunità.",prh:"Presentazioni",prp:"Le presentazioni di UAS, da consultare e condividere.",cih:"Bando CIUP",cip:"Qui pubblicheremo tutte le informazioni sul bando CIUP.",emt:"Contenuti in arrivo.",sph:"Sponsor",spl:"Chi sostiene la ricerca sammarinese.",sph2:"Diventa sponsor",spp:"Sostieni UAS e dai visibilità al tuo marchio tra i ricercatori e gli accademici di San Marino e del mondo. Scrivici per conoscere le formule di sponsorizzazione.",spc:"Scrivici per sponsorizzare",sph3:"Il tuo logo qui",xtm:"Il Comitato Direttivo sarà presentato a breve.",q1t:"Chi siamo",q1p:"Associazione senza fini di lucro dei ricercatori e degli accademici di San Marino. Membro di Eurodoc.",q2t:"Cosa facciamo",q2p:"Rappresentanza, rete europea, supporto a chi studia fuori e al rientro dei talenti.",q3t:"Come connetterti",q3p:"Compila il modulo o scrivici: ti rispondiamo con le informazioni sull’adesione.",more:"Scopri di più →",nvh:"Novità e documenti",xml:"Elenco dei soci",skip:"Vai al contenuto",n1:"Chi siamo",n2:"Percorso",n3:"Unisciti",n4:"Contatti",n5:"All’estero",n6:"News",nt:"Ultime notizie.",nm:"Leggi di più",n7:"Team",n8:"FAQ",xev:"Prossimi eventi",xall:"Tutti",xdh:"Documenti",xdt:"Statuto, moduli e materiali.",xth:"Chi guida UAS",xtt:"Comitato Direttivo",xmh:"Comunità",xmt:"Ricercatori e accademici sammarinesi. Compaiono solo i membri che hanno dato il consenso.",xph:"In collaborazione con",
xs_eurodoc:"Visita la community Eurodoc",xs_instagram:"Seguici su Instagram",xs_linkedin:"Seguici su LinkedIn",
xbn:"Prossimo appuntamento: hackathon con istituzioni europee, marzo 2027 →",
xwh:"Perché UAS",xwt:"San Marino è piccola e fuori dalla cittadinanza europea: molte opportunità di studio e ricerca si perdono e le competenze dei sammarinesi restano poco visibili. UAS nasce per cambiare questo.",xpr:"Il problema",xan:"La risposta di UAS",
xp1:"Ammissioni e fondi di ricerca più complicati",xa1:"Informazione e supporto a chi vuole studiare fuori",xp2:"Opportunità che arrivano tardi o non arrivano",xa2:"Una rete europea tramite Eurodoc",xp3:"Competenze sparse e poco visibili",xa3:"Censimento e coordinamento del rientro",
xsh:"Come aderire",xst:"Tre passi.",xs1t:"Compila il modulo",xs1p:"Scegli il tuo ruolo e invia la richiesta.",xs2t:"Ti rispondiamo",xs2p:"Ricevi una email con le informazioni sull’adesione.",xs3t:"Entri nella rete",xs3p:"Partecipi alle attività e ricevi gli aggiornamenti.",
xfh:"Domande frequenti",xq1:"Chi può aderire?",xr1:"UAS rappresenta i ricercatori e gli accademici di San Marino e a San Marino, in territorio e all’estero. Se non sei sicuro di rientrare, scrivici.",
xq2:"Che differenza c’è tra socio, sostenitore e Giovane UAS?",xr2:"Diritti e doveri di ogni ruolo sono definiti dallo statuto e dal regolamento. Scrivici per i dettagli.",
xq3:"L’adesione è gratuita?",xr3:"Le condizioni di adesione sono indicate nello statuto e nel regolamento. Per dubbi, scrivici.",
xq4:"Vivo all’estero: posso partecipare?",xr4:"Sì. UAS vuole censire e coinvolgere i sammarinesi che studiano o lavorano nella ricerca all’estero, compresi quelli nati e cresciuti fuori da San Marino.",
xq5:"Come usate i miei dati?",xr5:"Solo per gestire la richiesta e le comunicazioni dell’associazione, ai sensi della normativa sammarinese. Compari in elenchi pubblici solo con il tuo consenso.",
xq6:"Come vi contatto?",xr6:"Scrivi a unioneaccademicasammarinese@gmail.com.",
xmt2:"La nostra rete nel mondo.",xbt:"Versione di prova",xtn:"membri accesi sulla mappa",xgm:"Entra nella mappa",xem:"Nessun punto acceso per ora: sarai il primo?",xga:"Globo con i membri UAS nel mondo",xct:"Città e paese (anche più di una, separate da virgola)",xc_europe:"Europa",xc_asia:"Asia",xc_africa:"Africa",xc_north_america:"Nord America",xc_south_america:"Sud America",xc_oceania:"Oceania",
xmp:"Voglio comparire sulla mappa pubblica con nome, cognome e città. I messaggi dei visitatori mi arrivano tramite UAS: la mia email resta privata.",xcb:"Contatta",xcm:"Scrivi il motivo del contatto. UAS inoltra il messaggio alla persona, che decide se risponderti. La sua email non viene mai mostrata.",xcnm:"Il tuo nome",xcem:"La tua email",xcms:"Motivo del contatto e messaggio",xcck:"Acconsento che UAS inoltri il mio messaggio e la mia email alla persona contattata.",xcsd:"Invia messaggio",xcc:"Annulla",xra:"Collaborazione di ricerca",xrb:"Informazioni sull’associazione",xrc:"Opportunità di studio o lavoro",xrd:"Altro",xcok:"Messaggio inviato. UAS lo inoltra alla persona: controlla la tua email per la conferma.",xhi:"Clicca un punto sul globo per contattare la persona tramite UAS.",
xlg:"Associazione senza fini di lucro · Costituita il 29/12/2025 · Statuto depositato il 01/01/2026 · Membro di Eurodoc dal 28/06/2026",eb:"Associazione senza fini di lucro · San Marino",
h1:"La rete dei ricercatori sammarinesi nel mondo.",
lead:"Connettiamo ricercatori e accademici di San Marino, in patria e all’estero. Entra nella rete e accendi il tuo punto sul globo.",
cta1:"Entra nella rete",cta2:"Chi siamo",ah:"Valorizzare il potenziale della nostra comunità accademica.",
c1t:"Rappresentanza",c1p:"Una voce unica per ricercatori e accademici sammarinesi.",
c2t:"Rete europea",c2p:"Membri di Eurodoc, la federazione europea dei giovani ricercatori.",
c3t:"Rientro e competenze",c3p:"Censire le specializzazioni e favorire il rientro di chi si è formato all’estero.",
c4t:"Supporto agli studenti",c4p:"Orientamento e opportunità per chi sceglie l’istruzione superiore.",
ph:"Un anno di attività.",pp:"Dalla presentazione alla Consulta dei cittadini sammarinesi all’estero a oggi.",pt:"Partner in arrivo",
t1:"Fondazione ufficiale",t2:"Deposito dello statuto",t3:"Incontro con le scuole superiori",t4:"Ingresso in Eurodoc",t5d:"Marzo 2027",t5:"Hackathon con istituzioni europee",
gh:"Immagini",gt:"UAS in azione.",
abh:"Sei sammarinese e studi o lavori nella ricerca all’estero?",abp:"Vogliamo censire le esperienze della comunità sammarinese nel mondo, comprese quelle di chi è nato e cresciuto fuori da San Marino.",abc:"Fatti censire",
jh:"Una sola richiesta per entrare nella rete.",jp:"Compila il modulo: ti risponderemo con le informazioni sull’adesione. Preferisci la carta? Scarica il modulo.",dl:"Scarica il modulo di adesione",
fn:"Nome e cognome",fe:"Email",fm:"Messaggio (facoltativo)",r1:"Socia/Socio",r2:"Sostenitrice/Sostenitore",r3:"Sammarinese all’estero (censimento)",r4:"Giovane UAS",nl:"Desidero ricevere gli aggiornamenti via email",
ok:"Ho preso visione di statuto e regolamento e acconsento al trattamento dei miei dati ai soli fini associativi.",send:"Invia richiesta",
sending:"Invio in corso…",done:"Grazie! Richiesta inviata: controlla la tua email.",err:"Invio non riuscito. Scrivici a unioneaccademicasammarinese@gmail.com.",inv:"Compila nome, email corretta e consenso.",copied:"Copiato",
pv:"Privacy",pvt:"I dati inseriti nel modulo sono usati solo per gestire la richiesta di adesione e le comunicazioni dell’associazione, ai sensi della normativa sammarinese. Il sito non usa cookie di profilazione."},
en:{nh:"Home",pj:"Projects",sp:"Sponsors",pjh:"Projects",pjl:"UAS initiatives, in one place.",cmh:"Communities abroad",cmp:"Initiatives with Sammarinese around the world: meetings, mapping and opportunities.",prh:"Presentations",prp:"UAS presentations to browse and share.",cih:"CIUP call",cip:"We will publish all the information about the CIUP call here.",emt:"Coming soon.",sph:"Sponsors",spl:"Who supports Sammarinese research.",sph2:"Become a sponsor",spp:"Support UAS and give your brand visibility among the researchers and academics of San Marino and worldwide. Write to us to learn about the sponsorship options.",spc:"Write to us to sponsor",sph3:"Your logo here",xtm:"The Executive Committee will be introduced soon.",q1t:"Who we are",q1p:"Non-profit association of the researchers and academics of San Marino. Member of Eurodoc.",q2t:"What we do",q2p:"Representation, a European network, support for those studying abroad and for returning talent.",q3t:"How to connect",q3p:"Fill in the form or write to us: we reply with membership information.",more:"Learn more →",nvh:"News and documents",xml:"Members list",skip:"Skip to content",n1:"About",n2:"Journey",n3:"Join",n4:"Contact",n5:"Abroad",n6:"News",nt:"Latest news.",nm:"Read more",n7:"Team",n8:"FAQ",xev:"Upcoming events",xall:"All",xdh:"Documents",xdt:"Statute, forms and materials.",xth:"Who leads UAS",xtt:"Executive Committee",xmh:"Community",xmt:"Sammarinese researchers and academics. Only members who gave consent are listed.",xph:"In collaboration with",
xs_eurodoc:"Visit the Eurodoc community",xs_instagram:"Follow us on Instagram",xs_linkedin:"Follow us on LinkedIn",
xbn:"Next: hackathon with European institutions, March 2027 →",
xwh:"Why UAS",xwt:"San Marino is small and outside European citizenship: many study and research opportunities are missed and Sammarinese expertise stays hard to see. UAS was founded to change that.",xpr:"The problem",xan:"UAS’s answer",
xp1:"Harder admissions and research funding",xa1:"Information and support for those who want to study abroad",xp2:"Opportunities that arrive late or never",xa2:"A European network through Eurodoc",xp3:"Scattered, hard-to-see expertise",xa3:"Mapping skills and coordinating the return",
xsh:"How to join",xst:"Three steps.",xs1t:"Fill in the form",xs1p:"Choose your role and send the request.",xs2t:"We reply",xs2p:"You receive an email with membership information.",xs3t:"You join the network",xs3p:"You take part in activities and receive updates.",
xfh:"Frequently asked questions",xq1:"Who can join?",xr1:"UAS represents the researchers and academics of San Marino and in San Marino, at home and abroad. If you are unsure you qualify, write to us.",
xq2:"What is the difference between member, supporter and Young UAS?",xr2:"The rights and duties of each role are set out in the statute and rules. Write to us for details.",
xq3:"Is membership free?",xr3:"Membership terms are set out in the statute and rules. If in doubt, write to us.",
xq4:"I live abroad: can I take part?",xr4:"Yes. UAS wants to map and involve Sammarinese who study or work in research abroad, including those born and raised outside San Marino.",
xq5:"How is my data used?",xr5:"Only to handle your request and the association’s communications, under San Marino law. You appear in public lists only with your consent.",
xq6:"How do I contact you?",xr6:"Write to unioneaccademicasammarinese@gmail.com.",
xmt2:"Our network around the world.",xbt:"Trial version",xtn:"members lit on the map",xgm:"Get on the Map",xem:"No lights yet: will you be the first?",xga:"Globe showing UAS members worldwide",xct:"City and country (more than one allowed, comma-separated)",xc_europe:"Europe",xc_asia:"Asia",xc_africa:"Africa",xc_north_america:"North America",xc_south_america:"South America",xc_oceania:"Oceania",
xmp:"I want to appear on the public map with my name, surname and city. Visitor messages reach me through UAS: my email stays private.",xcb:"Contact",xcm:"Write the reason for contacting. UAS forwards your message to the person, who decides whether to reply. Their email is never shown.",xcnm:"Your name",xcem:"Your email",xcms:"Reason for contact and message",xcck:"I agree that UAS forwards my message and my email to the person contacted.",xcsd:"Send message",xcc:"Cancel",xra:"Research collaboration",xrb:"Information about the association",xrc:"Study or job opportunity",xrd:"Other",xcok:"Message sent. UAS forwards it to the person: check your email for the confirmation.",xhi:"Click a dot on the globe to contact the person through UAS.",
xlg:"Non-profit association · Founded 29/12/2025 · Statutes filed 01/01/2026 · Eurodoc member since 28/06/2026",eb:"Non-profit association · San Marino",
h1:"The network of Sammarinese researchers, worldwide.",
lead:"We connect researchers and academics from San Marino, at home and abroad. Join the network and light up your place on the globe.",
cta1:"Join the network",cta2:"About us",ah:"Unlocking the potential of our academic community.",
c1t:"Representation",c1p:"A single voice for Sammarinese researchers and academics.",
c2t:"European network",c2p:"Member of Eurodoc, the European federation of early-career researchers.",
c3t:"Return and expertise",c3p:"Mapping specialisations and supporting the return of those trained abroad.",
c4t:"Student support",c4p:"Guidance and opportunities for those pursuing higher education.",
ph:"A year of activity.",pp:"From the presentation to the Consulta of Sammarinese citizens abroad to today.",pt:"Partners coming soon",
t1:"Official foundation",t2:"Statutes filed",t3:"Meeting with high schools",t4:"Joined Eurodoc",t5d:"March 2027",t5:"Hackathon with European institutions",
gh:"Gallery",gt:"UAS in action.",
abh:"Sammarinese and studying or researching abroad?",abp:"We want to map the experiences of the Sammarinese community worldwide, including those born and raised outside San Marino.",abc:"Get on the map",
jh:"One request to join the network.",jp:"Fill in the form and we will reply with membership information. Prefer paper? Download the form.",dl:"Download the membership form",
fn:"Full name",fe:"Email",fm:"Message (optional)",r1:"Member",r2:"Supporter",r3:"Sammarinese abroad (census)",r4:"Young UAS",nl:"I would like to receive updates by email",
ok:"I have read the statute and rules and consent to my data being processed for association purposes only.",send:"Send request",
sending:"Sending…",done:"Thank you! Request sent: check your email.",err:"Sending failed. Please write to unioneaccademicasammarinese@gmail.com.",inv:"Please enter your name, a valid email and consent.",copied:"Copied",
pv:"Privacy",pvt:"Data entered in the form is used only to handle membership requests and association communications, under San Marino law. This site uses no tracking cookies."}};
var L="it",$=function(i){return document.getElementById(i)||document.createElement(i==="gl"?"canvas":"div")};
function setL(l){L=l;document.documentElement.lang=l;
document.querySelectorAll("[data-i]").forEach(function(e){e.textContent=T[l][e.dataset.i]});
document.querySelectorAll("[data-ph]").forEach(function(e){e.placeholder=T[l][e.dataset.ph];e.setAttribute("aria-label",T[l][e.dataset.ph])});
var g=$("lg"),lb=l==="it"?"Cambia lingua in inglese":"Switch language to Italian";g.dataset.l=l;g.setAttribute("aria-label",lb);g.title=lb;
try{localStorage.setItem("uas-l2",l)}catch(e){}if(typeof renderAll==="function")renderAll();if(typeof ICON!=="undefined"&&ICON)renderSocial()}
$("lg").onclick=function(){setL(L==="it"?"en":"it")};
var s="it";try{s=localStorage.getItem("uas-l2")||"it"}catch(e){}
setL(s==="en"?"en":"it");
// data-driven sections (edit assets/*.json)
var D={},F="",BANNER=true;
function lc(o){return typeof o==="string"?o:(o&&(o[L]||o.it))||""}
function safe(u){return /^(https?:\/\/|assets\/|#|mailto:)/.test(u||"")}
function E(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function fd(d){return new Date(d).toLocaleDateString(L==="it"?"it-IT":"en-GB",{day:"numeric",month:"long",year:"numeric"})}
function A(h,x,c){var a=E("a",c||"",x);a.href=h;a.rel="noopener";return a}
function renderAll(){if(!D)return;
var b=$("banner");b.hidden=!BANNER;$("bl").textContent=T[L].xbn;
var n=(D.news||[]).slice().sort(function(a,b){return a.date<b.date?1:-1}).slice(0,6),l=$("nlist");l.textContent="";
n.forEach(function(x){var c=E("div","card");c.appendChild(E("b","",fd(x.date)));c.appendChild(E("h3","",lc(x.title)));c.appendChild(E("p","",lc(x.text)));
var f=E("div","share");f.style.marginTop="10px";if(safe(x.link))f.appendChild(A(x.link,T[L].nm+" →"));
var u=encodeURIComponent(location.href.split("#")[0]),t=encodeURIComponent(lc(x.title));
[["WhatsApp","https://wa.me/?text="+t+"%20"+u],["LinkedIn","https://www.linkedin.com/sharing/share-offsite/?url="+u]].forEach(function(s){var a=A(s[1],s[0]);a.target="_blank";f.appendChild(a)});
c.appendChild(f);l.appendChild(c)});
var ev=(D.events||[]).slice().sort(function(a,b){return a.date>b.date?1:-1}),el=$("elist");el.textContent="";
ev.forEach(function(x){var d=E("div","ev");d.appendChild(E("b","",x.label?lc(x.label):fd(x.date)));d.appendChild(E("span","",lc(x.title)));el.appendChild(d)});
var hn=n.length>0,he=ev.length>0;$("news").hidden=!(hn||he);$("nnews").hidden=!(hn||he);$("nwrap").hidden=!hn;$("ewrap").hidden=!he;
var dl=$("dlist");dl.textContent="";(D.docs||[]).forEach(function(x){if(!safe(x.file))return;var a=A(x.file,"","dlk");a.appendChild(E("span","",lc(x.title)));a.appendChild(E("em","",x.type||"PDF"));dl.appendChild(a)});
$("docs").hidden=!(D.docs||[]).length;
var tl=$("tlist");tl.textContent="";(D.team||[]).forEach(function(x){var c=E("div","card");
if(safe(x.photo)){var i=E("img","ava");i.src=x.photo;i.alt=x.name;c.appendChild(i)}else c.appendChild(E("div","ava",x.name.split(" ").map(function(w){return w[0]}).slice(0,2).join("")));
c.appendChild(E("h3","",x.name));c.appendChild(E("p","",lc(x.role)+(x.org?" · "+x.org:"")));
var ls=x.links||{};Object.keys(ls).forEach(function(k){if(safe(ls[k])){var a=A(ls[k],"","sb");a.target="_blank";a.style.margin="10px 8px 0 0";a.innerHTML=ICON[k]||"";a.appendChild(E("span","",k==="linkedin"?"LinkedIn":k));a.setAttribute("aria-label",x.name+" – "+k);c.appendChild(a)}});tl.appendChild(c)});
$("team").hidden=false;if(D.team&&!D.team.length)tl.appendChild(E("p","note",T[L].xtm));
renderMap();renderMore();
var pl=$("plist");pl.textContent="";(D.partners||[]).forEach(function(p){var e;if(safe(p.logo)){e=E("a");var i=E("img");i.src=p.logo;i.alt=p.name;e.appendChild(i)}else e=E("a","",p.name);if(safe(p.url)){e.href=p.url;e.rel="noopener"}pl.appendChild(e)});
$("partners").hidden=!(D.partners||[]).length}
["news","events","docs","team","members","partners","presentations","community","ciup","sponsors"].forEach(function(k){fetch("assets/"+k+".json").then(function(r){return r.json()}).then(function(j){D[k]=j;renderAll()}).catch(function(){})});
// globe
var CONT={europe:[50,15],asia:[35,95],africa:[5,20],north_america:[45,-100],south_america:[-15,-60],oceania:[-25,135]};
var GLOBE_CATS=["Socio"]; // categories shown on the globe: add "Sostenitore" to include supporters
function ML(){return (D.members||[]).filter(function(m){return GLOBE_CATS.indexOf(m.categoria||"Socio")>=0})}
function PL(m){return (m.places&&m.places.length)?m.places:[{city:m.city,lat:m.lat,lon:m.lon,continent:m.continent}]}
function MP(){var o=[];ML().forEach(function(m,i){PL(m).forEach(function(p){if(typeof p.lat==="number"&&typeof p.lon==="number")o.push(Object.assign({},m,{city:p.city,lat:p.lat,lon:p.lon,continent:p.continent||m.continent,_i:i}))})});return o}
function CT(m){return PL(m).map(function(p){return p.city}).filter(Boolean).join(" · ")}
function CN(p,m){return (p.continent||m.continent||"").replace("-","_")}
var GL={lam:10,phi:23,tgt:null,sel:"",land:[],pts:[],drag:null,vis:true,tip:null,col:{},n:0};
var RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
function renderMap(){var M=ML();GL.mp=MP();$("map").hidden=!D.members;$("gl").setAttribute("aria-label",T[L].xga);
$("tn").textContent=M.length;$("emp").hidden=M.length>0;
var cl=$("cl");cl.textContent="";Object.keys(CONT).forEach(function(k){var n=new Set(GL.mp.filter(function(m){return CN(m,m)===k}).map(function(m){return m._i})).size;
var b=E("button","cr"+(GL.sel===k?" on":""));b.appendChild(E("span","d",T[L]["xc_"+k]));var l=E("span","l");for(var i=0;i<Math.min(n,10);i++)l.appendChild(E("i"));b.appendChild(l);b.appendChild(E("b","",n));
b.onclick=function(){GL.sel=GL.sel===k?"":k;if(GL.sel)GL.tgt={lam:CONT[k][1],phi:CONT[k][0]};renderMap()};cl.appendChild(b)});
renderPin();var ml=$("mlist");ml.textContent="";M.filter(function(m){return !GL.sel||PL(m).some(function(p){return CN(p,m)===GL.sel})}).forEach(function(m){var c=E("div","card");c.appendChild(E("h3","",m.name));c.appendChild(E("p","",[lc(m.role),CT(m)].filter(Boolean).join(" · ")));var cb=E("button","btn s",T[L].xcb);cb.type="button";cb.style.marginTop="10px";cb.onclick=function(){openC(m)};c.appendChild(cb);ml.appendChild(c)})}
var cv=$("gl"),cx=cv.getContext("2d");
function proj(lat,lon,R,c){var p=lat*Math.PI/180,l=(lon-GL.lam)*Math.PI/180,p0=GL.phi*Math.PI/180;
var cc=Math.sin(p0)*Math.sin(p)+Math.cos(p0)*Math.cos(p)*Math.cos(l);
return {x:c+R*Math.cos(p)*Math.sin(l),y:c-R*(Math.cos(p0)*Math.sin(p)-Math.sin(p0)*Math.cos(p)*Math.cos(l)),c:cc}}
var SM=[43.94,12.45];
function proj3(lat,lon,R,c,h){var q=proj(lat,lon,R,c);return {x:c+(q.x-c)*(1+h),y:c+(q.y-c)*(1+h),c:q.c}}
function arc(la,lo,R,c,t,col,al){var a=la*Math.PI/180,b=lo*Math.PI/180,a2=SM[0]*Math.PI/180,b2=SM[1]*Math.PI/180;
var v1=[Math.cos(a)*Math.cos(b),Math.cos(a)*Math.sin(b),Math.sin(a)],v2=[Math.cos(a2)*Math.cos(b2),Math.cos(a2)*Math.sin(b2),Math.sin(a2)];
var d=Math.acos(Math.max(-1,Math.min(1,v1[0]*v2[0]+v1[1]*v2[1]+v1[2]*v2[2])));if(d<.02)return;
cx.beginPath();var on=false;for(var i=0;i<=40;i++){var u=i/40,A=Math.sin((1-u)*d)/Math.sin(d),B=Math.sin(u*d)/Math.sin(d),
x=A*v1[0]+B*v2[0],y=A*v1[1]+B*v2[1],z=A*v1[2]+B*v2[2],pl=Math.asin(z)*180/Math.PI,pn=Math.atan2(y,x)*180/Math.PI,
q=proj3(pl,pn,R,c,Math.sin(Math.PI*u)*Math.min(.22,d*.14));
if(q.c>0.02){if(!on){cx.moveTo(q.x,q.y);on=true}else cx.lineTo(q.x,q.y)}else on=false}
cx.globalAlpha=al;cx.strokeStyle=col;cx.lineWidth=1.2;cx.setLineDash([5,7]);cx.lineDashOffset=RM?0:-t/60;cx.stroke();cx.setLineDash([]);cx.globalAlpha=1}
function size(){var s=cv.clientWidth,d=window.devicePixelRatio||1;cv.width=s*d;cv.height=s*d;cx.setTransform(d,0,0,d,0,0);GL.s=s}
addEventListener("resize",size);size();
fetch("assets/land.json").then(function(r){return r.json()}).then(function(j){GL.land=j}).catch(function(){});
new IntersectionObserver(function(e){GL.vis=e[0].isIntersecting}).observe(cv);
function draw(t){requestAnimationFrame(draw);if(!GL.vis||document.hidden)return;
if(cv.clientWidth&&cv.clientWidth!==GL.s)size();if(!GL.s)return;
var s=GL.s,R=s*0.42,c=s/2;
if(GL.n++%60===0){var cs=getComputedStyle(document.documentElement);["--acc","--sky","--soft","--mut","--line"].forEach(function(k){GL.col[k]=cs.getPropertyValue(k).trim()})}
var C=GL.col;
if(GL.tgt){var dl=((GL.tgt.lam-GL.lam+540)%360)-180;GL.lam+=dl*0.08;GL.phi+=(GL.tgt.phi-GL.phi)*0.08;if(Math.abs(dl)<.3&&Math.abs(GL.tgt.phi-GL.phi)<.3)GL.tgt=null}
else if(!GL.drag&&Math.abs(GL.vx||0)>.02){GL.lam+=GL.vx;GL.vx*=.94}
else if(!GL.drag&&!GL.tip&&!RM)GL.lam-=0.12;
cx.clearRect(0,0,s,s);
var at=cx.createRadialGradient(c,c,R*.97,c,c,R*1.14);at.addColorStop(0,C["--acc"]);at.addColorStop(1,"transparent");cx.globalAlpha=.28;cx.fillStyle=at;cx.beginPath();cx.arc(c,c,R*1.14,0,7);cx.fill();cx.globalAlpha=1;
var g=cx.createRadialGradient(c-R*.3,c-R*.3,R*.1,c,c,R);g.addColorStop(0,C["--soft"]);g.addColorStop(1,C["--sky"]);
cx.beginPath();cx.arc(c,c,R,0,7);cx.fillStyle=g;cx.fill();cx.strokeStyle=C["--line"];cx.stroke();
cx.strokeStyle=C["--line"];cx.lineWidth=.6;cx.globalAlpha=.7;
for(var la=-60;la<=60;la+=30){cx.beginPath();var o=false;for(var lo=-180;lo<=180;lo+=6){var q=proj(la,lo,R,c);if(q.c>0){o?cx.lineTo(q.x,q.y):cx.moveTo(q.x,q.y);o=true}else o=false}cx.stroke()}
for(var lo=-180;lo<180;lo+=30){cx.beginPath();var o=false;for(var la=-84;la<=84;la+=6){var q=proj(la,lo,R,c);if(q.c>0){o?cx.lineTo(q.x,q.y):cx.moveTo(q.x,q.y);o=true}else o=false}cx.stroke()}
cx.globalAlpha=1;cx.fillStyle=C["--mut"];var L2=GL.land;
for(var i=0;i<L2.length;i+=2){var p=proj(L2[i]/10,L2[i+1]/10,R,c);if(p.c>0){cx.globalAlpha=.15+.5*p.c;cx.fillRect(p.x-1,p.y-1,2,2)}}
cx.globalAlpha=1;GL.pts=[];var G={};
(GL.mp||[]).forEach(function(m){if(Math.hypot(m.lat-SM[0],m.lon-SM[1])>1.5){var on=!GL.sel||(m.continent||"").replace("-","_")===GL.sel;arc(m.lat,m.lon,R,c,t,C["--acc"],on?.55:.15)}});
var hp=proj(SM[0],SM[1],R,c);if(hp.c>0.05){var ph=RM?.5:(t%2400)/2400;cx.strokeStyle=C["--acc"];cx.globalAlpha=(1-ph)*.8;cx.lineWidth=1.5;cx.beginPath();cx.arc(hp.x,hp.y,6+ph*20,0,7);cx.stroke();cx.globalAlpha=1;cx.lineWidth=1}

(GL.mp||[]).forEach(function(m){var k=m.lat+","+m.lon;(G[k]=G[k]||[]).push(m)});
Object.keys(G).forEach(function(k){var ms=G[k],m=ms[0],p=proj(m.lat,m.lon,R,c);if(p.c<=0.05)return;
var sel=!GL.sel||(m.continent||"").replace("-","_")===GL.sel,pu=RM?0:Math.sin(t/500+m.lat)*2,n=Math.min(ms.length,10),big=ms.some(function(x){return x.role});
var r=(sel?18+pu:10)+n*1.2;var gr=cx.createRadialGradient(p.x,p.y,0,p.x,p.y,r);gr.addColorStop(0,C["--acc"]);gr.addColorStop(1,"transparent");
cx.globalAlpha=sel?.75:.3;cx.fillStyle=gr;cx.beginPath();cx.arc(p.x,p.y,r,0,7);cx.fill();
cx.globalAlpha=sel?1:.5;cx.fillStyle=C["--acc"];cx.beginPath();cx.arc(p.x,p.y,(big?5:3.5)+n*.35,0,7);cx.fill();cx.globalAlpha=1;
GL.pts.push({ms:ms,x:p.x,y:p.y})})}
function hit(e){var b=cv.getBoundingClientRect(),x=e.clientX-b.left,y=e.clientY-b.top,best=null,bd=18;
GL.pts.forEach(function(p){var d=Math.hypot(p.x-x,p.y-y);if(d<bd){bd=d;best=p}});
var tp=$("tip");GL.tip=best;if(best){tp.textContent="";var ms=best.ms;if(ms.length===1){tp.appendChild(E("b","",ms[0].name));tp.appendChild(E("small","",[lc(ms[0].role),ms[0].city].filter(Boolean).join(" · ")))}else{tp.appendChild(E("b","",ms[0].city+" · "+ms.length));ms.slice(0,6).forEach(function(x){tp.appendChild(E("small","",x.name+(x.role?" ("+lc(x.role)+")":"")))});if(ms.length>6)tp.appendChild(E("small","","+"+(ms.length-6)))}tp.style.left=best.x+"px";tp.style.top=best.y+"px";tp.classList.add("on")}else tp.classList.remove("on")}
cv.onpointerdown=function(e){GL.drag={x:e.clientX,y:e.clientY};GL.tgt=null;hit(e);GL.down={x:e.clientX,y:e.clientY,g:GL.tip?GL.tip.ms:null};cv.setPointerCapture(e.pointerId)};
cv.onpointermove=function(e){if(GL.drag){GL.vx=-(e.clientX-GL.drag.x)*.4;GL.lam+=GL.vx;GL.phi=Math.max(-75,Math.min(75,GL.phi+(e.clientY-GL.drag.y)*.4));GL.drag={x:e.clientX,y:e.clientY};GL.tip=null;$("tip").classList.remove("on")}else hit(e)};
cv.onpointerup=function(e){if(GL.down&&Math.hypot(e.clientX-GL.down.x,e.clientY-GL.down.y)<6){GL.pin=GL.down.g;renderPin()}GL.drag=null;GL.down=null};cv.onpointerleave=function(){GL.drag=null;GL.tip=null;$("tip").classList.remove("on")};
requestAnimationFrame(draw);
function renderPin(){var p=$("pin"),g=GL.pin;p.hidden=!g;if(!g)return;p.textContent="";
if(g.length>1)p.appendChild(E("h3","",g[0].city+" · "+g.length));
g.forEach(function(m){var d=E("div");d.style.marginBottom="12px";d.appendChild(E("b","",m.name));d.appendChild(E("p","",[lc(m.role),g.length>1?"":m.city].filter(Boolean).join(" · ")));var b=E("button","btn s",T[L].xcb);b.type="button";b.onclick=function(){openC(m)};d.appendChild(b);p.appendChild(d)})}
// contact relay: the visitor writes to UAS, UAS forwards to the member (member email is never on the site)
var CM=null;
function openC(m){CM=m;$("ctt").textContent=T[L].xcb+" · "+m.name;$("cs").textContent="";$("cdlg").showModal()}
$("cx").onclick=function(){$("cdlg").close()};
$("cf").onsubmit=function(ev){ev.preventDefault();var s=$("cs");
if(!$("cnm").value.trim()||!/^\S+@\S+\.\S+$/.test($("cem").value)||!$("cms").value.trim()||!$("cck").checked){s.textContent=T[L].inv;return}
s.textContent=T[L].sending;
var d={name:$("cnm").value,email:$("cem").value,motivo:$("crs").value,messaggio:$("cms").value,destinatario:CM.name,citta_destinatario:CM.city||"",lingua:L,_honey:$("chp").value,
_subject:"Messaggio per "+CM.name+" (UAS)",_template:"table",_captcha:"false",
_autoresponse:L==="it"?"Grazie! Abbiamo ricevuto il tuo messaggio e lo inoltreremo a "+CM.name+". La persona decide se risponderti; per tutela della privacy non condividiamo i suoi contatti. Unione Accademica Sammarinese":"Thank you! We received your message and will forward it to "+CM.name+". The person decides whether to reply; to protect their privacy we do not share their contact details. Unione Accademica Sammarinese"};
fetch(ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(d)})
.then(function(r){return r.json()}).then(function(j){if(j.success==="true"||j.success===true){s.textContent=T[L].xcok;$("cf").reset();setTimeout(function(){$("cdlg").close()},3500)}else throw 0})
.catch(function(){s.textContent=T[L].err})};
// theme
var root=document.documentElement;
try{var th=localStorage.getItem("uas-theme");if(th)root.dataset.theme=th}catch(e){}
$("theme").onclick=function(){var d=root.dataset.theme?root.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;var n=d?"light":"dark";root.dataset.theme=n;try{localStorage.setItem("uas-theme",n)}catch(e){}};
// mobile menu
$("burger").onclick=function(){var o=$("nav").classList.toggle("open");this.setAttribute("aria-expanded",o)};
$("nav").onclick=function(){$("nav").classList.remove("open");$("burger").setAttribute("aria-expanded",false)};
// progress + top button
addEventListener("scroll",function(){var h=document.documentElement,p=h.scrollTop/(h.scrollHeight-h.clientHeight||1);$("bar").style.width=(p*100)+"%";$("top-btn").classList.toggle("show",h.scrollTop>600)},{passive:true});
$("top-btn").onclick=function(){scrollTo({top:0})};
// reveal
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});
// preselect role from census button
document.querySelectorAll("[data-role]").forEach(function(a){a.onclick=function(){$("rl").selectedIndex=2;$("mp").checked=true;$("mpf").hidden=false}});
$("mp").onchange=function(){$("mpf").hidden=!this.checked};
// copy email
$("copy").onclick=function(){var b=this;try{navigator.clipboard.writeText($("mail").textContent);b.textContent="✓";b.title=T[L].copied;setTimeout(function(){b.textContent="⧉"},1500)}catch(e){}};
// social buttons (rail on wide screens, footer otherwise); only entries with a URL appear
var ICON={
eurodoc:'<img src="assets/eurodoc.jpg" alt="" width="20" height="20">',
instagram:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="f" cx="17.3" cy="6.7" r="1.2"/></svg>',
linkedin:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V16M8 7.6v.1M12 16v-5.5M12 13c0-1.6 1-2.6 2.4-2.6S17 11.3 17 13v3"/></svg>'};
function renderSocial(){["rail","soc"].forEach(function(id){var box=$(id);box.textContent="";
Object.keys(SOCIAL).forEach(function(k){if(!safe(SOCIAL[k])||!SOCIAL[k])return;var a=A(SOCIAL[k],"","sb");a.target="_blank";a.innerHTML=ICON[k]||"";a.appendChild(E("span","",T[L]["xs_"+k]||k));a.setAttribute("aria-label",T[L]["xs_"+k]||k);box.appendChild(a)});
box.hidden=!box.children.length})}
renderSocial();
// form
$("f").onsubmit=function(ev){ev.preventDefault();var m=$("msg");
if(!$("nm").value.trim()||!/^\S+@\S+\.\S+$/.test($("em").value)||!$("ok").checked||($("mp").checked&&!$("ct").value.trim())){m.textContent=T[L].inv;return}
m.textContent=T[L].sending;
var d={name:$("nm").value,email:$("em").value,role:$("rl").value,message:$("ms").value,newsletter:$("nl").checked?"sì":"no",city:$("ct").value,mappa:$("mp").checked?"sì":"no",lingua:L,_honey:document.querySelector(".hp").value,
_subject:"Nuova richiesta UAS – "+$("rl").value,_template:"table",_captcha:"false",
_autoresponse:L==="it"?"Grazie per averci scritto! Abbiamo ricevuto la tua richiesta e ti risponderemo presto. Unione Accademica Sammarinese":"Thank you for writing to us! We received your request and will reply soon. Unione Accademica Sammarinese"};
fetch(ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(d)})
.then(function(r){return r.json()}).then(function(j){if(j.success==="true"||j.success===true){m.textContent=T[L].done;$("f").reset();$("mpf").hidden=true}else throw 0})
.catch(function(){m.textContent=T[L].err})};

// multi-page helpers
(function(){var f=location.pathname.split("/").pop()||"index.html";document.querySelectorAll("#nav a").forEach(function(a){var h=a.getAttribute("href");if(h&&h.indexOf("#")<0&&h===f)a.setAttribute("aria-current","page")})})();
if(/[?&]map=1/.test(location.search)&&document.getElementById("rl")){$("rl").selectedIndex=2;$("mp").checked=true;$("mpf").hidden=false}

function EM(b,a){if(a&&!a.length)b.appendChild(E("p","note",T[L].emt))}
function CD(x){var c=E("div","card");if(x.date)c.appendChild(E("b","",fd(x.date)));c.appendChild(E("h3","",lc(x.title)));c.appendChild(E("p","",lc(x.text)));if(safe(x.link))c.appendChild(A(x.link,T[L].nm+" →"));return c}
function renderMore(){
[["cmlist","community"],["cilist","ciup"]].forEach(function(p){var b=$(p[0]);b.textContent="";(D[p[1]]||[]).forEach(function(x){b.appendChild(CD(x))});EM(b,D[p[1]])});
var pr=$("prlist");pr.textContent="";(D.presentations||[]).slice().sort(function(a,b){return (a.date||"")<(b.date||"")?1:-1}).forEach(function(x){var u=x.file||x.link;if(!safe(u))return;var a=A(u,"","dlk"),sp=E("span","",lc(x.title)),m=[x.date?fd(x.date):"",x.place||""].filter(Boolean).join(" · ");if(m)sp.appendChild(E("small","",m));a.appendChild(sp);a.appendChild(E("em","",x.type||(/\.pdf$/i.test(u)?"PDF":"Link")));pr.appendChild(a)});EM(pr,D.presentations);
var sw=$("spwall");sw.textContent="";var sl=D.sponsors||[];sl.forEach(function(x){var ok=safe(x.url),t=ok?A(x.url,"","tile"):E("div","tile");if(ok)t.target="_blank";if(safe(x.logo)){var i=E("img");i.src=x.logo;i.alt=x.name;t.appendChild(i)}else t.textContent=x.name;sw.appendChild(t)});
if(D.sponsors)for(var k=sl.length;k<12;k++)sw.appendChild(A(SPONSOR_URL,T[L].sph3,"tile e"))}
document.querySelectorAll("[data-sponsor]").forEach(function(a){a.href=SPONSOR_URL});
