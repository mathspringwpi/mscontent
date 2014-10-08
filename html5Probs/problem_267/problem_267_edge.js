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
                rect: ['15px', '30px','219px','58px','auto', 'auto'],
                text: "Which of the following is equivalent to the expression below?",
                align: "left",
                font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Problem_statement',
                type: 'group',
                rect: ['92', '105','48','19','auto', 'auto'],
                c: [
                {
                    id: 'multiply_sign',
                    type: 'text',
                    rect: ['-20px', '4px','30px','19px','auto', 'auto'],
                    text: "*",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'equal_sign',
                    type: 'text',
                    rect: ['24px', '2px','38px','12px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: '_65',
                    type: 'text',
                    rect: ['0px', '0px','48px','19px','auto', 'auto'],
                    text: "65",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Problem_fraction',
                    type: 'group',
                    rect: ['-46px', '21px','25','19','auto', 'auto'],
                    c: [
                    {
                        id: '_5_denominator',
                        type: 'text',
                        rect: ['1px', '-8px','25px','19px','auto', 'auto'],
                        text: "5",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: '_2_numerator',
                        type: 'text',
                        rect: ['0px', '-32px','23px','19px','auto', 'auto'],
                        text: "2",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: 'fraction_sign',
                        type: 'rect',
                        rect: ['-4px', '-13px','18px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [1,"rgba(0,0,0,1)","solid"]
                    }]
                }]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['48', '396px','auto','auto','auto', 'auto']
            },
            {
                id: 'Answer_C_fraction',
                type: 'group',
                rect: ['75px', '513px','16','12','auto', 'auto'],
                c: [
                {
                    id: '_2',
                    type: 'text',
                    rect: ['4px', '-8px','16px','12px','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['-3px', '-13px','22px','0px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: '_325',
                    type: 'text',
                    rect: ['-3px', '-29px','16px','19px','auto', 'auto'],
                    text: "325",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['72px', '490px','101px','19px','auto', 'auto'],
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['71px', '418px','109px','19px','auto', 'auto'],
                text: "26",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint_1_two_fifth_of_65',
                type: 'text',
                rect: ['32px', '145px','125px','22px','auto', 'auto'],
                text: "\" Two-fifths of 65 \"",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,82,203,1.00)", "normal", "none", "normal"]
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
                id: 'Answer_B_choice',
                type: 'group',
                rect: ['72px', '454px','48','12','auto', 'auto'],
                c: [
                {
                    id: '_Answer_B_Problem_fraction',
                    type: 'group',
                    rect: ['5px', '14px','25','19px','auto', 'auto'],
                    c: [
                    {
                        id: '_26_denominatorCopy',
                        type: 'text',
                        rect: ['-2px', '-8px','25px','19px','auto', 'auto'],
                        text: "26<br>",
                        align: "left",
                        font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: '_1_numeratorCopy',
                        type: 'text',
                        rect: ['0px', '-28px','23px','19px','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: 'fraction_signCopy',
                        type: 'rect',
                        rect: ['-4px', '-13px','14px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [1,"rgba(0,0,0,1)","solid"]
                    }]
                }]
            },
            {
                id: 'Answer_D_choice',
                type: 'group',
                rect: ['77px', '522px','48','12','auto', 'auto'],
                c: [
                {
                    id: '_Answer_B_Problem_fractionCopy',
                    type: 'group',
                    rect: ['2px', '29px','25','19px','auto', 'auto'],
                    c: [
                    {
                        id: '_325_denominatorCopy2',
                        type: 'text',
                        rect: ['-4px', '-8px','25px','19px','auto', 'auto'],
                        text: "325",
                        align: "left",
                        font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: '_2_numeratorCopy2',
                        type: 'text',
                        rect: ['0px', '-28px','23px','19px','auto', 'auto'],
                        text: "2",
                        align: "left",
                        font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: 'fraction_signCopy2',
                        type: 'rect',
                        rect: ['-4px', '-13px','16px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [1,"rgba(0,0,0,1)","solid"]
                    }]
                }]
            },
            {
                id: 'Rectangle_area_',
                type: 'group',
                rect: ['294px', '108px','39','30','auto', 'auto'],
                c: [
                {
                    id: 'Hint1_65',
                    type: 'text',
                    rect: ['11px', '0px','39px','30px','auto', 'auto'],
                    text: "65",
                    font: ['Arial, Helvetica, sans-serif', 24, "rgba(79,77,77,1.00)", "normal", "none", ""]
                },
                {
                    id: 'Hint_1_rectangle',
                    type: 'rect',
                    rect: ['-101px', '-14px','246px','54px','auto', 'auto'],
                    fill: ["rgba(231,223,223,0.00)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'divide_1',
                    type: 'rect',
                    rect: ['-52px', '-13px','0px','53px','auto', 'auto'],
                    fill: ["rgba(231,223,223,0)"],
                    stroke: [1,"rgba(79,77,77,1)","solid"]
                },
                {
                    id: 'two-fifth_piece',
                    type: 'rect',
                    rect: ['-50px', '-13px','47px','52px','auto', 'auto'],
                    fill: ["rgba(233,219,0,1.00)"],
                    stroke: [1,"rgb(79, 77, 77)","solid"]
                },
                {
                    id: 'one-fifth_piece',
                    type: 'rect',
                    rect: ['-100px', '-13px','47px','52px','auto', 'auto'],
                    fill: ["rgba(233,219,0,1.00)"],
                    stroke: [1,"rgb(79, 77, 77)","solid"]
                },
                {
                    id: 'divide_2',
                    type: 'rect',
                    rect: ['-2px', '-14px','0px','53px','auto', 'auto'],
                    fill: ["rgba(231,223,223,0)"],
                    stroke: [1,"rgba(79,77,77,1)","solid"]
                },
                {
                    id: 'divide_3',
                    type: 'rect',
                    rect: ['49px', '-13px','0px','53px','auto', 'auto'],
                    fill: ["rgba(231,223,223,0)"],
                    stroke: [1,"rgba(79,77,77,1)","solid"]
                },
                {
                    id: 'divide_4',
                    type: 'rect',
                    rect: ['97px', '-14px','0px','54px','auto', 'auto'],
                    fill: ["rgba(231,223,223,0)"],
                    stroke: [1,"rgba(79,77,77,1)","solid"]
                },
                {
                    id: '_13_5',
                    type: 'text',
                    rect: ['111px', '3px','24px','20px','auto', 'auto'],
                    text: "13",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 24, "rgba(168,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: '_13_4',
                    type: 'text',
                    rect: ['62px', '3px','28px','23px','auto', 'auto'],
                    text: "13",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 24, "rgba(168,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: '_13_3',
                    type: 'text',
                    rect: ['11px', '3px','24px','30px','auto', 'auto'],
                    text: "13",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 24, "rgba(168,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: '_13__2',
                    type: 'text',
                    rect: ['-40px', '3px','25px','25px','auto', 'auto'],
                    text: "13",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 24, "rgba(168,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: '_13_1',
                    type: 'text',
                    rect: ['-89px', '3px','25px','25px','auto', 'auto'],
                    text: "13<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 24, "rgba(79,77,77,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Hint_2_expression_1',
                type: 'group',
                rect: ['252px', '190px','48','19','auto', 'auto'],
                c: [
                {
                    id: 'multiply_signCopy',
                    type: 'text',
                    rect: ['-20px', '3px','30px','19px','auto', 'auto'],
                    text: "*",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'equal_signCopy',
                    type: 'text',
                    rect: ['24px', '2px','38px','12px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: '_65Copy',
                    type: 'text',
                    rect: ['0px', '0px','48px','19px','auto', 'auto'],
                    text: "65",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Problem_fractionCopy2',
                    type: 'group',
                    rect: ['-46px', '21px','25','19','auto', 'auto'],
                    c: [
                    {
                        id: '_5_denominatorCopy4',
                        type: 'text',
                        rect: ['1px', '-8px','25px','19px','auto', 'auto'],
                        text: "5",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: '_2_numeratorCopy4',
                        type: 'text',
                        rect: ['0px', '-32px','23px','19px','auto', 'auto'],
                        text: "2",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: 'fraction_signCopy4',
                        type: 'rect',
                        rect: ['-4px', '-13px','18px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [1,"rgba(0,0,0,1)","solid"]
                    }]
                }]
            },
            {
                id: 'Hint_2_expression_2',
                type: 'group',
                rect: ['205px', '291px','14','19','auto', 'auto'],
                c: [
                {
                    id: 'fraction_two_fifith',
                    type: 'group',
                    rect: ['2px', '-59px','20','19','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle5',
                        type: 'rect',
                        rect: ['-4px', '18px','18px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [1,"rgb(0, 0, 0)","solid"]
                    },
                    {
                        id: 'hint_2_5',
                        type: 'text',
                        rect: ['1px', '24px','14px','19px','auto', 'auto'],
                        text: "5",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: 'hint_2_2',
                        type: 'text',
                        rect: ['0px', '0px','20px','19px','auto', 'auto'],
                        text: "2",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    }]
                },
                {
                    id: 'multiply_sign_hint_2',
                    type: 'text',
                    rect: ['26px', '-44px','16px','21px','auto', 'auto'],
                    text: "*",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'equal_sign_hint_2',
                    type: 'text',
                    rect: ['76px', '-45px','25px','12px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'fraction_65',
                    type: 'group',
                    rect: ['48px', '-35px','16','12','auto', 'auto'],
                    c: [
                    {
                        id: '_1_hint_2',
                        type: 'text',
                        rect: ['0px', '0px','16px','12px','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: '_65_hint_2',
                        type: 'text',
                        rect: ['-4px', '-23px','36px','12px','auto', 'auto'],
                        text: "65",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: 'Rectangle6',
                        type: 'rect',
                        rect: ['-7px', '-5px','23px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [1,"rgb(0, 0, 0)","solid"]
                    }]
                }]
            },
            {
                id: 'Hint_3_expression',
                type: 'group',
                rect: ['216px', '331px','14','22','auto', 'auto'],
                c: [
                {
                    id: 'fraction_130_over_5',
                    type: 'group',
                    rect: ['-4px', '-20px','14','22','auto', 'auto'],
                    c: [
                    {
                        id: '_5_hint2',
                        type: 'text',
                        rect: ['14px', '0px','14px','22px','auto', 'auto'],
                        text: "5",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,116,177,1)", "normal", "none", "normal"]
                    },
                    {
                        id: 'Rectangle7',
                        type: 'rect',
                        rect: ['-10px', '-4px','54px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [1,"rgb(0, 116, 177)","solid"]
                    },
                    {
                        id: '_2_multiply_65_hint2_2_',
                        type: 'text',
                        rect: ['-4px', '-24px','55px','19px','auto', 'auto'],
                        text: "2 * 65",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,116,177,1)", "normal", "none", "normal"]
                    }]
                },
                {
                    id: 'equal_sign_expression_3',
                    type: 'text',
                    rect: ['55px', '-29px','25px','12px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,116,177,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Choose_A',
                type: 'text',
                rect: ['341px', '333px','99px','27px','auto', 'auto'],
                text: "Choose (A)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,118,14,1.00)", "700", "none", "normal"]
            },
            {
                id: 'Answer_Hint_130_over_5',
                type: 'group',
                rect: ['306', '317px','30','20','auto', 'auto'],
                c: [
                {
                    id: '_5',
                    type: 'text',
                    rect: ['5px', '-6px','30px','20px','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 16, "rgba(0,116,177,1)", "normal", "none", "normal"]
                },
                {
                    id: '_130',
                    type: 'text',
                    rect: ['-5px', '-31px','49px','20px','auto', 'auto'],
                    text: "130",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 16, "rgba(0,116,177,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Rectangle2',
                    type: 'rect',
                    rect: ['-10px', '-10px','38px','0px','auto', 'auto'],
                    fill: ["rgba(0,116,177,1)"],
                    stroke: [1,"rgba(0,116,177,1)","solid"]
                }]
            },
            {
                id: 'Answer_Hint_26',
                type: 'group',
                rect: ['379px', '291px','65','36','auto', 'auto'],
                c: [
                {
                    id: '_26',
                    type: 'text',
                    rect: ['-7px', '10px','39px','29px','auto', 'auto'],
                    text: "26",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,116,177,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Answer_Hint_equals',
                    type: 'text',
                    rect: ['-32px', '11px','56px','30px','auto', 'auto'],
                    text: "= ",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,116,177,1)", "normal", "none", "normal"]
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
                id: 'hint1a',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1a.mp3','media/hint1a.ogg']
            },
            {
                id: 'hint1b',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1b.mp3','media/hint1b.ogg']
            },
            {
                id: 'hint1c',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1c.ogg','media/hint1c.mp3']
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
                id: 'answer1',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer1.mp3','media/answer1.ogg']
            },
            {
                id: 'answer2',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer2.ogg','media/answer2.mp3']
            },
            {
                id: 'answer3',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer3.ogg','media/answer3.mp3']
            },
            {
                id: 'answer4',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer4.mp3','media/answer4.ogg']
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
            "${__5_denominator}": [
                ["style", "left", '1px'],
                ["style", "top", '-8px']
            ],
            "${__5}": [
                ["style", "left", '5px'],
                ["style", "top", '-6px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Choose_A}": [
                ["style", "top", '333px'],
                ["style", "height", '27px'],
                ["style", "font-weight", '700'],
                ["color", "color", 'rgba(0,118,14,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '341px'],
                ["style", "width", '99px']
            ],
            "${__5_denominatorCopy3}": [
                ["style", "left", '1px'],
                ["style", "top", '-8px']
            ],
            "${_fraction_signCopy4}": [
                ["style", "top", '-13px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '-4px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '0px'],
                ["color", "border-color", 'rgba(0,116,177,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "width", '18px']
            ],
            "${_Hint_2_expression_1}": [
                ["style", "top", '190px'],
                ["style", "opacity", '0'],
                ["style", "left", '252px']
            ],
            "${_Answer_Hint_26}": [
                ["style", "opacity", '0']
            ],
            "${__65_hint_2}": [
                ["style", "top", '-23px'],
                ["style", "left", '-4px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${__1_hint_2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${_Hint_1_two_fifth_of_65}": [
                ["style", "top", '145px'],
                ["style", "height", '22px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["color", "color", 'rgba(0,82,203,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '32px'],
                ["style", "width", '125px']
            ],
            "${_equal_sign_hint_2}": [
                ["style", "top", '-45px'],
                ["style", "left", '76px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${__13_3}": [
                ["style", "top", '3px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["style", "left", '11px'],
                ["color", "color", 'rgba(168,0,0,1)']
            ],
            "${__65}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${__5_denominatorCopy4}": [
                ["style", "top", '-8px'],
                ["style", "left", '1px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${_two-fifth_piece}": [
                ["color", "background-color", 'rgba(252,239,37,1.00)'],
                ["style", "top", '-13px'],
                ["style", "height", '52px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-50px'],
                ["style", "width", '47px']
            ],
            "${_one-fifth_piece}": [
                ["style", "height", '52px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(252,239,37,1.00)'],
                ["style", "width", '47px']
            ],
            "${_divide_1}": [
                ["style", "top", '-13px'],
                ["style", "height", '53px'],
                ["style", "opacity", '0'],
                ["style", "left", '-52px'],
                ["style", "width", '0px']
            ],
            "${_fraction_sign}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '-13px'],
                ["style", "border-width", '1px'],
                ["style", "height", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '-4px'],
                ["style", "width", '18px']
            ],
            "${_TutorialText}": [
                ["style", "top", '51px'],
                ["style", "height", '187px'],
                ["style", "opacity", '1'],
                ["style", "left", '260px'],
                ["style", "display", 'none']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${__26}": [
                ["style", "top", '10px'],
                ["style", "height", '29px'],
                ["style", "width", '39px'],
                ["style", "left", '-7px'],
                ["style", "font-size", '16px']
            ],
            "${_divide_4}": [
                ["style", "top", '-14px'],
                ["style", "height", '54px'],
                ["style", "opacity", '0'],
                ["style", "left", '97px'],
                ["style", "width", '0px']
            ],
            "${_Answer_Hint_130_over_5}": [
                ["style", "top", '317px'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_divide_3}": [
                ["style", "top", '-13px'],
                ["style", "height", '53px'],
                ["style", "opacity", '0'],
                ["style", "left", '49px'],
                ["style", "width", '0px']
            ],
            "${__26_denominatorCopy}": [
                ["style", "top", '-8px'],
                ["style", "height", '19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '-2px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '-10px'],
                ["style", "left", '-10px'],
                ["style", "width", '38px']
            ],
            "${_hint_2_2}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(0,116,177,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '16px']
            ],
            "${__13_1}": [
                ["color", "color", 'rgba(168,0,0,1.00)'],
                ["style", "opacity", '0']
            ],
            "${__2_numeratorCopy2}": [
                ["style", "top", '-28px'],
                ["style", "height", '19px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${__13__2}": [
                ["style", "top", '3px'],
                ["style", "opacity", '0'],
                ["style", "left", '-40px'],
                ["color", "color", 'rgba(168,0,0,1)']
            ],
            "${_multiply_signCopy}": [
                ["style", "top", '3px'],
                ["color", "color", 'rgba(0,116,177,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-20px'],
                ["style", "width", '30px']
            ],
            "${_Rectangle7}": [
                ["style", "top", '-4px'],
                ["style", "left", '-10px'],
                ["style", "width", '54px']
            ],
            "${_Question_Text}": [
                ["style", "top", '30px'],
                ["style", "font-size", '16px'],
                ["style", "height", '58px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '15px'],
                ["style", "width", '219px']
            ],
            "${__2_numeratorCopy4}": [
                ["style", "top", '-32px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${__1_numeratorCopy}": [
                ["style", "top", '-28px'],
                ["style", "height", '19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle5}": [
                ["style", "top", '18px'],
                ["color", "border-color", 'rgba(0,116,177,1.00)'],
                ["style", "left", '-4px']
            ],
            "${_Rectangle_area_}": [
                ["style", "left", '294px'],
                ["style", "opacity", '0']
            ],
            "${_multiply_sign}": [
                ["style", "top", '4px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-20px'],
                ["style", "width", '30px']
            ],
            "${_fraction_65}": [
                ["style", "left", '48px'],
                ["style", "top", '-35px']
            ],
            "${__65Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${_Answer_B_choice}": [
                ["style", "top", '454px'],
                ["style", "left", '72px']
            ],
            "${__325}": [
                ["style", "left", '-3px'],
                ["style", "top", '-29px']
            ],
            "${_Answer_Hint_equals}": [
                ["style", "top", '11px'],
                ["style", "height", '30px'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(0,116,177,1)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-32px'],
                ["style", "width", '56px']
            ],
            "${_hint_2_5}": [
                ["style", "top", '24px'],
                ["style", "left", '1px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${_equal_signCopy}": [
                ["style", "top", '2px'],
                ["style", "left", '24px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${_Hint_1_rectangle}": [
                ["color", "background-color", 'rgba(231,223,223,0.00)'],
                ["style", "top", '-14px'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '54px'],
                ["color", "border-color", 'rgba(79,77,77,1.00)'],
                ["style", "left", '-101px'],
                ["style", "width", '246px']
            ],
            "${_Hint_3_expression}": [
                ["style", "top", '331px'],
                ["style", "opacity", '0'],
                ["style", "left", '216px']
            ],
            "${__Answer_B_Problem_fraction}": [
                ["style", "top", '14px'],
                ["style", "left", '5px']
            ],
            "${_fraction_130_over_5}": [
                ["style", "top", '-20px'],
                ["style", "left", '-4px']
            ],
            "${_Answer_D_choice}": [
                ["style", "top", '522px'],
                ["style", "left", '77px']
            ],
            "${__1_numeratorCopy3}": [
                ["style", "top", '-32px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px']
            ],
            "${_equal_sign}": [
                ["style", "left", '24px'],
                ["style", "top", '2px']
            ],
            "${__325_denominatorCopy2}": [
                ["style", "top", '-8px'],
                ["style", "height", '19px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '-4px'],
                ["style", "font-size", '14px']
            ],
            "${_AnswerCText}": [
                ["style", "top", '490px'],
                ["style", "font-size", '14px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '72px'],
                ["style", "width", '101px']
            ],
            "${__2_multiply_65_hint2_2_}": [
                ["style", "top", '-24px'],
                ["style", "left", '-4px'],
                ["style", "width", '55px']
            ],
            "${__Answer_B_Problem_fractionCopy}": [
                ["style", "top", '29px'],
                ["style", "left", '2px']
            ],
            "${_fraction_two_fifith}": [
                ["style", "left", '2px'],
                ["style", "top", '-59px']
            ],
            "${_divide_2}": [
                ["style", "top", '-14px'],
                ["style", "height", '53px'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "width", '0px']
            ],
            "${_Rectangle}": [
                ["style", "height", '0px'],
                ["style", "top", '-13px'],
                ["style", "left", '-3px'],
                ["style", "width", '22px']
            ],
            "${_Hint_2_expression_2}": [
                ["style", "top", '291px'],
                ["style", "opacity", '0'],
                ["style", "left", '205px']
            ],
            "${__130}": [
                ["style", "left", '-5px'],
                ["style", "top", '-31px']
            ],
            "${_Answer_C_fraction}": [
                ["style", "left", '75px'],
                ["style", "top", '513px']
            ],
            "${_equal_sign_expression_3}": [
                ["style", "left", '55px'],
                ["style", "top", '-29px']
            ],
            "${__13_4}": [
                ["color", "color", 'rgba(168,0,0,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '62px'],
                ["style", "top", '3px']
            ],
            "${__2}": [
                ["style", "left", '4px'],
                ["style", "top", '-8px']
            ],
            "${_Hint1_65}": [
                ["style", "top", '0px'],
                ["style", "height", '30px'],
                ["color", "color", 'rgba(79,77,77,1.00)'],
                ["style", "left", '11px'],
                ["style", "width", '39px']
            ],
            "${__2_numerator}": [
                ["style", "top", '-32px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px']
            ],
            "${_fraction_signCopy2}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "top", '-13px'],
                ["style", "border-width", '1px'],
                ["style", "height", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '-4px'],
                ["style", "width", '16px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '-5px'],
                ["color", "border-color", 'rgba(0,116,177,1.00)'],
                ["style", "left", '-7px'],
                ["color", "background-color", 'rgba(0,116,177,1.00)']
            ],
            "${__13_5}": [
                ["color", "color", 'rgba(168,0,0,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '111px'],
                ["style", "top", '3px']
            ],
            "${_AnswerAText}": [
                ["style", "top", '418px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '14px'],
                ["style", "height", '19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '71px'],
                ["style", "width", '109px']
            ],
            "${_Answers}": [
                ["style", "top", '396px'],
                ["style", "left", '24px']
            ],
            "${_multiply_sign_hint_2}": [
                ["color", "color", 'rgba(0,116,177,1.00)'],
                ["style", "top", '-44px'],
                ["style", "left", '26px'],
                ["style", "width", '16px']
            ],
            "${_fraction_signCopy}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "top", '-13px'],
                ["style", "left", '-4px'],
                ["style", "height", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '14px']
            ],
            "${_Problem_fractionCopy2}": [
                ["style", "left", '-46px'],
                ["style", "top", '21px']
            ],
            "${_Problem_fraction}": [
                ["style", "left", '-46px'],
                ["style", "top", '21px']
            ],
            "${__5_hint2}": [
                ["style", "top", '0px'],
                ["style", "left", '14px'],
                ["style", "height", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 124000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 9000,
                "Hint 2": 46000,
                "Hint 3": 74000,
                "Answer Hint": 84000
            },
            timeline: [
                { id: "eid270", tween: [ "style", "${__13_3}", "opacity", '1', { fromValue: '0.000000'}], position: 96000, duration: 1000 },
                { id: "eid242", tween: [ "style", "${__13_1}", "opacity", '1', { fromValue: '0.000000'}], position: 96000, duration: 1000 },
                { id: "eid281", tween: [ "color", "${_Answer_Hint_equals}", "color", 'rgba(0,116,177,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1)'}], position: 119000, duration: 0 },
                { id: "eid203", tween: [ "style", "${_Hint_2_expression_2}", "opacity", '1', { fromValue: '0.000000'}], position: 72000, duration: 1000 },
                { id: "eid280", tween: [ "style", "${_Answer_Hint_130_over_5}", "opacity", '1', { fromValue: '0.000000'}], position: 109000, duration: 1000 },
                { id: "eid216", tween: [ "style", "${_Hint_3_expression}", "opacity", '1', { fromValue: '0.000000'}], position: 82000, duration: 1000 },
                { id: "eid191", tween: [ "style", "${_one-fifth_piece}", "opacity", '1', { fromValue: '0.000000'}], position: 40000, duration: 1000 },
                { id: "eid237", tween: [ "style", "${_Hint1_65}", "top", '-64px', { fromValue: '0px'}], position: 94000, duration: 1000 },
                { id: "eid164", tween: [ "color", "${_Hint_1_two_fifth_of_65}", "color", 'rgba(0,82,203,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,82,203,1.00)'}], position: 16000, duration: 0 },
                { id: "eid185", tween: [ "style", "${_divide_1}", "opacity", '1', { fromValue: '0'}], position: 38000, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid273", tween: [ "style", "${__13_4}", "opacity", '1', { fromValue: '0.000000'}], position: 96000, duration: 1000 },
                { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 34000, duration: 0 },
                { id: "eid186", tween: [ "color", "${_one-fifth_piece}", "background-color", 'rgba(252,239,37,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(252,239,37,1.00)'}], position: 40000, duration: 0 },
                { id: "eid288", tween: [ "style", "${_Answer_Hint_equals}", "opacity", '1', { fromValue: '1'}], position: 119000, duration: 0 },
                { id: "eid175", tween: [ "style", "${_divide_4}", "opacity", '1', { fromValue: '0.000000'}], position: 38000, duration: 1000 },
                { id: "eid232", tween: [ "style", "${_Choose_A}", "opacity", '1', { fromValue: '0.000000'}], position: 123000, duration: 1000 },
                { id: "eid238", tween: [ "style", "${_Hint1_65}", "left", '12px', { fromValue: '11px'}], position: 94000, duration: 1000 },
                { id: "eid196", tween: [ "color", "${__5_denominatorCopy4}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 71000, duration: 0 },
                { id: "eid163", tween: [ "color", "${_Hint_1_rectangle}", "border-color", 'rgba(79,77,77,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(79,77,77,1.00)'}], position: 10000, duration: 0 },
                { id: "eid210", tween: [ "color", "${_multiply_sign_hint_2}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 83000, duration: 0 },
                { id: "eid212", tween: [ "color", "${_hint_2_5}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 83000, duration: 0 },
                { id: "eid206", tween: [ "color", "${_Rectangle6}", "border-color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 83000, duration: 0 },
                { id: "eid168", tween: [ "style", "${_Hint_1_two_fifth_of_65}", "opacity", '1', { fromValue: '0.000000'}], position: 16000, duration: 1000 },
                { id: "eid234", tween: [ "style", "${_two-fifth_piece}", "opacity", '1', { fromValue: '0.000000'}], position: 40000, duration: 1000 },
                { id: "eid171", tween: [ "style", "${_Rectangle_area_}", "opacity", '1', { fromValue: '0.000000'}], position: 25000, duration: 1000 },
                { id: "eid246", tween: [ "style", "${__13__2}", "opacity", '1', { fromValue: '0'}], position: 96000, duration: 1000 },
                { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 27000, duration: 3000 },
                { id: "eid184", tween: [ "style", "${_divide_2}", "opacity", '1', { fromValue: '0'}], position: 38000, duration: 1000 },
                { id: "eid248", tween: [ "color", "${__13_4}", "color", 'rgba(168,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(168,0,0,1)'}], position: 96000, duration: 0 },
                { id: "eid195", tween: [ "color", "${__2_numeratorCopy4}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 71000, duration: 0 },
                { id: "eid199", tween: [ "color", "${_multiply_signCopy}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 71000, duration: 0 },
                { id: "eid197", tween: [ "color", "${_fraction_signCopy4}", "border-color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 71000, duration: 0 },
                { id: "eid209", tween: [ "color", "${_equal_sign_hint_2}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 83000, duration: 0 },
                { id: "eid207", tween: [ "color", "${__65_hint_2}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 83000, duration: 0 },
                { id: "eid239", tween: [ "color", "${__13_1}", "color", 'rgba(168,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(168,0,0,1.00)'}], position: 96000, duration: 0 },
                { id: "eid194", tween: [ "style", "${_Hint_2_expression_1}", "opacity", '1', { fromValue: '0.000000'}], position: 70000, duration: 1000 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid183", tween: [ "style", "${_divide_3}", "opacity", '1', { fromValue: '0.000000'}], position: 38000, duration: 1000 },
                { id: "eid213", tween: [ "color", "${_Rectangle5}", "border-color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 83000, duration: 0 },
                { id: "eid243", tween: [ "color", "${__13__2}", "color", 'rgba(168,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(168,0,0,1)'}], position: 96000, duration: 0 },
                { id: "eid233", tween: [ "color", "${_two-fifth_piece}", "background-color", 'rgba(252,239,37,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(252,239,37,1.00)'}], position: 40000, duration: 0 },
                { id: "eid211", tween: [ "color", "${_hint_2_2}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 83000, duration: 0 },
                { id: "eid198", tween: [ "color", "${__65Copy}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 71000, duration: 0 },
                { id: "eid247", tween: [ "color", "${__13_3}", "color", 'rgba(168,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(168,0,0,1)'}], position: 96000, duration: 0 },
                { id: "eid287", tween: [ "style", "${_Answer_Hint_26}", "opacity", '1', { fromValue: '0.000000'}], position: 119000, duration: 1000 },
                { id: "eid277", tween: [ "style", "${__13_5}", "opacity", '1', { fromValue: '0.000000'}], position: 96000, duration: 1000 },
                { id: "eid249", tween: [ "color", "${__13_5}", "color", 'rgba(168,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(168,0,0,1)'}], position: 96000, duration: 0 },
                { id: "eid208", tween: [ "color", "${__1_hint_2}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 83000, duration: 0 },
                { id: "eid200", tween: [ "color", "${_equal_signCopy}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 71000, duration: 0 },
                { id: "eid289", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid290", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1a}', [] ], ""], position: 9000 },
                { id: "eid291", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1b}', [] ], ""], position: 27000 },
                { id: "eid292", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1c}', [] ], ""], position: 41000 },
                { id: "eid293", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 46000 },
                { id: "eid294", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 74000 },
                { id: "eid295", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer1}', [] ], ""], position: 84000 },
                { id: "eid296", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer2}', [] ], ""], position: 98000 },
                { id: "eid297", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer3}', [] ], ""], position: 111000 },
                { id: "eid298", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer4}', [] ], ""], position: 121000 }            ]
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
