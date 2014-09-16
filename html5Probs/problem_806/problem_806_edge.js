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
                id: 'Question',
                type: 'group',
                rect: ['162px', '44px','36','19','auto', 'auto'],
                c: [
                {
                    id: 'Text13',
                    type: 'text',
                    rect: ['0px', '0px','36px','19px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text12',
                    type: 'text',
                    rect: ['-62px', '-1px','36px','19px','auto', 'auto'],
                    text: "-",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'One_third',
                    type: 'group',
                    rect: ['-32px', '13px','65px','19','auto', 'auto'],
                    c: [
                    {
                        id: 'Text11',
                        type: 'text',
                        rect: ['0px', '0px','22px','19px','auto', 'auto'],
                        text: "3",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle4',
                        type: 'rect',
                        rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Text10',
                        type: 'text',
                        rect: ['0px', '-26px','36px','22px','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'Mixed_number',
                    type: 'group',
                    rect: ['-93px', '13px','22','22','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle3',
                        type: 'rect',
                        rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Text9',
                        type: 'text',
                        rect: ['0px', '0px','22px','22px','auto', 'auto'],
                        text: "7<br>",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text7',
                        type: 'text',
                        rect: ['0px', '-26px','36px','22px','auto', 'auto'],
                        text: "4",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6',
                        type: 'text',
                        rect: ['-32px', '-14px','36px','19px','auto', 'auto'],
                        text: "- 4",
                        align: "left",
                        font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
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
                id: 'Answer_A',
                type: 'group',
                rect: ['118px', '418px','22','22','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle3Copy',
                    type: 'rect',
                    rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Text9Copy',
                    type: 'text',
                    rect: ['-2px', '0px','22px','22px','auto', 'auto'],
                    text: "21",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text7Copy',
                    type: 'text',
                    rect: ['-3px', '-26px','36px','22px','auto', 'auto'],
                    text: "19",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text6Copy',
                    type: 'text',
                    rect: ['-32px', '-14px','36px','19px','auto', 'auto'],
                    text: "- 4",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Answer_B',
                type: 'group',
                rect: ['119px', '457px','22','22','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle3Copy2',
                    type: 'rect',
                    rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Text9Copy2',
                    type: 'text',
                    rect: ['0px', '0px','22px','22px','auto', 'auto'],
                    text: "4<br>",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text7Copy2',
                    type: 'text',
                    rect: ['0px', '-22px','36px','22px','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text6Copy2',
                    type: 'text',
                    rect: ['-32px', '-14px','36px','19px','auto', 'auto'],
                    text: "- 4",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Answer_C',
                type: 'group',
                rect: ['118px', '499px','22','22','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle3Copy3',
                    type: 'rect',
                    rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Text9Copy3',
                    type: 'text',
                    rect: ['-2px', '0px','22px','22px','auto', 'auto'],
                    text: "21",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text7Copy3',
                    type: 'text',
                    rect: ['1px', '-23px','36px','22px','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text6Copy3',
                    type: 'text',
                    rect: ['-32px', '-14px','36px','19px','auto', 'auto'],
                    text: "- 4",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Answer_D',
                type: 'group',
                rect: ['120px', '540px','22','22','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle3Copy4',
                    type: 'rect',
                    rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Text9Copy4',
                    type: 'text',
                    rect: ['0px', '0px','22px','22px','auto', 'auto'],
                    text: "4<br>",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text7Copy4',
                    type: 'text',
                    rect: ['0px', '-22px','36px','22px','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text6Copy4',
                    type: 'text',
                    rect: ['-25px', '-14px','36px','19px','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Hint1a',
                display: 'block',
                type: 'text',
                rect: ['37px', '102px','302px','60px','auto', 'auto'],
                text: "What do we do if we are subtracting two fractions with different denominators? <br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Hint1b',
                display: 'block',
                type: 'text',
                rect: ['37px', '171px','359px','34px','auto', 'auto'],
                text: "We need to find the least common denominator.<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Hint1c',
                display: 'block',
                type: 'text',
                rect: ['37px', '220px','369px','45px','auto', 'auto'],
                text: "What is the least common denominator of 3 and 7? <br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
            },
            {
                id: 'hint1',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1.ogg','media/hint1.mp3']
            },
            {
                id: 'Hint2a',
                display: 'block',
                type: 'text',
                rect: ['37px', '271px','346px','45px','auto', 'auto'],
                text: "The least common denominator of 3 and 7 is 21",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Hint2b',
                display: 'block',
                type: 'text',
                rect: ['38px', '326px','462px','45px','auto', 'auto'],
                text: "What fraction with a denominator of 21 is equivalent to 1/3?",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
            },
            {
                id: 'hint2',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2.mp3','media/hint2.ogg']
            },
            {
                id: 'Hint_2_expression',
                type: 'group',
                rect: ['473px', '58px','65','19','auto', 'auto'],
                c: [
                {
                    id: 'One_third_Hint_2Copy',
                    type: 'group',
                    rect: ['0px', '0px','65px','19','auto', 'auto'],
                    c: [
                    {
                        id: 'Text11Copy2',
                        type: 'text',
                        rect: ['-2px', '0px','22px','19px','auto', 'auto'],
                        text: "21",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle4Copy2',
                        type: 'rect',
                        rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                        fill: ["rgba(9,118,184,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Text10Copy2',
                        type: 'text',
                        rect: ['0px', '-26px','36px','22px','auto', 'auto'],
                        text: "7",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'Text20',
                    type: 'text',
                    rect: ['-31px', '-11px','48px','22px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text19Copy',
                    type: 'text',
                    rect: ['-70px', '0px','36px','19px','auto', 'auto'],
                    text: "x 7",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(176,4,20,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Text19',
                    type: 'text',
                    rect: ['-69px', '-25px','36px','19px','auto', 'auto'],
                    text: "x 7",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(176,4,20,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'One_third_Hint_2',
                    type: 'group',
                    rect: ['-87px', '0px','65px','19','auto', 'auto'],
                    c: [
                    {
                        id: 'Text11Copy',
                        type: 'text',
                        rect: ['0px', '0px','22px','19px','auto', 'auto'],
                        text: "3",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle4Copy',
                        type: 'rect',
                        rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                        fill: ["rgba(9,118,184,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Text10Copy',
                        type: 'text',
                        rect: ['0px', '-26px','36px','22px','auto', 'auto'],
                        text: "1",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                    }]
                }]
            },
            {
                id: 'Hint_3a',
                type: 'group',
                rect: ['115px', '160px','65','22','auto', 'auto'],
                c: [
                {
                    id: 'Mixed_numberCopy3',
                    type: 'group',
                    rect: ['-30px', '13px','22','22','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle3Copy5',
                        type: 'rect',
                        rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                        fill: ["rgba(9,118,184,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Text9Copy5',
                        type: 'text',
                        rect: ['0px', '0px','22px','22px','auto', 'auto'],
                        text: "7<br>",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text7Copy5',
                        type: 'text',
                        rect: ['0px', '-26px','36px','22px','auto', 'auto'],
                        text: "4",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6Copy5',
                        type: 'text',
                        rect: ['-32px', '-14px','36px','19px','auto', 'auto'],
                        text: "- 4",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'Text22',
                    type: 'text',
                    rect: ['0px', '0px','65px','22px','auto', 'auto'],
                    text: "?",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text21',
                    type: 'text',
                    rect: ['-78px', '-56px','256px','43px','auto', 'auto'],
                    text: "What mixed number with a denominator of 21 is equivalent to",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
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
                id: 'Hint_3_expression',
                type: 'group',
                rect: ['386px', '124px','22','22','auto', 'auto'],
                c: [
                {
                    id: 'Mixed_numberCopy5',
                    type: 'group',
                    rect: ['0px', '0px','22','22','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle3Copy7',
                        type: 'rect',
                        rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                        fill: ["rgba(9,118,184,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Text9Copy7',
                        type: 'text',
                        rect: ['0px', '0px','22px','22px','auto', 'auto'],
                        text: "7<br>",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text7Copy7',
                        type: 'text',
                        rect: ['0px', '-26px','36px','22px','auto', 'auto'],
                        text: "4",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6Copy7',
                        type: 'text',
                        rect: ['-32px', '-14px','36px','19px','auto', 'auto'],
                        text: "- 4",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'Text23',
                    type: 'text',
                    rect: ['13px', '-26px','48px','22px','auto', 'auto'],
                    text: "x 3",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(176,4,20,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Text23Copy',
                    type: 'text',
                    rect: ['13px', '0px','48px','22px','auto', 'auto'],
                    text: "x 3",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(176,4,20,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Text24',
                    type: 'text',
                    rect: ['53px', '-13px','48px','19px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                },
                {
                    id: 'Mixed_numberCopy6',
                    type: 'group',
                    rect: ['101px', '0px','22','22','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle3Copy8',
                        type: 'rect',
                        rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                        fill: ["rgba(9,118,184,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Text9Copy8',
                        type: 'text',
                        rect: ['-1px', '0px','22px','22px','auto', 'auto'],
                        text: "21",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text7Copy8',
                        type: 'text',
                        rect: ['-2px', '-26px','36px','22px','auto', 'auto'],
                        text: "12",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text6Copy8',
                        type: 'text',
                        rect: ['-32px', '-14px','36px','19px','auto', 'auto'],
                        text: "- 4",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                    }]
                }]
            },
            {
                id: 'Hint_4_expression',
                type: 'group',
                rect: ['148px', '224px','65','19','auto', 'auto'],
                c: [
                {
                    id: 'fraction1',
                    type: 'group',
                    rect: ['110px', '0px','22','22','auto', 'auto'],
                    c: [
                    {
                        id: 'Mixed_numberCopy8',
                        type: 'group',
                        rect: ['0px', '0px','22','22','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle3Copy10',
                            type: 'rect',
                            rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                            fill: ["rgba(9,118,184,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text9Copy10',
                            type: 'text',
                            rect: ['-1px', '0px','22px','22px','auto', 'auto'],
                            text: "21",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        },
                        {
                            id: 'Text7Copy10',
                            type: 'text',
                            rect: ['-2px', '-26px','36px','22px','auto', 'auto'],
                            text: "12",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        },
                        {
                            id: 'Text6Copy10',
                            type: 'text',
                            rect: ['-32px', '-14px','36px','19px','auto', 'auto'],
                            text: "- 4",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        }]
                    },
                    {
                        id: 'Text27',
                        type: 'text',
                        rect: ['-48px', '-14px','48px','28px','auto', 'auto'],
                        text: "(",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text28',
                        type: 'text',
                        rect: ['28px', '-14px','22px','28px','auto', 'auto'],
                        text: ")",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'Text29',
                    type: 'text',
                    rect: ['166px', '-12px','36px','22px','auto', 'auto'],
                    text: "+",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                },
                {
                    id: 'fraction2',
                    type: 'group',
                    rect: ['237px', '1px','65','19','auto', 'auto'],
                    c: [
                    {
                        id: 'One_third_Hint_2Copy3',
                        type: 'group',
                        rect: ['0px', '0px','65px','19','auto', 'auto'],
                        c: [
                        {
                            id: 'Text11Copy4',
                            type: 'text',
                            rect: ['-2px', '0px','22px','19px','auto', 'auto'],
                            text: "21",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        },
                        {
                            id: 'Rectangle4Copy4',
                            type: 'rect',
                            rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                            fill: ["rgba(9,118,184,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text10Copy4',
                            type: 'text',
                            rect: ['0px', '-26px','36px','22px','auto', 'auto'],
                            text: "7",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        }]
                    },
                    {
                        id: 'Text31',
                        type: 'text',
                        rect: ['-25px', '-15px','22px','18px','auto', 'auto'],
                        text: "-",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text30',
                        type: 'text',
                        rect: ['-46px', '-15px','22px','28px','auto', 'auto'],
                        text: "(",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text32',
                        type: 'text',
                        rect: ['28px', '-15px','44px','43px','auto', 'auto'],
                        text: ")",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'fraction',
                    type: 'group',
                    rect: ['231', '-37','22','22','auto', 'auto'],
                    c: [
                    {
                        id: 'Mixed_numberCopy7',
                        type: 'group',
                        rect: ['-294px', '37px','22','22','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle3Copy9',
                            type: 'rect',
                            rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                            fill: ["rgba(9,118,184,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text9Copy9',
                            type: 'text',
                            rect: ['-1px', '0px','22px','22px','auto', 'auto'],
                            text: "21",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        },
                        {
                            id: 'Text7Copy9',
                            type: 'text',
                            rect: ['-2px', '-26px','36px','22px','auto', 'auto'],
                            text: "12",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        },
                        {
                            id: 'Text6Copy9',
                            type: 'text',
                            rect: ['-32px', '-14px','36px','19px','auto', 'auto'],
                            text: "- 4",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        }]
                    },
                    {
                        id: 'Text25',
                        type: 'text',
                        rect: ['-260px', '23px','36px','19px','auto', 'auto'],
                        text: "-",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'One_third_Hint_2Copy2',
                        type: 'group',
                        rect: ['-231px', '37px','65px','19','auto', 'auto'],
                        c: [
                        {
                            id: 'Text11Copy3',
                            type: 'text',
                            rect: ['-2px', '0px','22px','19px','auto', 'auto'],
                            text: "21",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        },
                        {
                            id: 'Rectangle4Copy3',
                            type: 'rect',
                            rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                            fill: ["rgba(9,118,184,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text10Copy3',
                            type: 'text',
                            rect: ['0px', '-26px','36px','22px','auto', 'auto'],
                            text: "7",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        }]
                    }]
                },
                {
                    id: 'Text26',
                    type: 'text',
                    rect: ['38px', '-10px','48px','19px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
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
                id: 'Hint_4_text',
                type: 'text',
                rect: ['45px', '317px','492px','43px','auto', 'auto'],
                text: "Adding two negative numbers, the answer will be negative.  When adding the same sign, we just add those two fractions. <br><br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(120,7,18,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Answer_Hint',
                type: 'group',
                rect: ['64', '264','31','19','auto', 'auto'],
                c: [
                {
                    id: 'equal_1',
                    type: 'text',
                    rect: ['0px', '0px','31px','19px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                },
                {
                    id: 'fraction_a',
                    type: 'group',
                    rect: ['32', '-2','31','28','auto', 'auto'],
                    c: [
                    {
                        id: 'Text35',
                        type: 'text',
                        rect: ['0px', '0px','31px','28px','auto', 'auto'],
                        text: "-",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text36',
                        type: 'text',
                        rect: ['29px', '0px','22px','22px','auto', 'auto'],
                        text: "(",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Mixed_numberCopy9',
                        type: 'group',
                        rect: ['73px', '14px','22','22','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle3Copy11',
                            type: 'rect',
                            rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                            fill: ["rgba(9,118,184,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text9Copy11',
                            type: 'text',
                            rect: ['-1px', '0px','22px','22px','auto', 'auto'],
                            text: "21",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        },
                        {
                            id: 'Text7Copy11',
                            type: 'text',
                            rect: ['-2px', '-26px','36px','22px','auto', 'auto'],
                            text: "12",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        },
                        {
                            id: 'Text6Copy11',
                            type: 'text',
                            rect: ['-26px', '-13px','25px','19px','auto', 'auto'],
                            text: "4",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        }]
                    },
                    {
                        id: 'Text37',
                        type: 'text',
                        rect: ['102px', '2px','22px','18px','auto', 'auto'],
                        text: "+",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'One_third_Hint_2Copy4',
                        type: 'group',
                        rect: ['134px', '15px','65px','19','auto', 'auto'],
                        c: [
                        {
                            id: 'Text11Copy5',
                            type: 'text',
                            rect: ['-2px', '0px','22px','19px','auto', 'auto'],
                            text: "21",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        },
                        {
                            id: 'Rectangle4Copy5',
                            type: 'rect',
                            rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                            fill: ["rgba(9,118,184,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text10Copy5',
                            type: 'text',
                            rect: ['0px', '-26px','36px','22px','auto', 'auto'],
                            text: "7",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        }]
                    },
                    {
                        id: 'Text38',
                        type: 'text',
                        rect: ['166px', '0px','22px','28px','auto', 'auto'],
                        text: ")",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'equal_2',
                    type: 'text',
                    rect: ['228px', '-2px','31px','22px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                },
                {
                    id: 'fraction_b',
                    type: 'group',
                    rect: ['347px', '-2px','22','28','auto', 'auto'],
                    c: [
                    {
                        id: 'Mixed_numberCopy10',
                        type: 'group',
                        rect: ['-29px', '13px','22','22','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle3Copy12',
                            type: 'rect',
                            rect: ['-7px', '-6px','22px','2px','auto', 'auto'],
                            fill: ["rgba(9,118,184,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text9Copy12',
                            type: 'text',
                            rect: ['-1px', '0px','22px','22px','auto', 'auto'],
                            text: "21",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        },
                        {
                            id: 'Text7Copy12',
                            type: 'text',
                            rect: ['-2px', '-26px','36px','22px','auto', 'auto'],
                            text: "19",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        },
                        {
                            id: 'Text6Copy12',
                            type: 'text',
                            rect: ['-26px', '-13px','25px','19px','auto', 'auto'],
                            text: "4",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1.00)", "400", "none", "normal"]
                        }]
                    },
                    {
                        id: 'Text42',
                        type: 'text',
                        rect: ['0px', '0px','22px','28px','auto', 'auto'],
                        text: ")",
                        align: "left",
                        font: ['\'Times New Roman\', Times, serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text41',
                        type: 'text',
                        rect: ['-70px', '0px','22px','22px','auto', 'auto'],
                        text: "(",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text40',
                        type: 'text',
                        rect: ['-94px', '-1px','22px','18px','auto', 'auto'],
                        text: "-",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(9,118,184,1)", "400", "none", "normal"]
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
                id: 'Choose_A',
                type: 'text',
                rect: ['223px', '404px','105px','28px','auto', 'auto'],
                text: "Choose (A)<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,127,47,1.00)", "700", "none", "normal"]
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
            "${_Rectangle3Copy8}": [
                ["color", "background-color", 'rgba(9,118,184,1)'],
                ["style", "height", '2px'],
                ["style", "top", '-6px'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_equal_1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '31px']
            ],
            "${_Text9Copy3}": [
                ["style", "top", '0px'],
                ["style", "left", '-2px'],
                ["style", "font-size", '14px']
            ],
            "${_Text9Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '-2px'],
                ["style", "font-size", '14px']
            ],
            "${_Text11Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(9,118,184,1.00)']
            ],
            "${_fraction1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '110px']
            ],
            "${_Text6Copy11}": [
                ["style", "top", '-13px'],
                ["color", "color", 'rgba(9,118,184,1)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-26px'],
                ["style", "width", '25px']
            ],
            "${_Text9Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_Text6Copy}": [
                ["style", "top", '-14px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '-32px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle3Copy}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '2px'],
                ["style", "top", '-6px'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Rectangle4Copy4}": [
                ["style", "top", '-6px'],
                ["color", "background-color", 'rgba(9,118,184,1)'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Rectangle3Copy11}": [
                ["color", "background-color", 'rgba(9,118,184,1)'],
                ["style", "height", '2px'],
                ["style", "top", '-6px'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Text27}": [
                ["style", "left", '-48px'],
                ["style", "top", '-14px']
            ],
            "${_Answers}": [
                ["style", "top", '386px'],
                ["style", "left", '24px']
            ],
            "${_fraction_a}": [
                ["style", "opacity", '0.000000']
            ],
            "${_Answer_C}": [
                ["style", "left", '118px'],
                ["style", "top", '499px']
            ],
            "${_equal_2}": [
                ["style", "top", '-2px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '228px']
            ],
            "${_Text13}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text6}": [
                ["style", "top", '-14px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '-32px']
            ],
            "${_Text7Copy12}": [
                ["style", "top", '-26px'],
                ["style", "left", '-2px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text6Copy2}": [
                ["style", "top", '-14px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '-32px'],
                ["style", "font-size", '14px']
            ],
            "${_Question}": [
                ["style", "left", '162px'],
                ["style", "top", '44px']
            ],
            "${_Text6Copy3}": [
                ["style", "top", '-14px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '-32px'],
                ["style", "font-size", '14px']
            ],
            "${_Text41}": [
                ["style", "left", '-70px'],
                ["style", "top", '0px']
            ],
            "${_Text6Copy4}": [
                ["style", "top", '-14px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '-25px'],
                ["style", "font-size", '14px']
            ],
            "${_One_third_Hint_2Copy3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '65px']
            ],
            "${_Text7Copy}": [
                ["style", "top", '-26px'],
                ["style", "left", '-3px'],
                ["style", "font-size", '14px']
            ],
            "${_Hint1b}": [
                ["style", "top", '171px'],
                ["color", "color", 'rgba(9,118,184,1.00)'],
                ["style", "height", '34px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '37px'],
                ["style", "width", '359px']
            ],
            "${_Mixed_numberCopy8}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_Text42}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text9Copy7}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text9}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Text19}": [
                ["style", "top", '-25px'],
                ["color", "color", 'rgba(176,4,20,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-69px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Text7}": [
                ["style", "left", '0px'],
                ["style", "top", '-26px']
            ],
            "${_Text7Copy8}": [
                ["style", "top", '-26px'],
                ["style", "left", '-2px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Mixed_numberCopy10}": [
                ["style", "top", '13px'],
                ["style", "opacity", '1'],
                ["style", "left", '-29px']
            ],
            "${_Text23}": [
                ["style", "top", '-26px'],
                ["color", "color", 'rgba(176,4,20,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '13px'],
                ["style", "font-size", '12px']
            ],
            "${_Mixed_number}": [
                ["style", "left", '-93px'],
                ["style", "top", '13px']
            ],
            "${_Text6Copy10}": [
                ["style", "top", '-14px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-32px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text11Copy4}": [
                ["style", "top", '0px'],
                ["style", "left", '-2px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Rectangle3Copy3}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '2px'],
                ["style", "top", '-6px'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Hint_4_text}": [
                ["style", "top", '317px'],
                ["color", "color", 'rgba(120,7,18,1.00)'],
                ["style", "height", '43px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '45px'],
                ["style", "width", '492px']
            ],
            "${_Text9Copy8}": [
                ["style", "top", '0px'],
                ["style", "left", '-1px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text6Copy7}": [
                ["style", "top", '-14px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-32px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text37}": [
                ["style", "left", '102px'],
                ["style", "top", '2px']
            ],
            "${_fraction}": [
                ["style", "opacity", '0.000000']
            ],
            "${_Text6Copy5}": [
                ["style", "top", '-14px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-32px'],
                ["color", "color", 'rgba(9,118,184,1.00)']
            ],
            "${_Text10Copy}": [
                ["style", "top", '-26px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(9,118,184,1.00)']
            ],
            "${_Text22}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px']
            ],
            "${_Mixed_numberCopy6}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '101px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_One_third_Hint_2Copy}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '65px']
            ],
            "${_Choose_A}": [
                ["style", "top", '404px'],
                ["color", "color", 'rgba(0,127,47,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '223px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Rectangle4}": [
                ["style", "top", '-6px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Text21}": [
                ["style", "height", '43px'],
                ["style", "top", '-56px'],
                ["style", "left", '-78px'],
                ["style", "width", '256px']
            ],
            "${_Text31}": [
                ["style", "top", '-15px'],
                ["style", "left", '-25px'],
                ["style", "height", '18px']
            ],
            "${_Hint_3_expression}": [
                ["style", "left", '386px'],
                ["style", "top", '124px']
            ],
            "${_Text9Copy9}": [
                ["style", "top", '0px'],
                ["style", "left", '-1px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text10}": [
                ["style", "top", '-26px'],
                ["style", "left", '0px']
            ],
            "${_One_third_Hint_2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-87px'],
                ["style", "width", '65px']
            ],
            "${_Text10Copy5}": [
                ["style", "top", '-26px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text40}": [
                ["style", "left", '-94px'],
                ["style", "top", '-1px']
            ],
            "${_Text38}": [
                ["style", "left", '166px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle3Copy2}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '2px'],
                ["style", "top", '-6px'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Text6Copy9}": [
                ["style", "top", '-14px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-32px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text28}": [
                ["style", "left", '28px'],
                ["style", "top", '-14px']
            ],
            "${_fraction2}": [
                ["style", "top", '1px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '237px']
            ],
            "${_Rectangle4Copy}": [
                ["color", "background-color", 'rgba(9,118,184,1.00)'],
                ["style", "top", '-6px'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Text7Copy7}": [
                ["style", "top", '-26px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text29}": [
                ["style", "top", '-12px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '166px']
            ],
            "${_Text7Copy3}": [
                ["style", "top", '-23px'],
                ["style", "left", '1px'],
                ["style", "font-size", '14px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_Answer_D}": [
                ["style", "left", '120px'],
                ["style", "top", '540px']
            ],
            "${_Text11Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '-2px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text7Copy2}": [
                ["style", "top", '-22px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle4Copy2}": [
                ["style", "top", '-6px'],
                ["color", "background-color", 'rgba(9,118,184,1)'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Text25}": [
                ["style", "left", '-260px'],
                ["style", "top", '23px']
            ],
            "${_Text7Copy9}": [
                ["style", "top", '-26px'],
                ["style", "left", '-2px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text26}": [
                ["style", "top", '-10px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '38px']
            ],
            "${_Hint2a}": [
                ["style", "top", '271px'],
                ["color", "color", 'rgba(9,118,184,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "display", 'block'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '37px'],
                ["style", "width", '346px']
            ],
            "${_Text11Copy3}": [
                ["style", "top", '0px'],
                ["style", "left", '-2px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Hint_2_expression}": [
                ["style", "left", '473px'],
                ["style", "top", '58px']
            ],
            "${_Hint_3a}": [
                ["style", "top", '160px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '115px']
            ],
            "${_Rectangle3Copy4}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '2px'],
                ["style", "top", '-6px'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Hint1a}": [
                ["color", "color", 'rgba(9,118,184,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '37px'],
                ["style", "font-size", '16px'],
                ["style", "top", '102px'],
                ["style", "height", '60px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "width", '302px'],
                ["style", "font-style", 'normal']
            ],
            "${_fraction_b}": [
                ["style", "top", '-2px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '347px']
            ],
            "${_Rectangle3Copy12}": [
                ["color", "background-color", 'rgba(9,118,184,1)'],
                ["style", "height", '2px'],
                ["style", "top", '-6px'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Rectangle3Copy10}": [
                ["color", "background-color", 'rgba(9,118,184,1)'],
                ["style", "height", '2px'],
                ["style", "top", '-6px'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Text20}": [
                ["style", "top", '-11px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-31px']
            ],
            "${_Text7Copy6}": [
                ["style", "left", '0px'],
                ["style", "top", '-26px']
            ],
            "${_Rectangle3Copy5}": [
                ["color", "background-color", 'rgba(9,118,184,1.00)'],
                ["style", "height", '2px'],
                ["style", "top", '-6px'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Rectangle3Copy7}": [
                ["color", "background-color", 'rgba(9,118,184,1)'],
                ["style", "height", '2px'],
                ["style", "top", '-6px'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Text9Copy4}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_Text6Copy6}": [
                ["style", "top", '-14px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '-32px']
            ],
            "${_Text9Copy11}": [
                ["style", "top", '0px'],
                ["style", "left", '-1px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '2px'],
                ["style", "top", '-6px'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Text10Copy4}": [
                ["style", "top", '-26px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Mixed_numberCopy5}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_Text10Copy2}": [
                ["style", "top", '-26px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text6Copy12}": [
                ["style", "top", '-13px'],
                ["color", "color", 'rgba(9,118,184,1)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-26px'],
                ["style", "width", '25px']
            ],
            "${_Text11Copy5}": [
                ["style", "top", '0px'],
                ["style", "left", '-2px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Rectangle4Copy5}": [
                ["color", "background-color", 'rgba(9,118,184,1)'],
                ["style", "top", '-6px'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Answer_A}": [
                ["style", "left", '118px'],
                ["style", "top", '418px']
            ],
            "${_Hint1c}": [
                ["style", "top", '220px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '37px'],
                ["style", "width", '369px']
            ],
            "${_Text6Copy8}": [
                ["style", "top", '-14px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-32px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text11}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Text7Copy5}": [
                ["style", "top", '-26px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(9,118,184,1.00)']
            ],
            "${_Text35}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text7Copy10}": [
                ["style", "top", '-26px'],
                ["style", "left", '-2px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text9Copy12}": [
                ["style", "top", '0px'],
                ["style", "left", '-1px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text30}": [
                ["style", "left", '-46px'],
                ["style", "top", '-15px']
            ],
            "${_Mixed_numberCopy7}": [
                ["style", "top", '37px'],
                ["style", "opacity", '0'],
                ["style", "left", '-294px']
            ],
            "${_Mixed_numberCopy3}": [
                ["style", "left", '-30px'],
                ["style", "top", '13px']
            ],
            "${_One_third}": [
                ["style", "top", '13px'],
                ["style", "left", '-32px'],
                ["style", "width", '65px']
            ],
            "${_Text9Copy5}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(9,118,184,1.00)']
            ],
            "${_Answer_B}": [
                ["style", "left", '119px'],
                ["style", "top", '457px']
            ],
            "${_Hint_4_expression}": [
                ["style", "left", '148px'],
                ["style", "top", '224px']
            ],
            "${_Text19Copy}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(176,4,20,1)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-70px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Hint2b}": [
                ["style", "top", '326px'],
                ["style", "height", '45px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '38px'],
                ["style", "width", '462px']
            ],
            "${_Text7Copy11}": [
                ["style", "top", '-26px'],
                ["style", "left", '-2px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text36}": [
                ["style", "left", '29px'],
                ["style", "top", '0px']
            ],
            "${_Text24}": [
                ["style", "top", '-13px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '53px']
            ],
            "${_Rectangle4Copy3}": [
                ["color", "background-color", 'rgba(9,118,184,1)'],
                ["style", "top", '-6px'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ],
            "${_Text9Copy10}": [
                ["style", "top", '0px'],
                ["style", "left", '-1px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text23Copy}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(176,4,20,1)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '13px'],
                ["style", "font-size", '12px']
            ],
            "${_Mixed_numberCopy9}": [
                ["style", "top", '14px'],
                ["style", "opacity", '1'],
                ["style", "left", '73px']
            ],
            "${_Text9Copy6}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_One_third_Hint_2Copy4}": [
                ["style", "top", '15px'],
                ["style", "opacity", '1'],
                ["style", "left", '134px'],
                ["style", "width", '65px']
            ],
            "${_Text10Copy3}": [
                ["style", "top", '-26px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(9,118,184,1)']
            ],
            "${_Text12}": [
                ["style", "left", '-62px'],
                ["style", "top", '-1px']
            ],
            "${_Text32}": [
                ["style", "top", '-15px'],
                ["style", "left", '28px'],
                ["style", "width", '44px']
            ],
            "${_Text7Copy4}": [
                ["style", "top", '-22px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_One_third_Hint_2Copy2}": [
                ["style", "top", '37px'],
                ["style", "opacity", '1'],
                ["style", "left", '-231px'],
                ["style", "width", '65px']
            ],
            "${_Rectangle3Copy9}": [
                ["color", "background-color", 'rgba(9,118,184,1)'],
                ["style", "height", '2px'],
                ["style", "top", '-6px'],
                ["style", "left", '-7px'],
                ["style", "width", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 166000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 10000,
                "Hint 2": 36000,
                "Hint 3": 75000,
                "Hint 4": 114000,
                "Answer Hint": 152000
            },
            timeline: [
                { id: "eid288", tween: [ "style", "${_One_third_Hint_2Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 67000, duration: 1000 },
                { id: "eid303", tween: [ "style", "${_Text23}", "opacity", '1', { fromValue: '0.000000'}], position: 92049, duration: 951 },
                { id: "eid323", tween: [ "style", "${_Mixed_numberCopy7}", "opacity", '1', { fromValue: '0'}], position: 114000, duration: 1000 },
                { id: "eid350", tween: [ "style", "${_fraction_a}", "opacity", '1', { fromValue: '0.000000'}], position: 153000, duration: 1000 },
                { id: "eid285", tween: [ "style", "${_Text20}", "opacity", '1', { fromValue: '0.000000'}], position: 65000, duration: 1000 },
                { id: "eid343", tween: [ "style", "${_Mixed_numberCopy9}", "opacity", '1', { fromValue: '1'}], position: 155000, duration: 0 },
                { id: "eid344", tween: [ "style", "${_Mixed_numberCopy9}", "opacity", '1', { fromValue: '1'}], position: 156000, duration: 0 },
                { id: "eid356", tween: [ "style", "${_fraction_b}", "opacity", '1', { fromValue: '0.000000'}], position: 156500, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid248", tween: [ "style", "${_Hint1c}", "opacity", '1', { fromValue: '0.000000'}], position: 22000, duration: 1000 },
                { id: "eid242", tween: [ "style", "${_Hint1a}", "opacity", '1', { fromValue: '0.000000'}], position: 10000, duration: 1000 },
                { id: "eid297", tween: [ "style", "${_Hint_3a}", "opacity", '1', { fromValue: '0.000000'}], position: 85000, duration: 1000 },
                { id: "eid276", tween: [ "style", "${_One_third_Hint_2}", "opacity", '1', { fromValue: '0.000000'}], position: 61000, duration: 1000 },
                { id: "eid359", tween: [ "style", "${_Choose_A}", "opacity", '1', { fromValue: '0.000000'}], position: 164000, duration: 1000 },
                { id: "eid353", tween: [ "style", "${_equal_2}", "opacity", '1', { fromValue: '0.000000'}], position: 155000, duration: 1000 },
                { id: "eid347", tween: [ "style", "${_equal_1}", "opacity", '1', { fromValue: '0.000000'}], position: 152000, duration: 1000 },
                { id: "eid291", tween: [ "style", "${_Hint1b}", "display", 'none', { fromValue: 'block'}], position: 75000, duration: 0 },
                { id: "eid300", tween: [ "style", "${_Mixed_numberCopy5}", "opacity", '1', { fromValue: '0.000000'}], position: 90000, duration: 1000 },
                { id: "eid332", tween: [ "style", "${_Text29}", "opacity", '1', { fromValue: '0.000000'}], position: 131000, duration: 1000 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid245", tween: [ "style", "${_Hint1b}", "opacity", '1', { fromValue: '0.000000'}], position: 18000, duration: 1000 },
                { id: "eid294", tween: [ "style", "${_Hint2b}", "display", 'none', { fromValue: 'block'}], position: 75000, duration: 0 },
                { id: "eid320", tween: [ "style", "${_fraction}", "opacity", '1', { fromValue: '0.000000'}], position: 114000, duration: 1000 },
                { id: "eid282", tween: [ "style", "${_Text19Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 63000, duration: 1000 },
                { id: "eid341", tween: [ "style", "${_Hint_4_text}", "opacity", '1', { fromValue: '0.000000'}], position: 149004, duration: 996 },
                { id: "eid336", tween: [ "style", "${_fraction1}", "opacity", '0', { fromValue: '0'}], position: 131000, duration: 0 },
                { id: "eid338", tween: [ "style", "${_fraction1}", "opacity", '1', { fromValue: '0.000000'}], position: 131005, duration: 995 },
                { id: "eid292", tween: [ "style", "${_Hint1c}", "display", 'none', { fromValue: 'block'}], position: 75000, duration: 0 },
                { id: "eid312", tween: [ "style", "${_Mixed_numberCopy6}", "opacity", '1', { fromValue: '0.000000'}], position: 97000, duration: 1000 },
                { id: "eid269", tween: [ "style", "${_Hint2a}", "opacity", '1', { fromValue: '0.000000'}], position: 36000, duration: 1000 },
                { id: "eid293", tween: [ "style", "${_Hint2a}", "display", 'none', { fromValue: 'block'}], position: 75000, duration: 0 },
                { id: "eid309", tween: [ "style", "${_Text24}", "opacity", '1', { fromValue: '0.000000'}], position: 95000, duration: 1000 },
                { id: "eid326", tween: [ "style", "${_Text26}", "opacity", '1', { fromValue: '0.000000'}], position: 129000, duration: 1000 },
                { id: "eid279", tween: [ "style", "${_Text19}", "opacity", '1', { fromValue: '0.000000'}], position: 63000, duration: 1000 },
                { id: "eid335", tween: [ "style", "${_fraction2}", "opacity", '1', { fromValue: '0.000000'}], position: 131000, duration: 1000 },
                { id: "eid163", tween: [ "style", "${_Answers}", "top", '386px', { fromValue: '386px'}], position: 14500, duration: 0 },
                { id: "eid290", tween: [ "style", "${_Hint1a}", "display", 'none', { fromValue: 'block'}], position: 75000, duration: 0 },
                { id: "eid273", tween: [ "style", "${_Hint2b}", "opacity", '1', { fromValue: '0.000000'}], position: 57000, duration: 1000 },
                { id: "eid306", tween: [ "style", "${_Text23Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 93000, duration: 1000 },
                { id: "eid238", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid249", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 10000 },
                { id: "eid289", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 36000 },
                { id: "eid313", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 75000 },
                { id: "eid360", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4}', [] ], ""], position: 116000 },
                { id: "eid361", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 157500 }            ]
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
