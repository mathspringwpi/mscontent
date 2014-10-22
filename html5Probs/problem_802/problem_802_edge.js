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
                id: 'Answers',
                type: 'rect',
                rect: ['48', '181','auto','auto','auto', 'auto']
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['103px', '489px','101px','19px','auto', 'auto'],
                text: "1",
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
                id: 'question2',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/question.mp3','media/question.ogg']
            },
            {
                id: 'Problem_statement',
                type: 'group',
                rect: ['183', '48px','30','19','auto', 'auto'],
                c: [
                {
                    id: 'question_mark',
                    type: 'text',
                    rect: ['0px', '0px','30px','19px','auto', 'auto'],
                    text: "?",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'minus',
                    type: 'text',
                    rect: ['-61px', '-12px','28px','37px','auto', 'auto'],
                    text: "_",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Seven_tenths',
                    type: 'group',
                    rect: ['-33px', '11px','22','19px','auto', 'auto'],
                    c: [
                    {
                        id: 'Text7Copy',
                        type: 'text',
                        rect: ['-3px', '-2px','22px','20px','auto', 'auto'],
                        text: "10<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6Copy',
                        type: 'text',
                        rect: ['0px', '-27px','22px','20px','auto', 'auto'],
                        text: "7",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle2Copy',
                        type: 'rect',
                        rect: ['-6px', '-7px','22px','1px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    }]
                },
                {
                    id: 'One_Fifith',
                    type: 'group',
                    rect: ['-92px', '11px','22','20','auto', 'auto'],
                    c: [
                    {
                        id: 'Text7',
                        type: 'text',
                        rect: ['1px', '-2px','22px','20px','auto', 'auto'],
                        text: "5<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6',
                        type: 'text',
                        rect: ['0px', '-27px','22px','20px','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle2',
                        type: 'rect',
                        rect: ['-6px', '-7px','22px','1px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    }]
                },
                {
                    id: 'Question_Text',
                    type: 'text',
                    rect: ['-158px', '-1px','65px','22px','auto', 'auto'],
                    text: "What is ",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'AnswerA',
                type: 'group',
                rect: ['102px', '423px','22','20px','auto', 'auto'],
                c: [
                {
                    id: 'Text7Copy2',
                    type: 'text',
                    rect: ['1px', '-2px','22px','20px','auto', 'auto'],
                    text: "5<br>",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text6Copy2',
                    type: 'text',
                    rect: ['1px', '-23px','22px','20px','auto', 'auto'],
                    text: "6",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle2Copy2',
                    type: 'rect',
                    rect: ['-6px', '-7px','22px','1px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'minus2',
                    type: 'text',
                    rect: ['-36px', '-22px','30px','20px','auto', 'auto'],
                    text: "_",
                    align: "center",
                    font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'AnswerB',
                type: 'group',
                rect: ['102px', '467px','22','20px','auto', 'auto'],
                c: [
                {
                    id: 'Text7Copy3',
                    type: 'text',
                    rect: ['1px', '-2px','22px','20px','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text6Copy3',
                    type: 'text',
                    rect: ['1px', '-24px','22px','20px','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle2Copy3',
                    type: 'rect',
                    rect: ['-6px', '-7px','22px','1px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'minus2Copy',
                    type: 'text',
                    rect: ['-36px', '-22px','30px','20px','auto', 'auto'],
                    text: "_",
                    align: "center",
                    font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'AnswerD',
                type: 'group',
                rect: ['102px', '538px','22','20px','auto', 'auto'],
                c: [
                {
                    id: 'Text7Copy4',
                    type: 'text',
                    rect: ['1px', '-2px','22px','20px','auto', 'auto'],
                    text: "15",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text6Copy4',
                    type: 'text',
                    rect: ['3px', '-23px','22px','20px','auto', 'auto'],
                    text: "8",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle2Copy4',
                    type: 'rect',
                    rect: ['-4px', '-7px','22px','1px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'minus2Copy2',
                    type: 'text',
                    rect: ['-36px', '-22px','30px','20px','auto', 'auto'],
                    text: "_",
                    align: "center",
                    font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
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
                id: 'Hint_1_a',
                type: 'group',
                rect: ['314px', '48px','113','37','auto', 'auto'],
                c: [
                {
                    id: 'Text2',
                    type: 'text',
                    rect: ['0px', '0px','113px','37px','auto', 'auto'],
                    text: "is greater than",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1)", "400", "none", "normal"]
                },
                {
                    id: 'hint_1_Seven_tenths',
                    type: 'group',
                    rect: ['-33px', '16px','22','19px','auto', 'auto'],
                    c: [
                    {
                        id: 'Text7Copy5',
                        type: 'text',
                        rect: ['-3px', '-2px','22px','20px','auto', 'auto'],
                        text: "10<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6Copy5',
                        type: 'text',
                        rect: ['0px', '-27px','22px','20px','auto', 'auto'],
                        text: "7",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle2Copy5',
                        type: 'rect',
                        rect: ['-6px', '-7px','22px','1px','auto', 'auto'],
                        fill: ["rgba(0,85,215,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    }]
                },
                {
                    id: 'hint_1_one_fifth',
                    type: 'group',
                    rect: ['118px', '16px','22','19px','auto', 'auto'],
                    c: [
                    {
                        id: 'Text7Copy6',
                        type: 'text',
                        rect: ['1px', '0px','22px','20px','auto', 'auto'],
                        text: "5",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6Copy6',
                        type: 'text',
                        rect: ['0px', '-27px','22px','20px','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle2Copy6',
                        type: 'rect',
                        rect: ['-6px', '-7px','22px','1px','auto', 'auto'],
                        fill: ["rgba(0,85,215,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    }]
                }]
            },
            {
                id: 'Hint_1_b',
                type: 'text',
                rect: ['267px', '93px','275px','43px','auto', 'auto'],
                text: "Should we expect to get a positive or negative number ?",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1)", "400", "none", "normal"]
            },
            {
                id: 'hint1',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1.ogg','media/hint1.mp3']
            },
            {
                id: 'Hint_2a',
                type: 'text',
                rect: ['72px', '145px','390px','37px','auto', 'auto'],
                text: "Let's use a number line to find the difference.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Number_Line',
                type: 'group',
                rect: ['470px', '249px','21','10','auto', 'auto'],
                c: [
                {
                    id: '_0',
                    type: 'text',
                    rect: ['-190px', '35px','30px','22px','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                },
                {
                    id: '_1',
                    type: 'text',
                    rect: ['-25px', '35px','42px','36px','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_-1',
                    type: 'text',
                    rect: ['-370px', '35px','30px','22px','auto', 'auto'],
                    text: "- 1",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'line1',
                    type: 'group',
                    rect: ['-402', '-2','424','2','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle',
                        type: 'rect',
                        rect: ['0px', '0px','424px','2px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle3',
                        type: 'rect',
                        rect: ['0px', '-4px','22px','2px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        transform: [[],['-22']]
                    },
                    {
                        id: 'Rectangle3Copy',
                        type: 'rect',
                        rect: ['2px', '6px','22px','2px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        transform: [[],['27']]
                    },
                    {
                        id: 'Rectangle3Copy2',
                        type: 'rect',
                        rect: ['402px', '-5px','22px','2px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        transform: [[],['18']]
                    },
                    {
                        id: 'Rectangle3Copy3',
                        type: 'rect',
                        rect: ['402px', '6px','22px','2px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        transform: [[],['-22']]
                    }]
                },
                {
                    id: 'line2',
                    type: 'group',
                    rect: ['-190px', '35px','30','22','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle4',
                        type: 'rect',
                        rect: ['-166px', '-60px','2px','48px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle4Copy',
                        type: 'rect',
                        rect: ['167px', '-60px','2px','48px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle4Copy2',
                        type: 'rect',
                        rect: ['3px', '-60px','2px','48px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'line3',
                    type: 'group',
                    rect: ['-55px', '-20px','2','36','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle5',
                        type: 'rect',
                        rect: ['-197px', '0px','2px','36px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle5Copy',
                        type: 'rect',
                        rect: ['-266px', '0px','2px','36px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle5Copy2',
                        type: 'rect',
                        rect: ['-165px', '0px','2px','36px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle5Copy3',
                        type: 'rect',
                        rect: ['-231px', '0px','2px','36px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle5Copy4',
                        type: 'rect',
                        rect: ['-101px', '0px','2px','36px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle5Copy5',
                        type: 'rect',
                        rect: ['-66px', '0px','2px','36px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle5Copy6',
                        type: 'rect',
                        rect: ['-34px', '0px','2px','36px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle5Copy7',
                        type: 'rect',
                        rect: ['0px', '0px','2px','36px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'One_Fifith_in_number_line',
                    display: 'block',
                    type: 'group',
                    rect: ['-160px', '47px','22','20','auto', 'auto'],
                    c: [
                    {
                        id: 'Text7Copy7',
                        type: 'text',
                        rect: ['1px', '-2px','22px','20px','auto', 'auto'],
                        text: "5<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6Copy7',
                        type: 'text',
                        rect: ['0px', '-27px','22px','20px','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle2Copy7',
                        type: 'rect',
                        rect: ['-6px', '-7px','22px','1px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    }]
                },
                {
                    id: 'Ellipse',
                    type: 'ellipse',
                    rect: ['-164px', '-9px','17px','16px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(13,124,38,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'Arrow',
                type: 'group',
                rect: ['362px', '192px','17','3','auto', 'auto'],
                autoOrient: true,
                c: [
                {
                    id: 'Rectangle7Copy',
                    type: 'rect',
                    rect: ['-48px', '14px','28px','6px','auto', 'auto'],
                    fill: ["rgba(244,3,3,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['28']]
                },
                {
                    id: 'Rectangle7',
                    type: 'rect',
                    rect: ['-46px', '3px','28px','6px','auto', 'auto'],
                    fill: ["rgba(244,3,3,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['-24']]
                },
                {
                    id: 'Rectangle6',
                    type: 'rect',
                    rect: ['-44px', '9px','56px','6px','auto', 'auto'],
                    fill: ["rgba(244,3,3,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
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
                id: 'hint3',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint3.ogg','media/hint3.mp3']
            },
            {
                id: 'Hint_3_text',
                type: 'text',
                rect: ['161px', '335px','349px','66px','auto', 'auto'],
                text: "Since the fractions have different denominators, let's find their common denominator. <br>The least common multiple of 5 and 10 is 10.",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "normal", "none", ""]
            },
            {
                id: 'Hint_3_formula',
                type: 'group',
                rect: ['270', '433px','22','20','auto', 'auto'],
                c: [
                {
                    id: 'Hint_3_One_Fifith',
                    type: 'group',
                    rect: ['0px', '0px','22','20','auto', 'auto'],
                    c: [
                    {
                        id: 'Text7Copy9',
                        type: 'text',
                        rect: ['-5px', '-2px','22px','20px','auto', 'auto'],
                        text: "10",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6Copy9',
                        display: 'block',
                        type: 'text',
                        rect: ['-2px', '-27px','22px','20px','auto', 'auto'],
                        text: "?",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: '_2',
                        display: 'none',
                        type: 'text',
                        rect: ['-2px', '-26px','20px','15px','auto', 'auto'],
                        text: "2",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle2Copy9',
                        type: 'rect',
                        rect: ['-6px', '-7px','22px','1px','auto', 'auto'],
                        fill: ["rgba(0,85,215,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    }]
                },
                {
                    id: 'Hint_3_equals_',
                    type: 'text',
                    rect: ['-26px', '-15px','37px','16px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Text3Copy',
                    type: 'text',
                    rect: ['-61px', '0px','30px','16px','auto', 'auto'],
                    text: "x 2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(233,4,4,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Text3',
                    type: 'text',
                    rect: ['-61px', '-27px','30px','16px','auto', 'auto'],
                    text: "x 2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(236,4,4,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Hint_3_One_FifithCopy',
                    type: 'group',
                    rect: ['-83px', '0px','22','20','auto', 'auto'],
                    c: [
                    {
                        id: 'Text7Copy8',
                        type: 'text',
                        rect: ['1px', '-2px','22px','20px','auto', 'auto'],
                        text: "5<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6Copy8',
                        type: 'text',
                        rect: ['0px', '-27px','22px','20px','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle2Copy8',
                        type: 'rect',
                        rect: ['-6px', '-7px','22px','1px','auto', 'auto'],
                        fill: ["rgba(0,85,215,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    }]
                }]
            },
            {
                id: 'hint4',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint4.ogg','media/hint4.mp3']
            },
            {
                id: 'Hint_3_One_FifithCopy2',
                type: 'group',
                rect: ['312px', '300px','22','20','auto', 'auto'],
                c: [
                {
                    id: 'Text7Copy10',
                    type: 'text',
                    rect: ['-2px', '-2px','22px','20px','auto', 'auto'],
                    text: "10<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Text6Copy10',
                    type: 'text',
                    rect: ['0px', '-27px','22px','20px','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle2Copy10',
                    type: 'rect',
                    rect: ['-6px', '-7px','22px','1px','auto', 'auto'],
                    fill: ["rgba(0,85,215,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                }]
            },
            {
                id: 'line4',
                type: 'group',
                rect: ['433', '234','2','26','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle8Copy9',
                    type: 'rect',
                    rect: ['0px', '0px','2px','26px','auto', 'auto'],
                    fill: ["rgba(0,85,215,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle8Copy8',
                    type: 'rect',
                    rect: ['-33px', '0px','2px','26px','auto', 'auto'],
                    fill: ["rgba(0,85,215,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle8Copy7',
                    type: 'rect',
                    rect: ['-66px', '0px','2px','26px','auto', 'auto'],
                    fill: ["rgba(0,85,215,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle8Copy6',
                    type: 'rect',
                    rect: ['-100px', '0px','2px','26px','auto', 'auto'],
                    fill: ["rgba(0,85,215,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle8Copy5',
                    type: 'rect',
                    rect: ['-137px', '0px','2px','26px','auto', 'auto'],
                    fill: ["rgba(0,85,215,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle8Copy4',
                    type: 'rect',
                    rect: ['-166px', '0px','2px','26px','auto', 'auto'],
                    fill: ["rgba(0,85,215,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle8Copy3',
                    type: 'rect',
                    rect: ['-197px', '0px','2px','26px','auto', 'auto'],
                    fill: ["rgba(0,85,215,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle8Copy2',
                    type: 'rect',
                    rect: ['-230px', '0px','2px','26px','auto', 'auto'],
                    fill: ["rgba(0,85,215,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle8Copy',
                    type: 'rect',
                    rect: ['-266px', '0px','2px','26px','auto', 'auto'],
                    fill: ["rgba(0,85,215,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle8',
                    type: 'rect',
                    rect: ['-300px', '0px','2px','26px','auto', 'auto'],
                    fill: ["rgba(0,85,215,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'Hint_4',
                type: 'group',
                rect: ['335px', '467px','149','22','auto', 'auto'],
                c: [
                {
                    id: 'Text9',
                    type: 'text',
                    rect: ['0px', '0px','149px','22px','auto', 'auto'],
                    text: "on the number line.",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text8',
                    type: 'text',
                    rect: ['-155px', '0px','126px','48px','auto', 'auto'],
                    text: "Now, move back ",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1)", "400", "none", "normal"]
                },
                {
                    id: 'Hint_4_2_tenths_Copy3',
                    type: 'group',
                    rect: ['-26px', '14px','22','20','auto', 'auto'],
                    c: [
                    {
                        id: 'Text7Copy11',
                        type: 'text',
                        rect: ['-2px', '-2px','22px','20px','auto', 'auto'],
                        text: "10<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6Copy11',
                        type: 'text',
                        rect: ['2px', '-27px','22px','20px','auto', 'auto'],
                        text: "7",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle2Copy11',
                        type: 'rect',
                        rect: ['-6px', '-7px','22px','1px','auto', 'auto'],
                        fill: ["rgba(0,85,215,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    }]
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
                id: 'Answer_Hint',
                type: 'group',
                rect: ['270px', '521px','17','16','auto', 'auto'],
                c: [
                {
                    id: 'Hint_3_One_FifithCopy7',
                    type: 'group',
                    rect: ['40px', '15px','22','20','auto', 'auto'],
                    c: [
                    {
                        id: 'Text7Copy15',
                        type: 'text',
                        rect: ['-3px', '-2px','22px','20px','auto', 'auto'],
                        text: "10",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6Copy15',
                        type: 'text',
                        rect: ['0px', '-27px','22px','20px','auto', 'auto'],
                        text: "5",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle2Copy15',
                        type: 'rect',
                        rect: ['-6px', '-7px','22px','1px','auto', 'auto'],
                        fill: ["rgba(0,85,215,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    }]
                },
                {
                    id: 'Hint_3_One_FifithCopy6',
                    type: 'group',
                    rect: ['-30px', '13px','22','20','auto', 'auto'],
                    c: [
                    {
                        id: 'Text7Copy14',
                        type: 'text',
                        rect: ['-2px', '-2px','22px','20px','auto', 'auto'],
                        text: "10<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6Copy14',
                        type: 'text',
                        rect: ['0px', '-27px','22px','20px','auto', 'auto'],
                        text: "7",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle2Copy14',
                        type: 'rect',
                        rect: ['-6px', '-7px','22px','1px','auto', 'auto'],
                        fill: ["rgba(0,85,215,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    }]
                },
                {
                    id: 'Hint_3_One_FifithCopy5',
                    type: 'group',
                    rect: ['-79px', '13px','22','20','auto', 'auto'],
                    c: [
                    {
                        id: 'Text7Copy13',
                        type: 'text',
                        rect: ['-2px', '-2px','22px','20px','auto', 'auto'],
                        text: "10<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6Copy13',
                        type: 'text',
                        rect: ['0px', '-27px','22px','20px','auto', 'auto'],
                        text: "2",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle2Copy13',
                        type: 'rect',
                        rect: ['-6px', '-7px','22px','1px','auto', 'auto'],
                        fill: ["rgba(0,85,215,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    }]
                },
                {
                    id: 'Text11',
                    type: 'text',
                    rect: ['0px', '0px','17px','16px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text12',
                    type: 'text',
                    rect: ['18px', '-1px','28px','23px','auto', 'auto'],
                    text: "-",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text10',
                    type: 'text',
                    rect: ['-52px', '-3px','22px','22px','auto', 'auto'],
                    text: "-",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text13',
                    type: 'text',
                    rect: ['94px', '0px','27px','19px','auto', 'auto'],
                    text: "-",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text14',
                    type: 'text',
                    rect: ['70px', '1px','22px','16px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1)", "400", "none", "normal"]
                },
                {
                    id: 'Hint_3_One_FifithCopy8',
                    type: 'group',
                    rect: ['113px', '13px','22','20','auto', 'auto'],
                    c: [
                    {
                        id: 'Text7Copy16',
                        type: 'text',
                        rect: ['0px', '-2px','22px','20px','auto', 'auto'],
                        text: "2",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6Copy16',
                        type: 'text',
                        rect: ['-1px', '-27px','22px','20px','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,215,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle2Copy16',
                        type: 'rect',
                        rect: ['-6px', '-7px','22px','1px','auto', 'auto'],
                        fill: ["rgba(0,85,215,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    }]
                }]
            },
            {
                id: 'Rectangle9Copy',
                display: 'none',
                type: 'rect',
                rect: ['204px', '207px','12px','6px','auto', 'auto'],
                fill: ["rgba(246,2,2,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],['23']]
            },
            {
                id: 'Rectangle9',
                display: 'none',
                type: 'rect',
                rect: ['210px', '206px','12px','6px','auto', 'auto'],
                fill: ["rgba(246,2,2,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Rectangle9Copy2',
                display: 'none',
                type: 'rect',
                rect: ['204px', '203px','12px','6px','auto', 'auto'],
                fill: ["rgba(246,2,2,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],['-30']]
            },
            {
                id: 'Rectangle10',
                display: 'none',
                type: 'rect',
                rect: ['203px', '235px','2px','24px','auto', 'auto'],
                fill: ["rgba(246,2,2,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Group3',
                display: 'none',
                type: 'group',
                rect: ['181', '273','41','45','auto', 'auto'],
                c: [
                {
                    id: 'Text7Copy12',
                    type: 'text',
                    rect: ['19px', '25px','22px','20px','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(215,0,0,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Text6Copy12',
                    type: 'text',
                    rect: ['18px', '0px','22px','20px','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(215,0,0,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle2Copy12',
                    type: 'rect',
                    rect: ['13px', '20px','22px','1px','auto', 'auto'],
                    fill: ["rgba(215,0,0,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'Rectangle2Copy17',
                    type: 'rect',
                    rect: ['0px', '20px','6px','1px','auto', 'auto'],
                    fill: ["rgba(215,0,0,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
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
            "${_minus2Copy}": [
                ["style", "top", '-22px'],
                ["style", "font-size", '16px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '-36px'],
                ["style", "width", '30px']
            ],
            "${__2}": [
                ["style", "left", '-2px'],
                ["style", "display", 'none']
            ],
            "${_Hint_4}": [
                ["style", "top", '467px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '335px']
            ],
            "${_Text6Copy11}": [
                ["style", "top", '-27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '2px'],
                ["color", "color", 'rgba(0,85,215,1.00)']
            ],
            "${_Text6Copy}": [
                ["style", "top", '-27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px']
            ],
            "${_Rectangle8Copy8}": [
                ["style", "top", '0px'],
                ["style", "left", '-33px'],
                ["style", "height", '26px']
            ],
            "${_Number_Line}": [
                ["style", "left", '470px'],
                ["style", "top", '249px']
            ],
            "${_Text7Copy13}": [
                ["style", "top", '-2px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-2px'],
                ["color", "color", 'rgba(0,85,215,1)']
            ],
            "${_AnswerD}": [
                ["style", "top", '538px'],
                ["style", "left", '102px']
            ],
            "${_Rectangle3Copy}": [
                ["style", "height", '2px'],
                ["style", "top", '6px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '27deg']
            ],
            "${_Text7Copy5}": [
                ["style", "top", '-2px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-3px'],
                ["color", "color", 'rgba(0,85,215,1.00)']
            ],
            "${_Rectangle8Copy6}": [
                ["style", "top", '0px'],
                ["style", "left", '-100px'],
                ["style", "height", '26px']
            ],
            "${_Rectangle8Copy5}": [
                ["style", "top", '0px'],
                ["style", "left", '-137px'],
                ["style", "height", '26px']
            ],
            "${_Hint_1_a}": [
                ["style", "top", '48px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '314px']
            ],
            "${_question_mark}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '30px']
            ],
            "${_Hint_3_text}": [
                ["style", "top", '335px'],
                ["style", "width", '349px'],
                ["style", "height", '66px'],
                ["color", "color", 'rgba(0,85,215,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '161px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle5Copy2}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '-165px'],
                ["style", "width", '2px']
            ],
            "${_Answers}": [
                ["transform", "scaleX", '1.01602'],
                ["style", "left", '26px'],
                ["transform", "scaleY", '1.07026'],
                ["style", "top", '393px']
            ],
            "${_Text6Copy15}": [
                ["style", "top", '-27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,85,215,1)']
            ],
            "${_Rectangle2Copy10}": [
                ["color", "background-color", 'rgba(0,85,215,1.00)'],
                ["style", "top", '-7px'],
                ["style", "border-width", '0px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-6px'],
                ["style", "width", '22px']
            ],
            "${_Text13}": [
                ["style", "left", '94px'],
                ["style", "top", '0px']
            ],
            "${_Text6}": [
                ["style", "top", '-27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px']
            ],
            "${__1}": [
                ["style", "top", '35px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-25px']
            ],
            "${_Text7Copy12}": [
                ["style", "top", '25px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '19px'],
                ["color", "color", 'rgba(215,0,0,1.00)']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '600px']
            ],
            "${_Rectangle2Copy11}": [
                ["color", "background-color", 'rgba(0,85,215,1.00)'],
                ["style", "top", '-7px'],
                ["style", "left", '-6px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '22px']
            ],
            "${_Text6Copy2}": [
                ["style", "top", '-23px'],
                ["style", "height", '20px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '1px'],
                ["style", "font-size", '14px']
            ],
            "${_Text6Copy16}": [
                ["style", "top", '-27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-1px'],
                ["color", "color", 'rgba(0,85,215,1)']
            ],
            "${_hint_1_Seven_tenths}": [
                ["style", "top", '16px'],
                ["style", "left", '-33px'],
                ["style", "height", '19px']
            ],
            "${_Text6Copy3}": [
                ["style", "top", '-24px'],
                ["style", "height", '20px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '1px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle8Copy9}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '26px']
            ],
            "${_Text6Copy4}": [
                ["style", "top", '-23px'],
                ["style", "height", '20px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '3px'],
                ["style", "font-size", '14px']
            ],
            "${_Arrow}": [
                ["motion", "location", '370.5px 193.5px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Text7Copy}": [
                ["style", "top", '-2px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-3px']
            ],
            "${_Rectangle2Copy16}": [
                ["color", "background-color", 'rgba(0,85,215,1)'],
                ["style", "top", '-7px'],
                ["style", "border-width", '0px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-6px'],
                ["style", "width", '22px']
            ],
            "${_Rectangle7}": [
                ["style", "top", '3px'],
                ["transform", "rotateZ", '-24deg'],
                ["style", "height", '6px'],
                ["style", "left", '-46px'],
                ["style", "width", '28px']
            ],
            "${_Question_Text}": [
                ["style", "top", '-1px'],
                ["style", "width", '65px'],
                ["style", "height", '22px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '-158px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle8Copy7}": [
                ["style", "top", '0px'],
                ["style", "left", '-66px'],
                ["style", "height", '26px']
            ],
            "${_Text9}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '149px']
            ],
            "${_Text7}": [
                ["style", "top", '-2px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '1px']
            ],
            "${_Problem_statement}": [
                ["style", "top", '48px']
            ],
            "${_Text7Copy8}": [
                ["style", "top", '-2px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '1px'],
                ["color", "color", 'rgba(0,85,215,1.00)']
            ],
            "${_AnswerCText}": [
                ["style", "top", '489px'],
                ["style", "width", '101px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '103px'],
                ["style", "font-size", '14px']
            ],
            "${_line1}": [
                ["style", "opacity", '0.000000']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '2px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '424px']
            ],
            "${_Rectangle8}": [
                ["style", "top", '0px'],
                ["style", "left", '-300px'],
                ["style", "height", '26px']
            ],
            "${_Text6Copy10}": [
                ["style", "top", '-27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,85,215,1.00)']
            ],
            "${_Rectangle3Copy3}": [
                ["style", "height", '2px'],
                ["style", "top", '6px'],
                ["style", "left", '402px'],
                ["transform", "rotateZ", '-22deg']
            ],
            "${_Hint_1_b}": [
                ["style", "top", '93px'],
                ["style", "height", '43px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '267px'],
                ["style", "width", '275px']
            ],
            "${_Text6Copy7}": [
                ["style", "top", '-27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px']
            ],
            "${_Group3}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_Text3Copy}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(233,4,4,1.00)'],
                ["style", "left", '-61px'],
                ["style", "font-size", '14px']
            ],
            "${_Hint_3_equals_}": [
                ["color", "color", 'rgba(0,85,215,1.00)'],
                ["style", "top", '-15px'],
                ["style", "left", '-26px'],
                ["style", "width", '37px']
            ],
            "${_Text2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '113px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Rectangle8Copy4}": [
                ["style", "top", '0px'],
                ["style", "left", '-166px'],
                ["style", "height", '26px']
            ],
            "${_line4}": [
                ["style", "opacity", '0.000000']
            ],
            "${_Answer_Hint}": [
                ["style", "top", '521px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '270px']
            ],
            "${_Rectangle4}": [
                ["style", "height", '48px'],
                ["style", "top", '-60px'],
                ["style", "left", '-166px'],
                ["style", "width", '2px']
            ],
            "${_AnswerB}": [
                ["style", "top", '467px'],
                ["style", "left", '102px']
            ],
            "${_Text10}": [
                ["style", "left", '-52px'],
                ["style", "top", '-3px']
            ],
            "${_minus}": [
                ["style", "height", '37px'],
                ["style", "top", '-12px'],
                ["style", "left", '-61px'],
                ["style", "width", '28px']
            ],
            "${_Rectangle2Copy6}": [
                ["color", "background-color", 'rgba(0,85,215,1)'],
                ["style", "top", '-7px'],
                ["style", "left", '-6px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '22px']
            ],
            "${_Rectangle2Copy12}": [
                ["color", "background-color", 'rgba(215,0,0,1.00)'],
                ["style", "top", '20px'],
                ["style", "left", '13px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '22px']
            ],
            "${_Hint_3_One_FifithCopy}": [
                ["style", "left", '-83px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle2Copy4}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "top", '-7px'],
                ["style", "left", '-4px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '22px']
            ],
            "${_Rectangle3Copy2}": [
                ["style", "height", '2px'],
                ["style", "top", '-5px'],
                ["style", "left", '402px'],
                ["transform", "rotateZ", '18deg']
            ],
            "${_Text6Copy9}": [
                ["style", "top", '-27px'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(0,85,215,1)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-2px'],
                ["style", "display", 'block']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(246,2,2,1.00)'],
                ["style", "top", '206px'],
                ["style", "height", '6px'],
                ["style", "display", 'none'],
                ["style", "left", '311px'],
                ["style", "width", '12px']
            ],
            "${_Hint_3_One_FifithCopy5}": [
                ["style", "top", '13px'],
                ["style", "opacity", '1'],
                ["style", "left", '-79px']
            ],
            "${_Text7Copy16}": [
                ["style", "top", '-2px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,85,215,1)']
            ],
            "${_Text7Copy3}": [
                ["style", "top", '-2px'],
                ["style", "height", '20px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '1px'],
                ["style", "font-size", '14px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_line3}": [
                ["style", "top", '-20px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-55px']
            ],
            "${_Text7Copy2}": [
                ["style", "top", '-2px'],
                ["style", "height", '20px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '1px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle4Copy2}": [
                ["style", "top", '-60px'],
                ["style", "height", '48px'],
                ["style", "left", '3px'],
                ["style", "width", '2px']
            ],
            "${_Rectangle2Copy}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "top", '-7px'],
                ["style", "left", '-6px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '22px']
            ],
            "${_Rectangle2Copy14}": [
                ["color", "background-color", 'rgba(0,85,215,1)'],
                ["style", "top", '-7px'],
                ["style", "left", '-6px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '22px']
            ],
            "${_line2}": [
                ["style", "top", '35px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-190px']
            ],
            "${_Rectangle9Copy}": [
                ["color", "background-color", 'rgba(246,2,2,1)'],
                ["style", "display", 'none'],
                ["transform", "rotateZ", '23deg'],
                ["style", "height", '6px'],
                ["style", "top", '207px'],
                ["style", "left", '305px'],
                ["style", "width", '12px']
            ],
            "${_Text7Copy9}": [
                ["style", "top", '-2px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-5px'],
                ["color", "color", 'rgba(0,85,215,1)']
            ],
            "${_minus2}": [
                ["style", "top", '-22px'],
                ["style", "width", '30px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '-36px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '-7px'],
                ["style", "border-width", '0px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-6px'],
                ["style", "width", '22px']
            ],
            "${_Rectangle5Copy5}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '-66px'],
                ["style", "width", '2px']
            ],
            "${_Hint_2a}": [
                ["style", "top", '145px'],
                ["style", "opacity", '0.000000'],
                ["color", "color", 'rgba(0,85,215,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '72px'],
                ["style", "width", '390px']
            ],
            "${_Seven_tenths}": [
                ["style", "top", '11px'],
                ["style", "left", '-33px'],
                ["style", "height", '19px']
            ],
            "${_Text8}": [
                ["style", "top", '0px'],
                ["style", "left", '-155px'],
                ["style", "width", '126px']
            ],
            "${_Hint_3_formula}": [
                ["style", "top", '433px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Rectangle5Copy3}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '-231px'],
                ["style", "width", '2px']
            ],
            "${_Text6Copy5}": [
                ["style", "top", '-27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,85,215,1.00)']
            ],
            "${_Rectangle2Copy5}": [
                ["color", "background-color", 'rgba(0,85,215,1.00)'],
                ["style", "top", '-7px'],
                ["style", "border-width", '0px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-6px'],
                ["style", "width", '22px']
            ],
            "${_Rectangle2Copy3}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "top", '-7px'],
                ["style", "border-width", '0px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-6px'],
                ["style", "width", '22px']
            ],
            "${_Text7Copy15}": [
                ["style", "top", '-2px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-3px'],
                ["color", "color", 'rgba(0,85,215,1)']
            ],
            "${_Text14}": [
                ["style", "left", '70px'],
                ["style", "top", '1px']
            ],
            "${_Hint_3_One_FifithCopy6}": [
                ["style", "top", '13px'],
                ["style", "opacity", '1'],
                ["style", "left", '-30px']
            ],
            "${_Rectangle9Copy2}": [
                ["color", "background-color", 'rgba(246,2,2,1)'],
                ["style", "display", 'none'],
                ["transform", "rotateZ", '-30deg'],
                ["style", "height", '6px'],
                ["style", "top", '203px'],
                ["style", "left", '305px'],
                ["style", "width", '12px']
            ],
            "${__0}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-190px'],
                ["style", "top", '35px']
            ],
            "${_Text7Copy6}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '1px'],
                ["color", "color", 'rgba(0,85,215,1)']
            ],
            "${_Text6Copy8}": [
                ["style", "top", '-27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,85,215,1.00)']
            ],
            "${_Text7Copy11}": [
                ["style", "top", '-2px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-2px'],
                ["color", "color", 'rgba(0,85,215,1.00)']
            ],
            "${_Text6Copy13}": [
                ["style", "top", '-27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,85,215,1)']
            ],
            "${_Rectangle2Copy13}": [
                ["color", "background-color", 'rgba(0,85,215,1)'],
                ["style", "top", '-7px'],
                ["style", "border-width", '0px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-6px'],
                ["style", "width", '22px']
            ],
            "${_Text6Copy6}": [
                ["style", "top", '-27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,85,215,1)']
            ],
            "${_Rectangle5Copy}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '-266px'],
                ["style", "width", '2px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '-4px'],
                ["style", "height", '2px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '-22deg']
            ],
            "${_Rectangle8Copy3}": [
                ["style", "top", '0px'],
                ["style", "left", '-197px'],
                ["style", "height", '26px']
            ],
            "${_Text6Copy14}": [
                ["style", "top", '-27px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,85,215,1)']
            ],
            "${_AnswerA}": [
                ["style", "top", '423px'],
                ["style", "left", '102px']
            ],
            "${_Text6Copy12}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '18px'],
                ["color", "color", 'rgba(215,0,0,1.00)']
            ],
            "${_Rectangle8Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '-230px'],
                ["style", "height", '26px']
            ],
            "${_Rectangle5Copy6}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '-34px'],
                ["style", "width", '2px']
            ],
            "${_Hint_3_One_FifithCopy7}": [
                ["style", "top", '15px'],
                ["style", "opacity", '1'],
                ["style", "left", '40px']
            ],
            "${_Rectangle5Copy4}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '-101px'],
                ["style", "width", '2px']
            ],
            "${_Rectangle2Copy15}": [
                ["color", "background-color", 'rgba(0,85,215,1)'],
                ["style", "top", '-7px'],
                ["style", "border-width", '0px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-6px'],
                ["style", "width", '22px']
            ],
            "${_Text11}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text7Copy14}": [
                ["style", "top", '-2px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-2px'],
                ["color", "color", 'rgba(0,85,215,1)']
            ],
            "${_Rectangle8Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '-266px'],
                ["style", "height", '26px']
            ],
            "${_Hint_3_One_FifithCopy8}": [
                ["style", "top", '13px'],
                ["style", "opacity", '1'],
                ["style", "left", '113px']
            ],
            "${_Rectangle2Copy2}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "top", '-7px'],
                ["style", "left", '-6px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '22px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(13,124,38,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-164px'],
                ["style", "top", '-9px']
            ],
            "${_Rectangle5Copy7}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '0px'],
                ["style", "width", '2px']
            ],
            "${_Text7Copy10}": [
                ["style", "top", '-2px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-2px'],
                ["color", "color", 'rgba(0,85,215,1.00)']
            ],
            "${_Hint_3_One_Fifith}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint_4_2_tenths_Copy3}": [
                ["style", "top", '14px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-26px']
            ],
            "${__-1}": [
                ["style", "top", '35px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-370px']
            ],
            "${_Hint_3_One_FifithCopy2}": [
                ["style", "top", '300px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '312px']
            ],
            "${_Rectangle7Copy}": [
                ["style", "top", '14px'],
                ["transform", "rotateZ", '28deg'],
                ["style", "height", '6px'],
                ["style", "left", '-48px'],
                ["style", "width", '28px']
            ],
            "${_Rectangle2Copy9}": [
                ["color", "background-color", 'rgba(0,85,215,1)'],
                ["style", "top", '-7px'],
                ["style", "border-width", '0px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-6px'],
                ["style", "width", '22px']
            ],
            "${_One_Fifith}": [
                ["style", "left", '-92px'],
                ["style", "top", '11px']
            ],
            "${_Rectangle4Copy}": [
                ["style", "top", '-60px'],
                ["style", "height", '48px'],
                ["style", "left", '167px'],
                ["style", "width", '2px']
            ],
            "${_One_Fifith_in_number_line}": [
                ["style", "top", '47px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-160px'],
                ["style", "display", 'block']
            ],
            "${_Text7Copy7}": [
                ["style", "top", '-2px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '1px']
            ],
            "${_minus2Copy2}": [
                ["style", "top", '-22px'],
                ["style", "width", '30px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '-36px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle10}": [
                ["style", "top", '235px'],
                ["style", "height", '24px'],
                ["style", "opacity", '0'],
                ["style", "left", '203px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle6}": [
                ["color", "background-color", 'rgba(244,3,3,1.00)'],
                ["style", "height", '6px'],
                ["style", "left", '-44px'],
                ["style", "top", '9px']
            ],
            "${_Rectangle5}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '-197px'],
                ["style", "width", '2px']
            ],
            "${_hint_1_one_fifth}": [
                ["style", "top", '16px'],
                ["style", "left", '118px'],
                ["style", "height", '19px']
            ],
            "${_Rectangle2Copy8}": [
                ["color", "background-color", 'rgba(0,85,215,1.00)'],
                ["style", "top", '-7px'],
                ["style", "left", '-6px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '22px']
            ],
            "${_Text12}": [
                ["style", "height", '23px'],
                ["style", "top", '-1px'],
                ["style", "left", '18px'],
                ["style", "width", '28px']
            ],
            "${_Rectangle2Copy7}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "top", '-7px'],
                ["style", "left", '-6px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '22px']
            ],
            "${_Text7Copy4}": [
                ["style", "top", '-2px'],
                ["style", "height", '20px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '1px'],
                ["style", "font-size", '14px']
            ],
            "${_Text3}": [
                ["color", "color", 'rgba(236,4,4,1.00)'],
                ["style", "top", '-27px'],
                ["style", "left", '-61px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle2Copy17}": [
                ["color", "background-color", 'rgba(215,0,0,1)'],
                ["style", "top", '20px'],
                ["style", "border-width", '0px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '6px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 78000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 8000,
                "Hint 2": 17000,
                "Hint 3": 35000,
                "Hint 4": 52000,
                "Answer Hint": 68000
            },
            timeline: [
                { id: "eid324", tween: [ "style", "${_One_Fifith_in_number_line}", "display", 'none', { fromValue: 'block'}], position: 58500, duration: 0 },
                { id: "eid369", tween: [ "style", "${_Rectangle9}", "left", '211px', { fromValue: '311px'}], position: 72000, duration: 3000 },
                { id: "eid375", tween: [ "style", "${_Group3}", "display", 'block', { fromValue: 'none'}], position: 75500, duration: 0 },
                { id: "eid248", tween: [ "style", "${_Hint_1_a}", "opacity", '1', { fromValue: '0.000000'}], position: 8000, duration: 500 },
                { id: "eid313", tween: [ "style", "${_Hint_3_text}", "opacity", '1', { fromValue: '0.000000'}], position: 35000, duration: 1000 },
                { id: "eid371", tween: [ "style", "${_Rectangle9Copy}", "left", '205px', { fromValue: '305px'}], position: 72000, duration: 3000 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid316", tween: [ "style", "${_Hint_3_formula}", "opacity", '1', { fromValue: '0.000000'}], position: 46000, duration: 1000 },
                { id: "eid242", tween: [ "transform", "${_Answers}", "scaleX", '1.01602', { fromValue: '1.01602'}], position: 0, duration: 0 },
                { id: "eid278", tween: [ "style", "${_line1}", "opacity", '1', { fromValue: '0.000000'}], position: 21000, duration: 1000 },
                { id: "eid284", tween: [ "style", "${__-1}", "opacity", '1', { fromValue: '0.000000'}], position: 24000, duration: 1000 },
                { id: "eid292", tween: [ "style", "${__0}", "opacity", '1', { fromValue: '0.000000'}], position: 24000, duration: 1000 },
                { id: "eid275", tween: [ "style", "${_Hint_2a}", "opacity", '1', { fromValue: '0.000000'}], position: 17000, duration: 500 },
                { id: "eid327", tween: [ "style", "${_Hint_3_One_FifithCopy2}", "opacity", '1', { fromValue: '0.000000'}], position: 60000, duration: 1000 },
                { id: "eid271", tween: [ "style", "${_Hint_1_b}", "opacity", '1', { fromValue: '0.000000'}], position: 12000, duration: 500 },
                { id: "eid305", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0.000000'}], position: 27000, duration: 1000 },
                { id: "eid380", tween: [ "style", "${_Rectangle9Copy}", "display", 'block', { fromValue: 'none'}], position: 72000, duration: 0 },
                { id: "eid243", tween: [ "transform", "${_Answers}", "scaleY", '1.07026', { fromValue: '1.07026'}], position: 0, duration: 0 },
                { id: "eid320", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 57000, duration: 0 },
                { id: "eid333", tween: [ "style", "${_Hint_4_2_tenths_Copy3}", "opacity", '1', { fromValue: '0.000000'}], position: 61000, duration: 1000 },
                { id: "eid379", tween: [ "style", "${_Rectangle9Copy2}", "display", 'block', { fromValue: 'none'}], position: 72000, duration: 0 },
                { id: "eid302", tween: [ "style", "${_line3}", "opacity", '1', { fromValue: '0.000000'}], position: 25500, duration: 1000 },
                { id: "eid336", tween: [ "style", "${_Hint_4}", "opacity", '1', { fromValue: '0.000000'}], position: 61000, duration: 1000 },
                { id: "eid296", tween: [ "style", "${_One_Fifith_in_number_line}", "opacity", '1', { fromValue: '0.000000'}], position: 27000, duration: 1000 },
                { id: "eid343", tween: [ "style", "${_Answer_Hint}", "opacity", '1', { fromValue: '0.000000'}], position: 68000, duration: 1000 },
                { id: "eid308", tween: [ "style", "${_Arrow}", "opacity", '1', { fromValue: '0.000000'}], position: 28500, duration: 1000 },
                { id: "eid339", tween: [ "style", "${_Arrow}", "opacity", '0', { fromValue: '1'}], position: 64250, duration: 1000 },
                { id: "eid372", tween: [ "style", "${_Rectangle10}", "display", 'block', { fromValue: 'none'}], position: 75500, duration: 0 },
                { id: "eid370", tween: [ "style", "${_Rectangle9Copy2}", "left", '205px', { fromValue: '305px'}], position: 72000, duration: 3000 },
                { id: "eid332", tween: [ "motion", "${_Arrow}", [[370.5, 193.5, 0, 0],[272.5, 197.19, 0, 0]]], position: 63500, duration: 1750 },
                { id: "eid319", tween: [ "style", "${_Text6Copy9}", "display", 'none', { fromValue: 'block'}], position: 57000, duration: 0 },
                { id: "eid377", tween: [ "style", "${_Group3}", "opacity", '1', { fromValue: '0'}], position: 75500, duration: 1000 },
                { id: "eid281", tween: [ "style", "${_line2}", "opacity", '1', { fromValue: '0.000000'}], position: 22500, duration: 1000 },
                { id: "eid374", tween: [ "style", "${_Rectangle10}", "opacity", '1', { fromValue: '0'}], position: 75500, duration: 1000 },
                { id: "eid378", tween: [ "style", "${_Rectangle9}", "display", 'block', { fromValue: 'none'}], position: 72000, duration: 0 },
                { id: "eid299", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0.000000'}], position: 24000, duration: 1000 },
                { id: "eid361", tween: [ "style", "${_Rectangle9}", "width", '112px', { fromValue: '12px'}], position: 72000, duration: 3000 },
                { id: "eid323", tween: [ "style", "${_line4}", "opacity", '1', { fromValue: '0.000000'}], position: 58000, duration: 1000 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid244", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid272", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 8000 },
                { id: "eid309", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 17000 },
                { id: "eid310", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 35000 },
                { id: "eid328", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4}', [] ], ""], position: 52000 },
                { id: "eid344", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 68000 }            ]
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
