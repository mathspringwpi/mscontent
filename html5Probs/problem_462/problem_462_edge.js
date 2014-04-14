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
            text:"Selena burns 98 calories when she runs for 21 minutes.  At this rate, how fast is Selena burning calories?",
            align:"left",
            font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Answers',
            type:'rect',
            rect:['48','181','auto','auto','auto','auto']
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
            rect:['260px','50px','237px','187px','auto','auto'],
            text:"Let's pretend your hint starts here at 0:10. It does not really matter where the hints start and end, as long as they don't overlap. Don't worry that the X and Checks are showing up either - it's just because I set their timeline to 5 seconds in the symbol. They won't appear in the final animation.<br><br>This rectangle is a space for you to draw your animation. An example will follow in hint 2.",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint_1__50_mph',
            type:'group',
            rect:['166px','143px','53','22','auto','auto'],
            c:[
            {
               id:'_50_mph_equals',
               type:'text',
               rect:['-98px','-16px','78px','32px','auto','auto'],
               text:"50 mph = ",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_1_hour',
               type:'text',
               rect:['0px','0px','53px','22px','auto','auto'],
               text:"1 hour",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_50_miles',
               type:'text',
               rect:['-9px','-31px','71px','22px','auto','auto'],
               text:"50 miles<br>",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Rectangle4',
               type:'rect',
               rect:['-16px','-9px','72px','2px','auto','auto'],
               fill:["rgba(0,166,197,1.00)"],
               stroke:[2,"rgb(3, 3, 3)","none"]
            }]
         },
         {
            id:'Answer_B',
            type:'group',
            rect:['75px','215','8px','26px','auto','auto'],
            c:[
            {
               id:'answer_b_text',
               type:'text',
               rect:['29px','11px','166px','22px','auto','auto'],
               text:"calories per minute",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Answer_B_314',
               type:'image',
               rect:['2px','2px','15px','27px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"Answer%20B%203%3A14.svg",'0px','0px']
            }]
         },
         {
            id:'Answer_C',
            type:'group',
            rect:['75px','255','21','32','auto','auto'],
            c:[
            {
               id:'Answer_C_143',
               type:'image',
               rect:['2px','3px','15px','27px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"Answer%20C%2014%3A3.svg",'0px','0px']
            },
            {
               id:'answer_c_text',
               type:'text',
               rect:['29px','5px','166px','22px','auto','auto'],
               text:"calories per minute",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'Answer_D',
            type:'group',
            rect:['79px','295','10px','27px','auto','auto'],
            c:[
            {
               id:'answer_d_text',
               type:'text',
               rect:['25px','0px','166px','22px','auto','auto'],
               text:"calories per minute",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Answer_D_51',
               type:'image',
               rect:['2px','1px','9px','26px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"Answer%20D%205%3A1.svg",'0px','0px']
            }]
         },
         {
            id:'Answer_A',
            type:'group',
            rect:['104px','191','166','22','auto','auto'],
            c:[
            {
               id:'answer_a_text',
               type:'text',
               rect:['0px','0px','166px','22px','auto','auto'],
               text:"calories per minute",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Answer_A_15',
               type:'image',
               rect:['-23px','-8px','9px','25px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"Answer%20A%201%3A5.svg",'0px','0px']
            }]
         },
         {
            id:'Hint_1__calories_per_minute',
            type:'group',
            rect:['378px','168px','100','22','auto','auto'],
            c:[
            {
               id:'minutes',
               type:'text',
               rect:['17px','-20px','100px','22px','auto','auto'],
               text:"minutes",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,87,185,1)","normal","none","normal"]
            },
            {
               id:'Rectangle5',
               type:'rect',
               rect:['-29px','-32px','120px','2px','auto','auto'],
               fill:["rgba(0,87,185,1)"],
               stroke:[2,"rgb(3, 3, 3)","none"]
            },
            {
               id:'calories',
               type:'text',
               rect:['16px','-57px','100px','29px','auto','auto'],
               text:"calories",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,87,185,1)","normal","none","normal"]
            },
            {
               id:'_98',
               type:'text',
               rect:['-12px','-56px','71px','40px','auto','auto'],
               text:"98",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,87,185,1.00)","normal","none","normal"]
            },
            {
               id:'_21',
               type:'text',
               rect:['-12px','-20px','45px','22px','auto','auto'],
               text:"21",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,87,185,1)","normal","none","normal"]
            }]
         },
         {
            id:'Answer_Hint_1',
            type:'group',
            rect:['238px','286px','89','18','auto','auto'],
            c:[
            {
               id:'_98_blue',
               type:'text',
               rect:['7px','4px','89px','18px','auto','auto'],
               text:"98",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,87,185,1)","normal","none","normal"]
            },
            {
               id:'_21_blue',
               type:'text',
               rect:['7px','30px','45px','22px','auto','auto'],
               text:"21",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,87,185,1)","normal","none","normal"]
            },
            {
               id:'Rectangle6',
               type:'rect',
               rect:['3px','25px','47px','2px','auto','auto'],
               fill:["rgba(0,87,185,1.00)"],
               stroke:[2,"rgb(3, 3, 3)","none"]
            },
            {
               id:'_Num_divide_by_7',
               type:'text',
               rect:['30px','4px','45px','22px','auto','auto'],
               text:"/ 7",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,87,185,1)","normal","none","normal"]
            },
            {
               id:'Den_divide_by_7',
               type:'text',
               rect:['29px','31px','35px','19px','auto','auto'],
               text:"/ 7<br>",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,87,185,1)","normal","none","normal"]
            }]
         },
         {
            id:'Answer_hint_equals',
            type:'text',
            rect:['291px','304px','43px','18px','auto','auto'],
            text:"= ",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,87,185,1)","normal","none","normal"]
         },
         {
            id:'Hint_2_text_1',
            type:'text',
            rect:['249px','175px','258px','40px','auto','auto'],
            text:"What is the greatest common factor of 98 and 21 ?",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(220,0,82,1.00)","normal","none","normal"]
         },
         {
            id:'Hint_2_text_2',
            type:'text',
            rect:['249px','224px','258px','63px','auto','auto'],
            text:"The GCG (greatest common factor) is 7, so divide both the numerator and the denominator by 7.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(119,0,44,1.00)","normal","none","normal"]
         },
         {
            id:'Answer_Hint_2',
            type:'group',
            rect:['322px','321px','35','22','auto','auto'],
            c:[
            {
               id:'_3',
               type:'text',
               rect:['0px','0px','35px','22px','auto','auto'],
               text:"3",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,87,185,1)","normal","none","normal"]
            },
            {
               id:'_14',
               type:'text',
               rect:['-6px','-31px','43px','22px','auto','auto'],
               text:"14",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,87,185,1)","normal","none","normal"]
            },
            {
               id:'Rectangle7',
               type:'rect',
               rect:['-13px','-9px','35px','2px','auto','auto'],
               fill:["rgba(0,87,185,1)"],
               stroke:[2,"rgb(3, 3, 3)","none"]
            },
            {
               id:'calories_per_m',
               type:'text',
               rect:['27px','-18px','141px','18px','auto','auto'],
               text:"calories per minute",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,87,185,1)","normal","none","normal"]
            }]
         },
         {
            id:'Choose_C',
            type:'text',
            rect:['359px','332px','120px','22px','auto','auto'],
            text:"Choose (C)",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(4,131,0,1.00)","700","none","normal"]
         },
         {
            id:'time',
            type:'text',
            rect:['276px','148px','47px','22px','auto','auto'],
            text:"time",
            font:['Arial, Helvetica, sans-serif',16,"rgba(213,3,3,1.00)","700","none","italic"]
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
         "${_answer_d_text}": [
            ["style", "top", '0px'],
            ["style", "left", '25px']
         ],
         "${_time}": [
            ["style", "top", '148px'],
            ["style", "font-size", '16px'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(213,3,3,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '276px'],
            ["style", "width", '47px']
         ],
         "${_answer_c_text}": [
            ["style", "top", '5px'],
            ["style", "left", '29px']
         ],
         "${_Answer_hint_equals}": [
            ["style", "height", '18px'],
            ["style", "opacity", '0'],
            ["style", "left", '291px'],
            ["style", "top", '304px']
         ],
         "${_QuestionSound_Container}": [
            ["style", "display", 'none'],
            ["style", "height", '8px'],
            ["color", "background-color", 'rgba(248,250,248,0.00)'],
            ["style", "width", '17px']
         ],
         "${__50_mph_equals}": [
            ["style", "top", '-16px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '-98px'],
            ["color", "color", 'rgba(0,166,197,1.00)']
         ],
         "${_answer_b_text}": [
            ["style", "top", '11px'],
            ["style", "left", '29px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '-9px'],
            ["color", "background-color", 'rgba(0,166,197,1.00)'],
            ["style", "height", '2px'],
            ["style", "border-style", 'none'],
            ["style", "left", '-16px'],
            ["style", "width", '72px']
         ],
         "${_Answer_A}": [
            ["style", "left", '104px']
         ],
         "${_Rectangle7}": [
            ["style", "top", '-9px'],
            ["style", "left", '-13px'],
            ["style", "width", '35px']
         ],
         "${_Den_divide_by_7}": [
            ["style", "top", '31px'],
            ["style", "opacity", '0'],
            ["style", "left", '29px'],
            ["style", "width", '35px']
         ],
         "${_Question_Text}": [
            ["style", "top", '30px'],
            ["style", "width", '219px'],
            ["style", "height", '124px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '15px'],
            ["style", "font-size", '16px']
         ],
         "${__3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${__1_hour}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(0,166,197,1.00)']
         ],
         "${__21_blue}": [
            ["style", "top", '30px'],
            ["style", "left", '7px']
         ],
         "${_minutes}": [
            ["style", "top", '-20px'],
            ["style", "left", '17px'],
            ["color", "color", 'rgba(0,87,185,1)']
         ],
         "${_Answers}": [
            ["style", "top", '168px'],
            ["style", "left", '24px']
         ],
         "${__21}": [
            ["style", "top", '-20px'],
            ["style", "opacity", '0'],
            ["style", "left", '-12px'],
            ["color", "color", 'rgba(0,87,185,1)']
         ],
         "${_calories}": [
            ["style", "top", '-57px'],
            ["style", "left", '16px'],
            ["color", "color", 'rgba(0,87,185,1)']
         ],
         "${_answer_a_text}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Answer_B_314}": [
            ["style", "top", '2px'],
            ["style", "height", '27px'],
            ["style", "left", '2px'],
            ["style", "width", '15px']
         ],
         "${_Answer_A_15}": [
            ["style", "top", '-8px'],
            ["style", "height", '25px'],
            ["style", "left", '-23px'],
            ["style", "width", '9px']
         ],
         "${_Answer_Hint_2}": [
            ["style", "top", '321px'],
            ["style", "opacity", '0'],
            ["style", "left", '322px']
         ],
         "${__21Copy}": [
            ["style", "top", '-20px'],
            ["style", "opacity", '0'],
            ["style", "left", '-12px'],
            ["color", "color", 'rgba(0,87,185,1)']
         ],
         "${_Answer_B}": [
            ["style", "height", '26px'],
            ["style", "left", '75px'],
            ["style", "width", '8px']
         ],
         "${_Answer_D_51}": [
            ["style", "top", '1px'],
            ["style", "height", '26px'],
            ["style", "left", '2px'],
            ["style", "width", '9px']
         ],
         "${_caloriesCopy}": [
            ["style", "top", '-57px'],
            ["style", "left", '16px'],
            ["color", "color", 'rgba(0,87,185,1)']
         ],
         "${_minutesCopy}": [
            ["style", "top", '-20px'],
            ["style", "left", '19px'],
            ["color", "color", 'rgba(0,87,185,1)']
         ],
         "${__Num_divide_by_7}": [
            ["style", "top", '4px'],
            ["style", "opacity", '0'],
            ["style", "left", '30px'],
            ["style", "width", '45px']
         ],
         "${_TutorialText}": [
            ["style", "top", '50px'],
            ["style", "height", '187px'],
            ["style", "opacity", '1'],
            ["style", "left", '260px'],
            ["style", "display", 'none']
         ],
         "${__98_blue}": [
            ["style", "top", '4px'],
            ["style", "left", '7px'],
            ["style", "width", '89px']
         ],
         "${_Sound_Container}": [
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '600px'],
            ["style", "width", '600px']
         ],
         "${_Answer_D}": [
            ["style", "height", '27px'],
            ["style", "left", '79px'],
            ["style", "width", '10px']
         ],
         "${_Hint_2_text_1}": [
            ["style", "top", '175px'],
            ["color", "color", 'rgba(142,0,52,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '249px'],
            ["style", "font-size", '14px']
         ],
         "${__14}": [
            ["style", "left", '-6px'],
            ["style", "top", '-31px']
         ],
         "${_Answer_C}": [
            ["style", "left", '75px']
         ],
         "${_calories_per_m}": [
            ["style", "top", '-18px'],
            ["style", "left", '27px'],
            ["style", "width", '141px']
         ],
         "${_Answer_C_143}": [
            ["style", "top", '3px'],
            ["style", "height", '27px'],
            ["style", "left", '2px'],
            ["style", "width", '15px']
         ],
         "${_Hint_1__calories_per_minute}": [
            ["style", "top", '168px'],
            ["style", "opacity", '0'],
            ["style", "left", '378px']
         ],
         "${_Rectangle6}": [
            ["color", "background-color", 'rgba(0,87,185,1.00)'],
            ["style", "height", '2px'],
            ["style", "top", '25px'],
            ["style", "left", '3px'],
            ["style", "width", '47px']
         ],
         "${__98Copy}": [
            ["style", "top", '-56px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(0,87,185,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '-12px'],
            ["style", "font-size", '16px']
         ],
         "${_Answer_Hint_1}": [
            ["style", "top", '286px'],
            ["style", "opacity", '0'],
            ["style", "left", '238px']
         ],
         "${_Hint_1__50_mph}": [
            ["style", "top", '143px'],
            ["style", "opacity", '0'],
            ["style", "left", '166px']
         ],
         "${_Choose_C}": [
            ["style", "top", '332px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(4,131,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '359px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif']
         ],
         "${_Rectangle5}": [
            ["style", "top", '-32px'],
            ["color", "background-color", 'rgba(0,87,185,1)'],
            ["style", "left", '-29px'],
            ["style", "width", '120px']
         ],
         "${_Hint_2_text_2}": [
            ["style", "top", '224px'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(180,0,67,1.00)'],
            ["style", "font-size", '14px']
         ],
         "${__50_miles}": [
            ["style", "top", '-31px'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(0,166,197,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '-9px'],
            ["style", "width", '71px']
         ],
         "${__98}": [
            ["style", "top", '-56px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(0,87,185,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '-12px'],
            ["style", "font-size", '16px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 124500,
         autoPlay: true,
         labels: {
            "Read Question": 2000,
            "Hint 1": 14000,
            "Hint 2": 57000,
            "Answer Hint": 102000
         },
         timeline: [
            { id: "eid205", tween: [ "style", "${_Answer_Hint_1}", "opacity", '1', { fromValue: '0.000000'}], position: 102000, duration: 1000 },
            { id: "eid214", tween: [ "style", "${_Answer_hint_equals}", "opacity", '1', { fromValue: '0.000000'}], position: 106500, duration: 1000 },
            { id: "eid175", tween: [ "color", "${__98}", "color", 'rgba(0,87,185,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,87,185,1.00)'}], position: 64000, duration: 0 },
            { id: "eid190", tween: [ "style", "${_Hint_2_text_2}", "opacity", '1', { fromValue: '0.000000'}], position: 100000, duration: 1000 },
            { id: "eid169", tween: [ "color", "${_minutes}", "color", 'rgba(0,87,185,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,87,185,1)'}], position: 55000, duration: 0 },
            { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 3000 },
            { id: "eid179", tween: [ "color", "${__21}", "color", 'rgba(0,87,185,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,87,185,1)'}], position: 64000, duration: 0 },
            { id: "eid178", tween: [ "style", "${__98}", "opacity", '1', { fromValue: '0.000000'}], position: 64000, duration: 1000 },
            { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid173", tween: [ "style", "${_Hint_1__calories_per_minute}", "opacity", '1', { fromValue: '0.000000'}], position: 55000, duration: 1000 },
            { id: "eid183", tween: [ "color", "${_Hint_2_text_1}", "color", 'rgba(142,0,52,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,0,52,1.00)'}], position: 76000, duration: 0 },
            { id: "eid186", tween: [ "style", "${_Hint_2_text_1}", "opacity", '1', { fromValue: '0.000000'}], position: 76000, duration: 1000 },
            { id: "eid182", tween: [ "style", "${__21}", "opacity", '1', { fromValue: '0.000000'}], position: 64000, duration: 1000 },
            { id: "eid211", tween: [ "style", "${__Num_divide_by_7}", "opacity", '1', { fromValue: '0.000000'}], position: 104500, duration: 1000 },
            { id: "eid170", tween: [ "color", "${_Rectangle5}", "background-color", 'rgba(0,87,185,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,87,185,1)'}], position: 55000, duration: 0 },
            { id: "eid168", tween: [ "color", "${_calories}", "color", 'rgba(0,87,185,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,87,185,1)'}], position: 55000, duration: 0 },
            { id: "eid167", tween: [ "style", "${_Hint_1__50_mph}", "opacity", '1', { fromValue: '0'}], position: 35000, duration: 1000 },
            { id: "eid235", tween: [ "style", "${_Hint_1__50_mph}", "opacity", '0', { fromValue: '1'}], position: 57000, duration: 0 },
            { id: "eid217", tween: [ "style", "${_Answer_Hint_2}", "opacity", '1', { fromValue: '0.000000'}], position: 108500, duration: 1000 },
            { id: "eid208", tween: [ "style", "${_Den_divide_by_7}", "opacity", '1', { fromValue: '0.000000'}], position: 104500, duration: 1000 },
            { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
            { id: "eid233", tween: [ "style", "${_time}", "opacity", '1', { fromValue: '0.000000'}], position: 40000, duration: 1000 },
            { id: "eid234", tween: [ "style", "${_time}", "opacity", '0', { fromValue: '1'}], position: 57000, duration: 0 },
            { id: "eid164", tween: [ "color", "${__50_miles}", "color", 'rgba(0,166,197,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,166,197,1.00)'}], position: 35000, duration: 0 },
            { id: "eid187", tween: [ "color", "${_Hint_2_text_2}", "color", 'rgba(180,0,67,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(180,0,67,1.00)'}], position: 100000, duration: 0 },
            { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid228", tween: [ "style", "${_Choose_C}", "opacity", '1', { fromValue: '0.000000'}], position: 120500, duration: 1000 },
            { id: "eid162", tween: [ "color", "${__50_mph_equals}", "color", 'rgba(0,166,197,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,166,197,1.00)'}], position: 35000, duration: 0 },
            { id: "eid163", tween: [ "color", "${__1_hour}", "color", 'rgba(0,166,197,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,166,197,1.00)'}], position: 35000, duration: 0 }         ]
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
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
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
         ]
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
         "${_AButton}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_CButton}": [
            ["style", "left", '8px'],
            ["style", "top", '86px']
         ],
         "${_EButton}": [
            ["style", "left", '8px'],
            ["style", "top", '157px']
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
