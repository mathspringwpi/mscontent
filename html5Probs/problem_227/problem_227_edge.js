/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Question_Text',
            type:'text',
            rect:['15px','30px','219px','124px','auto','auto'],
            text:"What is the perimeter of this triangle?",
            align:"left",
            font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Answers',
            type:'rect',
            rect:['48','181','auto','auto','auto','auto']
         },
         {
            id:'AnswerDText',
            type:'text',
            rect:['72px','291px','101px','20px','auto','auto'],
            text:"350",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerCText',
            type:'text',
            rect:['71px','257px','101px','19px','auto','auto'],
            text:"300",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerBText',
            type:'text',
            rect:['71px','225px','50px','30px','auto','auto'],
            text:"250",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerAText',
            type:'text',
            rect:['71px','190px','40px','27px','auto','auto'],
            text:"200",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'QuestionSound_Container',
            display:'none',
            type:'rect',
            rect:['15px','10px','17px','8px','auto','auto'],
            fill:["rgba(248,250,248,0.00)"],
            stroke:[1,"rgb(4, 4, 4)","solid"]
         },
         {
            id:'Sound_Container',
            display:'none',
            type:'rect',
            rect:['46px','19px','164px','7px','auto','auto'],
            fill:["rgba(248,250,248,1)"],
            stroke:[1,"rgb(4, 4, 4)","solid"]
         },
         {
            id:'TutorialText',
            display:'none',
            type:'text',
            rect:['260px','49px','237px','187px','auto','auto'],
            text:"Let's pretend your hint starts here at 0:10. It does not really matter where the hints start and end, as long as they don't overlap. Don't worry that the X and Checks are showing up either - it's just because I set their timeline to 5 seconds in the symbol. They won't appear in the final animation.<br><br>This rectangle is a space for you to draw your animation. An example will follow in hint 2.",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Third_side_red',
            type:'rect',
            rect:['89px','175px','36px','4px','auto','auto'],
            fill:["rgba(199,9,9,1.00)"],
            stroke:[2,"rgba(199,9,9,1.00)","solid"]
         },
         {
            id:'Hint2_what_is_the_lenght_of_3rd_side',
            type:'text',
            rect:['255px','186px','273px','45px','auto','auto'],
            text:"What is the length of the third side?",
            align:"left",
            font:['Times New Roman, Times, serif',16,"rgba(199,9,9,1.00)","normal","none","normal"]
         },
         {
            id:'AnswerEText',
            type:'text',
            rect:['71px','329px','101px','20px','auto','auto'],
            text:"400",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint2_question_mark',
            type:'text',
            rect:['157px','186px','39px','35px','auto','auto'],
            text:"?",
            align:"left",
            font:['Times New Roman, Times, serif',24,"rgba(199,9,9,1.00)","800","none","normal"]
         },
         {
            id:'Hint3_15',
            type:'text',
            rect:['149px','186px','63px','35px','auto','auto'],
            text:"100",
            align:"left",
            font:['\'Times New Roman\', Times, serif',24,"rgba(199,9,9,1)","800","none","normal"]
         },
         {
            id:'Hint3_third_side__length_is_15',
            type:'text',
            rect:['255px','220px','219px','35px','auto','auto'],
            text:"The length of the third side is 100",
            align:"left",
            font:['\'Times New Roman\', Times, serif',16,"rgba(199,9,9,1)","400","none","normal"]
         },
         {
            id:'Hint4_perimeter',
            type:'text',
            rect:['255px','257px','258px','45px','auto','auto'],
            text:"Perimeter = side1 + side 2 + side 3",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(199,9,9,1)","normal","none","normal"]
         },
         {
            id:'Left_side_red',
            type:'rect',
            rect:['69px','101px','22px','4px','auto','auto'],
            fill:["rgba(199,9,9,1.00)"],
            stroke:[2,"rgba(199,9,9,1.00)","solid"],
            transform:[[],['60']]
         },
         {
            id:'Right_side_red',
            type:'rect',
            rect:['229px','96px','12px','4px','auto','auto'],
            fill:["rgba(199,9,9,1)"],
            stroke:[2,"rgb(199, 9, 9)","solid"],
            transform:[[],['59']]
         },
         {
            id:'Hint5',
            type:'text',
            rect:['255px','290px','219px','35px','auto','auto'],
            text:"Perimeter = 100+100+100",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(199,9,9,1)","normal","none","normal"]
         },
         {
            id:'Answer_hint',
            type:'text',
            rect:['256px','321px','128px','35px','auto','auto'],
            text:"Perimeter = 300",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(199,9,9,1)","normal","none","normal"]
         },
         {
            id:'Answer_Hint_B',
            type:'text',
            rect:['398px','321px','101px','35px','auto','auto'],
            text:"Choose (C)<br>",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(32,147,20,1.00)","normal","none","normal"]
         },
         {
            id:'Hint_1Two_side_are_equal',
            type:'text',
            rect:['278px','45px','166px','45px','auto','auto'],
            text:"Two sides are equal.",
            align:"left",
            font:['Times New Roman, Times, serif',16,"rgba(199,9,9,1.00)","normal","none","normal"]
         },
         {
            id:'Hint_1Question_mark',
            type:'text',
            rect:['192px','144px','74px','35px','auto','auto'],
            text:"?",
            align:"left",
            font:['\'Times New Roman\', Times, serif',18,"rgba(199,9,9,1)","700","none","normal"]
         },
         {
            id:'Hint_1_Right_side_60_text',
            type:'text',
            rect:['278px','78px','219px','35px','auto','auto'],
            text:"The right side has an angle of 60º",
            align:"left",
            font:['\'Times New Roman\', Times, serif',16,"rgba(199,9,9,1)","400","none","normal"]
         },
         {
            id:'Hint_1_Right_side_60_degree_',
            type:'text',
            rect:['192px','157px','63px','35px','auto','auto'],
            text:"60º",
            align:"left",
            font:['\'Times New Roman\', Times, serif',16,"rgba(199,9,9,1)","400","none","normal"]
         },
         {
            id:'Hin2_1',
            type:'group',
            rect:['278','154px','39','45','auto','auto'],
            c:[
            {
               id:'_180-',
               type:'text',
               rect:['0px','0px','39px','45px','auto','auto'],
               text:"180 -",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(199,9,9,1.00)","normal","none","normal"]
            },
            {
               id:'_-60',
               type:'text',
               rect:['39px','0px','56px','35px','auto','auto'],
               text:"60 -",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(199,9,9,1)","normal","none","normal"]
            },
            {
               id:'_60',
               type:'text',
               rect:['70px','0px','101px','35px','auto','auto'],
               text:"60 =",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(199,9,9,1.00)","normal","none","normal"]
            },
            {
               id:'third_angle_is_60',
               type:'text',
               rect:['106px','0px','39px','20px','auto','auto'],
               text:"60",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(199,9,9,1)","normal","none","normal"]
            }]
         },
         {
            id:'Hint1_third_angle_is',
            type:'text',
            rect:['279px','118px','204px','45px','auto','auto'],
            text:"The third angle is____º",
            font:['Times New Roman, Times, serif',16,"rgba(199,9,9,1.00)","normal","none",""]
         },
         {
            id:'Hint1_question_mak',
            type:'text',
            rect:['398px','113px','56px','35px','auto','auto'],
            text:"?",
            align:"left",
            font:['\'Times New Roman\', Times, serif',20,"rgba(199,9,9,1)","800","none","normal"]
         },
         {
            id:'_60_degree_for_3_angle',
            type:'text',
            rect:['384px','209px','39px','20px','auto','auto'],
            text:"60",
            align:"left",
            font:['Times New Roman, Times, serif',16,"rgba(199,9,9,1)","400","none","normal"]
         },
         {
            id:'Question_mark_for_3rd_angle',
            type:'text',
            rect:['156px','86px','63px','35px','auto','auto'],
            text:"?",
            align:"left",
            font:['\'Times New Roman\', Times, serif',20,"rgba(199,9,9,1)","800","none","normal"]
         },
         {
            id:'Hint2_60_degrees_in_the_triangle',
            type:'text',
            rect:['152px','86px','39px','20px','auto','auto'],
            text:"60º<br>",
            align:"left",
            font:['\'Times New Roman\', Times, serif',16,"rgba(199,9,9,1)","400","none","normal"]
         },
         {
            id:'triangle33',
            type:'image',
            rect:['-52px','-71px','500px','500px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"triangle33.png",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'Answers',
            symbolName:'Answers_1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Left_side_red}": [
            ["color", "background-color", 'rgba(199,9,9,1.00)'],
            ["style", "top", '65px'],
            ["transform", "rotateZ", '122deg'],
            ["style", "opacity", '0'],
            ["color", "border-color", 'rgba(199,9,9,1.00)'],
            ["style", "left", '143px'],
            ["style", "width", '22px']
         ],
         "${_Answer_hint}": [
            ["style", "top", '321px'],
            ["style", "opacity", '0'],
            ["style", "left", '256px'],
            ["style", "width", '128px']
         ],
         "${__60_degree_for_3_angle}": [
            ["style", "top", '154px'],
            ["style", "font-weight", '400'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["color", "color", 'rgba(199,9,9,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '384px'],
            ["style", "font-size", '16px']
         ],
         "${_Question_mark_for_3rd_angle}": [
            ["style", "top", '86px'],
            ["style", "opacity", '0'],
            ["style", "left", '156px']
         ],
         "${_Hin2_1}": [
            ["style", "top", '154px']
         ],
         "${_Hint2_question_mark}": [
            ["style", "top", '186px'],
            ["style", "font-weight", '800'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["color", "color", 'rgba(199,9,9,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '157px'],
            ["style", "font-size", '24px']
         ],
         "${_AnswerDText}": [
            ["style", "top", '291px'],
            ["style", "font-size", '14px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '72px'],
            ["style", "width", '101px']
         ],
         "${_third_angle_is_60}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '106px'],
            ["color", "color", 'rgba(199,9,9,1)']
         ],
         "${_Hint1_third_angle_is}": [
            ["style", "top", '118px'],
            ["style", "font-size", '16px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["color", "color", 'rgba(199,9,9,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '279px'],
            ["style", "width", '204px']
         ],
         "${_Question_Text}": [
            ["style", "top", '30px'],
            ["style", "width", '219px'],
            ["style", "height", '124px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '15px'],
            ["style", "font-size", '16px']
         ],
         "${_Answer_Hint_B}": [
            ["style", "top", '321px'],
            ["style", "opacity", '0'],
            ["style", "left", '398px'],
            ["color", "color", 'rgba(32,147,20,1.00)']
         ],
         "${_Hint2_60_degrees_in_the_triangle}": [
            ["style", "top", '86px'],
            ["style", "opacity", '0'],
            ["style", "font-weight", '400'],
            ["style", "left", '152px'],
            ["style", "font-size", '40px']
         ],
         "${__-60}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "height", '35px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '39px'],
            ["color", "color", 'rgba(199,9,9,1)']
         ],
         "${_Hint5}": [
            ["style", "top", '290px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "opacity", '0']
         ],
         "${_AnswerEText}": [
            ["style", "top", '329px'],
            ["style", "font-size", '14px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "width", '101px']
         ],
         "${_triangle33}": [
            ["style", "top", '-71px'],
            ["style", "height", '500px'],
            ["style", "left", '-52px'],
            ["style", "width", '500px']
         ],
         "${_Right_side_red}": [
            ["style", "top", '61px'],
            ["transform", "rotateZ", '59deg'],
            ["style", "height", '4px'],
            ["style", "opacity", '0'],
            ["style", "left", '157px'],
            ["style", "width", '12px']
         ],
         "${_AnswerCText}": [
            ["style", "top", '257px'],
            ["style", "font-size", '14px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "width", '101px']
         ],
         "${_AnswerAText}": [
            ["style", "top", '190px'],
            ["style", "text-align", 'left'],
            ["style", "width", '40px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "font-size", '14px']
         ],
         "${_Hint_1Two_side_are_equal}": [
            ["style", "top", '45px'],
            ["color", "color", 'rgba(199,9,9,1.00)'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "opacity", '0'],
            ["style", "font-size", '16px']
         ],
         "${_Answers}": [
            ["style", "top", '168px'],
            ["style", "left", '24px']
         ],
         "${_Sound_Container}": [
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden']
         ],
         "${_Hint4_perimeter}": [
            ["style", "top", '257px'],
            ["style", "opacity", '0'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif']
         ],
         "${_Hint2_what_is_the_lenght_of_3rd_side}": [
            ["style", "top", '186px'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(199,9,9,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "width", '273px']
         ],
         "${_AnswerBText}": [
            ["style", "top", '225px'],
            ["style", "font-size", '14px'],
            ["style", "height", '30px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "width", '50px']
         ],
         "${_Hint_1_Right_side_60_text}": [
            ["style", "top", '78px'],
            ["style", "width", '219px'],
            ["color", "color", 'rgba(199,9,9,1)'],
            ["style", "font-weight", '400'],
            ["style", "opacity", '0'],
            ["style", "font-size", '16px']
         ],
         "${__180-}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(199,9,9,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '39px']
         ],
         "${_Hint_1Question_mark}": [
            ["style", "top", '144px'],
            ["style", "font-weight", '700'],
            ["style", "opacity", '0'],
            ["style", "left", '192px'],
            ["style", "font-size", '80px']
         ],
         "${_Hint_1_Right_side_60_degree_}": [
            ["style", "top", '157px'],
            ["style", "width", '63px'],
            ["style", "font-weight", '400'],
            ["color", "color", 'rgba(199,9,9,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '192px'],
            ["style", "font-size", '16px']
         ],
         "${_Hint3_15}": [
            ["style", "top", '186px'],
            ["style", "opacity", '0'],
            ["style", "left", '149px']
         ],
         "${_Third_side_red}": [
            ["color", "background-color", 'rgba(199,9,9,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '36px'],
            ["style", "top", '175px'],
            ["style", "height", '4px'],
            ["color", "border-color", 'rgba(199,9,9,1.00)'],
            ["style", "left", '89px'],
            ["style", "opacity", '0']
         ],
         "${_Hint3_third_side__length_is_15}": [
            ["style", "top", '220px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(199,9,9,1)'],
            ["style", "font-weight", '400'],
            ["style", "left", '255px'],
            ["style", "font-size", '16px']
         ],
         "${_QuestionSound_Container}": [
            ["style", "display", 'none'],
            ["style", "height", '8px'],
            ["color", "background-color", 'rgba(248,250,248,0.00)'],
            ["style", "width", '17px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '600px'],
            ["style", "width", '600px']
         ],
         "${__60}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(199,9,9,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '70px'],
            ["style", "font-size", '16px']
         ],
         "${_Hint1_question_mak}": [
            ["style", "top", '113px'],
            ["style", "opacity", '0'],
            ["style", "font-weight", '800'],
            ["style", "left", '398px'],
            ["style", "font-size", '20px']
         ],
         "${_TutorialText}": [
            ["style", "top", '51px'],
            ["style", "height", '187px'],
            ["style", "opacity", '1'],
            ["style", "left", '260px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 162806,
         autoPlay: true,
         labels: {
            "Read Question": 2000,
            "Hint 1": 7000,
            "Hint 2": 79000,
            "Hint 3": 115000,
            "Hint 4": 140000,
            "Hint 5": 152000,
            "Answer Hint": 154000
         },
         timeline: [
            { id: "eid183", tween: [ "style", "${_Hint_1Two_side_are_equal}", "opacity", '1', { fromValue: '0.000000'}], position: 49500, duration: 1000 },
            { id: "eid172", tween: [ "style", "${_Right_side_red}", "left", '128px', { fromValue: '157px'}], position: 48000, duration: 1000 },
            { id: "eid242", tween: [ "style", "${__60_degree_for_3_angle}", "top", '118px', { fromValue: '154px'}], position: 84000, duration: 1000, easing: "easeInQuad" },
            { id: "eid204", tween: [ "style", "${_Hint1_question_mak}", "opacity", '1', { fromValue: '0.000000'}], position: 75000, duration: 1000 },
            { id: "eid237", tween: [ "style", "${_Hint1_question_mak}", "opacity", '0', { fromValue: '1'}], position: 83000, duration: 0 },
            { id: "eid207", tween: [ "style", "${_Question_mark_for_3rd_angle}", "opacity", '1', { fromValue: '0.000000'}], position: 77000, duration: 1000 },
            { id: "eid244", tween: [ "style", "${_Question_mark_for_3rd_angle}", "opacity", '0', { fromValue: '1'}], position: 87000, duration: 0 },
            { id: "eid308", tween: [ "style", "${_Hint3_15}", "opacity", '1', { fromValue: '0.000000'}], position: 129000, duration: 1000 },
            { id: "eid304", tween: [ "style", "${_Hint2_question_mark}", "opacity", '1', { fromValue: '0.000000'}], position: 113000, duration: 1000 },
            { id: "eid305", tween: [ "style", "${_Hint2_question_mark}", "opacity", '0', { fromValue: '1'}], position: 129000, duration: 0 },
            { id: "eid187", tween: [ "style", "${_Hint_1Question_mark}", "opacity", '1', { fromValue: '0'}], position: 52000, duration: 950 },
            { id: "eid193", tween: [ "style", "${_Hint_1Question_mark}", "opacity", '0', { fromValue: '1'}], position: 54000, duration: 0 },
            { id: "eid284", tween: [ "color", "${_third_angle_is_60}", "color", 'rgba(95,89,89,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,9,9,1)'}], position: 108000, duration: 1000 },
            { id: "eid177", tween: [ "style", "${_Right_side_red}", "opacity", '0', { fromValue: '0'}], position: 47000, duration: 0 },
            { id: "eid178", tween: [ "style", "${_Right_side_red}", "opacity", '1', { fromValue: '1'}], position: 48000, duration: 0 },
            { id: "eid301", tween: [ "style", "${_Right_side_red}", "opacity", '0', { fromValue: '1'}], position: 111000, duration: 0 },
            { id: "eid333", tween: [ "style", "${_Right_side_red}", "opacity", '1', { fromValue: '0'}], position: 150000, duration: 1000 },
            { id: "eid174", tween: [ "style", "${_Left_side_red}", "opacity", '0', { fromValue: '0'}], position: 45000, duration: 0 },
            { id: "eid175", tween: [ "style", "${_Left_side_red}", "opacity", '1', { fromValue: '1'}], position: 46000, duration: 0 },
            { id: "eid300", tween: [ "style", "${_Left_side_red}", "opacity", '0', { fromValue: '1'}], position: 111000, duration: 0 },
            { id: "eid330", tween: [ "style", "${_Left_side_red}", "opacity", '1', { fromValue: '0'}], position: 149070, duration: 930 },
            { id: "eid314", tween: [ "style", "${_Hint3_third_side__length_is_15}", "opacity", '1', { fromValue: '0.000000'}], position: 131000, duration: 1000 },
            { id: "eid290", tween: [ "color", "${__180-}", "color", 'rgba(95,89,89,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,9,9,1)'}], position: 108000, duration: 1000 },
            { id: "eid165", tween: [ "style", "${_Left_side_red}", "left", '57px', { fromValue: '143px'}], position: 46000, duration: 1000 },
            { id: "eid166", tween: [ "style", "${_Left_side_red}", "width", '135px', { fromValue: '22px'}], position: 46000, duration: 1000 },
            { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
            { id: "eid192", tween: [ "style", "${_Hint_1_Right_side_60_degree_}", "opacity", '1', { fromValue: '0.000000'}], position: 54000, duration: 1000 },
            { id: "eid324", tween: [ "color", "${_Hint3_third_side__length_is_15}", "color", 'rgba(95,89,89,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,9,9,1)'}], position: 139000, duration: 500, easing: "easeInQuad" },
            { id: "eid198", tween: [ "style", "${_Hint_1_Right_side_60_text}", "opacity", '1', { fromValue: '0.000000'}], position: 56000, duration: 1000 },
            { id: "eid210", tween: [ "color", "${_Hint_1_Right_side_60_degree_}", "color", 'rgba(19,18,18,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,9,9,1)'}], position: 77000, duration: 500 },
            { id: "eid171", tween: [ "style", "${_Right_side_red}", "top", '114px', { fromValue: '61px'}], position: 48000, duration: 1000 },
            { id: "eid270", tween: [ "style", "${_Hint2_what_is_the_lenght_of_3rd_side}", "opacity", '1', { fromValue: '0.000000'}], position: 108000, duration: 1000 },
            { id: "eid241", tween: [ "style", "${__60_degree_for_3_angle}", "left", '399px', { fromValue: '384px'}], position: 84000, duration: 1000, easing: "easeInQuad" },
            { id: "eid320", tween: [ "style", "${_Hint4_perimeter}", "opacity", '1', { fromValue: '0.000000'}], position: 146000, duration: 1000, easing: "easeInQuad" },
            { id: "eid292", tween: [ "color", "${_Hint_1_Right_side_60_text}", "color", 'rgba(95,89,89,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,9,9,1)'}], position: 108000, duration: 1000 },
            { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid167", tween: [ "transform", "${_Left_side_red}", "rotateZ", '122deg', { fromValue: '122deg'}], position: 47000, duration: 0 },
            { id: "eid280", tween: [ "color", "${__60_degree_for_3_angle}", "color", 'rgba(95,89,89,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,9,9,1)'}], position: 108000, duration: 1000 },
            { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 3000 },
            { id: "eid282", tween: [ "color", "${_Hint1_third_angle_is}", "color", 'rgba(95,89,89,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,9,9,1)'}], position: 108000, duration: 1000 },
            { id: "eid173", tween: [ "style", "${_Right_side_red}", "width", '137px', { fromValue: '12px'}], position: 48000, duration: 1000 },
            { id: "eid336", tween: [ "style", "${_Hint5}", "opacity", '1', { fromValue: '0.000000'}], position: 152000, duration: 1000 },
            { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid228", tween: [ "style", "${__-60}", "opacity", '1', { fromValue: '0.000000'}], position: 79500, duration: 500 },
            { id: "eid202", tween: [ "style", "${_Hint1_third_angle_is}", "opacity", '1', { fromValue: '0.000000'}], position: 73000, duration: 1000 },
            { id: "eid326", tween: [ "color", "${_Hint2_what_is_the_lenght_of_3rd_side}", "color", 'rgba(95,89,89,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,9,9,1)'}], position: 139000, duration: 500, easing: "easeInQuad" },
            { id: "eid342", tween: [ "style", "${_Answer_Hint_B}", "opacity", '1', { fromValue: '0.000000'}], position: 156000, duration: 1000 },
            { id: "eid317", tween: [ "style", "${__60_degree_for_3_angle}", "opacity", '0', { fromValue: '0'}], position: 83000, duration: 0, easing: "easeInQuad" },
            { id: "eid315", tween: [ "style", "${__60_degree_for_3_angle}", "opacity", '1', { fromValue: '0'}], position: 84000, duration: 0 },
            { id: "eid316", tween: [ "style", "${__60_degree_for_3_angle}", "opacity", '1', { fromValue: '1'}], position: 85000, duration: 0 },
            { id: "eid189", tween: [ "style", "${_Hint_1Question_mark}", "font-size", '30px', { fromValue: '80px'}], position: 52000, duration: 950 },
            { id: "eid286", tween: [ "color", "${__60}", "color", 'rgba(95,89,89,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,9,9,1)'}], position: 108000, duration: 1000 },
            { id: "eid247", tween: [ "style", "${_Hint2_60_degrees_in_the_triangle}", "opacity", '1', { fromValue: '0.000000'}], position: 87000, duration: 1000 },
            { id: "eid297", tween: [ "style", "${_Third_side_red}", "opacity", '1', { fromValue: '0.000000'}], position: 111000, duration: 500 },
            { id: "eid298", tween: [ "style", "${_Third_side_red}", "width", '144px', { fromValue: '36px'}], position: 111000, duration: 2000 },
            { id: "eid236", tween: [ "style", "${_third_angle_is_60}", "opacity", '1', { fromValue: '0.000000'}], position: 81500, duration: 500 },
            { id: "eid339", tween: [ "style", "${_Answer_hint}", "opacity", '1', { fromValue: '0.000000'}], position: 154000, duration: 1000 },
            { id: "eid233", tween: [ "style", "${__60}", "opacity", '1', { fromValue: '0.000000'}], position: 80000, duration: 500 },
            { id: "eid288", tween: [ "color", "${__-60}", "color", 'rgba(95,89,89,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,9,9,1)'}], position: 108000, duration: 1000 },
            { id: "eid164", tween: [ "style", "${_Left_side_red}", "top", '114px', { fromValue: '65px'}], position: 46000, duration: 1000 },
            { id: "eid217", tween: [ "style", "${__180-}", "opacity", '1', { fromValue: '0.000000'}], position: 79000, duration: 500 },
            { id: "eid250", tween: [ "style", "${_Hint2_60_degrees_in_the_triangle}", "font-size", '16px', { fromValue: '40px'}], position: 87000, duration: 1000 },
            { id: "eid294", tween: [ "color", "${_Hint_1Two_side_are_equal}", "color", 'rgba(95,89,89,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,9,9,1)'}], position: 108000, duration: 1000 }         ]
      }
   }
},
"EButton": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'E_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy8',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         type: 'text',
         rect: ['0px','4px','27px','20px','auto','auto'],
         id: 'Text8',
         text: 'E',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "display", 'none'],
            ["style", "height", '42px'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
         ],
         "${_E_Button}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_EllipseCopy8}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '25px']
         ],
         "${_Text8}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '14px'],
            ["style", "left", '0px'],
            ["style", "width", '27px']
         ],
         "${_x}": [
            ["style", "top", '-3px'],
            ["style", "height", '33px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '42px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         labels: {
            "Nothing Selected": 0,
            "Answer Selected": 5000
         },
         timeline: [
            { id: "eid9", tween: [ "color", "${_EllipseCopy8}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
            { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }         ]
      }
   }
},
"EButton_3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'E_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy8',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text8',
         text: 'E',
         align: 'center',
         rect: ['0px','4px','27px','20px','auto','auto']
      },
      {
         rect: ['-8px','-3px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/x.png','0px','0px']
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/check.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_EllipseCopy8}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '25px']
         ],
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
         ],
         "${_E_Button}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "display", 'none'],
            ["style", "height", '42px'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${_Text8}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '14px'],
            ["style", "left", '0px'],
            ["style", "width", '27px']
         ],
         "${_x}": [
            ["style", "top", '-3px'],
            ["style", "height", '33px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '42px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         labels: {
            "Nothing Selected": 0,
            "Answer Incorrect": 5000,
            "Answer Correct": 10000
         },
         timeline: [
            { id: "eid9", tween: [ "color", "${_EllipseCopy8}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
            { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid44", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
            { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid43", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
            { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }         ]
      }
   }
},
"EButton_2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'E_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy8',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text8',
         text: 'E',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['36px','4px','101px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text14',
         text: 'Answer E Text',
         align: 'left',
         type: 'text'
      },
      {
         type: 'image',
         display: 'none',
         rect: ['-8px','-3px','42px','33px','auto','auto'],
         id: 'x',
         fill: ['rgba(0,0,0,0)','images/x.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         fill: ['rgba(0,0,0,0)','images/check.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "display", 'none'],
            ["style", "height", '42px'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${_Text8}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '14px'],
            ["style", "left", '0px'],
            ["style", "width", '27px']
         ],
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
         ],
         "${_E_Button}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_EllipseCopy8}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '25px']
         ],
         "${_Text14}": [
            ["style", "top", '4px'],
            ["style", "left", '36px'],
            ["style", "width", '101px']
         ],
         "${_x}": [
            ["style", "top", '-3px'],
            ["style", "height", '33px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '42px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         labels: {
            "Nothing Selected": 0,
            "Answer Selected": 5000
         },
         timeline: [
            { id: "eid9", tween: [ "color", "${_EllipseCopy8}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
            { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }         ]
      }
   }
},
"EButton_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'E_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy8',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text8',
         text: 'E',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['36px','4px','101px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text14',
         text: 'Answer E Text',
         align: 'left',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "display", 'none'],
            ["style", "height", '42px'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${_Text8}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '14px'],
            ["style", "left", '0px'],
            ["style", "width", '27px']
         ],
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
         ],
         "${_E_Button}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_EllipseCopy8}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '25px']
         ],
         "${_Text14}": [
            ["style", "top", '4px'],
            ["style", "left", '36px'],
            ["style", "width", '101px']
         ],
         "${_x}": [
            ["style", "top", '-3px'],
            ["style", "height", '33px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '42px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         labels: {
            "Nothing Selected": 0,
            "Answer Selected": 5000
         },
         timeline: [
            { id: "eid9", tween: [ "color", "${_EllipseCopy8}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
            { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }         ]
      }
   }
},
"DButton_3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'D_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy7',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         rect: ['0px','4px','27px','20px','auto','auto']
      },
      {
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/x.png','0px','0px']
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/check.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text7}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '14px'],
            ["style", "left", '0px'],
            ["style", "width", '27px']
         ],
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
         ],
         "${_x}": [
            ["style", "top", '-4px'],
            ["style", "height", '33px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '42px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "display", 'none'],
            ["style", "height", '42px'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${_EllipseCopy7}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '25px']
         ],
         "${_D_Button}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         labels: {
            "Nothing Selected": 0,
            "Answer Incorrect": 5000,
            "Answer Correct": 10000
         },
         timeline: [
            { id: "eid3", tween: [ "color", "${_EllipseCopy7}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
            { id: "eid226", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid227", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid267", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
            { id: "eid10", tween: [ "style", "${_EllipseCopy7}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid255", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid256", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid266", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 }         ]
      }
   }
},
"DButton_2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'D_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy7',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['36px','4px','101px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text13',
         text: 'Answer D Text',
         align: 'left',
         type: 'text'
      },
      {
         type: 'image',
         display: 'none',
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         fill: ['rgba(0,0,0,0)','images/x.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         fill: ['rgba(0,0,0,0)','images/check.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_x}": [
            ["style", "top", '-4px'],
            ["style", "height", '33px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '42px']
         ],
         "${_Text7}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '14px'],
            ["style", "left", '0px'],
            ["style", "width", '27px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "display", 'none'],
            ["style", "height", '42px'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
         ],
         "${_D_Button}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_EllipseCopy7}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '25px']
         ],
         "${_Text13}": [
            ["style", "top", '4px'],
            ["style", "left", '36px'],
            ["style", "width", '101px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         labels: {
            "Nothing Selected": 0,
            "Answer Selected": 5000
         },
         timeline: [
            { id: "eid3", tween: [ "color", "${_EllipseCopy7}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
            { id: "eid226", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid227", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid10", tween: [ "style", "${_EllipseCopy7}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid255", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid256", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }         ]
      }
   }
},
"DButton_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'D_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy7',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['36px','4px','101px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text13',
         text: 'Answer D Text',
         align: 'left',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_x}": [
            ["style", "top", '-4px'],
            ["style", "height", '33px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '42px']
         ],
         "${_Text7}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '14px'],
            ["style", "left", '0px'],
            ["style", "width", '27px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "display", 'none'],
            ["style", "height", '42px'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
         ],
         "${_D_Button}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_EllipseCopy7}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '25px']
         ],
         "${_Text13}": [
            ["style", "top", '4px'],
            ["style", "left", '36px'],
            ["style", "width", '101px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         labels: {
            "Nothing Selected": 0,
            "Answer Selected": 5000
         },
         timeline: [
            { id: "eid3", tween: [ "color", "${_EllipseCopy7}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
            { id: "eid226", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid227", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid10", tween: [ "style", "${_EllipseCopy7}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid255", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid256", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }         ]
      }
   }
},
"DButton": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'D_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy7',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['36px','4px','94px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text13',
         text: 'Answer Text D',
         align: 'left',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_x}": [
            ["style", "top", '-4px'],
            ["style", "height", '33px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '42px']
         ],
         "${_Text7}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '14px'],
            ["style", "left", '0px'],
            ["style", "width", '27px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "display", 'none'],
            ["style", "height", '42px'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
         ],
         "${_D_Button}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_EllipseCopy7}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '25px']
         ],
         "${_Text13}": [
            ["style", "top", '4px'],
            ["style", "left", '36px'],
            ["style", "width", '94px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         labels: {
            "Nothing Selected": 0,
            "Answer Selected": 5000
         },
         timeline: [
            { id: "eid3", tween: [ "color", "${_EllipseCopy7}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
            { id: "eid226", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid227", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid10", tween: [ "style", "${_EllipseCopy7}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid255", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid256", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }         ]
      }
   }
},
"CButton_3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'C_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy6',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text5',
         text: 'C',
         align: 'center',
         rect: ['0px','4px','27px','20px','auto','auto']
      },
      {
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/x.png','0px','0px']
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/check.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "display", 'none'],
            ["style", "height", '42px'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${_EllipseCopy6}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '25px']
         ],
         "${_C_Button}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text5}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '14px'],
            ["style", "left", '0px'],
            ["style", "width", '27px']
         ],
         "${_x}": [
            ["style", "top", '-4px'],
            ["style", "height", '33px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '42px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         labels: {
            "Nothing Selected": 0,
            "Answer Incorrect": 5000,
            "Answer Correct": 10000
         },
         timeline: [
            { id: "eid11", tween: [ "style", "${_EllipseCopy6}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid224", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid225", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid265", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
            { id: "eid253", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid254", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid264", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
            { id: "eid5", tween: [ "color", "${_EllipseCopy6}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 }         ]
      }
   }
},
"BButton_3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'B_Button',
      type: 'group',
      rect: ['0px','0px','25','25','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy5',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text4',
         text: 'B',
         align: 'center',
         rect: ['0px','5px','27px','19px','auto','auto']
      },
      {
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/x.png','0px','0px']
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/check.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_B_Button}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '125px']
         ],
         "${_x}": [
            ["style", "top", '-4px'],
            ["style", "height", '33px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '42px']
         ],
         "${_EllipseCopy5}": [
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '25px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "display", 'none'],
            ["style", "height", '42px'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${_Text4}": [
            ["style", "top", '5px'],
            ["style", "text-align", 'center'],
            ["style", "height", '19px'],
            ["style", "font-size", '14px'],
            ["style", "left", '0px'],
            ["style", "width", '27px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         labels: {
            "Nothing Selected": 0,
            "Answer Incorrect": 5000,
            "Answer Correct": 10000
         },
         timeline: [
            { id: "eid7", tween: [ "color", "${_EllipseCopy5}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
            { id: "eid222", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid223", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid262", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
            { id: "eid251", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid252", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid263", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
            { id: "eid12", tween: [ "style", "${_EllipseCopy5}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }         ]
      }
   }
},
"AButton_3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'A_Button',
      type: 'group',
      rect: ['8px','16px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(232,241,160,1.00)']
      },
      {
         type: 'text',
         rect: ['0px','3px','27px','19px','auto','auto'],
         id: 'A',
         text: 'A<br><br><br>',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/check.png','0px','0px']
      },
      {
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/x.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_A_Button}": [
            ["style", "left", '8px'],
            ["style", "top", '16px']
         ],
         "${_A}": [
            ["style", "top", '3px'],
            ["style", "text-align", 'center'],
            ["style", "height", '19px'],
            ["style", "width", '27px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '25px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "height", '42px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${symbolSelector}": [
            ["style", "height", '42px'],
            ["style", "width", '153px']
         ],
         "${_x}": [
            ["style", "top", '-4px'],
            ["style", "display", 'none'],
            ["style", "height", '33px'],
            ["style", "left", '-8px'],
            ["style", "width", '42px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         labels: {
            "Nothing Selected": 0,
            "Answer Incorrect": 5000,
            "Answer Correct": 10000
         },
         timeline: [
            { id: "eid220", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid221", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid261", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
            { id: "eid259", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid260", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid42", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 }         ]
      }
   }
},
"AButton": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'A_Button',
      type: 'group',
      rect: ['8px','16px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(232,241,160,1.00)']
      },
      {
         rect: ['0px','3px','27px','19px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text3',
         text: 'A<br><br><br>',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['36px','3px','109px','19px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text9',
         text: 'Answer Text A',
         align: 'left',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_A_Button}": [
            ["style", "left", '8px'],
            ["style", "top", '16px']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '25px']
         ],
         "${symbolSelector}": [
            ["style", "height", '42px'],
            ["style", "width", '153px']
         ],
         "${_Text3}": [
            ["style", "top", '3px'],
            ["style", "text-align", 'center'],
            ["style", "height", '19px'],
            ["style", "width", '27px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_Text9}": [
            ["style", "top", '3px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '12px'],
            ["style", "left", '36px'],
            ["style", "width", '109px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "height", '42px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${_x}": [
            ["style", "top", '-4px'],
            ["style", "display", 'none'],
            ["style", "height", '33px'],
            ["style", "left", '-8px'],
            ["style", "width", '42px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         labels: {
            "Nothing Selected": 0,
            "Answer Selected": 5000
         },
         timeline: [
            { id: "eid220", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid221", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid259", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid260", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }         ]
      }
   }
},
"Answers_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group',
      type: 'group',
      rect: ['0px','2px','153','183','auto','auto'],
      c: [
      {
         id: 'EButton',
         type: 'rect',
         rect: ['8px','157px','auto','auto','auto','auto']
      },
      {
         id: 'DButton',
         type: 'rect',
         rect: ['8px','121px','auto','auto','auto','auto']
      },
      {
         id: 'CButton',
         type: 'rect',
         rect: ['8px','86px','auto','auto','auto','auto']
      },
      {
         id: 'BButton',
         type: 'rect',
         rect: ['8px','50px','auto','auto','auto','auto']
      },
      {
         id: 'AButton',
         type: 'rect',
         rect: ['0px','0px','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'DButton',
      symbolName: 'DButton_3'
   },
   {
      id: 'EButton',
      symbolName: 'EButton_3'
   },
   {
      id: 'BButton',
      symbolName: 'BButton_3'
   },
   {
      id: 'CButton',
      symbolName: 'CButton_3'
   },
   {
      id: 'AButton',
      symbolName: 'AButton_3'
   }   ]
   },
   states: {
      "Base State": {
         "${_Group}": [
            ["style", "top", '2px'],
            ["style", "left", '0px']
         ],
         "${_AnswerText}": [
            ["style", "top", '3px'],
            ["style", "width", '109px'],
            ["style", "left", '36px'],
            ["style", "font-size", '12px']
         ],
         "${_DButton}": [
            ["style", "left", '8px'],
            ["style", "top", '121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '187px'],
            ["style", "width", '156px']
         ],
         "${_BButton}": [
            ["style", "left", '8px'],
            ["style", "top", '50px']
         ],
         "${_EButton}": [
            ["style", "left", '8px'],
            ["style", "top", '157px']
         ],
         "${_CButton}": [
            ["style", "left", '8px'],
            ["style", "top", '86px']
         ],
         "${_AButton}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EdgeProblem");
