


var fraction_array = [1,2,3,4,5,4,4,4,3,3,3,3];

var length_array = [2,2,2,2,4,4,4,4,3,3,3,3];
var height_array = [1,2,3,4,1,2,3,4,1,2,3,4];

var perimeter_length_array = [1,2,1,2,3,3,3,4,3,3,3,3];
var perimeter_height_array = [1,2,2,1,1,2,3,4,1,2,3,4];

var new_length_array = [3,3,3,5,5,5,1,1,1];
var new_height_array = [1,2,3,2,3,4,1,2,3];

var new_perimeter_length_array = [1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var new_perimeter_height_array = [1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var fraction_height;
var x_pointer;

//points and misses

var point_count=0;
var misses_count=0;
var lastWrongInput="";
//mode parameters

var painting_series =["paintWalls","paintWindows","buildNewWalls","buildNewWindows"];
painting_round=painting_series[0];


//building parameters: x_distance, width, height

var Big_Ben = [120,82,300];
var building_wall_color=["#65caf0","#94dbb4","#65caf0","#65caf0"];



fraction_height=building_base_arr[0][2]/5;

//wall paramters: height,width

var wall_array = [[60,70,80,90],[50,70,80]];

//house[width]
var new_wall_array = [[40,60,100],[50,100,100]];

//window paramters: x,y,width,height

var window_array = [[[0,0,70,50],[0,0,70,50],[0,0,70,50],[0,0,70,50]],[[0,0,80,50],[0,0,80,50],[0,0,80,50]]];

var window_color_array = [['#d7c3ed', '#d7c3ed'],['#c2fee5']];
var window_borderColor_array = [['#cee7f9', '#cee7f9','#cee7f9','#cee7f9'],['#e8cc45','#e8cc45','#e8cc45']];

var new_window_array = [[[0,0,80,50],[0,0,80,50],[0,0,80,50]],[[0,0,130,50]]];

var new_window_color_array = [['#eff48e', '#eff48e','#eff48e'],['#ffa25e']];
var new_window_borderColor_array = [['#e6e8ff', '#e6e8ff','#e6e8ff'],['#bee6ff']];





var building_count=0;
var window_h_space=10;
var window_v_space=10;
var window_x=0;
var window_y;
var wall_x, wall_y, wall_height, wall_width;

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
var height_parameter_margin_left=10;
var form_div_margin_left=15;


var question_base_height;
var question_base_min_height=120;
var question_base_width;
var question_base_x=200;
var question_base_y;
var min_question_base_height;

var length_parameter_x;
var length_parameter_y=0;
var height_parameter_x;
var height_parameter_y;
var form_div_x;

var wallPainting_done=false;
var windowPainting_done=false;

//set base

var fraction_array = [1,2,3,4,5,4,4,4,3,3,3,3];

var length_array = [2,2,2,2,4,4,4,4,3,3,3,3];
var height_array = [1,2,3,4,1,2,3,4,1,2,3,4];

var perimeter_length_array = [1,2,1,2,3,3,3,4,3,3,3,3];
var perimeter_height_array = [1,2,2,1,1,2,3,4,1,2,3,4];

var new_length_array = [3,3,3,5,5,5,1,1,1];
var new_height_array = [1,2,3,2,3,4,1,2,3];

var new_perimeter_length_array = [1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var new_perimeter_height_array = [1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var fraction_height;
var x_pointer;
//points and misses

var point_count=0;
var misses_count=0;
var lastWrongInput="";





