import mx.transitions.Tween;
import mx.transitions.easing.*;
import flash.external.*;

System.security.allowDomain("http://localhost", "*");
// wayang sat hut problem tester
var prob_id = "002";
var problem_mc = this.createEmptyMovieClip ("problem_mc", 100);
problem_mc._y = 30;
var sound_mc = this.createEmptyMovieClip ("sound_mc", 20);
var int_id;
var snd_ids:Array;
//var snd_ids:Array = new Array();
var help_index;
var cur_sound;
var sound_clips_required = false;
var myButton:MovieClip = new MovieClip ();
var mySwitchButton:MovieClip = new MovieClip ();
var learningCompanion:String = "Jake";
_global.main = this;

//_level0.problem.probLoad.h.play()

// The objects below are created so that the code below which makes some references to them will compile.
// They are not given meaningful values until a problem starts playing.  Then h will take on the value
// of each movie clip which represents a hint (the movie clip should have its instance name set at h).
// probload is never used and problem is set when the problem is finished loading.
var problem = new Object ();
problem.probLoad = new Object ();
problem.probLoad.h = new Object ();
problem.probLoad.h.play = function ()
{
	trace ("In h.play function for h=" + problem.probLoad.h);
	main.problem_mc.h.play ();
};

var myFmt:TextFormat = new TextFormat ();
myFmt.color = 0xFFFFFF;
myFmt.font = "_sans";
myFmt.align = "center";

myButton = hut_container.attachMovie ("generic_button_green", "myButton", 900);
myButton._x = 700;
myButton._y = 410;
myButton._width = 72;

var drawBtnText:TextField = hut_container.createTextField ("draw_button_text", 901, myButton._x, myButton._y, myButton._width, 20);
drawBtnText.text = "Go Away!";
drawBtnText.selectable = false;
drawBtnText.setTextFormat (myFmt);


mySwitchButton = hut_container.attachMovie ("generic_button_green", "mySwitchButton", 902);
mySwitchButton._x = 600;
mySwitchButton._y = 410;
mySwitchButton._width = 72;

var drawSwcBtnText:TextField = hut_container.createTextField ("draw_switch_button_text", 903, mySwitchButton._x, mySwitchButton._y, mySwitchButton._width, 20);
drawSwcBtnText.text = "Switch!";
drawSwcBtnText.selectable = false;
drawSwcBtnText.setTextFormat (myFmt);

if (ExternalInterface.available) {
    trace("ExternalInterface= " + ExternalInterface.available);
    flash.external.ExternalInterface.addCallback("myExternalMethod", null, helloFromJS);
}

function helloFromJS () {
    trace("\ncalled from JS");
    setHelp(3);

}

function loadProblem (n)
{
    helloFromJS();
	trace ("\n");
	trace ("in loadProblem  " + n);
	initCharacter (800,430);
	help_index = 0;
	prob_id = n;
	hints_cmb.removeAll ();
	//problem_mc.onLoad = function (success:Boolean) {
	//trace("does this work?");
	//}
	problem_mc.unloadMovie ();
	problem_mc.loadMovie ("problem_" + n + "/problem_" + n + ".swf");// TODO switch to onLoad callback
	hut_container.snd.removeMovieClip ();
	hut_container.createEmptyMovieClip ("snd",20);
	int_id = setInterval (problemWait, 100);// check every 100 ms to see if prob is loaded
}


// After each wait interval (100 ms) this gets called to see if the problem is fully loaded.
// Once it is, call problemLoaded.
function problemWait ()
{
	trace ("in problemWait");
	// removed && problem_mc.snd != undefined from condition below

	if (problem_mc.getBytesTotal () == problem_mc.getBytesLoaded () && problem_mc.snd != undefined)
	{
		clearInterval (int_id);
		//trace ("snd array is  " + problem_mc.snd);
		sound_clips_required = true;// a snd array was defined, so this is old-style problem
		// which means that playing hints rplays these clips in addition
		soundLoad ();
		// no snd array is defined in the problem so skip the loading of sound swfs.  Any sound
		// must integral to problem/hints
	} else if (problem_mc.getBytesTotal () == problem_mc.getBytesLoaded () && problem_mc.labels != undefined)
	{
		clearInterval (int_id);
		sound_clips_required = false;
		allLoaded ();
	}
}

