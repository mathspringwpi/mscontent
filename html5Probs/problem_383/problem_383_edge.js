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
            rect:['15px','30px','219px','138px','auto','auto'],
            text:"Mia is going to walk, jog and run a total distance of 24 miles for charity.  She plans to walk ",
            align:"left",
            font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Answers',
            type:'rect',
            rect:['24px','168px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'AnswerDText',
            type:'text',
            rect:['71px','293px','101px','20px','auto','auto'],
            text:"18 miles",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerCText',
            type:'text',
            rect:['71px','257px','101px','19px','auto','auto'],
            text:"12 miles",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerBText',
            type:'text',
            rect:['71px','225px','112px','19px','auto','auto'],
            text:"10 miles",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerAText',
            type:'text',
            rect:['71px','190px','56px','19px','auto','auto'],
            text:"5 miles",
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
            id:'Hint_6_14',
            type:'text',
            rect:['385px','113px','20px','15px','auto','auto'],
            text:"14",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(199,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'AnswerEText',
            type:'text',
            rect:['71px','329px','101px','20px','auto','auto'],
            text:"14 miles",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Problem_statement',
            type:'group',
            rect:['163px','87px','20','30','auto','auto'],
            c:[
            {
               id:'HTML_problem2',
               type:'image',
               rect:['5px','0px','20px','30px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"HTML%20problem2.png",'0px','0px']
            },
            {
               id:'HTML_problem1',
               type:'image',
               rect:['17px','-21px','26px','28px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"HTML%20problem1.png",'0px','0px']
            },
            {
               id:'_1',
               type:'text',
               rect:['-149px','6px','156px','27px','auto','auto'],
               text:"of the total distance, jog",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_2',
               type:'text',
               rect:['28px','7px','46px','19px','auto','auto'],
               text:"of the ",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_3',
               type:'text',
               rect:['-149px','35px','219px','46px','auto','auto'],
               text:"total distance, and run the remaining distance. What is the distance that Mia plans to run?",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'Hint_1_Total_distance_bar',
            type:'group',
            rect:['255','72','240px','30','auto','auto'],
            c:[
            {
               id:'Rectangle',
               type:'rect',
               rect:['0px','0px','236px','26px','auto','auto'],
               fill:["rgba(192,192,192,0)"],
               stroke:[2,"rgb(3, 3, 3)","solid"]
            },
            {
               id:'_0',
               type:'text',
               rect:['0px','41px','20px','19px','auto','auto'],
               text:"0",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_24',
               type:'text',
               rect:['222px','41px','20px','19px','auto','auto'],
               text:"24<br>",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'Hint1_text',
            type:'text',
            rect:['235px','257px','247px','27px','auto','auto'],
            text:"How many miles does Mia walk?",
            align:"left",
            font:['Times New Roman, Times, serif',18,"rgba(199,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'Hint_4_jog_equation',
            type:'group',
            rect:['275px','288px','72','30','auto','auto'],
            c:[
            {
               id:'of_24_equals',
               type:'text',
               rect:['-7px','7px','72px','30px','auto','auto'],
               text:"of 24 =",
               align:"left",
               font:['Arial, Helvetica, sans-serif',20,"rgba(1,29,231,1.00)","normal","none","normal"]
            },
            {
               id:'Hint4a',
               type:'image',
               rect:['-31px','-2px','16px','33px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"Hint4a.png",'0px','0px']
            },
            {
               id:'times_24_equals',
               type:'text',
               rect:['89px','7px','60px','27px','auto','auto'],
               text:"x 24 =",
               align:"left",
               font:['Arial, Helvetica, sans-serif',20,"rgba(1,29,231,1.00)","normal","none","normal"]
            },
            {
               id:'Hint4aCopy2',
               type:'image',
               rect:['64px','-3px','16px','34px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"Hint4a.png",'0px','0px']
            },
            {
               id:'Hint4b',
               type:'image',
               rect:['152px','1px','24px','34px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"Hint4b.png",'0px','0px']
            },
            {
               id:'equals_6',
               type:'text',
               rect:['190px','7px','80px','15px','auto','auto'],
               text:"= 6",
               align:"left",
               font:['Arial, Helvetica, sans-serif',20,"rgba(1,29,231,1)","normal","none","normal"]
            }]
         },
         {
            id:'Hint_3_text',
            type:'text',
            rect:['244px','324px','237px','30px','auto','auto'],
            text:"How many miles does Mia jog ?",
            align:"left",
            font:['\'Times New Roman\', Times, serif',18,"rgba(74,72,72,1)","normal","none","normal"]
         },
         {
            id:'Hint_2_Text',
            type:'group',
            rect:['261px','218px','101','20','auto','auto'],
            c:[
            {
               id:'of_24',
               type:'text',
               rect:['0px','0px','72px','20px','auto','auto'],
               text:"of 24 = ",
               align:"left",
               font:['Verdana, Geneva, sans-serif',18,"rgba(3,26,244,1.00)","normal","none","normal"]
            },
            {
               id:'Hint2a',
               type:'image',
               rect:['-26px','-11px','14px','38px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"Hint2a.png",'0px','0px']
            },
            {
               id:'Hint2aCopy',
               type:'image',
               rect:['72px','-9px','14px','35px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"Hint2a.png",'0px','0px']
            },
            {
               id:'_24_equals',
               type:'text',
               rect:['94px','0px','78px','23px','auto','auto'],
               text:"x 24 = ",
               align:"left",
               font:['Verdana, Geneva, sans-serif',18,"rgba(3,26,244,1)","normal","none","normal"]
            },
            {
               id:'Hint2c',
               type:'image',
               rect:['158px','-8px','25px','39px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"Hint2c.png",'0px','0px']
            },
            {
               id:'_8',
               type:'text',
               rect:['196px','0px','72px','19px','auto','auto'],
               text:"= 8",
               align:"left",
               font:['Verdana, Geneva, sans-serif',18,"rgba(3,26,244,1)","normal","none","normal"]
            }]
         },
         {
            id:'Hint2_Walk_bar',
            type:'group',
            rect:['255','145px','240px','30','auto','auto'],
            c:[
            {
               id:'RectangleCopy',
               type:'rect',
               rect:['0px','0px','236px','26px','auto','auto'],
               fill:["rgba(192,192,192,0)"],
               stroke:[2,"rgb(3, 3, 3)","solid"]
            },
            {
               id:'_0Copy',
               type:'text',
               rect:['0px','41px','20px','19px','auto','auto'],
               text:"0",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_24Copy',
               type:'text',
               rect:['222px','41px','20px','19px','auto','auto'],
               text:"24<br>",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'mark',
               type:'rect',
               rect:['78px','0px','0px','26px','auto','auto'],
               fill:["rgba(104,191,243,1)"],
               stroke:[2,"rgb(3, 3, 3)","solid"]
            },
            {
               id:'Hint2_8',
               type:'text',
               rect:['75px','41px','19px','15px','auto','auto'],
               text:"8",
               align:"left",
               font:['Times New Roman, Times, serif',16,"rgba(199,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'Walk_8',
               type:'rect',
               rect:['0px','0px','6px','26px','auto','auto'],
               fill:["rgba(104,191,243,1.00)"],
               stroke:[2,"rgb(3, 3, 3)","solid"]
            }]
         },
         {
            id:'Hint_6_Walk__blue_8_bar',
            type:'rect',
            rect:['255px','145px','74px','26px','auto','auto'],
            fill:["rgba(104,191,243,1.00)"],
            stroke:[2,"rgb(3, 3, 3)","solid"]
         },
         {
            id:'Walk_text',
            type:'text',
            rect:['278px','153px','37px','15px','auto','auto'],
            text:"Walk",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint_4_jogging_bar',
            type:'group',
            rect:['255','223px','240px','30','auto','auto'],
            c:[
            {
               id:'RectangleCopy2',
               type:'rect',
               rect:['0px','0px','236px','26px','auto','auto'],
               fill:["rgba(192,192,192,0)"],
               stroke:[2,"rgb(3, 3, 3)","solid"]
            },
            {
               id:'_0Copy2',
               type:'text',
               rect:['0px','41px','20px','19px','auto','auto'],
               text:"0",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_24Copy2',
               type:'text',
               rect:['222px','41px','20px','19px','auto','auto'],
               text:"24<br>",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'markCopy',
               type:'rect',
               rect:['59px','0px','0px','26px','auto','auto'],
               fill:["rgba(104,191,243,1)"],
               stroke:[2,"rgb(3, 3, 3)","solid"]
            },
            {
               id:'_6',
               type:'text',
               rect:['56px','42px','29px','16px','auto','auto'],
               text:"6",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(199,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'Jog_6',
               type:'rect',
               rect:['1px','1px','8px','26px','auto','auto'],
               fill:["rgba(104,191,243,1)"],
               stroke:[2,"rgb(3, 3, 3)","solid"]
            }]
         },
         {
            id:'Hint_6_jog_yellow_6_bar',
            type:'rect',
            rect:['1px','1px','57px','26px','auto','auto'],
            fill:["rgba(104,191,243,1)"],
            stroke:[2,"rgb(3, 3, 3)","solid"]
         },
         {
            id:'Jog_text',
            type:'text',
            rect:['275px','230px','23px','27px','auto','auto'],
            text:"Jog",
            align:"left",
            font:['\'Times New Roman\', Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint5_text',
            type:'text',
            rect:['206px','305px','292px','35px','auto','auto'],
            text:"What is the remaining distance that Mia plans to run?",
            align:"left",
            font:['\'Times New Roman\', Times, serif',18,"rgba(199,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'Hint_6_8',
            type:'text',
            rect:['329px','113px','16px','15px','auto','auto'],
            text:"8<br>",
            align:"left",
            font:['\'Times New Roman\', Times, serif',16,"rgba(199,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'Hint_6_Walk_text_',
            type:'text',
            rect:['275px','79px','29px','15px','auto','auto'],
            text:"Walk",
            align:"left",
            font:['\'Times New Roman\', Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint_6_jog_text',
            type:'text',
            rect:['354px','80px','26px','15px','auto','auto'],
            text:"Jog",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint_6_run',
            type:'text',
            rect:['423px','81px','54px','15px','auto','auto'],
            text:"Run ?",
            align:"left",
            font:['\'Times New Roman\', Times, serif',14,"rgba(199,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'Answer_Hint_Run_equals',
            type:'text',
            rect:['405px','79px','62px','16px','auto','auto'],
            text:"Run =",
            align:"left",
            font:['\'Times New Roman\', Times, serif',16,"rgba(199,0,0,1)","normal","none","normal"]
         },
         {
            id:'Answer_hint_1',
            type:'text',
            rect:['252px','288px','279px','25px','auto','auto'],
            text:"Total distance - (walk + jog) = run",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(199,0,0,1)","normal","none","normal"]
         },
         {
            id:'Answer_Hint_2',
            type:'text',
            rect:['335px','312px','193px','27px','auto','auto'],
            text:"24 - (8 + 6) = ?",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(199,0,0,1)","normal","none","normal"]
         },
         {
            id:'Answer_Hint_3',
            type:'text',
            rect:['336px','334px','156px','15px','auto','auto'],
            text:"24 - 14 = 10",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(199,0,0,1)","normal","none","normal"]
         },
         {
            id:'Answer_Hint_4',
            type:'text',
            rect:['223px','323px','81px','16px','auto','auto'],
            text:"Choose (B)",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(16,142,7,1.00)","normal","none","normal"]
         },
         {
            id:'Answer_Hint_run_10',
            type:'text',
            rect:['401px','334px','38px','21px','auto','auto'],
            text:"10<br>",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(199,0,0,1)","normal","none","normal"]
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
         "${__0Copy}": [
            ["style", "top", '41px'],
            ["style", "left", '0px']
         ],
         "${_Hint_6_jog_text}": [
            ["style", "top", '80px'],
            ["style", "opacity", '0'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '354px'],
            ["style", "font-size", '14px']
         ],
         "${_Hint4aCopy2}": [
            ["style", "top", '-3px'],
            ["style", "height", '34px'],
            ["style", "opacity", '0'],
            ["style", "left", '64px'],
            ["style", "width", '16px']
         ],
         "${_Hint_6_8}": [
            ["style", "top", '113px'],
            ["color", "color", 'rgba(199,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '329px'],
            ["style", "font-size", '16px']
         ],
         "${__2}": [
            ["style", "left", '28px'],
            ["style", "top", '7px']
         ],
         "${_Hint5_text}": [
            ["style", "top", '305px'],
            ["color", "color", 'rgba(199,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '206px'],
            ["style", "width", '292px']
         ],
         "${_QuestionSound_Container}": [
            ["style", "display", 'none'],
            ["style", "height", '8px'],
            ["color", "background-color", 'rgba(248,250,248,0.00)'],
            ["style", "width", '17px']
         ],
         "${_Hint_6_run}": [
            ["style", "top", '81px'],
            ["style", "width", '54px'],
            ["color", "color", 'rgba(199,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '423px'],
            ["style", "font-size", '32px']
         ],
         "${__24Copy}": [
            ["style", "left", '222px'],
            ["style", "top", '41px']
         ],
         "${_HTML_problem1}": [
            ["style", "top", '-21px'],
            ["style", "height", '28px'],
            ["style", "left", '17px'],
            ["style", "width", '26px']
         ],
         "${_AnswerDText}": [
            ["style", "top", '293px'],
            ["style", "width", '101px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "font-size", '14px']
         ],
         "${_Walk_text}": [
            ["style", "top", '153px'],
            ["style", "width", '37px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "height", '15px'],
            ["style", "opacity", '0'],
            ["style", "left", '278px'],
            ["style", "font-size", '14px']
         ],
         "${_mark}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '78px'],
            ["style", "height", '26px']
         ],
         "${__3}": [
            ["style", "top", '35px'],
            ["style", "left", '-149px'],
            ["style", "width", '219px']
         ],
         "${_Hint4b}": [
            ["style", "top", '1px'],
            ["style", "height", '34px'],
            ["style", "opacity", '0'],
            ["style", "left", '152px'],
            ["style", "width", '24px']
         ],
         "${__0}": [
            ["style", "top", '41px'],
            ["style", "left", '0px']
         ],
         "${_Hint2_Walk_bar}": [
            ["style", "top", '145px'],
            ["style", "opacity", '0.000000'],
            ["style", "width", '240px']
         ],
         "${_of_24}": [
            ["style", "top", '0px'],
            ["style", "font-size", '18px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["color", "color", 'rgba(3,26,244,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '72px']
         ],
         "${_Answer_Hint_3}": [
            ["style", "top", '334px'],
            ["style", "opacity", '0'],
            ["style", "left", '336px']
         ],
         "${_Hint_3_text}": [
            ["style", "top", '324px'],
            ["style", "opacity", '0'],
            ["style", "left", '244px'],
            ["color", "color", 'rgba(199,0,0,1.00)']
         ],
         "${_Hint_1_Total_distance_bar}": [
            ["style", "opacity", '0'],
            ["style", "width", '240px']
         ],
         "${_Hint_6_jog_yellow_6_bar}": [
            ["style", "top", '223px'],
            ["color", "background-color", 'rgba(243,229,104,1.00)'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '255px'],
            ["style", "width", '57px']
         ],
         "${_Hint_6_Walk__blue_8_bar}": [
            ["style", "top", '145px'],
            ["color", "background-color", 'rgba(104,191,243,1.00)'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '255px'],
            ["style", "width", '76px']
         ],
         "${_TutorialText}": [
            ["style", "top", '51px'],
            ["style", "height", '187px'],
            ["style", "opacity", '1'],
            ["style", "left", '260px'],
            ["style", "display", 'none']
         ],
         "${_Walk_8}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(104,191,243,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '6px']
         ],
         "${_Sound_Container}": [
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden']
         ],
         "${_HTML_problem2}": [
            ["style", "top", '0px'],
            ["style", "height", '30px'],
            ["style", "left", '5px'],
            ["style", "width", '20px']
         ],
         "${_Answer_Hint_4}": [
            ["style", "top", '323px'],
            ["style", "opacity", '0'],
            ["style", "left", '223px'],
            ["color", "color", 'rgba(16,142,7,1.00)']
         ],
         "${_markCopy}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '59px'],
            ["style", "height", '26px']
         ],
         "${_of_24_equals}": [
            ["style", "top", '7px'],
            ["color", "color", 'rgba(1,29,231,1.00)'],
            ["style", "opacity", '0'],
            ["style", "height", '30px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '-7px'],
            ["style", "font-size", '20px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '600px'],
            ["style", "width", '600px']
         ],
         "${_Hint2a}": [
            ["style", "top", '-11px'],
            ["style", "height", '38px'],
            ["style", "opacity", '0'],
            ["style", "left", '-26px'],
            ["style", "width", '14px']
         ],
         "${_Hint2c}": [
            ["style", "top", '-8px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0'],
            ["style", "left", '158px'],
            ["style", "width", '25px']
         ],
         "${_Hint_4_jogging_bar}": [
            ["style", "top", '223px'],
            ["style", "opacity", '0.000000'],
            ["style", "width", '240px']
         ],
         "${_Hint2_8}": [
            ["style", "top", '41px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(199,0,0,1.00)'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '75px'],
            ["style", "font-size", '16px']
         ],
         "${_Hint1_text}": [
            ["style", "top", '257px'],
            ["style", "font-size", '18px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["color", "color", 'rgba(199,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '235px'],
            ["style", "width", '247px']
         ],
         "${_Question_Text}": [
            ["style", "top", '30px'],
            ["style", "width", '219px'],
            ["style", "height", '138px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '15px'],
            ["style", "font-size", '16px']
         ],
         "${__24}": [
            ["style", "left", '222px'],
            ["style", "top", '41px']
         ],
         "${_Hint_6_14}": [
            ["style", "top", '113px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(199,0,0,1.00)'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '385px'],
            ["style", "font-size", '14px']
         ],
         "${_equals_6}": [
            ["style", "top", '7px'],
            ["style", "opacity", '0'],
            ["style", "left", '190px']
         ],
         "${_Hint2aCopy}": [
            ["style", "top", '-9px'],
            ["style", "height", '35px'],
            ["style", "opacity", '0'],
            ["style", "left", '72px'],
            ["style", "width", '14px']
         ],
         "${__24Copy2}": [
            ["style", "left", '222px'],
            ["style", "top", '41px']
         ],
         "${_Answer_Hint_Run_equals}": [
            ["style", "top", '79px'],
            ["style", "opacity", '0'],
            ["style", "left", '405px'],
            ["style", "font-size", '16px']
         ],
         "${_AnswerEText}": [
            ["style", "top", '329px'],
            ["style", "width", '101px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "font-size", '14px']
         ],
         "${_of_24_equalsCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '30px'],
            ["color", "color", 'rgba(1,29,231,1)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '20px']
         ],
         "${_AnswerBText}": [
            ["style", "top", '225px'],
            ["style", "width", '112px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "font-size", '14px']
         ],
         "${__24_equals}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "height", '23px']
         ],
         "${_AnswerCText}": [
            ["style", "top", '257px'],
            ["style", "width", '101px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "font-size", '14px']
         ],
         "${_AnswerAText}": [
            ["style", "top", '190px'],
            ["style", "text-align", 'left'],
            ["style", "width", '56px'],
            ["style", "height", '19px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "font-size", '14px']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '236px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '236px']
         ],
         "${__0Copy2}": [
            ["style", "top", '41px'],
            ["style", "left", '0px']
         ],
         "${_Answers}": [
            ["style", "top", '168px'],
            ["style", "left", '24px']
         ],
         "${_Jog_6}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(243,229,104,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '8px']
         ],
         "${_Jog_text}": [
            ["style", "top", '230px'],
            ["style", "opacity", '0'],
            ["style", "left", '275px'],
            ["style", "width", '23px']
         ],
         "${_times_24_equals}": [
            ["style", "top", '7px'],
            ["style", "width", '60px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(1,29,231,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '89px'],
            ["style", "font-size", '20px']
         ],
         "${__6}": [
            ["style", "top", '42px'],
            ["color", "color", 'rgba(199,0,0,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["style", "left", '56px'],
            ["style", "font-size", '16px']
         ],
         "${_Hint4a}": [
            ["style", "top", '-2px'],
            ["style", "height", '33px'],
            ["style", "opacity", '0'],
            ["style", "left", '-31px'],
            ["style", "width", '16px']
         ],
         "${_Hint_6_Walk_text_}": [
            ["style", "top", '79px'],
            ["style", "opacity", '0'],
            ["style", "left", '275px']
         ],
         "${_Answer_hint_1}": [
            ["style", "top", '288px'],
            ["style", "opacity", '0'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '252px'],
            ["style", "font-size", '16px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '236px']
         ],
         "${_Answer_Hint_run_10}": [
            ["style", "top", '334px'],
            ["style", "height", '21px'],
            ["style", "opacity", '0'],
            ["style", "left", '402px'],
            ["style", "width", '38px']
         ],
         "${__8}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '196px']
         ],
         "${_Answer_Hint_2}": [
            ["style", "top", '312px'],
            ["style", "opacity", '0'],
            ["style", "left", '335px']
         ],
         "${_Hint_2_Text}": [
            ["style", "top", '218px'],
            ["style", "opacity", '1'],
            ["style", "left", '261px']
         ],
         "${_Hint_4_jog_equation}": [
            ["style", "top", '288px'],
            ["style", "opacity", '1'],
            ["style", "left", '275px']
         ],
         "${__1}": [
            ["style", "top", '6px'],
            ["style", "left", '-149px'],
            ["style", "width", '156px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 187000,
         autoPlay: true,
         labels: {
            "Read Question": 2000,
            "Hint 1": 25000,
            "Hint 2": 51000,
            "Hint 3": 87000,
            "Hint 4": 99000,
            "Hint 5": 132000,
            "Hint 6": 147000,
            "Answer Hint": 172000
         },
         timeline: [
            { id: "eid214", tween: [ "color", "${_Walk_8}", "background-color", 'rgba(104,191,243,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(104,191,243,1.00)'}], position: 79500, duration: 0 },
            { id: "eid242", tween: [ "style", "${_Hint4a}", "opacity", '1', { fromValue: '0.000000'}], position: 111000, duration: 1000 },
            { id: "eid213", tween: [ "style", "${_Walk_8}", "opacity", '1', { fromValue: '0.000000'}], position: 79000, duration: 500 },
            { id: "eid347", tween: [ "style", "${_Hint_6_14}", "opacity", '1', { fromValue: '0.000000'}], position: 168000, duration: 1000, easing: "easeInCubic" },
            { id: "eid248", tween: [ "style", "${_Hint4aCopy2}", "opacity", '1', { fromValue: '0.000000'}], position: 113000, duration: 1000 },
            { id: "eid369", tween: [ "style", "${_Answer_Hint_run_10}", "left", '451px', { fromValue: '402px'}], position: 179750, duration: 2250, easing: "easeInCubic" },
            { id: "eid289", tween: [ "style", "${_Jog_6}", "top", '0px', { fromValue: '0px'}], position: 126000, duration: 0 },
            { id: "eid233", tween: [ "color", "${_Hint_3_text}", "color", 'rgba(199,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,0,0,1.00)'}], position: 97000, duration: 0 },
            { id: "eid298", tween: [ "color", "${_Hint_3_text}", "color", 'rgba(74,72,72,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,0,0,1.00)'}], position: 111000, duration: 0 },
            { id: "eid374", tween: [ "style", "${_Answer_Hint_Run_equals}", "opacity", '1', { fromValue: '0.000000'}], position: 182000, duration: 0, easing: "easeInCubic" },
            { id: "eid370", tween: [ "style", "${_Answer_Hint_run_10}", "top", '79px', { fromValue: '334px'}], position: 179750, duration: 2250, easing: "easeInCubic" },
            { id: "eid237", tween: [ "style", "${_Hint_3_text}", "opacity", '1', { fromValue: '0.000000'}], position: 97000, duration: 1000 },
            { id: "eid296", tween: [ "style", "${_Hint_3_text}", "opacity", '1', { fromValue: '1'}], position: 131500, duration: 0 },
            { id: "eid297", tween: [ "style", "${_Hint_3_text}", "opacity", '0', { fromValue: '1'}], position: 132000, duration: 0 },
            { id: "eid279", tween: [ "style", "${_markCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 121000, duration: 1000 },
            { id: "eid218", tween: [ "style", "${_Walk_text}", "opacity", '1', { fromValue: '0.000000'}], position: 81000, duration: 1000 },
            { id: "eid272", tween: [ "style", "${_Hint4b}", "opacity", '1', { fromValue: '0.000000'}], position: 115000, duration: 1000 },
            { id: "eid315", tween: [ "style", "${_Hint_6_Walk__blue_8_bar}", "left", '255px', { fromValue: '255px'}], position: 160500, duration: 0 },
            { id: "eid356", tween: [ "style", "${_Answer_Hint_2}", "opacity", '1', { fromValue: '0.000000'}], position: 176000, duration: 1000, easing: "easeInCubic" },
            { id: "eid245", tween: [ "style", "${_of_24_equals}", "opacity", '1', { fromValue: '0.000000'}], position: 111000, duration: 1000 },
            { id: "eid199", tween: [ "style", "${_Hint2_Walk_bar}", "opacity", '1', { fromValue: '0.000000'}], position: 74000, duration: 1000 },
            { id: "eid290", tween: [ "color", "${_Jog_6}", "background-color", 'rgba(243,229,104,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(243,229,104,1.00)'}], position: 126000, duration: 0 },
            { id: "eid215", tween: [ "style", "${_Walk_8}", "width", '77px', { fromValue: '6px'}], position: 79500, duration: 1500 },
            { id: "eid335", tween: [ "style", "${_Hint_6_jog_text}", "opacity", '1', { fromValue: '0.000000'}], position: 167000, duration: 1000, easing: "easeInCubic" },
            { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
            { id: "eid353", tween: [ "style", "${_Answer_hint_1}", "opacity", '1', { fromValue: '0.000000'}], position: 173000, duration: 1000, easing: "easeInCubic" },
            { id: "eid380", tween: [ "style", "${_Hint2c}", "opacity", '1', { fromValue: '0.000000'}], position: 68000, duration: 1000, easing: "easeInCubic" },
            { id: "eid377", tween: [ "style", "${_Answer_Hint_4}", "opacity", '1', { fromValue: '0.000000'}], position: 186000, duration: 1000, easing: "easeInCubic" },
            { id: "eid301", tween: [ "style", "${_Hint5_text}", "opacity", '1', { fromValue: '0.000000'}], position: 145000, duration: 1000 },
            { id: "eid350", tween: [ "style", "${_Hint5_text}", "opacity", '0', { fromValue: '1'}], position: 172000, duration: 1000, easing: "easeInCubic" },
            { id: "eid314", tween: [ "style", "${_Hint_6_Walk__blue_8_bar}", "width", '76px', { fromValue: '76px'}], position: 160500, duration: 0 },
            { id: "eid288", tween: [ "style", "${_Jog_6}", "left", '0px', { fromValue: '0px'}], position: 126000, duration: 0 },
            { id: "eid341", tween: [ "style", "${_Hint_6_run}", "font-size", '14px', { fromValue: '32px'}], position: 169000, duration: 2000, easing: "easeInCubic" },
            { id: "eid177", tween: [ "style", "${_of_24}", "opacity", '0.89999997615814', { fromValue: '0.000000'}], position: 64000, duration: 1000 },
            { id: "eid344", tween: [ "style", "${_Hint_6_8}", "opacity", '1', { fromValue: '0.000000'}], position: 163000, duration: 1000, easing: "easeInCubic" },
            { id: "eid175", tween: [ "style", "${_Hint2a}", "opacity", '1', { fromValue: '0.000000'}], position: 64000, duration: 1000 },
            { id: "eid162", tween: [ "style", "${_Hint_1_Total_distance_bar}", "opacity", '1', { fromValue: '0.000000'}], position: 34000, duration: 1000 },
            { id: "eid293", tween: [ "style", "${_Jog_text}", "opacity", '1', { fromValue: '0.000000'}], position: 126000, duration: 1000 },
            { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid294", tween: [ "style", "${_Hint_4_jog_equation}", "opacity", '1', { fromValue: '1'}], position: 131500, duration: 0 },
            { id: "eid295", tween: [ "style", "${_Hint_4_jog_equation}", "opacity", '0', { fromValue: '1'}], position: 132000, duration: 0 },
            { id: "eid276", tween: [ "style", "${_Hint_4_jogging_bar}", "opacity", '1', { fromValue: '0.000000'}], position: 119000, duration: 1000 },
            { id: "eid320", tween: [ "style", "${_Hint_6_Walk_text_}", "opacity", '1', { fromValue: '0.000000'}], position: 162000, duration: 1000, easing: "easeInCubic" },
            { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 3000 },
            { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid183", tween: [ "style", "${_Hint2aCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 66000, duration: 1000 },
            { id: "eid311", tween: [ "style", "${_Hint_6_Walk__blue_8_bar}", "opacity", '1', { fromValue: '0.000000'}], position: 160000, duration: 500 },
            { id: "eid331", tween: [ "style", "${_Hint_6_jog_yellow_6_bar}", "left", '334px', { fromValue: '255px'}], position: 164750, duration: 2250, easing: "easeInCubic" },
            { id: "eid202", tween: [ "style", "${_mark}", "opacity", '1', { fromValue: '0.000000'}], position: 76000, duration: 1000 },
            { id: "eid238", tween: [ "style", "${_Hint_2_Text}", "opacity", '1', { fromValue: '1'}], position: 86000, duration: 0 },
            { id: "eid229", tween: [ "style", "${_Hint_2_Text}", "opacity", '0', { fromValue: '1'}], position: 87000, duration: 0 },
            { id: "eid328", tween: [ "style", "${_Hint_6_jog_yellow_6_bar}", "opacity", '1', { fromValue: '0.000000'}], position: 164000, duration: 750 },
            { id: "eid269", tween: [ "style", "${_times_24_equals}", "opacity", '1', { fromValue: '0.000000'}], position: 113000, duration: 1000 },
            { id: "eid360", tween: [ "style", "${_Answer_Hint_3}", "opacity", '1', { fromValue: '0.000000'}], position: 178000, duration: 1000, easing: "easeInCubic" },
            { id: "eid332", tween: [ "style", "${_Hint_6_jog_yellow_6_bar}", "top", '72px', { fromValue: '223px'}], position: 164750, duration: 2250, easing: "easeInCubic" },
            { id: "eid282", tween: [ "style", "${__6}", "opacity", '1', { fromValue: '0.000000'}], position: 122000, duration: 1000 },
            { id: "eid189", tween: [ "style", "${__8}", "opacity", '1', { fromValue: '0.000000'}], position: 70000, duration: 1000 },
            { id: "eid287", tween: [ "style", "${_Jog_6}", "width", '58px', { fromValue: '8px'}], position: 124500, duration: 1500 },
            { id: "eid166", tween: [ "style", "${_Hint1_text}", "opacity", '1', { fromValue: '0.000000'}], position: 48000, duration: 1000 },
            { id: "eid239", tween: [ "style", "${_Hint1_text}", "opacity", '1', { fromValue: '1'}], position: 86000, duration: 0 },
            { id: "eid232", tween: [ "style", "${_Hint1_text}", "opacity", '0', { fromValue: '1'}], position: 87000, duration: 0 },
            { id: "eid163", tween: [ "color", "${_Hint1_text}", "color", 'rgba(199,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,0,0,1.00)'}], position: 48000, duration: 0 },
            { id: "eid169", tween: [ "color", "${_Hint1_text}", "color", 'rgba(74,72,72,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,0,0,1)'}], position: 63000, duration: 1000 },
            { id: "eid338", tween: [ "style", "${_Hint_6_run}", "opacity", '1', { fromValue: '0.000000'}], position: 169000, duration: 2000, easing: "easeInCubic" },
            { id: "eid371", tween: [ "style", "${_Hint_6_run}", "opacity", '0', { fromValue: '1'}], position: 179750, duration: 0, easing: "easeInCubic" },
            { id: "eid317", tween: [ "style", "${_Hint_6_Walk__blue_8_bar}", "top", '72px', { fromValue: '145px'}], position: 160500, duration: 1500, easing: "easeInCubic" },
            { id: "eid364", tween: [ "style", "${_Answer_Hint_run_10}", "opacity", '1', { fromValue: '0.000000'}], position: 179000, duration: 750, easing: "easeInCubic" },
            { id: "eid210", tween: [ "style", "${_Hint2_8}", "opacity", '1', { fromValue: '0.000000'}], position: 77000, duration: 1000 },
            { id: "eid275", tween: [ "style", "${_equals_6}", "opacity", '1', { fromValue: '0.000000'}], position: 117000, duration: 1000 },
            { id: "eid181", tween: [ "style", "${__24_equals}", "opacity", '1', { fromValue: '0.000000'}], position: 66000, duration: 1000 },
            { id: "eid286", tween: [ "style", "${_Jog_6}", "opacity", '1', { fromValue: '0.000000'}], position: 124000, duration: 500 }         ]
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
})(jQuery, AdobeEdge, "EDGE-247728331");
