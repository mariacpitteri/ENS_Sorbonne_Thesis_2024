
//General introductory instructions

var welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'Bienvenu(e)(s) dans cette expérience. <br><br><br> Appuyez sur la touche espace pour avancer.',
    choices: ' '
};


var instruct1 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "L'expérience va durer environ 30 minutes. <br><br> Afin que vous restiez concentré(e)s, nous vous demandons de trouver un endroit calme <br> et de fermer toutes les autres pages web sur votre moteur de recherche. <br><br><br> Appuyez sur la touche espace pour avancer.",
    choices: ' '
};






var htmlStringSusp_1 = `
<div>
    <h1>Instructions</h1>
    <p>L'expérience implique un jeu de cartes similaire au blackjack. </p>
    <p>Comme dans le blackjack traditionnel, l'objectif est d'accumuler des points sans dépasser un compte limite. Dans notre cas, ce compte limite est fixé à <strong>3</strong>.</p>
    <br>
    <span style="color:red; font-weight:bold; font-size:20px;"><i>Compte limite = 3</i></span>

    <p>Au début, vous serez présenté avec un jeu de dix cartes comprenant des cartes allant de -7 à 7. </p>

    <br><br><br><br><br><br><br>
   
    
    <img src="img/deck.png" class="img5">

    <br><br>

    <p>Ces cartes seront mélangées et une paire sera présélectionnée. </p>
    
    <img src="img/number_minus5.png" class="img6"> 
        
    <img src="img/number_4.png" class="img6"> 

    <br> <br> Appuyez sur la touche espace pour avancer.
      

</div>

`;





var htmlStringSusp_2 = `
<div>

    
    <p><br>Chaque carte aura un nombre inscrit dessus (positif ou négatif) qui pourrait être ajouté à votre compte.</p>
    <p>Le choix de la carte à ajouter sera tiré au sort grâce à une loterie.</p>


    <img src=  "img/new_greenAndred_circle.png" class="img7"> 
   
    <div class = "img-container2-wrapper">
    <div class="img-container2 left">
    <img src="img/number_minus5.png" class="img">
    </div>
    
    <div class="img-container2 right">
    <img src="img/number_4.png" class="img">
    </div>

    
    </div>
 
    
    <br><br><br><br><br>

    <p><br>Avant que la loterie ne soit activée, vous devrez indiquer votre niveau de suspense quant à votre victoire en voyant la paire présélectionnée.</p>


    <img src="img/suspense.png" class="img8">

    <br>Appuyez sur la touche espace pour avancer.

    

</div>
`;


var htmlStringSusp_3 = `
<div>

<p><br>Une fois la loterie activée, vous saurez quelle carte sera ajoutée à votre compte.</p> 

    
    
    <div class = "img-container2-wrapper">
    <div class="img-container2 left_end">
    <img src="img/number_minus5.png" class="img">
    </div>
    
    <div class="img-container2 right">
    <img src="img/number_4.png" class="img">
    </div>
    </div>

    <img src=  "img/new_50_green.png" class="img7"> 
    <br>
    <br>

    <br><br><br><br><br>

    <span style="color:green; font-weight:bold; font-size:20px;"><i>Compte = -5</i></span>
    <br><br><br><br><br>

    Appuyez sur la touche espace pour avancer.
    
    <br><br><br><br><br><br>
    

    

</div>
`;



var htmlStringSusp_4 = `
<div>

    
<p><br>Chaque jeu se compose de 5 manches. L'objectif est de ne pas dépasser un compte limite de <strong>3</strong> lors de la <strong>dernière</strong> manche car:.</p>
    

<br>
<strong>Compte final </strong>= 0 + Compte manche 1 + Compte manche 2 + Compte manche 3 + Compte manche 4 + Compte manche 5</i>


<p><br>Au cours des 5 manches, il est possible de dépasser temporairement le compte limite de <strong>3</strong>. </p>

    <span style="color:red; font-weight:bold; font-size:20px;"><i>Compte = 7</i></span>


    <p>En effet, une carte négative pourrait vous ramener en dessous de 3 avant la fin du jeu.</p>

    <span style="color:green; font-weight:bold; font-size:20px;"><i>Compte = 2</i></span>
    
    <br><br><br><br>

    Appuyez sur la touche espace pour avancer.

</div>
`



