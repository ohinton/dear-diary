(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
};

Diary.prototype.vowelCount = function() {
  var vowels = this.entry.replace(/[^aeiou]/ig, '');
  var vowelArray = vowels.split("");
  var vowelCount = 0;
  for(var i=0; i < vowelArray.length; i++) {
    vowelCount += 1;
  }
  return vowelCount;
};

Diary.prototype.consonantCount = function() {
  var consonants = this.entry.replace(/[\s\[aeiou_+-.,!@#$%^&*();|<>"'?=:1234567890]/ig, '');
  var consonantArray = consonants.split("");
  var consonantCount = 0;
  for(var i=0; i < consonantArray.length; i++) {
    consonantCount += 1;
  }
  return consonantCount;
};

Diary.prototype.getTeaser = function() {
  var sentenceArray = this.entry.split(".");
  var firstSentenceArray = sentenceArray[0].split(" ");
  if (firstSentenceArray.length <= 8) {
    return firstSentenceArray.join(" ");
  } else {
    var clippedTeaser = [];
    for(var i=0; i < 8; i++) {
      clippedTeaser.push(firstSentenceArray[i]);
    }
    return clippedTeaser.join(" ");
  }
};



exports.diaryModule = Diary;

},{}],2:[function(require,module,exports){
var Diary = require('./../js/diary.js').diaryModule;


$(document).ready(function() {
  $("form#diary").submit(function() {
    event.preventDefault();
  var inputtedTitle = $("input#title").val();
  var inputtedEntry = $("input#entry").val();
  var newDiary = new Diary(inputtedTitle, inputtedEntry);

  $("#printed-title").text(newDiary.title);
  $("#printed-entry").text(newDiary.entry);
  });
});

},{"./../js/diary.js":1}]},{},[2]);
