 



var length_array = [2,2,2,2,4,4,4,4,3,3,3,3];
var height_array = [1,2,3,4,1,2,3,4,1,2,3,4];

var peremeter_length_array = [5,2,2,2,4,4,4,4,3,3,3,3];
var peremeter_height_array = [5,2,3,4,1,2,3,4,1,2,3,4];

var new_length_array = [3,3,3,3];
var new_height_array = [1,2,3,4];

var new_peremeter_length_array = [1,1,1,1,1,1,1];
var new_peremeter_height_array = [1,1,1,1,1,1,1];

//mode parameters

var painting_series =["paintWalls","paintWindows","buildNewWalls","buildNewWindows"];
painting_round=painting_series[0];


//building parameters: x_distance, width, height

var building_base_arr = [[20,100,450], [15,150,250], [20,200,350], [50,100,400], [20,100,300]];
var building_wall_color=["#65caf0","#94dbb4","#65caf0","#65caf0"]

var new_building_array = [[50,100,350], [135,150,250], [200,200,350]];

//wall paramters: height,width

var wall_array = [[[40,100],[40,100] ],[[50,100]]];

//house[width]
var new_wall_array = [[40,60, 70],[70]];

//window paramters: x,y,width,height

var window_array = [[[0,0,80,50]],
[[0,0,130,50]]];

var new_window_array = [[[0,0,80,50],[0,0,80,50]],
[[0,0,130,50]]];

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');



var canvas_h=500;
var platform_h=10;
var building_h=450;
var building_w=0;
var building_x=0;
var building_y=0;

var building_count=0;
var window_h_space=10;
var window_v_space=10;
var window_x=0;
var window_y;
var wall_x, wall_y, wall_height, wall_width;

////build outline for buildings
for (j=0; j<building_base_arr.length; j++){
building_x=building_x+building_w+building_base_arr[j][0];
building_w=building_base_arr[j][1];
building_h=building_base_arr[j][2];
building_y=canvas_h-building_h-platform_h;
createBaseRect(building_x,building_y,building_w,building_h,"#86b2c4");
}

var house_count = 0;
var window_count = 0;
var wall_count=0;
var new_building_count=0;

var question_sequence=0;
var mistakes_count=0;
var question_base_margin_top=25;
var question_base_margin_left=5;
var question_base_margin_bottom=10;
var question_base_width_margin=180;
var height_parameter_margin_left=15;
var form_div_margin_left=15;


var question_base_height;
var question_base_width;
var question_base_x;
var question_base_y;
var min_question_base_height;

var length_parameter_x;
var length_parameter_y;
var height_parameter_x;
var height_parameter_y;
var form_div_x;

var wallPainting_done=false;
var windowPainting_done=false;

//set base


// generate question
$( ".length_span" ).html(length_array[question_sequence]);
$( ".height_span" ).html(height_array[question_sequence]);

//initialize painting walls

if (painting_round=="paintWalls") initializePaintingWalls();

$("#base_div").css({ "position": "relative",  "top": question_base_y, "left":question_base_x, "width":question_base_width, "height":question_base_height });
$("#base_div").fadeIn("medium");

form_div_x= height_parameter_x+form_div_margin_left;
$( ".length_span" ).css({ "position": "absolute", "left": length_parameter_x, "top": length_parameter_y });
$( ".height_span" ).css({ "position": "absolute",  "left": height_parameter_x, "top": height_parameter_y });
$( "#form_div" ).css({ "position": "absolute",  "left": form_div_x, "top": length_parameter_y });



