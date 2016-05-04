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
                            id: 'Question_Text',
                            type: 'text',
                            rect: ['24', '30', '487px', '97px', 'auto', 'auto'],
                            text: "​A triangle has 3 sides A, B and C. Side A length = 6, side B length = 6, and side C length = 9.  Use the Pythagorean theorem to figure out whether it is a right triangle or not. Will the triangle with sides of length 6, 6, and 9 look like the figure below? In other words, will the corner be square?",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['132px', '268px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "?",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [24, "px"], "rgba(255,0,23,1.00)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Answers',
                            symbolName: 'Answers_1',
                            type: 'rect',
                            rect: ['36px', '397px', '156', '187', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.01305']]
                        },
                        {
                            id: 'AnswerDText',
                            type: 'text',
                            rect: ['83px', '545px', '243px', '20px', 'auto', 'auto'],
                            text: "​There is not enough information to tell.",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerCText',
                            type: 'text',
                            rect: ['83px', '502px', '206px', '30px', 'auto', 'auto'],
                            text: "No, because 36 + 36 does not equal 81.",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerBText',
                            type: 'text',
                            rect: ['84px', '456px', '243px', '33px', 'auto', 'auto'],
                            text: "Yes, because A and B are the same length and C is longer.",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerAText',
                            type: 'text',
                            rect: ['83px', '419px', '218px', '19', 'auto', 'auto'],
                            text: "​No, because 6 + 6 does not equal 9.",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
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
                            id: 'hint1_3',
                            display: 'none',
                            type: 'text',
                            rect: ['302px', '243px', '281px', '71px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​Can you use this equation to figure out whether our triangle is a right triangle?</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint_1_2',
                            display: 'none',
                            type: 'text',
                            rect: ['23px', '134px', '185px', '22px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​We can show it this way:</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint_2_6_squared_plus_6_squared',
                            display: 'none',
                            type: 'text',
                            rect: ['300px', '245px', '210px', '104px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​A² = &nbsp;6² </p><p style=\"margin:0px\">B² = &nbsp;6² </p><p style=\"margin:0px\">C² = &nbsp;9² </p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">6² + 6² = 9² ? &nbsp;</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint_1_1',
                            display: 'none',
                            type: 'text',
                            rect: ['301px', '127px', '283px', '101px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​Let's review the Pythagorean theorem.</p><p style=\"margin:0px\">​The Pythagorean theorem says that,&nbsp;</p><p style=\"margin:0px\">​for a right triangle,</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​A² &nbsp;+ B² = C²</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Triangle',
                            type: 'group',
                            rect: ['114px', '229px', '2px', '71px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'RectangleCopy2',
                                type: 'rect',
                                rect: ['36px', '-14px', '2px', '100px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                transform: [[],['-45']]
                            },
                            {
                                id: 'RectangleCopy',
                                type: 'rect',
                                rect: ['36px', '35px', '2px', '71px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                transform: [[],['90']]
                            },
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['0px', '0px', '2px', '71px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'C_squared',
                                display: 'none',
                                type: 'rect',
                                rect: ['22px', '-52px', '100px', '100px', 'auto', 'auto'],
                                fill: ["rgba(147,195,252,1.00)"],
                                stroke: [1,"rgba(74,158,255,1.00)","solid"],
                                transform: [[],['-45']]
                            },
                            {
                                id: 'A_squared',
                                display: 'none',
                                type: 'rect',
                                rect: ['-73px', '-1px', '71px', '71px', 'auto', 'auto'],
                                fill: ["rgba(147,195,252,1.00)"],
                                stroke: [1,"rgba(74,158,255,1.00)","solid"]
                            },
                            {
                                id: 'B_squared',
                                display: 'none',
                                type: 'rect',
                                rect: ['0px', '71px', '71px', '71px', 'auto', 'auto'],
                                fill: ["rgba(147,195,252,1.00)"],
                                stroke: [1,"rgba(46,114,191,1.00)","solid"]
                            },
                            {
                                id: 'C',
                                type: 'text',
                                rect: ['58px', '14px', '26px', '22px', 'auto', 'auto'],
                                overflow: 'visible',
                                opacity: '1',
                                text: "<p style=\"margin: 0px;\">​C=9</p>",
                                align: "left",
                                font: ['Times New Roman, Times, serif', [14, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'A',
                                type: 'text',
                                rect: ['-31px', '30px', '39px', '22px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​A=6</p>",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'B',
                                type: 'text',
                                rect: ['24px', '87px', '60px', '22px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​B=6</p>",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'c_squared',
                                display: 'none',
                                type: 'text',
                                rect: ['96px', '-25px', '26px', '22px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​C²</p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1)", "400", "none", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'a_squared',
                                display: 'none',
                                type: 'text',
                                rect: ['-66px', '8px', '30px', '22px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​A²</p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1)", "400", "none", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'b_squared',
                                display: 'none',
                                type: 'text',
                                rect: ['42px', '120px', '26px', '22px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​B²</p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1)", "400", "none", "normal", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'question',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"question.mp3",aud+"question.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint1a',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint1a.mp3",aud+"hint1a.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint1b',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint1b.mp3",aud+"hint1b.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint2',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint2.mp3",aud+"hint2.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint3_1',
                            display: 'none',
                            type: 'text',
                            rect: ['367px', '373px', '185px', '22px', 'auto', 'auto'],
                            text: "A​² + B² = 6² + 6²",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'hint3_2',
                            display: 'none',
                            type: 'text',
                            rect: ['367px', '428px', '147px', '33px', 'auto', 'auto'],
                            text: "​C² = 9² = 81",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(203,0,0,1.00)", "400", "none", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'hint3',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint3.mp3",aud+"hint3.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'answer_hint_2',
                            display: 'none',
                            type: 'text',
                            rect: ['367px', '513px', '147px', '22px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​The answer is C</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,130,32,1)", "700", "none", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'answer',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"answer.mp3",aud+"answer.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'answer_hint_1',
                            display: 'none',
                            type: 'text',
                            rect: ['368px', '471px', '135px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 400; color: rgb(0, 82, 203);\">72</span><span style=\"font-weight: 400;\"> ≠ </span><span style=\"font-weight: 400; color: rgb(203, 0, 0);\">&nbsp;81</span>&nbsp;</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,130,32,1)", "700", "none", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            display: 'none',
                            type: 'text',
                            rect: ['208px', '278px', '72px', '104px', 'auto', 'auto'],
                            text: "NO! The triangle won't look like this.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(203,0,0,1.00)", "400", "none solid rgb(0, 82, 203)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Rectangle2Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['133px', '231px', '0px', '79px', 'auto', 'auto'],
                            fill: ["rgba(249,0,32,1.00)"],
                            stroke: [3,"rgba(191,46,46,1.00)","solid"],
                            transform: [[],['45']]
                        },
                        {
                            id: 'Rectangle2Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['133px', '231px', '0px', '79px', 'auto', 'auto'],
                            fill: ["rgba(249,0,32,1.00)"],
                            stroke: [3,"rgba(191,46,46,1.00)","solid"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'hint3_1Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['429px', '397px', '51px', '22px', 'auto', 'auto'],
                            text: "= 72",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1.00)", "normal", "none", "", "break-word", "normal"]
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
                    duration: 129000,
                    autoPlay: true,
                    labels: {
                        "Read Question": 2000,
                        "Hint 1": 36000,
                        "Hint 2": 85000,
                        "Hint 3": 104000,
                        "Answer Hint": 112000
                    },
                    data: [
                        [
                            "eid271",
                            "display",
                            97331,
                            0,
                            "linear",
                            "${hint_2_6_squared_plus_6_squared}",
                            'none',
                            'block'
                        ],
                        [
                            "eid316",
                            "height",
                            104000,
                            0,
                            "linear",
                            "${hint3_1}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid249",
                            "display",
                            51750,
                            0,
                            "linear",
                            "${B_squared}",
                            'none',
                            'block'
                        ],
                        [
                            "eid297",
                            "display",
                            122775,
                            0,
                            "linear",
                            "${B_squared}",
                            'block',
                            'none'
                        ],
                        [
                            "eid322",
                            "left",
                            104000,
                            0,
                            "linear",
                            "${hint3_1Copy}",
                            '429px',
                            '429px'
                        ],
                        [
                            "eid239",
                            "top",
                            0,
                            40500,
                            "linear",
                            "${Answers}",
                            '397px',
                            '386px'
                        ],
                        [
                            "eid247",
                            "display",
                            51750,
                            0,
                            "linear",
                            "${a_squared}",
                            'none',
                            'block'
                        ],
                        [
                            "eid300",
                            "display",
                            122775,
                            0,
                            "linear",
                            "${a_squared}",
                            'block',
                            'none'
                        ],
                        [
                            "eid244",
                            "display",
                            49750,
                            0,
                            "linear",
                            "${hint_1_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid311",
                            "display",
                            124500,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid323",
                            "width",
                            104000,
                            0,
                            "linear",
                            "${hint3_1Copy}",
                            '51px',
                            '51px'
                        ],
                        [
                            "eid315",
                            "color",
                            125750,
                            0,
                            "linear",
                            "${Text2}",
                            'rgba(203,0,0,1.00)',
                            'rgba(203,0,0,1.00)'
                        ],
                        [
                            "eid241",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Answers}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid250",
                            "display",
                            51750,
                            0,
                            "linear",
                            "${A_squared}",
                            'none',
                            'block'
                        ],
                        [
                            "eid296",
                            "display",
                            122775,
                            0,
                            "linear",
                            "${A_squared}",
                            'block',
                            'none'
                        ],
                        [
                            "eid314",
                            "display",
                            124500,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid287",
                            "opacity",
                            51000,
                            418,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid294",
                            "opacity",
                            52500,
                            1000,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid303",
                            "opacity",
                            122775,
                            475,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid274",
                            "display",
                            104000,
                            0,
                            "linear",
                            "${hint3_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid313",
                            "display",
                            124500,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid246",
                            "display",
                            51750,
                            0,
                            "linear",
                            "${b_squared}",
                            'none',
                            'block'
                        ],
                        [
                            "eid301",
                            "display",
                            122775,
                            0,
                            "linear",
                            "${b_squared}",
                            'block',
                            'none'
                        ],
                        [
                            "eid280",
                            "display",
                            126750,
                            0,
                            "linear",
                            "${answer_hint_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid248",
                            "display",
                            51750,
                            0,
                            "linear",
                            "${c_squared}",
                            'none',
                            'block'
                        ],
                        [
                            "eid299",
                            "display",
                            122775,
                            0,
                            "linear",
                            "${c_squared}",
                            'block',
                            'none'
                        ],
                        [
                            "eid293",
                            "top",
                            51750,
                            418,
                            "linear",
                            "${Text}",
                            '268px',
                            '303px'
                        ],
                        [
                            "eid282",
                            "display",
                            76500,
                            0,
                            "linear",
                            "${hint1_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid284",
                            "display",
                            97331,
                            0,
                            "linear",
                            "${hint1_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid273",
                            "display",
                            104000,
                            0,
                            "linear",
                            "${hint3_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid279",
                            "display",
                            112000,
                            0,
                            "linear",
                            "${answer_hint_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid292",
                            "left",
                            51750,
                            418,
                            "linear",
                            "${Text}",
                            '132px',
                            '223px'
                        ],
                        [
                            "eid317",
                            "display",
                            104000,
                            0,
                            "linear",
                            "${hint3_1Copy}",
                            'none',
                            'block'
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
                            "eid240",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Answers}",
                            '1.01305',
                            '1.01305'
                        ],
                        [
                            "eid243",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${hint_1_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid268",
                            "display",
                            51750,
                            0,
                            "linear",
                            "${C_squared}",
                            'none',
                            'block'
                        ],
                        [
                            "eid295",
                            "display",
                            122775,
                            0,
                            "linear",
                            "${C_squared}",
                            'block',
                            'none'
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
                            [ "eid242", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question}', [] ] ],
                            [ "eid283", "trigger", 36000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1a}', [] ] ],
                            [ "eid269", "trigger", 53000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1b}', [] ] ],
                            [ "eid272", "trigger", 85000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2}', [] ] ],
                            [ "eid275", "trigger", 104000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint3}', [] ] ],
                            [ "eid278", "trigger", 112000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${answer}', [] ] ]
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
                            }]
                        }
                    ],
                    style: {
                        '${x}': {
                            display: 'none',
                            rect: [-8, -3, 42, 33]
                        },
                        '${check}': {
                            display: 'none',
                            rect: [-8, -16, 65, 42]
                        },
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
                            }]
                        }
                    ],
                    style: {
                        '${x}': {
                            display: 'none',
                            rect: [-8, -3, 42, 33]
                        },
                        '${check}': {
                            display: 'none',
                            rect: [-8, -16, 65, 42]
                        },
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
                            rect: ['0', '26px', '25', '24', 'auto', 'auto'],
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
                                type: 'text',
                                rect: ['0', '4', '27', '20px', 'auto', 'auto'],
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', '']
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
                            }]
                        }
                    ],
                    style: {
                        '${x}': {
                            display: 'none',
                            rect: [-8, -4, 42, 33]
                        },
                        '${check}': {
                            display: 'none',
                            rect: [-8, -16, 65, 42]
                        },
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
                            }]
                        }
                    ],
                    style: {
                        '${x}': {
                            display: 'none',
                            rect: [-8, -4, 42, 33]
                        },
                        '${check}': {
                            display: 'none',
                            rect: [-8, -16, 65, 42]
                        },
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
                            rect: ['0', '19px', '25', '24', 'auto', 'auto'],
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
                                type: 'text',
                                rect: ['0', '4', '27', '20px', 'auto', 'auto'],
                                id: 'Text5',
                                text: 'C',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', '']
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
                            rect: ['0', '13px', '25', '25', 'auto', 'auto'],
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
                                type: 'text',
                                rect: ['0', '5', '27', '19', 'auto', 'auto'],
                                id: 'Text4',
                                text: 'B',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', '']
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
                            id: 'A_Button',
                            type: 'group',
                            rect: ['8', '16', '25', '24', 'auto', 'auto'],
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
                                rect: ['-8', '-16', '65', '42', 'auto', 'auto'],
                                id: 'check',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            },
                            {
                                rect: ['-8', '-4', '42', '33', 'auto', 'auto'],
                                id: 'x',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '153', '42']
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
                            }]
                        }
                    ],
                    style: {
                        '${x}': {
                            display: 'none',
                            rect: [-8, -4, 42, 33]
                        },
                        '${check}': {
                            display: 'none',
                            rect: [-8, -16, 65, 42]
                        },
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
                            id: 'Group',
                            type: 'group',
                            rect: ['0', '2', '153', '183', 'auto', 'auto'],
                            c: [
                            {
                                id: 'EButton',
                                symbolName: 'EButton_3',
                                rect: ['8', '157', '101', '26', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'DButton',
                                symbolName: 'DButton_3',
                                rect: ['8', '121', '101', '26', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'CButton',
                                symbolName: 'CButton_3',
                                rect: ['8', '86', '101', '26', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'BButton',
                                symbolName: 'BButton_3',
                                rect: ['8', '50', '125', '26', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'AButton',
                                symbolName: 'AButton_3',
                                rect: ['0', '0', '153', '42', 'auto', 'auto'],
                                type: 'rect'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '156', '187']
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("problem_8GB6_1_edgeActions.js");
})("EdgeProblem");
