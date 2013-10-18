import mx.transitions.Tween;
import mx.transitions.easing.*;
import mx.utils.Delegate;
var TESTHUT_MINIMUM:Number = 15;
//var SAT_HUT_MINIMUM:Number = 3;
var soundClipsRequired = true;

function pointerClick(eventObj)
{
	//trace('> PLZ PLZ PLZ');
}
var myToolBar:ToolBar; // declare globally so it can be used elsewhere

function initInfoKiosk()
{
	current_state = "infoKiosk";
	loadHutMovieClip([{name:"infoKiosk", file:"wayang_infoKiosk", type:"hut"}], initInfoKioskLoaded, responseObj, 1, 1, 1);
}
function initinfoKioskLoaded()
{
	hut_container.hut.infoKiosk.init();	
}
function initOrangutanHut()
{
	current_state = "orangutanHut";
	loadHutMovieClip([{name:"oragutanHut", file:"wayang_orangutanHut", type:"hut"}], initOrangutanHutLoaded, responseObj, 1, 1, 1);	
}
function initOrangutanHutLoaded()
{
	hut_container.hut.oragutanHut.init();	
}

function initFormulas(){
	if(hut_container.internal.formulas == undefined || hut_container.internal.formulas == null){ // if the formulas arent there, put them there, otherwise remove them
		hut_container.internal.createEmptyMovieClip("formulas", 30);
		var mc:MovieClip = hut_container.internal.formulas.attachMovie("FormulaSheet", "formulaSheet", hut_container.internal.getNextHighestDepth());
		hut_container.internal.formulas._x = 100;
		hut_container.internal.formulas._y = 70;
	}else{
		closeFormulas();
	}
}

function closeFormulas(){
	hut_container.internal.formulas.removeMovieClip();
}

/*Mike Ro experimental sidebar functions*/
function replayHelper() {
	var prob = hut_container.internal.problem;
	
	trace(">>soundClipsRequired: " + _level0.soundClipsRequired) ;
	
	if (_level0.soundClipsRequired)
		prob.gotoAndStop(hintSaver);
	else 
		prob.gotoAndPlay(hintSaver);
	clearInterval(delay);
}

function initHint() {
	trace("Hint Button pressed");
	serverComm({action:"getActivity", elapsedTime:getTimer(), userInput:"help"},satHutGetHelpResponse);
}

var contButton:Button;

function initTeachMe() {
	if ((currentHint.hint).substr(0, 6) != "choose") {
		contButton = attachMovie("continueB", "continueB", this.getNextHighestDepth());
		contButton._x = 600;
		contButton._y = 15;
		if ((currentHint.hint).substr(0, 6) == "choose") {
			trace("End of the hints.. No more continue button");
		}
	}
}


function initContinueB() {
	trace("Continue Button pressed");
	serverComm({action:"getActivity", elapsedTime:getTimer(), userInput:"help"},satHutGetHelpResponse);
	contButton._visible = false;
	contWait = setInterval(contBHelper, 10000);
}

function contBHelper() {
	if ((currentHint.hint).substr(0, 6) == "choose") {
		contButton._visible = false;
	}
	if ((currentHint.hint).substr(0, 6) != "choose") {
		 contButton._visible = true;
	}
	clearInterval(contWait);
}

///////////////////////////////////////////////////////////////
//  ADVENTURE FUNCTIONS
///////////////////////////////////////////////////////////////


var current_adventure_index = 0;
var current_adventure_help_index = 0;
var adventure1_def = [];
var adventure2_def = [];
var adventure3_def = [];
var return_location = {};
var adventure_data = "";
var current_debug_hint;
//
adventure1_def[0] = {name:"adventure1_0", file:"adventure1_part1", type:"hut"};
adventure1_def[1] = {name:"adventure1_1", file:"adventure1_problemA", type:"hut"};
adventure1_def[2] = {name:"adventure1_2", file:"adventure1_part2", type:"hut"};
adventure1_def[3] = {name:"adventure1_3", file:"adventure1_problemB", type:"hut"};
adventure1_def[4] = {name:"adventure1_4", file:"adventure1_part3", type:"hut"};
adventure1_def[5] = {name:"adventure1_5", file:"adventure1_problemC", type:"hut"};
adventure1_def[6] = {name:"adventure1_6", file:"adventure1_part4", type:"hut"};
adventure1_def[7] = {name:"adventure1_7", file:"adventure1_problemD", type:"hut"};
adventure1_def[8] = {name:"adventure1_8", file:"adventure1_part5", type:"hut"};
//
adventure2_def[0] = {name:"adventure2_0", file:"adventure2_part1", type:"hut"};
adventure2_def[1] = {name:"adventure2_1", file:"adventure2_problem1", type:"hut"};
adventure2_def[2] = {name:"adventure2_2", file:"adventure2_part2", type:"hut"};
adventure2_def[3] = {name:"adventure2_3", file:"adventure2_problem2", type:"hut"};
adventure2_def[4] = {name:"adventure2_4", file:"adventure2_part3", type:"hut"};
adventure2_def[5] = {name:"adventure2_5", file:"adventure2_problem3", type:"hut"};
adventure2_def[6] = {name:"adventure2_6", file:"adventure2_part4", type:"hut"};

adventure3_def[0] = {name:"adventure3_0", file:"adventure3_part1", type:"hut"};
adventure3_def[1] = {name:"adventure3_1", file:"adventure3_problem1", type:"hut"};
adventure3_def[2] = {name:"adventure3_2", file:"adventure3_part2", type:"hut"};
adventure3_def[3] = {name:"adventure3_3", file:"adventure3_problem2", type:"hut"};
adventure3_def[4] = {name:"adventure3_4", file:"adventure3_part3", type:"hut"};
adventure3_def[5] = {name:"adventure3_5", file:"adventure3_problem3", type:"hut"};
adventure3_def[6] = {name:"adventure3_6", file:"adventure3_part4", type:"hut"};

