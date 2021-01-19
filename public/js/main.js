let pers = {
    argent: 50,

    panier: {
        chocolat: 2, 
        tartine: 3.50
    },

    achats(){
        for(x in this.panier){
            this.argent -= this.panier[x]; 
        }
        return `Apès vos ${Object.keys(this.panier).length} achats, il vous reste ${this.argent} `;
    }
}

console.log(pers.achats());



// exo 2 
let vieille_dame = {
    age: 18122, 
    nom: {
        prenom: "Jaquelinne", 
        nom: "Duponte" // (dupont c'est au masculin #égalité!) 
    },
    moral: "bien", // mal ou bien sinon elle sait pas 
    objet: "canne",

    se_plaindre(){
        x=(this.moral == "mal") ? "Vous me dérangez" : x=(this.moral == "bien") ? "Bonjour Monsieur " : "Je ne sais pas au fait..." ; 
        return x;
    }
}

console.log(vieille_dame.se_plaindre());













/*
function personne(nom, argent, achats){
    this.nom=nom,
    this.argent=argent, 
    this.achats=[],
    
    this.bonjour = function(){
        console.log(`Bonjour ${this.nom}, tu as ${this.argent} euro et tu as achetr: ${this.achats}`);    
    }
    
    //, 

    //achete = (article) {
    //    console.log(Object.keys(article).length);
    //}

}

function article(nom, prix, stock){
    this.nom = nom,
    this.prix = prix, 
    this.stock = stock
}


var chocolat = new article("chocolat", 1.25, 10); 

var iphone = new article("Apple iPhone", 500, 2); 

var pers1 = new personne("Dawid", 50,"xd");


console.log(pers1.bonjour());



//function achats(personne, )
*/


