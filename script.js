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
   
/*
=================================================
Calling the functions from above
=================================================
*/


    //Create Deck
    CreateDeck();
    HandCardToPlayer(Deck);
    HandCardToPlayer(Deck);
    ShowCard(PlayersHand);

        

