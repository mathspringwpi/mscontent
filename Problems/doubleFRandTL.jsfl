/********
Bill Ryan
December 1st, 2009

DESCRIPTION:
This script opens the current FLA document (which is the last viewed FLA) and makes the 
frame rate 24.  It then goes into each layer in the main timeline and inserts a frame at
every other frame.  This is done so that there are no unexpected results from increasing
the frame-rate to 24.  Once complete, it is up to the user to save the file, just in case
there were errors.

NOTE:
I've noticed that it sometimes doesnt properly work for the top layer...
*********/

var doc = fl.getDocumentDOM();

if(doc.frameRate < 24)
{
	doc.frameRate = 24;
	
	var myTL = doc.getTimeline();
	var domLayers = myTL.layers;
	for(var x = 0; x < domLayers.length; x++)
	{
		fl.trace('LAYER ' + x + ' / ' + myTL.layerCount + ': ' + domLayers[x].name);
		if(x == 0)
			myTL.currentLayer = 0;
		else if(x != myTL.currentLayer)
			myTL.currentLayer = x;
		
		var l = domLayers[x].frames.length;
		for(var y = 1; y < domLayers[x].frames.length-1; y++)
		{
			fl.trace('   Frame: ' + y + ' / ' + domLayers[x].frames.length);
			if(y%2 == 0)
				myTL.insertFrames(1, false, y);
		}
	}
	if(doc.width < 550){
		doc.width = 550;
		doc.height = 400;
	}
}
else
{
	fl.trace('ERROR: Current FLA document is already 24 fps');
}