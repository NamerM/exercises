function fightResolve(defender, attacker)
{
    const pieces = [
    "p", "k", "a", "s"
  ];


    function Player1() {
        let pieceIndex= Math.floor(Math.random()*pieces.length);
        let player1Piece = pieces[pieceIndex];
        return player1Piece.toLowerCase();
    }

    function Player2(){
      return Player1().toUpperCase();
    }

    function random() {
        let arr = [Player1, Player2];
        let i = Math.floor(Math.random()*2);
        console.log(i)
        return arr[i]();
    }

    defender = random() 
    console.log("defender=>", defender);
    attacker = random()
    console.log("attacker=>", attacker);

    function isLowerCase (input) {  
      return input === String(input).toLowerCase()
    }
    function isUpperCase (input) {  
      return input === String(input).toUpperCase()
    }

    if(isLowerCase(defender) === isLowerCase(attacker) && isUpperCase(defender) === isUpperCase(attacker)) {
        return -1;
    } else  { 
        console.log("2nd phase comparison of pieces and outcome");
        console.log (defender, attacker);
function match(defender, attacker){
          if(defender == k && attacker == a || defender == s && attacker == p || defender == a && attacker == s || defender == p && attacker == k) return defender;
        }
        return "winning pieces is  " + attacker;
    }
	
    
}
fightResolve()
