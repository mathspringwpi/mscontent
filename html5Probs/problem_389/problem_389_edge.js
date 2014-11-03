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
                id: 'Rectangle2Copy2',
                display: 'none',
                type: 'rect',
                rect: ['355px', '149px','198px','35px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy3',
                display: 'none',
                type: 'rect',
                rect: ['355px', '184px','198px','35px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy4',
                display: 'none',
                type: 'rect',
                rect: ['355px', '223px','198px','35px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy5',
                display: 'none',
                type: 'rect',
                rect: ['355px', '259px','198px','35px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy6',
                display: 'none',
                type: 'rect',
                rect: ['355px', '297px','198px','34px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Question_Text',
                type: 'text',
                rect: ['14px', '45px','440px','37px','auto', 'auto'],
                text: "The 20 students in Petra's class were assigned to five teams, as shown in the table below.",
                align: "left",
                font: ['Georgia, Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text15',
                display: 'none',
                type: 'text',
                rect: ['402px', '157px','15px','12px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text15Copy3',
                display: 'none',
                type: 'text',
                rect: ['402px', '305px','15px','12px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text15Copy4',
                display: 'none',
                type: 'text',
                rect: ['402px', '268px','15px','12px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text15Copy5',
                display: 'none',
                type: 'text',
                rect: ['402px', '229px','15px','12px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text15Copy6',
                display: 'none',
                type: 'text',
                rect: ['402px', '194px','15px','12px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['12px', '181','auto','auto','auto', 'auto']
            },
            {
                id: 'AnswerDText',
                type: 'text',
                rect: ['62px', '524px','101px','20px','auto', 'auto'],
                text: "green",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['58px', '490px','101px','19px','auto', 'auto'],
                text: "yellow",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerBText',
                type: 'text',
                rect: ['58px', '454px','112px','19px','auto', 'auto'],
                text: "orange",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['60px', '420px','109px','19px','auto', 'auto'],
                text: "red",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
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
                rect: ['60px', '563px','101px','20px','auto', 'auto'],
                text: "blue",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['14px', '377px','auto','auto','auto', 'auto'],
                text: "Which team had the greatest number of students?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['56px', '113px','120px','33px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'RectangleCopy',
                type: 'rect',
                rect: ['56px', '261px','120px','33px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'RectangleCopy5',
                type: 'rect',
                rect: ['56px', '298px','120px','33px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'RectangleCopy2',
                type: 'rect',
                rect: ['56px', '224px','120px','33px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'RectangleCopy3',
                type: 'rect',
                rect: ['56px', '187px','120px','33px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'RectangleCopy4',
                type: 'rect',
                rect: ['56px', '150px','120px','33px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'RectangleCopy11',
                type: 'rect',
                rect: ['180px', '113px','171px','33px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'RectangleCopy10',
                type: 'rect',
                rect: ['180px', '261px','171px','33px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'RectangleCopy9',
                type: 'rect',
                rect: ['180px', '298px','171px','33px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'RectangleCopy8',
                type: 'rect',
                rect: ['180px', '224px','171px','33px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'RectangleCopy7',
                type: 'rect',
                rect: ['180px', '187px','171px','33px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'RectangleCopy6',
                type: 'rect',
                rect: ['180px', '150px','171px','33px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['91px', '120px','54px','12px','auto', 'auto'],
                text: "Team",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['190px', '120px','156px','12px','auto', 'auto'],
                text: "Fraction of Class",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['99px', '157px','54px','12px','auto', 'auto'],
                text: "red",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['91px', '194px','43px','12px','auto', 'auto'],
                text: "orange",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['92px', '233px','67px','20px','auto', 'auto'],
                text: "yellow",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['91px', '270px','54px','20px','auto', 'auto'],
                text: "green",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['95px', '305px','54px','12px','auto', 'auto'],
                text: "blue",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'a32',
                type: 'image',
                rect: ['258px', '227px','8px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a32.gif",'0px','0px']
            },
            {
                id: 'a42',
                type: 'image',
                rect: ['254px', '264px','15px','31px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a42.gif",'0px','0px']
            },
            {
                id: 'a52',
                type: 'image',
                rect: ['254px', '301px','15px','31px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a52.gif",'0px','0px']
            },
            {
                id: 'a12',
                type: 'image',
                rect: ['258px', '152px','8px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a12.gif",'0px','0px']
            },
            {
                id: 'a22',
                type: 'image',
                rect: ['254px', '190px','15px','31px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a22.gif",'0px','0px']
            },
            {
                id: 'Rectangle2',
                display: 'none',
                type: 'rect',
                rect: ['355px', '113px','198px','35px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Text10',
                display: 'none',
                type: 'text',
                rect: ['367px', '120px','184px','20px','auto', 'auto'],
                text: "Number of Students",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text12',
                display: 'none',
                type: 'text',
                rect: ['203px', '404px','380px','27px','auto', 'auto'],
                text: "How many students are in the red team?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text12Copy',
                display: 'none',
                type: 'text',
                rect: ['203px', '547px','380px','27px','auto', 'auto'],
                text: "How many students are in the blue team?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text12Copy2',
                display: 'none',
                type: 'text',
                rect: ['203px', '513px','397px','27px','auto', 'auto'],
                text: "How many students are in the green team?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text12Copy3',
                display: 'none',
                type: 'text',
                rect: ['203px', '477px','397px','27px','auto', 'auto'],
                text: "How many students are in the yellow team?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text12Copy4',
                display: 'none',
                type: 'text',
                rect: ['203px', '440px','397px','27px','auto', 'auto'],
                text: "How many students are in the orange team?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text13',
                display: 'none',
                type: 'text',
                rect: ['287px', '268px','54px','27px','auto', 'auto'],
                text: "x 20=",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text13Copy2',
                display: 'none',
                type: 'text',
                rect: ['287px', '229px','54px','27px','auto', 'auto'],
                text: "x 20=",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text13Copy3',
                display: 'none',
                type: 'text',
                rect: ['287px', '194px','54px','27px','auto', 'auto'],
                text: "x 20=",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text13Copy4',
                display: 'none',
                type: 'text',
                rect: ['287px', '157px','54px','27px','auto', 'auto'],
                text: "x 20=",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text13Copy5',
                display: 'none',
                type: 'text',
                rect: ['287px', '305px','54px','27px','auto', 'auto'],
                text: "x 20=",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'a6',
                display: 'none',
                type: 'image',
                rect: ['378px', '152px','15px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a6.gif",'0px','0px']
            },
            {
                id: 'a10',
                display: 'none',
                type: 'image',
                rect: ['378px', '301px','15px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a10.gif",'0px','0px']
            },
            {
                id: 'a9',
                display: 'none',
                type: 'image',
                rect: ['378px', '264px','15px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a9.gif",'0px','0px']
            },
            {
                id: 'a8',
                display: 'none',
                type: 'image',
                rect: ['378px', '227px','15px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a8.gif",'0px','0px']
            },
            {
                id: 'a7',
                display: 'none',
                type: 'image',
                rect: ['378px', '188px','15px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a7.gif",'0px','0px']
            },
            {
                id: 'Text16',
                display: 'none',
                type: 'text',
                rect: ['427px', '157px','43px','12px','auto', 'auto'],
                text: "4",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text18',
                display: 'none',
                type: 'text',
                rect: ['427px', '194px','33px','12px','auto', 'auto'],
                text: "6",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text19',
                display: 'none',
                type: 'text',
                rect: ['427px', '229px','33px','12px','auto', 'auto'],
                text: "5",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text20',
                display: 'none',
                type: 'text',
                rect: ['427px', '268px','33px','12px','auto', 'auto'],
                text: "3",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text21',
                display: 'none',
                type: 'text',
                rect: ['427px', '305px','33px','12px','auto', 'auto'],
                text: "2",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text22',
                display: 'none',
                type: 'text',
                rect: ['117px', '453px','175px','27px','auto', 'auto'],
                text: "Choose (B)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(255,0,0,1.00)", "400", "none", "normal"]
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
                id: 'answer',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer.mp3','media/answer.ogg']
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
            "${_a6}": [
                ["style", "top", '152px'],
                ["style", "height", '32px'],
                ["style", "display", 'none'],
                ["style", "left", '378px'],
                ["style", "width", '15px']
            ],
            "${_Text2}": [
                ["style", "left", '14px'],
                ["style", "top", '377px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_RectangleCopy10}": [
                ["style", "top", '261px'],
                ["style", "left", '180px'],
                ["style", "width", '171px']
            ],
            "${_a10}": [
                ["style", "top", '301px'],
                ["style", "display", 'none'],
                ["style", "height", '32px'],
                ["style", "left", '378px'],
                ["style", "width", '15px']
            ],
            "${_Text21}": [
                ["style", "top", '305px'],
                ["style", "left", '427px'],
                ["style", "display", 'none']
            ],
            "${_RectangleCopy7}": [
                ["style", "top", '187px'],
                ["style", "left", '180px'],
                ["style", "width", '171px']
            ],
            "${_Text12Copy3}": [
                ["style", "top", '477px'],
                ["style", "height", '27px'],
                ["style", "display", 'none'],
                ["style", "left", '203px'],
                ["style", "width", '397px']
            ],
            "${_Text10}": [
                ["style", "display", 'none'],
                ["style", "font-size", '20px'],
                ["style", "left", '367px'],
                ["style", "width", '184px']
            ],
            "${_Text13Copy4}": [
                ["style", "top", '157px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '287px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy6}": [
                ["style", "height", '34px'],
                ["style", "display", 'none'],
                ["style", "top", '297px'],
                ["style", "width", '198px']
            ],
            "${_TextCopy}": [
                ["style", "top", '120px'],
                ["style", "font-style", 'normal'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "left", '190px'],
                ["style", "width", '156px']
            ],
            "${_Rectangle2Copy4}": [
                ["style", "top", '223px'],
                ["style", "display", 'none'],
                ["style", "height", '35px'],
                ["style", "width", '198px']
            ],
            "${_Text12Copy2}": [
                ["style", "top", '513px'],
                ["style", "height", '27px'],
                ["style", "display", 'none'],
                ["style", "left", '203px'],
                ["style", "width", '397px']
            ],
            "${_RectangleCopy9}": [
                ["style", "top", '298px'],
                ["style", "left", '180px'],
                ["style", "width", '171px']
            ],
            "${_Text3}": [
                ["style", "left", '99px'],
                ["style", "top", '157px']
            ],
            "${_a8}": [
                ["style", "top", '227px'],
                ["style", "height", '32px'],
                ["style", "display", 'none'],
                ["style", "left", '378px'],
                ["style", "width", '15px']
            ],
            "${_Answers}": [
                ["style", "top", '401px'],
                ["style", "left", '12px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_RectangleCopy6}": [
                ["style", "top", '150px'],
                ["style", "left", '180px'],
                ["style", "width", '171px']
            ],
            "${_a32}": [
                ["style", "height", '32px'],
                ["style", "top", '227px'],
                ["style", "left", '258px'],
                ["style", "width", '8px']
            ],
            "${_RectangleCopy3}": [
                ["style", "top", '187px']
            ],
            "${_Text13}": [
                ["style", "top", '268px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '287px'],
                ["style", "display", 'none']
            ],
            "${_Text6}": [
                ["style", "left", '91px'],
                ["style", "top", '194px']
            ],
            "${_RectangleCopy8}": [
                ["style", "top", '224px'],
                ["style", "left", '180px'],
                ["style", "width", '171px']
            ],
            "${_Text}": [
                ["style", "font-style", 'normal'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '91px'],
                ["style", "top", '120px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_a9}": [
                ["style", "top", '264px'],
                ["style", "display", 'none'],
                ["style", "height", '32px'],
                ["style", "left", '378px'],
                ["style", "width", '15px']
            ],
            "${_Rectangle2}": [
                ["style", "height", '35px'],
                ["style", "display", 'none'],
                ["style", "width", '198px']
            ],
            "${_Text15}": [
                ["style", "top", '157px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '402px'],
                ["style", "font-size", '20px']
            ],
            "${_Text8}": [
                ["style", "top", '270px'],
                ["style", "left", '91px']
            ],
            "${_RectangleCopy5}": [
                ["style", "top", '298px'],
                ["style", "left", '56px']
            ],
            "${_Rectangle2Copy5}": [
                ["style", "height", '35px'],
                ["style", "display", 'none'],
                ["style", "top", '259px'],
                ["style", "width", '198px']
            ],
            "${_Text12Copy}": [
                ["style", "top", '547px'],
                ["style", "display", 'none'],
                ["style", "height", '27px'],
                ["style", "left", '203px'],
                ["style", "width", '380px']
            ],
            "${_Text15Copy5}": [
                ["style", "top", '229px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '402px'],
                ["style", "font-size", '20px']
            ],
            "${_Question_Text}": [
                ["style", "top", '45px'],
                ["style", "font-size", '16px'],
                ["style", "height", '37px'],
                ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
                ["style", "left", '14px'],
                ["style", "width", '440px']
            ],
            "${_a42}": [
                ["style", "height", '31px'],
                ["style", "top", '264px'],
                ["style", "left", '254px'],
                ["style", "width", '15px']
            ],
            "${_a52}": [
                ["style", "height", '31px'],
                ["style", "top", '301px'],
                ["style", "left", '254px'],
                ["style", "width", '15px']
            ],
            "${_Text15Copy3}": [
                ["style", "top", '305px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '402px'],
                ["style", "font-size", '20px']
            ],
            "${_Text20}": [
                ["style", "top", '268px'],
                ["style", "left", '427px'],
                ["style", "display", 'none']
            ],
            "${_a12}": [
                ["style", "height", '32px'],
                ["style", "top", '152px'],
                ["style", "left", '258px'],
                ["style", "width", '8px']
            ],
            "${_Text12Copy4}": [
                ["style", "top", '440px'],
                ["style", "height", '27px'],
                ["style", "display", 'none'],
                ["style", "left", '203px'],
                ["style", "width", '397px']
            ],
            "${_Text9}": [
                ["style", "left", '95px'],
                ["style", "top", '305px']
            ],
            "${_Text19}": [
                ["style", "top", '229px'],
                ["style", "left", '427px'],
                ["style", "display", 'none']
            ],
            "${_AnswerEText}": [
                ["style", "top", '563px'],
                ["style", "font-size", '16px'],
                ["style", "left", '60px'],
                ["style", "width", '101px']
            ],
            "${_Text7}": [
                ["style", "left", '92px'],
                ["style", "top", '233px']
            ],
            "${_AnswerBText}": [
                ["style", "top", '454px'],
                ["style", "font-size", '16px'],
                ["style", "left", '58px'],
                ["style", "width", '112px']
            ],
            "${_Rectangle2Copy3}": [
                ["style", "height", '35px'],
                ["style", "display", 'none'],
                ["style", "top", '184px'],
                ["style", "width", '198px']
            ],
            "${_RectangleCopy4}": [
                ["style", "top", '150px']
            ],
            "${_AnswerCText}": [
                ["style", "top", '490px'],
                ["style", "font-size", '16px'],
                ["style", "left", '58px'],
                ["style", "width", '101px']
            ],
            "${_Rectangle2Copy2}": [
                ["style", "top", '149px'],
                ["style", "display", 'none'],
                ["style", "height", '35px'],
                ["style", "width", '198px']
            ],
            "${_RectangleCopy2}": [
                ["style", "top", '224px']
            ],
            "${_Rectangle}": [
                ["style", "top", '113px'],
                ["style", "left", '56px']
            ],
            "${_Text13Copy2}": [
                ["style", "top", '229px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '287px'],
                ["style", "display", 'none']
            ],
            "${_Text18}": [
                ["style", "display", 'none']
            ],
            "${_RectangleCopy}": [
                ["style", "top", '261px'],
                ["style", "left", '56px']
            ],
            "${_AnswerAText}": [
                ["style", "top", '420px'],
                ["style", "text-align", 'left'],
                ["style", "height", '19px'],
                ["style", "font-size", '16px'],
                ["style", "left", '60px'],
                ["style", "width", '109px']
            ],
            "${_AnswerDText}": [
                ["style", "top", '524px'],
                ["style", "font-size", '16px'],
                ["style", "left", '62px'],
                ["style", "width", '101px']
            ],
            "${_Text17}": [
                ["style", "height", '12px'],
                ["style", "top", '200px']
            ],
            "${_Text16}": [
                ["style", "top", '157px'],
                ["style", "display", 'none']
            ],
            "${_Text13Copy5}": [
                ["style", "top", '305px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '287px'],
                ["style", "display", 'none']
            ],
            "${_Text15Copy6}": [
                ["style", "top", '194px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '402px'],
                ["style", "font-size", '20px']
            ],
            "${_Text15Copy4}": [
                ["style", "top", '268px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '402px'],
                ["style", "font-size", '20px']
            ],
            "${_a7}": [
                ["style", "top", '188px'],
                ["style", "display", 'none'],
                ["style", "height", '32px'],
                ["style", "left", '378px'],
                ["style", "width", '15px']
            ],
            "${_Text12}": [
                ["style", "top", '404px'],
                ["style", "height", '27px'],
                ["style", "display", 'none'],
                ["style", "left", '203px'],
                ["style", "width", '380px']
            ],
            "${_Text13Copy3}": [
                ["style", "top", '194px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '287px'],
                ["style", "display", 'none']
            ],
            "${_a22}": [
                ["style", "height", '31px'],
                ["style", "top", '190px'],
                ["style", "left", '254px'],
                ["style", "width", '15px']
            ],
            "${_RectangleCopy11}": [
                ["style", "top", '113px'],
                ["style", "left", '180px'],
                ["style", "width", '171px']
            ],
            "${_Text22}": [
                ["style", "top", '453px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '117px'],
                ["style", "font-size", '16px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 67500,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 13000,
                "Hint 2": 30000,
                "Hint 3": 47500,
                "Answer Hint": 62000
            },
            timeline: [
                { id: "eid285", tween: [ "style", "${_Text13Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid286", tween: [ "style", "${_Text13Copy3}", "display", 'block', { fromValue: 'none'}], position: 34500, duration: 0 },
                { id: "eid328", tween: [ "style", "${_a10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid330", tween: [ "style", "${_a10}", "display", 'block', { fromValue: 'none'}], position: 55000, duration: 0 },
                { id: "eid337", tween: [ "style", "${_a10}", "display", 'none', { fromValue: 'block'}], position: 57000, duration: 0 },
                { id: "eid329", tween: [ "style", "${_Text15Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid331", tween: [ "style", "${_Text15Copy3}", "display", 'block', { fromValue: 'none'}], position: 55000, duration: 0 },
                { id: "eid338", tween: [ "style", "${_Text15Copy3}", "display", 'none', { fromValue: 'block'}], position: 57000, duration: 0 },
                { id: "eid320", tween: [ "style", "${_Text20}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid321", tween: [ "style", "${_Text20}", "display", 'block', { fromValue: 'none'}], position: 49500, duration: 0 },
                { id: "eid332", tween: [ "style", "${_Text21}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid333", tween: [ "style", "${_Text21}", "display", 'block', { fromValue: 'none'}], position: 56000, duration: 0 },
                { id: "eid281", tween: [ "style", "${_Text12Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid282", tween: [ "style", "${_Text12Copy4}", "display", 'block', { fromValue: 'none'}], position: 26000, duration: 0 },
                { id: "eid244", tween: [ "style", "${_Rectangle2Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid268", tween: [ "style", "${_Rectangle2Copy4}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid238", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid239", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid304", tween: [ "style", "${_Text15Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid306", tween: [ "style", "${_Text15Copy5}", "display", 'block', { fromValue: 'none'}], position: 40250, duration: 0 },
                { id: "eid310", tween: [ "style", "${_Text15Copy5}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0 },
                { id: "eid293", tween: [ "style", "${_Text18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid294", tween: [ "style", "${_Text18}", "display", 'block', { fromValue: 'none'}], position: 36500, duration: 0 },
                { id: "eid324", tween: [ "style", "${_Text12Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid325", tween: [ "style", "${_Text12Copy}", "display", 'block', { fromValue: 'none'}], position: 51000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid290", tween: [ "style", "${_Text15Copy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid292", tween: [ "style", "${_Text15Copy6}", "display", 'block', { fromValue: 'none'}], position: 35500, duration: 0 },
                { id: "eid296", tween: [ "style", "${_Text15Copy6}", "display", 'none', { fromValue: 'block'}], position: 37500, duration: 0 },
                { id: "eid274", tween: [ "style", "${_Text15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid276", tween: [ "style", "${_Text15}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
                { id: "eid280", tween: [ "style", "${_Text15}", "display", 'none', { fromValue: 'block'}], position: 24500, duration: 0 },
                { id: "eid243", tween: [ "style", "${_Rectangle2Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid250", tween: [ "style", "${_Rectangle2Copy3}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid241", tween: [ "style", "${_Rectangle2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid248", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid300", tween: [ "style", "${_Text13Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid302", tween: [ "style", "${_Text13Copy2}", "display", 'block', { fromValue: 'none'}], position: 39500, duration: 0 },
                { id: "eid271", tween: [ "style", "${_Text13Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid272", tween: [ "style", "${_Text13Copy4}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid273", tween: [ "style", "${_a6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid275", tween: [ "style", "${_a6}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
                { id: "eid279", tween: [ "style", "${_a6}", "display", 'none', { fromValue: 'block'}], position: 24500, duration: 0 },
                { id: "eid277", tween: [ "style", "${_Text16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid278", tween: [ "style", "${_Text16}", "display", 'block', { fromValue: 'none'}], position: 23500, duration: 0 },
                { id: "eid245", tween: [ "style", "${_Rectangle2Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid269", tween: [ "style", "${_Rectangle2Copy5}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid297", tween: [ "style", "${_Text12Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid298", tween: [ "style", "${_Text12Copy3}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
                { id: "eid242", tween: [ "style", "${_Rectangle2Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid249", tween: [ "style", "${_Rectangle2Copy2}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid246", tween: [ "style", "${_Rectangle2Copy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid270", tween: [ "style", "${_Rectangle2Copy6}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid316", tween: [ "style", "${_a9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid318", tween: [ "style", "${_a9}", "display", 'block', { fromValue: 'none'}], position: 48500, duration: 0 },
                { id: "eid322", tween: [ "style", "${_a9}", "display", 'none', { fromValue: 'block'}], position: 50500, duration: 0 },
                { id: "eid289", tween: [ "style", "${_a7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid291", tween: [ "style", "${_a7}", "display", 'block', { fromValue: 'none'}], position: 35500, duration: 0 },
                { id: "eid295", tween: [ "style", "${_a7}", "display", 'none', { fromValue: 'block'}], position: 37500, duration: 0 },
                { id: "eid317", tween: [ "style", "${_Text15Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid319", tween: [ "style", "${_Text15Copy4}", "display", 'block', { fromValue: 'none'}], position: 48500, duration: 0 },
                { id: "eid323", tween: [ "style", "${_Text15Copy4}", "display", 'none', { fromValue: 'block'}], position: 50500, duration: 0 },
                { id: "eid314", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid315", tween: [ "style", "${_Text13}", "display", 'block', { fromValue: 'none'}], position: 47500, duration: 0 },
                { id: "eid311", tween: [ "style", "${_Text12Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid312", tween: [ "style", "${_Text12Copy2}", "display", 'block', { fromValue: 'none'}], position: 42750, duration: 0 },
                { id: "eid303", tween: [ "style", "${_a8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid305", tween: [ "style", "${_a8}", "display", 'block', { fromValue: 'none'}], position: 40250, duration: 0 },
                { id: "eid309", tween: [ "style", "${_a8}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0 },
                { id: "eid307", tween: [ "style", "${_Text19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid308", tween: [ "style", "${_Text19}", "display", 'block', { fromValue: 'none'}], position: 41500, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Answers}", "top", '401px', { fromValue: '401px'}], position: 14500, duration: 0 },
                { id: "eid240", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid247", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid326", tween: [ "style", "${_Text13Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid327", tween: [ "style", "${_Text13Copy5}", "display", 'block', { fromValue: 'none'}], position: 54000, duration: 0 },
                { id: "eid334", tween: [ "style", "${_Text22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid335", tween: [ "style", "${_Text22}", "display", 'block', { fromValue: 'none'}], position: 66000, duration: 0 },
                { id: "eid283", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid284", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 13000 },
                { id: "eid313", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 30000 },
                { id: "eid336", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 51000 },
                { id: "eid339", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 62000 }            ]
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
