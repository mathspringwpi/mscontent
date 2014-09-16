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
                id: 'Question',
                type: 'group',
                rect: ['20', '42','349','25','auto', 'auto'],
                c: [
                {
                    id: 'Question_Text',
                    type: 'text',
                    rect: ['-1px', '-4px','219px','124px','auto', 'auto'],
                    text: "Which of the following figures appears to have ",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'shaded',
                    type: 'text',
                    rect: ['375px', '8px','62px','25px','auto', 'auto'],
                    text: "shaded ?<br>",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Fraction_in_question',
                    type: 'group',
                    rect: ['368px', '279px','34','24','auto', 'auto'],
                    c: [
                    {
                        id: '_5',
                        type: 'text',
                        rect: ['0px', '0px','34px','24px','auto', 'auto'],
                        text: "5",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_3',
                        type: 'text',
                        rect: ['0px', '-25px','22px','24px','auto', 'auto'],
                        text: "3",
                        align: "left",
                        font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'fraction',
                        type: 'rect',
                        rect: ['-7px', '-5px','21px','0px','auto', 'auto'],
                        fill: ["rgba(192,192,192,1)"],
                        stroke: [1,"rgba(0,0,0,1)","solid"]
                    }]
                }]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['48', '181','auto','auto','auto', 'auto']
            },
            {
                id: 'AnswerA',
                type: 'image',
                rect: ['78px', '168px','245px','118px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"AnswerA.png",'0px','0px']
            },
            {
                id: 'AnswerB',
                type: 'image',
                rect: ['78px', '229px','212px','124px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"AnswerB.png",'0px','0px']
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
                id: 'AnswerC',
                type: 'image',
                rect: ['75px', '300px','225px','130px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"AnswerC.png",'0px','0px']
            },
            {
                id: 'AnswerD',
                type: 'image',
                rect: ['73px', '365px','255px','161px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"AnswerD.png",'0px','0px']
            },
            {
                id: 'Hint_1_A',
                display: 'none',
                type: 'group',
                rect: ['389px', '163px','34','25','auto', 'auto'],
                c: [
                {
                    id: 'hint_1_fraction',
                    type: 'group',
                    rect: ['0px', '0px','34','25','auto', 'auto'],
                    c: [
                    {
                        id: '_5_hint1',
                        type: 'text',
                        rect: ['1px', '-11px','34px','25px','auto', 'auto'],
                        text: "5",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_3_hint1',
                        type: 'text',
                        rect: ['0px', '-40px','34px','33px','auto', 'auto'],
                        text: "3",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'fraction_hint1',
                        type: 'rect',
                        rect: ['-9px', '-18px','28px','0px','auto', 'auto'],
                        fill: ["rgba(192,192,192,1)"],
                        stroke: [1,"rgba(0,100,177,1.00)","solid"]
                    }]
                },
                {
                    id: 'hint_1',
                    type: 'text',
                    rect: ['-89px', '-81px','212px','75px','auto', 'auto'],
                    text: "Suppose we have a rectangle and we use it to represent ",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Hint_1_Rectangle',
                type: 'group',
                rect: ['20px', '86px','265','126','auto', 'auto'],
                c: [
                {
                    id: 'Hint_1_rectangle',
                    display: 'none',
                    type: 'rect',
                    rect: ['0px', '0px','261px','122px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0.00)"],
                    stroke: [2,"rgba(0,0,0,1.00)","solid"]
                },
                {
                    id: 'D1',
                    type: 'rect',
                    rect: ['51px', '0px','0px','122px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'D2',
                    type: 'rect',
                    rect: ['102px', '0px','0px','122px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'D3',
                    type: 'rect',
                    rect: ['155px', '0px','0px','122px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'D4',
                    type: 'rect',
                    rect: ['210px', '0px','0px','122px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'R1',
                    type: 'rect',
                    rect: ['0px', '0px','50px','124px','auto', 'auto'],
                    fill: ["rgba(100,203,244,1.00)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'R2',
                    type: 'rect',
                    rect: ['51px', '0px','50px','124px','auto', 'auto'],
                    fill: ["rgba(100,203,244,1.00)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'R3',
                    type: 'rect',
                    rect: ['103px', '0px','50px','124px','auto', 'auto'],
                    fill: ["rgba(100,203,244,1.00)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Line1',
                    type: 'rect',
                    rect: ['0px', '63px','49px','0px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [1,"rgb(3, 3, 3)","solid"]
                },
                {
                    id: 'Line2',
                    type: 'rect',
                    rect: ['52px', '63px','50px','0px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [1,"rgb(3, 3, 3)","solid"]
                },
                {
                    id: 'Line3',
                    type: 'rect',
                    rect: ['103px', '63px','50px','0px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [1,"rgb(3, 3, 3)","solid"]
                },
                {
                    id: 'Line4',
                    type: 'rect',
                    rect: ['157px', '63px','50px','0px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [1,"rgb(3, 3, 3)","solid"]
                },
                {
                    id: 'Line5',
                    type: 'rect',
                    rect: ['212px', '63px','50px','0px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [1,"rgb(3, 3, 3)","solid"]
                }]
            },
            {
                id: 'Hint_1B',
                type: 'text',
                rect: ['305px', '172px','244px','44px','auto', 'auto'],
                text: "But the figure in the answers are cut into 10 parts. ",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
            },
            {
                id: 'Hint_1_C',
                type: 'group',
                rect: ['302px', '222px','198','33','auto', 'auto'],
                c: [
                {
                    id: '_610_fraction',
                    type: 'group',
                    rect: ['212px', '9px','23','16','auto', 'auto'],
                    c: [
                    {
                        id: '_10',
                        type: 'text',
                        rect: ['0px', '0px','23px','16px','auto', 'auto'],
                        text: "10<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_6',
                        type: 'text',
                        rect: ['5px', '-26px','22px','24px','auto', 'auto'],
                        text: "6",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'fraction_1',
                        type: 'rect',
                        rect: ['0px', '-7px','20px','0px','auto', 'auto'],
                        fill: ["rgba(251,246,246,0)"],
                        stroke: [1,"rgba(0,100,177,1.00)","solid"]
                    }]
                },
                {
                    id: 'hint1d',
                    type: 'text',
                    rect: ['2px', '30px','163px','25px','auto', 'auto'],
                    text: "which is equivalent to ",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                },
                {
                    id: 'hint1c',
                    type: 'text',
                    rect: ['0px', '0px','206px','33px','auto', 'auto'],
                    text: "The shaded area is equal to ",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                },
                {
                    id: 'hint_1_fractionCopy',
                    type: 'group',
                    rect: ['176px', '59px','34','25','auto', 'auto'],
                    c: [
                    {
                        id: '_5_hint1Copy',
                        type: 'text',
                        rect: ['1px', '-11px','34px','25px','auto', 'auto'],
                        text: "5",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_3_hint1Copy',
                        type: 'text',
                        rect: ['0px', '-40px','34px','33px','auto', 'auto'],
                        text: "3",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'fraction_hint1Copy',
                        type: 'rect',
                        rect: ['-9px', '-18px','28px','0px','auto', 'auto'],
                        fill: ["rgba(192,192,192,1)"],
                        stroke: [1,"rgba(0,100,177,1.00)","solid"]
                    }]
                }]
            },
            {
                id: 'hint2',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2.mp3','media/hint2.ogg']
            },
            {
                id: 'Hint_2',
                type: 'group',
                rect: ['406px', '311px','34','25','auto', 'auto'],
                c: [
                {
                    id: '_35_fraction',
                    type: 'group',
                    rect: ['0px', '0px','34','25','auto', 'auto'],
                    c: [
                    {
                        id: '_5_hint1Copy2',
                        type: 'text',
                        rect: ['1px', '-11px','34px','25px','auto', 'auto'],
                        text: "5",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_3_hint1Copy2',
                        type: 'text',
                        rect: ['0px', '-35px','34px','33px','auto', 'auto'],
                        text: "3",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'fraction_hint1Copy2',
                        type: 'rect',
                        rect: ['-9px', '-18px','28px','0px','auto', 'auto'],
                        fill: ["rgba(192,192,192,1)"],
                        stroke: [1,"rgba(0,100,177,1.00)","solid"]
                    }]
                },
                {
                    id: '_35_fractionCopy',
                    type: 'group',
                    rect: ['-108px', '110px','34','25','auto', 'auto'],
                    c: [
                    {
                        id: '_5_hint1Copy5',
                        type: 'text',
                        rect: ['1px', '-11px','34px','25px','auto', 'auto'],
                        text: "5",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_3_hint1Copy5',
                        type: 'text',
                        rect: ['0px', '-35px','34px','33px','auto', 'auto'],
                        text: "3",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'fraction_hint1Copy5',
                        type: 'rect',
                        rect: ['-9px', '-18px','24px','0px','auto', 'auto'],
                        fill: ["rgba(192,192,192,1)"],
                        stroke: [1,"rgba(0,100,177,1.00)","solid"]
                    }]
                },
                {
                    id: 'hint2b',
                    type: 'text',
                    rect: ['30px', '-19px','134px','33px','auto', 'auto'],
                    text: "can be turned into<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                },
                {
                    id: 'hint2a',
                    type: 'text',
                    rect: ['-123px', '-21px','115px','61px','auto', 'auto'],
                    text: "The trick is that ",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                },
                {
                    id: '_610_fractionCopy3',
                    type: 'group',
                    rect: ['-111px', '28px','23','16','auto', 'auto'],
                    c: [
                    {
                        id: '_10Copy3',
                        type: 'text',
                        rect: ['0px', '0px','23px','16px','auto', 'auto'],
                        text: "10<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_6Copy3',
                        type: 'text',
                        rect: ['5px', '-26px','22px','24px','auto', 'auto'],
                        text: "6",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'fraction_1Copy3',
                        type: 'rect',
                        rect: ['0px', '-7px','20px','0px','auto', 'auto'],
                        fill: ["rgba(251,246,246,0)"],
                        stroke: [1,"rgba(0,100,177,1.00)","solid"]
                    }]
                },
                {
                    id: '_610_fractionCopy4',
                    type: 'group',
                    rect: ['-16px', '100px','23','16','auto', 'auto'],
                    c: [
                    {
                        id: '_10Copy4',
                        type: 'text',
                        rect: ['0px', '0px','23px','16px','auto', 'auto'],
                        text: "10<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_6Copy4',
                        type: 'text',
                        rect: ['5px', '-26px','22px','24px','auto', 'auto'],
                        text: "6",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'fraction_1Copy4',
                        type: 'rect',
                        rect: ['0px', '-7px','20px','0px','auto', 'auto'],
                        fill: ["rgba(251,246,246,0)"],
                        stroke: [1,"rgba(0,100,177,1.00)","solid"]
                    }]
                },
                {
                    id: 'hint2c',
                    type: 'text',
                    rect: ['-79px', '12px','237px','27px','auto', 'auto'],
                    text: "by multiplying the denominator",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                },
                {
                    id: 'hint2d',
                    type: 'text',
                    rect: ['-107px', '48px','239px','29px','auto', 'auto'],
                    text: "and numerator by 2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                },
                {
                    id: '_multiplying_2a',
                    type: 'text',
                    rect: ['-79px', '75px','51px','16px','auto', 'auto'],
                    text: "x 2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(196,0,0,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'multiplying_2b',
                    type: 'text',
                    rect: ['-79px', '99px','34px','9px','auto', 'auto'],
                    text: "x 2<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(196,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'equals',
                    type: 'text',
                    rect: ['-42px', '85px','37px','31px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Hint_3',
                type: 'group',
                rect: ['288px', '497px','23','16','auto', 'auto'],
                c: [
                {
                    id: 'hint3a',
                    type: 'text',
                    rect: ['-2px', '-52px','245px','35px','auto', 'auto'],
                    text: "Which figure matches the fraction ",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                },
                {
                    id: 'question_mark',
                    type: 'text',
                    rect: ['265px', '-52px','21px','21px','auto', 'auto'],
                    text: "?",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                },
                {
                    id: '_610_fractionCopy5',
                    type: 'group',
                    rect: ['238px', '-42px','23','16px','auto', 'auto'],
                    c: [
                    {
                        id: '_10Copy5',
                        type: 'text',
                        rect: ['0px', '0px','23px','16px','auto', 'auto'],
                        text: "10<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_6Copy5',
                        type: 'text',
                        rect: ['5px', '-26px','22px','24px','auto', 'auto'],
                        text: "6",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,100,177,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'fraction_1Copy5',
                        type: 'rect',
                        rect: ['0px', '-7px','20px','0px','auto', 'auto'],
                        fill: ["rgba(251,246,246,0)"],
                        stroke: [1,"rgba(0,100,177,1.00)","solid"]
                    }]
                },
                {
                    id: 'Note',
                    type: 'text',
                    rect: ['0px', '-21px','200px','42px','auto', 'auto'],
                    text: "(Note: It doesn't matter where the color squares are shaded.)",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(126,3,3,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'hint3',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint3.ogg','media/hint3.mp3']
            },
            {
                id: 'answer',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer.mp3','media/answer.ogg']
            },
            {
                id: 'Answer',
                type: 'text',
                rect: ['292px', '521px','123px','20px','auto', 'auto'],
                text: "The answer is C",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(4,123,22,1.00)", "700", "none", "normal"]
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
            "${_hint2a}": [
                ["style", "top", '-21px'],
                ["style", "left", '-123px'],
                ["style", "width", '115px']
            ],
            "${_Line1}": [
                ["style", "top", '63px'],
                ["style", "left", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "border-width", '1px'],
                ["style", "width", '49px']
            ],
            "${__3_hint1Copy3}": [
                ["style", "left", '0px'],
                ["style", "top", '-40px']
            ],
            "${__610_fractionCopy3}": [
                ["style", "left", '-111px'],
                ["style", "top", '28px']
            ],
            "${__5}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${__multiplying_2a}": [
                ["color", "color", 'rgba(196,0,0,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-79px'],
                ["style", "top", '75px']
            ],
            "${__10Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_fraction_hint1Copy2}": [
                ["style", "top", '-18px'],
                ["color", "border-color", 'rgba(0,100,177,1.00)'],
                ["style", "left", '-9px'],
                ["style", "width", '28px']
            ],
            "${__3}": [
                ["style", "top", '-25px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '0px']
            ],
            "${_multiplying_2b}": [
                ["style", "top", '99px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-79px'],
                ["style", "height", '9px']
            ],
            "${__5_hint1Copy2}": [
                ["style", "left", '1px'],
                ["style", "top", '-11px']
            ],
            "${_AnswerD}": [
                ["style", "height", '161px'],
                ["style", "top", '447px'],
                ["style", "left", '78px'],
                ["style", "width", '255px']
            ],
            "${_fraction_hint1}": [
                ["style", "top", '-18px'],
                ["color", "border-color", 'rgba(0,100,177,1.00)'],
                ["style", "left", '-9px'],
                ["style", "width", '28px']
            ],
            "${_shaded}": [
                ["style", "left", '353px'],
                ["style", "top", '8px']
            ],
            "${__3_hint1Copy2}": [
                ["style", "left", '0px'],
                ["style", "top", '-35px']
            ],
            "${_Line4}": [
                ["style", "top", '63px'],
                ["style", "left", '157px'],
                ["style", "opacity", '0.000000'],
                ["style", "border-width", '1px'],
                ["style", "width", '50px']
            ],
            "${_D4}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "border-width", '1px'],
                ["style", "left", '210px']
            ],
            "${_question_mark}": [
                ["style", "top", '-52px'],
                ["style", "left", '265px'],
                ["style", "width", '21px']
            ],
            "${__6Copy2}": [
                ["style", "top", '-26px'],
                ["style", "left", '5px']
            ],
            "${_hint1cCopy}": [
                ["style", "left", '-212px'],
                ["style", "top", '-9px']
            ],
            "${_Line2}": [
                ["style", "top", '63px'],
                ["style", "left", '52px'],
                ["style", "opacity", '0.000000'],
                ["style", "border-width", '1px'],
                ["style", "width", '50px']
            ],
            "${_Answers}": [
                ["transform", "scaleX", '1.6423'],
                ["style", "left", '79px'],
                ["transform", "scaleY", '1.80689'],
                ["style", "top", '331px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_hint1dCopy2}": [
                ["style", "top", '21px'],
                ["style", "left", '-210px'],
                ["style", "width", '163px']
            ],
            "${__3_hint1Copy}": [
                ["style", "left", '0px'],
                ["style", "top", '-40px']
            ],
            "${_R3}": [
                ["color", "background-color", 'rgba(100,203,244,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '103px'],
                ["style", "top", '0px']
            ],
            "${_Answer}": [
                ["style", "top", '521px'],
                ["color", "color", 'rgba(4,123,22,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '292px'],
                ["style", "opacity", '0.000000']
            ],
            "${_D2}": [
                ["style", "top", '0px'],
                ["style", "height", '122px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '102px'],
                ["style", "border-width", '1px']
            ],
            "${_hint_1_fraction}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${__610_fraction}": [
                ["style", "left", '212px'],
                ["style", "top", '9px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_fraction_hint1Copy5}": [
                ["style", "top", '-18px'],
                ["color", "border-color", 'rgba(0,100,177,1.00)'],
                ["style", "left", '-9px'],
                ["style", "width", '24px']
            ],
            "${__6Copy}": [
                ["style", "top", '-26px'],
                ["style", "left", '5px']
            ],
            "${_hint_1_fractionCopy}": [
                ["style", "left", '176px'],
                ["style", "top", '59px']
            ],
            "${_Hint_1_C}": [
                ["style", "top", '222px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '302px']
            ],
            "${__10Copy4}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${__5_hint1Copy3}": [
                ["style", "left", '1px'],
                ["style", "top", '-11px']
            ],
            "${_hint2b}": [
                ["style", "top", '-19px'],
                ["style", "left", '30px'],
                ["style", "width", '134px']
            ],
            "${__35_fractionCopy}": [
                ["style", "top", '110px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-108px']
            ],
            "${_Hint_1_A}": [
                ["style", "top", '163px'],
                ["style", "left", '389px'],
                ["style", "display", 'none']
            ],
            "${__10}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_D3}": [
                ["style", "top", '0px'],
                ["style", "height", '122px'],
                ["style", "opacity", '0.000000'],
                ["style", "border-width", '1px'],
                ["style", "left", '155px']
            ],
            "${_hint1dCopy}": [
                ["style", "top", '21px'],
                ["style", "left", '-210px'],
                ["style", "width", '163px']
            ],
            "${_Hint_3}": [
                ["style", "top", '497px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '288px']
            ],
            "${_fraction_1Copy5}": [
                ["style", "top", '-7px'],
                ["color", "border-color", 'rgba(0,100,177,1.00)'],
                ["style", "left", '0px']
            ],
            "${_fraction_1Copy3}": [
                ["style", "top", '-7px'],
                ["color", "border-color", 'rgba(0,100,177,1.00)'],
                ["style", "left", '0px']
            ],
            "${_Question_Text}": [
                ["style", "top", '8px'],
                ["style", "font-size", '16px'],
                ["style", "height", '25px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '4px'],
                ["style", "width", '349px']
            ],
            "${__6Copy4}": [
                ["style", "top", '-26px'],
                ["style", "left", '5px']
            ],
            "${_hint3a}": [
                ["style", "top", '-52px'],
                ["style", "left", '-2px'],
                ["style", "width", '245px']
            ],
            "${_fraction_1Copy4}": [
                ["style", "top", '-7px'],
                ["color", "border-color", 'rgba(0,100,177,1.00)'],
                ["style", "left", '0px']
            ],
            "${_hint1d}": [
                ["style", "top", '30px'],
                ["style", "left", '2px'],
                ["style", "width", '163px']
            ],
            "${__10Copy5}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '16px']
            ],
            "${__610_fractionCopy4}": [
                ["style", "top", '100px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-16px']
            ],
            "${__5_hint1Copy4}": [
                ["style", "left", '1px'],
                ["style", "top", '-11px']
            ],
            "${__10Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_AnswerA}": [
                ["style", "height", '118px'],
                ["style", "top", '256px'],
                ["style", "left", '83px'],
                ["style", "width", '245px']
            ],
            "${_AnswerB}": [
                ["style", "height", '124px'],
                ["style", "top", '311px'],
                ["style", "left", '85px'],
                ["style", "width", '212px']
            ],
            "${__3_hint1Copy5}": [
                ["style", "left", '0px'],
                ["style", "top", '-35px']
            ],
            "${_Hint_1_Rectangle}": [
                ["style", "left", '20px'],
                ["style", "top", '86px']
            ],
            "${__6}": [
                ["style", "top", '-26px'],
                ["style", "left", '5px']
            ],
            "${__6Copy3}": [
                ["style", "top", '-26px'],
                ["style", "left", '5px']
            ],
            "${_R2}": [
                ["color", "background-color", 'rgba(100,203,244,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51px'],
                ["style", "top", '0px']
            ],
            "${__5_hint1Copy}": [
                ["style", "left", '1px'],
                ["style", "top", '-11px']
            ],
            "${_hint2d}": [
                ["style", "top", '48px'],
                ["style", "left", '-107px']
            ],
            "${__610_fractionCopy5}": [
                ["style", "top", '-42px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '238px']
            ],
            "${__3_hint1Copy4}": [
                ["style", "left", '0px'],
                ["style", "top", '-40px']
            ],
            "${_Line3}": [
                ["style", "top", '63px'],
                ["style", "border-width", '1px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '103px'],
                ["style", "width", '50px']
            ],
            "${_hint2c}": [
                ["style", "top", '12px'],
                ["style", "left", '-79px'],
                ["style", "width", '237px']
            ],
            "${__35_fraction}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${__10Copy3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${__6Copy5}": [
                ["style", "top", '-26px'],
                ["style", "left", '5px'],
                ["style", "height", '24px']
            ],
            "${_fraction_hint1Copy}": [
                ["style", "top", '-18px'],
                ["color", "border-color", 'rgba(0,100,177,1.00)'],
                ["style", "left", '-9px'],
                ["style", "width", '28px']
            ],
            "${_Hint_1_rectangle}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '0px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "border-width", '2px'],
                ["style", "width", '261px']
            ],
            "${_Hint_1B}": [
                ["style", "top", '172px'],
                ["style", "height", '44px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '305px'],
                ["style", "width", '244px']
            ],
            "${_fraction_1}": [
                ["style", "top", '-7px'],
                ["color", "border-color", 'rgba(0,100,177,1.00)'],
                ["style", "left", '0px']
            ],
            "${_Line5}": [
                ["style", "top", '63px'],
                ["style", "border-width", '1px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '212px'],
                ["style", "width", '50px']
            ],
            "${_AnswerC}": [
                ["style", "top", '382px'],
                ["style", "height", '130px'],
                ["style", "left", '81px'],
                ["style", "width", '225px']
            ],
            "${_R1}": [
                ["color", "background-color", 'rgba(100,203,244,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_equals}": [
                ["style", "height", '31px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-42px'],
                ["style", "top", '85px']
            ],
            "${__3_hint1}": [
                ["style", "left", '0px'],
                ["style", "top", '-40px']
            ],
            "${_TutorialText}": [
                ["style", "top", '51px'],
                ["style", "height", '187px'],
                ["style", "opacity", '1'],
                ["style", "left", '260px'],
                ["style", "display", 'none']
            ],
            "${_hint1c}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '206px']
            ],
            "${_hint1cCopy2}": [
                ["style", "left", '-212px'],
                ["style", "top", '-9px']
            ],
            "${_Hint_2}": [
                ["style", "top", '311px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '406px']
            ],
            "${_Note}": [
                ["color", "color", 'rgba(126,3,3,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "font-size", '14px']
            ],
            "${__5_hint1Copy5}": [
                ["style", "left", '1px'],
                ["style", "top", '-11px']
            ],
            "${_D1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "border-width", '1px'],
                ["style", "left", '51px']
            ],
            "${_hint_1}": [
                ["color", "color", 'rgba(0,100,177,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-89px'],
                ["style", "top", '-81px']
            ],
            "${_Fraction_in_question}": [
                ["style", "left", '319px'],
                ["style", "top", '22px']
            ],
            "${_fraction}": [
                ["style", "top", '-5px'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '-7px'],
                ["style", "width", '21px']
            ],
            "${__5_hint1}": [
                ["style", "left", '1px'],
                ["style", "top", '-11px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 65000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 9000,
                "Hint 2": 35000,
                "Hint 3": 51000,
                "Answer Hint": 62000
            },
            timeline: [
                { id: "eid204", tween: [ "style", "${_AnswerD}", "top", '447px', { fromValue: '447px'}], position: 5365, duration: 0 },
                { id: "eid291", tween: [ "style", "${_multiplying_2b}", "opacity", '1', { fromValue: '0.000000'}], position: 47000, duration: 1000 },
                { id: "eid218", tween: [ "style", "${_D3}", "opacity", '1', { fromValue: '0.000000'}], position: 15500, duration: 1000 },
                { id: "eid284", tween: [ "style", "${_Hint_2}", "opacity", '1', { fromValue: '0.000000'}], position: 35000, duration: 1000 },
                { id: "eid190", tween: [ "style", "${_Answers}", "left", '79px', { fromValue: '79px'}], position: 5365, duration: 0 },
                { id: "eid189", tween: [ "style", "${_shaded}", "top", '8px', { fromValue: '8px'}], position: 5365, duration: 0 },
                { id: "eid271", tween: [ "style", "${_Line3}", "opacity", '1', { fromValue: '0.000000'}], position: 31000, duration: 500 },
                { id: "eid208", tween: [ "style", "${_Hint_1_rectangle}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid186", tween: [ "style", "${_shaded}", "left", '353px', { fromValue: '353px'}], position: 5365, duration: 0 },
                { id: "eid234", tween: [ "style", "${_R1}", "opacity", '1', { fromValue: '0.000000'}], position: 17500, duration: 1000 },
                { id: "eid201", tween: [ "style", "${_AnswerA}", "top", '256px', { fromValue: '256px'}], position: 5365, duration: 0 },
                { id: "eid309", tween: [ "style", "${_Note}", "opacity", '1', { fromValue: '0.000000'}], position: 55000, duration: 1000 },
                { id: "eid207", tween: [ "style", "${_Hint_1_A}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid268", tween: [ "style", "${_Line2}", "opacity", '1', { fromValue: '0.000000'}], position: 30500, duration: 500 },
                { id: "eid192", tween: [ "style", "${_AnswerD}", "left", '78px', { fromValue: '78px'}], position: 5365, duration: 0 },
                { id: "eid287", tween: [ "style", "${__multiplying_2a}", "opacity", '1', { fromValue: '0.000000'}], position: 47000, duration: 1000 },
                { id: "eid302", tween: [ "style", "${__610_fractionCopy5}", "opacity", '1', { fromValue: '0.000000'}], position: 51000, duration: 1000 },
                { id: "eid197", tween: [ "style", "${_AnswerB}", "top", '311px', { fromValue: '311px'}], position: 5365, duration: 0 },
                { id: "eid181", tween: [ "style", "${_Fraction_in_question}", "left", '319px', { fromValue: '319px'}], position: 5365, duration: 0 },
                { id: "eid191", tween: [ "style", "${_Answers}", "top", '331px', { fromValue: '331px'}], position: 5365, duration: 0 },
                { id: "eid297", tween: [ "style", "${_equals}", "opacity", '1', { fromValue: '0.000000'}], position: 48000, duration: 1000 },
                { id: "eid278", tween: [ "style", "${_Line4}", "opacity", '1', { fromValue: '0.000000'}], position: 31500, duration: 500 },
                { id: "eid244", tween: [ "style", "${_Hint_1_C}", "opacity", '1', { fromValue: '0.000000'}], position: 23000, duration: 1000 },
                { id: "eid281", tween: [ "style", "${_Line5}", "opacity", '1', { fromValue: '0.000000'}], position: 32000, duration: 500 },
                { id: "eid177", tween: [ "style", "${_Question_Text}", "left", '4px', { fromValue: '4px'}], position: 5365, duration: 0 },
                { id: "eid170", tween: [ "transform", "${_Answers}", "scaleY", '1.80689', { fromValue: '1.80689'}], position: 5365, duration: 0 },
                { id: "eid247", tween: [ "style", "${_Line1}", "opacity", '1', { fromValue: '0.000000'}], position: 30000, duration: 500 },
                { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 3000 },
                { id: "eid320", tween: [ "style", "${_Hint_1B}", "opacity", '1', { fromValue: '0.000000'}], position: 19000, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid305", tween: [ "style", "${_Hint_3}", "opacity", '1', { fromValue: '0.000000'}], position: 51000, duration: 1000 },
                { id: "eid300", tween: [ "style", "${__610_fractionCopy4}", "opacity", '1', { fromValue: '0.000000'}], position: 48000, duration: 1000 },
                { id: "eid183", tween: [ "style", "${_Question_Text}", "height", '25px', { fromValue: '25px'}], position: 5365, duration: 0 },
                { id: "eid241", tween: [ "style", "${_R3}", "opacity", '1', { fromValue: '0.000000'}], position: 17500, duration: 1000 },
                { id: "eid202", tween: [ "style", "${_AnswerC}", "left", '81px', { fromValue: '81px'}], position: 5365, duration: 0 },
                { id: "eid203", tween: [ "style", "${_AnswerC}", "top", '382px', { fromValue: '382px'}], position: 5365, duration: 0 },
                { id: "eid200", tween: [ "style", "${_AnswerA}", "left", '83px', { fromValue: '83px'}], position: 5365, duration: 0 },
                { id: "eid313", tween: [ "style", "${_Answer}", "opacity", '1', { fromValue: '0.000000'}], position: 62000, duration: 1000 },
                { id: "eid212", tween: [ "style", "${_D1}", "opacity", '1', { fromValue: '0.000000'}], position: 15500, duration: 1000 },
                { id: "eid294", tween: [ "style", "${__35_fractionCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 46000, duration: 1000 },
                { id: "eid188", tween: [ "style", "${_Question_Text}", "top", '8px', { fromValue: '8px'}], position: 5365, duration: 0 },
                { id: "eid182", tween: [ "style", "${_Fraction_in_question}", "top", '22px', { fromValue: '22px'}], position: 5365, duration: 0 },
                { id: "eid229", tween: [ "style", "${_D4}", "opacity", '1', { fromValue: '0.000000'}], position: 15500, duration: 1000 },
                { id: "eid185", tween: [ "style", "${_Question_Text}", "width", '349px', { fromValue: '349px'}], position: 5365, duration: 0 },
                { id: "eid196", tween: [ "style", "${_AnswerB}", "left", '85px', { fromValue: '85px'}], position: 5365, duration: 0 },
                { id: "eid169", tween: [ "transform", "${_Answers}", "scaleX", '1.6423', { fromValue: '1.6423'}], position: 5365, duration: 0 },
                { id: "eid215", tween: [ "style", "${_D2}", "opacity", '1', { fromValue: '0.000000'}], position: 15500, duration: 1000 },
                { id: "eid238", tween: [ "style", "${_R2}", "opacity", '1', { fromValue: '0.000000'}], position: 17500, duration: 1000 },
                { id: "eid205", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid206", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 9000 },
                { id: "eid301", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 35000 },
                { id: "eid314", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 51000 },
                { id: "eid315", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 62000 }            ]
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
                id: 'AButton',
                symbolName: 'AButton_3',
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
