/* ============ CONFIGURAÇÃO (edite aqui) ============ */
const CFG={
  phone:"5541999052515",
  github:"https://github.com/Git-Ithalo",
  instagram:"https://instagram.com/ithalo.mrcel",
  linkedin:null, // ex.: "https://www.linkedin.com/in/seu-perfil"
  msg:{pt:"Olá, Ithalo! Vi seu portfólio e gostaria de conversar sobre um projeto.",
       en:"Hi, Ithalo! I saw your portfolio and I’d like to talk about a project."}
};
/* Textos com dois idiomas usam [português, inglês] */
/* demo: URL ou null · live: mostra a demo ao vivo dentro do card (false desliga) · repo: URL pública ou null · img: captura real (opcional, tem prioridade sobre o live) */
const PROJECTS=[
{n:"Scalybur",url:"scalybur.onrender.com",a:"#c2410c",b:"#7c2d12",live:true,
 cat:["Website para pizzaria","Pizzeria website"],
 d:["Site de pedidos para a Pizzaria Scalybur Fazendinha: cardápio, conta do cliente, fidelidade e painel de pedidos para a cozinha.","Ordering website for Pizzaria Scalybur Fazendinha: menu, customer account, loyalty program and an orders dashboard for the kitchen."],
 tech:["Python","Flask","HTML","CSS","JavaScript","SQLite"],demo:"https://scalybur.onrender.com/",repo:null,img:null,
 ok:[["Cardápio e loja online com carrinho e pedido","Online menu and store with cart and checkout"],["Cadastro e conta do cliente com consentimento LGPD","Customer sign-up and account with LGPD (privacy law) consent"],["Programa de fidelidade","Loyalty program"],["Painel /pedidos para a cozinha, atualizado a cada 8 segundos","/pedidos dashboard for the kitchen, refreshed every 8 seconds"],["Política de privacidade e opção de baixar ou excluir os dados","Privacy policy and options to download or delete personal data"]],
 pl:[["Pagamento com cartão dentro do site (hoje é máquina na entrega)","In-site card payment (currently card machine on delivery)"]],
 note:["A demonstração fica em hospedagem gratuita: o primeiro acesso pode levar alguns segundos.","The demo runs on free hosting, so the first load may take a few seconds."]},
{n:"Barbearia Nobre",url:"barbeariav0-1.onrender.com",a:"#b08d57",b:"#1c1a17",
 cat:["Website para barbearia","Barbershop website"],
 d:["Site e sistema de agendamento para barbearia, com serviços, equipe, cadastro, login e painel do barbeiro.","Website and booking system for a barbershop, with services, team, sign-up, login and a barber dashboard."],
 tech:["Node.js","Express","SQLite","HTML","CSS","JavaScript"],demo:"https://barbeariav0-1.onrender.com/",live:true,repo:null,img:null,
 ok:[["Páginas de início, serviços e equipe com dados vindos do banco","Home, services and team pages with data from the database"],["Cadastro e login com senha protegida por hash","Sign-up and login with hashed passwords"],["Agendamento guiado: serviço, barbeiro, data e horário, sem conflitos","Guided booking: service, barber, date and time, with no conflicts"],["Área do cliente com próximos agendamentos e histórico","Customer area with upcoming bookings and history"],["Painel admin: agenda, serviços e preços, lista de clientes","Admin panel: schedule, services and prices, client list"]],
 pl:[],
 note:["A demonstração fica em hospedagem gratuita: o primeiro acesso pode levar alguns segundos.","The demo runs on free hosting, so the first load may take a few seconds."]},
{n:"IMWatches",url:"imwatches.onrender.com",live:true,a:"#2f4a3a",b:"#14201a",
 cat:["E-commerce de relógios","Watch e-commerce"],
 d:["Catálogo de relógios com visual elegante e minimalista, filtros por marca e lojas de assinantes em um modelo SaaS.","Watch catalog with an elegant, minimalist look, brand filters and subscriber stores in a SaaS model."],
 tech:["Node.js","Express","EJS","HTML","CSS","JavaScript"],demo:"https://imwatches.onrender.com/",repo:null,img:null,
 ok:[["Catálogo com pronta entrega e sob encomenda","Catalog with in-stock and made-to-order items"],["Filtro por marca e ordenação por preço","Brand filter and price sorting"],["Página de cada relógio e página de cada marca","A page for each watch and each brand"],["Planos, cadastro de loja e painel do lojista","Plans, store sign-up and store owner dashboard"],["Vitrine pública de cada loja em /loja/{nome}","Public storefront for each store at /loja/{name}"]],
 pl:[["Fotos reais dos produtos (hoje são ilustrações)","Real product photos (currently illustrations)"],["Pagamento recorrente","Recurring payments"],["Banco de dados definitivo e painel administrativo","Production database and admin panel"]],
 note:["Os preços do catálogo são valores de referência, não uma tabela oficial. A demonstração fica em hospedagem gratuita e o primeiro acesso pode levar alguns segundos.","Catalog prices are reference values, not an official price list. The demo runs on free hosting, so the first load may take a few seconds."]}
];
const SERVICES=[
[["Sites institucionais","Business websites"],["Apresentam sua empresa com clareza e passam confiança para quem pesquisa você.","Present your company clearly and build trust with people who look you up."]],
[["Landing pages","Landing pages"],["Uma página focada em uma oferta, pensada para levar o visitante ao contato.","A page focused on one offer, designed to lead visitors to get in touch."]],
[["Sites para negócios locais","Websites for local businesses"],["Cardápio, serviços, horários e localização para pizzarias, barbearias e comércios.","Menus, services, hours and location for pizzerias, barbershops and shops."]],
[["Catálogos e interfaces de loja","Catalogs and store interfaces"],["Produtos bem organizados e navegação simples, como no projeto IMWatches.","Well-organized products and simple navigation, like in the IMWatches project."]],
[["Interfaces web","Web interfaces"],["Telas responsivas, acessíveis e fáceis de usar em computador e celular.","Responsive, accessible screens that are easy to use on desktop and mobile."]],
[["Sistemas web personalizados","Custom web systems"],["Agendamentos, pedidos e painéis sob medida, com banco de dados e login.","Custom booking, ordering and dashboards, with a database and login."]],
[["Manutenção e melhorias","Maintenance and improvements"],["Correções, ajustes de layout e novos recursos em sites que você já tem.","Fixes, layout tweaks and new features for the sites you already have."]]];
/* d = domino · u = usado em projetos · a = aprendendo (ajuste conforme sua realidade) */
const STACK=[
["frontend/",[["HTML5","d"],["CSS3","d"],["JavaScript","d"],[["Design responsivo","Responsive design"],"d"],["React","a"],["Vite","a"],["Vue.js","a"],["Next.js","a"],["Tailwind CSS","a"]]],
["backend/",[["Python","d"],["Flask","u"],["FastAPI","a"],["Node.js","u"],["Express.js","u"],[["APIs REST","REST APIs"],"u"],["Django","a"]]],
[["dados-e-ferramentas/","data-and-tools/"],[["SQLite","u"],["SQLAlchemy","a"],["Git","u"],["PostgreSQL","a"],["MySQL","a"],[["Deploy (Render)","Deploy (Render)"],"u"]]]];
const STEPS=[
[["Entendimento","Discovery"],["Conversamos sobre seu negócio, seu público e o que o projeto precisa resolver.","We talk about your business, your audience and what the project needs to solve."]],
[["Planejamento","Planning"],["Defino estrutura, páginas e tecnologias adequadas ao escopo.","I define the structure, pages and technologies that fit the scope."]],
[["Desenvolvimento","Development"],["Construo a solução e você acompanha e valida o andamento.","I build the solution while you follow along and validate progress."]],
[["Ajustes","Refinement"],["Refinamos detalhes de design, textos e funcionamento até ficar certo.","We refine design, copy and behavior details until it feels right."]],
[["Publicação","Launch"],["Coloco o projeto no ar e entrego o que for necessário para você usá-lo.","I put the project online and hand over everything you need to use it."]]];
const U={
pt:{nav_about:"Sobre",nav_projects:"Projetos",nav_services:"Serviços",nav_tech:"Tecnologias",nav_process:"Processo",nav_contact:"Contato",
 hero_cm:"// Desenvolvedor web · Curitiba, PR",hero_h1:"Transformo ideias em <span class=\"gr\">experiências digitais.</span>",
 hero_sub:"Desenvolvo sites e soluções web modernas para empresas que querem fortalecer sua presença digital, apresentar seus serviços e crescer com tecnologia.",
 badge_open:"Aberto a projetos",badge_en:"Inglês fluente",hero_b1:"Conheça meus projetos",hero_b2:"Vamos conversar",
 about_cm:"// sobre",about_h2:"Código com foco no negócio do cliente.",
 about_p1:"Sou Ithalo Marcell Sampaio Albuquerque, desenvolvedor web em formação. Gosto de transformar uma necessidade real em algo que funciona: um site que apresenta bem uma empresa, um sistema que organiza uma rotina, uma interface que o cliente entende de primeira.",
 about_p2:"Aprendo construindo. Os projetos abaixo foram feitos de ponta a ponta, do layout ao servidor e ao banco de dados, e mostram como eu penso: entender o problema, escolher o caminho mais simples que resolve e entregar algo que dá para usar.",
 st1_t:"Front-end e back-end",st1_d:"HTML, CSS e JavaScript no navegador; Python e Node.js no servidor.",
 st2_t:"Soluções sob medida",st2_d:"Cada projeto parte da necessidade do negócio, não de um template.",
 st3_t:"Inglês fluente",st3_d:"Atendo clientes em português e em inglês, e leio a documentação técnica no original.",
 pj_cm:"// projetos",pj_h2:"Projetos reais, do site ao sistema.",pj_lead:"Cada card mostra o que foi construído e o que ainda é plano. Clique em “Ver detalhes” para a lista completa.",
 sv_cm:"// serviços",sv_h2:"O que posso fazer pelo seu negócio.",
 tc_cm:"// tecnologias",tc_h2:"Meu stack, sem exageros.",tc_lead:"Separo o que domino, o que já usei em projetos reais e o que estou aprendendo.",
 b_d:"domino",b_u:"em projetos",b_a:"aprendendo",lg_d:"uso no dia a dia",lg_u:"aplicado nos projetos",lg_a:"em estudo",
 pr_cm:"// processo",pr_h2:"Como um projeto acontece.",pr_lead:"Etapas e prazos mudam conforme o escopo de cada projeto; combinamos tudo antes de começar.",
 ct_cm:"// contato",ct_h2:"Tem um projeto em mente? Vamos tirar sua ideia do papel.",ct_lead:"Estou aberto a novos projetos. Conte o que você precisa e respondo com os próximos passos e uma estimativa de escopo.",ct_wa:"Chamar no WhatsApp",
 ft_desc:"Desenvolvimento web, sites profissionais e sistemas personalizados.",ft_rights:"© {y} Todos os direitos reservados.",
 demo:"Ver demonstração",soon:"Demo em breve",details:"Ver detalhes",code:"Código",ok:"Implementado",pl:"Planejado, ainda não feito",close:"Fechar",
 title:"Ithalo Albuquerque — Desenvolvedor Web",desc:"Desenvolvedor web: sites profissionais, interfaces responsivas e sistemas web personalizados em HTML, CSS, JavaScript e Python. Inglês fluente."},
en:{nav_about:"About",nav_projects:"Projects",nav_services:"Services",nav_tech:"Tech",nav_process:"Process",nav_contact:"Contact",
 hero_cm:"// Web developer · Curitiba, Brazil",hero_h1:"I turn ideas into <span class=\"gr\">digital experiences.</span>",
 hero_sub:"I build modern websites and web solutions for businesses that want to strengthen their online presence, showcase their services and grow with technology.",
 badge_open:"Open to projects",badge_en:"Fluent in English",hero_b1:"See my projects",hero_b2:"Let’s talk",
 about_cm:"// about",about_h2:"Code focused on the client’s business.",
 about_p1:"I’m Ithalo Marcell Sampaio Albuquerque, a web developer in training. I like turning a real need into something that works: a website that presents a company well, a system that organizes a routine, an interface customers understand at first glance.",
 about_p2:"I learn by building. The projects below were made end to end, from layout to server and database, and they show how I think: understand the problem, pick the simplest path that solves it and deliver something people can actually use.",
 st1_t:"Front-end and back-end",st1_d:"HTML, CSS and JavaScript in the browser; Python and Node.js on the server.",
 st2_t:"Tailor-made solutions",st2_d:"Every project starts from the business need, not from a template.",
 st3_t:"Fluent in English",st3_d:"I work with clients in Portuguese and English, and read technical docs in the original.",
 pj_cm:"// projects",pj_h2:"Real projects, from websites to systems.",pj_lead:"Each card shows what was built and what is still planned. Click “View details” for the full list.",
 sv_cm:"// services",sv_h2:"What I can do for your business.",
 tc_cm:"// tech",tc_h2:"My stack, no exaggeration.",tc_lead:"I separate what I know well, what I’ve used in real projects and what I’m learning.",
 b_d:"proficient",b_u:"in projects",b_a:"learning",lg_d:"used day to day",lg_u:"applied in the projects",lg_a:"currently studying",
 pr_cm:"// process",pr_h2:"How a project happens.",pr_lead:"Steps and timelines change with each project’s scope; we agree on everything before starting.",
 ct_cm:"// contact",ct_h2:"Have a project in mind? Let’s get your idea off the ground.",ct_lead:"I’m open to new projects. Tell me what you need and I’ll reply with next steps and a scope estimate.",ct_wa:"Message me on WhatsApp",
 ft_desc:"Web development, professional websites and custom systems.",ft_rights:"© {y} All rights reserved.",
 demo:"View demo",soon:"Demo coming soon",details:"View details",code:"Code",ok:"Implemented",pl:"Planned, not built yet",close:"Close",
 title:"Ithalo Albuquerque — Web Developer",desc:"Web developer: professional websites, responsive interfaces and custom web systems with HTML, CSS, JavaScript and Python. Fluent in English."}
};
/* ============ LÓGICA ============ */
const $=s=>document.querySelector(s),esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let lang="pt",first=true,lenis=null;
const L=v=>Array.isArray(v)?v[lang==="pt"?0:1]:v,t=k=>U[lang][k];
const waUrl=()=>"https://wa.me/"+CFG.phone+"?text="+encodeURIComponent(CFG.msg[lang]);
const dlg=$("#dlg");
function render(){
 if(first){
  $("#grid").innerHTML=PROJECTS.map((p,i)=>`<article class="card rv"><div class="shot"><div class="bar"><i></i><i></i><i></i><span>${esc(p.url)}</span></div><div class="view" data-p="${i}">${p.img?`<img src="${esc(p.img)}" alt="${esc(p.n)}" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:`<div class="scr" style="--a:${p.a};--b:${p.b}" role="img" aria-label="${esc(p.n)}"><em></em><strong>${esc(p.n)}</strong><div><u></u><u></u><u></u></div></div>`}${!p.img&&p.demo&&p.live?`<iframe class="live" src="${esc(p.demo)}" loading="lazy" tabindex="-1" aria-hidden="true" title=""></iframe>`:""}</div></div>
<div class="cb"><span class="cat"></span><h3>${esc(p.n)}</h3><p class="dsc"></p><ul class="tags" style="padding:0">${p.tech.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><div class="acts"></div></div></article>`).join("");
  document.querySelectorAll(".live").forEach(f=>f.addEventListener("load",()=>f.classList.add("on")));
 }
 [...$("#grid").children].forEach((c,i)=>{const p=PROJECTS[i],em=c.querySelector(".scr em");
  c.querySelector(".cat").textContent=L(p.cat);c.querySelector(".dsc").textContent=L(p.d);if(em)em.textContent=L(p.cat);
  c.querySelector(".acts").innerHTML=(p.demo?`<a class="btn pri" href="${p.demo}" target="_blank" rel="noopener">${t("demo")}</a>`:`<span class="btn" aria-disabled="true">${t("soon")}</span>`)+`<button class="btn" data-i="${i}">${t("details")}</button>`+(p.repo?`<a class="btn" href="${p.repo}" target="_blank" rel="noopener">${t("code")}</a>`:"")});
 fitLive();
 if(first)$("#marq").innerHTML=[0,1].map(()=>STACK.flatMap(g=>g[1]).filter(x=>typeof x[0]==="string"&&x[1]!=="a").map(x=>`<span>${x[0]}</span>`).join("")).join("");
 $("#svc").innerHTML=SERVICES.map(s=>`<div class="rv"><h3>${L(s[0])}</h3><p>${L(s[1])}</p></div>`).join("");
 $("#tree").innerHTML=STACK.map(g=>`<div class="grp rv"><h3>${L(g[0])}</h3><ul style="padding:0">${g[1].map(x=>`<li>${L(x[0])}<span class="b ${x[1]}">${t("b_"+x[1])}</span></li>`).join("")}</ul></div>`).join("");
 $("#git").innerHTML=STEPS.map((s,i)=>`<div class="rv"><code>commit ${i+1}</code><h3>${L(s[0])}</h3><p>${L(s[1])}</p></div>`).join("");
 const links=[["#sobre",t("nav_about")],["#projetos",t("nav_projects")],["#servicos",t("nav_services")],["#contato",t("nav_contact")]].map(l=>`<li><a href="${l[0]}">${l[1]}</a></li>`).join("")
  +`<li><a href="${waUrl()}" target="_blank" rel="noopener">WhatsApp</a></li>`
  +(CFG.github?`<li><a href="${CFG.github}" target="_blank" rel="noopener">GitHub</a></li>`:"")
  +(CFG.instagram?`<li><a href="${CFG.instagram}" target="_blank" rel="noopener">Instagram</a></li>`:"")
  +(CFG.linkedin?`<li><a href="${CFG.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>`:"");
 $("#flinks").innerHTML=links;
 document.querySelectorAll(".rv").forEach(el=>first?io.observe(el):el.classList.add("in"));
}
function setLang(l){
 lang=l;document.documentElement.lang=l==="pt"?"pt-BR":"en";
 document.title=t("title");$("#mdesc").content=t("desc");
 document.querySelectorAll("[data-i18n]").forEach(el=>el.innerHTML=t(el.dataset.i18n).replace("{y}",new Date().getFullYear()));
 document.querySelectorAll("[data-i18n-aria]").forEach(el=>el.setAttribute("aria-label",t(el.dataset.i18nAria)));
 document.querySelectorAll("[data-wa]").forEach(a=>{a.href=waUrl();a.target="_blank";a.rel="noopener"});
 document.querySelectorAll("[data-gh]").forEach(a=>a.href=CFG.github);
 document.querySelectorAll("[data-ig]").forEach(a=>a.href=CFG.instagram);
 document.querySelectorAll(".flag").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===l));
 if(dlg.open)dlg.close();
 render();first=false;
 try{localStorage.setItem("lang",l)}catch(e){}
}
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
document.querySelector(".langs").addEventListener("click",e=>{const b=e.target.closest("[data-lang]");if(b&&b.dataset.lang!==lang)setLang(b.dataset.lang)});
/* demos ao vivo: escala a página de 1280px para caber no card */
function fitLive(){document.querySelectorAll(".view").forEach(v=>v.style.setProperty("--s",v.clientWidth/1280))}
addEventListener("resize",fitLive);
/* destaque de luz que segue o mouse nos cards */
$("#grid").addEventListener("pointermove",e=>{const c=e.target.closest(".card");if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px")});
/* modal */
$("#grid").addEventListener("click",e=>{const b=e.target.closest("[data-i]");if(!b)return;const p=PROJECTS[b.dataset.i];
 $("#dt").textContent=p.n;
 $("#dbody").innerHTML=`<p style="color:var(--mu)">${esc(L(p.d))}</p><div class="ok"><h4>${t("ok")}</h4><ul>${p.ok.map(x=>`<li>${esc(L(x))}</li>`).join("")}</ul></div>${p.pl.length?`<div class="pl"><h4>${t("pl")}</h4><ul>${p.pl.map(x=>`<li>${esc(L(x))}</li>`).join("")}</ul></div>`:""}<p class="note">${esc(L(p.note))}</p>`;
 dlg.showModal();lenis&&lenis.stop()});
const closeD=()=>dlg.close();$("#dx").onclick=closeD;
dlg.addEventListener("click",e=>{if(e.target===dlg)closeD()});dlg.addEventListener("close",()=>lenis&&lenis.start());
/* menu mobile */
const mb=$("#mb"),nav=$("#nav");
mb.onclick=()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o);mb.textContent=o?"✕":"☰"};
nav.addEventListener("click",e=>{if(e.target.tagName==="A"){nav.classList.remove("open");mb.setAttribute("aria-expanded","false");mb.textContent="☰"}});
/* scroll suave (Lenis) + barra de progresso */
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches,prog=$("#prog");
function onScroll(y){const h=document.documentElement.scrollHeight-innerHeight;prog.style.transform=`scaleX(${h>0?Math.min(1,y/h):0})`}
if(window.Lenis&&!reduce){lenis=new Lenis({lerp:.085,wheelMultiplier:.95});lenis.on("scroll",e=>onScroll(e.scroll));
 (function raf(t){lenis.raf(t);requestAnimationFrame(raf)})(0);
 document.addEventListener("click",e=>{const a=e.target.closest('a[href^="#"]');if(!a||a.getAttribute("href")==="#")return;
  const el=document.querySelector(a.getAttribute("href"));if(el){e.preventDefault();lenis.scrollTo(el,{offset:a.getAttribute("href")==="#topo"?0:-60,duration:1.3})}})
}else addEventListener("scroll",()=>onScroll(scrollY),{passive:true});
/* idioma inicial: salvo > idioma do navegador */
let saved=null;try{saved=localStorage.getItem("lang")}catch(e){}
setLang(saved==="pt"||saved==="en"?saved:(navigator.language||"pt").toLowerCase().startsWith("pt")?"pt":"en");
/* código digitado no hero (igual nos dois idiomas) */
const lines=[
'<span class="c">// who am I</span>',
'<span class="k">const</span> <span class="f">ithalo</span> = {',
'  role: <span class="s">"Web developer"</span>,',
'  stack: [<span class="s">"HTML"</span>, <span class="s">"CSS"</span>, <span class="s">"JavaScript"</span>, <span class="s">"Python"</span>],',
'  languages: [<span class="s">"pt-BR"</span>, <span class="s">"en (fluent)"</span>],',
'  openToProjects: <span class="k">true</span>',
'};',
'',
'<span class="f">ithalo</span>.<span class="f">talk</span>(<span class="s">"your project"</span>);'];
const code=$("#code");
if(reduce){code.innerHTML=lines.join("\n")}else{
 let li=0,done="";const tmp=document.createElement("div");
 (function step(){if(li>=lines.length){code.innerHTML=done+'<span class="caret"></span>';return}
  tmp.innerHTML=lines[li];const txt=tmp.textContent;let n=0;
  (function ch(){n+=2;
   if(n>=txt.length){done+=lines[li]+"\n";li++;code.innerHTML=done+'<span class="caret"></span>';setTimeout(step,70);return}
   let shown=0,out="";tmp.innerHTML=lines[li];
   (function walk(node){node.childNodes.forEach(c=>{if(c.nodeType===3){const take=Math.max(0,Math.min(c.data.length,n-shown));out+=esc(c.data.slice(0,take));shown+=c.data.length}else{out+=`<span class="${c.className}">`;walk(c);out+="</span>"}})})(tmp);
   code.innerHTML=done+out+'<span class="caret"></span>';setTimeout(ch,16)})()
 })()}
