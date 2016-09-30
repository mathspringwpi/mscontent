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
                            rect: ['24', '30', '298', '197px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​A company has shampoo stored in cube-shaped containers. &nbsp;The boss says that she wants to take the shampoo out of the cubes and sell it in cone-shaped bottles. &nbsp;One employee thinks, \"This is silly, the bottles are almost as large as the containers!\"&nbsp;</p><p style=\"margin:0px\">​Do you think the employee is right?</p><p style=\"margin:0px\">​How many cone-shaped bottles can be filled from each large container?</p><p style=\"margin:0px\">​</p>",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Answers',
                            symbolName: 'Answers_1',
                            type: 'rect',
                            rect: ['17px', '403px', '156', '187', 'auto', 'auto'],
                            transform: [[],[],[],['0.91453','0.94118']]
                        },
                        {
                            id: 'AnswerDText',
                            type: 'text',
                            rect: ['71', '529px', '28px', '20px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​51</p>",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerCText',
                            type: 'text',
                            rect: ['71', '496px', '28px', '19px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​20</p>",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerBText',
                            type: 'text',
                            rect: ['71', '462px', '28px', '19px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​6</p>",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerAText',
                            type: 'text',
                            rect: ['71', '428px', '28px', '19', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​2</p>",
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
                            id: 'AnswerEText',
                            type: 'text',
                            rect: ['71', '565px', '28px', '20px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​101</p>",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint_2_2',
                            display: 'none',
                            type: 'text',
                            rect: ['354px', '114px', '198px', '22px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​= 20 x 20 x 20 = 8000</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint_2_1',
                            display: 'none',
                            type: 'text',
                            rect: ['329px', '66px', '248px', '48px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​The volume of the cube = </p><p style=\"margin:0px\"><span style=\"font-style: italic; font-size: 22px;\">&nbsp; &nbsp; &nbsp; &nbsp;l </span>x<span style=\"font-style: italic;\"> </span><span style=\"font-style: italic; font-size: 22px;\">w</span><span style=\"font-style: italic;\"> </span>x<span style=\"font-style: italic;\"> </span><span style=\"font-style: italic; font-size: 22px;\">h</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint_4',
                            display: 'none',
                            type: 'text',
                            rect: ['225px', '457px', '377px', '48px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​<font face=\"Arial, Helvetica, sans-serif\"><span style=\"font-style: normal;\">How many cone-shaped bottles can be filled from each cube-shaped container?</span></font>&nbsp;</p>",
                            align: "left",
                            font: ['Georgia, Times New Roman, Times, serif', [18, "px"], "rgba(157,0,9,1.00)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'Hint_1',
                            display: 'none',
                            type: 'text',
                            rect: ['337px', '23px', '233', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​Can you caculate the volume of the cubic container?</p>",
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
                            id: 'Text5',
                            type: 'text',
                            rect: ['354', '189', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
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
                            id: 'Cube',
                            type: 'group',
                            rect: ['24px', '237px', '167', '148px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'TextCopy2',
                                type: 'text',
                                rect: ['42px', '133px', '55px', '14px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​20 cm</p>",
                                align: "left",
                                font: ['Times New Roman, Times, serif', [16, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'TextCopy',
                                type: 'text',
                                rect: ['167px', '45px', '43px', '19px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-family: 'Times New Roman', Times, serif;\">20 cm</span></p>",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['81px', '-10px', '55px', '19px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-family: 'Times New Roman', Times, serif;\">20 cm</span></p>",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'cubesvg',
                                type: 'image',
                                rect: ['0px', '0px', '167px', '140px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"cube.svg.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'Cone',
                            type: 'group',
                            rect: ['213', '308', '55', '78', 'auto', 'auto'],
                            c: [
                            {
                                id: 'cone',
                                type: 'image',
                                rect: ['0px', '0px', '55px', '79px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"cone.png",'0px','0px']
                            },
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['30px', '31px', '56px', '16px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; font-family: 'Times New Roman', Times, serif;\">h= &nbsp; 15 cm</span></p>",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['41px', '56px', '57px', '16px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​r &nbsp; &nbsp; = 5 cm</p>",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [12, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text4',
                                type: 'text',
                                rect: ['21px', '82px', '51px', '14px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​π = 3.14</p>",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [12, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
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
                            id: 'hint3',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint3.mp3",aud+"hint3.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'Formula_for_th_volume_of_a_cone',
                            display: 'none',
                            type: 'group',
                            rect: ['422px', '176px', '102', '26', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text6',
                                type: 'text',
                                rect: ['0px', '0px', '102px', '26px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​ π r ² h</p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(157,0,9,1)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'one_third',
                                type: 'group',
                                rect: ['-28px', '9px', '28', '2', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Rectangle',
                                    type: 'rect',
                                    rect: ['0px', '0px', '26px', '0px', 'auto', 'auto'],
                                    fill: ["rgba(157,0,9,1.00)"],
                                    stroke: [1,"rgba(157,0,9,1.00)","solid"]
                                },
                                {
                                    id: '_1',
                                    type: 'text',
                                    rect: ['7px', '-22px', '26', '25px', 'auto', 'auto'],
                                    text: "<p style=\"margin:0px\">​<span style=\"font-style: normal;\">1</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(157,0,9,1)", "normal", "none", "italic", "break-word", ""]
                                },
                                {
                                    id: '_3',
                                    type: 'text',
                                    rect: ['8px', '4px', '26', '26px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-style: normal;\">3</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(157,0,9,1)", "normal", "none", "italic", "break-word", ""]
                                }]
                            },
                            {
                                id: 'Text7',
                                type: 'text',
                                rect: ['-66px', '1px', '38px', '22px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​V =</p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(157,0,9,1)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text8',
                                type: 'text',
                                rect: ['-88px', '-34px', '205px', '26px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​The volume of a cone =</p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'Group2',
                            display: 'none',
                            type: 'group',
                            rect: ['428px', '227px', '133', '30', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text10',
                                type: 'text',
                                rect: ['0px', '0px', '133px', '30px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-style: normal;\">​​</span><span style=\"font-style: normal; font-size: 16px;\">x 3.14 (5) ² x 15</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text9',
                                type: 'text',
                                rect: ['-51px', '4px', '26px', '16px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​=</p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'one_thirdCopy',
                                type: 'group',
                                rect: ['-33px', '11px', '28', '2', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'RectangleCopy',
                                    type: 'rect',
                                    rect: ['0px', '0px', '26px', '0px', 'auto', 'auto'],
                                    fill: ["rgba(0,82,203,1.00)"],
                                    stroke: [1,"rgba(0,82,203,1.00)","solid"]
                                },
                                {
                                    id: '_1Copy',
                                    type: 'text',
                                    rect: ['7px', '-21px', '26', '25px', 'auto', 'auto'],
                                    text: "<p style=\"margin:0px\">​<span style=\"font-style: normal;\">1</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "normal", "none", "italic", "break-word", ""]
                                },
                                {
                                    id: '_3Copy',
                                    type: 'text',
                                    rect: ['8px', '4px', '26', '26px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-style: normal;\">3</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "normal", "none", "italic", "break-word", ""]
                                }]
                            }]
                        },
                        {
                            id: 'Group3',
                            display: 'none',
                            type: 'group',
                            rect: ['427px', '277px', '133', '30', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text10Copy',
                                type: 'text',
                                rect: ['0px', '0px', '133px', '30px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-style: normal;\">​​</span><span style=\"font-style: normal; font-size: 16px;\">x 3.14 x 25 x 15</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text9Copy',
                                type: 'text',
                                rect: ['-51px', '4px', '26px', '16px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​=</p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'one_thirdCopy2',
                                type: 'group',
                                rect: ['-33px', '11px', '28', '2', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'RectangleCopy2',
                                    type: 'rect',
                                    rect: ['0px', '0px', '26px', '0px', 'auto', 'auto'],
                                    fill: ["rgba(0,82,203,1.00)"],
                                    stroke: [1,"rgba(0,82,203,1.00)","solid"]
                                },
                                {
                                    id: '_1Copy2',
                                    type: 'text',
                                    rect: ['7px', '-21px', '26', '25px', 'auto', 'auto'],
                                    text: "<p style=\"margin:0px\">​<span style=\"font-style: normal;\">1</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "normal", "none", "italic", "break-word", ""]
                                },
                                {
                                    id: '_3Copy2',
                                    type: 'text',
                                    rect: ['8px', '4px', '26', '26px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-style: normal;\">3</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "normal", "none", "italic", "break-word", ""]
                                }]
                            }]
                        },
                        {
                            id: 'Group_4',
                            display: 'none',
                            type: 'group',
                            rect: ['427px', '325px', '133', '30', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text10Copy2',
                                type: 'text',
                                rect: ['0px', '0px', '133px', '30px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-style: normal;\">​​</span><span style=\"font-style: normal; font-size: 16px;\">x 78.5 x 15</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text9Copy2',
                                type: 'text',
                                rect: ['-51px', '4px', '26px', '16px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​=</p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'one_thirdCopy3',
                                type: 'group',
                                rect: ['-33px', '11px', '28', '2', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'RectangleCopy3',
                                    type: 'rect',
                                    rect: ['0px', '0px', '26px', '0px', 'auto', 'auto'],
                                    fill: ["rgba(0,82,203,1.00)"],
                                    stroke: [1,"rgba(0,82,203,1.00)","solid"]
                                },
                                {
                                    id: '_1Copy3',
                                    type: 'text',
                                    rect: ['7px', '-21px', '26', '25px', 'auto', 'auto'],
                                    text: "<p style=\"margin:0px\">​<span style=\"font-style: normal;\">1</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "normal", "none", "italic", "break-word", ""]
                                },
                                {
                                    id: '_3Copy3',
                                    type: 'text',
                                    rect: ['8px', '4px', '26', '26px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-style: normal;\">3</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "normal", "none", "italic", "break-word", ""]
                                }]
                            }]
                        },
                        {
                            id: 'Group_5',
                            display: 'none',
                            type: 'group',
                            rect: ['427px', '370px', '133', '30', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text10Copy3',
                                type: 'text',
                                rect: ['0px', '0px', '133px', '30px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-style: normal;\">​​</span><span style=\"font-style: normal; font-size: 16px;\">x 78.5 x 15</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text9Copy3',
                                type: 'text',
                                rect: ['-51px', '4px', '26px', '16px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​=</p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'one_thirdCopy4',
                                type: 'group',
                                rect: ['-33px', '11px', '28', '2', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'RectangleCopy4',
                                    type: 'rect',
                                    rect: ['0px', '0px', '26px', '0px', 'auto', 'auto'],
                                    fill: ["rgba(0,82,203,1.00)"],
                                    stroke: [1,"rgba(0,82,203,1.00)","solid"]
                                },
                                {
                                    id: '_1Copy4',
                                    type: 'text',
                                    rect: ['7px', '-21px', '26', '25px', 'auto', 'auto'],
                                    text: "<p style=\"margin:0px\">​<span style=\"font-style: normal;\">1</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "normal", "none", "italic", "break-word", ""]
                                },
                                {
                                    id: '_3Copy4',
                                    type: 'text',
                                    rect: ['8px', '4px', '26', '26px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-style: normal;\">3</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "normal", "none", "italic", "break-word", ""]
                                }]
                            }]
                        },
                        {
                            id: 'Group_6',
                            display: 'none',
                            type: 'group',
                            rect: ['429px', '417px', '133', '30', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text10Copy4',
                                type: 'text',
                                rect: ['0px', '0px', '133px', '30px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-style: normal;\">​​</span><span style=\"font-style: normal; font-size: 16px;\">x 1177.5</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text9Copy4',
                                type: 'text',
                                rect: ['-51px', '4px', '26px', '16px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​=</p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'one_thirdCopy5',
                                type: 'group',
                                rect: ['-33px', '11px', '28', '2', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'RectangleCopy5',
                                    type: 'rect',
                                    rect: ['0px', '0px', '26px', '0px', 'auto', 'auto'],
                                    fill: ["rgba(0,82,203,1.00)"],
                                    stroke: [1,"rgba(0,82,203,1.00)","solid"]
                                },
                                {
                                    id: '_1Copy5',
                                    type: 'text',
                                    rect: ['7px', '-21px', '26', '25px', 'auto', 'auto'],
                                    text: "<p style=\"margin:0px\">​<span style=\"font-style: normal;\">1</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "normal", "none", "italic", "break-word", ""]
                                },
                                {
                                    id: '_3Copy5',
                                    type: 'text',
                                    rect: ['8px', '4px', '26', '26px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-style: normal;\">3</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "normal", "none", "italic", "break-word", ""]
                                }]
                            }]
                        },
                        {
                            id: '_3925',
                            display: 'none',
                            type: 'text',
                            rect: ['500px', '418px', '77', '38', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​= 392.5</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,82,203,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint4',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint4.mp3",aud+"hint4.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint5',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint5.mp3",aud+"hint5.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'Hint_5',
                            display: 'none',
                            type: 'group',
                            rect: ['439', '513', '28', '22', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text12',
                                display: 'block',
                                type: 'text',
                                rect: ['0px', '0px', '28px', '22px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-style: normal; font-family: Arial, Helvetica, sans-serif;\">?</span></p>",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text11',
                                type: 'text',
                                rect: ['-130px', '0px', '127px', '26px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-style: normal; font-family: Arial, Helvetica, sans-serif;\">8000</span><span style=\"font-family: Arial, Helvetica, sans-serif;\"> ÷&nbsp;</span><span style=\"font-style: normal; font-family: Arial, Helvetica, sans-serif;\">​392.5 =&nbsp;</span></p>",
                                align: "left",
                                font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(0,82,203,1.00)", "400", "none", "italic", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'Answer_Hint',
                            display: 'none',
                            type: 'text',
                            rect: ['435px', '513px', '63px', '26px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-style: normal; font-family: Arial, Helvetica, sans-serif;\">20.38</span></p>",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
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
                            id: 'choose_c',
                            display: 'none',
                            type: 'text',
                            rect: ['330px', '544px', '143px', '26px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(42, 142, 0); font-style: normal; font-weight: 700;\">Choose (C)</span></p>",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(0,82,203,1)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
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
                    duration: 145000,
                    autoPlay: true,
                    labels: {
                        "Read Question": 2000,
                        "Hint 1": 35000,
                        "Hint 2": 48000,
                        "Hint 3": 70000,
                        "Hint 4": 98000,
                        "Hint 5": 124000,
                        "Answer Hint": 137000
                    },
                    data: [
                        [
                            "eid274",
                            "display",
                            98500,
                            0,
                            "linear",
                            "${Group2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid248",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Answers}",
                            '403px',
                            '403px'
                        ],
                        [
                            "eid282",
                            "display",
                            137500,
                            0,
                            "linear",
                            "${Text12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid250",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${Hint_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid277",
                            "display",
                            98500,
                            0,
                            "linear",
                            "${Group_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid247",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Answers}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid281",
                            "display",
                            134905,
                            0,
                            "linear",
                            "${Hint_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid278",
                            "display",
                            98500,
                            0,
                            "linear",
                            "${Group_6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid271",
                            "display",
                            54560,
                            0,
                            "linear",
                            "${Hint_2_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid270",
                            "display",
                            48000,
                            0,
                            "linear",
                            "${Hint_2_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid284",
                            "display",
                            143750,
                            0,
                            "linear",
                            "${choose_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid279",
                            "display",
                            98500,
                            0,
                            "linear",
                            "${_3925}",
                            'none',
                            'block'
                        ],
                        [
                            "eid283",
                            "display",
                            138000,
                            0,
                            "linear",
                            "${Answer_Hint}",
                            'none',
                            'block'
                        ],
                        [
                            "eid273",
                            "display",
                            73750,
                            0,
                            "linear",
                            "${Formula_for_th_volume_of_a_cone}",
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
                            "eid276",
                            "display",
                            98500,
                            0,
                            "linear",
                            "${Group_4}",
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
                            "eid244",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Answers}",
                            '0.94118',
                            '0.94118'
                        ],
                        [
                            "eid275",
                            "display",
                            98500,
                            0,
                            "linear",
                            "${Group3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid280",
                            "display",
                            116250,
                            0,
                            "linear",
                            "${Hint_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid246",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Answers}",
                            '0.91453',
                            '0.91453'
                        ],
                            [ "eid249", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question}', [] ] ],
                            [ "eid268", "trigger", 35000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1}', [] ] ],
                            [ "eid269", "trigger", 48000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2}', [] ] ],
                            [ "eid272", "trigger", 70000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint3}', [] ] ],
                            [ "eid285", "trigger", 101000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint4}', [] ] ],
                            [ "eid286", "trigger", 124000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint5}', [] ] ],
                            [ "eid287", "trigger", 138500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${answer}', [] ] ]
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
                            font: '{{:}{undefined{:}:{:}}{:}{{:}u{:}n{:}d',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("problem_8GC9_3_edgeActions.js");
})("EdgeProblem");
