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
                    rect: ['-20px', '-1px','30px','19px','auto', 'auto'],
                    text: "x",
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
                    id: '_39',
                    type: 'text',
                    rect: ['0px', '0px','48px','19px','auto', 'auto'],
                    text: "39",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Problem_fraction',
                    type: 'group',
                    rect: ['-46px', '21px','25','19','auto', 'auto'],
                    c: [
                    {
                        id: '_4_denominator',
                        type: 'text',
                        rect: ['1px', '-8px','25px','19px','auto', 'auto'],
                        text: "4",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: '_1_numerator',
                        type: 'text',
                        rect: ['0px', '-32px','23px','19px','auto', 'auto'],
                        text: "1",
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
                rect: ['32px', '378px','auto','auto','auto', 'auto']
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['80px', '472px','101px','19px','auto', 'auto'],
                text: "39 ÷ 4",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['79px', '400px','109px','19px','auto', 'auto'],
                text: "4 ÷ 39",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint_1_one_fourth_of_39',
                type: 'text',
                rect: ['32px', '145px','125px','22px','auto', 'auto'],
                text: "\" One-fourth of 39 \"",
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
                rect: ['80px', '436px','48','12','auto', 'auto'],
                c: [
                {
                    id: '_Answer_B_Problem_fraction',
                    type: 'group',
                    rect: ['37px', '20px','25','19px','auto', 'auto'],
                    c: [
                    {
                        id: '_4_denominatorCopy',
                        type: 'text',
                        rect: ['1px', '-8px','25px','19px','auto', 'auto'],
                        text: "4",
                        align: "left",
                        font: ['Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: '_1_numeratorCopy',
                        type: 'text',
                        rect: ['0px', '-28px','23px','19px','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: 'fraction_signCopy',
                        type: 'rect',
                        rect: ['-4px', '-13px','12px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [1,"rgba(0,0,0,1)","solid"]
                    }]
                },
                {
                    id: '_39_divided',
                    type: 'text',
                    rect: ['0px', '0px','48px','12px','auto', 'auto'],
                    text: "39  ÷",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Answer_D_choice',
                type: 'group',
                rect: ['85px', '504px','48','12','auto', 'auto'],
                c: [
                {
                    id: '_Answer_B_Problem_fractionCopy',
                    type: 'group',
                    rect: ['-1px', '25px','25','19px','auto', 'auto'],
                    c: [
                    {
                        id: '_4_denominatorCopy2',
                        type: 'text',
                        rect: ['1px', '-8px','25px','19px','auto', 'auto'],
                        text: "4",
                        align: "left",
                        font: ['Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: '_1_numeratorCopy2',
                        type: 'text',
                        rect: ['0px', '-28px','23px','19px','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: 'fraction_signCopy2',
                        type: 'rect',
                        rect: ['-4px', '-13px','12px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [1,"rgba(0,0,0,1)","solid"]
                    }]
                },
                {
                    id: '_39_dividedCopy',
                    type: 'text',
                    rect: ['30px', '8px','48px','12px','auto', 'auto'],
                    text: "39",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'divide_sign',
                    type: 'text',
                    rect: ['15px', '7px','13px','29px','auto', 'auto'],
                    text: "÷",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Rectangle_area_',
                type: 'group',
                rect: ['294px', '108px','39','30','auto', 'auto'],
                c: [
                {
                    id: 'Hint_1_rectangle',
                    type: 'rect',
                    rect: ['-101px', '-14px','197px','53px','auto', 'auto'],
                    fill: ["rgba(231,223,223,0.00)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'divide_1',
                    type: 'rect',
                    rect: ['-52px', '-13px','0px','52px','auto', 'auto'],
                    fill: ["rgba(231,223,223,0)"],
                    stroke: [1,"rgba(79,77,77,1)","solid"]
                },
                {
                    id: 'one-forth_piece',
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
                }]
            },
            {
                id: 'Hint_2_expression_1',
                type: 'group',
                rect: ['319px', '190px','48','19','auto', 'auto'],
                c: [
                {
                    id: 'multiply_signCopy',
                    type: 'text',
                    rect: ['-20px', '-1px','30px','19px','auto', 'auto'],
                    text: "x",
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
                    id: '_39Copy',
                    type: 'text',
                    rect: ['0px', '0px','48px','19px','auto', 'auto'],
                    text: "39<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Problem_fractionCopy2',
                    type: 'group',
                    rect: ['-46px', '21px','25','19','auto', 'auto'],
                    c: [
                    {
                        id: '_4_denominatorCopy4',
                        type: 'text',
                        rect: ['1px', '-8px','25px','19px','auto', 'auto'],
                        text: "4",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: '_1_numeratorCopy4',
                        type: 'text',
                        rect: ['0px', '-32px','23px','19px','auto', 'auto'],
                        text: "1",
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
                rect: ['271px', '296px','14','19','auto', 'auto'],
                c: [
                {
                    id: 'fraction_one_fifith',
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
                        id: 'hint_2_4',
                        type: 'text',
                        rect: ['1px', '24px','14px','19px','auto', 'auto'],
                        text: "4",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    },
                    {
                        id: 'hint_2_1',
                        type: 'text',
                        rect: ['0px', '0px','20px','19px','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                    }]
                },
                {
                    id: 'multiply_sign_hint_2',
                    type: 'text',
                    rect: ['25px', '-50px','16px','21px','auto', 'auto'],
                    text: "x",
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
                    id: 'fraction_39',
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
                        id: '_39_hint_2',
                        type: 'text',
                        rect: ['-4px', '-23px','36px','12px','auto', 'auto'],
                        text: "39",
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
                id: 'Hint2_expression_3',
                type: 'group',
                rect: ['278px', '337px','14','22','auto', 'auto'],
                c: [
                {
                    id: 'fraction_39_over_4',
                    type: 'group',
                    rect: ['-4px', '-20px','14','22','auto', 'auto'],
                    c: [
                    {
                        id: '_4_hint2',
                        type: 'text',
                        rect: ['0px', '0px','14px','22px','auto', 'auto'],
                        text: "4",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,116,177,1)", "normal", "none", "normal"]
                    },
                    {
                        id: 'Rectangle7',
                        type: 'rect',
                        rect: ['-10px', '-4px','28px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [1,"rgb(0, 116, 177)","solid"]
                    },
                    {
                        id: '_39_hint2_2_',
                        type: 'text',
                        rect: ['-4px', '-24px','30px','19px','auto', 'auto'],
                        text: "39",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,116,177,1)", "normal", "none", "normal"]
                    }]
                },
                {
                    id: 'equal_sign_expression_3',
                    type: 'text',
                    rect: ['27px', '-28px','25px','12px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,116,177,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Answer_hint',
                type: 'text',
                rect: ['329px', '305px','101px','20px','auto', 'auto'],
                text: "39 ÷ 4",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 16, "rgba(0,116,177,1)", "normal", "none", "normal"]
            },
            {
                id: 'Choose_C',
                type: 'text',
                rect: ['307px', '378px','101px','30px','auto', 'auto'],
                text: "Choose (C)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,118,14,1.00)", "700", "none", "normal"]
            },
            {
                id: 'Hint_1_39',
                type: 'text',
                rect: ['300px', '109px','58px','54px','auto', 'auto'],
                text: "39",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(79,77,77,1)", "normal", "none", "normal"]
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
            "${_Answer_hint}": [
                ["style", "top", '305px'],
                ["style", "height", '20px'],
                ["style", "opacity", '0'],
                ["style", "left", '329px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif']
            ],
            "${_QuestionSound_Container}": [
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${__5_denominatorCopy3}": [
                ["style", "left", '1px'],
                ["style", "top", '-8px']
            ],
            "${_fraction_signCopy4}": [
                ["style", "top", '-13px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(0,116,177,1.00)'],
                ["style", "height", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '-4px'],
                ["style", "width", '18px']
            ],
            "${__1_numerator}": [
                ["style", "top", '-32px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px']
            ],
            "${_Hint_2_expression_1}": [
                ["style", "top", '190px'],
                ["style", "opacity", '0.01'],
                ["style", "left", '319px']
            ],
            "${__1_numeratorCopy2}": [
                ["style", "top", '-28px'],
                ["style", "height", '19px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '12px']
            ],
            "${__4_denominatorCopy2}": [
                ["style", "top", '-8px'],
                ["style", "height", '19px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '1px'],
                ["style", "font-size", '12px']
            ],
            "${__Answer_B_Problem_fraction}": [
                ["style", "top", '20px'],
                ["style", "left", '37px']
            ],
            "${__1_hint_2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${__39_hint_2}": [
                ["style", "top", '-23px'],
                ["style", "left", '-4px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${_multiply_sign_hint_2}": [
                ["style", "top", '-50px'],
                ["color", "color", 'rgba(0,116,177,1.00)'],
                ["style", "left", '25px'],
                ["style", "width", '16px']
            ],
            "${_fraction_signCopy}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "top", '-13px'],
                ["style", "border-width", '1px'],
                ["style", "height", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '-4px'],
                ["style", "width", '12px']
            ],
            "${_Hint_1_39}": [
                ["style", "top", '109px'],
                ["style", "opacity", '0'],
                ["style", "left", '300px']
            ],
            "${__39Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${_divide_1}": [
                ["style", "top", '-13px'],
                ["style", "height", '52px'],
                ["style", "opacity", '0'],
                ["style", "left", '-52px'],
                ["style", "width", '0px']
            ],
            "${_fraction_sign}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '-13px'],
                ["style", "left", '-4px'],
                ["style", "height", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '18px']
            ],
            "${_Answers}": [
                ["style", "top", '378px'],
                ["style", "left", '32px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_divide_4}": [
                ["style", "top", '-14px'],
                ["style", "height", '54px'],
                ["style", "opacity", '0'],
                ["style", "left", '97px'],
                ["style", "width", '0px']
            ],
            "${_Hint2_expression_3}": [
                ["style", "top", '337px'],
                ["style", "opacity", '0'],
                ["style", "left", '278px']
            ],
            "${__39_dividedCopy}": [
                ["style", "top", '8px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '30px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '600px']
            ],
            "${_divide_3}": [
                ["style", "top", '-13px'],
                ["style", "height", '53px'],
                ["style", "opacity", '0'],
                ["style", "left", '49px'],
                ["style", "width", '0px']
            ],
            "${__4_denominator}": [
                ["style", "left", '1px'],
                ["style", "top", '-8px']
            ],
            "${_Choose_C}": [
                ["style", "top", '378px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(0,118,14,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '307px'],
                ["style", "width", '101px']
            ],
            "${__4_denominatorCopy4}": [
                ["style", "top", '-8px'],
                ["style", "left", '1px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${_multiply_signCopy}": [
                ["style", "top", '-1px'],
                ["color", "color", 'rgba(0,116,177,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-20px'],
                ["style", "width", '30px']
            ],
            "${_Rectangle7}": [
                ["style", "left", '-10px'],
                ["style", "top", '-4px']
            ],
            "${_Question_Text}": [
                ["style", "top", '30px'],
                ["style", "width", '219px'],
                ["style", "height", '58px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '15px'],
                ["style", "font-size", '16px']
            ],
            "${__1_numeratorCopy4}": [
                ["style", "top", '-32px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${__39_divided}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '0px']
            ],
            "${_multiply_sign}": [
                ["style", "top", '-1px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-20px'],
                ["style", "width", '30px']
            ],
            "${_fraction_39}": [
                ["style", "left", '48px'],
                ["style", "top", '-35px']
            ],
            "${_Answer_B_choice}": [
                ["style", "top", '436px'],
                ["style", "left", '80px']
            ],
            "${__39}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint_1_one_fourth_of_39}": [
                ["style", "top", '145px'],
                ["style", "height", '22px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(0,82,203,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '32px'],
                ["style", "width", '125px']
            ],
            "${_fraction_one_fifith}": [
                ["style", "left", '2px'],
                ["style", "top", '-59px']
            ],
            "${_divide_sign}": [
                ["style", "top", '7px'],
                ["style", "left", '15px'],
                ["style", "width", '13px']
            ],
            "${_one-forth_piece}": [
                ["style", "height", '52px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(252,239,37,1.00)'],
                ["style", "width", '47px']
            ],
            "${__4_hint2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '22px']
            ],
            "${_Hint_1_rectangle}": [
                ["color", "background-color", 'rgba(231,223,223,0.00)'],
                ["style", "top", '-14px'],
                ["style", "left", '-101px'],
                ["color", "border-color", 'rgba(79,77,77,1.00)'],
                ["style", "height", '53px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '197px']
            ],
            "${_Rectangle5}": [
                ["style", "top", '18px'],
                ["color", "border-color", 'rgba(0,116,177,1.00)'],
                ["style", "left", '-4px']
            ],
            "${__1_numeratorCopy3}": [
                ["style", "top", '-32px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px']
            ],
            "${_Hint_2_expression_2}": [
                ["style", "top", '296px'],
                ["style", "opacity", '0'],
                ["style", "left", '271px']
            ],
            "${__4_denominatorCopy}": [
                ["style", "top", '-8px'],
                ["style", "height", '19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '1px'],
                ["style", "font-size", '12px']
            ],
            "${_equal_sign_hint_2}": [
                ["style", "top", '-45px'],
                ["style", "left", '76px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${_divide_2}": [
                ["style", "top", '-14px'],
                ["style", "height", '53px'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "width", '0px']
            ],
            "${_AnswerCText}": [
                ["style", "top", '472px'],
                ["style", "width", '101px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '80px'],
                ["style", "font-size", '14px']
            ],
            "${_fraction_signCopy2}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "top", '-13px'],
                ["style", "left", '-4px'],
                ["style", "height", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '12px']
            ],
            "${_hint_2_1}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(0,116,177,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_equal_sign_expression_3}": [
                ["style", "left", '27px'],
                ["style", "top", '-28px']
            ],
            "${_equal_sign}": [
                ["style", "left", '24px'],
                ["style", "top", '2px']
            ],
            "${__1_numeratorCopy}": [
                ["style", "top", '-28px'],
                ["style", "height", '19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '12px']
            ],
            "${_hint_2_4}": [
                ["style", "top", '24px'],
                ["style", "left", '1px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${_fraction_39_over_4}": [
                ["style", "top", '-20px'],
                ["style", "left", '-4px']
            ],
            "${_Answer_D_choice}": [
                ["style", "top", '504px'],
                ["style", "left", '85px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '-5px'],
                ["color", "border-color", 'rgba(0,116,177,1.00)'],
                ["style", "left", '-7px'],
                ["color", "background-color", 'rgba(0,116,177,1.00)']
            ],
            "${_equal_signCopy}": [
                ["style", "top", '2px'],
                ["style", "left", '24px'],
                ["color", "color", 'rgba(0,116,177,1.00)']
            ],
            "${__Answer_B_Problem_fractionCopy}": [
                ["style", "top", '25px'],
                ["style", "left", '-1px']
            ],
            "${__39_hint2_2_}": [
                ["style", "left", '-4px'],
                ["style", "top", '-24px']
            ],
            "${_TutorialText}": [
                ["style", "top", '51px'],
                ["style", "height", '187px'],
                ["style", "opacity", '1'],
                ["style", "left", '260px'],
                ["style", "display", 'none']
            ],
            "${_AnswerAText}": [
                ["style", "top", '400px'],
                ["style", "text-align", 'left'],
                ["style", "width", '109px'],
                ["style", "height", '19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '79px'],
                ["style", "font-size", '14px']
            ],
            "${_Problem_fractionCopy2}": [
                ["style", "left", '-46px'],
                ["style", "top", '21px']
            ],
            "${_Problem_fraction}": [
                ["style", "left", '-46px'],
                ["style", "top", '21px']
            ],
            "${_Rectangle_area_}": [
                ["style", "left", '294px'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 76000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 8000,
                "Hint 2": 41000,
                "Answer Hint": 62000
            },
            timeline: [
                { id: "eid212", tween: [ "color", "${_hint_2_4}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 59000, duration: 0 },
                { id: "eid203", tween: [ "style", "${_Hint_2_expression_2}", "opacity", '1', { fromValue: '0.000000'}], position: 58000, duration: 1000 },
                { id: "eid238", tween: [ "style", "${_Hint_1_39}", "opacity", '1', { fromValue: '0.000000'}], position: 25000, duration: 1000 },
                { id: "eid198", tween: [ "color", "${__39Copy}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 57000, duration: 0 },
                { id: "eid211", tween: [ "color", "${_hint_2_1}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 59000, duration: 0 },
                { id: "eid185", tween: [ "style", "${_divide_1}", "opacity", '1', { fromValue: '0'}], position: 36000, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid207", tween: [ "color", "${__39_hint_2}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 59000, duration: 0 },
                { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid232", tween: [ "style", "${_Choose_C}", "opacity", '1', { fromValue: '0.000000'}], position: 75000, duration: 1000 },
                { id: "eid175", tween: [ "style", "${_divide_4}", "opacity", '1', { fromValue: '0.000000'}], position: 36000, duration: 1000 },
                { id: "eid163", tween: [ "color", "${_Hint_1_rectangle}", "border-color", 'rgba(79,77,77,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(79,77,77,1.00)'}], position: 11000, duration: 0 },
                { id: "eid191", tween: [ "style", "${_one-forth_piece}", "opacity", '1', { fromValue: '0.000000'}], position: 38000, duration: 1000 },
                { id: "eid196", tween: [ "color", "${__4_denominatorCopy4}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 57000, duration: 0 },
                { id: "eid208", tween: [ "color", "${__1_hint_2}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 59000, duration: 0 },
                { id: "eid200", tween: [ "color", "${_equal_signCopy}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 57000, duration: 0 },
                { id: "eid199", tween: [ "color", "${_multiply_signCopy}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 57000, duration: 0 },
                { id: "eid186", tween: [ "color", "${_one-forth_piece}", "background-color", 'rgba(252,239,37,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(252,239,37,1.00)'}], position: 38000, duration: 0 },
                { id: "eid209", tween: [ "color", "${_equal_sign_hint_2}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 59000, duration: 0 },
                { id: "eid194", tween: [ "style", "${_Hint_2_expression_1}", "opacity", '1', { fromValue: '0.01'}], position: 56000, duration: 1000 },
                { id: "eid195", tween: [ "color", "${__1_numeratorCopy4}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 57000, duration: 0 },
                { id: "eid216", tween: [ "style", "${_Hint2_expression_3}", "opacity", '1', { fromValue: '0.000000'}], position: 60000, duration: 1000 },
                { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 21000, duration: 3000 },
                { id: "eid183", tween: [ "style", "${_divide_3}", "opacity", '1', { fromValue: '0.000000'}], position: 36000, duration: 1000 },
                { id: "eid213", tween: [ "color", "${_Rectangle5}", "border-color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 59000, duration: 0 },
                { id: "eid171", tween: [ "style", "${_Rectangle_area_}", "opacity", '1', { fromValue: '0.000000'}], position: 25000, duration: 1000 },
                { id: "eid210", tween: [ "color", "${_multiply_sign_hint_2}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 59000, duration: 0 },
                { id: "eid168", tween: [ "style", "${_Hint_1_one_fourth_of_39}", "opacity", '1', { fromValue: '0.000000'}], position: 16000, duration: 1000 },
                { id: "eid219", tween: [ "style", "${_Answer_hint}", "opacity", '1', { fromValue: '0.000000'}], position: 70000, duration: 1000 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid184", tween: [ "style", "${_divide_2}", "opacity", '1', { fromValue: '0'}], position: 36000, duration: 1000 },
                { id: "eid197", tween: [ "color", "${_fraction_signCopy4}", "border-color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 57000, duration: 0 },
                { id: "eid206", tween: [ "color", "${_Rectangle6}", "border-color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 59000, duration: 0 },
                { id: "eid164", tween: [ "color", "${_Hint_1_one_fourth_of_39}", "color", 'rgba(0,82,203,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,82,203,1.00)'}], position: 16000, duration: 0 },
                { id: "eid239", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid240", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1a}', [] ], ""], position: 8000 },
                { id: "eid241", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1b}', [] ], ""], position: 18000 },
                { id: "eid242", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1c}', [] ], ""], position: 27000 },
                { id: "eid243", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 41000 },
                { id: "eid244", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer1}', [] ], ""], position: 62000 },
                { id: "eid245", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer2}', [] ], ""], position: 72000 }            ]
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
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text5',
                        text: 'C',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                        type: 'text',
                        rect: ['0px', '5px', '27px', '19px', 'auto', 'auto'],
                        id: 'Text4',
                        text: 'B',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                        rect: ['0px', '3px', '27px', '19px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'A',
                        text: 'A<br><br><br>',
                        align: 'center',
                        type: 'text'
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
