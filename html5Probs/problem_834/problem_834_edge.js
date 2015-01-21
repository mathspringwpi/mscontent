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
                rect: ['24px', '30px','439px','22px','auto', 'auto'],
                text: "The table below shows the low temperature each day for four days.",
                align: "left",
                font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['48', '181','auto','auto','auto', 'auto']
            },
            {
                id: 'AnswerDText',
                type: 'text',
                rect: ['71px', '511px','72px','20px','auto', 'auto'],
                text: "-4, -2, 1, 3",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['71px', '475px','72px','19px','auto', 'auto'],
                text: "3, 1, -2, -4",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerBText',
                type: 'text',
                rect: ['71px', '443px','81px','19px','auto', 'auto'],
                text: "-2, -4, 1, 3",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['71px', '408px','81px','19px','auto', 'auto'],
                text: "1, -2, 3, -4",
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
                id: 'question',
                type: 'audio',
                tag: 'audio',
                rect: ['288', '154','320px','45px','auto', 'auto'],
                source: ['media/question.ogg','media/question.mp3']
            },
            {
                id: 'Question_table',
                type: 'group',
                rect: ['7px', '72px','347px','187','auto', 'auto'],
                c: [
                {
                    id: 'Table',
                    type: 'image',
                    rect: ['0px', '0px','342px','187px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Table.png",'0px','0px']
                },
                {
                    id: 'Text',
                    type: 'text',
                    rect: ['82px', '-10px','156px','19px','auto', 'auto'],
                    text: "Low Temperatures",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text6',
                    type: 'text',
                    rect: ['51px', '26px','50px','15px','auto', 'auto'],
                    text: "Day",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text7',
                    type: 'text',
                    rect: ['112px', '26px','89px','15px','auto', 'auto'],
                    text: "Temperature",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text8',
                    type: 'text',
                    rect: ['194px', '28px','97px','15px','auto', 'auto'],
                    text: "(degrees Farenheit)",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 11, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text9',
                    type: 'text',
                    rect: ['42px', '56px','58px','18px','auto', 'auto'],
                    text: "Monday",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text10',
                    type: 'text',
                    rect: ['42px', '85px','52px','17px','auto', 'auto'],
                    text: "Tuesday",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text11',
                    type: 'text',
                    rect: ['41px', '115px','61px','17px','auto', 'auto'],
                    text: "Wednesday",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text12',
                    type: 'text',
                    rect: ['42px', '147px','60px','14px','auto', 'auto'],
                    text: "Thursday",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text13',
                    type: 'text',
                    rect: ['181px', '58px','64px','14px','auto', 'auto'],
                    text: "-4",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text15',
                    type: 'text',
                    rect: ['187px', '87px','72px','13px','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text16',
                    type: 'text',
                    rect: ['187px', '119px','60px','13px','auto', 'auto'],
                    text: "3",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text17',
                    type: 'text',
                    rect: ['182px', '148px','65px','13px','auto', 'auto'],
                    text: "-2",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Text18',
                type: 'text',
                rect: ['27px', '332px','405px','40px','auto', 'auto'],
                text: "Which of the following shows these temperatures in order from least to greatest?",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text17Copy',
                type: 'text',
                rect: ['189px', '220px','65px','13px','auto', 'auto'],
                autoOrient: true,
                text: "-2",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'hint1',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1.ogg','media/hint1.mp3']
            },
            {
                id: 'Text16Copy',
                type: 'text',
                rect: ['194px', '191px','60px','13px','auto', 'auto'],
                autoOrient: true,
                text: "3",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text15Copy',
                type: 'text',
                rect: ['194px', '159px','72px','13px','auto', 'auto'],
                autoOrient: true,
                text: "1",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text13Copy',
                type: 'text',
                rect: ['188px', '130px','64px','14px','auto', 'auto'],
                autoOrient: true,
                text: "-4",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Number_Line',
                display: 'none',
                type: 'group',
                rect: ['570px', '125px','12','12','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle6',
                    type: 'rect',
                    rect: ['-3px', '7px','13px','0px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"],
                    transform: [[],['46']]
                },
                {
                    id: 'Rectangle5',
                    type: 'rect',
                    rect: ['-266px', '7px','13px','0px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"],
                    transform: [[],['-33']]
                },
                {
                    id: 'Rectangle4',
                    type: 'rect',
                    rect: ['-266px', '16px','13px','0px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"],
                    transform: [[],['20']]
                },
                {
                    id: 'Rectangle2',
                    type: 'rect',
                    rect: ['-265px', '12px','273px','0px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle7',
                    type: 'rect',
                    rect: ['-4px', '16px','13px','0px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"],
                    transform: [[],['-29']]
                },
                {
                    id: 'Rectangle8',
                    type: 'rect',
                    rect: ['-129px', '2px','1px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle8Copy',
                    type: 'rect',
                    rect: ['-107px', '2px','1px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle8Copy2',
                    type: 'rect',
                    rect: ['-85px', '2px','1px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle8Copy3',
                    type: 'rect',
                    rect: ['-64px', '2px','1px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle8Copy4',
                    type: 'rect',
                    rect: ['-44px', '2px','1px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle8Copy5',
                    type: 'rect',
                    rect: ['-21px', '2px','1px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle8Copy6',
                    type: 'rect',
                    rect: ['-149px', '2px','1px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle8Copy7',
                    type: 'rect',
                    rect: ['-169px', '2px','1px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle8Copy8',
                    type: 'rect',
                    rect: ['-190px', '2px','1px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle8Copy9',
                    type: 'rect',
                    rect: ['-209px', '2px','1px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Rectangle8Copy10',
                    type: 'rect',
                    rect: ['-229px', '2px','1px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Text20',
                    type: 'text',
                    rect: ['-132px', '32px','31px','22px','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text21',
                    type: 'text',
                    rect: ['-25px', '32px','16px','17px','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text22',
                    type: 'text',
                    rect: ['-239px', '32px','20px','18px','auto', 'auto'],
                    text: "-5",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'hint2a',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2a.ogg','media/hint2a.mp3']
            },
            {
                id: 'Text23',
                display: 'none',
                type: 'text',
                rect: ['331px', '235px','235px','47px','auto', 'auto'],
                text: "We can simplify this problem by putting these numbers on a number line.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(4,111,135,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text25',
                display: 'none',
                type: 'text',
                rect: ['236px', '386px','314px','59px','auto', 'auto'],
                text: "Now we can read the numbers off the number line in order. We want to go from least to greatest. In what direction should we move along the number line?",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(4,111,135,1)", "400", "none", "normal"]
            },
            {
                id: 'answer1',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer1.mp3','media/answer1.ogg']
            },
            {
                id: 'Ellipse',
                display: 'none',
                type: 'ellipse',
                rect: ['358px', '134px','8px','8px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(4,159,211,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'EllipseCopy',
                display: 'none',
                type: 'ellipse',
                rect: ['460px', '134px','8px','8px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(4,159,211,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse2',
                display: 'none',
                type: 'ellipse',
                rect: ['503px', '134px','8px','8px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(4,159,211,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse3',
                display: 'none',
                type: 'ellipse',
                rect: ['398px', '134px','8px','8px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(4,159,211,1.00)"],
                stroke: [1,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'hint2b',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2b.mp3','media/hint2b.ogg']
            },
            {
                id: 'answer2',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer2.ogg','media/answer2.mp3']
            },
            {
                id: 'Text26',
                type: 'text',
                rect: ['237px', '511px','165px','40px','auto', 'auto'],
                text: "Choose (D)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(2,111,16,1.00)", "700", "none", "normal"]
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
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '12px'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '-265px'],
                ["style", "width", '273px']
            ],
            "${_Text13Copy}": [
                ["style", "top", '130px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["motion", "location", '220px 137px'],
                ["style", "left", '188px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle8Copy9}": [
                ["style", "top", '2px'],
                ["style", "border-width", '0.5px'],
                ["style", "left", '-209px'],
                ["style", "width", '1px']
            ],
            "${_Text8}": [
                ["style", "top", '28px'],
                ["style", "font-size", '11px'],
                ["style", "left", '194px'],
                ["style", "width", '97px']
            ],
            "${_Text16Copy}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["motion", "location", '224px 197.5px'],
                ["style", "font-size", '16px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Rectangle8Copy4}": [
                ["style", "top", '2px'],
                ["style", "border-width", '0.5px'],
                ["style", "left", '-44px'],
                ["style", "width", '1px']
            ],
            "${_Ellipse3}": [
                ["style", "top", '134px'],
                ["color", "background-color", 'rgba(4,159,211,1.00)'],
                ["style", "display", 'none'],
                ["style", "border-style", 'none'],
                ["style", "left", '398px'],
                ["style", "width", '8px']
            ],
            "${_Text18}": [
                ["style", "top", '332px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '16px'],
                ["style", "left", '27px'],
                ["style", "width", '405px']
            ],
            "${_Question_table}": [
                ["style", "top", '72px'],
                ["style", "left", '7px'],
                ["style", "width", '347px']
            ],
            "${_Text21}": [
                ["style", "top", '32px'],
                ["style", "left", '-25px']
            ],
            "${_Text15Copy}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["motion", "location", '230px 165.5px'],
                ["style", "font-size", '16px']
            ],
            "${_Question_Text}": [
                ["style", "top", '30px'],
                ["style", "width", '439px'],
                ["style", "height", '22px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '24px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle8Copy10}": [
                ["style", "top", '2px'],
                ["style", "border-width", '0.5px'],
                ["style", "left", '-229px'],
                ["style", "width", '1px']
            ],
            "${_Number_Line}": [
                ["style", "top", '125px'],
                ["style", "left", '570px'],
                ["style", "display", 'none']
            ],
            "${_Text10}": [
                ["style", "left", '42px']
            ],
            "${_Text20}": [
                ["style", "top", '32px'],
                ["style", "height", '22px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-132px'],
                ["style", "width", '31px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(4,159,211,1.00)'],
                ["style", "top", '134px'],
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'none'],
                ["style", "left", '358px'],
                ["style", "width", '8px']
            ],
            "${_Rectangle8Copy}": [
                ["style", "top", '2px'],
                ["style", "border-width", '0.5px'],
                ["style", "left", '-107px'],
                ["style", "width", '1px']
            ],
            "${_Text9}": [
                ["style", "font-size", '14px']
            ],
            "${_Rectangle8Copy2}": [
                ["style", "top", '2px'],
                ["style", "border-width", '0.5px'],
                ["style", "left", '-85px'],
                ["style", "width", '1px']
            ],
            "${_Text17Copy}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["motion", "location", '221.5px 226.5px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle8Copy7}": [
                ["style", "top", '2px'],
                ["style", "border-width", '0.5px'],
                ["style", "left", '-169px'],
                ["style", "width", '1px']
            ],
            "${_Text7}": [
                ["style", "top", '26px'],
                ["style", "height", '15px'],
                ["style", "width", '89px'],
                ["style", "left", '112px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle8Copy8}": [
                ["style", "top", '2px'],
                ["style", "border-width", '0.5px'],
                ["style", "left", '-190px'],
                ["style", "width", '1px']
            ],
            "${_AnswerBText}": [
                ["style", "top", '443px'],
                ["style", "width", '81px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '71px'],
                ["style", "font-size", '14px']
            ],
            "${_Text22}": [
                ["style", "top", '32px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '600px']
            ],
            "${_Rectangle4}": [
                ["style", "top", '16px'],
                ["style", "left", '-266px'],
                ["transform", "rotateZ", '20deg']
            ],
            "${_AnswerCText}": [
                ["style", "top", '475px'],
                ["style", "width", '72px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '71px'],
                ["style", "font-size", '14px']
            ],
            "${_Text15}": [
                ["style", "top", '87px'],
                ["style", "left", '187px'],
                ["style", "font-size", '16px']
            ],
            "${_AnswerAText}": [
                ["style", "top", '408px'],
                ["style", "text-align", 'left'],
                ["style", "width", '81px'],
                ["style", "height", '19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '71px'],
                ["style", "font-size", '14px']
            ],
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(4,159,211,1.00)'],
                ["style", "display", 'none'],
                ["style", "top", '134px'],
                ["style", "height", '8px'],
                ["style", "border-style", 'none'],
                ["style", "left", '460px'],
                ["style", "width", '8px']
            ],
            "${_Answers}": [
                ["style", "top", '386px'],
                ["style", "left", '24px']
            ],
            "${_Rectangle8Copy3}": [
                ["style", "top", '2px'],
                ["style", "border-width", '0.5px'],
                ["style", "left", '-64px'],
                ["style", "width", '1px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle8}": [
                ["style", "top", '2px'],
                ["style", "border-width", '0.5px'],
                ["style", "left", '-129px'],
                ["style", "width", '1px']
            ],
            "${_Rectangle8Copy5}": [
                ["style", "top", '2px'],
                ["style", "border-width", '0.5px'],
                ["style", "left", '-21px'],
                ["style", "width", '1px']
            ],
            "${_Text13}": [
                ["style", "top", '58px'],
                ["style", "left", '181px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle7}": [
                ["style", "top", '16px'],
                ["style", "left", '-4px'],
                ["transform", "rotateZ", '-29deg']
            ],
            "${_Ellipse2}": [
                ["style", "display", 'none'],
                ["style", "border-style", 'none'],
                ["style", "left", '503px'],
                ["color", "background-color", 'rgba(4,159,211,1.00)']
            ],
            "${_Rectangle6}": [
                ["style", "top", '7px'],
                ["style", "left", '-3px'],
                ["transform", "rotateZ", '46deg']
            ],
            "${_Text17}": [
                ["style", "top", '148px'],
                ["style", "left", '182px'],
                ["style", "font-size", '16px']
            ],
            "${_Text16}": [
                ["style", "top", '119px'],
                ["style", "left", '187px'],
                ["style", "font-size", '16px']
            ],
            "${_Text25}": [
                ["style", "display", 'none'],
                ["style", "top", '386px'],
                ["style", "left", '236px'],
                ["style", "width", '314px']
            ],
            "${_Text6}": [
                ["style", "left", '51px'],
                ["style", "top", '26px']
            ],
            "${_Rectangle8Copy6}": [
                ["style", "top", '2px'],
                ["style", "border-width", '0.5px'],
                ["style", "left", '-149px'],
                ["style", "width", '1px']
            ],
            "${_Text}": [
                ["style", "top", '-10px'],
                ["style", "left", '82px']
            ],
            "${_Text23}": [
                ["style", "top", '235px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(4,111,135,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '331px'],
                ["style", "width", '235px']
            ],
            "${_Rectangle5}": [
                ["style", "top", '7px'],
                ["style", "left", '-266px'],
                ["transform", "rotateZ", '-33deg']
            ],
            "${_AnswerDText}": [
                ["style", "top", '511px'],
                ["style", "width", '72px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '71px'],
                ["style", "font-size", '14px']
            ],
            "${_Text26}": [
                ["style", "top", '511px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["color", "color", 'rgba(2,111,16,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '237px'],
                ["style", "font-weight", '700']
            ],
            "${_Table}": [
                ["style", "top", '0px'],
                ["style", "height", '187px'],
                ["style", "left", '0px'],
                ["style", "width", '342px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 59427,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 13000,
                "Hint 2": 22000,
                "Answer Hint": 45000
            },
            timeline: [
                { id: "eid243", tween: [ "style", "${_Text23}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid283", tween: [ "color", "${_Text16Copy}", "color", 'rgba(227,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 54500, duration: 500 },
                { id: "eid268", tween: [ "style", "${_EllipseCopy}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid270", tween: [ "style", "${_Ellipse3}", "display", 'block', { fromValue: 'none'}], position: 31500, duration: 0 },
                { id: "eid271", tween: [ "style", "${_Text25}", "display", 'block', { fromValue: 'none'}], position: 34750, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid277", tween: [ "color", "${_Text17Copy}", "color", 'rgba(227,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 52500, duration: 500 },
                { id: "eid244", tween: [ "style", "${_Number_Line}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid269", tween: [ "style", "${_Ellipse2}", "display", 'block', { fromValue: 'none'}], position: 29500, duration: 0 },
                { id: "eid274", tween: [ "color", "${_Text13Copy}", "color", 'rgba(227,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 51500, duration: 500 },
                { id: "eid246", tween: [ "motion", "${_Text15Copy}", [[230, 165.5, 0, 0],[496.21, 111.45, 0, 0]]], position: 26000, duration: 1000 },
                { id: "eid249", tween: [ "motion", "${_Text17Copy}", [[221.5, 226.5, 0, 0],[427.5, 111.5, 0, 0]]], position: 30500, duration: 1000 },
                { id: "eid286", tween: [ "style", "${_Text26}", "opacity", '1', { fromValue: '0.000000'}], position: 58427, duration: 689 },
                { id: "eid280", tween: [ "color", "${_Text15Copy}", "color", 'rgba(227,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 53500, duration: 500 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Answers}", "top", '386px', { fromValue: '386px'}], position: 19500, duration: 0 },
                { id: "eid248", tween: [ "motion", "${_Text16Copy}", [[224, 197.5, 0, 0],[531, 111.5, 0, 0]]], position: 28000, duration: 1500 },
                { id: "eid250", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'none'}], position: 17708, duration: 0 },
                { id: "eid241", tween: [ "motion", "${_Text13Copy}", [[220, 137, 0, 0],[386.83, 112.38, 0, 0]]], position: 17000, duration: 708 },
                { id: "eid160", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid242", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 13000 },
                { id: "eid287", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2a}', [] ], ""], position: 22000 },
                { id: "eid288", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2b}', [] ], ""], position: 33000 },
                { id: "eid289", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer1}', [] ], ""], position: 45000 },
                { id: "eid290", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer2}', [] ], ""], position: 56677 }            ]
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
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
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
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text5',
                        text: 'C',
                        align: 'center',
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
                        rect: ['0px', '5px', '27px', '19px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text4',
                        text: 'B',
                        align: 'center',
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'A',
                        text: 'A<br><br><br>',
                        align: 'center',
                        rect: ['0px', '3px', '27px', '19px', 'auto', 'auto']
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