function initAdventure1(responseObj)
{
	current_state = "adventure1";
	adventure_data = "<adventure name=\"rescue\" timestamp=\"" + getTimer() + "\">"
	loadHutMovieClip(adventure1_def, initAdventureLoaded, responseObj, 1, 1, 1);
}
function initAdventure1FromSatHut(responseObj)
{
	current_state = "adventure1";
	loadHutMovieClip(adventure1_def, initAdventureLoadedFromSatHut, responseObj, 1, 1, 1);
}
function initAdventure3(responseObj)
{
	current_state = "adventure3";
	adventure_data = "<adventure name=\"logging\" timestamp=\"" + getTimer() + "\">"
	loadHutMovieClip(adventure3_def, initAdventureLoaded, responseObj, 1, 1, 1);
}
function initAdventure3FromSatHut(responseObj)
{
	current_state = "adventure3";
	loadHutMovieClip(adventure3_def, initAdventureLoadedFromSatHut, responseObj, 1, 1, 1);
}
function initAdventure2(responseObj)
{
	current_state = "adventure2";
	adventure_data = "<adventure name=\"nursery\" timestamp=\"" + getTimer() + "\">"
	loadHutMovieClip(adventure2_def, initAdventureLoaded, responseObj, 1, 1, 1);
}
function initAdventure2FromSatHut(responseObj)
{
	current_state = "adventure2";
	loadHutMovieClip(adventure2_def, initAdventureLoadedFromSatHut, responseObj, 1, 1, 1);
}
function addAdventureData(problem_id, ans, tf)
{
	// save adventure answer protocol
	//TutorBrain?action=adventureProblemSolved&elapsedTime=3000&adventureName=logging&problemNumber=1&userInput=3

	//adventure_data += "<event type=\"answer\" problem_id=\""+ problem_id +"\" answer=\""+ ans +"\" is_correct=\""+ tf +"\" timestamp=\"" + getTimer() + "\"/>"
	//trace("ADVENTURE DATA: " + adventure_data)
	serverComm({action: "adventureProblemSolved", adventureName: problem_id, problemNumber: problem_id, userInput: ans}, addAdventureDataResponse);

}
function addAdventureDataResponse(responseObj)
{
	trace("adventure info saved");
}
function returnToAdventure()
{
	adventure_data += "<event type=\"return from sat hut\" timestamp=\"" + getTimer() + "\"/>"
	main["initAdventure" + return_location.adventure + "FromSatHut"].call();
}
function getAdventureHelp(adventure_name, problem_id)
{
	adventure_data += "<event type=\"request for help\" timestamp=\"" + getTimer() + "\"/>"
	//TutorBrain?action=getActivity&elapsedTime=3000&adventureName=logging&problemNumber=3&userInput=[problem-answer]
	return_location.adventure = current_state.substr(9, 1);
	return_location.index = current_adventure_index;
	return_location.frame = hut_container.hut[current_state + "_" + current_adventure_index]._currentframe;
	serverComm({action: "getActivity", adventureName: adventure_name, problemNumber: problem_id, userInput: "empty"}, getAdventureHelpResponse);
}
function getAdventureHelpResponse(responseObj)
{
	var res = String(responseObj.resource);
	if (responseObj.id > 0)
	{
		var prob = res.substring(0, 11);
		responseObj.resource = prob;
		responseObj.fromAdventure = true;
		initSatHut(responseObj);
		hut_container.nav.navlog.gotoAndStop("blank");
		//loadHutMovieClip([{name:"problem", file:"Problems/" + current_sat_problem + "/" + current_sat_problem, type:"internal"}], satHutGetNewProblemResponseLoaded, responseObj, 0, 0, 1);
	}
	else if(responseObj.id <= 0)
	{
		var obj = {};
		obj.message = responseObj.resource;
		obj.extra = "in adventureHelp";
		alertMessage(obj);
	}
	else
	{
		parseActionType(responseObj);
	}
}
function initAdventureLoadedFromSatHut(responseObj)
{
	
	var len = eval(current_state + "_def").length;
	for (var i = 0; i < len; i++)
	{
		hut_container.hut[current_state + "_" + i]._visible = false;
		hut_container.hut[current_state + "_" + i].gotoAndStop(1);
	}
	hut_container.hut[current_state + "_" + return_location.index].gotoAndStop(return_location.frame);
	hut_container.hut[current_state + "_" + return_location.index].active = true;
	hut_container.hut[current_state + "_" + return_location.index]._visible = true;
	
	current_adventure_index = return_location.index;
}
function initAdventureLoaded(responseObj)
{
	var len = eval(current_state + "_def").length;
	for (var i = 0; i < len; i++)
	{
		hut_container.hut[current_state + "_" + i]._visible = false;
		hut_container.hut[current_state + "_" + i].gotoAndStop(1);
	}
	
	hut_container.hut[current_state + "_0"].init();
	hut_container.hut[current_state + "_0"].active = true;
	hut_container.hut[current_state + "_0"]._visible = true;
	trace("VISIBLE: " + hut_container.hut[current_state + "_0"]._visible)
	current_adventure_index = 0;
}
function switchAdventureClips()
{
	trace("SWITCHING ADVENTURE CLIPS");
	var def = eval(current_state + "_def")
	var len = def.length;
	for (var i = 0; i < len; i++)
	{
		var mc = hut_container.hut[current_state + "_" + i];
		if (mc.active)
		{
			if (i == len - 1)
			{
				trace("ADVENTURE IS OVER");
				releaseButtonVillageAdventure2();
			}
			break;
		}
		else
		{
			//trace(i +"   " + len);
			
		}
	}
	current_adventure_index = i + 1;
	trace(hut_container.hut[current_state + "_" + current_adventure_index])
	hut_container.hut[current_state + "_" + current_adventure_index]._visible = true;
	hut_container.hut[current_state + "_" + current_adventure_index].active = true;
	hut_container.hut[current_state + "_" + current_adventure_index].init();

	hut_container.hut[current_state + "_" + i].removeMovieClip();
	
	adventure_data += "<event type=\"loading new clip\" data=\""+ def[current_adventure_index].file +"\" timestamp=\"" + getTimer() + "\"/>";
}
///////////////////////////////////////////////////////////////
//  SAT HUT FUNCTIONS
///////////////////////////////////////////////////////////////
var student_input;
function initSatHut(responseObj)
{
	if (!responseObj.fromAdventure)
	{
		current_state = "satHut";
	}
	else
	{
		current_state = "satHutAdventure";
	}
	loadHutMovieClip([{name:"satHut", file:"wayang_satHut", type:"hut"}], initSatHutLoaded, responseObj, 1, 1, 1);
}
function initSatHutLoaded(responseObj)
{
	if (!responseObj.fromAdventure)
	{
		satHutGetFirstProblem();
		
		initDrawingLayer();
		initText();
		initCharacter();
		initToolBar(); // needs to be last so it is on top
	}
	else
	{
		satHutGetNewProblemResponse(responseObj);
	}
}
function satHutGetFirstProblem(){
	probStartTime = getTimer();
	serverComm({action:"getActivity", elapsedTime:getTimer(), userInput:"nextproblem"}, satHutGetNewProblemResponse, responseObj, 0, 1, 1);
}


