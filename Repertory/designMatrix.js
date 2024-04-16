
//Preload video and images 

var video_Load = ["img/shuffle_vid.mp4"]
 
var images_Load = [
  "img/empty_card.png", 
  "img/number_0.png", 
  "img/number_1.png", 
  "img/number_2.png", 
  "img/number_3.png", 
  "img/number_4.png", 
  "img/number_5.png", 
  "img/number_6.png", 
  "img/number_7.png", 
  "img/number_minus1.png",
  "img/number_minus2.png", 
  "img/number_minus3.png",
  "img/number_minus4.png",
  "img/number_minus5.png", 
  "img/number_minus6.png",
  "img/number_minus7.png",
  "img/greenAndred_circle.png",
  "img/50_red.png",
  "img/50_green.png",
  "img/new_50_red.png", //now blue
  "img/new_50_green.png", //now yellow
  "img/new_greenAndred_circle.png",
  "img/deck.png",
  "img/suspense.png",
  "img/satisfaction.png"
]


//Images to display (+7)

var images_Exp = [
'<img src="img/number_minus7.png" class="img">',
'<img src="img/number_minus6.png" class="img">',
'<img src="img/number_minus5.png" class="img">',
'<img src="img/number_minus4.png" class="img">',
'<img src="img/number_minus3.png" class="img">',
'<img src="img/number_minus2.png" class="img">',
'<img src="img/number_minus1.png" class="img">',
'<img src="img/number_0.png" class="img">', 
'<img src="img/number_1.png" class="img">', 
'<img src="img/number_2.png" class="img">', 
'<img src="img/number_3.png" class="img">', 
'<img src="img/number_4.png" class="img">',
'<img src="img/number_5.png" class="img">', 
'<img src="img/number_6.png" class="img">',
'<img src="img/number_7.png" class="img">',
]



var images_Exp_tiny = [
  '<img src="img/number_minus7.png" class="img4">',
  '<img src="img/number_minus6.png" class="img4">',
  '<img src="img/number_minus5.png" class="img4">',
  '<img src="img/number_minus4.png" class="img4">',
  '<img src="img/number_minus3.png" class="img4">',
  '<img src="img/number_minus2.png" class="img4">',
  '<img src="img/number_minus1.png" class="img4">',
  '<img src="img/number_0.png" class="img4">', 
  '<img src="img/number_1.png" class="img4">', 
  '<img src="img/number_2.png" class="img4">', 
  '<img src="img/number_3.png" class="img4">', 
  '<img src="img/number_4.png" class="img4">',
  '<img src="img/number_5.png" class="img4">', 
  '<img src="img/number_6.png" class="img4">',
  '<img src="img/number_7.png" class="img4">',
  ]



// *******************************************************
// ****************** COMMON VARIABLES *******************
// *******************************************************



//Start trial index

trialIdx = 0

//Random test game to try
test_game_array = [0, 6, 12, 18, 24, 30]
test_game = getRandomElement(test_game_array)

//Composition of groups as for pyhton simulation
games_group_1 = [2, 3, 5, 6, 8, 11, 13, 14, 17, 18, 19, 23, 24, 25, 29, 30, 31, 35]
games_group_2 = [0, 1, 4, 7, 9, 10, 12, 15, 16, 20, 21, 22, 26, 27, 28, 32, 33, 34]


//Select group for participant
group_selected = getRandomElement([games_group_1,games_group_2])

//Shuffle game array
shuffled_games = shuffleArray(group_selected)


//Select type of rating for participant => 0 is suspense rating, 1 is satisfaction rating
rating_selected = getRandomElement([0,1])
//rating_selected = 1


//Catch trial indexes
catch_divisor = [6, 9, 12, 15]



//Display back of cards 10 cards and 2 cards
element = '<img src = "img/card.png" class = "img">'

var back_card = ['<div class="img3-container">' + Array.from({ length: 10 }, () => element).join('') + '</div>'];
var back_card_2 =  ['<div class="img-container2">' + Array.from({ length: 2 }, () => element).join('') + '</div>'];

var counting = '<div class="text-container3">Compte = 0 <br> Threshold = 3 <br><br><br><br><br><br><br><br>' + '</div>'


//Lottery