var htmlStringSusp_5 = `
<div>

    
<p><br>Nous allons proceder à une manche d'essai pour vous exercer.</p>

<br><br><br><br>

Appuyez sur la touche espace pour avancer.

    

</div>
`


var htmlStringSusp_6 = `
<div>

    
<p><br>Appuyez sur la touche espace pour commencer l'expérience.</p>

<br><br><br><br>

    

</div>


`





var htmlStringSat_1 = `
<div>
    <h1>Instructions</h1>
    <br>
    <p>L'expérience implique un jeu de cartes similaire au blackjack. </p>
    <p>Comme dans le blackjack traditionnel, l'objectif est d'accumuler des points sans dépasser un compte limite. Dans notre cas, ce compte limite est fixé à <strong>3</strong>.</p>
    <br>
    <span style="color:red; font-weight:bold; font-size:20px;">Compte limite = 3</span>

    <p>Au début, vous serez présenté avec un jeu de dix cartes comprenant des cartes allant de -7 à 7. </p>

    <br><br><br><br><br><br><br><br><br>
   
    
    <img src="img/deck.png" class="img5">
    

    <p>Ces cartes seront mélangées et une paire sera présélectionnée. </p>
    
    <img src="img/number_minus5.png" class="img6"> 
        
    <img src="img/number_4.png" class="img6"> 

    <br> <br> Appuyez sur la touche espace pour avancer.
      

</div>

`;




var htmlStringSat_2 = `
<div>

    
    <p><br>Chaque carte aura un nombre inscrit dessus (positif ou négatif) qui pourrait être ajouté à votre compte.</p>
    <p>Le choix de la carte à ajouter sera tiré au sort grâce à une loterie.</p>


    <img src=  "img/new_greenAndred_circle.png" class="img7"> 
   
    <div class = "img-container2-wrapper">
    <div class="img-container2 left">
    <img src="img/number_minus5.png" class="img">
    </div>
    
    <div class="img-container2 right">
    <img src="img/number_4.png" class="img">
    </div>

    
    </div>
 
    
    <br><br><br><br><br><br><br>

    <p><br>Avant que la loterie ne soit activée, vous devrez indiquer quelle carte a la valeur la plus élevée et laquelle a la moins élevée.</p>

    <br><br><br><br><br><br>

    <br> Appuyez sur la touche espace pour avancer.

    

</div>
`;




var htmlStringSat_3 = `
<div>

<p><br>En utilisant la touche espace, vous pourrez activer la loterie et savoir quelle carte sera ajoutée à votre compte.</p> 

    
    
    <div class = "img-container2-wrapper">
    <div class="img-container2 left_end">
    <img src="img/number_minus5.png" class="img">
    </div>
    
    <div class="img-container2 right">
    <img src="img/number_4.png" class="img">
    </div>
    </div>

    <img src=  "img/new_50_green.png" class="img7"> 
    <br>
    <br>

    <br><br><br><br><br>

    <span style="color:green; font-weight:bold; font-size:20px;">Compte = -5</span>
    <br><br><br><br><br>

    Appuyez sur la touche espace pour avancer.
    
    <br><br><br><br><br><br>
    

    

</div>
`;


var htmlStringSat_4 = `
<div>

<p><br>Chaque jeu se compose de 5 manches. L'objectif est de ne pas dépasser un compte limite de <strong>3</strong> lors de la <strong>dernière</strong> manche car:.</p>
    

<br>
<strong>Compte final </strong>= 0 + Compte manche 1 + Compte manche 2 + Compte manche 3 + Compte manche 4 + Compte manche 5</i>


<p><br>Au cours des 5 manches, il est possible de dépasser temporairement le compte limite de <strong>3</strong>. </p>

    <span style="color:red; font-weight:bold; font-size:20px;"><i>Compte = 7</i></span>


    <p>En effet, une carte négative pourrait vous ramener en dessous de 3 avant la fin du jeu.</p>

    <span style="color:green; font-weight:bold; font-size:20px;"><i>Compte = 2</i></span>
    
    
    <br><br><br><br>

    Appuyez sur la touche espace pour avancer.

</div>
`



