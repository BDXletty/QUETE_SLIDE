jQuery(document).ready(function() { // on charge le dom avec l'evenement ready


    // déclaration des variables + initialisation
    var $carrousel = $('#slide'), // var du contenant div #slide
        $img = $('#slide img'), // var des images contnues dans slide
        indexImg = $img.length - 1, // on récupère les index des images de 0 à 3 pour les afficher l'une après l'autre
        i = 0, // initialisation du compteur
        $currentImg = $img.eq(i); // grace à la fonction EQ() on détermine l'image de départ appelée image courante,on choisit ici celle avec l'indice 0

    // propriétés CSS des images : 1 visible (l'image courante), les autres cachées  
    $img.css('display', 'none'); // les images sont cachées
    $currentImg.css('display', 'block'); // sauf l'image courante

    // creation des éléments precedent et suivant, avec la fonction APPEND()
    //$carrousel.append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');

    //controle des images avec le click sur les elements suivant et précedent
    $('.next').click(function() {
        i++; // incrementation du compteur 
        if (i <= indexImg) { // on pose une condition : si  on clique trop, le compteur de doit pas dépasser le dernier index : i <= indexImg
            $img.css('display', 'none'); // les images sont cachées
            $currentImg = $img.eq(i); //on definit la nouvelle imagee courante
            $currentImg.css('display', 'block'); // on l'affiche'
        }
        else {
            i = indexImg; // on reste sur le dernier index
        }
        
    });

    $('.prev').click(function() {
        i--; // decrementation du compteur

        if (i >= 0) { // on pose une condition : si  on clique trop, le compteur ne doit pas descendre sous 0
            $img.css('display', 'none'); // les images sont cachées
            $currentImg = $img.eq(i); //on definit la nouvelle imagee courante
            $currentImg.css('display', 'block'); // on l'affiche'
        }
        else {
            i = 0; // sinon on reste sur l'index 0
        }
    });

    // creation du défilement
    function slideImage() { // on crée uns fonction spécifique
        setTimeout(function() { // on utilise la fonction setTimeout pour les gestion du défilement
            // on integre une condition pour la gestion des depassements de compteur

            if (i < indexImg) { // si i est inferieur au dernier index, on l'incremente sinon on retourne à l'index 0
                i++;
            } else {
                i = 0;
            }

            $img.css('display', 'none'); // idem gestion des images
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');

            slideImage(); // on relance la fonction  à la fin pour créer un boucle sans fin
        }, 7000); //intervalle de 7 s
    }
    slideImage(); // on appelle la fonction pour commencer le slide
});