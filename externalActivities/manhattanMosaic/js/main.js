
var numerator=1;
var denominator=4;
var circleRadius=140;
var pieAnswer;

var numeratorTurnBoolean=true;


function computeFraction(length,height)
{
return length*height;
}

function computeperimeter(length,height)
{
return 2*(length+height);
}



function displayNewInformation(){
$("#base_div_london").hide();

$( ".instruction_text" ).html("Congratulations!!<br/>You have completed painting walls. <br/>Let's build windows now by solving perimeter problems.<br/><br/>");
	$("#instruction_div").fadeIn("slow");

	var r= $('<input type="button" id ="OK_button" value="OK">');
	if ($("#instruction_div").children("#OK_button").length == 0) {
	$("#instruction_div").append(r);	
	}


	$(function(){
	    $('#OK_button').on('click',function(){
	       $("#instruction_div").fadeOut("slow");
		initializePaintingWindows();
		
	    });
	});
}


/////**********generate new question****************
	

$(function(){
	
		$('.boom').hide();
	
		$('#pie_timer').pietimer({
			seconds: 300,
			color: 'rgba(0, 155, 223, 0.5)',
			height: 58,
			width: 58,
			is_reversed: true
		},
		function(){
			timeOverInformation();
		});
		
		$('a#start').click(function(){
			$('.boom').hide();
			$('#pie_timer').pietimer('start');
			return false;
		});
		
		
	});


function giveIntro(){
startMosaic();

}

function dealWithMisses(){


			$("#base_div_london").shake();
			if ($( "#userAnswerBox_fraction" ).val() !=lastWrongInput && $( "#userAnswerBox_fraction" ).val()!=""){
			misses_count++;
			
			$("#misses_count").html(misses_count);
			lastWrongInput=$( "#userAnswerBox_fraction" ).val();}

		if (misses_count>=5) {
		

	var r= $('<input type="button" id ="OK_button" value="OK">');
	if ($("#instruction_div").children("#OK_button").length == 0) {
	$("#instruction_div").append(r);	
	}

		$( ".instruction_text" ).html("You have made five mistakes. <br/> Now, you need to go back to the tutor to work on the problems.<br/>You can come back to Mosaic after you have worked on the tutor.<br/><br/>");
	$("#instruction_div").fadeIn("slow");

		$("#OK_button").unbind();
	    $( "#OK_button" ).click(function() {
		
	       $("#instruction_div").fadeOut("slow");
		
		
		
	   });}
		
}

(function ($) {
    $.fn.shake = function (options) {
	

        // defaults
        var settings = {
            'shakes': 2,
            'distance': 10,
            'duration': 400
        };
        // merge options
        if (options) {
            $.extend(settings, options);
        }
        // make it so
        var pos, leftpos, leftshake, rightshake;

        return this.each(function () {
	
            $this = $(this);
            // position if necessary
            pos = $this.css('position');
		leftpos=$this.position().left;

		
		leftshake=leftpos+settings.distance * -1;
		rightshake=leftpos+settings.distance;
		
		
		
            if (!pos || pos === 'static') {
                $this.css('position', 'relative');
            }
            // shake it
            for (var x = 1; x <= settings.shakes; x++) {
		
                $this.animate({ left: leftshake }, (settings.duration / settings.shakes) / 4)
                    .animate({ left: rightshake}, (settings.duration / settings.shakes) / 2)
                    .animate({ left: leftpos  }, (settings.duration / settings.shakes) / 4);
            }
        });
    };
}(jQuery));


///////////////////// building outlines


//build outline for buildings


function createBuildingOutline(building_array){
building_x=building_x+building_w+building_array[0];
building_w=building_array[1];
building_h=building_array[2];
building_y=canvas_h-building_h-platform_h;
createBaseRect(building_x,building_y,building_w,building_h,"#86b2c4",context);
createFractionsBase(building_x,building_y,building_w,building_h,"#86b2c4", context);

}

function createBaseRect(xpos,ypos,width,height,border_color,context){ 
	
      context.beginPath();
      context.rect(xpos,ypos,width,height);
      context.fillStyle = "rgba(255, 255, 255, 0.5)";
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = border_color;
      context.stroke();
	context.globalAlpha = 1;
}

function createBaseRect_alpha(xpos,ypos,width,height,context){ 
	
      context.beginPath();
      context.rect(xpos,ypos,width,height);
      context.fillStyle = "rgba(255, 255, 255, 0.3)";
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = "rgba(106, 85, 156, 0.3)";
      context.stroke();
	
}


function drawCircle_base(centerx,centery,circleRadius, canvas_v){

	canvas_v.beginPath();
	canvas_v.fillStyle = "rgba(255, 255, 255, 0.3)";

	
    canvas_v.moveTo(centerx,centery);

canvas_v.beginPath();
canvas_v.arc(centerx,centery,circleRadius/2-4,0,2*Math.PI);

   
       canvas_v.strokeStyle = "rgba(106, 85, 156, 0.3)";
canvas_v.lineWidth = 2;
	canvas_v.stroke();
    canvas_v.fill();
    canvas_v.closePath();		
   
}

function createFractionsBase(xpos,ypos,width,height,border_color,context){ 

      context.beginPath();
	var section_height=height/5;

	for (var x=0; x<5;x++){

      context.moveTo(xpos, ypos+section_height);

      context.lineTo(xpos+width, ypos+section_height);
     context.lineWidth = 2;

      context.strokeStyle = border_color;

      context.stroke();

	section_height+=height/5

	}
	context.globalAlpha = 1;
}




