'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var eng = new Engine();
PalettoTestCase.prototype.testStory1 = function () {
    assertEquals(eng.tailleTableau(), 36);
    assertEquals(eng.initTableau(), true);
};