$( "form" ).submit(function( event ) {


	if (painting_round=="paintWalls"){

	if ( $( "#userAnswerBox" ).val() == computeArea(length_array[question_sequence],height_array[question_sequence]).toString()) {

		$("#base_div").hide();
		runPaintingWalls(); 
	  }
		else{

		  $( ".feedback_span" ).text( "Try again" );
			$("#base_div").css({ "height":question_base_height +30 });
	
			mistakes_count++;

		if (mistakes_count>=5) {
			$("#instruction_div").fadeIn("slow");}
		}

	}

	else if (painting_round=="paintWindows"){

	
	if ( $( "#userAnswerBox" ).val() == computePeremeter(peremeter_length_array[question_sequence],peremeter_height_array[question_sequence]).toString()) {

		$("#base_div").hide();
		runPaintingWindows();


	  }
		else{

		  $( ".feedback_span" ).text( "Try again" );
			$("#base_div").css({ "height":question_base_height +30 });
	
			mistakes_count++;

		if (mistakes_count>=5) {
			$("#instruction_div").fadeIn("slow");}
		}

	}

	else if (painting_round=="buildNewWalls"){
	

	if ( $( "#userAnswerBox" ).val() == computeArea(new_length_array[question_sequence],new_height_array[question_sequence]).toString()) {

		$("#base_div").hide();
		runPaintingNewWalls();


	  }
		else{

		  $( ".feedback_span" ).text( "Try again" );
			$("#base_div").css({ "height":question_base_height +30 });
	
			mistakes_count++;

		if (mistakes_count>=5) {
			$("#instruction_div").fadeIn("slow");}
		}

	}

	else if (painting_round=="buildNewWindows"){
	//alert(new_peremeter_length_array[question_sequence]+" "+new_peremeter_height_array[question_sequence]);

	if ( $( "#userAnswerBox" ).val() == computePeremeter(new_peremeter_length_array[question_sequence],new_peremeter_height_array[question_sequence]).toString()) {

		$("#base_div").hide();
		runPaintingNewWindows();


	  }
		else{

		  $( ".feedback_span" ).text( "Try again" );
			$("#base_div").css({ "height":question_base_height +30 });
	
			mistakes_count++;

		if (mistakes_count>=5) {
			$("#instruction_div").fadeIn("slow");}
		}

	}



event.preventDefault();
});



function computeArea(length,height)
{
return length*height;
}

function computePeremeter(length,height)
{
return 2*(length+height);
}

function paintWindow(xpos,ypos,width,height){
	
      context.beginPath();
	
      context.rect(xpos,ypos,width,height);
      context.fillStyle = 'blue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'magenta';
      context.stroke();

}




function paintWalls(xpos,ypos,width,height,wallColor){ 
      context.beginPath();
      context.rect(xpos,ypos,width,height);
      context.fillStyle=wallColor;
      context.fill();
     
}

function createBaseRect(xpos,ypos,width,height,border_color){ 
      context.beginPath();
      context.rect(xpos,ypos,width,height);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = border_color;
      context.stroke();
}
///////////////////////////----------functions------------


function displayNewInformation(){


//alert("I am trying to display new information");
$( ".instruction_text" ).html("You have completed painting walls. Let's build windows now.");
	$("#instruction_div").fadeIn("slow");

	var r= $('<input type="button" id ="OK_button" value="OK">');
        $("#instruction_div").append(r);


	$(function(){
	    $('#OK_button').on('click',function(){
	       $("#instruction_div").fadeOut("slow");
		initializePaintingWindows();
		
	    });
	});
}




function displayInformationForNewBuildings(){
initializeBuildingNewBuildings();
/*

$( ".instruction_text" ).html("You have completed painting windows. You will be creating new buildings.");
	$("#instruction_div").fadeIn("slow");

	
	$(function(){
	    $('#OK_button').on('click',function(){
	       $("#instruction_div").fadeOut("slow");
		
		initializeBuildingNewBuildings();
		
	    });
	});
*/}

///initialize building new buildings
function initializeBuildingNewBuildings(){
	
	
	building_x=new_building_array[new_building_count][0];
	building_w=new_building_array [new_building_count][1];
	building_h=new_building_array [new_building_count][2];
	building_y=canvas_h-building_h-platform_h;
	createBaseRect(building_x,building_y,building_w,building_h);

	initializePaintingNewWalls();
	

}

///initialize painting walls
function initializePaintingWalls(){
	
	
	wall_x=building_base_arr[house_count][0];
	wall_y=canvas_h-building_base_arr[0][2]-platform_h;
	wall_width=building_base_arr[house_count][1];
	wall_height=wall_array[house_count][wall_count][0];

	question_base_x=wall_x-question_base_margin_left;
	question_base_y=wall_y-question_base_margin_top;


	question_base_height=wall_height+question_base_margin_top+question_base_margin_bottom+40;
	question_base_width=wall_width+ question_base_width_margin;
	
	$("#active_window").css({ "position": "absolute",  "left": question_base_margin_left, "top":question_base_margin_top, "width":wall_width-3, "height":wall_height});

	length_parameter_x=wall_width/2;
	length_parameter_y=5;

	height_parameter_x=wall_width+height_parameter_margin_left;
	height_parameter_y=wall_height/2+question_base_margin_top/2;
	

}

