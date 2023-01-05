# Chicken-Run

A REST API built with NodeJS (Express.js & MongoDB)

#### For Clac des Doigts Team

Afin de mieux intégrer votre demande BONUS, j'ai décidé d'apporter un petit changement dans la conception, tout en restant capable de réaliser parfaitement la fonctionnalité de base : ajouter des steps à un objet chicken spécifique.

Par conséquent, la structure de l'API après mon adaptation est maintenant :
Montrée dans l'IU comme la farmyard : /api/v1/chicken
Montré dans l'IU comme un objet chicken spécifique : /api/v1/chicken/:id

**Plus**, puisque l'exigence demande spécifiquement "webservice /chicken/run", j'ai isolé la route de la méthode PATCH pour qu'elle devienne "/:id/run" (Voir /routes/chicken.js, ligne 21)

En tout cas, j'espère que vous me pardonnerez d'avoir pris la liberté de changer la structure :)

#### How and where to run

A simple UI is written for this API to show some of the functionality. The app is currently hosted on localhost:3000, therefore, in order to see the app working, please run npm install && npm start in your terminal, and open http://localhost:3000 in your browser.

The home page (http://localhost:3000) shows the farmyard of all the chicken. Click on the "detail" button to enter the detail page ; click on the "delete" button to delete this chicken.

The detail page shows the detailed information of each chicken. Click "run" to add the steps of the chicken by 1. When the chicken only made the first step, turn the status isRunning to true too.

#### Database

The database this API connects to is MongoDB, using mongoose library.

The original data shown on the home page was created with POST method, with the help of Postman. (Our 5 strong runner chicken were named after some of the Fatui Harbingers xD)

May consider adding a form on the home page for users to create their own chicken too later.
