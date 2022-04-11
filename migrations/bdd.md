creer une vue pour debut prochaine attraction:

- horaire prochain creneau = horaire crenau prec + durée attraction
- indiquer si attraction mecanisée ou non

Attraction:
-Nom
-Capacité
-Horaire ouverture
-Horaire fermeture
-Durée
-Mécanisée ou spectacle / bool

Visiteur:
-Numero billet
-debut validité billet
-fin validité billet
-list des reservations (maxi = 3)

Reservation:
-numero attraction
-numero billet
-le nombre participant/accompagnateur
-creneau attraction

Maintenance:
-attraction
-indicent
-date et heure

vue creneau de chaque attraction;
-calcul des creneaux d'une attraction
-recuperer l'heure d'appel de l'api
-comparer les creneau et l'heure d'appel et selctionner creneau > heure appel api
