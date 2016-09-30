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
                            id: 'Question_Text',
                            type: 'text',
                            rect: ['15', '30', '219', '28', 'auto', 'auto'],
                            text: "What is : ",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint1_16Copy',
                            type: 'image',
                            rect: ['149', '243', '16', '41', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"hint1%201%3A6.png",'0px','0px']
                        },
                        {
                            id: 'hint1_56Copy',
                            type: 'image',
                            rect: ['324', '243', '16', '41', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"hint1%205%3A6.png",'0px','0px']
                        },
                        {
                            id: 'Answers',
                            symbolName: 'Answers_1',
                            type: 'rect',
                            rect: ['33', '348', '156', '187', 'auto', 'auto']
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
                            id: 'hint1',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint1.mp3",aud+"hint1.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'Answer_E',
                            type: 'image',
                            rect: ['76', '512', '16', '64', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Answer%20E.png",'0px','0px']
                        },
                        {
                            id: 'AnswerBText',
                            type: 'text',
                            rect: ['82', '409', '112', '19px', 'auto', 'auto'],
                            text: "5",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
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
                            id: 'Problem_363_picture',
                            type: 'image',
                            rect: ['36', '68', '72', '46', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Problem%20363%20picture.png",'0px','0px']
                        },
                        {
                            id: 'Answer_A',
                            type: 'image',
                            rect: ['74', '366', '23', '60', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Answer%20A.png",'0px','0px']
                        },
                        {
                            id: 'Answer_C',
                            type: 'image',
                            rect: ['75', '432', '23', '60', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Answer%20C.png",'0px','0px']
                        },
                        {
                            id: 'Answer_D',
                            type: 'image',
                            rect: ['77', '472', '16', '60', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Answer%20D.png",'0px','0px']
                        },
                        {
                            id: 'Hint_1_text',
                            type: 'group',
                            rect: ['362', '77', '112', '28', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'hint1_make',
                                type: 'text',
                                rect: ['0', '0', '112px', '28px', 'auto', 'auto'],
                                text: "make",
                                align: "left",
                                font: ['Verdana, Geneva, sans-serif', [16, "px"], "rgba(128,6,6,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'hint1_how_many',
                                type: 'text',
                                rect: ['-217', '0', '301px', '28px', 'auto', 'auto'],
                                text: "We can ask how many ",
                                align: "left",
                                font: ['Verdana, Geneva, sans-serif', [16, "px"], "rgba(128,6,6,1.00)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'hint1_question_mark',
                                type: 'text',
                                rect: ['90', '1', '112px', '28px', 'auto', 'auto'],
                                text: "?",
                                align: "left",
                                font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(128,6,6,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'fraction_1_sixths',
                                type: 'group',
                                rect: ['-21', '16', '18', '25', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Text2',
                                    type: 'text',
                                    rect: ['0', '0', '21px', '25', 'auto', 'auto'],
                                    text: "6",
                                    align: "left",
                                    font: ['Verdana, Geneva, sans-serif', [16, ""], "rgba(128,6,6,1)", "400", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'Text',
                                    type: 'text',
                                    rect: ['0', '-27', '21px', '20px', 'auto', 'auto'],
                                    text: "1",
                                    align: "left",
                                    font: ['Verdana, Geneva, sans-serif', [16, ""], "rgba(128,6,6,1)", "400", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'Rectangle5',
                                    type: 'rect',
                                    rect: ['-7', '-5', '22', '2px', 'auto', 'auto'],
                                    fill: ["rgba(128,6,6,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                }]
                            },
                            {
                                id: 'fraction_5_sixthsCopy',
                                type: 'group',
                                rect: ['62', '17', '21', '25', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Text2Copy',
                                    type: 'text',
                                    rect: ['0', '0', '21px', '25', 'auto', 'auto'],
                                    text: "6",
                                    align: "left",
                                    font: ['Verdana, Geneva, sans-serif', [16, ""], "rgba(128,6,6,1)", "400", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'TextCopy',
                                    type: 'text',
                                    rect: ['0', '-27', '21px', '20px', 'auto', 'auto'],
                                    text: "5<br>",
                                    align: "left",
                                    font: ['Verdana, Geneva, sans-serif', [16, ""], "rgba(128,6,6,1)", "400", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'Rectangle5Copy',
                                    type: 'rect',
                                    rect: ['-10', '-5', '28px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(128,6,6,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                }]
                            }]
                        },
                        {
                            id: '_16_bar',
                            type: 'group',
                            rect: ['168', '175', '23', '46', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Rectangle3Copy6',
                                type: 'rect',
                                rect: ['0', '0', '19', '42px', 'auto', 'auto'],
                                fill: ["rgba(251,246,246,0)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'Rectangle3Copy5',
                                type: 'rect',
                                rect: ['21', '0', '19', '42px', 'auto', 'auto'],
                                fill: ["rgba(251,246,246,0)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'Rectangle3Copy4',
                                type: 'rect',
                                rect: ['42', '0', '19', '42px', 'auto', 'auto'],
                                fill: ["rgba(251,246,246,0)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'Rectangle3Copy3',
                                type: 'rect',
                                rect: ['63', '0', '19', '42px', 'auto', 'auto'],
                                fill: ["rgba(251,246,246,0)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'Rectangle3Copy2',
                                type: 'rect',
                                rect: ['84', '0', '19', '42px', 'auto', 'auto'],
                                fill: ["rgba(251,246,246,0)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'Rectangle3',
                                type: 'rect',
                                rect: ['-21', '0', '19', '42px', 'auto', 'auto'],
                                fill: ["rgba(251,246,246,0)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'blue_1',
                                type: 'rect',
                                rect: ['-21', '0', '19', '42px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(106,209,244,1.00)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'blue_1Copy5',
                                type: 'rect',
                                rect: ['-22', '0', '19', '42px', 'auto', 'auto'],
                                opacity: '0.000000',
                                fill: ["rgba(106,209,244,1.00)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'blue_1Copy4',
                                type: 'rect',
                                rect: ['-21', '0', '19', '42px', 'auto', 'auto'],
                                opacity: '0.000000',
                                fill: ["rgba(106,209,244,1.00)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'blue_1Copy3',
                                type: 'rect',
                                rect: ['-21', '0', '19', '42px', 'auto', 'auto'],
                                opacity: '0.000000',
                                fill: ["rgba(106,209,244,1.00)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'blue_1Copy2',
                                type: 'rect',
                                rect: ['-21', '0', '19', '42px', 'auto', 'auto'],
                                opacity: '0.000000',
                                fill: ["rgba(106,209,244,1.00)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'blue_1Copy1',
                                type: 'rect',
                                rect: ['-22', '0', '19', '42px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(106,209,244,1.00)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            }]
                        },
                        {
                            id: '_56_bar_barCopy',
                            type: 'group',
                            rect: ['345', '175', '23', '46', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Rectangle3Copy13',
                                type: 'rect',
                                rect: ['0', '0', '19', '42px', 'auto', 'auto'],
                                fill: ["rgba(251,246,246,0)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'Rectangle3Copy12',
                                type: 'rect',
                                rect: ['21', '0', '19', '42px', 'auto', 'auto'],
                                fill: ["rgba(251,246,246,0)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'Rectangle3Copy11',
                                type: 'rect',
                                rect: ['42', '0', '19', '42px', 'auto', 'auto'],
                                fill: ["rgba(251,246,246,0)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'Rectangle3Copy10',
                                type: 'rect',
                                rect: ['63', '0', '19', '42px', 'auto', 'auto'],
                                fill: ["rgba(251,246,246,0)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'Rectangle3Copy9',
                                type: 'rect',
                                rect: ['84', '0', '19', '42px', 'auto', 'auto'],
                                fill: ["rgba(251,246,246,0)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'Rectangle3Copy8',
                                type: 'rect',
                                rect: ['-21', '0', '19', '42px', 'auto', 'auto'],
                                fill: ["rgba(251,246,246,0)"],
                                stroke: [2,"rgb(0, 0, 0)","solid"]
                            }]
                        },
                        {
                            id: '_1',
                            type: 'text',
                            rect: ['328', '149', '50px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            text: "1",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(128,6,6,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: '_2',
                            type: 'text',
                            rect: ['352', '149', '42px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            text: "2",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(128,6,6,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: '_3',
                            type: 'text',
                            rect: ['373', '149', '23px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            text: "3<br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(128,6,6,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: '_4',
                            type: 'text',
                            rect: ['392', '149', '23px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            text: "4<br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(128,6,6,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: '_5',
                            type: 'text',
                            rect: ['413', '149', '23px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            text: "5<br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(128,6,6,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint_3',
                            type: 'group',
                            rect: ['275', '300', '12', '37', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'hint3_16Copy4',
                                type: 'image',
                                rect: ['0', '0', '12', '37', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"hint1%201%3A6.png",'0px','0px']
                            },
                            {
                                id: 'Hint_3_4',
                                type: 'text',
                                rect: ['-30', '10', '47', '41px', 'auto', 'auto'],
                                text: "5 x ",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(128,6,6,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Hint3_make_up',
                                type: 'text',
                                rect: ['40px', '10', '112px', '19px', 'auto', 'auto'],
                                text: "makes",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(128,6,6,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Hint_3_fraction_1_sixths',
                                type: 'group',
                                rect: ['6', '26', '18', '25', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Text2Copy2',
                                    type: 'text',
                                    rect: ['0', '0', '21px', '25', 'auto', 'auto'],
                                    text: "6",
                                    align: "left",
                                    font: ['Verdana, Geneva, sans-serif', [16, ""], "rgba(128,6,6,1)", "400", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'TextCopy2',
                                    type: 'text',
                                    rect: ['0', '-27', '21px', '20px', 'auto', 'auto'],
                                    text: "1",
                                    align: "left",
                                    font: ['Verdana, Geneva, sans-serif', [16, ""], "rgba(128,6,6,1)", "400", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'Rectangle5Copy2',
                                    type: 'rect',
                                    rect: ['-7', '-5', '22', '2px', 'auto', 'auto'],
                                    fill: ["rgba(128,6,6,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                }]
                            },
                            {
                                id: '_Hint_3_fraction_5_sixths',
                                type: 'group',
                                rect: ['132', '26', '21', '25', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Text2Copy3',
                                    type: 'text',
                                    rect: ['0', '0', '21px', '25', 'auto', 'auto'],
                                    text: "6",
                                    align: "left",
                                    font: ['Verdana, Geneva, sans-serif', [16, ""], "rgba(128,6,6,1)", "400", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'TextCopy3',
                                    type: 'text',
                                    rect: ['0', '-27', '21px', '20px', 'auto', 'auto'],
                                    text: "5<br>",
                                    align: "left",
                                    font: ['Verdana, Geneva, sans-serif', [16, ""], "rgba(128,6,6,1)", "400", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'Rectangle5Copy3',
                                    type: 'rect',
                                    rect: ['-10', '-5', '28px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(128,6,6,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                }]
                            }]
                        },
                        {
                            id: 'Choose_B',
                            type: 'text',
                            rect: ['290', '458', '112px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Choose (B)",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(40,128,6,1)", "700", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Answer_hint',
                            type: 'group',
                            rect: ['431', '351', '21', '19', 'auto', 'auto'],
                            c: [
                            {
                                id: 'equals',
                                type: 'text',
                                rect: ['-166', '-6', '42px', '25', 'auto', 'auto'],
                                opacity: '0',
                                text: "=",
                                font: ['Arial, Helvetica, sans-serif', [26, "px"], "rgba(128,6,6,1.00)", "normal", "none", "", "break-word", ""]
                            },
                            {
                                id: 'hint4c',
                                type: 'image',
                                rect: ['-137', '-16', '28', '53', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"hint4c.png",'0px','0px']
                            },
                            {
                                id: 'equalsCopy',
                                type: 'text',
                                rect: ['-95', '-5', '42px', '25', 'auto', 'auto'],
                                opacity: '0',
                                text: "=",
                                font: ['Arial, Helvetica, sans-serif', [26, "px"], "rgba(128,6,6,1)", "normal", "none", "", "break-word", ""]
                            },
                            {
                                id: 'answer_hint_5',
                                display: 'block',
                                type: 'text',
                                rect: ['-69', '-7', '58px', '37px', 'auto', 'auto'],
                                opacity: '0',
                                text: "5",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [26, ""], "rgba(128,6,6,1)", "normal", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'Hint_4_',
                            type: 'group',
                            rect: ['269', '269', '16', '47', 'auto', 'auto'],
                            opacity: '0.000000',
                            c: [
                            {
                                id: 'divide',
                                type: 'image',
                                rect: ['32', '12', '19', '20', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"divide.png",'0px','0px']
                            },
                            {
                                id: 'hint_4_multiplyCopy',
                                type: 'text',
                                rect: ['37', '6', '23px', '19px', 'auto', 'auto'],
                                opacity: '0',
                                text: "x",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [26, ""], "rgba(128,6,6,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: '_Hint_4fraction_1_sixthsCopy3',
                                type: 'group',
                                rect: ['78', '27', '18', '25', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Text2Copy5',
                                    type: 'text',
                                    rect: ['0px', '0px', '27', '28', 'auto', 'auto'],
                                    autoOrient: true,
                                    text: "6",
                                    align: "left",
                                    font: ['Verdana, Geneva, sans-serif', [22, "px"], "rgba(128,6,6,1)", "400", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'TextCopy5',
                                    type: 'text',
                                    rect: ['0px', '-27px', '21px', '20px', 'auto', 'auto'],
                                    autoOrient: false,
                                    text: "1",
                                    align: "left",
                                    font: ['Verdana, Geneva, sans-serif', [22, "px"], "rgba(128,6,6,1)", "400", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'Rectangle5Copy5',
                                    type: 'rect',
                                    rect: ['-4', '-5', '22', '2px', 'auto', 'auto'],
                                    fill: ["rgba(128,6,6,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                }]
                            },
                            {
                                id: '_Hint_4_fraction_5_sixthsCopy',
                                type: 'group',
                                rect: ['-3', '27', '21', '25', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Text2Copy4',
                                    type: 'text',
                                    rect: ['0', '0', '21px', '25', 'auto', 'auto'],
                                    text: "6",
                                    align: "left",
                                    font: ['Verdana, Geneva, sans-serif', [22, "px"], "rgba(128,6,6,1)", "400", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'TextCopy4',
                                    type: 'text',
                                    rect: ['-1', '-33', '21px', '20px', 'auto', 'auto'],
                                    text: "5<br>",
                                    align: "left",
                                    font: ['Verdana, Geneva, sans-serif', [22, "px"], "rgba(128,6,6,1)", "400", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'Rectangle5Copy4',
                                    type: 'rect',
                                    rect: ['-10', '-5', '28px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(128,6,6,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                }]
                            }]
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
                            id: 'answerhint',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"answerhint.mp3",aud+"answerhint.ogg"],
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
                    duration: 80000,
                    autoPlay: true,
                    labels: {
                        "Read Question": 2000,
                        "Hint 1": 9000,
                        "Hint 2": 27000,
                        "Hint 3": 41000,
                        "Hint 4": 51000,
                        "Answer Hint": 71000
                    },
                    data: [
                        [
                            "eid320",
                            "opacity",
                            39000,
                            0,
                            "linear",
                            "${_5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid319",
                            "opacity",
                            39500,
                            0,
                            "linear",
                            "${_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid400",
                            "location",
                            66500,
                            2000,
                            "linear",
                            "${Text2Copy5}",
                            [[12.5, 15, 0, 0, 0, 0,0],[12.2, -19.39, 0, 0, 0, 0,34.39]]
                        ],
                        [
                            "eid375",
                            "opacity",
                            71000,
                            1000,
                            "easeInQuint",
                            "${equals}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid399",
                            "location",
                            66500,
                            2000,
                            "linear",
                            "${TextCopy5}",
                            [[10.5, -23, 0, 0, 0, 0,0],[11.85, 10.41, 0, 0, 0, 0,33.44]]
                        ],
                        [
                            "eid275",
                            "top",
                            35500,
                            500,
                            "linear",
                            "${blue_1Copy2}",
                            '0px',
                            '-69px'
                        ],
                        [
                            "eid278",
                            "top",
                            36000,
                            500,
                            "easeOutQuad",
                            "${blue_1Copy2}",
                            '-69px',
                            '0px'
                        ],
                        [
                            "eid390",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Answers}",
                            '348px',
                            '348px'
                        ],
                        [
                            "eid276",
                            "left",
                            35500,
                            500,
                            "linear",
                            "${blue_1Copy2}",
                            '-21px',
                            '141px'
                        ],
                        [
                            "eid277",
                            "left",
                            36000,
                            500,
                            "easeOutQuad",
                            "${blue_1Copy2}",
                            '141px',
                            '177px'
                        ],
                        [
                            "eid389",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Answers}",
                            '33px',
                            '33px'
                        ],
                        [
                            "eid295",
                            "left",
                            37500,
                            500,
                            "linear",
                            "${blue_1Copy4}",
                            '-21px',
                            '122px'
                        ],
                        [
                            "eid296",
                            "left",
                            38000,
                            500,
                            "easeOutQuad",
                            "${blue_1Copy4}",
                            '122px',
                            '218px'
                        ],
                        [
                            "eid179",
                            "opacity",
                            24000,
                            1000,
                            "linear",
                            "${hint1_56Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid398",
                            "opacity",
                            62000,
                            1000,
                            "linear",
                            "${Hint_4_}",
                            '0.000000',
                            '0.95'
                        ],
                        [
                            "eid285",
                            "top",
                            36500,
                            500,
                            "linear",
                            "${blue_1Copy3}",
                            '0px',
                            '-69px'
                        ],
                        [
                            "eid288",
                            "top",
                            37000,
                            500,
                            "easeOutQuad",
                            "${blue_1Copy3}",
                            '-69px',
                            '0px'
                        ],
                        [
                            "eid191",
                            "background-color",
                            24500,
                            500,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(251,246,246,0)',
                            'rgba(239,239,35,1.00)'
                        ],
                        [
                            "eid299",
                            "background-color",
                            38500,
                            0,
                            "easeOutQuad",
                            "${Rectangle3Copy11}",
                            'rgba(239,239,35,1.00)',
                            'rgba(239,239,35,0.00)'
                        ],
                        [
                            "eid188",
                            "background-color",
                            24000,
                            500,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(251,246,246,0)',
                            'rgba(239,239,35,1.00)'
                        ],
                        [
                            "eid289",
                            "background-color",
                            37500,
                            0,
                            "easeOutQuad",
                            "${Rectangle3Copy12}",
                            'rgba(239,239,35,1.00)',
                            'rgba(239,239,35,0.00)'
                        ],
                        [
                            "eid305",
                            "left",
                            38500,
                            500,
                            "linear",
                            "${blue_1Copy5}",
                            '-22px',
                            '122px'
                        ],
                        [
                            "eid306",
                            "left",
                            39000,
                            500,
                            "easeOutQuad",
                            "${blue_1Copy5}",
                            '122px',
                            '240px'
                        ],
                        [
                            "eid271",
                            "opacity",
                            22000,
                            1000,
                            "easeOutQuad",
                            "${blue_1Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid272",
                            "opacity",
                            35500,
                            0,
                            "linear",
                            "${blue_1Copy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid281",
                            "opacity",
                            22000,
                            1000,
                            "easeOutQuad",
                            "${blue_1Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid282",
                            "opacity",
                            36500,
                            0,
                            "linear",
                            "${blue_1Copy3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid176",
                            "opacity",
                            22000,
                            1000,
                            "linear",
                            "${blue_1}",
                            '0.000000',
                            '0.97'
                        ],
                        [
                            "eid173",
                            "opacity",
                            21000,
                            1000,
                            "linear",
                            "${hint1_16Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            16000,
                            1000,
                            "linear",
                            "${Hint_1_text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid244",
                            "top",
                            34500,
                            500,
                            "easeOutCubic",
                            "${blue_1Copy1}",
                            '0px',
                            '-70px'
                        ],
                        [
                            "eid270",
                            "top",
                            35000,
                            500,
                            "swing",
                            "${blue_1Copy1}",
                            '-70px',
                            '0px'
                        ],
                        [
                            "eid402",
                            "font-size",
                            80000,
                            0,
                            "linear",
                            "${Text2Copy5}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid312",
                            "opacity",
                            35000,
                            0,
                            "linear",
                            "${_1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid311",
                            "opacity",
                            35500,
                            0,
                            "linear",
                            "${_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid401",
                            "font-size",
                            80000,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid294",
                            "top",
                            37500,
                            500,
                            "linear",
                            "${blue_1Copy4}",
                            '0px',
                            '-71px'
                        ],
                        [
                            "eid297",
                            "top",
                            38000,
                            500,
                            "easeOutQuad",
                            "${blue_1Copy4}",
                            '-71px',
                            '0px'
                        ],
                        [
                            "eid290",
                            "opacity",
                            22000,
                            1000,
                            "easeOutQuad",
                            "${blue_1Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid291",
                            "opacity",
                            37500,
                            0,
                            "linear",
                            "${blue_1Copy4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid170",
                            "opacity",
                            20000,
                            1000,
                            "linear",
                            "${_56_bar_barCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid286",
                            "left",
                            36500,
                            500,
                            "linear",
                            "${blue_1Copy3}",
                            '-21px',
                            '128px'
                        ],
                        [
                            "eid287",
                            "left",
                            37000,
                            500,
                            "easeOutQuad",
                            "${blue_1Copy3}",
                            '128px',
                            '198px'
                        ],
                        [
                            "eid167",
                            "opacity",
                            18000,
                            1000,
                            "linear",
                            "${_16_bar}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid318",
                            "opacity",
                            38000,
                            0,
                            "linear",
                            "${_4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid317",
                            "opacity",
                            38500,
                            0,
                            "linear",
                            "${_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid378",
                            "opacity",
                            72000,
                            1000,
                            "easeInQuint",
                            "${hint4c}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid372",
                            "opacity",
                            75750,
                            1000,
                            "easeInQuint",
                            "${answer_hint_5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid405",
                            "height",
                            80000,
                            0,
                            "linear",
                            "${Text2Copy5}",
                            '28px',
                            '28px'
                        ],
                        [
                            "eid182",
                            "background-color",
                            23000,
                            500,
                            "linear",
                            "${Rectangle3Copy8}",
                            'rgba(251,246,246,0)',
                            'rgba(239,239,35,1.00)'
                        ],
                        [
                            "eid249",
                            "background-color",
                            35500,
                            0,
                            "swing",
                            "${Rectangle3Copy8}",
                            'rgba(239,239,35,1.00)',
                            'rgba(239,239,35,0.02)'
                        ],
                        [
                            "eid406",
                            "width",
                            80000,
                            0,
                            "linear",
                            "${Text2Copy5}",
                            '27px',
                            '27px'
                        ],
                        [
                            "eid316",
                            "opacity",
                            37000,
                            0,
                            "linear",
                            "${_3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid315",
                            "opacity",
                            37500,
                            0,
                            "linear",
                            "${_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid344",
                            "opacity",
                            61000,
                            1000,
                            "linear",
                            "${divide}",
                            '0',
                            '1'
                        ],
                        [
                            "eid349",
                            "opacity",
                            64000,
                            1000,
                            "linear",
                            "${divide}",
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
                            "eid314",
                            "opacity",
                            36000,
                            0,
                            "linear",
                            "${_2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid313",
                            "opacity",
                            36500,
                            0,
                            "linear",
                            "${_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid194",
                            "background-color",
                            25000,
                            500,
                            "linear",
                            "${Rectangle3Copy10}",
                            'rgba(251,246,246,0)',
                            'rgba(239,239,35,1.00)'
                        ],
                        [
                            "eid308",
                            "background-color",
                            39500,
                            0,
                            "easeOutQuad",
                            "${Rectangle3Copy10}",
                            'rgba(239,239,35,1.00)',
                            'rgba(239,239,35,0.00)'
                        ],
                        [
                            "eid300",
                            "opacity",
                            22000,
                            1000,
                            "linear",
                            "${blue_1Copy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid301",
                            "opacity",
                            38500,
                            0,
                            "linear",
                            "${blue_1Copy5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid386",
                            "top",
                            80000,
                            0,
                            "easeInQuint",
                            "${Choose_B}",
                            '458px',
                            '458px'
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
                            "eid385",
                            "left",
                            80000,
                            0,
                            "easeInQuint",
                            "${Choose_B}",
                            '290px',
                            '290px'
                        ],
                        [
                            "eid384",
                            "opacity",
                            79000,
                            1000,
                            "easeInQuint",
                            "${Choose_B}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid324",
                            "opacity",
                            48000,
                            1000,
                            "linear",
                            "${Hint_3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid332",
                            "opacity",
                            51000,
                            0,
                            "linear",
                            "${Hint_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid356",
                            "opacity",
                            65500,
                            1000,
                            "linear",
                            "${hint_4_multiplyCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid304",
                            "top",
                            38500,
                            500,
                            "linear",
                            "${blue_1Copy5}",
                            '0px',
                            '-69px'
                        ],
                        [
                            "eid307",
                            "top",
                            39000,
                            500,
                            "easeOutQuad",
                            "${blue_1Copy5}",
                            '-69px',
                            '0px'
                        ],
                        [
                            "eid326",
                            "opacity",
                            18000,
                            0,
                            "linear",
                            "${blue_1Copy1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid240",
                            "opacity",
                            34500,
                            0,
                            "easeOutCubic",
                            "${blue_1Copy1}",
                            '0',
                            '0.78'
                        ],
                        [
                            "eid325",
                            "opacity",
                            35500,
                            0,
                            "linear",
                            "${blue_1Copy1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid243",
                            "left",
                            34500,
                            500,
                            "easeOutSine",
                            "${blue_1Copy1}",
                            '-22px',
                            '117px'
                        ],
                        [
                            "eid269",
                            "left",
                            35000,
                            500,
                            "swing",
                            "${blue_1Copy1}",
                            '117px',
                            '156px'
                        ],
                        [
                            "eid185",
                            "background-color",
                            23500,
                            500,
                            "linear",
                            "${Rectangle3Copy13}",
                            'rgba(251,246,246,0)',
                            'rgba(239,239,35,1.00)'
                        ],
                        [
                            "eid279",
                            "background-color",
                            36500,
                            0,
                            "linear",
                            "${Rectangle3Copy13}",
                            'rgba(239,239,35,1.00)',
                            'rgba(239,239,35,0.00)'
                        ],
                        [
                            "eid381",
                            "opacity",
                            74000,
                            1000,
                            "easeInQuint",
                            "${equalsCopy}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid391", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question}', [] ] ],
                            [ "eid392", "trigger", 9000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1}', [] ] ],
                            [ "eid393", "trigger", 27000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2}', [] ] ],
                            [ "eid394", "trigger", 41000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint3}', [] ] ],
                            [ "eid395", "trigger", 51000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint4}', [] ] ],
                            [ "eid412", "trigger", 77000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${answerhint}', [] ] ]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("problem_363_edgeActions.js");
})("EdgeProblem");
