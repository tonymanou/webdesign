Projet web-design
=================
CV multilingue
--------------

Projet de site réactif avec AngularJS, Bootstrap et SASS.
Il s'agit de créer un site affichant le CV d'une personne de manière agréable.

--------------

Réalisations par rapport aux points clés du cahier des charges :
- Bootstrap utilisé pour une interface réactive.
- Utilisation des fonctions de mixins, nesting et des variables dans SASS.
- Architecture MVC, utilisation de 'filter', 'provider' et 'directive'.

Problèmes rencontrés :
- Difficultés pour rendre les éléments flottants de la bonne taille et gérer l'alignement avec les contenus non-flottants suivant la largeur de l'écran.
- Le manque de temps pour générer les données (dans un bon format qui plus est).

Perspectives de développement :
- Utiliser des données réelles.
- Améliorer la réactivitéde l'interface suivant la taille de l'écran.
- Hardcoder le texte en anglais et ne charger le fichier de langues que pour le français afin de limiter le clignotement des élements lors du rechargement de la page.

--------------

Notes :
- La barre de navigation est au dessus du contenu de la page en temps normal. Lorsque l'écran devient assez grand, elle devient flottante et reste fixée en haut de l'écran.
- Le pied de page est au bas de l'écran si le contenu de la page ne prend pas tout l'écran, il est à la suite du contenu autrement.
- L'affichage du site est convenable pour une largeur d'écran allant de 291px à 1400px :
  - en deça, le contenu ne tient pas,
  - au dessus, le contenu ne s'étire plus.
