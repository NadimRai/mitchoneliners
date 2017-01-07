$(document).ready(function(){
	var random ;
	var randomOneliner;
	getOneliner();
	function getOneliner(){
		var quotes = ["One time a guy handed me a picture, he said 'Here is a picture of me when I was younger.' Every picture of you is when you were younger.", "I want to hang a map of the world in my house. Then I’m gonna put pins into all the locations I’ve traveled to, but first I’m gonna have to travel to the top two corners of the map, so it won’t fall down.", "I like rice. Rice is great if you want to eat 2,000 of something.",
		 "I bought myself a parrot, the parrot talked, but it did not say “I’m hungry”… so it died.","I think Big Foot is blurry, that’s the problem.", "Wearing a turtleneck is like being strangled by a really weak guy… all day.", "I saw this wino, he was eating grapes. It’s like, “Dude, you have to wait.”","I tried to walk into Target… but I missed.",
		 "I like to play blackjack. I’m not addicting to gambling… I’m addicting to sitting in a semicircle."];

		 random = Math.floor((Math.random()*quotes.length));
		 randomOneliner = quotes[random];

		$('.oneliner').text(randomOneliner);
	}

	$('#newline').on('click', function(){
		getOneliner();
	});

	$('#tweet').on("click", function(){
		window.open("https://twitter.com/intent/tweet?text="+randomOneliner);
	})

});