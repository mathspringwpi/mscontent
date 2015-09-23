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
                            rect: ['24', '386', '156', '187', 'auto', 'auto']
                        },
                        {
                            id: 'AnswerCText',
                            type: 'text',
                            rect: ['71', '475', '101', '19px', 'auto', 'auto'],
                            text: "3",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerBText',
                            type: 'text',
                            rect: ['71', '443', '112', '19px', 'auto', 'auto'],
                            text: "3",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerAText',
                            type: 'text',
                            rect: ['71', '408', '109', '19', 'auto', 'auto'],
                            text: "5",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
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
                            id: 'Hint_1',
                            display: 'block',
                            type: 'text',
                            rect: ['57px', '113px', '373px', '38', 'auto', 'auto'],
                            opacity: '0',
                            text: "Sydney took 1 minute and 20 seconds to run 400 meters. So, she had 400 meters for every 1 minute and 20 seconds and we could write it this way:",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint_3_text',
                            type: 'text',
                            rect: ['322px', '104px', '206px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Can you simplify this fraction more to get one of the answer choices?",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1)", "400", "none solid rgb(157, 0, 9)", "normal", "break-word", "normal"]
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
                            id: 'hint1',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint1.mp3",aud+"hint1.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'Question',
                            type: 'text',
                            rect: ['36px', '41px', '414px', '63px', 'auto', 'auto'],
                            text: "Sydney ran 400 meters in 1 minute and 20 seconds. What was Sydney's average rate in meters per second?",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [18, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(157, 0, 9)", "normal", "break-word", "normal"]
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
                            id: 'fraction',
                            type: 'group',
                            rect: ['86px', '481px', '21', '2', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['0px', '0px', '19px', '0px', 'auto', 'auto'],
                                fill: ["rgba(192,192,192,1)"],
                                stroke: [1,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['6px', '-17px', '26px', '18px', 'auto', 'auto'],
                                text: "1",
                                align: "left",
                                font: ['Times New Roman, Times, serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['6px', '5px', '26px', '19px', 'auto', 'auto'],
                                text: "3",
                                align: "left",
                                font: ['Times New Roman, Times, serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'fractionCopy',
                            type: 'group',
                            rect: ['71px', '523px', '21', '2', 'auto', 'auto'],
                            c: [
                            {
                                id: 'RectangleCopy',
                                type: 'rect',
                                rect: ['0px', '0px', '19px', '0px', 'auto', 'auto'],
                                fill: ["rgba(192,192,192,1)"],
                                stroke: [1,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'TextCopy',
                                type: 'text',
                                rect: ['6px', '-17px', '26px', '18px', 'auto', 'auto'],
                                text: "1",
                                align: "left",
                                font: ['Times New Roman, Times, serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'Text2Copy',
                                type: 'text',
                                rect: ['6px', '5px', '26px', '19px', 'auto', 'auto'],
                                text: "5",
                                align: "left",
                                font: ['Times New Roman, Times, serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'Hint_1_fraction',
                            type: 'group',
                            rect: ['41px', '237px', '233', '2', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Rectangle2',
                                type: 'rect',
                                rect: ['0px', '0px', '233px', '2px', 'auto', 'auto'],
                                fill: ["rgba(0,82,203,1.00)"],
                                stroke: [0,"rgba(0,82,203,1.00)","none"]
                            },
                            {
                                id: 'Text9',
                                type: 'text',
                                rect: ['15px', '19px', '213px', '19px', 'auto', 'auto'],
                                text: "1 minute and 20 seconds",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none solid rgb(0, 82, 203)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'Text8',
                                type: 'text',
                                rect: ['64px', '-32px', '175px', '30px', 'auto', 'auto'],
                                text: "400 meters",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none solid rgb(0, 82, 203)", "normal", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'Hint_1_fractionCopy',
                            type: 'group',
                            rect: ['326px', '237px', '233', '2', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Rectangle2Copy',
                                type: 'rect',
                                rect: ['0px', '0px', '169px', '2px', 'auto', 'auto'],
                                fill: ["rgba(0,82,203,1.00)"],
                                stroke: [0,"rgba(0,82,203,1.00)","none"]
                            },
                            {
                                id: 'Text9Copy',
                                type: 'text',
                                rect: ['36px', '19px', '126px', '19px', 'auto', 'auto'],
                                text: "80 seconds",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none solid rgb(0, 82, 203)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'Text8Copy',
                                type: 'text',
                                rect: ['36px', '-32px', '175px', '30px', 'auto', 'auto'],
                                text: "400 meters",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none solid rgb(0, 82, 203)", "normal", "break-word", "normal"]
                            },
                            {
                                id: '_10_down',
                                display: 'none',
                                type: 'text',
                                rect: ['67px', '4px', '34px', '30px', 'auto', 'auto'],
                                text: "10",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1)", "400", "none solid rgb(157, 0, 9)", "normal", "break-word", "normal"]
                            },
                            {
                                id: '_10_top',
                                display: 'none',
                                type: 'text',
                                rect: ['67px', '-49px', '26px', '17px', 'auto', 'auto'],
                                text: "10",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1)", "400", "none solid rgb(157, 0, 9)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'Rectangle3Copy',
                                display: 'none',
                                type: 'rect',
                                rect: ['21px', '27px', '49px', '2px', 'auto', 'auto'],
                                fill: ["rgba(157,0,9,1.00)"],
                                stroke: [0,"rgb(0, 82, 203)","none"],
                                transform: [[],['33']]
                            },
                            {
                                id: 'Rectangle3',
                                display: 'none',
                                type: 'rect',
                                rect: ['33px', '-19px', '49px', '2px', 'auto', 'auto'],
                                fill: ["rgba(157,0,9,1.00)"],
                                stroke: [0,"rgb(0, 82, 203)","none"],
                                transform: [[],['33']]
                            }]
                        },
                        {
                            id: 'equal_sign_3',
                            display: 'none',
                            type: 'text',
                            rect: ['292px', '458px', '26px', '17px', 'auto', 'auto'],
                            text: "=<br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "400", "none solid rgb(157, 0, 9)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Hint_1_fractionCopy2',
                            type: 'group',
                            rect: ['322px', '355px', '233', '2', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Rectangle2Copy2',
                                type: 'rect',
                                rect: ['0px', '0px', '169px', '2px', 'auto', 'auto'],
                                fill: ["rgba(0,82,203,1.00)"],
                                stroke: [0,"rgba(0,82,203,1.00)","none"]
                            },
                            {
                                id: 'Text9Copy2',
                                type: 'text',
                                rect: ['36px', '19px', '126px', '19px', 'auto', 'auto'],
                                text: "8 seconds",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none solid rgb(0, 82, 203)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'Text8Copy2',
                                type: 'text',
                                rect: ['36px', '-32px', '175px', '30px', 'auto', 'auto'],
                                text: "40 meters",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none solid rgb(0, 82, 203)", "normal", "break-word", "normal"]
                            },
                            {
                                id: '_8_top',
                                display: 'none',
                                type: 'text',
                                rect: ['61px', '-49px', '21px', '17px', 'auto', 'auto'],
                                text: "8",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1)", "400", "none solid rgb(157, 0, 9)", "normal", "break-word", "normal"]
                            },
                            {
                                id: '_8_down',
                                display: 'none',
                                type: 'text',
                                rect: ['61px', '8px', '21px', '17px', 'auto', 'auto'],
                                text: "8",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1)", "400", "none solid rgb(157, 0, 9)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'Rectangle4Copy',
                                display: 'none',
                                type: 'rect',
                                rect: ['23px', '30px', '34px', '2px', 'auto', 'auto'],
                                fill: ["rgba(157,0,9,1)"],
                                stroke: [0,"rgb(0, 82, 203)","none"],
                                transform: [[],['38']]
                            },
                            {
                                id: 'Rectangle4',
                                display: 'none',
                                type: 'rect',
                                rect: ['33px', '-22px', '34px', '2px', 'auto', 'auto'],
                                fill: ["rgba(157,0,9,1)"],
                                stroke: [0,"rgb(0, 82, 203)","none"],
                                transform: [[],['38']]
                            }]
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
                            id: 'equal_sign',
                            display: 'none',
                            type: 'text',
                            rect: ['296px', '230px', '60px', '17px', 'auto', 'auto'],
                            text: "=",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "400", "none solid rgb(0, 82, 203)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'equal_signCopy',
                            type: 'text',
                            rect: ['292px', '346px', '60px', '17px', 'auto', 'auto'],
                            opacity: '0',
                            text: "=",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "400", "none solid rgb(0, 82, 203)", "normal", "break-word", "normal"]
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
                            id: 'Answer_Hint_fraction',
                            type: 'group',
                            rect: ['352', '481', '98', '19', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Text17',
                                type: 'text',
                                rect: ['0px', '0px', '98px', '19px', 'auto', 'auto'],
                                text: "1 second",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "400", "none solid rgb(0, 82, 203)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'Text16',
                                type: 'text',
                                rect: ['-1px', '-43px', '76px', '30px', 'auto', 'auto'],
                                text: "5     meters",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "400", "none solid rgb(0, 82, 203)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'Rectangle5',
                                type: 'rect',
                                rect: ['-11px', '-15px', '80px', '2px', 'auto', 'auto'],
                                fill: ["rgba(0,82,203,1.00)"],
                                stroke: [0,"rgb(0, 82, 203)","none"]
                            }]
                        },
                        {
                            id: 'Answer_Text',
                            type: 'text',
                            rect: ['295px', '515px', '248px', '30px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Sydney ran 5 meters per second.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1.00)", "400", "none solid rgb(0, 82, 203)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Choose_A',
                            type: 'text',
                            rect: ['297px', '538px', '109px', '30px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Choose A",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(6,122,10,1.00)", "700", "none solid rgb(157, 0, 9)", "normal", "break-word", "normal"]
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
                    duration: 111500,
                    autoPlay: true,
                    labels: {
                        "Read Question": 2000,
                        "Hint 1": 16000,
                        "Hint 2": 34000,
                        "Hint 3": 58000,
                        "Answer Hint": 78000
                    },
                    data: [
                        [
                            "eid272",
                            "display",
                            72815,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid302",
                            "display",
                            95750,
                            0,
                            "linear",
                            "${_8_down}",
                            'none',
                            'block'
                        ],
                        [
                            "eid239",
                            "border-color",
                            2000,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'rgb(0, 0, 0)',
                            'rgb(0, 0, 0)'
                        ],
                        [
                            "eid163",
                            "top",
                            20500,
                            0,
                            "linear",
                            "${Answers}",
                            '386px',
                            '386px'
                        ],
                        [
                            "eid306",
                            "opacity",
                            96500,
                            750,
                            "linear",
                            "${Answer_Hint_fraction}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid276",
                            "display",
                            72815,
                            0,
                            "linear",
                            "${Hint_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid246",
                            "opacity",
                            32000,
                            750,
                            "linear",
                            "${Hint_1_fraction}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid307",
                            "display",
                            96500,
                            0,
                            "linear",
                            "${equal_sign_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid303",
                            "display",
                            95750,
                            0,
                            "linear",
                            "${_8_top}",
                            'none',
                            'block'
                        ],
                        [
                            "eid248",
                            "opacity",
                            32000,
                            750,
                            "linear",
                            "${Hint_1_fractionCopy}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid269",
                            "opacity",
                            56250,
                            798,
                            "linear",
                            "${Hint_1_fractionCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid313",
                            "opacity",
                            110500,
                            500,
                            "linear",
                            "${Choose_A}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid300",
                            "display",
                            95139,
                            0,
                            "linear",
                            "${Rectangle4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid281",
                            "opacity",
                            32000,
                            750,
                            "linear",
                            "${Hint_1_fractionCopy2}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid289",
                            "opacity",
                            56250,
                            0,
                            "linear",
                            "${Hint_1_fractionCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid290",
                            "opacity",
                            57048,
                            0,
                            "linear",
                            "${Hint_1_fractionCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid288",
                            "opacity",
                            74732,
                            518,
                            "linear",
                            "${Hint_1_fractionCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid280",
                            "opacity",
                            76500,
                            250,
                            "linear",
                            "${Hint_3_text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid273",
                            "display",
                            72815,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid310",
                            "opacity",
                            109533,
                            467,
                            "linear",
                            "${Answer_Text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid316",
                            "display",
                            56250,
                            0,
                            "linear",
                            "${equal_sign}",
                            'none',
                            'block'
                        ],
                        [
                            "eid274",
                            "display",
                            73500,
                            0,
                            "linear",
                            "${_10_top}",
                            'none',
                            'block'
                        ],
                        [
                            "eid238",
                            "border-color",
                            2000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgb(0, 0, 0)',
                            'rgb(0, 0, 0)'
                        ],
                        [
                            "eid285",
                            "opacity",
                            74732,
                            518,
                            "linear",
                            "${equal_signCopy}",
                            '0.000000',
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
                            "eid275",
                            "display",
                            73500,
                            0,
                            "linear",
                            "${_10_down}",
                            'none',
                            'block'
                        ],
                        [
                            "eid301",
                            "display",
                            95139,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid243",
                            "opacity",
                            16000,
                            500,
                            "linear",
                            "${Hint_1}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid240", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question}', [] ] ],
                            [ "eid247", "trigger", 16000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1}', [] ] ],
                            [ "eid249", "trigger", 34000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2}', [] ] ],
                            [ "eid314", "trigger", 58000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint3}', [] ] ],
                            [ "eid315", "trigger", 78000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${answer}', [] ] ]
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
                            type: 'group',
                            id: 'E_Button',
                            rect: [0, 0, '25', '24', 'auto', 'auto'],
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
                            type: 'group',
                            id: 'E_Button',
                            rect: [0, 0, '25', '24', 'auto', 'auto'],
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
                                rect: [-8, -3, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                            },
                            {
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                type: 'image',
                                display: 'none',
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
                            type: 'group',
                            id: 'E_Button',
                            rect: [0, 0, '25', '24', 'auto', 'auto'],
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
                            type: 'group',
                            id: 'D_Button',
                            rect: [0, 0, '25', '24', 'auto', 'auto'],
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
                                type: 'text',
                                rect: [0, 4, 27, '20px', 'auto', 'auto'],
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', '']
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
                            "eid3",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            'rgba(232,241,160,1.00)',
                            'rgba(232,241,160,1.00)'
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
                            "eid10",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            '1px',
                            '1px'
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
                            type: 'group',
                            id: 'D_Button',
                            rect: [0, 0, '25', '24', 'auto', 'auto'],
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
                                rect: [-8, -4, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                            },
                            {
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                type: 'image',
                                display: 'none',
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
                            "eid3",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            'rgba(232,241,160,1.00)',
                            'rgba(232,241,160,1.00)'
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
                            "eid10",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            '1px',
                            '1px'
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
                            type: 'group',
                            id: 'D_Button',
                            rect: [0, 0, '25', '24', 'auto', 'auto'],
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
                            "eid3",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            'rgba(232,241,160,1.00)',
                            'rgba(232,241,160,1.00)'
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
                            "eid10",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            '1px',
                            '1px'
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
                            type: 'group',
                            id: 'D_Button',
                            rect: [0, 0, '25', '24', 'auto', 'auto'],
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
                            "eid3",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            'rgba(232,241,160,1.00)',
                            'rgba(232,241,160,1.00)'
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
                            "eid10",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            '1px',
                            '1px'
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
                            type: 'group',
                            id: 'C_Button',
                            rect: [0, 0, '25', '24', 'auto', 'auto'],
                            c: [
                            {
                                rect: [0, 0, 25, 24, 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy6',
                                stroke: ['1px', 'rgba(0,0,0,1)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(232,241,160,1.00)']
                            },
                            {
                                type: 'text',
                                rect: [0, 4, 27, '20px', 'auto', 'auto'],
                                id: 'Text5',
                                text: 'C',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', '']
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
                            type: 'group',
                            id: 'B_Button',
                            rect: [0, 0, '25', '25', 'auto', 'auto'],
                            c: [
                            {
                                rect: [0, 0, 25, 24, 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy5',
                                stroke: ['1px', 'rgba(0,0,0,1)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(232,241,160,1.00)']
                            },
                            {
                                type: 'text',
                                rect: [0, 5, 27, 19, 'auto', 'auto'],
                                id: 'Text4',
                                text: 'B',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', '']
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
                            rect: [null, null, 125, 26]
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
                            type: 'group',
                            id: 'A_Button',
                            rect: [8, 16, '25', '24', 'auto', 'auto'],
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
                                rect: [0, 3, 27, 19, 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                                id: 'A',
                                text: 'A<br><br><br>',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: [-8, -4, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
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
                            type: 'group',
                            id: 'A_Button',
                            rect: [8, 16, '25', '24', 'auto', 'auto'],
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
                            type: 'group',
                            id: 'Group',
                            rect: ['0', '2', '153', '183', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'EButton',
                                symbolName: 'EButton_3',
                                rect: ['8', '157', '101', '26', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'DButton',
                                symbolName: 'DButton_3',
                                rect: ['8', '121', '101', '26', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'CButton',
                                symbolName: 'CButton_3',
                                rect: ['8', '86', '101', '26', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'BButton',
                                symbolName: 'BButton_3',
                                rect: ['8', '50', '125', '26', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'AButton',
                                symbolName: 'AButton_3',
                                rect: ['0', '0', '153', '42', 'auto', 'auto']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("problem_6RPA2_1_edgeActions.js");
})("EdgeProblem");
