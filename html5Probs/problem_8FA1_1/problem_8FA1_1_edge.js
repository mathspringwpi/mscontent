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
                            id: 'Question_TextBlack',
                            type: 'text',
                            rect: ['18px', '11px', '550px', '45px', 'auto', 'auto'],
                            text: "A function machine takes an input, uses a rule, and produces an output.",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Answers',
                            symbolName: 'Answers_1',
                            type: 'rect',
                            rect: ['24', '386', '156', '187', 'auto', 'auto']
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
                            id: 'Hint_2_text',
                            display: 'none',
                            type: 'text',
                            rect: ['333px', '402px', '178px', '70px', 'auto', 'auto'],
                            text: "Substitute each value of x into the equation and solve for y:",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint_1_text_2',
                            display: 'none',
                            type: 'text',
                            rect: ['332px', '328px', '233', '23px', 'auto', 'auto'],
                            text: "We can write it this way:",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Group37',
                            type: 'group',
                            rect: ['364', '42', '189', '156', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['27px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "Input",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(5,68,15,1)", "400", "none solid rgb(5, 68, 15)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['138px', '120px', 'auto', 'auto', 'auto', 'auto'],
                                text: "Output",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(5,68,15,1)", "400", "none solid rgb(5, 68, 15)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'Group6',
                                type: 'group',
                                rect: ['42px', '26px', '9', '29', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Rectangle4',
                                    type: 'rect',
                                    rect: ['4px', '0px', '0px', '24px', 'auto', 'auto'],
                                    fill: ["rgba(192,192,192,1)"],
                                    stroke: [1,"rgba(0,0,0,1.00)","solid"]
                                },
                                {
                                    id: 'Rectangle4Copy2',
                                    type: 'rect',
                                    rect: ['2px', '19px', '0px', '8px', 'auto', 'auto'],
                                    fill: ["rgba(192,192,192,1)"],
                                    stroke: [1,"rgba(0,0,0,1.00)","solid"],
                                    transform: [[],['-21']]
                                },
                                {
                                    id: 'Rectangle4Copy3',
                                    type: 'rect',
                                    rect: ['6px', '19px', '0px', '8px', 'auto', 'auto'],
                                    fill: ["rgba(192,192,192,1)"],
                                    stroke: [1,"rgba(0,0,0,1.00)","solid"],
                                    transform: [[],['21']]
                                }]
                            },
                            {
                                id: 'Group5',
                                type: 'group',
                                rect: ['107px', '127px', '26', '8', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Rectangle4Copy',
                                    type: 'rect',
                                    rect: ['12px', '-9px', '0px', '24px', 'auto', 'auto'],
                                    fill: ["rgba(192,192,192,1)"],
                                    stroke: [1,"rgba(0,0,0,1.00)","solid"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'Rectangle4Copy4',
                                    type: 'rect',
                                    rect: ['18px', '1px', '0px', '8px', 'auto', 'auto'],
                                    fill: ["rgba(192,192,192,1)"],
                                    stroke: [1,"rgba(0,0,0,1.00)","solid"],
                                    transform: [[],['79']]
                                },
                                {
                                    id: 'Rectangle4Copy5',
                                    type: 'rect',
                                    rect: ['18px', '-3px', '0px', '8px', 'auto', 'auto'],
                                    fill: ["rgba(192,192,192,1)"],
                                    stroke: [1,"rgba(0,0,0,1.00)","solid"],
                                    transform: [[],['101']]
                                }]
                            },
                            {
                                id: 'Group36',
                                type: 'group',
                                rect: ['0px', '48px', '116', '108', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Group2',
                                    type: 'group',
                                    rect: ['27px', '0px', '38', '30', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: 'Rectangle2',
                                        type: 'rect',
                                        rect: ['5px', '0px', '0px', '24px', 'auto', 'auto'],
                                        fill: ["rgba(192,192,192,1)"],
                                        stroke: [2,"rgba(100,100,100,1.00)","solid"],
                                        transform: [[],['-20']]
                                    },
                                    {
                                        id: 'Rectangle2Copy',
                                        type: 'rect',
                                        rect: ['30px', '0px', '0px', '24px', 'auto', 'auto'],
                                        fill: ["rgba(192,192,192,1)"],
                                        stroke: [2,"rgba(100,100,100,1.00)","solid"],
                                        transform: [[],['20']]
                                    },
                                    {
                                        id: 'Rectangle3',
                                        type: 'rect',
                                        rect: ['13px', '24px', '7px', '0px', 'auto', 'auto'],
                                        fill: ["rgba(192,192,192,1)"],
                                        stroke: [3,"rgba(192,192,192,1.00)","solid"]
                                    }]
                                },
                                {
                                    id: 'Group34',
                                    type: 'group',
                                    rect: ['84px', '63px', '32', '41', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: 'Rectangle2Copy2',
                                        type: 'rect',
                                        rect: ['16px', '-7px', '0px', '24px', 'auto', 'auto'],
                                        fill: ["rgba(192,192,192,1)"],
                                        stroke: [2,"rgba(100,100,100,1.00)","solid"],
                                        transform: [[],['70']]
                                    },
                                    {
                                        id: 'Rectangle2Copy3',
                                        type: 'rect',
                                        rect: ['16px', '21px', '0px', '24px', 'auto', 'auto'],
                                        fill: ["rgba(192,192,192,1)"],
                                        stroke: [2,"rgba(100,100,100,1.00)","solid"],
                                        transform: [[],['110']]
                                    },
                                    {
                                        id: 'Rectangle3Copy',
                                        type: 'rect',
                                        rect: ['-4px', '18px', '7px', '0px', 'auto', 'auto'],
                                        fill: ["rgba(192,192,192,1)"],
                                        stroke: [3,"rgba(192,192,192,1.00)","solid"],
                                        transform: [[],['90']]
                                    }]
                                },
                                {
                                    id: 'Group35',
                                    type: 'group',
                                    rect: ['0px', '24px', '89', '84', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: 'Rectangle',
                                        type: 'rect',
                                        rect: ['0px', '0px', '83px', '78px', 'auto', 'auto'],
                                        fill: ["rgba(192,192,192,1)"],
                                        stroke: [3,"rgba(100,100,100,1.00)","solid"]
                                    },
                                    {
                                        id: 'Text6',
                                        type: 'text',
                                        rect: ['28px', '29px', 'auto', 'auto', 'auto', 'auto'],
                                        text: "Rule",
                                        align: "left",
                                        font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(5,68,15,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                                    }]
                                }]
                            }]
                        },
                        {
                            id: 'Hint_1_equation',
                            display: 'none',
                            type: 'group',
                            rect: ['388px', '366px', '76', '39', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Question_TextRedNumber',
                                type: 'text',
                                rect: ['17px', '2px', '39px', '36px', 'auto', 'auto'],
                                text: "= 3",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Question_TextRedItalics',
                                type: 'text',
                                rect: ['50px', '1px', '26', '38', 'auto', 'auto'],
                                text: "x",
                                align: "left",
                                font: ['Georgia, Times New Roman, Times, serif', [20, "px"], "rgba(157,0,9,1)", "normal", "none", "italic", "break-word", ""]
                            },
                            {
                                id: 'Question_TextRedItalicsCopy',
                                type: 'text',
                                rect: ['0px', '0px', '26', '38', 'auto', 'auto'],
                                text: "y",
                                align: "left",
                                font: ['Georgia, Times New Roman, Times, serif', [20, "px"], "rgba(157,0,9,1)", "normal", "none", "italic", "break-word", ""]
                            }]
                        },
                        {
                            id: 'Group18',
                            type: 'group',
                            rect: ['71', '408', '86', '19', 'auto', 'auto'],
                            c: [
                            {
                                id: 'AnswerAText',
                                type: 'text',
                                rect: ['12px', '0px', '74px', '19', 'auto', 'auto'],
                                text: "= 6, 21, 12",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'AnswerATextCopy',
                                type: 'text',
                                rect: ['0px', '0px', '19px', '19', 'auto', 'auto'],
                                text: "x",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", ""]
                            }]
                        },
                        {
                            id: 'Group15',
                            type: 'group',
                            rect: ['71', '513px', '53', '24', 'auto', 'auto'],
                            c: [
                            {
                                id: 'AnswerDText',
                                type: 'text',
                                rect: ['10px', '0px', '43px', '24px', 'auto', 'auto'],
                                text: "= 13",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'AnswerATextCopy2',
                                type: 'text',
                                rect: ['0px', '0px', '19px', '19', 'auto', 'auto'],
                                text: "x",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", ""]
                            }]
                        },
                        {
                            id: 'Group16',
                            type: 'group',
                            rect: ['71', '477px', '54', '19', 'auto', 'auto'],
                            c: [
                            {
                                id: 'AnswerCText',
                                type: 'text',
                                rect: ['11px', '0px', '43px', '18px', 'auto', 'auto'],
                                text: "= 13",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'AnswerATextCopy3',
                                type: 'text',
                                rect: ['0px', '0px', '19px', '19', 'auto', 'auto'],
                                text: "y",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", ""]
                            }]
                        },
                        {
                            id: 'Group17',
                            type: 'group',
                            rect: ['71', '443', '86', '20', 'auto', 'auto'],
                            c: [
                            {
                                id: 'AnswerBText',
                                type: 'text',
                                rect: ['12px', '0px', '74px', '20px', 'auto', 'auto'],
                                text: "= 6, 21, 12",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'AnswerATextCopy4',
                                type: 'text',
                                rect: ['0px', '1px', '19px', '19', 'auto', 'auto'],
                                text: "y",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", ""]
                            }]
                        },
                        {
                            id: 'Hint_1_text_3',
                            display: 'none',
                            type: 'text',
                            rect: ['332px', '415px', '233', '67px', 'auto', 'auto'],
                            text: "For each value of x you put into the function, it will give you back a different value for y.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
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
                            id: 'Hint2Equations',
                            display: 'none',
                            type: 'group',
                            rect: ['358', '464px', '94', '99', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Group26',
                                type: 'group',
                                rect: ['0px', '0px', '94', '40', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Question_TextRedItalicsCopy2',
                                    type: 'text',
                                    rect: ['0px', '0px', '26', '38', 'auto', 'auto'],
                                    text: "y",
                                    align: "left",
                                    font: ['Georgia, Times New Roman, Times, serif', [20, "px"], "rgba(157,0,9,1)", "normal", "none", "italic", "break-word", ""]
                                },
                                {
                                    id: 'Question_TextRedNumberCopy',
                                    type: 'text',
                                    rect: ['17px', '2px', '77', '38', 'auto', 'auto'],
                                    text: "= 3 x 2",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                                }]
                            },
                            {
                                id: 'Group21',
                                type: 'group',
                                rect: ['0px', '30px', '94', '40', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Question_TextRedItalicsCopy3',
                                    type: 'text',
                                    rect: ['0px', '0px', '26', '38', 'auto', 'auto'],
                                    text: "y",
                                    align: "left",
                                    font: ['Georgia, Times New Roman, Times, serif', [20, "px"], "rgba(157,0,9,1)", "normal", "none", "italic", "break-word", ""]
                                },
                                {
                                    id: 'Question_TextRedNumberCopy2',
                                    type: 'text',
                                    rect: ['17px', '2px', '77', '38', 'auto', 'auto'],
                                    text: "= 3 x 7",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                                }]
                            },
                            {
                                id: 'Group21Copy',
                                type: 'group',
                                rect: ['0px', '59px', '94', '40', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Question_TextRedItalicsCopy4',
                                    type: 'text',
                                    rect: ['0px', '0px', '26', '38', 'auto', 'auto'],
                                    text: "y",
                                    align: "left",
                                    font: ['Georgia, Times New Roman, Times, serif', [20, "px"], "rgba(157,0,9,1)", "normal", "none", "italic", "break-word", ""]
                                },
                                {
                                    id: 'Question_TextRedNumberCopy4',
                                    type: 'text',
                                    rect: ['17px', '2px', '77', '38', 'auto', 'auto'],
                                    text: "= 3 x 4",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                                }]
                            }]
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
                            id: 'Group33',
                            type: 'group',
                            rect: ['2', '59', '278', '305', 'auto', 'auto'],
                            c: [
                            {
                                id: 'RoundRect',
                                type: 'rect',
                                rect: ['0px', '0px', '276px', '303px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(228,253,232,1.00)"],
                                stroke: [1,"rgba(5,68,15,1.00)","solid"]
                            },
                            {
                                id: 'Group32',
                                type: 'group',
                                rect: ['17px', '14px', '250', '262', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Group31',
                                    type: 'group',
                                    rect: ['89px', '113px', '148', '149', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: 'Text3',
                                        type: 'text',
                                        rect: ['42px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                        text: "x",
                                        align: "left",
                                        font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(5,68,15,1)", "400", "none solid rgb(5, 68, 15)", "italic", "break-word", "nowrap"]
                                    },
                                    {
                                        id: 'Text4',
                                        type: 'text',
                                        rect: ['138px', '113px', 'auto', 'auto', 'auto', 'auto'],
                                        text: "y",
                                        align: "left",
                                        font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(5,68,15,1)", "400", "none solid rgb(5, 68, 15)", "italic", "break-word", "nowrap"]
                                    },
                                    {
                                        id: 'Group6Copy',
                                        type: 'group',
                                        rect: ['42px', '24px', '9', '29', 'auto', 'auto'],
                                        c: [
                                        {
                                            id: 'Rectangle4Copy8',
                                            type: 'rect',
                                            rect: ['4px', '0px', '0px', '24px', 'auto', 'auto'],
                                            fill: ["rgba(192,192,192,1)"],
                                            stroke: [1,"rgba(0,0,0,1.00)","solid"]
                                        },
                                        {
                                            id: 'Rectangle4Copy7',
                                            type: 'rect',
                                            rect: ['2px', '19px', '0px', '8px', 'auto', 'auto'],
                                            fill: ["rgba(192,192,192,1)"],
                                            stroke: [1,"rgba(0,0,0,1.00)","solid"],
                                            transform: [[],['-21']]
                                        },
                                        {
                                            id: 'Rectangle4Copy6',
                                            type: 'rect',
                                            rect: ['6px', '19px', '0px', '8px', 'auto', 'auto'],
                                            fill: ["rgba(192,192,192,1)"],
                                            stroke: [1,"rgba(0,0,0,1.00)","solid"],
                                            transform: [[],['21']]
                                        }]
                                    },
                                    {
                                        id: 'Group5Copy',
                                        type: 'group',
                                        rect: ['107px', '121px', '26', '8', 'auto', 'auto'],
                                        c: [
                                        {
                                            id: 'Rectangle4Copy11',
                                            type: 'rect',
                                            rect: ['12px', '-9px', '0px', '24px', 'auto', 'auto'],
                                            fill: ["rgba(192,192,192,1)"],
                                            stroke: [1,"rgba(0,0,0,1.00)","solid"],
                                            transform: [[],['90']]
                                        },
                                        {
                                            id: 'Rectangle4Copy10',
                                            type: 'rect',
                                            rect: ['18px', '1px', '0px', '8px', 'auto', 'auto'],
                                            fill: ["rgba(192,192,192,1)"],
                                            stroke: [1,"rgba(0,0,0,1.00)","solid"],
                                            transform: [[],['79']]
                                        },
                                        {
                                            id: 'Rectangle4Copy9',
                                            type: 'rect',
                                            rect: ['18px', '-3px', '0px', '8px', 'auto', 'auto'],
                                            fill: ["rgba(192,192,192,1)"],
                                            stroke: [1,"rgba(0,0,0,1.00)","solid"],
                                            transform: [[],['101']]
                                        }]
                                    },
                                    {
                                        id: 'Group30',
                                        type: 'group',
                                        rect: ['0px', '41px', '116', '108', 'auto', 'auto'],
                                        c: [
                                        {
                                            id: 'RectangleCopy',
                                            type: 'rect',
                                            rect: ['0px', '24px', '83px', '78px', 'auto', 'auto'],
                                            fill: ["rgba(228,253,232,1.00)"],
                                            stroke: [3,"rgba(157,0,9,1.00)","solid"]
                                        },
                                        {
                                            id: 'Group29',
                                            type: 'group',
                                            rect: ['27px', '0px', '38', '29', 'auto', 'auto'],
                                            c: [
                                            {
                                                id: 'Rectangle2Copy7',
                                                type: 'rect',
                                                rect: ['5px', '0px', '0px', '24px', 'auto', 'auto'],
                                                fill: ["rgba(192,192,192,1)"],
                                                stroke: [2,"rgba(157,0,9,1.00)","solid"],
                                                transform: [[],['-20']]
                                            },
                                            {
                                                id: 'Rectangle2Copy6',
                                                type: 'rect',
                                                rect: ['30px', '0px', '0px', '24px', 'auto', 'auto'],
                                                fill: ["rgba(192,192,192,1)"],
                                                stroke: [2,"rgba(157,0,9,1.00)","solid"],
                                                transform: [[],['20']]
                                            },
                                            {
                                                id: 'Rectangle3Copy3',
                                                type: 'rect',
                                                rect: ['13px', '23px', '7px', '0px', 'auto', 'auto'],
                                                fill: ["rgba(228,253,232,1.00)"],
                                                stroke: [3,"rgba(228,253,232,1.00)","solid"]
                                            }]
                                        },
                                        {
                                            id: 'Group28',
                                            type: 'group',
                                            rect: ['84px', '63px', '32', '41', 'auto', 'auto'],
                                            c: [
                                            {
                                                id: 'Rectangle2Copy5',
                                                type: 'rect',
                                                rect: ['16px', '-7px', '0px', '24px', 'auto', 'auto'],
                                                fill: ["rgba(192,192,192,1)"],
                                                stroke: [2,"rgba(157,0,9,1.00)","solid"],
                                                transform: [[],['70']]
                                            },
                                            {
                                                id: 'Rectangle2Copy4',
                                                type: 'rect',
                                                rect: ['16px', '21px', '0px', '24px', 'auto', 'auto'],
                                                fill: ["rgba(192,192,192,1)"],
                                                stroke: [2,"rgba(157,0,9,1.00)","solid"],
                                                transform: [[],['110']]
                                            },
                                            {
                                                id: 'Rectangle3Copy2',
                                                type: 'rect',
                                                rect: ['-4px', '18px', '7px', '0px', 'auto', 'auto'],
                                                fill: ["rgba(228,253,232,1.00)"],
                                                stroke: [3,"rgba(228,253,232,1.00)","solid"],
                                                transform: [[],['90']]
                                            }]
                                        },
                                        {
                                            id: 'Text6Copy',
                                            type: 'text',
                                            rect: ['6px', '46px', '77px', '45px', 'auto', 'auto'],
                                            text: "multiply by 3",
                                            align: "center",
                                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(5,68,15,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""]
                                        }]
                                    }]
                                },
                                {
                                    id: 'Text11',
                                    type: 'text',
                                    rect: ['0px', '0px', '250px', '75px', 'auto', 'auto'],
                                    text: "If we put in the x values shown, what y values will this function machine give back to us?",
                                    align: "left",
                                    font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""]
                                },
                                {
                                    id: 'Group10',
                                    type: 'group',
                                    rect: ['0px', '66px', '85', '47', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: 'Group9',
                                        type: 'group',
                                        rect: ['0px', '5px', '85', '42', 'auto', 'auto'],
                                        c: [
                                        {
                                            id: 'Group7Copy',
                                            type: 'group',
                                            rect: ['0px', '0px', '85', '21', 'auto', 'auto'],
                                            c: [
                                            {
                                                id: 'Rectangle5Copy9',
                                                type: 'rect',
                                                rect: ['44px', '0px', '19px', '19px', 'auto', 'auto'],
                                                fill: ["rgba(228,253,232,1)"],
                                                stroke: [1,"rgba(149,192,254,1.00)","solid"]
                                            },
                                            {
                                                id: 'Rectangle5Copy8',
                                                type: 'rect',
                                                rect: ['64px', '0px', '19px', '19px', 'auto', 'auto'],
                                                fill: ["rgba(228,253,232,1)"],
                                                stroke: [1,"rgba(149,192,254,1.00)","solid"]
                                            },
                                            {
                                                id: 'Rectangle5Copy7',
                                                type: 'rect',
                                                rect: ['24px', '0px', '19px', '19px', 'auto', 'auto'],
                                                fill: ["rgba(228,253,232,1)"],
                                                stroke: [1,"rgba(149,192,254,1.00)","solid"]
                                            },
                                            {
                                                id: 'Rectangle5Copy6',
                                                type: 'rect',
                                                rect: ['0px', '0px', '23px', '19px', 'auto', 'auto'],
                                                fill: ["rgba(135,183,255,1.00)"],
                                                stroke: [1,"rgba(149,192,254,1.00)","solid"]
                                            }]
                                        },
                                        {
                                            id: 'Group7',
                                            type: 'group',
                                            rect: ['0px', '21px', '85', '21', 'auto', 'auto'],
                                            c: [
                                            {
                                                id: 'Rectangle5Copy3',
                                                type: 'rect',
                                                rect: ['44px', '0px', '19px', '19px', 'auto', 'auto'],
                                                fill: ["rgba(228,253,232,1)"],
                                                stroke: [1,"rgba(149,192,254,1.00)","solid"]
                                            },
                                            {
                                                id: 'Rectangle5Copy4',
                                                type: 'rect',
                                                rect: ['64px', '0px', '19px', '19px', 'auto', 'auto'],
                                                fill: ["rgba(228,253,232,1)"],
                                                stroke: [1,"rgba(149,192,254,1.00)","solid"]
                                            },
                                            {
                                                id: 'Rectangle5Copy2',
                                                type: 'rect',
                                                rect: ['24px', '0px', '19px', '19px', 'auto', 'auto'],
                                                fill: ["rgba(228,253,232,1)"],
                                                stroke: [1,"rgba(149,192,254,1.00)","solid"]
                                            },
                                            {
                                                id: 'Rectangle5Copy5',
                                                type: 'rect',
                                                rect: ['0px', '0px', '23px', '19px', 'auto', 'auto'],
                                                fill: ["rgba(135,183,255,1.00)"],
                                                stroke: [1,"rgba(149,192,254,1.00)","solid"]
                                            }]
                                        }]
                                    },
                                    {
                                        id: 'Group4',
                                        type: 'group',
                                        rect: ['5px', '0px', '76', '47', 'auto', 'auto'],
                                        c: [
                                        {
                                            id: 'Text12',
                                            type: 'text',
                                            rect: ['0px', '0px', '18px', '27px', 'auto', 'auto'],
                                            text: "x",
                                            align: "left",
                                            font: ['Times New Roman, Times, serif', [24, "px"], "rgba(5,68,15,1)", "400", "none solid rgb(5, 68, 15)", "italic", "break-word", ""]
                                        },
                                        {
                                            id: 'Text12Copy',
                                            type: 'text',
                                            rect: ['0px', '20px', '18px', '27px', 'auto', 'auto'],
                                            text: "y",
                                            align: "left",
                                            font: ['Times New Roman, Times, serif', [24, "px"], "rgba(5,68,15,1)", "400", "none solid rgb(5, 68, 15)", "italic", "break-word", ""]
                                        },
                                        {
                                            id: 'Text10Copy',
                                            type: 'text',
                                            rect: ['45px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                            text: "7",
                                            align: "left",
                                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(5,68,15,1)", "400", "none solid rgb(5, 68, 15)", "normal", "break-word", "nowrap"]
                                        },
                                        {
                                            id: 'Text10Copy2',
                                            type: 'text',
                                            rect: ['66px', '6px', '10px', '24px', 'auto', 'auto'],
                                            text: "4",
                                            align: "left",
                                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(5,68,15,1)", "400", "none solid rgb(5, 68, 15)", "normal", "break-word", ""]
                                        },
                                        {
                                            id: 'Text10',
                                            type: 'text',
                                            rect: ['23px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                            text: "2",
                                            align: "left",
                                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(5,68,15,1)", "400", "none solid rgb(5, 68, 15)", "normal", "break-word", "nowrap"]
                                        }]
                                    }]
                                }]
                            }]
                        },
                        {
                            id: 'Hint_1_text_1',
                            display: 'none',
                            type: 'text',
                            rect: ['333px', '270px', '233', '40px', 'auto', 'auto'],
                            text: "This machine takes an x-value and multiplies it by 3.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
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
                            id: 'Group19',
                            type: 'group',
                            rect: ['71', '547', '82', '22', 'auto', 'auto'],
                            c: [
                            {
                                id: 'AnswerBTextCopy',
                                type: 'text',
                                rect: ['12px', '0px', '25px', '20px', 'auto', 'auto'],
                                text: "= 2",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'AnswerATextCopy5',
                                type: 'text',
                                rect: ['0px', '1px', '19px', '19', 'auto', 'auto'],
                                text: "y",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", ""]
                            },
                            {
                                id: 'AnswerBTextCopy2',
                                type: 'text',
                                rect: ['46px', '0px', '13px', '20px', 'auto', 'auto'],
                                text: "7",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'AnswerBTextCopy3',
                                type: 'text',
                                rect: ['69px', '0px', '13px', '20px', 'auto', 'auto'],
                                text: "4",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'AnswerBTextCopy4',
                                type: 'text',
                                rect: ['36px', '2px', '13px', '20px', 'auto', 'auto'],
                                text: "x",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'AnswerBTextCopy5',
                                type: 'text',
                                rect: ['58px', '2px', '13px', '20px', 'auto', 'auto'],
                                text: "x",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'Question_TextRedNumberCopy5',
                            display: 'none',
                            type: 'text',
                            rect: ['463px', '466px', '41px', '26px', 'auto', 'auto'],
                            text: "= 6",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy6',
                            display: 'none',
                            type: 'text',
                            rect: ['463px', '496px', '41px', '26px', 'auto', 'auto'],
                            text: "= 21",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy7',
                            display: 'none',
                            type: 'text',
                            rect: ['463px', '525px', '41px', '26px', 'auto', 'auto'],
                            text: "= 12",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerText',
                            display: 'none',
                            type: 'text',
                            rect: ['36', '3', '109', '0', 'auto', 'auto'],
                            text: "The answer is b.",
                            align: "left",
                            font: ['{', [, "{undefined"], ":", "}", "{", "u", "n", "d"]
                        },
                        {
                            id: 'question',
                            display: 'none',
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
                    duration: 61750,
                    autoPlay: true,
                    labels: {
                        "Read Question": 2000,
                        "Hint 1": 21000,
                        "Hint 2": 46250,
                        "Answer Hint": 54500
                    },
                    data: [
                        [
                            "eid286",
                            "display",
                            59025,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid270",
                            "display",
                            32000,
                            0,
                            "linear",
                            "${Hint_1_equation}",
                            'none',
                            'block'
                        ],
                        [
                            "eid284",
                            "display",
                            56000,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid269",
                            "display",
                            29467,
                            0,
                            "linear",
                            "${Hint_1_text_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid283",
                            "display",
                            52750,
                            0,
                            "linear",
                            "${Hint2Equations}",
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
                            "eid244",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${Hint_2_text}",
                            '16px',
                            '16px'
                        ],
                        [
                            "eid281",
                            "display",
                            46250,
                            0,
                            "linear",
                            "${Hint_2_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid289",
                            "display",
                            59748,
                            0,
                            "linear",
                            "${AnswerText}",
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
                            "eid271",
                            "display",
                            38500,
                            0,
                            "linear",
                            "${Hint_1_text_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid272",
                            "display",
                            46250,
                            0,
                            "linear",
                            "${Hint_1_text_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid285",
                            "display",
                            57621,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid268",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${Hint_1_text_1}",
                            'none',
                            'block'
                        ],
                            [ "eid290", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question}', [] ] ],
                            [ "eid291", "trigger", 21000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1}', [] ] ],
                            [ "eid292", "trigger", 46250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2}', [] ] ],
                            [ "eid293", "trigger", 54500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${answer}', [] ] ]
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                                type: 'text',
                                id: 'Text8',
                                text: 'E',
                                align: 'center',
                                rect: [0, 4, 27, '20px', 'auto', 'auto']
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                                type: 'text',
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                rect: [0, 4, 27, '20px', 'auto', 'auto']
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                                type: 'text',
                                id: 'Text5',
                                text: 'C',
                                align: 'center',
                                rect: [0, 4, 27, '20px', 'auto', 'auto']
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', ''],
                                type: 'text',
                                id: 'Text4',
                                text: 'B',
                                align: 'center',
                                rect: [0, 5, 27, 19, 'auto', 'auto']
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
                                type: 'text',
                                rect: [0, 3, 27, 19, 'auto', 'auto'],
                                id: 'A',
                                text: 'A<br><br><br>',
                                align: 'center',
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', '']
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
                            rect: [0, 2, '153', '183', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'EButton',
                                symbolName: 'EButton_3',
                                rect: [8, 157, 101, 26, 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'DButton',
                                symbolName: 'DButton_3',
                                rect: [8, 121, 101, 26, 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'CButton',
                                symbolName: 'CButton_3',
                                rect: [8, 86, 101, 26, 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'BButton',
                                symbolName: 'BButton_3',
                                rect: [8, 50, 125, 26, 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'AButton',
                                symbolName: 'AButton_3',
                                rect: [0, 0, 153, 42, 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 156, 187]
                        },
                        '${AnswerText}': {
                            font: '{{:}{undefined{:}:{:}}{:}{{:}u{:}n{:}d',
                            rect: [36, 3, 109, 0]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("problem_8FA1_1_edgeActions.js");
})("EdgeProblem");
