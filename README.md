# interview

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Project needs

Pour te mettre dans l'ambiance Assurup, le test se fera sur ce prototype application.

Comme tu peux le voir, l'application est assez vide en terme de contenu, je te propose donc de palier
à ça en écrivant trois pages et en ajoutant des fonctionnalités; tu es libre sur le choix du framework css si tu décides de faire un design personnalisé.
Le store contient déjà les données de base pour faire l'affichage, à toi de compléter selon le "cahier des charges" suivant:

## Mini cahier des charges

### Router

1. Ajouter deux routes :
	-  une pour afficher un contrat selon un id passé en paramètre
	-  une pour afficher les produits


### Page d'accueil (Home.vue):

1. Itérer sur les contrats présents dans le store et afficher:
	-  le nom du produit associé
	-  la date d'effet
	-  le status du contrat
	-  un bouton dirigeant vers la page contrat avec l'id de celui-ci

2. Un bouton permettant de filtrer les contrats avec deux paramètres de filtre au choix:
	-  sur l'id du produit
	-  sur le prix
	-  sur la date d'effet
	-  sur le status

	`exemple avec id et price :`
	| id | price|
	|--|--|
	| 1 | 3 |
	| 1 | 10 |
	| 2 | 3 |
	| 2 | 42 |



### Page Produits (Products.vue)

1. Un ensemble d'inputs permettant de modifier dans le store:
	-  le nom du produit
	-  la description du produit

2. Afficher:
	-  le prix total des contrats lié à ce produit

### Page Contrat (Contract.vue)

1. Afficher :
	-  la description du produit associé au contrat
	-  le status
	-  la date d'effet
	-  le prix

### Bonus
Ajouter un header pour naviguer entre la page des produits et la home avec un logo et une couleur de fond
Chronométrer le temps de production
Produire un design personnalisé :)

Bon courage!