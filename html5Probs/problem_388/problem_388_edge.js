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
                id: '_9',
                display: 'none',
                type: 'image',
                rect: ['378px', '418px','25px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"9.gif",'0px','0px']
            },
            {
                id: 'Question_Text',
                type: 'text',
                rect: ['24px', '30px','78px','23px','auto', 'auto'],
                text: "Amy used ",
                align: "left",
                font: ['Georgia, Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'frac24',
                type: 'image',
                rect: ['102px', '30px','18px','23px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac24.gif",'0px','0px']
            },
            {
                id: 'frac25',
                type: 'image',
                rect: ['102px', '56px','17px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac25.gif",'0px','0px']
            },
            {
                id: 'frac25Copy8',
                display: 'none',
                type: 'image',
                rect: ['244px', '312px','17px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac25.gif",'0px','0px']
            },
            {
                id: 'frac25Copy9',
                display: 'none',
                type: 'image',
                rect: ['311px', '312px','17px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac25.gif",'0px','0px']
            },
            {
                id: 'frac25Copy3',
                display: 'none',
                type: 'image',
                rect: ['390px', '276px','17px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac25.gif",'0px','0px']
            },
            {
                id: 'Text10',
                display: 'none',
                type: 'text',
                rect: ['515px', '189px','17px','12px','auto', 'auto'],
                text: "?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['244px', '259px','241px','41px','auto', 'auto'],
                text: "Let's add up the total ounces.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'frac25Copy',
                display: 'none',
                type: 'image',
                rect: ['397px', '167px','17px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac25.gif",'0px','0px']
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['311px', '168px','17px','13px','auto', 'auto'],
                text: "oz.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy',
                display: 'none',
                type: 'text',
                rect: ['424px', '168px','17px','13px','auto', 'auto'],
                text: "oz.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'frac25Copy2',
                display: 'none',
                type: 'image',
                rect: ['284px', '168px','17px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac25.gif",'0px','0px']
            },
            {
                id: 'frac25Copy7',
                display: 'none',
                type: 'image',
                rect: ['284px', '168px','17px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac25.gif",'0px','0px']
            },
            {
                id: 'frac25Copy6',
                display: 'none',
                type: 'image',
                rect: ['284px', '168px','17px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac25.gif",'0px','0px']
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['29px', '181','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1.04487','1.28342']]
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
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['221px', '480px','auto','auto','auto', 'auto'],
                text: "x + y = ",
                align: "left",
                font: ['Arial Black, Gadget, sans-serif', 18, "rgba(157,0,9,1.00)", "400", "none", "italic"]
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['296px', '480px','auto','auto','auto', 'auto'],
                text: "9",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 18, "rgba(157,0,9,1)", "400", "none", "normal"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['127px', '30px','332px','23px','auto', 'auto'],
                text: "cans of chicken broth to make soup. Each can",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['129px', '55px','192px','24px','auto', 'auto'],
                text: "ounces of broth.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['25px', '54px','65px','23px','auto', 'auto'],
                text: "contained",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['25px', '79px','499px','24px','auto', 'auto'],
                text: "What was the total number of ounces of chicken broth that Amy used?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'frac26',
                type: 'image',
                rect: ['72px', '137px','17px','13px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac26.gif",'0px','0px']
            },
            {
                id: 'frac27',
                type: 'image',
                rect: ['72px', '174px','25px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac27.gif",'0px','0px']
            },
            {
                id: 'frac29',
                type: 'image',
                rect: ['72px', '266px','25px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac29.gif",'0px','0px']
            },
            {
                id: 'frac28',
                type: 'image',
                rect: ['72px', '223px','17px','13px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac28.gif",'0px','0px']
            },
            {
                id: 'frac30',
                type: 'image',
                rect: ['72px', '317px','18px','12px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac30.gif",'0px','0px']
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['381px', '128px','74px','9px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'EllipseCopy2',
                type: 'ellipse',
                rect: ['485px', '167px','74px','9px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['381px', '136px','0px','81px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['455px', '136px','0px','81px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Ellipse2',
                type: 'ellipse',
                rect: ['381px', '215px','74px','8px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Ellipse2Copy2',
                type: 'ellipse',
                rect: ['485px', '215px','74px','8px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'EllipseCopy',
                type: 'ellipse',
                rect: ['261px', '128px','74px','9px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'RectangleCopy',
                type: 'rect',
                rect: ['261px', '136px','0px','81px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy',
                type: 'rect',
                rect: ['335px', '136px','0px','81px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Ellipse2Copy',
                type: 'ellipse',
                rect: ['261px', '215px','74px','8px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle3',
                type: 'rect',
                rect: ['485px', '174px','0px','43px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle3Copy',
                type: 'rect',
                rect: ['559px', '174px','0px','43px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Text11',
                display: 'none',
                type: 'text',
                rect: ['261px', '242px','134px','47px','auto', 'auto'],
                text: "How many oz. in",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text12',
                display: 'none',
                type: 'text',
                rect: ['419px', '242px','18px','21px','auto', 'auto'],
                text: "can?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'frac312',
                display: 'none',
                type: 'image',
                rect: ['402px', '230px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac312.gif",'0px','0px']
            },
            {
                id: 'frac312Copy',
                display: 'none',
                type: 'image',
                rect: ['406px', '400px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac312.gif",'0px','0px']
            },
            {
                id: 'Text13',
                display: 'none',
                type: 'text',
                rect: ['263px', '276px','122px','21px','auto', 'auto'],
                text: "What is half of",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text14',
                display: 'none',
                type: 'text',
                rect: ['420px', '277px','33px','12px','auto', 'auto'],
                text: "oz.?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text15',
                display: 'none',
                type: 'text',
                rect: ['265px', '323px','157px','21px','auto', 'auto'],
                text: "Let's take half of 7.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text16',
                display: 'none',
                type: 'text',
                rect: ['419px', '419px','18px','21px','auto', 'auto'],
                text: ".",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text15Copy',
                display: 'none',
                type: 'text',
                rect: ['265px', '416px','134px','21px','auto', 'auto'],
                text: "Let's take half of",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'frac35',
                display: 'none',
                type: 'image',
                rect: ['497px', '353px','18px','23px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac35.gif",'0px','0px']
            },
            {
                id: 'frac35Copy',
                display: 'none',
                type: 'image',
                rect: ['263px', '514px','18px','23px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac35.gif",'0px','0px']
            },
            {
                id: 'frac32',
                display: 'none',
                type: 'image',
                rect: ['264px', '358px','54px','13px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac32.gif",'0px','0px']
            },
            {
                id: 'frac34',
                display: 'none',
                type: 'image',
                rect: ['436px', '347px','27px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac34.gif",'0px','0px']
            },
            {
                id: 'frac33',
                display: 'none',
                type: 'image',
                rect: ['347px', '347px','58px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac33.gif",'0px','0px']
            },
            {
                id: '_2',
                display: 'none',
                type: 'image',
                rect: ['348px', '448px','41px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.gif",'0px','0px']
            },
            {
                id: '_12',
                display: 'none',
                type: 'image',
                rect: ['265px', '448px','56px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"12.gif",'0px','0px']
            },
            {
                id: '_4',
                display: 'none',
                type: 'image',
                rect: ['327px', '507px','9px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.gif",'0px','0px']
            },
            {
                id: 'Text17',
                display: 'none',
                type: 'text',
                rect: ['297px', '515px','27px','21px','auto', 'auto'],
                text: "+",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text18',
                display: 'none',
                type: 'text',
                rect: ['347px', '514px','27px','12px','auto', 'auto'],
                opacity: 1,
                text: "=",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_5',
                display: 'none',
                type: 'image',
                rect: ['369px', '515px','17px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5.gif",'0px','0px']
            },
            {
                id: 'Text19',
                display: 'none',
                type: 'text',
                rect: ['397px', '514px','27px','12px','auto', 'auto'],
                text: "oz.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'question3',
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
                id: '_6',
                display: 'none',
                type: 'image',
                rect: ['388px', '312px','17px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"6.gif",'0px','0px']
            },
            {
                id: 'hint2',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2.mp3','media/hint2.ogg']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['276px', '311px','27px','12px','auto', 'auto'],
                text: "+",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy',
                display: 'none',
                type: 'text',
                rect: ['351px', '311px','27px','12px','auto', 'auto'],
                text: "+",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_7',
                display: 'none',
                type: 'image',
                rect: ['235px', '363px','187px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"7.gif",'0px','0px']
            },
            {
                id: '_82',
                display: 'none',
                type: 'image',
                rect: ['282px', '408px','94px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"82.gif",'0px','0px']
            },
            {
                id: 'Text21',
                display: 'none',
                type: 'text',
                rect: ['382px', '418px','47px','21px','auto', 'auto'],
                text: "?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text22',
                display: 'none',
                type: 'text',
                rect: ['414px', '420px','44px','12px','auto', 'auto'],
                text: "ounces",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text23',
                display: 'none',
                type: 'text',
                rect: ['293px', '452px','127px','41px','auto', 'auto'],
                text: "Choose (D)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'answer',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer.mp3','media/answer.ogg']
            },
            {
                id: 'Text18Copy2',
                display: 'none',
                type: 'text',
                rect: ['397px', '455px','27px','12px','auto', 'auto'],
                text: "=",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_4Copy',
                display: 'none',
                type: 'image',
                rect: ['501px', '445px','9px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.gif",'0px','0px']
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
            "${__82}": [
                ["style", "top", '408px'],
                ["style", "left", '282px'],
                ["style", "display", 'none']
            ],
            "${_Text18Copy2}": [
                ["style", "top", '455px'],
                ["style", "opacity", '1'],
                ["style", "left", '397px'],
                ["style", "display", 'none']
            ],
            "${_Text3Copy}": [
                ["style", "top", '311px'],
                ["style", "left", '351px'],
                ["style", "display", 'none']
            ],
            "${_frac27}": [
                ["style", "left", '72px'],
                ["style", "top", '174px']
            ],
            "${_Text22}": [
                ["style", "top", '420px'],
                ["style", "left", '414px'],
                ["style", "display", 'none']
            ],
            "${__5}": [
                ["style", "top", '515px'],
                ["style", "left", '496px'],
                ["style", "display", 'none']
            ],
            "${_QuestionSound_Container}": [
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Text21}": [
                ["style", "top", '418px'],
                ["style", "left", '382px'],
                ["style", "display", 'none']
            ],
            "${_Text15Copy}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "top", '416px'],
                ["style", "width", '134px']
            ],
            "${_frac25Copy7}": [
                ["style", "top", '168px'],
                ["style", "left", '284px'],
                ["style", "display", 'none']
            ],
            "${_Text10}": [
                ["style", "display", 'none'],
                ["style", "top", '189px'],
                ["style", "left", '515px'],
                ["style", "font-size", '18px']
            ],
            "${_Rectangle3Copy}": [
                ["style", "left", '559px']
            ],
            "${__9}": [
                ["style", "top", '418px'],
                ["style", "left", '378px'],
                ["style", "display", 'none']
            ],
            "${_TextCopy}": [
                ["style", "top", '168px'],
                ["style", "left", '424px'],
                ["style", "display", 'none']
            ],
            "${_frac312Copy}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '406px'],
                ["style", "top", '400px']
            ],
            "${_Text3}": [
                ["style", "top", '311px'],
                ["style", "left", '276px'],
                ["style", "display", 'none']
            ],
            "${_Ellipse2Copy2}": [
                ["style", "left", '485px'],
                ["style", "top", '215px']
            ],
            "${_Text19Copy}": [
                ["style", "top", '185px'],
                ["style", "left", '524px'],
                ["style", "display", 'none']
            ],
            "${__4Copy}": [
                ["style", "top", '445px'],
                ["style", "opacity", '1'],
                ["style", "left", '501px'],
                ["style", "display", 'none']
            ],
            "${_Answers}": [
                ["transform", "scaleX", '1.04487'],
                ["style", "top", '129px'],
                ["transform", "scaleY", '1.28342'],
                ["style", "left", '29px']
            ],
            "${_frac30}": [
                ["style", "left", '72px'],
                ["style", "top", '317px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_frac32}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '264px'],
                ["style", "top", '358px']
            ],
            "${_frac26}": [
                ["style", "left", '72px'],
                ["style", "top", '137px']
            ],
            "${_Rectangle2Copy}": [
                ["style", "left", '335px'],
                ["style", "top", '136px']
            ],
            "${_Text13}": [
                ["style", "top", '276px'],
                ["style", "opacity", '1'],
                ["style", "left", '263px'],
                ["style", "display", 'none']
            ],
            "${_Text6}": [
                ["style", "height", '23px'],
                ["style", "left", '127px'],
                ["style", "width", '332px']
            ],
            "${_Text}": [
                ["style", "top", '168px'],
                ["style", "left", '311px'],
                ["style", "display", 'none']
            ],
            "${_frac25Copy9}": [
                ["style", "top", '312px'],
                ["style", "left", '311px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '600px']
            ],
            "${_Ellipse2}": [
                ["style", "left", '381px'],
                ["style", "top", '215px']
            ],
            "${_Text15}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${_frac28}": [
                ["style", "left", '72px'],
                ["style", "top", '223px']
            ],
            "${_frac29}": [
                ["style", "left", '72px'],
                ["style", "top", '266px']
            ],
            "${_frac312}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '402px'],
                ["style", "top", '230px']
            ],
            "${_Text14}": [
                ["style", "top", '277px'],
                ["style", "opacity", '1'],
                ["style", "left", '420px'],
                ["style", "display", 'none']
            ],
            "${_frac35}": [
                ["style", "top", '353px'],
                ["style", "opacity", '1'],
                ["style", "left", '497px'],
                ["style", "display", 'none']
            ],
            "${_Question_Text}": [
                ["style", "top", '30px'],
                ["style", "width", '78px'],
                ["style", "height", '23px'],
                ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
                ["style", "left", '24px'],
                ["style", "font-size", '16px']
            ],
            "${__12}": [
                ["style", "top", '448px'],
                ["style", "opacity", '1'],
                ["style", "left", '265px'],
                ["style", "display", 'none']
            ],
            "${_frac25Copy6}": [
                ["style", "top", '168px'],
                ["style", "left", '284px'],
                ["style", "display", 'none']
            ],
            "${_Text9}": [
                ["style", "left", '25px'],
                ["style", "width", '499px']
            ],
            "${_Text19}": [
                ["style", "top", '514px'],
                ["style", "left", '522px'],
                ["style", "display", 'none']
            ],
            "${_Text18Copy}": [
                ["style", "top", '514px'],
                ["style", "left", '347px'],
                ["style", "display", 'none']
            ],
            "${__2}": [
                ["style", "top", '448px'],
                ["style", "opacity", '1'],
                ["style", "left", '348px'],
                ["style", "display", 'none']
            ],
            "${_Text7}": [
                ["style", "height", '23px'],
                ["style", "width", '65px']
            ],
            "${_Text11}": [
                ["style", "top", '242px'],
                ["style", "height", '47px'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '261px'],
                ["style", "width", '134px']
            ],
            "${_EllipseCopy2}": [
                ["style", "left", '485px'],
                ["style", "top", '167px']
            ],
            "${_frac25Copy}": [
                ["style", "top", '167px'],
                ["style", "left", '397px'],
                ["style", "display", 'none']
            ],
            "${_Text5}": [
                ["style", "top", '412px'],
                ["style", "display", 'none'],
                ["style", "font-style", 'normal'],
                ["style", "opacity", '0'],
                ["style", "left", '296px'],
                ["style", "font-size", '18px']
            ],
            "${_frac24}": [
                ["style", "left", '102px'],
                ["style", "top", '30px']
            ],
            "${_Text23}": [
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "display", 'none']
            ],
            "${_frac35Copy}": [
                ["style", "top", '514px'],
                ["style", "opacity", '1'],
                ["style", "left", '263px'],
                ["style", "display", 'none']
            ],
            "${_RectangleCopy}": [
                ["style", "left", '261px'],
                ["style", "top", '136px']
            ],
            "${_TextCopy2}": [
                ["style", "left", '424px']
            ],
            "${_frac33}": [
                ["style", "top", '347px'],
                ["style", "opacity", '1'],
                ["style", "left", '347px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle}": [
                ["style", "left", '381px'],
                ["style", "top", '136px']
            ],
            "${_frac25Copy8}": [
                ["style", "top", '312px'],
                ["style", "left", '244px'],
                ["style", "display", 'none']
            ],
            "${_frac34}": [
                ["style", "top", '347px'],
                ["style", "opacity", '1'],
                ["style", "left", '436px'],
                ["style", "display", 'none']
            ],
            "${_Text8}": [
                ["style", "left", '129px'],
                ["style", "top", '55px']
            ],
            "${_frac25Copy3}": [
                ["style", "top", '276px'],
                ["style", "opacity", '1'],
                ["style", "left", '390px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "display", 'none'],
                ["style", "top", '259px'],
                ["style", "height", '41px'],
                ["style", "width", '241px']
            ],
            "${__4}": [
                ["style", "top", '507px'],
                ["style", "opacity", '1'],
                ["style", "left", '327px'],
                ["style", "display", 'none']
            ],
            "${_Ellipse2Copy}": [
                ["style", "left", '261px'],
                ["style", "top", '215px']
            ],
            "${_Text17}": [
                ["style", "top", '515px'],
                ["style", "opacity", '1'],
                ["style", "left", '297px'],
                ["style", "display", 'none']
            ],
            "${_Text16}": [
                ["style", "top", '419px'],
                ["style", "opacity", '1'],
                ["style", "left", '419px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2}": [
                ["style", "left", '455px'],
                ["style", "top", '136px']
            ],
            "${__7}": [
                ["style", "top", '363px'],
                ["style", "left", '235px'],
                ["style", "display", 'none']
            ],
            "${__6}": [
                ["style", "top", '312px'],
                ["style", "left", '388px'],
                ["style", "display", 'none']
            ],
            "${_EllipseCopy}": [
                ["style", "left", '261px']
            ],
            "${_Text12}": [
                ["style", "top", '242px'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '419px'],
                ["style", "height", '21px']
            ],
            "${_Text18}": [
                ["style", "top", '514px'],
                ["style", "opacity", '1'],
                ["style", "left", '347px'],
                ["style", "display", 'none']
            ],
            "${_frac25}": [
                ["style", "left", '102px'],
                ["style", "top", '56px']
            ],
            "${_Text4}": [
                ["style", "top", '412px'],
                ["color", "color", 'rgba(157,0,9,1.00)'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "left", '221px'],
                ["style", "font-size", '18px']
            ],
            "${_frac25Copy2}": [
                ["style", "top", '168px'],
                ["style", "left", '284px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 63000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 15000,
                "Hint 2": 32000,
                "Hint 3": 50750,
                "Hint 4": 55500,
                "Answer Hint": 58000
            },
            timeline: [
                { id: "eid370", tween: [ "style", "${__9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid371", tween: [ "style", "${__9}", "display", 'block', { fromValue: 'none'}], position: 61000, duration: 0 },
                { id: "eid379", tween: [ "style", "${_Text23}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid380", tween: [ "style", "${_Text23}", "display", 'block', { fromValue: 'none'}], position: 62250, duration: 0 },
                { id: "eid366", tween: [ "style", "${__7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid367", tween: [ "style", "${__7}", "display", 'block', { fromValue: 'none'}], position: 53000, duration: 0 },
                { id: "eid314", tween: [ "style", "${__5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid316", tween: [ "style", "${__5}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
                { id: "eid281", tween: [ "style", "${_frac34}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid282", tween: [ "style", "${_frac34}", "display", 'block', { fromValue: 'none'}], position: 27250, duration: 0 },
                { id: "eid329", tween: [ "style", "${_frac34}", "display", 'none', { fromValue: 'block'}], position: 39500, duration: 0 },
                { id: "eid404", tween: [ "style", "${_Text15}", "opacity", '0', { fromValue: '1'}], position: 41000, duration: 750 },
                { id: "eid309", tween: [ "style", "${_Text18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid313", tween: [ "style", "${_Text18}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0 },
                { id: "eid318", tween: [ "style", "${_Text18}", "display", 'none', { fromValue: 'block'}], position: 43750, duration: 0 },
                { id: "eid213", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid407", tween: [ "style", "${_frac35}", "opacity", '0', { fromValue: '1'}], position: 38500, duration: 750 },
                { id: "eid349", tween: [ "style", "${_Text19}", "left", '524px', { fromValue: '522px'}], position: 42000, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid293", tween: [ "style", "${_frac312Copy}", "display", 'none', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid296", tween: [ "style", "${_frac312Copy}", "display", 'block', { fromValue: 'none'}], position: 29250, duration: 0 },
                { id: "eid326", tween: [ "style", "${_frac312Copy}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0 },
                { id: "eid273", tween: [ "style", "${_Text15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid274", tween: [ "style", "${_Text15}", "display", 'block', { fromValue: 'none'}], position: 24750, duration: 0 },
                { id: "eid332", tween: [ "style", "${_Text15}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0 },
                { id: "eid373", tween: [ "style", "${__82}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid375", tween: [ "style", "${__82}", "display", 'block', { fromValue: 'none'}], position: 55500, duration: 0 },
                { id: "eid428", tween: [ "style", "${__12}", "opacity", '0', { fromValue: '1'}], position: 38250, duration: 1000 },
                { id: "eid382", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid384", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid247", tween: [ "style", "${_frac25Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid270", tween: [ "style", "${_frac25Copy3}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid334", tween: [ "style", "${_frac25Copy3}", "display", 'none', { fromValue: 'block'}], position: 39500, duration: 0 },
                { id: "eid425", tween: [ "style", "${_Text18Copy2}", "opacity", '0', { fromValue: '1'}], position: 38250, duration: 1000 },
                { id: "eid458", tween: [ "style", "${_Text11}", "opacity", '0', { fromValue: '1'}], position: 30250, duration: 1000 },
                { id: "eid359", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid360", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 46250, duration: 0 },
                { id: "eid387", tween: [ "style", "${__4Copy}", "display", 'block', { fromValue: 'none'}], position: 32250, duration: 0 },
                { id: "eid390", tween: [ "style", "${__4Copy}", "display", 'none', { fromValue: 'block'}], position: 39500, duration: 0 },
                { id: "eid315", tween: [ "style", "${_Text19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid317", tween: [ "style", "${_Text19}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
                { id: "eid434", tween: [ "style", "${_frac33}", "opacity", '0', { fromValue: '1'}], position: 38250, duration: 1000 },
                { id: "eid422", tween: [ "style", "${_Text18}", "opacity", '0', { fromValue: '1'}], position: 42750, duration: 750 },
                { id: "eid410", tween: [ "style", "${__4Copy}", "opacity", '0', { fromValue: '1'}], position: 38500, duration: 750 },
                { id: "eid388", tween: [ "style", "${__5}", "left", '496px', { fromValue: '496px'}], position: 42000, duration: 0 },
                { id: "eid389", tween: [ "style", "${__5}", "left", '496px', { fromValue: '496px'}], position: 43000, duration: 0 },
                { id: "eid449", tween: [ "style", "${_Text13}", "opacity", '0', { fromValue: '1'}], position: 38250, duration: 1000 },
                { id: "eid354", tween: [ "style", "${__6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid357", tween: [ "style", "${__6}", "display", 'block', { fromValue: 'none'}], position: 47750, duration: 0 },
                { id: "eid455", tween: [ "style", "${_Text12}", "opacity", '0', { fromValue: '1'}], position: 30250, duration: 1000 },
                { id: "eid352", tween: [ "style", "${_frac25Copy8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid355", tween: [ "style", "${_frac25Copy8}", "display", 'block', { fromValue: 'none'}], position: 47750, duration: 0 },
                { id: "eid386", tween: [ "style", "${_Text18Copy2}", "display", 'block', { fromValue: 'none'}], position: 31250, duration: 0 },
                { id: "eid391", tween: [ "style", "${_Text18Copy2}", "display", 'none', { fromValue: 'block'}], position: 39500, duration: 0 },
                { id: "eid244", tween: [ "style", "${_Text14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid250", tween: [ "style", "${_Text14}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid335", tween: [ "style", "${_Text14}", "display", 'none', { fromValue: 'block'}], position: 39500, duration: 0 },
                { id: "eid249", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid272", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid338", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 31500, duration: 0 },
                { id: "eid401", tween: [ "style", "${_frac312Copy}", "opacity", '0', { fromValue: '1'}], position: 41000, duration: 750 },
                { id: "eid419", tween: [ "style", "${__4}", "opacity", '0', { fromValue: '1'}], position: 42750, duration: 750 },
                { id: "eid238", tween: [ "style", "${_frac25Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid241", tween: [ "style", "${_frac25Copy2}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid431", tween: [ "style", "${__2}", "opacity", '0', { fromValue: '1'}], position: 38250, duration: 1000 },
                { id: "eid248", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid271", tween: [ "style", "${_Text13}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid333", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'block'}], position: 39500, duration: 0 },
                { id: "eid245", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid268", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid336", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 31500, duration: 0 },
                { id: "eid283", tween: [ "style", "${_frac35}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid284", tween: [ "style", "${_frac35}", "display", 'block', { fromValue: 'none'}], position: 28250, duration: 0 },
                { id: "eid328", tween: [ "style", "${_frac35}", "display", 'none', { fromValue: 'block'}], position: 39500, duration: 0 },
                { id: "eid246", tween: [ "style", "${_frac312}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid269", tween: [ "style", "${_frac312}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid337", tween: [ "style", "${_frac312}", "display", 'none', { fromValue: 'block'}], position: 31500, duration: 0 },
                { id: "eid307", tween: [ "style", "${_Text17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid311", tween: [ "style", "${_Text17}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0 },
                { id: "eid320", tween: [ "style", "${_Text17}", "display", 'none', { fromValue: 'block'}], position: 43750, duration: 0 },
                { id: "eid212", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid308", tween: [ "style", "${__4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid312", tween: [ "style", "${__4}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0 },
                { id: "eid319", tween: [ "style", "${__4}", "display", 'none', { fromValue: 'block'}], position: 43750, duration: 0 },
                { id: "eid292", tween: [ "style", "${_Text15Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid295", tween: [ "style", "${_Text15Copy}", "display", 'block', { fromValue: 'none'}], position: 29250, duration: 0 },
                { id: "eid325", tween: [ "style", "${_Text15Copy}", "display", 'none', { fromValue: 'block'}], position: 43750, duration: 0 },
                { id: "eid298", tween: [ "style", "${__12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid299", tween: [ "style", "${__12}", "display", 'block', { fromValue: 'none'}], position: 30250, duration: 0 },
                { id: "eid324", tween: [ "style", "${__12}", "display", 'none', { fromValue: 'block'}], position: 39500, duration: 0 },
                { id: "eid353", tween: [ "style", "${_frac25Copy9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid356", tween: [ "style", "${_frac25Copy9}", "display", 'block', { fromValue: 'none'}], position: 47750, duration: 0 },
                { id: "eid383", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid385", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid348", tween: [ "style", "${__5}", "top", '186px', { fromValue: '515px'}], position: 42000, duration: 1000 },
                { id: "eid446", tween: [ "style", "${_Text14}", "opacity", '0', { fromValue: '1'}], position: 38250, duration: 1000 },
                { id: "eid398", tween: [ "style", "${_Text15Copy}", "opacity", '0', { fromValue: '1'}], position: 41000, duration: 750 },
                { id: "eid461", tween: [ "style", "${_frac25Copy3}", "opacity", '0', { fromValue: '1'}], position: 38250, duration: 1000 },
                { id: "eid306", tween: [ "style", "${_frac35Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid310", tween: [ "style", "${_frac35Copy}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0 },
                { id: "eid321", tween: [ "style", "${_frac35Copy}", "display", 'none', { fromValue: 'block'}], position: 43750, duration: 0 },
                { id: "eid363", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid365", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 50750, duration: 0 },
                { id: "eid276", tween: [ "style", "${_frac32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid278", tween: [ "style", "${_frac32}", "display", 'block', { fromValue: 'none'}], position: 25250, duration: 0 },
                { id: "eid331", tween: [ "style", "${_frac32}", "display", 'none', { fromValue: 'block'}], position: 39500, duration: 0 },
                { id: "eid443", tween: [ "style", "${_Text16}", "opacity", '0', { fromValue: '1'}], position: 41000, duration: 750 },
                { id: "eid294", tween: [ "style", "${_Text16}", "display", 'none', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid297", tween: [ "style", "${_Text16}", "display", 'block', { fromValue: 'none'}], position: 29250, duration: 0 },
                { id: "eid327", tween: [ "style", "${_Text16}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0 },
                { id: "eid240", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid243", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid351", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 43000, duration: 0 },
                { id: "eid239", tween: [ "style", "${_frac25Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid242", tween: [ "style", "${_frac25Copy}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid362", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid364", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 50750, duration: 0 },
                { id: "eid437", tween: [ "style", "${_frac34}", "opacity", '0', { fromValue: '1'}], position: 38250, duration: 1000 },
                { id: "eid372", tween: [ "style", "${_Text21}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid374", tween: [ "style", "${_Text21}", "display", 'block', { fromValue: 'none'}], position: 55500, duration: 0 },
                { id: "eid376", tween: [ "style", "${_Text21}", "display", 'none', { fromValue: 'block'}], position: 58000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid413", tween: [ "style", "${_frac35Copy}", "opacity", '0', { fromValue: '1'}], position: 42750, duration: 750 },
                { id: "eid350", tween: [ "style", "${_Text19}", "top", '185px', { fromValue: '514px'}], position: 42000, duration: 1000 },
                { id: "eid440", tween: [ "style", "${_frac32}", "opacity", '0', { fromValue: '1'}], position: 38250, duration: 1000 },
                { id: "eid452", tween: [ "style", "${_frac312}", "opacity", '0', { fromValue: '1'}], position: 30250, duration: 1000 },
                { id: "eid300", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid301", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 31250, duration: 0 },
                { id: "eid323", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'block'}], position: 39500, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Answers}", "top", '129px', { fromValue: '129px'}], position: 14500, duration: 0 },
                { id: "eid377", tween: [ "style", "${_Text22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid378", tween: [ "style", "${_Text22}", "display", 'block', { fromValue: 'none'}], position: 61000, duration: 0 },
                { id: "eid279", tween: [ "style", "${_frac33}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid280", tween: [ "style", "${_frac33}", "display", 'block', { fromValue: 'none'}], position: 26250, duration: 0 },
                { id: "eid330", tween: [ "style", "${_frac33}", "display", 'none', { fromValue: 'block'}], position: 39500, duration: 0 },
                { id: "eid416", tween: [ "style", "${_Text17}", "opacity", '0', { fromValue: '1'}], position: 42750, duration: 750 },
                { id: "eid302", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question3}', [] ], ""], position: 2000 },
                { id: "eid303", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 15000 },
                { id: "eid361", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 32000 },
                { id: "eid381", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 58000 }            ]
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
