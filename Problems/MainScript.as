/****************** Version Info *********************
 * 1.0 - PlaceHolder character is functioning properly
 * 1.0a - useLeftNav global variable allows problem to use navlog side bar if it is set to true
 */

/* PROGRESS**************
 * 04/14 - working on creating a variable to make the navlog work
 */
 
 
//System.security.loadPolicyFile ("http://catnip.cs.umass.edu/crossdomain.xml");

System.security.allowDomain("http://catnip.cs.umass.edu");
//System.security.allowDomain("http://portal.cs.umass.edu");
System.security.allowDomain("http://wayang.cs.umass.edu"); 
System.security.allowDomain("http://cadmium.cs.umass.edu");

stop();
_global.main = this;
var wayang_server_URL// = "http://catnip.cs.umass.edu/woj/servlet/TutorBrain";
var wayang_signup_URL;
var connection_status = 1;
var current_state = "login";
var class_list_arr = [];
var village_obj;
var current_sat_problem
var loadWaitInterval_arr = [];
var village_pop;
var useLeftNav:Boolean = true;
var learningCompanion:String = "";

//bill testing - traces current state when the state changes
var billFunction:Function = function(prop, oldVal, newVal, testingValue){
	//trace('>>>>>>>BILL DEBUG');
	//trace('    current_state: ' + newVal);
	return newVal;
}
this.watch("current_state", billFunction);

var server_config_xml = new XML();
server_config_xml.ignoreWhite = true;
server_config_xml.load("server_config.xml");

//State variables
sessionId = -1;
probId = -1;
probStartTime = 0;
lastHintId = -1;
probSolved = false;

server_config_xml.onLoad = function ()
{
	main.parseSessionVars();
	main.gotoAndStop("login");
}

//reads server_config, creates those variables in main
function parseSessionVars()
{
	for (var i = 0; i < server_config_xml.firstChild.childNodes.length; i++)
	{
		var node = server_config_xml.firstChild.childNodes[i];
		if (node.attributes.type.toLowerCase() == "string")
		{
			main[node.attributes.name] = String(node.attributes.value);
		}
	}
}

//var server = main.createEmptyMovieClip("server", 100);
//server.loadMovie("wayang_server.swf");

//temp def for sound calls
problem = {};
problem.probLoad = {};
problem.probLoad.h = {};
problem.probLoad.h.play = function()
{
	trace("Hut container: " + main.hut_container.internal.problem.h)
	main.hut_container.internal.problem.h.play();
}

//used when response from server is not necessary
function serverSend (arr) {
	//something in test hut made probId go to undefined ??
	trace('was this called>!>!?!?');
	if(probId == undefined){
		probId = -1;
	}
	
	var send_data_packet = new LoadVars();
	var received_data_packet = new LoadVars();
	send_data_packet.time = getTimer();
	send_data_packet.sessionId = sessionId;
	send_data_packet.problemId = probId;
	send_data_packet.probElapsedTime = getTimer()-probStartTime;
	send_data_packet.isSolved = probSolved;
	if ( lastHintId != -1 ){
		send_data_packet.lastHintId = lastHintId;
	}
	
	
	for (var i in arr)
	{
		send_data_packet[i] = arr[i];	
	}
	send_data_packet.sendAndLoad(wayang_server_URL, received_data_packet, "POST");
	trace("SENT DATA(send): " + wayang_server_URL + "\t" + unescape(send_data_packet.toString()) + "\n" );
}

