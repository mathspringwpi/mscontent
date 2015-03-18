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
                id: 'd11',
                display: 'none',
                type: 'image',
                rect: ['376px', '277px','53px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d11.gif",'0px','0px']
            },
            {
                id: 'Text8',
                display: 'none',
                type: 'text',
                rect: ['214px', '422px','95px','21px','auto', 'auto'],
                text: "Choose (C)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'd9',
                display: 'none',
                type: 'image',
                rect: ['550px', '361px','18px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d9.gif",'0px','0px']
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['27px', '181','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1.17949','1.50267']]
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
                id: 'd3',
                type: 'image',
                rect: ['71px', '362px','33px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d3.gif",'0px','0px']
            },
            {
                id: 'd5',
                type: 'image',
                rect: ['71px', '465px','33px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d5.gif",'0px','0px']
            },
            {
                id: 'd4',
                type: 'image',
                rect: ['71px', '414px','33px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d4.gif",'0px','0px']
            },
            {
                id: 'd6',
                type: 'image',
                rect: ['72px', '517px','33px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d6.gif",'0px','0px']
            },
            {
                id: 'd1Copy2',
                type: 'image',
                rect: ['48px', '36px','89px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d1.gif",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['419px', '238px','20px','25px','auto', 'auto'],
                text: "?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['396px', '231px','33px','25px','auto', 'auto'],
                text: "_",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text9',
                display: 'none',
                type: 'text',
                rect: ['419px', '240px','20px','21px','auto', 'auto'],
                text: "?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'd2',
                type: 'image',
                rect: ['78px', '307px','20px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d2.gif",'0px','0px']
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['188px', '96px','390px','56px','auto', 'auto'],
                text: "When we divide a positive number by a negative number, what is the sign of the quotient?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['188px', '165px','390px','47px','auto', 'auto'],
                text: "Since we're dividing a positive number by a negative number, the answer will be negative.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Rectangle2',
                display: 'none',
                type: 'rect',
                rect: ['188px', '308px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy8',
                display: 'none',
                type: 'rect',
                rect: ['188px', '436px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy7',
                display: 'none',
                type: 'rect',
                rect: ['188px', '420px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy',
                display: 'none',
                type: 'rect',
                rect: ['188px', '404px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy2',
                display: 'none',
                type: 'rect',
                rect: ['188px', '388px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy3',
                display: 'none',
                type: 'rect',
                rect: ['188px', '372px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy4',
                display: 'none',
                type: 'rect',
                rect: ['188px', '356px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy5',
                display: 'none',
                type: 'rect',
                rect: ['188px', '340px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy6',
                display: 'none',
                type: 'rect',
                rect: ['188px', '324px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy17',
                display: 'none',
                type: 'rect',
                rect: ['291px', '308px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy16',
                display: 'none',
                type: 'rect',
                rect: ['291px', '436px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy15',
                display: 'none',
                type: 'rect',
                rect: ['291px', '420px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy14',
                display: 'none',
                type: 'rect',
                rect: ['291px', '404px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy13',
                display: 'none',
                type: 'rect',
                rect: ['291px', '388px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy12',
                display: 'none',
                type: 'rect',
                rect: ['291px', '372px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy11',
                display: 'none',
                type: 'rect',
                rect: ['291px', '356px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy10',
                display: 'none',
                type: 'rect',
                rect: ['291px', '340px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy9',
                display: 'none',
                type: 'rect',
                rect: ['291px', '324px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy26',
                display: 'none',
                type: 'rect',
                rect: ['389px', '308px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy25',
                display: 'none',
                type: 'rect',
                rect: ['389px', '436px','70px','14px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy24',
                display: 'none',
                type: 'rect',
                rect: ['389px', '420px','70px','14px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy23',
                display: 'none',
                type: 'rect',
                rect: ['389px', '404px','70px','14px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy22',
                display: 'none',
                type: 'rect',
                rect: ['389px', '388px','70px','14px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy21',
                display: 'none',
                type: 'rect',
                rect: ['389px', '372px','70px','14px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy20',
                display: 'none',
                type: 'rect',
                rect: ['389px', '356px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy19',
                display: 'none',
                type: 'rect',
                rect: ['389px', '340px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy18',
                display: 'none',
                type: 'rect',
                rect: ['389px', '324px','70px','14px','auto', 'auto'],
                fill: ["rgba(0,166,10,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'd7',
                display: 'none',
                type: 'image',
                rect: ['504px', '308px','43px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d7.gif",'0px','0px']
            },
            {
                id: 'd8',
                display: 'none',
                type: 'image',
                rect: ['504px', '361px','20px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d8.gif",'0px','0px']
            },
            {
                id: 'd14',
                display: 'none',
                type: 'image',
                rect: ['327px', '232px','66px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d14.gif",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['534px', '369px','auto','auto','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['558px', '372px','20px','16px','auto', 'auto'],
                text: "?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'd102',
                display: 'none',
                type: 'image',
                rect: ['283px', '277px','87px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d102.gif",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['383px', '289px','20px','16px','auto', 'auto'],
                text: "?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'd12',
                display: 'none',
                type: 'image',
                rect: ['434px', '277px','53px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d12.gif",'0px','0px']
            },
            {
                id: 'd132',
                display: 'none',
                type: 'image',
                rect: ['497px', '277px','33px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d132.gif",'0px','0px']
            },
            {
                id: 'd92',
                display: 'none',
                type: 'image',
                rect: ['550px', '361px','18px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d92.gif",'0px','0px']
            },
            {
                id: 'd82',
                display: 'none',
                type: 'image',
                rect: ['300px', '232px','20px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d82.gif",'0px','0px']
            },
            {
                id: 'answer',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer.mp3','media/answer.ogg']
            },
            {
                id: 'hint1',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1.ogg','media/hint1.mp3']
            },
            {
                id: 'hint2',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2.mp3','media/hint2.ogg']
            },
            {
                id: 'hint3',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint3.ogg','media/hint3.mp3']
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
                id: 'question',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/question.mp3','media/question.ogg']
            },
            {
                id: 'd15',
                display: 'none',
                type: 'image',
                rect: ['188px', '277px','87px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d15.gif",'0px','0px']
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
            "${_d7}": [
                ["style", "top", '308px'],
                ["style", "left", '504px'],
                ["style", "display", 'none']
            ],
            "${_d9}": [
                ["style", "top", '361px'],
                ["style", "left", '550px'],
                ["style", "display", 'none']
            ],
            "${_Text8}": [
                ["style", "top", '422px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '214px'],
                ["style", "width", '95px']
            ],
            "${_Rectangle2Copy25}": [
                ["style", "top", '436px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "left", '389px'],
                ["style", "width", '70px']
            ],
            "${_d12}": [
                ["style", "top", '277px'],
                ["style", "left", '434px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy5}": [
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "top", '340px'],
                ["style", "left", '188px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_Rectangle2Copy9}": [
                ["style", "top", '324px'],
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "left", '291px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_Rectangle2Copy13}": [
                ["style", "top", '388px'],
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "left", '291px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_Text4}": [
                ["style", "top", '231px'],
                ["style", "left", '396px'],
                ["style", "display", 'none']
            ],
            "${_d3}": [
                ["style", "left", '71px'],
                ["style", "top", '362px']
            ],
            "${_d132}": [
                ["style", "top", '277px'],
                ["style", "left", '497px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy11}": [
                ["style", "top", '356px'],
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "left", '291px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_d2}": [
                ["style", "left", '78px'],
                ["style", "top", '307px']
            ],
            "${_Rectangle2Copy8}": [
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "top", '436px'],
                ["style", "border-width", '1px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "left", '188px'],
                ["style", "width", '70px']
            ],
            "${_Rectangle2Copy16}": [
                ["style", "top", '436px'],
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "border-width", '1px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "left", '291px'],
                ["style", "width", '70px']
            ],
            "${_Text}": [
                ["style", "top", '96px'],
                ["style", "display", 'none'],
                ["style", "font-size", '18px'],
                ["style", "left", '188px'],
                ["style", "width", '390px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_d5}": [
                ["style", "left", '71px'],
                ["style", "top", '465px']
            ],
            "${_Rectangle2Copy6}": [
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "top", '324px'],
                ["style", "left", '188px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_Rectangle2Copy12}": [
                ["style", "top", '372px'],
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "left", '291px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_Rectangle2Copy26}": [
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "border-width", '1px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "left", '389px'],
                ["style", "width", '70px']
            ],
            "${_Text9}": [
                ["style", "top", '240px'],
                ["style", "left", '419px'],
                ["style", "display", 'none']
            ],
            "${_d4}": [
                ["style", "left", '71px'],
                ["style", "top", '414px']
            ],
            "${_Text3}": [
                ["style", "top", '238px'],
                ["style", "display", 'none'],
                ["style", "height", '25px'],
                ["style", "left", '419px'],
                ["style", "width", '20px']
            ],
            "${_Rectangle2Copy4}": [
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "top", '356px'],
                ["style", "left", '188px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_d14}": [
                ["style", "display", 'none'],
                ["style", "left", '327px'],
                ["style", "top", '232px']
            ],
            "${_Rectangle2Copy15}": [
                ["style", "top", '420px'],
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "border-width", '1px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "left", '291px'],
                ["style", "width", '70px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(0,166,10,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "left", '188px'],
                ["style", "width", '70px']
            ],
            "${_Rectangle2Copy21}": [
                ["style", "top", '372px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '389px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_Rectangle2Copy3}": [
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "top", '372px'],
                ["style", "left", '188px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_d102}": [
                ["style", "top", '277px'],
                ["style", "left", '283px'],
                ["style", "display", 'none']
            ],
            "${_Text7}": [
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "display", 'none'],
                ["style", "top", '165px'],
                ["style", "width", '390px']
            ],
            "${_Text5}": [
                ["style", "top", '369px'],
                ["style", "left", '534px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy2}": [
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "top", '388px'],
                ["style", "left", '188px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_d1Copy2}": [
                ["style", "left", '48px'],
                ["style", "top", '36px']
            ],
            "${_Answers}": [
                ["transform", "scaleX", '1.17949'],
                ["transform", "scaleY", '1.50267'],
                ["style", "left", '27px'],
                ["style", "top", '328px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle2Copy10}": [
                ["style", "top", '340px'],
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "left", '291px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_d82}": [
                ["style", "top", '232px'],
                ["style", "left", '300px'],
                ["style", "display", 'none']
            ],
            "${_d11}": [
                ["style", "top", '277px'],
                ["style", "left", '376px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy23}": [
                ["style", "top", '404px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '389px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_d8}": [
                ["style", "top", '361px'],
                ["style", "left", '504px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy19}": [
                ["style", "top", '340px'],
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "left", '389px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_Rectangle2Copy24}": [
                ["style", "top", '420px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "left", '389px'],
                ["style", "width", '70px']
            ],
            "${_d6}": [
                ["style", "left", '72px'],
                ["style", "top", '517px']
            ],
            "${_Rectangle2Copy}": [
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "top", '404px'],
                ["style", "left", '188px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_Rectangle2Copy14}": [
                ["style", "top", '404px'],
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "left", '291px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_Text6}": [
                ["style", "top", '372px'],
                ["style", "left", '558px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy20}": [
                ["style", "top", '356px'],
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "left", '389px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_Rectangle2Copy17}": [
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "border-width", '1px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "left", '291px'],
                ["style", "width", '70px']
            ],
            "${_d15}": [
                ["style", "top", '277px'],
                ["style", "left", '188px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy7}": [
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "top", '420px'],
                ["style", "border-width", '1px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "left", '188px'],
                ["style", "width", '70px']
            ],
            "${_Rectangle2Copy22}": [
                ["style", "top", '388px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '389px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_Rectangle2Copy18}": [
                ["style", "top", '324px'],
                ["color", "background-color", 'rgba(0,166,10,1)'],
                ["style", "left", '389px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '70px']
            ],
            "${_d92}": [
                ["style", "top", '361px'],
                ["style", "left", '550px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 57960,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 8967,
                "Hint 2": 16615,
                "Hint 3": 24005,
                "Hint 4": 36010,
                "Hint 5": 44114,
                "Anwer Hint": 51363
            },
            timeline: [
                { id: "eid286", tween: [ "style", "${_Rectangle2Copy25}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid313", tween: [ "style", "${_Rectangle2Copy25}", "display", 'block', { fromValue: 'none'}], position: 34335, duration: 0 },
                { id: "eid417", tween: [ "style", "${_Rectangle2Copy25}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid270", tween: [ "style", "${_Rectangle2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid297", tween: [ "style", "${_Rectangle2Copy}", "display", 'block', { fromValue: 'none'}], position: 34329, duration: 0 },
                { id: "eid397", tween: [ "style", "${_Rectangle2Copy}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid285", tween: [ "style", "${_Rectangle2Copy16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid312", tween: [ "style", "${_Rectangle2Copy16}", "display", 'block', { fromValue: 'none'}], position: 34337, duration: 0 },
                { id: "eid408", tween: [ "style", "${_Rectangle2Copy16}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid269", tween: [ "style", "${_Rectangle2Copy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid296", tween: [ "style", "${_Rectangle2Copy7}", "display", 'block', { fromValue: 'none'}], position: 34325, duration: 0 },
                { id: "eid398", tween: [ "style", "${_Rectangle2Copy7}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid281", tween: [ "style", "${_Rectangle2Copy12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid308", tween: [ "style", "${_Rectangle2Copy12}", "display", 'block', { fromValue: 'none'}], position: 34325, duration: 0 },
                { id: "eid404", tween: [ "style", "${_Rectangle2Copy12}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid292", tween: [ "style", "${_Rectangle2Copy19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid319", tween: [ "style", "${_Rectangle2Copy19}", "display", 'block', { fromValue: 'none'}], position: 34326, duration: 0 },
                { id: "eid411", tween: [ "style", "${_Rectangle2Copy19}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid290", tween: [ "style", "${_Rectangle2Copy21}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid317", tween: [ "style", "${_Rectangle2Copy21}", "display", 'block', { fromValue: 'none'}], position: 34330, duration: 0 },
                { id: "eid413", tween: [ "style", "${_Rectangle2Copy21}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid339", tween: [ "style", "${_d82}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid341", tween: [ "style", "${_d82}", "display", 'block', { fromValue: 'none'}], position: 21471, duration: 0 },
                { id: "eid345", tween: [ "style", "${_d82}", "display", 'none', { fromValue: 'block'}], position: 38170, duration: 0 },
                { id: "eid273", tween: [ "style", "${_Rectangle2Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid300", tween: [ "style", "${_Rectangle2Copy4}", "display", 'block', { fromValue: 'none'}], position: 34320, duration: 0 },
                { id: "eid394", tween: [ "style", "${_Rectangle2Copy4}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid275", tween: [ "style", "${_Rectangle2Copy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid302", tween: [ "style", "${_Rectangle2Copy6}", "display", 'block', { fromValue: 'none'}], position: 34322, duration: 0 },
                { id: "eid392", tween: [ "style", "${_Rectangle2Copy6}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid246", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid343", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 21563, duration: 0 },
                { id: "eid280", tween: [ "style", "${_Rectangle2Copy13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid307", tween: [ "style", "${_Rectangle2Copy13}", "display", 'block', { fromValue: 'none'}], position: 34333, duration: 0 },
                { id: "eid405", tween: [ "style", "${_Rectangle2Copy13}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid431", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid432", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 33051, duration: 0 },
                { id: "eid421", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid324", tween: [ "style", "${_d8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid326", tween: [ "style", "${_d8}", "display", 'block', { fromValue: 'none'}], position: 33036, duration: 0 },
                { id: "eid419", tween: [ "style", "${_d8}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid288", tween: [ "style", "${_Rectangle2Copy23}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid315", tween: [ "style", "${_Rectangle2Copy23}", "display", 'block', { fromValue: 'none'}], position: 34323, duration: 0 },
                { id: "eid415", tween: [ "style", "${_Rectangle2Copy23}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid283", tween: [ "style", "${_Rectangle2Copy11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid310", tween: [ "style", "${_Rectangle2Copy11}", "display", 'block', { fromValue: 'none'}], position: 34330, duration: 0 },
                { id: "eid403", tween: [ "style", "${_Rectangle2Copy11}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid272", tween: [ "style", "${_Rectangle2Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid299", tween: [ "style", "${_Rectangle2Copy3}", "display", 'block', { fromValue: 'none'}], position: 34332, duration: 0 },
                { id: "eid395", tween: [ "style", "${_Rectangle2Copy3}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid238", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid239", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 8972, duration: 0 },
                { id: "eid278", tween: [ "style", "${_Rectangle2Copy9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid305", tween: [ "style", "${_Rectangle2Copy9}", "display", 'block', { fromValue: 'none'}], position: 34322, duration: 0 },
                { id: "eid401", tween: [ "style", "${_Rectangle2Copy9}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid268", tween: [ "style", "${_Rectangle2Copy8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid295", tween: [ "style", "${_Rectangle2Copy8}", "display", 'block', { fromValue: 'none'}], position: 34320, duration: 0 },
                { id: "eid399", tween: [ "style", "${_Rectangle2Copy8}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid289", tween: [ "style", "${_Rectangle2Copy22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid316", tween: [ "style", "${_Rectangle2Copy22}", "display", 'block', { fromValue: 'none'}], position: 34321, duration: 0 },
                { id: "eid414", tween: [ "style", "${_Rectangle2Copy22}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid329", tween: [ "style", "${_d9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid330", tween: [ "style", "${_d9}", "display", 'block', { fromValue: 'none'}], position: 37033, duration: 0 },
                { id: "eid420", tween: [ "style", "${_d9}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid240", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid241", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 16609, duration: 0 },
                { id: "eid322", tween: [ "style", "${_d7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid323", tween: [ "style", "${_d7}", "display", 'block', { fromValue: 'none'}], position: 31987, duration: 0 },
                { id: "eid418", tween: [ "style", "${_d7}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid276", tween: [ "style", "${_Rectangle2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid303", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 34328, duration: 0 },
                { id: "eid391", tween: [ "style", "${_Rectangle2}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid358", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid359", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 56367, duration: 0 },
                { id: "eid352", tween: [ "style", "${_d11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid353", tween: [ "style", "${_d11}", "display", 'block', { fromValue: 'none'}], position: 51374, duration: 0 },
                { id: "eid331", tween: [ "style", "${_d92}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid332", tween: [ "style", "${_d92}", "display", 'block', { fromValue: 'none'}], position: 37389, duration: 0 },
                { id: "eid356", tween: [ "style", "${_d132}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid357", tween: [ "style", "${_d132}", "display", 'block', { fromValue: 'none'}], position: 54321, duration: 0 },
                { id: "eid325", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid327", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 33036, duration: 0 },
                { id: "eid328", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 36010, duration: 0 },
                { id: "eid434", tween: [ "style", "${_d15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid435", tween: [ "style", "${_d15}", "display", 'block', { fromValue: 'none'}], position: 44128, duration: 0 },
                { id: "eid344", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid336", tween: [ "style", "${_d92}", "top", '230px', { fromValue: '361px'}], position: 37389, duration: 1374 },
                { id: "eid291", tween: [ "style", "${_Rectangle2Copy20}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid318", tween: [ "style", "${_Rectangle2Copy20}", "display", 'block', { fromValue: 'none'}], position: 34328, duration: 0 },
                { id: "eid412", tween: [ "style", "${_Rectangle2Copy20}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid284", tween: [ "style", "${_Rectangle2Copy15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid311", tween: [ "style", "${_Rectangle2Copy15}", "display", 'block', { fromValue: 'none'}], position: 34319, duration: 0 },
                { id: "eid407", tween: [ "style", "${_Rectangle2Copy15}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid293", tween: [ "style", "${_Rectangle2Copy18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid320", tween: [ "style", "${_Rectangle2Copy18}", "display", 'block', { fromValue: 'none'}], position: 34325, duration: 0 },
                { id: "eid410", tween: [ "style", "${_Rectangle2Copy18}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid274", tween: [ "style", "${_Rectangle2Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid301", tween: [ "style", "${_Rectangle2Copy5}", "display", 'block', { fromValue: 'none'}], position: 34337, duration: 0 },
                { id: "eid393", tween: [ "style", "${_Rectangle2Copy5}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid271", tween: [ "style", "${_Rectangle2Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid298", tween: [ "style", "${_Rectangle2Copy2}", "display", 'block', { fromValue: 'none'}], position: 34327, duration: 0 },
                { id: "eid396", tween: [ "style", "${_Rectangle2Copy2}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid294", tween: [ "style", "${_Rectangle2Copy26}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid321", tween: [ "style", "${_Rectangle2Copy26}", "display", 'block', { fromValue: 'none'}], position: 34330, duration: 0 },
                { id: "eid409", tween: [ "style", "${_Rectangle2Copy26}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid350", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid351", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 49121, duration: 0 },
                { id: "eid422", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 51398, duration: 0 },
                { id: "eid279", tween: [ "style", "${_Rectangle2Copy14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid306", tween: [ "style", "${_Rectangle2Copy14}", "display", 'block', { fromValue: 'none'}], position: 34337, duration: 0 },
                { id: "eid406", tween: [ "style", "${_Rectangle2Copy14}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid287", tween: [ "style", "${_Rectangle2Copy24}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid314", tween: [ "style", "${_Rectangle2Copy24}", "display", 'block', { fromValue: 'none'}], position: 34340, duration: 0 },
                { id: "eid416", tween: [ "style", "${_Rectangle2Copy24}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid282", tween: [ "style", "${_Rectangle2Copy10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid309", tween: [ "style", "${_Rectangle2Copy10}", "display", 'block', { fromValue: 'none'}], position: 34340, duration: 0 },
                { id: "eid402", tween: [ "style", "${_Rectangle2Copy10}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid247", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid250", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 21583, duration: 0 },
                { id: "eid277", tween: [ "style", "${_Rectangle2Copy17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid304", tween: [ "style", "${_Rectangle2Copy17}", "display", 'block', { fromValue: 'none'}], position: 34337, duration: 0 },
                { id: "eid400", tween: [ "style", "${_Rectangle2Copy17}", "display", 'none', { fromValue: 'block'}], position: 44144, duration: 0 },
                { id: "eid335", tween: [ "style", "${_d92}", "left", '300px', { fromValue: '550px'}], position: 37389, duration: 1374 },
                { id: "eid163", tween: [ "style", "${_Answers}", "top", '328px', { fromValue: '328px'}], position: 14500, duration: 0 },
                { id: "eid340", tween: [ "style", "${_d14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid342", tween: [ "style", "${_d14}", "display", 'block', { fromValue: 'none'}], position: 21471, duration: 0 },
                { id: "eid348", tween: [ "style", "${_d102}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid349", tween: [ "style", "${_d102}", "display", 'block', { fromValue: 'none'}], position: 47545, duration: 0 },
                { id: "eid354", tween: [ "style", "${_d12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid355", tween: [ "style", "${_d12}", "display", 'block', { fromValue: 'none'}], position: 52788, duration: 0 },
                { id: "eid433", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 1996 },
                { id: "eid424", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 8972 },
                { id: "eid425", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 16614 },
                { id: "eid426", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 23995 },
                { id: "eid427", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4}', [] ], ""], position: 36017 },
                { id: "eid428", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint5}', [] ], ""], position: 44125 },
                { id: "eid429", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 52790.731686259 }            ]
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
