import { Wording } from './Wording'

export class WordingFr implements Wording {
  // Navigation pages
  readonly RETOUR_EN_HAUT_DE_PAGE: string = 'Retour en haut de page'
  readonly ACCES_RAPIDE: string = 'Accès rapide'
  readonly EVITEMENT_ALLER_AU_CONTENU: string = 'Aller au contenu'
  readonly NOUVELLE_FENETRE: string = ' - Nouvelle fenêtre'

  // Accueil
  readonly TITLE_PAGE_ACCUEIL: string = 'Justice Plurielle'

  readonly VOUS_AVEZ_UN_PROBLEME_DE_DROIT: string = 'Vous avez un problème de droit ?'
  readonly TROUVEZ_UN_CONSEIL_JURIDIQUE: string = 'Trouvez une aide juridique près de chez vous, gratuite et accessible.'
  readonly VOUS_AVEZ_UNE_QUESTION_SUR_VOS_DROITS: string = 'Vous avez une question de droit (travail, divorce, logement...).'
  readonly VOUS_ETES_VICTIME: string = 'Vous êtes victime (violence, viol, vol...).'
  readonly VOUS_VOULEZ_FAIRE_UNE_ACTION_EN_JUSTICE: string = 'Vous voulez faire une action en justice (comment trouver un avocat, à qui vous adresser...).'
  readonly VOUS_AVEZ_RECU_UNE_DECISION: string = 'Vous avez reçu une décision de justice et vous voulez savoir comment faire (faire appel, faire respecter cette décision...).'
  readonly RECHERCHER_UNE_AIDE_JURIDIQUE_GRATUITE_ET_ACCESSIBLE: string = 'Rechercher une aide juridique gratuite et accessible'
  readonly DECOUVRIR_NOS_CRITERES: string = 'Découvrir nos critères d’accessiblité'
  readonly TITLE_A_PROPOS_DE_DROIT_PLURIEL: string = 'À propos de Justice Plurielle'
  readonly DROIT_PLURIEL_EST_UNE_ASSOCIATION: string = "Justice Plurielle est un service gratuit d'orientation vers les lieux d'accès au droit, à l'initiative de Droit Pluriel, association qui défend une justice accessible à tous et toutes, et notamment aux personnes en situation de handicap."
  readonly RETROUVEZ_PLUS_D_INFOS: string = 'Retrouvez plus d’information sur notre site internet : '
  readonly TITLE_NOUS_CONTACTER: string = 'Nous contacter'
  readonly SITE_DROIT_PLURIEL: string = 'https://droitpluriel.fr'
  readonly TITRE_LIEN_SITE_DROIT_PLURIEL: string = 'droitpluriel.fr'
  readonly PAR_EMAIL: string = 'Par e-mail : '
  readonly EMAIL_DROIT_PLURIEL: string = 'contact@droitpluriel.fr'
  readonly PAR_TELEPHONE: string = 'Par téléphone : '
  readonly TELEPHONE_DROIT_PLURIEL: string = '01 84 80 46 14'
  readonly TITLE_SUIVEZ_NOS_ACTUALITES: string = 'Suivez nos actualités'
  readonly LIEN_FACEBOOK: string = 'https://www.facebook.com/droitpluriel/'
  readonly TITRE_LIEN_FACEBOOK: string = 'Page Facebook Droit Pluriel'
  readonly LIEN_TWITTER: string = 'https://twitter.com/droit_pluriel'
  readonly TITRE_LIEN_TWITTER: string = 'Compte Twitter Droit Pluriel'
  readonly LIEN_YOUTUBE: string = 'https://www.youtube.com/channel/UC_S7-zSxU7WGXwHq2g-542A'
  readonly TITRE_LIEN_YOUTUBE: string = 'Chaîne Youtube de Droit Pluriel'
  readonly LIEN_LINKEDIN: string = 'https://www.linkedin.com/company/droit-pluriel/'
  readonly TITRE_LIEN_LINKEDIN: string = 'Page Linkedin de Droit Pluriel'
  readonly LIEN_INSTAGRAM: string = 'https://www.instagram.com/droitpluriel/'
  readonly TITRE_LIEN_INSTAGRAM: string = 'Page Instagram de Droit Pluriel'