///initialize painting new_walls
function initializePaintingNewWalls(){
	
	house_count=0;wall_count=0;question_sequence=0;
	$("#userAnswerBox").val("");
	$("#userAnswerBox").focus();
	$("#areaPeremeter_span").html("Area:");
	wall_x=new_building_array[house_count][0];
	wall_y=canvas_h-new_building_array[0][2]-platform_h;
	wall_width=new_building_array[house_count][1];

	wall_height=new_wall_array[house_count][wall_count];

	question_base_x=wall_x-question_base_margin_left;
	question_base_y=wall_y-question_base_margin_top;


	question_base_height=wall_height+question_base_margin_top+question_base_margin_bottom+40;
	question_base_width=wall_width+ question_base_width_margin;

	$("#active_window").css({ "position": "absolute",  "left": question_base_margin_left, "top":question_base_margin_top, "width":wall_width, "height":wall_height});

	length_parameter_x=wall_width/2;
	length_parameter_y=5;

	height_parameter_x=wall_width+height_parameter_margin_left;
	height_parameter_y=wall_height/2+question_base_margin_top/2;

	$( ".length_span" ).html(new_length_array[question_sequence]);
	$( ".height_span" ).html(new_height_array[question_sequence]);

	$("#base_div").css({ "position": "relative",  "top": question_base_y, "left":question_base_x, "width":question_base_width, "height":question_base_height });
	$("#base_div").fadeIn("medium");

	form_div_x= height_parameter_x+form_div_margin_left;

	$( ".length_span" ).css({ "position": "absolute", "left": length_parameter_x, "top": length_parameter_y });
	$( ".height_span" ).css({ "position": "absolute",  "left": height_parameter_x, "top": height_parameter_y });
	$( "#form_div" ).css({ "position": "absolute",  "left": form_div_x, "top": length_parameter_y });

	

}

/////*********************run painting walls******************
function runPaintingWalls(){
	$("#areaPeremeter_span").html("Area:");
	
	
	paintWalls(wall_x,wall_y,wall_width,wall_height,building_wall_color[house_count]);

	wall_y+=wall_array[house_count][wall_count][0];
	

	wall_count++;
	
		//check if we reach to the end of house
		if (wall_count>=wall_array[house_count].length) {
		//alert(house_count);
		wall_x+=building_base_arr[house_count][1];

		house_count++;

		//*******check if we finished all houses *******
		if (house_count>=wall_array.length) {
		displayNewInformation();

		painting_round="paintWindows";
		
		wallPainting_done=true;
		
		} 

		else {

		wall_count=0;
		wall_x+=building_base_arr[house_count][0];
		wall_y=canvas_h-building_base_arr[house_count][2]-platform_h; }
		
		}
	if (wallPainting_done==false){
	wall_width=building_base_arr[house_count][1];
	wall_height=wall_array[house_count][wall_count][0];


	question_base_x=wall_x-question_base_margin_left;
	question_base_y=wall_y-question_base_margin_top;


	question_base_height=wall_height+question_base_margin_top+question_base_margin_bottom+40;
	question_base_width=wall_width+ question_base_width_margin;
	

	$("#active_window").css({ "position": "absolute",  "left": question_base_margin_left, "top":question_base_margin_top, "width":wall_width-3, "height":wall_height});

	length_parameter_x=wall_width/2;
	length_parameter_y=5;

	height_parameter_x=wall_width+height_parameter_margin_left;
	height_parameter_y=wall_height/2+question_base_margin_top/2;
	question_sequence++;
	generateQuestion(length_array[question_sequence],height_array[question_sequence]);
	}

	
	}

/////*********************run painting NEW walls******************
function runPaintingNewWalls(){
	
	
	paintWalls(wall_x,wall_y,wall_width,wall_height);

	
	
	wall_y+=new_wall_array[house_count][wall_count];
	
	
	wall_count++;
	
		//check if we reach to the end of house
		if (wall_count>=new_wall_array[house_count].length) {
		//alert(house_count);
		painting_round="buildNewWindows";
		initializePaintingNewWindows();
		
		} else{

	//wall_width=new_building_array[house_count][1];
	
	wall_height=new_wall_array[house_count][wall_count];

	
	question_base_x=wall_x-question_base_margin_left;
	question_base_y=wall_y-question_base_margin_top;


	question_base_height=wall_height+question_base_margin_top+question_base_margin_bottom+40;
	question_base_width=wall_width+ question_base_width_margin;
	

	$("#active_window").css({ "position": "absolute",  "left": question_base_margin_left, "top":question_base_margin_top, "width":wall_width, "height":wall_height});

	length_parameter_x=wall_width/2;
	length_parameter_y=5;

	height_parameter_x=wall_width+height_parameter_margin_left;
	height_parameter_y=wall_height/2+question_base_margin_top/2;
	
	question_sequence++;
	generateQuestion(new_length_array[question_sequence],new_height_array[question_sequence]);
	
	}
	
	}