function serverComm(arr, response)
{
	var send_data_packet = new LoadVars();
	var received_data_packet = new LoadVars();
	received_data_packet.onLoad = function(success:Boolean)
	{
		trace(response);
		trace("Server contacted successfully: " + success);
		//trace("RECEIVED DATA CHUNK: " + received_data_packet.toString());
		//trace("RECEIVED DATA CHUNK: " + unescape(received_data_packet.toString()));
		
		//cleans string of newlines, and prints them individually
		for (var i in received_data_packet){
			var str = String(received_data_packet[i]);
			if (str.charCodeAt(str.length-1) == 10){ //if there's a newLine char, it deletes it
				str = str.substr(0, str.length-1);	
			}
			received_data_packet[i] = str;
			trace("RECEIVED DATA: " + i +  "  " + received_data_packet[i]);
		}
		trace ("\n");
		//trace("RECEIVED DATA: " + unescape(received_data_packet.toString()));
		
		//if server acknowledged call
		if (received_data_packet.ack.substr(0, 4)=="true" || received_data_packet.ack==true){
			trace('  we are inside the if (ack == true)');
			//if there is no error message
			if (received_data_packet.message == "" || received_data_packet.message == undefined){
				//if there aren't other active sessions
				if (received_data_packet.other_active_sessions != true && received_data_packet.other_active_sessions != "true"){
					parseVillageList(received_data_packet);
				}
				if (response != null){
					response(received_data_packet);
				}
			}
			else{
				received_data_packet.extra = " Received from Server ";
				alertMessage(received_data_packet);
			}
		}
		else{
			trace('  there was a server error');
			serverError(received_data_packet, send_data_packet);	
		}
	}
	send_data_packet.time = getTimer();
	send_data_packet.sessionId = sessionId;
	
	send_data_packet.problemId = probId;
	send_data_packet.probElapsedTime = getTimer()-probStartTime;
	send_data_packet.isSolved = probSolved;
	if ( lastHintId != -1 ){
		send_data_packet.lastHintId = lastHintId;
	}
	
	
	for (var i in arr){
		send_data_packet[i] = arr[i];	
	}

	//trace("DEBUG: In Main.ServerComm: ");
	if (connection_status){
		// to do: attach loading screen
		send_data_packet.sendAndLoad(wayang_server_URL, received_data_packet, "POST");
		trace("SENT DATA(comm): " + wayang_server_URL + "?" + unescape(send_data_packet.toString()) + "\n" );
		
	}
	else{
		for (var i in received_data_packet){
			trace("RECEIVED DATA: " + i +  "  " + received_data_packet[i]);	
		}
		
		bool = received_data_packet.ack == true || received_data_packet.ack=="true";
		trace ("Acknowledge is :" + received_data_packet.ack + ":  question: " + bool);
		
		if (received_data_packet.ack == true || received_data_packet.ack=="true"){
			if (received_data_packet.message == "" || received_data_packet.message == undefined){
				response(received_data_packet);
				parseVillageList(received_data_packet);
				
			}
			else{
				alertMessage(received_data_packet);	
			}
		}
		else{
			serverError(received_data_packet, send_data_packet);	
		}
	}
}//end ServerComm


function alertMessage(responseObj){
	var message = main.attachMovie("alert", "alert", 10000);
	
	message.body.htmlText = responseObj.message;// + "\n\nSessionID:" + sessionId + "\tTime: " + getTimer() + "\n\n" + responseObj.extra;
	message.submit_btn.onRelease = function(){
		responseObj.fnResponse();
		this._parent.removeMovieClip();
	}
	
}//end alertMessage




function serverError(responseObj, sentObj){
	trace("SERVER DOES NOT UNDERSTAND: ACTION = " + sentObj.action + " ACK = " + responseObj.ack);
	responseObj.extra = "Server Error:" + sentObj;
	alertMessage(responseObj);
}//end serverError

