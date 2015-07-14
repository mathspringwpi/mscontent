//***********initialize painting walls *********//



function initializePaintingWalls(){


	//draw Big Ben frame
	building_x=Big_Ben[0];
	building_w=Big_Ben[1];
	building_h=Big_Ben[2];
	building_y=canvas_h-building_h-platform_h;
	createBaseRect(building_x,building_y,building_w,building_h,"#ceaf30",context);
	createFractionsBase(building_x,building_y,building_w,building_h,"#ceaf30");


	wall_x=Big_Ben[0];
	wall_y=building_y;
	
	wall_width=Big_Ben[1];
	wall_height=fraction_height;
	question_base_x=wall_x+wall_width+question_base_margin_left;

	question_base_y=wall_y-question_base_margin_top;

	question_base_height=wall_height+question_base_margin_top+question_base_margin_bottom;

	if (question_base_height<question_base_min_height) question_base_height=question_base_min_height;

	question_base_width=wall_width+ question_base_width_margin;

	$("#active_window").css({ "position": "relative",  "left": wall_x, "top":wall_y, "width":wall_width-3, "height":wall_height});

	
	$("#base_div_london").css({ "position": "relative",  "top": wall_y-wall_height, "left":question_base_x, "width":question_base_width, "height":question_base_height });


	$("#base_div_london").fadeIn("medium");


	
}

