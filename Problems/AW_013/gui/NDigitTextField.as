import mx.controls.* ;

class gui.NDigitTextField extends TextArea {
	private var ndigitsAllowed:Number;
	private var ndigitsTyped:Number;
	private var id:Number;
	

	function NDigitTextField (n:Number) {
		super(n);
		ndigitsTyped = 0;
		ndigitsAllowed = n;
	}

	public function getId ():Number { return id; }
	
	// overrides JTextField's getText method so that validation 
	// is done.
	public function getText () : String {
		if (isValid())
			return super.getText();
		else {
			//Toolkit.getDefaultToolkit().beep();
			setText("");
			return null;
		}
	}
	
	public function isValid():Boolean {
		String txt = super.getText();
		if (txt.length() <= ndigitsAllowed && !txt.equals("")) {
			char[] ca = txt.toCharArray();
			for (int i=0;i < ca.length;i++)
				if (ca[i] < '0' || ca[i] > '9')
					return false;
			return true;
		}
		else return false;
	}
	public function setId (int x):Void { id = x; }
	public function toString ():String { return "NDigitTextField"+id; }
}