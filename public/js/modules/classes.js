export class Boss {
    constructor(nom, pv, pa) {
        this.nom = nom,
            this.pv = pv,
            this.pa = pa
    }
    attaque(hero) {
        hero.pv -= this.pa;
    }


// class Hero {
//     constructor(nom, pv, pa, posture) {
//         this.nom = nom,
//             this.pv = pv,
//             this.pa = pa,
//             this.posture = "normal"
//     }
//     posture_attaque() {
//         this.pa = this.pa * 1.4;
//         this.pv = this.pv * 0.75;
//         this.posture = "attaque"
//     }
//     posture_defense() {
//         this.pa = this.pa * 0.5;
//         this.pv = this.pv * 2.5;
//         this.posture = "defense"
//     }
// }

// export class Guerrier extends Hero {
//     constructor(nom, pv, pa, pr) {
//         super(nom, pv, pa),
//             this.pr = pr
//     }
//     rage() {
//         let temp;
//         if (this.pr < 4) {
//             this.pr +=1;
//         } else if (this.pr == 4) {
//             temp = this.pa;
//             this.pa *= 1.25;
//             this.pr = 0;
//         }
//         if (this.pr == 0) {
//             this.pa = temp;
//         }
//     }
// }

// export class Mage extends Hero {
//     constructor(nom, pv, pa, mana) {
//         super(nom, pv, pa),
//         this.mana = mana
//     }
//     pointsMana(){
//         if (this.mana > 0) {
//             this.mana -= 2;
//         } else {
//             this.mana = 7;
//         }
//     }
// }

// export class Archer extends Hero {
//     constructor(nom, pv, pa, fleches) {
//         super(nom, pv, pa),
//         this.fleches = fleches
//     }
//     nbreFleche(){
//         if (this.fleches>0) {
//             this.fleches -= 1;
//         } else {
//             this.fleches = 6;
//         }
//     }
// }