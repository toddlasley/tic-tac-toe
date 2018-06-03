function main(){
	var playerOneTurn = true;
	var X = "X";
	var O = "O";
	
	newGame();
	
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

		var winnerDeclared = false;
		
		if(box1x && box2x && box3x
			|| box4x && box5x && box6x
			|| box7x && box8x && box9x
			|| box1x && box4x && box7x
			|| box2x && box5x && box8x
			|| box3x && box6x && box9x
			|| box1x && box5x && box9x
			|| box3x && box5x && box7x) {
				alert("Player 1 (X) is the winner!");
				winnerDeclared = true;
			}
			
		if(box1o && box2o && box3o
			|| box4o && box5o && box6o
			|| box7o && box8o && box9o
			|| box1o && box4o && box7o
			|| box2o && box5o && box8o
			|| box3o && box6o && box9o
			|| box1o && box5o && box9o
			|| box3o && box5o && box7o) {
				alert("Player 2 (O) is the winner!");
				winnerDeclared = true;
			}

		if(winnerDeclared) {
			$('.box').unbind('click');
		}
	}
	
	$('#new-game').click(function(){
		newGame();
	});

	function newGame(){
		var space = '&nbsp';
		$('.box').html(space).removeClass('selectedX');
		$('.box').html(space).removeClass('selectedO');
		playerOneTurn = true;
		$('.box').addClass('blank-box').click(function(){
			if($(this).hasClass('blank-box'))
			{	
				if(playerOneTurn)
				{	
					$(this).html(X).removeClass('blank-box').addClass('selectedX');
					playerOneTurn = false;				
				}
				else
				{
					$(this).html(O).removeClass('blank-box').addClass('selectedO');
					playerOneTurn = true;				
				}
			}
	
			checkWin();		
		});
	}
}
$(document).ready(main);