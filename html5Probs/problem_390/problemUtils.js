function answerClicked (sym, buttonName) {
    var correct = true; //window.parent.gradeAnswer('A');
    alert("Button " + buttonName + " pressed");

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
    sym.$("QuestionSound_Container").html ("");
    var questionsound=$("<iframe type ='text/html' width='550' height='310' src="+soundFile+" frameborder='0'>" + "</iframe>");
    sym.$("QuestionSound_Container").append(questionsound);
}

function maybeStop (sym) {
	//sym.stop();
}