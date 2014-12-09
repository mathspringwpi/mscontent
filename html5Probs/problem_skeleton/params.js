function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function isArray(parsedItem) {
    return Object.prototype.toString.call(parsedItem) === '[object Array]';
}

// var plusScore = sym.getVariable("myScore");
// plusScore = plusScore + 1;
// sym.setVariable("myScore", plusScore);
// sym.$("Score").html(plusScore);

function getTextNodesIn(node, includeWhitespaceNodes) {
    var textNodes = [], nonWhitespaceMatcher = /\S/;

    function getTextNodes(node) {
        if (node.nodeType == 3) {
            if (includeWhitespaceNodes || nonWhitespaceMatcher.test(node.nodeValue)) {
                textNodes.push(node);
            }
        } else {
            for (var i = 0, len = node.childNodes.length; i < len; ++i) {
                getTextNodes(node.childNodes[i]);
            }
        }
    }

    getTextNodes(node);
    return textNodes;
}

function getConstraintJSon() {
    var bindings = window.parent.getProblemParams();
    return bindings;
}

function getConstraints() {
    var rand = -1;
    var constraints = {};
    var constraints = getConstraintJSon();
    data = constraints;
    $.each( data, function(key, val) {
        if (isArray(val)) {
            if (rand == -1) {
                rand = randomIntFromInterval(0, val.length-1);
            }
            constraints[key] = val[rand];
        }
        else {
            constraints[key] = val;
        }
    });
    return constraints;
}

function replaceVars(sym) {
    // create map from var name to selected random item or regular item
    // then iterate over children of stage and replace instances of var with corresponding item


    var constraints = getConstraints();
    var collection = getTextNodesIn(sym.$("Stage").get(0));
    $.each(collection,function(){
        for (var key in constraints) {
            var regex = new RegExp("(\\W|^)\\"+key+"(\\W|$)", "gi");
            this.nodeValue=this.nodeValue.replace(regex, "$1"+constraints[key]+"$2");
        }
    })
}

function parametrize(sym) {
    replaceVars(sym);
}

function plug(sym) {
    sym.$("ProblemStatement").html("In rectangle <i>ABCD</i>, diagonal <i>BD</i> makes a 30º with side <i>AD</i>. If <i>BD</i> = 14, what is the area of the rectangle?")
    sym.$("ProblemFigure").html("<img src=\"images/main_image.png\">");
    sym.$("AnswerA").html("28");
    sym.$("AnswerB").html("49");
    sym.$("AnswerC").html("<img src=\"images/C.gif\">");
    sym.$("AnswerD").html("<img src=\"images/D.gif\">");
    sym.$("AnswerE").html("98");

    sym.$("Hint1").html("Area = h x w<br><br><br><img src=\"images/hint1_img.png\">");
    sym.$("Hint2").html("<img src=\"images/hint2_img.png\"><br><br><br>What is the relationship between the sides of a 30-60-90 triangle?")
    sym.$("Hint3").html("<img src=\"images/hint3_img.png\">");
    sym.$("Hint4").html("<img src=\"images/hint3_img.png\"><br><br><br>2x = 14<br><br>Solve for x");
    sym.$("Hint5").html("<img src=\"images/hint3_img.png\"><br><br><br>x = 7<br><br>Can you find the value of h and w?");
    sym.$("Hint6").html("<img src=\"images/hint6_img.png\">");
    sym.$("Answer").html("<img src=\"images/hint6_img.png\"><br><br>Area = 7 x <img src=\"images/rt3.png\"><br><br>Area = 49<img src=\"images/rt3.png\"><br>");

    sym.$("QuestionSound").attr("src", "sounds/question.ogg");
    sym.$("QuestionSound").attr("src", "sounds/question.mp3");
    sym.$("Hint1Sound").attr("src", "sounds/hint1.ogg");
    sym.$("Hint1Sound").attr("src", "sounds/hint1.mp3");
    sym.$("Hint2Sound").attr("src", "sounds/hint2.ogg");
    sym.$("Hint2Sound").attr("src", "sounds/hint2.mp3");
    sym.$("Hint3Sound").attr("src", "sounds/hint3.ogg");
    sym.$("Hint3Sound").attr("src", "sounds/hint3.mp3");
    sym.$("Hint4Sound").attr("src", "sounds/hint4.ogg");
    sym.$("Hint4Sound").attr("src", "sounds/hint4.mp3");
    sym.$("Hint5Sound").attr("src", "sounds/hint5.ogg");
    sym.$("Hint5Sound").attr("src", "sounds/hint5.mp3");
    sym.$("AnswerSound").attr("src", "sounds/answer.ogg");
    sym.$("AnswerSound").attr("src", "sounds/answer.mp3");



}

function maybeStop(sym) {
    if (shown["Hint"+(numHints-1).toString()]) {
        sym.hintActive(sym,10);
    }
}

// insert code to be run when the symbol is created here

// $.get("dynamic.html", {}, function(res, code) {
//    sym.$("Text").html(res);
//    sym.play(0);
// });