var alreadyLoading:Boolean = false;

function satHutGetNewProblem()
{
	//trace ("DEBUG:\t\tIn initScripts.satHutGetNewProblem");
	if (!alreadyLoading){
		hintSaver.currentHint = "No Hint";  // refreshes this var so the replay hint button is reset for each problem
		hintSaver.currFrame = 0; 
		tempCharDisable = false; // end the temp disable of the characterControl function
		var drawBtnText:TextField = hut_container.character.draw_button_text; // set the expand button text back to go away
		drawBtnText.text = "Go Away!";
		var myFmt:TextFormat = new TextFormat();
		myFmt.color = 0xFFFFFF;
		myFmt.font = "_sans";
		myFmt.align = "center";
		drawBtnText.selectable = false;
		drawBtnText.setTextFormat(myFmt);
	//old way, not acknowledging end problem first
		//serverSend( {action:"endActivity", elapsedTime:getTimer()} );
		//probStartTime = getTimer();
		//serverComm({action:"getActivity", elapsedTime:getTimer(), userInput:"nextproblem"}, satHutGetNewProblemResponse, responseObj, 0, 1, 1);
		alreadyLoading = true;
		
	//new way
		serverComm( {action:"endActivity", elapsedTime:getTimer()}, satHutEndProblemResponse );
		//hut_container.character.characterAdjust("jake idle");  //reset character to idle
	}
	else {
		trace ("Already loading new sat hut problem");
	}
}

//used so that server can update student model before it gets the new problem request
function satHutEndProblemResponse(responseOb){
	//trace ("DEBUG:\t\tIn initScripts.satHutEndProblemRepsonse");
	if (responseOb.ack == true || responseOb.ack == "true"){
		probStartTime = getTimer();
		//work-around to make 'new question' button collect information from InterventionRatings
		//How it should be done: probably move to a new location on the nav bar that doesn't 
		//have a 'new question' button whenever we get an InterventionRating, then move back when we call interventionComm
		var input:String = "nextproblem";
		var interventionRatingReport = _level0.hut_container.internal.interventionClip.report();
		if (interventionRatingReport != null){
			input = interventionRatingReport;
		}
		trace ("DEBUG:\t\tIn initScripts.satHutEndProblemResponse: input-" + input);
		serverComm({action:"getActivity", elapsedTime:getTimer(), userInput:input}, satHutGetNewProblemResponse, responseObj, 0, 1, 1);
	}
}

//var finishAllowed:Boolean = false;
function satHutGetNewProblemResponse(responseObj){
	strategic_hint_played = false ;
	var res = String(responseObj.resource);
	function parseEmotion(incomingEmotion:String):String{
		trace('>>>parsing emotion: ' + incomingEmotion);
		switch(incomingEmotion){
			case 'high-interest':
				return 'interest high';
				break;                   // this is a temporary fix
			case 'low-interest':         // idealy the names of the emotions sent from server to client
				return 'interest low';   // will match the names of the emotions the client has
				break;
			case 'high-excitement':
				return 'excited high';
				break;
			case 'low-excitement':
				return 'excited low';
				break;
			case 'high-frustration':
				return 'frustration high';
				break;
			case 'low-frustration':
				return 'frustration low';
				break;
			case 'high-confidence':
				return 'confidence high';
				break;
			case 'low-confidence':
				return 'confidence low';
				break;
			case 'perimeter intro':
				return 'pointing';
				break;
			case 'idle':
				return 'idle';
				break;
			case 'exit':
				return 'exit';
				break;
		}// end switch
		return 'idle';
	}
	if(responseObj.emotion != null && responseObj.emotion != "null" && responseObj.emotion != "undefined")  // set the initial emotion if there is one
		characterControl(parseEmotion(responseObj.emotion));
	probId = responseObj.id;
	lastHintId = -1;
	probSolved = false;
	
	//trace ("DEBUG:\t\tIn initScripts.satHutGetNewProblemResponse: Res -" + res);
	if (res.substring(0, 7) == "problem")
	{
		 // ---- this is for debugging only!--- //
		 // ---- this will allow you to force any problem you want ex. 901 ---- //
		/*  
		trace('Debugg: Loading perimter intro problem_901');
		current_sat_problem = "problem_901";
		loadHutMovieClip([{name:"problem", file:"Problems/" + "problem_901" + "/" + "problem_901", type:"internal"}], 
				          satHutGetNewProblemResponseLoaded, responseObj, 0, 0, 1);
		
		*/
		current_sat_problem = res;
		loadHutMovieClip([{name:"problem", file:"Problems/" + res + "/" + res, type:"internal"}], 
				          satHutGetNewProblemResponseLoaded, responseObj, 0, 0, 1);
		
		
	}
	
	else if (res == "bar_graph"){
		attachHutMovieClip("BarGraphClip", "interventionClip", interventionLoaded, responseObj);
	}
	else if (res == "text_intervention"){
		attachHutMovieClip("InterventionClip", "interventionClip", interventionLoaded, responseObj);
	}
	else if (res == "rating_intervention"){
		//trace ("DEBUG:\t\tIn initScripts.satHutGetNewProblemResponse: calling interventionRatingClip");
		attachHutMovieClip("InterventionRatingClip", "interventionClip", interventionLoaded, responseObj);
	}
	else
	{
		parseActionType(responseObj);
	}
	//trace ("DEBUG:\t\tIn initScripts.satHutGetNewProblemResponse: DONE calling interventionRatingClip");
}

function interventionLoaded(responseObj, movie:MovieClip){
	trace ("DEBUG:\t\tIn initScripts.interventionLoaded: movie -"+ movie);
	var intervention:MovieClip = movie;
	intervention._x = 100;
	intervention._y = 100;
	intervention.parseAndInit(responseObj.xml);
	//intervention.parseAndInit("<graph type=\"vertical\" title=\"Percent of questions that you got right\" min=\"0\" max=\"100\"><statement><![CDATA[Some message]]></statement><values><value>0</value><value>67</value></values><labels><label><![CDATA[When you started]]></label><label><![CDATA[Last 5 problems]]></label></labels></graph>");
	alreadyLoading = false;
}

