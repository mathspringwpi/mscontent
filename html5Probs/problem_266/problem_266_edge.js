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
                            id: '_266pic',
                            type: 'image',
                            rect: ['-6', '-48', '511', '348', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"266pic.png",'0px','0px']
                        },
                        {
                            id: 'Question_Text',
                            type: 'text',
                            rect: ['15', '319', '219', '42', 'auto', 'auto'],
                            text: "What is the value of x?",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Answers',
                            symbolName: 'Answers_1',
                            type: 'rect',
                            rect: ['15', '380', '156', '187', 'auto', 'auto']
                        },
                        {
                            id: 'AnswerDText',
                            type: 'text',
                            rect: ['62', '505', '101', '20px', 'auto', 'auto'],
                            text: "32",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerCText',
                            type: 'text',
                            rect: ['62', '469', '101', '19px', 'auto', 'auto'],
                            text: "35",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerBText',
                            type: 'text',
                            rect: ['62', '437', '112', '19px', 'auto', 'auto'],
                            text: "40",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerAText',
                            type: 'text',
                            rect: ['62', '402', '109', '19', 'auto', 'auto'],
                            text: "47",
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
                            id: 'height',
                            display: 'block',
                            type: 'text',
                            rect: ['241', '102', '57', '31', 'auto', 'auto'],
                            text: "102",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, "px"], "rgba(4,4,4,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'width',
                            display: 'block',
                            type: 'text',
                            rect: ['270', '64', '68', '13', 'auto', 'auto'],
                            text: "241",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, "px"], "rgba(8,8,8,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'x',
                            display: 'none',
                            type: 'text',
                            rect: ['359', '112', '40px', '31px', 'auto', 'auto'],
                            text: "X",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [30, "px"], "rgba(248,1,1,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerEText',
                            type: 'text',
                            rect: ['62', '541', '101', '20px', 'auto', 'auto'],
                            text: "30",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Y',
                            type: 'text',
                            rect: ['240', '155', '50px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            text: "y",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(141,7,36,1.00)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'z',
                            type: 'text',
                            rect: ['250', '111', '36px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            text: "z",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, ""], "rgba(141,7,36,1)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: '_90',
                            display: 'none',
                            type: 'text',
                            rect: ['229', '157', '36px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            text: "90",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, ""], "rgba(141,7,36,1.00)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'Hint3_text1',
                            type: 'text',
                            rect: ['335', '72', '205', '65', 'auto', 'auto'],
                            opacity: '0',
                            text: "We know the sum of the interior angles of the triangle is 180 degrees",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, ""], "rgba(142,15,43,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint3_text2',
                            display: 'block',
                            type: 'text',
                            rect: ['307', '161', '179px', '33', 'auto', 'auto'],
                            opacity: '0',
                            text: "x+z+90=180",
                            align: "center",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(142,15,43,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint3_text3',
                            display: 'block',
                            type: 'text',
                            rect: ['319', '200', '156px', '65px', 'auto', 'auto'],
                            opacity: '0',
                            text: "x+z=180-90<br>x+z=90",
                            align: "center",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [18, ""], "rgba(142,15,43,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint3_text4',
                            display: 'block',
                            type: 'text',
                            rect: ['342', '275', '163px', '65px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Now try to find z",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, ""], "rgba(142,15,43,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint4_text1',
                            display: 'none',
                            type: 'text',
                            rect: ['372px', '303px', '179px', '65px', 'auto', 'auto'],
                            text: "4x-15+z=180",
                            align: "center",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [22, "px"], "rgba(142,15,43,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint6_RoundRect',
                            display: 'none',
                            type: 'rect',
                            rect: ['428', '340', '111', '37px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(144,182,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Hint6_text4',
                            display: 'none',
                            type: 'text',
                            rect: ['348', '248', '50px', '37px', 'auto', 'auto'],
                            text: "x+",
                            align: "center",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [22, ""], "rgba(151,144,146,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint6_text3',
                            display: 'none',
                            type: 'text',
                            rect: ['431', '348', '108', '20', 'auto', 'auto'],
                            text: "180-4x+15",
                            align: "center",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [22, ""], "rgba(142,15,43,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint5_text1',
                            display: 'none',
                            type: 'text',
                            rect: ['389', '349', '156px', '47px', 'auto', 'auto'],
                            text: "z=180-4x+15",
                            align: "center",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [22, ""], "rgba(142,15,43,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint6_text1',
                            display: 'none',
                            type: 'text',
                            rect: ['383px', '389px', '171px', '89px', 'auto', 'auto'],
                            text: "Let's substitute z in the above equation: x+z=90",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(142,15,43,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint6_text2',
                            display: 'none',
                            type: 'text',
                            rect: ['326', '221', '143px', '54px', 'auto', 'auto'],
                            text: "x+z=90",
                            align: "center",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [18, ""], "rgba(151,144,146,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint6_text5',
                            display: 'none',
                            type: 'text',
                            rect: ['518', '248', '50px', '37px', 'auto', 'auto'],
                            text: "=90",
                            align: "center",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [22, ""], "rgba(151,144,146,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint7_text1',
                            display: 'none',
                            type: 'text',
                            rect: ['382', '300', '156px', '47px', 'auto', 'auto'],
                            opacity: '1',
                            text: "Solve for x<br>",
                            align: "center",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [22, "px"], "rgba(142,15,43,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint7_text2',
                            display: 'none',
                            type: 'text',
                            rect: ['361', '333', '205px', '56px', 'auto', 'auto'],
                            text: "(x-4x)+180+15=90",
                            align: "center",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [22, "px"], "rgba(142,15,43,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint7_text3',
                            display: 'none',
                            type: 'text',
                            rect: ['361', '364', '205px', '32', 'auto', 'auto'],
                            text: "-3x+195=90",
                            align: "center",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [22, ""], "rgba(142,15,43,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint7_text4',
                            display: 'none',
                            type: 'text',
                            rect: ['366', '397', '205px', '47px', 'auto', 'auto'],
                            text: "-3x=90-195",
                            align: "center",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [22, ""], "rgba(142,15,43,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint7_text5',
                            display: 'none',
                            type: 'text',
                            rect: ['366', '427', '205px', '47px', 'auto', 'auto'],
                            text: "-3x=-105",
                            align: "center",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [22, ""], "rgba(142,15,43,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint7_text6',
                            display: 'none',
                            type: 'text',
                            rect: ['391', '464', '156px', '37px', 'auto', 'auto'],
                            text: "x=35",
                            align: "center",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [22, ""], "rgba(142,15,43,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint8',
                            display: 'none',
                            type: 'text',
                            rect: ['379', '510', '171px', '56px', 'auto', 'auto'],
                            text: "Choose (C)",
                            align: "center",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [22, ""], "rgba(142,15,43,1.00)", "normal", "none", "normal", "break-word", ""]
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
                            id: 'hint5',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint5.mp3",aud+"hint5.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['170', '157', '36px', '20px', 'auto', 'auto'],
                            text: "x",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, ""], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['188', '57', '77', '42px', 'auto', 'auto'],
                            text: "4x-15",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'answerhint2',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"answerhint2.mp3",aud+"answerhint2.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint42',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint42.mp3",aud+"hint42.ogg"],
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
                    duration: 83000,
                    autoPlay: true,
                    labels: {
                        "Read Question": 2000,
                        "Hint 1": 10000,
                        "Hint 2": 17000,
                        "Hint 3": 23483,
                        "Hint 4": 43000,
                        "Hint 5": 50524,
                        "Hint 6": 55000,
                        "Answer": 79000
                    },
                    data: [
                        [
                            "eid304",
                            "display",
                            62500,
                            0,
                            "easeInOutQuad",
                            "${Hint6_text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid191",
                            "top",
                            16500,
                            0,
                            "linear",
                            "${z}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid324",
                            "display",
                            77000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid213",
                            "opacity",
                            29000,
                            0,
                            "linear",
                            "${Hint3_text1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid214",
                            "opacity",
                            31012,
                            0,
                            "linear",
                            "${Hint3_text1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid239",
                            "opacity",
                            43022,
                            0,
                            "linear",
                            "${Hint3_text1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid308",
                            "opacity",
                            64500,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid111",
                            "height",
                            39000,
                            0,
                            "linear",
                            "${height}",
                            '31px',
                            '31px'
                        ],
                        [
                            "eid241",
                            "color",
                            36000,
                            0,
                            "linear",
                            "${Hint3_text2}",
                            'rgba(142,15,43,1)',
                            'rgba(142,15,43,1)'
                        ],
                        [
                            "eid240",
                            "color",
                            43000,
                            0,
                            "linear",
                            "${Hint3_text2}",
                            'rgba(142,15,43,1)',
                            'rgba(151,144,146,1.00)'
                        ],
                        [
                            "eid215",
                            "opacity",
                            33000,
                            0,
                            "linear",
                            "${Hint3_text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid216",
                            "opacity",
                            34000,
                            0,
                            "linear",
                            "${Hint3_text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            14000,
                            1000,
                            "linear",
                            "${Y}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid177",
                            "opacity",
                            18500,
                            1000,
                            "linear",
                            "${Y}",
                            '1',
                            '0'
                        ],
                        [
                            "eid306",
                            "display",
                            65250,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid274",
                            "display",
                            55000,
                            0,
                            "linear",
                            "${Hint6_RoundRect}",
                            'none',
                            'block'
                        ],
                        [
                            "eid311",
                            "display",
                            68000,
                            0,
                            "easeInOutQuad",
                            "${Hint6_RoundRect}",
                            'block',
                            'none'
                        ],
                        [
                            "eid297",
                            "top",
                            60000,
                            2500,
                            "easeInOutQuad",
                            "${Hint6_text3}",
                            '348px',
                            '248px'
                        ],
                        [
                            "eid321",
                            "display",
                            75000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid112",
                            "width",
                            39000,
                            0,
                            "linear",
                            "${height}",
                            '57px',
                            '57px'
                        ],
                        [
                            "eid272",
                            "display",
                            52000,
                            0,
                            "linear",
                            "${Hint5_text1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid284",
                            "display",
                            60000,
                            0,
                            "linear",
                            "${Hint5_text1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid329",
                            "display",
                            82000,
                            0,
                            "linear",
                            "${Hint8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid327",
                            "display",
                            79000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid179",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_90}",
                            'none',
                            'none'
                        ],
                        [
                            "eid180",
                            "display",
                            19500,
                            0,
                            "linear",
                            "${_90}",
                            'none',
                            'block'
                        ],
                        [
                            "eid330",
                            "display",
                            27978,
                            0,
                            "linear",
                            "${_90}",
                            'block',
                            'block'
                        ],
                        [
                            "eid244",
                            "display",
                            43000,
                            0,
                            "linear",
                            "${_90}",
                            'block',
                            'block'
                        ],
                        [
                            "eid278",
                            "display",
                            58000,
                            0,
                            "linear",
                            "${Hint3_text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid313",
                            "color",
                            68000,
                            0,
                            "easeInOutQuad",
                            "${Hint6_text3}",
                            'rgba(142,15,43,1)',
                            'rgba(151,144,146,1.00)'
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
                            "eid196",
                            "top",
                            29990,
                            0,
                            "linear",
                            "${_90}",
                            '157px',
                            '157px'
                        ],
                        [
                            "eid275",
                            "display",
                            55000,
                            0,
                            "linear",
                            "${Hint6_text1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid279",
                            "display",
                            60000,
                            0,
                            "linear",
                            "${Hint6_text1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid317",
                            "color",
                            68000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text2}",
                            'rgba(142,15,43,1.00)',
                            'rgba(142,15,43,1.00)'
                        ],
                        [
                            "eid316",
                            "color",
                            72000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text2}",
                            'rgba(142,15,43,1.00)',
                            'rgba(151,144,146,1.00)'
                        ],
                        [
                            "eid315",
                            "color",
                            68000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text1}",
                            'rgba(142,15,43,1.00)',
                            'rgba(142,15,43,1.00)'
                        ],
                        [
                            "eid314",
                            "color",
                            72000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text1}",
                            'rgba(142,15,43,1.00)',
                            'rgba(151,144,146,1.00)'
                        ],
                        [
                            "eid246",
                            "display",
                            43000,
                            0,
                            "linear",
                            "${Hint3_text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid194",
                            "left",
                            16500,
                            0,
                            "linear",
                            "${Y}",
                            '240px',
                            '240px'
                        ],
                        [
                            "eid298",
                            "left",
                            60000,
                            2500,
                            "easeInCubic",
                            "${Hint6_text3}",
                            '431px',
                            '397px'
                        ],
                        [
                            "eid195",
                            "left",
                            29990,
                            0,
                            "linear",
                            "${_90}",
                            '229px',
                            '229px'
                        ],
                        [
                            "eid133",
                            "color",
                            38000,
                            0,
                            "linear",
                            "${height}",
                            'rgba(4,4,4,1)',
                            'rgba(4,4,4,1)'
                        ],
                        [
                            "eid136",
                            "color",
                            39000,
                            0,
                            "linear",
                            "${height}",
                            'rgba(4,4,4,1)',
                            'rgba(255,1,1,1.00)'
                        ],
                        [
                            "eid301",
                            "top",
                            60000,
                            2500,
                            "easeInOutQuad",
                            "${Hint6_RoundRect}",
                            '340px',
                            '248px'
                        ],
                        [
                            "eid91",
                            "display",
                            38000,
                            0,
                            "linear",
                            "${TutorialText}",
                            'none',
                            'block'
                        ],
                        [
                            "eid219",
                            "display",
                            39000,
                            0,
                            "linear",
                            "${TutorialText}",
                            'block',
                            'none'
                        ],
                        [
                            "eid303",
                            "display",
                            62500,
                            0,
                            "easeInOutQuad",
                            "${Hint6_text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid277",
                            "display",
                            58000,
                            0,
                            "linear",
                            "${Hint3_text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid302",
                            "left",
                            60000,
                            2500,
                            "easeInQuad",
                            "${Hint6_RoundRect}",
                            '428px',
                            '396px'
                        ],
                        [
                            "eid328",
                            "color",
                            79000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text6}",
                            'rgba(142,15,43,1.00)',
                            'rgba(142,15,43,1.00)'
                        ],
                        [
                            "eid53",
                            "opacity",
                            31000,
                            3000,
                            "linear",
                            "${TutorialText}",
                            '1',
                            '0'
                        ],
                        [
                            "eid193",
                            "top",
                            16500,
                            0,
                            "linear",
                            "${Y}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid168",
                            "color",
                            17000,
                            1000,
                            "linear",
                            "${z}",
                            'rgba(141,7,36,1)',
                            'rgba(151,144,146,1.00)'
                        ],
                        [
                            "eid228",
                            "opacity",
                            38750,
                            0,
                            "linear",
                            "${Hint3_text4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid229",
                            "opacity",
                            40000,
                            0,
                            "linear",
                            "${Hint3_text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid93",
                            "display",
                            0,
                            0,
                            "linear",
                            "${height}",
                            'block',
                            'none'
                        ],
                        [
                            "eid95",
                            "display",
                            38000,
                            0,
                            "linear",
                            "${height}",
                            'none',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            39000,
                            0,
                            "linear",
                            "${height}",
                            'none',
                            'none'
                        ],
                        [
                            "eid189",
                            "color",
                            19500,
                            2478,
                            "linear",
                            "${_90}",
                            'rgba(141,7,36,1)',
                            'rgba(141,12,40,1.00)'
                        ],
                        [
                            "eid331",
                            "color",
                            29990,
                            0,
                            "linear",
                            "${_90}",
                            'rgba(141,12,40,1.00)',
                            'rgba(151,144,146,1.00)'
                        ],
                        [
                            "eid184",
                            "opacity",
                            19500,
                            1000,
                            "linear",
                            "${_90}",
                            '0',
                            '1'
                        ],
                        [
                            "eid104",
                            "left",
                            38000,
                            1000,
                            "linear",
                            "${height}",
                            '241px',
                            '305px'
                        ],
                        [
                            "eid130",
                            "display",
                            0,
                            0,
                            "linear",
                            "${x}",
                            'none',
                            'none'
                        ],
                        [
                            "eid118",
                            "font-size",
                            38000,
                            1000,
                            "linear",
                            "${height}",
                            '12px',
                            '20px'
                        ],
                        [
                            "eid165",
                            "opacity",
                            15000,
                            1000,
                            "linear",
                            "${z}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid105",
                            "top",
                            38000,
                            1000,
                            "linear",
                            "${height}",
                            '102px',
                            '114px'
                        ],
                        [
                            "eid92",
                            "display",
                            0,
                            0,
                            "linear",
                            "${width}",
                            'block',
                            'none'
                        ],
                        [
                            "eid271",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${Hint4_text1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid273",
                            "display",
                            55000,
                            0,
                            "linear",
                            "${Hint4_text1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid276",
                            "display",
                            58000,
                            0,
                            "linear",
                            "${Hint4_text1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid318",
                            "display",
                            72000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid325",
                            "color",
                            77000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text5}",
                            'rgba(142,15,43,1.00)',
                            'rgba(142,15,43,1.00)'
                        ],
                        [
                            "eid326",
                            "color",
                            79000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text5}",
                            'rgba(142,15,43,1.00)',
                            'rgba(151,144,146,1.00)'
                        ],
                        [
                            "eid190",
                            "left",
                            16500,
                            0,
                            "linear",
                            "${z}",
                            '250px',
                            '250px'
                        ],
                        [
                            "eid310",
                            "display",
                            68000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid309",
                            "display",
                            68750,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid248",
                            "color",
                            36500,
                            0,
                            "linear",
                            "${Hint3_text3}",
                            'rgba(142,15,43,1)',
                            'rgba(142,15,43,1)'
                        ],
                        [
                            "eid247",
                            "color",
                            43000,
                            0,
                            "linear",
                            "${Hint3_text3}",
                            'rgba(142,15,43,1)',
                            'rgba(151,144,146,1.00)'
                        ],
                        [
                            "eid285",
                            "display",
                            60000,
                            0,
                            "linear",
                            "${Hint6_text3}",
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
                            "eid281",
                            "display",
                            58000,
                            0,
                            "linear",
                            "${Hint6_text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid305",
                            "display",
                            65250,
                            0,
                            "easeInOutQuad",
                            "${Hint6_text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid322",
                            "color",
                            75000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text4}",
                            'rgba(142,15,43,1.00)',
                            'rgba(142,15,43,1.00)'
                        ],
                        [
                            "eid323",
                            "color",
                            77000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text4}",
                            'rgba(142,15,43,1.00)',
                            'rgba(151,144,146,1.00)'
                        ],
                        [
                            "eid319",
                            "color",
                            72000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text3}",
                            'rgba(142,15,43,1.00)',
                            'rgba(142,15,43,1.00)'
                        ],
                        [
                            "eid320",
                            "color",
                            75000,
                            0,
                            "easeInOutQuad",
                            "${Hint7_text3}",
                            'rgba(142,15,43,1.00)',
                            'rgba(151,144,146,1.00)'
                        ],
                        [
                            "eid217",
                            "opacity",
                            35000,
                            0,
                            "linear",
                            "${Hint3_text3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid218",
                            "opacity",
                            36500,
                            0,
                            "linear",
                            "${Hint3_text3}",
                            '0',
                            '1'
                        ],
                            [ "eid333", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question}', [] ] ],
                            [ "eid335", "trigger", 10000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1}', [] ] ],
                            [ "eid336", "trigger", 17000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2}', [] ] ],
                            [ "eid337", "trigger", 23483.075496055, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint3}', [] ] ],
                            [ "eid341", "trigger", 43000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint42}', [] ] ],
                            [ "eid339", "trigger", 50523.504520367, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint5}', [] ] ],
                            [ "eid340", "trigger", 79000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${answerhint2}', [] ] ]
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                id: 'Text8',
                                text: 'E',
                                align: 'center',
                                rect: ['0', '4', '27', '20px', 'auto', 'auto']
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                rect: ['0', '4', '27', '20px', 'auto', 'auto']
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                id: 'Text5',
                                text: 'C',
                                align: 'center',
                                rect: ['0', '4', '27', '20px', 'auto', 'auto']
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                id: 'Text4',
                                text: 'B',
                                align: 'center',
                                rect: ['0', '5', '27', '19', 'auto', 'auto']
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                id: 'A',
                                text: 'A<br><br><br>',
                                align: 'center',
                                rect: ['0', '3', '27', '19', 'auto', 'auto']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("problem_266_edgeActions.js");
})("EdgeProblem");
