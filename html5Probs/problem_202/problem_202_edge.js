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
            js+"jquery-1.7.1.min.js",
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
                            id: 'Rectangle',
                            type: 'image',
                            rect: ['46', '-75', '700', '490', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Rectangle.png",'0px','0px']
                        },
                        {
                            id: 'Text3',
                            display: 'none',
                            type: 'text',
                            rect: ['391', '256', '37px', '17px', 'auto', 'auto'],
                            text: ")",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerDText',
                            type: 'text',
                            rect: ['71', '293', '101', '20px', 'auto', 'auto'],
                            align: "left",
                            font: ['Times New Roman, Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerCText',
                            type: 'text',
                            rect: ['67', '224', '101', '19px', 'auto', 'auto'],
                            text: "300",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [16, "px"], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text14',
                            type: 'text',
                            rect: ['67px', '190', '26px', '17px', 'auto', 'auto'],
                            text: "250",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", ""]
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
                            id: 'TutorialText',
                            display: 'none',
                            type: 'text',
                            rect: ['260', '51', '237px', '187', 'auto', 'auto'],
                            opacity: '1',
                            text: "Let's pretend your hint starts here at 0:10. It does not really matter where the hints start and end, as long as they don't overlap. Don't worry that the X and Checks are showing up either - it's just because I set their timeline to 5 seconds in the symbol. They won't appear in the final animation.<br><br>This rectangle is a space for you to draw your animation. An example will follow in hint 2.",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerEText',
                            type: 'text',
                            rect: ['67', '332', '101', '20', 'auto', 'auto'],
                            text: "400",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [16, "px"], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint1',
                            type: 'text',
                            rect: ['205', '219', '156', '30px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Area = h * w",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(200,8,8,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint7_x',
                            type: 'text',
                            rect: ['297', '262', '66', '44', 'auto', 'auto'],
                            opacity: '0',
                            text: "*",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint1_h',
                            type: 'text',
                            rect: ['271', '216', '29', '30', 'auto', 'auto'],
                            opacity: '0',
                            text: "h",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(200,8,8,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'h_red',
                            type: 'rect',
                            rect: ['475', '87px', '6', '15', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(200,8,8,1.00)"],
                            stroke: [0,"rgba(200,8,8,1.00)","none"]
                        },
                        {
                            id: 'hint1_w',
                            type: 'text',
                            rect: ['304', '217', '37', '19', 'auto', 'auto'],
                            opacity: '0',
                            text: "w<br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(200,8,8,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint3_2x',
                            type: 'text',
                            rect: ['316', '115', '42px', '17px', 'auto', 'auto'],
                            opacity: '0',
                            text: "2x =",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(140,4,4,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint4_x_is_5',
                            type: 'text',
                            rect: ['423', '312', '77px', '38', 'auto', 'auto'],
                            opacity: '0',
                            text: "x = 15",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint4_solve_for_x',
                            type: 'text',
                            rect: ['420', '284', '109px', '30px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Solve for x",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint4_2x_equals_10',
                            type: 'text',
                            rect: ['317', '114', '125px', '30px', 'auto', 'auto'],
                            opacity: '0',
                            text: "2x =30",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'w_red',
                            type: 'rect',
                            rect: ['465', '186', '16', '6', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(200,8,8,1)"],
                            stroke: [0,"rgb(240, 9, 9)","solid"]
                        },
                        {
                            id: 'AC',
                            type: 'rect',
                            rect: ['383', '34', '6', '208', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(200,8,8,1)"],
                            stroke: [0,"rgb(240, 9, 9)","solid"],
                            transform: [[],['62']]
                        },
                        {
                            id: '_90_degree',
                            type: 'group',
                            rect: ['426', '250', '3', '17', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: '_90_angle',
                                type: 'group',
                                rect: ['32', '-83', '24', '3', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Rectangle6',
                                    type: 'rect',
                                    rect: ['0', '0', '17', '3', 'auto', 'auto'],
                                    fill: ["rgba(200,8,8,1)"],
                                    stroke: [0,"rgb(240, 9, 9)","solid"]
                                },
                                {
                                    id: 'Rectangle7',
                                    type: 'rect',
                                    rect: ['0', '3', '3', '17px', 'auto', 'auto'],
                                    fill: ["rgba(200,8,8,1)"],
                                    stroke: [0,"rgb(240, 9, 9)","solid"]
                                }]
                            },
                            {
                                id: '_90',
                                type: 'text',
                                rect: ['3', '-83', '41px', '16px', 'auto', 'auto'],
                                text: "90º",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(200,8,8,1)", "normal", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: '_30_degree',
                            type: 'group',
                            rect: ['327', '250', '3', '17', 'auto', 'auto'],
                            opacity: '0.000000',
                            c: [
                            {
                                id: '_30',
                                type: 'text',
                                rect: ['8', '-83', '41px', '16px', 'auto', 'auto'],
                                text: "30º",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(200,8,8,1)", "normal", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'hint2_text',
                            type: 'text',
                            rect: ['176', '250', '314', '49px', 'auto', 'auto'],
                            opacity: '0',
                            text: "What is the relationship between the sides of a 30-60-90 triangle?",
                            font: ['Times New Roman, Times, serif', [20, "px"], "rgba(140,4,4,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'hint3_x',
                            type: 'text',
                            rect: ['509', '129', '42px', '17px', 'auto', 'auto'],
                            opacity: '0',
                            text: "= x",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint3_equal_square_root_3_',
                            type: 'group',
                            rect: ['458', '203', '39', '24', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'x',
                                display: 'none',
                                type: 'text',
                                rect: ['-8', '-4', '42', '33', 'auto', 'auto'],
                                opacity: '1',
                                text: "x<br>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1.00)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'equal',
                                type: 'text',
                                rect: ['-51', '0', 'auto', 'auto', 'auto', 'auto'],
                                text: "=",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1.00)", "normal", "none", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'hint3_square_root_3_a',
                                type: 'image',
                                rect: ['-33', '1', '24', '20', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"hint3%20square%20root%203%20a.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'hint5',
                            type: 'text',
                            rect: ['178', '293', '213', '49px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Can you find the value of h and w ?",
                            font: ['Times New Roman, Times, serif', [20, "px"], "rgba(140,4,4,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'hint6_5_for_h',
                            type: 'text',
                            rect: ['438', '310', '59', '22px', 'auto', 'auto'],
                            opacity: '0',
                            text: "= 15",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint7_5',
                            type: 'text',
                            rect: ['527', '129', '44px', '16', 'auto', 'auto'],
                            opacity: '0',
                            text: "15",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint6_5_for_w',
                            type: 'text',
                            rect: ['438', '310', '59px', '22px', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "15",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint6__multiplication_symbol',
                            type: 'text',
                            rect: ['454', '207', '8', '20', 'auto', 'auto'],
                            opacity: '0',
                            text: "*",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint7_5_square_root_3',
                            type: 'group',
                            rect: ['57', '141', '24', '20', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'hint3_square_root_3_aCopy',
                                type: 'image',
                                rect: ['368', '63', '24', '20', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"hint3%20square%20root%203%20a.png",'0px','0px']
                            },
                            {
                                id: 'hint7_x5',
                                type: 'text',
                                rect: ['396', '64', '77px', '38px', 'auto', 'auto'],
                                text: "* 15",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'Text2',
                            display: 'none',
                            type: 'text',
                            rect: ['313', '256', 'auto', 'auto', 'auto', 'auto'],
                            text: "(",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'answer_hint_1',
                            type: 'group',
                            rect: ['305', '308', '24', '20', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'square_root_3',
                                type: 'image',
                                rect: ['12', '2', '24', '22', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"hint3%20square%20root%203%20a.png",'0px','0px']
                            },
                            {
                                id: 'area_is_25',
                                type: 'text',
                                rect: ['-107', '-1', '164px', '44px', 'auto', 'auto'],
                                text: "Area = 225",
                                align: "left",
                                font: ['Verdana, Geneva, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'choose_b',
                            type: 'text',
                            rect: ['197', '346', '142px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Choose (D)",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['18', '17', '227', '37', 'auto', 'auto'],
                            text: "In rectangle ABCD, diagonal AC makes a ",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text12',
                            type: 'text',
                            rect: ['137', '36', '145', '16px', 'auto', 'auto'],
                            text: "angle with side CD. ",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text13',
                            type: 'text',
                            rect: ['18', '74', '237', '16px', 'auto', 'auto'],
                            text: "what is the area of the rectangle?",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'CodeCogsEqn_20',
                            type: 'image',
                            rect: ['112', '37', '21', '13', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2820%29.gif",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_24',
                            type: 'image',
                            rect: ['68', '262', '45', '14', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2824%29.gif",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_25',
                            type: 'image',
                            rect: ['68', '298', '43', '14', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2825%29.gif",'0px','0px']
                        },
                        {
                            id: 'Text13Copy',
                            type: 'text',
                            rect: ['18', '55', '237', '16px', 'auto', 'auto'],
                            text: "If the length of AC=30, ",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text',
                            display: 'none',
                            type: 'text',
                            rect: ['205', '257', '83px', '24px', 'auto', 'auto'],
                            text: "Area =",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(15,14,14,1.00)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint12',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint1.mp3",aud+"hint1.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint2a',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint2a.mp3",aud+"hint2a.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint2b',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint2b.mp3",aud+"hint2b.ogg"],
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
                            id: 'hint4a',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint4a.mp3",aud+"hint4a.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint4b',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint4b.mp3",aud+"hint4b.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint52',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint5.mp3",aud+"hint5.ogg"],
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
                            id: 'hint6',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint6.mp3",aud+"hint6.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'Answers',
                            symbolName: 'Answers_1',
                            type: 'rect',
                            rect: ['22', '168', '156', '187', 'auto', 'auto']
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
                    duration: 140000,
                    autoPlay: true,
                    labels: {
                        "Read Question": 2000,
                        "Hint 1": 17000,
                        "Hint 2": 40000,
                        "Hint 3": 62000,
                        "Hint 4": 85000,
                        "Hint 5": 108000,
                        "Hint 6": 119000,
                        "Hint 7": 125024,
                        "Answer Hint": 134000
                    },
                    data: [
                        [
                            "eid199",
                            "left",
                            37000,
                            1500,
                            "easeInCubic",
                            "${w_red}",
                            '465px',
                            '295px'
                        ],
                        [
                            "eid283",
                            "opacity",
                            117000,
                            1000,
                            "linear",
                            "${hint5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid355",
                            "opacity",
                            134000,
                            0,
                            "easeOutQuad",
                            "${hint5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "opacity",
                            78000,
                            1000,
                            "linear",
                            "${hint3_x}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid289",
                            "opacity",
                            121000,
                            0,
                            "linear",
                            "${hint3_x}",
                            '1',
                            '0'
                        ],
                        [
                            "eid245",
                            "opacity",
                            82000,
                            1000,
                            "easeInCubic",
                            "${hint3_equal_square_root_3_}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid278",
                            "opacity",
                            109000,
                            1000,
                            "linear",
                            "${hint4_x_is_5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid167",
                            "left",
                            29000,
                            2000,
                            "linear",
                            "${hint1_h}",
                            '271px',
                            '494px'
                        ],
                        [
                            "eid162",
                            "opacity",
                            26000,
                            1000,
                            "linear",
                            "${hint1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid203",
                            "opacity",
                            46000,
                            500,
                            "easeInCubic",
                            "${AC}",
                            '0.000000',
                            '0.96'
                        ],
                        [
                            "eid358",
                            "opacity",
                            134000,
                            1000,
                            "easeOutQuad",
                            "${answer_hint_1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid299",
                            "top",
                            122000,
                            1750,
                            "linear",
                            "${hint6_5_for_w}",
                            '310px',
                            '205px'
                        ],
                        [
                            "eid173",
                            "opacity",
                            32000,
                            250,
                            "linear",
                            "${h_red}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid249",
                            "opacity",
                            92000,
                            500,
                            "linear",
                            "${hint4_2x_equals_10}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid297",
                            "opacity",
                            122000,
                            500,
                            "linear",
                            "${hint6_5_for_w}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid307",
                            "opacity",
                            128000,
                            500,
                            "linear",
                            "${hint7_5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid168",
                            "top",
                            29000,
                            2000,
                            "linear",
                            "${hint1_h}",
                            '216px',
                            '129px'
                        ],
                        [
                            "eid298",
                            "left",
                            122000,
                            1750,
                            "linear",
                            "${hint6_5_for_w}",
                            '438px',
                            '467px'
                        ],
                        [
                            "eid375",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid376",
                            "display",
                            127500,
                            0,
                            "easeOutQuad",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid280",
                            "opacity",
                            104000,
                            1000,
                            "linear",
                            "${hint4_solve_for_x}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid240",
                            "color",
                            82000,
                            1000,
                            "easeInCubic",
                            "${hint1_w}",
                            'rgba(200,8,8,1)',
                            'rgba(17,16,16,1.00)'
                        ],
                        [
                            "eid309",
                            "top",
                            128000,
                            2000,
                            "linear",
                            "${hint7_5}",
                            '129px',
                            '257px'
                        ],
                        [
                            "eid174",
                            "height",
                            32250,
                            750,
                            "linear",
                            "${h_red}",
                            '15px',
                            '99px'
                        ],
                        [
                            "eid269",
                            "left",
                            92000,
                            2000,
                            "linear",
                            "${hint4_2x_equals_10}",
                            '317px',
                            '421px'
                        ],
                        [
                            "eid300",
                            "opacity",
                            122000,
                            0,
                            "linear",
                            "${x}",
                            '1',
                            '1'
                        ],
                        [
                            "eid301",
                            "opacity",
                            123750,
                            0,
                            "linear",
                            "${x}",
                            '1',
                            '0'
                        ],
                        [
                            "eid270",
                            "top",
                            92000,
                            2000,
                            "linear",
                            "${hint4_2x_equals_10}",
                            '114px',
                            '250px'
                        ],
                        [
                            "eid91",
                            "display",
                            28000,
                            0,
                            "linear",
                            "${TutorialText}",
                            'none',
                            'block'
                        ],
                        [
                            "eid286",
                            "opacity",
                            119000,
                            500,
                            "linear",
                            "${hint6_5_for_h}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid367",
                            "opacity",
                            50000,
                            1000,
                            "easeInCubic",
                            "${_30_degree}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid308",
                            "left",
                            128000,
                            2000,
                            "linear",
                            "${hint7_5}",
                            '527px',
                            '271px'
                        ],
                        [
                            "eid363",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${hint7_x}",
                            '0',
                            '0'
                        ],
                        [
                            "eid364",
                            "opacity",
                            130000,
                            0,
                            "linear",
                            "${hint7_x}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "opacity",
                            20000,
                            3000,
                            "linear",
                            "${TutorialText}",
                            '1',
                            '0'
                        ],
                        [
                            "eid354",
                            "top",
                            131000,
                            1000,
                            "linear",
                            "${hint7_5_square_root_3}",
                            '141px',
                            '196px'
                        ],
                        [
                            "eid369",
                            "top",
                            132000,
                            1000,
                            "easeOutQuad",
                            "${hint7_5_square_root_3}",
                            '196px',
                            '193px'
                        ],
                        [
                            "eid186",
                            "left",
                            34500,
                            1500,
                            "easeOutQuad",
                            "${hint1_w}",
                            '304px',
                            '385px'
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
                            "eid287",
                            "left",
                            119000,
                            2000,
                            "linear",
                            "${hint6_5_for_h}",
                            '438px',
                            '509px'
                        ],
                        [
                            "eid365",
                            "opacity",
                            123000,
                            0,
                            "linear",
                            "${hint6__multiplication_symbol}",
                            '0',
                            '0'
                        ],
                        [
                            "eid366",
                            "opacity",
                            123750,
                            0,
                            "linear",
                            "${hint6__multiplication_symbol}",
                            '0',
                            '1'
                        ],
                        [
                            "eid198",
                            "opacity",
                            37000,
                            500,
                            "easeInCubic",
                            "${w_red}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid200",
                            "width",
                            37000,
                            1500,
                            "easeInCubic",
                            "${w_red}",
                            '16px',
                            '186px'
                        ],
                        [
                            "eid273",
                            "font-size",
                            92000,
                            0,
                            "linear",
                            "${hint4_2x_equals_10}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid233",
                            "color",
                            78000,
                            1000,
                            "linear",
                            "${hint1_h}",
                            'rgba(200,8,8,1)',
                            'rgba(19,19,19,1.00)'
                        ],
                        [
                            "eid373",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${Text3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid374",
                            "display",
                            132500,
                            0,
                            "easeOutQuad",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid237",
                            "opacity",
                            80000,
                            1000,
                            "linear",
                            "${hint3_2x}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid275",
                            "opacity",
                            92000,
                            0,
                            "linear",
                            "${hint3_2x}",
                            '1',
                            '1'
                        ],
                        [
                            "eid288",
                            "top",
                            119000,
                            2000,
                            "linear",
                            "${hint6_5_for_h}",
                            '310px',
                            '129px'
                        ],
                        [
                            "eid336",
                            "opacity",
                            131000,
                            500,
                            "easeOutQuad",
                            "${hint7_5_square_root_3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid353",
                            "left",
                            131000,
                            1000,
                            "linear",
                            "${hint7_5_square_root_3}",
                            '57px',
                            '-65px'
                        ],
                        [
                            "eid368",
                            "left",
                            132000,
                            500,
                            "linear",
                            "${hint7_5_square_root_3}",
                            '-65px',
                            '-47px'
                        ],
                        [
                            "eid187",
                            "top",
                            34500,
                            1500,
                            "easeInCubic",
                            "${hint1_w}",
                            '217px',
                            '200px'
                        ],
                        [
                            "eid177",
                            "opacity",
                            34000,
                            500,
                            "linear",
                            "${hint1_w}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid274",
                            "font-size",
                            92000,
                            0,
                            "linear",
                            "${hint3_2x}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid361",
                            "opacity",
                            136000,
                            1000,
                            "easeOutQuad",
                            "${choose_b}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid214",
                            "opacity",
                            59000,
                            1000,
                            "linear",
                            "${hint2_text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid246",
                            "opacity",
                            85000,
                            0,
                            "easeInCubic",
                            "${hint2_text}",
                            '1',
                            '0'
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
                            "eid211",
                            "opacity",
                            49000,
                            1000,
                            "easeInCubic",
                            "${_90_degree}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid166",
                            "opacity",
                            29000,
                            1000,
                            "linear",
                            "${hint1_h}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid371",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${Text2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid372",
                            "display",
                            132500,
                            0,
                            "easeOutQuad",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid217",
                            "color",
                            59000,
                            1000,
                            "linear",
                            "${hint1}",
                            'rgba(200,8,8,1)',
                            'rgba(15,15,15,1.00)'
                        ],
                            [ "eid377", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question}', [] ] ],
                            [ "eid378", "trigger", 17000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint12}', [] ] ],
                            [ "eid379", "trigger", 40000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2a}', [] ] ],
                            [ "eid380", "trigger", 52000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2b}', [] ] ],
                            [ "eid381", "trigger", 62000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint3}', [] ] ],
                            [ "eid382", "trigger", 85000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint4a}', [] ] ],
                            [ "eid383", "trigger", 95000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint4b}', [] ] ],
                            [ "eid384", "trigger", 108000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint52}', [] ] ],
                            [ "eid385", "trigger", 119000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint6}', [] ] ],
                            [ "eid386", "trigger", 125024, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint7}', [] ] ]
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
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
                        '${check}': {
                            display: 'none',
                            rect: [-8, -16, 65, 42]
                        },
                        '${x}': {
                            display: 'none',
                            rect: [-8, -4, 42, 33]
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
                        '${check}': {
                            display: 'none',
                            rect: [-8, -16, 65, 42]
                        },
                        '${x}': {
                            display: 'none',
                            rect: [-8, -4, 42, 33]
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
                            rect: [0, 2, '153', '183', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                rect: [8, 157, 101, 26, 'auto', 'auto'],
                                id: 'EButton',
                                symbolName: 'EButton_3',
                                type: 'rect'
                            },
                            {
                                rect: [8, 121, 101, 26, 'auto', 'auto'],
                                id: 'DButton',
                                symbolName: 'DButton_3',
                                type: 'rect'
                            },
                            {
                                rect: [8, 86, 101, 26, 'auto', 'auto'],
                                id: 'CButton',
                                symbolName: 'CButton_3',
                                type: 'rect'
                            },
                            {
                                rect: [8, 50, 125, 26, 'auto', 'auto'],
                                id: 'BButton',
                                symbolName: 'BButton_3',
                                type: 'rect'
                            },
                            {
                                rect: [0, 0, 153, 42, 'auto', 'auto'],
                                id: 'AButton',
                                symbolName: 'AButton_3',
                                type: 'rect'
                            }]
                        }
                    ],
                    style: {
                        '${AnswerText}': {
                            font: '{:}12px{:}{:}{:}{:}{:}{:}',
                            rect: [36, 3, 109, 0]
                        },
                        '${symbolSelector}': {
                            rect: [null, null, 156, 187]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("problem_202_edgeActions.js");
})("EdgeProblem");