// Once the problem is finished loading this is called (by problemWait).
// It expects there to be a movie clip for each sound in the snd array.
// All sounds are loaded.
function soundLoad ()
{
	trace ("in problemLoaded");
	snd_ids = new Array ();
	for (var i = 0; i < problem_mc.snd.length; i++)
	{
		var nm = problem_mc.snd[i];
		if (nm != undefined)
		{
			// push the new movie clip for the sound into the snd_ids list
			//var mc = sounds.createEmptyMovieClip(nm, 10+i);
			//mc.loadMovie("problem_"+prob_id+"/"+nm+".swf");
			snd_ids.push (nm);
		}
	}
	allLoaded ();
	//
	//Removed this call due to changes in the code which make it unnecessary
	//and causes the code to loop endlessly through soundWait()
	//int_id = setInterval(soundWait, 10);

	//problem_mc.gotoAndStop("question");
	//hints_cmb.addItem(problem_mc.labels[i]);
}

// Called every 10 ms to see if all the sounds are all loaded.
// Once they are, the allLoaded function is called.
function soundWait ()
{
	trace ("in soundWait");
	// go through all the sounds we're waiting for and see if any are loaded.   Calls allLoaded
	// when all sounds are complete.
	for (var i = 0; i < snd_ids.length; i++)
	{
		//trace(i+" "+snd_ids[i]+" "+snd_ids[i].getBytesTotal());
		// if the sound is fully loaded remove it from the list of sounds we're waiting for.
		//trace(snd_ids[i].getBytesTotal());
		//trace(snd_ids[i].getBytesLoaded());
		if (snd_ids[i].getBytesTotal () == snd_ids[i].getBytesLoaded () && snd_ids[i].getBytesLoaded () > 0)
		{
			snd_ids.splice (i,1);// pops snd
			i--;
			//trace(snd_ids.length)
			if (snd_ids.length == 0)
			{
				clearInterval (int_id);
				allLoaded ();
			}
		}
	}
	//clearInterval(int_id);
	//allLoaded();
}

// Called after all the sounds are loaded (by soundWait). 
// It moves playhead to the 'question' label and stops there.
function allLoaded ()
{
	trace ("in allLoaded");
	for (var i = 0; i < problem_mc.labels.length; i++)
	{
		hints_cmb.addItem (problem_mc.labels[i]);
	}
	prob_txt.text = prob_id;
	//trace("in allLoaded before gotoAndStop(question)");
	problem_mc.gotoAndStop ("question");
	//trace("Strategic hints?  "+problem_mc.strategic_hint_exists);
}
function getHelp ()
{
	trace ("in getHelp");
	help_index++;
	hints_cmb.selectedIndex = help_index;
	// if there is a sound array, this is an old-style problem which requires
	// that the player just goto the first frame of the hint and then stop.  
	// script within the hint will then make things play (including sound clip)
	if (sound_clips_required)
	{
		problem_mc.gotoAndStop (problem_mc.labels[help_index]);
	} else
	{
		problem_mc.gotoAndPlay (problem_mc.labels[help_index]);
	}// new style: just play
}
function setHelp (n)
{
    trace ("in setHelp with " + n);
	help_index = n;
	// if there is a sound array, this is an old-style problem which requires
	// that the player just goto the first frame of the hint and then stop.  
	// script within the hint will then make things play (including sound clip)
	if (sound_clips_required)
	{
		problem_mc.gotoAndStop (problem_mc.labels[help_index]);
	} else
	{
		problem_mc.gotoAndPlay (problem_mc.labels[help_index]);
	}
}
/*function playSound(n) {
trace("in playSound");
trace("calling play on "+problem_mc.snd[n]);
sounds[n].play();
}*/
function playSound (n)
{
	trace ("in playSound");
	stopAllSounds ();
	sound_mc.loadMovie ("problem_" + prob_id + "/" + problem_mc.snd[n] + ".swf");
	sound_mc.gotoAndPlay ("init");
	//sound_mc.unloadMovie ();
	//sound_mc.loadMovie ("problem_" + prob_id + "/" + snd_ids[n] + ".swf");
	//sound_mc.loadMovie ("problem_test/test.swf");
	//sound_mc.gotoAndPlay (2);
	//hut_container.snd[s[n]].play();
}
var cmb_listener = {};
cmb_listener.change = function ()
{
	_root.setHelp (hints_cmb.selectedIndex);
};
hints_cmb.addEventListener ("change",cmb_listener);
help_btn.onRelease = function ()
{
	trace ("onRelease help");
	_root.getHelp ();
};
load_btn.onRelease = function ()
{
	trace ("onRelease load");
	loadProblem (prob_txt.text);
};

