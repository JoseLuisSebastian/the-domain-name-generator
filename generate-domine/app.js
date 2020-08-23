//Create a script that generate all the possible domain name 
//combinations from a list of pronouns, adjectives and nouns

let pronoun = ['the','our'];
let adj = ['great', 'big'];
let noun = ['jogger','racoon'];


for (let indexPronoun =0; indexPronoun <= pronoun.length - 1; indexPronoun++) {
    for (let indexAdj =0; indexAdj <= adj.length - 1; indexAdj++) {
        for (let indexNoun =0; indexNoun <= noun.length - 1; indexNoun++) {

                console.log(pronoun[indexPronoun]+adj[indexAdj]+ noun[indexNoun] + ".com");

        }
    }
}