//Neutral lottery
var images_circle = '<img src="img/new_greenAndred_circle.png" class="img2">';


//Alternating lottery
var stimulus_to_alt = ['<img src= "img/new_50_red.png" class="img2">', '<img src= "img/new_50_green.png" class="img2">'];

//Get a random number of repetitions to alternate pure lottery

pure_lottery_length_even = [4, 6, 8]




// *******************************************************
// ******************** CONDITION 1 **********************
// *******************************************************


//Load stimuli trajectories

fetch('stimuli_15Apr24_5_trials.csv')
    .then(response => response.text())
    .then(csvData => {
        // Parse CSV data into JavaScript array or object
        // Example: Convert CSV data to an array of arrays
        const rows = csvData.split('\n');
        const data = rows.map(row => row.split(';'));
        
        // Use the data to populate the designMatrix
        // Example: Assuming designMatrix is a variable that holds your data
        condition_1_stimuli = data;
        
        //Turn decks and pairs arrays from csv into a suitable arrays for js
        numDecks = 36;
       
        stimuli_cond1 = [];
        for (let i = 1; i <= numDecks; i++) {
      
          cond1 = [

            //get deck
            Array.from(condition_1_stimuli[i][2].split(','), Number),

            //get index of cards to link to images_Exp, since the range of images is from -7 to 7, 
            //the value in the deck (i.e.: 4) has to transformed in index by adding 7 (index of card 4 in images_Exp is 4+7 =11)
            Array.from(condition_1_stimuli[i][2].split(','), element => Number(element) + 7),

            //get pairs

            //pair 1
            Array.from(condition_1_stimuli[i][4].split(','), Number),

            //pair 1 index (+7)
            Array.from(condition_1_stimuli[i][4].split(','), element => Number(element) + 7),

            //pair 2
            Array.from(condition_1_stimuli[i][6].split(','), Number),

            //pair 2 index (+7)
            Array.from(condition_1_stimuli[i][6].split(','), element => Number(element) + 7),
            
            //pair 3
            Array.from(condition_1_stimuli[i][8].split(','), Number),

            //pair 3 index (+7)
            Array.from(condition_1_stimuli[i][8].split(','), element => Number(element) + 7),


            //is win?
            Array.from(condition_1_stimuli[i][15].split(','), Number),

            //overall suspense?

            Array.from(condition_1_stimuli[i][14].split(','), Number),

            //Added pairs, I put them at the end of the data frame so that 
            //I do not need to adapt the whole rest of the code (otherwise I mess up the indexing in html)

            //Pair 4
            Array.from(condition_1_stimuli[i][10].split(','), Number),

            //pair 4 index (+7)
            Array.from(condition_1_stimuli[i][10].split(','), element => Number(element) + 7),

            //Pair 5
            Array.from(condition_1_stimuli[i][12].split(','), Number),

            //pair 5 index (+7)
            Array.from(condition_1_stimuli[i][12].split(','), element => Number(element) + 7),


            //
            
          ];
          stimuli_cond1.push(cond1);
      }


      //stimuli_cond1[0][0] -> deck of game 1
      //stimuli_cond1[0][1] -> indexes of deck of game 1
      //stimuli_cond1[0][2] -> pair 1 of game 1
      //stimuli_cond1[0][3] -> indexes pair 1 of game 1
      //stimuli_cond1[0][4] -> pair 2 of game 1
      //stimuli_cond1[0][5] -> indexes pair 2 of game 1
      //stimuli_cond1[0][6] -> pair 3 of game 1
      //stimuli_cond1[0][7] -> indexes pair 3 of game 1

      //so on for each game...


      //CREATE CONTROLLED RANDOMISATION AND ADAPT DISPLAY!!!!
      stimuli_cond1_swapped = JSON.parse(JSON.stringify(stimuli_cond1));
      
      //The randomisation is done by organising rounds as following
      
      // 1 - 1 - 1 -> card 1, card 1, card 1
      // 1 - 1 - 2
      // 1 - 2 - 2
      // 2 - 2 - 2
      // 2 - 2 - 1
      // 2 - 1 - 1


      // for games 0, 6, 12, 18, 24, 30  -> 1 - 1 - 1 - 2 - 2-> 

      for (var i = 0; i < stimuli_cond1_swapped.length; i+=6) {

        // Iterate from 10 to 13
        for (var j = 10; j <= 13; j++) {
          swap_array(stimuli_cond1_swapped[i][j]);
          stimuli_cond1_swapped[i][j] = swapped_array;
        }
    }



      // for games 1, 7, 13, 19, 25, 31 -> 1 - 1 - 2 - 2 - 1

      for (var i = 1; i < stimuli_cond1_swapped.length; i+=6) {

        // Iterate from 6 to 7
        for (var j = 6; j <= 7; j++) {
          swap_array(stimuli_cond1_swapped[i][j]);
          stimuli_cond1_swapped[i][j] = swapped_array;
        }

        // Iterate from 10 to 11
        for (var j = 10; j <= 11; j++) {
          swap_array(stimuli_cond1_swapped[i][j]);
          stimuli_cond1_swapped[i][j] = swapped_array;
        }
    }

      // for games 2, 8, 14, 20, 26, 32 -> 1 - 2 - 2 - 1 - 2

      for (var i = 2; i < stimuli_cond1_swapped.length; i+=6) {

        for (var j = 4; j <= 7; j++) {
          swap_array(stimuli_cond1_swapped[i][j]);
          stimuli_cond1_swapped[i][j] = swapped_array;
        }

        // Iterate from 12 to 13
        for (var j = 12; j <= 13; j++) {
          swap_array(stimuli_cond1_swapped[i][j]);
          stimuli_cond1_swapped[i][j] = swapped_array;
        }
      }


       // for games 3, 9, 15, 21, 27, 33 -> 2 - 2 - 2 - 1 - 1

      for (var i = 3; i < stimuli_cond1_swapped.length; i+=6) {
        
        for (var j = 2; j <= 7; j++) {
          swap_array(stimuli_cond1_swapped[i][j]);
          stimuli_cond1_swapped[i][j] = swapped_array;
        }
      }


       //for games 4, 10, 16, 22, 28, 34 -> 2 - 2 - 1 - 1 - 2

      for (var i = 4; i < stimuli_cond1_swapped.length; i+=6) { 
        
        for (var j = 2; j <= 5; j++) {
          swap_array(stimuli_cond1_swapped[i][j]);
          stimuli_cond1_swapped[i][j] = swapped_array;
        }

        // Iterate from 12 to 13
        for (var j = 12; j <= 13; j++) {
          swap_array(stimuli_cond1_swapped[i][j]);
          stimuli_cond1_swapped[i][j] = swapped_array;
        }
      }


       //for games 5, 11, 17, 23, 29, 35 -> 2 - 1 - 1 - 2 -1

      for (var i = 5; i < stimuli_cond1_swapped.length; i+=6) { 

        for (var j = 2; j <= 3; j++) {
          swap_array(stimuli_cond1_swapped[i][j]);
          stimuli_cond1_swapped[i][j] = swapped_array;
        }

        // Iterate from 10 to 11
        for (var j = 10; j <= 11; j++) {
          swap_array(stimuli_cond1_swapped[i][j]);
          stimuli_cond1_swapped[i][j] = swapped_array;
        }
      }

      
  } 
  
)




// *******************************************************
// ******************** FUNCTIONS ************************
// *******************************************************


//Get random items from a given array 

function random_items(images, count) {
  const randomItems = [];
  for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * images.length);
      randomItems.push(images[randomIndex]);
  }
  return randomItems;
  }


//Shuffle elements in given array

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  

//Get random element from an array 
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


//Choose the images to display based on trajectories
function selectImages(trajectory) {
  
  var selectedImages = []

  for(var i = 0; i < trajectory.length; i++) {
    selectedImages.push(images_Exp[trajectory[i]]); // Adjust index since arrays are zero-based
  }

  return selectedImages;
}



//Choose the images to display based on trajectories, but small format
function selectImagesTiny(trajectory) {
  
  var selectedImages = []

  for(var i = 0; i < trajectory.length; i++) {
    selectedImages.push(images_Exp_tiny[trajectory[i]]); // Adjust index since arrays are zero-based
  }

  return selectedImages;
}


//Function to swap dual array

function swap_array(arr) {
  swapped_array = [arr[1], arr[0]]
  return swapped_array;
}

