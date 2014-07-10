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
                rect: ['15px', '30px','219px','28px','auto', 'auto'],
                text: "What is : ",
                align: "left",
                font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint1_16Copy',
                type: 'image',
                rect: ['149px', '243px','16px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hint1%201%3A6.png",'0px','0px']
            },
            {
                id: 'hint1_56Copy',
                type: 'image',
                rect: ['324px', '243px','16px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hint1%205%3A6.png",'0px','0px']
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['48', '181','auto','auto','auto', 'auto']
            },
            {
                id: 'Answer_E',
                type: 'image',
                rect: ['67px', '330px','16px','64px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Answer%20E.png",'0px','0px']
            },
            {
                id: 'AnswerBText',
                type: 'text',
                rect: ['75px', '225px','112px','19px','auto', 'auto'],
                text: "5",
                align: "left",
                font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
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
                id: 'Problem_363_picture',
                type: 'image',
                rect: ['36px', '68px','72px','46px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Problem%20363%20picture.png",'0px','0px']
            },
            {
                id: 'Answer_A',
                type: 'image',
                rect: ['65px', '184px','23px','60px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Answer%20A.png",'0px','0px']
            },
            {
                id: 'Answer_C',
                type: 'image',
                rect: ['65px', '248px','23px','60px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Answer%20C.png",'0px','0px']
            },
            {
                id: 'Answer_D',
                type: 'image',
                rect: ['68px', '290px','16px','60px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Answer%20D.png",'0px','0px']
            },
            {
                id: 'Hint_1_text',
                type: 'group',
                rect: ['362px', '77px','112','28','auto', 'auto'],
                c: [
                {
                    id: 'hint1_make',
                    type: 'text',
                    rect: ['0px', '0px','112px','28px','auto', 'auto'],
                    text: "make",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 16, "rgba(128,6,6,1)", "normal", "none", "normal"]
                },
                {
                    id: 'hint1_how_many',
                    type: 'text',
                    rect: ['-217px', '0px','301px','28px','auto', 'auto'],
                    text: "We can ask how many ",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 16, "rgba(128,6,6,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'hint1_56',
                    type: 'image',
                    rect: ['56px', '-14px','17px','51px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hint1%205%3A6.png",'0px','0px']
                },
                {
                    id: 'hint1_16',
                    type: 'image',
                    rect: ['-26px', '-15px','17px','51px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hint1%201%3A6.png",'0px','0px']
                },
                {
                    id: 'hint1_question_mark',
                    type: 'text',
                    rect: ['90px', '1px','112px','28px','auto', 'auto'],
                    text: "?",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 20, "rgba(128,6,6,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: '_16_bar',
                type: 'group',
                rect: ['168px', '175px','23','46','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle3Copy6',
                    type: 'rect',
                    rect: ['0px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle3Copy5',
                    type: 'rect',
                    rect: ['21px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle3Copy4',
                    type: 'rect',
                    rect: ['42px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle3Copy3',
                    type: 'rect',
                    rect: ['63px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle3Copy2',
                    type: 'rect',
                    rect: ['84px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle3',
                    type: 'rect',
                    rect: ['-21px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'blue_1',
                    type: 'rect',
                    rect: ['-21px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(106,209,244,1.00)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'blue_1Copy5',
                    type: 'rect',
                    rect: ['-22px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(106,209,244,1.00)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'blue_1Copy4',
                    type: 'rect',
                    rect: ['-21px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(106,209,244,1.00)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'blue_1Copy3',
                    type: 'rect',
                    rect: ['-21px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(106,209,244,1.00)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'blue_1Copy2',
                    type: 'rect',
                    rect: ['-21px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(106,209,244,1.00)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'blue_1Copy1',
                    type: 'rect',
                    rect: ['156px', '0px','19px','42px','auto', 'auto'],
                    opacity: 1,
                    fill: ["rgba(106,209,244,1.00)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                }]
            },
            {
                id: '_56_bar_barCopy',
                type: 'group',
                rect: ['345px', '175px','23','46','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle3Copy13',
                    type: 'rect',
                    rect: ['0px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle3Copy12',
                    type: 'rect',
                    rect: ['21px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle3Copy11',
                    type: 'rect',
                    rect: ['42px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle3Copy10',
                    type: 'rect',
                    rect: ['63px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle3Copy9',
                    type: 'rect',
                    rect: ['84px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle3Copy8',
                    type: 'rect',
                    rect: ['-21px', '0px','19px','42px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                }]
            },
            {
                id: '_1',
                type: 'text',
                rect: ['328px', '149px','50px','19px','auto', 'auto'],
                text: "1",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(128,6,6,1)", "400", "none", "normal"]
            },
            {
                id: '_2',
                type: 'text',
                rect: ['352px', '149px','42px','19px','auto', 'auto'],
                text: "2",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(128,6,6,1)", "normal", "none", "normal"]
            },
            {
                id: '_3',
                type: 'text',
                rect: ['373px', '149px','23px','28px','auto', 'auto'],
                text: "3<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(128,6,6,1)", "normal", "none", "normal"]
            },
            {
                id: '_4',
                type: 'text',
                rect: ['392px', '149px','23px','19px','auto', 'auto'],
                text: "4<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(128,6,6,1)", "normal", "none", "normal"]
            },
            {
                id: '_5',
                type: 'text',
                rect: ['413px', '149px','23px','19px','auto', 'auto'],
                text: "5<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(128,6,6,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint_3',
                type: 'group',
                rect: ['180px', '313px','12','37','auto', 'auto'],
                c: [
                {
                    id: 'hint3_16Copy4',
                    type: 'image',
                    rect: ['0px', '0px','12px','37px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hint1%201%3A6.png",'0px','0px']
                },
                {
                    id: 'Hint_3_4',
                    type: 'text',
                    rect: ['-30px', '10px','19px','41px','auto', 'auto'],
                    text: "5, ",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 20, "rgba(128,6,6,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Hint3_make_up',
                    type: 'text',
                    rect: ['33px', '10px','112px','19px','auto', 'auto'],
                    text: "make up",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 20, "rgba(128,6,6,1)", "normal", "none", "normal"]
                },
                {
                    id: 'hint3_56Copy2',
                    type: 'image',
                    rect: ['124px', '1px','12px','37px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hint1%205%3A6.png",'0px','0px']
                }]
            },
            {
                id: 'Choose_B',
                type: 'text',
                rect: ['352px', '323px','112px','28px','auto', 'auto'],
                text: "Choose (B)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(40,128,6,1)", "normal", "none", "normal"]
            },
            {
                id: 'Answer_hint',
                type: 'group',
                rect: ['409px', '318','21px','19','auto', 'auto'],
                c: [
                {
                    id: 'equals',
                    type: 'text',
                    rect: ['-166px', '-6px','42px','25px','auto', 'auto'],
                    text: "=",
                    font: ['Arial, Helvetica, sans-serif', 26, "rgba(128,6,6,1.00)", "normal", "none", ""]
                },
                {
                    id: 'hint4c',
                    type: 'image',
                    rect: ['-137px', '-16px','28px','53px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hint4c.png",'0px','0px']
                },
                {
                    id: 'equalsCopy',
                    type: 'text',
                    rect: ['-95px', '-5px','42px','25px','auto', 'auto'],
                    text: "=",
                    font: ['Arial, Helvetica, sans-serif', 26, "rgba(128,6,6,1.00)", "normal", "none", ""]
                },
                {
                    id: 'answer_hint_5',
                    display: 'block',
                    type: 'text',
                    rect: ['-69px', '-7px','58px','37px','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 26, "rgba(128,6,6,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Hint_4_',
                type: 'group',
                rect: ['141', '303','16','47','auto', 'auto'],
                c: [
                {
                    id: 'divide',
                    type: 'image',
                    rect: ['32px', '12px','19px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"divide.png",'0px','0px']
                },
                {
                    id: 'hint4_56',
                    type: 'image',
                    rect: ['0px', '0px','16px','47px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hint1%205%3A6.png",'0px','0px']
                },
                {
                    id: 'hint_4_multiplyCopy',
                    type: 'text',
                    rect: ['37px', '6px','23px','19px','auto', 'auto'],
                    text: "x",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 26, "rgba(128,6,6,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'hint4_1_6_',
                type: 'group',
                rect: ['210px', '332px','42','12','auto', 'auto'],
                c: [
                {
                    id: '_6',
                    type: 'text',
                    rect: ['1px', '-5px','42px','30px','auto', 'auto'],
                    text: "6<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 26, "rgba(128,6,6,1)", "normal", "none", "normal"]
                },
                {
                    id: 'one',
                    type: 'text',
                    rect: ['0px', '-36px','21px','20px','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 26, "rgba(128,6,6,1)", "normal", "none", "normal"]
                },
                {
                    id: 'stick',
                    type: 'rect',
                    rect: ['-3px', '-6px','20px','2px','auto', 'auto'],
                    fill: ["rgba(150,8,8,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
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
            "${__16_bar}": [
                ["style", "top", '175px'],
                ["style", "opacity", '0'],
                ["style", "left", '168px']
            ],
            "${_hint1_16}": [
                ["style", "top", '-15px'],
                ["style", "height", '51px'],
                ["style", "left", '-26px'],
                ["style", "width", '17px']
            ],
            "${_hint1_56}": [
                ["style", "top", '-14px'],
                ["style", "height", '51px'],
                ["style", "left", '56px'],
                ["style", "width", '17px']
            ],
            "${_hint1_56Copy}": [
                ["style", "top", '243px'],
                ["style", "height", '41px'],
                ["style", "opacity", '0'],
                ["style", "left", '324px'],
                ["style", "width", '16px']
            ],
            "${_divide}": [
                ["style", "top", '12px'],
                ["style", "height", '20px'],
                ["style", "opacity", '0'],
                ["style", "left", '32px'],
                ["style", "width", '19px']
            ],
            "${__2}": [
                ["style", "top", '149px'],
                ["style", "opacity", '0'],
                ["style", "left", '352px']
            ],
            "${__5}": [
                ["style", "top", '149px'],
                ["style", "opacity", '0'],
                ["style", "left", '413px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${__56_bar_barCopy}": [
                ["style", "top", '175px'],
                ["style", "opacity", '0'],
                ["style", "left", '345px']
            ],
            "${_blue_1}": [
                ["color", "background-color", 'rgba(106,209,244,1.00)'],
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-21px'],
                ["style", "width", '19px']
            ],
            "${_hint4_56}": [
                ["style", "top", '0px'],
                ["style", "height", '47px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '16px']
            ],
            "${_Rectangle3Copy5}": [
                ["style", "top", '0px'],
                ["style", "left", '21px'],
                ["style", "width", '19px']
            ],
            "${_hint1_16Copy}": [
                ["style", "top", '243px'],
                ["style", "height", '41px'],
                ["style", "opacity", '0'],
                ["style", "left", '149px'],
                ["style", "width", '16px']
            ],
            "${_hint1_how_many}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(128,6,6,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '-217px'],
                ["style", "font-size", '16px']
            ],
            "${_Answer_A}": [
                ["style", "top", '184px'],
                ["style", "height", '60px'],
                ["style", "left", '65px'],
                ["style", "width", '23px']
            ],
            "${_Rectangle3Copy12}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(251,246,246,0)'],
                ["style", "left", '21px'],
                ["style", "width", '19px']
            ],
            "${_equalsCopy}": [
                ["style", "top", '-5px'],
                ["color", "color", 'rgba(128,6,6,1)'],
                ["style", "height", '25px'],
                ["style", "opacity", '0'],
                ["style", "left", '-95px'],
                ["style", "font-size", '26px']
            ],
            "${_answer_hint_5}": [
                ["style", "top", '-7px'],
                ["style", "opacity", '0'],
                ["style", "left", '-69px'],
                ["style", "display", 'block']
            ],
            "${_Question_Text}": [
                ["style", "top", '30px'],
                ["style", "font-size", '16px'],
                ["style", "height", '28px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '15px'],
                ["style", "width", '219px']
            ],
            "${__3}": [
                ["style", "top", '149px'],
                ["style", "opacity", '0'],
                ["style", "left", '373px']
            ],
            "${_Hint_1_text}": [
                ["style", "top", '77px'],
                ["style", "opacity", '0'],
                ["style", "left", '362px']
            ],
            "${_Rectangle3Copy4}": [
                ["style", "top", '0px'],
                ["style", "left", '42px'],
                ["style", "width", '19px']
            ],
            "${_stick}": [
                ["style", "top", '-6px'],
                ["style", "height", '2px'],
                ["color", "background-color", 'rgba(150,8,8,1.00)'],
                ["style", "left", '-3px'],
                ["style", "width", '20px']
            ],
            "${_Answer_hint}": [
                ["style", "left", '409px'],
                ["style", "width", '21px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '0px'],
                ["style", "left", '-21px'],
                ["style", "width", '19px']
            ],
            "${__6}": [
                ["style", "top", '-5px'],
                ["style", "left", '1px'],
                ["style", "height", '30px']
            ],
            "${_hint4c}": [
                ["style", "top", '-16px'],
                ["style", "height", '53px'],
                ["style", "opacity", '0'],
                ["style", "left", '-137px'],
                ["style", "width", '28px']
            ],
            "${_blue_1Copy1}": [
                ["color", "background-color", 'rgba(106,209,244,1.00)'],
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-22px'],
                ["style", "width", '19px']
            ],
            "${_blue_1Copy4}": [
                ["color", "background-color", 'rgba(106,209,244,1.00)'],
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-21px'],
                ["style", "width", '19px']
            ],
            "${_Rectangle3Copy3}": [
                ["style", "top", '0px'],
                ["style", "left", '63px'],
                ["style", "width", '19px']
            ],
            "${_Hint3_make_up}": [
                ["style", "left", '33px'],
                ["style", "top", '10px']
            ],
            "${__4}": [
                ["style", "top", '149px'],
                ["style", "opacity", '0'],
                ["style", "left", '392px']
            ],
            "${_hint3_16Copy4}": [
                ["style", "height", '37px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '12px']
            ],
            "${_blue_1Copy2}": [
                ["color", "background-color", 'rgba(106,209,244,1.00)'],
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-21px'],
                ["style", "width", '19px']
            ],
            "${_Answer_E}": [
                ["style", "top", '330px'],
                ["style", "height", '64px'],
                ["style", "left", '67px'],
                ["style", "width", '16px']
            ],
            "${_Rectangle3Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '84px'],
                ["style", "width", '19px']
            ],
            "${_Hint_3_4}": [
                ["style", "top", '10px'],
                ["style", "left", '-30px'],
                ["style", "width", '19px']
            ],
            "${_equals}": [
                ["style", "top", '-6px'],
                ["style", "height", '25px'],
                ["color", "color", 'rgba(128,6,6,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-166px'],
                ["style", "font-size", '26px']
            ],
            "${_Rectangle3Copy11}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(251,246,246,0)'],
                ["style", "left", '42px'],
                ["style", "width", '19px']
            ],
            "${_Rectangle3Copy13}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(251,246,246,0)'],
                ["style", "left", '0px'],
                ["style", "width", '19px']
            ],
            "${_blue_1Copy5}": [
                ["color", "background-color", 'rgba(106,209,244,1.00)'],
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-22px'],
                ["style", "width", '19px']
            ],
            "${_TutorialText}": [
                ["style", "top", '51px'],
                ["style", "height", '187px'],
                ["style", "opacity", '1'],
                ["style", "left", '260px'],
                ["style", "display", 'none']
            ],
            "${_hint4_1_6_}": [
                ["style", "top", '332px'],
                ["style", "opacity", '0'],
                ["style", "left", '210px']
            ],
            "${_Answers}": [
                ["style", "top", '168px'],
                ["style", "left", '24px']
            ],
            "${_hint_4_multiplyCopy}": [
                ["style", "top", '6px'],
                ["style", "opacity", '0'],
                ["style", "left", '37px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_AnswerBText}": [
                ["style", "top", '225px'],
                ["style", "font-size", '16px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '75px'],
                ["style", "width", '112px']
            ],
            "${_Answer_D}": [
                ["style", "top", '290px'],
                ["style", "height", '60px'],
                ["style", "left", '68px'],
                ["style", "width", '16px']
            ],
            "${_Rectangle3Copy6}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '19px']
            ],
            "${_hint1_make}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_Answer_C}": [
                ["style", "top", '248px'],
                ["style", "height", '60px'],
                ["style", "left", '65px'],
                ["style", "width", '23px']
            ],
            "${_one}": [
                ["style", "top", '-36px'],
                ["style", "left", '0px']
            ],
            "${_Hint_3}": [
                ["style", "top", '313px'],
                ["style", "opacity", '0'],
                ["style", "left", '180px']
            ],
            "${_Rectangle3Copy8}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(251,246,246,0)'],
                ["style", "left", '-21px'],
                ["style", "width", '19px']
            ],
            "${_Choose_B}": [
                ["style", "top", '316px'],
                ["style", "opacity", '0'],
                ["style", "left", '373px']
            ],
            "${_blue_1Copy3}": [
                ["color", "background-color", 'rgba(106,209,244,1.00)'],
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-21px'],
                ["style", "width", '19px']
            ],
            "${__1}": [
                ["style", "top", '149px'],
                ["style", "font-weight", '400'],
                ["style", "opacity", '0'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '328px'],
                ["style", "font-size", '20px']
            ],
            "${_hint1_question_mark}": [
                ["style", "top", '1px'],
                ["style", "left", '90px'],
                ["style", "font-size", '20px']
            ],
            "${_hint3_56Copy2}": [
                ["style", "top", '1px'],
                ["style", "height", '37px'],
                ["style", "opacity", '1'],
                ["style", "left", '124px'],
                ["style", "width", '12px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Problem_363_picture}": [
                ["style", "top", '68px'],
                ["style", "height", '46px'],
                ["style", "left", '36px'],
                ["style", "width", '72px']
            ],
            "${_Rectangle3Copy10}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(251,246,246,0)'],
                ["style", "left", '63px'],
                ["style", "width", '19px']
            ],
            "${_Rectangle3Copy9}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(251,246,246,0)'],
                ["style", "left", '84px'],
                ["style", "width", '19px']
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
                "Hint 1": 8000,
                "Hint 2": 26500,
                "Hint 3": 38000,
                "Hint 4": 47000,
                "Answer Hint": 66000
            },
            timeline: [
                { id: "eid285", tween: [ "style", "${_blue_1Copy3}", "top", '-69px', { fromValue: '0px'}], position: 34500, duration: 500 },
                { id: "eid288", tween: [ "style", "${_blue_1Copy3}", "top", '0px', { fromValue: '-69px'}], position: 35000, duration: 500, easing: "easeOutQuad" },
                { id: "eid318", tween: [ "style", "${__4}", "opacity", '0', { fromValue: '0'}], position: 36000, duration: 0 },
                { id: "eid317", tween: [ "style", "${__4}", "opacity", '1', { fromValue: '0'}], position: 36500, duration: 0 },
                { id: "eid367", tween: [ "style", "${__6}", "top", '-33px', { fromValue: '-5px'}], position: 63000, duration: 2000, easing: "easeInQuint" },
                { id: "eid314", tween: [ "style", "${__2}", "opacity", '0', { fromValue: '0'}], position: 34000, duration: 0 },
                { id: "eid313", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0'}], position: 34500, duration: 0 },
                { id: "eid281", tween: [ "style", "${_blue_1Copy3}", "opacity", '1', { fromValue: '0.000000'}], position: 20000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid282", tween: [ "style", "${_blue_1Copy3}", "opacity", '1', { fromValue: '1'}], position: 34500, duration: 0 },
                { id: "eid356", tween: [ "style", "${_hint_4_multiplyCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 62000, duration: 1000 },
                { id: "eid188", tween: [ "color", "${_Rectangle3Copy12}", "background-color", 'rgba(239,239,35,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(251,246,246,0)'}], position: 24000, duration: 500 },
                { id: "eid289", tween: [ "color", "${_Rectangle3Copy12}", "background-color", 'rgba(239,239,35,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,239,35,1.00)'}], position: 35500, duration: 0, easing: "easeOutQuad" },
                { id: "eid244", tween: [ "style", "${_blue_1Copy1}", "top", '-70px', { fromValue: '0px'}], position: 32500, duration: 500, easing: "easeOutCubic" },
                { id: "eid270", tween: [ "style", "${_blue_1Copy1}", "top", '0px', { fromValue: '-70px'}], position: 33000, duration: 500, easing: "swing" },
                { id: "eid304", tween: [ "style", "${_blue_1Copy5}", "top", '-69px', { fromValue: '0px'}], position: 36500, duration: 500 },
                { id: "eid307", tween: [ "style", "${_blue_1Copy5}", "top", '0px', { fromValue: '-69px'}], position: 37000, duration: 500, easing: "easeOutQuad" },
                { id: "eid275", tween: [ "style", "${_blue_1Copy2}", "top", '-69px', { fromValue: '0px'}], position: 33500, duration: 500 },
                { id: "eid278", tween: [ "style", "${_blue_1Copy2}", "top", '0px', { fromValue: '-69px'}], position: 34000, duration: 500, easing: "easeOutQuad" },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid176", tween: [ "style", "${_blue_1}", "opacity", '1', { fromValue: '0.000000'}], position: 20000, duration: 1000 },
                { id: "eid316", tween: [ "style", "${__3}", "opacity", '0', { fromValue: '0'}], position: 35000, duration: 0 },
                { id: "eid315", tween: [ "style", "${__3}", "opacity", '1', { fromValue: '0'}], position: 35500, duration: 0 },
                { id: "eid326", tween: [ "style", "${_blue_1Copy1}", "opacity", '0', { fromValue: '0'}], position: 16000, duration: 0 },
                { id: "eid240", tween: [ "style", "${_blue_1Copy1}", "opacity", '0.78', { fromValue: '0'}], position: 32500, duration: 0, easing: "easeOutCubic" },
                { id: "eid325", tween: [ "style", "${_blue_1Copy1}", "opacity", '1', { fromValue: '1'}], position: 33500, duration: 0 },
                { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 34000, duration: 0 },
                { id: "eid286", tween: [ "style", "${_blue_1Copy3}", "left", '128px', { fromValue: '-21px'}], position: 34500, duration: 500 },
                { id: "eid287", tween: [ "style", "${_blue_1Copy3}", "left", '198px', { fromValue: '128px'}], position: 35000, duration: 500, easing: "easeOutQuad" },
                { id: "eid372", tween: [ "style", "${_answer_hint_5}", "opacity", '1', { fromValue: '0.000000'}], position: 70750, duration: 1000, easing: "easeInQuint" },
                { id: "eid381", tween: [ "style", "${_equalsCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 69000, duration: 1000, easing: "easeInQuint" },
                { id: "eid359", tween: [ "style", "${_hint4_1_6_}", "opacity", '1', { fromValue: '0.000000'}], position: 58000, duration: 1000 },
                { id: "eid294", tween: [ "style", "${_blue_1Copy4}", "top", '-71px', { fromValue: '0px'}], position: 35500, duration: 500 },
                { id: "eid297", tween: [ "style", "${_blue_1Copy4}", "top", '0px', { fromValue: '-71px'}], position: 36000, duration: 500, easing: "easeOutQuad" },
                { id: "eid366", tween: [ "style", "${__6}", "left", '0px', { fromValue: '1px'}], position: 63000, duration: 2000, easing: "easeInQuint" },
                { id: "eid194", tween: [ "color", "${_Rectangle3Copy10}", "background-color", 'rgba(239,239,35,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(251,246,246,0)'}], position: 25000, duration: 500 },
                { id: "eid308", tween: [ "color", "${_Rectangle3Copy10}", "background-color", 'rgba(239,239,35,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,239,35,1.00)'}], position: 37500, duration: 0, easing: "easeOutQuad" },
                { id: "eid243", tween: [ "style", "${_blue_1Copy1}", "left", '117px', { fromValue: '-22px'}], position: 32500, duration: 500, easing: "easeOutSine" },
                { id: "eid269", tween: [ "style", "${_blue_1Copy1}", "left", '156px', { fromValue: '117px'}], position: 33000, duration: 500, easing: "swing" },
                { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 3000 },
                { id: "eid173", tween: [ "style", "${_hint1_16Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 19000, duration: 1000 },
                { id: "eid179", tween: [ "style", "${_hint1_56Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 22000, duration: 1000 },
                { id: "eid295", tween: [ "style", "${_blue_1Copy4}", "left", '122px', { fromValue: '-21px'}], position: 35500, duration: 500 },
                { id: "eid296", tween: [ "style", "${_blue_1Copy4}", "left", '218px', { fromValue: '122px'}], position: 36000, duration: 500, easing: "easeOutQuad" },
                { id: "eid276", tween: [ "style", "${_blue_1Copy2}", "left", '141px', { fromValue: '-21px'}], position: 33500, duration: 500 },
                { id: "eid277", tween: [ "style", "${_blue_1Copy2}", "left", '177px', { fromValue: '141px'}], position: 34000, duration: 500, easing: "easeOutQuad" },
                { id: "eid320", tween: [ "style", "${__5}", "opacity", '0', { fromValue: '0'}], position: 37000, duration: 0 },
                { id: "eid319", tween: [ "style", "${__5}", "opacity", '1', { fromValue: '0'}], position: 37500, duration: 0 },
                { id: "eid384", tween: [ "style", "${_Choose_B}", "opacity", '1', { fromValue: '0.000000'}], position: 74000, duration: 1000, easing: "easeInQuint" },
                { id: "eid305", tween: [ "style", "${_blue_1Copy5}", "left", '122px', { fromValue: '-22px'}], position: 36500, duration: 500 },
                { id: "eid306", tween: [ "style", "${_blue_1Copy5}", "left", '240px', { fromValue: '122px'}], position: 37000, duration: 500, easing: "easeOutQuad" },
                { id: "eid343", tween: [ "style", "${_hint4_56}", "opacity", '1', { fromValue: '0'}], position: 58000, duration: 1000 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid324", tween: [ "style", "${_Hint_3}", "opacity", '1', { fromValue: '0.000000'}], position: 45000, duration: 1000 },
                { id: "eid332", tween: [ "style", "${_Hint_3}", "opacity", '0', { fromValue: '1'}], position: 47000, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Hint_1_text}", "opacity", '1', { fromValue: '0.000000'}], position: 14000, duration: 1000 },
                { id: "eid300", tween: [ "style", "${_blue_1Copy5}", "opacity", '1', { fromValue: '0.000000'}], position: 20000, duration: 1000 },
                { id: "eid301", tween: [ "style", "${_blue_1Copy5}", "opacity", '1', { fromValue: '1'}], position: 36500, duration: 0 },
                { id: "eid378", tween: [ "style", "${_hint4c}", "opacity", '1', { fromValue: '0.000000'}], position: 67000, duration: 1000, easing: "easeInQuint" },
                { id: "eid191", tween: [ "color", "${_Rectangle3Copy11}", "background-color", 'rgba(239,239,35,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(251,246,246,0)'}], position: 24500, duration: 500 },
                { id: "eid299", tween: [ "color", "${_Rectangle3Copy11}", "background-color", 'rgba(239,239,35,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,239,35,1.00)'}], position: 36500, duration: 0, easing: "easeOutQuad" },
                { id: "eid290", tween: [ "style", "${_blue_1Copy4}", "opacity", '1', { fromValue: '0.000000'}], position: 20000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid291", tween: [ "style", "${_blue_1Copy4}", "opacity", '1', { fromValue: '1'}], position: 35500, duration: 0 },
                { id: "eid167", tween: [ "style", "${__16_bar}", "opacity", '1', { fromValue: '0.000000'}], position: 16000, duration: 1000 },
                { id: "eid170", tween: [ "style", "${__56_bar_barCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 18000, duration: 1000 },
                { id: "eid386", tween: [ "style", "${_Choose_B}", "top", '316px', { fromValue: '316px'}], position: 75000, duration: 0, easing: "easeInQuint" },
                { id: "eid182", tween: [ "color", "${_Rectangle3Copy8}", "background-color", 'rgba(239,239,35,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(251,246,246,0)'}], position: 23000, duration: 500 },
                { id: "eid249", tween: [ "color", "${_Rectangle3Copy8}", "background-color", 'rgba(239,239,35,0.02)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,239,35,1.00)'}], position: 33500, duration: 0, easing: "swing" },
                { id: "eid362", tween: [ "style", "${_one}", "left", '0px', { fromValue: '0px'}], position: 63000, duration: 2000, easing: "easeInCubic" },
                { id: "eid344", tween: [ "style", "${_divide}", "opacity", '1', { fromValue: '0'}], position: 58000, duration: 1000 },
                { id: "eid349", tween: [ "style", "${_divide}", "opacity", '0', { fromValue: '1'}], position: 60000, duration: 1000 },
                { id: "eid363", tween: [ "style", "${_one}", "top", '-2px', { fromValue: '-36px'}], position: 63000, duration: 2000, easing: "easeInQuad" },
                { id: "eid375", tween: [ "style", "${_equals}", "opacity", '1', { fromValue: '0.000000'}], position: 66000, duration: 1000, easing: "easeInQuint" },
                { id: "eid312", tween: [ "style", "${__1}", "opacity", '0', { fromValue: '0'}], position: 33000, duration: 0 },
                { id: "eid311", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 33500, duration: 0 },
                { id: "eid185", tween: [ "color", "${_Rectangle3Copy13}", "background-color", 'rgba(239,239,35,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(251,246,246,0)'}], position: 23500, duration: 500 },
                { id: "eid279", tween: [ "color", "${_Rectangle3Copy13}", "background-color", 'rgba(239,239,35,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,239,35,1.00)'}], position: 34500, duration: 0 },
                { id: "eid385", tween: [ "style", "${_Choose_B}", "left", '373px', { fromValue: '373px'}], position: 75000, duration: 0, easing: "easeInQuint" },
                { id: "eid271", tween: [ "style", "${_blue_1Copy2}", "opacity", '1', { fromValue: '0.000000'}], position: 20000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid272", tween: [ "style", "${_blue_1Copy2}", "opacity", '1', { fromValue: '1'}], position: 33500, duration: 0 }            ]
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text5',
                        text: 'C',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text4',
                        text: 'B',
                        align: 'center',
                        rect: ['0px', '5px', '27px', '19px', 'auto', 'auto']
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
                        type: 'text',
                        rect: ['0px', '3px', '27px', '19px', 'auto', 'auto'],
                        id: 'A',
                        text: 'A<br><br><br>',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
