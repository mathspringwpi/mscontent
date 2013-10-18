/* Bill Ryan
   December 8th, 2009
   
   This script loops through each item of the library of current FLA file, if that item is
   of type movieclip and it's frame length > 3 and it is not the answer_buttons movieclip, 
   it doubles the number of frames in each layer of that movieclip.
   
*/

var doc = fl.getDocumentDOM();
var library = doc.library;
var items = library.items;

i = items.length;

fl.outputPanel.clear();

while (i--) 
{
	var item = items[i];
	var containsText = ( item.name.search(/answer_button_MC/i) > -1); // boolean, returns true if it contains text, this needs to be done because sometimes the
																	  // the answers MC is burried in an unknown folder
	if (item.itemType == 'movie clip' && !containsText)
	{
		var timeline = item.timeline;
		var k = timeline.frameCount;
		fl.trace(' ' + k);
		
		if(k > 3)
		{
			fl.trace('Doubling... ' + item.name);
			library.selectItem(item);
            library.editItem();
			
			doubleFrameCount(timeline);
			doc.exitEditMode();
		}
	}
}

function doubleFrameCount(timeline)
{
	var myTL = timeline;
	var domLayers = myTL.layers;
	
	for(var x = 0; x < domLayers.length; x++)
	{
		//fl.trace('LAYER ' + x + ' / ' + myTL.layerCount + ': ' + domLayers[x].name);
		if(x == 0)
			myTL.currentLayer = 0;
		else if(x != myTL.currentLayer)
			myTL.currentLayer = x;
		
		var l = domLayers[x].frames.length;
		for(var y = 1; y < domLayers[x].frames.length-1; y++)
		{
			//fl.trace('   Frame: ' + y + ' / ' + domLayers[x].frames.length);
			if(y%2 == 0)
				myTL.insertFrames(1, false, y);
		}
	}
}