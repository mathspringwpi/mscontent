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
                id: 'hint1b',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1b.mp3','media/hint1b.ogg']
            },
            {
                id: 'hint2a',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2a.ogg','media/hint2a.mp3']
            },
            {
                id: 'Rectangle4',
                type: 'rect',
                rect: ['300px', '439px','22px','2px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
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
                id: 'Question_statement',
                type: 'group',
                rect: ['24', '30','78','20','auto', 'auto'],
                c: [
                {
                    id: 'Question_Text',
                    type: 'text',
                    rect: ['0px', '0px','78px','20px','auto', 'auto'],
                    text: "Angie used",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Text13',
                    type: 'text',
                    rect: ['59px', '42px','auto','auto','auto', 'auto'],
                    text: "inches of ribbon to tie a bag.",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text12',
                    type: 'text',
                    rect: ['131px', '0px','300px','22px','auto', 'auto'],
                    text: "inches of ribbon to wrap a gift. She also used ",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text14',
                    type: 'text',
                    rect: ['4px', '72px','412px','34px','auto', 'auto'],
                    text: "What is the total number of inches of ribbon that Angie used?<br>",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: '_15-one-half',
                    type: 'group',
                    rect: ['25px', '49px','22','2','auto', 'auto'],
                    c: [
                    {
                        id: 'One_half',
                        type: 'group',
                        rect: ['7', '5','22','19','auto', 'auto'],
                        c: [
                        {
                            id: 'Text10',
                            type: 'text',
                            rect: ['0px', '0px','22px','19px','auto', 'auto'],
                            text: "2",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                        },
                        {
                            id: 'Text9',
                            type: 'text',
                            rect: ['-1px', '-24px','22px','19px','auto', 'auto'],
                            text: "1",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['-7px', '-5px','22px','2px','auto', 'auto'],
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }]
                    },
                    {
                        id: 'Text11',
                        type: 'text',
                        rect: ['-20px', '-7px','22px','19px','auto', 'auto'],
                        text: "15",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: '_20-three-fourths',
                    type: 'group',
                    rect: ['109px', '15px','22','19','auto', 'auto'],
                    c: [
                    {
                        id: 'three_fourths',
                        type: 'group',
                        rect: ['-6', '-7','22','2','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['0px', '0px','22px','2px','auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['6px', '-19px','22px','19px','auto', 'auto'],
                            text: "3",
                            align: "left",
                            font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['6px', '3px','22px','19px','auto', 'auto'],
                            text: "4<br>",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                        }]
                    },
                    {
                        id: 'Text8',
                        type: 'text',
                        rect: ['-28px', '-15px','22px','22px','auto', 'auto'],
                        text: "20",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
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
                id: 'AnswerA',
                type: 'group',
                rect: ['66px', '410px','29','22','auto', 'auto'],
                c: [
                {
                    id: 'Text17',
                    type: 'text',
                    rect: ['0px', '0px','29px','22px','auto', 'auto'],
                    text: "35<br>",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16',
                    type: 'text',
                    rect: ['27px', '14px','22px','19px','auto', 'auto'],
                    text: "4",
                    align: "center",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15',
                    type: 'text',
                    rect: ['27px', '-12px','22px','22px','auto', 'auto'],
                    text: "1",
                    align: "center",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle5',
                    type: 'rect',
                    rect: ['29px', '7px','20px','2px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'AnswerB',
                type: 'group',
                rect: ['66px', '454px','29','22px','auto', 'auto'],
                c: [
                {
                    id: 'Text17Copy',
                    type: 'text',
                    rect: ['0px', '0px','29px','22px','auto', 'auto'],
                    text: "35<br>",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy',
                    type: 'text',
                    rect: ['27px', '14px','22px','19px','auto', 'auto'],
                    text: "3<br>",
                    align: "center",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15Copy',
                    type: 'text',
                    rect: ['27px', '-8px','22px','22px','auto', 'auto'],
                    text: "2<br>",
                    align: "center",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle5Copy',
                    type: 'rect',
                    rect: ['29px', '7px','20px','2px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'AnswerC',
                type: 'group',
                rect: ['66px', '493px','29','22px','auto', 'auto'],
                c: [
                {
                    id: 'Text17Copy2',
                    type: 'text',
                    rect: ['0px', '0px','29px','22px','auto', 'auto'],
                    text: "36",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy2',
                    type: 'text',
                    rect: ['27px', '14px','22px','19px','auto', 'auto'],
                    text: "4",
                    align: "center",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15Copy2',
                    type: 'text',
                    rect: ['27px', '-8px','22px','22px','auto', 'auto'],
                    text: "1<br>",
                    align: "center",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle5Copy2',
                    type: 'rect',
                    rect: ['29px', '7px','20px','2px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'AnswerCCopy',
                type: 'group',
                rect: ['66px', '532px','29','22px','auto', 'auto'],
                c: [
                {
                    id: 'Text17Copy3',
                    type: 'text',
                    rect: ['0px', '0px','29px','22px','auto', 'auto'],
                    text: "36",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16Copy3',
                    type: 'text',
                    rect: ['27px', '14px','22px','19px','auto', 'auto'],
                    text: "2<br>",
                    align: "center",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15Copy3',
                    type: 'text',
                    rect: ['27px', '-8px','22px','22px','auto', 'auto'],
                    text: "1<br>",
                    align: "center",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle5Copy3',
                    type: 'rect',
                    rect: ['29px', '7px','20px','2px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'Hint_1_Text',
                display: 'none',
                type: 'text',
                rect: ['95px', '143px','300px','34px','auto', 'auto'],
                text: "We will need to add these fractions.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
            },
            {
                id: 'Hint_1_text_2',
                display: 'block',
                type: 'text',
                rect: ['173px', '322px','198px','21px','auto', 'auto'],
                text: "What would you do next ?<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(156,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Hint_1_Expression_1',
                display: 'none',
                type: 'group',
                rect: ['228', '190','29','19','auto', 'auto'],
                c: [
                {
                    id: 'plus',
                    type: 'text',
                    rect: ['0px', '0px','29px','19px','auto', 'auto'],
                    text: "+",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,85,68,1)", "400", "none", "normal"]
                },
                {
                    id: '_15-one-half_Hint_1',
                    type: 'group',
                    rect: ['51px', '7px','22','2','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle3Copy',
                        type: 'rect',
                        rect: ['0px', '0px','22px','2px','auto', 'auto'],
                        fill: ["rgba(0,85,68,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Text9Copy',
                        type: 'text',
                        rect: ['6px', '-19px','22px','19px','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text10Copy',
                        type: 'text',
                        rect: ['7px', '5px','22px','19px','auto', 'auto'],
                        text: "2",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text11Copy',
                        type: 'text',
                        rect: ['-20px', '-7px','22px','19px','auto', 'auto'],
                        text: "15",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                    }]
                },
                {
                    id: '_20-three-fourths_Hint_1',
                    type: 'group',
                    rect: ['-37px', '14px','22','19','auto', 'auto'],
                    c: [
                    {
                        id: 'Text7Copy',
                        type: 'text',
                        rect: ['0px', '-4px','22px','19px','auto', 'auto'],
                        text: "4<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6Copy',
                        type: 'text',
                        rect: ['0px', '-26px','22px','19px','auto', 'auto'],
                        text: "3",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle2Copy',
                        type: 'rect',
                        rect: ['-6px', '-7px','22px','2px','auto', 'auto'],
                        fill: ["rgba(0,85,68,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    },
                    {
                        id: 'Text8Copy',
                        type: 'text',
                        rect: ['-28px', '-15px','22px','22px','auto', 'auto'],
                        text: "20",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                    }]
                }]
            },
            {
                id: 'hint1a',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1a.mp3','media/hint1a.ogg']
            },
            {
                id: 'Hint_1_Expression_2_',
                type: 'group',
                rect: ['380px', '272px','52','22','auto', 'auto'],
                c: [
                {
                    id: 'One_halfCopy',
                    type: 'group',
                    rect: ['-30px', '12px','22','19','auto', 'auto'],
                    c: [
                    {
                        id: 'three_fourthsCopy',
                        type: 'group',
                        rect: ['-62px', '-5px','22','2','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle2Copy2',
                            type: 'rect',
                            rect: ['0px', '0px','22px','2px','auto', 'auto'],
                            fill: ["rgba(0,85,68,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Text6Copy2',
                            type: 'text',
                            rect: ['6px', '-19px','22px','19px','auto', 'auto'],
                            text: "3",
                            align: "left",
                            font: ['Times New Roman, Times, serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                        },
                        {
                            id: 'Text7Copy2',
                            type: 'text',
                            rect: ['6px', '3px','22px','19px','auto', 'auto'],
                            text: "4<br>",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                        }]
                    },
                    {
                        id: 'plus2',
                        type: 'text',
                        rect: ['-28px', '-11px','22px','18px','auto', 'auto'],
                        text: "+",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,85,68,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text21',
                        type: 'text',
                        rect: ['-81px', '-11px','25px','18px','auto', 'auto'],
                        text: "(",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,85,68,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text22',
                        type: 'text',
                        rect: ['30px', '-12px','52px','22px','auto', 'auto'],
                        text: ")<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,85,68,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text10Copy2',
                        type: 'text',
                        rect: ['0px', '-1px','22px','19px','auto', 'auto'],
                        text: "2",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text9Copy2',
                        type: 'text',
                        rect: ['-1px', '-24px','22px','19px','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle3Copy2',
                        type: 'rect',
                        rect: ['-7px', '-5px','22px','2px','auto', 'auto'],
                        fill: ["rgba(0,85,68,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'plus_1',
                    type: 'text',
                    rect: ['-132px', '0px','52px','34px','auto', 'auto'],
                    text: "+",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,85,68,1)", "400", "none", "normal"]
                },
                {
                    id: '_20_plus_15',
                    type: 'text',
                    rect: ['-225px', '2px','95px','34px','auto', 'auto'],
                    text: "( 20 + 15 )",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Arrow_1',
                type: 'group',
                rect: ['167px', '249px','18','20','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle6Copy',
                    type: 'rect',
                    rect: ['6px', '0px','6px','21px','auto', 'auto'],
                    fill: ["rgba(255,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['219']]
                },
                {
                    id: 'Rectangle6',
                    type: 'rect',
                    rect: ['-7px', '-1px','6px','21px','auto', 'auto'],
                    fill: ["rgba(255,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['148']]
                },
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['-1px', '-31px','6px','52px','auto', 'auto'],
                    fill: ["rgba(255,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'Arrow_2',
                type: 'group',
                rect: ['234px', '239px','18px','20','auto', 'auto'],
                transform: [[],['25']],
                c: [
                {
                    id: 'Rectangle6Copy3',
                    type: 'rect',
                    rect: ['-6px', '21px','6px','21px','auto', 'auto'],
                    fill: ["rgba(255,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['55']]
                },
                {
                    id: 'Rectangle6Copy2',
                    type: 'rect',
                    rect: ['-19px', '17px','6px','21px','auto', 'auto'],
                    fill: ["rgba(255,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['151']]
                },
                {
                    id: 'RectangleCopy',
                    type: 'rect',
                    rect: ['-4px', '-31px','6px','72px','auto', 'auto'],
                    fill: ["rgba(255,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['19']]
                }]
            },
            {
                id: 'Arrow_3',
                type: 'group',
                rect: ['259', '256','20','6','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle9',
                    type: 'rect',
                    rect: ['0px', '0px','20px','6px','auto', 'auto'],
                    fill: ["rgba(0,103,255,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle8',
                    type: 'rect',
                    rect: ['12px', '-17px','6px','20px','auto', 'auto'],
                    fill: ["rgba(0,103,255,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['-17']]
                },
                {
                    id: 'Rectangle7',
                    type: 'rect',
                    rect: ['-17px', '-56px','6px','76px','auto', 'auto'],
                    fill: ["rgba(0,103,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['-60']]
                }]
            },
            {
                id: 'Arrow_4',
                type: 'group',
                rect: ['349px', '259px','20','6','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle9Copy',
                    type: 'rect',
                    rect: ['-21px', '-6px','20px','6px','auto', 'auto'],
                    fill: ["rgba(0,103,255,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['10']]
                },
                {
                    id: 'Rectangle8Copy',
                    type: 'rect',
                    rect: ['-6px', '-23px','6px','20px','auto', 'auto'],
                    fill: ["rgba(0,103,255,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['-2']]
                },
                {
                    id: 'Rectangle7Copy',
                    type: 'rect',
                    rect: ['-24px', '-52px','6px','60px','auto', 'auto'],
                    fill: ["rgba(0,103,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['-46']]
                }]
            },
            {
                id: 'Blue_Blocks',
                type: 'group',
                rect: ['477px', '186px','32','37','auto', 'auto'],
                c: [
                {
                    id: 'Blue_Blocks_Two_Halfs',
                    type: 'group',
                    rect: ['0px', '0px','32','37','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle10Copy3',
                        type: 'rect',
                        rect: ['0px', '0px','30px','35px','auto', 'auto'],
                        fill: ["rgba(0,103,255,0.00)"],
                        stroke: [2,"rgb(0, 0, 0)","solid"]
                    },
                    {
                        id: 'Rectangle10Copy2',
                        type: 'rect',
                        rect: ['0px', '37px','30px','35px','auto', 'auto'],
                        fill: ["rgba(0,103,255,1)"],
                        stroke: [2,"rgb(0, 0, 0)","solid"]
                    },
                    {
                        id: 'Rectangle11',
                        type: 'rect',
                        rect: ['0px', '55px','30px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [1,"rgb(0, 0, 0)","solid"]
                    },
                    {
                        id: 'Rectangle12',
                        type: 'rect',
                        rect: ['0px', '20px','30px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [1,"rgb(0, 0, 0)","solid"]
                    }]
                },
                {
                    id: 'Blue_Blocks_One_Half',
                    type: 'group',
                    rect: ['-67px', '0px','32','37','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle10Copy',
                        type: 'rect',
                        rect: ['0px', '0px','30px','35px','auto', 'auto'],
                        fill: ["rgba(0,103,255,0.00)"],
                        stroke: [2,"rgb(0, 0, 0)","solid"]
                    },
                    {
                        id: 'Rectangle10',
                        type: 'rect',
                        rect: ['0px', '37px','30px','35px','auto', 'auto'],
                        fill: ["rgba(0,103,255,1)"],
                        stroke: [2,"rgb(0, 0, 0)","solid"]
                    }]
                },
                {
                    id: 'equals',
                    type: 'text',
                    rect: ['-24px', '38px','18px','18px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'hint2b',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2b.mp3','media/hint2b.ogg']
            },
            {
                id: 'Red_equation',
                type: 'group',
                rect: ['494px', '316','22','19','auto', 'auto'],
                c: [
                {
                    id: 'One_halfCopy3',
                    type: 'group',
                    rect: ['0px', '0px','22','19','auto', 'auto'],
                    c: [
                    {
                        id: 'Text10Copy4',
                        type: 'text',
                        rect: ['0px', '0px','22px','19px','auto', 'auto'],
                        text: "4",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(147,10,10,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text9Copy4',
                        type: 'text',
                        rect: ['-1px', '-24px','22px','19px','auto', 'auto'],
                        text: "2<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(147,10,10,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle3Copy4',
                        type: 'rect',
                        rect: ['-7px', '-5px','22px','2px','auto', 'auto'],
                        fill: ["rgba(147,10,10,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'equals_2',
                    type: 'text',
                    rect: ['-29px', '-12px','25px','18px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(147,10,10,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text27',
                    type: 'text',
                    rect: ['-62px', '0px','34px','18px','auto', 'auto'],
                    text: "x 2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(147,10,10,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text26',
                    type: 'text',
                    rect: ['-62px', '-24px','34px','18px','auto', 'auto'],
                    text: "x 2<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(147,10,10,1)", "400", "none", "normal"]
                },
                {
                    id: 'One_halfCopy2',
                    type: 'group',
                    rect: ['-82px', '0px','22','19','auto', 'auto'],
                    c: [
                    {
                        id: 'Text10Copy3',
                        type: 'text',
                        rect: ['0px', '0px','22px','19px','auto', 'auto'],
                        text: "2",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(147,10,10,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text9Copy3',
                        type: 'text',
                        rect: ['-1px', '-24px','22px','19px','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(147,10,10,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle3Copy3',
                        type: 'rect',
                        rect: ['-7px', '-5px','22px','2px','auto', 'auto'],
                        fill: ["rgba(147,10,10,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'Rectangle13',
                    type: 'rect',
                    rect: ['-56px', '-4px','22px','2px','auto', 'auto'],
                    fill: ["rgba(147,10,10,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'Hint_2_Equation',
                type: 'group',
                rect: ['299px', '334px','22','19','auto', 'auto'],
                c: [
                {
                    id: 'three_fourth_plus_2_halfs',
                    type: 'group',
                    rect: ['0px', '0px','22','19','auto', 'auto'],
                    c: [
                    {
                        id: '_3_fourths_and_1_half',
                        type: 'group',
                        rect: ['-7', '-5','22','2','auto', 'auto'],
                        c: [
                        {
                            id: 'tow_hlafs',
                            type: 'group',
                            rect: ['0px', '0px','22','2','auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle3Copy5',
                                type: 'rect',
                                rect: ['0px', '0px','22px','2px','auto', 'auto'],
                                fill: ["rgba(0,85,68,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Text10Copy5',
                                type: 'text',
                                rect: ['7px', '4px','22px','19px','auto', 'auto'],
                                text: "4<br>",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                            },
                            {
                                id: 'Text9Copy5',
                                type: 'text',
                                rect: ['6px', '-19px','22px','19px','auto', 'auto'],
                                text: "2<br>",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                            }]
                        },
                        {
                            id: 'plus2Copy',
                            type: 'text',
                            rect: ['-21px', '-6px','22px','18px','auto', 'auto'],
                            text: "+",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,85,68,1)", "400", "none", "normal"]
                        },
                        {
                            id: 'three_fourthsCopy2',
                            type: 'group',
                            rect: ['-55px', '0px','22','2','auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle2Copy3',
                                type: 'rect',
                                rect: ['0px', '0px','22px','2px','auto', 'auto'],
                                fill: ["rgba(0,85,68,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text6Copy3',
                                type: 'text',
                                rect: ['6px', '-19px','22px','19px','auto', 'auto'],
                                text: "3",
                                align: "left",
                                font: ['Times New Roman, Times, serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                            },
                            {
                                id: 'Text7Copy3',
                                type: 'text',
                                rect: ['6px', '3px','22px','19px','auto', 'auto'],
                                text: "4<br>",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                            }]
                        }]
                    },
                    {
                        id: 'Text21Copy',
                        type: 'text',
                        rect: ['-81px', '-11px','25px','18px','auto', 'auto'],
                        text: "(",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,85,68,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text22Copy',
                        type: 'text',
                        rect: ['30px', '-12px','52px','22px','auto', 'auto'],
                        text: ")<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,85,68,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: '_35_plus',
                    type: 'text',
                    rect: ['-125px', '-9px','34px','22px','auto', 'auto'],
                    text: "35 + ",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
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
                id: 'Five_fourths',
                type: 'group',
                rect: ['260px', '330px','22','2','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle2Copy4',
                    type: 'rect',
                    rect: ['0px', '0px','22px','2px','auto', 'auto'],
                    fill: ["rgba(0,85,68,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'Text6Copy4',
                    type: 'text',
                    rect: ['6px', '-19px','22px','19px','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Text7Copy4',
                    type: 'text',
                    rect: ['6px', '3px','22px','19px','auto', 'auto'],
                    text: "4<br>",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: '_35_plus_one_and_one_fourths',
                type: 'group',
                rect: ['223', '385','22','47','auto', 'auto'],
                c: [
                {
                    id: 'Hint_3_One_fourths',
                    type: 'group',
                    rect: ['-2px', '0px','22','47px','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle2Copy5',
                        type: 'rect',
                        rect: ['0px', '0px','22px','2px','auto', 'auto'],
                        fill: ["rgba(0,85,68,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    },
                    {
                        id: 'Text6Copy5',
                        type: 'text',
                        rect: ['6px', '-19px','22px','19px','auto', 'auto'],
                        text: "1<br>",
                        align: "left",
                        font: ['Times New Roman, Times, serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text7Copy5',
                        type: 'text',
                        rect: ['6px', '3px','22px','19px','auto', 'auto'],
                        text: "4<br>",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                    }]
                },
                {
                    id: '_35_plus_1',
                    type: 'text',
                    rect: ['-49px', '-8px','78px','18px','auto', 'auto'],
                    text: "35 + 1",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
                }]
            },
            {
                id: '_36_and_one_fourth',
                type: 'group',
                rect: ['210px', '440px','22','47','auto', 'auto'],
                c: [
                {
                    id: 'Hint_3_One_fourthsCopy',
                    type: 'group',
                    rect: ['0px', '0px','22','47px','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle2Copy6',
                        type: 'rect',
                        rect: ['0px', '0px','22px','2px','auto', 'auto'],
                        fill: ["rgba(0,85,68,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    },
                    {
                        id: 'Text6Copy6',
                        type: 'text',
                        rect: ['6px', '-19px','22px','19px','auto', 'auto'],
                        text: "1<br>",
                        align: "left",
                        font: ['Times New Roman, Times, serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text7Copy6',
                        type: 'text',
                        rect: ['6px', '3px','22px','19px','auto', 'auto'],
                        text: "4<br>",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1.00)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'equal_36',
                    type: 'text',
                    rect: ['-35px', '-7px','32px','22px','auto', 'auto'],
                    text: "= 36",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
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
                id: 'Choose_C',
                type: 'text',
                rect: ['188px', '489px','188px','37px','auto', 'auto'],
                text: "Choose (C)<br> ",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,126,23,1.00)", "700", "none", "normal"]
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
            "${_Arrow_2}": [
                ["style", "top", '239px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '234px'],
                ["transform", "rotateZ", '25deg']
            ],
            "${_One_halfCopy2}": [
                ["style", "left", '-82px'],
                ["style", "top", '0px']
            ],
            "${_Text9Copy3}": [
                ["style", "top", '-24px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-1px'],
                ["color", "color", 'rgba(147,10,10,1.00)']
            ],
            "${_Text9Copy}": [
                ["style", "top", '-19px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '6px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Text11Copy}": [
                ["style", "top", '-7px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-20px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_plus_1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-132px'],
                ["style", "font-size", '18px']
            ],
            "${_Text9Copy2}": [
                ["style", "top", '-24px'],
                ["style", "left", '-1px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Text15Copy}": [
                ["style", "top", '-8px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '27px'],
                ["style", "height", '22px']
            ],
            "${_Text6Copy}": [
                ["style", "top", '-26px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${__35_plus_one_and_one_fourths}": [
                ["style", "opacity", '0.000000']
            ],
            "${_Rectangle3Copy}": [
                ["color", "background-color", 'rgba(0,85,68,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '2px']
            ],
            "${_Text7Copy5}": [
                ["style", "top", '3px'],
                ["style", "left", '6px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Rectangle8Copy}": [
                ["style", "top", '-23px'],
                ["transform", "rotateZ", '-2deg'],
                ["style", "height", '20px'],
                ["style", "left", '-6px'],
                ["style", "width", '6px']
            ],
            "${_plus}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ],
            "${_three_fourthsCopy}": [
                ["style", "left", '-62px'],
                ["style", "top", '-5px']
            ],
            "${__35_plus}": [
                ["style", "top", '-9px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-125px']
            ],
            "${_three_fourthsCopy2}": [
                ["style", "left", '-55px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle13}": [
                ["style", "top", '-4px'],
                ["style", "left", '-56px'],
                ["style", "width", '22px']
            ],
            "${_Rectangle5Copy2}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "top", '7px'],
                ["style", "left", '29px'],
                ["style", "width", '20px']
            ],
            "${_Answers}": [
                ["transform", "scaleX", '1.06686'],
                ["style", "left", '29px'],
                ["transform", "scaleY", '1.14439'],
                ["style", "top", '400px']
            ],
            "${_Rectangle5Copy}": [
                ["style", "top", '7px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '29px'],
                ["style", "width", '20px']
            ],
            "${__20_plus_15}": [
                ["style", "top", '2px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-225px']
            ],
            "${_Text6}": [
                ["style", "top", '-19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '6px']
            ],
            "${_Rectangle7Copy}": [
                ["style", "top", '-52px'],
                ["transform", "rotateZ", '-46deg'],
                ["style", "height", '60px'],
                ["color", "background-color", 'rgba(0,103,255,1.00)'],
                ["style", "left", '-24px'],
                ["style", "width", '6px']
            ],
            "${_Rectangle11}": [
                ["style", "left", '0px'],
                ["style", "top", '55px']
            ],
            "${_Text6Copy2}": [
                ["style", "top", '-19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '6px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Text15Copy2}": [
                ["style", "top", '-8px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '27px'],
                ["style", "height", '22px']
            ],
            "${_plus2}": [
                ["style", "top", '-11px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-28px'],
                ["style", "font-size", '18px']
            ],
            "${_Text6Copy3}": [
                ["style", "top", '-19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '6px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Text6Copy4}": [
                ["style", "top", '-19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '6px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Text7Copy}": [
                ["style", "top", '-4px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Rectangle7}": [
                ["color", "background-color", 'rgba(0,103,255,1.00)'],
                ["transform", "rotateZ", '-60deg'],
                ["style", "height", '76px'],
                ["style", "top", '-56px'],
                ["style", "left", '-17px'],
                ["style", "width", '6px']
            ],
            "${_Question_Text}": [
                ["style", "top", '0px'],
                ["style", "font-size", '16px'],
                ["style", "height", '20px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '0px'],
                ["style", "width", '78px']
            ],
            "${_Rectangle10Copy3}": [
                ["color", "background-color", 'rgba(0,103,255,0)'],
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "height", '35px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '30px']
            ],
            "${_Text9}": [
                ["style", "left", '-1px'],
                ["style", "top", '-24px']
            ],
            "${_Text16Copy3}": [
                ["style", "top", '14px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '27px'],
                ["style", "height", '19px']
            ],
            "${_Rectangle5Copy3}": [
                ["style", "top", '7px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '29px'],
                ["style", "width", '20px']
            ],
            "${_Rectangle2Copy3}": [
                ["color", "background-color", 'rgba(0,85,68,1.00)'],
                ["style", "height", '2px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${_equals}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '38px'],
                ["style", "left", '-24px'],
                ["style", "font-size", '18px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(255,0,0,1)'],
                ["transform", "rotateZ", '19deg'],
                ["style", "height", '72px'],
                ["style", "top", '-31px'],
                ["style", "left", '-4px'],
                ["style", "width", '6px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["style", "top", '-31px'],
                ["style", "left", '-1px'],
                ["style", "width", '6px']
            ],
            "${__35_plus_1}": [
                ["style", "left", '-49px'],
                ["style", "top", '-8px']
            ],
            "${_Rectangle8}": [
                ["style", "top", '-17px'],
                ["transform", "rotateZ", '-17deg'],
                ["style", "height", '20px'],
                ["style", "left", '12px'],
                ["style", "width", '6px']
            ],
            "${_Rectangle3Copy3}": [
                ["color", "background-color", 'rgba(147,10,10,1.00)'],
                ["style", "top", '-5px'],
                ["style", "left", '-7px'],
                ["style", "height", '2px']
            ],
            "${_Text6Copy5}": [
                ["style", "top", '-19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '6px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Text10Copy}": [
                ["style", "top", '5px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '7px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Text22}": [
                ["style", "top", '-12px'],
                ["style", "left", '30px']
            ],
            "${_Text17Copy3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '22px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${__15-one-half}": [
                ["style", "left", '25px'],
                ["style", "top", '49px']
            ],
            "${_tow_hlafs}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_three_fourth_plus_2_halfs}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_Text21}": [
                ["style", "top", '-11px'],
                ["style", "left", '-81px'],
                ["style", "width", '25px']
            ],
            "${_Five_fourths}": [
                ["style", "top", '374px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '258px']
            ],
            "${__20-three-fourths}": [
                ["style", "left", '109px'],
                ["style", "top", '15px']
            ],
            "${_AnswerB}": [
                ["style", "top", '454px'],
                ["style", "left", '66px']
            ],
            "${_Text10}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint_3_One_fourthsCopy}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "height", '47px']
            ],
            "${_Text10Copy5}": [
                ["style", "top", '4px'],
                ["style", "left", '7px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_AnswerA}": [
                ["style", "left", '66px'],
                ["style", "top", '410px']
            ],
            "${_Rectangle3Copy2}": [
                ["color", "background-color", 'rgba(0,85,68,1.00)'],
                ["style", "top", '-5px'],
                ["style", "left", '-7px'],
                ["style", "height", '2px']
            ],
            "${_Text17Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '22px']
            ],
            "${_Rectangle9}": [
                ["style", "height", '6px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '20px']
            ],
            "${_Blue_Blocks_Two_Halfs}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_Hint_3_One_fourths}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '-2px'],
                ["style", "height", '47px']
            ],
            "${_One_halfCopy3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text7Copy2}": [
                ["style", "top", '3px'],
                ["style", "left", '6px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Rectangle2Copy}": [
                ["color", "background-color", 'rgba(0,85,68,1.00)'],
                ["style", "height", '2px'],
                ["style", "top", '-7px'],
                ["style", "left", '-6px'],
                ["style", "width", '22px']
            ],
            "${_Hint_1_Expression_2_}": [
                ["style", "left", '380px'],
                ["style", "top", '272px']
            ],
            "${_Rectangle9Copy}": [
                ["style", "top", '-6px'],
                ["transform", "rotateZ", '10deg'],
                ["style", "height", '6px'],
                ["style", "left", '-21px'],
                ["style", "width", '20px']
            ],
            "${_Arrow_3}": [
                ["style", "opacity", '0.000000']
            ],
            "${_Text26}": [
                ["style", "top", '-24px'],
                ["style", "width", '34px'],
                ["style", "left", '-62px'],
                ["style", "font-size", '16px']
            ],
            "${_Hint_1_Expression_1}": [
                ["style", "display", 'none']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '2px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${_Text15}": [
                ["style", "top", '-12px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '27px']
            ],
            "${_Choose_C}": [
                ["style", "top", '489px'],
                ["color", "color", 'rgba(0,126,23,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '188px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Hint_1_Text}": [
                ["style", "top", '143px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '95px'],
                ["style", "width", '300px']
            ],
            "${_Text8}": [
                ["style", "left", '-28px'],
                ["style", "top", '-15px']
            ],
            "${_Text16Copy}": [
                ["style", "top", '14px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '27px'],
                ["style", "height", '19px']
            ],
            "${_Rectangle3Copy4}": [
                ["style", "top", '-5px'],
                ["style", "height", '2px'],
                ["style", "left", '-7px'],
                ["color", "background-color", 'rgba(147,10,10,1)']
            ],
            "${_Blue_Blocks}": [
                ["style", "top", '186px'],
                ["style", "opacity", '0'],
                ["style", "left", '477px']
            ],
            "${_Red_equation}": [
                ["style", "left", '494px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Rectangle2Copy5}": [
                ["color", "background-color", 'rgba(0,85,68,1.00)'],
                ["style", "height", '2px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${_Text14}": [
                ["style", "top", '72px'],
                ["style", "left", '4px'],
                ["style", "width", '412px']
            ],
            "${_Text13}": [
                ["style", "left", '59px'],
                ["style", "top", '42px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text16Copy2}": [
                ["style", "top", '14px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '27px'],
                ["style", "height", '19px']
            ],
            "${_Rectangle12}": [
                ["style", "top", '20px'],
                ["style", "left", '0px'],
                ["style", "border-width", '1px']
            ],
            "${__15-one-half_Hint_1}": [
                ["style", "left", '51px'],
                ["style", "top", '7px']
            ],
            "${_Text21Copy}": [
                ["style", "top", '-11px'],
                ["style", "opacity", '1'],
                ["style", "left", '-81px'],
                ["style", "width", '25px']
            ],
            "${_Text10Copy2}": [
                ["style", "top", '-1px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Rectangle10Copy2}": [
                ["style", "top", '37px'],
                ["style", "border-width", '2px'],
                ["style", "height", '35px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '30px']
            ],
            "${_Text7Copy3}": [
                ["style", "top", '3px'],
                ["style", "left", '6px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Text9Copy4}": [
                ["style", "top", '-24px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-1px'],
                ["color", "color", 'rgba(147,10,10,1)']
            ],
            "${_Text6Copy6}": [
                ["style", "top", '-19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '6px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Hint_1_text_2}": [
                ["style", "top", '322px'],
                ["color", "color", 'rgba(156,0,0,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '173px'],
                ["style", "display", 'block']
            ],
            "${_Rectangle3}": [
                ["style", "height", '2px'],
                ["style", "left", '-7px'],
                ["style", "top", '-5px']
            ],
            "${_Rectangle6Copy2}": [
                ["style", "top", '17px'],
                ["transform", "rotateZ", '151deg'],
                ["style", "height", '21px'],
                ["style", "left", '-19px'],
                ["style", "width", '6px']
            ],
            "${_equals_2}": [
                ["style", "top", '-12px'],
                ["style", "width", '25px'],
                ["style", "left", '-29px'],
                ["style", "font-size", '18px']
            ],
            "${_Text22Copy}": [
                ["style", "top", '-12px'],
                ["style", "opacity", '1'],
                ["style", "left", '30px']
            ],
            "${_Text7Copy6}": [
                ["style", "top", '3px'],
                ["style", "left", '6px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Text8Copy}": [
                ["style", "top", '-15px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-28px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Text17Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '22px']
            ],
            "${_Rectangle6Copy}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '219deg'],
                ["style", "height", '21px'],
                ["style", "left", '6px'],
                ["style", "width", '6px']
            ],
            "${_One_halfCopy}": [
                ["style", "top", '12px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-30px']
            ],
            "${__36_and_one_fourth}": [
                ["style", "top", '440px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '210px']
            ],
            "${_Text11}": [
                ["style", "left", '-20px'],
                ["style", "top", '-7px']
            ],
            "${_Text27}": [
                ["style", "top", '0px'],
                ["style", "left", '-62px'],
                ["style", "font-size", '16px']
            ],
            "${_plus2Copy}": [
                ["style", "top", '-6px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-21px'],
                ["style", "font-size", '18px']
            ],
            "${_Rectangle10Copy}": [
                ["color", "background-color", 'rgba(0,103,255,0.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '35px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '30px']
            ],
            "${_Rectangle2Copy6}": [
                ["color", "background-color", 'rgba(0,85,68,1.00)'],
                ["style", "height", '2px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${_Arrow_1}": [
                ["style", "top", '249px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '167px']
            ],
            "${_Text7}": [
                ["style", "top", '3px'],
                ["style", "left", '6px']
            ],
            "${_Rectangle2Copy2}": [
                ["color", "background-color", 'rgba(0,85,68,1.00)'],
                ["style", "height", '2px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${_Rectangle2Copy4}": [
                ["color", "background-color", 'rgba(0,85,68,1.00)'],
                ["style", "height", '2px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${_Text9Copy5}": [
                ["style", "top", '-19px'],
                ["style", "left", '6px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Rectangle5}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '7px'],
                ["style", "left", '29px'],
                ["style", "width", '20px']
            ],
            "${_Rectangle10}": [
                ["style", "top", '37px'],
                ["style", "left", '0px'],
                ["style", "height", '35px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '30px']
            ],
            "${__20-three-fourths_Hint_1}": [
                ["style", "left", '-37px'],
                ["style", "top", '14px']
            ],
            "${_Blue_Blocks_One_Half}": [
                ["style", "left", '-67px'],
                ["style", "top", '0px']
            ],
            "${_AnswerC}": [
                ["style", "top", '493px'],
                ["style", "left", '66px']
            ],
            "${_Text10Copy4}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(147,10,10,1)']
            ],
            "${_Rectangle6Copy3}": [
                ["style", "top", '21px'],
                ["transform", "rotateZ", '55deg'],
                ["style", "height", '21px'],
                ["style", "left", '-6px'],
                ["style", "width", '6px']
            ],
            "${_AnswerCCopy}": [
                ["style", "top", '532px'],
                ["style", "left", '66px']
            ],
            "${_Text17}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text16}": [
                ["style", "top", '14px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '27px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '-1px'],
                ["transform", "rotateZ", '148deg'],
                ["style", "height", '21px'],
                ["style", "left", '-7px'],
                ["style", "width", '6px']
            ],
            "${_Arrow_4}": [
                ["style", "top", '259px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '349px']
            ],
            "${__3_fourths_and_1_half}": [
                ["style", "opacity", '1']
            ],
            "${_Text10Copy3}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(147,10,10,1.00)']
            ],
            "${_Text12}": [
                ["style", "top", '0px'],
                ["style", "left", '131px'],
                ["style", "width", '300px']
            ],
            "${_Rectangle3Copy5}": [
                ["style", "top", '0px'],
                ["style", "height", '2px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(0,85,68,1.00)']
            ],
            "${_Text7Copy4}": [
                ["style", "top", '3px'],
                ["style", "left", '6px'],
                ["color", "color", 'rgba(0,85,68,1.00)']
            ],
            "${_Text15Copy3}": [
                ["style", "top", '-8px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '27px'],
                ["style", "height", '22px']
            ],
            "${_equal_36}": [
                ["style", "left", '-35px'],
                ["style", "top", '-7px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 99000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 20000,
                "Hint 2": 46000,
                "Hint 3": 68000,
                "Answer Hint": 90000
            },
            timeline: [
                { id: "eid305", tween: [ "style", "${_three_fourth_plus_2_halfs}", "opacity", '1', { fromValue: '0.000000'}], position: 65000, duration: 1000 },
                { id: "eid290", tween: [ "style", "${_Hint_1_text_2}", "display", 'none', { fromValue: 'block'}], position: 55000, duration: 0 },
                { id: "eid311", tween: [ "style", "${_Five_fourths}", "opacity", '1', { fromValue: '0.000000'}], position: 73000, duration: 500 },
                { id: "eid302", tween: [ "style", "${__35_plus}", "opacity", '1', { fromValue: '0.000000'}], position: 65000, duration: 1000 },
                { id: "eid282", tween: [ "style", "${_Arrow_4}", "opacity", '1', { fromValue: '0.000000'}], position: 32000, duration: 1000 },
                { id: "eid321", tween: [ "style", "${_Hint_3_One_fourthsCopy}", "opacity", '1', { fromValue: '1'}], position: 99000, duration: 0 },
                { id: "eid308", tween: [ "style", "${__3_fourths_and_1_half}", "opacity", '0', { fromValue: '1'}], position: 74000, duration: 1500 },
                { id: "eid288", tween: [ "style", "${_Hint_1_text_2}", "opacity", '1', { fromValue: '0.000000'}], position: 43000, duration: 1000 },
                { id: "eid250", tween: [ "style", "${_Arrow_1}", "opacity", '1', { fromValue: '0.000000'}], position: 29000, duration: 1000 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid324", tween: [ "style", "${__35_plus_one_and_one_fourths}", "opacity", '1', { fromValue: '0.000000'}], position: 87000, duration: 1000 },
                { id: "eid297", tween: [ "style", "${_Blue_Blocks}", "opacity", '1', { fromValue: '0'}], position: 57000, duration: 1000 },
                { id: "eid244", tween: [ "style", "${_Hint_1_Text}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid294", tween: [ "style", "${_Red_equation}", "opacity", '1', { fromValue: '0.000000'}], position: 55000, duration: 1000 },
                { id: "eid245", tween: [ "style", "${_Hint_1_Expression_1}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid337", tween: [ "style", "${_Five_fourths}", "top", '328px', { fromValue: '374px'}], position: 74500, duration: 750 },
                { id: "eid339", tween: [ "style", "${_Five_fourths}", "top", '329px', { fromValue: '328px'}], position: 75250, duration: 250 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid332", tween: [ "style", "${_Choose_C}", "opacity", '1', { fromValue: '0.000000'}], position: 97000, duration: 1000 },
                { id: "eid279", tween: [ "style", "${_Arrow_3}", "opacity", '1', { fromValue: '0.000000'}], position: 32000, duration: 1000 },
                { id: "eid338", tween: [ "style", "${_Five_fourths}", "left", '262px', { fromValue: '258px'}], position: 74500, duration: 750 },
                { id: "eid320", tween: [ "style", "${_Hint_3_One_fourths}", "opacity", '1', { fromValue: '1'}], position: 87000, duration: 0 },
                { id: "eid270", tween: [ "style", "${_Arrow_2}", "opacity", '1', { fromValue: '0.000000'}], position: 29000, duration: 1000 },
                { id: "eid273", tween: [ "style", "${__20_plus_15}", "opacity", '1', { fromValue: '0.000000'}], position: 30000, duration: 1000 },
                { id: "eid285", tween: [ "style", "${_One_halfCopy}", "opacity", '0.97', { fromValue: '0.000000'}], position: 33500, duration: 1000 },
                { id: "eid317", tween: [ "style", "${_Text21Copy}", "opacity", '0', { fromValue: '1'}], position: 75500, duration: 500 },
                { id: "eid329", tween: [ "style", "${__36_and_one_fourth}", "opacity", '1', { fromValue: '0.000000'}], position: 95954, duration: 1046 },
                { id: "eid314", tween: [ "style", "${_Text22Copy}", "opacity", '0', { fromValue: '1'}], position: 75500, duration: 500 },
                { id: "eid276", tween: [ "style", "${_plus_1}", "opacity", '1', { fromValue: '0.000000'}], position: 31000, duration: 1000 },
                { id: "eid242", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid246", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1a}', [] ], ""], position: 20000 },
                { id: "eid289", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1b}', [] ], ""], position: 35000 },
                { id: "eid291", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2a}', [] ], ""], position: 46000 },
                { id: "eid298", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2b}', [] ], ""], position: 58000 },
                { id: "eid333", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 68000 },
                { id: "eid334", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 90000 }            ]
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
