import gui.NumberGroup ;
import gui.NumberLabel ;
import mx.controls.TextArea ;
import mx.controls.TextInput ;
import mx.controls.Label ;

class DivIntegersProceduralHint {

	// settings that may be changed
  private static var max_width:Number = 320 ;
  private static var max_height:Number = 600 ;
  private var NUMBER_SIZE:Number = 18 ;
  private var backgroundcolor : Number = 0xFFFFCC ;


  private var _mc:MovieClip;
  private var initx:Number ;
  private var inity:Number ;
  private var divisor:NumberGroup;
  private var dividend:NumberGroup;
  private var divisorx:Number  ;
  private var divisory:Number  ;
  private var dividendx:Number ;
  private var interspacex:Number = 15 ;
  private var interspacey:Number = 10 ;
  private var interspace:Number = 20 ;
  private var startCurrDiv:Number = 0 ;
  private var endCurrDiv:Number  ;
  private var step:Number = 0 ;
  private var curresultx:Number = 0 ;
  private var currentdividend:NumberGroup ;
  private var pullDownNum:NumberLabel ;
  private var result:NumberGroup, remainder:NumberGroup ;
  private var subtraend:NumberGroup, minuend:NumberGroup ;
  private var curresult:TextInput ;
  private var currsubtraction:TextInput ;
  private var currmultiplication:TextInput ;
  private var messageArea:Label ;
  private var writtenResult:TextArea ;
  private var resultConclusion:Label ;
  private var indexCurrRes:Number ;
  private var countPullDown:Number ;
  private var countConclusion:Number = 0;
  private var timerPullDownDescriptor:Number ;
  private var timerConclusionDescriptor:Number ;
  private var textInputLayer : Number = -1 ;
  private var units:String = "things" ;

  public function DivIntegersProceduralHint(mc:MovieClip, op1:Number, op2:Number, xx:Number, yy:Number, w:Number, 
  					h:Number, backgrcolor:Number, u:String) {
 
  	_mc = mc.createEmptyMovieClip("_mc", 1000) ;
 
	backgroundcolor = backgrcolor ;
	
	max_width = w ;
	max_height = h ;
	initx = xx ;
  	inity = yy ;
	divisorx = initx + max_width/4 ;
	divisory = inity + 100 ;
	units = u ;
  	
  	//background
	/*_mc.beginFill(backgroundcolor);
	_mc.moveTo(initx, inity);
	_mc.lineTo(initx + max_width, inity);
	_mc.lineTo(initx + max_width, inity + max_height);
	_mc.lineTo(initx, inity + max_height);
	_mc.lineTo(initx, inity);
	_mc.endFill() ;*/
	
  	
	//Create Text Message at the top
	messageArea = _mc.createClassObject(Label, "messageArea", 0) ;
	messageArea.setStyle("fontSize", NUMBER_SIZE * 0.75) ;
	messageArea.setStyle("textAlign", "center") ;
	messageArea.setStyle("display", "inline") ;
	messageArea.setSize(max_width,max_height) ;
	messageArea.move(initx,inity) ;
		
	if ( op1 < op2 ) {
		messageArea = _mc.createClassObject(TextArea, "messageArea", 0) ;
		messageArea.text = new String( "The hint cannot run unless op1 >= op2. op1=" + op1 + ". op2=" + op2 ) ;
		messageArea.setSize(max_width,max_height) ;
		messageArea.move(initx,inity) ;
		return ;
	}

	messageArea.text = "Let's go step by step: ";
	
  	divisor = new NumberGroup(_mc, op2, NUMBER_SIZE, divisorx, divisory) ;  
	dividendx = divisorx + divisor.width + 2*interspace ;
	dividend = new NumberGroup(_mc, op1, NUMBER_SIZE, dividendx,divisory) ;  
	drawDivisionSymbol() ; 
	
	
	endCurrDiv = dividend.getLength() - 1 ;
	
	result = null ;
	startCurrDiv = 0 ;
	endCurrDiv = dividend.getLength() - 1 ;
	divisor.highlight() ;	
	currentdividend = getFirstDividend() ;
	
	_parent._parent.contentLoader.invalidate();
	divide() ;
  }
  
  
  function drawDivisionSymbol():Void {
  	var firstx:Number = divisorx + divisor.width + interspace ;
  	var secondx:Number = firstx + dividend.width + interspace ;
  	var firsty:Number = divisory + dividend.height + 5 ;
  	var secondy:Number = inity + 90 ;
  	
	_mc.lineStyle(5, 0x000000, 100) ;
 	_mc.moveTo(firstx, firsty) ;
	_mc.lineTo(firstx, secondy) ;
 	_mc.moveTo(firstx, secondy) ;
	_mc.lineTo(secondx, secondy) ;
  }
  
