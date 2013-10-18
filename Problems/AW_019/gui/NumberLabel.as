import mx.controls.* ;

class gui.NumberLabel 
{
	private var number:Number ;
	private var _mc:MovieClip ;
	private var _label:Label ;
	private var _size:Number ;
	public var _x:Number ;
	public var _y:Number ;	
	private static var LABEL_WIDTH:Number = 10 ;
	
	function NumberLabel(mc:MovieClip, n:Number, size:Number, x:Number, y:Number)
	{
		_mc = mc ;
		number = n ;
		_x=x ;
		_y=y ;
		_size=size ;
		
		_label = _mc.createClassObject(mx.controls.Label, "_label", _mc.getNextHighestDepth()) ;
  		_label.autoSize = "left" ;
		_label.text = "" + number ; 
		_label.setStyle("color", 0x000000) ;
		_label.setStyle("fontSize", _size) ;
		_label.setStyle("fontWeight", "bold") ;
		_label.move(_x,_y) ;
		_label.setSize(size,size) ;
	}
	
	public function getWidth():Number
	{
		return _label.width ;
	}
	
	public function remove():Void
	{
		_label.visible = false ;
	}

	public function getHeight():Number
	{
		return _label.height ;
	}
		
	public function getNumber():Number
	{
		return number ;
	}
	
	public function highlight():Void
	{
		_label.setStyle("color", 0xFF0000);
	}

	public function setLocation(newx:Number, newy:Number):Void
	{
		_x = newx ;
		_y = newy ;
		_label.move(_x, _y) ;
	}
	
	public function unhighlight():Void
	{
		_label.setStyle("color", 0x000000);
	}
	
}