//loadProblem(prob_id);
//
//
//
//
//
//Start Character Controls//////////////////////////
var loader:MovieClipLoader = new MovieClipLoader ();
var loadHandler:Object = new Object ();
loader.addListener (loadHandler);
function initCharacter (screenWidth, screenHeight):Void
{
	var char:MovieClip = hut_container.createEmptyMovieClip ("character", 50);
	//allows the character to be placed into any size movie
	char._x = screenWidth - 250;
	char._y = screenHeight - 420;
	hut_container.character.createEmptyMovieClip ("new_char",20);
	hut_container.character.createEmptyMovieClip ("old_char",10);
	characterControl ("idle");
	strategic_hint_played = false;
	/*
	character.loadBtn.onRelease = function(){
	trace(emotion_selector.data[emotion_selector.selectedIndex]);
	hut_container.character.characterAdjust(emotion_selector.data[emotion_selector.selectedIndex]);
	}
	*/
}

function clickedOnCharacter ():Void
{
	var prob = hut_container.internal.problem;
	if (problem_mc.strategic_hint_exists)
	{
		trace (">>Strategic hint exists for problem " + problem_mc);
		if (strategic_hint_played)
		{
			//--- Bills note: using loader.laodClip causes flickering of the character, should use characterControl() function to avoid this ---
			//--- I modified to accept an optional 2nd parameter if .swf filename doesnt match the directory name                   
			characterControl ("strategicHints","strategicAlreadyPlayed");
			//loader.loadClip("../Learning Companion/" + learningCompanion + "/strategicHints/strategicAlreadyPlayed.swf", hut_container.character.new_char);
			//charHolder = hut_container.character.new_char;
		} else
		{
			problem_mc.gotoAndPlay (learningCompanion + "_strategic_hint");
			trace (">>>Playing strategic hint " + learningCompanion + "_strategic_hint");
			strategic_hint_played = true;

		}
	} else
	{
		characterControl ("strategicHints","noStrategicHint");
		//loader.loadClip("../Learning Companion/" + learningCompanion + "/strategicHints/noStrategicHint.swf", hut_container.character.new_char);
		//charHolder = hut_container.character.new_char;
		trace (">>Strategic hint does not exist for problem " + problem_mc);
	}
}

function stopMouth ():Void
{
	if (learningCompanion == "Jane")
	{
		charHolder.Jane_point.mouth2.gotoAndStop ("closed");

	} else if (learningCompanion == "Jake")
	{
		charHolder.Jake_point.mouth2.gotoAndStop ("closed");
	}
}

function startMouth ():Void
{
	
	if (learningCompanion == "Jane")
	{
		charHolder.Jane_point.mouth2._alpha = 100;
		charHolder.Jane_point.mouth._alpha = 0;
		charHolder.Jane_point.mouth2.gotoAndPlay (1);
	} else if (learningCompanion == "Jake")
	{
		charHolder.Jake_point.mouth2._alpha = 100;
		charHolder.Jake_point.mouth._alpha = 0;
		charHolder.Jake_point.mouth2.gotoAndPlay (1);
	}
}

function moveMouth (whichFrame):Void
{
	if (whichFrame == "closed")
	{
		//A tiny if statement for ease of use:
		//Rather than having to state which mouth shape,
		//the author can simply use the word closed.
		whichFrame = 9;
	}
	var emotionalState:Number = 1;
	//This is a three-way switch for the character
	//The "1" indicates the first emotional states, which is happy/normal
	//Changing this to "2" or "3" will cause the character's mouth to appear
	//Neutral and Upset respectively

	whichFrame = (whichFrame * 4) + emotionalState;
	if (learningCompanion == "Jane")
	{
		charHolder.Jane_point.mouth2._alpha = 0;
		charHolder.Jane_point.mouth._alpha = 100;
		charHolder.Jane_point.mouth.gotoAndStop (whichFrame);
	} else if (learningCompanion == "Jake")
	{
		charHolder.Jake_point.mouth2._alpha = 0;
		charHolder.Jake_point.mouth._alpha = 100;
		charHolder.Jake_point.mouth.gotoAndStop (whichFrame);
	}
}

