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
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         playSound(sym,"question.ogg");
         maybeStop(sym)

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         playSound(sym,"hint1a.ogg");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 162806, function(sym, e) {
         maybeStop(sym)

      });
      //Edge binding end

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         // insert code to be run when the symbol is created here
         // insert code to be run when the composition is fully loaded here
         yepnope(
         
         {
         
         nope:[
         
         '../js/problemUtils.js'//,
         //'example.js',
         //'example2.js',
         
         ],
         
         complete: init
         
         }
         
         );
         
         function init() {
         	console.log("Loaded libraries successfully");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 58000, function(sym, e) {
         playSound(sym,"hint1b.ogg");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 89000, function(sym, e) {
         playSound(sym,"hint2.ogg");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 115000, function(sym, e) {
         playSound(sym,"hint3a.ogg");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 133000, function(sym, e) {
         playSound(sym,"hint3b.ogg");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 140000, function(sym, e) {
         playSound(sym,"hint4.ogg");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 152000, function(sym, e) {
         //Hint 5
         //This hint has no sound

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 154000, function(sym, e) {
         //Answer Hint
         //This hint has no sound

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 153735, function(sym, e) {
         maybeStop(sym)

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 151250, function(sym, e) {
         maybeStop(sym)

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 139776, function(sym, e) {
         maybeStop(sym)

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 114757, function(sym, e) {
         maybeStop(sym)

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 79000, function(sym, e) {
         //Hint 2
         //Sound plays in a few seconds

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 78641, function(sym, e) {
         maybeStop(sym)

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'EButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_E_Button}", "click", function(sym, e) {
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

      Symbol.bindElementAction(compId, symbolName, "${_E_Button}", "click", function(sym, e) {
         answerClicked(sym, "E");

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

      Symbol.bindElementAction(compId, symbolName, "${_E_Button}", "click", function(sym, e) {
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
   
      Symbol.bindElementAction(compId, symbolName, "${_E_Button}", "click", function(sym, e) {
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

      Symbol.bindElementAction(compId, symbolName, "${_D_Button}", "click", function(sym, e) {
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

      Symbol.bindElementAction(compId, symbolName, "${_D_Button}", "click", function(sym, e) {
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
   
      Symbol.bindElementAction(compId, symbolName, "${_D_Button}", "click", function(sym, e) {
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
   
      Symbol.bindElementAction(compId, symbolName, "${_D_Button}", "click", function(sym, e) {
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
   
      Symbol.bindElementAction(compId, symbolName, "${_C_Button}", "click", function(sym, e) {
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
   
      Symbol.bindElementAction(compId, symbolName, "${_B_Button}", "click", function(sym, e) {
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

      Symbol.bindElementAction(compId, symbolName, "${_A_Button}", "click", function(sym, e) {
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
   
      Symbol.bindElementAction(compId, symbolName, "${_A_Button}", "click", function(sym, e) {
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

})(jQuery, AdobeEdge, "EdgeProblem");