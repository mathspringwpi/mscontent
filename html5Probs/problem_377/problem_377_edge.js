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
                rect: ['15px', '30px','479px','40px','auto', 'auto'],
                text: "Point P is shown on the number line below. Which of the following fractions is best represented by point P ?",
                align: "left",
                font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['48', '181','auto','auto','auto', 'auto']
            },
            {
                id: 'Red1',
                type: 'rect',
                rect: ['-59px', '82px','0px','29px','auto', 'auto'],
                autoOrient: true,
                fill: ["rgba(78,4,4,1.00)"],
                stroke: [1,"rgba(247,3,3,1.00)","solid"]
            },
            {
                id: 'Red2',
                type: 'rect',
                rect: ['-45px', '101px','0px','29px','auto', 'auto'],
                fill: ["rgba(78,4,4,1.00)"],
                stroke: [1,"rgba(247,3,3,1.00)","solid"]
            },
            {
                id: 'Red3',
                type: 'rect',
                rect: ['-88px', '39px','0px','29px','auto', 'auto'],
                autoOrient: true,
                fill: ["rgba(78,4,4,1.00)"],
                stroke: [1,"rgba(247,3,3,1.00)","solid"]
            },
            {
                id: 'Red4',
                type: 'rect',
                rect: ['-27px', '2px','0px','29px','auto', 'auto'],
                autoOrient: true,
                fill: ["rgba(78,4,4,1.00)"],
                stroke: [1,"rgba(247,3,3,1.00)","solid"]
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
                id: 'TutorialText',
                display: 'none',
                type: 'text',
                rect: ['260px', '49px','237px','187px','auto', 'auto'],
                text: "Let's pretend your hint starts here at 0:10. It does not really matter where the hints start and end, as long as they don't overlap. Don't worry that the X and Checks are showing up either - it's just because I set their timeline to 5 seconds in the symbol. They won't appear in the final animation.<br><br>This rectangle is a space for you to draw your animation. An example will follow in hint 2.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerA',
                type: 'group',
                rect: ['91px', '295px','23','18','auto', 'auto'],
                c: [
                {
                    id: 'Text10',
                    type: 'text',
                    rect: ['0px', '0px','23px','18px','auto', 'auto'],
                    text: "2<br>",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle9',
                    type: 'rect',
                    rect: ['-6px', '-5px','18px','0px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Text8',
                    type: 'text',
                    rect: ['-1px', '-25px','15px','18px','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'AnswerACopy2',
                type: 'group',
                rect: ['130px', '296px','23','18','auto', 'auto'],
                autoOrient: true,
                c: [
                {
                    id: 'Text10Copy',
                    type: 'text',
                    rect: ['0px', '0px','23px','18px','auto', 'auto'],
                    text: "2<br>",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text8Copy',
                    type: 'text',
                    rect: ['-1px', '-25px','15px','18px','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle9Copy',
                    type: 'rect',
                    rect: ['-6px', '-5px','18px','0px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                }]
            },
            {
                id: 'NumberLine',
                type: 'group',
                rect: ['467', '130','14','10','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle4',
                    type: 'rect',
                    rect: ['-383px', '4px','13px','0px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"],
                    transform: [[],['22']]
                },
                {
                    id: 'Rectangle3',
                    type: 'rect',
                    rect: ['-384px', '-3px','13px','0px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"],
                    transform: [[],['-24']]
                },
                {
                    id: 'Rectangle5',
                    type: 'rect',
                    rect: ['0px', '-5px','13px','0px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"],
                    transform: [[],['32']]
                },
                {
                    id: 'Rectangle2',
                    type: 'rect',
                    rect: ['-383px', '0px','395px','0px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [1,"rgba(0,0,0,1)","solid"]
                },
                {
                    id: 'Line3',
                    type: 'rect',
                    rect: ['-185px', '-15px','0px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Line1',
                    type: 'rect',
                    rect: ['-354px', '-15px','0px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Line5',
                    type: 'rect',
                    rect: ['-14px', '-15px','0px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Ellipse',
                    type: 'ellipse',
                    rect: ['-143px', '-5px','6px','10px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Line4',
                    type: 'rect',
                    rect: ['-96px', '-15px','0px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Line2',
                    type: 'rect',
                    rect: ['-269px', '-15px','0px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle6',
                    type: 'rect',
                    rect: ['-1px', '4px','13px','0px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"],
                    transform: [[],['-33']]
                },
                {
                    id: 'P_point',
                    type: 'text',
                    rect: ['-144px', '-33px','auto','auto','auto', 'auto'],
                    text: "P",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_0',
                    type: 'text',
                    rect: ['-357px', '23px','23px','18px','auto', 'auto'],
                    text: "0<br>",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_1',
                    type: 'text',
                    rect: ['-17px', '23px','23px','18px','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'question',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/question.mp3','media/question.ogg']
            },
            {
                id: 'Hint1',
                display: 'none',
                type: 'text',
                rect: ['216px', '238px','177px','53px','auto', 'auto'],
                text: "Can we insert any of the answers into the number line ?",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,94,180,1.00)", "400", "none", "normal"]
            },
            {
                id: 'hint1a',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1a.mp3','media/hint1a.ogg']
            },
            {
                id: 'AnswerB',
                type: 'group',
                rect: ['90px', '341px','20','18','auto', 'auto'],
                c: [
                {
                    id: 'Text12',
                    type: 'text',
                    rect: ['0px', '0px','20px','18px','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text11',
                    type: 'text',
                    rect: ['0px', '-26px','20px','18px','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle10',
                    type: 'rect',
                    rect: ['-6px', '-6px','18px','0px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                }]
            },
            {
                id: 'AnswerBCopy',
                type: 'group',
                rect: ['128px', '341px','20','18','auto', 'auto'],
                autoOrient: true,
                c: [
                {
                    id: 'Text12Copy',
                    type: 'text',
                    rect: ['0px', '0px','20px','18px','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text11Copy',
                    type: 'text',
                    rect: ['0px', '-26px','20px','18px','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle10Copy',
                    type: 'rect',
                    rect: ['-6px', '-6px','18px','0px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                }]
            },
            {
                id: 'hint1b',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1b.mp3','media/hint1b.ogg']
            },
            {
                id: 'Hint1B',
                display: 'none',
                type: 'text',
                rect: ['216px', '304px','281px','136px','auto', 'auto'],
                text: "Because P is not placed at one of the marks representing fourths on the number line, we need to divide the number line into eighths by dividing each space between the existing marks in half.  Then we need to label the marks in eighths.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,94,180,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Hint2',
                display: 'none',
                type: 'text',
                rect: ['216px', '447px','292px','53px','auto', 'auto'],
                text: "Can you label the new marks in eights ? What mark will be at P ?<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,94,180,1)", "400", "none", "normal"]
            },
            {
                id: 'hint2',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2.mp3','media/hint2.ogg']
            },
            {
                id: 'answer',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer.mp3','media/answer.ogg']
            },
            {
                id: 'AnswerC',
                type: 'group',
                rect: ['90px', '384px','15','31','auto', 'auto'],
                c: [
                {
                    id: 'Text16',
                    type: 'text',
                    rect: ['0px', '0px','15px','31px','auto', 'auto'],
                    text: "8",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15',
                    type: 'text',
                    rect: ['0px', '-24px','20px','18px','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle12',
                    type: 'rect',
                    rect: ['-5px', '-5px','18px','0px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [1,"rgba(0,0,0,1.00)","solid"]
                }]
            },
            {
                id: 'AnswerCCopy',
                type: 'group',
                rect: ['133px', '384px','15','31','auto', 'auto'],
                autoOrient: true,
                c: [
                {
                    id: 'Text16Copy',
                    type: 'text',
                    rect: ['0px', '0px','15px','31px','auto', 'auto'],
                    text: "8",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15Copy',
                    type: 'text',
                    rect: ['0px', '-24px','20px','18px','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle12Copy',
                    type: 'rect',
                    rect: ['-5px', '-5px','18px','0px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [1,"rgba(0,0,0,1.00)","solid"]
                }]
            },
            {
                id: 'Answer',
                type: 'text',
                rect: ['216px', '501px','177px','31px','auto', 'auto'],
                text: "The answer is (C)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(5,158,5,1.00)", "700", "none", "normal"]
            },
            {
                id: 'AnswerD',
                type: 'group',
                rect: ['90px', '431px','20','31','auto', 'auto'],
                c: [
                {
                    id: 'Text19',
                    type: 'text',
                    rect: ['0px', '0px','20px','31px','auto', 'auto'],
                    text: "8<br>",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text18',
                    type: 'text',
                    rect: ['-1px', '-24px','20px','21px','auto', 'auto'],
                    text: "7",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle13',
                    type: 'rect',
                    rect: ['-6px', '-6px','18px','0px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                }]
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
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '-383px'],
                ["style", "border-width", '1px']
            ],
            "${_Text15}": [
                ["style", "left", '0px'],
                ["style", "top", '-24px']
            ],
            "${_Text10Copy}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '0px']
            ],
            "${_Red1}": [
                ["motion", "location", '-58px 97.5px'],
                ["color", "border-color", 'rgba(247,3,3,1.00)'],
                ["color", "background-color", 'rgba(78,4,4,1.00)'],
                ["style", "height", '29px']
            ],
            "${_AnswerBCopy}": [
                ["motion", "location", '138px 350px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Text8}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '-1px'],
                ["style", "top", '-25px']
            ],
            "${_Text16Copy}": [
                ["style", "height", '31px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Text11Copy}": [
                ["style", "left", '0px'],
                ["style", "top", '-26px']
            ],
            "${_Text12Copy}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text15Copy}": [
                ["style", "left", '0px'],
                ["style", "top", '-24px']
            ],
            "${_Question_Text}": [
                ["style", "top", '30px'],
                ["style", "width", '479px'],
                ["style", "height", '40px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '15px'],
                ["style", "font-size", '16px']
            ],
            "${_Red2}": [
                ["color", "background-color", 'rgba(78,4,4,1.00)'],
                ["style", "height", '29px'],
                ["color", "border-color", 'rgba(247,3,3,1.00)'],
                ["style", "left", '-45px'],
                ["style", "top", '101px']
            ],
            "${_AnswerB}": [
                ["style", "left", '90px'],
                ["style", "top", '341px']
            ],
            "${_Text10}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '0px']
            ],
            "${__0}": [
                ["style", "top", '23px'],
                ["style", "left", '-357px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '-3px'],
                ["transform", "rotateZ", '-24deg'],
                ["style", "height", '0px'],
                ["style", "left", '-384px'],
                ["style", "width", '13px']
            ],
            "${_Ellipse}": [
                ["style", "height", '10px'],
                ["style", "top", '-5px'],
                ["style", "left", '-143px'],
                ["style", "width", '6px']
            ],
            "${_AnswerD}": [
                ["style", "left", '90px'],
                ["style", "top", '431px']
            ],
            "${_AnswerCCopy}": [
                ["motion", "location", '140.5px 399.5px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Hint1}": [
                ["style", "top", '238px'],
                ["style", "width", '177px'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(9,94,180,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '216px'],
                ["style", "font-size", '16px']
            ],
            "${_Text8Copy}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '-1px'],
                ["style", "top", '-25px']
            ],
            "${_Text19}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_AnswerA}": [
                ["style", "left", '91px'],
                ["style", "top", '295px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '600px']
            ],
            "${_Line1}": [
                ["style", "top", '-15px'],
                ["style", "left", '-354px'],
                ["style", "height", '29px']
            ],
            "${_Text11}": [
                ["style", "left", '0px'],
                ["style", "top", '-26px']
            ],
            "${_Rectangle12}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '-5px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '-5px'],
                ["style", "width", '18px']
            ],
            "${_Rectangle10}": [
                ["style", "top", '-6px'],
                ["style", "left", '-6px'],
                ["style", "width", '18px']
            ],
            "${_P_point}": [
                ["style", "top", '-33px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '-144px'],
                ["style", "font-size", '16px']
            ],
            "${_Red3}": [
                ["color", "background-color", 'rgba(78,4,4,1.00)'],
                ["style", "top", '39px'],
                ["style", "height", '29px'],
                ["color", "border-color", 'rgba(247,3,3,1.00)'],
                ["style", "left", '-88px'],
                ["motion", "location", '-87px 54.5px']
            ],
            "${_Red4}": [
                ["motion", "location", '-26px 17.5px'],
                ["color", "border-color", 'rgba(247,3,3,1.00)'],
                ["color", "background-color", 'rgba(78,4,4,1.00)'],
                ["style", "height", '29px']
            ],
            "${_Rectangle9}": [
                ["style", "top", '-5px'],
                ["style", "left", '-6px'],
                ["style", "border-width", '1px'],
                ["style", "width", '18px']
            ],
            "${_Line4}": [
                ["style", "top", '-15px'],
                ["style", "left", '-96px'],
                ["style", "height", '29px']
            ],
            "${_Line2}": [
                ["style", "top", '-15px'],
                ["style", "left", '-269px'],
                ["style", "height", '29px']
            ],
            "${_Line5}": [
                ["style", "top", '-15px'],
                ["style", "left", '-14px'],
                ["style", "height", '29px']
            ],
            "${_Hint2}": [
                ["style", "top", '447px'],
                ["style", "display", 'none'],
                ["style", "width", '292px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_Answer}": [
                ["style", "top", '501px'],
                ["style", "opacity", '0.000000'],
                ["color", "color", 'rgba(5,158,5,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '216px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif']
            ],
            "${_Answers}": [
                ["transform", "scaleX", '1.14103'],
                ["style", "left", '35px'],
                ["transform", "scaleY", '1.22466'],
                ["style", "top", '278px']
            ],
            "${_AnswerC}": [
                ["style", "left", '90px'],
                ["style", "top", '384px']
            ],
            "${_Hint1B}": [
                ["style", "top", '304px'],
                ["style", "height", '136px'],
                ["color", "color", 'rgba(9,94,180,1.00)'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '216px'],
                ["style", "width", '281px']
            ],
            "${_Rectangle10Copy}": [
                ["style", "top", '-6px'],
                ["style", "left", '-6px'],
                ["style", "width", '18px']
            ],
            "${_TutorialText}": [
                ["style", "top", '51px'],
                ["style", "height", '187px'],
                ["style", "opacity", '1'],
                ["style", "left", '260px'],
                ["style", "display", 'none']
            ],
            "${_AnswerACopy2}": [
                ["motion", "location", '141.9512px 304.7031px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Text16}": [
                ["style", "height", '31px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '4px'],
                ["style", "left", '-1px'],
                ["transform", "rotateZ", '-33deg']
            ],
            "${_Rectangle13}": [
                ["style", "top", '-6px'],
                ["style", "left", '-6px'],
                ["style", "width", '18px']
            ],
            "${__1}": [
                ["style", "left", '-17px'],
                ["style", "top", '23px']
            ],
            "${_Rectangle9Copy}": [
                ["style", "top", '-5px'],
                ["style", "border-width", '1px'],
                ["style", "left", '-6px'],
                ["style", "width", '18px']
            ],
            "${_Text12}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle5}": [
                ["style", "top", '-5px'],
                ["style", "width", '13px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '32deg']
            ],
            "${_Rectangle4}": [
                ["style", "top", '4px'],
                ["style", "left", '-383px'],
                ["transform", "rotateZ", '22deg']
            ],
            "${_Text18}": [
                ["style", "top", '-24px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '21px'],
                ["style", "font-weight", '400'],
                ["style", "left", '-1px'],
                ["style", "font-family", 'Times New Roman, Times, serif']
            ],
            "${_Rectangle12Copy}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '-5px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '-5px'],
                ["style", "width", '18px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 75000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 14000,
                "Hint 2": 57000,
                "Answer Hint": 66000
            },
            timeline: [
                { id: "eid182", tween: [ "motion", "${_AnswerBCopy}", [[138, 350, 0, 0],[379, 195, 0, 0]]], position: 25000, duration: 2000 },
                { id: "eid163", tween: [ "transform", "${_Answers}", "scaleY", '1.22466', { fromValue: '1.22466'}], position: 5365, duration: 0 },
                { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 21000, duration: 3000 },
                { id: "eid164", tween: [ "style", "${_Answers}", "left", '35px', { fromValue: '35px'}], position: 5365, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid178", tween: [ "motion", "${_AnswerACopy2}", [[141.95, 304.7, 0, 0],[291.13, 194.69, 0, 0]]], position: 21000, duration: 1500 },
                { id: "eid183", tween: [ "style", "${_Hint1B}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid190", tween: [ "motion", "${_Red4}", [[-26, 17.5, 0, 0],[414.63, 130.5, 0, 0]]], position: 53500, duration: 1500 },
                { id: "eid181", tween: [ "style", "${_AnswerBCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 24000, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid195", tween: [ "motion", "${_AnswerCCopy}", [[140.5, 399.5, 0, 0],[331.48, 200.48, 0, 0]]], position: 70500, duration: 2000 },
                { id: "eid198", tween: [ "style", "${_Answer}", "opacity", '1', { fromValue: '0.000000'}], position: 73000, duration: 1000 },
                { id: "eid191", tween: [ "style", "${_Hint2}", "display", 'block', { fromValue: 'none'}], position: 57000, duration: 0 },
                { id: "eid185", tween: [ "motion", "${_Red1}", [[-58, 97.5, 0, 0],[156.68, 130.5, 0, 0]]], position: 49000, duration: 1500 },
                { id: "eid194", tween: [ "style", "${_AnswerCCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 69500, duration: 1000 },
                { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid187", tween: [ "style", "${_Red2}", "top", '115px', { fromValue: '101px'}], position: 50500, duration: 1500 },
                { id: "eid189", tween: [ "motion", "${_Red3}", [[-87, 54.5, 0, 0],[328, 130.5, 0, 0]]], position: 52000, duration: 1500 },
                { id: "eid186", tween: [ "style", "${_Red2}", "left", '242px', { fromValue: '-45px'}], position: 50500, duration: 1500 },
                { id: "eid165", tween: [ "style", "${_Answers}", "top", '278px', { fromValue: '278px'}], position: 5365, duration: 0 },
                { id: "eid162", tween: [ "transform", "${_Answers}", "scaleX", '1.14103', { fromValue: '1.14103'}], position: 5365, duration: 0 },
                { id: "eid171", tween: [ "style", "${_Hint1}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid176", tween: [ "style", "${_AnswerACopy2}", "opacity", '1', { fromValue: '0.000000'}], position: 20000, duration: 1000 },
                { id: "eid172", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid173", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1a}', [] ], ""], position: 14000 },
                { id: "eid184", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1b}', [] ], ""], position: 28000 },
                { id: "eid199", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 57000 },
                { id: "eid200", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 66000 }            ]
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
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }            ]
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
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
                { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }            ]
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
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text14',
                        text: 'Answer E Text',
                        align: 'left',
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
                { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }            ]
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
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text14',
                        text: 'Answer E Text',
                        align: 'left',
                        type: 'text'
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
                { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }            ]
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
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
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text13',
                        text: 'Answer D Text',
                        align: 'left',
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
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text13',
                        text: 'Answer D Text',
                        align: 'left',
                        type: 'text'
                    }]
                }
            ],
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
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['36px', '4px', '94px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text13',
                        text: 'Answer Text D',
                        align: 'left',
                        type: 'text'
                    }]
                }
            ],
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text5',
                        text: 'C',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
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
                { id: "eid5", tween: [ "color", "${_EllipseCopy6}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 }            ]
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text4',
                        text: 'B',
                        align: 'center',
                        rect: ['0px', '5px', '27px', '19px', 'auto', 'auto']
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
                { id: "eid12", tween: [ "style", "${_EllipseCopy5}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }            ]
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
                        type: 'text',
                        rect: ['0px', '3px', '27px', '19px', 'auto', 'auto'],
                        id: 'A',
                        text: 'A<br><br><br>',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
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
                        rect: ['0px', '3px', '27px', '19px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text3',
                        text: 'A<br><br><br>',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['36px', '3px', '109px', '19px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text9',
                        text: 'Answer Text A',
                        align: 'left',
                        type: 'text'
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
                symbolName: 'DButton_3',
                autoPlay: {

               }
            },
            {
                id: 'AButton',
                symbolName: 'AButton_3',
                autoPlay: {

               }
            },
            {
                id: 'BButton',
                symbolName: 'BButton_3',
                autoPlay: {

               }
            },
            {
                id: 'CButton',
                symbolName: 'CButton_3',
                autoPlay: {

               }
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
            duration: 10000,
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
