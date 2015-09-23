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
                            rect: ['24', '30', '298', '78px', 'auto', 'auto'],
                            text: "Ming is making cookies. To make 30 cookies, his recipe requires 3 eggs. Using this recipe, what is the total number of eggs he will need to make 120 cookies?<br>",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Answers',
                            symbolName: 'Answers_1',
                            type: 'rect',
                            rect: ['24', '386', '156', '187', 'auto', 'auto']
                        },
                        {
                            id: 'AnswerDText',
                            type: 'text',
                            rect: ['71', '511', '101', '20px', 'auto', 'auto'],
                            text: "12",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerCText',
                            type: 'text',
                            rect: ['71', '475', '101', '19px', 'auto', 'auto'],
                            text: "10",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerBText',
                            type: 'text',
                            rect: ['71', '443', '112', '19px', 'auto', 'auto'],
                            text: "9",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerAText',
                            type: 'text',
                            rect: ['71', '408', '109', '19', 'auto', 'auto'],
                            text: "6",
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
                            id: 'hint_1_3',
                            display: 'none',
                            type: 'text',
                            rect: ['31px', '232px', '298px', '38px', 'auto', 'auto'],
                            text: "Let's use a table to solve this problem. Can you figure out how many eggs Ming will need to make 60 cookies?",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1)", "400", "none solid rgb(157, 0, 9)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'hint1_1',
                            display: 'none',
                            type: 'text',
                            rect: ['24px', '118px', '377px', '38px', 'auto', 'auto'],
                            text: "To make 30 cookies, Ming's recipe requires 3 eggs. Can you express this sentence as a ratio? ",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint1_2',
                            display: 'none',
                            type: 'text',
                            rect: ['24px', '177px', '333px', '20px', 'auto', 'auto'],
                            text: "This sentence means that for every 30 cookies, there will be 3 eggs.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "400", "none solid rgb(0, 82, 203)", "normal", "break-word", "normal"]
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
                            id: 'hint1',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint1.mp3",aud+"hint1.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'Table',
                            display: 'none',
                            type: 'group',
                            rect: ['433', '270', '3', '209', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle2',
                                type: 'rect',
                                rect: ['0px', '0px', '3px', '209px', 'auto', 'auto'],
                                fill: ["rgba(0,82,203,1.00)"],
                                stroke: [1,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['-122px', '51px', '240px', '3px', 'auto', 'auto'],
                                fill: ["rgba(0,82,203,1.00)"],
                                stroke: [1,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Text6',
                                type: 'text',
                                rect: ['26px', '20px', '79px', '20px', 'auto', 'auto'],
                                text: "Eggs",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(2,134,43,1.00)", "700", "none solid rgb(1, 107, 34)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['-92px', '20px', '92px', '31px', 'auto', 'auto'],
                                text: "Cookies",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(2,134,43,1.00)", "700", "none solid rgb(157, 0, 9)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'Text7',
                                type: 'text',
                                rect: ['-76px', '64px', '64px', '20px', 'auto', 'auto'],
                                text: "30<br>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(1,1,1,1.00)", "700", "none solid rgb(2, 134, 43)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'Text8',
                                type: 'text',
                                rect: ['41px', '64px', '48px', '19px', 'auto', 'auto'],
                                text: "3<br>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(1,1,1,1)", "700", "none solid rgb(1, 1, 1)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'Text9',
                                type: 'text',
                                rect: ['-76px', '95px', '29px', '20px', 'auto', 'auto'],
                                text: "60",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(1,1,1,1)", "700", "none solid rgb(1, 1, 1)", "normal", "break-word", "normal"]
                            },
                            {
                                id: '_120',
                                display: 'none',
                                type: 'text',
                                rect: ['-81px', '159px', '39px', '20px', 'auto', 'auto'],
                                text: "120",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(1,1,1,1)", "700", "none solid rgb(1, 1, 1)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'question_mark_1',
                                display: 'block',
                                type: 'text',
                                rect: ['41px', '96px', '29px', '19px', 'auto', 'auto'],
                                text: "?",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(151,0,0,1.00)", "700", "none solid rgb(1, 1, 1)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'question_mark_2',
                                display: 'none',
                                type: 'text',
                                rect: ['41px', '125px', '28px', '25px', 'auto', 'auto'],
                                text: "?",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(151,0,0,1)", "700", "none solid rgb(151, 0, 0)", "normal", "break-word", "normal"]
                            },
                            {
                                id: '_9',
                                display: 'none',
                                type: 'text',
                                rect: ['42px', '125px', '30px', '18px', 'auto', 'auto'],
                                text: "9",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(151,0,0,1)", "700", "none solid rgb(151, 0, 0)", "normal", "break-word", "normal"]
                            },
                            {
                                id: '_12',
                                display: 'none',
                                type: 'text',
                                rect: ['41px', '160px', '32px', '18px', 'auto', 'auto'],
                                text: "12",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(151,0,0,1)", "700", "none solid rgb(151, 0, 0)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'Question_mark_3',
                                display: 'none',
                                type: 'text',
                                rect: ['41px', '159px', '32px', '21px', 'auto', 'auto'],
                                text: "?",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(151,0,0,1)", "700", "none solid rgb(151, 0, 0)", "normal", "break-word", "normal"]
                            },
                            {
                                id: '_90',
                                display: 'none',
                                type: 'text',
                                rect: ['-76px', '125px', '39px', '29px', 'auto', 'auto'],
                                text: "90",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(1,1,1,1.00)", "700", "none solid rgb(151, 0, 0)", "normal", "break-word", "normal"]
                            },
                            {
                                id: '_6',
                                display: 'none',
                                type: 'text',
                                rect: ['42px', '95px', '25px', '19px', 'auto', 'auto'],
                                text: "6",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(151,0,0,1)", "700", "none solid rgb(151, 0, 0)", "normal", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'Hint2_1',
                            display: 'none',
                            type: 'text',
                            rect: ['83px', '306px', '213px', '51px', 'auto', 'auto'],
                            text: "60 cookies is 30 cookies times 2. He will need 2 times as many eggs.",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Hint2_2',
                            display: 'block',
                            type: 'text',
                            rect: ['199px', '377px', '112px', '31px', 'auto', 'auto'],
                            opacity: '0',
                            text: "3 x 2 =6",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(8,111,24,1.00)", "400", "none solid rgb(157, 0, 9)", "normal", "break-word", "normal"]
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
                            id: 'Hint_3_1',
                            display: 'none',
                            type: 'text',
                            rect: ['38px', '258px', '213px', '51px', 'auto', 'auto'],
                            text: "90 cookies is 30 cookies times 3. He will need 3 times as many eggs.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1.00)", "400", "none solid rgb(8, 111, 24)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Hint3_3',
                            display: 'none',
                            type: 'text',
                            rect: ['234px', '500px', '276px', '51px', 'auto', 'auto'],
                            text: "Now, what about 120 cookies? How many eggs does Ming need?",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1)", "400", "none solid rgb(157, 0, 9)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Answer_1',
                            display: 'none',
                            type: 'text',
                            rect: ['35px', '252px', '251px', '58px', 'auto', 'auto'],
                            text: "120 cookies is 30 cookies times 4. He will need 4 times as many eggs.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1)", "400", "none solid rgb(157, 0, 9)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Answer_2',
                            display: 'none',
                            type: 'text',
                            rect: ['166px', '334px', '92px', '31px', 'auto', 'auto'],
                            text: "3 x 4 = 12",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(8,111,24,1.00)", "400", "none solid rgb(157, 0, 9)", "normal", "break-word", "normal"]
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
                            id: 'hint2',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint2.mp3",aud+"hint2.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'Hint2_3',
                            display: 'none',
                            type: 'text',
                            rect: ['243px', '505px', '295px', '51px', 'auto', 'auto'],
                            text: "How many eggs will Ming need if he wants to make 90 cookies?",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Hint3_2',
                            display: 'none',
                            type: 'text',
                            rect: ['156px', '344px', '79px', '31px', 'auto', 'auto'],
                            text: "3 x 3 = 9",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(8,111,24,1)", "400", "none solid rgb(8, 111, 24)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'choose_d',
                            display: 'none',
                            type: 'text',
                            rect: ['172px', '459px', '109px', '32px', 'auto', 'auto'],
                            text: "Choose (D)",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(8,111,24,1.00)", "700", "none solid rgb(151, 0, 0)", "normal", "break-word", "normal"]
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
                    duration: 123000,
                    autoPlay: true,
                    labels: {
                        "Read Question": 2000,
                        "Hint 1": 20000,
                        "Hint 2": 49000,
                        "Hint 3": 74000,
                        "Answer Hint": 101000
                    },
                    data: [
                        [
                            "eid274",
                            "display",
                            72000,
                            0,
                            "linear",
                            "${Hint2_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid287",
                            "display",
                            99647,
                            0,
                            "linear",
                            "${Hint2_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid249",
                            "display",
                            65349,
                            0,
                            "linear",
                            "${question_mark_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid300",
                            "display",
                            122000,
                            0,
                            "linear",
                            "${choose_d}",
                            'none',
                            'block'
                        ],
                        [
                            "eid239",
                            "display",
                            31048,
                            0,
                            "linear",
                            "${hint1_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "top",
                            24500,
                            0,
                            "linear",
                            "${Answers}",
                            '386px',
                            '386px'
                        ],
                        [
                            "eid297",
                            "display",
                            111250,
                            0,
                            "linear",
                            "${Answer_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid296",
                            "display",
                            101847,
                            0,
                            "linear",
                            "${Answer_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid245",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${Hint2_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid276",
                            "display",
                            74000,
                            0,
                            "linear",
                            "${Hint2_1}",
                            'block',
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
                            "eid241",
                            "display",
                            47250,
                            0,
                            "linear",
                            "${Table}",
                            'none',
                            'block'
                        ],
                        [
                            "eid238",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${hint1_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid294",
                            "display",
                            84500,
                            0,
                            "linear",
                            "${Hint3_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid295",
                            "display",
                            101000,
                            0,
                            "linear",
                            "${Hint3_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid240",
                            "display",
                            38500,
                            0,
                            "linear",
                            "${hint_1_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid275",
                            "display",
                            74000,
                            0,
                            "linear",
                            "${hint_1_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            120879,
                            0,
                            "linear",
                            "${_12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid284",
                            "display",
                            92000,
                            0,
                            "linear",
                            "${_9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid248",
                            "opacity",
                            59500,
                            916,
                            "linear",
                            "${Hint2_2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid268",
                            "display",
                            71000,
                            0,
                            "linear",
                            "${question_mark_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid283",
                            "display",
                            92000,
                            0,
                            "linear",
                            "${question_mark_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid272",
                            "display",
                            71000,
                            0,
                            "linear",
                            "${_90}",
                            'none',
                            'block'
                        ],
                        [
                            "eid286",
                            "display",
                            99647,
                            0,
                            "linear",
                            "${Question_mark_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "display",
                            120879,
                            0,
                            "linear",
                            "${Question_mark_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid288",
                            "display",
                            99647,
                            0,
                            "linear",
                            "${Hint3_3}",
                            'none',
                            'block'
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
                            "eid278",
                            "display",
                            75000,
                            0,
                            "linear",
                            "${Hint_3_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid289",
                            "display",
                            101000,
                            0,
                            "linear",
                            "${Hint_3_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid250",
                            "display",
                            65349,
                            0,
                            "linear",
                            "${_6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid277",
                            "display",
                            74000,
                            0,
                            "linear",
                            "${Hint2_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid285",
                            "display",
                            99647,
                            0,
                            "linear",
                            "${_120}",
                            'none',
                            'block'
                        ],
                            [ "eid242", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question}', [] ] ],
                            [ "eid243", "trigger", 20000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1}', [] ] ],
                            [ "eid273", "trigger", 49000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2}', [] ] ],
                            [ "eid301", "trigger", 74000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint3}', [] ] ],
                            [ "eid302", "trigger", 101000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${answer}', [] ] ]
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                type: 'text',
                                id: 'Text8',
                                text: 'E',
                                align: 'center',
                                rect: [0, 4, 27, '20px', 'auto', 'auto']
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
                                type: 'text',
                                rect: [0, 4, 27, '20px', 'auto', 'auto'],
                                id: 'Text8',
                                text: 'E',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                            },
                            {
                                type: 'text',
                                rect: [36, 4, 101, '20px', 'auto', 'auto'],
                                id: 'Text14',
                                text: 'Answer E Text',
                                align: 'left',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                                type: 'text',
                                rect: [0, 4, 27, '20px', 'auto', 'auto'],
                                id: 'Text8',
                                text: 'E',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                            },
                            {
                                type: 'text',
                                rect: [36, 4, 101, '20px', 'auto', 'auto'],
                                id: 'Text14',
                                text: 'Answer E Text',
                                align: 'left',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                                rect: [0, 4, 27, '20px', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                type: 'text'
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
                                type: 'text',
                                rect: [0, 4, 27, '20px', 'auto', 'auto'],
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                            },
                            {
                                type: 'text',
                                rect: [36, 4, 101, '20px', 'auto', 'auto'],
                                id: 'Text13',
                                text: 'Answer D Text',
                                align: 'left',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                                type: 'text',
                                rect: [0, 4, 27, '20px', 'auto', 'auto'],
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                            },
                            {
                                type: 'text',
                                rect: [36, 4, 101, '20px', 'auto', 'auto'],
                                id: 'Text13',
                                text: 'Answer D Text',
                                align: 'left',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                                type: 'text',
                                rect: [0, 4, 27, '20px', 'auto', 'auto'],
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                            },
                            {
                                type: 'text',
                                rect: [36, 4, 94, '20px', 'auto', 'auto'],
                                id: 'Text13',
                                text: 'Answer Text D',
                                align: 'left',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                            rect: [0, 0, '25', '24', 'auto', 'auto'],
                            id: 'C_Button',
                            type: 'group',
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
                                rect: [0, 4, 27, '20px', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                                id: 'Text5',
                                text: 'C',
                                align: 'center',
                                type: 'text'
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
                            rect: [0, 0, '25', '25', 'auto', 'auto'],
                            id: 'B_Button',
                            type: 'group',
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
                                rect: [0, 5, 27, 19, 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                                id: 'Text4',
                                text: 'B',
                                align: 'center',
                                type: 'text'
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                                type: 'text',
                                id: 'A',
                                text: 'A<br><br><br>',
                                align: 'center',
                                rect: [0, 3, 27, 19, 'auto', 'auto']
                            },
                            {
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            },
                            {
                                rect: [-8, -4, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                type: 'image',
                                display: 'none',
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
                                type: 'text',
                                rect: [0, 3, 27, 19, 'auto', 'auto'],
                                id: 'Text3',
                                text: 'A<br><br><br>',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                            },
                            {
                                type: 'text',
                                rect: [36, 3, 109, '19px', 'auto', 'auto'],
                                id: 'Text9',
                                text: 'Answer Text A',
                                align: 'left',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                            rect: ['0', '2', '153', '183', 'auto', 'auto'],
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("problem_6RPA3_1_edgeActions.js");
})("EdgeProblem");
