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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         yepnope(
         
         {
         
         nope:[
         
         '../js/edgeProblemUtils.js'
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

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EdgeProblem");