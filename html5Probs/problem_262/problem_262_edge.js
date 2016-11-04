/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Answers',
                            symbolName: 'Answers_1',
                            type: 'rect',
                            rect: ['15', '375', '156', '187', 'auto', 'auto']
                        },
                        {
                            id: 'AnswerDText',
                            type: 'text',
                            rect: ['62', '503', '101', '20px', 'auto', 'auto'],
                            text: "40",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerCText',
                            type: 'text',
                            rect: ['62', '467', '101', '19px', 'auto', 'auto'],
                            text: "35",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerBText',
                            type: 'text',
                            rect: ['62', '435', '112', '19px', 'auto', 'auto'],
                            text: "32",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerAText',
                            type: 'text',
                            rect: ['59', '401', '109', '19', 'auto', 'auto'],
                            text: "30<br>",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerEText',
                            type: 'text',
                            rect: ['62', '536', '101', '20px', 'auto', 'auto'],
                            text: "47",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'picture',
                            type: 'image',
                            rect: ['-270', '-59', '751', '401', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"picture.png",'0px','0px']
                        },
                        {
                            id: 'hint7b',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint7b.mp3",aud+"hint7b.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['69', '58', '26px', '19px', 'auto', 'auto'],
                            text: "x",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, ""], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_Text',
                            type: 'text',
                            rect: ['21', '325', '219', '44', 'auto', 'auto'],
                            text: "What is the value of x?",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'QuestionSound_Container',
                            display: 'none',
                            type: 'rect',
                            rect: ['15px', '10px', '17', '8', 'auto', 'auto'],
                            fill: ["rgba(248,250,248,0.00)"],
                            stroke: [1,"rgb(4, 4, 4)","solid"]
                        },
                        {
                            id: 'Sound_Container',
                            display: 'none',
                            type: 'rect',
                            rect: ['46px', '19px', '164px', '7px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(248,250,248,1)"],
                            stroke: [1,"rgb(4, 4, 4)","solid"]
                        },
                        {
                            id: 'Hint1_z',
                            display: 'none',
                            type: 'text',
                            rect: ['121', '133', '40px', '20px', 'auto', 'auto'],
                            text: "z",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(126,126,126,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Hint1_y',
                            display: 'none',
                            type: 'text',
                            rect: ['69', '116', '40px', '19px', 'auto', 'auto'],
                            text: "y",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(126,126,126,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint4_text1',
                            display: 'none',
                            type: 'text',
                            rect: ['308', '213', '239px', '34', 'auto', 'auto'],
                            opacity: '1',
                            text: "z+3x+10=180",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, ""], "rgba(126,20,20,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint3_text1',
                            display: 'none',
                            type: 'text',
                            rect: ['308', '107', '166px', '29', 'auto', 'auto'],
                            opacity: '1',
                            text: "x+z+90=180",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, "px"], "rgba(126,20,20,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint7_text1',
                            display: 'none',
                            type: 'text',
                            rect: ['308', '180', '26px', '19px', 'auto', 'auto'],
                            text: "x+",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, ""], "rgba(126,126,126,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint3_text2',
                            display: 'none',
                            type: 'text',
                            rect: ['308', '145', '112px', '29px', 'auto', 'auto'],
                            text: "x+z=90",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, ""], "rgba(126,20,20,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint5',
                            display: 'none',
                            type: 'text',
                            rect: ['308', '247', '166px', '29px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0',
                            text: "z=180-3x-10",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, ""], "rgba(126,20,20,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint7_redellipse',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['319', '229', '101px', '50px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [3,"rgba(246,2,2,1.00)","solid"]
                        },
                        {
                            id: 'Hint7_text2',
                            display: 'none',
                            type: 'text',
                            rect: ['334', '180', '112px', '20px', 'auto', 'auto'],
                            opacity: '1',
                            text: "180-3x-10",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, ""], "rgba(126,20,20,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint7_text3',
                            display: 'none',
                            type: 'text',
                            rect: ['433', '180', '66px', '20px', 'auto', 'auto'],
                            text: "=90",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, ""], "rgba(126,126,126,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint7_text6',
                            display: 'none',
                            type: 'text',
                            rect: ['308', '210', '190', '29px', 'auto', 'auto'],
                            text: "(x-3x)=90+10-180",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, "px"], "rgba(126,20,20,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint7_text7',
                            display: 'none',
                            type: 'text',
                            rect: ['379', '242', '134px', '29px', 'auto', 'auto'],
                            text: "-2x=-80",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, ""], "rgba(126,20,20,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint8_text2',
                            display: 'none',
                            type: 'text',
                            rect: ['390', '314', '112px', '29', 'auto', 'auto'],
                            text: "Choose (D)",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, ""], "rgba(126,20,20,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint8_text1',
                            display: 'none',
                            type: 'text',
                            rect: ['390', '279', '101px', '29px', 'auto', 'auto'],
                            text: "x=40",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, ""], "rgba(126,20,20,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['148', '127', '65', '19', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['0', '0', '65px', '19px', 'auto', 'auto'],
                                text: "3x+10",
                                align: "left",
                                font: ['Georgia, Times New Roman, Times, serif', [20, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['-7', '24', '123px', '3', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'hint1',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint1.mp3",aud+"hint1.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint2',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint2.mp3",aud+"hint2.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint3',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint3.mp3",aud+"hint3.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint4',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint4.mp3",aud+"hint4.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint5',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint5.mp3",aud+"hint5.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint6',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint6.mp3",aud+"hint6.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint7',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint7.mp3",aud+"hint7.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'question',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"question.mp3",aud+"question.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'answer',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"answer.mp3",aud+"answer.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'Arrow3',
                            symbolName: 'Arrow',
                            type: 'rect',
                            rect: ['331', '169', '28', '56', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Ellipse',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['102', '72', '156px', '151px', 'auto', 'auto'],
                            clip: 'rect(0px 164px 79px 0px)',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [3,"rgba(246,3,3,1.00)","solid"]
                        },
                        {
                            id: 'Hint2_90',
                            display: 'none',
                            type: 'text',
                            rect: ['68', '118', '40px', '30', 'auto', 'auto'],
                            opacity: '1',
                            text: "90<br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(126,20,20,1.00)", "normal", "none", "normal", "break-word", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '600', '600', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 127071,
                    autoPlay: true,
                    labels: {
                        "Read Question": 2000,
                        "Hint 1": 13000,
                        "Hint 2": 26000,
                        "Hint 3": 35000,
                        "Hint 4": 54000,
                        "Hint 5": 65000,
                        "Hint 6": 77000,
                        "Hint 7": 90000,
                        "Answer": 123071
                    },
                    data: [
                        [
                            "eid341",
                            "left",
                            0,
                            0,
                            "linear",
                            "${AnswerCText}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid346",
                            "top",
                            0,
                            0,
                            "linear",
                            "${AnswerEText}",
                            '536px',
                            '536px'
                        ],
                        [
                            "eid325",
                            "opacity",
                            95000,
                            3000,
                            "easeInQuad",
                            "${Hint3_text1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid350",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Answers}",
                            '375px',
                            '375px'
                        ],
                        [
                            "eid183",
                            "color",
                            51000,
                            0,
                            "linear",
                            "${Hint3_text2}",
                            'rgba(126,20,20,1)',
                            'rgba(126,20,20,1)'
                        ],
                        [
                            "eid184",
                            "color",
                            54000,
                            0,
                            "linear",
                            "${Hint3_text2}",
                            'rgba(126,20,20,1)',
                            'rgba(126,126,126,1.00)'
                        ],
                        [
                            "eid328",
                            "color",
                            81000,
                            1616,
                            "easeInQuad",
                            "${Hint3_text2}",
                            'rgba(126,126,126,1)',
                            'rgba(126,20,20,1.00)'
                        ],
                        [
                            "eid329",
                            "color",
                            109929,
                            2684,
                            "easeInQuad",
                            "${Hint3_text2}",
                            'rgba(126,20,20,1)',
                            'rgba(126,126,126,1.00)'
                        ],
                        [
                            "eid324",
                            "opacity",
                            98000,
                            2472,
                            "easeInQuad",
                            "${Arrow3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid327",
                            "opacity",
                            101102,
                            1397,
                            "easeInQuad",
                            "${Arrow3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid307",
                            "top",
                            102499,
                            17,
                            "easeInQuad",
                            "${Hint7_text2}",
                            '180px',
                            '247px'
                        ],
                        [
                            "eid310",
                            "top",
                            102516,
                            3054,
                            "easeInQuad",
                            "${Hint7_text2}",
                            '247px',
                            '181px'
                        ],
                        [
                            "eid349",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Answers}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid181",
                            "color",
                            46000,
                            0,
                            "linear",
                            "${Hint3_text1}",
                            'rgba(126,20,20,1.00)',
                            'rgba(126,20,20,1.00)'
                        ],
                        [
                            "eid182",
                            "color",
                            54000,
                            0,
                            "linear",
                            "${Hint3_text1}",
                            'rgba(126,20,20,1.00)',
                            'rgba(126,126,126,1.00)'
                        ],
                        [
                            "eid168",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${Hint1_y}",
                            'none',
                            'block'
                        ],
                        [
                            "eid169",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Hint1_y}",
                            'block',
                            'none'
                        ],
                        [
                            "eid326",
                            "opacity",
                            95000,
                            3000,
                            "easeInQuad",
                            "${Hint4_text1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid244",
                            "color",
                            123071,
                            0,
                            "easeInQuad",
                            "${Hint8_text1}",
                            'rgba(126,20,20,1.00)',
                            'rgba(126,20,20,1.00)'
                        ],
                        [
                            "eid239",
                            "display",
                            117071,
                            0,
                            "easeInQuad",
                            "${Hint7_text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid343",
                            "left",
                            0,
                            0,
                            "linear",
                            "${AnswerAText}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid344",
                            "top",
                            0,
                            0,
                            "linear",
                            "${AnswerAText}",
                            '401px',
                            '401px'
                        ],
                        [
                            "eid374",
                            "top",
                            61534,
                            0,
                            "linear",
                            "${Ellipse}",
                            '72px',
                            '72px'
                        ],
                        [
                            "eid321",
                            "left",
                            98000,
                            0,
                            "easeInQuad",
                            "${Arrow3}",
                            '331px',
                            '331px'
                        ],
                        [
                            "eid228",
                            "color",
                            105570,
                            7043,
                            "easeInQuad",
                            "${Hint7_text2}",
                            'rgba(126,20,20,1)',
                            'rgba(126,126,126,1.00)'
                        ],
                        [
                            "eid250",
                            "color",
                            125071,
                            0,
                            "easeInQuad",
                            "${Hint8_text2}",
                            'rgba(126,20,20,1.00)',
                            'rgba(126,20,20,1.00)'
                        ],
                        [
                            "eid347",
                            "left",
                            0,
                            0,
                            "linear",
                            "${AnswerBText}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid348",
                            "top",
                            0,
                            0,
                            "linear",
                            "${AnswerBText}",
                            '435px',
                            '435px'
                        ],
                        [
                            "eid342",
                            "top",
                            0,
                            0,
                            "linear",
                            "${AnswerCText}",
                            '467px',
                            '467px'
                        ],
                        [
                            "eid28",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Sound_Container}",
                            'none',
                            'none'
                        ],
                        [
                            "eid340",
                            "top",
                            0,
                            0,
                            "linear",
                            "${AnswerDText}",
                            '503px',
                            '503px'
                        ],
                        [
                            "eid240",
                            "display",
                            121071,
                            0,
                            "easeInQuad",
                            "${Hint7_text7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid247",
                            "color",
                            121071,
                            0,
                            "easeInQuad",
                            "${Hint7_text7}",
                            'rgba(126,20,20,1)',
                            'rgba(126,20,20,1)'
                        ],
                        [
                            "eid248",
                            "color",
                            125071,
                            0,
                            "easeInQuad",
                            "${Hint7_text7}",
                            'rgba(126,20,20,1)',
                            'rgba(126,126,126,1.00)'
                        ],
                        [
                            "eid322",
                            "top",
                            98000,
                            0,
                            "easeInQuad",
                            "${Arrow3}",
                            '169px',
                            '169px'
                        ],
                        [
                            "eid179",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${Hint3_text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid243",
                            "display",
                            125071,
                            0,
                            "easeInQuad",
                            "${Hint8_text1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid171",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${Hint2_90}",
                            '1',
                            '1'
                        ],
                        [
                            "eid334",
                            "opacity",
                            71113,
                            2000,
                            "linear",
                            "${Hint5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid338",
                            "opacity",
                            106000,
                            1929,
                            "easeInQuad",
                            "${Hint5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid304",
                            "display",
                            103499,
                            0,
                            "easeInQuad",
                            "${Hint7_text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid208",
                            "display",
                            105570,
                            0,
                            "easeInQuad",
                            "${Hint7_text2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid375",
                            "left",
                            33930,
                            26,
                            "linear",
                            "${Hint2_90}",
                            '68px',
                            '69px'
                        ],
                        [
                            "eid180",
                            "display",
                            62000,
                            0,
                            "linear",
                            "${Hint4_text1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid205",
                            "display",
                            99000,
                            0,
                            "easeInQuad",
                            "${Hint4_text1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid178",
                            "display",
                            46000,
                            0,
                            "linear",
                            "${Hint3_text1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid206",
                            "display",
                            99000,
                            0,
                            "easeInQuad",
                            "${Hint3_text1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid280",
                            "opacity",
                            98000,
                            2472,
                            "easeInQuad",
                            "${Hint7_redellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid312",
                            "opacity",
                            101102,
                            1397,
                            "easeInQuad",
                            "${Hint7_redellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid249",
                            "display",
                            125071,
                            0,
                            "easeInQuad",
                            "${Hint8_text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid373",
                            "left",
                            61534,
                            0,
                            "linear",
                            "${Ellipse}",
                            '102px',
                            '102px'
                        ],
                        [
                            "eid172",
                            "color",
                            30000,
                            0,
                            "linear",
                            "${Hint2_90}",
                            'rgba(126,20,20,1.00)',
                            'rgba(126,20,20,1.00)'
                        ],
                        [
                            "eid173",
                            "color",
                            31956,
                            0,
                            "linear",
                            "${Hint2_90}",
                            'rgba(126,20,20,1.00)',
                            'rgba(126,126,126,1.00)'
                        ],
                        [
                            "eid163",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${Hint1_z}",
                            'none',
                            'block'
                        ],
                        [
                            "eid237",
                            "color",
                            117071,
                            0,
                            "easeInQuad",
                            "${Hint7_text6}",
                            'rgba(126,20,20,1.00)',
                            'rgba(126,20,20,1.00)'
                        ],
                        [
                            "eid242",
                            "color",
                            121071,
                            0,
                            "easeInQuad",
                            "${Hint7_text6}",
                            'rgba(126,20,20,1.00)',
                            'rgba(126,126,126,1.00)'
                        ],
                        [
                            "eid278",
                            "display",
                            98000,
                            0,
                            "easeInQuad",
                            "${Hint7_redellipse}",
                            'none',
                            'block'
                        ],
                        [
                            "eid185",
                            "display",
                            71113,
                            0,
                            "linear",
                            "${Hint5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid376",
                            "top",
                            33930,
                            26,
                            "linear",
                            "${Hint2_90}",
                            '118px',
                            '115px'
                        ],
                        [
                            "eid210",
                            "display",
                            103000,
                            0,
                            "easeInQuad",
                            "${Hint7_text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid332",
                            "opacity",
                            58000,
                            2000,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid333",
                            "opacity",
                            74000,
                            1000,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid308",
                            "left",
                            102499,
                            17,
                            "easeInQuad",
                            "${Hint7_text2}",
                            '334px',
                            '329px'
                        ],
                        [
                            "eid309",
                            "left",
                            102516,
                            3054,
                            "easeInQuad",
                            "${Hint7_text2}",
                            '329px',
                            '337px'
                        ],
                        [
                            "eid345",
                            "left",
                            0,
                            0,
                            "linear",
                            "${AnswerEText}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid330",
                            "display",
                            58000,
                            0,
                            "linear",
                            "${Ellipse}",
                            'none',
                            'block'
                        ],
                        [
                            "eid305",
                            "opacity",
                            102499,
                            17,
                            "easeInQuad",
                            "${Hint7_text2}",
                            '1',
                            '0.40424923780488'
                        ],
                        [
                            "eid306",
                            "opacity",
                            102516,
                            3054,
                            "easeInQuad",
                            "${Hint7_text2}",
                            '0.40424923780488',
                            '1'
                        ],
                        [
                            "eid29",
                            "display",
                            0,
                            0,
                            "linear",
                            "${QuestionSound_Container}",
                            'none',
                            'none'
                        ],
                        [
                            "eid186",
                            "color",
                            77000,
                            0,
                            "linear",
                            "${Hint4_text1}",
                            'rgba(126,20,20,1)',
                            'rgba(126,20,20,1)'
                        ],
                        [
                            "eid336",
                            "color",
                            80000,
                            1000,
                            "easeInQuad",
                            "${Hint4_text1}",
                            'rgba(126,20,20,1)',
                            'rgba(126,126,126,1.00)'
                        ],
                        [
                            "eid209",
                            "display",
                            103000,
                            0,
                            "easeInQuad",
                            "${Hint7_text1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid339",
                            "left",
                            0,
                            0,
                            "linear",
                            "${AnswerDText}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid170",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Hint2_90}",
                            'none',
                            'block'
                        ],
                            [ "eid268", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question}', [] ] ],
                            [ "eid269", "trigger", 13000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1}', [] ] ],
                            [ "eid270", "trigger", 26476.109927449, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2}', [] ] ],
                            [ "eid271", "trigger", 35000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint3}', [] ] ],
                            [ "eid272", "trigger", 54000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint4}', [] ] ],
                            [ "eid273", "trigger", 65000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint5}', [] ] ],
                            [ "eid274", "trigger", 77000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint6}', [] ] ],
                            [ "eid275", "trigger", 90000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint7}', [] ] ],
                            [ "eid276", "trigger", 108610, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint7b}', [] ] ],
                            [ "eid277", "trigger", 123071, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${answer}', [] ] ]
                    ]
                }
            },
            "EButton": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '25', '24', 'auto', 'auto'],
                            id: 'E_Button',
                            type: 'group',
                            c: [
                            {
                                rect: [0, 0, 25, 24, 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy8',
                                stroke: ['1px', 'rgba(0,0,0,1)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(232,241,160,1.00)']
                            },
                            {
                                rect: [0, 4, 27, '20px', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                id: 'Text8',
                                text: 'E',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -3, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 101, 26]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "Nothing Selected": 0,
                        "Answer Selected": 5000
                    },
                    data: [
                        [
                            "eid9",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            'rgba(232,241,160,1.00)',
                            'rgba(232,241,160,1.00)'
                        ],
                        [
                            "eid13",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid257",
                            "display",
                            0,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid258",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid230",
                            "display",
                            0,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'none'
                        ],
                        [
                            "eid231",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "EButton_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '25', '24', 'auto', 'auto'],
                            id: 'E_Button',
                            type: 'group',
                            c: [
                            {
                                rect: ['0', '0', '25', '24', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy8',
                                stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(232,241,160,1.00)']
                            },
                            {
                                rect: ['0', '4', '27', '20px', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                                id: 'Text8',
                                text: 'E',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['-8', '-3', '42', '33', 'auto', 'auto'],
                                id: 'x',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['-8', '-16', '65', '42', 'auto', 'auto'],
                                id: 'check',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '101', '26']
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    labels: {
                        "Nothing Selected": 0,
                        "Answer Incorrect": 5000,
                        "Answer Correct": 10000
                    },
                    data: [
                        [
                            "eid9",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            'rgba(232,241,160,1.00)',
                            'rgba(232,241,160,1.00)'
                        ],
                        [
                            "eid13",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid257",
                            "display",
                            0,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid258",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'block'
                        ],
                        [
                            "eid230",
                            "display",
                            0,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'none'
                        ],
                        [
                            "eid231",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${x}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "EButton_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '25', '24', 'auto', 'auto'],
                            id: 'E_Button',
                            type: 'group',
                            c: [
                            {
                                rect: [0, 0, 25, 24, 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy8',
                                stroke: ['1px', 'rgba(0,0,0,1)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(232,241,160,1.00)']
                            },
                            {
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                type: 'text',
                                id: 'Text8',
                                text: 'E',
                                align: 'center',
                                rect: [0, 4, 27, '20px', 'auto', 'auto']
                            },
                            {
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                type: 'text',
                                id: 'Text14',
                                text: 'Answer E Text',
                                align: 'left',
                                rect: [36, 4, 101, '20px', 'auto', 'auto']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -3, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 101, 26]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "Nothing Selected": 0,
                        "Answer Selected": 5000
                    },
                    data: [
                        [
                            "eid9",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            'rgba(232,241,160,1.00)',
                            'rgba(232,241,160,1.00)'
                        ],
                        [
                            "eid13",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid257",
                            "display",
                            0,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid258",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid230",
                            "display",
                            0,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'none'
                        ],
                        [
                            "eid231",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "EButton_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '25', '24', 'auto', 'auto'],
                            id: 'E_Button',
                            type: 'group',
                            c: [
                            {
                                rect: [0, 0, 25, 24, 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy8',
                                stroke: ['1px', 'rgba(0,0,0,1)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(232,241,160,1.00)']
                            },
                            {
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                type: 'text',
                                id: 'Text8',
                                text: 'E',
                                align: 'center',
                                rect: [0, 4, 27, '20px', 'auto', 'auto']
                            },
                            {
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                type: 'text',
                                id: 'Text14',
                                text: 'Answer E Text',
                                align: 'left',
                                rect: [36, 4, 101, '20px', 'auto', 'auto']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -3, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 101, 26]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "Nothing Selected": 0,
                        "Answer Selected": 5000
                    },
                    data: [
                        [
                            "eid9",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            'rgba(232,241,160,1.00)',
                            'rgba(232,241,160,1.00)'
                        ],
                        [
                            "eid13",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid257",
                            "display",
                            0,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid258",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid230",
                            "display",
                            0,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'none'
                        ],
                        [
                            "eid231",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "DButton_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '25', '24', 'auto', 'auto'],
                            id: 'D_Button',
                            type: 'group',
                            c: [
                            {
                                rect: ['0', '0', '25', '24', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy7',
                                stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(232,241,160,1.00)']
                            },
                            {
                                rect: ['0', '4', '27', '20px', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['-8', '-4', '42', '33', 'auto', 'auto'],
                                id: 'x',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['-8', '-16', '65', '42', 'auto', 'auto'],
                                id: 'check',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '101', '26']
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    labels: {
                        "Nothing Selected": 0,
                        "Answer Incorrect": 5000,
                        "Answer Correct": 10000
                    },
                    data: [
                        [
                            "eid255",
                            "display",
                            0,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid256",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid266",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid226",
                            "display",
                            0,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'none'
                        ],
                        [
                            "eid227",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid267",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${x}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            'rgba(232,241,160,1.00)',
                            'rgba(232,241,160,1.00)'
                        ]
                    ]
                }
            },
            "DButton_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '25', '24', 'auto', 'auto'],
                            id: 'D_Button',
                            type: 'group',
                            c: [
                            {
                                rect: [0, 0, 25, 24, 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy7',
                                stroke: ['1px', 'rgba(0,0,0,1)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(232,241,160,1.00)']
                            },
                            {
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                type: 'text',
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                rect: [0, 4, 27, '20px', 'auto', 'auto']
                            },
                            {
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                type: 'text',
                                id: 'Text13',
                                text: 'Answer D Text',
                                align: 'left',
                                rect: [36, 4, 101, '20px', 'auto', 'auto']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -4, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 101, 26]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "Nothing Selected": 0,
                        "Answer Selected": 5000
                    },
                    data: [
                        [
                            "eid255",
                            "display",
                            0,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid256",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid226",
                            "display",
                            0,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'none'
                        ],
                        [
                            "eid227",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            'rgba(232,241,160,1.00)',
                            'rgba(232,241,160,1.00)'
                        ]
                    ]
                }
            },
            "DButton_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '25', '24', 'auto', 'auto'],
                            id: 'D_Button',
                            type: 'group',
                            c: [
                            {
                                rect: [0, 0, 25, 24, 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy7',
                                stroke: ['1px', 'rgba(0,0,0,1)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(232,241,160,1.00)']
                            },
                            {
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                type: 'text',
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                rect: [0, 4, 27, '20px', 'auto', 'auto']
                            },
                            {
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                type: 'text',
                                id: 'Text13',
                                text: 'Answer D Text',
                                align: 'left',
                                rect: [36, 4, 101, '20px', 'auto', 'auto']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -4, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 101, 26]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "Nothing Selected": 0,
                        "Answer Selected": 5000
                    },
                    data: [
                        [
                            "eid255",
                            "display",
                            0,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid256",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid226",
                            "display",
                            0,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'none'
                        ],
                        [
                            "eid227",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            'rgba(232,241,160,1.00)',
                            'rgba(232,241,160,1.00)'
                        ]
                    ]
                }
            },
            "DButton": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '25', '24', 'auto', 'auto'],
                            id: 'D_Button',
                            type: 'group',
                            c: [
                            {
                                rect: [0, 0, 25, 24, 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy7',
                                stroke: ['1px', 'rgba(0,0,0,1)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(232,241,160,1.00)']
                            },
                            {
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                type: 'text',
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                rect: [0, 4, 27, '20px', 'auto', 'auto']
                            },
                            {
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                type: 'text',
                                id: 'Text13',
                                text: 'Answer Text D',
                                align: 'left',
                                rect: [36, 4, 94, '20px', 'auto', 'auto']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -4, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 101, 26]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "Nothing Selected": 0,
                        "Answer Selected": 5000
                    },
                    data: [
                        [
                            "eid255",
                            "display",
                            0,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid256",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid226",
                            "display",
                            0,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'none'
                        ],
                        [
                            "eid227",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            'rgba(232,241,160,1.00)',
                            'rgba(232,241,160,1.00)'
                        ]
                    ]
                }
            },
            "CButton_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '25', '24', 'auto', 'auto'],
                            id: 'C_Button',
                            type: 'group',
                            c: [
                            {
                                rect: ['0', '0', '25', '24', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy6',
                                stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(232,241,160,1.00)']
                            },
                            {
                                rect: ['0', '4', '27', '20px', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                                id: 'Text5',
                                text: 'C',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['-8', '-4', '42', '33', 'auto', 'auto'],
                                id: 'x',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['-8', '-16', '65', '42', 'auto', 'auto'],
                                id: 'check',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '101', '26']
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    labels: {
                        "Nothing Selected": 0,
                        "Answer Incorrect": 5000,
                        "Answer Correct": 10000
                    },
                    data: [
                        [
                            "eid11",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy6}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid5",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy6}",
                            'rgba(232,241,160,1.00)',
                            'rgba(232,241,160,1.00)'
                        ],
                        [
                            "eid253",
                            "display",
                            0,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid254",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid264",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'block'
                        ],
                        [
                            "eid224",
                            "display",
                            0,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'none'
                        ],
                        [
                            "eid225",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid265",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${x}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "BButton_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '25', '25', 'auto', 'auto'],
                            id: 'B_Button',
                            type: 'group',
                            c: [
                            {
                                rect: ['0', '0', '25', '24', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy5',
                                stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(232,241,160,1.00)']
                            },
                            {
                                rect: ['0', '5', '27', '19', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                                id: 'Text4',
                                text: 'B',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['-8', '-4', '42', '33', 'auto', 'auto'],
                                id: 'x',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['-8', '-16', '65', '42', 'auto', 'auto'],
                                id: 'check',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '125', '26']
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    labels: {
                        "Nothing Selected": 0,
                        "Answer Incorrect": 5000,
                        "Answer Correct": 10000
                    },
                    data: [
                        [
                            "eid7",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy5}",
                            'rgba(232,241,160,1.00)',
                            'rgba(232,241,160,1.00)'
                        ],
                        [
                            "eid251",
                            "display",
                            0,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid252",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid263",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy5}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid222",
                            "display",
                            0,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'none'
                        ],
                        [
                            "eid223",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid262",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${x}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "AButton_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['8', '16', '25', '24', 'auto', 'auto'],
                            id: 'A_Button',
                            type: 'group',
                            c: [
                            {
                                rect: ['0', '0', '25', '24', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse',
                                stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(232,241,160,1.00)']
                            },
                            {
                                rect: ['0', '3', '27', '19', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                                id: 'A',
                                text: 'A<br><br><br>',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['-8', '-16', '65', '42', 'auto', 'auto'],
                                id: 'check',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['-8', '-4', '42', '33', 'auto', 'auto'],
                                id: 'x',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '153', '42']
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    labels: {
                        "Nothing Selected": 0,
                        "Answer Incorrect": 5000,
                        "Answer Correct": 10000
                    },
                    data: [
                        [
                            "eid220",
                            "display",
                            0,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid221",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid261",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'block'
                        ],
                        [
                            "eid259",
                            "display",
                            0,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'none'
                        ],
                        [
                            "eid260",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid42",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${x}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "AButton": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [8, 16, '25', '24', 'auto', 'auto'],
                            id: 'A_Button',
                            type: 'group',
                            c: [
                            {
                                rect: [0, 0, 25, 24, 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse',
                                stroke: ['1px', 'rgba(0,0,0,1)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(232,241,160,1.00)']
                            },
                            {
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                type: 'text',
                                id: 'Text3',
                                text: 'A<br><br><br>',
                                align: 'center',
                                rect: [0, 3, 27, 19, 'auto', 'auto']
                            },
                            {
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                type: 'text',
                                id: 'Text9',
                                text: 'Answer Text A',
                                align: 'left',
                                rect: [36, 3, 109, '19px', 'auto', 'auto']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -4, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 153, 42]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "Nothing Selected": 0,
                        "Answer Selected": 5000
                    },
                    data: [
                        [
                            "eid220",
                            "display",
                            0,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid221",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${check}",
                            'none',
                            'block'
                        ],
                        [
                            "eid259",
                            "display",
                            0,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'none'
                        ],
                        [
                            "eid260",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Answers_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '153', '183', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                rect: ['8', '157', '101', '26', 'auto', 'auto'],
                                id: 'EButton',
                                symbolName: 'EButton_3',
                                type: 'rect'
                            },
                            {
                                rect: ['8', '121', '101', '26', 'auto', 'auto'],
                                id: 'DButton',
                                symbolName: 'DButton_3',
                                type: 'rect'
                            },
                            {
                                rect: ['8', '86', '101', '26', 'auto', 'auto'],
                                id: 'CButton',
                                symbolName: 'CButton_3',
                                type: 'rect'
                            },
                            {
                                rect: ['8', '50', '125', '26', 'auto', 'auto'],
                                id: 'BButton',
                                symbolName: 'BButton_3',
                                type: 'rect'
                            },
                            {
                                rect: ['0', '0', '153', '42', 'auto', 'auto'],
                                id: 'AButton',
                                symbolName: 'AButton_3',
                                type: 'rect'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156', '187']
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Arrow": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [10, 1, '0px', 8, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-52', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'Rectangle2Copy2',
                            stroke: [3, 'rgb(246, 2, 2)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: [0, 0, 1, 15, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['14', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'Rectangle2',
                            stroke: [3, 'rgb(246, 2, 2)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: [11, 0, '0px', 50, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-24', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'Rectangle2Copy',
                            stroke: [3, 'rgb(246, 2, 2)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 28, 56]
                        }
                    }
                },
                timeline: {
                    duration: 100000,
                    autoPlay: false,
                    data: [
                        [
                            "eid301",
                            "top",
                            97528,
                            2472,
                            "easeInQuad",
                            "${Rectangle2}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid315",
                            "left",
                            0,
                            97528,
                            "easeInQuad",
                            "${Rectangle2}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid282",
                            "left",
                            97528,
                            2472,
                            "easeInQuad",
                            "${Rectangle2}",
                            '1px',
                            '10px'
                        ],
                        [
                            "eid285",
                            "height",
                            97528,
                            2472,
                            "easeInQuad",
                            "${Rectangle2Copy}",
                            '50px',
                            '8px'
                        ],
                        [
                            "eid316",
                            "width",
                            0,
                            0,
                            "easeInQuad",
                            "${Rectangle2}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid319",
                            "height",
                            0,
                            0,
                            "easeInQuad",
                            "${Rectangle2}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid297",
                            "top",
                            97528,
                            2472,
                            "easeInQuad",
                            "${Rectangle2Copy}",
                            '0px',
                            '-7px'
                        ],
                        [
                            "eid292",
                            "left",
                            97528,
                            2472,
                            "easeInQuad",
                            "${Rectangle2Copy2}",
                            '10px',
                            '-3px'
                        ],
                        [
                            "eid291",
                            "left",
                            97528,
                            2472,
                            "easeInQuad",
                            "${Rectangle2Copy}",
                            '11px',
                            '3px'
                        ],
                        [
                            "eid293",
                            "rotateZ",
                            97528,
                            2472,
                            "easeInQuad",
                            "${Rectangle2Copy2}",
                            '-52deg',
                            '18deg'
                        ],
                        [
                            "eid288",
                            "rotateZ",
                            97528,
                            2472,
                            "easeInQuad",
                            "${Rectangle2Copy}",
                            '-24deg',
                            '-65deg'
                        ],
                        [
                            "eid320",
                            "rotateZ",
                            0,
                            97528,
                            "easeInQuad",
                            "${Rectangle2}",
                            '14deg',
                            '0deg'
                        ],
                        [
                            "eid281",
                            "rotateZ",
                            97528,
                            2472,
                            "easeInQuad",
                            "${Rectangle2}",
                            '0deg',
                            '-24deg'
                        ],
                        [
                            "eid300",
                            "top",
                            97528,
                            2472,
                            "easeInQuad",
                            "${Rectangle2Copy2}",
                            '1px',
                            '-2px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("problem_262_edgeActions.js");
})("EdgeProblem");
