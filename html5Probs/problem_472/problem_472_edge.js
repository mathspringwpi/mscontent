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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Question_TextBlack',
                            type: 'text',
                            rect: ['24', '30', '298', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​Which line has the greatest slope?</p>",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Answers',
                            symbolName: 'Answers_1',
                            type: 'rect',
                            rect: ['24', '405px', '156', '187', 'auto', 'auto']
                        },
                        {
                            id: 'AnswerDText',
                            type: 'text',
                            rect: ['71', '526px', '101', '20px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​<span style=\"font-family: 'Times New Roman', Times, serif; font-style: italic;\">x </span><span style=\"font-family: 'Times New Roman', Times, serif;\">– 4</span><span style=\"font-family: 'Times New Roman', Times, serif; font-style: italic;\">y</span><span style=\"font-family: 'Times New Roman', Times, serif;\"> = 6</span></p>",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerCText',
                            type: 'text',
                            rect: ['70px', '492px', '101', '19px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​<span style=\"font-family: 'Times New Roman', Times, serif; font-style: italic;\">x</span><span style=\"font-family: 'Times New Roman', Times, serif;\"> + 4</span><span style=\"font-family: 'Times New Roman', Times, serif; font-style: italic;\">y</span><span style=\"font-family: 'Times New Roman', Times, serif;\"> = 6</span></p>",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerBText',
                            type: 'text',
                            rect: ['69px', '459px', '112', '19px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​<span style=\"font-family: 'Times New Roman', Times, serif;\">2</span><span style=\"font-family: 'Times New Roman', Times, serif; font-style: italic;\">x</span><span style=\"font-family: 'Times New Roman', Times, serif;\"> – 10</span><span style=\"font-family: 'Times New Roman', Times, serif; font-style: italic;\">y</span><span style=\"font-family: 'Times New Roman', Times, serif;\"> = 3</span></p>",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerAText',
                            type: 'text',
                            rect: ['71', '424px', '109', '19', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​<span style=\"font-family: 'Times New Roman', Times, serif;\">3</span><span style=\"font-family: 'Times New Roman', Times, serif; font-style: italic;\">x</span><span style=\"font-family: 'Times New Roman', Times, serif;\"> – 8</span><span style=\"font-family: 'Times New Roman', Times, serif; font-style: italic;\">y</span><span style=\"font-family: 'Times New Roman', Times, serif;\"> = 1</span></p>",
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
                            id: 'AnswerEText',
                            type: 'text',
                            rect: ['71', '549', '101', '20px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​</p>",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint_1a',
                            display: 'none',
                            type: 'text',
                            rect: ['402px', '21px', '187px', '78px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">Ax + By &nbsp;= C</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; y = mx + b</p>",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, "px"], "rgba(5,68,15,1.00)", "400", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'Answer_A',
                            display: 'none',
                            type: 'text',
                            rect: ['210px', '494px', '355px', '30', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\"><span style=\"color: rgb(7, 136, 27); font-weight: 700;\">The answer is A. The greatest slope is&nbsp;</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(5,68,15,1.00)", "normal", "none", "normal", "break-word", ""]
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
                            id: 'Group3',
                            display: 'none',
                            type: 'group',
                            rect: ['494px', '263px', '22', '30', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Question_TextGreenItalicsCopy',
                                type: 'text',
                                rect: ['0px', '0px', '22px', '30', 'auto', 'auto'],
                                text: "<p style=\"margin:0px\">​–</p>",
                                align: "left",
                                font: ['Georgia, Times New Roman, Times, serif', [18, "px"], "rgba(5,68,15,1)", "normal", "none", "italic", "break-word", ""]
                            },
                            {
                                id: 'Question_TextGreenItalics',
                                type: 'text',
                                rect: ['-58px', '0px', '40px', '30', 'auto', 'auto'],
                                text: "<p style=\"margin:0px\">​y =&nbsp;</p>",
                                align: "left",
                                font: ['Georgia, Times New Roman, Times, serif', [18, "px"], "rgba(5,68,15,1)", "normal", "none", "italic", "break-word", ""]
                            },
                            {
                                id: 'Group2Copy2',
                                type: 'group',
                                rect: ['23px', '13px', '63', '2', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Question_TextRedItalicsCopy3',
                                    type: 'text',
                                    rect: ['8px', '3px', '26', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin:0px\">B</p>",
                                    align: "left",
                                    font: ['Georgia, Times New Roman, Times, serif', [18, "px"], "rgba(5,68,15,1.00)", "normal", "none", "italic", "break-word", ""]
                                },
                                {
                                    id: 'Rectangle4Copy2',
                                    type: 'rect',
                                    rect: ['0px', '0px', '33px', '1px', 'auto', 'auto'],
                                    fill: ["rgba(5,68,15,1)"],
                                    stroke: [1,"rgb(5, 68, 15)","none"]
                                },
                                {
                                    id: 'TextCopy4',
                                    type: 'text',
                                    rect: ['5px', '-22px', '40px', '27px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(5, 68, 15);\">&nbsp;Ax</span></p>",
                                    align: "left",
                                    font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Group2Copy',
                                type: 'group',
                                rect: ['-28px', '14px', '29px', '1px', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Question_TextRedItalicsCopy2',
                                    type: 'text',
                                    rect: ['5px', '2px', '26', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin:0px\">B</p>",
                                    align: "left",
                                    font: ['Georgia, Times New Roman, Times, serif', [18, "px"], "rgba(5,68,15,1.00)", "normal", "none", "italic", "break-word", ""]
                                },
                                {
                                    id: 'Rectangle4Copy',
                                    type: 'rect',
                                    rect: ['0px', '0px', '20px', '1px', 'auto', 'auto'],
                                    fill: ["rgba(5,68,15,1)"],
                                    stroke: [1,"rgb(5, 68, 15)","none"]
                                },
                                {
                                    id: 'TextCopy3',
                                    type: 'text',
                                    rect: ['3px', '-23px', '24px', '20px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(5, 68, 15);\">C&nbsp;</span></p>",
                                    align: "left",
                                    font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'Group4',
                            display: 'none',
                            type: 'group',
                            rect: ['485px', '318px', '22', '30', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Question_TextGreenItalicsCopy3',
                                type: 'text',
                                rect: ['-19px', '-1px', '22px', '30', 'auto', 'auto'],
                                text: "<p style=\"margin:0px\">​–</p>",
                                align: "left",
                                font: ['Georgia, Times New Roman, Times, serif', [18, "px"], "rgba(5,68,15,1)", "normal", "none", "italic", "break-word", ""]
                            },
                            {
                                id: 'Question_TextGreenItalicsCopy2',
                                type: 'text',
                                rect: ['-58px', '0px', '40px', '30', 'auto', 'auto'],
                                text: "<p style=\"margin:0px\">​y = &nbsp;</p>",
                                align: "left",
                                font: ['Georgia, Times New Roman, Times, serif', [18, "px"], "rgba(5,68,15,1)", "normal", "none", "italic", "break-word", ""]
                            },
                            {
                                id: 'Group2Copy4',
                                type: 'group',
                                rect: ['1px', '13px', '63', '2', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Question_TextRedItalicsCopy5',
                                    type: 'text',
                                    rect: ['8px', '3px', '26', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin:0px\">B</p>",
                                    align: "left",
                                    font: ['Georgia, Times New Roman, Times, serif', [18, "px"], "rgba(5,68,15,1.00)", "normal", "none", "italic", "break-word", ""]
                                },
                                {
                                    id: 'Rectangle4Copy4',
                                    type: 'rect',
                                    rect: ['0px', '0px', '33px', '1px', 'auto', 'auto'],
                                    fill: ["rgba(5,68,15,1)"],
                                    stroke: [1,"rgb(5, 68, 15)","none"]
                                },
                                {
                                    id: 'TextCopy6',
                                    type: 'text',
                                    rect: ['5px', '-22px', '40px', '27px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(5, 68, 15);\">&nbsp;Ax</span></p>",
                                    align: "left",
                                    font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(157,0,9,1.00)", "400", "none", "italic", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Group2Copy3',
                                type: 'group',
                                rect: ['61px', '14px', '29px', '1px', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Question_TextRedItalicsCopy4',
                                    type: 'text',
                                    rect: ['5px', '2px', '26', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin:0px\">B</p>",
                                    align: "left",
                                    font: ['Georgia, Times New Roman, Times, serif', [18, "px"], "rgba(5,68,15,1.00)", "normal", "none", "italic", "break-word", ""]
                                },
                                {
                                    id: 'Rectangle4Copy3',
                                    type: 'rect',
                                    rect: ['0px', '0px', '20px', '1px', 'auto', 'auto'],
                                    fill: ["rgba(5,68,15,1)"],
                                    stroke: [1,"rgb(5, 68, 15)","none"]
                                },
                                {
                                    id: 'TextCopy5',
                                    type: 'text',
                                    rect: ['3px', '-23px', '24px', '20px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(5, 68, 15);\">C&nbsp;</span></p>",
                                    align: "left",
                                    font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['44px', '3px', '27px', '27px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(5, 68, 15);\">​+</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'Hint_1d',
                            display: 'none',
                            type: 'text',
                            rect: ['436px', '434px', '127px', '35px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(5, 68, 15); font-style: italic;\">y </span><span style=\"color: rgb(5, 68, 15);\">= </span><span style=\"color: rgb(157, 0, 9); font-style: italic;\">m</span><span style=\"color: rgb(5, 68, 15); font-style: italic;\">x</span><span style=\"color: rgb(5, 68, 15);\"> + b</span></p>",
                            align: "left",
                            font: ['Georgia, Times New Roman, Times, serif', [20, "px"], "rgba(0,82,203,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
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
                            id: 'Hint_1b',
                            display: 'none',
                            type: 'text',
                            rect: ['389px', '108px', '199px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​Ax + <span style=\"color: rgb(5, 68, 15);\">By</span> - Ax = <span style=\"color: rgb(5, 68, 15);\">C – Ax</span></p>",
                            align: "left",
                            font: ['Georgia, Times New Roman, Times, serif', [18, "px"], "rgba(0,82,203,1)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'Hint_1c',
                            display: 'none',
                            type: 'text',
                            rect: ['431px', '146px', '134px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​<span style=\"color: rgb(5, 68, 15);\">By</span>&nbsp; <span style=\"color: rgb(5, 68, 15);\">=</span> <span style=\"color: rgb(5, 68, 15);\">C – Ax</span></p>",
                            align: "left",
                            font: ['Georgia, Times New Roman, Times, serif', [18, "px"], "rgba(0,82,203,1)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'Group_1',
                            display: 'none',
                            type: 'group',
                            rect: ['431px', '181px', '38', '20', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['0px', '0px', '38px', '20px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(5, 68, 15);\">By</span></p>",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'TextCopy2',
                                type: 'text',
                                rect: ['31px', '18px', '38px', '20px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(5, 68, 15);\"> =</span></p>",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Question_TextRedItalics',
                                type: 'text',
                                rect: ['5px', '38px', '26', '28px', 'auto', 'auto'],
                                text: "<p style=\"margin:0px\">B</p>",
                                align: "left",
                                font: ['Georgia, Times New Roman, Times, serif', [18, "px"], "rgba(5,68,15,1.00)", "normal", "none", "italic", "break-word", ""]
                            },
                            {
                                id: 'Rectangle2',
                                type: 'rect',
                                rect: ['0px', '30px', '26px', '2px', 'auto', 'auto'],
                                fill: ["rgba(5,68,15,1.00)"],
                                stroke: [1,"rgba(5,68,15,1.00)","none"]
                            },
                            {
                                id: 'Group2',
                                type: 'group',
                                rect: ['53', '29', '63', '2', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Question_TextRedItalicsCopy',
                                    type: 'text',
                                    rect: ['19px', '9px', '26', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin:0px\">B</p>",
                                    align: "left",
                                    font: ['Georgia, Times New Roman, Times, serif', [18, "px"], "rgba(5,68,15,1.00)", "normal", "none", "italic", "break-word", ""]
                                },
                                {
                                    id: 'Rectangle4',
                                    type: 'rect',
                                    rect: ['0px', '0px', '63px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(5,68,15,1)"],
                                    stroke: [1,"rgb(5, 68, 15)","none"]
                                },
                                {
                                    id: 'TextCopy',
                                    type: 'text',
                                    rect: ['5px', '-29px', '77px', '20px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(5, 68, 15);\">C – Ax</span></p>",
                                    align: "left",
                                    font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Rectangle5',
                                display: 'none',
                                type: 'rect',
                                rect: ['0px', '49px', '25px', '0px', 'auto', 'auto'],
                                fill: ["rgba(192,192,192,1)"],
                                stroke: [1,"rgb(135, 0, 0)","solid"],
                                transform: [[],['21']]
                            },
                            {
                                id: 'Rectangle5Copy2',
                                display: 'none',
                                type: 'rect',
                                rect: ['-8px', '15px', '25px', '0px', 'auto', 'auto'],
                                fill: ["rgba(192,192,192,1)"],
                                stroke: [1,"rgb(135, 0, 0)","solid"],
                                transform: [[],['56']]
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
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['388px', '122px', '26px', '0px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [1,"rgba(135,0,0,1.00)","solid"],
                            transform: [[],['29']]
                        },
                        {
                            id: 'RectangleCopy',
                            display: 'none',
                            type: 'rect',
                            rect: ['458px', '121px', '26px', '0px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [1,"rgba(135,0,0,1.00)","solid"],
                            transform: [[],['34']]
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
                            id: 'table',
                            display: 'none',
                            type: 'image',
                            rect: ['14px', '57px', '383px', '309px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"table.png",'0px','0px']
                        },
                        {
                            id: 'Group5',
                            display: 'none',
                            type: 'group',
                            rect: ['530px', '378px', '51', '30', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text4',
                                type: 'text',
                                rect: ['0px', '0px', '51px', '30px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(157, 0, 9);\">= </span><span style=\"font-style: italic; color: rgb(157, 0, 9);\">m</span></p>",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [20, "px"], "rgba(5,68,15,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Rectangle6',
                                type: 'rect',
                                rect: ['-71px', '10px', '15px', '2px', 'auto', 'auto'],
                                fill: ["rgba(157,0,9,1.00)"],
                                stroke: [1,"rgba(157,0,9,1.00)","none"]
                            },
                            {
                                id: 'Group2Copy5',
                                type: 'group',
                                rect: ['-47px', '10px', '63', '2', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Question_TextRedItalicsCopy6',
                                    type: 'text',
                                    rect: ['8px', '3px', '26', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin:0px\"><span style=\"color: rgb(157, 0, 9);\">B</span></p>",
                                    align: "left",
                                    font: ['Georgia, Times New Roman, Times, serif', [18, "px"], "rgba(5,68,15,1.00)", "normal", "none", "italic", "break-word", ""]
                                },
                                {
                                    id: 'Rectangle4Copy5',
                                    type: 'rect',
                                    rect: ['0px', '0px', '33px', '1px', 'auto', 'auto'],
                                    fill: ["rgba(157,0,9,1.00)"],
                                    stroke: [1,"rgba(157,0,9,1.00)","none"]
                                },
                                {
                                    id: 'TextCopy7',
                                    type: 'text',
                                    rect: ['5px', '-22px', '40px', '27px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​&nbsp;A</p>",
                                    align: "left",
                                    font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(157,0,9,1.00)", "400", "none", "italic", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'three_eighth',
                            display: 'none',
                            type: 'group',
                            rect: ['548px', '501px', '29px', '1px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Question_TextRedItalicsCopy7',
                                type: 'text',
                                rect: ['5px', '2px', '26', '28px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(7, 136, 27); font-family: Arial, Helvetica, sans-serif;\">8</span></p>",
                                align: "left",
                                font: ['Georgia, Times New Roman, Times, serif', [18, "px"], "rgba(5,68,15,1.00)", "700", "none", "italic", "break-word", ""]
                            },
                            {
                                id: 'Rectangle4Copy6',
                                type: 'rect',
                                rect: ['0px', '0px', '20px', '1px', 'auto', 'auto'],
                                fill: ["rgba(7,136,27,1.00)"],
                                stroke: [1,"rgba(7,136,27,1.00)","none"]
                            },
                            {
                                id: 'TextCopy8',
                                type: 'text',
                                rect: ['3px', '-23px', '24px', '20px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(7, 136, 27); font-family: Arial, Helvetica, sans-serif;\">3​&nbsp;</span></p>",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(0,82,203,1)", "700", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
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
                    duration: 64500,
                    autoPlay: true,
                    labels: {
                        "Read Question": 2000,
                        "Hint 1": 7000,
                        "Hint 2": 42000,
                        "Answer Hint": 59000
                    },
                    data: [
                        [
                            "eid244",
                            "display",
                            34000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid246",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${Rectangle5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid245",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${Group_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid238",
                            "display",
                            31936,
                            0,
                            "linear",
                            "${Hint_1a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid270",
                            "display",
                            45000,
                            0,
                            "linear",
                            "${Group5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid243",
                            "display",
                            34000,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid272",
                            "display",
                            60000,
                            0,
                            "linear",
                            "${Answer_A}",
                            'none',
                            'block'
                        ],
                        [
                            "eid268",
                            "display",
                            45000,
                            0,
                            "linear",
                            "${Hint_1d}",
                            'none',
                            'block'
                        ],
                        [
                            "eid275",
                            "display",
                            60000,
                            0,
                            "linear",
                            "${three_eighth}",
                            'none',
                            'block'
                        ],
                        [
                            "eid249",
                            "display",
                            38000,
                            0,
                            "linear",
                            "${Group3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid242",
                            "display",
                            35000,
                            0,
                            "linear",
                            "${Hint_1c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid269",
                            "display",
                            55000,
                            0,
                            "linear",
                            "${table}",
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
                            "eid248",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${Rectangle5Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid250",
                            "display",
                            39000,
                            0,
                            "linear",
                            "${Group4}",
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
                            "eid239",
                            "display",
                            33000,
                            0,
                            "linear",
                            "${Hint_1b}",
                            'none',
                            'block'
                        ],
                            [ "eid240", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question}', [] ] ],
                            [ "eid241", "trigger", 7000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1}', [] ] ],
                            [ "eid273", "trigger", 42000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2}', [] ] ],
                            [ "eid274", "trigger", 59000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${answer}', [] ] ]
                    ]
                }
            },
            "EButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
                                rect: [36, 4, 101, '20px', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                id: 'Text14',
                                text: 'Answer E Text',
                                align: 'left',
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
                                rect: [36, 4, 101, '20px', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                id: 'Text14',
                                text: 'Answer E Text',
                                align: 'left',
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
            "DButton_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                                type: 'text',
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                rect: [0, 4, 27, '20px', 'auto', 'auto']
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: [36, 4, 101, '20px', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                id: 'Text13',
                                text: 'Answer D Text',
                                align: 'left',
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: [36, 4, 101, '20px', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                id: 'Text13',
                                text: 'Answer D Text',
                                align: 'left',
                                type: 'text'
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: [36, 4, 94, '20px', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                id: 'Text13',
                                text: 'Answer Text D',
                                align: 'left',
                                type: 'text'
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                                type: 'text',
                                id: 'Text5',
                                text: 'C',
                                align: 'center',
                                rect: [0, 4, 27, '20px', 'auto', 'auto']
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                                type: 'text',
                                id: 'Text4',
                                text: 'B',
                                align: 'center',
                                rect: [0, 5, 27, 19, 'auto', 'auto']
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
                                id: 'A',
                                text: 'A<br><br><br>',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', '']
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                id: 'Text3',
                                text: 'A<br><br><br>',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: [36, 3, 109, '19px', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [12, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                id: 'Text9',
                                text: 'Answer Text A',
                                align: 'left',
                                type: 'text'
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("problem_472_edgeActions.js");
})("EdgeProblem");