///////timer functions

function displayTimerInformation(){

$("#instruction_div").css({ "left": 160, "top":70, "width":400, "height":200});

$( ".instruction_text" ).html("You have 5 minutes to build new building. <br/>After the 5 minutes is over, your mosaic will be complete.<br/><br/>");
	$("#instruction_div").fadeIn("slow");
	$("#pie_timer_div").show();
	$("#OK_button").unbind();
	
	
	$( "#OK_button" ).click(function() {
	       $("#instruction_div").fadeOut("slow");
		
		$('#pie_timer').pietimer('start');
		house_count=0; question_sequence=0; platform_h=10;
		initializeBuildingNewBuildings();
		
	    });
	
}


function displayInformationForCompletion(){
$("#base_div_london").hide();

$("#instruction_div").css({ "left": 280, "top":80, "width":400, "height":200});
$("#OK_button").unbind();
$( ".instruction_text" ).html("You have complete this Mosaic. <br/> Congratulations !!! <br/><br/>");
	$("#instruction_div").fadeIn("slow");

	
	$( "#OK_button" ).click(function() {
	       $("#instruction_div").fadeOut("slow");
		
	    });
	
}



function displayInformationForNewBuildings(){
$("#base_div_london").hide();
$( ".instruction_text" ).html("You have completed painting windows as well.<br/> Your next challenge will be against time. <br/>You will be creating new buildings.<br/><br/>");
	$("#instruction_div").fadeIn("slow");

		$("#OK_button").unbind();
	    $( "#OK_button" ).click(function() {
		
	       $("#instruction_div").fadeOut("slow");
		
		displayTimerInformation();
		
	   });

}

///////////////////////


function animatePoint(func){
$( "#pointsFadeOutUp" ).animate({opacity: .5 }, 100 )
.animate({opacity: .6,"top": "-=70px" }, 200 )
.animate({opacity: 0,"top": "-=40px" }, 100 )
 .animate({
     
	"top": "+=110px"
    
  }, 10, function() {
    	point_count+=10;
	$("#point_count").html(point_count);
	func();
  });

}





///////timer functions

function displayTimerInformation(){

$("#instruction_div").css({ "left": 160, "top":70, "width":400, "height":200});

$( ".instruction_text" ).html("You have 5 minutes to build new building. <br/>After the 5 minutes is over, your mosaic will be complete.<br/><br/>");
	$("#instruction_div").fadeIn("slow");
	$("#pie_timer_div").show();
	$("#OK_button").unbind();
	
	
	$( "#OK_button" ).click(function() {
	       $("#instruction_div").fadeOut("slow");
		
		$('#pie_timer').pietimer('start');
		house_count=0; question_sequence=0; platform_h=10;
		initializeBuildingNewBuildings();
		
	    });
	
}

function timeOverInformation(){
$("#base_div_london").hide();

$("#instruction_div").css({ "left": 280, "top":80, "width":400, "height":200});
$("#OK_button").unbind();
$( ".instruction_text" ).html("Your time is over ! <br/><br/>");
	$("#instruction_div").fadeIn("slow");

	
	$( "#OK_button" ).click(function() {
	       $("#instruction_div").fadeOut("slow");
		
	    });
	
}

function displayInformationForCompletion(){
$("#base_div_london").hide();

$("#instruction_div").css({ "left": 280, "top":80, "width":400, "height":200});
$("#OK_button").unbind();
$( ".instruction_text" ).html("You have complete this Mosaic. <br/> Congratulations !!! <br/><br/>");
	$("#instruction_div").fadeIn("slow");

	
	$( "#OK_button" ).click(function() {
	       $("#instruction_div").fadeOut("slow");
		
	    });
	
}

function displayNewInformation(){
$("#base_div_london").hide();

$( ".instruction_text" ).html("Congratulations!!<br/>You have completed painting walls. <br/>Let's build windows now by solving perimeter problems.<br/><br/>");
	$("#instruction_div").fadeIn("slow");

	var r= $('<input type="button" id ="OK_button" value="OK">');
	if ($("#instruction_div").children("#OK_button").length == 0) {
	$("#instruction_div").append(r);	
	}


	$(function(){
	    $('#OK_button').on('click',function(){
	       $("#instruction_div").fadeOut("slow");
		initializePaintingWindows();
		
	    });
	});
}




function displayInformationForNewBuildings(){
$("#base_div_london").hide();
$( ".instruction_text" ).html("You have completed painting windows as well.<br/> Your next challenge will be against time. <br/>You will be creating new buildings.<br/><br/>");
	$("#instruction_div").fadeIn("slow");

		$("#OK_button").unbind();
	    $( "#OK_button" ).click(function() {
		
	       $("#instruction_div").fadeOut("slow");
		
		displayTimerInformation();
		
	   });

}


function swapPositions(){
	
var position_first_top = $('#num_denum_div').position().top;
var position_first_left = $('#num_denum_div').position().left;
var position_second = $('#answerBox_div').position();

$("#num_denum_div").css({ "top": position_second.top, "left": position_second.left });
$("#answerBox_div").css({ "top": position_first_top, "left": position_first_left});

if (numeratorTurnBoolean==true){ $("#num_denum_div").removeClass( "denominatorNow" ); $("#num_denum_div").addClass( "numeratorNow" ); }
else {  $("#num_denum_div").removeClass( "numeratorNow" ); $("#num_denum_div").addClass( "denominatorNow" );}
numeratorTurnBoolean = !numeratorTurnBoolean;

	
	}









