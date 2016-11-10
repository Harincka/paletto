'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var eng = new Engine();
PalettoTestCase.prototype.testStory1 = function () {
    assertEquals(eng.tailleTableau(), 36);
    // vide 0 , blanc 1 , bleu 2 , vert 3 , jaune 4 , rouge 5 , noir 6
    var plateauInit = [];
    plateauInit.push([6, 3, 1, 2, 5, 1]);
    plateauInit.push([4, 1, 3, 5, 4, 2]);
    plateauInit.push([2, 4, 2, 1, 6, 5]);
    plateauInit.push([5, 6, 5, 3, 2, 1]);
    plateauInit.push([1, 3, 4, 6, 4, 3]);
    plateauInit.push([4, 2, 6, 5, 3, 6]);

    assertEquals(eng.initTableau(plateauInit), true);
    eng.affichage();
    assertEquals(eng.plateauCorrect(), true);

};

PalettoTestCase.prototype.testStory2 = function () {
    assertEquals(eng.getJoueurs()[0].getBillesPossedees()[0], 4);
}
