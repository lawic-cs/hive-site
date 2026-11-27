/* Données de démonstration : toutes fictives. À remplacer par les vraies données (Tally, tableur ou base). */
window.HIVE_DATA = {
  ecole: "KEDGE Marseille · Luminy",
  eleve: { prenom: "Léa", nom: "D.", programme: "M1 PGE Finance" },

  /* Afficher aussi les logements fictifs d'exemple (avec de faux avis) : passer à false pour ne garder que les vraies annonces. */
  afficherExemples: true,

  agences: {
    tnl: { nom: "TNL Provence Immobilier", site: "https://tnlprovenceimmobilier.fr", releve: "27 novembre 2026" }
  },

  logements: [
    /* ---- Annonces réelles de TNL Provence Immobilier (publiées avec l'accord de l'agence, relevées le 27/11/2026) ----
       trajet et minutes : estimation Hive en transports en commun jusqu'au campus de Luminy, à vérifier. */
    {
      id: "tnl-87474486", agence: "tnl", ref: "87474486",
      lien: "https://tnlprovenceimmobilier.fr/fr/propriete/location+appartement+marseille-1er+charmant-t1-bis-meuble-de-33-m-avec-mezzanine-climatise-exposition-sud+87474486",
      titre: "T1 bis meublé avec mezzanine · 33 m²", surface: 33, pieces: 2, prix: 750, charges: 30, honoraires: 330, edl: 99, depot: 1440,
      quartier: "Marseille 1er · Belsunce, rue Colbert", trajet: "≈ 45 min de Luminy", minutes: 45,
      statut: "dispo", dispo: "Disponibilité à confirmer avec l'agence", meuble: true, bail: "Bail meublé (durée à confirmer)", mobilite: false,
      visale: null, dpe: "C", ges: "A", energie: "450 à 620 € par an", etage: "3e sur 5, ascenseur", exposition: "Plein sud, traversant",
      accroche: "Meublé et climatisé, dans un immeuble bourgeois, à 5 min à pied du Vieux-Port.",
      note: 0, nbAvis: 0, carte: [46, 22],
      tags: [["TNL Provence Immobilier", true], ["Meublé", false], ["Climatisé", false]],
      equipements: ["Climatisation", "Cuisine équipée : four, micro-ondes, réfrigérateur", "Mezzanine pour le couchage", "Fibre optique", "Triple vitrage", "Télévision", "Linge de maison et vaisselle"],
      autour: [["bus", "Métro", "à quelques pas"], ["bus", "Tramway", "juste à côté"], ["spark", "Vieux-Port", "5 min à pied"], ["cart", "Terrasses du Port", "10 min à pied"]],
      photos: ["https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/1b9a404a4183f114c963efcf42790580.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/aa8128aa968ded65cf030a7c0813c980.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/f02663ec79033d7eb0d2994365aa6f34.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/d81334cafaf8417f0f5eebd6ad7904da.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/cbb61b6db48da6e7fa0a4124e723df43.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/0b369a46beda5d36cddfeb657ccce36b.jpg"]
    },
    {
      id: "tnl-87600671", agence: "tnl", ref: "87600671",
      lien: "https://tnlprovenceimmobilier.fr/fr/propriete/location+appartement+marseille-1er+a-louer-bel-appartement-de-54-m-marseille-1er-rue-longue-des-capucins+87600671",
      titre: "T3 · 54 m²", surface: 54, pieces: 3, prix: 880, charges: 30, honoraires: 540, edl: 162, depot: 850,
      quartier: "Marseille 1er · Belsunce, rue Longue des Capucins", trajet: "≈ 45 min de Luminy", minutes: 45,
      statut: "dispo", dispo: "Disponibilité à confirmer avec l'agence", meuble: null, bail: "À confirmer avec l'agence", mobilite: false,
      visale: null, dpe: "En cours", ges: "En cours", energie: null, etage: "2e sur 4, ascenseur", exposition: "Ouest",
      accroche: "3 pièces avec ascenseur, près de la Canebière et du marché des Capucins.",
      note: 0, nbAvis: 0, carte: [58, 30],
      tags: [["TNL Provence Immobilier", true], ["Exclusivité", false], ["3 pièces", false]],
      equipements: ["Ascenseur", "Double vitrage", "Salle d'eau avec douche", "Interphone et digicode", "Chauffage électrique individuel"],
      autour: [["bus", "Métro Noailles et Colbert", "3 min à pied"], ["bus", "Tram et bus", "à proximité"], ["cart", "Marché des Capucins", "quelques minutes à pied"], ["spark", "Gare Saint-Charles", "500 m"]],
      photos: ["https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/be581372559350981316ec1580de40e1.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/3b0d95d2f88ac88706e588a8a0124df8.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/0008ac96c1f47e9206c7836b0f202d64.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/f2b34d1fba38d4db1d8dcac57b68a94d.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/4f38359fe4a1778831d923560de27903.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/3a7a67980736dd3750e010cf8bfbcef4.jpg"]
    },
    {
      id: "tnl-87474427", agence: "tnl", ref: "87474427",
      lien: "https://tnlprovenceimmobilier.fr/fr/propriete/location+appartement+marseille-2eme+87474427",
      titre: "T2 meublé avec balcon · 57 m²", surface: 57, pieces: 2, prix: 1025, charges: 25, honoraires: 570, edl: 171, depot: 2000,
      quartier: "Marseille 2e · Le Panier, La Major", trajet: "≈ 55 min de Luminy", minutes: 55,
      statut: "dispo", dispo: "Disponibilité à confirmer avec l'agence", meuble: true, bail: "Bail meublé (durée à confirmer)", mobilite: false,
      visale: null, dpe: "C", ges: "B", energie: "770 à 1 050 € par an", etage: "2e", exposition: "Est et ouest, traversant",
      accroche: "Meublé, climatisé, avec balcon, entre la cathédrale de la Major et le Mucem.",
      note: 0, nbAvis: 0, carte: [30, 16],
      tags: [["TNL Provence Immobilier", true], ["Meublé", false], ["Balcon", false]],
      equipements: ["Climatisation", "Balcon", "Lave-linge", "Lave-vaisselle", "Cuisine équipée", "Linge de lit et vaisselle", "Télévision"],
      autour: [["bus", "Tram et bus", "à proximité"], ["spark", "Mucem et Vieux-Port", "à proximité"], ["cart", "Supermarché", "à proximité"], ["bus", "Gare Saint-Charles", "10 min"]],
      photos: ["https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/11b1bd0f58371d24be1d772d930df175.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/a8136b941797e7cd5f883598745df39e.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/47d3368ffe7dba218f568ccd6faa1d1c.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/6968636da5de2f4b1579c7fedad502b2.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/663a7f916c3d69349c84523a3d3968e3.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/996bef9a0190768f33d68989ed895c24.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/d9178990206b3d62d5fb12708a2823c9.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/c798f1c2cc4990f744c67c1bac2592c3.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/e1695e31c39dae4daef3ea63be71a884.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/3279ec7cb12b61abd2fee91d62dbc9d0.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/20cce83cdbee12bc9a81f99b77af717c.jpg"]
    },
    {
      id: "tnl-87603185", agence: "tnl", ref: "87603185",
      lien: "https://tnlprovenceimmobilier.fr/fr/propriete/location+appartement+marseille-15eme+87603185",
      titre: "Studio · 20,1 m²", surface: 20.1, pieces: 1, prix: 462, charges: 10, honoraires: 201, edl: 60.3, depot: 452,
      quartier: "Marseille 15e · Les Aygalades, résidence Le Louna", trajet: "≈ 1 h 15 de Luminy", minutes: 75,
      statut: "dispo", dispo: "Disponibilité à confirmer avec l'agence", meuble: false, bail: "Bail vide (durée à confirmer)", mobilite: false,
      visale: null, dpe: "D", ges: "B", energie: "360 à 520 € par an", etage: "Rez-de-chaussée", exposition: "Est",
      accroche: "Studio non meublé avec climatisation réversible et cuisine équipée.",
      note: 0, nbAvis: 0, carte: [18, 8],
      tags: [["TNL Provence Immobilier", true], ["Non meublé", false], ["Climatisé", false]],
      equipements: ["Climatisation réversible", "Cuisine équipée avec plaques et hotte", "Salle d'eau avec WC", "Double vitrage", "Volets électriques", "Interphone et digicode"],
      autour: [["bus", "Bus", "à proximité"], ["cart", "Commerces et supermarché", "à proximité"], ["cross", "Médecin", "à proximité"], ["spark", "Salle de sport", "à proximité"]],
      photos: ["https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/3d31ac08b73c2df3a84ead7ddf4923dd.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/7aefca63ea01eb5477f12ed4c0bf4e28.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/ad772ce30898e1e3c3c7febbada98851.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/7f7ba51467c3d0919194ff907369810d.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/604e08deb161f072626d946111bf6843.jpg", "https://d36vnx92dgl2c5.cloudfront.net/prod/Mira-v2/4769/media/267c8c3678180781cfdc2c664e795a19.jpg"]
    },

    /* ---- Exemples fictifs (faux avis) pour montrer le fonctionnement ---- */
    {
      id: "paradis", titre: "Studio meublé · 21 m²", surface: 21, prix: 590,
      quartier: "Marseille 6e · Notre-Dame-du-Mont", trajet: "30 min de Luminy", minutes: 30,
      statut: "dispo", dispo: "Disponible maintenant", meuble: true, bail: "Mobilité, 1 à 10 mois", mobilite: true,
      visale: true, dpe: "C", note: 4.6, nbAvis: 3, image: "studio", miroir: false,
      citation: "Calme côté cour, propriétaire qui répond vite.",
      avisLong: "Calme côté cour, propriétaire qui répond vite. La cuisine est petite mais bien équipée.",
      auteur: "Élève de M1 · 8 mois sur place",
      criteres: { "Conforme à l'annonce": 5, "Calme": 5, "Chauffage et humidité": 4, "Réactivité du propriétaire": 5 },
      tags: [["Avis vérifié", true, "check"], ["Bail mobilité", false]],
      autour: [["bus", "Bus vers Luminy", "4 min à pied"], ["cart", "Supermarché", "3 min à pied"], ["wash", "Laverie", "6 min · recommandée par la promo"], ["cross", "Pharmacie", "2 min à pied"]],
      carte: [34, 40]
    },
    {
      id: "prado", titre: "Chambre en colocation", surface: 14, prix: 460,
      quartier: "Marseille 8e · Prado", trajet: "20 min de Luminy", minutes: 20,
      statut: "dispo", dispo: "Disponible maintenant", meuble: true, bail: "Étudiant, 9 mois", mobilite: false,
      visale: true, dpe: "D", note: 4.2, nbAvis: 2, image: "coloc", miroir: false,
      citation: "Coloc d'élèves KEDGE, chauffage un peu juste.",
      avisLong: "Coloc d'élèves KEDGE, bonne ambiance. Le chauffage est un peu juste en janvier.",
      auteur: "Élève de Bachelor · 1 an sur place",
      criteres: { "Conforme à l'annonce": 4, "Calme": 4, "Chauffage et humidité": 3, "Réactivité du propriétaire": 4 },
      tags: [["Relais KEDGE", true], ["Visale acceptée", false]],
      autour: [["bus", "Bus vers Luminy", "2 min à pied"], ["cart", "Supermarché", "5 min à pied"], ["wash", "Laverie", "4 min à pied"], ["cross", "Pharmacie", "7 min à pied"]],
      carte: [52, 46]
    },
    {
      id: "marguerite", titre: "T1 meublé · 28 m²", surface: 28, prix: 640,
      quartier: "Marseille 9e · Sainte-Marguerite", trajet: "15 min de Luminy", minutes: 15,
      statut: "bientot", dispo: "Se libère le 31 janvier 2027", meuble: true, bail: "Mobilité, 1 à 10 mois", mobilite: true,
      visale: true, dpe: "D", note: 4.8, nbAvis: 1, image: "studio", miroir: true,
      citation: "Lumineux, à 15 minutes du campus.",
      avisLong: "Lumineux, à 15 minutes du campus. Le propriétaire passe vite pour les réparations. Prévoir un ventilateur en juin.",
      auteur: "Élève de M1 · 10 mois sur place",
      criteres: { "Conforme à l'annonce": 5, "Calme": 4, "Chauffage et humidité": 4, "Réactivité du propriétaire": 5 },
      tags: [["Relais KEDGE", true], ["DPE D", false]],
      autour: [["bus", "Bus vers Luminy", "2 min à pied"], ["cart", "Supermarché", "5 min à pied"], ["wash", "Laverie", "3 min · recommandée par la promo"], ["cross", "Pharmacie", "6 min à pied"]],
      carte: [68, 64]
    },
    {
      id: "mazargues", titre: "Studio · 18 m²", surface: 18, prix: 520,
      quartier: "Marseille 9e · Mazargues", trajet: "20 min de Luminy", minutes: 20,
      statut: "dispo", dispo: "Disponible maintenant", meuble: true, bail: "Étudiant, 9 mois", mobilite: false,
      visale: false, dpe: "C", note: 4.0, nbAvis: 2, image: "coloc", miroir: true,
      citation: "Petit mais bien rangé, bus en bas.",
      avisLong: "Petit mais bien rangé, le bus pour Luminy passe en bas de l'immeuble.",
      auteur: "Élève de M1 · 6 mois sur place",
      criteres: { "Conforme à l'annonce": 4, "Calme": 4, "Chauffage et humidité": 4, "Réactivité du propriétaire": 4 },
      tags: [["Avis vérifié", true, "check"], ["Meublé", false]],
      autour: [["bus", "Bus vers Luminy", "1 min à pied"], ["cart", "Supérette", "4 min à pied"], ["wash", "Laverie", "8 min à pied"], ["cross", "Pharmacie", "5 min à pied"]],
      carte: [78, 52]
    },
    {
      id: "castellane", titre: "T1 · 30 m²", surface: 30, prix: 690,
      quartier: "Marseille 6e · Castellane", trajet: "35 min de Luminy", minutes: 35,
      statut: "bientot", dispo: "Se libère le 28 février 2027", meuble: false, bail: "Vide, 3 ans", mobilite: false,
      visale: true, dpe: "C", note: 4.3, nbAvis: 2, image: "studio", miroir: false,
      citation: "Grand et lumineux, un peu bruyant le samedi.",
      avisLong: "Grand et lumineux, très bien desservi. Un peu bruyant le samedi soir.",
      auteur: "Élève de M2 · 2 ans sur place",
      criteres: { "Conforme à l'annonce": 5, "Calme": 3, "Chauffage et humidité": 4, "Réactivité du propriétaire": 4 },
      tags: [["Avis vérifié", true, "check"], ["Non meublé", false]],
      autour: [["bus", "Métro et bus", "1 min à pied"], ["cart", "Supermarché", "2 min à pied"], ["wash", "Laverie", "5 min à pied"], ["cross", "Pharmacie", "3 min à pied"]],
      carte: [26, 44]
    },
    {
      id: "cinq-avenues", titre: "Chambre en colocation", surface: 12, prix: 430,
      quartier: "Marseille 4e · Cinq-Avenues", trajet: "45 min de Luminy", minutes: 45,
      statut: "bientot", dispo: "Se libère le 1er juillet 2027", meuble: true, bail: "Étudiant, 9 mois", mobilite: false,
      visale: true, dpe: "E", note: 3.8, nbAvis: 1, image: "coloc", miroir: false,
      citation: "Coloc sympa, mais loin du campus.",
      avisLong: "Coloc sympa et pas chère, mais il faut compter 45 minutes pour Luminy.",
      auteur: "Élève de Bachelor · 1 an sur place",
      criteres: { "Conforme à l'annonce": 4, "Calme": 4, "Chauffage et humidité": 3, "Réactivité du propriétaire": 4 },
      tags: [["Relais KEDGE", true], ["Visale acceptée", false]],
      autour: [["bus", "Métro", "3 min à pied"], ["cart", "Supermarché", "4 min à pied"], ["wash", "Laverie", "6 min à pied"], ["cross", "Pharmacie", "4 min à pied"]],
      carte: [40, 16]
    }
  ],

  pack: {
    vendeuse: "Léa", logement: "son studio rue Paradis", prix: 120, date: "31 janvier",
    objets: [["box", "Lit"], ["chair", "Bureau"], ["micro", "Micro-ondes"], ["spark", "Lampe"]]
  },

  /* Marché. Catégories : Billets, Meubles, Vélos, Manuels, Électroménager, Tenue d'entretien.
     Billets : date au format AAAA-MM-JJ, prix par place, prixAchat = prix payé à la billetterie. */
  objets: [
    { id: "b1", nom: "Place concert · Le Dôme", prix: 45, prixAchat: 45, date: "2026-12-12", places: 1, categorie: "Billets", icone: "ticket", vendeur: "Manon, M1", note: 4.8, lieu: "Billet électronique", tags: ["Concert", "Prix coûtant", "Billet nominatif", "Transfert officiel"] },
    { id: "b2", nom: "2 places · concert à l'Espace Julien", prix: 28, prixAchat: 32, date: "2026-12-04", places: 2, categorie: "Billets", icone: "ticket", vendeur: "Adam, Bachelor", note: 4.6, lieu: "Billet électronique", tags: ["Concert", "Sous le prix d'achat"] },
    { id: "b3", nom: "Place soirée de gala du BDE", prix: 55, prixAchat: 55, date: "2026-12-17", places: 1, categorie: "Billets", icone: "ticket", vendeur: "Clara, M2", note: 4.9, lieu: "Remise sur le campus", tags: ["Soirée BDE", "Prix coûtant", "Revente autorisée par le BDE"] },
    { id: "b4", nom: "Pass festival · 2 jours", prix: 89, prixAchat: 99, date: "2027-07-10", places: 1, categorie: "Billets", icone: "ticket", vendeur: "Lucas, M1", note: 4.7, lieu: "Billet électronique", tags: ["Festival", "Sous le prix d'achat", "Billet nominatif", "Transfert officiel"] },
    { id: "o1", nom: "Bureau et chaise", prix: 35, categorie: "Meubles", icone: "chair", vendeur: "Thomas, M1", note: 4.9, lieu: "Campus de Luminy", tags: ["Bon état", "Remise sur le campus"] },
    { id: "o2", nom: "Vélo de ville", prix: 90, categorie: "Vélos", icone: "bike", vendeur: "Inès, Bachelor", note: 4.7, lieu: "Marseille 8e", tags: ["Révisé", "Antivol inclus", "Prix négociable"] },
    { id: "o3", nom: "Calculatrice financière", prix: 40, categorie: "Manuels", icone: "calc", vendeur: "Hugo, M2", note: 5, lieu: "Campus de Luminy", tags: ["Comme neuf", "Remise sur le campus", "M1 Finance"] },
    { id: "o4", nom: "Micro-ondes", prix: 25, categorie: "Électroménager", icone: "micro", vendeur: "Sarah, M1", note: 4.6, lieu: "Marseille 6e", tags: ["Bon état", "Urgent"] },
    { id: "o5", nom: "Manuels de finance (lot de 3)", prix: 30, categorie: "Manuels", icone: "book", vendeur: "Yanis, M1", note: 4.8, lieu: "Campus de Luminy", tags: ["M1 Finance", "Remise sur le campus"] },
    { id: "o6", nom: "Étagère et rangements", prix: 20, categorie: "Meubles", icone: "box", vendeur: "Camille, Bachelor", note: 4.5, lieu: "Marseille 9e", tags: ["Prix négociable"] },
    { id: "o7", nom: "Lampe de bureau", prix: 10, categorie: "Meubles", icone: "spark", vendeur: "Nina, M1", note: 4.9, lieu: "Marseille 6e", tags: ["Comme neuf"] },
    { id: "o8", nom: "Costume pour entretiens", prix: 45, categorie: "Tenue d'entretien", icone: "users", vendeur: "Paul, M2", note: 4.7, lieu: "Campus de Luminy", tags: ["Comme neuf", "Taille M"] },
    { id: "o9", nom: "Plantes et cintres", prix: 0, categorie: "Meubles", icone: "box", vendeur: "Emma, M2", note: 4.8, lieu: "Marseille 9e", tags: ["Don", "Urgent"] }
  ],

  /* Tags proposés quand on met une annonce en vente */
  tagsProposes: {
    Billets: ["Concert", "Festival", "Soirée BDE", "Billet nominatif", "Transfert officiel"],
    autres: ["Comme neuf", "Bon état", "Remise sur le campus", "Prix négociable", "Urgent", "M1 Finance"]
  },

  /* Parcours : années, métiers visés et catalogue.
     Une année terminée est figée : elle garde l'expérience faite, même si le métier visé change. */
  parcours: {
    entree: "L3",
    metier: "ma",
    experiences: [
      { annee: "l3", famille: "audit", type: "Stage · 3 mois maximum", titre: "Audit financier", structure: "Cabinet d'audit tier 2 · Marseille", dates: "juin – août 2026",
        acquis: ["Lecture des états financiers", "Rigueur et contrôle", "Excel", "Travail en équipe de mission"] }
    ],
    annees: [
      { id: "l3", label: "L3", dates: "2025 – 2026", statut: "figee" },
      { id: "m1", label: "M1", dates: "2026 – 2027", statut: "en-cours", titre: "Année de cours à Luminy", detail: "Décrocher ta césure P1" },
      { id: "cesure", label: "Année de césure", dates: "2027 – 2028", statut: "a-venir", periodes: [["p1", "Césure P1", "juil. – déc. 2027 · 6 mois"], ["p2", "Césure P2", "janv. – juin 2028 · 6 mois"]] },
      { id: "m2", label: "M2", dates: "2028 – 2029", statut: "a-venir", periodes: [["fe", "Stage de fin d'études", "janv. – juin 2029 · 6 mois"]] },
      { id: "emploi", label: "Premier emploi", dates: "Sept. 2029", statut: "objectif", periodes: [["emploi", "Premier emploi", "à partir de septembre 2029"]] }
    ],
    niveaux: ["Haut", "Cible", "Sécurité"],
    semestre: "M1 · semestre 1",
    /* Objectifs déjà faits (partagés entre métiers quand ils ont le même identifiant, comme le CV ou le TOEIC) */
    objectifsFaits: ["cv", "contact-ma"],
    metiers: {
      ma: {
        nom: "M&A", titre: "Analyste M&A · boutique small/mid cap", repli: "Transaction Services",
        salaire: "Fixe de 50 à 70 k€ en boutique small/mid cap",
        echelle: [
          ["audit", "Audit", "Cabinet tier 2 · Big Four (EY, PwC, Deloitte, KPMG)"],
          ["ts", "Transaction Services", "Cabinet tier 2 · Big Four"],
          ["small", "M&A small cap", "Boutiques small cap, souvent régionales"],
          ["mid", "M&A mid cap", "Boutiques réputées : Financière de Courcelles, Oddo BHF, Natixis Partners, Cambon Partners"],
          ["large", "M&A large cap", "Banques françaises, boutiques d'élite (Rothschild & Co, Lazard), bulge brackets (Goldman Sachs, J.P. Morgan)"]
        ],
        cibleEchelle: "mid",
        options: {
          p1: {
            avecExp: [["M&A small/mid cap", "Ta première expérience te permet de viser l'M&A dès la P1."], ["Transaction Services · Big Four", "La voie la plus sûre vers l'M&A."], ["Audit · Big Four", "Monter en prestige dans le même métier."]],
            sansExp: [["Transaction Services · Big Four", "Possible sans expérience si tes entretiens techniques sont solides."], ["Audit · Big Four", "La porte d'entrée classique de la finance d'entreprise."], ["Audit · cabinet tier 2", "Pour sécuriser une première expérience."]]
          },
          p2: [["M&A mid cap · boutique réputée", "Le plus sélectif à ce stade."], ["M&A small cap", "Recommandé : ta première vraie expérience en M&A."], ["Transaction Services · Big Four", "Pour rester sur la voie de l'M&A."]],
          fe: [["M&A mid cap · boutique réputée", "Vise une boutique qui embauche ses stagiaires."], ["M&A small/mid cap · boutique réputée", "Recommandé : le stage qui mène au premier emploi."], ["M&A small cap", "Pour garder un stage de fin d'études en M&A."]],
          emploi: [["Analyste M&A mid cap · boutique réputée", "Fixe de 50 à 70 k€ en boutique small/mid cap"], ["Analyste M&A small/mid cap", "Souvent proposé à la fin du stage de fin d'études"], ["Consultant Transaction Services · Big Four", "Repli, avec passerelle possible vers l'M&A"]]
        },
        utiles: { "Lecture des états financiers": "Indispensable en due diligence et en valorisation", "Rigueur et contrôle": "Très attendue par les boutiques", "Excel": "Base de la modélisation financière" },
        manque: ["Valorisation : DCF, comparables, transactions", "Modélisation LBO", "Réseau d'anciens en M&A"],
        /* Objectifs du semestre en cours, par ordre de priorité. Les 3 premiers non faits s'affichent en tête. */
        objectifs: [
          ["cv", "Mettre mon CV au format finance", "Une page, expériences chiffrées", "Oct. 2026"],
          ["contact-ma", "Contacter 5 anciens de KEDGE en M&A small/mid cap", "Réseau · le levier n°1 en boutique", "Nov. 2026"],
          ["valo", "Maîtriser la valorisation : DCF, comparables, transactions", "Posée à chaque entretien technique", "Déc. 2026"],
          ["tests-ma", "S'entraîner aux tests en ligne", "Raisonnement, cas Excel et PowerPoint", "Déc. 2026"],
          ["cibles-ma", "Lister 20 boutiques small/mid cap et Big Four à viser", "Pour ta césure P1", "Déc. 2026"],
          ["fit-ma", "Préparer les questions fit", "« Pourquoi le M&A ? », « Pourquoi cette banque ? »", "Janv. 2027"],
          ["lbo", "Savoir expliquer un LBO", "Question classique en boutique small/mid cap", "Janv. 2027"],
          ["toeic", "Passer le TOEIC", "Score demandé par les recruteurs", "Janv. 2027"],
          ["candid-ma", "Envoyer 15 candidatures de césure P1", "Boutiques small/mid cap et Transaction Services", "Janv. 2027"],
          ["event-ma", "Participer à un événement M&A", "Afterwork d'anciens ou journée découverte", "Janv. 2027"]
        ],
        dates: [["Déc.", "2026", "Tests en ligne des Big Four", "Transaction Services et audit"], ["Janv.", "2027", "Offres de césure P1", "Boutiques M&A small cap et Big Four"], ["Mars", "2027", "Entretiens techniques", "Valorisation, LBO et questions fit"]]
      },
      trading: {
        nom: "Trading", titre: "Trader junior · banque de financement et d'investissement", repli: "Risques de marché",
        salaire: null,
        echelle: [
          ["mo", "Middle office", "Banques et sociétés de gestion"],
          ["risques", "Risques de marché", "Banques de financement et d'investissement"],
          ["sales", "Sales et structuration", "Salles des marchés des banques"],
          ["fr", "Trading · banque française", "BNP Paribas, Société Générale, Crédit Agricole CIB"],
          ["intl", "Trading · banque internationale", "Goldman Sachs, J.P. Morgan, Morgan Stanley"]
        ],
        cibleEchelle: "fr",
        options: {
          p1: {
            avecExp: [["Assistant trader · banque française", "Ta rigueur d'auditeur est un atout, travaille les produits."], ["Risques de marché · banque", "Pour entrer en salle des marchés."], ["Middle office · banque", "Comprendre les opérations de marché."]],
            sansExp: [["Risques de marché · banque", "Accessible avec de bonnes bases en mathématiques."], ["Middle office · banque", "La porte d'entrée classique des marchés."], ["Contrôle financier · banque", "Pour sécuriser une première expérience."]]
          },
          p2: [["Trading · banque internationale", "Le plus sélectif à ce stade."], ["Assistant trader · banque française", "Recommandé : ta première expérience au desk."], ["Sales ou structuration", "Pour rester en salle des marchés."]],
          fe: [["Trading · banque internationale", "Vise un desk qui embauche ses stagiaires."], ["Trading · banque française", "Recommandé : le stage qui mène au premier emploi."], ["Risques de marché", "Pour garder un stage en marchés."]],
          emploi: [["Trader junior · banque internationale", "Les postes les plus disputés"], ["Trader junior · banque française", "Souvent proposé à la fin du stage de fin d'études"], ["Analyste risques de marché", "Repli, avec passerelle possible vers le trading"]]
        },
        utiles: { "Excel": "Utilisé chaque jour en salle des marchés", "Rigueur et contrôle": "Essentielle en risques et en middle office", "Lecture des états financiers": "Utile en vente de produits de crédit" },
        manque: ["Produits dérivés et options", "Python", "Calcul mental et probabilités"],
        objectifs: [
          ["cv", "Mettre mon CV au format finance", "Une page, expériences chiffrées", "Oct. 2026"],
          ["contact-tr", "Contacter 5 anciens de KEDGE en salle des marchés", "Réseau · comprendre les desks", "Nov. 2026"],
          ["derives", "Se former aux produits dérivés et aux options", "Le socle des entretiens techniques", "Déc. 2026"],
          ["calcul", "S'entraîner au calcul mental et aux tests de logique", "Étape classique des process trading", "Déc. 2026"],
          ["python", "Apprendre les bases de Python pour la finance", "De plus en plus demandé, même en sales", "Déc. 2026"],
          ["cibles-tr", "Lister 15 banques et desks à viser", "Pour ta césure P1", "Déc. 2026"],
          ["marches", "Suivre l'actualité des marchés chaque matin", "Taux, devises, actions : on te la demandera", "Janv. 2027"],
          ["toeic", "Passer le TOEIC", "Score demandé par les recruteurs", "Janv. 2027"],
          ["candid-tr", "Envoyer 15 candidatures de césure P1", "Banques de financement et d'investissement", "Janv. 2027"]
        ],
        dates: [["Déc.", "2026", "Candidatures off-cycle en marchés", "Banques de financement et d'investissement"], ["Janv.", "2027", "Tests de calcul et de logique", "Étape classique des process trading"], ["Mars", "2027", "Entretiens en salle des marchés", "Produits, marchés et questions fit"]]
      }
    }
  },

  /* Catalogue Explorer. metier : "ma", "trading" ou "tous". note et avis sont facultatifs. */
  catalogue: [
    { id: "ty-valo", metier: "ma", type: "Formations", format: "En ligne", gratuit: false, max100: false, rencontres: false, icone: "book", genre: "Formation · en ligne · en anglais", titre: "Breaking into M&A – Valuation", meta: "Training You · 17 vidéos · 42 min", tags: [["Prépa entretiens", true], ["Valorisation", false]] },
    { id: "ty-fiches", metier: "ma", type: "Formations", format: "En ligne", gratuit: false, max100: false, rencontres: false, icone: "book", genre: "Formation · en ligne", titre: "Réussir les entretiens en M&A – Fiches banques", meta: "Training You · process, deals récents, questions d'entretien", tags: [["Prépa entretiens", true], ["Pourquoi cette banque ?", false]] },
    { id: "lbo", metier: "ma", type: "Formations", format: "En ligne", gratuit: false, max100: true, rencontres: false, icone: "chart", genre: "Formation · en ligne", titre: "Modélisation financière et LBO sur Excel", meta: "8 h · cas pratiques corrigés", note: 4.6, avis: 22, tags: [["Tarif négocié Hive", true], ["Utile pour ton objectif", false]] },
    { id: "afterwork", metier: "ma", type: "Événements", format: "Sur place", gratuit: true, max100: true, rencontres: true, icone: "users", genre: "Événement · sur place", titre: "Afterwork des anciens de KEDGE en M&A", meta: "Marseille · gratuit", note: 4.8, avis: 9, tags: [["Rencontres", true, "users"], ["Recommandé par Hive", false]] },
    { id: "portes-ma", metier: "ma", type: "Portes ouvertes", format: "Sur place", gratuit: true, max100: true, rencontres: true, icone: "target", genre: "Portes ouvertes", titre: "Journée découverte d'une boutique M&A mid cap", meta: "Paris · sur inscription", note: 4.9, avis: 6, tags: [["Rencontres", true, "users"]] },
    { id: "stage-ma", metier: "ma", type: "Stages", format: "Sur place", gratuit: true, max100: true, rencontres: true, icone: "cal", genre: "Stage · césure P1", titre: "Analyste M&A small cap", meta: "Boutique M&A · Marseille · 6 mois dès juillet 2027", note: 4.4, avis: 4, tags: [["Correspond à ta césure P1", true]] },
    { id: "ty-audit", metier: "ma", type: "Formations", format: "En ligne", gratuit: false, max100: false, rencontres: false, icone: "book", genre: "Formation · en ligne", titre: "Réussir les entretiens en Audit", meta: "Training You · 29 vidéos · 1 h 45", tags: [["Prépa entretiens", true], ["Option sécurité", false]] },
    { id: "toeic", metier: "tous", type: "Certifications", format: "Sur place", gratuit: false, max100: true, rencontres: false, icone: "check", genre: "Certification", titre: "Test d'anglais TOEIC", meta: "Sessions toute l'année", tags: [["Demandé par les recruteurs", true]] },
    { id: "amf", metier: "trading", type: "Certifications", format: "En ligne", gratuit: false, max100: true, rencontres: false, icone: "check", genre: "Certification", titre: "Certification AMF", meta: "Examen en ligne · connaissances réglementaires", tags: [["Utile en salle des marchés", true]] },
    { id: "derives", metier: "trading", type: "Formations", format: "En ligne", gratuit: false, max100: true, rencontres: false, icone: "chart", genre: "Formation · en ligne", titre: "Produits dérivés et options", meta: "10 h · exercices corrigés", note: 4.5, avis: 14, tags: [["Tarif négocié Hive", true], ["Utile pour ton objectif", false]] },
    { id: "python", metier: "trading", type: "Formations", format: "En ligne", gratuit: false, max100: true, rencontres: false, icone: "calc", genre: "Formation · en ligne", titre: "Python pour la finance de marché", meta: "15 h · projets guidés", note: 4.7, avis: 31, tags: [["Tarif négocié Hive", true]] },
    { id: "calcul", metier: "trading", type: "Formations", format: "En ligne", gratuit: true, max100: true, rencontres: false, icone: "calc", genre: "Entraînement · en ligne", titre: "Calcul mental et tests de logique", meta: "Exercices chronométrés · gratuit", note: 4.3, avis: 40, tags: [["Prépa entretiens", true]] },
    { id: "salle", metier: "trading", type: "Portes ouvertes", format: "Sur place", gratuit: true, max100: true, rencontres: true, icone: "target", genre: "Portes ouvertes", titre: "Découverte d'une salle des marchés", meta: "Paris · sur inscription", note: 4.8, avis: 11, tags: [["Rencontres", true, "users"]] },
    { id: "stage-tr", metier: "trading", type: "Stages", format: "Sur place", gratuit: true, max100: true, rencontres: true, icone: "cal", genre: "Stage · césure P1", titre: "Assistant trader", meta: "Banque de financement et d'investissement · Paris · 6 mois", note: 4.5, avis: 5, tags: [["Correspond à ta césure P1", true]] }
  ],

  modules: [
    ["Budget", "Ce qui rentre, ce qui sort"],
    ["Épargne de précaution", "Combien garder de côté"],
    ["Intérêts composés", "Pourquoi commencer tôt"],
    ["Risque", "Ce qu'on peut perdre"],
    ["Frais", "Ce qui grignote le rendement"],
    ["Immobilier", "SCPI, crowdfunding ou achat"],
    ["Capital-risque", "Investir dans des startups"]
  ],

  /* Partenaires d'investissement. risque : 0 (pas de placement) à 5 (perte totale possible). */
  partenaires: [
    { famille: "Banque", icone: "lock", nom: "Néobanque", categorie: "Compte et carte pour étudiants", offre: "Tarif négocié pour les élèves Hive",
      detail: "Pour gérer son budget et recevoir sa gratification de stage.", risque: 0, risqueTxt: "Pas de placement", horizon: "Au quotidien" },
    { famille: "Bourse", icone: "chart", nom: "Courtier en ligne", categorie: "PEA et ETF", offre: "Frais de courtage réduits",
      detail: "Pour investir régulièrement de petites sommes en Bourse.", risque: 3, risqueTxt: "Moyen · capital non garanti", horizon: "5 ans et plus" },
    { famille: "Épargne", icone: "shield", nom: "Assureur", categorie: "Assurance-vie", offre: "Versement initial réduit",
      detail: "Pour une épargne de long terme, avec des supports au choix.", risque: 2, risqueTxt: "Selon les supports choisis", horizon: "8 ans et plus" },
    { famille: "Startups", icone: "rocket", nom: "Fonds de capital-risque", categorie: "Startups passées par Y Combinator", offre: "Ticket d'entrée réduit pour les élèves Hive",
      detail: "Investir aux côtés d'un fonds dans des startups sorties de Y Combinator, l'accélérateur de la Silicon Valley.", risque: 5, risqueTxt: "Très élevé · perte totale possible", horizon: "8 à 10 ans, argent bloqué" },
    { famille: "Immobilier", icone: "building", nom: "Plateforme immobilière", categorie: "SCPI et crowdfunding immobilier", offre: "Frais d'entrée réduits",
      detail: "Investir dans l'immobilier avec quelques centaines d'euros, sans acheter un logement entier.", risque: 3, risqueTxt: "Moyen · capital non garanti", horizon: "8 ans et plus" },
    { famille: "Immobilier", icone: "diamond", nom: "Club immobilier de prestige", categorie: "Immobilier de luxe", offre: "Accès aux club deals réservés",
      detail: "Investir à plusieurs dans des biens d'exception : appartements de standing, villas, hôtels particuliers.", risque: 4, risqueTxt: "Élevé · capital non garanti, peu liquide", horizon: "5 à 7 ans" },
    { famille: "Conseil", icone: "chat", nom: "Conseiller en gestion de patrimoine", categorie: "CGP · bilan et stratégie", offre: "Premier bilan patrimonial offert",
      detail: "Pour construire ta stratégie : épargne, investissements, fiscalité et premier achat immobilier.", risque: 0, risqueTxt: "Conseil, pas de placement", horizon: "Rendez-vous en visio ou à Marseille",
      cta: "Prendre rendez-vous", toast: "Demande envoyée : le conseiller te propose un créneau pour ton bilan." }
  ]
};
