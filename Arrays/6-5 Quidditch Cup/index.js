/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

var team = ["Oliver Wood", "Doofy Doo", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(team) {
    if (team.length >= 7) {
        return true;
    }  else {
        return false;
    }
    
}


console.log(hasEnoughPlayers(team));
