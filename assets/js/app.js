/* Hive : navigation commune, rendu des listes et interactions. Aucune dépendance. */
(function () {
  "use strict";

  var D = window.HIVE_DATA;
  var PAGE = document.body.getAttribute("data-page");

  /* ---------- Icônes (mêmes tracés que les maquettes) ---------- */
  var I = {
    check: '<circle cx="12" cy="12" r="8.5"/><path d="m8.5 12.2 2.4 2.4 4.6-5"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    bell: '<path d="M6 9a6 6 0 1 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/>',
    pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
    bus: '<rect x="5" y="4" width="14" height="13" rx="2.5"/><path d="M5 11h14M8 20v-3M16 20v-3"/>',
    cal: '<rect x="4" y="5.5" width="16" height="14" rx="2"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>',
    shield: '<path d="M12 3.5 5 6v5.5c0 4.3 3 7.6 7 9 4-1.4 7-4.7 7-9V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    users: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3 19c.6-3 3-4.6 6-4.6s5.4 1.6 6 4.6"/><path d="M16 5.6a3.2 3.2 0 0 1 0 6M17.5 14.6c1.8.5 3 1.9 3.5 4.4"/>',
    box: '<path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5z"/><path d="M4 8.5 12 13l8-4.5M12 13v7"/>',
    chair: '<path d="M7 4h10v8H7z"/><path d="M5 12h14v3H5zM7 15v5M17 15v5"/>',
    bike: '<circle cx="6" cy="16" r="3.5"/><circle cx="18" cy="16" r="3.5"/><path d="M6 16l4-7h5l3 7M10 9 8.5 6H7M14 6h2"/>',
    calc: '<rect x="6" y="3.5" width="12" height="17" rx="2"/><path d="M9 7.5h6M9 12h.01M12 12h.01M15 12h.01M9 15.5h.01M12 15.5h.01M15 15.5h.01"/>',
    micro: '<rect x="3.5" y="6" width="17" height="12" rx="2"/><rect x="6" y="8.5" width="9" height="7" rx="1"/><path d="M18 9.5v.01M18 12.5v.01"/>',
    book: '<path d="M5 4.5h10.5A2.5 2.5 0 0 1 18 7v12.5H7.5A2.5 2.5 0 0 1 5 17z"/><path d="M5 17a2.5 2.5 0 0 1 2.5-2.5H18"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
    spark: '<path d="M12 3.5v4M12 16.5v4M3.5 12h4M16.5 12h4M6 6l2.8 2.8M15.2 15.2 18 18M6 18l2.8-2.8M15.2 8.8 18 6"/>',
    chart: '<path d="M4 19.5h16"/><path d="M6.5 16v-4M11 16V8M15.5 16v-6M20 16V5"/>',
    lock: '<rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8h.01"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    cart: '<path d="M4 5h2l2 10h9.5l2-7H7"/><circle cx="9.5" cy="19" r="1.3"/><circle cx="17" cy="19" r="1.3"/>',
    wash: '<rect x="5" y="3.5" width="14" height="17" rx="2"/><circle cx="12" cy="13" r="4"/><path d="M8 6.5h.01M11 6.5h.01"/>',
    cross: '<path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z"/>',
    ticket: '<path d="M3.5 8A1.5 1.5 0 0 1 5 6.5h14A1.5 1.5 0 0 1 20.5 8v2.2a1.8 1.8 0 0 0 0 3.6V16a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 16v-2.2a1.8 1.8 0 0 0 0-3.6z"/><path d="M14.5 7v1.5M14.5 11.25v1.5M14.5 15.5V17"/>',
    filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
    home: '<path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>',
    shop: '<path d="M4.5 9 6 4.5h12L19.5 9"/><path d="M4.5 9h15v1.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0z"/><path d="M6 13v6.5h12V13"/>',
    route: '<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h8a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h8"/>',
    invest: '<path d="M4 19.5h16"/><path d="m5 15 4.5-4.5 3.5 3.5L19 8"/><path d="M15 8h4v4"/>',
    me: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5"/>'
  };
  var STAR = '<path d="M12 3.6l2.5 5.1 5.6.8-4 3.9.9 5.6L12 16.4 7 19l.9-5.6-4-3.9 5.6-.8z"/>';

  var NAV = [
    ["logements", "Logements", "index.html", "home"],
    ["marche", "Marché", "marche.html", "shop"],
    ["parcours", "Parcours", "parcours.html", "route"],
    ["investir", "Investir", "investir.html", "invest"],
    ["moi", "Moi", null, "me"]
  ];
  var SECTION = { logements: "logements", logement: "logements", marche: "marche", parcours: "parcours", explorer: "parcours", investir: "investir" };

  /* ---------- Outils ---------- */
  function svg(name, size) {
    var s = size || 18;
    return '<svg aria-hidden="true" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">' + (I[name] || "") + "</svg>";
  }
  function ico(name, extra) { return '<span class="ico' + (extra ? " " + extra : "") + '">' + svg(name) + "</span>"; }
  function esc(t) {
    return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function fr(n) { return Number(n).toFixed(1).replace(".", ","); }
  function euros(n) { return Number(n).toLocaleString("fr-FR", { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 }) + "\u00a0€"; }
  function norm(t) { return String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function stars(n) {
    var out = "";
    for (var i = 0; i < 5; i++) {
      var on = i < Math.round(n);
      out += '<svg aria-hidden="true" viewBox="0 0 24 24" style="fill:' + (on ? "#322C26" : "none") + '" stroke="#322C26" stroke-width="1.6" stroke-linejoin="round">' + STAR + "</svg>";
    }
    return '<span class="stars" role="img" aria-label="Note ' + fr(n) + ' sur 5">' + out + "</span>";
  }
  function tags(list) {
    return '<div class="tags">' + list.map(function (t) {
      return '<span class="tag' + (t[1] ? " tag--fill" : "") + '">' + (t[2] ? ico(t[2]) : "") + esc(t[0]) + "</span>";
    }).join("") + "</div>";
  }

  var store = {
    get: function (k, def) {
      try { var v = window.localStorage.getItem("hive." + k); return v === null ? def : JSON.parse(v); } catch (e) { return def; }
    },
    set: function (k, v) {
      try { window.localStorage.setItem("hive." + k, JSON.stringify(v)); } catch (e) { /* stockage indisponible : on garde l'état en mémoire */ }
    }
  };

  var toastTimer;
  function toast(msg) {
    var t = $(".toast");
    t.textContent = msg;
    t.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("is-visible"); }, 3200);
  }

  /* ---------- Cadre commun : barre latérale, barre du bas, en-tête mobile ---------- */
  function shell() {
    var cur = SECTION[PAGE];
    var app = $(".app");

    function links(withPill) {
      return NAV.map(function (n) {
        var inner = withPill ? '<span class="pill">' + svg(n[3], 22) + "</span>" + n[1] : svg(n[3], 20) + n[1];
        if (!n[2]) return '<button type="button" data-moi>' + inner + "</button>";
        return '<a href="' + n[2] + '"' + (n[0] === cur ? ' aria-current="page"' : "") + ">" + inner + "</a>";
      }).join("");
    }

    var side = document.createElement("aside");
    side.className = "sidebar";
    side.innerHTML =
      '<a class="brand" href="index.html"><img src="assets/img/logo.png" alt="" width="30" height="30"><span>HIVE</span></a>' +
      '<nav aria-label="Navigation principale">' + links(false) + "</nav>" +
      '<div class="profile glass"><span class="avatar" aria-hidden="true">' + D.eleve.prenom.charAt(0) + "</span>" +
      "<span><strong>" + esc(D.eleve.prenom + " " + D.eleve.nom) + '</strong><span class="muted">KEDGE · ' + esc(D.eleve.programme) + "</span></span></div>";
    app.insertBefore(side, app.firstChild);

    var top = document.createElement("div");
    top.className = "topbar topbar--mobile";
    top.innerHTML = '<a class="brand" href="index.html"><img src="assets/img/logo.png" alt="" width="30" height="30"><span>HIVE</span></a>' +
      '<button type="button" class="icon-btn" aria-label="Notifications" data-notif>' + svg("bell", 20) + "</button>";
    var page = $(".page");
    page.insertBefore(top, page.firstChild);

    var nav = document.createElement("nav");
    nav.className = "bottom-nav";
    nav.setAttribute("aria-label", "Navigation principale");
    nav.innerHTML = links(true);
    document.body.appendChild(nav);

    var fade = document.createElement("div");
    fade.className = "fade";
    fade.setAttribute("aria-hidden", "true");
    document.body.appendChild(fade);

    var t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    t.setAttribute("aria-live", "polite");
    document.body.appendChild(t);

    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-moi]")) toast("Ton profil est à jour : dossier vérifié, garantie Visale.");
      if (e.target.closest("[data-notif]")) toast("Aucune nouvelle notification.");
      var m = e.target.closest("[data-toast]");
      if (m) toast(m.getAttribute("data-toast"));
    });

    $$("[data-icon]").forEach(function (el) { el.innerHTML = svg(el.getAttribute("data-icon")); });
  }

  /* ---------- Logements ---------- */
  var PHOTO_SECOURS = "assets/img/studio.png";
  function photoTag(src, alt, extra) {
    return '<img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" referrerpolicy="no-referrer"' + (extra || "") +
      " onerror=\"this.onerror=null;this.src='" + PHOTO_SECOURS + "'\">";
  }
  function surfaceTxt(s) { return String(s).replace(".", ",") + " m²"; }
  function avisTxt(n) { return n + (n > 1 ? " avis d'élèves" : " avis d'élève"); }
  function logementsVisibles() {
    return D.logements.filter(function (l) { return l.agence || D.afficherExemples !== false; });
  }
  function tagsLogement(l) {
    return l.tags;
  }

  function pageLogements() {
    var state = { tab: "dispo", filters: {}, q: "", tri: "pertinence" };
    var TESTS = {
      note: function (l) { return l.nbAvis > 0 && l.note >= 4; },
      prix: function (l) { return l.prix <= 650; },
      meuble: function (l) { return l.meuble === true; },
      mobilite: function (l) { return l.mobilite; }
    };
    var TRIS = {
      pertinence: function (a, b) { return (b.agence ? 1 : 0) - (a.agence ? 1 : 0); },
      prix: function (a, b) { return a.prix - b.prix; },
      trajet: function (a, b) { return a.minutes - b.minutes; }
    };

    function matches(l) {
      for (var k in state.filters) if (state.filters[k] && !TESTS[k](l)) return false;
      var txt = l.titre + " " + l.quartier + " " + l.trajet + " " + (l.accroche || "") + " " + (l.agence ? D.agences[l.agence].nom : "");
      if (state.q && norm(txt).indexOf(norm(state.q)) === -1) return false;
      return true;
    }

    function card(l) {
      var img = l.photos && l.photos.length ? photoTag(l.photos[0], "", ' width="400" height="150"') :
        '<img src="assets/img/' + l.image + '.png" alt="" width="400" height="150" loading="lazy"' + (l.miroir ? ' style="transform: scaleX(-1)"' : "") + ">";
      return '<a class="listing glass" href="logement.html?id=' + l.id + '">' + img +
        '<div class="listing__body">' +
        '<div class="listing__row"><span class="listing__title">' + esc(l.titre) + '</span><span class="price">' + euros(l.prix) + "<small> /mois</small></span></div>" +
        '<span class="listing__place">' + esc(l.quartier.split(" · ")[0] + " · " + l.trajet) + "</span>" +
        (l.nbAvis ? '<span class="rating">' + stars(l.note) + fr(l.note) + ' <span class="muted">· ' + esc(avisTxt(l.nbAvis)) + "</span></span>"
                  : '<span class="rating"><span class="muted">Pas encore d\'avis d\'élève</span></span>') +
        (l.statut === "bientot" ? '<span class="when">' + ico("cal") + esc(l.dispo) + "</span>" : "") +
        (l.citation ? '<p class="quote">« ' + esc(l.citation) + " »</p>" : '<p class="listing__pitch">' + esc(l.accroche || "") + "</p>") +
        tags(tagsLogement(l)) + "</div></a>";
    }

    function render() {
      var visible = logementsVisibles().filter(matches);
      ["dispo", "bientot"].forEach(function (s) {
        $('[data-count="' + s + '"]').textContent = visible.filter(function (l) { return l.statut === s; }).length;
      });
      var list = visible.filter(function (l) { return l.statut === state.tab; }).slice().sort(TRIS[state.tri]);
      $("#liste").innerHTML = list.length ? list.map(card).join("") :
        '<p class="empty glass">Aucun logement ne correspond à ces filtres. <button type="button" class="btn btn--ghost" data-reset>Tout afficher</button></p>';

      var pins = list.map(function (l) {
        return '<a class="pin" href="logement.html?id=' + l.id + '" style="left:' + l.carte[0] + "%;top:" + l.carte[1] + '%" aria-label="' + esc(l.titre + ", " + l.prix + " € par mois") + '">' + euros(l.prix) + "</a>";
      }).join("");
      $("#pins").innerHTML = pins + '<span class="pin pin--campus" style="left:72%;top:85%">' + ico("target") + "KEDGE Luminy</span>";
    }

    $$("#onglets [data-tab]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.tab = b.getAttribute("data-tab");
        $$("#onglets [data-tab]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        render();
      });
    });
    $$("#filtres [data-filter]").forEach(function (b) {
      b.addEventListener("click", function () {
        var k = b.getAttribute("data-filter");
        state.filters[k] = !state.filters[k];
        b.setAttribute("aria-pressed", String(state.filters[k]));
        render();
      });
    });
    $("#tri").addEventListener("change", function (e) { state.tri = e.target.value; render(); });
    $("#recherche").addEventListener("input", function (e) { state.q = e.target.value.trim(); render(); });
    document.addEventListener("click", function (e) {
      if (!e.target.closest("[data-reset]")) return;
      state.filters = {}; state.q = "";
      $("#recherche").value = "";
      $$("#filtres [data-filter]").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
      render();
    });
    render();
  }

  /* ---------- Fiche logement ---------- */
  function pageLogement() {
    var id = new URLSearchParams(window.location.search).get("id") || D.logements[0].id;
    var l = logementsVisibles().filter(function (x) { return x.id === id; })[0];
    var root = $("#fiche");
    if (!l) {
      root.innerHTML = '<p class="empty glass">Ce logement n\'existe pas ou n\'est plus en ligne. <a href="index.html">Voir les logements</a></p>';
      return;
    }
    document.title = l.titre + " · Hive";
    var ag = l.agence ? D.agences[l.agence] : null;

    function section(titre, corps) { return '<section class="glass card"><h2>' + titre + "</h2>" + corps + "</section>"; }
    function factsHtml(list) {
      return '<div class="facts">' + list.map(function (f) { return '<div class="fact"><span>' + esc(f[0]) + "</span><b>" + esc(f[1]) + "</b></div>"; }).join("") + "</div>";
    }
    var around = '<div class="around around--2">' + l.autour.map(function (a) {
      return '<div class="around__item"><span class="bubble">' + svg(a[0]) + "</span><span><strong>" + esc(a[1]) + '</strong><span class="muted">' + esc(a[2]) + "</span></span></div>";
    }).join("") + "</div>";

    /* Galerie */
    var gallery, extra = "";
    if (l.photos && l.photos.length) {
      gallery = l.photos.slice(0, 3).map(function (src, i) { return photoTag(src, "Photo " + (i + 1) + " : " + l.titre); }).join("");
      if (l.photos.length > 3) {
        extra = '<button type="button" class="btn btn--ghost btn--sm photos-btn" data-photos aria-expanded="false" aria-controls="photos">' + ico("plus") + "Voir les " + l.photos.length + " photos</button>" +
          '<div class="photos-all" id="photos" hidden>' + l.photos.map(function (src, i) { return photoTag(src, "Photo " + (i + 1) + " : " + l.titre); }).join("") + "</div>";
      }
    } else {
      var autre = l.image === "studio" ? "coloc" : "studio", flip = ' style="transform: scaleX(-1)"';
      gallery = '<img src="assets/img/' + l.image + '.png" alt="' + esc(l.titre + ", pièce principale") + '"' + (l.miroir ? flip : "") + ">" +
        '<img src="assets/img/' + autre + '.png" alt="Autre vue du logement">' +
        '<img src="assets/img/' + l.image + '.png" alt="Coin bureau"' + (l.miroir ? "" : flip) + ">";
    }

    /* En-tête */
    var head =
      '<header class="stack">' +
      '<div><div class="eyebrow">' + esc(ag ? "Annonce " + ag.nom : D.ecole) + "</div><h1>" + esc(l.titre) + "</h1></div>" +
      '<div class="meta"><span>' + ico("pin") + esc(l.quartier) + "</span><span>" + ico("bus") + esc(l.trajet) + "</span>" +
      (l.nbAvis ? '<span class="rating">' + stars(l.note) + fr(l.note) + ' <span class="muted">· ' + esc(avisTxt(l.nbAvis)) + "</span></span>"
                : "<span>" + ico("info") + "Pas encore d'avis d'élève</span>") + "</div>" +
      tags(ag ? l.tags.concat(l.dpe && l.dpe !== "En cours" ? [["DPE " + l.dpe, false]] : [])
              : tagsLogement(l).concat(l.visale ? [["Visale acceptée", false]] : []).concat([["Propriétaire vérifié", false, "shield"]]).filter(function (t, i, a) {
                  return a.map(function (x) { return x[0]; }).indexOf(t[0]) === i;
                })) +
      "</header>";

    /* Colonne principale */
    var main;
    if (ag) {
      var meuble = l.meuble === true ? "Oui" : (l.meuble === false ? "Non" : "À confirmer");
      var costs = [
        ["Loyer charges comprises", euros(l.prix) + " /mois"],
        ["dont provision sur charges", euros(l.charges) + " /mois"],
        ["Honoraires d'agence (part locataire)", euros(l.honoraires)],
        ["État des lieux (part locataire)", euros(l.edl)],
        ["Dépôt de garantie", euros(l.depot)]
      ];
      main =
        section("Ce que tu paies", '<dl class="costs">' + costs.map(function (c) { return "<div><dt>" + esc(c[0]) + "</dt><dd>" + esc(c[1]) + "</dd></div>"; }).join("") + "</dl>" +
          '<p class="sub">Honoraires et état des lieux sont payés à la signature du bail.</p>') +
        section("Le logement", '<p class="sub">' + esc(l.accroche) + "</p>" + factsHtml([
          ["Surface", surfaceTxt(l.surface)], ["Pièces", String(l.pieces)], ["Étage", l.etage], ["Exposition", l.exposition],
          ["Meublé", meuble], ["Bail", l.bail], ["Classe énergie (DPE)", l.dpe], ["Gaz à effet de serre (GES)", l.ges],
          ["Coût énergie estimé", l.energie || "Non communiqué"]
        ])) +
        section("Équipements", tags(l.equipements.map(function (e) { return [e, false]; }))) +
        section("Autour du logement", around) +
        '<section class="glass card"><div class="section-head"><h2>Avis des élèves</h2></div>' +
        '<p class="sub">Pas encore d\'avis sur ce logement. Les élèves qui y habiteront pourront le noter après leur séjour.</p></section>';
    } else {
      var bars = Object.keys(l.criteres).map(function (k) {
        var v = l.criteres[k];
        return '<div class="bar"><span>' + esc(k) + '</span><span class="bar__track"><span class="bar__fill" style="display:block;width:' + (v * 20) + '%"></span></span><b>' + v + "</b></div>";
      }).join("");
      main =
        '<section class="glass card"><div class="section-head"><h2>Avis des élèves</h2><span class="rating">' + stars(l.note) + fr(l.note) + "</span></div>" +
        '<div class="bars">' + bars + "</div>" +
        "<blockquote>« " + esc(l.avisLong) + " »<footer>" + ico("check") + esc(l.auteur) + " · avis vérifié</footer></blockquote></section>" +
        section("Autour du logement", around) +
        section("Le logement", factsHtml([
          ["Surface", surfaceTxt(l.surface) + (l.meuble ? ", meublé" : ", non meublé")],
          ["Loyer charges comprises", euros(l.prix)],
          ["Bail possible", l.bail],
          ["Disponible", l.statut === "dispo" ? "Maintenant" : l.dispo.replace("Se libère le ", "").replace("Se libère ", "")],
          ["Classe énergie (DPE)", l.dpe],
          ["Garantie Visale", l.visale ? "Acceptée" : "Non acceptée"]
        ]));
    }

    /* Encadré de candidature */
    var depot = ag ? "Dépôt de garantie : " + euros(l.depot) :
      (l.mobilite ? "Bail mobilité : pas de dépôt de garantie" : (l.meuble ? "Dépôt de garantie : 2 mois de loyer maximum" : "Dépôt de garantie : 1 mois de loyer maximum"));
    var booking =
      '<div class="booking glass">' +
      '<div class="booking__price"><b>' + euros(l.prix) + '</b><span class="muted">par mois, charges comprises</span></div>' +
      "<ul><li>" + ico("cal") + esc(l.dispo) + "</li><li>" + ico("lock") + esc(depot) + "</li>" +
      (ag ? "<li>" + ico("shield") + esc("Annonce " + ag.nom + ", réf. " + l.ref) + "</li>" : "<li>" + ico("shield") + "Propriétaire et logement vérifiés</li>") + "</ul>" +
      '<button type="button" class="btn btn--full" data-candidater>Candidater avec mon dossier</button>' +
      '<button type="button" class="btn btn--ghost btn--full" data-toast="' + (ag ? "Demande envoyée à l'agence : elle te propose un créneau de visite." : "Demande envoyée : le propriétaire te propose un créneau de visite vidéo.") + '">' + (ag ? "Demander une visite" : "Demander une visite vidéo") + "</button>" +
      (ag ? '<a class="btn btn--ghost btn--full" href="' + esc(l.lien) + '" target="_blank" rel="noopener">Voir l\'annonce chez l\'agence' + ico("arrow") + "</a>" : "") +
      '<p class="sub" style="text-align:center">' + (ag ? "Rien à payer à Hive. Honoraires d'agence à la signature du bail, plafonnés par la loi." : "Rien à payer avant la signature du bail") + "</p>" +
      '<div class="dossier">' + ico("check", "ico--lg") + "<span><strong>Ton dossier est prêt</strong>Vérifié · garantie Visale · recommandé par ton propriétaire</span></div>" +
      "</div>";

    root.innerHTML =
      '<a class="back glass" href="index.html">' + ico("back") + "Logements</a>" +
      '<div class="gallery">' + gallery + "</div>" + extra + head +
      '<div class="cols cols--stretch"><div class="cols__main">' + main + '</div><aside class="cols__side">' + booking + "</aside></div>";

    var pb = $("[data-photos]");
    if (pb) pb.addEventListener("click", function () {
      var g = $("#photos");
      g.hidden = !g.hidden;
      pb.setAttribute("aria-expanded", String(!g.hidden));
      pb.lastChild.nodeValue = g.hidden ? "Voir les " + l.photos.length + " photos" : "Masquer les photos";
    });

    var sent = store.get("candidatures", []);
    var btn = $("[data-candidater]");
    function mark() { btn.textContent = "Candidature envoyée"; btn.disabled = true; btn.style.opacity = ".7"; }
    if (sent.indexOf(l.id) !== -1) mark();
    btn.addEventListener("click", function () {
      sent.push(l.id); store.set("candidatures", sent); mark();
      toast(ag ? "Dossier envoyé à " + ag.nom + ". Hive te tient au courant." : "Dossier envoyé au propriétaire. Rien à payer avant la signature.");
    });
  }

  /* ---------- Marché : annonces avec tags, dont la revente de billets ---------- */
  function pageMarche() {
    var p = D.pack;
    $("#pack-items").innerHTML = p.objets.map(function (o) {
      return '<div class="pack__item">' + svg(o[0], 24) + "<span>" + esc(o[1]) + "</span></div>";
    }).join("");

    var CATS = ["Tout", "Billets", "Meubles", "Vélos", "Manuels", "Électroménager", "Tenue d'entretien"];
    var ICONE = { Billets: "ticket", Meubles: "chair", "Vélos": "bike", Manuels: "book", "Électroménager": "micro", "Tenue d'entretien": "users" };
    var MAX_BILLETS = 2;
    var mine = store.get("annonces", []);
    var state = { cat: "Tout", tags: [], q: "", allTags: false };
    var today = new Date(); today.setHours(0, 0, 0, 0);

    function isTicket(o) { return o.categorie === "Billets"; }
    function upcoming(o) { return !isTicket(o) || new Date(o.date + "T23:59:00") >= today; }
    function all() { return mine.concat(D.objets).filter(upcoming); }
    function dateCourte(iso) {
      return new Date(iso + "T12:00:00").toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short" });
    }
    function prix(o) { return o.prix === 0 ? "Gratuit" : euros(o.prix); }
    function star() {
      return '<svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" style="fill:#322C26" stroke="#322C26" stroke-width="1.6" stroke-linejoin="round">' + STAR + "</svg>";
    }

    $("#categories").innerHTML = CATS.map(function (c, i) {
      return '<button type="button" class="chip" data-cat="' + esc(c) + '" aria-pressed="' + (i === 0) + '">' + esc(c) + "</button>";
    }).join("");

    function card(o) {
      var t = isTicket(o);
      var who = o.mine ? "Toi" : o.vendeur;
      return '<article class="item glass">' +
        '<span class="item__visual">' + svg(o.icone, 32) + (t ? '<span class="item__date">' + ico("cal") + esc(dateCourte(o.date)) + "</span>" : "") + "</span>" +
        '<div class="item__row"><span class="item__name">' + esc(o.nom) + '</span><span class="item__price">' + prix(o) + (t ? "<small> /place</small>" : "") + "</span></div>" +
        (t ? '<span class="item__seller">Prix d\'achat : ' + euros(o.prixAchat) + " · " + o.places + (o.places > 1 ? " places" : " place") + "</span>" : "") +
        '<span class="item__seller">' + esc(who) + (o.mine ? "" : ' · <span class="nowrap"><span class="ico" role="img" aria-label="Vendeur noté ' + fr(o.note) + ' sur 5">' + star() + "</span>" + fr(o.note) + "</span>") + "</span>" +
        '<span class="item__seller"><span class="ico">' + svg("pin") + "</span>" + esc(o.lieu) + "</span>" +
        '<div class="tags item__tags">' + o.tags.map(function (tg) {
          var on = state.tags.indexOf(tg) !== -1;
          return '<button type="button" class="tag tag-btn' + (on ? " tag--fill" : "") + '" data-tag="' + esc(tg) + '" aria-pressed="' + on + '">' + esc(tg) + "</button>";
        }).join("") + "</div>" +
        (o.mine ? '<button type="button" class="btn btn--ghost btn--sm" data-retirer="' + o.id + '">Retirer l\'annonce</button>'
                : '<button type="button" class="btn btn--ghost btn--sm" data-toast="Message envoyé à ' + esc(o.vendeur.split(",")[0]) + ' : réponse dans ta messagerie Hive.">Contacter</button>') +
        "</article>";
    }

    function render() {
      var base = all().filter(function (o) {
        if (state.cat !== "Tout" && o.categorie !== state.cat) return false;
        if (state.q && norm(o.nom + " " + o.categorie + " " + o.tags.join(" ")).indexOf(norm(state.q)) === -1) return false;
        return true;
      });

      var counts = {};
      base.forEach(function (o) { o.tags.forEach(function (tg) { counts[tg] = (counts[tg] || 0) + 1; }); });
      state.tags.forEach(function (tg) { if (!counts[tg]) counts[tg] = 0; });
      var names = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a] || a.localeCompare(b, "fr"); });
      var LIMITE = 10, cache = 0;
      if (!state.allTags && names.length > LIMITE) {
        var shown = names.slice(0, LIMITE);
        state.tags.forEach(function (tg) { if (shown.indexOf(tg) === -1) shown.push(tg); });
        cache = names.length - shown.length;
        names = shown;
      }
      $("#tags").innerHTML = names.map(function (tg) {
        return '<button type="button" class="pill-btn" data-tag="' + esc(tg) + '" aria-pressed="' + (state.tags.indexOf(tg) !== -1) + '">' + esc(tg) + ' <span class="count">' + counts[tg] + "</span></button>";
      }).join("") + (cache ? '<button type="button" class="pill-btn pill-btn--clear" data-tags-more>+ ' + cache + " tags</button>" : "")
        + (state.allTags && names.length > LIMITE ? '<button type="button" class="pill-btn pill-btn--clear" data-tags-more>Moins de tags</button>' : "")
        + (state.tags.length ? '<button type="button" class="pill-btn pill-btn--clear" data-tags-clear>Effacer les tags</button>' : "");

      var list = base.filter(function (o) { return state.tags.every(function (tg) { return o.tags.indexOf(tg) !== -1; }); });
      $("#nb-annonces").textContent = list.length + (list.length > 1 ? " annonces" : " annonce");
      $("#note-billets").hidden = !(state.cat === "Billets" || list.some(isTicket) && state.cat === "Tout" && state.tags.length);
      $("#objets").innerHTML = list.length ? list.map(card).join("") :
        '<p class="empty glass" style="grid-column:1/-1">Aucune annonce avec ces filtres. <button type="button" class="btn btn--ghost" data-tags-clear>Effacer les tags</button></p>';
    }

    function toggleTag(tg) {
      var i = state.tags.indexOf(tg);
      if (i === -1) state.tags.push(tg); else state.tags.splice(i, 1);
      render();
    }

    $("#categories").addEventListener("click", function (e) {
      var b = e.target.closest("[data-cat]");
      if (!b) return;
      state.cat = b.getAttribute("data-cat");
      state.tags = [];
      $$("#categories [data-cat]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      render();
    });
    $("#tags").addEventListener("click", function (e) {
      if (e.target.closest("[data-tags-more]")) { state.allTags = !state.allTags; render(); return; }
      var b = e.target.closest("[data-tag]");
      if (b) toggleTag(b.getAttribute("data-tag"));
    });
    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-tags-clear]")) { state.tags = []; render(); }
    });
    $("#objets").addEventListener("click", function (e) {
      var b = e.target.closest("[data-tag]");
      if (b) { toggleTag(b.getAttribute("data-tag")); return; }
      var r = e.target.closest("[data-retirer]");
      if (r) {
        mine = mine.filter(function (o) { return o.id !== r.getAttribute("data-retirer"); });
        store.set("annonces", mine);
        render();
        toast("Annonce retirée.");
      }
    });
    $("#recherche").addEventListener("input", function (e) { state.q = e.target.value.trim(); render(); });

    /* Mise en vente */
    var panel = $("#vendre"), form = $("#form-vente"), err = $("#erreur-vente");
    var chosen = [];
    $("#cat-vente").innerHTML = CATS.slice(1).map(function (c) { return "<option>" + esc(c) + "</option>"; }).join("");

    function suggestions() {
      var t = form.categorie.value === "Billets";
      var list = (t ? D.tagsProposes.Billets : D.tagsProposes.autres).concat(chosen).filter(function (x, i, a) { return a.indexOf(x) === i; });
      $("#tags-vente").innerHTML = list.map(function (tg) {
        return '<button type="button" class="pill-btn" data-choix="' + esc(tg) + '" aria-pressed="' + (chosen.indexOf(tg) !== -1) + '">' + esc(tg) + "</button>";
      }).join("");
    }
    function syncForm() {
      var t = form.categorie.value === "Billets";
      $("#champs-billet").hidden = !t;
      ["date", "prixAchat", "engagement"].forEach(function (n) { form[n].required = t; });
      form.nom.placeholder = t ? "Place concert · Le Dôme" : "Bureau et chaise";
      $("#label-prix").firstChild.nodeValue = t ? "Prix par place (€)" : "Prix (€, 0 pour un don)";
      chosen = chosen.filter(function (x) { return (t ? D.tagsProposes.Billets : D.tagsProposes.autres).indexOf(x) !== -1 || [].concat(D.tagsProposes.Billets, D.tagsProposes.autres).indexOf(x) === -1; });
      suggestions();
    }
    function openPanel(cat) {
      panel.hidden = false;
      if (cat) form.categorie.value = cat;
      syncForm();
      $("[data-sell-open]").setAttribute("aria-expanded", "true");
      form.nom.focus();
    }
    function closePanel() {
      panel.hidden = true;
      $("[data-sell-open]").setAttribute("aria-expanded", "false");
      form.reset(); chosen = []; err.textContent = "";
    }

    document.addEventListener("click", function (e) {
      var o = e.target.closest("[data-sell-open]");
      if (o) { if (panel.hidden) openPanel(o.getAttribute("data-sell-open") || (state.cat !== "Tout" ? state.cat : "")); else closePanel(); }
      if (e.target.closest("[data-sell-close]")) closePanel();
    });
    form.categorie.addEventListener("change", syncForm);
    $("#tags-vente").addEventListener("click", function (e) {
      var b = e.target.closest("[data-choix]");
      if (!b) return;
      var tg = b.getAttribute("data-choix"), i = chosen.indexOf(tg);
      if (i === -1) chosen.push(tg); else chosen.splice(i, 1);
      suggestions();
    });
    function addFreeTag() {
      var v = form.tagLibre.value.trim().replace(/\s+/g, " ");
      if (!v) return;
      v = v.charAt(0).toUpperCase() + v.slice(1, 30);
      if (chosen.indexOf(v) === -1) chosen.push(v);
      form.tagLibre.value = "";
      suggestions();
    }
    $("[data-tag-add]").addEventListener("click", addFreeTag);
    form.tagLibre.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); addFreeTag(); } });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      err.textContent = "";
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var t = form.categorie.value === "Billets";
      var montant = Math.round(Number(form.prix.value));
      var tags = chosen.slice();
      var annonce = {
        id: "u" + Date.now(), mine: true, nom: form.nom.value.trim(), prix: montant, categorie: form.categorie.value,
        icone: ICONE[form.categorie.value] || "box", vendeur: "Toi", note: 0, lieu: t ? "Billet électronique" : "Remise en main propre", tags: tags
      };
      if (t) {
        var achat = Math.round(Number(form.prixAchat.value));
        if (montant > achat) { err.textContent = "Le prix par place ne peut pas dépasser le prix d'achat (" + euros(achat) + ")."; form.prix.focus(); return; }
        if (new Date(form.date.value + "T23:59:00") < today) { err.textContent = "L'événement est déjà passé."; form.date.focus(); return; }
        if (mine.filter(isTicket).length >= MAX_BILLETS) { err.textContent = "Tu as déjà " + MAX_BILLETS + " annonces de billets : la revente reste occasionnelle sur Hive."; return; }
        annonce.date = form.date.value;
        annonce.prixAchat = achat;
        annonce.places = Number(form.places.value);
        tags.push(montant === achat ? "Prix coûtant" : "Sous le prix d'achat");
        if (form.nominatif.checked) tags.push("Billet nominatif", "Transfert officiel");
      } else if (montant === 0) {
        tags.push("Don");
      }
      annonce.tags = tags.filter(function (x, i, a) { return a.indexOf(x) === i; });
      if (!annonce.tags.length) annonce.tags = ["Nouveau"];
      mine.unshift(annonce);
      store.set("annonces", mine);
      var cat = annonce.categorie;
      closePanel();
      state.cat = cat; state.tags = []; state.q = ""; $("#recherche").value = "";
      $$("#categories [data-cat]").forEach(function (x) { x.setAttribute("aria-pressed", String(x.getAttribute("data-cat") === cat)); });
      render();
      toast("Annonce publiée auprès des élèves de KEDGE.");
    });

    if (new URLSearchParams(window.location.search).get("cat") === "Billets") {
      state.cat = "Billets";
      $$("#categories [data-cat]").forEach(function (x) { x.setAttribute("aria-pressed", String(x.getAttribute("data-cat") === "Billets")); });
    }
    render();
  }

  /* ---------- Parcours : de l'entrée à KEDGE au premier emploi ---------- */
  function metierCourant() { return store.get("parcours.metier", D.parcours.metier); }
  function enMetier(id) { return id === "ma" ? "en M&A" : "en trading"; }

  function pageParcours() {
    var P = D.parcours;
    var st = {
      metier: metierCourant(),
      entree: store.get("parcours.entree", P.entree),
      choix: store.get("parcours.choix", {}),
      sel: "p1"
    };

    function M() { return P.metiers[st.metier]; }
    function experiences() { return st.entree === "L3" ? P.experiences : []; }
    function acquis() {
      var out = [];
      experiences().forEach(function (e) { e.acquis.forEach(function (a) { if (out.indexOf(a) === -1) out.push(a); }); });
      return out;
    }
    function annees() {
      return P.annees.map(function (a) {
        return a.id === "l3" && st.entree === "M1"
          ? { id: "avant", label: "Avant KEDGE", dates: "jusqu'en 2026", statut: "figee", titre: "Licence ou classe préparatoire", detail: "Pas encore de stage en finance" }
          : a;
      });
    }
    function periodes() {
      var out = [];
      annees().forEach(function (a) { (a.periodes || []).forEach(function (p) { out.push(p); }); });
      return out;
    }
    function options(pid) {
      var o = M().options[pid];
      return Array.isArray(o) ? o : (experiences().length ? o.avecExp : o.sansExp);
    }
    function choix(pid) {
      var c = (st.choix[st.metier] || {})[pid];
      return c === undefined ? 1 : c;
    }
    function setChoix(pid, i) {
      st.choix[st.metier] = st.choix[st.metier] || {};
      st.choix[st.metier][pid] = i;
      store.set("parcours.choix", st.choix);
    }
    var STATUTS = {
      figee: ico("lock") + "Figée", "en-cours": "En cours", "a-venir": "À venir", objectif: ico("target") + "Objectif"
    };

    function renderHead() {
      $("#eyebrow-metier").textContent = "Mon orientation · " + M().nom;
      $("#metier").textContent = M().titre;
      $("#detail").textContent = "Repli : " + M().repli + (M().salaire ? " · " + M().salaire : "");
      var total = experiences().length + periodes().length;
      var next = periodes()[0];
      $("#stats").innerHTML =
        '<div class="stat"><b>' + experiences().length + " / " + total + '</b><span>étapes franchies</span></div>' +
        '<div class="stat"><b>' + esc(next[1]) + '</b><span>prochaine étape</span></div>';
    }

    function renderAnnees() {
      $("#annees").innerHTML = annees().map(function (a) {
        var body;
        if (a.statut === "figee") {
          var exps = experiences().filter(function (e) { return e.annee === a.id; });
          body = exps.length ? exps.map(function (e) {
            return '<div class="brick brick--done"><small>' + esc(e.type) + "</small><strong>" + esc(e.titre) + "</strong><span>" + esc(e.structure) + "</span><span>" + esc(e.dates) + "</span></div>";
          }).join("") : '<div class="brick brick--done"><strong>' + esc(a.titre) + "</strong><span>" + esc(a.detail) + "</span></div>";
        } else if (a.statut === "en-cours") {
          body = '<div class="brick brick--now"><small>Année en cours</small><strong>' + esc(a.titre) + "</strong><span>" + esc(a.detail) + "</span></div>";
        } else {
          body = a.periodes.map(function (p) {
            var o = options(p[0]), i = choix(p[0]);
            return '<button type="button" class="brick brick--plan" data-periode="' + p[0] + '" aria-pressed="' + (st.sel === p[0]) + '">' +
              "<small>" + esc(p[1]) + "</small><strong>" + esc(o[i][0]) + "</strong><span>" + esc(p[2]) + '</span><span class="brick__level">' + esc(P.niveaux[i]) + "</span></button>";
          }).join("");
        }
        return '<article class="year year--' + a.statut + '"' + (a.statut === "figee" ? " data-figee" : "") + ">" +
          '<div class="year__head"><span class="year__label">' + esc(a.label) + '</span><span class="year__status">' + STATUTS[a.statut] + "</span></div>" +
          '<span class="year__dates">' + esc(a.dates) + "</span>" + body + "</article>";
      }).join("");
    }

    function renderOptions() {
      var p = periodes().filter(function (x) { return x[0] === st.sel; })[0];
      var o = options(st.sel), i = choix(st.sel);
      $("#options").innerHTML =
        '<div class="section-head"><h2>' + esc(p[1]) + " : tes 3 options</h2><span class=\"muted\">" + esc(p[2]) + "</span></div>" +
        '<div class="levels levels--stack">' + o.map(function (x, k) {
          return '<button type="button" class="level" data-choix="' + k + '" aria-pressed="' + (k === i) + '"><small>' + esc(P.niveaux[k]) + "</small><strong>" + esc(x[0]) + "</strong><span>" + esc(x[1]) + "</span></button>";
        }).join("") + "</div>" +
        '<p class="target">' + ico("target") + "<span>" + (st.sel === "emploi" ? "Ton objectif : " : "Ton choix : ") + esc(o[i][0]) + "</span></p>";
    }

    function faits() { return store.get("parcours.objectifs", P.objectifsFaits); }
    function objectifHtml(o, done, full) {
      return '<label class="action glass' + (done ? " is-done" : "") + '"><input type="checkbox" data-objectif="' + o[0] + '"' + (done ? " checked" : "") + ">" +
        '<span class="action__text"><strong>' + esc(o[1]) + '</strong><span class="muted">' + esc(o[2]) + "</span></span>" +
        (full && done ? '<span class="tag tag--fill">' + ico("check") + "Fait</span>" : '<span class="action__date">' + esc(o[3]) + "</span>") + "</label>";
    }
    function renderActions() {
      var f = faits(), all = M().objectifs;
      var nbFaits = all.filter(function (o) { return f.indexOf(o[0]) !== -1; }).length;
      var todo = all.filter(function (o) { return f.indexOf(o[0]) === -1; });
      $("#semestre").textContent = P.semestre + " · " + nbFaits + " faits sur " + all.length;
      var bar = $("#semestre-barre");
      bar.setAttribute("aria-valuemax", all.length);
      bar.setAttribute("aria-valuenow", nbFaits);
      bar.firstElementChild.style.width = (nbFaits / all.length * 100) + "%";
      $("#actions").innerHTML = todo.length ? todo.slice(0, 3).map(function (o) { return objectifHtml(o, false, false); }).join("")
        : '<p class="sub">Tous les objectifs du semestre sont faits.</p>';
      $("#objectifs").innerHTML = all.map(function (o) { return objectifHtml(o, f.indexOf(o[0]) !== -1, true); }).join("");
      var ouvert = !$("#objectifs").hidden;
      $("#actions").hidden = ouvert;
      $("#actions-titre").textContent = ouvert ? "Tous les objectifs du semestre" : "Les 3 actions qui comptent maintenant";
      $("#voir-objectifs").innerHTML = ouvert ? "Revenir aux 3 prioritaires" : ico("plus") + "Voir tous les objectifs du semestre (" + all.length + ")";
    }

    function renderEchelle() {
      var fam = experiences().map(function (e) { return e.famille; });
      $("#echelle-titre").textContent = "L'échelle d'accès " + enMetier(st.metier);
      $("#echelle").innerHTML = M().echelle.map(function (r, k) {
        var done = fam.indexOf(r[0]) !== -1, goal = r[0] === M().cibleEchelle;
        return '<li class="' + (done ? "is-done" : "") + (goal ? " is-goal" : "") + '"><span class="ladder__n">' + (k + 1) + "</span>" +
          '<span class="ladder__text"><strong>' + esc(r[1]) + '</strong><span class="muted">' + esc(r[2]) + "</span></span>" +
          (done ? '<span class="tag tag--fill">' + ico("check") + "Fait</span>" : (goal ? '<span class="tag">Ton objectif</span>' : "")) + "</li>";
      }).join("");
    }

    function renderAcquis() {
      var a = acquis();
      $("#acquis").innerHTML = "<h2>Tes acquis</h2>" +
        (a.length ? '<ul class="acquis">' + a.map(function (x) {
          var u = M().utiles[x];
          return "<li>" + ico(u ? "check" : "info") + "<span><strong>" + esc(x) + '</strong><span class="muted">' + esc(u || "Moins utile " + enMetier(st.metier)) + "</span></span></li>";
        }).join("") + "</ul>" : '<p class="sub">Ta première expérience s\'ajoutera ici à la fin de ton premier stage.</p>') +
        '<h3 class="mini">À acquérir ' + esc(enMetier(st.metier)) + "</h3>" + tags(M().manque.map(function (m) { return [m, false]; }));
    }

    function renderDates() {
      $("#dates").innerHTML = M().dates.map(function (d) {
        return '<div class="date"><span class="date__day"><b>' + esc(d[0]) + "</b><small>" + esc(d[1]) + "</small></span><span><strong>" + esc(d[2]) + '</strong><span class="muted">' + esc(d[3]) + "</span></span></div>";
      }).join("");
    }

    function renderAll() {
      renderHead(); renderAnnees(); renderOptions(); renderActions(); renderEchelle(); renderAcquis(); renderDates();
    }

    $("#annees").addEventListener("click", function (e) {
      var b = e.target.closest("[data-periode]");
      if (b) {
        st.sel = b.getAttribute("data-periode");
        renderAnnees(); renderOptions();
        if (window.innerWidth < 1024) $("#options").scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (e.target.closest("[data-figee]")) toast("Année terminée : elle reste figée, même si tu changes de métier.");
    });
    $("#options").addEventListener("click", function (e) {
      var b = e.target.closest("[data-choix]");
      if (!b) return;
      setChoix(st.sel, Number(b.getAttribute("data-choix")));
      renderAnnees(); renderOptions();
    });
    function onObjectif(e) {
      var k = e.target.getAttribute("data-objectif");
      if (!k) return;
      var f = faits().filter(function (x) { return x !== k; });
      if (e.target.checked) f.push(k);
      store.set("parcours.objectifs", f);
      e.target.closest(".action").classList.toggle("is-done", e.target.checked);
      if (e.target.checked) toast("Objectif fait. Le suivant prend sa place.");
      setTimeout(renderActions, e.target.closest("#actions") ? 450 : 0);
    }
    $("#actions").addEventListener("change", onObjectif);
    $("#objectifs").addEventListener("change", onObjectif);
    $("#voir-objectifs").addEventListener("click", function () {
      var l = $("#objectifs");
      l.hidden = !l.hidden;
      this.setAttribute("aria-expanded", String(!l.hidden));
      renderActions();
    });

    /* Modifier ma trajectoire : métier visé et année d'entrée. Les années terminées ne bougent pas. */
    var panel = $("#trajectoire"), openBtn = $("[data-traj-open]");
    function closePanel() { panel.hidden = true; openBtn.setAttribute("aria-expanded", "false"); }
    openBtn.addEventListener("click", function () {
      if (!panel.hidden) { closePanel(); return; }
      $("#choix-metier").value = st.metier;
      $("#choix-entree").value = st.entree;
      panel.hidden = false;
      openBtn.setAttribute("aria-expanded", "true");
      $("#choix-metier").focus();
    });
    panel.addEventListener("click", function (e) {
      if (e.target.closest("[data-traj-close]")) closePanel();
      if (!e.target.closest("[data-recalc]")) return;
      var avant = st.metier;
      st.metier = $("#choix-metier").value;
      st.entree = $("#choix-entree").value;
      store.set("parcours.metier", st.metier);
      store.set("parcours.entree", st.entree);
      st.sel = "p1";
      closePanel();
      renderAll();
      toast(avant !== st.metier ? "Parcours recalculé " + enMetier(st.metier) + ". Tes années terminées et tes acquis sont conservés." : "Parcours mis à jour.");
    });

    /* Stage signé : point définitif qui déclenche la recherche de logement */
    var box = $("#stage");
    function renderStage() {
      var s = store.get("stage", null);
      if (s) {
        var date = new Date(s.debut + "T12:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
        box.innerHTML = "<h2>Stage enregistré</h2><p>" + esc(s.ville) + ", à partir du " + esc(date) + ". Hive cherche ton logement là-bas, aux bonnes dates.</p>" +
          '<a class="btn btn--light" href="index.html">Voir les logements</a>' +
          '<button type="button" class="link-btn" data-stage-reset>Modifier mon stage</button>';
        return;
      }
      box.innerHTML = "<h2>Stage signé ?</h2><p>Ajoute-le : Hive cherche ton logement dans la ville du stage, aux bonnes dates.</p>" +
        '<button type="button" class="btn btn--light" data-stage-open aria-expanded="false" aria-controls="stage-form">Ajouter mon stage</button>' +
        '<form id="stage-form" hidden>' +
        '<label class="field">Ville du stage<input name="ville" required autocomplete="address-level2" placeholder="Paris"></label>' +
        '<label class="field">Date de début<input name="debut" type="date" required></label>' +
        '<label class="check-line"><input name="signe" type="checkbox" required><span>Mon stage est signé : convention ou promesse d\'embauche reçue.</span></label>' +
        '<button type="submit" class="btn btn--light">Enregistrer mon stage</button></form>';
    }
    box.addEventListener("click", function (e) {
      if (e.target.closest("[data-stage-open]")) {
        var f = $("#stage-form"), b = e.target.closest("[data-stage-open]");
        f.hidden = !f.hidden;
        b.setAttribute("aria-expanded", String(!f.hidden));
        if (!f.hidden) f.querySelector("input").focus();
      }
      if (e.target.closest("[data-stage-reset]")) { store.set("stage", null); renderStage(); }
    });
    box.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = e.target;
      store.set("stage", { ville: f.ville.value.trim(), debut: f.debut.value });
      renderStage();
      toast("Stage enregistré. Hive te prévient dès qu'un logement correspond.");
    });

    renderAll(); renderStage();
  }

  /* ---------- Explorer ---------- */
  function pageExplorer() {
    var state = { type: "Tout", prix: "Tout", format: "Tout", rencontres: false, q: "" };
    var plan = store.get("plan", []);

    var metier = metierCourant();
    $("#eyebrow-metier").textContent = "Mon orientation · " + D.parcours.metiers[metier].nom;
    function ok(c) {
      if (c.metier !== "tous" && c.metier !== metier) return false;
      if (state.type !== "Tout" && c.type !== state.type) return false;
      if (state.prix === "Gratuit" && !c.gratuit) return false;
      if (state.prix === "Jusqu'à 100 €" && !c.max100) return false;
      if (state.format !== "Tout" && c.format !== state.format) return false;
      if (state.rencontres && !c.rencontres) return false;
      if (state.q && norm(c.titre + " " + c.genre + " " + c.meta).indexOf(norm(state.q)) === -1) return false;
      return true;
    }

    function render() {
      var list = D.catalogue.filter(ok);
      $("#nb").textContent = list.length + (list.length > 1 ? " résultats" : " résultat") + " pour ton objectif " + enMetier(metier);
      $("#resultats").innerHTML = list.length ? list.map(function (c) {
        var on = plan.indexOf(c.id) !== -1;
        return '<article class="result glass"><div class="result__head"><span class="tile">' + svg(c.icone, 20) + "</span>" +
          '<div><span class="eyebrow">' + esc(c.genre) + '</span><span class="result__title">' + esc(c.titre) + '</span><span class="muted">' + esc(c.meta) + "</span></div></div>" +
          (c.note ? '<span class="rating">' + stars(c.note) + fr(c.note) + ' <span class="muted">· ' + c.avis + " avis</span></span>" : "") + tags(c.tags) +
          '<button type="button" class="pill-btn" data-plan="' + c.id + '" aria-pressed="' + on + '">' + (on ? ico("check") + "Dans mon plan" : ico("plus") + "Ajouter à mon plan") + "</button></article>";
      }).join("") : '<p class="empty glass">Aucun résultat avec ces filtres.</p>';
    }

    $("#filtres").addEventListener("click", function (e) {
      var b = e.target.closest("[data-group]");
      if (b) {
        var g = b.getAttribute("data-group");
        state[g] = b.getAttribute("data-value");
        $$('[data-group="' + g + '"]').forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        render();
      }
      var s = e.target.closest("[data-rencontres]");
      if (s) {
        state.rencontres = !state.rencontres;
        s.setAttribute("aria-checked", String(state.rencontres));
        render();
      }
    });
    $("#resultats").addEventListener("click", function (e) {
      var b = e.target.closest("[data-plan]");
      if (!b) return;
      var id = b.getAttribute("data-plan");
      var was = plan.indexOf(id) !== -1;
      plan = was ? plan.filter(function (x) { return x !== id; }) : plan.concat([id]);
      store.set("plan", plan);
      render();
      if (!was) toast("Ajouté à ton plan d'orientation.");
    });
    $("#recherche").addEventListener("input", function (e) { state.q = e.target.value.trim(); render(); });
    var tg = $(".filters-toggle");
    tg.addEventListener("click", function () {
      var f = $("#filtres");
      f.classList.toggle("is-open");
      tg.setAttribute("aria-expanded", String(f.classList.contains("is-open")));
    });
    render();
  }

  /* ---------- Investir ---------- */
  function pageInvestir() {
    var M = D.modules;
    var done = store.get("modules", 2);

    function renderModules() {
      $("#modules").innerHTML = M.map(function (m, i) {
        var cls = i < done ? " is-done" : (i === done ? " is-now" : "");
        var etat = i < done ? " · fait" : (i === done ? " · à suivre" : "");
        return '<li><button type="button" class="module' + cls + '" data-module="' + i + '"><small>0' + (i + 1) + esc(etat) + "</small><strong>" + esc(m[0]) + "</strong><span>" + esc(m[1]) + "</span></button></li>";
      }).join("");
      $("#progression").textContent = "Initiation : " + done + " module" + (done > 1 ? "s" : "") + " sur " + M.length;
      var bar = $("#barre");
      bar.setAttribute("aria-valuenow", done);
      bar.firstElementChild.style.width = (done / M.length * 100) + "%";
    }
    $("#modules").addEventListener("click", function (e) {
      var b = e.target.closest("[data-module]");
      if (!b) return;
      var i = Number(b.getAttribute("data-module"));
      if (i < done) { toast("Module « " + M[i][0] + " » déjà terminé."); return; }
      if (i > done) { toast("Termine d'abord « " + M[done][0] + " »."); return; }
      done += 1;
      store.set("modules", done);
      renderModules();
      toast(done === M.length ? "Initiation terminée. Bravo !" : "Module « " + M[i][0] + " » terminé.");
    });

    $("#partenaires").innerHTML = D.partenaires.map(function (p) {
      return '<article class="partner glass"><div class="partner__head"><span class="tile">' + svg(p.icone, 20) + "</span>" +
        '<span><span class="partner__name">' + esc(p.nom) + '</span><span class="muted">' + esc(p.categorie) + "</span></span></div>" +
        tags([[p.offre, true]]) + '<p class="sub">' + esc(p.detail) + "</p>" +
        '<button type="button" class="btn btn--ghost" data-toast="Demande envoyée : le partenaire t\'envoie les conditions de l\'offre Hive.">Découvrir l\'offre</button></article>';
    }).join("");
    renderModules();
  }

  /* ---------- Lancement ---------- */
  shell();
  var PAGES = { logements: pageLogements, logement: pageLogement, marche: pageMarche, parcours: pageParcours, explorer: pageExplorer, investir: pageInvestir };
  if (PAGES[PAGE]) PAGES[PAGE]();
})();