var htmlStringSat_5 = `
<div>

    
<p><br>À la fin de la dernière manche, nous vous demanderons de noter votre niveau de satisfaction quant au jeu que vous venez de terminer.</p>




<img src="img/satisfaction.png" class="img8">

<br><br>
<br><br>

Appuyez sur la touche espace pour avancer.

    

</div>
`





var htmlStringSat_6 = `
<div>

    
<p><br>Nous allons proceder à une manche d'essai pour vous exercer.</p>

<br><br><br><br>

Appuyez sur la touche espace pour avancer.

    

</div>
`


var htmlStringSat_7 = `
<div>

    
<p><br>Appuyez sur la touche espace pour commencer l'expérience.</p>

<br><br><br><br>

    

</div>

`


var htmlStringSusp1 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringSusp_1, 
    choices: ' '
}

var htmlStringSusp2 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringSusp_2, 
    choices: ' '
}

var htmlStringSusp3 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringSusp_3, 
    choices: ' '
}

var htmlStringSusp4 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringSusp_4, 
    choices: ' '
}



var htmlStringSusp5 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringSusp_5, 
    choices: ' '
}

var htmlStringSusp6 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringSusp_6, 
    choices: ' '
}








var htmlStringSat1 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringSat_1, 
    choices: ' '
}

var htmlStringSat2 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringSat_2, 
    choices: ' '
}

var htmlStringSat3 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringSat_3, 
    choices: ' '
}

var htmlStringSat4 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringSat_4, 
    choices: ' '
}



var htmlStringSat5 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringSat_5, 
    choices: ' '
}

var htmlStringSat6 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringSat_6, 
    choices: ' '
}


var htmlStringSat7 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringSat_7, 
    choices: ' '
}




//Unc new experiment instructions

var htmlStringUnc2 = `
<div>
<h1>Définition de l'incertitude</h1>
    <p><br>Dans cette expérience, vous serez confrontés à des phrases que vous devrez évaluer en termes de niveau d'incertitude de vos attentes. <b>Nous définissons l'incertitude de vos attentes comme le fait de ne pas savoir lequel de plusieurs scénarios attendus va se réaliser</b>. Plus vous vous sentez capables de prévoir ce qu'il va se passer, moins vous êtes incertains. Si vous avez des doutes quant à laquelle de vos prédictions va se réaliser, vous êtes plus incertains.</p>
    <p>Prenons par exemple la phrase suivante :</p>
    <p id = 'frstIns'>"Chloé est sur le point de s'endormir lorsque l'avion sur lequel elle voyage commence à faire un bruit sourd du moteur gauche."</p>
    <p>Cette phrase peut donner lieu à de nombreux scénarios possibles :</p>
    <ul>
        <i><li>Crash de l'avion.</li> </i>
        <i><li>L'avion chute mais se rétablit rapidement.</li> </i>
        <i><li>Fausse alerte, Chloé rêvait.</li> </i>
        <i><li>Le bruit s'arrête et le pilote dit qu'il ne faut pas s'inquiéter.</li> </i>
    </ul>
    <p>Évidemment, certains scénarios sont plus probables que d'autres : il y a plus de chances que le vol se passe bien plutôt que l'avion ne se crashe.</p>
    <p><br><b>Si, en lisant des phrases, vous avez un scénario en tête qui, selon vous, est le plus probable, votre incertitude est basse. Cependant, si vous avez plusieurs scénarios concurrents en tête et que vous ne savez pas en choisir un, votre incertitude est élevée.</b></p>
    <p><b>En alternative, si vous êtes confrontés à une phrase où il n'y a pas d'événement déclencheur de prédictions, comme par exemple :</b> <p id = 'frstIns'>"Julie promène son chien"</p> <b>L'incertitude de vos attentes sera basse étant donné qu'il n'y a pas de prédictions à comparer.</b></p>
    <br> <br> Appuyez sur la touche espace pour avancer.
</div>
`;


