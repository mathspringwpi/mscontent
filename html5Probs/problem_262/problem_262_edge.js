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
                id: 'AnswerDText',
                type: 'text',
                rect: ['71px', '296px','101px','20px','auto', 'auto'],
                text: "40",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['71px', '260px','101px','19px','auto', 'auto'],
                text: "35",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerBText',
                type: 'text',
                rect: ['71px', '228px','112px','19px','auto', 'auto'],
                text: "32",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['68px', '194px','109px','19px','auto', 'auto'],
                text: "30<br>",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerEText',
                type: 'text',
                rect: ['71px', '329px','101px','20px','auto', 'auto'],
                text: "47",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'picture',
                type: 'image',
                rect: ['-270px', '-59px','751px','401px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"picture.png",'0px','0px']
            },
            {
                id: 'hint7b',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint7b.mp3','media/hint7b.ogg']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['69px', '58px','26px','19px','auto', 'auto'],
                text: "x",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Question_Text',
                type: 'text',
                rect: ['21px', '325px','219px','44px','auto', 'auto'],
                text: "What is the value of x?",
                align: "left",
                font: ['Georgia, Times New Roman, Times, serif', 18, "rgba(0,0,0,1)", "normal", "none", "normal"]
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
                id: 'Hint1_z',
                display: 'none',
                type: 'text',
                rect: ['121px', '133px','40px','20px','auto', 'auto'],
                text: "z",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(126,126,126,1.00)", "normal", "none", ""]
            },
            {
                id: 'Hint1_y',
                display: 'none',
                type: 'text',
                rect: ['160px', '303px','40px','19px','auto', 'auto'],
                text: "y",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(126,126,126,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint2_90',
                display: 'none',
                type: 'text',
                rect: ['152px', '305px','40px','30px','auto', 'auto'],
                text: "90<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(126,20,20,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Hint4_text1',
                display: 'none',
                type: 'text',
                rect: ['308px', '213px','239px','34px','auto', 'auto'],
                text: "z+3x+10=180",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(126,20,20,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint3_text1',
                display: 'none',
                type: 'text',
                rect: ['308px', '107px','166px','29px','auto', 'auto'],
                text: "x+z+90=180",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(126,20,20,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Hint7_text1',
                display: 'none',
                type: 'text',
                rect: ['308px', '180px','26px','19px','auto', 'auto'],
                text: "x+",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(126,126,126,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint3_text2',
                display: 'none',
                type: 'text',
                rect: ['308px', '145px','112px','29px','auto', 'auto'],
                text: "x+z=90",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(126,20,20,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint5',
                display: 'none',
                type: 'text',
                rect: ['314px', '312px','166px','29px','auto', 'auto'],
                text: "z=180-3x-10",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(126,20,20,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint7_redellipse',
                display: 'none',
                type: 'ellipse',
                rect: ['319px', '229px','101px','50px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 1,
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [3,"rgba(246,2,2,1.00)","solid"]
            },
            {
                id: 'Hint7_text2',
                display: 'none',
                type: 'text',
                rect: ['334px', '180px','112px','20px','auto', 'auto'],
                text: "180-3x-10",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(126,20,20,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Hint7_text3',
                display: 'none',
                type: 'text',
                rect: ['433px', '180px','66px','20px','auto', 'auto'],
                text: "=90",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(126,126,126,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint7_text6',
                display: 'none',
                type: 'text',
                rect: ['308px', '210px','190px','29px','auto', 'auto'],
                text: "(x-3x)=90+10-180",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(126,126,126,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint7_text7',
                display: 'none',
                type: 'text',
                rect: ['379px', '242px','134px','29px','auto', 'auto'],
                text: "-2x=-80",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(126,20,20,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint8_text2',
                display: 'none',
                type: 'text',
                rect: ['390px', '314px','112px','29px','auto', 'auto'],
                text: "Choose (D)",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(126,126,126,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint8_text1',
                display: 'none',
                type: 'text',
                rect: ['390px', '279px','101px','29px','auto', 'auto'],
                text: "x=40",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 20, "rgba(126,126,126,1)", "normal", "none", "normal"]
            },
            {
                id: 'Group',
                type: 'group',
                rect: ['148px', '127px','65','19','auto', 'auto'],
                c: [
                {
                    id: 'Text2',
                    type: 'text',
                    rect: ['0px', '0px','65px','19px','auto', 'auto'],
                    text: "3x+10",
                    align: "left",
                    font: ['Georgia, Times New Roman, Times, serif', 20, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['-7px', '24px','123px','3px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                }]
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
                id: 'hint4',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint4.ogg']
            },
            {
                id: 'hint5',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint5.ogg']
            },
            {
                id: 'hint6',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint6.ogg']
            },
            {
                id: 'hint7',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint7.ogg']
            },
            {
                id: 'question',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/question.ogg']
            },
            {
                id: 'answer',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer.mp3','media/answer.ogg']
            },
            {
                id: 'Arrow3',
                type: 'rect',
                rect: ['337', '180','auto','auto','auto', 'auto']
            },
            {
                id: 'Ellipse',
                display: 'none',
                type: 'ellipse',
                rect: ['172px', '267px','156px','151px','auto', 'auto'],
                clip: ['rect(0px 164px 79px 0px)'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [3,"rgba(246,3,3,1.00)","solid"]
            }],
            symbolInstances: [
            {
                id: 'Answers',
                symbolName: 'Answers_1',
                autoPlay: {

                }
            },
            {
                id: 'Arrow3',
                symbolName: 'Arrow',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Hint1_y}": [
                ["style", "display", 'none'],
                ["style", "top", '116px'],
                ["style", "left", '69px'],
                ["style", "font-size", '18px']
            ],
            "${_AnswerEText}": [
                ["style", "top", '536px'],
                ["style", "left", '62px'],
                ["style", "width", '101px']
            ],
            "${_Hint4_text1}": [
                ["style", "top", '213px'],
                ["color", "color", 'rgba(126,20,20,1)'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '308px'],
                ["style", "height", '34px']
            ],
            "${_Hint7_redellipse}": [
                ["style", "top", '229px'],
                ["color", "border-color", 'rgba(246,2,2,1.00)'],
                ["style", "border-width", '3px'],
                ["style", "border-style", 'solid'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '319px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_Hint7_text6}": [
                ["style", "top", '210px'],
                ["style", "font-size", '20px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(126,20,20,1.00)'],
                ["style", "left", '308px'],
                ["style", "width", '190px']
            ],
            "${_Hint5}": [
                ["style", "top", '247px'],
                ["style", "overflow", 'visible'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '308px']
            ],
            "${_Text2}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_Hint7_text7}": [
                ["color", "color", 'rgba(126,20,20,1)'],
                ["style", "display", 'none'],
                ["style", "left", '379px'],
                ["style", "top", '242px']
            ],
            "${_AnswerCText}": [
                ["style", "top", '467px'],
                ["style", "left", '62px'],
                ["style", "width", '101px']
            ],
            "${_Hint3_text1}": [
                ["style", "top", '107px'],
                ["color", "color", 'rgba(126,20,20,1.00)'],
                ["style", "height", '29px'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '308px'],
                ["style", "font-size", '20px']
            ],
            "${_AnswerAText}": [
                ["style", "top", '401px'],
                ["style", "text-align", 'left'],
                ["style", "height", '19px'],
                ["style", "font-size", '12px'],
                ["style", "left", '59px'],
                ["style", "width", '109px']
            ],
            "${_picture}": [
                ["style", "height", '401px'],
                ["style", "top", '-59px'],
                ["style", "left", '-270px'],
                ["style", "width", '751px']
            ],
            "${_Answers}": [
                ["style", "top", '375px'],
                ["style", "left", '15px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '24px'],
                ["style", "left", '-7px'],
                ["style", "height", '3px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_Hint8_text2}": [
                ["style", "top", '314px'],
                ["style", "height", '29px'],
                ["style", "display", 'none'],
                ["style", "left", '390px'],
                ["color", "color", 'rgba(126,20,20,1.00)']
            ],
            "${_AnswerDText}": [
                ["style", "top", '503px'],
                ["style", "left", '62px'],
                ["style", "width", '101px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_Hint2_90}": [
                ["style", "top", '118px'],
                ["style", "height", '30px'],
                ["color", "color", 'rgba(126,20,20,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '68px'],
                ["style", "display", 'none']
            ],
            "${_Question_Text}": [
                ["style", "top", '325px'],
                ["style", "font-size", '18px'],
                ["style", "height", '44px'],
                ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
                ["style", "left", '21px'],
                ["style", "width", '219px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '69px'],
                ["style", "top", '58px']
            ],
            "${_Hint7_text1}": [
                ["style", "top", '180px'],
                ["style", "left", '308px'],
                ["style", "display", 'none']
            ],
            "${_Hint8_text1}": [
                ["style", "top", '279px'],
                ["style", "display", 'none'],
                ["style", "left", '390px'],
                ["color", "color", 'rgba(126,20,20,1.00)']
            ],
            "${_Hint7_text3}": [
                ["style", "top", '180px'],
                ["style", "left", '433px'],
                ["style", "display", 'none']
            ],
            "${_Group}": [
                ["style", "left", '148px'],
                ["style", "top", '127px']
            ],
            "${_Hint1_z}": [
                ["style", "top", '133px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(126,126,126,1.00)'],
                ["style", "left", '121px'],
                ["style", "font-size", '18px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '102px'],
                ["style", "top", '72px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(246,3,3,1.00)'],
                ["style", "clip", [0,164,79,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_Hint3_text2}": [
                ["color", "color", 'rgba(126,20,20,1)'],
                ["style", "top", '145px'],
                ["style", "left", '308px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Arrow3}": [
                ["style", "top", '169px'],
                ["style", "opacity", '0'],
                ["style", "left", '331px']
            ],
            "${_AnswerBText}": [
                ["style", "top", '435px'],
                ["style", "left", '62px'],
                ["style", "width", '112px']
            ],
            "${_Hint7_text2}": [
                ["style", "top", '180px'],
                ["color", "color", 'rgba(126,20,20,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '334px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 122071,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 10000,
                "Hint 2": 23000,
                "Hint 3": 30000,
                "Hint 4": 49000,
                "Hint 5": 60000,
                "Hint 6": 72000,
                "Hint 7": 85000,
                "Answer": 118071
            },
            timeline: [
                { id: "eid171", tween: [ "style", "${_Hint2_90}", "opacity", '1', { fromValue: '1'}], position: 27000, duration: 0 },
                { id: "eid345", tween: [ "style", "${_AnswerEText}", "left", '62px', { fromValue: '62px'}], position: 0, duration: 0 },
                { id: "eid349", tween: [ "style", "${_Answers}", "left", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
                { id: "eid228", tween: [ "color", "${_Hint7_text2}", "color", 'rgba(126,126,126,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1)'}], position: 100570, duration: 7043, easing: "easeInQuad" },
                { id: "eid163", tween: [ "style", "${_Hint1_z}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid340", tween: [ "style", "${_AnswerDText}", "top", '503px', { fromValue: '503px'}], position: 0, duration: 0 },
                { id: "eid343", tween: [ "style", "${_AnswerAText}", "left", '59px', { fromValue: '59px'}], position: 0, duration: 0 },
                { id: "eid280", tween: [ "style", "${_Hint7_redellipse}", "opacity", '1', { fromValue: '0'}], position: 93000, duration: 2472, easing: "easeInQuad" },
                { id: "eid312", tween: [ "style", "${_Hint7_redellipse}", "opacity", '0', { fromValue: '1'}], position: 96102, duration: 1397, easing: "easeInQuad" },
                { id: "eid374", tween: [ "style", "${_Ellipse}", "top", '72px', { fromValue: '72px'}], position: 56534, duration: 0 },
                { id: "eid326", tween: [ "style", "${_Hint4_text1}", "opacity", '0', { fromValue: '1'}], position: 90000, duration: 3000, easing: "easeInQuad" },
                { id: "eid332", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 53000, duration: 2000 },
                { id: "eid333", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 69000, duration: 1000 },
                { id: "eid354", tween: [ "style", "${_Hint1_y}", "top", '116px', { fromValue: '116px'}], position: 25338, duration: 0 },
                { id: "eid239", tween: [ "style", "${_Hint7_text6}", "display", 'block', { fromValue: 'none'}], position: 112071, duration: 0, easing: "easeInQuad" },
                { id: "eid180", tween: [ "style", "${_Hint4_text1}", "display", 'block', { fromValue: 'none'}], position: 57000, duration: 0 },
                { id: "eid205", tween: [ "style", "${_Hint4_text1}", "display", 'none', { fromValue: 'block'}], position: 94000, duration: 0, easing: "easeInQuad" },
                { id: "eid250", tween: [ "color", "${_Hint8_text2}", "color", 'rgba(126,20,20,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1.00)'}], position: 120071, duration: 0, easing: "easeInQuad" },
                { id: "eid344", tween: [ "style", "${_AnswerAText}", "top", '401px', { fromValue: '401px'}], position: 0, duration: 0 },
                { id: "eid170", tween: [ "style", "${_Hint2_90}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid330", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'none'}], position: 53000, duration: 0 },
                { id: "eid375", tween: [ "style", "${_Hint2_90}", "left", '69px', { fromValue: '68px'}], position: 28930, duration: 26 },
                { id: "eid384", tween: [ "style", "${_Hint2_90}", "left", '68px', { fromValue: '69px'}], position: 28956, duration: 258 },
                { id: "eid185", tween: [ "style", "${_Hint5}", "display", 'block', { fromValue: 'none'}], position: 66113, duration: 0 },
                { id: "eid322", tween: [ "style", "${_Arrow3}", "top", '169px', { fromValue: '169px'}], position: 93000, duration: 0, easing: "easeInQuad" },
                { id: "eid341", tween: [ "style", "${_AnswerCText}", "left", '62px', { fromValue: '62px'}], position: 0, duration: 0 },
                { id: "eid168", tween: [ "style", "${_Hint1_y}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid169", tween: [ "style", "${_Hint1_y}", "display", 'none', { fromValue: 'block'}], position: 26000, duration: 0 },
                { id: "eid308", tween: [ "style", "${_Hint7_text2}", "left", '329px', { fromValue: '334px'}], position: 97499, duration: 17, easing: "easeInQuad" },
                { id: "eid309", tween: [ "style", "${_Hint7_text2}", "left", '337px', { fromValue: '329px'}], position: 97516, duration: 3054, easing: "easeInQuad" },
                { id: "eid325", tween: [ "style", "${_Hint3_text1}", "opacity", '0', { fromValue: '1'}], position: 90000, duration: 3000, easing: "easeInQuad" },
                { id: "eid373", tween: [ "style", "${_Ellipse}", "left", '102px', { fromValue: '102px'}], position: 56534, duration: 0 },
                { id: "eid210", tween: [ "style", "${_Hint7_text3}", "display", 'block', { fromValue: 'none'}], position: 98000, duration: 0, easing: "easeInQuad" },
                { id: "eid305", tween: [ "style", "${_Hint7_text2}", "opacity", '0.40424923780488', { fromValue: '1'}], position: 97499, duration: 17, easing: "easeInQuad" },
                { id: "eid306", tween: [ "style", "${_Hint7_text2}", "opacity", '1', { fromValue: '0.40424923780488'}], position: 97516, duration: 3054, easing: "easeInQuad" },
                { id: "eid304", tween: [ "style", "${_Hint7_text2}", "display", 'block', { fromValue: 'none'}], position: 98499, duration: 0, easing: "easeInQuad" },
                { id: "eid208", tween: [ "style", "${_Hint7_text2}", "display", 'block', { fromValue: 'block'}], position: 100570, duration: 0, easing: "easeInQuad" },
                { id: "eid240", tween: [ "style", "${_Hint7_text7}", "display", 'block', { fromValue: 'none'}], position: 116071, duration: 0, easing: "easeInQuad" },
                { id: "eid376", tween: [ "style", "${_Hint2_90}", "top", '115px', { fromValue: '118px'}], position: 28930, duration: 26 },
                { id: "eid383", tween: [ "style", "${_Hint2_90}", "top", '115px', { fromValue: '115px'}], position: 28956, duration: 258 },
                { id: "eid244", tween: [ "color", "${_Hint8_text1}", "color", 'rgba(126,20,20,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1.00)'}], position: 118071, duration: 0, easing: "easeInQuad" },
                { id: "eid209", tween: [ "style", "${_Hint7_text1}", "display", 'block', { fromValue: 'none'}], position: 98000, duration: 0, easing: "easeInQuad" },
                { id: "eid342", tween: [ "style", "${_AnswerCText}", "top", '467px', { fromValue: '467px'}], position: 0, duration: 0 },
                { id: "eid353", tween: [ "style", "${_Hint1_y}", "left", '69px', { fromValue: '69px'}], position: 25338, duration: 0 },
                { id: "eid247", tween: [ "color", "${_Hint7_text7}", "color", 'rgba(126,20,20,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1)'}], position: 116071, duration: 0, easing: "easeInQuad" },
                { id: "eid248", tween: [ "color", "${_Hint7_text7}", "color", 'rgba(126,126,126,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1)'}], position: 120071, duration: 0, easing: "easeInQuad" },
                { id: "eid237", tween: [ "color", "${_Hint7_text6}", "color", 'rgba(126,20,20,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1.00)'}], position: 112071, duration: 0, easing: "easeInQuad" },
                { id: "eid242", tween: [ "color", "${_Hint7_text6}", "color", 'rgba(126,126,126,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1.00)'}], position: 116071, duration: 0, easing: "easeInQuad" },
                { id: "eid172", tween: [ "color", "${_Hint2_90}", "color", 'rgba(126,20,20,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1.00)'}], position: 27000, duration: 0 },
                { id: "eid173", tween: [ "color", "${_Hint2_90}", "color", 'rgba(126,126,126,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1.00)'}], position: 28952, duration: 0 },
                { id: "eid186", tween: [ "color", "${_Hint4_text1}", "color", 'rgba(126,20,20,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1)'}], position: 72000, duration: 0 },
                { id: "eid336", tween: [ "color", "${_Hint4_text1}", "color", 'rgba(126,126,126,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1)'}], position: 75000, duration: 1000, easing: "easeInQuad" },
                { id: "eid181", tween: [ "color", "${_Hint3_text1}", "color", 'rgba(126,20,20,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1.00)'}], position: 41000, duration: 0 },
                { id: "eid182", tween: [ "color", "${_Hint3_text1}", "color", 'rgba(126,126,126,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1.00)'}], position: 49000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid249", tween: [ "style", "${_Hint8_text2}", "display", 'block', { fromValue: 'none'}], position: 120071, duration: 0, easing: "easeInQuad" },
                { id: "eid334", tween: [ "style", "${_Hint5}", "opacity", '1', { fromValue: '0'}], position: 66113, duration: 2000 },
                { id: "eid338", tween: [ "style", "${_Hint5}", "opacity", '0', { fromValue: '1'}], position: 101000, duration: 1929, easing: "easeInQuad" },
                { id: "eid179", tween: [ "style", "${_Hint3_text2}", "display", 'block', { fromValue: 'none'}], position: 46000, duration: 0 },
                { id: "eid183", tween: [ "color", "${_Hint3_text2}", "color", 'rgba(126,20,20,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1)'}], position: 46000, duration: 0 },
                { id: "eid184", tween: [ "color", "${_Hint3_text2}", "color", 'rgba(126,126,126,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1)'}], position: 49000, duration: 0 },
                { id: "eid328", tween: [ "color", "${_Hint3_text2}", "color", 'rgba(126,20,20,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,126,126,1)'}], position: 76000, duration: 1616, easing: "easeInQuad" },
                { id: "eid329", tween: [ "color", "${_Hint3_text2}", "color", 'rgba(126,126,126,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(126,20,20,1)'}], position: 104929, duration: 2684, easing: "easeInQuad" },
                { id: "eid346", tween: [ "style", "${_AnswerEText}", "top", '536px', { fromValue: '536px'}], position: 0, duration: 0 },
                { id: "eid350", tween: [ "style", "${_Answers}", "top", '375px', { fromValue: '375px'}], position: 0, duration: 0 },
                { id: "eid178", tween: [ "style", "${_Hint3_text1}", "display", 'block', { fromValue: 'none'}], position: 41000, duration: 0 },
                { id: "eid206", tween: [ "style", "${_Hint3_text1}", "display", 'none', { fromValue: 'block'}], position: 94000, duration: 0, easing: "easeInQuad" },
                { id: "eid348", tween: [ "style", "${_AnswerBText}", "top", '435px', { fromValue: '435px'}], position: 0, duration: 0 },
                { id: "eid347", tween: [ "style", "${_AnswerBText}", "left", '62px', { fromValue: '62px'}], position: 0, duration: 0 },
                { id: "eid324", tween: [ "style", "${_Arrow3}", "opacity", '1', { fromValue: '0'}], position: 93000, duration: 2472, easing: "easeInQuad" },
                { id: "eid327", tween: [ "style", "${_Arrow3}", "opacity", '0', { fromValue: '1'}], position: 96102, duration: 1397, easing: "easeInQuad" },
                { id: "eid243", tween: [ "style", "${_Hint8_text1}", "display", 'block', { fromValue: 'none'}], position: 120071, duration: 0, easing: "easeInQuad" },
                { id: "eid321", tween: [ "style", "${_Arrow3}", "left", '331px', { fromValue: '331px'}], position: 93000, duration: 0, easing: "easeInQuad" },
                { id: "eid307", tween: [ "style", "${_Hint7_text2}", "top", '247px', { fromValue: '180px'}], position: 97499, duration: 17, easing: "easeInQuad" },
                { id: "eid310", tween: [ "style", "${_Hint7_text2}", "top", '181px', { fromValue: '247px'}], position: 97516, duration: 3054, easing: "easeInQuad" },
                { id: "eid278", tween: [ "style", "${_Hint7_redellipse}", "display", 'block', { fromValue: 'none'}], position: 93000, duration: 0, easing: "easeInQuad" },
                { id: "eid339", tween: [ "style", "${_AnswerDText}", "left", '62px', { fromValue: '62px'}], position: 0, duration: 0 },
                { id: "eid268", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid269", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 10000 },
                { id: "eid270", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2}', [] ], ""], position: 23000 },
                { id: "eid271", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 30000 },
                { id: "eid272", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4}', [] ], ""], position: 49000 },
                { id: "eid273", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint5}', [] ], ""], position: 60000 },
                { id: "eid274", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint6}', [] ], ""], position: 72000 },
                { id: "eid275", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint7}', [] ], ""], position: 85000 },
                { id: "eid276", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint7b}', [] ], ""], position: 103610 },
                { id: "eid277", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 118071 }            ]
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
                    },
                    {
                        rect: ['-8px', '-3px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
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
                        fill: ['rgba(0,0,0,0)', 'images/x2.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
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
                    },
                    {
                        rect: ['-8px', '-3px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
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
                        fill: ['rgba(0,0,0,0)', 'images/x2.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
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
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
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
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
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
                        fill: ['rgba(0,0,0,0)', 'images/x2.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        fill: ['rgba(0,0,0,0)', 'images/check2.png', '0px', '0px']
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
                        fill: ['rgba(0,0,0,0)', 'images/x2.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
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
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
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
            "${_CButton}": [
                ["style", "left", '8px'],
                ["style", "top", '86px']
            ],
            "${_EButton}": [
                ["style", "left", '8px'],
                ["style", "top", '157px']
            ],
            "${_Group}": [
                ["style", "top", '0px'],
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
},
"Arrow": {
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
                    type: 'rect',
                    id: 'Rectangle2Copy2',
                    stroke: [3, 'rgb(246, 2, 2)', 'solid'],
                    rect: ['1px', '0px', '0px', '50px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [3, 'rgb(246, 2, 2)', 'solid'],
                    rect: ['1px', '0px', '0px', '50px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2Copy',
                    stroke: [3, 'rgb(246, 2, 2)', 'solid'],
                    rect: ['1px', '0px', '0px', '50px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2Copy}": [
                ["style", "height", '50px'],
                ["style", "top", '0px'],
                ["style", "left", '11px'],
                ["transform", "rotateZ", '-24deg']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '14deg'],
                ["style", "height", '15px'],
                ["style", "left", '0px'],
                ["style", "width", '1px']
            ],
            "${_Rectangle2Copy2}": [
                ["style", "top", '1px'],
                ["style", "height", '8px'],
                ["style", "left", '10px'],
                ["transform", "rotateZ", '-52deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '56px'],
                ["style", "width", '28px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 100000,
            autoPlay: false,
            timeline: [
                { id: "eid285", tween: [ "style", "${_Rectangle2Copy}", "height", '8px', { fromValue: '50px'}], position: 97528, duration: 2472, easing: "easeInQuad" },
                { id: "eid319", tween: [ "style", "${_Rectangle2}", "height", '15px', { fromValue: '15px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid315", tween: [ "style", "${_Rectangle2}", "left", '1px', { fromValue: '0px'}], position: 0, duration: 97528, easing: "easeInQuad" },
                { id: "eid282", tween: [ "style", "${_Rectangle2}", "left", '10px', { fromValue: '1px'}], position: 97528, duration: 2472, easing: "easeInQuad" },
                { id: "eid300", tween: [ "style", "${_Rectangle2Copy2}", "top", '-2px', { fromValue: '1px'}], position: 97528, duration: 2472, easing: "easeInQuad" },
                { id: "eid288", tween: [ "transform", "${_Rectangle2Copy}", "rotateZ", '-65deg', { fromValue: '-24deg'}], position: 97528, duration: 2472, easing: "easeInQuad" },
                { id: "eid301", tween: [ "style", "${_Rectangle2}", "top", '-4px', { fromValue: '0px'}], position: 97528, duration: 2472, easing: "easeInQuad" },
                { id: "eid320", tween: [ "transform", "${_Rectangle2}", "rotateZ", '0deg', { fromValue: '14deg'}], position: 0, duration: 97528, easing: "easeInQuad" },
                { id: "eid281", tween: [ "transform", "${_Rectangle2}", "rotateZ", '-24deg', { fromValue: '0deg'}], position: 97528, duration: 2472, easing: "easeInQuad" },
                { id: "eid293", tween: [ "transform", "${_Rectangle2Copy2}", "rotateZ", '18deg', { fromValue: '-52deg'}], position: 97528, duration: 2472, easing: "easeInQuad" },
                { id: "eid297", tween: [ "style", "${_Rectangle2Copy}", "top", '-7px', { fromValue: '0px'}], position: 97528, duration: 2472, easing: "easeInQuad" },
                { id: "eid291", tween: [ "style", "${_Rectangle2Copy}", "left", '3px', { fromValue: '11px'}], position: 97528, duration: 2472, easing: "easeInQuad" },
                { id: "eid292", tween: [ "style", "${_Rectangle2Copy2}", "left", '-3px', { fromValue: '10px'}], position: 97528, duration: 2472, easing: "easeInQuad" },
                { id: "eid316", tween: [ "style", "${_Rectangle2}", "width", '1px', { fromValue: '1px'}], position: 0, duration: 0, easing: "easeInQuad" }            ]
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