//initialize painting windows
	function initializePaintingWindows(){
	//alert("it is turn for painting windows");
	house_count=0;wall_count=0;question_sequence=0;
	$("#userAnswerBox").val("");
	$("#userAnswerBox").focus();
	$("#areaPeremeter_span").html("Peremeter:");
	window_y=canvas_h-building_base_arr[0][2]-platform_h+window_v_space;
	window_x=building_base_arr[house_count][0]+window_h_space+window_array[house_count][window_count][0]; 
	window_y=window_y+window_v_space+window_array[house_count][window_count][1];

	question_base_y=window_y-question_base_margin_top;
	question_base_x=window_x-question_base_margin_left;

	question_base_height=window_array[house_count][window_count][3]+question_base_margin_top+question_base_margin_bottom;
	question_base_width=window_array[house_count][window_count][2]+ question_base_width_margin;

	$("#active_window").css({ "position": "absolute",  "left": question_base_margin_left, "top":question_base_margin_top, "width":window_array[house_count][window_count][2], "height":window_array[house_count][window_count][3], "background": "#f1ebff", "border":"3px solid #7355cb"});

	length_parameter_x=window_array[house_count][window_count][2]/2;
	length_parameter_y=5;

	height_parameter_x=window_array[house_count][window_count][2]+height_parameter_margin_left;
	height_parameter_y=window_array[house_count][window_count][3]/2+question_base_margin_top/2;
	
	$( ".length_span" ).html(peremeter_length_array[question_sequence]);
	$( ".height_span" ).html(peremeter_height_array[question_sequence]);

	$("#base_div").css({ "position": "relative",  "top": question_base_y, "left":question_base_x, "width":question_base_width, "height":question_base_height });
	$("#base_div").fadeIn("medium");

	form_div_x= height_parameter_x+form_div_margin_left;

	$( ".length_span" ).css({ "position": "absolute", "left": length_parameter_x, "top": length_parameter_y });
	$( ".height_span" ).css({ "position": "absolute",  "left": height_parameter_x, "top": height_parameter_y });
	$( "#form_div" ).css({ "position": "absolute",  "left": form_div_x, "top": length_parameter_y });

	$("#userAnswerBox").focus();
	//paintWindow(window_x,window_y,window_array[house_count][window_count][2],window_array[house_count][window_count][3]);
	}

//initialize painting New windows
	function initializePaintingNewWindows(){
	windowPainting_done=false;
	window_count=0; question_sequence=0;
	$("#userAnswerBox").val("");
	$("#userAnswerBox").focus();
	$("#areaPeremeter_span").html("Peremeter:");
	
	window_y=canvas_h-new_building_array[house_count][2]-platform_h+window_v_space;
	
	window_x=new_building_array[house_count][0]+window_h_space+new_window_array[house_count][window_count][0]; 
	window_y=window_y+window_v_space+new_window_array[house_count][window_count][1];

	question_base_y=window_y-question_base_margin_top;
	question_base_x=window_x-question_base_margin_left;

	question_base_height=window_array[house_count][window_count][3]+question_base_margin_top+question_base_margin_bottom;
	question_base_width=window_array[house_count][window_count][2]+ question_base_width_margin;

	$("#active_window").css({ "position": "absolute",  "left": question_base_margin_left, "top":question_base_margin_top, "width":window_array[house_count][window_count][2], "height":window_array[house_count][window_count][3]});

	length_parameter_x=new_window_array[house_count][window_count][2]/2;
	length_parameter_y=5;

	height_parameter_x=new_window_array[house_count][window_count][2]+height_parameter_margin_left;
	height_parameter_y=new_window_array[house_count][window_count][3]/2+question_base_margin_top/2;
	
	$( ".length_span" ).html(new_peremeter_length_array[question_sequence]);
	$( ".height_span" ).html(new_peremeter_height_array[question_sequence]);

	$("#base_div").css({ "position": "relative",  "top": question_base_y, "left":question_base_x, "width":question_base_width, "height":question_base_height });
	$("#base_div").fadeIn("medium");

	form_div_x= height_parameter_x+form_div_margin_left;

	$( ".length_span" ).css({ "position": "absolute", "left": length_parameter_x, "top": length_parameter_y });
	$( ".height_span" ).css({ "position": "absolute",  "left": height_parameter_x, "top": height_parameter_y });
	$( "#form_div" ).css({ "position": "absolute",  "left": form_div_x, "top": length_parameter_y });

	$("#userAnswerBox").focus();
	
	
	}

