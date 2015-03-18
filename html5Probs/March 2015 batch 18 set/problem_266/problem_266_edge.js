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
                id: '_266pic',
                type: 'image',
                rect: ['-6px', '-48px','511px','348px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"266pic.png",'0px','0px']
            },
            {
                id: 'Question_Text',
                type: 'text',
                rect: ['15px', '319px','219px','42px','auto', 'auto'],
                text: "What is the value of x?",
                align: "left",
                font: ['Georgia, Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['15px', '380px','auto','auto','auto', 'auto']
            },
            {
                id: 'AnswerDText',
                type: 'text',
                rect: ['62px', '505px','101px','20px','auto', 'auto'],
                text: "32",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['62px', '469px','101px','19px','auto', 'auto'],
                text: "35",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerBText',
                type: 'text',
                rect: ['62px', '437px','112px','19px','auto', 'auto'],
                text: "40",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['62px', '402px','109px','19px','auto', 'auto'],
                text: "47",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
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
                id: 'TutorialText',
                display: 'none',
                type: 'text',
                rect: ['260px', '49px','237px','187px','auto', 'auto'],
                text: "Let's pretend your hint starts here at 0:10. It does not really matter where the hints start and end, as long as they don't overlap. Don't worry that the X and Checks are showing up either - it's just because I set their timeline to 5 seconds in the symbol. They won't appear in the final animation.<br><br>This rectangle is a space for you to draw your animation. An example will follow in hint 2.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'height',
                display: 'block',
                type: 'text',
                rect: ['241px', '102px','19px','27px','auto', 'auto'],
                text: "102",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'width',
                display: 'block',
                type: 'text',
                rect: ['270px', '64px','68px','13px','auto', 'auto'],
                text: "241",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'x',
                display: 'none',
                type: 'text',
                rect: ['359px', '112px','40px','31px','auto', 'auto'],
                text: "X",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 30, "rgba(248,1,1,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerEText',
                type: 'text',
                rect: ['62px', '541px','101px','20px','auto', 'auto'],
                text: "30",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Y',
                type: 'text',
                rect: ['377px', '355px','50px','19px','auto', 'auto'],
                text: "y",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(141,7,36,1.00)", "normal", "none", "italic"]
            },
            {
                id: 'z',
                type: 'text',
                rect: ['402px', '257px','36px','20px','auto', 'auto'],
                text: "z",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(141,7,36,1)", "normal", "none", "italic"]
            },
            {
                id: '_90',
                display: 'none',
                type: 'text',
                rect: ['386px', '334px','36px','19px','auto', 'auto'],
                text: "90",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(141,7,36,1.00)", "normal", "none", "italic"]
            },
            {
                id: 'Hint3_text1',
                type: 'text',
                rect: ['335px', '72px','205px','65px','auto', 'auto'],
                text: "We know the sum of the interior angles of the triangle is 180 degrees",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(142,15,43,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Hint3_text2',
                display: 'block',
                type: 'text',
                rect: ['307px', '161px','179px','33px','auto', 'auto'],
                text: "x+z+90=180",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(142,15,43,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint3_text3',
                display: 'block',
                type: 'text',
                rect: ['319px', '200px','156px','65px','auto', 'auto'],
                text: "x+z=180-90<br>x+z=90",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(142,15,43,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint3_text4',
                display: 'block',
                type: 'text',
                rect: ['342px', '275px','163px','65px','auto', 'auto'],
                text: "Now try to find z",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(142,15,43,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Hint4_text1',
                display: 'none',
                type: 'text',
                rect: ['372px', '303px','179px','65px','auto', 'auto'],
                text: "4x-15+z=180",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 22, "rgba(142,15,43,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Hint6_RoundRect',
                display: 'none',
                type: 'rect',
                rect: ['428px', '340px','111px','37px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(144,182,245,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Hint6_text4',
                display: 'none',
                type: 'text',
                rect: ['348px', '248px','50px','37px','auto', 'auto'],
                text: "x+",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 22, "rgba(151,144,146,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Hint6_text3',
                display: 'none',
                type: 'text',
                rect: ['433px', '349px','108px','20px','auto', 'auto'],
                text: "180-4x+15",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 22, "rgba(142,15,43,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint5_text1',
                display: 'none',
                type: 'text',
                rect: ['389px', '349px','156px','47px','auto', 'auto'],
                text: "z=180-4x+15",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 22, "rgba(142,15,43,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint6_text1',
                display: 'none',
                type: 'text',
                rect: ['383px', '389px','171px','89px','auto', 'auto'],
                text: "Let's substitute z in the above equation: x+z=90",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(142,15,43,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint6_text2',
                display: 'none',
                type: 'text',
                rect: ['326px', '221px','143px','54px','auto', 'auto'],
                text: "x+z=90",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(151,144,146,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint6_text5',
                display: 'none',
                type: 'text',
                rect: ['518px', '248px','50px','37px','auto', 'auto'],
                text: "=90",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 22, "rgba(151,144,146,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint7_text1',
                display: 'none',
                type: 'text',
                rect: ['382px', '300px','156px','47px','auto', 'auto'],
                text: "Solve for x<br>",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 22, "rgba(142,15,43,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Hint7_text2',
                display: 'none',
                type: 'text',
                rect: ['361px', '333px','205px','56px','auto', 'auto'],
                text: "(x-4x)+180+15=90",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 22, "rgba(142,15,43,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint7_text3',
                display: 'none',
                type: 'text',
                rect: ['361px', '364px','205px','32px','auto', 'auto'],
                text: "-3x+195=90",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 22, "rgba(151,144,146,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint7_text4',
                display: 'none',
                type: 'text',
                rect: ['366px', '397px','205px','47px','auto', 'auto'],
                text: "-3x=90-195",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 22, "rgba(151,144,146,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint7_text5',
                display: 'none',
                type: 'text',
                rect: ['366px', '427px','205px','47px','auto', 'auto'],
                text: "-3x=-105",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 22, "rgba(151,144,146,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint7_text6',
                display: 'none',
                type: 'text',
                rect: ['391px', '464px','156px','37px','auto', 'auto'],
                text: "x=35",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 22, "rgba(151,144,146,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint8',
                display: 'none',
                type: 'text',
                rect: ['379px', '510px','171px','56px','auto', 'auto'],
                text: "Choose (C)",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 22, "rgba(142,15,43,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'question',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/question.ogg']
            },
            {
                id: 'hint1',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1.ogg']
            },
            {
                id: 'hint2',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2.ogg']
            },
            {
                id: 'hint3',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint3.ogg']
            },
            {
                id: 'hint5',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint5.ogg']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['170px', '157px','36px','20px','auto', 'auto'],
                text: "x",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['188px', '57px','77px','42px','auto', 'auto'],
                text: "4x-15",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'answerhint2',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answerhint2.ogg']
            },
            {
                id: 'hint42',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint42.ogg']
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
            "${_Hint7_text6}": [
                ["style", "top", '464px'],
                ["style", "display", 'none'],
                ["style", "left", '391px'],
                ["color", "color", 'rgba(142,15,43,1.00)']
            ],
            "${_x}": [
                ["style", "top", '112px'],
                ["style", "display", 'none'],
                ["style", "left", '359px'],
                ["style", "font-size", '30px']
            ],
            "${_Hint6_text3}": [
                ["style", "top", '348px'],
                ["color", "color", 'rgba(142,15,43,1)'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '431px'],
                ["style", "width", '108px']
            ],
            "${_AnswerDText}": [
                ["style", "top", '505px'],
                ["style", "left", '62px'],
                ["style", "width", '101px']
            ],
            "${_Hint7_text4}": [
                ["color", "color", 'rgba(142,15,43,1.00)'],
                ["style", "top", '397px'],
                ["style", "left", '366px'],
                ["style", "display", 'none']
            ],
            "${_Question_Text}": [
                ["style", "top", '319px'],
                ["style", "width", '219px'],
                ["style", "height", '42px'],
                ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
                ["style", "left", '15px'],
                ["style", "font-size", '16px']
            ],
            "${__266pic}": [
                ["style", "top", '-48px'],
                ["style", "height", '348px'],
                ["style", "left", '-6px'],
                ["style", "width", '511px']
            ],
            "${_Hint7_text3}": [
                ["style", "top", '364px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(142,15,43,1.00)'],
                ["style", "left", '361px'],
                ["style", "height", '32px']
            ],
            "${_Hint6_RoundRect}": [
                ["color", "background-color", 'rgba(144,182,245,1.00)'],
                ["style", "display", 'none'],
                ["style", "top", '340px'],
                ["style", "left", '428px'],
                ["style", "width", '111px']
            ],
            "${_Hint7_text2}": [
                ["style", "top", '333px'],
                ["color", "color", 'rgba(142,15,43,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '361px'],
                ["style", "font-size", '22px']
            ],
            "${_Hint6_text2}": [
                ["style", "top", '221px'],
                ["style", "left", '326px'],
                ["style", "display", 'none']
            ],
            "${__90}": [
                ["style", "top", '157px'],
                ["color", "color", 'rgba(141,7,36,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '229px'],
                ["style", "display", 'none']
            ],
            "${_AnswerBText}": [
                ["style", "top", '437px'],
                ["style", "left", '62px'],
                ["style", "width", '112px']
            ],
            "${_Hint6_text5}": [
                ["style", "top", '248px'],
                ["style", "left", '518px'],
                ["style", "display", 'none']
            ],
            "${_Answers}": [
                ["style", "top", '380px'],
                ["style", "left", '15px']
            ],
            "${_AnswerCText}": [
                ["style", "top", '469px'],
                ["style", "left", '62px'],
                ["style", "width", '101px']
            ],
            "${_Hint3_text1}": [
                ["style", "top", '72px'],
                ["style", "height", '65px'],
                ["style", "font-style", 'normal'],
                ["color", "color", 'rgba(142,15,43,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '335px'],
                ["style", "width", '205px']
            ],
            "${_AnswerAText}": [
                ["style", "top", '402px'],
                ["style", "text-align", 'left'],
                ["style", "height", '19px'],
                ["style", "width", '109px'],
                ["style", "left", '62px'],
                ["style", "font-size", '12px']
            ],
            "${_Y}": [
                ["style", "top", '155px'],
                ["style", "font-style", 'italic'],
                ["color", "color", 'rgba(141,7,36,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '240px'],
                ["style", "font-size", '16px']
            ],
            "${_Hint6_text1}": [
                ["style", "display", 'none'],
                ["style", "font-style", 'normal'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '18px']
            ],
            "${_Hint5_text1}": [
                ["style", "top", '349px'],
                ["style", "left", '389px'],
                ["style", "display", 'none']
            ],
            "${_Hint8}": [
                ["style", "top", '510px'],
                ["color", "color", 'rgba(142,15,43,1.00)'],
                ["style", "left", '379px'],
                ["style", "display", 'none']
            ],
            "${_width}": [
                ["style", "top", '64px'],
                ["style", "font-size", '12px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(8,8,8,1.00)'],
                ["style", "height", '13px'],
                ["style", "left", '270px'],
                ["style", "width", '68px']
            ],
            "${_Hint4_text1}": [
                ["style", "text-align", 'center'],
                ["style", "font-style", 'normal'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(142,15,43,1.00)'],
                ["style", "font-size", '22px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '600px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_Hint3_text2}": [
                ["style", "top", '161px'],
                ["style", "height", '33px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(142,15,43,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '307px'],
                ["style", "font-size", '18px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Hint3_text4}": [
                ["style", "top", '275px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '342px'],
                ["color", "color", 'rgba(142,15,43,1.00)']
            ],
            "${_AnswerEText}": [
                ["style", "top", '541px'],
                ["style", "left", '62px'],
                ["style", "width", '101px']
            ],
            "${_Hint7_text5}": [
                ["color", "color", 'rgba(142,15,43,1.00)'],
                ["style", "top", '427px'],
                ["style", "left", '366px'],
                ["style", "display", 'none']
            ],
            "${_Text3}": [
                ["style", "top", '57px'],
                ["style", "left", '188px'],
                ["style", "width", '77px']
            ],
            "${_TutorialText}": [
                ["style", "top", '51px'],
                ["style", "height", '187px'],
                ["style", "opacity", '1'],
                ["style", "left", '260px'],
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '170px'],
                ["style", "top", '157px']
            ],
            "${_height}": [
                ["style", "top", '102px'],
                ["style", "font-size", '12px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(4,4,4,1.00)'],
                ["style", "height", '31px'],
                ["style", "left", '241px'],
                ["style", "width", '57px']
            ],
            "${_Hint3_text3}": [
                ["style", "top", '200px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '319px'],
                ["color", "color", 'rgba(142,15,43,1)']
            ],
            "${_z}": [
                ["color", "color", 'rgba(141,7,36,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '250px'],
                ["style", "top", '111px']
            ],
            "${_Hint6_text4}": [
                ["style", "top", '248px'],
                ["style", "display", 'none'],
                ["style", "left", '348px'],
                ["color", "color", 'rgba(151,144,146,1.00)']
            ],
            "${_Hint7_text1}": [
                ["style", "top", '300px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(142,15,43,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '382px'],
                ["style", "font-size", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 83000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 10000,
                "Hint 2": 17000,
                "Hint 3": 23483,
                "Hint 4": 43000,
                "Hint 5": 50524,
                "Hint 6": 55000,
                "Answer": 79000
            },
            timeline: [
                { id: "eid228", tween: [ "style", "${_Hint3_text4}", "opacity", '0', { fromValue: '0'}], position: 38750, duration: 0 },
                { id: "eid229", tween: [ "style", "${_Hint3_text4}", "opacity", '1', { fromValue: '0'}], position: 40000, duration: 0 },
                { id: "eid308", tween: [ "style", "${_Hint7_text1}", "opacity", '1', { fromValue: '1'}], position: 64500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid278", tween: [ "style", "${_Hint3_text3}", "display", 'none', { fromValue: 'block'}], position: 58000, duration: 0 },
                { id: "eid298", tween: [ "style", "${_Hint6_text3}", "left", '397px', { fromValue: '431px'}], position: 60000, duration: 2500, easing: "easeInCubic" },
                { id: "eid301", tween: [ "style", "${_Hint6_RoundRect}", "top", '248px', { fromValue: '340px'}], position: 60000, duration: 2500, easing: "easeInOutQuad" },
                { id: "eid168", tween: [ "color", "${_z}", "color", 'rgba(151,144,146,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(141,7,36,1)'}], position: 17000, duration: 1000 },
                { id: "eid191", tween: [ "style", "${_z}", "top", '111px', { fromValue: '111px'}], position: 16500, duration: 0 },
                { id: "eid195", tween: [ "style", "${__90}", "left", '229px', { fromValue: '229px'}], position: 29990, duration: 0 },
                { id: "eid317", tween: [ "color", "${_Hint7_text2}", "color", 'rgba(142,15,43,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1.00)'}], position: 68000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid316", tween: [ "color", "${_Hint7_text2}", "color", 'rgba(151,144,146,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1.00)'}], position: 72000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid179", tween: [ "style", "${__90}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid180", tween: [ "style", "${__90}", "display", 'block', { fromValue: 'none'}], position: 19500, duration: 0 },
                { id: "eid330", tween: [ "style", "${__90}", "display", 'block', { fromValue: 'block'}], position: 27978, duration: 0 },
                { id: "eid244", tween: [ "style", "${__90}", "display", 'block', { fromValue: 'block'}], position: 43000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Y}", "opacity", '1', { fromValue: '0.000000'}], position: 14000, duration: 1000 },
                { id: "eid177", tween: [ "style", "${_Y}", "opacity", '0', { fromValue: '1'}], position: 18500, duration: 1000 },
                { id: "eid272", tween: [ "style", "${_Hint5_text1}", "display", 'block', { fromValue: 'none'}], position: 52000, duration: 0 },
                { id: "eid284", tween: [ "style", "${_Hint5_text1}", "display", 'none', { fromValue: 'block'}], position: 60000, duration: 0 },
                { id: "eid111", tween: [ "style", "${_height}", "height", '31px', { fromValue: '31px'}], position: 39000, duration: 0 },
                { id: "eid281", tween: [ "style", "${_Hint6_text2}", "display", 'block', { fromValue: 'none'}], position: 58000, duration: 0 },
                { id: "eid305", tween: [ "style", "${_Hint6_text2}", "display", 'none', { fromValue: 'block'}], position: 65250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid285", tween: [ "style", "${_Hint6_text3}", "display", 'block', { fromValue: 'none'}], position: 60000, duration: 0 },
                { id: "eid215", tween: [ "style", "${_Hint3_text2}", "opacity", '0', { fromValue: '0'}], position: 33000, duration: 0 },
                { id: "eid216", tween: [ "style", "${_Hint3_text2}", "opacity", '1', { fromValue: '0'}], position: 34000, duration: 0 },
                { id: "eid246", tween: [ "style", "${_Hint3_text4}", "display", 'none', { fromValue: 'block'}], position: 43000, duration: 0 },
                { id: "eid315", tween: [ "color", "${_Hint7_text1}", "color", 'rgba(142,15,43,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1.00)'}], position: 68000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid314", tween: [ "color", "${_Hint7_text1}", "color", 'rgba(151,144,146,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1.00)'}], position: 72000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid275", tween: [ "style", "${_Hint6_text1}", "display", 'block', { fromValue: 'none'}], position: 55000, duration: 0 },
                { id: "eid279", tween: [ "style", "${_Hint6_text1}", "display", 'none', { fromValue: 'block'}], position: 60000, duration: 0 },
                { id: "eid302", tween: [ "style", "${_Hint6_RoundRect}", "left", '396px', { fromValue: '428px'}], position: 60000, duration: 2500, easing: "easeInQuad" },
                { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
                { id: "eid219", tween: [ "style", "${_TutorialText}", "display", 'none', { fromValue: 'block'}], position: 39000, duration: 0 },
                { id: "eid303", tween: [ "style", "${_Hint6_text4}", "display", 'block', { fromValue: 'none'}], position: 62500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid321", tween: [ "style", "${_Hint7_text4}", "display", 'block', { fromValue: 'none'}], position: 75000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid310", tween: [ "style", "${_Hint7_text2}", "display", 'block', { fromValue: 'none'}], position: 68000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid309", tween: [ "style", "${_Hint7_text2}", "display", 'block', { fromValue: 'block'}], position: 68750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid274", tween: [ "style", "${_Hint6_RoundRect}", "display", 'block', { fromValue: 'none'}], position: 55000, duration: 0 },
                { id: "eid311", tween: [ "style", "${_Hint6_RoundRect}", "display", 'none', { fromValue: 'block'}], position: 68000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid92", tween: [ "style", "${_width}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid104", tween: [ "style", "${_height}", "left", '305px', { fromValue: '241px'}], position: 38000, duration: 1000 },
                { id: "eid194", tween: [ "style", "${_Y}", "left", '240px', { fromValue: '240px'}], position: 16500, duration: 0 },
                { id: "eid304", tween: [ "style", "${_Hint6_text5}", "display", 'block', { fromValue: 'none'}], position: 62500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid322", tween: [ "color", "${_Hint7_text4}", "color", 'rgba(142,15,43,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1.00)'}], position: 75000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid323", tween: [ "color", "${_Hint7_text4}", "color", 'rgba(151,144,146,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1.00)'}], position: 77000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid329", tween: [ "style", "${_Hint8}", "display", 'block', { fromValue: 'none'}], position: 82000, duration: 0 },
                { id: "eid189", tween: [ "color", "${__90}", "color", 'rgba(141,12,40,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(141,7,36,1)'}], position: 19500, duration: 2478 },
                { id: "eid331", tween: [ "color", "${__90}", "color", 'rgba(151,144,146,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(141,12,40,1.00)'}], position: 29990, duration: 0 },
                { id: "eid118", tween: [ "style", "${_height}", "font-size", '20px', { fromValue: '12px'}], position: 38000, duration: 1000 },
                { id: "eid213", tween: [ "style", "${_Hint3_text1}", "opacity", '0', { fromValue: '0'}], position: 29000, duration: 0 },
                { id: "eid214", tween: [ "style", "${_Hint3_text1}", "opacity", '1', { fromValue: '0'}], position: 31012, duration: 0 },
                { id: "eid239", tween: [ "style", "${_Hint3_text1}", "opacity", '0', { fromValue: '1'}], position: 43022, duration: 0 },
                { id: "eid165", tween: [ "style", "${_z}", "opacity", '1', { fromValue: '0.000000'}], position: 15000, duration: 1000 },
                { id: "eid328", tween: [ "color", "${_Hint7_text6}", "color", 'rgba(142,15,43,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1.00)'}], position: 79000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid241", tween: [ "color", "${_Hint3_text2}", "color", 'rgba(142,15,43,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1)'}], position: 36000, duration: 0 },
                { id: "eid240", tween: [ "color", "${_Hint3_text2}", "color", 'rgba(151,144,146,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1)'}], position: 43000, duration: 0 },
                { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 31000, duration: 3000 },
                { id: "eid105", tween: [ "style", "${_height}", "top", '114px', { fromValue: '102px'}], position: 38000, duration: 1000 },
                { id: "eid133", tween: [ "color", "${_height}", "color", 'rgba(4,4,4,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(4,4,4,1)'}], position: 38000, duration: 0 },
                { id: "eid136", tween: [ "color", "${_height}", "color", 'rgba(255,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(4,4,4,1)'}], position: 39000, duration: 0 },
                { id: "eid196", tween: [ "style", "${__90}", "top", '157px', { fromValue: '157px'}], position: 29990, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid327", tween: [ "style", "${_Hint7_text6}", "display", 'block', { fromValue: 'none'}], position: 79000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid325", tween: [ "color", "${_Hint7_text5}", "color", 'rgba(142,15,43,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1.00)'}], position: 77000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid326", tween: [ "color", "${_Hint7_text5}", "color", 'rgba(151,144,146,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1.00)'}], position: 79000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid319", tween: [ "color", "${_Hint7_text3}", "color", 'rgba(142,15,43,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1.00)'}], position: 72000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid320", tween: [ "color", "${_Hint7_text3}", "color", 'rgba(151,144,146,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1.00)'}], position: 75000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid277", tween: [ "style", "${_Hint3_text2}", "display", 'none', { fromValue: 'block'}], position: 58000, duration: 0 },
                { id: "eid271", tween: [ "style", "${_Hint4_text1}", "display", 'block', { fromValue: 'none'}], position: 49000, duration: 0 },
                { id: "eid273", tween: [ "style", "${_Hint4_text1}", "display", 'block', { fromValue: 'block'}], position: 55000, duration: 0 },
                { id: "eid276", tween: [ "style", "${_Hint4_text1}", "display", 'none', { fromValue: 'block'}], position: 58000, duration: 0 },
                { id: "eid190", tween: [ "style", "${_z}", "left", '250px', { fromValue: '250px'}], position: 16500, duration: 0 },
                { id: "eid248", tween: [ "color", "${_Hint3_text3}", "color", 'rgba(142,15,43,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1)'}], position: 36500, duration: 0 },
                { id: "eid247", tween: [ "color", "${_Hint3_text3}", "color", 'rgba(151,144,146,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1)'}], position: 43000, duration: 0 },
                { id: "eid306", tween: [ "style", "${_Hint7_text1}", "display", 'block', { fromValue: 'none'}], position: 65250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid297", tween: [ "style", "${_Hint6_text3}", "top", '248px', { fromValue: '348px'}], position: 60000, duration: 2500, easing: "easeInOutQuad" },
                { id: "eid93", tween: [ "style", "${_height}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid95", tween: [ "style", "${_height}", "display", 'none', { fromValue: 'none'}], position: 38000, duration: 0 },
                { id: "eid128", tween: [ "style", "${_height}", "display", 'none', { fromValue: 'none'}], position: 39000, duration: 0 },
                { id: "eid313", tween: [ "color", "${_Hint6_text3}", "color", 'rgba(151,144,146,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,15,43,1)'}], position: 68000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid324", tween: [ "style", "${_Hint7_text5}", "display", 'block', { fromValue: 'none'}], position: 77000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid184", tween: [ "style", "${__90}", "opacity", '1', { fromValue: '0'}], position: 19500, duration: 1000 },
                { id: "eid112", tween: [ "style", "${_height}", "width", '57px', { fromValue: '57px'}], position: 39000, duration: 0 },
                { id: "eid193", tween: [ "style", "${_Y}", "top", '155px', { fromValue: '155px'}], position: 16500, duration: 0 },
                { id: "eid130", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid318", tween: [ "style", "${_Hint7_text3}", "display", 'block', { fromValue: 'none'}], position: 72000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid217", tween: [ "style", "${_Hint3_text3}", "opacity", '0', { fromValue: '0'}], position: 35000, duration: 0 },
                { id: "eid218", tween: [ "style", "${_Hint3_text3}", "opacity", '1', { fromValue: '0'}], position: 36500, duration: 0 },
                { id: "eid333", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid335", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 10000 },
                { id: "eid336", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 17000 },
                { id: "eid337", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 23483.075496055 },
                { id: "eid341", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint42}', [] ], ""], position: 43000 },
                { id: "eid339", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint5}', [] ], ""], position: 50523.504520367 },
                { id: "eid340", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answerhint2}', [] ], ""], position: 79000 }            ]
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
                        type: 'text',
                        rect: ['0px', '3px', '27px', '19px', 'auto', 'auto'],
                        id: 'A',
                        text: 'A<br><br><br>',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/check2.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
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
