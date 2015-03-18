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
                id: 'gray16',
                type: 'image',
                rect: ['385px', '319px','19px','16px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gray16.gif",'0px','0px']
            },
            {
                id: 'grayfoursquared2',
                type: 'image',
                rect: ['349px', '315px','18px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"grayfoursquared2.gif",'0px','0px']
            },
            {
                id: 'Question_Text',
                type: 'text',
                rect: ['24px', '168px','380px','57px','auto', 'auto'],
                text: "In rectangle ABCD, sides AB and CD pass through the centers of the two circles. If AB=8 and AD=20, what is the area of the shaded region?",
                align: "left",
                font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['5px', '263px','auto','auto','auto', 'auto']
            },
            {
                id: 'AnswerDText',
                type: 'text',
                rect: ['78px', '389px','85px','20px','auto', 'auto'],
                text: "160-10π",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['78px', '350px','80px','19px','auto', 'auto'],
                text: "140",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerBText',
                type: 'text',
                rect: ['78px', '316px','76px','19px','auto', 'auto'],
                text: "160-12π",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['76px', '279px','64px','19px','auto', 'auto'],
                text: "160",
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
                rect: ['76px', '425px','85px','20px','auto', 'auto'],
                text: "160-16π<br>",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['55px', '29px','0px','101px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle4',
                type: 'rect',
                rect: ['59px', '30px','242px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse2',
                type: 'ellipse',
                rect: ['12px', '30px','101px','98px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,251,251,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Ellipse2Copy',
                type: 'ellipse',
                rect: ['244px', '30px','101px','98px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle5',
                type: 'rect',
                rect: ['295px', '30px','2px','100px','auto', 'auto'],
                fill: ["rgba(6,6,6,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle5Copy',
                type: 'rect',
                rect: ['61px', '30px','2px','100px','auto', 'auto'],
                fill: ["rgba(6,6,6,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['59px', '137px','23px','19px','auto', 'auto'],
                text: "A",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['61px', '7px','23px','19px','auto', 'auto'],
                text: "B",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['285px', '7px','23px','19px','auto', 'auto'],
                text: "C",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['290px', '137px','35px','20px','auto', 'auto'],
                text: "D",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'circle16cropped123',
                type: 'image',
                rect: ['61px', '30px','54px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"circle16cropped123.jpg",'0px','0px']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['244px', '30px','54px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle3',
                type: 'rect',
                rect: ['61px', '30px','54px','99px','auto', 'auto'],
                fill: ["rgba(0,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'circle16cropped123Copy',
                type: 'image',
                rect: ['244px', '30px','54px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"circle16cropped123.jpg",'0px','0px']
            },
            {
                id: 'Rectangle6',
                type: 'rect',
                rect: ['170px', '209px','125px','0px','auto', 'auto'],
                fill: ["rgba(0,34,32,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle7',
                type: 'rect',
                rect: ['244px', '147px','4px','125px','auto', 'auto'],
                fill: ["rgba(157,0,9,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],['90']]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['-3092px', '-1587px','118px','35px','auto', 'auto'],
                text: "Shaded Area =",
                font: ['Arial Black, Gadget, sans-serif', 14, "rgba(157,0,9,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['237px', '233px','167px','35px','auto', 'auto'],
                text: "rectangle's area",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(157,0,9,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['382px', '233px','46px','20px','auto', 'auto'],
                text: "-<br>",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 16, "rgba(157,0,9,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['415px', '233px','178px','24px','auto', 'auto'],
                text: "2 semicircle's area",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(157,0,9,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text29',
                type: 'text',
                rect: ['417px', '233px','167px','35px','auto', 'auto'],
                text: "full circle's area",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(86,79,79,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text19',
                type: 'text',
                rect: ['173px', '316px','112px','35px','auto', 'auto'],
                text: "Circle's Area =",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(157,0,9,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text20',
                type: 'text',
                rect: ['287px', '316px','89px','36px','auto', 'auto'],
                text: "π",
                align: "left",
                font: ['Times New Roman, Times, serif', 18, "rgba(232,18,18,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text20Copy3',
                type: 'text',
                rect: ['290px', '314px','89px','36px','auto', 'auto'],
                text: "π",
                align: "left",
                font: ['Times New Roman, Times, serif', 18, "rgba(85,75,76,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text20Copy5',
                type: 'text',
                rect: ['410px', '317px','89px','36px','auto', 'auto'],
                text: "π",
                align: "left",
                font: ['Times New Roman, Times, serif', 18, "rgba(85,75,76,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text20Copy4',
                type: 'text',
                rect: ['335px', '314px','89px','36px','auto', 'auto'],
                text: "π",
                align: "left",
                font: ['Times New Roman, Times, serif', 18, "rgba(85,75,76,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text20Copy2',
                type: 'text',
                rect: ['410px', '316px','89px','36px','auto', 'auto'],
                text: "π",
                align: "left",
                font: ['Times New Roman, Times, serif', 18, "rgba(232,18,18,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text20Copy8',
                type: 'text',
                rect: ['410px', '394px','89px','36px','auto', 'auto'],
                text: "π",
                align: "left",
                font: ['Times New Roman, Times, serif', 18, "rgba(232,18,18,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text20Copy',
                type: 'text',
                rect: ['335px', '316px','24px','36px','auto', 'auto'],
                text: "π",
                align: "left",
                font: ['Times New Roman, Times, serif', 18, "rgba(232,18,18,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['43px', '70px','19px','35px','auto', 'auto'],
                text: "h",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(157,0,9,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text11',
                type: 'text',
                rect: ['174px', '137px','23px','20px','auto', 'auto'],
                text: "w",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(157,0,9,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text12',
                type: 'text',
                rect: ['172px', '282px','156px','35px','auto', 'auto'],
                text: "Rectangle's Area =",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(157,0,9,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text13',
                type: 'text',
                rect: ['325px', '281px','35px','20px','auto', 'auto'],
                text: "h",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(157,0,9,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text14',
                type: 'text',
                rect: ['339px', '281px','19px','20px','auto', 'auto'],
                text: "*",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(157,0,9,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text15',
                type: 'text',
                rect: ['351px', '281px','17px','9px','auto', 'auto'],
                text: "w",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(157,0,9,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text17',
                type: 'text',
                rect: ['172px', '139px','19px','35px','auto', 'auto'],
                text: "20",
                align: "left",
                font: ['Arial Black, Gadget, sans-serif', 14, "rgba(157,0,9,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text16',
                type: 'text',
                rect: ['43px', '70px','23px','20px','auto', 'auto'],
                text: "8",
                align: "left",
                font: ['Arial Black, Gadget, sans-serif', 14, "rgba(157,0,9,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text22',
                type: 'text',
                rect: ['43px', '70px','17px','20px','auto', 'auto'],
                text: "8",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(78,75,75,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text23',
                type: 'text',
                rect: ['172px', '137px','35px','20px','auto', 'auto'],
                text: "20",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(78,75,75,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text18',
                type: 'text',
                rect: ['335px', '282px','17px','8px','auto', 'auto'],
                text: "x",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(157,0,9,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text21',
                type: 'text',
                rect: ['377px', '282px','76px','19px','auto', 'auto'],
                text: "= 160",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(157,0,9,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text21Copy',
                type: 'text',
                rect: ['393px', '364px','76px','19px','auto', 'auto'],
                text: " 160",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(157,0,9,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'radiussquared2',
                type: 'image',
                rect: ['301px', '317px','14px','16px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radiussquared2.gif",'0px','0px']
            },
            {
                id: 'RoundRect',
                type: 'rect',
                rect: ['60px', '30px','4px','51px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(229,0,21,1.00)"],
                stroke: [0,"rgba(244,12,12,1.00)","none"]
            },
            {
                id: 'radius',
                type: 'image',
                rect: ['68px', '50px','9px','12px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radius.gif",'0px','0px']
            },
            {
                id: 'Text24',
                type: 'text',
                rect: ['321px', '316px','23px','21px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Arial Black, Gadget, sans-serif', 14, "rgba(157,0,9,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text24Copy3',
                type: 'text',
                rect: ['321px', '316px','23px','21px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Arial Black, Gadget, sans-serif', 14, "rgba(85,75,76,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text24Copy4',
                type: 'text',
                rect: ['370px', '316px','23px','21px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Arial Black, Gadget, sans-serif', 14, "rgba(85,75,76,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text24Copy',
                type: 'text',
                rect: ['370px', '316px','23px','21px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Arial Black, Gadget, sans-serif', 14, "rgba(157,0,9,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text25',
                type: 'text',
                rect: ['172px', '316px','118px','21px','auto', 'auto'],
                text: "Circle's Area =",
                align: "left",
                font: ['Arial Black, Gadget, sans-serif', 14, "rgba(85,75,76,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'grayrsquared',
                type: 'image',
                rect: ['301px', '314px','17px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"grayrsquared.gif",'0px','0px']
            },
            {
                id: 'Text26',
                type: 'text',
                rect: ['172px', '281px','136px','35px','auto', 'auto'],
                text: "Shaded Area =",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 14, "rgba(157,0,9,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Text27',
                type: 'text',
                rect: ['417px', '279px','17px','12px','auto', 'auto'],
                text: "-",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 16, "rgba(157,0,9,1)", "normal", "none", "normal"]
            },
            {
                id: 'redfoursquared3',
                type: 'image',
                rect: ['349px', '315px','18px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"redfoursquared3.gif",'0px','0px']
            },
            {
                id: 'redsixteen',
                type: 'image',
                rect: ['385px', '319px','19px','16px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"redsixteen.gif",'0px','0px']
            },
            {
                id: 'redsixteen2',
                type: 'image',
                rect: ['385px', '396px','19px','16px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"redsixteen2.gif",'0px','0px']
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['173px', '316px','298px','35px','auto', 'auto'],
                text: "Choose (E)",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 20, "rgba(157,0,9,1)", "normal", "none", "normal"]
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
                id: 'hint4',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint4.ogg','media/hint4.mp3']
            },
            {
                id: 'hint5',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint5.mp3','media/hint5.ogg']
            },
            {
                id: 'hint6',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint6.ogg','media/hint6.mp3']
            },
            {
                id: 'hint7',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint7.ogg','media/hint7.mp3']
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
            "${_Text24Copy4}": [
                ["style", "top", '316px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(85,75,76,1)'],
                ["style", "font-family", '\'Arial Black\', Gadget, sans-serif'],
                ["style", "left", '370px'],
                ["style", "font-size", '14px']
            ],
            "${_Text2}": [
                ["style", "left", '61px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Rectangle4}": [
                ["style", "top", '30px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '59px'],
                ["style", "width", '242px']
            ],
            "${_AnswerDText}": [
                ["style", "top", '389px'],
                ["style", "left", '78px'],
                ["style", "width", '85px']
            ],
            "${_redsixteen2}": [
                ["style", "top", '396px'],
                ["style", "opacity", '0'],
                ["style", "left", '385px']
            ],
            "${_redfoursquared3}": [
                ["style", "top", '315px'],
                ["style", "opacity", '0'],
                ["style", "left", '349px']
            ],
            "${_Text20Copy4}": [
                ["style", "top", '314px'],
                ["style", "font-size", '18px'],
                ["color", "color", 'rgba(85,75,76,1)'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "height", '36px'],
                ["style", "opacity", '0'],
                ["style", "left", '335px'],
                ["style", "width", '89px']
            ],
            "${_Text3}": [
                ["style", "left", '285px']
            ],
            "${_Text27}": [
                ["style", "top", '279px'],
                ["style", "opacity", '0'],
                ["style", "left", '417px'],
                ["style", "font-size", '16px']
            ],
            "${_circle16cropped123Copy}": [
                ["style", "top", '30px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '100px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '244px'],
                ["style", "width", '54px']
            ],
            "${_Answers}": [
                ["style", "top", '263px'],
                ["style", "left", '5px'],
                ["transform", "scaleY", '1.03743']
            ],
            "${_Rectangle5Copy}": [
                ["style", "top", '30px'],
                ["style", "left", '61px'],
                ["style", "height", '100px']
            ],
            "${_Text24Copy}": [
                ["style", "top", '316px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(157,0,9,1)'],
                ["style", "font-family", '\'Arial Black\', Gadget, sans-serif'],
                ["style", "left", '370px'],
                ["style", "font-size", '14px']
            ],
            "${_Text24}": [
                ["style", "top", '316px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(157,0,9,1.00)'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "left", '321px'],
                ["style", "font-size", '14px']
            ],
            "${_gray16}": [
                ["style", "top", '319px'],
                ["style", "opacity", '0'],
                ["style", "left", '385px']
            ],
            "${_grayrsquared}": [
                ["style", "top", '314px'],
                ["style", "opacity", '0'],
                ["style", "left", '301px']
            ],
            "${_Text13}": [
                ["style", "top", '281px'],
                ["style", "opacity", '0'],
                ["style", "left", '325px'],
                ["color", "color", 'rgba(157,0,9,1)']
            ],
            "${_Text6}": [
                ["style", "top", '316px'],
                ["style", "opacity", '0'],
                ["style", "left", '173px'],
                ["style", "font-size", '20px']
            ],
            "${_Text}": [
                ["style", "top", '137px'],
                ["style", "left", '59px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle5}": [
                ["style", "top", '30px'],
                ["style", "left", '295px'],
                ["style", "height", '100px']
            ],
            "${_Text26}": [
                ["color", "color", 'rgba(157,0,9,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '172px'],
                ["style", "top", '281px']
            ],
            "${_Rectangle2}": [
                ["style", "left", '55px'],
                ["style", "top", '29px']
            ],
            "${_Text20Copy2}": [
                ["style", "top", '316px'],
                ["style", "width", '89px'],
                ["style", "height", '36px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(232,18,18,1)'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '410px'],
                ["style", "font-size", '18px']
            ],
            "${_radius}": [
                ["style", "top", '50px'],
                ["style", "opacity", '0'],
                ["style", "left", '68px']
            ],
            "${_Text8}": [
                ["style", "top", '233px'],
                ["style", "font-size", '16px'],
                ["style", "height", '20px'],
                ["color", "color", 'rgba(157,0,9,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '382px'],
                ["style", "width", '46px']
            ],
            "${_Text18}": [
                ["style", "top", '282px'],
                ["color", "color", 'rgba(157,0,9,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '334px'],
                ["style", "height", '8px']
            ],
            "${_Text4}": [
                ["style", "left", '290px']
            ],
            "${_Rectangle7}": [
                ["style", "top", '147px'],
                ["color", "background-color", 'rgba(157,0,9,1.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '125px'],
                ["style", "opacity", '0'],
                ["style", "left", '244px'],
                ["style", "width", '4px']
            ],
            "${_Text21Copy}": [
                ["style", "top", '364px'],
                ["style", "opacity", '0'],
                ["style", "left", '393px'],
                ["color", "color", 'rgba(157,0,9,1.00)']
            ],
            "${_Text24Copy3}": [
                ["style", "top", '316px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(85,75,76,1.00)'],
                ["style", "font-family", '\'Arial Black\', Gadget, sans-serif'],
                ["style", "left", '321px'],
                ["style", "font-size", '14px']
            ],
            "${_Text21Copy2}": [
                ["style", "top", '429px'],
                ["style", "opacity", '1'],
                ["style", "left", '398px'],
                ["color", "color", 'rgba(157,0,9,1)']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '600px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '30px'],
                ["color", "background-color", 'rgba(0,229,214,1.00)'],
                ["style", "height", '99px'],
                ["style", "opacity", '0'],
                ["style", "left", '61px'],
                ["style", "width", '54px']
            ],
            "${_Text29}": [
                ["style", "top", '233px'],
                ["color", "color", 'rgba(86,79,79,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '417px'],
                ["style", "width", '167px']
            ],
            "${_RoundRect}": [
                ["style", "height", '51px'],
                ["style", "opacity", '0'],
                ["style", "left", '60px'],
                ["style", "width", '4px']
            ],
            "${_Text24Copy2}": [
                ["style", "top", '316px'],
                ["color", "color", 'rgba(157,0,9,1)'],
                ["style", "font-family", '\'Arial Black\', Gadget, sans-serif'],
                ["style", "left", '321px'],
                ["style", "font-size", '14px']
            ],
            "${_Text9}": [
                ["style", "top", '233px'],
                ["style", "width", '178px'],
                ["color", "color", 'rgba(157,0,9,1)'],
                ["style", "height", '24px'],
                ["style", "opacity", '0'],
                ["style", "left", '415px'],
                ["style", "font-size", '14px']
            ],
            "${_Text10}": [
                ["style", "top", '70px'],
                ["style", "opacity", '0'],
                ["style", "left", '43px'],
                ["style", "width", '19px']
            ],
            "${_Text19}": [
                ["style", "top", '316px'],
                ["style", "opacity", '0'],
                ["style", "left", '173px'],
                ["color", "color", 'rgba(157,0,9,1.00)']
            ],
            "${_Question_Text}": [
                ["style", "top", '168px'],
                ["style", "width", '380px'],
                ["style", "height", '57px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '24px'],
                ["style", "font-size", '16px']
            ],
            "${_AnswerEText}": [
                ["style", "top", '425px'],
                ["style", "left", '76px'],
                ["style", "width", '85px']
            ],
            "${_Text20Copy5}": [
                ["style", "top", '317px'],
                ["style", "font-size", '18px'],
                ["color", "color", 'rgba(85,75,76,1)'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "height", '36px'],
                ["style", "opacity", '0'],
                ["style", "left", '410px'],
                ["style", "width", '89px']
            ],
            "${_Text11}": [
                ["style", "left", '174px'],
                ["style", "opacity", '0']
            ],
            "${_AnswerBText}": [
                ["style", "top", '316px'],
                ["style", "font-size", '14px'],
                ["style", "left", '78px'],
                ["style", "width", '76px']
            ],
            "${_Text20Copy}": [
                ["style", "top", '316px'],
                ["style", "width", '24px'],
                ["style", "height", '36px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(232,18,18,1)'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '335px'],
                ["style", "font-size", '18px']
            ],
            "${_Text5}": [
                ["style", "top", '-1587px'],
                ["style", "width", '118px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(157,0,9,1.00)'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "left", '-3092px'],
                ["style", "font-size", '14px']
            ],
            "${_Text21}": [
                ["style", "top", '282px'],
                ["style", "opacity", '0'],
                ["style", "left", '377px'],
                ["color", "color", 'rgba(157,0,9,1)']
            ],
            "${_Text23}": [
                ["color", "color", 'rgba(78,75,75,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '172px'],
                ["style", "top", '137px']
            ],
            "${_Ellipse2}": [
                ["style", "top", '30px'],
                ["color", "background-color", 'rgba(255,251,251,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "height", '98px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '12px'],
                ["style", "width", '101px']
            ],
            "${_AnswerAText}": [
                ["style", "top", '279px'],
                ["style", "text-align", 'left'],
                ["style", "height", '19px'],
                ["style", "width", '64px'],
                ["style", "left", '76px'],
                ["style", "font-size", '14px']
            ],
            "${_Text15}": [
                ["style", "top", '281px'],
                ["style", "opacity", '0'],
                ["style", "left", '351px'],
                ["style", "width", '17px']
            ],
            "${_Text20}": [
                ["style", "top", '316px'],
                ["style", "font-size", '18px'],
                ["color", "color", 'rgba(232,18,18,1.00)'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "height", '36px'],
                ["style", "opacity", '0'],
                ["style", "left", '287px'],
                ["style", "width", '89px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,223,255,1.00)'],
                ["style", "opacity", '0']
            ],
            "${_Text22}": [
                ["color", "color", 'rgba(78,75,75,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '43px'],
                ["style", "top", '70px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_circle16cropped123}": [
                ["style", "top", '30px'],
                ["style", "height", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '61px'],
                ["style", "width", '54px']
            ],
            "${_grayfoursquared2}": [
                ["style", "top", '315px'],
                ["style", "opacity", '0'],
                ["style", "left", '349px']
            ],
            "${_Text20Copy8}": [
                ["style", "top", '394px'],
                ["style", "font-size", '18px'],
                ["color", "color", 'rgba(232,18,18,1)'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "height", '36px'],
                ["style", "opacity", '0'],
                ["style", "left", '410px'],
                ["style", "width", '89px']
            ],
            "${_radiussquared2}": [
                ["style", "top", '317px'],
                ["style", "opacity", '0'],
                ["style", "left", '301px']
            ],
            "${_Ellipse2Copy}": [
                ["style", "top", '30px'],
                ["style", "border-width", '1px'],
                ["style", "height", '98px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '244px'],
                ["style", "width", '101px']
            ],
            "${_Text17}": [
                ["style", "top", '139px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(157,0,9,1.00)'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "left", '172px'],
                ["style", "font-size", '14px']
            ],
            "${_Text16}": [
                ["style", "top", '70px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(157,0,9,1.00)'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_Text14}": [
                ["style", "top", '281px'],
                ["style", "opacity", '0'],
                ["style", "left", '339px'],
                ["color", "color", 'rgba(157,0,9,1)']
            ],
            "${_Text20Copy6}": [
                ["style", "top", '316px'],
                ["style", "font-size", '18px'],
                ["color", "color", 'rgba(232,18,18,1)'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "height", '36px'],
                ["style", "opacity", '1'],
                ["style", "left", '410px'],
                ["style", "width", '89px']
            ],
            "${_Text25}": [
                ["style", "top", '316px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(85,75,76,1.00)'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "left", '172px'],
                ["style", "font-size", '14px']
            ],
            "${_redsixteen}": [
                ["style", "top", '319px'],
                ["style", "opacity", '0'],
                ["style", "left", '385px']
            ],
            "${_Text12}": [
                ["style", "top", '282px'],
                ["color", "color", 'rgba(157,0,9,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '172px'],
                ["style", "width", '156px']
            ],
            "${_Text7}": [
                ["style", "top", '233px'],
                ["color", "color", 'rgba(157,0,9,1)'],
                ["style", "height", '35px'],
                ["style", "opacity", '0'],
                ["style", "left", '237px'],
                ["style", "width", '167px']
            ],
            "${_AnswerCText}": [
                ["style", "top", '350px'],
                ["style", "font-size", '14px'],
                ["style", "left", '78px'],
                ["style", "width", '80px']
            ],
            "${_Text20Copy7}": [
                ["style", "top", '316px'],
                ["style", "font-size", '18px'],
                ["color", "color", 'rgba(232,18,18,1)'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "height", '36px'],
                ["style", "opacity", '1'],
                ["style", "left", '410px'],
                ["style", "width", '89px']
            ],
            "${_Text20Copy3}": [
                ["style", "top", '314px'],
                ["style", "width", '89px'],
                ["style", "height", '36px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(85,75,76,1.00)'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '290px'],
                ["style", "font-size", '18px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 82713,
            autoPlay: true,
            labels: {
                "Read Question": 3000,
                "Hint 1": 16879,
                "Hint 2": 30973,
                "Hint 3": 37022,
                "Hint 4": 44010,
                "Hint 5": 54539,
                "Hint 6": 63613,
                "Hint 7": 68989,
                "Hint 8": 76088,
                "Answer": 80040
            },
            timeline: [
                { id: "eid191", tween: [ "style", "${_circle16cropped123Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 23925, duration: 2026 },
                { id: "eid249", tween: [ "style", "${_circle16cropped123Copy}", "opacity", '0', { fromValue: '1'}], position: 27420, duration: 928 },
                { id: "eid431", tween: [ "style", "${_circle16cropped123Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 49517, duration: 1038 },
                { id: "eid713", tween: [ "style", "${_circle16cropped123Copy}", "opacity", '0', { fromValue: '1'}], position: 54552, duration: 266 },
                { id: "eid388", tween: [ "style", "${_Text23}", "opacity", '1', { fromValue: '0.000000'}], position: 40635, duration: 151 },
                { id: "eid586", tween: [ "style", "${_Text14}", "left", '339px', { fromValue: '339px'}], position: 76091, duration: 0 },
                { id: "eid380", tween: [ "style", "${_Text21}", "opacity", '1', { fromValue: '0.000000'}], position: 41936, duration: 363 },
                { id: "eid650", tween: [ "style", "${_Text21Copy}", "top", '281px', { fromValue: '364px'}], position: 77839, duration: 478 },
                { id: "eid426", tween: [ "style", "${_circle16cropped123}", "top", '30px', { fromValue: '30px'}], position: 49517, duration: 0 },
                { id: "eid448", tween: [ "style", "${_Text20}", "opacity", '1', { fromValue: '0.000000'}], position: 54540, duration: 486 },
                { id: "eid574", tween: [ "style", "${_Text20}", "opacity", '0', { fromValue: '1'}], position: 76100, duration: 88 },
                { id: "eid649", tween: [ "style", "${_Text21Copy}", "left", '315px', { fromValue: '393px'}], position: 77839, duration: 478 },
                { id: "eid620", tween: [ "style", "${_Text18}", "top", '365px', { fromValue: '282px'}], position: 76099, duration: 1036 },
                { id: "eid621", tween: [ "style", "${_Text18}", "top", '364px', { fromValue: '365px'}], position: 77135, duration: 53 },
                { id: "eid338", tween: [ "style", "${_Text15}", "opacity", '1', { fromValue: '0.000000'}], position: 31887, duration: 911 },
                { id: "eid366", tween: [ "style", "${_Text15}", "opacity", '0', { fromValue: '1'}], position: 40982, duration: 681 },
                { id: "eid528", tween: [ "style", "${_Text20Copy3}", "left", '290px', { fromValue: '290px'}], position: 76096, duration: 0 },
                { id: "eid616", tween: [ "style", "${_Text12}", "top", '364px', { fromValue: '282px'}], position: 76091, duration: 1035 },
                { id: "eid245", tween: [ "color", "${_Rectangle3}", "background-color", 'rgba(0,229,214,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,229,214,1.00)'}], position: 21519, duration: 0 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid512", tween: [ "style", "${_grayrsquared}", "opacity", '1', { fromValue: '0.000000'}], position: 76091, duration: 1022 },
                { id: "eid542", tween: [ "style", "${_Text20Copy3}", "top", '391px', { fromValue: '314px'}], position: 76096, duration: 1013 },
                { id: "eid469", tween: [ "style", "${_Text24}", "opacity", '1', { fromValue: '0.000000'}], position: 71968, duration: 975 },
                { id: "eid581", tween: [ "style", "${_Text24}", "opacity", '0', { fromValue: '1'}], position: 76100, duration: 88 },
                { id: "eid514", tween: [ "style", "${_Text25}", "opacity", '1', { fromValue: '0.000000'}], position: 76091, duration: 1022 },
                { id: "eid342", tween: [ "style", "${_Rectangle7}", "opacity", '1', { fromValue: '0.000000'}], position: 36803, duration: 261 },
                { id: "eid358", tween: [ "style", "${_Rectangle7}", "opacity", '0', { fromValue: '1'}], position: 39834, duration: 270 },
                { id: "eid645", tween: [ "style", "${_Text20Copy8}", "opacity", '1', { fromValue: '0.000000'}], position: 76928, duration: 212 },
                { id: "eid356", tween: [ "style", "${_Text16}", "opacity", '1', { fromValue: '0'}], position: 39816, duration: 274 },
                { id: "eid461", tween: [ "style", "${_radius}", "opacity", '1', { fromValue: '0.000000'}], position: 66586, duration: 548 },
                { id: "eid292", tween: [ "style", "${_Text11}", "opacity", '1', { fromValue: '0.000000'}], position: 30823, duration: 991 },
                { id: "eid348", tween: [ "style", "${_Text11}", "opacity", '0', { fromValue: '1'}], position: 39816, duration: 265 },
                { id: "eid696", tween: [ "style", "${_redsixteen2}", "top", '283px', { fromValue: '396px'}], position: 77840, duration: 495 },
                { id: "eid279", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 27394, duration: 1982 },
                { id: "eid372", tween: [ "style", "${_Text16}", "top", '282px', { fromValue: '70px'}], position: 40800, duration: 1021 },
                { id: "eid610", tween: [ "style", "${_Text16}", "top", '364px', { fromValue: '282px'}], position: 76091, duration: 1035 },
                { id: "eid525", tween: [ "style", "${_Text24Copy3}", "left", '321px', { fromValue: '321px'}], position: 76096, duration: 0 },
                { id: "eid376", tween: [ "style", "${_Text18}", "opacity", '1', { fromValue: '0.000000'}], position: 41317, duration: 495 },
                { id: "eid450", tween: [ "style", "${_Text19}", "opacity", '1', { fromValue: '0.000000'}], position: 54540, duration: 486 },
                { id: "eid577", tween: [ "style", "${_Text19}", "opacity", '0', { fromValue: '1'}], position: 76100, duration: 88 },
                { id: "eid657", tween: [ "style", "${_Text20Copy8}", "top", '281px', { fromValue: '394px'}], position: 77848, duration: 477 },
                { id: "eid417", tween: [ "color", "${_Text18}", "color", 'rgba(86,79,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,0,9,1)'}], position: 44021, duration: 496 },
                { id: "eid409", tween: [ "color", "${_Text21}", "color", 'rgba(85,75,76,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,0,9,1)'}], position: 44010, duration: 507 },
                { id: "eid336", tween: [ "style", "${_Text13}", "opacity", '1', { fromValue: '0.000000'}], position: 31887, duration: 911 },
                { id: "eid368", tween: [ "style", "${_Text13}", "opacity", '0', { fromValue: '1'}], position: 40964, duration: 735 },
                { id: "eid700", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0.000000'}], position: 80040, duration: 266 },
                { id: "eid615", tween: [ "style", "${_Text12}", "left", '174px', { fromValue: '172px'}], position: 76091, duration: 1035 },
                { id: "eid685", tween: [ "style", "${_gray16}", "opacity", '1', { fromValue: '0.000000'}], position: 76079, duration: 1062 },
                { id: "eid619", tween: [ "style", "${_Text18}", "left", '336px', { fromValue: '334px'}], position: 76099, duration: 1036 },
                { id: "eid449", tween: [ "style", "${_radiussquared2}", "opacity", '1', { fromValue: '0.000000'}], position: 54540, duration: 486 },
                { id: "eid575", tween: [ "style", "${_radiussquared2}", "opacity", '0', { fromValue: '1'}], position: 76100, duration: 88 },
                { id: "eid433", tween: [ "style", "${_circle16cropped123Copy}", "top", '30px', { fromValue: '30px'}], position: 49517, duration: 0 },
                { id: "eid471", tween: [ "style", "${_Text20Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 71968, duration: 975 },
                { id: "eid580", tween: [ "style", "${_Text20Copy}", "opacity", '0', { fromValue: '1'}], position: 76100, duration: 88 },
                { id: "eid335", tween: [ "style", "${_Text12}", "opacity", '1', { fromValue: '0.000000'}], position: 31887, duration: 911 },
                { id: "eid518", tween: [ "style", "${_Text24Copy3}", "opacity", '1', { fromValue: '0.000000'}], position: 76091, duration: 1022 },
                { id: "eid638", tween: [ "style", "${_Text21Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 76945, duration: 168 },
                { id: "eid539", tween: [ "style", "${_grayrsquared}", "top", '391px', { fromValue: '314px'}], position: 76096, duration: 1022 },
                { id: "eid658", tween: [ "style", "${_Text20Copy8}", "left", '507px', { fromValue: '410px'}], position: 77848, duration: 477 },
                { id: "eid628", tween: [ "style", "${_Text26}", "opacity", '1', { fromValue: '0.000000'}], position: 77104, duration: 478 },
                { id: "eid428", tween: [ "style", "${_circle16cropped123}", "left", '180px', { fromValue: '61px'}], position: 49517, duration: 1044 },
                { id: "eid434", tween: [ "style", "${_circle16cropped123Copy}", "left", '126px', { fromValue: '244px'}], position: 49517, duration: 1044 },
                { id: "eid526", tween: [ "style", "${_Text20Copy4}", "left", '335px', { fromValue: '335px'}], position: 76096, duration: 0 },
                { id: "eid412", tween: [ "color", "${_Text14}", "color", 'rgba(85,75,76,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,0,9,1)'}], position: 44010, duration: 507 },
                { id: "eid661", tween: [ "style", "${_redfoursquared3}", "opacity", '1', { fromValue: '0.000000'}], position: 71961, duration: 982 },
                { id: "eid669", tween: [ "style", "${_redfoursquared3}", "opacity", '0', { fromValue: '1'}], position: 76093, duration: 92 },
                { id: "eid411", tween: [ "color", "${_Text17}", "color", 'rgba(85,75,76,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,0,9,1)'}], position: 44010, duration: 507 },
                { id: "eid320", tween: [ "color", "${_Text5}", "color", 'rgba(86,79,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,0,9,1)'}], position: 30560, duration: 274 },
                { id: "eid294", tween: [ "style", "${_Text10}", "opacity", '1', { fromValue: '0.000000'}], position: 30823, duration: 991 },
                { id: "eid347", tween: [ "style", "${_Text10}", "opacity", '0', { fromValue: '1'}], position: 39816, duration: 265 },
                { id: "eid321", tween: [ "color", "${_Text9}", "color", 'rgba(86,79,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,0,9,1)'}], position: 30560, duration: 274 },
                { id: "eid421", tween: [ "color", "${_Text9}", "color", 'rgba(157,0,9,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(86,79,79,1)'}], position: 44013, duration: 504 },
                { id: "eid438", tween: [ "color", "${_Text9}", "color", 'rgba(86,79,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,0,9,1)'}], position: 54535, duration: 500 },
                { id: "eid540", tween: [ "style", "${_Text20Copy4}", "top", '391px', { fromValue: '314px'}], position: 76096, duration: 1013 },
                { id: "eid370", tween: [ "style", "${_Text17}", "top", '282px', { fromValue: '139px'}], position: 40800, duration: 1003 },
                { id: "eid612", tween: [ "style", "${_Text17}", "top", '364px', { fromValue: '282px'}], position: 76091, duration: 1035 },
                { id: "eid587", tween: [ "style", "${_Text13}", "left", '325px', { fromValue: '325px'}], position: 76091, duration: 0 },
                { id: "eid680", tween: [ "style", "${_grayfoursquared2}", "top", '390px', { fromValue: '315px'}], position: 76088, duration: 1017 },
                { id: "eid410", tween: [ "color", "${_Text16}", "color", 'rgba(85,75,76,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,0,9,1)'}], position: 44010, duration: 507 },
                { id: "eid593", tween: [ "style", "${_Text13}", "top", '281px', { fromValue: '281px'}], position: 76091, duration: 0 },
                { id: "eid481", tween: [ "style", "${_Text20Copy2}", "opacity", '1', { fromValue: '0.000000'}], position: 72952, duration: 1017 },
                { id: "eid579", tween: [ "style", "${_Text20Copy2}", "opacity", '0', { fromValue: '1'}], position: 76100, duration: 88 },
                { id: "eid681", tween: [ "style", "${_grayfoursquared2}", "left", '351px', { fromValue: '349px'}], position: 76088, duration: 1017 },
                { id: "eid246", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(0,229,214,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,229,214,1.00)'}], position: 21524, duration: 0 },
                { id: "eid247", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(0,229,214,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,229,214,1.00)'}], position: 21528, duration: 0 },
                { id: "eid524", tween: [ "style", "${_Text24Copy4}", "left", '370px', { fromValue: '370px'}], position: 76095, duration: 0 },
                { id: "eid516", tween: [ "style", "${_Text20Copy5}", "opacity", '1', { fromValue: '0.000000'}], position: 76091, duration: 1004 },
                { id: "eid482", tween: [ "style", "${_Text24Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 72952, duration: 1017 },
                { id: "eid582", tween: [ "style", "${_Text24Copy}", "opacity", '0', { fromValue: '1'}], position: 76100, duration: 88 },
                { id: "eid413", tween: [ "color", "${_Text12}", "color", 'rgba(85,75,76,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,0,9,1)'}], position: 44010, duration: 507 },
                { id: "eid607", tween: [ "style", "${_Text21}", "left", '379px', { fromValue: '377px'}], position: 76091, duration: 1035 },
                { id: "eid708", tween: [ "style", "${_Text29}", "opacity", '1', { fromValue: '0.000000'}], position: 54532, duration: 97 },
                { id: "eid462", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0.000000'}], position: 66595, duration: 548 },
                { id: "eid545", tween: [ "style", "${_Text24Copy3}", "top", '393px', { fromValue: '316px'}], position: 76096, duration: 1022 },
                { id: "eid513", tween: [ "style", "${_Text20Copy4}", "opacity", '1', { fromValue: '0.000000'}], position: 76091, duration: 1013 },
                { id: "eid211", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0.000000'}], position: 20986, duration: 550 },
                { id: "eid212", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 22916, duration: 531 },
                { id: "eid319", tween: [ "color", "${_Text8}", "color", 'rgba(86,79,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,0,9,1)'}], position: 30560, duration: 274 },
                { id: "eid695", tween: [ "style", "${_redsixteen2}", "left", '480px', { fromValue: '385px'}], position: 77840, duration: 495 },
                { id: "eid204", tween: [ "style", "${_Rectangle3}", "opacity", '1', { fromValue: '0.000000'}], position: 20985, duration: 531 },
                { id: "eid213", tween: [ "style", "${_Rectangle3}", "opacity", '0', { fromValue: '1'}], position: 22913, duration: 542 },
                { id: "eid527", tween: [ "style", "${_Text20Copy5}", "left", '410px', { fromValue: '410px'}], position: 76095, duration: 0 },
                { id: "eid235", tween: [ "color", "${_Rectangle4}", "background-color", 'rgba(0,231,216,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 21024, duration: 509 },
                { id: "eid237", tween: [ "color", "${_Rectangle4}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,231,216,1)'}], position: 22922, duration: 523 },
                { id: "eid687", tween: [ "style", "${_gray16}", "left", '385px', { fromValue: '385px'}], position: 76070, duration: 0 },
                { id: "eid281", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0'}], position: 27385, duration: 2000 },
                { id: "eid337", tween: [ "style", "${_Text14}", "opacity", '1', { fromValue: '0.000000'}], position: 31887, duration: 911 },
                { id: "eid367", tween: [ "style", "${_Text14}", "opacity", '0', { fromValue: '1'}], position: 40973, duration: 708 },
                { id: "eid523", tween: [ "style", "${_Text25}", "left", '172px', { fromValue: '172px'}], position: 76096, duration: 0 },
                { id: "eid543", tween: [ "style", "${_Text20Copy5}", "top", '394px', { fromValue: '317px'}], position: 76095, duration: 1004 },
                { id: "eid515", tween: [ "style", "${_Text20Copy3}", "opacity", '1', { fromValue: '0.000000'}], position: 76091, duration: 1013 },
                { id: "eid277", tween: [ "style", "${_Text9}", "opacity", '1', { fromValue: '0'}], position: 27394, duration: 2000 },
                { id: "eid704", tween: [ "style", "${_Text9}", "opacity", '0', { fromValue: '1'}], position: 54541, duration: 88 },
                { id: "eid541", tween: [ "style", "${_Text25}", "top", '393px', { fromValue: '316px'}], position: 76096, duration: 1022 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid511", tween: [ "style", "${_Text24Copy4}", "opacity", '1', { fromValue: '0.000000'}], position: 76091, duration: 1004 },
                { id: "eid387", tween: [ "style", "${_Text22}", "opacity", '1', { fromValue: '0.000000'}], position: 40635, duration: 151 },
                { id: "eid193", tween: [ "style", "${_circle16cropped123}", "opacity", '1', { fromValue: '0.000000'}], position: 23917, duration: 2035 },
                { id: "eid248", tween: [ "style", "${_circle16cropped123}", "opacity", '0', { fromValue: '1'}], position: 27421, duration: 927 },
                { id: "eid425", tween: [ "style", "${_circle16cropped123}", "opacity", '1', { fromValue: '0.000000'}], position: 49517, duration: 1038 },
                { id: "eid714", tween: [ "style", "${_circle16cropped123}", "opacity", '0', { fromValue: '1'}], position: 54552, duration: 266 },
                { id: "eid665", tween: [ "style", "${_redsixteen}", "opacity", '1', { fromValue: '0.000000'}], position: 72961, duration: 1000 },
                { id: "eid672", tween: [ "style", "${_redsixteen}", "opacity", '0', { fromValue: '1'}], position: 76097, duration: 97 },
                { id: "eid369", tween: [ "style", "${_Text17}", "left", '351px', { fromValue: '172px'}], position: 40800, duration: 1003 },
                { id: "eid611", tween: [ "style", "${_Text17}", "left", '353px', { fromValue: '351px'}], position: 76091, duration: 1035 },
                { id: "eid677", tween: [ "style", "${_grayfoursquared2}", "opacity", '1', { fromValue: '0.000000'}], position: 76079, duration: 1079 },
                { id: "eid371", tween: [ "style", "${_Text16}", "left", '320px', { fromValue: '43px'}], position: 40800, duration: 1021 },
                { id: "eid609", tween: [ "style", "${_Text16}", "left", '322px', { fromValue: '320px'}], position: 76091, duration: 1035 },
                { id: "eid688", tween: [ "style", "${_gray16}", "top", '395px', { fromValue: '319px'}], position: 76070, duration: 1044 },
                { id: "eid414", tween: [ "color", "${_Text13}", "color", 'rgba(85,75,76,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,0,9,1)'}], position: 44010, duration: 507 },
                { id: "eid322", tween: [ "color", "${_Text7}", "color", 'rgba(86,79,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,0,9,1)'}], position: 30560, duration: 274 },
                { id: "eid522", tween: [ "style", "${_grayrsquared}", "left", '301px', { fromValue: '301px'}], position: 76096, duration: 0 },
                { id: "eid538", tween: [ "style", "${_Text24Copy4}", "top", '393px', { fromValue: '316px'}], position: 76095, duration: 1004 },
                { id: "eid592", tween: [ "style", "${_Text14}", "top", '281px', { fromValue: '281px'}], position: 76091, duration: 0 },
                { id: "eid692", tween: [ "style", "${_redsixteen2}", "opacity", '1', { fromValue: '0.000000'}], position: 76928, duration: 195 },
                { id: "eid608", tween: [ "style", "${_Text21}", "top", '364px', { fromValue: '282px'}], position: 76091, duration: 1035 },
                { id: "eid283", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 27385, duration: 2000 },
                { id: "eid629", tween: [ "style", "${_Text27}", "opacity", '1', { fromValue: '0.000000'}], position: 77104, duration: 478 },
                { id: "eid355", tween: [ "style", "${_Text17}", "opacity", '1', { fromValue: '0'}], position: 39816, duration: 274 },
                { id: "eid715", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 3013 },
                { id: "eid716", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1a}', [] ], ""], position: 16881 },
                { id: "eid717", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1b}', [] ], ""], position: 22952 },
                { id: "eid718", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 31037 },
                { id: "eid719", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 37014.270594537 },
                { id: "eid720", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4}', [] ], ""], position: 44039 },
                { id: "eid721", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint5}', [] ], ""], position: 54557 },
                { id: "eid722", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint6}', [] ], ""], position: 63566 },
                { id: "eid723", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint7}', [] ], ""], position: 68975 },
                { id: "eid724", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 80055 }            ]
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
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-3px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
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
                        rect: ['-8px', '-3px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/x2.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/check2.png', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_EllipseCopy8}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '25px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
            ],
            "${_E_Button}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
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
                { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid43", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }            ]
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
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-3px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/x2.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/check2.png', '0px', '0px']
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
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
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
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text5',
                        text: 'C',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/x2.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/check2.png', '0px', '0px']
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text4',
                        text: 'B',
                        align: 'center',
                        rect: ['0px', '5px', '27px', '19px', 'auto', 'auto']
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/x2.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/check2.png', '0px', '0px']
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
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        fill: ['rgba(0,0,0,0)', 'images/check2.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        fill: ['rgba(0,0,0,0)', 'images/x2.png', '0px', '0px']
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
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
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
                    rect: ['0px', '0px', '153', '183', 'auto', 'auto'],
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
                ["style", "top", '0px'],
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
