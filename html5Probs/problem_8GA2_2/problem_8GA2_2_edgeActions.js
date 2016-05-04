/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         //Wherever the question audio ends, that is where you need to put this code.
         
         maybeStop (sym)

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55000, function(sym, e) {
         // Wherever hint 1 ends, that is where you need to put this code.
         
         maybeStop (sym)

      });
      //Edge binding end

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         yepnope(
         
         {
         
         nope:[
         
         '../js/problemUtils.js'
         //'example.js',
         //'example2.js',
         
         ],
         
         complete: init
         
         }
         
         );
         
         function init() {
         	var shortAnswer=true;
         	probUtilsInit(sym, shortAnswer);
         	console.log("Loaded libraries successfully");
         }
         
         var input_answer = '<input id="answer_field" type="text"><br>';
         var input_button = '<br><button id="submit_answer" type="button">Submit Answer!</button>';
         sym.$('Answer_Container').html(input_answer.concat(input_button));
         
         $("#submit_answer").on("click", function() {
         	processShortAnswer(sym,$("#answer_field").val());
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 91000, function(sym, e) {
         // Wherever hint 2 ends, that is where you need to put this code.
         
         maybeStop (sym)

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 115000, function(sym, e) {
         // Wherever Answer Hint ends, that is where you need to put this code.
         
         maybeStop (sym)

      });
      //Edge binding end

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'EButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${E_Button}", "click", function(sym, e) {
         sym.play("Answer Selected");
         sym.getComposition().getStage().getSymbol("AButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("BButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("CButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("DButton").stop("Nothing Selected");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("EButton");
   //Edge symbol end:'EButton'

   //=========================================================
   
   //Edge symbol: 'EButton'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("EButton_3");
   //Edge symbol end:'EButton_3'

   //=========================================================
   
   //Edge symbol: 'EButton'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${E_Button}", "click", function(sym, e) {
         sym.play("Answer Selected");
         sym.getComposition().getStage().getSymbol("Answers").getSymbol("AButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("Answers").getSymbol("BButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("Answers").getSymbol("CButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("Answers").getSymbol("DButton").stop("Nothing Selected");

      });
      //Edge binding end

   })("EButton_2");
   //Edge symbol end:'EButton_2'

   //=========================================================
   
   //Edge symbol: 'EButton_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${E_Button}", "click", function(sym, e) {
         sym.play("Answer Selected");
         sym.getComposition().getStage().getSymbol("AButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("BButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("CButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("DButton").stop("Nothing Selected");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("EButton_1");
   //Edge symbol end:'EButton_1'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'DButton'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${D_Button}", "click", function(sym, e) {
         answerClicked(sym, "D");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("DButton_3");
   //Edge symbol end:'DButton_3'

   //=========================================================
   
   //Edge symbol: 'DButton'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${D_Button}", "click", function(sym, e) {
         sym.play("Answer Selected");
         sym.getComposition().getStage().getSymbol("Answers").getSymbol("AButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("Answers").getSymbol("BButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("Answers").getSymbol("CButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("Answers").getSymbol("EButton").stop("Nothing Selected");

      });
      //Edge binding end

   })("DButton_2");
   //Edge symbol end:'DButton_2'

   //=========================================================
   
   //Edge symbol: 'DButton_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${D_Button}", "click", function(sym, e) {
         sym.play("Answer Selected");
         sym.getComposition().getStage().getSymbol("AButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("BButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("CButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("EButton").stop("Nothing Selected");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("DButton_1");
   //Edge symbol end:'DButton_1'

   //=========================================================
   
   //Edge symbol: 'DButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${D_Button}", "click", function(sym, e) {
         sym.play("Answer Selected");
         sym.getComposition().getStage().getSymbol("AButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("BButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("CButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("EButton").stop("Nothing Selected");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("DButton");
   //Edge symbol end:'DButton'

   //=========================================================
   
   //Edge symbol: 'CButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${C_Button}", "click", function(sym, e) {
         answerClicked(sym, "C");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("CButton_3");
   //Edge symbol end:'CButton_3'

   //=========================================================
   
   //Edge symbol: 'BButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${B_Button}", "click", function(sym, e) {
         answerClicked(sym, "B");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("BButton_3");
   //Edge symbol end:'BButton_3'

   //=========================================================
   
   //Edge symbol: 'AButton'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${A_Button}", "click", function(sym, e) {
         answerClicked(sym, "A");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
sym.stop();

      });
      //Edge binding end

   })("AButton_3");
   //Edge symbol end:'AButton_3'

   //=========================================================
   
   //Edge symbol: 'AButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${A_Button}", "click", function(sym, e) {
         sym.play("Answer Selected");
         sym.getComposition().getStage().getSymbol("BButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("CButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("DButton").stop("Nothing Selected");
         sym.getComposition().getStage().getSymbol("EButton").stop("Nothing Selected");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {

      });
      //Edge binding end

   })("AButton");
   //Edge symbol end:'AButton'

   //=========================================================
   
   //Edge symbol: 'Answers'
   (function(symbolName) {   
   
   })("Answers_1");
   //Edge symbol end:'Answers_1'

   //=========================================================
   
   //Edge symbol: 'BButton_3_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${B_Button}", "click", function(sym, e) {
         answerClicked(sym, "B");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("BButton_3_1");
   //Edge symbol end:'BButton_3_1'

   //=========================================================
   
   //Edge symbol: 'AButton_3_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${A_Button}", "click", function(sym, e) {
         answerClicked(sym, "A");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
sym.stop();

      });
      //Edge binding end

   })("AButton_3_1");
   //Edge symbol end:'AButton_3_1'

   //=========================================================
   
   //Edge symbol: 'DButton_3_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${D_Button}", "click", function(sym, e) {
         answerClicked(sym, "D");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("DButton_3_1");
   //Edge symbol end:'DButton_3_1'

   //=========================================================
   
   //Edge symbol: 'CButton_3_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${C_Button}", "click", function(sym, e) {
         answerClicked(sym, "C");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("CButton_3_1");
   //Edge symbol end:'CButton_3_1'

   //=========================================================
   
   //Edge symbol: 'EButton_3_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${E_Button}", "click", function(sym, e) {
         answerClicked(sym, "E");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("EButton_3_1");
   //Edge symbol end:'EButton_3_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EdgeProblem");