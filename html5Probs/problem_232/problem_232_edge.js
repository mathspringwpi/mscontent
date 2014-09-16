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
                id: 'Question_text',
                type: 'group',
                rect: ['24px', '24px','266px','109px','auto', 'auto'],
                c: [
                {
                    id: 'Text1',
                    type: 'text',
                    rect: ['0px', '0px','77px','22px','auto', 'auto'],
                    text: "In rectangle                                                           ",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Text3',
                    type: 'text',
                    rect: ['121px', '0px','77px','22px','auto', 'auto'],
                    text: ", diagonal",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Text6',
                    type: 'text',
                    rect: ['0px', '22px','142px','38px','auto', 'auto'],
                    text: "makes a 30º with  side ",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Text5',
                    type: 'text',
                    rect: ['186px', '1px','33px','20px','auto', 'auto'],
                    text: "BD",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "italic"]
                },
                {
                    id: 'Text2',
                    type: 'text',
                    rect: ['80px', '0px','59px','22px','auto', 'auto'],
                    text: "ABCD",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "italic"]
                },
                {
                    id: 'Text9',
                    type: 'text',
                    rect: ['186px', '22px','24px','20px','auto', 'auto'],
                    text: "BD",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "italic"]
                },
                {
                    id: 'Text11',
                    type: 'text',
                    rect: ['0px', '45px','227px','30px','auto', 'auto'],
                    text: "what is the area of the rectangle?",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Text10',
                    type: 'text',
                    rect: ['210px', '22px','44px','22px','auto', 'auto'],
                    text: "= 14,",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Text7',
                    type: 'text',
                    rect: ['142px', '22px','33px','19px','auto', 'auto'],
                    text: "AD.",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "italic"]
                },
                {
                    id: 'Text8',
                    type: 'text',
                    rect: ['173px', '22px','16px','20px','auto', 'auto'],
                    text: "If",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['7px', '167px','auto','auto','auto', 'auto']
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['53px', '220px','59px','38px','auto', 'auto'],
                text: "49",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 17, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['71px', '190px','109px','19px','auto', 'auto'],
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
                rect: ['54px', '329px','101px','20px','auto', 'auto'],
                text: "98",
                align: "left",
                font: ['Times New Roman, Times, serif', 17, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Problem_picture',
                type: 'group',
                rect: ['318px', '71px','207px','112px','auto', 'auto'],
                c: [
                {
                    id: 'HTML_232_problem',
                    type: 'image',
                    rect: ['-4px', '-40px','128px','180px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"HTML%20232%20problem.png",'0px','0px']
                },
                {
                    id: 'A',
                    type: 'text',
                    rect: ['-8px', '-50px','44px','30px','auto', 'auto'],
                    text: "A",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "italic"]
                },
                {
                    id: 'B',
                    type: 'text',
                    rect: ['120px', '-48px','24px','19px','auto', 'auto'],
                    text: "B",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "italic"]
                },
                {
                    id: 'C',
                    type: 'text',
                    rect: ['120px', '110px','36px','15px','auto', 'auto'],
                    text: "C",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "italic"]
                },
                {
                    id: 'D',
                    type: 'text',
                    rect: ['-8px', '109px','25px','19px','auto', 'auto'],
                    text: "D",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "italic"]
                },
                {
                    id: '_8',
                    type: 'text',
                    rect: ['60px', '58px','81px','58px','auto', 'auto'],
                    text: "14<br>",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: '_30_degree',
                    type: 'text',
                    rect: ['18px', '56px','25px','14px','auto', 'auto'],
                    text: "30º",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: '_60_degree',
                    type: 'text',
                    rect: ['65px', '-18px','42px','17px','auto', 'auto'],
                    text: "60º<br>",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(200,8,8,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'hint1',
                type: 'text',
                rect: ['205px', '217px','156px','30px','auto', 'auto'],
                text: "Area = h x w",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(200,8,8,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'hint7_x',
                type: 'text',
                rect: ['288px', '218px','66px','44px','auto', 'auto'],
                text: "x ",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(15,15,15,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint7_w',
                type: 'text',
                rect: ['304px', '218px','29px','22px','auto', 'auto'],
                text: "w",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(15,15,15,1)", "normal", "none", "normal"]
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
                rect: ['325px', '44px','6px','15px','auto', 'auto'],
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
                rect: ['398px', '127px','49px','17px','auto', 'auto'],
                text: "=2x",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'hint4_x_is_4',
                type: 'text',
                rect: ['403px', '310px','77px','38px','auto', 'auto'],
                text: "x = 7",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint4_solve_for_x',
                type: 'text',
                rect: ['407px', '283px','109px','30px','auto', 'auto'],
                text: "Solve for x",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint4_2x_equals_8',
                type: 'text',
                rect: ['387px', '126px','75px','30px','auto', 'auto'],
                text: "2x = 14",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'w_red',
                type: 'rect',
                rect: ['444px', '42px','37px','6px','auto', 'auto'],
                fill: ["rgba(200,8,8,1)"],
                stroke: [0,"rgb(240, 9, 9)","solid"]
            },
            {
                id: 'BD',
                type: 'rect',
                rect: ['372px', '30px','6px','180px','auto', 'auto'],
                fill: ["rgba(200,8,8,1)"],
                stroke: [0,"rgb(240, 9, 9)","solid"],
                transform: [[],['33']]
            },
            {
                id: '_90_degree',
                type: 'group',
                rect: ['290px', '146px','3','17','auto', 'auto'],
                transform: [[],['1']],
                c: [
                {
                    id: '_90_angle',
                    type: 'group',
                    rect: ['32px', '-85px','24','3','auto', 'auto'],
                    transform: [[],['180']],
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
                    rect: ['48px', '-77px','41px','16px','auto', 'auto'],
                    text: "90º",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(200,8,8,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'hint2_text',
                type: 'text',
                rect: ['180px', '252px','288px','49px','auto', 'auto'],
                text: "What is the relationship between the sides of a 30-60-90 triangle?",
                font: ['Times New Roman, Times, serif', 20, "rgba(140,4,4,1.00)", "normal", "none", ""]
            },
            {
                id: 'hint3_x',
                type: 'text',
                rect: ['392px', '19px','42px','17px','auto', 'auto'],
                text: "= x",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'hint3_equal_square_root_3_',
                type: 'group',
                rect: ['286px', '91px','39px','24','auto', 'auto'],
                c: [
                {
                    id: 'x',
                    type: 'text',
                    rect: ['-24px', '4px','33px','24px','auto', 'auto'],
                    text: "x<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'equal',
                    type: 'text',
                    rect: ['-7px', '4px','auto','auto','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'hint3_square_root_3_a',
                    type: 'image',
                    rect: ['-55px', '4px','24px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hint3%20square%20root%203%20a.png",'0px','0px']
                }]
            },
            {
                id: 'hint5',
                type: 'text',
                rect: ['158px', '276px','213px','49px','auto', 'auto'],
                text: "Can you find the value of h and w ?",
                font: ['Times New Roman, Times, serif', 20, "rgba(140,4,4,1.00)", "normal", "none", ""]
            },
            {
                id: 'hint6_4_for_w',
                type: 'text',
                rect: ['438px', '310px','59px','38px','auto', 'auto'],
                text: "= 7",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint7_4',
                type: 'text',
                rect: ['527px', '129px','44px','16px','auto', 'auto'],
                text: "7",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint6_4_for_h',
                type: 'text',
                rect: ['438px', '310px','59px','27px','auto', 'auto'],
                text: "7",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint6__multiplication_symbol',
                type: 'text',
                rect: ['257px', '96px','11px','20px','auto', 'auto'],
                text: "*",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'hint7_area',
                type: 'text',
                rect: ['205px', '217px','156px','30px','auto', 'auto'],
                text: "Area =",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(200,8,8,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'hint7_5_square_root_3',
                type: 'group',
                rect: ['57px', '141px','24px','20','auto', 'auto'],
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
                    rect: ['396px', '64px','112px','47px','auto', 'auto'],
                    text: "* 7",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'answer_hint_1',
                type: 'group',
                rect: ['312', '260','24','20','auto', 'auto'],
                c: [
                {
                    id: 'square_root_3',
                    type: 'image',
                    rect: ['0px', '0px','24px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hint3%20square%20root%203%20a.png",'0px','0px']
                },
                {
                    id: 'area_is_25',
                    type: 'text',
                    rect: ['-107px', '-1px','164px','44px','auto', 'auto'],
                    text: "Area = 49",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'choose_b',
                type: 'text',
                rect: ['243px', '313px','142px','24px','auto', 'auto'],
                text: "Choose (C)",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 20, "rgba(140,4,4,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['54px', '189px','37px','17px','auto', 'auto'],
                text: "28",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 17, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'CodeCogsEqn_93',
                type: 'image',
                rect: ['49px', '256px','42px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2893%29.gif",'0px','0px']
            },
            {
                id: 'CodeCogsEqn_94',
                type: 'image',
                rect: ['54px', '293px','42px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2894%29.gif",'0px','0px']
            },
            {
                id: 'Text5Copy',
                display: 'none',
                type: 'text',
                rect: ['204px', '297px','94px','29px','auto', 'auto'],
                text: "Choose (C)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,0,0,1.00)", "normal", "none", "normal"]
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
                ["style", "opacity", '0']
            ],
            "${_area_is_25}": [
                ["style", "top", '-1px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '-107px']
            ],
            "${_Text2}": [
                ["style", "top", '0px'],
                ["style", "font-style", 'italic'],
                ["style", "height", '22px'],
                ["style", "left", '80px'],
                ["style", "width", '59px']
            ],
            "${_x}": [
                ["style", "top", '4px'],
                ["color", "color", 'rgba(140,4,4,1.00)'],
                ["style", "height", '24px'],
                ["style", "opacity", '1'],
                ["style", "left", '-24px'],
                ["style", "width", '33px']
            ],
            "${_hint4_solve_for_x}": [
                ["style", "top", '283px'],
                ["style", "opacity", '0'],
                ["style", "left", '407px'],
                ["style", "font-size", '16px']
            ],
            "${_hint6__multiplication_symbol}": [
                ["style", "top", '96px'],
                ["style", "height", '20px'],
                ["style", "opacity", '0'],
                ["style", "left", '257px'],
                ["style", "width", '11px']
            ],
            "${_equal}": [
                ["style", "top", '4px'],
                ["style", "left", '-7px'],
                ["color", "color", 'rgba(140,4,4,1.00)']
            ],
            "${_hint3_square_root_3_aCopy}": [
                ["style", "top", '63px'],
                ["style", "height", '20px'],
                ["style", "left", '368px'],
                ["style", "width", '24px']
            ],
            "${_hint2_text}": [
                ["style", "top", '252px'],
                ["style", "width", '288px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["color", "color", 'rgba(140,4,4,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '180px'],
                ["style", "font-size", '20px']
            ],
            "${_hint1}": [
                ["style", "top", '217px'],
                ["style", "width", '156px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(200,8,8,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '205px'],
                ["style", "font-size", '20px']
            ],
            "${_Text10}": [
                ["style", "top", '22px'],
                ["style", "font-style", 'normal'],
                ["style", "height", '22px'],
                ["style", "left", '210px'],
                ["style", "width", '44px']
            ],
            "${_CodeCogsEqn_93}": [
                ["style", "left", '49px'],
                ["style", "top", '256px']
            ],
            "${__60_degree}": [
                ["style", "top", '-18px'],
                ["style", "opacity", '0'],
                ["style", "left", '65px']
            ],
            "${_hint7_area}": [
                ["style", "top", '217px'],
                ["style", "font-size", '20px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["color", "color", 'rgba(15,14,14,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '205px'],
                ["style", "width", '156px']
            ],
            "${_Text3}": [
                ["style", "top", '0px'],
                ["style", "left", '121px'],
                ["style", "width", '77px']
            ],
            "${_choose_b}": [
                ["style", "top", '313px'],
                ["style", "opacity", '0'],
                ["style", "left", '243px']
            ],
            "${_BD}": [
                ["style", "top", '30px'],
                ["transform", "rotateZ", '33deg'],
                ["style", "height", '180px'],
                ["style", "opacity", '0'],
                ["style", "left", '372px'],
                ["style", "width", '6px']
            ],
            "${_square_root_3}": [
                ["style", "height", '20px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '24px']
            ],
            "${_Answers}": [
                ["style", "top", '167px'],
                ["style", "left", '7px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_hint3_2x}": [
                ["style", "top", '127px'],
                ["style", "font-size", '20px'],
                ["color", "color", 'rgba(140,4,4,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '398px'],
                ["style", "width", '49px']
            ],
            "${__30_degree}": [
                ["style", "top", '56px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "left", '18px'],
                ["style", "width", '25px']
            ],
            "${__90_degree}": [
                ["style", "top", '146px'],
                ["style", "opacity", '0'],
                ["style", "left", '290px'],
                ["transform", "rotateZ", '1deg']
            ],
            "${_Text6}": [
                ["style", "height", '38px'],
                ["style", "top", '22px'],
                ["style", "left", '0px'],
                ["style", "width", '142px']
            ],
            "${_Text}": [
                ["style", "top", '189px'],
                ["style", "left", '54px'],
                ["style", "font-size", '17px']
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
            "${_Problem_picture}": [
                ["style", "top", '71px'],
                ["style", "height", '112px'],
                ["style", "left", '318px'],
                ["style", "width", '207px']
            ],
            "${_h_red}": [
                ["color", "background-color", 'rgba(200,8,8,1.00)'],
                ["style", "top", '44px'],
                ["color", "border-color", 'rgba(200,8,8,1.00)'],
                ["style", "height", '15px'],
                ["style", "opacity", '0'],
                ["style", "left", '325px'],
                ["style", "width", '6px']
            ],
            "${_hint4_2x_equals_8}": [
                ["style", "top", '126px'],
                ["style", "font-size", '20px'],
                ["style", "opacity", '0'],
                ["style", "left", '399px'],
                ["style", "width", '75px']
            ],
            "${_B}": [
                ["style", "left", '120px'],
                ["style", "top", '-48px']
            ],
            "${_Text4}": [
                ["style", "top", '220px'],
                ["style", "left", '53px'],
                ["style", "font-size", '17px']
            ],
            "${_Rectangle7}": [
                ["style", "top", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_Text5Copy}": [
                ["style", "top", '297px'],
                ["color", "color", 'rgba(255,0,0,1)'],
                ["style", "left", '204px'],
                ["style", "display", 'none']
            ],
            "${_D}": [
                ["style", "height", '19px'],
                ["style", "left", '-8px'],
                ["style", "top", '109px']
            ],
            "${_Text9}": [
                ["style", "font-style", 'italic'],
                ["style", "top", '22px'],
                ["style", "left", '186px'],
                ["style", "width", '24px']
            ],
            "${_hint4_x_is_4}": [
                ["style", "top", '310px'],
                ["style", "opacity", '0'],
                ["style", "left", '403px'],
                ["style", "height", '38px']
            ],
            "${_AnswerEText}": [
                ["style", "top", '329px'],
                ["style", "font-size", '17px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '54px'],
                ["style", "width", '101px']
            ],
            "${_Text7}": [
                ["style", "top", '22px'],
                ["style", "height", '19px'],
                ["style", "left", '142px'],
                ["style", "font-style", 'italic']
            ],
            "${_hint7_x5}": [
                ["style", "height", '47px'],
                ["style", "top", '64px'],
                ["style", "left", '396px'],
                ["style", "width", '112px']
            ],
            "${_TutorialText}": [
                ["style", "top", '51px'],
                ["style", "height", '187px'],
                ["style", "opacity", '1'],
                ["style", "left", '260px'],
                ["style", "display", 'none']
            ],
            "${_hint5}": [
                ["style", "top", '276px'],
                ["style", "width", '213px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(140,4,4,1.00)'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '158px'],
                ["style", "font-size", '20px']
            ],
            "${_Text5}": [
                ["style", "font-style", 'italic'],
                ["style", "top", '1px'],
                ["style", "left", '186px'],
                ["style", "width", '33px']
            ],
            "${_HTML_232_problem}": [
                ["style", "top", '-40px'],
                ["style", "height", '180px'],
                ["style", "left", '-4px'],
                ["style", "width", '128px']
            ],
            "${__90}": [
                ["style", "top", '-77px'],
                ["style", "left", '48px']
            ],
            "${_CodeCogsEqn_94}": [
                ["style", "left", '54px'],
                ["style", "top", '293px']
            ],
            "${_AnswerAText}": [
                ["style", "top", '190px'],
                ["style", "text-align", 'left'],
                ["style", "height", '19px'],
                ["style", "font-size", '12px'],
                ["style", "left", '71px'],
                ["style", "width", '109px']
            ],
            "${_w_red}": [
                ["style", "top", '42px'],
                ["style", "height", '6px'],
                ["style", "opacity", '0'],
                ["style", "left", '325px'],
                ["style", "width", '21px']
            ],
            "${_hint7_5_square_root_3}": [
                ["style", "top", '37px'],
                ["style", "opacity", '0'],
                ["style", "left", '-128px']
            ],
            "${_Text8}": [
                ["style", "top", '22px'],
                ["style", "font-style", 'normal'],
                ["style", "height", '20px'],
                ["style", "left", '173px'],
                ["style", "width", '16px']
            ],
            "${__90_angle}": [
                ["style", "top", '-85px'],
                ["style", "left", '32px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_hint3_square_root_3_a}": [
                ["style", "height", '20px'],
                ["style", "top", '4px'],
                ["style", "left", '-55px'],
                ["style", "width", '24px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Text1}": [
                ["style", "top", '0px'],
                ["style", "font-size", '16px'],
                ["style", "height", '22px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '0px'],
                ["style", "width", '77px']
            ],
            "${_hint3_equal_square_root_3_}": [
                ["style", "top", '91px'],
                ["style", "opacity", '0'],
                ["style", "left", '286px'],
                ["style", "width", '39px']
            ],
            "${_Text11}": [
                ["style", "top", '45px'],
                ["style", "left", '0px'],
                ["style", "width", '227px']
            ],
            "${_hint6_4_for_w}": [
                ["style", "top", '310px'],
                ["style", "height", '38px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '438px'],
                ["style", "opacity", '0']
            ],
            "${_hint1_w}": [
                ["style", "top", '217px'],
                ["color", "color", 'rgba(200,8,8,1.00)'],
                ["style", "height", '19px'],
                ["style", "opacity", '0'],
                ["style", "left", '304px'],
                ["style", "width", '37px']
            ],
            "${_C}": [
                ["style", "top", '110px'],
                ["style", "left", '120px']
            ],
            "${_Rectangle6}": [
                ["style", "height", '3px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '17px']
            ],
            "${_hint7_w}": [
                ["style", "top", '218px'],
                ["style", "opacity", '0'],
                ["style", "left", '304px']
            ],
            "${_Question_text}": [
                ["style", "height", '109px'],
                ["style", "top", '24px'],
                ["style", "left", '24px'],
                ["style", "width", '266px']
            ],
            "${_hint7_x}": [
                ["style", "top", '218px'],
                ["style", "height", '44px'],
                ["style", "opacity", '0'],
                ["style", "left", '288px'],
                ["style", "width", '66px']
            ],
            "${__8}": [
                ["style", "top", '58px'],
                ["style", "height", '58px'],
                ["style", "font-style", 'normal'],
                ["style", "left", '60px'],
                ["style", "width", '81px']
            ],
            "${_A}": [
                ["style", "font-style", 'italic'],
                ["style", "top", '-50px'],
                ["style", "left", '-8px'],
                ["style", "font-size", '16px']
            ],
            "${_hint3_x}": [
                ["style", "top", '19px'],
                ["color", "color", 'rgba(140,4,4,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '392px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif']
            ],
            "${_hint6_4_for_h}": [
                ["style", "top", '310px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '438px'],
                ["style", "opacity", '0.000000']
            ],
            "${_hint7_4}": [
                ["style", "top", '20px'],
                ["style", "opacity", '0'],
                ["style", "left", '391px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 190000,
            autoPlay: true,
            labels: {
                "Read Question": 3000,
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
                { id: "eid354", tween: [ "style", "${_hint7_5_square_root_3}", "top", '155px', { fromValue: '37px'}], position: 131000, duration: 2000, easing: "easeOutQuad" },
                { id: "eid217", tween: [ "color", "${_hint1}", "color", 'rgba(15,15,15,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(200,8,8,1)'}], position: 59000, duration: 1000 },
                { id: "eid214", tween: [ "style", "${_hint2_text}", "opacity", '1', { fromValue: '0.000000'}], position: 59000, duration: 1000 },
                { id: "eid246", tween: [ "style", "${_hint2_text}", "opacity", '0', { fromValue: '1'}], position: 85000, duration: 0, easing: "easeInCubic" },
                { id: "eid308", tween: [ "style", "${_hint7_4}", "left", '268px', { fromValue: '391px'}], position: 128000, duration: 2000 },
                { id: "eid283", tween: [ "style", "${_hint5}", "opacity", '1', { fromValue: '0.000000'}], position: 117000, duration: 1000 },
                { id: "eid355", tween: [ "style", "${_hint5}", "opacity", '0', { fromValue: '1'}], position: 134000, duration: 0, easing: "easeOutQuad" },
                { id: "eid203", tween: [ "style", "${_BD}", "opacity", '0.96', { fromValue: '0.000000'}], position: 46000, duration: 500, easing: "easeInCubic" },
                { id: "eid288", tween: [ "style", "${_hint6_4_for_w}", "top", '19px', { fromValue: '310px'}], position: 119000, duration: 2000 },
                { id: "eid167", tween: [ "style", "${_hint1_h}", "left", '292px', { fromValue: '271px'}], position: 25000, duration: 2000 },
                { id: "eid166", tween: [ "style", "${_hint1_h}", "opacity", '1', { fromValue: '0.000000'}], position: 25000, duration: 1000 },
                { id: "eid358", tween: [ "style", "${_answer_hint_1}", "opacity", '1', { fromValue: '0.000000'}], position: 134000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid198", tween: [ "style", "${_w_red}", "opacity", '1', { fromValue: '0.000000'}], position: 34000, duration: 500, easing: "easeInCubic" },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid378", tween: [ "style", "${_hint4_2x_equals_8}", "left", '399px', { fromValue: '399px'}], position: 92000, duration: 0 },
                { id: "eid379", tween: [ "style", "${_hint4_2x_equals_8}", "left", '396px', { fromValue: '396px'}], position: 93000, duration: 0 },
                { id: "eid162", tween: [ "style", "${_hint1}", "opacity", '1', { fromValue: '0.000000'}], position: 22000, duration: 1000 },
                { id: "eid315", tween: [ "style", "${_hint1}", "opacity", '0', { fromValue: '1'}], position: 130000, duration: 0 },
                { id: "eid298", tween: [ "style", "${_hint6_4_for_h}", "left", '268px', { fromValue: '438px'}], position: 122000, duration: 1750 },
                { id: "eid249", tween: [ "style", "${_hint4_2x_equals_8}", "opacity", '1', { fromValue: '0.000000'}], position: 92000, duration: 1000 },
                { id: "eid186", tween: [ "style", "${_hint1_w}", "left", '368px', { fromValue: '304px'}], position: 31500, duration: 1500, easing: "easeOutQuad" },
                { id: "eid299", tween: [ "style", "${_hint6_4_for_h}", "top", '95px', { fromValue: '310px'}], position: 122000, duration: 1750 },
                { id: "eid373", tween: [ "color", "${_hint1_h}", "color", 'rgba(26,24,24,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(200,8,8,1)'}], position: 81000, duration: 1000 },
                { id: "eid211", tween: [ "style", "${__90_degree}", "opacity", '1', { fromValue: '0.000000'}], position: 49000, duration: 1000, easing: "easeInCubic" },
                { id: "eid300", tween: [ "style", "${_x}", "opacity", '1', { fromValue: '1'}], position: 122000, duration: 0 },
                { id: "eid301", tween: [ "style", "${_x}", "opacity", '0', { fromValue: '1'}], position: 123750, duration: 0 },
                { id: "eid336", tween: [ "style", "${_hint7_5_square_root_3}", "opacity", '1', { fromValue: '0.000000'}], position: 131000, duration: 500, easing: "easeOutQuad" },
                { id: "eid362", tween: [ "style", "${_hint7_w}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid340", tween: [ "style", "${_hint7_w}", "opacity", '1', { fromValue: '0'}], position: 130000, duration: 0 },
                { id: "eid339", tween: [ "style", "${_hint7_w}", "opacity", '0', { fromValue: '1'}], position: 132500, duration: 0 },
                { id: "eid237", tween: [ "style", "${_hint3_2x}", "opacity", '1', { fromValue: '0.000000'}], position: 78000, duration: 1000 },
                { id: "eid275", tween: [ "style", "${_hint3_2x}", "opacity", '1', { fromValue: '1'}], position: 92000, duration: 0 },
                { id: "eid274", tween: [ "style", "${_hint3_2x}", "font-size", '20px', { fromValue: '20px'}], position: 92000, duration: 0 },
                { id: "eid280", tween: [ "style", "${_hint4_solve_for_x}", "opacity", '1', { fromValue: '0.000000'}], position: 95000, duration: 1000 },
                { id: "eid380", tween: [ "style", "${_Text5Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid381", tween: [ "style", "${_Text5Copy}", "display", 'block', { fromValue: 'none'}], position: 137000, duration: 0, easing: "easeOutQuad" },
                { id: "eid318", tween: [ "style", "${_hint7_area}", "opacity", '0', { fromValue: '0'}], position: 129000, duration: 0 },
                { id: "eid316", tween: [ "style", "${_hint7_area}", "opacity", '1', { fromValue: '0'}], position: 130000, duration: 0 },
                { id: "eid314", tween: [ "style", "${_hint7_area}", "opacity", '1', { fromValue: '1'}], position: 189000, duration: 0 },
                { id: "eid168", tween: [ "style", "${_hint1_h}", "top", '94px', { fromValue: '216px'}], position: 25000, duration: 2000 },
                { id: "eid369", tween: [ "color", "${_hint1_w}", "color", 'rgba(23,22,22,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(200,8,8,1)'}], position: 75000, duration: 1000, easing: "easeInCubic" },
                { id: "eid228", tween: [ "style", "${_hint3_x}", "opacity", '1', { fromValue: '0.000000'}], position: 75000, duration: 1000 },
                { id: "eid289", tween: [ "style", "${_hint3_x}", "opacity", '0', { fromValue: '1'}], position: 121000, duration: 0 },
                { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 3000 },
                { id: "eid365", tween: [ "style", "${_hint6__multiplication_symbol}", "opacity", '0', { fromValue: '0'}], position: 123000, duration: 0 },
                { id: "eid366", tween: [ "style", "${_hint6__multiplication_symbol}", "opacity", '1', { fromValue: '0'}], position: 123750, duration: 0 },
                { id: "eid273", tween: [ "style", "${_hint4_2x_equals_8}", "font-size", '20px', { fromValue: '20px'}], position: 92000, duration: 0 },
                { id: "eid377", tween: [ "style", "${_hint4_2x_equals_8}", "top", '245px', { fromValue: '126px'}], position: 92000, duration: 1000 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid353", tween: [ "style", "${_hint7_5_square_root_3}", "left", '-64px', { fromValue: '-128px'}], position: 131000, duration: 2000, easing: "easeOutQuad" },
                { id: "eid205", tween: [ "color", "${__30_degree}", "color", 'rgba(200,8,8,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 47000, duration: 1000, easing: "easeInCubic" },
                { id: "eid311", tween: [ "color", "${_hint7_area}", "color", 'rgba(15,15,15,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(15,14,14,1.00)'}], position: 189000, duration: 1000 },
                { id: "eid200", tween: [ "style", "${_w_red}", "width", '100px', { fromValue: '21px'}], position: 34000, duration: 1500, easing: "easeInCubic" },
                { id: "eid187", tween: [ "style", "${_hint1_w}", "top", '17px', { fromValue: '217px'}], position: 31500, duration: 1500, easing: "easeInCubic" },
                { id: "eid173", tween: [ "style", "${_h_red}", "opacity", '1', { fromValue: '0.000000'}], position: 28000, duration: 250 },
                { id: "eid307", tween: [ "style", "${_hint7_4}", "opacity", '1', { fromValue: '0.000000'}], position: 128000, duration: 500 },
                { id: "eid309", tween: [ "style", "${_hint7_4}", "top", '219px', { fromValue: '20px'}], position: 128000, duration: 2000 },
                { id: "eid208", tween: [ "style", "${__60_degree}", "opacity", '1', { fromValue: '0.000000'}], position: 48000, duration: 1000, easing: "easeInCubic" },
                { id: "eid245", tween: [ "style", "${_hint3_equal_square_root_3_}", "opacity", '0.98', { fromValue: '0.000000'}], position: 81000, duration: 1000, easing: "easeInCubic" },
                { id: "eid297", tween: [ "style", "${_hint6_4_for_h}", "opacity", '1', { fromValue: '0.000000'}], position: 122000, duration: 500 },
                { id: "eid177", tween: [ "style", "${_hint1_w}", "opacity", '1', { fromValue: '0.000000'}], position: 31000, duration: 500 },
                { id: "eid363", tween: [ "style", "${_hint7_x}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid364", tween: [ "style", "${_hint7_x}", "opacity", '1', { fromValue: '0'}], position: 130000, duration: 0 },
                { id: "eid287", tween: [ "style", "${_hint6_4_for_w}", "left", '390px', { fromValue: '438px'}], position: 119000, duration: 2000 },
                { id: "eid286", tween: [ "style", "${_hint6_4_for_w}", "opacity", '1', { fromValue: '0.000000'}], position: 119000, duration: 500 },
                { id: "eid174", tween: [ "style", "${_h_red}", "height", '152px', { fromValue: '15px'}], position: 28250, duration: 750 },
                { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid278", tween: [ "style", "${_hint4_x_is_4}", "opacity", '1', { fromValue: '0.000000'}], position: 109000, duration: 1000 },
                { id: "eid382", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 3000 },
                { id: "eid383", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint12}', [] ], ""], position: 17000 },
                { id: "eid384", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2a}', [] ], ""], position: 40000 },
                { id: "eid385", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2b}', [] ], ""], position: 52000 },
                { id: "eid386", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 62000 },
                { id: "eid387", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4a}', [] ], ""], position: 85000 },
                { id: "eid389", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint52}', [] ], ""], position: 108000 },
                { id: "eid390", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint7}', [] ], ""], position: 125024 }            ]
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
