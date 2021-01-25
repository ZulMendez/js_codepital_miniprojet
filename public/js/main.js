// # Bienvenu à Codepital:
// >Dans cet exercice nous aurons des malades qui iront ce faire débuger chez un doctor. Le doctor les diagnostiquera et leur préscrira un remède. Par la suite les malades irons à la pharmacie afin d'acheter leur remède puis le prendrons et seront guérri.
// ​
// ## Description des patients
// >les malades ont un nom, une maladie, de l'argent, une poche, un état de santé,ils savent aller à un endroit, prendre un médicamment et payer. Au début, les patients sont dans un salle d'attente. 
class Malades {
    constructor(nom, maladie, argent, poche, etatSante, traitement){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.traitement = traitement;
        this.goTo = () => {
            pharmacie.push(this.nom);
            console.log(`${this.nom} est allé à la pharmacie`);
        };
        this.takeCare = () => {
            if (this.argent >= 100) {
                console.log(`${this.nom} est soigné`);
            } else {
                cimetiere.push(this.nom);
                console.log(`${this.nom} n'as pas assez d'argent pour le traitement.`);
            }
        };
        this.paye = (doctor) => {
            this.argent -= doctor.tarif;
        };
    }
}

// |nom|maladie|argent|poche|etatSante|traitement|goTo|takeCare|paye|
// |---|---|---|---|---|---|---|---|---|
// |Marcus|mal indenté|100|vide|malade
// |Optimus|unsave|200|vide|malade
// |Sangoku|404|80|vide|malade
// |DarthVader|azmatique|110|vide|malade
// |Semicolon|syntaxError|60|vide|malade
let patient1 = new Malades('Marcus', 'mal indenté', 100, 'vide', 'malade');
let patient2 = new Malades('Optimus', 'unsave', 200, 'vide', 'malade');
let patient3 = new Malades('Sangoku', 404, 80, 'vide', 'malade');
let patient4 = new Malades('DarthVader', 'asthmatique', 110, 'vide', 'malade');
let patient5 = new Malades('Semicolon', 'syntaxError', 60, 'vide', 'malade');

let salleAttente = {
    nom: "salle d'attente",
    patients: [patient1, patient2, patient3, patient4, patient5],
}
console.log(salleAttente);
console.log(`Dans la salle d'attente il y a ${salleAttente.patients.length} personnes`);

// ## Description du doctor
// >Le doctor lui reçoit les patients dans son cabinet. Tout d'abord il les diagnostiques puis se fait payer avant de préscrire un traitement. Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant. Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. Son chat miaule toutes les deux secondes dans la console(bonus). La consultation coûte 50€. Les patients son dans un état de traitement avant de sortir du cabinet.
let doctor = {
    nom: 'Pierre',
    tarif: 50,
    cabinet: [],
    diagnostique(patients){
        console.log(`La maladie de ${patients.nom} est ${patients.maladie}`); 
    },
    patientIn(patients){
        this.cabinet.push(patients.nom);
    },
    patientOut(patients){
        this.cabinet.splice(patients.nom);
    }
}
// |nom|argent|cabinet|diagnostique|patienTIn|patientOut
// |---|---|---|---|---|---|
// |Debugger|0|[chat]

// ### Grille des diagnostiques
// |maladie|traitement|
// |---|---|
// |mal indenté|`ctrl+maj+f`|
// |unsave|`saveOnFocusChange`|
// |404|`CheckLinkRelation`|
// |azmatique|`Ventoline`|
// |syntaxError|`f12+doc`|
// ​
// ## La pharmacie
// >Les patients iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra alors les pousser dans un cimetière.
class Pharmacie {
    constructor(traitement, prix){
        this.traitement = traitement;
        this.prix = prix; 
    }
}
let traitement1 = new Pharmacie('ctrl+maj+f', 60);
let traitement2 = new Pharmacie('saveOnFocusChange', 100);
let traitement3 = new Pharmacie('CheckLinkRelation', 35);
let traitement4 = new Pharmacie('Ventoline', 40);
let traitement5 = new Pharmacie('F12+doc', 20);

let pharmacie = [];
let cimetiere = [];


// ### Tarif des traitements
// |Traitement|prix|
// |---|---|
// |`ctrl+maj+f`|60€
// |`saveOnFocusChange`|100€
// |`CheckLinkRelation`|35€
// |`Ventoline`|40€
// |`f12+doc`|20€
// ​
// # Vérification
// >Grâce à votre débugger suivé à la trace l'évolution de chacun de vos patients. Vérifier bien qu'il quitte à chaque fois la salle d'attente avant d'entrer dans le cabinet et qu'ils sortent bien du cabinet avant de laisser quelqu'un d'autre entré.

// MARCUS
doctor.patientIn(patient1);
console.log(`${patient1.nom} est entré au cabinet`);
console.log(doctor.cabinet);
let chat = {
    contenue : [0],
    miauler() {
        setTimeout(()=> {
            if (this.contenue[0] == 0) {
                console.log('miaou');
            }
        }, 2000)
    }
}
chat.miauler();
doctor.diagnostique(patient1);
console.log(`le traitement de ${patient1.nom} est ${traitement1.traitement}`);
patient1.paye(doctor);
console.log(`${patient1.nom} payé le docteur`);
console.log(`${patient1.nom} a actuellement ${patient1.argent} euros`);
doctor.patientOut(patient1);
console.log(`${patient1.nom} a quitté le cabinet`);
console.log(doctor.cabinet);
patient1.goTo(pharmacie);
console.log(pharmacie);
console.log(`le traitement de ${patient1.nom} coûte ${traitement1.prix} euros`);
patient1.takeCare();
console.log(`${patient1.nom} est mort`);
console.log("__________________________________________________");