var studResponse:String;

function interventionComm( responseString:String){
	if (!alreadyLoading){
		alreadyLoading = true;
		studResponse = responseString;
		serverComm( {action:"endActivity", elapsedTime:getTimer()}, interventionEndProblemResponse );
	}
	else {
		trace ("LOG:\t\tIn interventionComm:  requested antother problem when already loading new sat hut problem");
	}
}

function interventionEndProblemResponse(responseOb){
	if (responseOb.ack == true || responseOb.ack == "true"){
		probStartTime = getTimer();
		serverComm({action:"getActivity", elapsedTime:getTimer(), userInput:studResponse}, satHutGetNewProblemResponse, responseObj, 0, 1, 1);
		studResponse = "";
	}
}
	
function satHutGetNewProblemResponseLoaded(responseObj)
{
	var prob = hut_container.internal.problem;
	prob._x = 75;
	prob._y = 50;
	var snd_arr = [];
	current_debug_hint = 0;
	if (prob.snd != undefined) {
		_level0.soundClipsRequired = false; //true?
		for (var i = 1; i < prob.snd.length; i++)
		{
			if (prob.snd[i] != "" && prob.snd[i] != null)
			{
				snd_arr.push({name:prob.snd[i], file:"Problems/" + current_sat_problem + "/" + prob.snd[i], type:"snd"});
			}
		}
		loadHutMovieClip(snd_arr, satHutSoundsLoaded, responseObj, 0, 1, 0);
	}
	else {
		_level0.soundClipsRequired = false;
		satHutSoundsLoaded(responseObj);
	}

}
function satHutSoundsLoaded(responseObj)
{
	//need my leftNav boolen HERE!
	var prob = hut_container.internal.problem;
	prob.gotoAndStop("question");
	//trace ("DEBUG:\t\t In satHutNewProbResponse: responseObj.finish - " + responseObj.finish);
	if (responseObj.finish == true || responseObj.finish == "true"){
		trace('NAVLOG navigating to: satHutFinish');
		hut_container.nav.navlog.gotoAndStop("satHutFinish");
		//trace ("DEBUG:\t\t In satHutNewProbResponse: In if - " + hut_container.nav.navlog);
	}
	alreadyLoading = false;
}
function satHutGetHelp()
{
	//?action=getActivity&elapsedTime=10000&userInput=help
	serverComm({action:"getActivity", elapsedTime:getTimer(), userInput:"help"}, satHutGetHelpResponse);
	
	//DEBUG:
	//var prob = hut_container.internal.problem;
	//var hint = prob.labels[current_debug_hint++]
	//prob.gotoAndStop(hint);
	//trace(prob._currentframe)
	// END DEBUG
}
var hintSaver:Object = new Object();
hintSaver.currentHint = "No Hint";
hintSaver.currFrame = 0;
function satHutGetHelpResponse(responseObj)
{
	trace('Hint Button');
	trace('Setting:');
	//for(var i in responseObj)
		//trace('   ' + i + ': ' + responseObj[i]);
		
	var prob = hut_container.internal.problem;
	hintSaver.currentHint = responseObj.hint;
	hintSaver.currFrame = prob._currentframe;
	lastHintId = responseObj.id;
	
	trace('   hintSaver.currentHint = ' + hintSaver.currentHint);
	trace('   hintSaver.currFrame = ' + hintSaver.currFrame);
	if (_level0.soundClipsRequired)
		prob.gotoAndStop(responseObj.hint);
	else{
		trace('   Currently at frame #' + prob._currentframe + ' and gotoAndPlay(' + responseObj.hint + ')');
		prob.gotoAndPlay(responseObj.hint);
	}
}
var currFrame:Number = 1;
function initReplay() {
	//should call server
	trace('Replay Button - playing hint... ' + hintSaver.currentHint + ' from frame #' + hintSaver.currFrame);
	//lastHintId = currentHint.id;
	var prob:MovieClip = hut_container.internal.problem;
	var currHint:String = currentHint.hint;
	if (_level0.soundClipsRequired){
		if(hintSaver.currentHint != "No Hint"){
			trace('gotoAndStop ' + hintSaver.currentHint);
			prob.gotoAndStop(hintSaver.currFrame+2);
			prob.gotoAndStop(hintSaver.currentHint);
		}else{
			trace('there is no hint to replay');
		}
	}else{
		if(hintSaver.currentHint != "No Hint"){
			trace('gotoAndPlay ' + hintSaver.currentHint);
			prob.gotoAndStop(hintSaver.currFrame+2);
			prob.gotoAndPlay(hintSaver.currentHint);
		}else{
			trace('there is no hint to re-play');
		}
	}
}
function playSound(n)
{
	if (n > 0)
	{
		stopAllSounds();
		var s = hut_container.internal.problem.snd;
		hut_container.snd[s[n]].play();
	}
}
function satHutAnswerSubmit(name, tf)
{
	//control character which will be implemented in satHutAnswerSubmitResponse() in the future
	if(tf){
		//hut_container.character.characterAdjust("jake correct no effort");
	}
	else{
		//hut_container.character.characterAdjust("jake incorrect no effort");
	}
	
	// store input locally so we can show 'why' button next to appropriate input
	student_input = {letter: name, correct: tf};
	probSolved = tf;
	serverComm({action:"getActivity", elapsedTime:getTimer(), userInput:name, isCorrect:tf}, satHutAnswerSubmitResponse);
}

