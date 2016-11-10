'use strict';

var Engine = function () {

// private attributes and methods
    var plateau = [];
    var taillePlateauLigne = 6;
    var taillePlateau = taillePlateauLigne * taillePlateauLigne;
// public methods
    this.tailleTableau = function () {
        return taillePlateau;
    };
    this.getPlateau = function () {
        return plateau;
    }
    // vide 0 , blanc 1 , bleu 2 , vert 3 , jaune 4 , rouge 5 , noir 6
    this.initTableau = function (plateauInit) {
        var cordX;
        var cordY;
        for (cordX = 0; cordX < taillePlateauLigne; cordX += 1) {
            plateau[cordX] = [];
            for (cordY = 0; cordY < taillePlateauLigne; cordY += 1) {
                plateau[cordX][cordY] = plateauInit[cordX][cordY];
            }
        }
        return true;
    };

    this.plateauCorrect = function () {
        var cordX;
        var cordY;
        var pieceAvantHorizontale;
        var pieceAvantVerticale = -1;

        for (cordX = 0; cordX < taillePlateauLigne; cordX += 1) {
            pieceAvantHorizontale = -1;
            pieceAvantVerticale = -1;
            for (cordY = 0; cordY < taillePlateauLigne; cordY += 1) {
                // GESTION HORIZONTALE
                if (plateau[cordX][cordY] === pieceAvantHorizontale) {

                    return false;
                }else{
                    pieceAvantHorizontale = plateau[cordX][cordY];
                }
                pieceAvantHorizontale = plateau[cordX][cordY];
                // GESTION VERTICALE
                if (cordX !== 0 && plateau[cordX][cordY] === pieceAvantVerticale){

                    return false;
                }else{
                    pieceAvantVerticale = plateau[cordX][cordY];
                }
            }
        }
        return true;
    };
    this.affichage = function () {
        var chaine;
        var cordX;
        var cordY;
        console.log("vide 0 , blanc 1 , bleu 2 , vert 3 , jaune 4 , rouge 5 , noir 6");
        for (cordX = 0; cordX < 6; cordX += 1) {
            chaine = "";
            for (cordY = 0; cordY < 6; cordY += 1) {
                chaine = chaine + " " + plateau[cordX][cordY] + " ";
            }
            console.log(chaine);
        }
        console.log("--------------------------------");
    };
};
