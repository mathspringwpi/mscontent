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
                rect: ['24px', '30px','440px','19px','auto', 'auto'],
                text: "Points A, B, C, D, and E are shown on the number line below.",
                align: "left",
                font: ['Georgia, Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['16px', '181','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1.03846']]
            },
            {
                id: 'AnswerDText',
                type: 'text',
                rect: ['60px', '469px','54px','20px','auto', 'auto'],
                text: "Point D",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['60px', '433px','54px','19px','auto', 'auto'],
                text: "Point C",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerBText',
                type: 'text',
                rect: ['60px', '401px','60px','19px','auto', 'auto'],
                text: "Point B",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['60px', '366px','58px','19px','auto', 'auto'],
                text: "Point A",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
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
                id: 'AnswerEText',
                type: 'text',
                rect: ['60px', '507px','54px','20px','auto', 'auto'],
                text: "Point E",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['19px', '157px','350px','29px','auto', 'auto'],
                text: "Which point best represents the location of -5.75?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Number_Line',
                type: 'group',
                rect: ['345', '78','4','29','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle2Copy8',
                    type: 'rect',
                    rect: ['0px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['-279px', '13px','329px','3px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'Rectangle2',
                    type: 'rect',
                    rect: ['-254px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle2Copy',
                    type: 'rect',
                    rect: ['-223px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle2Copy7',
                    type: 'rect',
                    rect: ['-32px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle2Copy6',
                    type: 'rect',
                    rect: ['-64px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle2Copy4',
                    type: 'rect',
                    rect: ['-96px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle2Copy5',
                    type: 'rect',
                    rect: ['-127px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle2Copy2',
                    type: 'rect',
                    rect: ['-160px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle2Copy3',
                    type: 'rect',
                    rect: ['-191px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['79px', '112px','37px','19px','auto', 'auto'],
                text: "-6",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy',
                type: 'text',
                rect: ['214px', '112px','37px','19px','auto', 'auto'],
                text: "-5",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy2',
                type: 'text',
                rect: ['340px', '112px','37px','19px','auto', 'auto'],
                text: "-4",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['118px', '59px','25px','19px','auto', 'auto'],
                text: "A",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['118px', '84px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text3Copy',
                type: 'text',
                rect: ['180px', '58px','25px','19px','auto', 'auto'],
                text: "B",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'EllipseCopy',
                type: 'ellipse',
                rect: ['180px', '83px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text3Copy2',
                type: 'text',
                rect: ['244px', '59px','25px','19px','auto', 'auto'],
                text: "C",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'EllipseCopy2',
                type: 'ellipse',
                rect: ['244px', '84px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text3Copy3',
                type: 'text',
                rect: ['311px', '59px','25px','19px','auto', 'auto'],
                text: "D",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'EllipseCopy3',
                type: 'ellipse',
                rect: ['308px', '84px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text3Copy4',
                type: 'text',
                rect: ['341px', '59px','25px','19px','auto', 'auto'],
                text: "E",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'EllipseCopy4',
                type: 'ellipse',
                rect: ['340px', '84px','14px','14px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['205px', '212px','350px','42px','auto', 'auto'],
                text: "Let's think about -5.75. Is it between -4 and -5 or between -5 and -6 ?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['175px', '112px','14px','14px','auto', 'auto'],
                text: "-5.25",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,31,255,1.00)", "400", "none", "normal"]
            },
            {
                id: '_-55',
                display: 'none',
                type: 'text',
                rect: ['143px', '124px','14px','14px','auto', 'auto'],
                text: "-5.5",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,31,255,1.00)", "400", "none", "normal"]
            },
            {
                id: '_575',
                display: 'none',
                type: 'text',
                rect: ['106px', '112px','14px','14px','auto', 'auto'],
                text: "-5.75",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(235,5,5,1.00)", "400", "none", "normal"]
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
                display: 'none',
                type: 'text',
                rect: ['237px', '497px','211px','20px','auto', 'auto'],
                text: "Choose (A)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'hint1',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1.ogg','media/hint1.mp3']
            },
            {
                id: 'question',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/question.mp3','media/question.ogg']
            },
            {
                id: 'Number_Line_in_hint_2',
                display: 'none',
                type: 'group',
                rect: ['491px', '343px','4','29','auto', 'auto'],
                c: [
                {
                    id: 'Text17',
                    type: 'text',
                    rect: ['0px', '40px','25px','31px','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text5',
                    type: 'text',
                    rect: ['-129px', '40px','30px','31px','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text8',
                    type: 'text',
                    rect: ['-263px', '40px','25px','20px','auto', 'auto'],
                    text: "-4",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text9',
                    type: 'text',
                    rect: ['-227px', '40px','25px','20px','auto', 'auto'],
                    text: "-3",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text10',
                    type: 'text',
                    rect: ['-195px', '40px','25px','14px','auto', 'auto'],
                    text: "-2",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text13',
                    type: 'text',
                    rect: ['-163px', '40px','25px','20px','auto', 'auto'],
                    text: "-1",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text14',
                    type: 'text',
                    rect: ['-98px', '40px','14px','20px','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15',
                    type: 'text',
                    rect: ['-64px', '40px','14px','29px','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16',
                    type: 'text',
                    rect: ['-32px', '40px','25px','31px','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle2Copy17',
                    type: 'rect',
                    rect: ['0px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'RectangleCopy',
                    type: 'rect',
                    rect: ['-298px', '13px','348px','3px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'Rectangle2Copy16',
                    type: 'rect',
                    rect: ['-254px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle2Copy15',
                    type: 'rect',
                    rect: ['-223px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle2Copy14',
                    type: 'rect',
                    rect: ['-32px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle2Copy13',
                    type: 'rect',
                    rect: ['-64px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle2Copy12',
                    type: 'rect',
                    rect: ['-96px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle2Copy11',
                    type: 'rect',
                    rect: ['-127px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle2Copy10',
                    type: 'rect',
                    rect: ['-160px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle2Copy9',
                    type: 'rect',
                    rect: ['-191px', '0px','4px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Rectangle2Copy18',
                    type: 'rect',
                    rect: ['-291px', '-4px','3px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['52']]
                },
                {
                    id: 'Rectangle2Copy19',
                    type: 'rect',
                    rect: ['-292px', '14px','3px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['-37']]
                },
                {
                    id: 'Rectangle2Copy20',
                    type: 'rect',
                    rect: ['44px', '11px','3px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['50']]
                },
                {
                    id: 'Rectangle2Copy21',
                    type: 'rect',
                    rect: ['45px', '-3px','4px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['-41']]
                },
                {
                    id: 'Ellipse2',
                    type: 'ellipse',
                    rect: ['-146px', '29px','37px','31px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,2,2,0.00)"],
                    stroke: [3,"rgba(255,0,0,1.00)","solid"]
                },
                {
                    id: 'Rectangle3Copy',
                    type: 'rect',
                    rect: ['-297px', '83px','6px','28px','auto', 'auto'],
                    fill: ["rgba(0,217,102,1.00)"],
                    stroke: [1,"rgba(2,2,2,1.00)","solid"]
                },
                {
                    id: 'Rectangle3',
                    type: 'rect',
                    rect: ['-125px', '83px','1px','28px','auto', 'auto'],
                    fill: ["rgba(1,199,255,1.00)"],
                    stroke: [1,"rgba(2,2,2,1.00)","solid"]
                },
                {
                    id: 'Positive_Numbers',
                    display: 'none',
                    type: 'text',
                    rect: ['-101px', '90px','148px','31px','auto', 'auto'],
                    text: "Positive Numbers",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'More_positive',
                    display: 'block',
                    type: 'text',
                    rect: ['-101px', '90px','148px','31px','auto', 'auto'],
                    text: "More positive",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Negative_Numvers',
                    display: 'none',
                    type: 'text',
                    rect: ['-281px', '90px','148px','31px','auto', 'auto'],
                    text: "Negative Numbers",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'More_Negative',
                    display: 'block',
                    type: 'text',
                    rect: ['-281px', '90px','148px','31px','auto', 'auto'],
                    text: "More negative",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Arrow_left',
                    display: 'none',
                    type: 'group',
                    rect: ['-327px', '96px','32','4','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle5Copy5',
                        type: 'rect',
                        rect: ['0px', '0px','28px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [2,"rgb(0, 0, 0)","solid"]
                    },
                    {
                        id: 'Rectangle5Copy4',
                        type: 'rect',
                        rect: ['0px', '7px','18px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [2,"rgb(0, 0, 0)","solid"],
                        transform: [[],['204']]
                    },
                    {
                        id: 'Rectangle5Copy3',
                        type: 'rect',
                        rect: ['-1px', '-7px','18px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [2,"rgb(0, 0, 0)","solid"],
                        transform: [[],['145']]
                    }]
                },
                {
                    id: 'Arrow_right',
                    display: 'none',
                    type: 'group',
                    rect: ['54px', '96px','32','4','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle5',
                        type: 'rect',
                        rect: ['0px', '0px','28px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [2,"rgb(0, 0, 0)","solid"]
                    },
                    {
                        id: 'Rectangle5Copy2',
                        type: 'rect',
                        rect: ['15px', '5px','18px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [2,"rgb(0, 0, 0)","solid"],
                        transform: [[],['149']]
                    },
                    {
                        id: 'Rectangle5Copy',
                        type: 'rect',
                        rect: ['14px', '-6px','18px','0px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [2,"rgb(0, 0, 0)","solid"],
                        transform: [[],['23']]
                    }]
                }]
            },
            {
                id: 'Hint_3_text',
                display: 'none',
                type: 'text',
                rect: ['205px', '318px','329px','42px','auto', 'auto'],
                text: "Now let's think, is - 5.75 closer to - 6 or - 5 ?",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(7,84,184,1)", "400", "none", "normal"]
            },
            {
                id: 'Hint_2_text',
                display: 'none',
                type: 'text',
                rect: ['214px', '281px','308px','29px','auto', 'auto'],
                text: "0 separates positive and negative numbers. 0 is neither positive nor negative.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(7,84,184,1.00)", "400", "none", "normal"]
            },
            {
                id: 'hint2',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2.mp3','media/hint2.ogg']
            },
            {
                id: 'Text20',
                display: 'none',
                type: 'text',
                rect: ['214px', '496px','329px','31px','auto', 'auto'],
                text: "Is - 5.75 more or less negative than - 5 ?",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(172,0,0,1.00)", "400", "none", "normal"]
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
            "${_Text3Copy}": [
                ["style", "left", '180px'],
                ["style", "top", '58px']
            ],
            "${_Arrow_left}": [
                ["style", "top", '96px'],
                ["style", "left", '-327px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "left", '79px'],
                ["style", "top", '112px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Choose_A}": [
                ["style", "top", '497px'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '237px'],
                ["style", "font-size", '18px']
            ],
            "${_AnswerDText}": [
                ["style", "top", '469px'],
                ["style", "font-size", '14px'],
                ["style", "left", '60px'],
                ["style", "width", '54px']
            ],
            "${_Text10}": [
                ["style", "left", '-195px'],
                ["style", "top", '40px']
            ],
            "${_Rectangle3Copy}": [
                ["color", "background-color", 'rgba(0,217,102,1.00)'],
                ["style", "top", '83px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(2,2,2,1.00)'],
                ["style", "height", '28px'],
                ["style", "opacity", '0'],
                ["style", "left", '-35px'],
                ["style", "width", '6px']
            ],
            "${_Rectangle2Copy6}": [
                ["style", "height", '29px'],
                ["style", "top", '0px'],
                ["style", "left", '-64px'],
                ["style", "width", '4px']
            ],
            "${_Rectangle2Copy12}": [
                ["style", "height", '29px'],
                ["style", "top", '0px'],
                ["style", "left", '-96px'],
                ["style", "width", '4px']
            ],
            "${_EllipseCopy2}": [
                ["style", "top", '84px'],
                ["style", "height", '14px'],
                ["color", "background-color", 'rgba(255,0,0,1)'],
                ["style", "left", '244px'],
                ["style", "width", '14px']
            ],
            "${_Rectangle2Copy4}": [
                ["style", "top", '0px'],
                ["style", "height", '29px'],
                ["style", "left", '-96px'],
                ["style", "width", '4px']
            ],
            "${_Text3}": [
                ["style", "left", '118px']
            ],
            "${_Text2Copy2}": [
                ["style", "left", '340px'],
                ["style", "top", '112px']
            ],
            "${_More_Negative}": [
                ["style", "top", '90px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'block'],
                ["style", "left", '-281px'],
                ["style", "width", '148px']
            ],
            "${_Rectangle5Copy2}": [
                ["style", "top", '5px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["transform", "rotateZ", '149deg'],
                ["style", "left", '15px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '18px']
            ],
            "${_Answers}": [
                ["style", "top", '344px'],
                ["style", "left", '16px'],
                ["transform", "scaleX", '1.03846']
            ],
            "${_Rectangle5Copy}": [
                ["style", "top", '-6px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["transform", "rotateZ", '23deg'],
                ["style", "border-width", '2px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '14px'],
                ["style", "width", '18px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle5Copy4}": [
                ["style", "top", '7px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["transform", "rotateZ", '204deg'],
                ["style", "border-width", '2px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '18px']
            ],
            "${_Arrow_right}": [
                ["style", "top", '96px'],
                ["style", "left", '54px'],
                ["style", "display", 'none']
            ],
            "${_Text3Copy2}": [
                ["style", "left", '244px']
            ],
            "${_Rectangle2Copy}": [
                ["style", "height", '29px'],
                ["style", "top", '0px'],
                ["style", "left", '-223px'],
                ["style", "width", '4px']
            ],
            "${_Rectangle2Copy14}": [
                ["style", "height", '29px'],
                ["style", "top", '0px'],
                ["style", "left", '-32px'],
                ["style", "width", '4px']
            ],
            "${_Hint_2_text}": [
                ["style", "top", '281px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["color", "color", 'rgba(7,84,184,1.00)'],
                ["style", "width", '308px']
            ],
            "${_Text}": [
                ["style", "top", '157px'],
                ["style", "left", '19px'],
                ["style", "font-size", '16px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle2Copy11}": [
                ["style", "top", '0px'],
                ["style", "height", '29px'],
                ["style", "left", '-127px'],
                ["style", "width", '4px']
            ],
            "${_Rectangle2Copy18}": [
                ["style", "top", '-4px'],
                ["transform", "rotateZ", '52deg'],
                ["style", "height", '20px'],
                ["style", "left", '-291px'],
                ["style", "width", '3px']
            ],
            "${_Rectangle2Copy9}": [
                ["style", "top", '0px'],
                ["style", "height", '29px'],
                ["style", "left", '-191px'],
                ["style", "width", '4px']
            ],
            "${_Ellipse2}": [
                ["color", "background-color", 'rgba(255,2,2,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '3px'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '-146px'],
                ["style", "top", '29px']
            ],
            "${_Rectangle5Copy5}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '28px']
            ],
            "${_Text8}": [
                ["style", "top", '40px'],
                ["style", "left", '-263px']
            ],
            "${_Text3Copy3}": [
                ["style", "left", '311px'],
                ["style", "top", '59px']
            ],
            "${_Positive_Numbers}": [
                ["style", "top", '90px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '-101px'],
                ["style", "width", '148px']
            ],
            "${_Rectangle2Copy5}": [
                ["style", "height", '29px'],
                ["style", "top", '0px'],
                ["style", "left", '-127px'],
                ["style", "width", '4px']
            ],
            "${_Text14}": [
                ["style", "top", '40px'],
                ["style", "left", '-98px']
            ],
            "${_Text4}": [
                ["style", "top", '212px'],
                ["style", "display", 'none'],
                ["style", "font-size", '16px'],
                ["style", "left", '205px'],
                ["style", "width", '350px']
            ],
            "${_Question_Text}": [
                ["style", "top", '30px'],
                ["style", "font-size", '16px'],
                ["style", "height", '19px'],
                ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
                ["style", "left", '24px'],
                ["style", "width", '440px']
            ],
            "${_Rectangle2Copy8}": [
                ["style", "height", '29px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '4px']
            ],
            "${_Number_Line_in_hint_2}": [
                ["style", "top", '343px'],
                ["style", "left", '491px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy2}": [
                ["style", "top", '0px'],
                ["style", "height", '29px'],
                ["style", "left", '-160px'],
                ["style", "width", '4px']
            ],
            "${_Text20}": [
                ["style", "top", '496px'],
                ["color", "color", 'rgba(172,0,0,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '214px'],
                ["style", "font-size", '18px']
            ],
            "${_Text3Copy4}": [
                ["style", "left", '341px']
            ],
            "${_Hint_3_text}": [
                ["style", "display", 'none'],
                ["style", "width", '329px']
            ],
            "${_EllipseCopy4}": [
                ["style", "top", '84px'],
                ["style", "height", '14px'],
                ["color", "background-color", 'rgba(255,0,0,1)'],
                ["style", "left", '340px'],
                ["style", "width", '14px']
            ],
            "${_Rectangle2Copy13}": [
                ["style", "top", '0px'],
                ["style", "height", '29px'],
                ["style", "left", '-64px'],
                ["style", "width", '4px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(1,199,255,1.00)'],
                ["style", "top", '83px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(2,2,2,1.00)'],
                ["style", "height", '28px'],
                ["style", "opacity", '0'],
                ["style", "left", '-121px'],
                ["style", "width", '1px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '13px'],
                ["style", "left", '-298px'],
                ["style", "width", '348px']
            ],
            "${__-55}": [
                ["style", "top", '124px'],
                ["color", "color", 'rgba(0,31,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '143px'],
                ["style", "font-size", '18px']
            ],
            "${_AnswerEText}": [
                ["style", "top", '507px'],
                ["style", "font-size", '14px'],
                ["style", "left", '60px'],
                ["style", "width", '54px']
            ],
            "${_Rectangle5Copy3}": [
                ["style", "top", '-7px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["transform", "rotateZ", '145deg'],
                ["style", "left", '-1px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '18px']
            ],
            "${_Text5}": [
                ["style", "top", '40px'],
                ["style", "height", '31px'],
                ["style", "width", '30px'],
                ["style", "left", '-129px'],
                ["style", "font-size", '18px']
            ],
            "${_AnswerBText}": [
                ["style", "top", '401px'],
                ["style", "font-size", '14px'],
                ["style", "left", '60px'],
                ["style", "width", '60px']
            ],
            "${_Rectangle2Copy3}": [
                ["style", "height", '29px'],
                ["style", "top", '0px'],
                ["style", "left", '-191px'],
                ["style", "width", '4px']
            ],
            "${__575}": [
                ["style", "top", '112px'],
                ["color", "color", 'rgba(235,5,5,1.00)'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '106px'],
                ["style", "font-size", '18px']
            ],
            "${_Rectangle2Copy15}": [
                ["style", "top", '0px'],
                ["style", "height", '29px'],
                ["style", "left", '-223px'],
                ["style", "width", '4px']
            ],
            "${_AnswerCText}": [
                ["style", "top", '433px'],
                ["style", "font-size", '14px'],
                ["style", "left", '60px'],
                ["style", "width", '54px']
            ],
            "${_Rectangle2Copy16}": [
                ["style", "height", '29px'],
                ["style", "top", '0px'],
                ["style", "left", '-254px'],
                ["style", "width", '4px']
            ],
            "${_AnswerAText}": [
                ["style", "top", '366px'],
                ["style", "text-align", 'left'],
                ["style", "height", '19px'],
                ["style", "font-size", '14px'],
                ["style", "left", '60px'],
                ["style", "width", '58px']
            ],
            "${_Rectangle2Copy19}": [
                ["style", "top", '14px'],
                ["transform", "rotateZ", '-37deg'],
                ["style", "height", '20px'],
                ["style", "left", '-292px'],
                ["style", "width", '3px']
            ],
            "${_Text9}": [
                ["style", "left", '-227px'],
                ["style", "top", '40px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '13px'],
                ["style", "left", '-279px'],
                ["style", "width", '329px']
            ],
            "${_More_positive}": [
                ["style", "top", '90px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'block'],
                ["style", "left", '-101px'],
                ["style", "width", '148px']
            ],
            "${_Text13}": [
                ["style", "left", '-163px'],
                ["style", "top", '40px']
            ],
            "${_Text15}": [
                ["style", "top", '40px'],
                ["style", "left", '-64px']
            ],
            "${_Ellipse}": [
                ["style", "top", '84px'],
                ["style", "height", '14px'],
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '118px'],
                ["style", "width", '14px']
            ],
            "${_Rectangle2Copy21}": [
                ["style", "top", '-3px'],
                ["transform", "rotateZ", '-41deg'],
                ["style", "height", '20px'],
                ["style", "left", '45px'],
                ["style", "width", '4px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "height", '29px'],
                ["style", "left", '-254px'],
                ["style", "width", '4px']
            ],
            "${_Text2Copy}": [
                ["style", "left", '214px'],
                ["style", "top", '112px']
            ],
            "${_Text17}": [
                ["style", "top", '40px'],
                ["style", "left", '0px']
            ],
            "${_Text16}": [
                ["style", "top", '40px'],
                ["style", "left", '-32px']
            ],
            "${_EllipseCopy3}": [
                ["style", "top", '84px'],
                ["style", "height", '14px'],
                ["color", "background-color", 'rgba(255,0,0,1)'],
                ["style", "left", '308px'],
                ["style", "width", '14px']
            ],
            "${_Text7}": [
                ["style", "top", '112px'],
                ["color", "color", 'rgba(0,31,255,1.00)'],
                ["style", "display", 'block'],
                ["style", "left", '175px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle2Copy20}": [
                ["style", "top", '11px'],
                ["transform", "rotateZ", '50deg'],
                ["style", "height", '20px'],
                ["style", "left", '44px'],
                ["style", "width", '3px']
            ],
            "${_Rectangle2Copy17}": [
                ["style", "top", '0px'],
                ["style", "height", '29px'],
                ["style", "left", '0px'],
                ["style", "width", '4px']
            ],
            "${_Negative_Numvers}": [
                ["style", "top", '90px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '-281px'],
                ["style", "width", '148px']
            ],
            "${_Rectangle2Copy7}": [
                ["style", "top", '0px'],
                ["style", "height", '29px'],
                ["style", "left", '-32px'],
                ["style", "width", '4px']
            ],
            "${_EllipseCopy}": [
                ["style", "top", '83px'],
                ["style", "height", '14px'],
                ["color", "background-color", 'rgba(255,0,0,1)'],
                ["style", "left", '180px'],
                ["style", "width", '14px']
            ],
            "${_Rectangle2Copy10}": [
                ["style", "height", '29px'],
                ["style", "top", '0px'],
                ["style", "left", '-160px'],
                ["style", "width", '4px']
            ],
            "${_Rectangle5}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "border-width", '2px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 145000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 13700,
                "Hint 2": 24520,
                "Hint 3": 55523,
                "Hint 4": 88500,
                "Answer Hint": 108608
            },
            timeline: [
                { id: "eid285", tween: [ "style", "${_Rectangle3}", "opacity", '1', { fromValue: '0'}], position: 31091, duration: 909 },
                { id: "eid284", tween: [ "style", "${_Rectangle3}", "width", '178px', { fromValue: '1px'}], position: 31091, duration: 909 },
                { id: "eid291", tween: [ "style", "${_Rectangle3Copy}", "opacity", '1', { fromValue: '0'}], position: 36500, duration: 1006 },
                { id: "eid315", tween: [ "style", "${_Text20}", "display", 'block', { fromValue: 'none'}], position: 50500, duration: 0 },
                { id: "eid300", tween: [ "style", "${_Text20}", "display", 'none', { fromValue: 'block'}], position: 55523, duration: 0 },
                { id: "eid246", tween: [ "style", "${__-55}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid247", tween: [ "style", "${__-55}", "display", 'block', { fromValue: 'none'}], position: 93634, duration: 0 },
                { id: "eid303", tween: [ "style", "${_Hint_3_text}", "display", 'block', { fromValue: 'none'}], position: 78750, duration: 0 },
                { id: "eid309", tween: [ "style", "${_Hint_3_text}", "display", 'none', { fromValue: 'block'}], position: 117354, duration: 0 },
                { id: "eid249", tween: [ "style", "${__575}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid250", tween: [ "style", "${__575}", "display", 'block', { fromValue: 'none'}], position: 116600, duration: 0 },
                { id: "eid277", tween: [ "style", "${_Hint_2_text}", "display", 'block', { fromValue: 'none'}], position: 27130, duration: 0 },
                { id: "eid301", tween: [ "style", "${_Hint_2_text}", "display", 'none', { fromValue: 'block'}], position: 55523, duration: 0 },
                { id: "eid276", tween: [ "style", "${_Number_Line_in_hint_2}", "display", 'block', { fromValue: 'none'}], position: 24750, duration: 0 },
                { id: "eid302", tween: [ "style", "${_Number_Line_in_hint_2}", "display", 'none', { fromValue: 'block'}], position: 55523, duration: 0 },
                { id: "eid310", tween: [ "style", "${_Number_Line_in_hint_2}", "display", 'block', { fromValue: 'none'}], position: 137500, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid283", tween: [ "style", "${_Rectangle3}", "left", '-124px', { fromValue: '-121px'}], position: 31091, duration: 909 },
                { id: "eid290", tween: [ "style", "${_Rectangle3Copy}", "width", '170px', { fromValue: '6px'}], position: 36500, duration: 1006 },
                { id: "eid238", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid239", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 13700, duration: 0 },
                { id: "eid320", tween: [ "style", "${_More_Negative}", "display", 'none', { fromValue: 'block'}], position: 24520, duration: 0 },
                { id: "eid321", tween: [ "style", "${_More_Negative}", "display", 'block', { fromValue: 'none'}], position: 137500, duration: 0 },
                { id: "eid317", tween: [ "style", "${_Arrow_right}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid286", tween: [ "style", "${_Positive_Numbers}", "display", 'block', { fromValue: 'none'}], position: 32261, duration: 0 },
                { id: "eid314", tween: [ "style", "${_Positive_Numbers}", "display", 'none', { fromValue: 'block'}], position: 137500, duration: 0 },
                { id: "eid289", tween: [ "style", "${_Rectangle3Copy}", "left", '-296px', { fromValue: '-35px'}], position: 36500, duration: 1006 },
                { id: "eid163", tween: [ "style", "${_Answers}", "top", '344px', { fromValue: '344px'}], position: 14700, duration: 0 },
                { id: "eid318", tween: [ "style", "${_Arrow_left}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
                { id: "eid292", tween: [ "style", "${_Negative_Numvers}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
                { id: "eid312", tween: [ "style", "${_Negative_Numvers}", "display", 'none', { fromValue: 'block'}], position: 137500, duration: 0 },
                { id: "eid270", tween: [ "style", "${_Choose_A}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid271", tween: [ "style", "${_Choose_A}", "display", 'block', { fromValue: 'none'}], position: 117354, duration: 0 },
                { id: "eid316", tween: [ "style", "${_More_positive}", "display", 'none', { fromValue: 'block'}], position: 24520, duration: 0 },
                { id: "eid313", tween: [ "style", "${_More_positive}", "display", 'block', { fromValue: 'none'}], position: 137500, duration: 0 },
                { id: "eid306", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid278", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid279", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 13700 },
                { id: "eid280", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 24520 },
                { id: "eid307", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 55523 },
                { id: "eid308", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4}', [] ], ""], position: 88500 },
                { id: "eid322", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 108608 }            ]
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
