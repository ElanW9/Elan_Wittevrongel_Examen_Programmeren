function Text(String){
this.String = String;
}

Text.prototype.CharCount = function fromLeft(links){
    return this.String.left();
}



const Str1 = new Text("tekstvlak");

console.log(Str1.CharCount());