function moveCursor (newX:Number, newY:Number, tweenLength:Number):Void
{
	//trace("Moving cursor");
	newX -= 545;
	newY += 25;

	if (learningCompanion == "Jane")
	{
		//trace ("X - " + charHolder.Jane_point.cursor._x);
		//trace ("Y - " + charHolder.Jane_point.cursor._y);
		new Tween (charHolder.Jane_point.cursor, "_x", None.easeInOut, charHolder.Jane_point.cursor._x, newX, tweenLength, true);
		new Tween (charHolder.Jane_point.cursor, "_y", None.easeInOut, charHolder.Jane_point.cursor._y, newY, tweenLength, true);
		new Tween (charHolder.Jane_point.arm, "_rotation", None.easeInOut, charHolder.Jane_point.arm._rotation, newArmAngle (charHolder.Jane_point.arm._rotation, charHolder.Jane_point.cursor._x, charHolder.Jane_point.cursor._y, newX, newY), tweenLength, true);
	} else if (learningCompanion == "Jake")
	{
		new Tween (charHolder.Jake_point.cursor, "_x", None.easeInOut, charHolder.Jake_point.cursor._x, newX, tweenLength, true);
		new Tween (charHolder.Jake_point.cursor, "_y", None.easeInOut, charHolder.Jake_point.cursor._y, newY, tweenLength, true);
		new Tween (charHolder.Jake_point.arm, "_rotation", None.easeInOut, charHolder.Jake_point.arm._rotation, newArmAngle (charHolder.Jake_point.arm._rotation, charHolder.Jake_point.cursor._x, charHolder.Jake_point.cursor._y, newX, newY), tweenLength, true);
	}
}
function circleCursor ():Void
{
	if (learningCompanion == "Jane")
	{
		charHolder.Jane_point.cursor.gotoAndPlay ("spin");
	}
	if (learningCompanion == "Jake")
	{
		charHolder.Jake_point.cursor.gotoAndPlay ("spin");
	}
}
function newArmAngle (oldAngle:Number, Ax:Number, Ay:Number, Bx:Number, By:Number):Number
{
	Ax = Ax - 144.6;
	Ay = Ay - 196.9;
	Bx = Bx - 144.6;
	By = By - 196.9;
	var newAngle:Number = (Math.acos (dotProduct (Ax, Ay, 0, Bx, By, 0) / vectorProduct (Ax, Ay, Bx, By)) * (180 / Math.PI));
	if (Ay < By)
	{
		newAngle = newAngle * -1;
	}
	//trace ("oldAngle- " + oldAngle);                
	//trace ("newAngle- " + newAngle);
	return (oldAngle + newAngle);
}

function dotProduct (Ax:Number, Ay:Number, Az:Number, Bx:Number, By:Number, Bz:Number):Number
{
	var dProd:Number = ((Ax * Bx) + (Ay * By) + (Az * Bz));
	//trace("dot product = "+ dProd);
	return (dProd);
}

function vectorProduct (Ax:Number, Ay:Number, Bx:Number, By:Number):Number
{
	var vProd:Number = (Math.sqrt (Math.pow (Ax, 2) + Math.pow (Ay, 2))) * (Math.sqrt (Math.pow (Bx, 2) + Math.pow (By, 2)));
	//trace ("vector product = " + vProd);
	return (vProd);
}

function removeCharacter ():Void
{
	if (hut_container.character != undefined)
	{
		hut_container.character.removeMovieClip ();
	}
}

var whichMC:Number = 0;
var charHolder:MovieClip;
var tempCharDisable:Boolean = false;

