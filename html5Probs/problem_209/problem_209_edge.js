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
                rect: ['15px', '30px','219px','35px','auto', 'auto'],
                text: "In this figure, what is the value of x?<br>",
                align: "left",
                font: ['Georgia, Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'HTML_209Copy',
                type: 'image',
                rect: ['74px', '65px','307px','197px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"HTML%20209.png",'0px','0px']
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
                text: "$ans_D",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['71px', '257px','101px','19px','auto', 'auto'],
                text: "$ans_C",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerBText',
                type: 'text',
                rect: ['71px', '225px','112px','19px','auto', 'auto'],
                text: "$ans_B",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['71px', '190px','109px','19px','auto', 'auto'],
                text: "$ans_A",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
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
                id: 'hint1-1',
                display: 'none',
                type: 'text',
                rect: ['193px', '257px','346px','49px','auto', 'auto'],
                text: "The sum of the interior angles of a triangle equals 180º ",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(211,13,13,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'y_is_110',
                display: 'block',
                type: 'text',
                rect: ['330px', '303px','140px','31px','auto', 'auto'],
                text: "y=180º-$aº-$bº",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(211,13,13,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint1-2',
                display: 'none',
                type: 'text',
                rect: ['294px', '217px','250px','35px','auto', 'auto'],
                text: "How are the other angles related to x?<br>",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(10,10,10,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerEText',
                type: 'text',
                rect: ['71px', '329px','101px','20px','auto', 'auto'],
                text: "$ans_E",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'HTML_209',
                type: 'image',
                rect: ['74px', '65px','307px','197px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"HTML%20209.png",'0px','0px']
            },
            {
                id: 'angle4_text',
                type: 'text',
                rect: ['244px', '190px','25px','19px','auto', 'auto'],
                text: "$d",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'angle2_text',
                type: 'text',
                rect: ['194px', '115px','21px','19px','auto', 'auto'],
                text: "$b",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'angle1_text',
                type: 'text',
                rect: ['136px', '164px','15px','19px','auto', 'auto'],
                text: "$a",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'angle3_text',
                type: 'text',
                rect: ['180px', '220px','15px','19px','auto', 'auto'],
                text: "$c",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Triangle_1',
                type: 'group',
                rect: ['300px', '185px','15px','5','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle4',
                    display: 'none',
                    type: 'rect',
                    rect: ['52px', '-19px','125px','5px','auto', 'auto'],
                    fill: ["rgba(213,10,10,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle3',
                    display: 'none',
                    type: 'rect',
                    rect: ['-133px', '59px','24px','5px','auto', 'auto'],
                    fill: ["rgba(213,10,10,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['-24']]
                },
                {
                    id: 'Rectangle2',
                    display: 'none',
                    type: 'rect',
                    rect: ['-150px', '28px','65px','5px','auto', 'auto'],
                    fill: ["rgba(213,10,10,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"],
                    transform: [[],['-68']]
                }]
            },
            {
                id: 'Equal_1',
                display: 'none',
                type: 'ellipse',
                rect: ['172px', '158px','43px','44px','auto', 'auto'],
                clip: ['rect(0px 30px 26px 0px)'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(213,10,10,0.01)"],
                stroke: [3,"rgba(165,6,6,1.00)","solid"],
                transform: [[],['189'],[],['1.196','1.186']]
            },
            {
                id: 'Find_y',
                display: 'block',
                type: 'text',
                rect: ['294px', '262px','212px','35px','auto', 'auto'],
                text: "Can you find the value of y ?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(211,13,13,1)", "normal", "none", "normal"]
            },
            {
                id: 'y_equals',
                display: 'block',
                type: 'text',
                rect: ['325px', '230px','171px','49px','auto', 'auto'],
                text: "y=?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(211,13,13,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint4_1',
                display: 'block',
                type: 'text',
                rect: ['325px', '266px','200px','31px','auto', 'auto'],
                text: "y+$aº+$bº=180º",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(211,13,13,1)", "normal", "none", "normal"]
            },
            {
                id: 'y',
                display: 'block',
                type: 'text',
                rect: ['199px', '191px','31px','26px','auto', 'auto'],
                text: "y<br>",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(211,13,13,1)", "normal", "none", "italic"]
            },
            {
                id: 'Equal_2',
                display: 'block',
                type: 'ellipse',
                rect: ['174px', '162px','43px','44px','auto', 'auto'],
                clip: ['rect(0px 30px 26px 0px)'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(213,10,10,0.01)"],
                stroke: [3,"rgba(165,6,6,1.00)","solid"],
                transform: [[],['358'],[],['1.199','1.111']]
            },
            {
                id: 'Answer_Hint_1_',
                display: 'block',
                type: 'text',
                rect: ['315px', '115px','180px','56px','auto', 'auto'],
                text: "x+y+$cº=180º",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(211,13,13,1)", "normal", "none", "normal"]
            },
            {
                id: 'Triangle_2',
                type: 'group',
                rect: ['194px', '69px','50','119','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle9',
                    display: 'none',
                    type: 'rect',
                    rect: ['-40px', '58px','130px','5px','auto', 'auto'],
                    fill: ["rgba(213,10,10,1)"],
                    stroke: [3,"rgb(165, 6, 6)","none"],
                    transform: [[],['112']]
                },
                {
                    id: 'Rectangle8',
                    display: 'none',
                    type: 'rect',
                    rect: ['-91px', '82px','101px','6px','auto', 'auto'],
                    fill: ["rgba(213,10,10,1)"],
                    stroke: [3,"rgb(165, 6, 6)","none"],
                    transform: [[],['-42']]
                },
                {
                    id: 'Rectangle7',
                    display: 'none',
                    type: 'rect',
                    rect: ['-73px', '116px','72px','5px','auto', 'auto'],
                    fill: ["rgba(213,10,10,1)"],
                    stroke: [3,"rgb(165, 6, 6)","none"]
                }]
            },
            {
                id: 'Answer_Hint_2',
                display: 'block',
                type: 'text',
                rect: ['335px', '171px','140px','35px','auto', 'auto'],
                text: "x=180º-y-$cº",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(224,14,14,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'question',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/question.mp3','media/question.ogg']
            },
            {
                id: 'hint1',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1.ogg','media/hint1.mp3']
            },
            {
                id: 'hint2a',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2a.ogg','media/hint2a.mp3']
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
                id: 'hint4',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint4.ogg','media/hint4.mp3']
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
                ["style", "top", '7px'],
                ["style", "display", 'none'],
                ["transform", "rotateZ", '-68deg'],
                ["style", "height", '7px'],
                ["color", "background-color", 'rgba(213,10,10,1.00)'],
                ["style", "left", '-119px'],
                ["style", "width", '20px']
            ],
            "${_Equal_1}": [
                ["color", "background-color", 'rgba(213,10,10,0.01)'],
                ["transform", "rotateZ", '189deg'],
                ["transform", "scaleX", '1.19584'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '3px'],
                ["style", "top", '158px'],
                ["style", "left", '172px'],
                ["transform", "scaleY", '1.18579'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(165,6,6,1.00)'],
                ["style", "clip", [0,30,26,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Find_y}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "font-style", 'normal'],
                ["style", "font-size", '16px']
            ],
            "${_HTML_209Copy}": [
                ["style", "height", '197px'],
                ["style", "top", '65px'],
                ["style", "left", '74px'],
                ["style", "width", '307px']
            ],
            "${_Rectangle4}": [
                ["style", "top", '2px'],
                ["style", "height", '7px'],
                ["style", "display", 'none'],
                ["style", "left", '-4px'],
                ["style", "width", '12px']
            ],
            "${_Rectangle7}": [
                ["style", "top", '116px'],
                ["style", "height", '6px'],
                ["style", "display", 'none'],
                ["style", "left", '-22px'],
                ["style", "width", '21px']
            ],
            "${_Triangle_1}": [
                ["style", "top", '185px'],
                ["style", "opacity", '1'],
                ["style", "left", '300px'],
                ["style", "width", '15px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '58px'],
                ["transform", "rotateZ", '-24deg'],
                ["style", "height", '7px'],
                ["style", "display", 'none'],
                ["style", "left", '-126px'],
                ["style", "width", '17px']
            ],
            "${_hint1-1}": [
                ["style", "top", '257px'],
                ["style", "font-size", '14px'],
                ["color", "color", 'rgba(211,13,13,1.00)'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '193px'],
                ["style", "width", '346px']
            ],
            "${_AnswerEText}": [
                ["style", "top", '329px'],
                ["style", "left", '71px'],
                ["style", "width", '101px']
            ],
            "${_angle3_text}": [
                ["style", "top", '220px'],
                ["style", "left", '180px'],
                ["style", "font-size", '16px']
            ],
            "${_hint4_1}": [
                ["style", "top", '266px'],
                ["color", "color", 'rgba(211,13,13,1)'],
                ["style", "height", '27px'],
                ["style", "opacity", '0'],
                ["style", "left", '325px'],
                ["style", "display", 'block']
            ],
            "${_AnswerCText}": [
                ["style", "top", '257px'],
                ["style", "left", '71px'],
                ["style", "width", '101px']
            ],
            "${_Rectangle9}": [
                ["style", "top", '19px'],
                ["transform", "rotateZ", '112deg'],
                ["style", "height", '6px'],
                ["style", "display", 'none'],
                ["style", "left", '22px'],
                ["style", "width", '38px']
            ],
            "${_AnswerAText}": [
                ["style", "top", '190px'],
                ["style", "text-align", 'left'],
                ["style", "height", '19px'],
                ["style", "font-size", '12px'],
                ["style", "left", '71px'],
                ["style", "width", '109px']
            ],
            "${_Answers}": [
                ["style", "top", '168px'],
                ["style", "left", '24px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle8}": [
                ["style", "top", '105px'],
                ["transform", "rotateZ", '-42deg'],
                ["style", "height", '6px'],
                ["style", "display", 'none'],
                ["style", "left", '-82px'],
                ["style", "width", '31px']
            ],
            "${_y_equals}": [
                ["style", "top", '230px'],
                ["color", "color", 'rgba(211,13,13,1)'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '325px'],
                ["style", "font-size", '18px']
            ],
            "${_angle1_text}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '164px'],
                ["style", "left", '136px'],
                ["style", "font-size", '16px']
            ],
            "${_hint1-2}": [
                ["style", "top", '217px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(10,10,10,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '294px'],
                ["style", "width", '250px']
            ],
            "${_Answer_Hint_2}": [
                ["color", "color", 'rgba(211,13,13,1.00)'],
                ["style", "opacity", '0'],
                ["style", "display", 'block'],
                ["style", "font-size", '18px']
            ],
            "${_Equal_2}": [
                ["color", "background-color", 'rgba(213,10,10,0.0078)'],
                ["transform", "rotateZ", '358deg'],
                ["transform", "scaleX", '1.19895'],
                ["style", "opacity", '0'],
                ["style", "border-width", '3px'],
                ["style", "top", '162px'],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '1.11087'],
                ["style", "left", '174px'],
                ["style", "display", 'block'],
                ["color", "border-color", 'rgb(165, 6, 6)'],
                ["style", "clip", [0,30,26,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-style", 'solid']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Question_Text}": [
                ["style", "top", '30px'],
                ["style", "font-size", '12px'],
                ["style", "height", '35px'],
                ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
                ["style", "left", '15px'],
                ["style", "width", '219px']
            ],
            "${_AnswerBText}": [
                ["style", "top", '225px'],
                ["style", "font-style", 'normal'],
                ["style", "height", '19px'],
                ["style", "left", '71px'],
                ["style", "width", '112px']
            ],
            "${_Answer_Hint_1_}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "font-style", 'normal']
            ],
            "${_AnswerDText}": [
                ["style", "top", '293px'],
                ["style", "left", '71px'],
                ["style", "width", '101px']
            ],
            "${_HTML_209}": [
                ["style", "top", '65px'],
                ["style", "height", '197px'],
                ["style", "left", '74px'],
                ["style", "width", '307px']
            ],
            "${_y}": [
                ["style", "top", '191px'],
                ["style", "width", '31px'],
                ["style", "height", '26px'],
                ["style", "font-style", 'italic'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '199px'],
                ["style", "font-size", '18px']
            ],
            "${_y_is_110}": [
                ["style", "top", '303px'],
                ["color", "color", 'rgba(211,13,13,1)'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '330px'],
                ["style", "font-size", '18px']
            ],
            "${_angle4_text}": [
                ["style", "top", '190px'],
                ["style", "width", '25px'],
                ["style", "left", '244px'],
                ["style", "font-size", '16px']
            ],
            "${_angle2_text}": [
                ["style", "width", '21px'],
                ["style", "left", '194px'],
                ["style", "font-size", '16px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 95339,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 10000,
                "Hint 2": 31000,
                "Hint 3": 50000,
                "Hint 4": 67000,
                "Answer Hint": 81000
            },
            timeline: [
                { id: "eid390", tween: [ "style", "${_Rectangle8}", "top", '58px', { fromValue: '105px'}], position: 55500, duration: 500 },
                { id: "eid249", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
                { id: "eid192", tween: [ "style", "${_Rectangle2}", "height", '7px', { fromValue: '7px'}], position: 21500, duration: 0 },
                { id: "eid288", tween: [ "style", "${_Rectangle2}", "height", '3px', { fromValue: '7px'}], position: 22000, duration: 0 },
                { id: "eid234", tween: [ "style", "${_Rectangle3}", "width", '90px', { fromValue: '17px'}], position: 22000, duration: 250 },
                { id: "eid269", tween: [ "style", "${_Rectangle3}", "width", '156px', { fromValue: '90px'}], position: 22250, duration: 250 },
                { id: "eid384", tween: [ "style", "${_Rectangle7}", "display", 'block', { fromValue: 'none'}], position: 55000, duration: 0 },
                { id: "eid237", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid240", tween: [ "style", "${_Rectangle4}", "height", '7px', { fromValue: '7px'}], position: 22500, duration: 0 },
                { id: "eid289", tween: [ "style", "${_Rectangle4}", "height", '3px', { fromValue: '7px'}], position: 23000, duration: 0 },
                { id: "eid382", tween: [ "style", "${_Rectangle7}", "left", '-80px', { fromValue: '-22px'}], position: 55000, duration: 500 },
                { id: "eid203", tween: [ "style", "${_Rectangle2}", "width", '68px', { fromValue: '20px'}], position: 21500, duration: 500 },
                { id: "eid413", tween: [ "style", "${_hint4_1}", "display", 'block', { fromValue: 'block'}], position: 67000, duration: 0 },
                { id: "eid392", tween: [ "style", "${_Rectangle8}", "width", '171px', { fromValue: '31px'}], position: 55500, duration: 500 },
                { id: "eid393", tween: [ "style", "${_Rectangle8}", "display", 'block', { fromValue: 'none'}], position: 55500, duration: 0 },
                { id: "eid424", tween: [ "style", "${_hint4_1}", "height", '27px', { fromValue: '27px'}], position: 73000, duration: 0 },
                { id: "eid448", tween: [ "style", "${_Answer_Hint_2}", "opacity", '1', { fromValue: '0'}], position: 92000, duration: 1000 },
                { id: "eid281", tween: [ "color", "${_hint1-1}", "color", 'rgba(211,13,13,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(211,13,13,1.00)'}], position: 18000, duration: 0 },
                { id: "eid233", tween: [ "style", "${_Rectangle3}", "left", '-135px', { fromValue: '-126px'}], position: 22000, duration: 250 },
                { id: "eid268", tween: [ "style", "${_Rectangle3}", "left", '-138px', { fromValue: '-135px'}], position: 22250, duration: 250 },
                { id: "eid440", tween: [ "style", "${_Answer_Hint_1_}", "opacity", '1', { fromValue: '0'}], position: 87000, duration: 1000 },
                { id: "eid408", tween: [ "style", "${_y_equals}", "display", 'block', { fromValue: 'block'}], position: 64000, duration: 0 },
                { id: "eid161", tween: [ "style", "${_hint1-1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid159", tween: [ "style", "${_hint1-1}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid160", tween: [ "style", "${_hint1-1}", "display", 'block', { fromValue: 'block'}], position: 19000, duration: 0 },
                { id: "eid425", tween: [ "style", "${_y_is_110}", "display", 'block', { fromValue: 'block'}], position: 73000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid232", tween: [ "style", "${_Rectangle3}", "top", '45px', { fromValue: '58px'}], position: 22000, duration: 250 },
                { id: "eid250", tween: [ "style", "${_Rectangle3}", "top", '32px', { fromValue: '45px'}], position: 22250, duration: 250 },
                { id: "eid452", tween: [ "color", "${_y_is_110}", "color", 'rgba(108,102,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(211,13,13,1)'}], position: 92000, duration: 1000 },
                { id: "eid201", tween: [ "style", "${_Rectangle2}", "top", '29px', { fromValue: '7px'}], position: 21500, duration: 500 },
                { id: "eid412", tween: [ "style", "${_y_equals}", "opacity", '1', { fromValue: '0'}], position: 64000, duration: 1000 },
                { id: "eid423", tween: [ "style", "${_y_equals}", "opacity", '0', { fromValue: '1'}], position: 70000, duration: 1000 },
                { id: "eid420", tween: [ "color", "${_y_equals}", "color", 'rgba(126,117,117,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(211,13,13,1)'}], position: 67500, duration: 500 },
                { id: "eid323", tween: [ "style", "${_Equal_1}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid347", tween: [ "style", "${_Find_y}", "display", 'none', { fromValue: 'block'}], position: 40500, duration: 0, easing: "easeInOutElastic" },
                { id: "eid353", tween: [ "style", "${_Find_y}", "display", 'block', { fromValue: 'none'}], position: 47500, duration: 0, easing: "easeInOutElastic" },
                { id: "eid334", tween: [ "style", "${_y}", "display", 'block', { fromValue: 'block'}], position: 40078, duration: 0, easing: "easeInOutElastic" },
                { id: "eid416", tween: [ "style", "${_hint4_1}", "opacity", '1', { fromValue: '0'}], position: 67000, duration: 1000 },
                { id: "eid327", tween: [ "style", "${_Equal_1}", "opacity", '1', { fromValue: '0'}], position: 36000, duration: 1000, easing: "easeInOutElastic" },
                { id: "eid342", tween: [ "style", "${_Equal_1}", "opacity", '0', { fromValue: '1'}], position: 39000, duration: 1078, easing: "easeInOutElastic" },
                { id: "eid204", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
                { id: "eid247", tween: [ "style", "${_Rectangle4}", "left", '-107px', { fromValue: '-4px'}], position: 22500, duration: 500 },
                { id: "eid356", tween: [ "style", "${_Find_y}", "font-size", '16px', { fromValue: '16px'}], position: 48000, duration: 0, easing: "easeInOutElastic" },
                { id: "eid389", tween: [ "style", "${_Rectangle8}", "height", '6px', { fromValue: '6px'}], position: 55500, duration: 0 },
                { id: "eid395", tween: [ "style", "${_Rectangle8}", "height", '3px', { fromValue: '6px'}], position: 56000, duration: 0 },
                { id: "eid202", tween: [ "style", "${_Rectangle2}", "left", '-151px', { fromValue: '-119px'}], position: 21500, duration: 500 },
                { id: "eid242", tween: [ "style", "${_Rectangle2}", "left", '-150px', { fromValue: '-153px'}], position: 22000, duration: 0 },
                { id: "eid381", tween: [ "style", "${_Rectangle7}", "height", '6px', { fromValue: '6px'}], position: 55000, duration: 0 },
                { id: "eid385", tween: [ "style", "${_Rectangle7}", "height", '3px', { fromValue: '6px'}], position: 55500, duration: 0 },
                { id: "eid383", tween: [ "style", "${_Rectangle7}", "width", '79px', { fromValue: '21px'}], position: 55000, duration: 500 },
                { id: "eid367", tween: [ "style", "${_y}", "left", '180px', { fromValue: '199px'}], position: 51000, duration: 1000 },
                { id: "eid432", tween: [ "style", "${_y}", "left", '198px', { fromValue: '180px'}], position: 81000, duration: 1000 },
                { id: "eid403", tween: [ "style", "${_Rectangle9}", "height", '3px', { fromValue: '6px'}], position: 56000, duration: 500 },
                { id: "eid444", tween: [ "style", "${_Answer_Hint_2}", "display", 'block', { fromValue: 'block'}], position: 92000, duration: 0 },
                { id: "eid338", tween: [ "style", "${_y}", "opacity", '1', { fromValue: '0'}], position: 40078, duration: 922, easing: "easeInOutElastic" },
                { id: "eid275", tween: [ "style", "${_hint1-2}", "opacity", '1', { fromValue: '0'}], position: 28000, duration: 750 },
                { id: "eid361", tween: [ "style", "${_hint1-2}", "opacity", '0', { fromValue: '1'}], position: 46750, duration: 750, easing: "easeInOutElastic" },
                { id: "eid443", tween: [ "color", "${_hint4_1}", "color", 'rgba(110,102,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(211,13,13,1)'}], position: 87000, duration: 500 },
                { id: "eid379", tween: [ "style", "${_Rectangle7}", "top", '116px', { fromValue: '116px'}], position: 55000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid355", tween: [ "style", "${_Find_y}", "opacity", '1', { fromValue: '0'}], position: 47500, duration: 500, easing: "easeInOutElastic" },
                { id: "eid407", tween: [ "style", "${_Find_y}", "opacity", '0', { fromValue: '1'}], position: 58000, duration: 1000 },
                { id: "eid401", tween: [ "style", "${_Rectangle9}", "left", '-39px', { fromValue: '23px'}], position: 56000, duration: 500 },
                { id: "eid372", tween: [ "style", "${_Triangle_1}", "opacity", '0', { fromValue: '1'}], position: 53000, duration: 500 },
                { id: "eid437", tween: [ "style", "${_Answer_Hint_1_}", "display", 'block', { fromValue: 'block'}], position: 87000, duration: 0 },
                { id: "eid368", tween: [ "style", "${_y}", "top", '158px', { fromValue: '191px'}], position: 51000, duration: 1000 },
                { id: "eid433", tween: [ "style", "${_y}", "top", '187px', { fromValue: '158px'}], position: 81000, duration: 1000 },
                { id: "eid235", tween: [ "style", "${_Rectangle3}", "height", '7px', { fromValue: '7px'}], position: 22000, duration: 0 },
                { id: "eid236", tween: [ "style", "${_Rectangle3}", "height", '3px', { fromValue: '7px'}], position: 22500, duration: 0 },
                { id: "eid248", tween: [ "style", "${_Rectangle4}", "width", '65px', { fromValue: '12px'}], position: 22500, duration: 250 },
                { id: "eid270", tween: [ "style", "${_Rectangle4}", "width", '116px', { fromValue: '65px'}], position: 22750, duration: 250 },
                { id: "eid239", tween: [ "style", "${_Rectangle4}", "top", '2px', { fromValue: '2px'}], position: 22500, duration: 0 },
                { id: "eid429", tween: [ "style", "${_y_is_110}", "opacity", '1', { fromValue: '0'}], position: 73000, duration: 1000 },
                { id: "eid454", tween: [ "color", "${_Answer_Hint_2}", "color", 'rgba(211,13,13,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(211,13,13,1.00)'}], position: 92000, duration: 0 },
                { id: "eid331", tween: [ "style", "${_Equal_2}", "opacity", '1', { fromValue: '0'}], position: 37000, duration: 1000, easing: "easeInOutElastic" },
                { id: "eid364", tween: [ "style", "${_Equal_2}", "opacity", '0', { fromValue: '1'}], position: 50000, duration: 500 },
                { id: "eid436", tween: [ "style", "${_Equal_2}", "opacity", '1', { fromValue: '0'}], position: 83018, duration: 982 },
                { id: "eid328", tween: [ "style", "${_Equal_2}", "display", 'block', { fromValue: 'block'}], position: 37000, duration: 0, easing: "easeInOutElastic" },
                { id: "eid274", tween: [ "style", "${_hint1-2}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid271", tween: [ "style", "${_hint1-2}", "display", 'block', { fromValue: 'block'}], position: 28750, duration: 0 },
                { id: "eid357", tween: [ "style", "${_hint1-2}", "display", 'block', { fromValue: 'block'}], position: 46750, duration: 0, easing: "easeInOutElastic" },
                { id: "eid404", tween: [ "style", "${_Rectangle9}", "display", 'block', { fromValue: 'none'}], position: 56000, duration: 0 },
                { id: "eid400", tween: [ "style", "${_Rectangle9}", "top", '58px', { fromValue: '19px'}], position: 56000, duration: 500 },
                { id: "eid402", tween: [ "style", "${_Rectangle9}", "width", '127px', { fromValue: '38px'}], position: 56000, duration: 500 },
                { id: "eid391", tween: [ "style", "${_Rectangle8}", "left", '-100px', { fromValue: '-82px'}], position: 55500, duration: 500 },
                { id: "eid168", tween: [ "style", "${_hint1-1}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 1000 },
                { id: "eid285", tween: [ "style", "${_hint1-1}", "opacity", '0', { fromValue: '1'}], position: 26000, duration: 500 },
                { id: "eid455", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid456", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 10000 },
                { id: "eid457", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2a}', [] ], ""], position: 31000 },
                { id: "eid458", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2b}', [] ], ""], position: 43000 },
                { id: "eid459", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 60000 },
                { id: "eid460", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4}', [] ], ""], position: 76000 }            ]
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
                        rect: ['0px', '5px', '27px', '19px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text4',
                        text: 'B',
                        align: 'center',
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


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EdgeProblem");