/*	make a pop-up intvervention if the response says to
ack=true&interventionId=-350&resource=yesno_popup_dialog&xml=<TextIntervention 
title="Want a hint?"><![CDATA[Would you like to see a hint?]]></TextIntervention>
*/
function satHutAnswerSubmitResponse(responseObj)
{
	trace ("in satHutAnswerSubmitResponse, resource = " + responseObj.resource);
	//hut_container.character.characterAdjust(responseObj.characterResponse);
	
	if (responseObj.resource == "yesno_popup_dialog"){
		trace ("in satHutAnswerSubmitResponse, in if ");
		var interventionId:Number = responseObj.interventionId;
		
		//&action=getActivity&userInput=helpAccepted&
		var yesAction:Function = function ( ){
			serverComm({action:"getActivity", elapsedTime:getTimer(), userInput:"helpAccepted"}, satHutGetHelpResponse);
			//serverComm({action:"getActivity", elapsedTime:getTimer(), userInput:"help"}, satHutGetHelpResponse);
			yesNoClip.removeMovieClip();
			
		}
		//&action=getActivity&userInput=helpRejected&
		var noAction:Function = function ( ){
			serverComm({action:"getActivity", elapsedTime:getTimer(), userInput:"helpRejected"});
			yesNoClip.removeMovieClip();
		}
		
		attachMovie("YesNoClip", "yesNoClip", 100000);
		yesNoClip.parseAndInit(responseObj.xml, yesAction, noAction);
	}
	if(responseObj.characterResponse != null && responseObj.characterResponse != 'null' && responseObj.characterResponse != 'undefined'){
		characterControl(responseObj.characterResponse);
	}
}


function getResponse(name, tf)
{
	satHutAnswerSubmit(name, tf);
}



//////////////////////////  Test hut functions /////////////////////
	
function initTestHut(responseObj){	
	current_state = "testHut";
	loadHutMovieClip([{name:"testHut", file:"wayang_testHut", type:"hut"}], initTestHutLoaded, responseObj, 1, 1, 1);	
}

function initTestHutLoaded(responseObj){
		//testHutGetFirstProblem();
		trace ("In initTestHutLoaded");
		hut_container.hut.testHut.begin(responseObj);
}

function testHutGetFirstProblem(){
	probStartTime = getTimer();
	serverComm({action:"getActivity", elapsedTime:getTimer(), userInput:"nextproblem"}, testHutGetNewProblemResponse, responseObj, 0, 1, 1);
}

var testNotLoading = true;
function testHutGetNewProblem(studResponseIn, tfIn, probSolvedIn)
{
	//?action=getActivity&userInput=nextproblem&elapsedTime=3000
	
	if (testNotLoading){
		serverComm( {action:"endActivity", elapsedTime:getTimer(), userInput:studResponseIn, isSolved:probSolvedIn, isCorrect:tfIn}, testHutEndProblemResponse, responseObj );
		probStartTime = getTimer();
		testNotLoading = false;
	}
	else {
		trace ("Test already loading question");
	}
}

function testHutEndProblemResponse(responseObj){
	serverComm({action:"getActivity", elapsedTime:getTimer(), userInput:"nextproblem"}, testHutGetNewProblemResponse, responseObj, 0, 1, 1);
}


function testHutGetNewProblemResponse(responseObj)
{	
	probString = responseObj.probXML;
	//hut_container.character.characterAdjust("jake chair idle");
	if(probString != "END"){
		//expected XML for end  --  &numProbsInTest=43&numProbsCorrect=1&probXML=END_OF_TEST
		if (probString == "END_OF_TEST"){
			var numProbsCorrect:Number = responseObj.numProbsCorrect;
			var numProbsInTest:Number = responseObj.numProbsInTest;
			hut_container.hut.testHut.endTest(numProbsCorrect, numProbsInTest);
		}
		else {
			//should be this, should be included on line not in XML .....  probId = responseObj.id;
			px = new XML(probString);
			probId = px.firstChild.attributes.id;
			lastHintId = -1;
			probSolved = false;
			var numProbsSeen:Number = Number(StringOps.stripNonDigits(responseObj.numProbsSeen));
			
			var numProbsInTest:Number = Number(StringOps.stripNonDigits(responseObj.numProbsInTest));
			//trace("DEBUG:\t\t numProbsSeen -" + numProbsSeen + " : numProbsInTest-" + numProbsInTest); 
			if (numProbsSeen > TESTHUT_MINIMUM){
				hut_container.nav.navlog.gotoAndStop("testHutFinish");
			}
			hut_container.hut.testHut.init(probString, numProbsSeen, numProbsInTest);
			
		}
	}
	else
	{
		parseActionType(responseObj);
	}
	testNotLoading = true;
	
}

function testHutFinish(){
	trace("DEBUG:\t\t In testHutFinish");
	var okAction:Function = function ( ){
		var ok:Boolean = verifyClip.checkPassword();
		if (ok){
			verifyClip.removeMovieClip();
			//serverComm( {action:"endActivity", elapsedTime:getTimer(), userInput:"", isSolved:false, isCorrect:false, quit:true}, testHutFinishResponse);
			serverComm( {action:"getActivity", elapsedTime:getTimer(), userInput:"quitTestHut"}, testHutFinishResponse);

		}
		else {
			verifyClip.clearEntry();
		}
	}
	var cancelAction:Function = function(){
		verifyClip.removeMovieClip();
	}
	attachMovie("VerifyClip", "verifyClip", 100000);
	verifyClip.init("Leaving Test Hut", "Please enter password to leave test hut and end testing session.", "leave", okAction, cancelAction);
}

function testHutFinishResponse(responseObj){
	//serverComm({action: "navigation", from: "test_hut", to:"village"}, initVillage);
	var numProbsCorrect:Number = responseObj.numProbsCorrect;
	var numProbsInTest:Number = responseObj.numProbsInTest;
	hut_container.hut.testHut.endTest(numProbsCorrect, numProbsInTest);
	serverComm( {action:"endActivity", elapsedTime:getTimer(), userInput:"", isSolved:false, isCorrect:false, quit:true}, null);

}
//////////////////////  end test hut funtions  //////////////////


