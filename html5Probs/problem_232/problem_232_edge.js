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
            js+"jquery-2.0.3.min.js",
            js+"jquery.easing.1.3.js"
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
                            id: 'Question_text',
                            type: 'group',
                            rect: ['24', '24', '266', '109', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text1',
                                type: 'text',
                                rect: ['0', '0', '77', '22', 'auto', 'auto'],
                                text: "In rectangle                                                           ",
                                align: "left",
                                font: ['Times New Roman, Times, serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['121', '0', '77', '22px', 'auto', 'auto'],
                                text: ", diagonal",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Text6',
                                type: 'text',
                                rect: ['0', '22', '142', '38', 'auto', 'auto'],
                                text: "makes a 30º with  side ",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Text5',
                                type: 'text',
                                rect: ['186', '1', '33', '20px', 'auto', 'auto'],
                                text: "BD",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", ""]
                            },
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['80', '0', '59', '22', 'auto', 'auto'],
                                text: "ABCD",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", ""]
                            },
                            {
                                id: 'Text9',
                                type: 'text',
                                rect: ['186', '22', '24', '20px', 'auto', 'auto'],
                                text: "BD",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", ""]
                            },
                            {
                                id: 'Text11',
                                type: 'text',
                                rect: ['0', '45', '227', '30px', 'auto', 'auto'],
                                text: "what is the area of the rectangle?",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Text10',
                                type: 'text',
                                rect: ['210', '22', '44', '22', 'auto', 'auto'],
                                text: "= 14,",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Text7',
                                type: 'text',
                                rect: ['142', '22', '33px', '19', 'auto', 'auto'],
                                text: "AD.",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", ""]
                            },
                            {
                                id: 'Text8',
                                type: 'text',
                                rect: ['173', '22', '16', '20', 'auto', 'auto'],
                                text: "If",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'Answers',
                            symbolName: 'Answers_1',
                            type: 'rect',
                            rect: ['7', '167', '156', '187', 'auto', 'auto']
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['53', '220', '59px', '38px', 'auto', 'auto'],
                            text: "49",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [17, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerAText',
                            type: 'text',
                            rect: ['71', '190', '109', '19', 'auto', 'auto'],
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
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
                            id: 'AnswerEText',
                            type: 'text',
                            rect: ['54', '329', '101', '20px', 'auto', 'auto'],
                            text: "98",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [17, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Problem_picture',
                            type: 'group',
                            rect: ['318', '71', '207', '112', 'auto', 'auto'],
                            c: [
                            {
                                id: 'HTML_232_problem',
                                type: 'image',
                                rect: ['-4', '-40', '128', '180', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"HTML%20232%20problem.png",'0px','0px']
                            },
                            {
                                id: 'A',
                                type: 'text',
                                rect: ['-8', '-50', '44px', '30px', 'auto', 'auto'],
                                text: "A",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", ""]
                            },
                            {
                                id: 'B',
                                type: 'text',
                                rect: ['120', '-48', '24px', '19px', 'auto', 'auto'],
                                text: "B",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", ""]
                            },
                            {
                                id: 'C',
                                type: 'text',
                                rect: ['120', '110', '36px', '15px', 'auto', 'auto'],
                                text: "C",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", ""]
                            },
                            {
                                id: 'D',
                                type: 'text',
                                rect: ['-8', '109', '25px', '19', 'auto', 'auto'],
                                text: "D",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", ""]
                            },
                            {
                                id: '_8',
                                type: 'text',
                                rect: ['60', '58', '81', '58', 'auto', 'auto'],
                                text: "14<br>",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: '_30_degree',
                                type: 'text',
                                rect: ['18', '56', '25', '14px', 'auto', 'auto'],
                                text: "30º",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: '_60_degree',
                                type: 'text',
                                rect: ['65', '-18', '42px', '17px', 'auto', 'auto'],
                                opacity: '0',
                                text: "60º<br>",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(200,8,8,1)", "normal", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'hint1',
                            type: 'text',
                            rect: ['205', '217', '156', '30px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Area = h x w",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(200,8,8,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint7_x',
                            type: 'text',
                            rect: ['288', '218', '66', '44', 'auto', 'auto'],
                            opacity: '0',
                            text: "x ",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(15,15,15,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint7_w',
                            type: 'text',
                            rect: ['304', '218', '29px', '22px', 'auto', 'auto'],
                            opacity: '0',
                            text: "w",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(15,15,15,1)", "normal", "none", "normal", "break-word", ""]
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
                            rect: ['325', '44', '6', '15', 'auto', 'auto'],
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
                            rect: ['398', '127', '49', '17px', 'auto', 'auto'],
                            opacity: '0',
                            text: "=2x",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(140,4,4,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint4_x_is_4',
                            type: 'text',
                            rect: ['403', '310', '77px', '38', 'auto', 'auto'],
                            opacity: '0',
                            text: "x = 7",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint4_solve_for_x',
                            type: 'text',
                            rect: ['407', '283', '109px', '30px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Solve for x",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint4_2x_equals_8',
                            type: 'text',
                            rect: ['399', '126', '75', '30px', 'auto', 'auto'],
                            opacity: '0',
                            text: "2x = 14",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'w_red',
                            type: 'rect',
                            rect: ['325', '42', '21', '6', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(200,8,8,1)"],
                            stroke: [0,"rgb(240, 9, 9)","solid"]
                        },
                        {
                            id: 'BD',
                            type: 'rect',
                            rect: ['372', '30', '6', '180', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(200,8,8,1)"],
                            stroke: [0,"rgb(240, 9, 9)","solid"],
                            transform: [[],['33']]
                        },
                        {
                            id: '_90_degree',
                            type: 'group',
                            rect: ['290', '146', '3', '17', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],['1']],
                            c: [
                            {
                                id: '_90_angle',
                                type: 'group',
                                rect: ['32', '-85', '24', '3', 'auto', 'auto'],
                                transform: [[],['180']],
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
                                rect: ['48', '-77', '41px', '16px', 'auto', 'auto'],
                                text: "90º",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [16, ""], "rgba(200,8,8,1)", "normal", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'hint2_text',
                            type: 'text',
                            rect: ['180', '252', '288', '49px', 'auto', 'auto'],
                            opacity: '0',
                            text: "What is the relationship between the sides of a 30-60-90 triangle?",
                            font: ['Times New Roman, Times, serif', [20, "px"], "rgba(140,4,4,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'hint3_x',
                            type: 'text',
                            rect: ['392', '19', '42px', '17px', 'auto', 'auto'],
                            opacity: '0',
                            text: "= x",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint3_equal_square_root_3_',
                            type: 'group',
                            rect: ['286', '91', '39', '24', 'auto', 'auto'],
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
                                rect: ['-7', '4', 'auto', 'auto', 'auto', 'auto'],
                                text: "=",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1.00)", "normal", "none", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'hint3_square_root_3_a',
                                type: 'image',
                                rect: ['-55', '4', '24', '20', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"hint3%20square%20root%203%20a.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'hint5',
                            type: 'text',
                            rect: ['158', '276', '213', '49px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Can you find the value of h and w ?",
                            font: ['Times New Roman, Times, serif', [20, "px"], "rgba(140,4,4,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'hint6_4_for_w',
                            type: 'text',
                            rect: ['438', '310', '59px', '38', 'auto', 'auto'],
                            opacity: '0',
                            text: "= 7",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint7_4',
                            type: 'text',
                            rect: ['391', '20', '44px', '16px', 'auto', 'auto'],
                            opacity: '0',
                            text: "7",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint6_4_for_h',
                            type: 'text',
                            rect: ['438', '310', '59px', '27', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "7",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint6__multiplication_symbol',
                            type: 'text',
                            rect: ['257', '96', '11', '20', 'auto', 'auto'],
                            opacity: '0',
                            text: "*",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint7_area',
                            type: 'text',
                            rect: ['205', '217', '156', '30px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Area =",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(15,14,14,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint7_5_square_root_3',
                            type: 'group',
                            rect: ['-128', '37', '24px', '20', 'auto', 'auto'],
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
                                rect: ['396', '64', '112', '47', 'auto', 'auto'],
                                text: "* 7",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'answer_hint_1',
                            type: 'group',
                            rect: ['312', '260', '24', '20', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'square_root_3',
                                type: 'image',
                                rect: ['0', '0', '24', '20', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"hint3%20square%20root%203%20a.png",'0px','0px']
                            },
                            {
                                id: 'area_is_25',
                                type: 'text',
                                rect: ['-107', '-1', '164px', '44px', 'auto', 'auto'],
                                text: "Area = 49",
                                align: "left",
                                font: ['Verdana, Geneva, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'choose_b',
                            type: 'text',
                            rect: ['243', '313', '142px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Choose (C)",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [20, ""], "rgba(140,4,4,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['54', '189', '37px', '17px', 'auto', 'auto'],
                            text: "28",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [17, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'CodeCogsEqn_93',
                            type: 'image',
                            rect: ['49', '256', '42px', '19px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2893%29.gif",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_94',
                            type: 'image',
                            rect: ['54', '293', '42px', '19px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn%20%2894%29.gif",'0px','0px']
                        },
                        {
                            id: 'Text5Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['204', '297', '94px', '29px', 'auto', 'auto'],
                            text: "Choose (C)",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(255,0,0,1)", "normal", "none", "normal", "break-word", ""]
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
                    duration: 190000,
                    autoPlay: true,
                    labels: {
                        "Read Question": 3000,
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
                            "eid288",
                            "top",
                            119000,
                            2000,
                            "linear",
                            "${hint6_4_for_w}",
                            '310px',
                            '19px'
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
                            "eid299",
                            "top",
                            122000,
                            1750,
                            "linear",
                            "${hint6_4_for_h}",
                            '310px',
                            '95px'
                        ],
                        [
                            "eid228",
                            "opacity",
                            75000,
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
                            "eid377",
                            "top",
                            92000,
                            1000,
                            "linear",
                            "${hint4_2x_equals_8}",
                            '126px',
                            '245px'
                        ],
                        [
                            "eid245",
                            "opacity",
                            81000,
                            1000,
                            "easeInCubic",
                            "${hint3_equal_square_root_3_}",
                            '0.000000',
                            '0.98'
                        ],
                        [
                            "eid362",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${hint7_w}",
                            '0',
                            '0'
                        ],
                        [
                            "eid340",
                            "opacity",
                            130000,
                            0,
                            "linear",
                            "${hint7_w}",
                            '0',
                            '1'
                        ],
                        [
                            "eid339",
                            "opacity",
                            132500,
                            0,
                            "linear",
                            "${hint7_w}",
                            '1',
                            '0'
                        ],
                        [
                            "eid167",
                            "left",
                            25000,
                            2000,
                            "linear",
                            "${hint1_h}",
                            '271px',
                            '292px'
                        ],
                        [
                            "eid162",
                            "opacity",
                            22000,
                            1000,
                            "linear",
                            "${hint1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid315",
                            "opacity",
                            130000,
                            0,
                            "linear",
                            "${hint1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid308",
                            "left",
                            128000,
                            2000,
                            "linear",
                            "${hint7_4}",
                            '391px',
                            '268px'
                        ],
                        [
                            "eid311",
                            "color",
                            189000,
                            1000,
                            "linear",
                            "${hint7_area}",
                            'rgba(15,14,14,1.00)',
                            'rgba(15,15,15,1.00)'
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
                            "eid237",
                            "opacity",
                            78000,
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
                            "eid173",
                            "opacity",
                            28000,
                            250,
                            "linear",
                            "${h_red}",
                            '0.000000',
                            '1'
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
                        [
                            "eid168",
                            "top",
                            25000,
                            2000,
                            "linear",
                            "${hint1_h}",
                            '216px',
                            '94px'
                        ],
                        [
                            "eid205",
                            "color",
                            47000,
                            1000,
                            "easeInCubic",
                            "${_30_degree}",
                            'rgba(0,0,0,1)',
                            'rgba(200,8,8,1.00)'
                        ],
                        [
                            "eid298",
                            "left",
                            122000,
                            1750,
                            "linear",
                            "${hint6_4_for_h}",
                            '438px',
                            '268px'
                        ],
                        [
                            "eid369",
                            "color",
                            75000,
                            1000,
                            "easeInCubic",
                            "${hint1_w}",
                            'rgba(200,8,8,1)',
                            'rgba(23,22,22,1.00)'
                        ],
                        [
                            "eid353",
                            "left",
                            131000,
                            2000,
                            "easeOutQuad",
                            "${hint7_5_square_root_3}",
                            '-128px',
                            '-64px'
                        ],
                        [
                            "eid278",
                            "opacity",
                            109000,
                            1000,
                            "linear",
                            "${hint4_x_is_4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid286",
                            "opacity",
                            119000,
                            500,
                            "linear",
                            "${hint6_4_for_w}",
                            '0.000000',
                            '1'
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
                            "eid174",
                            "height",
                            28250,
                            750,
                            "linear",
                            "${h_red}",
                            '15px',
                            '152px'
                        ],
                        [
                            "eid280",
                            "opacity",
                            95000,
                            1000,
                            "linear",
                            "${hint4_solve_for_x}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid273",
                            "font-size",
                            92000,
                            0,
                            "linear",
                            "${hint4_2x_equals_8}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid307",
                            "opacity",
                            128000,
                            500,
                            "linear",
                            "${hint7_4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid287",
                            "left",
                            119000,
                            2000,
                            "linear",
                            "${hint6_4_for_w}",
                            '438px',
                            '390px'
                        ],
                        [
                            "eid354",
                            "top",
                            131000,
                            2000,
                            "easeOutQuad",
                            "${hint7_5_square_root_3}",
                            '37px',
                            '155px'
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
                            "eid380",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${Text5Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid381",
                            "display",
                            137000,
                            0,
                            "easeOutQuad",
                            "${Text5Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid177",
                            "opacity",
                            31000,
                            500,
                            "linear",
                            "${hint1_w}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid198",
                            "opacity",
                            34000,
                            500,
                            "easeInCubic",
                            "${w_red}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid297",
                            "opacity",
                            122000,
                            500,
                            "linear",
                            "${hint6_4_for_h}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid378",
                            "left",
                            92000,
                            0,
                            "linear",
                            "${hint4_2x_equals_8}",
                            '399px',
                            '399px'
                        ],
                        [
                            "eid379",
                            "left",
                            93000,
                            0,
                            "linear",
                            "${hint4_2x_equals_8}",
                            '396px',
                            '396px'
                        ],
                        [
                            "eid373",
                            "color",
                            81000,
                            1000,
                            "linear",
                            "${hint1_h}",
                            'rgba(200,8,8,1)',
                            'rgba(26,24,24,1.00)'
                        ],
                        [
                            "eid208",
                            "opacity",
                            48000,
                            1000,
                            "easeInCubic",
                            "${_60_degree}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid309",
                            "top",
                            128000,
                            2000,
                            "linear",
                            "${hint7_4}",
                            '20px',
                            '219px'
                        ],
                        [
                            "eid200",
                            "width",
                            34000,
                            1500,
                            "easeInCubic",
                            "${w_red}",
                            '21px',
                            '100px'
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
                            "eid187",
                            "top",
                            31500,
                            1500,
                            "easeInCubic",
                            "${hint1_w}",
                            '217px',
                            '17px'
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
                            "eid249",
                            "opacity",
                            92000,
                            1000,
                            "linear",
                            "${hint4_2x_equals_8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid166",
                            "opacity",
                            25000,
                            1000,
                            "linear",
                            "${hint1_h}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid203",
                            "opacity",
                            46000,
                            500,
                            "easeInCubic",
                            "${BD}",
                            '0.000000',
                            '0.96'
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
                            "eid318",
                            "opacity",
                            129000,
                            0,
                            "linear",
                            "${hint7_area}",
                            '0',
                            '0'
                        ],
                        [
                            "eid316",
                            "opacity",
                            130000,
                            0,
                            "linear",
                            "${hint7_area}",
                            '0',
                            '1'
                        ],
                        [
                            "eid314",
                            "opacity",
                            189000,
                            0,
                            "linear",
                            "${hint7_area}",
                            '1',
                            '1'
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
                            "eid186",
                            "left",
                            31500,
                            1500,
                            "easeOutQuad",
                            "${hint1_w}",
                            '304px',
                            '368px'
                        ],
                            [ "eid382", "trigger", 3000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question}', [] ] ],
                            [ "eid383", "trigger", 17000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint12}', [] ] ],
                            [ "eid384", "trigger", 40000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2a}', [] ] ],
                            [ "eid385", "trigger", 52000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2b}', [] ] ],
                            [ "eid386", "trigger", 62000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint3}', [] ] ],
                            [ "eid387", "trigger", 85000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint4a}', [] ] ],
                            [ "eid389", "trigger", 108000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint52}', [] ] ],
                            [ "eid390", "trigger", 125024, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint7}', [] ] ]
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', '']
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
                                type: 'text',
                                rect: [0, 4, 27, '20px', 'auto', 'auto'],
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', '']
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
                                type: 'text',
                                rect: [0, 4, 27, '20px', 'auto', 'auto'],
                                id: 'Text5',
                                text: 'C',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', '']
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
                                type: 'text',
                                rect: [0, 5, 27, 19, 'auto', 'auto'],
                                id: 'Text4',
                                text: 'B',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', '']
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
                                rect: [0, 3, 27, 19, 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                                id: 'A',
                                text: 'A<br><br><br>',
                                align: 'center',
                                type: 'text'
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("problem_232_edgeActions.js");
})("EdgeProblem");
