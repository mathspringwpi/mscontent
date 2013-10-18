function answerClicked (sym, buttonName) {
    var correct = true; //window.parent.gradeAnswer('A');
//    alert("Button " + buttonName + " pressed");

    if (correct)
    {
        sym.play("Answer Correct");
    }
    else
    {
        sym.play("Answer Incorrect");
    }
    if (buttonName != "A")
        sym.getComposition().getStage().getSymbol("Answers").getSymbol("AButton").stop("Nothing Selected");
    if (buttonName != "B")
        sym.getComposition().getStage().getSymbol("Answers").getSymbol("BButton").stop("Nothing Selected");
    if (buttonName != "C")
        sym.getComposition().getStage().getSymbol("Answers").getSymbol("CButton").stop("Nothing Selected");
    if (buttonName != "D")
        sym.getComposition().getStage().getSymbol("Answers").getSymbol("DButton").stop("Nothing Selected");
    if (buttonName != "E")
        sym.getComposition().getStage().getSymbol("Answers").getSymbol("EButton").stop("Nothing Selected");
}

function playSound (sym, soundFile) {
	var soundFileList = soundFile.split(".");
//	alert(soundFileList[0]);
    sym.$("QuestionSound_Container").html ("");
    var questionsound=$("<audio controls autoplay><source src='"+soundFileList[0]+".ogg' type='audio/ogg'><source src='"+soundFileList[0]+".mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>");
    sym.$("QuestionSound_Container").append(questionsound);
}