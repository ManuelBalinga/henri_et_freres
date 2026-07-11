export type Lang = "en" | "fr";

type Dict = Record<string, { en: string; fr: string }>;

export const dict: Dict = {
  "nav.about": { en: "About", fr: "À propos" },
  "nav.products": { en: "Products", fr: "Produits" },
  "nav.brands": { en: "Brands", fr: "Marques" },
  "nav.distribution": { en: "Distribution", fr: "Distribution" },
  "nav.services": { en: "Services", fr: "Services" },
  "nav.partners": { en: "Partners", fr: "Partenaires" },
  "nav.ourStory": { en: "Our Story", fr: "Notre histoire" },
  "nav.news": { en: "News", fr: "Actualités" },
  "nav.careers": { en: "Careers", fr: "Carrières" },
  "nav.csr": { en: "Sustainability", fr: "Durabilité" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.home": { en: "Home", fr: "Accueil" },

  "search.page": { en: "Page", fr: "Page" },
  "search.category": { en: "Product category", fr: "Catégorie de produits" },

  "cta.partner": { en: "Become a partner", fr: "Devenir partenaire" },
  "cta.contact": { en: "Contact us", fr: "Nous contacter" },
  "cta.explore": { en: "Explore the network", fr: "Explorer le réseau" },
  "cta.profile": { en: "Company profile (PDF)", fr: "Profil de l'entreprise (PDF)" },
  "cta.discover": { en: "Discover more", fr: "En savoir plus" },
  "cta.viewAll": { en: "View all", fr: "Voir tout" },

  "hero.eyebrow": { en: "FMCG Distribution · Since 1993", fr: "Distribution FMCG · Depuis 1993" },
  "hero.title": { en: "Cameroon's distribution backbone", fr: "L'épine dorsale de la distribution au Cameroun" },
  "hero.sub": {
    en: "We move the everyday products Cameroon relies on — from port and factory to shelf and doorstep — through a disciplined nationwide network built over three decades.",
    fr: "Nous acheminons les produits du quotidien dont le Cameroun a besoin — du port et de l'usine au rayon et au domicile — grâce à un réseau national rigoureux bâti sur trois décennies.",
  },

  "footer.company": { en: "Company", fr: "Entreprise" },
  "footer.explore": { en: "Explore", fr: "Explorer" },
  "footer.connect": { en: "Connect", fr: "Contact" },
  "footer.newsletter": { en: "Stay informed", fr: "Restez informé" },
  "footer.newsletterSub": { en: "Corporate updates from across our network. No noise.", fr: "L'actualité de notre réseau. Sans bruit." },
  "footer.subscribe": { en: "Subscribe", fr: "S'abonner" },
  "footer.emailPlaceholder": { en: "Your email address", fr: "Votre adresse e-mail" },
  "footer.rights": { en: "All rights reserved.", fr: "Tous droits réservés." },

  "cookie.text": {
    en: "We use essential cookies to run this site and optional analytics to improve it.",
    fr: "Nous utilisons des cookies essentiels pour ce site et des analyses optionnelles pour l'améliorer.",
  },
  "cookie.accept": { en: "Accept all", fr: "Tout accepter" },
  "cookie.essential": { en: "Essentials only", fr: "Essentiels seulement" },

  "toTop": { en: "Back to top", fr: "Haut de page" },
  "search.placeholder": { en: "Search the site…", fr: "Rechercher sur le site…" },
};

export function translate(key: string, lang: Lang): string {
  return dict[key]?.[lang] ?? key;
}
