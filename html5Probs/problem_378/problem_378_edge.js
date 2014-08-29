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
                id: 'Text14',
                display: 'none',
                type: 'text',
                rect: ['136px', '457px','304px','40px','auto', 'auto'],
                text: "This fraction is",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Question_Text',
                type: 'text',
                rect: ['33px', '32px','402px','100px','auto', 'auto'],
                text: "John and Jill made fraction bars that are the same size.",
                align: "left",
                font: ['Georgia, Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['151px', '62px','277px','20px','auto', 'auto'],
                text: "of his fraction bar and Jill shaded",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['33px', '62px','106px','20px','auto', 'auto'],
                text: "John shaded",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['24px', '181','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','1.24599']]
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
                id: 'frac22',
                type: 'image',
                rect: ['396px', '56px','15px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac22.gif",'0px','0px']
            },
            {
                id: 'frac3',
                type: 'image',
                rect: ['131px', '56px','15px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac3.gif",'0px','0px']
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['33px', '97px','363px','24px','auto', 'auto'],
                text: "of her fraction bar, as shown below. ",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['33px', '263px','444px','24px','auto', 'auto'],
                text: "What fraction shows how much more John shaded than Jill?",
                align: "left",
                font: ['Georgia, Times New Roman, Times, serif', 16, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text11',
                type: 'text',
                rect: ['33px', '132px','106px','20px','auto', 'auto'],
                text: "John's Fraction Bar",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text12',
                type: 'text',
                rect: ['33px', '205px','101px','32px','auto', 'auto'],
                text: "Jill's<br>Fraction Bar",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['136px', '127px','25px','36px','auto', 'auto'],
                fill: ["rgba(237,40,40,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy14',
                type: 'rect',
                rect: ['165px', '127px','25px','36px','auto', 'auto'],
                fill: ["rgba(237,40,40,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy17',
                type: 'rect',
                rect: ['194px', '127px','25px','36px','auto', 'auto'],
                fill: ["rgba(237,40,40,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy16',
                type: 'rect',
                rect: ['223px', '127px','25px','36px','auto', 'auto'],
                fill: ["rgba(237,40,40,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy18',
                type: 'rect',
                rect: ['252px', '127px','25px','36px','auto', 'auto'],
                fill: ["rgba(237,40,40,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy19',
                type: 'rect',
                rect: ['281px', '127px','25px','36px','auto', 'auto'],
                fill: ["rgba(237,40,40,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy20',
                type: 'rect',
                rect: ['309px', '127px','25px','36px','auto', 'auto'],
                fill: ["rgba(237,40,40,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy21',
                type: 'rect',
                rect: ['338px', '127px','25px','36px','auto', 'auto'],
                fill: ["rgba(237,40,40,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy22',
                type: 'rect',
                rect: ['367px', '127px','25px','36px','auto', 'auto'],
                fill: ["rgba(237,40,40,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy37',
                display: 'none',
                type: 'rect',
                rect: ['283px', '127px','25px','36px','auto', 'auto'],
                fill: ["rgba(237,40,40,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy36',
                display: 'none',
                type: 'rect',
                rect: ['311px', '127px','25px','36px','auto', 'auto'],
                fill: ["rgba(237,40,40,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy35',
                display: 'none',
                type: 'rect',
                rect: ['340px', '127px','25px','36px','auto', 'auto'],
                fill: ["rgba(237,40,40,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy34',
                display: 'none',
                type: 'rect',
                rect: ['369px', '127px','25px','36px','auto', 'auto'],
                fill: ["rgba(237,40,40,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy23',
                type: 'rect',
                rect: ['396px', '127px','25px','36px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy33',
                type: 'rect',
                rect: ['136px', '205px','25px','36px','auto', 'auto'],
                fill: ["rgba(70,39,237,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy32',
                type: 'rect',
                rect: ['165px', '205px','25px','36px','auto', 'auto'],
                fill: ["rgba(70,39,237,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy31',
                type: 'rect',
                rect: ['194px', '205px','25px','36px','auto', 'auto'],
                fill: ["rgba(70,39,237,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy30',
                type: 'rect',
                rect: ['223px', '205px','25px','36px','auto', 'auto'],
                fill: ["rgba(70,39,237,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy29',
                type: 'rect',
                rect: ['252px', '205px','25px','36px','auto', 'auto'],
                fill: ["rgba(70,39,237,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy28',
                type: 'rect',
                rect: ['281px', '205px','25px','36px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy27',
                type: 'rect',
                rect: ['309px', '205px','25px','36px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy26',
                type: 'rect',
                rect: ['338px', '205px','25px','36px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy25',
                type: 'rect',
                rect: ['367px', '205px','25px','36px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy24',
                type: 'rect',
                rect: ['396px', '205px','25px','36px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy42',
                display: 'none',
                type: 'rect',
                rect: ['248px', '300px','25px','36px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy41',
                display: 'none',
                type: 'rect',
                rect: ['276px', '300px','25px','36px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy40',
                display: 'none',
                type: 'rect',
                rect: ['305px', '300px','25px','36px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy39',
                display: 'none',
                type: 'rect',
                rect: ['334px', '300px','25px','36px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy38',
                display: 'none',
                type: 'rect',
                rect: ['363px', '300px','25px','36px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2Copy43',
                display: 'none',
                type: 'rect',
                rect: ['391px', '300px','25px','36px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle5',
                display: 'none',
                type: 'rect',
                rect: ['279px', '172px','0px','15px','auto', 'auto'],
                fill: ["rgba(237,40,40,1)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle6',
                display: 'none',
                type: 'rect',
                rect: ['279px', '191px','115px','0px','auto', 'auto'],
                fill: ["rgba(237,40,40,1)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle7',
                display: 'none',
                type: 'rect',
                rect: ['394px', '172px','0px','16px','auto', 'auto'],
                fill: ["rgba(237,40,40,1)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'frac6',
                type: 'image',
                rect: ['72px', '527px','18px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac6.gif",'0px','0px']
            },
            {
                id: 'frac4',
                type: 'image',
                rect: ['72px', '390px','18px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac4.gif",'0px','0px']
            },
            {
                id: 'frac32',
                type: 'image',
                rect: ['72px', '435px','18px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac32.gif",'0px','0px']
            },
            {
                id: 'frac32Copy',
                display: 'none',
                type: 'image',
                rect: ['248px', '448px','18px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac32.gif",'0px','0px']
            },
            {
                id: 'frac7',
                type: 'image',
                rect: ['76px', '481px','9px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac7.gif",'0px','0px']
            },
            {
                id: 'frac5',
                type: 'image',
                rect: ['72px', '343px','18px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frac5.gif",'0px','0px']
            },
            {
                id: 'answer',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer.ogg']
            },
            {
                id: 'Text13',
                display: 'none',
                type: 'text',
                rect: ['137px', '403px','325px','45px','auto', 'auto'],
                text: "Let's take the number of fraction pieces John has more of than Jill. What fraction is this?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text15',
                display: 'none',
                type: 'text',
                rect: ['137px', '497px','189px','24px','auto', 'auto'],
                text: "Choose (C)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'hint1',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1.ogg','media/hint1.mp3']
            },
            {
                id: 'question',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/question.mp3','media/question.ogg']
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
            "${_Rectangle2}": [
                ["style", "top", '127px'],
                ["style", "left", '136px'],
                ["color", "background-color", 'rgba(237,40,40,1.00)']
            ],
            "${_Text15}": [
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-size", '20px']
            ],
            "${_Rectangle2Copy40}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '305px'],
                ["style", "top", '300px']
            ],
            "${_Text8}": [
                ["style", "top", '97px'],
                ["style", "left", '33px'],
                ["style", "width", '363px']
            ],
            "${_frac4}": [
                ["style", "top", '390px'],
                ["style", "left", '72px'],
                ["style", "height", '30px']
            ],
            "${_Rectangle2Copy37}": [
                ["style", "display", 'none'],
                ["style", "top", '127px'],
                ["style", "left", '283px'],
                ["color", "background-color", 'rgba(237,40,40,1)']
            ],
            "${_Rectangle2Copy29}": [
                ["style", "top", '205px'],
                ["style", "left", '252px'],
                ["color", "background-color", 'rgba(70,39,237,1.00)']
            ],
            "${_Rectangle2Copy38}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '363px'],
                ["style", "top", '300px']
            ],
            "${_Rectangle2Copy35}": [
                ["style", "display", 'none'],
                ["style", "top", '127px'],
                ["style", "left", '340px'],
                ["color", "background-color", 'rgba(237,40,40,1)']
            ],
            "${_Text14}": [
                ["style", "top", '457px'],
                ["style", "left", '136px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy16}": [
                ["style", "top", '127px'],
                ["style", "left", '223px'],
                ["color", "background-color", 'rgba(237,40,40,1)']
            ],
            "${_Rectangle7}": [
                ["style", "top", '172px'],
                ["style", "left", '394px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2Copy41}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '276px'],
                ["style", "top", '300px']
            ],
            "${_Rectangle2Copy42}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '248px'],
                ["style", "top", '300px']
            ],
            "${_Rectangle2Copy33}": [
                ["style", "top", '205px'],
                ["style", "left", '136px'],
                ["color", "background-color", 'rgba(70,39,237,1.00)']
            ],
            "${_Text10}": [
                ["style", "top", '263px'],
                ["style", "height", '24px'],
                ["style", "font-size", '16px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '33px'],
                ["style", "width", '444px']
            ],
            "${_Rectangle2Copy34}": [
                ["style", "display", 'none'],
                ["style", "top", '127px'],
                ["style", "left", '369px'],
                ["color", "background-color", 'rgba(237,40,40,1)']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_Question_Text}": [
                ["style", "top", '32px'],
                ["style", "font-size", '16px'],
                ["style", "height", '100px'],
                ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
                ["style", "left", '33px'],
                ["style", "width", '402px']
            ],
            "${_Rectangle2Copy22}": [
                ["style", "top", '127px'],
                ["style", "left", '367px'],
                ["color", "background-color", 'rgba(237,40,40,1)']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text12}": [
                ["style", "left", '33px'],
                ["style", "top", '205px']
            ],
            "${_Rectangle2Copy17}": [
                ["style", "top", '127px'],
                ["style", "left", '194px'],
                ["color", "background-color", 'rgba(237,40,40,1)']
            ],
            "${_Rectangle2Copy23}": [
                ["style", "top", '127px'],
                ["style", "left", '396px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_Text6}": [
                ["style", "top", '62px'],
                ["style", "left", '33px'],
                ["style", "width", '106px']
            ],
            "${_Text7}": [
                ["style", "top", '62px'],
                ["style", "left", '151px'],
                ["style", "width", '277px']
            ],
            "${_Text11}": [
                ["style", "width", '106px']
            ],
            "${_Rectangle2Copy24}": [
                ["style", "top", '205px'],
                ["style", "left", '396px'],
                ["color", "background-color", 'rgba(255,255,255,1)']
            ],
            "${_Rectangle2Copy14}": [
                ["style", "top", '127px'],
                ["style", "left", '165px'],
                ["color", "background-color", 'rgba(237,40,40,1)']
            ],
            "${_Rectangle2Copy32}": [
                ["style", "top", '205px'],
                ["style", "left", '165px'],
                ["color", "background-color", 'rgba(70,39,237,1.00)']
            ],
            "${_Rectangle2Copy21}": [
                ["style", "top", '127px'],
                ["style", "left", '338px'],
                ["color", "background-color", 'rgba(237,40,40,1)']
            ],
            "${_Rectangle2Copy25}": [
                ["style", "top", '205px'],
                ["style", "left", '367px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_Rectangle2Copy36}": [
                ["style", "display", 'none'],
                ["style", "top", '127px'],
                ["style", "left", '311px'],
                ["color", "background-color", 'rgba(237,40,40,1)']
            ],
            "${_Rectangle2Copy30}": [
                ["style", "top", '205px'],
                ["style", "left", '223px'],
                ["color", "background-color", 'rgba(70,39,237,1.00)']
            ],
            "${_frac5}": [
                ["style", "top", '343px'],
                ["style", "left", '72px'],
                ["style", "height", '30px']
            ],
            "${_Rectangle2Copy39}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '334px'],
                ["style", "top", '300px']
            ],
            "${_frac22}": [
                ["style", "height", '32px'],
                ["style", "top", '56px'],
                ["style", "left", '396px'],
                ["style", "width", '15px']
            ],
            "${_frac7}": [
                ["style", "top", '481px'],
                ["style", "left", '76px'],
                ["style", "height", '30px']
            ],
            "${_Rectangle2Copy28}": [
                ["style", "top", '205px'],
                ["style", "left", '281px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_frac32}": [
                ["style", "top", '435px'],
                ["style", "left", '72px'],
                ["style", "height", '30px']
            ],
            "${_Rectangle2Copy31}": [
                ["style", "top", '205px'],
                ["style", "left", '194px'],
                ["color", "background-color", 'rgba(70,39,237,1.00)']
            ],
            "${_frac3}": [
                ["style", "height", '32px'],
                ["style", "top", '56px'],
                ["style", "left", '131px'],
                ["style", "width", '15px']
            ],
            "${_Answers}": [
                ["style", "top", '349px'],
                ["style", "left", '24px'],
                ["transform", "scaleY", '1.24599']
            ],
            "${_Rectangle2Copy19}": [
                ["style", "top", '127px'],
                ["style", "left", '281px'],
                ["color", "background-color", 'rgba(237,40,40,1)']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Text13}": [
                ["style", "top", '403px'],
                ["style", "height", '45px'],
                ["style", "display", 'none'],
                ["style", "left", '137px'],
                ["style", "width", '325px']
            ],
            "${_Rectangle6}": [
                ["style", "display", 'none'],
                ["style", "left", '279px'],
                ["style", "width", '115px']
            ],
            "${_Rectangle2Copy26}": [
                ["style", "top", '205px'],
                ["style", "left", '338px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_Rectangle2Copy20}": [
                ["style", "top", '127px'],
                ["style", "left", '309px'],
                ["color", "background-color", 'rgba(237,40,40,1)']
            ],
            "${_Rectangle2Copy43}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '391px'],
                ["style", "top", '300px']
            ],
            "${_Rectangle2Copy27}": [
                ["style", "top", '205px'],
                ["style", "left", '309px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_Rectangle5}": [
                ["style", "display", 'none'],
                ["style", "top", '172px'],
                ["style", "left", '279px'],
                ["style", "height", '15px']
            ],
            "${_frac6}": [
                ["style", "top", '527px'],
                ["style", "left", '72px'],
                ["style", "height", '30px']
            ],
            "${_Rectangle2Copy18}": [
                ["style", "top", '127px'],
                ["style", "left", '252px'],
                ["color", "background-color", 'rgba(237,40,40,1)']
            ],
            "${_frac32Copy}": [
                ["style", "top", '448px'],
                ["style", "left", '248px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 32000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 19000,
                "Answer Hint": 27000
            },
            timeline: [
                { id: "eid338", tween: [ "style", "${_Rectangle2Copy41}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid344", tween: [ "style", "${_Rectangle2Copy41}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
                { id: "eid239", tween: [ "style", "${_Rectangle6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid242", tween: [ "style", "${_Rectangle6}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid240", tween: [ "style", "${_Rectangle7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid243", tween: [ "style", "${_Rectangle7}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid329", tween: [ "style", "${_Rectangle2Copy36}", "left", '164px', { fromValue: '311px'}], position: 20000, duration: 1000 },
                { id: "eid326", tween: [ "style", "${_Rectangle2Copy34}", "top", '300px', { fromValue: '127px'}], position: 20000, duration: 1000 },
                { id: "eid238", tween: [ "style", "${_Rectangle5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid241", tween: [ "style", "${_Rectangle5}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid323", tween: [ "style", "${_Rectangle2Copy35}", "left", '193px', { fromValue: '340px'}], position: 20000, duration: 1000 },
                { id: "eid330", tween: [ "style", "${_Rectangle2Copy36}", "top", '300px', { fromValue: '127px'}], position: 20000, duration: 1000 },
                { id: "eid244", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid245", tween: [ "style", "${_Text13}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid340", tween: [ "style", "${_Rectangle2Copy39}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid346", tween: [ "style", "${_Rectangle2Copy39}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
                { id: "eid324", tween: [ "style", "${_Rectangle2Copy35}", "top", '300px', { fromValue: '127px'}], position: 20000, duration: 1000 },
                { id: "eid246", tween: [ "style", "${_Rectangle2Copy34}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid250", tween: [ "style", "${_Rectangle2Copy34}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid342", tween: [ "style", "${_Rectangle2Copy43}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid348", tween: [ "style", "${_Rectangle2Copy43}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
                { id: "eid248", tween: [ "style", "${_Rectangle2Copy36}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid269", tween: [ "style", "${_Rectangle2Copy36}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid247", tween: [ "style", "${_Rectangle2Copy35}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid268", tween: [ "style", "${_Rectangle2Copy35}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Answers}", "top", '349px', { fromValue: '349px'}], position: 14500, duration: 0 },
                { id: "eid341", tween: [ "style", "${_Rectangle2Copy38}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid347", tween: [ "style", "${_Rectangle2Copy38}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
                { id: "eid325", tween: [ "style", "${_Rectangle2Copy34}", "left", '222px', { fromValue: '369px'}], position: 20000, duration: 1000 },
                { id: "eid350", tween: [ "style", "${_frac32Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid352", tween: [ "style", "${_frac32Copy}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid353", tween: [ "style", "${_Text15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid354", tween: [ "style", "${_Text15}", "display", 'block', { fromValue: 'none'}], position: 29500, duration: 0 },
                { id: "eid249", tween: [ "style", "${_Rectangle2Copy37}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid270", tween: [ "style", "${_Rectangle2Copy37}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid328", tween: [ "style", "${_Rectangle2Copy37}", "top", '300px', { fromValue: '127px'}], position: 20000, duration: 1000 },
                { id: "eid327", tween: [ "style", "${_Rectangle2Copy37}", "left", '136px', { fromValue: '283px'}], position: 20000, duration: 1000 },
                { id: "eid337", tween: [ "style", "${_Rectangle2Copy42}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid343", tween: [ "style", "${_Rectangle2Copy42}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
                { id: "eid339", tween: [ "style", "${_Rectangle2Copy40}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid345", tween: [ "style", "${_Rectangle2Copy40}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
                { id: "eid349", tween: [ "style", "${_Text14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid351", tween: [ "style", "${_Text14}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid358", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid359", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 19000 },
                { id: "eid357", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 27000 }            ]
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
