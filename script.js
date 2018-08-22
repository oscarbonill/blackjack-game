//Create blackjack game
//TODO: Create Deck
    //Create array of Suits
    //Create array of Values
    //Create empty array
    var Suits = ["Diamonds","Clubs","Hearts","Spades"];
    var Values = ["Ace","King","Queen","Jack","Ten","Nine","Eight","Seven","Six",
                "Five","Four","Three","Two"];
    var Deck = [ ];

    var PlayersHand = [ ];

    var houseHand = [];

    var player1Total = 0;

    var houseTotal = 0;
    //Create function that will create deck
    function CreateDeck()
    {
        for(var i = 0; i < Suits.length;i++)
        {
            for(var j = 0; j < Values.length; j++)
            {
                var card = {
                    Suit : Suits[i],
                    Value : Values[j]
                }
                Deck.push(card);
            }
        }
        return Deck;
    }



    //Show card function
    function ShowCard(hand)
    {
         var playerHand = hand;
         for(var i = 0; i < playerHand.length; i++)
         {
             console.log(playerHand[i].Value+" of "+ playerHand[i].Suit);
         }
        
        
    }

    //Pick random Card
    function pickRandomCard(deckParam)
    {
        var randomCard = deckParam[Math.floor(Math.random()*deckParam.length)];
        return randomCard;
    }

    //Remove from Deck function
    function RemoveFromDeck(randomNum)
    {
        Deck.splice(randomNum,1);
    }

    //Push card to players hand
    function HandCardToPlayer(deck)
    {
        var selectedCard = pickRandomCard(deck);
        RemoveFromDeck(selectedCard);
        PlayersHand.push(selectedCard);
    }

    //Hand card to house
    function HandCardToHouse(deck)
    {
        var selectedCard = pickRandomCard(deck);
        RemoveFromDeck(selectedCard);
        houseHand.push(selectedCard);
    }

    //TODO:Calculate Scores
    function CalculateScore(handOfCards)
    {
        var playerTotal = 0;
        for(var i = 0; i < handOfCards.length; i++)
        {
            if(handOfCards[i].Value == "Queen"|| handOfCards[i].Value  == "King"|| handOfCards[i].Value  == "Jack" ||handOfCards[i].Value  == "Ten")
            {
                playerTotal = playerTotal + 10;
            }
            else if(handOfCards[i].Value  == "Nine")
            {
                playerTotal = playerTotal + 9;
            }
            else if(handOfCards[i].Value  == "Eight")
            {
                playerTotal = playerTotal + 8;
            }
            else if(handOfCards[i].Value  == "Seven")
            {
                playerTotal = playerTotal + 7;
            }
            else if(handOfCards[i].Value  == "Six")
            {
                playerTotal = playerTotal + 6;
            }
            else if(handOfCards[i].Value  == "Five")
            {
                playerTotal = playerTotal + 5;
            }
            else if(handOfCards[i].Value  == "Four")
            {
                playerTotal = playerTotal + 4;
            }
            else if(handOfCards[i].Value  == "Three")
            {
                playerTotal = playerTotal + 3;
            }
            else if(handOfCards[i].Value  == "Two")
            {
                playerTotal = playerTotal + 2;
            }
            else if(handOfCards[i].Value  == "Ace")
            {
                if((playerTotal + 11) <= 21)
                {
                    playerTotal = playerTotal + 11;
                }
                else{
                    playerTotal = playerTotal + 1;
                }
            }
        }
        return playerTotal;
    }
    
   
/*
=================================================
Calling the functions from above
=================================================
*/


    //Create Deck
    CreateDeck();
    //Hand 2 cards to player 1
    HandCardToPlayer(Deck);
    HandCardToPlayer(Deck);
    //Show player 1 car
    console.log("Player 1 card");
    ShowCard(PlayersHand);
    //hand card to hand
    console.log("House Card");
    HandCardToHouse(Deck);
    HandCardToHouse(Deck);

    console.log(CalculateScore(PlayersHand));

    ShowCard(houseHand);

    console.log(CalculateScore(houseHand));

//Deal 2 cards to player 1

//Deal 2 cards to House

//Show player 1 cards
//Show House cards

//calculate player 1 total
//calculate House total 
//Compare player 1 and house totals
    //if player1 total = 21 and House total = 21
        //Draw
    //if player1 total = 21 and House total < 21
        //Player1 wins
    //if player1 total < 21 and House toal = 21
        //House wins

        