function initMentalRotationHut(responseObj)
{
	current_state = "mentalRotationHut";
	loadHutMovieClip([{name:"mentalRotationHut", file:"wayang_mentalRotationHut", type:"hut"}], initMentalRotationHutLoaded, responseObj, 1, 1, 1);
}
function initMentalRotationHutLoaded(responseObj)
{
	hut_container.hut.mentalRotationHut.init(responseObj);
}
//
function initMathFactHut(responseObj)
{
	current_state = "mathFactHut";
	loadHutMovieClip([{name:"mathFactHut", file:"wayang_mathFactHut", type:"hut"}], initMathFactHutLoaded, responseObj, 1, 1, 1);
}
function initMathFactHutLoaded(responseObj)
{
	hut_container.hut.mathFactHut.init(responseObj);
}
function releaseButtonStartMathFactHut()
{
	hut_container.hut.mathFactHut.initTest();
}
//
//
function initSignUpSurvey(responseObj)
{
	current_state = "signUpSurvey";
	hut_container.hut.gotoAndStop("survey");
	var cxml = new XML();
	cxml.ignoreWhite = true;
	cxml.parseXML(responseObj.survey);
	survey_arr = [];
	for (var i = 0; i < cxml.firstChild.childNodes.length; i++)
	{
		var item = cxml.firstChild.childNodes[i].attributes;
		var obj = {};
		for (var j in item)
		{
			obj[j] = item[j];
		}
		obj.data = [];
		for (var k = 0; K < cxml.firstChild.childNodes[i].childNodes.length; k++)
		{
			obj.data.push(String(cxml.firstChild.childNodes[i].childNodes[k].firstChild));
		}
		survey_arr.push(obj);
	}
	survey_arr.sort(orderSurveyByNum);
	constructSurveyTable();
}
function orderSurveyByNum(a, b)
{
	if (a.num < b.num)
	{
		return -1;
	}
	else if (a.num > b.num)
	{
		return 1;
	}
	else
	{
		return 0;
	}
}
function initSignUpDirectory(responseObj)
{
	current_state = "signUpDirectory";
	gotoAndStop("main");
	loadHutMovieClip(["signUp"], initSignUpDirectoryLoaded, responseObj);
}
function initSignUpDirectoryLoaded(responseObj)
{
	var cxml = new XML();
	cxml.ignoreWhite = true;
	cxml.parseXML(responseObj.class_list);
	class_list_arr = [];
	for (var i = 0; i < cxml.firstChild.childNodes.length; i++)
	{
		var classObj = cxml.firstChild.childNodes[i].attributes;
		var obj = {name:classObj.name, teacher:classObj.teacher, school:classObj.school, id:classObj.id};
		class_list_arr.push(obj);
	}
	constructClassListTable();
}
function initIntro(responseObj)
{
	gotoAndStop("main");
	current_state = "intro";
	var tempLearningCompanion:String = (responseObj.learningCompanion).toString();
	if(tempLearningCompanion != "undefined" && tempLearningCompanion != null){
		trace('assigning learning companion to: ' + tempLearningCompanion);
		learningCompanion = tempLearningCompanion;  // assign which character to use
	}
	//parseVillageList(responseObj);
	//loadHutMovieClip([{name:"background", file:"wayang_introback", type:"hut"}, {name:"village", file:"Village", type:"hut"}, {name:"intro", file:"wayang_intro", type:"hut"}, {name:"navlog", file:"wayang_navlog", type:"nav"}], initIntroLoaded, responseObj, 1, 1, 1);
	loadHutMovieClip([{name:"background", file:"wayang_introback", type:"hut"}, {name:"intro", file:"wayang_intro", type:"hut"}, {name:"navlog", file:"wayang_navlog", type:"nav"}], initIntroLoaded, responseObj, 1, 1, 1);
}
function initIntroLoaded(responseObj)
{
	//hut_container.hut.village._visible = 0;
	hut_container.hut.background.init();
	hut_container.hut.intro.init();
	intro.play();
}
function initVillage(responseObj)
{
	current_state = "village";
	loadHutMovieClip([{name:"background", file:"wayang_introback", type:"hut"}, {name:"village", file:"Village", type:"hut"}], initVillageLoaded, responseObj, 1, 1, 1);
}
function initVillageLoaded(responseObj)
{
	//hut_container.hut.background.gotoAndStop(2);
	trace ("DEBUG:\t\t in main.InitVillageLoaded: hut - " + hut_container.hut);
	hut_container.hut.village.begin(responseObj);
	hut_container.hut.village._visible = 1;
	//popVillage(0);
	
}

var loader:MovieClipLoader = new MovieClipLoader();
var loadHandler:Object = new Object();
loader.addListener(loadHandler);
function initCharacter():Void{
	trace('INIT CHARACTER');
	var char:MovieClip = hut_container.createEmptyMovieClip("character", 50);
	char._x = 800 - 275;
	char._y = 600 - 450;
	hut_container.character.createEmptyMovieClip("new_char", 20);
	hut_container.character.createEmptyMovieClip("old_char", 10);

	//characterControl("idle");
	/*
	character.loadBtn.onRelease = function(){
		trace(emotion_selector.data[emotion_selector.selectedIndex]);
		hut_container.character.characterAdjust(emotion_selector.data[emotion_selector.selectedIndex]);
	}
	*/
}

function clickedOnCharacter():Void {
	var prob = hut_container.internal.problem;
	
	if ( prob.strategic_hint_exists ) {
		trace(">>Strategic hint exists for problem " + prob) ;
		if ( strategic_hint_played ) {
			/*--- Bills note: using loader.laodClip causes flickering of the character, should use characterControl() function to avoid this ---*/
			/*              : I modified to accept an optional 2nd parameter if .swf filename doesnt match the directory name                   */
			characterControl("strategicHints", "strategicAlreadyPlayed");
			//loader.loadClip("Learning Companion/" + learningCompanion + "/strategicHints/strategicAlreadyPlayed.swf", hut_container.character.new_char);
			//charHolder = hut_container.character.new_char;
		}
		else {
			prob.gotoAndPlay(learningCompanion + "_strategic_hint") ;
			trace(">>>Playing strategic hint " + learningCompanion + "_strategic_hint") ;
			strategic_hint_played = true ;
		}
	}
	else {
		characterControl("strategicHints", "noStrategicHint");
		//loader.loadClip("Learning Companion/" + learningCompanion + "/strategicHints/noStrategicHint.swf", hut_container.character.new_char);
		//charHolder = hut_container.character.new_char;
		trace(">>Strategic hint does not exist for problem " + prob) ;
	}
}

function stopMouth():Void {
	if ( learningCompanion == "Jane" ) 
		charHolder.Jane_point.mouth.gotoAndStop("closed") ;
	
	else if ( learningCompanion == "Jake" )
		charHolder.Jake_point.mouth.gotoAndStop("closed") ;
}

function startMouth():Void {
	if ( learningCompanion == "Jane" ) 
		charHolder.Jane_point.mouth.gotoAndPlay(1) ;
	else if ( learningCompanion == "Jake" )	
		charHolder.Jake_point.mouth.gotoAndPlay(1) ;
}

