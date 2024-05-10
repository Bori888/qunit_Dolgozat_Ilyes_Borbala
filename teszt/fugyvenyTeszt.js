QUnit.module('armstrongE', function() {
    QUnit.test('Létezik-e', function(assert) {
      assert.ok(armstrongE);
    });
    QUnit.test('Fügvénye', function(assert) {
        assert.equal(typeof armstrongE === "function");
      });
    QUnit.test('Száme', function(assert) {
        assert.equal(armstrongE("kiskutya"),"nem szám");
    });
    QUnit.test('Negative', function(assert) {
        assert.equal(armstrongE(5),"Nem negativ");
    });
    QUnit.test('Pozitive', function(assert) {
        assert.equal(armstrongE(-3),"nem pozitiv");
    });
  });