  function drawSubtractionLine(posx:Number, posy:Number,length:Number):Void {
	_mc.lineStyle(3, 0x000000, 100) ;
 	_mc.moveTo(posx, posy) ;
	_mc.lineTo(posx+length, posy) ;
   }  

   public function divide():Void
   {       	
		currentdividend.highlight() ;
		divisor.highlight() ;

		if ( messageArea.getText() == "Let's go step by step: " ) {
		    messageArea.text = messageArea.text + "Now, divide " + currentdividend.getNumber() + " by " + divisor.getNumber() ;
		}	
		else {
		    messageArea.text = "Now, divide " + currentdividend.getNumber() + " by " + divisor.getNumber() ;
		}

	//Create the current result text box	
		if ( curresult == null ) {
			curresult = createNDigitTextField(2, "curresult", dividend.getNumberLabel(endCurrDiv)._x,divisory - 40 - interspacey) ;	
			curresultx = curresult.x ;
			
			//Create handlers
		   	//Needs to be here, otherwise the handler doesn't work
   			var thisHint:DivIntegersProceduralHint ;
	   		thisHint = this ;

			var divisionEnterHandler:Object  = new Object() ;
			divisionEnterHandler.enter = function (e:Object):Void {
				thisHint.checkResult() ;
			}
			curresult.addEventListener("enter", divisionEnterHandler) ;
		}
		else {
			curresult.move(dividend.getNumberLabel(endCurrDiv)._x, curresult.y)  ;
			curresult.setText("") ;
			curresult.setFocus() ;
		}
		_parent._parent.contentLoader.invalidate();
		curresult.visible=true ;
	}
	

 
 	function createNDigitTextField(length:Number, name:String, posx:Number, posy:Number):TextInput {
 		var textfield:TextInput ;
 		
 		if ( this.textInputLayer < 0 )
 			textInputLayer = _mc.getNextHighestDepth() ;
 			
		textfield = _mc.createClassObject(mx.controls.TextInput, name, _mc.getNextHighestDepth()) ;
		textfield.setStyle("color", 0x000000) ;
		textfield.setStyle("fontSize", NUMBER_SIZE) ;
		textfield.setStyle("fontWeight", "bold") ;
		textfield.setEditable(true) ;
		textfield.setSize(10*length,30) ;
		textfield.move( posx, posy ) ;
		textfield.restrict = "0-9." ;
		
		_parent._parent.contentLoader.invalidate();
		return textfield ;	
 	}
 	
	public function checkResult():Void {
		var division:Number = Math.floor(currentdividend.getNumber() / divisor.getNumber()) ;
		
		if ( new Number(curresult.getText()) == division ) {
			curresult.visible = false ;
			
			messageArea.setText("");  // Get rid of the previous error or introduction message

			if ( result == null ) {
				result = new NumberGroup(_mc, division, NUMBER_SIZE, curresult.x, curresult.y) ;
				indexCurrRes = 0 ;
			}
			else {
				result.remove() ;
				indexCurrRes = result.getLength() ;
				result = result.concatString(curresult.getText()) ;
			}
		
			currentdividend.unhighlight() ;
			multiply() ;
		}
		else { //There was a mistake
			curresult.setText("") ;
			var n1:Number = currentdividend.getNumber();
			var n2:Number = divisor.getNumber();
			var division:Number = Math.floor( n1/n2 ) ;
			
			if ( n1 % n2 != 0 ) {
//				messageArea.setText("Try dividing " + division * n2 + " / " + n2 + " instead of " + n1 + " / " + n2 ) ;
				messageArea.setText("How many times does " + n2 + " go into " + n1 + "?") ;
			}
			else {
				var whatisdivision_message: String = "What is " + n1 + " divided by " + n2 + "?"  ;
				if ( messageArea.text ==  whatisdivision_message )
					messageArea.setText(n1 + " divided by " + n2 + " is " + division + ". Type that number") ;
				else
					messageArea.setText(whatisdivision_message) ;				
			}
			_parent._parent.contentLoader.invalidate();
		}		
  	}

	
	public function multiply():Void
	{
		if ( currmultiplication == null ) {
			currmultiplication = createNDigitTextField(4, "curmultiplication", currentdividend.x, 
										currentdividend.y + currentdividend.height + interspacey) ;

	   		var thisHint:DivIntegersProceduralHint ;
	   		thisHint = this ;
	
			var multEnterHandler:Object  = new Object() ;
			multEnterHandler.enter = function (e:Object):Void {
				thisHint.checkMultiplication() ;
			}
			
			currmultiplication.addEventListener("enter", multEnterHandler) ;
		}
		else {
			currmultiplication.move(currentdividend.x, currentdividend.y + currentdividend.height + interspacey) ;
			currmultiplication.setText("");
			currmultiplication.setVisible(true) ;
		}
		
		if ( result.getNumberLabel(indexCurrRes).getNumber() * divisor.getNumber() < 10 )  
			currmultiplication.setSize(20, currmultiplication.height) ;
		else
			currmultiplication.setSize(35, currmultiplication.height) ;

		dividend.unhighlight() ;
		result.highlightFromTo(indexCurrRes, indexCurrRes) ;

		messageArea.setText("Now, multiply " + result.getNumberLabel(indexCurrRes).getNumber() + " by " + divisor.getNumber() );
		_parent._parent.contentLoader.invalidate();
		currmultiplication.setFocus() ;

	}
	
	
	public function subtract() 
	{
		var subtrx:Number ;
		var subtraction:Number = minuend.getNumber() - subtraend.getNumber() ;
		var width:Number ;
		
		if ( minuend.getNumber() >= 10 )
		    subtrx = minuend.x + minuend.width / 2;
		else
		    subtrx = minuend.x ; 
		
		if ( currsubtraction == null ) {
			currsubtraction = createNDigitTextField(4, "currsubtraction", currmultiplication.x, 
														subtraend.y + subtraend.height + interspacey) ;	
			currsubtraction.setStyle("align", "right") ;

	   		var thisHint:DivIntegersProceduralHint ;
	   		thisHint = this ;
	
			var subtractEnterHandler:Object  = new Object() ;
			subtractEnterHandler.enter = function (e:Object):Void {
				thisHint.checkSubtraction() ;
			}
			currsubtraction.addEventListener("enter", subtractEnterHandler) ;
		}
		else {
			currsubtraction.move(currmultiplication.x, subtraend.y + subtraend.height + interspacey) ;	
			currsubtraction.setText("") ;
			currsubtraction.setVisible(true) ;
		}
		
		currsubtraction.setFocus() ;
		currsubtraction.setSize(currmultiplication.width, 30) ;


		result.unhighlight() ;
		divisor.unhighlight() ;
		subtraend.highlight() ;
		minuend.highlight() ;
		
		drawSubtractionLine(minuend.x-5, currsubtraction.y-interspacey/2, minuend.width + 10) ;

		messageArea.setText("Now, subtract " + minuend.getNumber() + " minus " + subtraend.getNumber() );
		_parent._parent.contentLoader.invalidate();

	}
	