myButton.onRelease = function ()
{
	trace ("Charcter button");
	if (drawBtnText.text == "Go Away!")
	{
		drawBtnText.text = "Come Back!";
		characterControl ("exit");
		tempCharDisable = true;
	} else
	{
		drawBtnText.text = "Go Away!";
		tempCharDisable = false;
		characterControl ("enter");
	}
	var myFmt:TextFormat = new TextFormat ();
	myFmt.color = 0xFFFFFF;
	myFmt.font = "_sans";
	myFmt.align = "center";
	drawBtnText.selectable = false;
	drawBtnText.setTextFormat (myFmt);
};
mySwitchButton.onRelease = function ()
{
	trace ("Switch button");
	if (learningCompanion == "Jake")
	{
		//characterControl("exit");
		learningCompanion = "Jane";
		characterControl ("enter");
		tempCharDisable = false;
	} else
	{
		//characterControl("exit");
		learningCompanion = "Jake";
		characterControl ("enter");
		tempCharDisable = false;
	}
	var myFmt:TextFormat = new TextFormat ();
	myFmt.color = 0xFFFFFF;
	myFmt.font = "_sans";
	myFmt.align = "center";
	drawSwcBtnText.selectable = false;
	drawSwcBtnText.setTextFormat (myFmt);
};
function characterControl (emotion:String, swfName:String):Void
{
	trace ('>>>chracterControl: ' + emotion + '.swf' + ' swfName: ' + swfName);
	// if the user has requested the character to go away, you cant change the emotion        
	var characterListener:Object = new Object ();
	loader.addListener (characterListener);
	if (tempCharDisable == false)
	{
		if (swfName == null || swfName == undefined)
		{
			swfName = emotion;
		}

		if (whichMC == 0)
		{
			try
			{
				loader.loadClip ("../Learning Companion/" + learningCompanion + "/" + emotion + "/" + swfName + ".swf",hut_container.character.new_char);
				//loader.loadClip (learningCompanion + "/" + emotion + "/" + swfName + ".swf",hut_container.character.new_char);
				charHolder = hut_container.character.new_char;
				whichMC = 1;
			}
			catch (e:Error)
			{
				trace ('>>>characterControl: Cant find file.. loading idle by default!');
				loader.loadClip ("../Learning Companion/" + learningCompanion + "/" + "idle" + "/" + "idle" + ".swf",hut_container.character.new_char);
				//loader.loadClip (learningCompanion + "/" + "idle" + "/" + "idle" + ".swf",hut_container.character.new_char);
				charHolder = hut_container.character.new_char;
				whichMC = 1;
			}
		} else
		{
			try
			{
				loader.loadClip ("../Learning Companion/" + learningCompanion + "/" + emotion + "/" + swfName + ".swf",hut_container.character.old_char);
				//loader.loadClip (learningCompanion + "/" + emotion + "/" + swfName + ".swf",hut_container.character.old_char);
				charHolder = hut_container.character.old_char;
				whichMC = 0;
			}
			catch (e:Error)
			{
				trace ('>>>characterControl: Cant find file.. loading idle by default!');
				loader.loadClip ("../Learning Companion/" + learningCompanion + "/" + "idle" + "/" + "idle" + ".swf",hut_container.character.old_char);
				//loader.loadClip (learningCompanion + "/" + "idle" + "/" + "idle" + ".swf",hut_container.character.old_char);
				charHolder = hut_container.character.old_char;
				whichMC = 0;
			}
		}
	}
	/*characterListener.onLoadComplete = function ()
	{
		if (problem_mc.isSynced == true)
		{
			if (learningCompanion == "Jane")
			{
				charHolder.Jane_point.mouth2._visible = false;

			} else if (learningCompanion == "Jake")
			{
				charHolder.Jake_point.mouth2._visible = false;
			}
		} else
		{
			if (learningCompanion == "Jane")
			{
				charHolder.Jane_point.mouth._visible = false;

			} else if (learningCompanion == "Jake")
			{
				charHolder.Jake_point.mouth._visible = false;
			}
		}
	};*/
	//hut_container.character.loadMovie("jake/" + emotion + ".swf");                                               
}

loadHandler.onLoadInit = function (_mc:MovieClip)
{
	if (_mc._name == "old_char")
	{
		hut_container.character.new_char._visible = false;
		hut_container.character.old_char._visible = true;
		loader.unloadClip (hut_container.character.new_char);
	}
	if (_mc._name == "new_char")
	{
		hut_container.character.new_char._visible = true;
		hut_container.character.old_char._visible = false;
		loader.unloadClip (hut_container.character.old_char);
	}
};
loadHandler.onLoadError = function (_mc:MovieClip)
{
	throw new Error ("File path does not exist");
};

charHolder.onRelease = function ()
{
	trace ("Released character");
};
//End Character Controls///////////////////////////////

function executeCallback ():Void
{

	if (questionNum == undefined)
	{
		loadProblem (prob_id);
	} else
	{
		loadProblem (questionNum);
	}// questionNum is the var taken from the address line

	clearInterval (intervalID);// ex. http://somesite.com/problem_checker.swf?questionNum=152
}
var intervalID:Number = setInterval (this, "executeCallback", 100);