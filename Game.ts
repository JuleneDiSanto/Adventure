//Julene DiSanto
enum GameState {
    WELCOMING,
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    ELEVEN,
    TWELVE,
    THIRTEEN,
    FOURTEEN,
    FIFTEEN,
    SIXTEEN,
    SEVENTEEN,
    EIGHTEEN,
    GOODBYE
}


export class Game {
    private stateCur: GameState = GameState.WELCOMING;  
    public makeAMove(sInput: string): string
    {
        let sReply = "Hello! Would you like to take part in a scary story?";
        switch(this.stateCur){
            case GameState.WELCOMING: 
                this.stateCur = GameState.ONE;
                break;
            case GameState.ONE:
                if(sInput.match("yes")){
                    sReply = "After a fun day at the beach you and a group of friends get lost on your way home. You decide to stop to ask for directions. You pull up to a very large house with a light on in the top window. Do you knock on the door or leave?";
                    this.stateCur = GameState.TWO;
                }else if(sInput.match("no")) {
                        sReply = "That's too bad. Bye!";
                } else {
                    sReply = "yes or no?"
                    this.stateCur = GameState.GOODBYE;
                }
                break;
            case GameState.TWO:
                if(sInput.match("knock")){
                    sReply = "You and your friends knock on the door. It slowly creeps open. Do you go inside?";
                    this.stateCur = GameState.THREE;
                } else if(sInput.match("leave")) {
                    sReply = "You and your friends leave to find a different house. That probably was a smart decision!";
                    this.stateCur = GameState.GOODBYE;
                } else {
                    sReply = "knock or leave?"
                }
                break;
            case GameState.THREE:
                if(sInput.match("yes")){
                    sReply = "You walk inside the house. It is dark and quiet. There is a large staircase. Do you go upstairs or downstairs?";
                    this.stateCur = GameState.FOUR;
                } else if(sInput.match("no")) {
                    sReply = "Your friends go in. Do you follow or run away?";
                    this.stateCur = GameState.FIVE;
                } else {
                    sReply = "yes or no?"
                }
                break;
            case GameState.FOUR:
                if(sInput.match("upstairs")){
                    sReply = "When you get upstairs there are only two doors unlocked. You hear soft singing in the one on the left. Which room do you go into? Right or left?";
                    this.stateCur = GameState.SEVEN;
                } else if(sInput.match("downstairs")) {
                    sReply = "The door is locked. Go upstairs or stay here?";
                    this.stateCur = GameState.SIX;
                } else {
                    sReply = "Nothing here. You should go upstairs..."
                }
                break;
            case GameState.FIVE:
                if(sInput.match("follow")){
                    sReply = "You follow your friends inside. Do they go upstairs or downstairs?";
                    this.stateCur = GameState.SIX;
                } else if(sInput.match("run away")) {
                    sReply = "You ran away and left your friends behind.";
                    this.stateCur = GameState.GOODBYE;
                } else {
                    sReply = "Follow or run away?"
                }
                break;
            case GameState.SIX:
                if(sInput.match("upstairs")){
                    sReply = "When you get upstairs there are only two doors unlocked. You hear soft singing in the one on the left. Which room do you go into? Right or left?";
                    this.stateCur = GameState.SEVEN;
                } else if(sInput.match("downstairs")) {
                    sReply = "Door is locked. Go upstairs or stay here?";
                    this.stateCur = GameState.SIX;
                } else {
                    sReply = "Nothing here. You should go upstairs..."
                }
                break;
            case GameState.SEVEN:
                if(sInput.match("left")){
                    sReply = "An old woman dressed in an white dress is standing by the window, softly singing. Do you interrupt or run away?";
                    this.stateCur = GameState.EIGHT;
                } else if(sInput.match("right")) {
                    sReply = "There is a message written in blood on the wall. Do you read the message or get scared and leave?";
                    this.stateCur = GameState.NINE;
                } else {
                    sReply = "right or left?"
                }
                break;
            case GameState.EIGHT:
                if(sInput.match("interrupt")){
                    sReply = "The old woman was an evil spirit - and you upset her! She attacks you and you died.";
                    this.stateCur = GameState.GOODBYE;
                } else if(sInput.match("run away")) {
                    sReply = "She chases you down the stairs and out the door....do you run towards the car or the forest?";
                    this.stateCur = GameState.FOURTEEN;
                } else {
                    sReply = "Interrupt or run away?"
                }
                break;
            case GameState.NINE:
                if(sInput.match("read")){
                    sReply = "You read the message: 'Follow the singing'. Your friends decided you go into the other room. Do you go or stay?";
                    this.stateCur = GameState.TEN;
                } else if(sInput.match("leave")) {
                    sReply = "This is enough for you. You get out of the house as fast as you can!";
                    this.stateCur = GameState.GOODBYE;
                } else {
                    sReply = "read or leave?"
                }
                break;
            case GameState.TEN:
                if(sInput.match("Go")){
                    sReply = "You head into the other room. There is an old woman dressed in white singing softly by the window. Do you interrupt or run away?";
                    this.stateCur = GameState.EIGHT;
                } else if(sInput.match("stay")) {
                    sReply = "You stay in the room, while your friends go. After a minute goes by you hear them screaming. Do you help your friends?";
                    this.stateCur = GameState.ELEVEN;
                } else {
                    sReply = "Go or stay?"
                }
                break;
            case GameState.ELEVEN:
                if(sInput.match("yes")){
                    sReply = "You try to save them, but its too late. The woman notices you. Do you fight or run?";
                    this.stateCur = GameState.TWELVE;
                } else if(sInput.match("no")) {
                    sReply = "You hear singing coming closer to the room. Do you hide or run?";
                    this.stateCur = GameState.THIRTEEN;
                } else {
                    sReply = "Yes or no?"
                }
                break;
            case GameState.TWELVE:
                if(sInput.match("fight")){
                    sReply = "You were brave but you didnt stand a chance! The old woman was an evil spirit and she killed you.";
                    this.stateCur = GameState.GOODBYE;
                } else if(sInput.match("run")) {
                    sReply = "You run away as fast as you can...are you running towards the car or forest?";
                    this.stateCur = GameState.FOURTEEN;
                } else {
                    sReply = "Nothing here. You should go upstairs..."
                }
                break;
            case GameState.THIRTEEN:
                if(sInput.match("hide")){
                    sReply = "You find some old furniture to hide behind. The woman doesn't notice you! After she leaves you quietly slip out of the house. You survived!";
                    this.stateCur = GameState.GOODBYE;
                } else if(sInput.match("run")) {
                    sReply = "The woman now knows you are here and she chases you as you try to run out of the house. Do you run towards the car or the forest?";
                    this.stateCur = GameState.FOURTEEN;
                } else {
                    sReply = "hide or run?"
                }
                break;
            case GameState.FOURTEEN:
                if(sInput.match("car")){
                    sReply = "The car door was left open but no keys!! How many seconds does it take you to hot-wire the car?";
                    this.stateCur = GameState.FIFTEEN;
                } else if(sInput.match("forest")) {
                    sReply = "You run into the forest but you can still hear faint singing following you. You trip on something lying in the dirt. Do you pick it up? ";
                    this.stateCur = GameState.SIXTEEN;
                } else {
                    sReply = "CAR OR FOREST?!!?"
                }
                break;
            case GameState.FIFTEEN:
                if(parseInt(sInput) <= 30 ){
                    sReply = "The car starts and you quickly speed away, leaving the woman in the distance. You survived!";
                    this.stateCur = GameState.GOODBYE;
                } else if(parseInt(sInput) > 30) {
                    sReply = "That's too bad, you took too long. The old woman was an evil spirit and she killed you.";
                    this.stateCur = GameState.GOODBYE;
                } else {
                    sReply = "Type how many seconds it would take you to figure it out?!"
                }
                break;
            case GameState.SIXTEEN:
                if(sInput.match("yes")){
                    sReply = "You grab the item you tripped on. It was a gun. Clearly this being is supernatural, what use will a gun be? You decide to keep it anyway and continue running through the woods. You see a cabin up ahead, do you go inside?";
                    this.stateCur = GameState.SEVENTEEN;
                } else if(sInput.match("no")) {
                    sReply = "You get back up and ignore the item you tripped on. You see a cabin up ahead, do you go inside? ";
                    this.stateCur = GameState.EIGHTEEN;
                } else {
                    sReply = "yes or no?"
                }
                break;
            case GameState.SEVENTEEN:
                if(sInput.match("yes")){
                    sReply = "You run into the cabin. You see the woman through the window, she approachs fast so you decide to use the gun. It didnt have normal bullet in it...but...rocksalt? Turns out the woman was an evil spirit and the rocksalt worked! You survived.";
                    this.stateCur = GameState.GOODBYE;
                } else if(sInput.match("no")) {
                    sReply = "No more hiding. You see the woman in the distance and decide to use the gun.  It didnt have normal bullet in it...but...rocksalt? Turns out the woman was an evil spirit and the rocksalt worked! You survived.";
                    this.stateCur = GameState.GOODBYE;
                } else {
                    sReply = "yes or no?"
                }
                break;
            case GameState.EIGHTEEN:
                if(sInput.match("yes")){
                    sReply = "You run into the cabin. It's too late to hide she knows you are there. Turns out the woman was an evil spirit and she was not happy that you disturbed her. She killed you in the cabin.";
                    this.stateCur = GameState.GOODBYE;
                } else if(sInput.match("no")) {
                    sReply = "You decide not to stop, but running is no use. Turns out the woman was an evil spirit and faster than you. She caught up to you and killed you.";
                    this.stateCur = GameState.GOODBYE;
                } else {
                    sReply = "yes or no?"
                }
                break;
            case GameState.GOODBYE:
                    sReply = "Hope you had fun! Refresh the page to play again."
               
        }
        return(sReply);
    }
}