	function checkSubtraction():Void 
	{
		var n1:Number = minuend.getNumber() ;
		var n2:Number = subtraend.getNumber() ;
		var subtraction:Number = n1 - n2 ;
		var studentsresult:Number = new Number(currsubtraction.getText()) ;
		var subtractionstring:String = subtraction.toString() ;

		if ( studentsresult == subtraction ) {
			remainder = new NumberGroup(_mc, studentsresult, NUMBER_SIZE,
					currsubtraction.x + currsubtraction.width - subtraend.getNumberLabel(0).getWidth() * subtractionstring.length,
					currsubtraction.y ) ;
					
			currsubtraction.visible= false ;
			remainder.highlight() ;
			
			countPullDown = 0 ;			
			timerPullDownDescriptor = setInterval(this,"timerPullDown_handleEvent", 400);		
		}
		
		else { //There was a mistake			
			var whatissubtraction_message: String = "What is " + n1 + " minus " + n2 + "?"  ;
			if ( messageArea.text ==  whatissubtraction_message )
				messageArea.setText(n1 + " minus " + n2 + " is " + subtraction + ". Type in number " + subtraction) ;
			else
				messageArea.setText(whatissubtraction_message) ;				
			
			currsubtraction.setText("");		
			_parent._parent.contentLoader.invalidate();
		}
	}
	
	public function timerConclusion_handleEvent():Void {
		countConclusion ++ ;
		
		if ( countConclusion == 1 ) {
			minuend.unhighlight() ;
			subtraend.unhighlight() ;
			remainder.unhighlight() ;
			result.highlight() ;
	
	 		//Create the conclusion messages
			writtenResult = _mc.createClassObject(TextArea, "writtenResult", _mc.getNextHighestDepth(), {borderStyle: "none"}) ;
			writtenResult.setStyle("fontFamily", "Arial,Helvetica,sans-serif") ;
	 		writtenResult.setStyle("fontSize", NUMBER_SIZE) ;
			writtenResult.setStyle("textAlign", "center") ;
			writtenResult.setStyle("color",  0xC00C0C) ;
			writtenResult.wordWrap = true ;
			writtenResult.setStyle("display", "inline") ;
			writtenResult.setText("The result of dividing " + dividend.getNumber() + " " + units + " into " + 
									divisor.getNumber() + " equal groups is " + result.getNumber() + ". You will have " +
									result.getNumber() + " " + units + " in each group. ") ;
			writtenResult.move(initx, remainder.y + 30 ) ;
			//writtenResult.depthChild0._visible = false;
			writtenResult._alpha = 0;
			writtenResult.setSize(340, 80) ;
	
		}	
		if ( countConclusion == 4 ) {
			clearInterval(timerConclusionDescriptor) ;

			resultConclusion = _mc.createClassObject(Label, "resultConclusion", _mc.getNextHighestDepth()) ;
			resultConclusion.setText( dividend.getNumber() + " / " + divisor.getNumber() + " = " +  result.getNumber()) ;
			resultConclusion.move(initx, writtenResult.y + writtenResult.height ) ;
			resultConclusion.setSize(max_width, 30) ;
			resultConclusion.setStyle("fontSize", NUMBER_SIZE*1.3) ;
			resultConclusion.setStyle("textAlign", "center") ;
			resultConclusion.setStyle("color", 0xFF0000) ;
			resultConclusion.setStyle("display", "inline") ;
			resultConclusion.setStyle("fontWeight", "bold") ;
		}
		_parent._parent.contentLoader.invalidate();
	}
	
