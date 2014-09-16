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
                rect: ['24px', '30px','298px','100px','auto', 'auto'],
                text: "Melissa received a 10% bonus included in her paycheck. The total amount including the bonus was $594 before taxes and deductions. What is her usual paycheck amount without the bonus?",
                align: "left",
                font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['48', '181','auto','auto','auto', 'auto']
            },
            {
                id: 'AnswerDText',
                type: 'text',
                rect: ['71px', '511px','101px','20px','auto', 'auto'],
                text: "$585",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['71px', '475px','101px','19px','auto', 'auto'],
                text: "$554",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerBText',
                type: 'text',
                rect: ['71px', '443px','112px','19px','auto', 'auto'],
                text: "$540",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['71px', '408px','109px','19px','auto', 'auto'],
                text: "$515",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
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
                id: 'Hint_1_text',
                type: 'text',
                rect: ['224px', '144px','292px','46px','auto', 'auto'],
                text: "100% + 10% = 110% = $594",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(5,68,15,1.00)", "400", "none", "normal"]
            },
            {
                id: 'hint1',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1.ogg','media/hint1.mp3']
            },
            {
                id: 'Graphs',
                type: 'group',
                rect: ['58px', '246px','88','95','auto', 'auto'],
                c: [
                {
                    id: 'Usual_Paycheck',
                    type: 'group',
                    rect: ['0px', '0px','88','95','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle2',
                        type: 'rect',
                        rect: ['-15px', '-42px','117px','144px','auto', 'auto'],
                        fill: ["rgba(109,204,255,1.00)"],
                        stroke: [2,"rgba(0,27,173,0.95)","solid"]
                    },
                    {
                        id: 'Text2',
                        type: 'text',
                        rect: ['0px', '0px','88px','95px','auto', 'auto'],
                        text: "Usual paycheck 100%",
                        align: "left",
                        font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "bold", "none", "normal"]
                    }]
                },
                {
                    id: 'Bonus',
                    type: 'group',
                    rect: ['0px', '-75px','101','19','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle',
                        type: 'rect',
                        rect: ['-15px', '-12px','117px','33px','auto', 'auto'],
                        fill: ["rgba(252,116,116,1.00)"],
                        stroke: [2,"rgba(173,1,1,0.95)","solid"]
                    },
                    {
                        id: 'Text',
                        type: 'text',
                        rect: ['0px', '0px','101px','19px','auto', 'auto'],
                        text: "Bonus  10%",
                        align: "left",
                        font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1.00)", "700", "none", "normal"]
                    }]
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
                id: 'Hint_1_Equation',
                type: 'group',
                rect: ['396px', '223px','73','31','auto', 'auto'],
                c: [
                {
                    id: 'base',
                    type: 'text',
                    rect: ['0px', '0px','73px','31px','auto', 'auto'],
                    text: "Base",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle4',
                    type: 'rect',
                    rect: ['-25px', '-13px','88px','2px','auto', 'auto'],
                    fill: ["rgba(0,75,172,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'part',
                    type: 'text',
                    rect: ['3px', '-42px','67px','37px','auto', 'auto'],
                    text: "Part",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
                },
                {
                    id: 'equal',
                    type: 'text',
                    rect: ['-57px', '-20px','41px','20px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,75,172,1)", "400", "none", "normal"]
                },
                {
                    id: '_100',
                    type: 'text',
                    rect: ['-154px', '0px','67px','20px','auto', 'auto'],
                    text: "100 %",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle3',
                    type: 'rect',
                    rect: ['-179px', '-12px','101px','2px','auto', 'auto'],
                    fill: ["rgba(0,75,172,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'percent',
                    type: 'text',
                    rect: ['-162px', '-42px','88px','37px','auto', 'auto'],
                    text: "Percent",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'hint2a',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2a.ogg','media/hint2a.mp3']
            },
            {
                id: 'Hint_2_equation',
                type: 'group',
                rect: ['246px', '305px','41','20','auto', 'auto'],
                c: [
                {
                    id: 'one_hundred',
                    type: 'text',
                    rect: ['0px', '0px','41px','20px','auto', 'auto'],
                    text: "100",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
                },
                {
                    id: 'Base',
                    display: 'block',
                    type: 'text',
                    rect: ['155px', '0px','53px','20px','auto', 'auto'],
                    text: "Base<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle6',
                    type: 'rect',
                    rect: ['141px', '-11px','67px','2px','auto', 'auto'],
                    fill: ["rgba(0,75,172,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: '_594',
                    type: 'text',
                    rect: ['155px', '-41px','73px','25px','auto', 'auto'],
                    text: "594",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle5',
                    type: 'rect',
                    rect: ['-16px', '-12px','67px','2px','auto', 'auto'],
                    fill: ["rgba(0,75,172,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'equal2',
                    type: 'text',
                    rect: ['88px', '-21px','67px','20px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
                },
                {
                    id: '_110',
                    type: 'text',
                    rect: ['0px', '-41px','82px','25px','auto', 'auto'],
                    text: "110",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
                },
                {
                    id: 'X',
                    type: 'text',
                    rect: ['167px', '0px','67px','31px','auto', 'auto'],
                    text: "X",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'hint2b',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2b.mp3','media/hint2b.ogg']
            },
            {
                id: 'hint3',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint3.ogg','media/hint3.mp3']
            },
            {
                id: 'Hint_3_a',
                type: 'text',
                rect: ['216px', '345px','211px','37px','auto', 'auto'],
                text: "110 X = 594 x 100",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
            },
            {
                id: 'Hint_3_b',
                type: 'text',
                rect: ['219px', '390px','191px','37px','auto', 'auto'],
                text: "110 X   =    59,400",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
            },
            {
                id: 'Answer_Hint_1',
                type: 'group',
                rect: ['304px', '427px','55','20','auto', 'auto'],
                c: [
                {
                    id: '_110b',
                    type: 'text',
                    rect: ['0px', '0px','55px','20px','auto', 'auto'],
                    text: "110<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
                },
                {
                    id: '_110a',
                    type: 'text',
                    rect: ['-80px', '0px','41px','19px','auto', 'auto'],
                    text: "110",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle8',
                    type: 'rect',
                    rect: ['-18px', '-10px','68px','2px','auto', 'auto'],
                    fill: ["rgba(0,75,172,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle7',
                    type: 'rect',
                    rect: ['-92px', '-10px','55px','2px','auto', 'auto'],
                    fill: ["rgba(0,75,172,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'Answer_Hint_2',
                type: 'group',
                rect: ['217', '386','35','27','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle9Copy',
                    type: 'rect',
                    rect: ['-3px', '12px','41px','3px','auto', 'auto'],
                    fill: ["rgba(255,0,0,1.00)"],
                    stroke: [0,"rgba(230,0,0,1.00)","none"],
                    transform: [[],['36']]
                },
                {
                    id: 'Rectangle9',
                    type: 'rect',
                    rect: ['4px', '50px','41px','3px','auto', 'auto'],
                    fill: ["rgba(245,2,2,1.00)"],
                    stroke: [0,"rgba(230,0,0,1.00)","none"],
                    transform: [[],['36']]
                }]
            },
            {
                id: 'Answer_Hint_3',
                type: 'group',
                rect: ['301', '501','35','20','auto', 'auto'],
                c: [
                {
                    id: '_540',
                    type: 'text',
                    rect: ['-23px', '36px','82px','19px','auto', 'auto'],
                    text: " = 540",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text23',
                    type: 'text',
                    rect: ['0px', '0px','35px','20px','auto', 'auto'],
                    text: "110",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle10',
                    type: 'rect',
                    rect: ['-19px', '-8px','73px','2px','auto', 'auto'],
                    fill: ["rgba(0,75,172,1.00)"],
                    stroke: [0,"rgba(0,75,172,1.00)","none"]
                },
                {
                    id: 'Text21',
                    type: 'text',
                    rect: ['-47px', '-32px','101px','31px','auto', 'auto'],
                    text: "X = 59,400",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,75,172,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'answer',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer.mp3','media/answer.ogg']
            },
            {
                id: 'Answer_Hint_4',
                type: 'group',
                rect: ['386px', '361px','166','169','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle12',
                    type: 'rect',
                    rect: ['0px', '0px','162px','165px','auto', 'auto'],
                    fill: ["rgba(140,0,166,0.00)"],
                    stroke: [2,"rgba(3,146,70,1.00)","solid"]
                },
                {
                    id: 'check',
                    type: 'text',
                    rect: ['136px', '130px','30px','20px','auto', 'auto'],
                    text: "✔<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 26, "rgba(13,155,13,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'total_pay',
                    type: 'text',
                    rect: ['30px', '139px','98px','20px','auto', 'auto'],
                    text: "594 total pay<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(140,0,166,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle11',
                    type: 'rect',
                    rect: ['22px', '126px','121px','2px','auto', 'auto'],
                    fill: ["rgba(140,0,166,1.00)"],
                    stroke: [0,"rgb(230, 0, 0)","none"]
                },
                {
                    id: '_54_bonus',
                    type: 'text',
                    rect: ['26px', '100px','88px','20px','auto', 'auto'],
                    text: "+ 54 bonus",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(140,0,166,1)", "400", "none", "normal"]
                },
                {
                    id: 'base_pay',
                    type: 'text',
                    rect: ['30px', '72px','106px','27px','auto', 'auto'],
                    text: "540  base pay",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(140,0,166,1.00)", "400", "none", "normal"]
                },
                {
                    id: '_54',
                    type: 'text',
                    rect: ['27px', '12px','112px','37px','auto', 'auto'],
                    text: "$540 x 10% = 540 x 0.1 = 54",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(143,0,0,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Choose_B',
                type: 'text',
                rect: ['426px', '541px','136px','27px','auto', 'auto'],
                text: "Choose (B)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(17,124,47,1.00)", "700", "none", "normal"]
            },
            {
                id: 'Hint_3_circles',
                type: 'group',
                rect: ['227', '227','231','128','auto', 'auto'],
                c: [
                {
                    id: 'EllipseCopy',
                    type: 'ellipse',
                    rect: ['5px', '29px','214px','64px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(192,192,192,0.00)"],
                    stroke: [3,"rgba(12,201,0,1.00)","solid"],
                    transform: [[],['-16']]
                },
                {
                    id: 'Ellipse',
                    type: 'ellipse',
                    rect: ['5px', '30px','204px','64px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(192,192,192,0.00)"],
                    stroke: [3,"rgba(255,0,0,1.00)","solid"],
                    transform: [[],['17']]
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
            "${_X}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '167px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(109,204,255,1.00)'],
                ["color", "border-color", 'rgba(0,27,173,0.95)'],
                ["style", "left", '-15px'],
                ["style", "top", '-42px']
            ],
            "${_Hint_3_circles}": [
                ["style", "opacity", '0.000000']
            ],
            "${__110b}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text2}": [
                ["style", "top", '0px'],
                ["style", "height", '95px'],
                ["style", "left", '0px'],
                ["style", "width", '88px']
            ],
            "${_Hint_1_text}": [
                ["color", "color", 'rgba(5,68,15,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '224px'],
                ["style", "font-size", '18px'],
                ["style", "top", '144px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "width", '292px'],
                ["style", "height", '46px']
            ],
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["transform", "rotateZ", '-16deg'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '3px'],
                ["style", "width", '214px'],
                ["style", "top", '29px'],
                ["style", "height", '64px'],
                ["color", "border-color", 'rgba(12,201,0,1.00)'],
                ["style", "left", '5px']
            ],
            "${_Text}": [
                ["style", "top", '0px'],
                ["style", "height", '19px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '101px']
            ],
            "${_equal}": [
                ["style", "left", '-57px'],
                ["style", "top", '-20px']
            ],
            "${_Hint_2_equation}": [
                ["style", "top", '305px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '246px']
            ],
            "${_Hint_3_a}": [
                ["style", "top", '345px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '216px'],
                ["style", "width", '211px']
            ],
            "${_Rectangle4}": [
                ["style", "height", '2px'],
                ["style", "left", '-25px'],
                ["style", "top", '-13px']
            ],
            "${__54}": [
                ["style", "top", '12px'],
                ["color", "color", 'rgba(143,0,0,1.00)'],
                ["style", "font-size", '16px'],
                ["style", "left", '27px'],
                ["style", "width", '112px']
            ],
            "${_Rectangle7}": [
                ["style", "top", '-10px'],
                ["style", "height", '2px'],
                ["style", "left", '-92px'],
                ["style", "width", '55px']
            ],
            "${_Base}": [
                ["style", "top", '0px'],
                ["style", "left", '155px'],
                ["style", "display", 'block']
            ],
            "${_part}": [
                ["style", "top", '-42px'],
                ["style", "left", '3px'],
                ["style", "font-size", '18px']
            ],
            "${_Hint_1_Equation}": [
                ["style", "top", '223px'],
                ["style", "opacity", '0'],
                ["style", "left", '396px']
            ],
            "${_equal2}": [
                ["style", "left", '88px'],
                ["style", "top", '-21px']
            ],
            "${_Usual_Paycheck}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${__594}": [
                ["style", "left", '155px'],
                ["style", "top", '-41px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '600px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '-12px'],
                ["style", "height", '2px'],
                ["style", "left", '-179px'],
                ["color", "background-color", 'rgba(0,75,172,1.00)']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "rotateZ", '17deg'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '3px'],
                ["style", "width", '204px'],
                ["style", "top", '30px'],
                ["style", "height", '64px'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '5px']
            ],
            "${_Answer_Hint_2}": [
                ["style", "opacity", '0.000000']
            ],
            "${_Bonus}": [
                ["style", "left", '0px'],
                ["style", "top", '-75px']
            ],
            "${_one_hundred}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text21}": [
                ["style", "left", '-47px'],
                ["style", "top", '-32px']
            ],
            "${_Rectangle6}": [
                ["style", "left", '141px'],
                ["style", "top", '-11px']
            ],
            "${_Graphs}": [
                ["style", "top", '246px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '58px']
            ],
            "${_percent}": [
                ["style", "top", '-42px'],
                ["color", "color", 'rgba(0,75,172,1.00)'],
                ["style", "left", '-162px'],
                ["style", "font-size", '18px']
            ],
            "${_Text23}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${__110}": [
                ["style", "left", '0px'],
                ["style", "top", '-41px']
            ],
            "${_AnswerBText}": [
                ["style", "top", '443px'],
                ["style", "width", '112px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '71px'],
                ["style", "font-size", '14px']
            ],
            "${_total_pay}": [
                ["style", "top", '139px'],
                ["style", "left", '30px'],
                ["style", "width", '98px']
            ],
            "${_Answer_Hint_3}": [
                ["style", "opacity", '0.000000']
            ],
            "${_Rectangle8}": [
                ["style", "top", '-10px'],
                ["style", "left", '-18px'],
                ["style", "width", '68px']
            ],
            "${_AnswerCText}": [
                ["style", "top", '475px'],
                ["style", "width", '101px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '71px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(245,2,2,1.00)'],
                ["transform", "rotateZ", '36deg'],
                ["style", "height", '3px'],
                ["color", "border-color", 'rgba(230,0,0,1.00)'],
                ["style", "left", '4px'],
                ["style", "top", '50px']
            ],
            "${_AnswerAText}": [
                ["style", "top", '408px'],
                ["style", "text-align", 'left'],
                ["style", "width", '109px'],
                ["style", "height", '19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '71px'],
                ["style", "font-size", '14px']
            ],
            "${__540}": [
                ["style", "top", '36px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-23px']
            ],
            "${__100}": [
                ["style", "top", '0px'],
                ["style", "left", '-154px'],
                ["style", "font-size", '18px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(252,116,116,1.00)'],
                ["style", "top", '-12px'],
                ["style", "height", '33px'],
                ["color", "border-color", 'rgba(173,1,1,0.95)'],
                ["style", "left", '-15px'],
                ["style", "width", '117px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${__110a}": [
                ["style", "left", '-80px'],
                ["style", "top", '0px']
            ],
            "${_Answer_Hint_1}": [
                ["style", "top", '427px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '304px']
            ],
            "${_Question_Text}": [
                ["style", "top", '30px'],
                ["style", "width", '298px'],
                ["style", "height", '100px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '24px'],
                ["style", "font-size", '16px']
            ],
            "${_base_pay}": [
                ["color", "color", 'rgba(140,0,166,1.00)'],
                ["style", "top", '72px'],
                ["style", "left", '30px'],
                ["style", "width", '106px']
            ],
            "${_base}": [
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["style", "width", '73px'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ],
            "${_Answers}": [
                ["style", "top", '386px'],
                ["style", "left", '24px']
            ],
            "${_Answer_Hint_4}": [
                ["style", "top", '361px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '386px']
            ],
            "${__54_bonus}": [
                ["style", "top", '100px'],
                ["style", "left", '26px'],
                ["style", "width", '88px']
            ],
            "${_Choose_B}": [
                ["style", "top", '541px'],
                ["color", "color", 'rgba(17,124,47,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '426px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Rectangle10}": [
                ["color", "background-color", 'rgba(0,75,172,1.00)'],
                ["color", "border-color", 'rgba(0,75,172,1.00)'],
                ["style", "left", '-19px'],
                ["style", "top", '-8px']
            ],
            "${_AnswerDText}": [
                ["style", "top", '511px'],
                ["style", "width", '101px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '71px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle12}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(140,0,166,0.00)'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgba(3,146,70,1.00)'],
                ["style", "height", '165px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '162px']
            ],
            "${_check}": [
                ["style", "top", '130px'],
                ["color", "color", 'rgba(13,155,13,1.00)'],
                ["style", "width", '30px'],
                ["style", "left", '136px'],
                ["style", "font-size", '26px']
            ],
            "${_Rectangle5}": [
                ["style", "top", '-12px'],
                ["style", "height", '2px'],
                ["style", "left", '-16px'],
                ["style", "width", '67px']
            ],
            "${_Rectangle11}": [
                ["color", "background-color", 'rgba(140,0,166,1.00)'],
                ["style", "left", '22px'],
                ["style", "top", '126px']
            ],
            "${_Rectangle9Copy}": [
                ["style", "top", '12px'],
                ["transform", "rotateZ", '36deg'],
                ["style", "height", '3px'],
                ["color", "border-color", 'rgba(230,0,0,1.00)'],
                ["style", "left", '-3px'],
                ["color", "background-color", 'rgba(255,0,0,1.00)']
            ],
            "${_Hint_3_b}": [
                ["style", "top", '390px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '219px'],
                ["style", "width", '191px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 141000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 20000,
                "Hint 2": 58000,
                "Hint 3": 93000,
                "Answer Hint": 114000
            },
            timeline: [
                { id: "eid286", tween: [ "style", "${_Answer_Hint_1}", "opacity", '1', { fromValue: '0.000000'}], position: 114000, duration: 1000 },
                { id: "eid302", tween: [ "style", "${_Answer_Hint_4}", "opacity", '1', { fromValue: '0.000000'}], position: 137956, duration: 1044 },
                { id: "eid250", tween: [ "style", "${_Hint_1_Equation}", "opacity", '1', { fromValue: '0'}], position: 55000, duration: 986 },
                { id: "eid272", tween: [ "style", "${_Base}", "display", 'none', { fromValue: 'block'}], position: 89000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid275", tween: [ "style", "${_X}", "opacity", '1', { fromValue: '0.000000'}], position: 89000, duration: 1000 },
                { id: "eid297", tween: [ "style", "${__540}", "opacity", '1', { fromValue: '0.000000'}], position: 120000, duration: 1000 },
                { id: "eid280", tween: [ "style", "${_Hint_3_a}", "opacity", '1', { fromValue: '0.000000'}], position: 100500, duration: 1000 },
                { id: "eid283", tween: [ "style", "${_Hint_3_b}", "opacity", '1', { fromValue: '0.000000'}], position: 108000, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid309", tween: [ "style", "${_Hint_3_circles}", "opacity", '1', { fromValue: '0.000000'}], position: 99000, duration: 1000 },
                { id: "eid246", tween: [ "style", "${_Hint_1_text}", "opacity", '1', { fromValue: '0.000000'}], position: 28035, duration: 465 },
                { id: "eid294", tween: [ "style", "${_Answer_Hint_3}", "opacity", '1', { fromValue: '0.000000'}], position: 118000, duration: 1000 },
                { id: "eid289", tween: [ "style", "${_Answer_Hint_2}", "opacity", '1', { fromValue: '0.000000'}], position: 116000, duration: 1000 },
                { id: "eid163", tween: [ "style", "${_Answers}", "top", '386px', { fromValue: '386px'}], position: 25500, duration: 0 },
                { id: "eid243", tween: [ "style", "${_Graphs}", "opacity", '1', { fromValue: '0.000000'}], position: 20000, duration: 1000 },
                { id: "eid271", tween: [ "style", "${_Hint_2_equation}", "opacity", '1', { fromValue: '0.000000'}], position: 69500, duration: 1000 },
                { id: "eid305", tween: [ "style", "${_Choose_B}", "opacity", '1', { fromValue: '0.000000'}], position: 139000, duration: 1000 },
                { id: "eid238", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid247", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 20000 },
                { id: "eid276", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2a}', [] ], ""], position: 58000 },
                { id: "eid277", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2b}', [] ], ""], position: 72000 },
                { id: "eid298", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 93000 },
                { id: "eid299", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 121500 }            ]
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
                symbolName: 'DButton_3',
                autoPlay: {

               }
            },
            {
                id: 'EButton',
                symbolName: 'EButton_3',
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
            },
            {
                id: 'AButton',
                symbolName: 'AButton_3',
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
