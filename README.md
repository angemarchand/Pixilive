Test Technique Pixilive
===
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

Il s'agit d'un test technique réalisé pour l'entreprise [Ohé!Studio](https://www.williamjezequel.com/), je devais réaliser un site de vente de photographie.

## Pour commencer
**Comment démarrer le projet**

Dans les dossiers ```/client``` & ```/server```, effectuer la commande `npm install` pour installer correctement les dépendances.

pour créer votre base de donnée, effectuer les commandes suivantes : 
> sudo service mysql start

> mysql -u (mysqlusename) -p(mysqlpassword)

> CREATE DATABASE (database name)

une fois ceci fait, créer la table user avec la commande suivante :

> CREATE TABLE user (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, username VARCHAR(255), email VARCHAR(255) UNIQUE NOT NULL, password VARCHAR(255));

Dans le fichier [.env](./server/.env), Veuillez saisir vos information de connexion à votre base de donnée **mysql**. 
```
PORT        = 4000 //defaut
DB_HOST     = localhost //defaut
DB_USER     = <user mysql>
DB_PASSWORD = <password mysql>
DB_DATABASE = <database name>
```

Pour lancer le **Server**, rendez-vous dans le dossier ``/server``et effectuer la commande suivante : 
> node server.js 

Pour lancer le **Client**, rendez-vous dans le dossier ``/client``, et effectuer  la commande :
> npm run serve

__!!! Vérifié bien que toutes les dépandances / librairies sont bien installés !!!__
## Fait Avec

* __Code editor :__
    * [VScode](https://code.visualstudio.com/)
* __FrameWorks :__
    * [Node](https://nodejs.org/en/)
    * [Vue.js](https://fr.vuejs.org/)
    * [Express](https://expressjs.com/)
* __Libraries__   
    * [Mysql](https://www.mysql.com/fr/)


## Auteur

* **Ange Marchand** _alias_ [@angemarchand](https://github.com/angemarchand)