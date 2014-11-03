var hintStop=true;
var debug=false;
var readAloud = false;
var isShortAnswer=false;
var constraintJSon="";
//var constraintJSon="{\"$a\": [\"40\", \"40\"],\"$b\": [\"30\", \"30\"],\"$c\": [\"x\", \"45\"],\"$d\": [\"25\", \"x\"],\"$ans_A\": [\"65\", \"65\"],\"$ans_B\": [\"45\", \"45\"],\"$ans_C\": [\"50\", \"50\"],\"$ans_D\": [\"35\", \"35\"],\"$ans_E\": [\"45\", \"25\"]}";

function debugAlert(msg) {
    if (debug ) {
        alert(msg);
    }
}

function getEdgeCompositionId () {
    return "EdgeProblem";    // hardwired for now
}

function probUtilsInit(sym, shortAnswer) {
    if (shortAnswer)
        isShortAnswer = shortAnswer;
    maybeStop(sym);
}

function answerClicked (sym, buttonName) {
    debugAlert(buttonName + " was clicked. Calling parent.answerChosen.");
    window.parent.tutorhut_answerChosen(sym,buttonName);               // TODO this is failing on macs because of security from tutor.mathspring.org to rose.cs.umass.edu
}


// given an array of hint labels in the correct order,  play them one at a time.
function prob_playHintSequence (hintSequence) {
    hintStop = false;
    prob_playHintInternal(hintSequence[0]);
}

function prob_playHint (hintLabel) {
    hintStop=true;
    readAloud = true;
    prob_playHintInternal(hintLabel);
}

function prob_playHintInternal(hintLabel) {
//    var wind = document.getElementById("iframe").contentWindow ;
    // These Composition IDs are different for each problem.   So we need to figure out where to get from.
//    var Comp = wind.AdobeEdge.getComposition(getEdgeCompositionId());
    var Comp = window.AdobeEdge.getComposition(getEdgeCompositionId());
    Comp.getStage().play(hintLabel,true) ;
}



function prob_readProblem() {
    readAloud = true;
//    var Comp = sysGlobals.childWindow.AdobeEdge.getComposition(getEdgeCompositionId());
    var Comp = window.AdobeEdge.getComposition(getEdgeCompositionId());
    Comp.getStage().play("Read Question",true);
//    embedSound("question");
}

// sym is the selected button, buttonName is the letter of the multiple choice answer selected
function prob_gradeAnswer (sym, buttonName, isCorrect, showHint) {
    debugAlert("gradeAnswer got " + isCorrect);
    if (!isShortAnswer) {
        if (isCorrect)
        {
            sym.stop("Answer Correct");
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
        else
        {
            sym.stop("Answer Incorrect");
        }
    }
    else {
        if (isCorrect) {
//            sym.getComposition().getStage().getElementById("x").style.display = 'none'; // hide it
            sym.getComposition().getStage().$("#Grade_X").hide();
            sym.getComposition().getStage().$("#Grade_Check").show();
//            sym.getComposition().getStage().getElementById("check").show();
        }
        else {
            sym.getComposition().getStage().$("#Grade_Check").style.display = 'none'; // hide it
            sym.getComposition().getStage().$("#Grade_X").show();
//            sym.getComposition().getStage().$("#x").show();
//            sym.getComposition().getStage().$("#check").hide();
        }
    }

}

function maybeStop(sym) {
    sym.stop();
}

function embedSound (soundFile) {
    var snd = new Audio();
    parent.document.getElementById("questionogg").setAttribute("src", "../problem_"+window.parent.globals.resource+"/"+soundFile+".ogg");
    parent.document.getElementById("questionmp3").setAttribute("src", "../problem_"+window.parent.globals.resource+"/"+soundFile+".mp3");
    parent.document.getElementById("questionaudio").load();
    parent.document.getElementById("questionaudio").play();
}

function processShortAnswer(sym, ans) {
    window.parent.tutorhut_shortAnswerSubmitted(sym,ans);
}

function playSound (sym, soundFile) {
	var soundFileList = soundFile.split(".");
    // As it stands there's no difference in the code between hitting the 'readProblem' button and automatically playing the problem
    // Thus, we have to check if the sound file being played is the question sound file. If it is, then we check a flag readAloud
    // which is true only if the button was clicked.
    if (!(soundFileList[0].toUpperCase() === "QUESTION") || readAloud == true) {
        sym.$("QuestionSound_Container").html ("");
        var questionsound=$("<audio controls autoplay><source src='"+soundFileList[0]+".ogg' type='audio/ogg'><source src='"+soundFileList[0]+".mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>");
        sym.$("QuestionSound_Container").append(questionsound);
    }
    readAloud = false;
}