  // Rechercher une aide juridique
  readonly TITLE_PAGE_RECHERCHER_UNE_AIDE_JURIDIQUE: string = 'Rechercher une aide juridique'
  readonly RETOUR_A_L_ACCUEIL: string = 'Retour à l’accueil'
  readonly OU_RECHERCHEZ_VOUS: string = 'Où recherchez-vous une aide juridique ?'
  readonly OBLIGATOIRE: string = '(obligatoire)'
  readonly UTILISER_MA_POSITION_ACTUELLE: string = 'Utiliser ma position actuelle'
  readonly CHARGEMENT: string = 'Chargement...'
  readonly OU: string = 'ou'
  readonly RENSEIGNER_UNE_ADRESSE: string = 'Renseigner une adresse'

  // Renseigner une adresse
  readonly TITLE_PAGE_RENSEIGNER_UNE_ADRESSE: string = this.RENSEIGNER_UNE_ADRESSE
  readonly EFFACER_L_ADRESSE: string = 'Effacer l’adresse'
  readonly NOTICE_DES_RESULTATS: string = 'Lorsque les résultats de la saisie semi-automatique sont disponibles, utilisez les flèches haut et bas pour les vérifier et la touche Entrée pour les sélectionner. Utilisateurs d’appareils tactiles, explorez par le toucher ou par des gestes de balayage.'
  readonly VALIDER_L_ADRESSE: string = 'Valider l’adresse'
  readonly API_ADRESSE_NE_REPOND_PLUS: string = 'L’API ne semble plus répondre'

  // Rechercher par handicap
  readonly TITLE_PAGE_RECHERCHER_PAR_HANDICAP: string = 'Rechercher par handicap'
  readonly RECOMMENCER_PARCOURS: string = 'Veuillez recommencer le parcours en entier.'
  readonly MODIFIER_L_ADRESSE: string = 'Modifier l’adresse'
  readonly PASSER: string = 'Passer'
  readonly BESOIN_EN_ACCESSIBILITE: string = 'Quels sont vos besoins en accessibilité ?'
  readonly FACULTATIF: string = '(facultatif)'
  readonly SUIVANT: string = 'Suivant'

  // Résultats de la recherche en vue liste
  readonly TITLE_PAGE_ADRESSE_LISTE: string = 'Résultats de recherche en vue liste'
  readonly LISTE: string = 'Liste'
  readonly PLAN: string = 'Plan'
  readonly BESOINS_D_ACCESSIBILITE: (nombre: number) => string = (nombre: number): string => `Besoins d’accessibilité (${nombre})`
  readonly LIEUX_CORRESPONDENT_A_VOTRE_RECHERCHE: (nombre: number) => string = (nombre: number): string => nombre > 1 ? `${nombre} lieux correspondent à votre recherche` : `${nombre} lieu correspond à votre recherche`
  readonly LANCER_L_ITINERAIRE: string = "Lancer l'itinéraire"
  readonly PLUS_D_INFORMATIONS: string = 'Plus d’informations'

  // Resultats par plan
  readonly TITLE_PAGE_RESULTATS_PAR_PLAN: string = 'Résultats par plan'
  readonly TITRE_MARKER_POSITION: string = 'Votre position'

  // Lieu
  readonly TITLE_PAGE_LIEU: (nom: string) => string = (nom: string) => nom
  readonly RETOUR_AUX_RESULTATS: string = 'Retour aux résultats'
  readonly ACCESSIBILITE_DU_LIEU: string = 'Accessibilité du lieu'
  readonly HORAIRES_ET_JOURS_D_OUVERTURE: string = 'Horaires et jours d’ouverture'
  readonly PERMANENCE: string = 'Permanence'
  readonly CONTACT_ET_SITE_INTERNET: string = 'Contact et site internet'
  readonly CONSULTER_LE_SITE_INTERNET: string = 'Consulter le site internet'
  readonly KILOMETRES: string = 'kilomètres'

