function Text(string){
this.string = string;
}

Text.prototype.getcharCount = function CharCount(string){
    return this.string.length();
};

Text.prototype.getwordCount = function wordCount(string){
    return this.string.split(" ").length;
};

Text.prototype.getVowelCount = function vowelCount(string){
    return this.str.match(/[aeiou]/).length;
};



const Str1 = new Text("tekstvlak hier lezen");

console.log(Str1.getwordCount());