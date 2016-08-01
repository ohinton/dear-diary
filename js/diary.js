function Diary(title, entry){
  this.title = title;
  this.entry = entry;
}

Diary.prototype.wordCount = function() {
  var words = this.entry.split(" ");
  var wordCount = 0;
  for(var i=0; i < words.length; i++) {
    wordCount += 1;
  }
  return wordCount;
}

Diary.prototype.vowelCount = function() {
  var vowels = this.entry.replace(/[^aeiou]/ig, '');
  var vowelArray = vowels.split("");
  var vowelCount = 0;
  for(var i=0; i < vowelArray.length; i++) {
    vowelCount += 1;
  }
  return vowelCount;
}

Diary.prototype.consonantCount = function() {
  var consonants = this.entry.replace(/[\s\[aeiou_+-.,!@#$%^&*();|<>"'?=:1234567890]/ig, '');
  var consonantArray = consonants.split("");
  var consonantCount = 0;
  for(var i=0; i < consonantArray.length; i++) {
    consonantCount += 1;
  }
  return consonantCount;
}

Diary.prototype.getTeaser = function() {
  var sentenceArray = this.entry.split(".")
  var firstSentenceArray = sentenceArray[0].split(" ")
  if (firstSentenceArray.length <= 8) {
    return firstSentenceArray.join(" ");
  } else {
    var clippedTeaser = [];
    for(var i=0; i < 8; i++) {
      clippedTeaser.push(firstSentenceArray[i]);
    };
    return clippedTeaser.join(" ");
  };
}



exports.diaryModule = Diary;