function loadHutMovieClip(cliparr, onLoadResponse, responseObj, resetHut, resetSnd, resetInternal){
	//cliparr[i].type = hut|snd|internal|nav
	// attachloading screen
	//if in need of reset, or undefined, create empty clips for sound, hut, internal
	if (resetHut || hut_container.hut == undefined){
		hut_container.hut.removeMovieClip();
		hut_container.createEmptyMovieClip("hut", 10);
	}
	if (resetSnd || hut_container.snd == undefined){
		hut_container.snd.removeMovieClip();
		hut_container.createEmptyMovieClip("snd", 20);
	}
	
	//this case is split into 2 ifs for the reason below...
	if ( hut_container.internal == undefined){
		hut_container.createEmptyMovieClip("internal", 30);
	}
	//removeMovieClip was not working properly on internal once we started loading InterventionRating into interventionClip
	//(possibly because InterventionClip uses MovieClip.createClassObject()?)
	//here we just remove the only two things that could be inside of internal instead of removing internal like the rest
	if (resetInternal){
		hut_container.internal.interventionClip.removeMovieClip();
		hut_container.internal.problem.removeMovieClip();
		
		//old code that inexplicably doesn't work with InterventionClips...
		//hut_container.internal.removeMovieClip();
		//hut_container.createEmptyMovieClip("internal", 30);
	}
	
	//walk through array sent in, create an empty movie clip for each in the appropriate movieClip parent
	for (var i = 0; i < cliparr.length; i++)
	{
		var mc:MovieClip;
		
		var file = (cliparr[i].file + ".swf");
		if (cliparr[i].type == "hut")
		{
			mc = hut_container.hut.createEmptyMovieClip(cliparr[i].name, i+10);	
		}
		else if (cliparr[i].type == "snd")
		{
			mc = hut_container.snd.createEmptyMovieClip(cliparr[i].name, i+10);
		}
		else if (cliparr[i].type == "internal")
		{
			mc = hut_container.internal.createEmptyMovieClip(cliparr[i].name, i+10);
		}
		else if (cliparr[i].type == "nav")
		{
			hut_container.createEmptyMovieClip("nav", 1000);
			mc = hut_container.nav.createEmptyMovieClip(cliparr[i].name, 1);
		}
		cliparr[i].mc = mc;
		mc.loadMovie(file);
		/*
		trace('>>>>>>>>>>>BILL DEBUG');
		trace('     Loading: ' + file);
		trace('     Type   : ' + cliparr[i].type);
		trace('     Name   : ' + cliparr[i].name);
		trace('     Target : ' + mc._target);
		*/
		
		//trace ("DEBUG:\t\tIn mainScripts.loadHutMovieClip: problem-" + _level0.hut_container.internal.problem+"-");
		//trace("DEBUG:\t\tIn mainScripts.loadHutMovieClip: Loading-" + file + ": cliparr[" +i+ "].mc-" + cliparr[i].mc + "-Type-" + typeof (cliparr[i].mc));
		//trace("DEBUG:\t\tIn mainScripts.loadHutMovieClip: Loading-" + file + ": cliparr.length-" + cliparr.length);
		//trace("DEBUG:\t\tIn mainScripts.loadHutMovieClip: URL-" + cliparr[i].mc._url); 
	}
	
	// freeze this method while we wait for clips to load
	//(the function loadWait() sets all of these to done as the clips are loaded)
	for (var i = 0; i < loadWaitInterval_arr.length; i++)
	{
		//remove all that are finished, (get set to "done" in loadWait() )
		if (loadWaitInterval_arr[i] == "done"){
				loadWaitInterval_arr.splice(i, 1);
				break;  // ?? only one at atime can be "done" ?
		}
	}
	
	//attach loading screen and set intervals to check for when each movie is done
	if (cliparr.length > 0){
		var myload = main.attachMovie("loader", "loader"+ i, 5000 + i);
		//create an interval that calls loadWait until each clip in array is done
		var loadWaitInterval = setInterval(loadWait, 100, onLoadResponse, responseObj, cliparr, i, myload);
		loadWaitInterval_arr[i] = loadWaitInterval;
	}
	else {
		trace("ERROR: \t\tIn mainScripts.loadHutMovieClip, NO MOVIES TO LOAD, continuing...  : cliparr[0]:" + cliparr[0]);
		onLoadResponse(responseObj);
	}
}

function attachHutMovieClip(clipName:String, instanceName:String, onLoadResponse, responseObj){
	//trace("DEBUG:\t\tIn mainScripts.attachHutMovieClip: internal.interventionClip-" + hut_container.internal.interventionClip);

	//try to remove both intervention and problem, the only things that can be in internal
	//if they aren't there, this code has no effect
	hut_container.internal.interventionClip.removeMovieClip();
	hut_container.internal.problem.removeMovieClip();
	
	var mc:MovieClip = hut_container.internal.attachMovie(clipName, instanceName, 30);
	//trace("DEBUG:\t\tIn mainScripts.attachHutMovieClip: internal-" + hut_container.internal);
	//trace("DEBUG:\t\tIn mainScripts.attachHutMovieClip: internal.instanceName-" + hut_container.internal[instanceName]);
	onLoadResponse(responseObj, mc);
}
		
