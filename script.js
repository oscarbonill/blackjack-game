//Create blackjack game
//TODO: Create Deck
    //Create array of Suits
    //Create array of Values
    //Create empty array
    var Suits = ["Diamonds","Clubs","Hearts","Spades"];
    var Values = ["Ace","King","Queen","Jack","Ten","Nine","Eight","Seven","Six",
                "Five","Four","Three","Two"];
    var Deck = [ ];
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
    }

    CreateDeck();

    //Show card function
    function ShowCard(card)
    {
        console.log(card.Value);
    }

    ShowCard(Deck[1]);
    ShowCard(Deck[2]);
   
    
//TODO: Deal player cards
//TODO: Deal House Cards