function createFractionsBase(xpos,ypos,width,height,border_color){ 
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







/////*********************run painting walls******************

function runPaintingWalls(){ 

	
	$("#base_div_london").hide();
	
	
	
	paintWalls(wall_x,wall_y,wall_width-1,wall_height,building_wall_color[house_count]);

	wall_y+=fraction_height;
	

	wall_count++;
	
		//check if we reach to the end of house
		if (wall_count>=5) {
		
		wallPainting_done=true;
		house_count++;
		painting_round="paintPies"
		generate_bigben();
		
	
		}
	if (wallPainting_done==false){
	wall_width=building_base_arr[house_count][1];
	wall_height=wall_array[house_count][wall_count];


	question_base_x=wall_x+wall_width+question_base_margin_left;
	question_base_y=wall_y+question_base_margin_top;


	question_base_height=wall_height+question_base_margin_top+question_base_margin_bottom;
	
	question_base_width=wall_width+ question_base_width_margin;
	

	$("#active_window").css({  "top":wall_y});

	
	question_sequence++;
	generateQuestion(length_array[question_sequence],height_array[question_sequence]);
	}



	}



function paintWalls(xpos,ypos,width,height,wallColor){ 
	
      context.beginPath();
	
      context.rect(xpos,ypos,width,height);
	
       


	var image = new Image();

	image.src = "img/yellowTile4.jpg";
    context.fillStyle = context.createPattern(image, "repeat-y");
    context.fill();





      context.lineWidth = 2;
      context.strokeStyle = wallColor;
      context.stroke();
     
     
}


function generateQuestion(){

	$("#base_div_london").css({  "top": question_base_y-wall_height});

	$("#base_div_london").fadeIn("slow");

	$("#userAnswerBox_fraction").val("");

	$("#userAnswerBox_fraction").focus();

}

//***********Pie round starts *********//

var runPaintingPies_round=1;


function runPaintingPies(){
	
	
	$("#base_div_london").hide();
	if (numerator>denominator) {numerator=1;runPaintingPies_round++; }
	
	if (runPaintingPies_round==1) {denominator=4;}
	else if (runPaintingPies_round==2) {denominator=6;}
	else if (runPaintingPies_round==3) {denominator=2;}

	
	drawPie(numerator,denominator, circleRadius,ctx);
	 pieAnswer=numerator;
	
	if (runPaintingPies_round<=3){

	
	numerator++;
	
	$( "#num_denum_div" ).html(denominator);

	generatePieQuestion();
	}

	else if (runPaintingPies_round>3){
	runPaintingPies_2(); 
	swapPositions();
	numerator=1; denominator=2;
	}
	}



var pie_num_array=[1,2,1,2,1,1,1];
var pie_denum_array=[3,3,4,4,6,9,12];
var runPaintingPies_2_counter=0;


function runPaintingPies_2(){
	
	$("#base_div_london").hide();
	painting_round="paintPies_2";
	
	
	pie_num_array=	[1,2,1,2,1,1,1,1];
	pie_denum_array=[2,2,3,3,4,6,9,12];
	
	numerator=pie_num_array[runPaintingPies_2_counter];
	
	denominator=pie_denum_array[runPaintingPies_2_counter];
	
	drawPie(numerator,denominator, circleRadius,ctx);
	pieAnswer=denominator;
	
	if (runPaintingPies_2_counter<pie_num_array.length){

	
	runPaintingPies_2_counter++;
	
	$( "#num_denum_div" ).html(numerator);

	generatePieQuestion();
	}

	else {
	painting_round="paintPies_3";
	
	pie_num_array=	[1,2,3,6,9,12];
	pie_denum_array=[12,12,12,12,12,12];
	runPaintingPies_3(); 
	
	swapPositions();
	
	}
	}


var runPaintingPies_3_counter=0;

function runPaintingPies_3(){
	$("#base_div_london").hide();
	
	numerator=pie_num_array[runPaintingPies_3_counter];
	denominator=pie_denum_array[runPaintingPies_3_counter];

	drawPie(numerator,denominator, circleRadius,ctx);
	pieAnswer=numerator;
	
	if (runPaintingPies_3_counter<pie_num_array.length){

	
	runPaintingPies_3_counter++;
	
	$( "#num_denum_div" ).html(denominator);
	generatePieQuestion();

	

	
	}

	else {
		
	
	$( "#floating_canvas_div" ).animate({
    	transform: 'scale(.4,.4) translateX(-520px) translateY(-70px)'
    	}, 1500 );
	
	drawPie(0,12, circleRadius,ctx);
	setTimeout(function() { initialize_three_triangles(); }, 2000);
	}
	}



function generatePieQuestion(){


	$("#base_div_london").css({  "top": 80});
	$("#base_div_london").css({  "left": 260+circleRadius});

	$("#base_div_london").fadeIn("medium");
   	$("#userAnswerBox_fraction").val("");
	$("#userAnswerBox_fraction").focus();

}



function drawPie(num, denum,circleRadius, canvas_v){


var sectorSize=100/denum;
var baseColor='white';
var pieColor='#E20044';
var strokeColor="#333333";
if (painting_round=="paintLondonEye") {pieColor='#a29cd1'; strokeColor="#7e8cba";}

var colist = new Array();
for (var d=0; d<denum; d++){
if (d<num) colist.push(pieColor); 
else colist.push(baseColor); 
}

	var w=circleRadius;var h=circleRadius;
		var radius = h / 2 - 5;

  var centerx = w / 2;
  var centery = h / 2;
	
	if (painting_round=="paintLondonEye") {centerx+=10;centery+=6;}
  var total = 0;
  for(x=0; x < denum; x++) { total += sectorSize; }; 
  var lastend=0;
  var offset = Math.PI / 2;

  for(x=0; x < denum; x++)
  {
    var thispart = sectorSize; 
    canvas_v.beginPath();
    canvas_v.fillStyle = colist[x];

	
    canvas_v.moveTo(centerx,centery);
    var arcsector = Math.PI * (2 * thispart / total);
    canvas_v.arc(centerx, centery, radius, lastend - offset, lastend + arcsector - offset, false);
    canvas_v.lineTo(centerx, centery);
	 canvas_v.lineWidth = 2;
      canvas_v.strokeStyle = strokeColor;
	canvas_v.stroke();
    canvas_v.fill();
    canvas_v.closePath();		
    lastend += arcsector;	
  }
}


function animatePie(num, denum,circleRadius, canvas_v){



var lineColor='#e00058';

var w=circleRadius;
var h=circleRadius;
var radius = h / 2 - 5;

  var centerx = w / 2+10;
  var centery = h / 2+6;
 

var angle_temp;
var iteration=0;
var step_x=[];
var step_y=[];


canvas_v.moveTo(centerx,centery);

for (var i=0; i<denum; i++)
    { 
        angle_temp=(360/denum)*i-45-90;
	
	step_x.push(getSteps(angle_temp).x);
	step_y.push(getSteps(angle_temp).y);
    
    }
   


function loop() {
    
   var x,y;
    
 for (var j=0; j<denum; j++)
    {   
        
         x = iteration * step_x[j],
        y = iteration * step_y[j];
	  canvas_v.fillStyle=lineColor;
    canvas_v.fillRect(centerx + x, centery + y, 2, 2);
    }

    iteration +=2;
    
    if (iteration < radius) requestAnimationFrame(loop);
        else {return;};
}
requestAnimationFrame(loop);

function getSteps(angle) {

    var radian_angle=angle * Math.PI / 180;
        var cos = Math.cos(radian_angle),
            sin = Math.sin(radian_angle);

        return {
            x: cos - sin,
            y: sin + cos
        }
    }




}

//////////////////PIE FINISHED TRAINGLES START /////////////////

var runTriangles_counter=0;

function initialize_three_triangles(){

	

	numerator=1;
	denominator=3;
	$("#base_div_london").css({  "top": 10});
	$("#base_div_london").css({  "left": 280});

	drawThreeTriangles('yellow', 'white', 'white');
	alert(runTriangles_counter);
	$( "#floating_canvas_div2" ).animate({
    	transform: 'scale(.8,.8) '
    	}, 1500 );

	
	
	setTimeout(function() { runThree_triangles(); }, 2000);
	
	}






function drawThreeTriangles(color1, color2, color3){
alert("drawThreeTriangles");
ctx2.clearRect ( 0 , 0 , canvas3.width, canvas3.height );


	var image = new Image();

	image.src = "img/blueTile.jpg";

	 ctx2.beginPath();
   
   
   if (color1=='yellow'){
	ctx2.fillStyle = '#645886';

    ctx2.fillStyle = ctx2.createPattern(image, "repeat-y");

    }

	else ctx2.fillStyle = color1;
	
	ctx2.lineWidth=2;    

	
    ctx2.moveTo(100,0);
    ctx2.lineTo(150,100);
    ctx2.lineTo(50,100);
    ctx2.fill();
	ctx2.closePath();
	ctx2.stroke();

ctx2.beginPath();
 if (color2=='yellow'){

   
   
    ctx2.fillStyle = ctx2.createPattern(image, "repeat-y");
   }
	else ctx2.fillStyle = color2;
	
ctx2.moveTo(100,0);
    ctx2.lineTo(0,0);
    ctx2.lineTo(50,100);
    ctx2.fill();
	ctx2.closePath();
	ctx2.stroke();

ctx2.beginPath();
 if (color3=='yellow'){
 
    ctx2.fillStyle = ctx2.createPattern(image, "repeat-y");
    }
	else ctx2.fillStyle = color3;
ctx2.moveTo(100,0);
    ctx2.lineTo(200,0);
    ctx2.lineTo(150,100);
    ctx2.fill();
	ctx2.closePath();
	ctx2.stroke();
}





var triangles_num_array=[1,1,1,2,1];


function runThree_triangles(){

	if (runTriangles_counter==1) drawThreeTriangles('white', 'yellow', 'white');
	if (runTriangles_counter==2) drawThreeTriangles('white', 'white', 'yellow');
	if (runTriangles_counter==3) drawThreeTriangles('white', 'yellow', 'yellow');
	if (runTriangles_counter==4) drawThreeTriangles('yellow', 'white', 'white');

	
	painting_round="paintThree_trianles";
	
	numerator=triangles_num_array[runTriangles_counter];
	
	
	pieAnswer=numerator;
	
	if (runTriangles_counter<triangles_num_array.length){

	
	runTriangles_counter++;
	
	$( "#num_denum_div" ).html(denominator);
	$("#base_div_london").hide();
	generate_three_triangles_Question(); 
	}

	else {

	$("#base_div_london").fadeOut("slow");
	
	setTimeout(function() { drop_roof(); }, 2000);

	
	}

}


function generate_three_triangles_Question(){

	$("#base_div_london").fadeIn("slow");

    	$("#userAnswerBox_fraction").val("");

	$("#userAnswerBox_fraction").focus();

}


function drop_roof(){
	ctx2.clearRect ( 0 , 0 , canvas3.width, canvas3.height );
	ctx2.beginPath();

	var image = new Image();

	image.src = "img/blueTile.jpg";

    	 ctx2.moveTo(100,0);
    	ctx2.lineTo(150,100);
    	ctx2.lineTo(50,100);

	ctx2.fillStyle = ctx2.createPattern(image, "repeat-x");
    	ctx2.fill();


	ctx2.closePath();
	ctx2.stroke();

	$( "#floating_canvas_div2" ).animate({
    	transform: 'scale(.8,.7) translateY(50px) translateX(0px)'
    	}, 500 );

	setTimeout(function() { initialize_LondonBridge(); }, 2000);
	
	}


///////////////////////////// ANIMATING IMAGES





function generate_bigben(){

var clipping_height=0;
var bigben_width, bigben_height;

var bigben_x=building_base_arr[0][0]-4;
var bigben_y=canvas_h-building_h-platform_h;

var bigben_img = document.createElement("img");
bigben_img.src = "img/bigben.png";
bigben_img.id ="bigben";
document.getElementById('floating_canvas_div').appendChild(bigben_img);


bigben_img.onload=function(){
	bigben_width = this.width;
	bigben_height=this.height;
	
	animate_bigben(); }



$("#bigben").hide();


function animate_bigben(){
	requestAnimationFrame(animate);}

function draw_bigben(){
	
  
    context_sketch.save();
   context_sketch.beginPath();
    context_sketch.rect(bigben_x,bigben_y+bigben_height,bigben_width,clipping_height);
	
    context_sketch.clip();
    context_sketch.drawImage(bigben_img,bigben_x,bigben_y);
    context_sketch.restore();
}

function animate(time){
	
    if(clipping_height<=-bigben_height){ setTimeout(function() { 
//runPaintingPies();
initialize_three_triangles(); }, 1000);
	return;}
    requestAnimationFrame(animate);
   
    clipping_height-=2;
    draw_bigben();
}


}

//******************************* LONDON BRIDGE START *******************************//

var londonBridgeCounter=0;
var londonBridgeAnswer;
//london bridge array
var London_bridge_1 = [1,310,50,180];
var London_bridge_2 = [2,560,50,180];

var lb_fraction_array_num_1=	[2,1,2,1,2,1,3,2,2,4,2];
var lb_fraction_array_denum_1=	[4,2,6,2,3,3,4,3,3,4,2];
var lb_fraction_array_num_2=	[1,2,1,4,6,3,6,10,8,2,1];
var lb_fraction_array_denum_2=	[2,4,3,8,9,9,8,15,12,2,1];


function initialize_LondonBridge(){
	painting_round="drawLondonBridge";

	platform_h+=20; question_base_margin_left=10; question_base_margin_top=10; question_base_margin_bottom=10;

	

	wall_x=London_bridge_1[1];
	wall_y=canvas_h-London_bridge_1[3]-platform_h;

	question_base_x=wall_x+London_bridge_1[2]+ question_base_margin_left;
	
	question_base_y=wall_y-question_base_margin_top;

	question_base_height= London_bridge_1[3]- question_base_margin_bottom;
	question_base_width=London_bridge_2[1]-London_bridge_1[1]-London_bridge_1[2]-20;
	var wall_y_temp=wall_y-60;
$("#base_div_london").css({ "position": "relative",  "top": wall_y_temp, "left":question_base_x, "width":question_base_width, "height":question_base_height ,"padding-top": '0px',});


$("#Fraction_span").html("Equivalent Fractions");


$(".form_left").css({  "position": "absolute","visibility":'visible',"top": '60px' });
$(".form_right").css({  "top": '40px' });

$(".form_bottom").css({ "position": "absolute", "top": '130px',  "left":'-30px' });
$("#num_denum_div").addClass( "denominatorNow" );

$("#base_div_london").fadeIn("slow");

run_london_bridge();


}



function generate_London_bridge_question(){
	
	$(".num_left").html(lb_fraction_array_num_1[londonBridgeCounter]);
	$(".denum_left").html(lb_fraction_array_denum_1[londonBridgeCounter]);
	$("#num_denum_div").html(lb_fraction_array_denum_2[londonBridgeCounter]);
	londonBridgeAnswer=lb_fraction_array_num_2[londonBridgeCounter];
	$("#userAnswerBox_fraction").val("");
	$("#userAnswerBox_fraction").focus();

	

}

function run_london_bridge(){
	
	if (londonBridgeCounter>=lb_fraction_array_num_1.length) {
	
	$("#base_div_london").fadeOut();
	
	generate_towerBridgeSketch(); //draw london bridge sketch
	}
	else{
	create_london_bridge();
	generate_London_bridge_question();
	londonBridgeCounter++;
	}
	
}

function create_london_bridge(){

	

	createBuilding_w_fractions(London_bridge_1); 
	createBuilding_w_fractions(London_bridge_2);
}



function createBuilding_w_fractions(building_array){

building_x=building_array[1];
building_w=building_array[2];
building_h=building_array[3];
building_y=canvas_h-building_h-platform_h;

context.clearRect ( building_x,building_y,building_w,building_h );
createBaseRect(building_x,building_y,building_w,building_h,"#7e51a5",context);

var building=building_array[0];
var numerator, denumerator;



if (building==1){ numerator=lb_fraction_array_num_1[londonBridgeCounter]; denumerator= lb_fraction_array_denum_1[londonBridgeCounter];}
if (building==2){ numerator=lb_fraction_array_num_2[londonBridgeCounter]; denumerator= lb_fraction_array_denum_2[londonBridgeCounter];}


createBuildingFractions(building_x,building_y,building_w,building_h,numerator,denumerator, context);
}


function createBuildingFractions(xpos,ypos,width,height,num,denum,context){ 


      context.beginPath();
	var section_height=height/denum;

	var first_x, first_y;

	first_x=xpos;
	first_y=ypos;

	for (var x=0; x<denum;x++){

      context.moveTo(xpos, ypos+section_height);

      context.lineTo(xpos+width, ypos+section_height);
     context.lineWidth = 2;

      context.strokeStyle = "#7e51a5";
	if (x<num){
	 context.fillStyle = "rgba(19,92,182, 0.7)";
	context.fillRect(first_x, first_y,width,height/denum);
	}
	else{
	 context.fillStyle = "rgba(255,255,255, 0.7)";
	context.fillRect(first_x, first_y,width,height/denum);
	}

      context.stroke();
	
	first_y=ypos+section_height;
	section_height+=height/denum;
	

	}
	context.globalAlpha = 1;
}


///////// generate london bridge sketch

function generate_towerBridgeSketch(){

//alert("startinga animation");
var clipping_height=0;
var towerBridge_width, towerBridge_height;

var towerBridge_x=London_bridge_1[1];

var towerBridge_y=canvas_h-building_h-platform_h;

var towerBridge_img = document.createElement("img");
towerBridge_img.src = "img/towerBridge.png";
towerBridge_img.id ="towerBridge";



towerBridge_img.onload=function(){
	towerBridge_width = this.width;
	towerBridge_height=this.height;
	animate_towerBridge();
	 }





function animate_towerBridge(){ 
	requestAnimationFrame(animate);}

function draw_towerBridge(){
	
 
    context_sketch.save();
   context_sketch.beginPath();
    context_sketch.rect(towerBridge_x,towerBridge_y+towerBridge_height,towerBridge_width,clipping_height);
    context_sketch.clip();
    context_sketch.drawImage(towerBridge_img,towerBridge_x,towerBridge_y);
    context_sketch.restore();
}

function animate(time){
	
    if(clipping_height<=-towerBridge_height){ 
	
	//context.clearRect ( London_bridge_1[1]-5,canvas_h-building_h-platform_h-5,350,200 );
	setTimeout(function() { initialize_LondonEye(); }, 1000);
	return;
	
	}

    requestAnimationFrame(animate);
   
    clipping_height-=2;
    draw_towerBridge();
}


}

//******************************* LONDON BRIDGE END *******************************//

//******************************* LONDON EYE START *******************************//

//london bridge array

var londonEyeCounter=0;
var LondonEyeRadius=254;

var londonEye_num_1=	[2,1,2,1,2,1,3,2,2,0];
var londonEye_denum_1=	[4,2,6,2,3,3,4,3,3,12];
var londonEye_num_2=	[1,2,1,4,6,3,6,10,8,0];
var londonEye_denum_2=	[2,4,3,8,9,9,8,15,12,3];

function initialize_LondonEye(){

	
	painting_round="paintLondonEye";
	


$("#base_div_london").css({ "position": "absolute",  "top": '380px', "left":'740px', "width":'260px', "height":'200px' ,"padding-top": '0px',});


$("#Fraction_span").html("Equivalent Fractions");


$(".form_left").css({  "position": "absolute","visibility":'visible',"top": '60px' });
$(".form_right").css({  "top": '40px' });

$(".form_bottom").css({ "position": "absolute", "top": '130px',  "left":'-30px' });
$("#num_denum_div").addClass( "denominatorNow" );

$("#base_div_london").fadeIn("slow");


drawPie(londonEye_num_1[londonEyeCounter],londonEye_denum_1[londonEyeCounter], LondonEyeRadius,ctx3);
generate_London_eye_question();
	
}




function run_london_Eye(){

	

	animatePie(londonEye_num_2[londonEyeCounter],londonEye_denum_2[londonEyeCounter], LondonEyeRadius,ctx3);
	$("#base_div_london").fadeOut();
	londonEyeCounter++;

	setTimeout(function() { 
	
	if (londonEyeCounter>=londonEye_num_1.length) {
	
	$("#base_div_london").fadeOut();
	
	generate_londonEyeSketch(); //draw london bridge sketch
	}
	else{
	ctx3.clearRect ( 0 , 0 , canvas4.width, canvas4.height );
	
	drawPie(londonEye_num_1[londonEyeCounter],londonEye_denum_1[londonEyeCounter], LondonEyeRadius,ctx3);
	generate_London_eye_question();
	$("#base_div_london").fadeIn();
	
	} }, 2000);
	
}

function generate_London_eye_question(){
	
	$(".num_left").html(londonEye_num_1[londonEyeCounter]);
	$(".denum_left").html(londonEye_denum_1[londonEyeCounter]);
	$("#num_denum_div").html(londonEye_denum_2[londonEyeCounter]);
	londonBridgeAnswer=londonEye_num_2[londonEyeCounter];
	$("#userAnswerBox_fraction").val("");
	$("#userAnswerBox_fraction").focus();

	

}

function generate_londonEyeSketch(){

//alert("startinga animation");
var clipping_height=0;
var londonEye_width, londonEye_height;

var londonEye_x=0;

var londonEye_y=0;

var londonEye_img = document.createElement("img");
londonEye_img.src = "img/londonEye.png";
londonEye_img.id ="londonEye";


londonEye_img.onload=function(){
	londonEye_width = this.width;
	londonEye_height=this.height;
	animate_londonEye();

	
	 }



function animate_londonEye(){
	requestAnimationFrame(animate);}

function draw_londonEye(){
	
  
    ctx3.save();
   ctx3.beginPath();
    ctx3.rect(londonEye_x,londonEye_y+londonEye_height,londonEye_width,clipping_height);
    ctx3.clip();
    ctx3.drawImage(londonEye_img,londonEye_x,londonEye_y);
    ctx3.restore();
}

function animate(time){
	
    if(clipping_height<=-londonEye_height){ 
	
	$("#floating_canvas_3" ).animate({
    	transform: 'scale(.8,.8) translateX(0px) translateY(180px)'
    	}, 1500 );
	return;

	}

    requestAnimationFrame(animate);
   
    clipping_height-=2;
    draw_londonEye();
}
}



