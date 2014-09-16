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
                id: 'Rectangle',
                type: 'image',
                rect: ['46px', '-75px','700px','490px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Rectangle.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['391px', '256px','37px','17px','auto', 'auto'],
                text: ")",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "400", "none", "normal"]
            },
            {
                id: 'AnswerDText',
                type: 'text',
                rect: ['71px', '293px','101px','20px','auto', 'auto'],
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['67px', '224px','101px','19px','auto', 'auto'],
                text: "300",
                align: "left",
                font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "500", "none", "normal"]
            },
            {
                id: 'Text14',
                type: 'text',
                rect: ['67px', '190px','26px','17px','auto', 'auto'],
                text: "250",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "500", "none", "normal"]
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
                id: 'AnswerEText',
                type: 'text',
                rect: ['67px', '332px','101px','20px','auto', 'auto'],
                text: "400",
                align: "left",
                font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "500", "none", "normal"]
            },
            {
                id: 'hint1',
                type: 'text',
                rect: ['205px', '219px','156px','30px','auto', 'auto'],
                text: "Area = h * w",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(200,8,8,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'hint7_x',
                type: 'text',
                rect: ['297px', '262px','66px','44px','auto', 'auto'],
                text: "*",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'hint1_h',
                type: 'text',
                rect: ['271px', '216px','29px','30px','auto', 'auto'],
                text: "h",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(200,8,8,1)", "normal", "none", "normal"]
            },
            {
                id: 'h_red',
                type: 'rect',
                rect: ['475px', '87px','6px','15px','auto', 'auto'],
                fill: ["rgba(200,8,8,1.00)"],
                stroke: [0,"rgba(200,8,8,1.00)","none"]
            },
            {
                id: 'hint1_w',
                type: 'text',
                rect: ['304px', '217px','37px','19px','auto', 'auto'],
                text: "w<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(200,8,8,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'hint3_2x',
                type: 'text',
                rect: ['316px', '115px','42px','17px','auto', 'auto'],
                text: "2x =",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'hint4_x_is_5',
                type: 'text',
                rect: ['423px', '312px','77px','38px','auto', 'auto'],
                text: "x = 15",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint4_solve_for_x',
                type: 'text',
                rect: ['420px', '284px','109px','30px','auto', 'auto'],
                text: "Solve for x",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint4_2x_equals_10',
                type: 'text',
                rect: ['316px', '114px','125px','30px','auto', 'auto'],
                text: "2x =30",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'w_red',
                type: 'rect',
                rect: ['444px', '186px','37px','6px','auto', 'auto'],
                fill: ["rgba(200,8,8,1)"],
                stroke: [0,"rgb(240, 9, 9)","solid"]
            },
            {
                id: 'AC',
                type: 'rect',
                rect: ['383px', '34px','6px','208px','auto', 'auto'],
                fill: ["rgba(200,8,8,1)"],
                stroke: [0,"rgb(240, 9, 9)","solid"],
                transform: [[],['62']]
            },
            {
                id: '_90_degree',
                type: 'group',
                rect: ['426px', '250px','3','17','auto', 'auto'],
                c: [
                {
                    id: '_90_angle',
                    type: 'group',
                    rect: ['32px', '-83px','24','3','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle6',
                        type: 'rect',
                        rect: ['0px', '0px','17px','3px','auto', 'auto'],
                        fill: ["rgba(200,8,8,1)"],
                        stroke: [0,"rgb(240, 9, 9)","solid"]
                    },
                    {
                        id: 'Rectangle7',
                        type: 'rect',
                        rect: ['0px', '3px','3px','17px','auto', 'auto'],
                        fill: ["rgba(200,8,8,1)"],
                        stroke: [0,"rgb(240, 9, 9)","solid"]
                    }]
                },
                {
                    id: '_90',
                    type: 'text',
                    rect: ['3px', '-83px','41px','16px','auto', 'auto'],
                    text: "90º",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(200,8,8,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: '_30_degree',
                type: 'group',
                rect: ['327px', '250px','3','17','auto', 'auto'],
                c: [
                {
                    id: '_30',
                    type: 'text',
                    rect: ['8px', '-83px','41px','16px','auto', 'auto'],
                    text: "30º",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(200,8,8,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'hint2_text',
                type: 'text',
                rect: ['176px', '250px','314px','49px','auto', 'auto'],
                text: "What is the relationship between the sides of a 30-60-90 triangle?",
                font: ['Times New Roman, Times, serif', 20, "rgba(140,4,4,1.00)", "normal", "none", ""]
            },
            {
                id: 'hint3_x',
                type: 'text',
                rect: ['509px', '129px','42px','17px','auto', 'auto'],
                text: "= x",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'hint3_equal_square_root_3_',
                type: 'group',
                rect: ['458px', '203px','39px','24','auto', 'auto'],
                c: [
                {
                    id: 'x',
                    type: 'text',
                    rect: ['-3px', '1px','29px','24px','auto', 'auto'],
                    text: "x<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'equal',
                    type: 'text',
                    rect: ['-51px', '0px','auto','auto','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'hint3_square_root_3_a',
                    type: 'image',
                    rect: ['-33px', '1px','24px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hint3%20square%20root%203%20a.png",'0px','0px']
                }]
            },
            {
                id: 'hint5',
                type: 'text',
                rect: ['178px', '293px','213px','49px','auto', 'auto'],
                text: "Can you find the value of h and w ?",
                font: ['Times New Roman, Times, serif', 20, "rgba(140,4,4,1.00)", "normal", "none", ""]
            },
            {
                id: 'hint6_5_for_h',
                type: 'text',
                rect: ['438px', '310px','59px','22px','auto', 'auto'],
                text: "= 15",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint7_5',
                type: 'text',
                rect: ['527px', '129px','44px','16px','auto', 'auto'],
                text: "15",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint6_5_for_w',
                type: 'text',
                rect: ['438px', '310px','59px','22px','auto', 'auto'],
                text: "15",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint6__multiplication_symbol',
                type: 'text',
                rect: ['454px', '207px','8px','20px','auto', 'auto'],
                text: "*",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint7_5_square_root_3',
                type: 'group',
                rect: ['57px', '141px','24','20','auto', 'auto'],
                c: [
                {
                    id: 'hint3_square_root_3_aCopy',
                    type: 'image',
                    rect: ['368px', '63px','24px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hint3%20square%20root%203%20a.png",'0px','0px']
                },
                {
                    id: 'hint7_x5',
                    type: 'text',
                    rect: ['396px', '64px','77px','38px','auto', 'auto'],
                    text: "* 15",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['313px', '256px','auto','auto','auto', 'auto'],
                text: "(",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "400", "none", "normal"]
            },
            {
                id: 'answer_hint_1',
                type: 'group',
                rect: ['305px', '308px','24','20','auto', 'auto'],
                c: [
                {
                    id: 'square_root_3',
                    type: 'image',
                    rect: ['12px', '2px','24px','22px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hint3%20square%20root%203%20a.png",'0px','0px']
                },
                {
                    id: 'area_is_25',
                    type: 'text',
                    rect: ['-107px', '-1px','164px','44px','auto', 'auto'],
                    text: "Area = 225",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'choose_b',
                type: 'text',
                rect: ['197px', '346px','142px','24px','auto', 'auto'],
                text: "Choose (D)",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['18px', '17px','227px','37px','auto', 'auto'],
                text: "In rectangle ABCD, diagonal AC makes a ",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text12',
                type: 'text',
                rect: ['137px', '36px','145px','16px','auto', 'auto'],
                text: "angle with side CD. ",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text13',
                type: 'text',
                rect: ['18px', '74px','237px','16px','auto', 'auto'],
                text: "what is the area of the rectangle?",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'CodeCogsEqn_20',
                type: 'image',
                rect: ['112px', '37px','21px','13px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2820%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_24',
                type: 'image',
                rect: ['68px', '262px','45px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2824%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_25',
                type: 'image',
                rect: ['68px', '298px','43px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2825%29.gif",'0px','0px']
            },
            {
                id: 'Text13Copy',
                type: 'text',
                rect: ['18px', '55px','237px','16px','auto', 'auto'],
                text: "If the length of AC=30, ",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['205px', '257px','83px','24px','auto', 'auto'],
                text: "Area =",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(15,14,14,1.00)", "400", "none", "normal"]
            },
            {
                id: 'hint12',
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
                id: 'hint4a',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint4a.mp3','media/hint4a.ogg']
            },
            {
                id: 'hint4b',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint4b.ogg','media/hint4b.mp3']
            },
            {
                id: 'hint52',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint5.mp3','media/hint5.ogg']
            },
            {
                id: 'hint7',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint7.ogg','media/hint7.mp3']
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
                id: 'Answers',
                type: 'rect',
                rect: ['22px', '168px','auto','auto','auto', 'auto']
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
            "${_answer_hint_1}": [
                ["style", "top", '308px'],
                ["style", "opacity", '0'],
                ["style", "left", '305px']
            ],
            "${_area_is_25}": [
                ["style", "top", '-1px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '-107px']
            ],
            "${_h_red}": [
                ["color", "background-color", 'rgba(200,8,8,1.00)'],
                ["style", "opacity", '0'],
                ["style", "height", '15px'],
                ["color", "border-color", 'rgba(200,8,8,1.00)'],
                ["style", "left", '475px'],
                ["style", "width", '6px']
            ],
            "${_Text2}": [
                ["style", "top", '256px'],
                ["style", "left", '313px'],
                ["style", "display", 'none']
            ],
            "${_x}": [
                ["style", "top", '2px'],
                ["color", "color", 'rgba(140,4,4,1.00)'],
                ["style", "height", '24px'],
                ["style", "opacity", '1'],
                ["style", "left", '-3px'],
                ["style", "width", '29px']
            ],
            "${_hint4_solve_for_x}": [
                ["style", "top", '284px'],
                ["style", "opacity", '0'],
                ["style", "left", '420px'],
                ["style", "font-size", '16px']
            ],
            "${_hint6__multiplication_symbol}": [
                ["style", "top", '207px'],
                ["style", "height", '20px'],
                ["style", "opacity", '0'],
                ["style", "left", '454px'],
                ["style", "width", '8px']
            ],
            "${_equal}": [
                ["style", "top", '0px'],
                ["style", "left", '-51px'],
                ["color", "color", 'rgba(140,4,4,1.00)']
            ],
            "${_hint7_5}": [
                ["style", "top", '129px'],
                ["style", "opacity", '0'],
                ["style", "left", '527px'],
                ["style", "height", '16px']
            ],
            "${_Text14}": [
                ["style", "top", '190px'],
                ["style", "font-weight", '500'],
                ["style", "font-size", '16px']
            ],
            "${_hint2_text}": [
                ["style", "top", '250px'],
                ["style", "width", '314px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["color", "color", 'rgba(140,4,4,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '176px'],
                ["style", "font-size", '20px']
            ],
            "${_Rectangle7}": [
                ["style", "top", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_Rectangle6}": [
                ["style", "height", '3px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '17px']
            ],
            "${_hint7_5_square_root_3}": [
                ["style", "top", '141px'],
                ["style", "opacity", '0'],
                ["style", "left", '57px']
            ],
            "${_hint1}": [
                ["style", "top", '219px'],
                ["style", "width", '156px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(200,8,8,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '205px'],
                ["style", "font-size", '20px']
            ],
            "${_hint3_x}": [
                ["style", "top", '129px'],
                ["color", "color", 'rgba(140,4,4,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '509px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif']
            ],
            "${_Text4}": [
                ["style", "top", '17px'],
                ["style", "font-size", '16px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '37px'],
                ["style", "left", '18px'],
                ["style", "width", '227px']
            ],
            "${_hint3_square_root_3_aCopy}": [
                ["style", "top", '63px'],
                ["style", "height", '20px'],
                ["style", "left", '368px'],
                ["style", "width", '24px']
            ],
            "${_Text12}": [
                ["style", "top", '36px'],
                ["style", "left", '137px'],
                ["style", "width", '145px']
            ],
            "${__30}": [
                ["style", "top", '-83px'],
                ["style", "left", '8px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Text13Copy}": [
                ["style", "top", '55px'],
                ["style", "left", '18px'],
                ["style", "width", '237px']
            ],
            "${_hint3_equal_square_root_3_}": [
                ["style", "top", '203px'],
                ["style", "opacity", '0'],
                ["style", "left", '458px'],
                ["style", "width", '39px']
            ],
            "${_CodeCogsEqn_25}": [
                ["style", "height", '14px'],
                ["style", "top", '298px'],
                ["style", "left", '68px'],
                ["style", "width", '43px']
            ],
            "${__90_degree}": [
                ["style", "top", '250px'],
                ["style", "opacity", '0'],
                ["style", "left", '426px']
            ],
            "${_AnswerEText}": [
                ["style", "top", '332px'],
                ["style", "font-weight", '500'],
                ["style", "font-size", '16px'],
                ["style", "height", '20px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '67px'],
                ["style", "width", '101px']
            ],
            "${__90}": [
                ["style", "top", '-83px'],
                ["style", "left", '3px']
            ],
            "${_hint7_x5}": [
                ["style", "left", '396px'],
                ["style", "top", '64px']
            ],
            "${_Text3}": [
                ["style", "top", '256px'],
                ["style", "left", '391px'],
                ["style", "display", 'none']
            ],
            "${_choose_b}": [
                ["style", "top", '346px'],
                ["style", "opacity", '0'],
                ["style", "left", '197px']
            ],
            "${_w_red}": [
                ["style", "top", '186px'],
                ["style", "height", '6px'],
                ["style", "opacity", '0'],
                ["style", "left", '465px'],
                ["style", "width", '16px']
            ],
            "${_hint5}": [
                ["style", "top", '293px'],
                ["style", "width", '213px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(140,4,4,1.00)'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '178px'],
                ["style", "font-size", '20px']
            ],
            "${_AnswerCText}": [
                ["style", "top", '224px'],
                ["style", "font-size", '16px'],
                ["style", "font-weight", '500'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '67px'],
                ["style", "width", '101px']
            ],
            "${_hint7_x}": [
                ["style", "top", '262px'],
                ["color", "color", 'rgba(140,4,4,1.00)'],
                ["style", "height", '44px'],
                ["style", "opacity", '0'],
                ["style", "left", '297px'],
                ["style", "width", '66px']
            ],
            "${_hint6_5_for_h}": [
                ["style", "top", '310px'],
                ["style", "opacity", '0'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '438px'],
                ["style", "width", '59px']
            ],
            "${_square_root_3}": [
                ["style", "height", '22px'],
                ["style", "top", '2px'],
                ["style", "left", '12px'],
                ["style", "width", '24px']
            ],
            "${_TutorialText}": [
                ["style", "top", '51px'],
                ["style", "height", '187px'],
                ["style", "opacity", '1'],
                ["style", "left", '260px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle}": [
                ["style", "height", '490px'],
                ["style", "top", '-75px'],
                ["style", "left", '46px'],
                ["style", "width", '700px']
            ],
            "${__90_angle}": [
                ["style", "left", '32px'],
                ["style", "top", '-83px']
            ],
            "${_hint3_square_root_3_a}": [
                ["style", "height", '20px'],
                ["style", "top", '1px'],
                ["style", "left", '-33px'],
                ["style", "width", '24px']
            ],
            "${_hint3_2x}": [
                ["style", "top", '115px'],
                ["color", "color", 'rgba(140,4,4,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '316px'],
                ["style", "font-size", '20px']
            ],
            "${_CodeCogsEqn_20}": [
                ["style", "height", '13px'],
                ["style", "top", '37px'],
                ["style", "left", '112px'],
                ["style", "width", '21px']
            ],
            "${_Answers}": [
                ["style", "top", '168px'],
                ["style", "left", '22px']
            ],
            "${__30_degree}": [
                ["style", "top", '250px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '327px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_hint1_w}": [
                ["style", "top", '217px'],
                ["color", "color", 'rgba(200,8,8,1.00)'],
                ["style", "height", '19px'],
                ["style", "opacity", '0'],
                ["style", "left", '304px'],
                ["style", "width", '37px']
            ],
            "${_hint4_x_is_5}": [
                ["style", "top", '312px'],
                ["style", "opacity", '0'],
                ["style", "left", '423px'],
                ["style", "height", '38px']
            ],
            "${_Text13}": [
                ["style", "top", '74px'],
                ["style", "left", '18px'],
                ["style", "width", '237px']
            ],
            "${_hint6_5_for_w}": [
                ["style", "top", '310px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '438px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif']
            ],
            "${_CodeCogsEqn_24}": [
                ["style", "height", '14px'],
                ["style", "top", '262px'],
                ["style", "left", '68px'],
                ["style", "width", '45px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(15,14,14,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '205px'],
                ["style", "top", '257px']
            ],
            "${_hint1_h}": [
                ["style", "top", '216px'],
                ["color", "color", 'rgba(200,8,8,1)'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["style", "left", '271px'],
                ["style", "width", '29px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_AC}": [
                ["style", "top", '34px'],
                ["transform", "rotateZ", '62deg'],
                ["style", "height", '208px'],
                ["style", "opacity", '0'],
                ["style", "left", '383px'],
                ["style", "width", '6px']
            ],
            "${_AnswerDText}": [
                ["style", "top", '293px'],
                ["style", "font-size", '14px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '71px'],
                ["style", "width", '101px']
            ],
            "${_hint4_2x_equals_10}": [
                ["style", "top", '114px'],
                ["style", "opacity", '0'],
                ["style", "left", '317px'],
                ["style", "font-size", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 140000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 17000,
                "Hint 2": 40000,
                "Hint 3": 62000,
                "Hint 4": 85000,
                "Hint 5": 108000,
                "Hint 6": 119000,
                "Hint 7": 125024,
                "Answer Hint": 134000
            },
            timeline: [
                { id: "eid288", tween: [ "style", "${_hint6_5_for_h}", "top", '129px', { fromValue: '310px'}], position: 119000, duration: 2000 },
                { id: "eid354", tween: [ "style", "${_hint7_5_square_root_3}", "top", '196px', { fromValue: '141px'}], position: 131000, duration: 1000 },
                { id: "eid369", tween: [ "style", "${_hint7_5_square_root_3}", "top", '193px', { fromValue: '196px'}], position: 132000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid217", tween: [ "color", "${_hint1}", "color", 'rgba(15,15,15,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(200,8,8,1)'}], position: 59000, duration: 1000 },
                { id: "eid286", tween: [ "style", "${_hint6_5_for_h}", "opacity", '1', { fromValue: '0.000000'}], position: 119000, duration: 500 },
                { id: "eid361", tween: [ "style", "${_choose_b}", "opacity", '1', { fromValue: '0.000000'}], position: 136000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid214", tween: [ "style", "${_hint2_text}", "opacity", '1', { fromValue: '0.000000'}], position: 59000, duration: 1000 },
                { id: "eid246", tween: [ "style", "${_hint2_text}", "opacity", '0', { fromValue: '1'}], position: 85000, duration: 0, easing: "easeInCubic" },
                { id: "eid283", tween: [ "style", "${_hint5}", "opacity", '1', { fromValue: '0.000000'}], position: 117000, duration: 1000 },
                { id: "eid355", tween: [ "style", "${_hint5}", "opacity", '0', { fromValue: '1'}], position: 134000, duration: 0, easing: "easeOutQuad" },
                { id: "eid309", tween: [ "style", "${_hint7_5}", "top", '257px', { fromValue: '129px'}], position: 128000, duration: 2000 },
                { id: "eid233", tween: [ "color", "${_hint1_h}", "color", 'rgba(19,19,19,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(200,8,8,1)'}], position: 78000, duration: 1000 },
                { id: "eid167", tween: [ "style", "${_hint1_h}", "left", '494px', { fromValue: '271px'}], position: 29000, duration: 2000 },
                { id: "eid166", tween: [ "style", "${_hint1_h}", "opacity", '1', { fromValue: '0.000000'}], position: 29000, duration: 1000 },
                { id: "eid358", tween: [ "style", "${_answer_hint_1}", "opacity", '1', { fromValue: '0.000000'}], position: 134000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid198", tween: [ "style", "${_w_red}", "opacity", '1', { fromValue: '0.000000'}], position: 37000, duration: 500, easing: "easeInCubic" },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid162", tween: [ "style", "${_hint1}", "opacity", '1', { fromValue: '0.000000'}], position: 26000, duration: 1000 },
                { id: "eid186", tween: [ "style", "${_hint1_w}", "left", '385px', { fromValue: '304px'}], position: 34500, duration: 1500, easing: "easeOutQuad" },
                { id: "eid249", tween: [ "style", "${_hint4_2x_equals_10}", "opacity", '1', { fromValue: '0.000000'}], position: 92000, duration: 500 },
                { id: "eid273", tween: [ "style", "${_hint4_2x_equals_10}", "font-size", '20px', { fromValue: '20px'}], position: 92000, duration: 0 },
                { id: "eid211", tween: [ "style", "${__90_degree}", "opacity", '1', { fromValue: '0.000000'}], position: 49000, duration: 1000, easing: "easeInCubic" },
                { id: "eid375", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid376", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 127500, duration: 0, easing: "easeOutQuad" },
                { id: "eid371", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid372", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 132500, duration: 0, easing: "easeOutQuad" },
                { id: "eid336", tween: [ "style", "${_hint7_5_square_root_3}", "opacity", '1', { fromValue: '0.000000'}], position: 131000, duration: 500, easing: "easeOutQuad" },
                { id: "eid297", tween: [ "style", "${_hint6_5_for_w}", "opacity", '1', { fromValue: '0.000000'}], position: 122000, duration: 500 },
                { id: "eid300", tween: [ "style", "${_x}", "opacity", '1', { fromValue: '1'}], position: 122000, duration: 0 },
                { id: "eid301", tween: [ "style", "${_x}", "opacity", '0', { fromValue: '1'}], position: 123750, duration: 0 },
                { id: "eid240", tween: [ "color", "${_hint1_w}", "color", 'rgba(17,16,16,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(200,8,8,1)'}], position: 82000, duration: 1000, easing: "easeInCubic" },
                { id: "eid280", tween: [ "style", "${_hint4_solve_for_x}", "opacity", '1', { fromValue: '0.000000'}], position: 104000, duration: 1000 },
                { id: "eid203", tween: [ "style", "${_AC}", "opacity", '0.96', { fromValue: '0.000000'}], position: 46000, duration: 500, easing: "easeInCubic" },
                { id: "eid299", tween: [ "style", "${_hint6_5_for_w}", "top", '205px', { fromValue: '310px'}], position: 122000, duration: 1750 },
                { id: "eid269", tween: [ "style", "${_hint4_2x_equals_10}", "left", '421px', { fromValue: '317px'}], position: 92000, duration: 2000 },
                { id: "eid287", tween: [ "style", "${_hint6_5_for_h}", "left", '509px', { fromValue: '438px'}], position: 119000, duration: 2000 },
                { id: "eid270", tween: [ "style", "${_hint4_2x_equals_10}", "top", '250px', { fromValue: '114px'}], position: 92000, duration: 2000 },
                { id: "eid177", tween: [ "style", "${_hint1_w}", "opacity", '1', { fromValue: '0.000000'}], position: 34000, duration: 500 },
                { id: "eid365", tween: [ "style", "${_hint6__multiplication_symbol}", "opacity", '0', { fromValue: '0'}], position: 123000, duration: 0 },
                { id: "eid366", tween: [ "style", "${_hint6__multiplication_symbol}", "opacity", '1', { fromValue: '0'}], position: 123750, duration: 0 },
                { id: "eid245", tween: [ "style", "${_hint3_equal_square_root_3_}", "opacity", '1', { fromValue: '0.000000'}], position: 82000, duration: 1000, easing: "easeInCubic" },
                { id: "eid199", tween: [ "style", "${_w_red}", "left", '295px', { fromValue: '465px'}], position: 37000, duration: 1500, easing: "easeInCubic" },
                { id: "eid367", tween: [ "style", "${__30_degree}", "opacity", '1', { fromValue: '0.000000'}], position: 50000, duration: 1000, easing: "easeInCubic" },
                { id: "eid353", tween: [ "style", "${_hint7_5_square_root_3}", "left", '-65px', { fromValue: '57px'}], position: 131000, duration: 1000 },
                { id: "eid368", tween: [ "style", "${_hint7_5_square_root_3}", "left", '-47px', { fromValue: '-65px'}], position: 132000, duration: 500 },
                { id: "eid237", tween: [ "style", "${_hint3_2x}", "opacity", '1', { fromValue: '0.000000'}], position: 80000, duration: 1000 },
                { id: "eid275", tween: [ "style", "${_hint3_2x}", "opacity", '1', { fromValue: '1'}], position: 92000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid200", tween: [ "style", "${_w_red}", "width", '186px', { fromValue: '16px'}], position: 37000, duration: 1500, easing: "easeInCubic" },
                { id: "eid187", tween: [ "style", "${_hint1_w}", "top", '200px', { fromValue: '217px'}], position: 34500, duration: 1500, easing: "easeInCubic" },
                { id: "eid173", tween: [ "style", "${_h_red}", "opacity", '1', { fromValue: '0.000000'}], position: 32000, duration: 250 },
                { id: "eid278", tween: [ "style", "${_hint4_x_is_5}", "opacity", '1', { fromValue: '0.000000'}], position: 109000, duration: 1000 },
                { id: "eid307", tween: [ "style", "${_hint7_5}", "opacity", '1', { fromValue: '0.000000'}], position: 128000, duration: 500 },
                { id: "eid168", tween: [ "style", "${_hint1_h}", "top", '129px', { fromValue: '216px'}], position: 29000, duration: 2000 },
                { id: "eid308", tween: [ "style", "${_hint7_5}", "left", '271px', { fromValue: '527px'}], position: 128000, duration: 2000 },
                { id: "eid228", tween: [ "style", "${_hint3_x}", "opacity", '1', { fromValue: '0.000000'}], position: 78000, duration: 1000 },
                { id: "eid289", tween: [ "style", "${_hint3_x}", "opacity", '0', { fromValue: '1'}], position: 121000, duration: 0 },
                { id: "eid373", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid374", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 132500, duration: 0, easing: "easeOutQuad" },
                { id: "eid363", tween: [ "style", "${_hint7_x}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid364", tween: [ "style", "${_hint7_x}", "opacity", '1', { fromValue: '0'}], position: 130000, duration: 0 },
                { id: "eid274", tween: [ "style", "${_hint3_2x}", "font-size", '20px', { fromValue: '20px'}], position: 92000, duration: 0 },
                { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 3000 },
                { id: "eid174", tween: [ "style", "${_h_red}", "height", '99px', { fromValue: '15px'}], position: 32250, duration: 750 },
                { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid298", tween: [ "style", "${_hint6_5_for_w}", "left", '467px', { fromValue: '438px'}], position: 122000, duration: 1750 },
                { id: "eid377", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid378", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint12}', [] ], ""], position: 17000 },
                { id: "eid379", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2a}', [] ], ""], position: 40000 },
                { id: "eid380", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2b}', [] ], ""], position: 52000 },
                { id: "eid381", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 62000 },
                { id: "eid382", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4a}', [] ], ""], position: 85000 },
                { id: "eid383", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4b}', [] ], ""], position: 95000 },
                { id: "eid384", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint52}', [] ], ""], position: 108000 },
                { id: "eid385", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint6}', [] ], ""], position: 119000 },
                { id: "eid386", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint7}', [] ], ""], position: 125024 }            ]
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
