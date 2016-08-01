var Diary = require('./../js/diary.js').diaryModule;


$(document).ready(function() {
  $("form#diary").submit(function() {
    event.preventDefault();
  var inputtedTitle = $("input#title").val();
  var inputtedEntry = $("input#entry").val();
  var newDiary = new Diary(inputtedTitle, inputtedEntry);

  $("#printed-title").text(newDiary.title);
  $("#printed-entry").text(newDiary.entry);
  $("#printed-wordcount").text(newDiary.wordCount());
  });
});