  // Nos critères d’accessibilité
  readonly TITLE_PAGE_NOS_CRITERES_D_ACCESSIBILITE: string = 'Nos critères d’accessibilité'
  readonly TITLE_HANDICAP_MOTEUR_TOTAL: string = 'Accessibilité handicap moteur total'
  readonly DESCRIPTION_HANDICAP_MOTEUR_TOTAL: string = 'Le lieu permet un accès total à toute situation de handicap moteur.'
  readonly TITLE_HANDICAP_MOTEUR_AVEC_ASSISTANCE: string = 'Accessibilité handicap moteur avec assistance'
  readonly DESCRIPTION_HANDICAP_MOTEUR_AVEC_ASSISTANCE: string = "Le lieu permet un accès à toute situation de handicap moteur à la condition qu'un tiers intervienne (pour ouvrir une porte...)."
  readonly TITLE_HANDICAP_VISUEL: string = 'Accessibilité handicap visuel'
  readonly DESCRIPTION_HANDICAP_VISUEL: string = "Le guidage au sein du lieu est simple : bande de guidage, accueil dès l'entrée..."
  readonly TITLE_LANGUE_DES_SIGNES_FRANCAISE: string = 'Langue des signes française'
  readonly DESCRIPTION_LANGUE_DES_SIGNES_FRANCAISE: string = 'Le lieu propose une consultation en langue des signes française (sur place ou en visio).'
  readonly TITLE_BOUCLE_A_INDUCTION: string = 'Boucle à induction magnétique'
  readonly DESCRIPTION_BOUCLE_A_INDUCTION: string = "Le lieu est équipé d'une boucle à induction magnétique en état de fonctionnement."
  readonly TITLE_ENVIRONNEMENT_CALME: string = 'Environnement calme'
  readonly DESCRIPTION_ENVIRONNEMENT_CALME: string = 'La consultation se déroule dans un environnement calme (espace isolé).'
  readonly TITLE_PERSONNEL_FORME: string = 'Personnel formé'
  readonly DESCRIPTION_PERSONNEL_FORME: string = "Les professionnels (accueil et aide juridique) sont sensibilisés aux situations de handicap et à l'accessibilité."

  // Politique de gestion des données
  readonly TITLE_PAGE_POLITIQUE_DE_GESTION_DES_DONNEES: string = 'Politique de gestion des données'

  // Foire aux questions
  readonly TITLE_FOIRE_AUX_QUESTIONS: string = 'Foire aux questions'

  // Mentions légales
  readonly TITLE_PAGE_MENTIONS_LEGALES: string = 'Mentions légales'

  // Header
  readonly JUSTICE_PLURIELLE: string = this.TITLE_PAGE_ACCUEIL
  readonly ACCUEIL: string = 'Accueil'
  readonly MENU: string = 'Menu'
  readonly NAVIGATION_DESKTOP: string = 'Navigation desktop'
  readonly NAVIGATION_MOBILE: string = 'Navigation mobile'
  readonly FERMER: string = 'Fermer'

  // Footer
  readonly INFORMATIONS: string = 'Informations'
  readonly RECHERCHER_UNE_AIDE_JURIDIQUE: string = this.TITLE_PAGE_RECHERCHER_UNE_AIDE_JURIDIQUE
  readonly NOS_CRITERES_D_ACCESSIBILITE: string = this.TITLE_PAGE_NOS_CRITERES_D_ACCESSIBILITE
  readonly POLITIQUE_DE_GESTION_DES_DONNEES: string = this.TITLE_PAGE_POLITIQUE_DE_GESTION_DES_DONNEES
  readonly FOIRE_AUX_QUESTIONS: string = this.TITLE_FOIRE_AUX_QUESTIONS
  readonly MENTIONS_LEGALES: string = this.TITLE_PAGE_MENTIONS_LEGALES
  readonly QUALITE_DE_SERVICE: string = 'Qualité du service'
  readonly ACCESSIBILITE: string = 'Accessibilité : partiellement conforme'
  readonly COPYRIGHT: string = '© Droit Pluriel 2022 - '
}
