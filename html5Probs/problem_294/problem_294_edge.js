/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Question_Text',
                type: 'text',
                rect: ['15px', '30px','389px','40px','auto', 'auto'],
                text: "What is the value of the expression shown below?",
                align: "left",
                font: ['Georgia, Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['15px', '101px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','1.05348']]
            },
            {
                id: 'AnswerDText',
                type: 'text',
                rect: ['67px', '231px','101px','20px','auto', 'auto'],
                text: "125",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['67px', '195px','101px','19px','auto', 'auto'],
                text: "56",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerBText',
                type: 'text',
                rect: ['67px', '157px','112px','19px','auto', 'auto'],
                text: "25",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['67px', '121px','109px','19px','auto', 'auto'],
                text: "5",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'QuestionSound_Container',
                display: 'none',
                type: 'rect',
                rect: ['15px', '10px','17px','8px','auto', 'auto'],
                fill: ["rgba(248,250,248,0.00)"],
                stroke: [1,"rgb(4, 4, 4)","solid"]
            },
            {
                id: 'Sound_Container',
                display: 'none',
                type: 'rect',
                rect: ['46px', '19px','164px','7px','auto', 'auto'],
                fill: ["rgba(248,250,248,1)"],
                stroke: [1,"rgb(4, 4, 4)","solid"]
            },
            {
                id: 'AnswerEText',
                type: 'text',
                rect: ['67px', '268px','101px','20px','auto', 'auto'],
                text: "200",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'CodeCogsEqn_64',
                type: 'image',
                rect: ['75px', '70px','43px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2864%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_64Copy',
                display: 'none',
                type: 'image',
                rect: ['203px', '118px','43px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2864%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_65',
                display: 'none',
                type: 'image',
                rect: ['271px', '120px','23px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2865%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_65Copy5',
                display: 'none',
                type: 'image',
                rect: ['534px', '120px','23px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2865%29.gif",'0px','0px']
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['252px', '119px','37px','20px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'CodeCogsEqn_64Copy2',
                display: 'none',
                type: 'image',
                rect: ['203px', '164px','43px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2864%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_68',
                display: 'none',
                type: 'image',
                rect: ['270px', '217px','72px','13px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2868%29.gif",'0px','0px']
            },
            {
                id: 'TextCopy',
                display: 'none',
                type: 'text',
                rect: ['252px', '165px','37px','20px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'CodeCogsEqn_64Copy3',
                display: 'none',
                type: 'image',
                rect: ['203px', '213px','43px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2864%29.gif",'0px','0px']
            },
            {
                id: 'TextCopy2',
                display: 'none',
                type: 'text',
                rect: ['252px', '214px','37px','20px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'CodeCogsEqn_64Copy4',
                display: 'none',
                type: 'image',
                rect: ['203px', '261px','43px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2864%29.gif",'0px','0px']
            },
            {
                id: 'TextCopy3',
                display: 'none',
                type: 'text',
                rect: ['252px', '261px','37px','20px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'CodeCogsEqn_66',
                display: 'none',
                type: 'image',
                rect: ['306px', '125px','10px','9px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2866%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_65Copy4',
                display: 'none',
                type: 'image',
                rect: ['479px', '120px','23px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2865%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_66Copy4',
                display: 'none',
                type: 'image',
                rect: ['514px', '125px','10px','9px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2866%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_65Copy',
                display: 'none',
                type: 'image',
                rect: ['428px', '120px','23px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2865%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_66Copy',
                display: 'none',
                type: 'image',
                rect: ['464px', '125px','10px','9px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2866%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_66Copy6',
                display: 'none',
                type: 'image',
                rect: ['464px', '170px','10px','9px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2866%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_65Copy2',
                display: 'none',
                type: 'image',
                rect: ['377px', '120px','23px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2865%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_66Copy2',
                display: 'none',
                type: 'image',
                rect: ['410px', '125px','10px','9px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2866%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_65Copy3',
                display: 'none',
                type: 'image',
                rect: ['324px', '120px','23px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2865%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_66Copy3',
                display: 'none',
                type: 'image',
                rect: ['358px', '125px','10px','9px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2866%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_66Copy5',
                display: 'none',
                type: 'image',
                rect: ['358px', '170px','10px','9px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2866%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_67',
                display: 'none',
                type: 'image',
                rect: ['269px', '164px','83px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2867%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_67Copy',
                display: 'none',
                type: 'image',
                rect: ['482px', '164px','83px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2867%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_67Copy2',
                display: 'none',
                type: 'image',
                rect: ['377px', '164px','83px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2867%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_69',
                display: 'none',
                type: 'image',
                rect: ['269px', '263px','26px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2869%29.gif",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['210px', '310px','101px','20px','auto', 'auto'],
                text: "Choose (D)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,0,0,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'question',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/question.mp3','media/question.ogg']
            },
            {
                id: 'hint6',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint6.ogg','media/hint6.mp3']
            },
            {
                id: 'hint4',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint4.ogg','media/hint4.mp3']
            },
            {
                id: 'hint5',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint5.mp3','media/hint5.ogg']
            },
            {
                id: 'hint3',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint3.ogg','media/hint3.mp3']
            },
            {
                id: 'hint2',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2.mp3','media/hint2.ogg']
            },
            {
                id: 'hint1',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1.ogg','media/hint1.mp3']
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['241px', '71px','auto','auto','auto', 'auto'],
                text: "Exponent",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Rectangle',
                display: 'none',
                type: 'rect',
                rect: ['128px', '76px','104px','3px','auto', 'auto'],
                fill: ["rgba(255,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],['3']]
            },
            {
                id: 'Rectangle3',
                display: 'none',
                type: 'rect',
                rect: ['128px', '75px','10px','3px','auto', 'auto'],
                fill: ["rgba(255,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],['30']]
            },
            {
                id: 'Rectangle4',
                display: 'none',
                type: 'rect',
                rect: ['128px', '71px','10px','3px','auto', 'auto'],
                fill: ["rgba(255,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],['-30']]
            }],
            symbolInstances: [
            {
                id: 'Answers',
                symbolName: 'Answers_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_CodeCogsEqn_65Copy5}": [
                ["style", "top", '120px'],
                ["style", "left", '534px'],
                ["style", "display", 'none']
            ],
            "${_CodeCogsEqn_65Copy}": [
                ["style", "top", '120px'],
                ["style", "left", '428px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '71px'],
                ["style", "left", '241px'],
                ["style", "display", 'none']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_CodeCogsEqn_66Copy6}": [
                ["style", "top", '170px'],
                ["style", "left", '464px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle4}": [
                ["style", "top", '71px'],
                ["transform", "rotateZ", '-30deg'],
                ["style", "height", '3px'],
                ["style", "display", 'none'],
                ["style", "left", '128px'],
                ["style", "width", '10px']
            ],
            "${_AnswerDText}": [
                ["style", "top", '231px'],
                ["style", "font-size", '14px'],
                ["style", "left", '67px'],
                ["style", "width", '101px']
            ],
            "${_Question_Text}": [
                ["style", "top", '30px'],
                ["style", "font-size", '16px'],
                ["style", "height", '40px'],
                ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
                ["style", "left", '15px'],
                ["style", "width", '389px']
            ],
            "${_CodeCogsEqn_69}": [
                ["style", "top", '263px'],
                ["style", "left", '269px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle3}": [
                ["style", "top", '75px'],
                ["style", "display", 'none'],
                ["transform", "rotateZ", '30deg'],
                ["style", "height", '3px'],
                ["style", "border-style", 'none'],
                ["style", "left", '128px'],
                ["style", "width", '10px']
            ],
            "${_TextCopy}": [
                ["style", "top", '165px'],
                ["style", "left", '252px'],
                ["style", "display", 'none']
            ],
            "${_CodeCogsEqn_65Copy2}": [
                ["style", "top", '120px'],
                ["style", "left", '377px'],
                ["style", "display", 'none']
            ],
            "${_AnswerEText}": [
                ["style", "top", '268px'],
                ["style", "font-size", '14px'],
                ["style", "left", '67px'],
                ["style", "width", '101px']
            ],
            "${_Text7}": [
                ["style", "top", '310px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '210px'],
                ["style", "font-size", '18px']
            ],
            "${_CodeCogsEqn_64Copy}": [
                ["style", "top", '118px'],
                ["style", "left", '203px'],
                ["style", "display", 'none']
            ],
            "${_AnswerBText}": [
                ["style", "top", '157px'],
                ["style", "font-size", '14px'],
                ["style", "left", '67px'],
                ["style", "width", '112px']
            ],
            "${_CodeCogsEqn_67Copy2}": [
                ["style", "top", '164px'],
                ["style", "left", '377px'],
                ["style", "display", 'none']
            ],
            "${_TextCopy3}": [
                ["style", "top", '261px'],
                ["style", "left", '252px'],
                ["style", "display", 'none']
            ],
            "${_AnswerCText}": [
                ["style", "top", '195px'],
                ["style", "font-size", '14px'],
                ["style", "left", '67px'],
                ["style", "width", '101px']
            ],
            "${_CodeCogsEqn_65Copy3}": [
                ["style", "top", '120px'],
                ["style", "left", '324px'],
                ["style", "display", 'none']
            ],
            "${_AnswerAText}": [
                ["style", "top", '121px'],
                ["style", "text-align", 'left'],
                ["style", "height", '19px'],
                ["style", "font-size", '14px'],
                ["style", "left", '67px'],
                ["style", "width", '109px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '214px'],
                ["style", "left", '252px'],
                ["style", "display", 'none']
            ],
            "${_Answers}": [
                ["style", "top", '101px'],
                ["style", "left", '15px'],
                ["transform", "scaleY", '1.05348']
            ],
            "${_Rectangle}": [
                ["style", "top", '76px'],
                ["style", "display", 'none'],
                ["transform", "rotateZ", '3deg'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '128px'],
                ["style", "width", '104px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_CodeCogsEqn_68}": [
                ["style", "top", '217px'],
                ["style", "display", 'none'],
                ["style", "left", '270px']
            ],
            "${_CodeCogsEqn_66}": [
                ["style", "top", '125px'],
                ["style", "left", '306px'],
                ["style", "display", 'none']
            ],
            "${_CodeCogsEqn_66Copy5}": [
                ["style", "top", '170px'],
                ["style", "left", '358px'],
                ["style", "display", 'none']
            ],
            "${_CodeCogsEqn_67}": [
                ["style", "top", '164px'],
                ["style", "left", '269px'],
                ["style", "display", 'none']
            ],
            "${_CodeCogsEqn_66Copy2}": [
                ["style", "top", '125px'],
                ["style", "left", '410px'],
                ["style", "display", 'none']
            ],
            "${_CodeCogsEqn_66Copy}": [
                ["style", "top", '125px'],
                ["style", "left", '464px'],
                ["style", "display", 'none']
            ],
            "${_CodeCogsEqn_64Copy2}": [
                ["style", "top", '164px'],
                ["style", "left", '203px'],
                ["style", "display", 'none']
            ],
            "${_CodeCogsEqn_65}": [
                ["style", "top", '120px'],
                ["style", "left", '271px'],
                ["style", "display", 'none']
            ],
            "${_CodeCogsEqn_66Copy4}": [
                ["style", "top", '125px'],
                ["style", "left", '514px'],
                ["style", "display", 'none']
            ],
            "${_CodeCogsEqn_64}": [
                ["style", "left", '75px'],
                ["style", "top", '70px']
            ],
            "${_Text}": [
                ["style", "top", '119px'],
                ["style", "left", '252px'],
                ["style", "display", 'none']
            ],
            "${_CodeCogsEqn_66Copy3}": [
                ["style", "top", '125px'],
                ["style", "left", '358px'],
                ["style", "display", 'none']
            ],
            "${_CodeCogsEqn_67Copy}": [
                ["style", "top", '164px'],
                ["style", "left", '482px'],
                ["style", "display", 'none']
            ],
            "${_CodeCogsEqn_64Copy3}": [
                ["style", "top", '213px'],
                ["style", "left", '203px'],
                ["style", "display", 'none']
            ],
            "${_CodeCogsEqn_64Copy4}": [
                ["style", "top", '261px'],
                ["style", "left", '203px'],
                ["style", "display", 'none']
            ],
            "${_CodeCogsEqn_65Copy4}": [
                ["style", "top", '120px'],
                ["style", "left", '479px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 70000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 10000,
                "Hint 2": 21000,
                "Hint 3": 30000,
                "Hint 4": 39000,
                "Hint 5": 55921,
                "Answer Hint": 66000
            },
            timeline: [
                { id: "eid193", tween: [ "style", "${_CodeCogsEqn_67Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid198", tween: [ "style", "${_CodeCogsEqn_67Copy2}", "display", 'block', { fromValue: 'none'}], position: 50000, duration: 0 },
                { id: "eid195", tween: [ "style", "${_CodeCogsEqn_67Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid200", tween: [ "style", "${_CodeCogsEqn_67Copy}", "display", 'block', { fromValue: 'none'}], position: 52000, duration: 0 },
                { id: "eid192", tween: [ "style", "${_CodeCogsEqn_66Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid197", tween: [ "style", "${_CodeCogsEqn_66Copy5}", "display", 'block', { fromValue: 'none'}], position: 49000, duration: 0 },
                { id: "eid234", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid208", tween: [ "style", "${_TextCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid210", tween: [ "style", "${_TextCopy3}", "display", 'block', { fromValue: 'none'}], position: 66000, duration: 0 },
                { id: "eid167", tween: [ "style", "${_CodeCogsEqn_65Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid178", tween: [ "style", "${_CodeCogsEqn_65Copy3}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid191", tween: [ "style", "${_CodeCogsEqn_67}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid196", tween: [ "style", "${_CodeCogsEqn_67}", "display", 'block', { fromValue: 'none'}], position: 48000, duration: 0 },
                { id: "eid211", tween: [ "style", "${_CodeCogsEqn_69}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid212", tween: [ "style", "${_CodeCogsEqn_69}", "display", 'block', { fromValue: 'none'}], position: 67000, duration: 0 },
                { id: "eid174", tween: [ "style", "${_CodeCogsEqn_66Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid185", tween: [ "style", "${_CodeCogsEqn_66Copy4}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid194", tween: [ "style", "${_CodeCogsEqn_66Copy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid199", tween: [ "style", "${_CodeCogsEqn_66Copy6}", "display", 'block', { fromValue: 'none'}], position: 51000, duration: 0 },
                { id: "eid165", tween: [ "style", "${_CodeCogsEqn_65}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid176", tween: [ "style", "${_CodeCogsEqn_65}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid201", tween: [ "style", "${_CodeCogsEqn_64Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid203", tween: [ "style", "${_CodeCogsEqn_64Copy3}", "display", 'block', { fromValue: 'none'}], position: 62000, duration: 0 },
                { id: "eid170", tween: [ "style", "${_CodeCogsEqn_66Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid181", tween: [ "style", "${_CodeCogsEqn_66Copy2}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid162", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid164", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0 },
                { id: "eid173", tween: [ "style", "${_CodeCogsEqn_65Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid184", tween: [ "style", "${_CodeCogsEqn_65Copy4}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid168", tween: [ "style", "${_CodeCogsEqn_66Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid179", tween: [ "style", "${_CodeCogsEqn_66Copy3}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid188", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid190", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 46000, duration: 0 },
                { id: "eid205", tween: [ "style", "${_CodeCogsEqn_68}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid206", tween: [ "style", "${_CodeCogsEqn_68}", "display", 'block', { fromValue: 'none'}], position: 64000, duration: 0 },
                { id: "eid232", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid169", tween: [ "style", "${_CodeCogsEqn_65Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid180", tween: [ "style", "${_CodeCogsEqn_65Copy2}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid166", tween: [ "style", "${_CodeCogsEqn_66}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid177", tween: [ "style", "${_CodeCogsEqn_66}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid172", tween: [ "style", "${_CodeCogsEqn_66Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid183", tween: [ "style", "${_CodeCogsEqn_66Copy}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid171", tween: [ "style", "${_CodeCogsEqn_65Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid182", tween: [ "style", "${_CodeCogsEqn_65Copy}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid213", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid214", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 68000, duration: 0 },
                { id: "eid187", tween: [ "style", "${_CodeCogsEqn_64Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid189", tween: [ "style", "${_CodeCogsEqn_64Copy2}", "display", 'block', { fromValue: 'none'}], position: 46000, duration: 0 },
                { id: "eid236", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid175", tween: [ "style", "${_CodeCogsEqn_65Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid186", tween: [ "style", "${_CodeCogsEqn_65Copy5}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid161", tween: [ "style", "${_CodeCogsEqn_64Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid163", tween: [ "style", "${_CodeCogsEqn_64Copy}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0 },
                { id: "eid233", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid202", tween: [ "style", "${_TextCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid204", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'none'}], position: 62000, duration: 0 },
                { id: "eid207", tween: [ "style", "${_CodeCogsEqn_64Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid209", tween: [ "style", "${_CodeCogsEqn_64Copy4}", "display", 'block', { fromValue: 'none'}], position: 66000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid215", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid216", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 10000 },
                { id: "eid217", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 21000 },
                { id: "eid218", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 30000 },
                { id: "eid219", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4}', [] ], ""], position: 39000 },
                { id: "eid228", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint5}', [] ], ""], position: 41000 },
                { id: "eid229", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint6}', [] ], ""], position: 55921 }            ]
        }
    }
},
"EButton": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'E_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy8',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
                    }]
                }
            ],
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
                { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }            ]
        }
    }
},
"EButton_3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'E_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy8',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-3px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
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
            "${_E_Button}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "height", '42px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
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
                { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid43", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 }            ]
        }
    }
},
"EButton_2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'E_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy8',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        id: 'Text14',
                        text: 'Answer E Text',
                        align: 'left',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        rect: ['-8px', '-3px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    }]
                }
            ],
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
                { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }            ]
        }
    }
},
"EButton_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'E_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy8',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        id: 'Text14',
                        text: 'Answer E Text',
                        align: 'left',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    }]
                }
            ],
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
                { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }            ]
        }
    }
},
"DButton_3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'D_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy7',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    }]
                }
            ],
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
                { id: "eid266", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 }            ]
        }
    }
},
"DButton_2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'D_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy7',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        id: 'Text13',
                        text: 'Answer D Text',
                        align: 'left',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    }]
                }
            ],
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
                { id: "eid256", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }            ]
        }
    }
},
"DButton_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'D_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy7',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        id: 'Text13',
                        text: 'Answer D Text',
                        align: 'left',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    }]
                }
            ],
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
                { id: "eid256", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }            ]
        }
    }
},
"DButton": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'D_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy7',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['36px', '4px', '94px', '20px', 'auto', 'auto'],
                        id: 'Text13',
                        text: 'Answer Text D',
                        align: 'left',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    }]
                }
            ],
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
                { id: "eid256", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }            ]
        }
    }
},
"CButton_3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'C_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy6',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text5',
                        text: 'C',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    }]
                }
            ],
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
                { id: "eid264", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 }            ]
        }
    }
},
"BButton_3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'B_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '25', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy5',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        rect: ['0px', '5px', '27px', '19px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text4',
                        text: 'B',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    }]
                }
            ],
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
                { id: "eid263", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 }            ]
        }
    }
},
"AButton_3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'A_Button',
                    type: 'group',
                    rect: ['8px', '16px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'Ellipse',
                        stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(232,241,160,1.00)']
                    },
                    {
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'A',
                        text: 'A<br><br><br>',
                        align: 'center',
                        rect: ['0px', '3px', '27px', '19px', 'auto', 'auto']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                    }]
                }
            ],
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
                { id: "eid42", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 }            ]
        }
    }
},
"AButton": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'A_Button',
                    type: 'group',
                    rect: ['8px', '16px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'Ellipse',
                        stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(232,241,160,1.00)']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '3px', '27px', '19px', 'auto', 'auto'],
                        id: 'Text3',
                        text: 'A<br><br><br>',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['36px', '3px', '109px', '19px', 'auto', 'auto'],
                        id: 'Text9',
                        text: 'Answer Text A',
                        align: 'left',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    }]
                }
            ],
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
                { id: "eid260", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }            ]
        }
    }
},
"Answers_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Group',
                    type: 'group',
                    rect: ['0px', '2px', '153', '183', 'auto', 'auto'],
                    c: [
                    {
                        id: 'EButton',
                        type: 'rect',
                        rect: ['8px', '157px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'DButton',
                        type: 'rect',
                        rect: ['8px', '121px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'CButton',
                        type: 'rect',
                        rect: ['8px', '86px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'BButton',
                        type: 'rect',
                        rect: ['8px', '50px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'AButton',
                        type: 'rect',
                        rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
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
            }            ]
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


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EdgeProblem");
