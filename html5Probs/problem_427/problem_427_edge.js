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
                rect: ['18px', '52px','503px','100px','auto', 'auto'],
                text: "The number of times a cricket chirps per minute depends on the temperature. In the equation below, t represents temperature in degrees Fahrenheit and n represents the number of chirps per minute. If the current temperature is 77°F, how many chirps per minute will be observed?",
                align: "left",
                font: ['Georgia, Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['18px', '181','auto','auto','auto', 'auto']
            },
            {
                id: 'AnswerDText',
                type: 'text',
                rect: ['65px', '419px','140px','20px','auto', 'auto'],
                text: "160 chirps per minute",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['65px', '383px','140px','19px','auto', 'auto'],
                text: "148 chirps per minute",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerBText',
                type: 'text',
                rect: ['65px', '346px','140px','19px','auto', 'auto'],
                text: "114 chirps per minute",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['65px', '316px','132px','19px','auto', 'auto'],
                text: "40 chirps per minute",
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
                rect: ['65px', '457px','156px','20px','auto', 'auto'],
                text: "200 chirps per minute",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['24px', '157px','21px','20px','auto', 'auto'],
                text: "t =",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['60px', '157px','21px','20px','auto', 'auto'],
                text: "n",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['74px', '158px','auto','auto','auto', 'auto'],
                text: "+",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['91px', '155px','9px','17px','auto', 'auto'],
                text: "37",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'f1',
                type: 'image',
                rect: ['49px', '148px','9px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f1.gif",'0px','0px']
            },
            {
                id: 'TextCopy',
                display: 'none',
                type: 'text',
                rect: ['24px', '216px','34px','20px','auto', 'auto'],
                text: "77 =",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy',
                display: 'none',
                type: 'text',
                rect: ['71px', '216px','21px','20px','auto', 'auto'],
                text: "n",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy',
                display: 'none',
                type: 'text',
                rect: ['85px', '217px','10px','auto','auto', 'auto'],
                text: "+",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy',
                display: 'none',
                type: 'text',
                rect: ['102px', '214px','9px','17px','auto', 'auto'],
                text: "37",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'f1Copy',
                display: 'none',
                type: 'image',
                rect: ['60px', '207px','9px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f1.gif",'0px','0px']
            },
            {
                id: 'TextCopy2',
                display: 'none',
                type: 'text',
                rect: ['165px', '213px','27px','20px','auto', 'auto'],
                text: "77",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy2',
                display: 'none',
                type: 'text',
                rect: ['236px', '213px','21px','20px','auto', 'auto'],
                text: "n",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy2',
                display: 'none',
                type: 'text',
                rect: ['250px', '214px','10px','auto','auto', 'auto'],
                text: "+",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy2',
                display: 'none',
                type: 'text',
                rect: ['267px', '211px','33px','17px','auto', 'auto'],
                text: "37-",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['295px', '211px','10px','24px','auto', 'auto'],
                text: "37",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text6Copy',
                display: 'none',
                type: 'text',
                rect: ['192px', '214px','10px','22px','auto', 'auto'],
                text: "37",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'f1Copy2',
                display: 'none',
                type: 'image',
                rect: ['225px', '204px','9px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f1.gif",'0px','0px']
            },
            {
                id: 'Rectangle',
                display: 'none',
                type: 'rect',
                rect: ['278px', '88px','184px','0px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [1,"rgba(255,0,0,1.00)","solid"]
            },
            {
                id: 'RectangleCopy',
                display: 'none',
                type: 'rect',
                rect: ['192px', '107px','320px','0px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [1,"rgba(255,0,0,1.00)","solid"]
            },
            {
                id: 'RectangleCopy2',
                display: 'none',
                type: 'rect',
                rect: ['60px', '125px','196px','0px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [1,"rgba(255,0,0,1.00)","solid"]
            },
            {
                id: 'arrow-right',
                display: 'none',
                type: 'image',
                rect: ['125px', '216px','20px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-right.jpg",'0px','0px']
            },
            {
                id: 'arrow-rightCopy',
                display: 'none',
                type: 'image',
                rect: ['321px', '215px','20px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-right.jpg",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'none',
                type: 'text',
                rect: ['347px', '216px','24px','17px','auto', 'auto'],
                text: "40",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text9Copy2',
                display: 'none',
                type: 'text',
                rect: ['321px', '261px','24px','17px','auto', 'auto'],
                text: "40",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['182px', '213px','10px','29px','auto', 'auto'],
                text: "-",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'none',
                type: 'text',
                rect: ['210px', '214px','21px','17px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy4',
                display: 'none',
                type: 'text',
                rect: ['399px', '260px','21px','20px','auto', 'auto'],
                text: "n",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'f1Copy4',
                display: 'none',
                type: 'image',
                rect: ['388px', '251px','9px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f1.gif",'0px','0px']
            },
            {
                id: 'Text8Copy2',
                display: 'none',
                type: 'text',
                rect: ['373px', '261px','21px','17px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text10',
                display: 'none',
                type: 'text',
                rect: ['420px', '261px','10px','17px','auto', 'auto'],
                text: "x",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy3',
                display: 'none',
                type: 'text',
                rect: ['397px', '213px','21px','20px','auto', 'auto'],
                text: "n",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy5',
                display: 'none',
                type: 'text',
                rect: ['407px', '313px','21px','20px','auto', 'auto'],
                text: "n",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'f1Copy3',
                display: 'none',
                type: 'image',
                rect: ['386px', '204px','9px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f1.gif",'0px','0px']
            },
            {
                id: 'Text8Copy',
                display: 'none',
                type: 'text',
                rect: ['371px', '214px','21px','17px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'f2',
                display: 'none',
                type: 'image',
                rect: ['439px', '251px','9px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f2.gif",'0px','0px']
            },
            {
                id: 'Text10Copy',
                display: 'none',
                type: 'text',
                rect: ['346px', '261px','10px','17px','auto', 'auto'],
                text: "x",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'f2Copy',
                display: 'none',
                type: 'image',
                rect: ['360px', '251px','9px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f2.gif",'0px','0px']
            },
            {
                id: 'Text11',
                display: 'none',
                type: 'text',
                rect: ['328px', '311px','35px','24px','auto', 'auto'],
                text: "160",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text12',
                display: 'none',
                type: 'text',
                rect: ['368px', '310px','10px','2px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'f3',
                display: 'none',
                type: 'image',
                rect: ['392px', '304px','9px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f3.gif",'0px','0px']
            },
            {
                id: 'Text2Copy6',
                display: 'none',
                type: 'text',
                rect: ['396px', '356px','21px','20px','auto', 'auto'],
                text: "n",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text11Copy',
                display: 'none',
                type: 'text',
                rect: ['328px', '357px','35px','24px','auto', 'auto'],
                text: "160",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text12Copy',
                display: 'none',
                type: 'text',
                rect: ['368px', '356px','10px','2px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text14',
                display: 'none',
                type: 'text',
                rect: ['328px', '393px','132px','26px','auto', 'auto'],
                text: "Choose (D)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,0,0,1.00)", "400", "none", "normal"]
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
            "${_f2}": [
                ["style", "top", '251px'],
                ["style", "left", '439px'],
                ["style", "display", 'none']
            ],
            "${_Text10Copy}": [
                ["style", "top", '261px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '346px'],
                ["style", "display", 'none']
            ],
            "${_Text8}": [
                ["style", "top", '214px'],
                ["style", "left", '210px'],
                ["style", "display", 'none']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Text9Copy}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "left", '347px'],
                ["style", "top", '216px']
            ],
            "${_Text11Copy}": [
                ["style", "top", '357px'],
                ["style", "display", 'none'],
                ["style", "left", '328px'],
                ["style", "width", '35px']
            ],
            "${_f1}": [
                ["style", "left", '49px'],
                ["style", "top", '148px']
            ],
            "${_f1Copy}": [
                ["style", "top", '207px'],
                ["style", "left", '60px'],
                ["style", "display", 'none']
            ],
            "${_Text14}": [
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "height", '26px'],
                ["style", "font-size", '18px']
            ],
            "${_Text4}": [
                ["style", "top", '155px'],
                ["style", "left", '91px'],
                ["style", "font-size", '16px']
            ],
            "${_AnswerDText}": [
                ["style", "top", '419px'],
                ["style", "font-size", '14px'],
                ["style", "left", '65px'],
                ["style", "width", '140px']
            ],
            "${_Question_Text}": [
                ["style", "top", '52px'],
                ["style", "font-size", '16px'],
                ["style", "height", '100px'],
                ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
                ["style", "left", '18px'],
                ["style", "width", '503px']
            ],
            "${_Text8Copy2}": [
                ["style", "top", '261px'],
                ["style", "display", 'none'],
                ["style", "left", '373px'],
                ["style", "width", '21px']
            ],
            "${_Text2Copy6}": [
                ["style", "top", '356px'],
                ["style", "display", 'none'],
                ["style", "font-size", '16px'],
                ["style", "left", '396px'],
                ["style", "width", '21px']
            ],
            "${_Text10}": [
                ["style", "display", 'none'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '420px']
            ],
            "${_Text9Copy2}": [
                ["style", "top", '261px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "display", 'none'],
                ["style", "left", '321px'],
                ["style", "width", '24px']
            ],
            "${_Text4Copy}": [
                ["style", "top", '214px'],
                ["style", "display", 'none'],
                ["style", "font-size", '16px'],
                ["style", "left", '102px'],
                ["style", "width", '9px']
            ],
            "${_Text12Copy}": [
                ["style", "top", '356px'],
                ["style", "left", '368px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "width", '21px'],
                ["style", "left", '60px'],
                ["style", "font-size", '16px']
            ],
            "${_Text}": [
                ["style", "width", '21px'],
                ["style", "left", '24px'],
                ["style", "font-size", '16px']
            ],
            "${_Text4Copy2}": [
                ["style", "top", '211px'],
                ["style", "display", 'none'],
                ["style", "width", '33px'],
                ["style", "left", '267px'],
                ["style", "font-size", '16px']
            ],
            "${_TextCopy}": [
                ["style", "top", '216px'],
                ["style", "display", 'none'],
                ["style", "font-size", '16px'],
                ["style", "left", '24px'],
                ["style", "width", '34px']
            ],
            "${_Text3}": [
                ["style", "top", '158px'],
                ["style", "left", '74px'],
                ["style", "font-size", '16px']
            ],
            "${_Text3Copy}": [
                ["style", "top", '217px'],
                ["style", "display", 'none'],
                ["style", "font-size", '16px'],
                ["style", "left", '85px'],
                ["style", "width", 'auto']
            ],
            "${_AnswerEText}": [
                ["style", "top", '457px'],
                ["style", "font-size", '14px'],
                ["style", "left", '65px'],
                ["style", "width", '156px']
            ],
            "${_Text7}": [
                ["style", "display", 'none'],
                ["style", "top", '213px'],
                ["style", "left", '182px'],
                ["style", "height", '29px']
            ],
            "${_Text11}": [
                ["style", "top", '311px'],
                ["style", "display", 'none'],
                ["style", "left", '328px'],
                ["style", "width", '35px']
            ],
            "${_AnswerBText}": [
                ["style", "top", '346px'],
                ["style", "font-size", '14px'],
                ["style", "left", '65px'],
                ["style", "width", '140px']
            ],
            "${_Text2Copy2}": [
                ["style", "top", '213px'],
                ["style", "display", 'none'],
                ["style", "width", '21px'],
                ["style", "left", '236px'],
                ["style", "font-size", '16px']
            ],
            "${_Text2Copy3}": [
                ["style", "top", '213px'],
                ["style", "display", 'none'],
                ["style", "font-size", '16px'],
                ["style", "left", '397px'],
                ["style", "width", '21px']
            ],
            "${_AnswerAText}": [
                ["style", "top", '316px'],
                ["style", "text-align", 'left'],
                ["style", "height", '19px'],
                ["style", "font-size", '14px'],
                ["style", "left", '65px'],
                ["style", "width", '132px']
            ],
            "${_AnswerCText}": [
                ["style", "top", '383px'],
                ["style", "font-size", '14px'],
                ["style", "left", '65px'],
                ["style", "width", '140px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '213px'],
                ["style", "display", 'none'],
                ["style", "width", '27px'],
                ["style", "left", '165px'],
                ["style", "font-size", '16px']
            ],
            "${_RectangleCopy}": [
                ["style", "top", '107px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '192px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgb(255, 0, 0)'],
                ["style", "border-width", '1px'],
                ["style", "width", '320px']
            ],
            "${_f1Copy4}": [
                ["style", "top", '251px'],
                ["style", "left", '388px'],
                ["style", "display", 'none']
            ],
            "${_Answers}": [
                ["style", "top", '294px'],
                ["style", "left", '18px']
            ],
            "${_Rectangle}": [
                ["style", "top", '88px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '278px'],
                ["style", "width", '184px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text2Copy}": [
                ["style", "top", '216px'],
                ["style", "display", 'none'],
                ["style", "font-size", '16px'],
                ["style", "left", '71px'],
                ["style", "width", '21px']
            ],
            "${_Text9}": [
                ["style", "top", '216px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '347px'],
                ["style", "width", '24px']
            ],
            "${_Text6Copy}": [
                ["style", "top", '214px'],
                ["style", "display", 'none'],
                ["style", "height", '22px'],
                ["style", "left", '192px'],
                ["color", "color", 'rgba(255,0,0,1)']
            ],
            "${_arrow-rightCopy}": [
                ["style", "top", '215px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '321px'],
                ["style", "width", '20px']
            ],
            "${_f2Copy}": [
                ["style", "top", '251px'],
                ["style", "left", '360px'],
                ["style", "display", 'none']
            ],
            "${_Text8Copy}": [
                ["style", "top", '214px'],
                ["style", "left", '371px'],
                ["style", "display", 'none']
            ],
            "${_Text3Copy2}": [
                ["style", "top", '214px'],
                ["style", "display", 'none'],
                ["style", "width", '10px'],
                ["style", "left", '250px'],
                ["style", "font-size", '16px']
            ],
            "${_f1Copy2}": [
                ["style", "top", '204px'],
                ["style", "left", '225px'],
                ["style", "display", 'none']
            ],
            "${_RectangleCopy2}": [
                ["style", "top", '125px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '60px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgb(255, 0, 0)'],
                ["style", "border-width", '1px'],
                ["style", "width", '196px']
            ],
            "${_Text6}": [
                ["style", "top", '211px'],
                ["style", "display", 'none'],
                ["style", "height", '24px'],
                ["style", "left", '295px'],
                ["color", "color", 'rgba(255,0,0,1.00)']
            ],
            "${_Text2Copy5}": [
                ["style", "top", '313px'],
                ["style", "display", 'none'],
                ["style", "width", '21px'],
                ["style", "left", '407px'],
                ["style", "font-size", '16px']
            ],
            "${_Text2Copy4}": [
                ["style", "top", '260px'],
                ["style", "display", 'none'],
                ["style", "font-size", '16px'],
                ["style", "left", '399px'],
                ["style", "width", '21px']
            ],
            "${_Text12}": [
                ["style", "top", '310px'],
                ["style", "left", '368px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_arrow-right}": [
                ["style", "top", '216px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '125px'],
                ["style", "width", '20px']
            ],
            "${_f1Copy3}": [
                ["style", "top", '204px'],
                ["style", "left", '386px'],
                ["style", "display", 'none']
            ],
            "${_f3}": [
                ["style", "top", '304px'],
                ["style", "left", '392px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 72750,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 21500,
                "Hint 2": 37000,
                "Hint 3": 50500,
                "Answer Hint": 65595
            },
            timeline: [
                { id: "eid322", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid326", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 65595, duration: 0 },
                { id: "eid324", tween: [ "style", "${_f3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid328", tween: [ "style", "${_f3}", "display", 'block', { fromValue: 'none'}], position: 65595, duration: 0 },
                { id: "eid325", tween: [ "style", "${_Text2Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid329", tween: [ "style", "${_Text2Copy5}", "display", 'block', { fromValue: 'none'}], position: 65595, duration: 0 },
                { id: "eid311", tween: [ "style", "${_f1Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid319", tween: [ "style", "${_f1Copy4}", "display", 'block', { fromValue: 'none'}], position: 63120, duration: 0 },
                { id: "eid269", tween: [ "style", "${_Text4Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid273", tween: [ "style", "${_Text4Copy}", "display", 'block', { fromValue: 'none'}], position: 35315, duration: 0 },
                { id: "eid284", tween: [ "style", "${_Text3Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid293", tween: [ "style", "${_Text3Copy2}", "display", 'block', { fromValue: 'none'}], position: 47586, duration: 0 },
                { id: "eid312", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid320", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 63120, duration: 0 },
                { id: "eid331", tween: [ "style", "${_Text12Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid334", tween: [ "style", "${_Text12Copy}", "display", 'block', { fromValue: 'none'}], position: 67453, duration: 0 },
                { id: "eid286", tween: [ "style", "${_Text4Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid295", tween: [ "style", "${_Text4Copy2}", "display", 'block', { fromValue: 'none'}], position: 47586, duration: 0 },
                { id: "eid296", tween: [ "style", "${_arrow-rightCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid301", tween: [ "style", "${_arrow-rightCopy}", "display", 'block', { fromValue: 'none'}], position: 49313, duration: 0 },
                { id: "eid243", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid244", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 25597, duration: 0 },
                { id: "eid247", tween: [ "style", "${_RectangleCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid248", tween: [ "style", "${_RectangleCopy2}", "display", 'block', { fromValue: 'none'}], position: 31500, duration: 0 },
                { id: "eid307", tween: [ "style", "${_Text10Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid315", tween: [ "style", "${_Text10Copy}", "display", 'block', { fromValue: 'none'}], position: 63120, duration: 0 },
                { id: "eid245", tween: [ "style", "${_RectangleCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid246", tween: [ "style", "${_RectangleCopy}", "display", 'block', { fromValue: 'none'}], position: 27496, duration: 0 },
                { id: "eid249", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid270", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 35315, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid309", tween: [ "style", "${_Text8Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid317", tween: [ "style", "${_Text8Copy2}", "display", 'block', { fromValue: 'none'}], position: 63120, duration: 0 },
                { id: "eid323", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid327", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 65595, duration: 0 },
                { id: "eid280", tween: [ "style", "${_Text6Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid289", tween: [ "style", "${_Text6Copy}", "display", 'block', { fromValue: 'none'}], position: 47586, duration: 0 },
                { id: "eid313", tween: [ "style", "${_f2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid321", tween: [ "style", "${_f2}", "display", 'block', { fromValue: 'none'}], position: 63120, duration: 0 },
                { id: "eid285", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid294", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 47586, duration: 0 },
                { id: "eid281", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid290", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 47586, duration: 0 },
                { id: "eid297", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid302", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 49313, duration: 0 },
                { id: "eid274", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid275", tween: [ "style", "${_Text2Copy}", "display", 'block', { fromValue: 'none'}], position: 35315, duration: 0 },
                { id: "eid308", tween: [ "style", "${_f2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid316", tween: [ "style", "${_f2Copy}", "display", 'block', { fromValue: 'none'}], position: 63120, duration: 0 },
                { id: "eid332", tween: [ "style", "${_Text2Copy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid335", tween: [ "style", "${_Text2Copy6}", "display", 'block', { fromValue: 'none'}], position: 67453, duration: 0 },
                { id: "eid282", tween: [ "style", "${_f1Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid291", tween: [ "style", "${_f1Copy2}", "display", 'block', { fromValue: 'none'}], position: 47586, duration: 0 },
                { id: "eid299", tween: [ "style", "${_Text2Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid304", tween: [ "style", "${_Text2Copy3}", "display", 'block', { fromValue: 'none'}], position: 49313, duration: 0 },
                { id: "eid300", tween: [ "style", "${_f1Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid305", tween: [ "style", "${_f1Copy3}", "display", 'block', { fromValue: 'none'}], position: 49313, duration: 0 },
                { id: "eid330", tween: [ "style", "${_Text11Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid333", tween: [ "style", "${_Text11Copy}", "display", 'block', { fromValue: 'none'}], position: 67453, duration: 0 },
                { id: "eid276", tween: [ "style", "${_arrow-right}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid277", tween: [ "style", "${_arrow-right}", "display", 'block', { fromValue: 'none'}], position: 47000, duration: 0 },
                { id: "eid279", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid288", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 47586, duration: 0 },
                { id: "eid298", tween: [ "style", "${_Text8Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid303", tween: [ "style", "${_Text8Copy}", "display", 'block', { fromValue: 'none'}], position: 49313, duration: 0 },
                { id: "eid306", tween: [ "style", "${_Text9Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid314", tween: [ "style", "${_Text9Copy2}", "display", 'block', { fromValue: 'none'}], position: 63120, duration: 0 },
                { id: "eid310", tween: [ "style", "${_Text2Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid318", tween: [ "style", "${_Text2Copy4}", "display", 'block', { fromValue: 'none'}], position: 63120, duration: 0 },
                { id: "eid278", tween: [ "style", "${_TextCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid287", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'none'}], position: 47586, duration: 0 },
                { id: "eid250", tween: [ "style", "${_f1Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid271", tween: [ "style", "${_f1Copy}", "display", 'block', { fromValue: 'none'}], position: 35315, duration: 0 },
                { id: "eid283", tween: [ "style", "${_Text2Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid292", tween: [ "style", "${_Text2Copy2}", "display", 'block', { fromValue: 'none'}], position: 47586, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Answers}", "top", '294px', { fromValue: '294px'}], position: 14500, duration: 0 },
                { id: "eid268", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid272", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 35315, duration: 0 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid336", tween: [ "style", "${_Text14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid337", tween: [ "style", "${_Text14}", "display", 'block', { fromValue: 'none'}], position: 71870, duration: 0 },
                { id: "eid238", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid239", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 21500 },
                { id: "eid240", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 37000 },
                { id: "eid241", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 50500 },
                { id: "eid338", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 68000 }            ]
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