////run painting windows
	function runPaintingWindows(){

	paintWindow(window_x,window_y,window_array[house_count][window_count][2],window_array[house_count][window_count][3]);
	window_y+=window_array[house_count][window_count][3]+window_v_space+window_array[house_count][window_count][1];
	window_count++;
	

	//check if we reach to the last window of the house
	if (window_count>=window_array[house_count].length) {

	window_x+=building_base_arr[house_count][1]; 

	house_count++;


	//*******check if we finished all houses *******
		if (house_count>=wall_array.length) {
		displayInformationForNewBuildings();

		painting_round="buildNewWalls";
		
		windowPainting_done=true;
		
		} 

		else {

	window_count=0;
	window_x+=building_base_arr[house_count][0]+window_array[house_count][window_count][0];
	window_y=canvas_h-building_base_arr[house_count][2]-platform_h+window_v_space; }
		

	 }
		
	if (windowPainting_done==false){
	question_base_y=window_y-question_base_margin_top;
	question_base_x=window_x-5;
	
	question_base_height=window_array[house_count][window_count][3]+question_base_margin_top+question_base_margin_bottom;
	question_base_width=window_array[house_count][window_count][2]+ question_base_width_margin;

	min_question_base_height= window_array[house_count][window_count][3] +question_base_margin_top+question_base_margin_bottom;
	
	
	$("#active_window").css({ "position": "absolute",  "left": question_base_margin_left, "top":question_base_margin_top, "width":window_array[house_count][window_count][2], "height":window_array[house_count][window_count][3]});


	length_parameter_x=window_array[house_count][window_count][2]/2;
	length_parameter_y=5;

	height_parameter_x=window_array[house_count][window_count][2]+height_parameter_margin_left;
	height_parameter_y=window_array[house_count][window_count][3]/2+question_base_margin_top/2;

	question_sequence++;
	generateQuestion(peremeter_length_array[question_sequence],peremeter_height_array[question_sequence]);
	}

	}
////run painting new windows
	function runPaintingNewWindows(){
	//alert("going to paint new window");
	paintWindow(window_x,window_y,window_array[house_count][window_count][2],window_array[house_count][window_count][3]);
	window_y+=window_array[house_count][window_count][3]+window_v_space+window_array[house_count][window_count][1];
	window_count++;
	

	//check if we reach to the last window of the house
	if (window_count>=new_window_array[house_count].length) {

	window_x+=new_building_array[house_count][1]; 

	house_count++;


	//*******check if we finished all houses *******
		if (house_count>=new_wall_array.length) {
		displayInformationForNewBuildings();

		windowPainting_done=true;
		
		} 

		else {

	window_count=0;
	window_x+=building_base_arr[house_count][0]+window_array[house_count][window_count][0];
	window_y=canvas_h-building_base_arr[house_count][2]-platform_h+window_v_space; }
		

	 }
	
		
	if (windowPainting_done==false){
	
	question_base_y=window_y-question_base_margin_top;
	question_base_x=window_x-5;
	
	question_base_height=new_window_array[house_count][window_count][3]+question_base_margin_top+question_base_margin_bottom;
	question_base_width=new_window_array[house_count][window_count][2]+ question_base_width_margin;
	
	min_question_base_height= new_window_array[house_count][window_count][3] +question_base_margin_top+question_base_margin_bottom;
	
	
	$("#active_window").css({ "position": "absolute",  "left": question_base_margin_left, "top":question_base_margin_top, "width":new_window_array[house_count][window_count][2], "height":new_window_array[house_count][window_count][3]});
	
	

	length_parameter_x=new_window_array[house_count][window_count][2]/2;
	length_parameter_y=5;
	
	height_parameter_x=new_window_array[house_count][window_count][2]+height_parameter_margin_left;
	
	height_parameter_y=new_window_array[house_count][window_count][3]/2+question_base_margin_top/2;
	
	question_sequence++;
	generateQuestion(new_peremeter_length_array[question_sequence],new_peremeter_height_array[question_sequence]);
	}

	}

/////**********generate new question****************
	function generateQuestion(length_holder,height_holder){
	
	//alert(question_sequence);
	$( ".length_span" ).html(length_holder);
	$( ".height_span" ).html(height_holder);

	$("#base_div").css({ "position": "relative",  "top": question_base_y, "left":question_base_x, "width":question_base_width, "height":question_base_height });
	
	
	form_div_x= height_parameter_x+form_div_margin_left;

	$( ".length_span" ).css({  "left": length_parameter_x, "top": length_parameter_y });
	$( ".height_span" ).css({   "left": height_parameter_x, "top": height_parameter_y });

	$( "#form_div" ).css({ "position": "absolute",  "left": form_div_x, "top": length_parameter_y });
	$("#base_div").fadeIn("slow");
	
    	$("#userAnswerBox").val("");
	$("#userAnswerBox").focus();
}



