import mx.controls.* ;
import gui.NumberLabel ;

class gui.NumberGroup 
{
	private var labels:Array ;
	private var number:Number ;
	private var mc:MovieClip ;
	private var nums:Array ;
	private var size:Number ;
	private var SPACE_BETWEEN: Number = 2 ;
	public var width:Number ;
	public var height:Number ;
	public var x:Number ;
	public var y:Number ;
	
	function NumberGroup(_mc:MovieClip, n:Number, s:Number, xx:Number, yy:Number)
	{
		mc = _mc ;
		number = n ;
		size = s ;
		x = xx ;
		y = yy ;
				
		var length:Number = (n.toString()).length ;
		nums = new Array(length);
		var digit:Number ;
		var currentposx:Number = xx ;
		
		var temp1:Number = n;
		var temp2:Number = n;
		
		for ( var i:Number = 0; i<length; i++ ) {
			temp2 = temp1 / Math.pow(10,(length-i-1)) ;
			digit = Math.floor(temp2) ;
			var decimals = temp1 % Math.pow(10,(length-i-1)) ;
			temp1 = temp1 - (digit * Math.pow(10,(length-i-1))) ;
						
			nums[i] = new NumberLabel(mc, digit, size, currentposx, y) ;  
			currentposx += nums[i].getWidth() + this.SPACE_BETWEEN  ;  //added a bit of extra space
		}	
		
		var onelabel:gui.NumberLabel  = nums[0] ;
		width = onelabel.getWidth() * length;
		height = onelabel.getHeight() ;
	}
	

	public function concatString(second:String):NumberGroup
	{
		var num:Number = number ;
		
		remove() ;
			
		for ( var i:Number = 0; i<second.length; i++ )
			num = num * 10 ;
			
		num += new Number(second) ;
		
		return new NumberGroup(mc, num, size, x, y) ;
	}

	
	function getNumberSize() 
	{
		return size ;
	}
	
	function getNumberGroup(first:NumberGroup, second: NumberLabel):NumberGroup
	{
		var num:Number = first.getNumber() ;
		var temp:Number = 1 ;
		
		for ( var i:Number = 0; (temp-1)<=second.getNumber(); i++ ) {
			num = num * 10 ;
			temp = temp * 10 ;
		}
			
		num += second.getNumber() ;
		
		return new NumberGroup(mc, num, size, x, y ) ;
	}
	

	public function getDigit(i:Number):Number  {
		if ( i > nums.length )
			throw new Error("ArrayIndexOutOfBounds Exception: Trying to get an inexistent digit");
		
		return (nums[i].getNumber()) ;
	}
	
	public function getLength(): Number
	{
		return nums.length ;
	}
	
	public function  getNumber(): Number
	{
		return number ;
	}
	
	public function remove():Void 
	{
		for ( var i:Number = 0; i<nums.length; i++ ) {
			var nl:NumberLabel = nums[i] ;
			nl.remove() ;
		}
	}
	
	public function getNumberLabel(index: Number) : NumberLabel
	{
		var returnval:NumberLabel = nums[index] ;
		return returnval ;
	}
	

	public function getSubsetOfNum(start:Number, end:Number) : Number
	{
		if ( start > end )
			throw new Error ("Start > end in class NumberGroup") ;
		
		var aux:Number = 0 ;
		var j:Number=1 ;
		for (  var i:Number=end; i>=start; i--, j*=10 ) 
			aux += j * getDigit(i) ;
			
		return aux ;    
	}

	
	public function  highlight(): Void
	{
		for ( var i:Number=0; i<nums.length; i++ ) {
			var thislabel = nums[i] ;
			thislabel.highlight() ;
		}
	}
	
	public function highlightFromTo( start:Number,  end:Number) : Void
	{
		for ( var i:Number=start; i<=end; i++ )
			nums[i].highlight() ;
	}
	
	public function  unhighlight() : Void
	{
		for ( var i:Number = 0; i<nums.length; i++ )
			nums[i].unhighlight() ;
			
	}
	
	public function setLocation(newx:Number, newy:Number) : Void 
	{
		var stepx:Number = newx - x ;
		var stepy:Number = newy - y ;
		
		x = newx ;
		y = newy ;
		
		for ( var i:Number = 0; i<nums.length; i++ ) {
			var thisNumberLabel:NumberLabel = nums[i] ;
			thisNumberLabel.setLocation(thisNumberLabel._x + stepx, thisNumberLabel._y + stepy) ;
		}
	}
	
}