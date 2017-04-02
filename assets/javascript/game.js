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

// This shows the values in the console for debugging. Will be removed
console.log(meteor, jP, yoshi, pokeball, hevi, runningTotal);


// The below sections define how index.html is calculated and updated
// This pushes the meteor value
$('#meteor').html(meteor);

// This runs the click events for the separate buttons
$('#first-button').click(function(){

	caculatedEvent = jP;
	runningTotal = runningTotal + caculatedEvent;
	$('#running').html(runningTotal);

		if (runningTotal === meteor) {
			$('#outcome').html('You Win!');
			$('#win').html(function(){
				win += 1;
				runningTotal = 0;
				$('#win').html(win);
				$('#running').html(runningTotal);
				caculatedEvent = 0;
				meteor = Math.floor(19 + Math.random() * 81);
				jP = Math.floor(1 + Math.random()*11);
				yoshi = Math.floor(1 + Math.random()*11);
				pokeball = Math.floor(1 + Math.random()*11);
				hevi = Math.floor(1 + Math.random()*11);
			})
	}

		if (runningTotal > meteor) {
			$('#outcome').html('You killed all the dinosaurs. Happy now?');
			$('#loss').html(function(){
				loss += 1;
				$('#loss').html(loss);
				runningTotal = 0;
				$('#running').html(runningTotal);
				caculatedEvent = 0;
				meteor = Math.floor(19 + Math.random() * 81);
				jP = Math.floor(1 + Math.random()*11);
				yoshi = Math.floor(1 + Math.random()*11);
				pokeball = Math.floor(1 + Math.random()*11);
				hevi = Math.floor(1 + Math.random()*11);
			})
	}
});

$('#second-button').click(function(){

	caculatedEvent = yoshi;
	runningTotal = runningTotal + caculatedEvent;
	$('#running').html(runningTotal);
	$('#outcome').html('');

		if (runningTotal === meteor) {
			$('#outcome').html('You Win!');
			$('#win').html(function(){
				win += 1;
				runningTotal = 0;
				$('#win').html(win);
				$('#running').html(runningTotal);
				caculatedEvent = 0;
				meteor = Math.floor(19 + Math.random() * 81);
				jP = Math.floor(1 + Math.random()*11);
				yoshi = Math.floor(1 + Math.random()*11);
				pokeball = Math.floor(1 + Math.random()*11);
				hevi = Math.floor(1 + Math.random()*11);
			})
	}

		if (runningTotal > meteor) {
			$('#outcome').html('You killed all the dinosaurs. Happy now?');
			$('#loss').html(function(){
				loss += 1;
				$('#loss').html(loss);
				runningTotal = 0;
				$('#running').html(runningTotal);
				caculatedEvent = 0;
				meteor = Math.floor(19 + Math.random() * 81);
				jP = Math.floor(1 + Math.random()*11);
				yoshi = Math.floor(1 + Math.random()*11);
				pokeball = Math.floor(1 + Math.random()*11);
				hevi = Math.floor(1 + Math.random()*11);
			})
	}
});

$('#third-button').click(function(){

	caculatedEvent = pokeball;
	runningTotal = runningTotal + caculatedEvent;
	$('#running').html(runningTotal);
	$('#outcome').html('');

		if (runningTotal === meteor) {
			$('#outcome').html('You Win!');
			$('#win').html(function(){
				win += 1;
				runningTotal = 0;
				$('#win').html(win);
				$('#running').html(runningTotal);
				caculatedEvent = 0;
				meteor = Math.floor(19 + Math.random() * 81);
				jP = Math.floor(1 + Math.random()*11);
				yoshi = Math.floor(1 + Math.random()*11);
				pokeball = Math.floor(1 + Math.random()*11);
				hevi = Math.floor(1 + Math.random()*11);
			})
	}

		if (runningTotal > meteor) {
			$('#outcome').html('You killed all the dinosaurs. Happy now?');
			$('#loss').html(function(){
				loss += 1;
				$('#loss').html(loss);
				runningTotal = 0;
				$('#running').html(runningTotal);
				caculatedEvent = 0;
				meteor = Math.floor(19 + Math.random() * 81);
				jP = Math.floor(1 + Math.random()*11);
				yoshi = Math.floor(1 + Math.random()*11);
				pokeball = Math.floor(1 + Math.random()*11);
				hevi = Math.floor(1 + Math.random()*11);
			})
	}
});

$('#fourth-button').click(function(){

	caculatedEvent = hevi;
	runningTotal = runningTotal + caculatedEvent;
	$('#running').html(runningTotal);
	$('#outcome').html('');

		if (runningTotal === meteor) {
			$('#outcome').html('You Win!');
			$('#win').html(function(){
				win += 1;
				runningTotal = 0;
				$('#win').html(win);
				$('#running').html(runningTotal);
				caculatedEvent = 0;
				meteor = Math.floor(19 + Math.random() * 81);
				jP = Math.floor(1 + Math.random()*11);
				yoshi = Math.floor(1 + Math.random()*11);
				pokeball = Math.floor(1 + Math.random()*11);
				hevi = Math.floor(1 + Math.random()*11);
			})
	}

		if (runningTotal > meteor) {
			$('#outcome').html('You killed all the dinosaurs. Happy now?');
			$('#loss').html(function(){
				loss += 1;
				$('#loss').html(loss);
				runningTotal = 0;
				$('#running').html(runningTotal);
				caculatedEvent = 0;
				meteor = Math.floor(19 + Math.random() * 81);
				jP = Math.floor(1 + Math.random()*11);
				yoshi = Math.floor(1 + Math.random()*11);
				pokeball = Math.floor(1 + Math.random()*11);
				hevi = Math.floor(1 + Math.random()*11);
			})
	}
});

// This keeps the front updated with the running total value
$('#running').html(runningTotal);

$('#win').html(win);

$('#loss').html(loss);