	public function timerPullDown_handleEvent():Void {

		if ( countPullDown == 0 ) {
			if ( endCurrDiv == dividend.getLength() - 1 )  {       
				//Then the division is finished
				clearInterval(timerPullDownDescriptor) ;
				// Create a timerfor the conclusion	
				timerConclusionDescriptor = setInterval(this,"timerConclusion_handleEvent", 1000);		
			}
			
			else {  // Then we need to pull down another divisor
				minuend.unhighlight() ;
				subtraend.unhighlight() ;
			}
		}
		else if ( countPullDown == 1 ) {	
			endCurrDiv++ ;
			startCurrDiv = endCurrDiv ;
			
			dividend.highlightFromTo(startCurrDiv, endCurrDiv) ;
				
			// Establish position for the new label with respect to the global container
			var posx:Number = dividend.getNumberLabel(startCurrDiv)._x ;
			var posy:Number = dividend.getNumberLabel(startCurrDiv)._y ;
				
			pullDownNum = new NumberLabel(_mc, dividend.getDigit(startCurrDiv), NUMBER_SIZE, posx, posy) ;            
			pullDownNum.highlight() ;
			step = (pullDownNum._y - remainder.y) / 2 ;
		}
		else if ( countPullDown == 2 ) {
			dividend.unhighlight() ;
			pullDownNum.setLocation(pullDownNum._x, pullDownNum._y - step) ;
		}
		else if ( countPullDown == 3 ) {
			pullDownNum.setLocation(pullDownNum._x, remainder.y) ;
		}
		
		else if ( countPullDown == 4 ) {
			dividend.unhighlight() ;
			remainder.remove() ;
			pullDownNum.remove() ;
			var r:Number = remainder.getNumber() ;
			remainder = remainder.getNumberGroup(remainder, pullDownNum) ;
			
			if ( r == 0 ) // Then there is the place for zero that has to be left there
				remainder.setLocation(remainder.x + 10, remainder.y) ;
				
			remainder.highlight() ;
			currentdividend = remainder ;
		}
		else {
			clearInterval(timerPullDownDescriptor) ;
			divide() ;
		}
	
		countPullDown ++ ;	
	}
		
	function checkMultiplication():Void {

		var n1:Number = divisor.getNumber() ;
		var n2:Number =  (new Number(curresult.getText())) ;
		var mult:Number = n1 * n2 ;
		var studentsresult:Number = new Number(currmultiplication.getText()) ;
		
		if ( studentsresult == mult ) {
			currmultiplication.visible = false ; 
			minuend = currentdividend ;
			
			messageArea.setText("");  // Get rid of the previous error or introduction message

			// Check for the case where there is a two digit minuend and a 1 digit subtraend
			var multx:Number = currmultiplication.x ;
			if ( minuend.getNumber() >= 10 && mult < 10 )
				multx += 20 ;
				
			subtraend = new NumberGroup(_mc, studentsresult, NUMBER_SIZE, multx, currmultiplication.y) ;
						
			subtract() ;
		}
		else { //There was a mistake
			var whatismultiplication_message: String = "What is " + n1 + " times " + n2 + "?"  ;
			if ( messageArea.text ==  whatismultiplication_message )
				messageArea.setText(n1 + " times " + n2 + " is " + mult + ". Type that number") ;
			else
				messageArea.setText(whatismultiplication_message) ;		
			
			currmultiplication.setText("");		
		}
	}

	function getFirstDividend():NumberGroup
	{
		var num:Number=0 ;
		startCurrDiv = 0 ;
		
		for ( var i:Number=0; num<divisor.getNumber(); i++ ) {
			num = dividend.getSubsetOfNum(0,i) ;
			endCurrDiv = i ;
		}
		return new NumberGroup(_mc, num, divisor.getNumberSize(), dividend.x, dividend.y) ;    
	}
	
}
