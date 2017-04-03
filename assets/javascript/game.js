// These are the initial state variables
// This is the meteor number variable
var meteor = Math.floor(19 + Math.random() * 81);


// These are the button number variables
var jP;

var yoshi;

var pokeball;

var hevi;

var jP = Math.floor(1 + Math.random()*11);

var yoshi = Math.floor(1 + Math.random()*11);

var pokeball = Math.floor(1 + Math.random()*11);

var hevi = Math.floor(1 + Math.random()*11);


// This is the initial wins/losses
var win = 0;

var loss = 0;


// This variable comes from the click event. It is a temporary variable
var caculatedEvent;

// This is the running total of all the clicked buttons
var runningTotal = 0;


// This function evaluates whether there is a win or a loss and induces a reset
var evaluator = function() {
			// Win state
		if (runningTotal === meteor) {
			$('#outcome').html('You blew up the meteor!');
			$('#win').html(function(){
				win += 1;
				runningTotal = 0;
				$('#win').html(win);
				$('#running').html(runningTotal);
				caculatedEvent = 0;
				meteor = Math.floor(19 + Math.random() * 81);
				$('#meteor').html(meteor);
				jP = Math.floor(1 + Math.random()*11);
				yoshi = Math.floor(1 + Math.random()*11);
				pokeball = Math.floor(1 + Math.random()*11);
				hevi = Math.floor(1 + Math.random()*11);
			})
	};

		// Lose state
		if (runningTotal > meteor) {
			$('#outcome').html('You killed all the dinosaurs. Happy now?');
			$('#loss').html(function(){
				loss += 1;
				$('#loss').html(loss);
				runningTotal = 0;
				$('#running').html(runningTotal);
				caculatedEvent = 0;
				meteor = Math.floor(19 + Math.random() * 81);
				$('#meteor').html(meteor);
				jP = Math.floor(1 + Math.random()*11);
				yoshi = Math.floor(1 + Math.random()*11);
				pokeball = Math.floor(1 + Math.random()*11);
				hevi = Math.floor(1 + Math.random()*11);
			})
	};
};

// This function runs the updates after a click and then runs the evaluator
var update = function(){
	runningTotal = runningTotal + caculatedEvent;
	$('#running').html(runningTotal);
	$('#outcome').html('');
	evaluator();
};

// The below sections define how index.html is calculated and updated
// This pushes the meteor value
$('#meteor').html(meteor);


// This runs the click events for the separate buttons
// Button 1
$('#first-button').click(function(){
	caculatedEvent = jP;
	update();
});

// Button 2
$('#second-button').click(function(){
	caculatedEvent = yoshi;
	update();
});

// Button 3
$('#third-button').click(function(){
	caculatedEvent = pokeball;
	update();
});

// Button 4
$('#fourth-button').click(function(){
	caculatedEvent = hevi;
	update();
});

// This keeps the front updated with the running total value
$('#running').html(runningTotal);

$('#win').html(win);

$('#loss').html(loss);