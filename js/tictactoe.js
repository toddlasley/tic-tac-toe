function main(){
	var playerOneTurn = true;
	var X = "X";
	var O = "O";
	
	$('.box').addClass('blank-box');
	
	function newGame(){
		var space = "&nbsp";
		$('.box').html(space).removeClass('selectedX');
		$('.box').html(space).removeClass('selectedO');
		playerOneTurn = true;
		$('.box').addClass('blank-box');
	}
	
	function displayTurn(){
		if(playerOneTurn)
			$('#next-player').html("It is player 1's turn. (X)")
		else
			$('#next-player').html("It is player 2's turn. (O)")
	}
	
	function spacesTaken(){
		if(!$('.box').hasClass('blank-box'))
		{			
			alert("It's a tie!");
			newGame();
		}
	}
	
	function checkWin(){
		var box1x = $('#box1').hasClass('selectedX');
		var box2x = $('#box2').hasClass('selectedX');
		var box3x = $('#box3').hasClass('selectedX');
		var box4x = $('#box4').hasClass('selectedX');
		var box5x = $('#box5').hasClass('selectedX');
		var box6x = $('#box6').hasClass('selectedX');
		var box7x = $('#box7').hasClass('selectedX');
		var box8x = $('#box8').hasClass('selectedX');
		var box9x = $('#box9').hasClass('selectedX');
		
		var box1o = $('#box1').hasClass('selectedO');
		var box2o = $('#box2').hasClass('selectedO');
		var box3o = $('#box3').hasClass('selectedO');
		var box4o = $('#box4').hasClass('selectedO');
		var box5o = $('#box5').hasClass('selectedO');
		var box6o = $('#box6').hasClass('selectedO');
		var box7o = $('#box7').hasClass('selectedO');
		var box8o = $('#box8').hasClass('selectedO');
		var box9o = $('#box9').hasClass('selectedO');
		
		if(box1x && box2x && box3x)
			alert("Player 1 (X) is the winner!");
		if(box4x && box5x && box6x)
			alert("Player 1 (X) is the winner!");
		if(box7x && box8x && box9x)
			alert("Player 1 (X) is the winner!");
		if(box1x && box4x && box7x)
			alert("Player 1 (X) is the winner!");
		if(box2x && box5x && box8x)
			alert("Player 1 (X) is the winner!");
		if(box3x && box6x && box9x)
			alert("Player 1 (X) is the winner!");
		if(box1x && box5x && box9x)
			alert("Player 1 (X) is the winner!");
		if(box3x && box5x && box7x)
			alert("Player 1 (X) is the winner!");
		
		if(box1o && box2o && box3o)
			alert("Player 2 (O) is the winner!");
		if(box4o && box5o && box6o)
			alert("Player 2 (O) is the winner!");
		if(box7o && box8o && box9o)
			alert("Player 2 (O) is the winner!");
		if(box1o && box4o && box7o)
			alert("Player 2 (O) is the winner!");
		if(box2o && box5o && box8o)
			alert("Player 2 (O) is the winner!");
		if(box3o && box6o && box9o)
			alert("Player 2 (O) is the winner!");
		if(box1o && box5o && box9o)
			alert("Player 2 (O) is the winner!");
		if(box3o && box5o && box7o)
			alert("Player 2 (O) is the winner!");
	}
	
	
	$('.box').click(function(){
		if($(this).hasClass('blank-box'))
		{	
			if(playerOneTurn)
			{	
				$(this).html(X).removeClass('blank-box').addClass('selectedX');
				playerOneTurn = false;
				checkWin();
				spacesTaken();
				displayTurn();
			}
			else
			{
				$(this).html(O).removeClass('blank-box').addClass('selectedO');
				playerOneTurn = true;
				checkWin();
				spacesTaken();
				displayTurn();
			}
		}
	});
	
	$('#new-game').click(function(){
		newGame()
	});
}
$(document).ready(main);