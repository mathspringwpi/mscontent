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
                rect: ['15px', '100px','219px','52px','auto', 'auto'],
                text: "Which of the following is closest to the circumference of a circle with a radius of 18 feet?",
                align: "left",
                font: ['Georgia, Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['24', '168','auto','auto','auto', 'auto']
            },
            {
                id: 'Main_Circle',
                display: 'none',
                type: 'ellipse',
                rect: ['317px', '42px','136px','136px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Hint1_Text',
                display: 'block',
                type: 'text',
                rect: ['308px', '197px','184px','52px','auto', 'auto'],
                text: "The circumference is the measurement of the outside edge of a circle.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Green_Circle',
                display: 'none',
                type: 'ellipse',
                rect: ['428px', '57px','6px','6px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(9,251,3,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'QuestionSound_Container',
                display: 'none',
                type: 'rect',
                rect: ['46px', '19px','164px','7px','auto', 'auto'],
                fill: ["rgba(248,250,248,1)"],
                stroke: [1,"rgb(4, 4, 4)","solid"]
            },
            {
                id: 'Hint2_Text',
                display: 'block',
                type: 'text',
                rect: ['305px', '197px','208px','60px','auto', 'auto'],
                text: "The radius of a circle is the length of a straight line from its center point to any point on the edge of the circle.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Center_black_circle',
                display: 'none',
                type: 'ellipse',
                rect: ['382px', '107px','6px','6px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [1,"rgb(4, 4, 4)","solid"]
            },
            {
                id: 'Edge_black_circle',
                display: 'none',
                type: 'ellipse',
                rect: ['424px', '53px','6px','6px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,0,0,1)"],
                stroke: [1,"rgb(4, 4, 4)","solid"]
            },
            {
                id: 'Radius_approx',
                display: 'none',
                type: 'rect',
                rect: ['374px', '82px','63px','0px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [1,"rgb(0, 0, 0)","solid"],
                transform: [[],['-52']]
            },
            {
                id: 'hint3',
                display: 'none',
                type: 'image',
                rect: ['317px', '212px','170px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'hint3.png','0px','0px']
            },
            {
                id: 'hint4',
                display: 'none',
                type: 'image',
                rect: ['329px', '242px','172px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'hint4.png','0px','0px']
            },
            {
                id: 'Underline',
                display: 'none',
                type: 'group',
                rect: ['12', '133','223','19','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle6',
                    type: 'rect',
                    rect: ['112px', '2px','69px','0px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1)"],
                    stroke: [1,"rgba(250,3,3,1.00)","solid"]
                },
                {
                    id: 'Rectangle7',
                    type: 'rect',
                    rect: ['0px', '17px','95px','0px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1)"],
                    stroke: [1,"rgba(248,0,0,1.00)","solid"]
                }]
            },
            {
                id: 'Radius_Text',
                display: 'none',
                type: 'text',
                rect: ['410px', '94px','89px','26px','auto', 'auto'],
                text: "r = 18 ft",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(250,3,3,1.00)", "700", "none", "normal"]
            },
            {
                id: 'Answer_Text',
                display: 'none',
                type: 'group',
                rect: ['269', '293','252','66','auto', 'auto'],
                c: [
                {
                    id: 'Text20',
                    type: 'text',
                    rect: ['0px', '0px','252px','72px','auto', 'auto'],
                    text: "Circumfrence = 2 x 3.1416 x 18 ft",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(250,3,3,1)", "bold", "none", "normal"]
                },
                {
                    id: 'Text22',
                    type: 'text',
                    rect: ['93px', '20px','124px','19px','auto', 'auto'],
                    text: "= 113.706",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(4,4,4,1)", "bold", "none", "normal"]
                },
                {
                    id: 'Text25',
                    type: 'text',
                    rect: ['0px', '44px','174px','22px','auto', 'auto'],
                    text: "Choose A",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(4,4,4,1)", "bold", "none", "normal"]
                }]
            }],
            symbolInstances: [
            {
                id: 'Answers',
                symbolName: 'Answers',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Center_black_circle}": [
                ["style", "top", '107px'],
                ["style", "display", 'none'],
                ["style", "height", '6px'],
                ["style", "left", '382px'],
                ["style", "width", '6px']
            ],
            "${_Hint2_Button_Text}": [
                ["style", "left", '20px'],
                ["style", "top", '3px']
            ],
            "${_Text22}": [
                ["style", "left", '93px'],
                ["style", "top", '20px']
            ],
            "${_Hint1_Text}": [
                ["style", "top", '196px'],
                ["style", "height", '53px'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '296px'],
                ["style", "width", '228px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_Hint4_Button}": [
                ["subproperty", "boxShadow.inset", ''],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '2px'],
                ["subproperty", "boxShadow.offsetH", '2px'],
                ["style", "left", '0px']
            ],
            "${_Radius_Text}": [
                ["style", "top", '94px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(250,3,3,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '410px'],
                ["style", "opacity", '0']
            ],
            "${_ShowHint4}": [
                ["style", "left", '24px'],
                ["style", "top", '56px']
            ],
            "${_hint3}": [
                ["style", "top", '212px'],
                ["style", "opacity", '0'],
                ["style", "left", '317px'],
                ["style", "display", 'none']
            ],
            "${_Hint5_Text}": [
                ["style", "top", '3px'],
                ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
                ["style", "left", '23px'],
                ["style", "font-size", '12px']
            ],
            "${_Hint5_Button}": [
                ["subproperty", "boxShadow.inset", ''],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '2px'],
                ["subproperty", "boxShadow.offsetH", '2px'],
                ["style", "left", '0px']
            ],
            "${_Green_Circle}": [
                ["style", "top", '38px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(9,251,3,1.00)'],
                ["style", "height", '6px'],
                ["color", "border-color", 'rgba(9,251,3,1.00)'],
                ["style", "left", '382px'],
                ["style", "width", '6px']
            ],
            "${_Hint3_Button_Text}": [
                ["style", "height", '19px'],
                ["style", "left", '18px'],
                ["style", "top", '3px']
            ],
            "${_Hint1_Button}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["subproperty", "boxShadow.inset", ''],
                ["subproperty", "boxShadow.offsetV", '2px'],
                ["subproperty", "boxShadow.offsetH", '2px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
            ],
            "${_Text20}": [
                ["style", "height", '72px'],
                ["color", "color", 'rgba(250,3,3,1)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint3_Button}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["subproperty", "boxShadow.inset", ''],
                ["subproperty", "boxShadow.offsetV", '2px'],
                ["subproperty", "boxShadow.offsetH", '2px'],
                ["subproperty", "boxShadow.blur", '3px']
            ],
            "${_Hint1_Button_Text}": [
                ["style", "top", '3px'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '23px'],
                ["style", "font-size", '12px']
            ],
            "${_Hint2_Button}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["subproperty", "boxShadow.inset", ''],
                ["subproperty", "boxShadow.offsetV", '2px'],
                ["subproperty", "boxShadow.offsetH", '2px'],
                ["subproperty", "boxShadow.blur", '3px']
            ],
            "${_Edge_black_circle}": [
                ["style", "display", 'none'],
                ["style", "top", '53px'],
                ["style", "left", '424px'],
                ["style", "height", '6px']
            ],
            "${_ShowAnswer}": [
                ["style", "left", '210px'],
                ["style", "top", '53px']
            ],
            "${_Text23}": [
                ["style", "top", '339px'],
                ["style", "height", '36px'],
                ["style", "left", '269px'],
                ["style", "width", '195px']
            ],
            "${_AnswerAText}": [
                ["style", "top", '19px'],
                ["style", "font-size", '12px'],
                ["style", "left", '44px'],
                ["style", "width", '109px']
            ],
            "${_Hint4}": [
                ["style", "top", '3px'],
                ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
                ["style", "left", '23px'],
                ["style", "font-size", '12px']
            ],
            "${_ShowHint5}": [
                ["style", "left", '112px'],
                ["style", "top", '56px']
            ],
            "${_Question_Text}": [
                ["style", "top", '100px'],
                ["style", "font-size", '12px'],
                ["style", "height", '52px'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '15px'],
                ["style", "width", '219px']
            ],
            "${_ShowAnswer_Button}": [
                ["subproperty", "boxShadow.inset", ''],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '89px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
                ["style", "left", '0px'],
                ["style", "height", '28px'],
                ["subproperty", "boxShadow.offsetV", '2px'],
                ["subproperty", "boxShadow.offsetH", '2px'],
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Text24}": [
                ["style", "top", '337px'],
                ["style", "height", '35px'],
                ["style", "left", '269px'],
                ["style", "width", '161px']
            ],
            "${_Main_Circle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '136px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "border-width", '1px'],
                ["style", "display", 'none']
            ],
            "${_Radius_approx}": [
                ["transform", "rotateZ", '-52deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '387px'],
                ["style", "width", '0px'],
                ["style", "top", '108px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["style", "height", '0px']
            ],
            "${_Text25}": [
                ["style", "top", '44px'],
                ["style", "left", '0px']
            ],
            "${_Rectangle7}": [
                ["style", "top", '17px'],
                ["color", "border-color", 'rgba(248,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '95px']
            ],
            "${_Answer_Text}": [
                ["style", "display", 'none']
            ],
            "${_ShowAnswer_Button_Text}": [
                ["style", "top", '7px'],
                ["style", "left", '4px']
            ],
            "${_Hint2_Text}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(254,245,209,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '600px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '2px'],
                ["color", "border-color", 'rgba(250,3,3,1.00)'],
                ["style", "left", '112px'],
                ["style", "width", '69px']
            ],
            "${_Underline}": [
                ["style", "top", '131px'],
                ["style", "height", '26px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "width", '179px']
            ],
            "${_hint4}": [
                ["style", "top", '242px'],
                ["style", "overflow", 'visible'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '329px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 30000,
            autoPlay: true,
            labels: {
                "Read Question": 250,
                "Hint 1": 500,
                "Hint 2": 4499,
                "Hint 3": 11250,
                "Hint 4": 17000,
                "Hint 5": 18000,
                "Show answer": 25000
            },
            timeline: [
                { id: "eid243", tween: [ "style", "${_Radius_approx}", "top", '83px', { fromValue: '108px'}], position: 6500, duration: 3500 },
                { id: "eid166", tween: [ "style", "${_Text20}", "height", '72px', { fromValue: '72px'}], position: 20250, duration: 0 },
                { id: "eid182", tween: [ "style", "${_Text20}", "height", '22px', { fromValue: '72px'}], position: 30000, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Green_Circle}", "top", '107px', { fromValue: '38px'}], position: 750, duration: 500, easing: "easeInCirc" },
                { id: "eid77", tween: [ "style", "${_Green_Circle}", "top", '176px', { fromValue: '107px'}], position: 1250, duration: 500 },
                { id: "eid82", tween: [ "style", "${_Green_Circle}", "top", '107px', { fromValue: '176px'}], position: 1750, duration: 500 },
                { id: "eid86", tween: [ "style", "${_Green_Circle}", "top", '38px', { fromValue: '107px'}], position: 2250, duration: 500, easing: "easeOutCirc" },
                { id: "eid165", tween: [ "style", "${_Radius_Text}", "opacity", '1', { fromValue: '0'}], position: 20250, duration: 1750 },
                { id: "eid197", tween: [ "style", "${_hint3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid198", tween: [ "style", "${_hint3}", "display", 'block', { fromValue: 'none'}], position: 11250, duration: 0 },
                { id: "eid118", tween: [ "style", "${_Hint2_Text}", "opacity", '1', { fromValue: '0.000000'}], position: 4499, duration: 251 },
                { id: "eid55", tween: [ "style", "${_Main_Circle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutCirc" },
                { id: "eid31", tween: [ "style", "${_Main_Circle}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid48", tween: [ "color", "${_Green_Circle}", "border-color", 'rgba(9,251,3,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(9,251,3,1.00)'}], position: 1250, duration: 0, easing: "easeInOutCirc" },
                { id: "eid159", tween: [ "style", "${_Radius_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid160", tween: [ "style", "${_Radius_Text}", "display", 'block', { fromValue: 'none'}], position: 20250, duration: 0 },
                { id: "eid141", tween: [ "style", "${_Hint2_Text}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid158", tween: [ "style", "${_Underline}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 1500 },
                { id: "eid217", tween: [ "style", "${_Hint1_Text}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_Hint1_Text}", "display", 'block', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid96", tween: [ "style", "${_Hint1_Text}", "display", 'none', { fromValue: 'block'}], position: 4301, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Green_Circle}", "left", '451px', { fromValue: '382px'}], position: 750, duration: 500 },
                { id: "eid75", tween: [ "style", "${_Green_Circle}", "left", '382px', { fromValue: '451px'}], position: 1250, duration: 500, easing: "easeInCirc" },
                { id: "eid81", tween: [ "style", "${_Green_Circle}", "left", '313px', { fromValue: '382px'}], position: 1750, duration: 500, easing: "easeOutCirc" },
                { id: "eid85", tween: [ "style", "${_Green_Circle}", "left", '382px', { fromValue: '313px'}], position: 2250, duration: 500 },
                { id: "eid154", tween: [ "style", "${_Underline}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid155", tween: [ "style", "${_Underline}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid183", tween: [ "style", "${_Answer_Text}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid201", tween: [ "style", "${_hint4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid202", tween: [ "style", "${_hint4}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid204", tween: [ "style", "${_hint4}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 500 },
                { id: "eid184", tween: [ "color", "${_Text20}", "color", 'rgba(1,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(250,3,3,1)'}], position: 20250, duration: 4750 },
                { id: "eid185", tween: [ "color", "${_Text20}", "color", 'rgba(4,4,4,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(1,0,0,1.00)'}], position: 25000, duration: 5000 },
                { id: "eid115", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid245", tween: [ "style", "${_Radius_approx}", "width", '63px', { fromValue: '0px'}], position: 6500, duration: 3500 },
                { id: "eid56", tween: [ "style", "${_Green_Circle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutCirc" },
                { id: "eid57", tween: [ "style", "${_Green_Circle}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeInOutCirc" },
                { id: "eid108", tween: [ "style", "${_Green_Circle}", "display", 'none', { fromValue: 'block'}], position: 4301, duration: 0 },
                { id: "eid241", tween: [ "style", "${_Edge_black_circle}", "height", '6px', { fromValue: '6px'}], position: 10000, duration: 0 },
                { id: "eid242", tween: [ "style", "${_Radius_approx}", "height", '0px', { fromValue: '0px'}], position: 10000, duration: 0 },
                { id: "eid121", tween: [ "style", "${_Edge_black_circle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid123", tween: [ "style", "${_Edge_black_circle}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid219", tween: [ "style", "${_Hint1_Text}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Hint1_Text}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid129", tween: [ "style", "${_Radius_approx}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid130", tween: [ "style", "${_Radius_approx}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid200", tween: [ "style", "${_hint3}", "opacity", '1', { fromValue: '0'}], position: 11250, duration: 500 },
                { id: "eid120", tween: [ "style", "${_Center_black_circle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid122", tween: [ "style", "${_Center_black_circle}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid244", tween: [ "style", "${_Radius_approx}", "left", '375px', { fromValue: '387px'}], position: 6500, duration: 3500 },
                { id: "eid139", tween: [ "transform", "${_Radius_approx}", "rotateZ", '-52deg', { fromValue: '-52deg'}], position: 10000, duration: 0 }            ]
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
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                    },
                    {
                        rect: ['36px', '3px', '109px', '19px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'AnswerAText',
                        text: '113.04 ft',
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
            "${_AnswerAText}": [
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
            "${_Text3}": [
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
                { id: "eid270", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 }            ]
        }
    }
},
"BButton": {
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
                        rect: ['36px', '5px', '112px', '19px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text10',
                        text: '226.08 ft',
                        align: 'left',
                        type: 'text'
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
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
            "${_Text10}": [
                ["style", "top", '5px'],
                ["style", "left", '36px'],
                ["style", "width", '112px']
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
"CButton": {
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
                        rect: ['36px', '4px', '101px', '19px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text12',
                        text: '1017.36 ft',
                        align: 'left',
                        type: 'text'
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text12}": [
                ["style", "top", '4px'],
                ["style", "left", '36px'],
                ["style", "width", '101px']
            ],
            "${_Text5}": [
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
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "height", '42px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
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
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text13',
                        text: '2034.72 ft<br>',
                        align: 'left',
                        type: 'text'
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
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
                    },
                    {
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text14',
                        text: '3206.34 ft',
                        align: 'left',
                        type: 'text'
                    },
                    {
                        rect: ['-8px', '-3px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
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
                { id: "eid272", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid271", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }            ]
        }
    }
},
"Answers": {
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
                    rect: ['0px', '0px', '153', '183', 'auto', 'auto'],
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
                symbolName: 'DButton'
            },
            {
                id: 'EButton',
                symbolName: 'EButton'
            },
            {
                id: 'BButton',
                symbolName: 'BButton'
            },
            {
                id: 'CButton',
                symbolName: 'CButton'
            },
            {
                id: 'AButton',
                symbolName: 'AButton'
            }            ]
        },
    states: {
        "Base State": {
            "${_Group}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_CButton}": [
                ["style", "left", '8px'],
                ["style", "top", '86px']
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
