def rps(player1, player2):
    if player1 == player2:
        return "Draw!"
    
    
    if (player1 == "rock" and player2 == "scissors") or (player1 == "scissors" and player2 == "paper") or (player1 == "paper" and player2 == "rock"):
        return "Player 1 won!"
    else:
        return "Player 2 won!"