function moveCursor(x:Number, y:Number):Void {
	trace("moving cursor");
	new Tween(charHolder.cursor, "_x", Strong.easeOut, charHolder.cursor._x, x, 1, true);
	new Tween(charHolder.cursor, "_y", Strong.easeOut, charHolder.cursor._y, y, 1, true);
}


function removeCharacter():Void{
	if(hut_container.character != undefined)
		hut_container.character.removeMovieClip();
}

var whichMC:Number = 0;
var charHolder:MovieClip;
var tempCharDisable:Boolean = false;
function characterControl(emotion:String, swfName:String):Void{
	trace('>>>chracterControl: ' + emotion + '.swf' + ' swfName: ' + swfName);
	if(charHolder == undefined)
	{
		var myFmt:TextFormat = new TextFormat();
		myFmt.color = 0xFFFFFF;
		myFmt.font = "_sans";
		myFmt.align = "center";
		
		var myButton:MovieClip = hut_container.character.attachMovie("generic_button_green", "button_instance", hut_container.character.getNextHighestDepth());
		myButton._x = 159; myButton._y = 356; myButton._width = 72;
		
		var drawBtnText:TextField = hut_container.character.createTextField("draw_button_text", hut_container.character.getNextHighestDepth(), myButton._x, myButton._y, myButton._width, 20);
		drawBtnText.text = "Go Away!";
		drawBtnText.selectable = false;
		drawBtnText.setTextFormat(myFmt);
		
		myButton.onRelease = function(){
			if(drawBtnText.text == "Go Away!"){
				drawBtnText.text = "Come Back!";
				characterControl("exit");
				tempCharDisable = true;
			}else{
				drawBtnText.text = "Go Away!";
				tempCharDisable = false;
				characterControl("enter");
			}
			var myFmt:TextFormat = new TextFormat();
			myFmt.color = 0xFFFFFF;
			myFmt.font = "_sans";
			myFmt.align = "center";
			drawBtnText.selectable = false;
			drawBtnText.setTextFormat(myFmt);
		}
	}
	if(tempCharDisable == false) // if the user has requested the character to go away, you cant change the emotion
	{
		if(swfName == null || swfName == undefined)
			swfName = emotion;
			
		if(whichMC == 0){
			try{
				loader.loadClip("Learning Companion/" + learningCompanion + "/" + + emotion + "/" + swfName + ".swf", hut_container.character.new_char);
				charHolder = hut_container.character.new_char;
				whichMC = 1;
			}catch(e:Error){
				trace('>>>characterControl: Cant find file.. loading idle by default!');
				loader.loadClip("Learning Companion/" + learningCompanion + "/" + + "idle" + "/" + "idle" + ".swf", hut_container.character.new_char);
				charHolder = hut_container.character.new_char;
				whichMC = 1;
			}
		}
		else{
			try{
				loader.loadClip("Learning Companion/" + learningCompanion + "/" + + emotion + "/" + swfName + ".swf", hut_container.character.old_char);
				charHolder = hut_container.character.old_char;
				whichMC = 0;
			}catch(e:Error){
				trace('>>>characterControl: Cant find file.. loading idle by default!');
				loader.loadClip("Learning Companion/" + learningCompanion + "/" + + "idle" + "/" + "idle" + ".swf", hut_container.character.old_char);
				charHolder = hut_container.character.old_char;
				whichMC = 0;
			}
		}
	}
	//hut_container.character.loadMovie("jake/" + emotion + ".swf");
}

loadHandler.onLoadInit = function(_mc:MovieClip) {
	if(_mc._name == "old_char"){
		hut_container.character.new_char._visible = false;
		hut_container.character.old_char._visible = true;
		loader.unloadClip(hut_container.character.new_char);
	}
	if(_mc._name == "new_char"){
		hut_container.character.new_char._visible = true;
		hut_container.character.old_char._visible = false;
		loader.unloadClip(hut_container.character.old_char);
	}
}
loadHandler.onLoadError = function(_mc:MovieClip) {
	throw new Error("File path does not exist");
}

charHolder.onRelease = function() {
	trace ("Released character") ;
}

