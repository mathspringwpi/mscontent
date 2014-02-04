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
            id:'Question',
            type:'group',
            rect:['15','30','219','28','auto','auto'],
            c:[
            {
               id:'Question_Text',
               type:'text',
               rect:['0px','0px','219px','28px','auto','auto'],
               text:"Sasha has a bag with",
               align:"left",
               font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_5_grey_balls',
               type:'text',
               rect:['37px','22px','128px','28px','auto','auto'],
               text:"•  5 grey balls",
               align:"left",
               font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_3_white_balls',
               type:'text',
               rect:['38px','42px','143px','28px','auto','auto'],
               text:"•  3 white balls, and",
               align:"left",
               font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_4_striped_balls',
               type:'text',
               rect:['37px','60px','128px','20px','auto','auto'],
               text:"•  4 striped balls",
               align:"left",
               font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'question_statement_2',
               type:'text',
               rect:['0px','92px','230px','43px','auto','auto'],
               text:"If she takes a ball out of the bag without looking, what are her chances of getting a white ball?",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'Answers',
            type:'rect',
            rect:['48','181','auto','auto','auto','auto']
         },
         {
            id:'AnswerDText',
            type:'text',
            rect:['71px','308px','118px','20px','auto','auto'],
            text:"9 chances out of 12",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerCText',
            type:'text',
            rect:['71px','275px','119px','19px','auto','auto'],
            text:"3 chances out of 12",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerBText',
            type:'text',
            rect:['72px','239px','112px','19px','auto','auto'],
            text:"3 chances out of 9",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerAText',
            type:'text',
            rect:['71px','207px','109px','19px','auto','auto'],
            text:"1 chance out of 3",
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
            id:'VV_128d2',
            display:'none',
            type:'image',
            rect:['239px','36px','257px','277px','auto','auto'],
            fill:["rgba(0,0,0,0)",'128/gifs/VV_128d2.gif','0px','0px']
         },
         {
            id:'Choose_C',
            type:'text',
            rect:['214px','274px','86px','20px','auto','auto'],
            text:"Choose (C)",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(1,115,29,1.00)","700","none","normal"]
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
         "${_AnswerDText}": [
            ["style", "top", '308px'],
            ["style", "font-size", '14px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "width", '118px']
         ],
         "${_Question_Text}": [
            ["style", "top", '0px'],
            ["style", "font-size", '16px'],
            ["style", "height", '28px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '0px'],
            ["style", "width", '219px']
         ],
         "${_VV_128d2}": [
            ["style", "top", '36px'],
            ["style", "height", '277px'],
            ["style", "display", 'none'],
            ["style", "left", '239px'],
            ["style", "width", '257px']
         ],
         "${_Choose_C}": [
            ["style", "top", '274px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(1,115,29,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '214px'],
            ["style", "width", '86px']
         ],
         "${_AnswerBText}": [
            ["style", "top", '239px'],
            ["style", "font-size", '14px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '72px'],
            ["style", "width", '112px']
         ],
         "${_Sound_Container}": [
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden']
         ],
         "${_question_statement_2}": [
            ["style", "height", '43px'],
            ["style", "top", '92px'],
            ["style", "left", '0px'],
            ["style", "width", '230px']
         ],
         "${__3_white_balls}": [
            ["style", "top", '42px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '38px'],
            ["style", "width", '143px']
         ],
         "${_AnswerCText}": [
            ["style", "top", '275px'],
            ["style", "font-size", '14px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "width", '119px']
         ],
         "${_Answers}": [
            ["style", "top", '182px'],
            ["style", "left", '24px']
         ],
         "${_AnswerAText}": [
            ["style", "top", '207px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '14px'],
            ["style", "height", '19px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "width", '109px']
         ],
         "${__5_grey_balls}": [
            ["style", "top", '22px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '37px'],
            ["style", "height", '28px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '600px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_TutorialText}": [
            ["style", "top", '51px'],
            ["style", "height", '187px'],
            ["style", "opacity", '1'],
            ["style", "left", '260px'],
            ["style", "display", 'none']
         ],
         "${__4_striped_balls}": [
            ["style", "top", '60px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '37px']
         ],
         "${_QuestionSound_Container}": [
            ["style", "height", '8px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(248,250,248,0.00)'],
            ["style", "width", '17px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 38000,
         autoPlay: true,
         labels: {
            "Read Question": 2000,
            "Hint 1": 21000,
            "Answer Hint": 27000
         },
         timeline: [
            { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
            { id: "eid165", tween: [ "style", "${_Choose_C}", "opacity", '1', { fromValue: '0.000000'}], position: 29000, duration: 1000 },
            { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 31000, duration: 3000 },
            { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid161", tween: [ "style", "${_VV_128d2}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
            { id: "eid160", tween: [ "style", "${_Answers}", "top", '182px', { fromValue: '182px'}], position: 13000, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "height", '42px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${_E_Button}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_EllipseCopy8}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_Text8}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "width", '27px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_x}": [
            ["style", "top", '-3px'],
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
            { id: "eid9", tween: [ "color", "${_EllipseCopy8}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
            { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }         ]
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
         "${_E_Button}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "height", '42px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${_x}": [
            ["style", "top", '-3px'],
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
            { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid43", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
            { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid44", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 }         ]
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
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
         ],
         "${_Text14}": [
            ["style", "top", '4px'],
            ["style", "left", '36px'],
            ["style", "width", '101px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "height", '42px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${_E_Button}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_EllipseCopy8}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_Text8}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "width", '27px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_x}": [
            ["style", "top", '-3px'],
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
            { id: "eid9", tween: [ "color", "${_EllipseCopy8}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
            { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }         ]
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
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
         ],
         "${_Text14}": [
            ["style", "top", '4px'],
            ["style", "left", '36px'],
            ["style", "width", '101px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "height", '42px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${_E_Button}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_EllipseCopy8}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_Text8}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "width", '27px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_x}": [
            ["style", "top", '-3px'],
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
            { id: "eid9", tween: [ "color", "${_EllipseCopy8}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
            { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }         ]
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
         "${_Text7}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "width", '27px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
         ],
         "${_D_Button}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "height", '42px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${_EllipseCopy7}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
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
         "${_Text13}": [
            ["style", "top", '4px'],
            ["style", "left", '36px'],
            ["style", "width", '101px']
         ],
         "${_Text7}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "width", '27px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "height", '42px'],
            ["style", "display", 'none'],
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
            ["style", "border-width", '1px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
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
         "${_Text13}": [
            ["style", "top", '4px'],
            ["style", "left", '36px'],
            ["style", "width", '101px']
         ],
         "${_Text7}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "width", '27px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "height", '42px'],
            ["style", "display", 'none'],
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
            ["style", "border-width", '1px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
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
         "${_Text13}": [
            ["style", "top", '4px'],
            ["style", "left", '36px'],
            ["style", "width", '94px']
         ],
         "${_Text7}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "width", '27px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "height", '42px'],
            ["style", "display", 'none'],
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
            ["style", "border-width", '1px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
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
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "height", '42px'],
            ["style", "display", 'none'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '101px']
         ],
         "${_Text5}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "width", '27px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_C_Button}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_EllipseCopy6}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
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
            { id: "eid11", tween: [ "style", "${_EllipseCopy6}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid224", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid225", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid265", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
            { id: "eid5", tween: [ "color", "${_EllipseCopy6}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
            { id: "eid253", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid254", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid264", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 }         ]
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
         "${_B_Button}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '26px'],
            ["style", "width", '125px']
         ],
         "${_Text4}": [
            ["style", "top", '5px'],
            ["style", "text-align", 'center'],
            ["style", "height", '19px'],
            ["style", "width", '27px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_EllipseCopy5}": [
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "top", '0px'],
            ["style", "border-width", '1px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
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
            { id: "eid12", tween: [ "style", "${_EllipseCopy5}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid251", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid252", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid263", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 }         ]
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
         type: 'image',
         display: 'none',
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         fill: ['rgba(0,0,0,0)','images/check.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
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
            ["style", "font-size", '14px'],
            ["style", "left", '0px'],
            ["style", "width", '27px']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "display", 'none'],
            ["style", "height", '42px'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
         ],
         "${symbolSelector}": [
            ["style", "height", '42px'],
            ["style", "width", '153px']
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
            ["style", "border-width", '1px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
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
            ["style", "font-size", '14px'],
            ["style", "left", '0px'],
            ["style", "width", '27px']
         ],
         "${_Text9}": [
            ["style", "top", '3px'],
            ["style", "text-align", 'left'],
            ["style", "width", '109px'],
            ["style", "left", '36px'],
            ["style", "font-size", '12px']
         ],
         "${_check}": [
            ["style", "top", '-16px'],
            ["style", "display", 'none'],
            ["style", "height", '42px'],
            ["style", "left", '-8px'],
            ["style", "width", '65px']
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
            ["style", "font-size", '12px'],
            ["style", "left", '36px'],
            ["style", "width", '109px']
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