function loadWait(onLoadResponse, responseObj, cliparr, interval_id, loader)
{
	//bytes loaded
	var bl = 0;
	//bytes total
	var bt = 0;
	var urlCheck = 0;
	//number of elements loaded
	var elCheck = 0;
	for (var i = 0; i < cliparr.length; i++){
		
		 
		//var myMovie:MovieClip = cliparr[i].mc;
		//trace ("DEBUG:\t\tIn mainScripts.loadWait: cliparr[" + i + "]" + cliparr[i]);
		//trace ("DEBUG:\t\tIn mainScripts.loadWait: cliparr[" + i + "].mc-" + cliparr[i].mc+"-");
		//trace ("DEBUG:\t\tIn mainScripts.loadWait: cliparr[" + i + "].file-" + cliparr[i].file+"-");
		
		if (cliparr[i].mc.externalLoaded != undefined){
		 	elCheck++;
		}
		
		if (cliparr[i].mc._url != main._url){
			bl += cliparr[i].mc.getBytesLoaded();
			bt += cliparr[i].mc.getBytesTotal();
			urlCheck++;
			//trace("LOAD START: "+ interval_id + "   " + cliparr[i].mc);
			loader.debug +="LOAD START: "+ interval_id + "   " + cliparr[i].mc + "\n";
		}
	}
	
	if (bt > 0 && urlCheck == cliparr.length){
		loader.bar._width = 200 * (bl/bt);
		//trace("UC: "+ elCheck + "  " + bl + "  " + bt);
	}
	else{
		loader.bar._width = 0;
	}
	
	//trace("DEBUG:\t\t In loadWait: url check - " + urlCheck+ " : clipArr.length - " + cliparr.length);
	//trace("DEBUG:\t\t In loadWait: bt - " + bt+ " : bl - " + bl);
	
	//trace("DEBUG:\t\t In loadWait: elcheck - " +elCheck+ " : cliparr[0]. - " + cliparr[0].mc);
	//if everything is done
	if(urlCheck == cliparr.length && bl >= bt && bt != 0){
		
		if (cliparr[0].name == "problem"){
			
			if (cliparr[0].mc.labels != undefined ){
				//trace("PROBLEM: BL: " + bl + "   BT: " + bt)
				clearInterval(loadWaitInterval_arr[interval_id]);
				loadWaitInterval_arr[interval_id] = "done";
				loader.removeMovieClip();
				
				//if useLeftNav == true use sidebar, else dont
				if(current_state == "satHut" && useLeftNav){
					hut_container.nav.navlog.gotoAndStop("satHutLeftNav");
				}else{
					hut_container.nav.navlog.gotoAndStop(current_state);
				}

				

				onLoadResponse(responseObj);
				//trace("LOAD problem FINISH: " + interval_id);
			}
		}
		else if (cliparr[0].type != "snd")
		{
			if (elCheck == cliparr.length)
			{
				clearInterval(loadWaitInterval_arr[interval_id]);
				loadWaitInterval_arr[interval_id] = "done";
				loader.removeMovieClip();
		
				//trace('NAVLOG(not sound): ' + current_state);
				if(current_state == "satHut" && useLeftNav){
					hut_container.nav.navlog.gotoAndStop("satHutLeftNav");
				}else{
					hut_container.nav.navlog.gotoAndStop(current_state);
				}

				onLoadResponse(responseObj);
		
				//trace("LOAD snd FINISH: " + interval_id);
			}
		}
		else
		{
			clearInterval(loadWaitInterval_arr[interval_id]);
				loadWaitInterval_arr[interval_id] = "done";
				loader.removeMovieClip();
		
				//trace('NAVLOG(all else): ' + current_state);
				if(current_state == "satHut" && useLeftNav){
					hut_container.nav.navlog.gotoAndStop("satHutLeftNav");
				}else{
					hut_container.nav.navlog.gotoAndStop(current_state);
				}

				onLoadResponse(responseObj);
		
				//trace("LOAD FINISH: " + interval_id)
		}
		
	}
}