var htmlStringUnc3 = `
<div>
<h1>Exemple</h1>
    <p><br>Tout au long de l'expérience, nous allons vous demander d'évaluer des séquences composées chacune de deux phrases.</p>
    <p>Dans un premier temps, vous allez être confronté(e) à une première phrase. Par exemple: </p>
    <p id = 'frstIns'> “Chloé est sur le point de s'endormir lorsque l'avion sur lequel elle voyage commence à faire un bruit sourd du moteur gauche." </p>
    Votre tâche consistera à indiquer si :</p>
    <ol type="1">
        <li><b>Vous êtes capables de prévoir des scénarios probables.</b></li>
        <li><b>Quel est votre niveau d'incertitude.</b></li>

    <p><br><br>Dans un second temps, vous verrez une deuxième phrase qui complétera celle que vous venez d'évaluer. 
    <p>La phrase en rouge sera suivie par une autre en bleu, dans ce cas:</p>
    <p id = 'scndIns'>"Chloé sursaute et elle commence à crier.”</p>

    <p>Après l'avoir lue, vous devrez indiquer:

    <li><b>À quel point vous pensez que la seconde phrase ait réduit votre incertitude initiale (celle créée par la prémisse).</b></li>
  </ol>
<br> <br> Appuyez sur la touche espace pour avancer.

</div>
`;

var instruct2Unc = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringUnc2,
    choices: ' '
}
    
var instruct3Unc = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringUnc3,    
    choices: ' '
}

//Crs experiment instructions

var instruct2Crs = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Tout au long de l'expérience nous allons vous demander d'évaluer des séquences composées chacune de deux phrases. <br> <br> Initialement vous allez être confronté(e)s à une première phrase que vous devrez évaluer en termes de: <br> <br> 1. Niveau de curiosité: à quel point la phrase vous rend curieux(se). <br> <br> Appuyez sur la touche espace pour avancer.",
    choices: ' '

};

var instruct3Crs = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Dans un second temps, vous lirez une deuxième phrase qui complètera celle que vous venez de noter. <br> <br> Appuyez sur la touche espace pour avancer.",
    choices: ' '
}

//Sat experiment instructions

var instruct2Sat = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Tout au long de l'expérience nous allons vous demander d'évaluer des séquences composées chacune de deux phrases. <br> <br> Initialement vous allez être confronté(e)s à une première phrase que vous devrez simplement lire. <br> <br> Appuyez sur la touche espace pour avancer.",
    choices: ' '

};

var instruct3Sat = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Dans un second temps, vous verrez une deuxième phrase qui complètera celle que vous venez de lire. <br> Vous devrez noter <b> à quel point vous appréciez la séquence en son ensemble.</b>  <br> <br> Appuyez sur la touche espace pour avancer.",
    choices: ' '
}


//Val experiment instructions

var instruct2Val = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Tout au long de l'expérience nous allons vous demander d'évaluer des séquences composées chacune de deux phrases. <br> <br> Initialement, vous allez être confronté(e)s à une première phrase. Vous devrez évaluer si celle-ci est plutot positive ou plutôt négative. <br> <br> Appuyez sur la touche espace pour avancer.",
    choices: ' '

};

var instruct3Val = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Dans un second temps, vous verrez une deuxième phrase qui complètera celle que vous venez de lire. Vous devrez également noter si cette dernière est plutôt négative ou positive. <br> <br> Appuyez sur la touche espace pour avancer.",
    choices: ' '
}


//General continued instructions

var instruct4 = {
    type:jsPsychHtmlKeyboardResponse,
    stimulus: "<b>Attention</b>: Même si certains prénoms de personnages reviennent au fil de l'expérience <br> nous vous demandons de traiter chaque séquence indépendamment. <br> <br> Appuyez sur la touche espace pour avancer."
}


var instruct5 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Pour que cela soit plus clair, nous allons vous montrer deux exemples. <br> <br> Appuyez sur la touche espace pour commencer."
}


var instruct6 = {
    type:jsPsychHtmlKeyboardResponse,
    stimulus: "Nous allons maintenant commencer l'expérience. <br> <br> Appuyez sur la touche espace quand vous êtes prêts."
}


var fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div style="font-size:60px;">+</div>',
    choices: "NO_KEYS",
    trial_duration: function () {
        return jsPsych.randomization.sampleWithoutReplacement ([500, 750, 1000, 1250, 1500, 1750, 2000], 1) [0];
    },
    data: {
        task: 'fixation'
    }
};


