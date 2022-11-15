function Schilderij(naam, Canvas, kostprijs) {
  this.naam = naam;
  this.Canvas = Canvas;
  this.kostprijs = kostprijs;
}

function Schilder(voornaam, achternaam, stijl) {
  this.voornaam = voornaam;
  this.achternaam = achternaam;
  this.stijl = stijl;
  this.schilderijen = [];
}

Schilder.prototype.empty = function () {
  this.schilderijen = [];
};

Schilder.prototype.addPaintings = function newPainting(naam, Canvas, kostprijs) {
  this.schilderijen.push(new Schilderij(naam, Canvas, kostprijs));
};

const Schilder1 = new Schilder("Vincent", "van Gogh", "Postimpressionisme");
Schilder1.addPaintings("Zonnebloemen", "93x72", 39921750);
Schilder1.addPaintings("De aardappeleters", "82x114", 21152154);
Schilder1.addPaintings("Slaapkamer te Arles", "61x81", 19127784);


console.log(Schilder1);
