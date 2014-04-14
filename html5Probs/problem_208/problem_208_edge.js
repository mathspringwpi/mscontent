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
            rect:['15px','30px','413px','34px','auto','auto'],
            text:"If the triangles shown here have the same perimeter, what is the value of x? ",
            align:"left",
            font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Answers',
            type:'rect',
            rect:['48','181','auto','auto','auto','auto']
         },
         {
            id:'AnswerEText',
            type:'text',
            rect:['71px','329px','101px','20px','auto','auto'],
            text:"9",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerDText',
            type:'text',
            rect:['71px','293px','101px','20px','auto','auto'],
            text:"8",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerCText',
            type:'text',
            rect:['71px','257px','101px','19px','auto','auto'],
            text:"7<br>",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerBText',
            type:'text',
            rect:['71px','225px','112px','19px','auto','auto'],
            text:"6",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerAText',
            type:'text',
            rect:['71px','190px','109px','19px','auto','auto'],
            text:"5",
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
            id:'Problem',
            type:'group',
            rect:['56px','55px','244px','126','auto','auto'],
            c:[
            {
               id:'HTML_208_problem',
               type:'image',
               rect:['0px','0px','251px','126px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"HTML%20208%20problem.png",'0px','0px']
            },
            {
               id:'_6',
               type:'text',
               rect:['196px','75px','46px','20px','auto','auto'],
               text:"6<br>",
               align:"left",
               font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_7',
               type:'text',
               rect:['122px','72px','32px','19px','auto','auto'],
               text:"7<br>",
               align:"left",
               font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_10',
               type:'text',
               rect:['150px','117px','32px','19px','auto','auto'],
               text:"10<br>",
               align:"left",
               font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_x_left',
               type:'text',
               rect:['35px','30px','32px','20px','auto','auto'],
               text:"x",
               align:"left",
               font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_9_right',
               type:'text',
               rect:['84px','30px','32px','19px','auto','auto'],
               text:"9<br>",
               align:"left",
               font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_5',
               type:'text',
               rect:['62px','117px','46px','19px','auto','auto'],
               text:"5",
               align:"left",
               font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'Circle_the_triangle',
            display:'none',
            type:'ellipse',
            rect:['153px','101px','134px','95px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,255,255,0.00)"],
            stroke:[2,"rgba(224,17,17,1.00)","solid"]
         },
         {
            id:'hint1_2',
            type:'text',
            rect:['313px','140px','151px','15px','auto','auto'],
            text:"7+10+6=",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'hint1_1',
            display:'none',
            type:'text',
            rect:['307px','105px','234px','50px','auto','auto'],
            text:"What is the perimeter of this triangle?",
            align:"left",
            font:['Times New Roman, Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Triangle_right',
            type:'group',
            rect:['218','114','42','49','auto','auto'],
            c:[
            {
               id:'side6',
               display:'none',
               type:'rect',
               rect:['27px','40px','13px','0px','auto','auto'],
               fill:["rgba(228,28,28,1.00)"],
               stroke:[2,"rgb(224, 17, 17)","solid"],
               transform:[[],['52']]
            },
            {
               id:'side10',
               display:'none',
               type:'rect',
               rect:['-54px','46px','12px','0px','auto','auto'],
               fill:["rgba(228,28,28,1.00)"],
               stroke:[2,"rgb(224, 17, 17)","solid"]
            },
            {
               id:'side7',
               display:'none',
               type:'rect',
               rect:['-13px','5px','28px','0px','auto','auto'],
               fill:["rgba(228,28,28,1.00)"],
               stroke:[2,"rgb(224, 17, 17)","solid"],
               transform:[[],['-39']]
            }]
         },
         {
            id:'hint1_3',
            type:'text',
            rect:['368px','140px','112px','19px','auto','auto'],
            text:"(perimeter)",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'hint3_1_23',
            type:'text',
            rect:['368px','140px','90px','20px','auto','auto'],
            text:"23",
            align:"left",
            font:['Arial, Helvetica, sans-serif',12,"rgba(228,28,28,1.00)","normal","none","normal"]
         },
         {
            id:'hint3_5_23Copy',
            type:'text',
            rect:['368px','140px','90px','20px','auto','auto'],
            text:"23",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(228,28,28,1.00)","normal","none","normal"]
         },
         {
            id:'hint3_2',
            display:'none',
            type:'text',
            rect:['300px','200px','195px','19px','auto','auto'],
            text:"The perimeter of the first triangle:",
            align:"left",
            font:['Times New Roman, Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'hint3_3',
            type:'text',
            rect:['313px','225px','138px','19px','auto','auto'],
            text:"x + 5 + 9 =",
            align:"left",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'hint3_4_question_mark',
            type:'text',
            rect:['389px','225px','55px','19px','auto','auto'],
            text:"?",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Answer_Hint_1',
            type:'text',
            rect:['313px','266px','115px','28px','auto','auto'],
            text:"x + 14 = 23",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(13,12,12,1.00)","normal","none","normal"]
         },
         {
            id:'Answer_Hint_2',
            type:'text',
            rect:['316px','299px','90px','28px','auto','auto'],
            text:"x = 9",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(19,19,19,1.00)","normal","none","normal"]
         },
         {
            id:'Choose_E',
            type:'text',
            rect:['313px','329px','115px','28px','auto','auto'],
            text:"Choose (E)",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(43,116,4,1.00)","normal","none","normal"]
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
         "${__9_right}": [
            ["style", "left", '84px'],
            ["style", "top", '30px']
         ],
         "${_hint1_3}": [
            ["style", "top", '134px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '383px'],
            ["style", "font-size", '16px']
         ],
         "${__6}": [
            ["style", "left", '196px'],
            ["style", "top", '75px']
         ],
         "${_hint1_1}": [
            ["style", "top", '105px'],
            ["style", "font-size", '16px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '300px'],
            ["style", "width", '244px']
         ],
         "${_QuestionSound_Container}": [
            ["style", "display", 'none'],
            ["style", "height", '8px'],
            ["color", "background-color", 'rgba(248,250,248,0.00)'],
            ["style", "width", '17px']
         ],
         "${_Choose_E}": [
            ["color", "color", 'rgba(43,116,4,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '313px'],
            ["style", "top", '329px']
         ],
         "${__10}": [
            ["style", "left", '150px'],
            ["style", "top", '117px']
         ],
         "${_hint3_3}": [
            ["style", "width", '74px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '313px'],
            ["style", "font-size", '15px']
         ],
         "${_AnswerDText}": [
            ["style", "top", '293px'],
            ["style", "font-size", '14px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "width", '101px']
         ],
         "${_Question_Text}": [
            ["style", "top", '30px'],
            ["style", "width", '413px'],
            ["style", "height", '34px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '15px'],
            ["style", "font-size", '16px']
         ],
         "${_HTML_208_problem}": [
            ["style", "top", '0px'],
            ["style", "height", '126px'],
            ["style", "left", '0px'],
            ["style", "width", '251px']
         ],
         "${_hint3_1_23}": [
            ["style", "top", '134px'],
            ["color", "color", 'rgba(228,28,28,1.00)'],
            ["style", "opacity", '0'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '383px'],
            ["style", "font-size", '16px']
         ],
         "${__x_left}": [
            ["style", "top", '30px'],
            ["style", "height", '20px'],
            ["style", "left", '35px'],
            ["style", "width", '32px']
         ],
         "${_AnswerEText}": [
            ["style", "top", '329px'],
            ["style", "font-size", '14px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "width", '101px']
         ],
         "${_side7}": [
            ["style", "top", '5px'],
            ["color", "background-color", 'rgba(228,28,28,1.00)'],
            ["transform", "rotateZ", '-44deg'],
            ["style", "display", 'none'],
            ["style", "height", '4px'],
            ["style", "left", '-13px'],
            ["style", "width", '13px']
         ],
         "${_AnswerBText}": [
            ["style", "top", '225px'],
            ["style", "font-size", '14px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "width", '112px']
         ],
         "${_AnswerCText}": [
            ["style", "top", '257px'],
            ["style", "font-size", '14px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "width", '101px']
         ],
         "${_Circle_the_triangle}": [
            ["style", "top", '101px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "opacity", '1'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(224,17,17,1.00)'],
            ["style", "left", '153px'],
            ["style", "width", '134px']
         ],
         "${_Answers}": [
            ["style", "top", '168px'],
            ["style", "left", '24px']
         ],
         "${_Sound_Container}": [
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden']
         ],
         "${_Answer_Hint_1}": [
            ["style", "top", '266px'],
            ["style", "width", '115px'],
            ["color", "color", 'rgba(13,12,12,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '313px'],
            ["style", "font-size", '16px']
         ],
         "${_hint1_2}": [
            ["style", "top", '134px'],
            ["style", "height", '28px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '313px'],
            ["style", "font-size", '16px']
         ],
         "${_hint3_2}": [
            ["style", "font-size", '16px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "width", '221px']
         ],
         "${_hint3_5_23Copy}": [
            ["style", "top", '134px'],
            ["color", "color", 'rgba(228,28,28,1.00)'],
            ["style", "opacity", '0'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '383px'],
            ["style", "font-size", '16px']
         ],
         "${__5}": [
            ["style", "left", '62px'],
            ["style", "top", '117px']
         ],
         "${__7}": [
            ["style", "left", '122px'],
            ["style", "top", '72px']
         ],
         "${_Problem}": [
            ["style", "top", '55px'],
            ["style", "left", '56px'],
            ["style", "width", '244px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '600px'],
            ["style", "width", '600px']
         ],
         "${_side6}": [
            ["style", "top", '40px'],
            ["color", "background-color", 'rgba(228,28,28,1.00)'],
            ["transform", "rotateZ", '50deg'],
            ["style", "display", 'none'],
            ["style", "height", '4px'],
            ["style", "left", '27px'],
            ["style", "width", '13px']
         ],
         "${_Answer_Hint_2}": [
            ["style", "top", '299px'],
            ["color", "color", 'rgba(19,19,19,1.00)'],
            ["style", "opacity", '0'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '316px'],
            ["style", "font-size", '16px']
         ],
         "${_side10}": [
            ["style", "top", '46px'],
            ["color", "background-color", 'rgba(228,28,28,1.00)'],
            ["style", "height", '4px'],
            ["style", "display", 'none'],
            ["style", "left", '-51px'],
            ["style", "width", '12px']
         ],
         "${_hint3_4_question_mark}": [
            ["style", "opacity", '0'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '389px'],
            ["style", "font-size", '16px']
         ],
         "${_AnswerAText}": [
            ["style", "top", '190px'],
            ["style", "text-align", 'left'],
            ["style", "width", '109px'],
            ["style", "height", '19px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "font-size", '14px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 96667,
         autoPlay: true,
         labels: {
            "Read Question": 2000,
            "Hint 1": 10000,
            "Hint 2": 24000,
            "Hint 3": 27000,
            "Hint 4": 75000,
            "Answer Hint": 83000
         },
         timeline: [
            { id: "eid346", tween: [ "style", "${_hint3_4_question_mark}", "display", 'block', { fromValue: 'block'}], position: 57000, duration: 0, easing: "easeInExpo" },
            { id: "eid380", tween: [ "style", "${_hint1_1}", "font-size", '16px', { fromValue: '16px'}], position: 24000, duration: 0 },
            { id: "eid311", tween: [ "style", "${_side6}", "height", '0px', { fromValue: '4px'}], position: 21000, duration: 500, easing: "easeInExpo" },
            { id: "eid321", tween: [ "style", "${_hint3_1_23}", "display", 'block', { fromValue: 'block'}], position: 30000, duration: 0, easing: "easeInExpo" },
            { id: "eid305", tween: [ "style", "${_hint1_2}", "opacity", '1', { fromValue: '0'}], position: 24000, duration: 1000, easing: "easeInExpo" },
            { id: "eid360", tween: [ "style", "${_Answer_Hint_1}", "display", 'block', { fromValue: 'block'}], position: 83000, duration: 0 },
            { id: "eid302", tween: [ "style", "${_hint1_2}", "display", 'block', { fromValue: 'block'}], position: 24000, duration: 0, easing: "easeInExpo" },
            { id: "eid355", tween: [ "style", "${_hint3_5_23Copy}", "top", '225px', { fromValue: '134px'}], position: 75000, duration: 1000 },
            { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid325", tween: [ "style", "${_hint3_1_23}", "opacity", '1', { fromValue: '0'}], position: 30000, duration: 1000, easing: "easeInExpo" },
            { id: "eid229", tween: [ "style", "${_side6}", "width", '57px', { fromValue: '13px'}], position: 21000, duration: 500, easing: "easeInExpo" },
            { id: "eid381", tween: [ "style", "${_hint1_1}", "width", '244px', { fromValue: '244px'}], position: 24000, duration: 0 },
            { id: "eid385", tween: [ "style", "${_hint1_2}", "top", '134px', { fromValue: '134px'}], position: 24000, duration: 0 },
            { id: "eid403", tween: [ "style", "${_hint3_2}", "font-size", '16px', { fromValue: '16px'}], position: 55000, duration: 0, easing: "easeInExpo" },
            { id: "eid232", tween: [ "transform", "${_side6}", "rotateZ", '50deg', { fromValue: '50deg'}], position: 21500, duration: 0, easing: "easeInExpo" },
            { id: "eid228", tween: [ "style", "${_side6}", "left", '-10px', { fromValue: '27px'}], position: 21000, duration: 500, easing: "easeInExpo" },
            { id: "eid271", tween: [ "style", "${_side7}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0, easing: "easeInExpo" },
            { id: "eid402", tween: [ "style", "${_hint3_1_23}", "top", '134px', { fromValue: '134px'}], position: 31000, duration: 0 },
            { id: "eid352", tween: [ "style", "${_hint3_5_23Copy}", "opacity", '1', { fromValue: '0'}], position: 30000, duration: 1000, easing: "easeInExpo" },
            { id: "eid354", tween: [ "style", "${_hint3_5_23Copy}", "opacity", '1', { fromValue: '1'}], position: 75000, duration: 0 },
            { id: "eid351", tween: [ "style", "${_hint3_5_23Copy}", "display", 'block', { fromValue: 'block'}], position: 30000, duration: 0, easing: "easeInExpo" },
            { id: "eid353", tween: [ "style", "${_hint3_5_23Copy}", "display", 'block', { fromValue: 'block'}], position: 75000, duration: 0 },
            { id: "eid170", tween: [ "style", "${_Circle_the_triangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInExpo" },
            { id: "eid160", tween: [ "style", "${_Circle_the_triangle}", "display", 'none', { fromValue: 'none'}], position: 10000, duration: 0 },
            { id: "eid176", tween: [ "style", "${_Circle_the_triangle}", "display", 'block', { fromValue: 'none'}], position: 11250, duration: 0, easing: "easeInExpo" },
            { id: "eid177", tween: [ "style", "${_Circle_the_triangle}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0, easing: "easeInExpo" },
            { id: "eid178", tween: [ "style", "${_Circle_the_triangle}", "display", 'block', { fromValue: 'none'}], position: 11750, duration: 0, easing: "easeInExpo" },
            { id: "eid167", tween: [ "style", "${_Circle_the_triangle}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0, easing: "easeInExpo" },
            { id: "eid171", tween: [ "style", "${_Circle_the_triangle}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0, easing: "easeInExpo" },
            { id: "eid172", tween: [ "style", "${_Circle_the_triangle}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0, easing: "easeInExpo" },
            { id: "eid173", tween: [ "style", "${_Circle_the_triangle}", "display", 'block', { fromValue: 'none'}], position: 12750, duration: 0, easing: "easeInExpo" },
            { id: "eid174", tween: [ "style", "${_Circle_the_triangle}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInExpo" },
            { id: "eid179", tween: [ "style", "${_Circle_the_triangle}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0, easing: "easeInExpo" },
            { id: "eid180", tween: [ "style", "${_Circle_the_triangle}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0, easing: "easeInExpo" },
            { id: "eid181", tween: [ "style", "${_Circle_the_triangle}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0, easing: "easeInExpo" },
            { id: "eid182", tween: [ "style", "${_Circle_the_triangle}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0, easing: "easeInExpo" },
            { id: "eid183", tween: [ "style", "${_Circle_the_triangle}", "display", 'block', { fromValue: 'none'}], position: 14250, duration: 0, easing: "easeInExpo" },
            { id: "eid184", tween: [ "style", "${_Circle_the_triangle}", "display", 'none', { fromValue: 'block'}], position: 14500, duration: 0, easing: "easeInExpo" },
            { id: "eid185", tween: [ "style", "${_Circle_the_triangle}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0, easing: "easeInExpo" },
            { id: "eid186", tween: [ "style", "${_Circle_the_triangle}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0, easing: "easeInExpo" },
            { id: "eid187", tween: [ "style", "${_Circle_the_triangle}", "display", 'block', { fromValue: 'none'}], position: 15250, duration: 0, easing: "easeInExpo" },
            { id: "eid188", tween: [ "style", "${_Circle_the_triangle}", "display", 'none', { fromValue: 'block'}], position: 15500, duration: 0, easing: "easeInExpo" },
            { id: "eid189", tween: [ "style", "${_Circle_the_triangle}", "display", 'block', { fromValue: 'none'}], position: 15750, duration: 0, easing: "easeInExpo" },
            { id: "eid197", tween: [ "style", "${_Circle_the_triangle}", "display", 'block', { fromValue: 'block'}], position: 17000, duration: 0, easing: "easeInExpo" },
            { id: "eid404", tween: [ "style", "${_hint3_2}", "width", '221px', { fromValue: '221px'}], position: 55000, duration: 0, easing: "easeInExpo" },
            { id: "eid344", tween: [ "style", "${_hint3_3}", "opacity", '1', { fromValue: '0'}], position: 57000, duration: 1000, easing: "easeInExpo" },
            { id: "eid161", tween: [ "style", "${_Circle_the_triangle}", "opacity", '1', { fromValue: '1'}], position: 10000, duration: 0 },
            { id: "eid198", tween: [ "style", "${_Circle_the_triangle}", "opacity", '1', { fromValue: '1'}], position: 17000, duration: 0, easing: "easeInExpo" },
            { id: "eid208", tween: [ "style", "${_Circle_the_triangle}", "opacity", '0', { fromValue: '1'}], position: 19000, duration: 1000, easing: "easeInExpo" },
            { id: "eid350", tween: [ "style", "${_hint3_4_question_mark}", "opacity", '1', { fromValue: '0'}], position: 57000, duration: 1000, easing: "easeInExpo" },
            { id: "eid359", tween: [ "style", "${_hint3_4_question_mark}", "opacity", '0', { fromValue: '1'}], position: 75000, duration: 1000 },
            { id: "eid297", tween: [ "style", "${_side10}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0, easing: "easeInExpo" },
            { id: "eid401", tween: [ "style", "${_hint3_1_23}", "left", '383px', { fromValue: '383px'}], position: 31000, duration: 0 },
            { id: "eid313", tween: [ "style", "${_hint1_3}", "display", 'block', { fromValue: 'block'}], position: 24000, duration: 0, easing: "easeInExpo" },
            { id: "eid364", tween: [ "style", "${_Answer_Hint_1}", "opacity", '1', { fromValue: '0'}], position: 83000, duration: 1000 },
            { id: "eid289", tween: [ "style", "${_side7}", "width", '64px', { fromValue: '13px'}], position: 20000, duration: 500, easing: "easeInExpo" },
            { id: "eid345", tween: [ "style", "${_hint3_3}", "width", '74px', { fromValue: '74px'}], position: 58000, duration: 0, easing: "easeInExpo" },
            { id: "eid287", tween: [ "style", "${_side7}", "top", '21px', { fromValue: '5px'}], position: 20000, duration: 500, easing: "easeInExpo" },
            { id: "eid317", tween: [ "style", "${_hint1_3}", "opacity", '1', { fromValue: '0'}], position: 24000, duration: 1000, easing: "easeInExpo" },
            { id: "eid328", tween: [ "style", "${_hint1_3}", "opacity", '0', { fromValue: '1'}], position: 29000, duration: 1000, easing: "easeInExpo" },
            { id: "eid375", tween: [ "style", "${_Answer_Hint_2}", "display", 'block', { fromValue: 'block'}], position: 87000, duration: 0 },
            { id: "eid330", tween: [ "style", "${_hint1_1}", "left", '300px', { fromValue: '300px'}], position: 54000, duration: 0, easing: "easeInExpo" },
            { id: "eid290", tween: [ "style", "${_side10}", "left", '-51px', { fromValue: '-51px'}], position: 20500, duration: 0, easing: "easeInExpo" },
            { id: "eid407", tween: [ "style", "${_Choose_E}", "opacity", '1', { fromValue: '0.000000'}], position: 89000, duration: 1000 },
            { id: "eid382", tween: [ "style", "${_hint1_2}", "font-size", '16px', { fromValue: '16px'}], position: 25746, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid340", tween: [ "style", "${_hint3_3}", "display", 'block', { fromValue: 'block'}], position: 57000, duration: 0, easing: "easeInExpo" },
            { id: "eid331", tween: [ "style", "${_hint3_2}", "display", 'block', { fromValue: 'none'}], position: 54000, duration: 0, easing: "easeInExpo" },
            { id: "eid309", tween: [ "style", "${_side7}", "height", '0px', { fromValue: '4px'}], position: 20000, duration: 500, easing: "easeInExpo" },
            { id: "eid296", tween: [ "style", "${_side10}", "width", '86px', { fromValue: '12px'}], position: 20500, duration: 500, easing: "easeInExpo" },
            { id: "eid291", tween: [ "style", "${_side10}", "top", '46px', { fromValue: '46px'}], position: 20500, duration: 0, easing: "easeInExpo" },
            { id: "eid219", tween: [ "style", "${_side6}", "top", '23px', { fromValue: '40px'}], position: 21000, duration: 500, easing: "easeInExpo" },
            { id: "eid310", tween: [ "style", "${_side10}", "height", '0px', { fromValue: '4px'}], position: 20500, duration: 500, easing: "easeInExpo" },
            { id: "eid205", tween: [ "style", "${_hint1_1}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 1500, easing: "easeInExpo" },
            { id: "eid356", tween: [ "style", "${_hint3_5_23Copy}", "left", '389px', { fromValue: '383px'}], position: 75000, duration: 1000 },
            { id: "eid379", tween: [ "style", "${_Answer_Hint_2}", "opacity", '1', { fromValue: '0'}], position: 87000, duration: 1000 },
            { id: "eid199", tween: [ "style", "${_hint1_1}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeInExpo" },
            { id: "eid201", tween: [ "style", "${_hint1_1}", "display", 'block', { fromValue: 'block'}], position: 18500, duration: 0, easing: "easeInExpo" },
            { id: "eid374", tween: [ "color", "${_hint3_1_23}", "color", 'rgba(102,96,96,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(228,28,28,1)'}], position: 83000, duration: 1000 },
            { id: "eid339", tween: [ "style", "${_hint3_2}", "opacity", '1', { fromValue: '0'}], position: 54000, duration: 1000, easing: "easeInExpo" },
            { id: "eid288", tween: [ "style", "${_side7}", "left", '-58px', { fromValue: '-13px'}], position: 20000, duration: 500, easing: "easeInExpo" },
            { id: "eid371", tween: [ "color", "${_hint1_2}", "color", 'rgba(102,96,96,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 83000, duration: 1000 },
            { id: "eid279", tween: [ "style", "${_side6}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0, easing: "easeInExpo" },
            { id: "eid398", tween: [ "style", "${_hint3_1_23}", "font-size", '16px', { fromValue: '16px'}], position: 30000, duration: 0 },
            { id: "eid368", tween: [ "color", "${_hint1_1}", "color", 'rgba(102,96,96,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 83000, duration: 1000 }         ]
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
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text8',
         text: 'E',
         align: 'center',
         rect: ['0px','4px','27px','20px','auto','auto']
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
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text8',
         text: 'E',
         align: 'center',
         type: 'text'
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
         type: 'text',
         rect: ['0px','4px','27px','20px','auto','auto'],
         id: 'Text8',
         text: 'E',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['36px','4px','101px','20px','auto','auto'],
         id: 'Text14',
         text: 'Answer E Text',
         align: 'left',
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal']
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
         type: 'text',
         rect: ['0px','4px','27px','20px','auto','auto'],
         id: 'Text8',
         text: 'E',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['36px','4px','101px','20px','auto','auto'],
         id: 'Text14',
         text: 'Answer E Text',
         align: 'left',
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal']
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
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         type: 'text'
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
         type: 'text',
         rect: ['0px','4px','27px','20px','auto','auto'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['36px','4px','101px','20px','auto','auto'],
         id: 'Text13',
         text: 'Answer D Text',
         align: 'left',
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal']
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
         type: 'text',
         rect: ['0px','4px','27px','20px','auto','auto'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['36px','4px','101px','20px','auto','auto'],
         id: 'Text13',
         text: 'Answer D Text',
         align: 'left',
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal']
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
         type: 'text',
         rect: ['0px','4px','27px','20px','auto','auto'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['36px','4px','94px','20px','auto','auto'],
         id: 'Text13',
         text: 'Answer Text D',
         align: 'left',
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal']
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
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text5',
         text: 'C',
         align: 'center',
         type: 'text'
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
         rect: ['0px','5px','27px','19px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text4',
         text: 'B',
         align: 'center',
         type: 'text'
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
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'A',
         text: 'A<br><br><br>',
         align: 'center',
         rect: ['0px','3px','27px','19px','auto','auto']
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
         type: 'text',
         rect: ['0px','3px','27px','19px','auto','auto'],
         id: 'Text3',
         text: 'A<br><br><br>',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['36px','3px','109px','19px','auto','auto'],
         id: 'Text9',
         text: 'Answer Text A',
         align: 'left',
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal']
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