//SENT DATA(comm): http://wayang.cs.umass.edu/woj/TutorBrain?userInput=help&elapsedTime=19891&action=getActivity&isSolved=false&probElapsedTime=11287&problemId=165&sessionId=18301&time=19891
//serverComm({action:"getActivity", elapsedTime:getTimer(), userInput:"help"},satHutGetHelpResponse);
var isDrawing:Boolean = false;
var startDrawFunction:Function; // used by toolbar.as to call the start drawing function
var myGlobalStartDrag:Function;  //..
var myGlobalStopDrag:Function; //..
var undoBtnFunction:Function;
function initDrawingLayer():Void{
	var mcVar:MovieClip = hut_container.createEmptyMovieClip("drawing", 40);
	var scribbleArea:MovieClip = mcVar.createEmptyMovieClip("scribble_area", 1);
	
	var myFmt:TextFormat = new TextFormat();
	myFmt.color = 0xFFFFFF;
	myFmt.font = "_sans";
	myFmt.align = "center";
	
	var undoBtn:MovieClip = mcVar.attachMovie("generic_button_green", "enable_draw", mcVar.getNextHighestDepth());
	var drawBtnText:TextField = hut_container.drawing.createTextField("draw_button_text", mcVar.getNextHighestDepth(), 0, 0, mcVar.enable_draw._width, 20);
	undoBtnText.text = "Undo";
	undoBtnText.selectable = false;
	undoBtnText.setTextFormat(myFmt);

	var toolbarBtn:MovieClip = mcVar.attachMovie("generic_button_green", "toolbar_button", mcVar.getNextHighestDepth());
	toolbarBtn._x = clearBtn._x + clearBtn._width+5;
	var toolbarText:TextField = hut_container.drawing.createTextField("toolbar_button_text", mcVar.getNextHighestDepth(), toolbarBtn._x, 0, mcVar.enable_draw._width, 20);
	toolbarText.text = "Toolbar";
	toolbarText.selectable = false;
	toolbarText.setTextFormat(myFmt);
	
	var drawButtonPressed:Boolean = false;
	function undoBtnPress():Void{
		trace('undo - ' + 'isDrawing:' + isDrawing + ' drawButtonPressed:' + drawButtonPressed);
		//serverComm({action:"undoEvent"}, beginDrawResponse);
		var topMostMC:String;
		if(isDrawing == false && drawButtonPressed == false){
			//need to do it twice if its the first time its been pressed
			topMostMC = "line_holder" + (scribbleArea.getNextHighestDepth() - 1).toString();
			hut_container.drawing.scribble_area[topMostMC].removeMovieClip();
			topMostMC = "line_holder" + (scribbleArea.getNextHighestDepth() - 1).toString();
			hut_container.drawing.scribble_area[topMostMC].removeMovieClip();
			drawButtonPressed = true;
		}else if(isDrawing == false && drawButtonPressed == true){
			// now since its been pressed, and we arent drawing, we can just remove once
			topMostMC = "line_holder" + (scribbleArea.getNextHighestDepth() - 1).toString();
			hut_container.drawing.scribble_area[topMostMC].removeMovieClip();
		}else{
			// need to do it twice since you are drawing so once you press button you make a little mark
			topMostMC = "line_holder" + (scribbleArea.getNextHighestDepth() - 1).toString();
			hut_container.drawing.scribble_area[topMostMC].removeMovieClip();
			topMostMC = "line_holder" + (scribbleArea.getNextHighestDepth() - 1).toString();
			hut_container.drawing.scribble_area[topMostMC].removeMovieClip();
		}
	}
	undoBtnFunction = undoBtnPress;
	function myStartDrag():Void{
		if(isDrawing == true)
		{
			var dragableObject:MovieClip = mcVar.attachMovie("drag pencil", "pencil_instance", 50);
			startDrag(dragableObject, true);
			Mouse.hide();
			startDrag("drag pencil");
		}
	}
	function myStopDrag():Void{
		if(isDrawing == true)
		{
			stopDrag();
			Mouse.show();
			mcVar.pencil_instance.removeMovieClip();
		}
	}
	undoBtn.onRollOver = function(){ myStopDrag(); }
	drawBtn.onRollOut = function(){ myStartDrag(); }
	clearBtn.onRollOver = function(){ myStopDrag(); }
	clearBtn.onRollOut = function(){ myStartDrag(); }
	myGlobalStartDrag = myStartDrag;
	myGlobalStopDrag = myStopDrag;
	
	var totalPencilDownTime:Number = 0; // total time penicl is down
	var pencilDownTime:Number; // use to keep track of each pencil down
	function startDrawing(action:String):Void{
		if(action == "draw tool function" && isDrawing == false){
			//serverComm({action:"beginDrawEvent"}, beginDrawResponse);
			isDrawing = true;
			myStartDrag();
			
			hut_container.drawing.scribble_area.lineStyle(1,0xFF0000,100);
			hut_container.drawing.scribble_area.onMouseDown = function(){
				pencilDownTime = getTimer();
				var tempMC:MovieClip = scribbleArea.createEmptyMovieClip("line_holder"+scribbleArea.getNextHighestDepth(), scribbleArea.getNextHighestDepth());
				tempMC.lineStyle(1,0xFF0000,100);
				var lastY:Number = null;
				var lastX:Number = null;
				onMouseMove = function(){
					if(lastY == null){
						lastY = _ymouse;
						lastX = _xmouse;
					} else {
						tempMC.moveTo(lastX, lastY);
						tempMC.lineTo(_xmouse, _ymouse);
						lastX = _xmouse;
						lastY = _ymouse;
					}
				}
				onMouseUp = function(){
					pencilDownTime = getTimer() - pencilDownTime;
					totalPencilDownTime += pencilDownTime;
					delete onMouseMove;
				}
			}
		}
		else if(action == "pointer tool function"){
			myStopDrag();
			delete hut_container.drawing.scribble_area.onMouseDown;
			if(isDrawing == true){
				totalPencilDownTime = 0; // reset the total time
				isDrawing = false;
				drawButtonPressed = false;
				//serverComm({action:"endDrawEvent", timeDrawing:totalPencilDownTime}, beginDrawResponse);
			}
		}
	}
	startDrawFunction = startDrawing; // this is for the toolbar.as file so this function can be called
	toolbarBtn.onRelease = function(){ myToolBar.openWindow(); }
}

function clearDrawing():Void{
	hut_container.drawing.scribble_area.removeMovieClip();
	var scribbleArea:MovieClip = hut_container.drawing.createEmptyMovieClip("scribble_area", 1);
	if(isDrawing){
		hut_container.drawing.scribble_area.lineStyle(1,0xFF0000,100);
		hut_container.drawing.scribble_area.onMouseDown = function(){
			var tempMC:MovieClip = scribbleArea.createEmptyMovieClip("line_holder"+scribbleArea.getNextHighestDepth(), scribbleArea.getNextHighestDepth());
			tempMC.lineStyle(1,0xFF0000,100);
			var lastY:Number = null;
			var lastX:Number = null;
			onMouseMove = function(){
				if(lastY == null){
					lastY = _ymouse;
					lastX = _xmouse;
				} else {
					tempMC.moveTo(lastX, lastY);
					tempMC.lineTo(_xmouse, _ymouse);
					lastX = _xmouse;
					lastY = _ymouse;
				}
			}
			onMouseUp = function(){
				delete onMouseMove;
			}
		}
	}
	
}
function removeDrawingLayer():Void{
	hut_container.drawing.removeMovieClip();
}

var startText:Function; // for the toolbar
function initText():Void
{
	var mcVar:MovieClip = hut_container.createEmptyMovieClip("text", 50);
	var scribbleArea:MovieClip = mcVar.createEmptyMovieClip("scribble_text", 1);
	function localStartText():Void
	{
		trace('local start text');
		scribbleArea.lineStyle(1,0xFF0000,100);
		scribbleArea.onMouseDown = function()
		{
			trace('mouseDown: making text');
			onMouseMove = function()
			{
				trace('mouseMove: making text');
			}
		}
		onMouseUp = function()
		{
			delete onMouseMove;
		}
	}
	startText = localStartText;
}

function removeText():Void {
	hut_container.text.removeMovieClip();
}
function initToolBar():Void
{
	var rootMC:MovieClip = hut_container.createEmptyMovieClip("toolbar_mc", _root.getNextHighestDepth());
	myToolBar = new ToolBar(rootMC);
	myToolBar.addEventListener('timeout', Delegate.create(this, pointerClick));
}
function beginDrawResponse(eventObj)
{
	trace('begin draw response');
}