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
                rect: ['15px', '30px','219px','124px','auto', 'auto'],
                text: "Rectangle ABCD has the following measurements: side AB is 9 and side BC measures one third of the side AB. What is the area of rectangle ABCD? ",
                align: "left",
                font: ['Georgia, Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['55px', '68px','47px','31px','auto', 'auto'],
                text: "9",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['48', '181','auto','auto','auto', 'auto']
            },
            {
                id: 'AnswerDText',
                type: 'text',
                rect: ['71px', '293px','101px','20px','auto', 'auto'],
                text: "6",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['71px', '257px','101px','19px','auto', 'auto'],
                text: "9",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerBText',
                type: 'text',
                rect: ['71px', '225px','112px','19px','auto', 'auto'],
                text: "27",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['71px', '190px','109px','19px','auto', 'auto'],
                text: "4",
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
                id: 'Rectangle_problem',
                type: 'group',
                rect: ['183px', '140px','174px','146px','auto', 'auto'],
                transform: [[],['90']],
                c: [
                {
                    id: 'D',
                    type: 'text',
                    rect: ['182px', '1px','47px','20px','auto', 'auto'],
                    text: "D",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"],
                    transform: [[],['270']]
                },
                {
                    id: 'HTML_367',
                    type: 'image',
                    rect: ['2px', '5px','219px','138px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"HTML%20367%20.png",'0px','0px']
                },
                {
                    id: 'C',
                    type: 'text',
                    rect: ['5px', '0px','47px','31px','auto', 'auto'],
                    text: "C<br>",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"],
                    transform: [[],['270']]
                },
                {
                    id: 'B',
                    type: 'text',
                    rect: ['12px', '99px','32px','31px','auto', 'auto'],
                    text: "B<br>",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"],
                    transform: [[],['270']]
                },
                {
                    id: 'A',
                    type: 'text',
                    rect: ['199px', '106px','17px','30px','auto', 'auto'],
                    text: "A",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"],
                    transform: [[],['270']]
                },
                {
                    id: '_8',
                    type: 'text',
                    rect: ['83px', '-13px','51px','19px','auto', 'auto'],
                    text: "9",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "700", "none", "normal"],
                    transform: [[],['270']]
                }]
            },
            {
                id: 'AnswerEText',
                type: 'text',
                rect: ['71px', '329px','101px','20px','auto', 'auto'],
                text: "3",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['403', '42','auto','auto','auto', 'auto'],
                text: "Side BC measures 1/3 of side AB,",
                font: ['Times New Roman, Times, serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Width_redCopy',
                display: 'block',
                type: 'rect',
                rect: ['246px', '222px','151px','5px','auto', 'auto'],
                fill: ["rgba(205,18,18,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Height_green',
                display: 'block',
                type: 'rect',
                rect: ['243px', '224px','6px','84px','auto', 'auto'],
                fill: ["rgba(8,124,40,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Hint2_part_2',
                type: 'group',
                rect: ['368', '172px','76','41','auto', 'auto'],
                c: [
                {
                    id: 'Area1Copy4',
                    type: 'text',
                    rect: ['-46px', '0px','108px','41px','auto', 'auto'],
                    text: "Area ABCD =",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'BC',
                    type: 'text',
                    rect: ['127px', '1px','76px','31px','auto', 'auto'],
                    text: "BC<br>",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(205,18,18,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'x',
                    type: 'text',
                    rect: ['104px', '0px','51px','21px','auto', 'auto'],
                    text: "x<br>",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'AB',
                    type: 'text',
                    rect: ['64px', '0px','47px','31px','auto', 'auto'],
                    text: "CD<br>",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(8,124,40,1.00)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Hint2_part_2Copy',
                type: 'group',
                rect: ['368', '193px','76','41','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'Area1Copy5',
                    type: 'text',
                    rect: ['-46px', '0px','108px','41px','auto', 'auto'],
                    text: "Area ABCD =",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'BCCopy',
                    type: 'text',
                    rect: ['133px', '1px','76px','31px','auto', 'auto'],
                    text: "8",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(205,18,18,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'xCopy',
                    type: 'text',
                    rect: ['104px', '0px','51px','21px','auto', 'auto'],
                    text: "x<br>",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'ABCopy',
                    type: 'text',
                    rect: ['72px', '-2px','47px','31px','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(8,124,40,1.00)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'BCCopy2',
                display: 'none',
                type: 'text',
                rect: ['354px', '61px','76px','31px','auto', 'auto'],
                text: "So the length of <br>",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(205,18,18,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['323px', '79px','189px','49px','auto', 'auto'],
                text: "is the length of AB divided by 3.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(17,1,1,1)", "400", "none", "normal"]
            },
            {
                id: 'Text9',
                display: 'none',
                type: 'text',
                rect: ['234px', '137px','66px','21px','auto', 'auto'],
                text: "9/3 =",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(17,1,1,1)", "700", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['431px', '78px','47px','31px','auto', 'auto'],
                text: "AB",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(186,5,5,1.00)", "700", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['439px', '55px','47px','49px','auto', 'auto'],
                text: "BC",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(1,120,9,1.00)", "700", "none", "normal"]
            },
            {
                id: 'ABCopy3',
                display: 'none',
                type: 'text',
                rect: ['355px', '30px','47px','31px','auto', 'auto'],
                text: "BC",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(8,124,40,1.00)", "700", "none", "normal"]
            },
            {
                id: 'BCCopy3',
                type: 'text',
                rect: ['517px', '30px','76px','31px','auto', 'auto'],
                text: "AB",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(205,18,18,1.00)", "700", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['431px', '79px','47px','31px','auto', 'auto'],
                text: "AB",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(193,8,8,1.00)", "700", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'none',
                type: 'text',
                rect: ['358px', '137px','199px','58px','auto', 'auto'],
                text: "Remember that the area of a rectangle equals height times width.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(17,1,1,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['488px', '156px','112px','30px','auto', 'auto'],
                text: "height",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 15, "rgba(194,8,8,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['400px', '175px','101px','30px','auto', 'auto'],
                text: "width",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 15, "rgba(3,111,4,1.00)", "400", "none", "normal"]
            },
            {
                id: 'question',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/question.mp3','media/question.ogg']
            },
            {
                id: 'hint1',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1.ogg','media/hint1.mp3']
            },
            {
                id: 'hint2',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2.mp3','media/hint2.ogg']
            },
            {
                id: 'answer',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer.mp3','media/answer.ogg']
            },
            {
                id: '_8Copy',
                display: 'none',
                type: 'text',
                rect: ['282px', '137px','32px','24px','auto', 'auto'],
                text: "3",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "700", "none", "normal"]
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
            "${_Height_green}": [
                ["style", "top", '255px'],
                ["color", "background-color", 'rgba(8,124,40,1)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '393px'],
                ["style", "width", '6px']
            ],
            "${_BCCopy}": [
                ["color", "color", 'rgba(205,18,18,1)'],
                ["style", "top", '1px'],
                ["style", "left", '133px'],
                ["style", "font-size", '16px']
            ],
            "${_Text2}": [
                ["style", "top", '156px'],
                ["color", "color", 'rgba(194,8,8,1.00)'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-weight", '400'],
                ["style", "left", '490px'],
                ["style", "font-size", '16px']
            ],
            "${_BC}": [
                ["style", "top", '1px'],
                ["color", "color", 'rgba(205,18,18,1)'],
                ["style", "left", '127px'],
                ["style", "font-size", '16px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Text9Copy}": [
                ["style", "top", '137px'],
                ["style", "opacity", '1'],
                ["style", "display", 'none'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '234px'],
                ["style", "width", '47px']
            ],
            "${_Hint2_part_2Copy}": [
                ["style", "top", '193px'],
                ["style", "opacity", '0'],
                ["style", "left", '368px']
            ],
            "${_Text4}": [
                ["style", "top", '55px'],
                ["color", "color", 'rgba(1,120,9,1.00)'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "left", '439px'],
                ["style", "font-size", '16px']
            ],
            "${_AnswerDText}": [
                ["style", "top", '293px'],
                ["style", "font-size", '14px'],
                ["style", "left", '71px'],
                ["style", "width", '101px']
            ],
            "${_Question_Text}": [
                ["style", "top", '30px'],
                ["style", "font-size", '16px'],
                ["style", "height", '124px'],
                ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
                ["style", "left", '15px'],
                ["style", "width", '219px']
            ],
            "${_Text10}": [
                ["style", "top", '68px'],
                ["style", "font-weight", '700'],
                ["style", "left", '55px']
            ],
            "${_xCopy}": [
                ["style", "top", '0px'],
                ["style", "font-size", '16px'],
                ["style", "height", '21px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "left", '104px'],
                ["style", "width", '51px']
            ],
            "${_D}": [
                ["style", "top", '1px'],
                ["style", "font-size", '12px'],
                ["style", "left", '182px'],
                ["transform", "rotateZ", '270deg']
            ],
            "${_Text9}": [
                ["style", "top", '137px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "left", '234px'],
                ["style", "width", '47px']
            ],
            "${_BCCopy2}": [
                ["color", "color", 'rgba(17,1,1,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '323px'],
                ["style", "font-size", '16px'],
                ["style", "top", '55px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '400'],
                ["style", "width", '229px'],
                ["style", "height", '49px']
            ],
            "${_HTML_367}": [
                ["style", "top", '5px'],
                ["style", "height", '138px'],
                ["style", "left", '2px'],
                ["style", "width", '219px']
            ],
            "${__8Copy}": [
                ["transform", "rotateZ", '0deg'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '282px'],
                ["style", "width", '32px'],
                ["style", "top", '137px'],
                ["style", "text-align", 'left'],
                ["style", "height", '24px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-size", '16px']
            ],
            "${_A}": [
                ["style", "top", '106px'],
                ["transform", "rotateZ", '270deg'],
                ["style", "height", '30px'],
                ["style", "font-size", '12px'],
                ["style", "left", '199px'],
                ["style", "width", '17px']
            ],
            "${_Text7}": [
                ["style", "top", '79px'],
                ["color", "color", 'rgba(193,8,8,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '431px'],
                ["style", "display", 'none']
            ],
            "${_C}": [
                ["style", "top", '0px'],
                ["style", "font-size", '12px'],
                ["style", "left", '5px'],
                ["transform", "rotateZ", '270deg']
            ],
            "${_Text3}": [
                ["style", "top", '175px'],
                ["color", "color", 'rgba(3,111,4,1.00)'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-weight", '400'],
                ["style", "left", '402px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5}": [
                ["style", "top", '80px'],
                ["color", "color", 'rgba(186,5,5,1.00)'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "left", '432px'],
                ["style", "font-size", '15px']
            ],
            "${_Rectangle_problem}": [
                ["style", "top", '140px'],
                ["style", "bottom", 'auto'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '146px'],
                ["style", "right", 'auto'],
                ["style", "left", '183px'],
                ["style", "width", '174px']
            ],
            "${_AnswerCText}": [
                ["style", "top", '257px'],
                ["style", "font-size", '14px'],
                ["style", "left", '71px'],
                ["style", "width", '101px']
            ],
            "${_AnswerAText}": [
                ["style", "top", '190px'],
                ["style", "text-align", 'left'],
                ["style", "height", '19px'],
                ["style", "font-size", '14px'],
                ["style", "left", '71px'],
                ["style", "width", '109px']
            ],
            "${_Answers}": [
                ["style", "top", '168px'],
                ["style", "left", '24px']
            ],
            "${_Width_redCopy}": [
                ["style", "top", '253px'],
                ["color", "background-color", 'rgba(205,18,18,1)'],
                ["style", "display", 'block'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '5px'],
                ["style", "opacity", '0.01165771484375'],
                ["style", "left", '248px'],
                ["style", "width", '151px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_BCCopy3}": [
                ["style", "top", '32px'],
                ["color", "color", 'rgba(205,18,18,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "opacity", '0'],
                ["style", "left", '514px'],
                ["style", "font-size", '15px']
            ],
            "${_Text9Copy2}": [
                ["style", "top", '137px'],
                ["style", "opacity", '1'],
                ["style", "display", 'none'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '234px'],
                ["style", "width", '47px']
            ],
            "${_Area1Copy5}": [
                ["style", "top", '0px'],
                ["style", "height", '41px'],
                ["style", "font-size", '16px'],
                ["style", "left", '-46px'],
                ["style", "width", '108px']
            ],
            "${_Hint2_part_2}": [
                ["style", "top", '166px'],
                ["style", "opacity", '0'],
                ["style", "left", '368px']
            ],
            "${_x}": [
                ["style", "top", '0px'],
                ["style", "width", '51px'],
                ["style", "height", '21px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "left", '104px'],
                ["style", "font-size", '16px']
            ],
            "${_Text8}": [
                ["style", "top", '137px'],
                ["style", "opacity", '0'],
                ["style", "left", '358px'],
                ["style", "display", 'none']
            ],
            "${_AnswerBText}": [
                ["style", "top", '225px'],
                ["style", "font-size", '14px'],
                ["style", "left", '71px'],
                ["style", "width", '112px']
            ],
            "${_Text}": [
                ["style", "top", '32px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '323px'],
                ["style", "font-size", '16px']
            ],
            "${_ABCopy3}": [
                ["style", "top", '32px'],
                ["style", "width", '47px'],
                ["style", "display", 'none'],
                ["style", "font-weight", 'bold'],
                ["color", "color", 'rgba(8,124,40,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '355px'],
                ["style", "font-size", '15px']
            ],
            "${_Text6}": [
                ["style", "top", '79px'],
                ["style", "opacity", '0'],
                ["style", "left", '323px'],
                ["style", "display", 'none']
            ],
            "${_AnswerEText}": [
                ["style", "top", '329px'],
                ["style", "font-size", '14px'],
                ["style", "left", '71px'],
                ["style", "width", '101px']
            ],
            "${_AB}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(8,124,40,1)'],
                ["style", "width", '47px'],
                ["style", "left", '64px'],
                ["style", "font-size", '16px']
            ],
            "${__8}": [
                ["style", "top", '-13px'],
                ["transform", "rotateZ", '270deg'],
                ["style", "width", '51px'],
                ["style", "font-weight", '700'],
                ["style", "left", '83px'],
                ["style", "font-size", '16px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Area1Copy4}": [
                ["style", "top", '0px'],
                ["style", "height", '41px'],
                ["style", "width", '108px'],
                ["style", "left", '-46px'],
                ["style", "font-size", '16px']
            ],
            "${_B}": [
                ["style", "top", '99px'],
                ["transform", "rotateZ", '270deg'],
                ["style", "width", '32px'],
                ["style", "left", '12px'],
                ["style", "font-size", '12px']
            ],
            "${_ABCopy}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(8,124,40,1)'],
                ["style", "font-size", '16px'],
                ["style", "left", '72px'],
                ["style", "width", '47px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 48000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 20000,
                "Hint 2": 35000,
                "Answer Hint": 42000
            },
            timeline: [
                { id: "eid587", tween: [ "style", "${_Text9}", "width", '47px', { fromValue: '47px'}], position: 37000, duration: 0 },
                { id: "eid410", tween: [ "style", "${_Height_green}", "top", '123px', { fromValue: '255px'}], position: 19000, duration: 1000 },
                { id: "eid533", tween: [ "style", "${_Text4}", "font-size", '16px', { fromValue: '16px'}], position: 30000, duration: 0 },
                { id: "eid601", tween: [ "style", "${_Text3}", "left", '402px', { fromValue: '402px'}], position: 48000, duration: 0 },
                { id: "eid287", tween: [ "style", "${_Width_redCopy}", "display", 'none', { fromValue: 'block'}], position: 23000, duration: 0 },
                { id: "eid474", tween: [ "style", "${_Width_redCopy}", "display", 'block', { fromValue: 'none'}], position: 24000, duration: 0 },
                { id: "eid391", tween: [ "style", "${_BCCopy3}", "opacity", '1', { fromValue: '0'}], position: 22500, duration: 1000 },
                { id: "eid605", tween: [ "style", "${_Text2}", "top", '156px', { fromValue: '156px'}], position: 36500, duration: 0 },
                { id: "eid499", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 19000, duration: 1000 },
                { id: "eid497", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '1'}], position: 24500, duration: 0 },
                { id: "eid450", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '1'}], position: 25500, duration: 0 },
                { id: "eid451", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '1'}], position: 26000, duration: 0 },
                { id: "eid421", tween: [ "transform", "${_Width_redCopy}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 24000, duration: 0 },
                { id: "eid599", tween: [ "style", "${_Text3}", "font-size", '16px', { fromValue: '16px'}], position: 48000, duration: 0 },
                { id: "eid592", tween: [ "style", "${__8Copy}", "opacity", '1', { fromValue: '0'}], position: 33000, duration: 1000 },
                { id: "eid426", tween: [ "color", "${_BCCopy2}", "color", 'rgba(17,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(17,1,1,1.00)'}], position: 27000, duration: 0 },
                { id: "eid522", tween: [ "style", "${_ABCopy3}", "left", '355px', { fromValue: '355px'}], position: 20000, duration: 0 },
                { id: "eid447", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid462", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0 },
                { id: "eid409", tween: [ "transform", "${_Height_green}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 20000, duration: 0 },
                { id: "eid598", tween: [ "style", "${_Text2}", "font-size", '16px', { fromValue: '16px'}], position: 48000, duration: 0 },
                { id: "eid538", tween: [ "style", "${_Text5}", "left", '432px', { fromValue: '432px'}], position: 30750, duration: 0 },
                { id: "eid423", tween: [ "style", "${_BCCopy2}", "left", '323px', { fromValue: '323px'}], position: 27000, duration: 0 },
                { id: "eid455", tween: [ "style", "${_BCCopy2}", "left", '323px', { fromValue: '323px'}], position: 35750, duration: 0 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid420", tween: [ "style", "${_Width_redCopy}", "left", '152px', { fromValue: '248px'}], position: 23000, duration: 1000 },
                { id: "eid529", tween: [ "style", "${_Text4}", "left", '439px', { fromValue: '439px'}], position: 30000, duration: 0 },
                { id: "eid585", tween: [ "style", "${_Text9}", "opacity", '1', { fromValue: '0'}], position: 30750, duration: 1250 },
                { id: "eid586", tween: [ "style", "${_Text9}", "opacity", '0', { fromValue: '1'}], position: 35000, duration: 1000 },
                { id: "eid518", tween: [ "style", "${_ABCopy3}", "top", '32px', { fromValue: '32px'}], position: 20000, duration: 0 },
                { id: "eid164", tween: [ "style", "${_Text}", "left", '323px', { fromValue: '323px'}], position: 20000, duration: 0 },
                { id: "eid542", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 26000, duration: 0 },
                { id: "eid481", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'block'}], position: 28250, duration: 0 },
                { id: "eid161", tween: [ "style", "${_Text}", "font-size", '16px', { fromValue: '16px'}], position: 20000, duration: 0 },
                { id: "eid491", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 35000, duration: 1000 },
                { id: "eid454", tween: [ "style", "${_BCCopy2}", "top", '55px', { fromValue: '55px'}], position: 35750, duration: 0 },
                { id: "eid498", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid160", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'block'}], position: 20000, duration: 0 },
                { id: "eid485", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid486", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0 },
                { id: "eid295", tween: [ "style", "${_Height_green}", "opacity", '1', { fromValue: '0'}], position: 19000, duration: 1000 },
                { id: "eid544", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 26000, duration: 2250 },
                { id: "eid489", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 35000, duration: 1000 },
                { id: "eid535", tween: [ "style", "${_Text5}", "font-size", '15px', { fromValue: '15px'}], position: 30750, duration: 0 },
                { id: "eid516", tween: [ "style", "${_ABCopy3}", "font-size", '15px', { fromValue: '15px'}], position: 20000, duration: 0 },
                { id: "eid590", tween: [ "style", "${__8Copy}", "display", 'block', { fromValue: 'none'}], position: 33000, duration: 0 },
                { id: "eid456", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid463", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 28500, duration: 0 },
                { id: "eid475", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid476", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0 },
                { id: "eid537", tween: [ "style", "${_Text5}", "top", '80px', { fromValue: '80px'}], position: 30750, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid483", tween: [ "style", "${_Text8}", "left", '358px', { fromValue: '358px'}], position: 35000, duration: 0 },
                { id: "eid367", tween: [ "style", "${_BCCopy2}", "display", 'block', { fromValue: 'none'}], position: 26000, duration: 0 },
                { id: "eid458", tween: [ "style", "${_ABCopy3}", "opacity", '1', { fromValue: '1'}], position: 24500, duration: 0 },
                { id: "eid459", tween: [ "style", "${_ABCopy3}", "opacity", '1', { fromValue: '1'}], position: 25500, duration: 0 },
                { id: "eid411", tween: [ "style", "${_Height_green}", "left", '267px', { fromValue: '393px'}], position: 19000, duration: 1000 },
                { id: "eid289", tween: [ "style", "${_Width_redCopy}", "opacity", '1', { fromValue: '0.011657999828457832'}], position: 23000, duration: 1000 },
                { id: "eid484", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid487", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0 },
                { id: "eid422", tween: [ "style", "${_Width_redCopy}", "top", '236px', { fromValue: '253px'}], position: 23000, duration: 1000 },
                { id: "eid388", tween: [ "style", "${_ABCopy3}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid457", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid465", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 28500, duration: 1750 },
                { id: "eid541", tween: [ "style", "${_BCCopy2}", "opacity", '1', { fromValue: '0'}], position: 26000, duration: 2250 },
                { id: "eid493", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 35000, duration: 1000 },
                { id: "eid534", tween: [ "style", "${_Text4}", "top", '55px', { fromValue: '55px'}], position: 30000, duration: 0 },
                { id: "eid583", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 30750, duration: 0 },
                { id: "eid494", tween: [ "style", "${_Text}", "top", '32px', { fromValue: '32px'}], position: 20000, duration: 0 },
                { id: "eid473", tween: [ "style", "${_Text5}", "opacity", '0', { fromValue: '0'}], position: 28500, duration: 0 },
                { id: "eid577", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 29000, duration: 1250 },
                { id: "eid293", tween: [ "style", "${_Height_green}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
                { id: "eid448", tween: [ "style", "${_Height_green}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid603", tween: [ "style", "${_Text2}", "left", '490px', { fromValue: '490px'}], position: 48000, duration: 0 },
                { id: "eid578", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid579", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 20000 },
                { id: "eid580", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 35000 },
                { id: "eid581", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 42000 }            ]
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
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
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
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
                    },
                    {
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text14',
                        text: 'Answer E Text',
                        align: 'left',
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto']
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
                    },
                    {
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text14',
                        text: 'Answer E Text',
                        align: 'left',
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto']
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
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
                    },
                    {
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text13',
                        text: 'Answer D Text',
                        align: 'left',
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto']
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
                    },
                    {
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text13',
                        text: 'Answer D Text',
                        align: 'left',
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto']
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
                    },
                    {
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text13',
                        text: 'Answer Text D',
                        align: 'left',
                        rect: ['36px', '4px', '94px', '20px', 'auto', 'auto']
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
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text5',
                        text: 'C',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                        type: 'text',
                        rect: ['0px', '5px', '27px', '19px', 'auto', 'auto'],
                        id: 'Text4',
                        text: 'B',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                        rect: ['0px', '3px', '27px', '19px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'A',
                        text: 'A<br><br><br>',
                        align: 'center',
                        type: 'text'
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text3',
                        text: 'A<br><br><br>',
                        align: 'center',
                        rect: ['0px', '3px', '27px', '19px', 'auto', 'auto']
                    },
                    {
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text9',
                        text: 'Answer Text A',
                        align: 'left',
                        rect: ['36px', '3px', '109px', '19px', 'auto', 'auto']
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
