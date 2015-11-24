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
                            id: 'AnswerGroup',
                            type: 'group',
                            rect: ['40', '410px', '220', '63', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Answer_Container',
                                display: 'block',
                                type: 'rect',
                                rect: ['0', '0', '218', '61', 'auto', 'auto'],
                                fill: ["rgba(6,6,6,0.00)"],
                                stroke: [1,"rgba(4,4,4,0.18)","solid"]
                            },
                            {
                                id: 'Grade_Check',
                                display: 'none',
                                type: 'image',
                                rect: ['187', '32', '33', '31', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"check.png",'0px','0px']
                            },
                            {
                                id: 'Grade_X',
                                display: 'none',
                                type: 'image',
                                rect: ['187', '32', '33', '31', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"x.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'Question_TextBlack',
                            type: 'text',
                            rect: ['24', '30', '298', '38px', 'auto', 'auto'],
                            text: "Is the triangle EFG congruent to triangle ABC? Type YES or NO.",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint_2',
                            display: 'none',
                            type: 'text',
                            rect: ['342px', '198px', '252px', '60px', 'auto', 'auto'],
                            text: "Translating the triangle EFG by + 3 units in the X direction and + 1 unit in the Y direction.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint1',
                            display: 'none',
                            type: 'text',
                            rect: ['342px', '39px', '233', '78px', 'auto', 'auto'],
                            text: "We can transform one figure into another to identify if two triangles are congruent.  There are many possible ways to transform one figure into another. Let's look at one possibility.",
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
                            id: 'Hint_2c',
                            display: 'none',
                            type: 'text',
                            rect: ['342px', '268px', '210px', '38', 'auto', 'auto'],
                            text: "Now, we can see that the figure should be reflected.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "normal", "none", "normal", "break-word", ""]
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
                            id: 'Coordinate',
                            type: 'group',
                            rect: ['10', '103', '312', '269', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Coordplane2',
                                type: 'image',
                                rect: ['0px', '0px', '312px', '269px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Coordplane.png",'0px','0px']
                            },
                            {
                                id: '_-7',
                                type: 'text',
                                rect: ['161px', '232px', '79px', '27px', 'auto', 'auto'],
                                text: "-7<br>",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [8, "px"], "rgba(143,7,7,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                            },
                            {
                                id: 'X',
                                type: 'text',
                                rect: ['299px', '116px', '26px', '19px', 'auto', 'auto'],
                                text: "X",
                                font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'Y',
                                type: 'text',
                                rect: ['165px', '4px', '26px', '19px', 'auto', 'auto'],
                                text: "Y",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'Triangle_ICE',
                            type: 'group',
                            rect: ['230', '285', '26', '45', 'auto', 'auto'],
                            c: [
                            {
                                id: 'RectangleCopy2',
                                type: 'rect',
                                rect: ['-12px', '21px', '49px', '2px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                transform: [[],['61']]
                            },
                            {
                                id: 'RectangleCopy',
                                type: 'rect',
                                rect: ['-50px', '42px', '74px', '2px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['-57px', '21px', '65px', '2px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                transform: [[],['-40']]
                            },
                            {
                                id: 'A',
                                type: 'text',
                                rect: ['-45px', '44px', '32px', '23px', 'auto', 'auto'],
                                text: "A",
                                font: ['Times New Roman, Times, serif', [12, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "normal"]
                            },
                            {
                                id: 'B',
                                type: 'text',
                                rect: ['3px', '-17px', '33px', '19px', 'auto', 'auto'],
                                text: "B<br>",
                                align: "left",
                                font: ['Times New Roman, Times, serif', [12, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "italic", "break-word", "normal"]
                            },
                            {
                                id: 'C',
                                type: 'text',
                                rect: ['30px', '45px', '100px', '53px', 'auto', 'auto'],
                                text: "C<br>",
                                align: "left",
                                font: ['Times New Roman, Times, serif', [12, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "italic", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'EFG',
                            type: 'group',
                            rect: ['94px', '313px', '49', '30', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle2Copy2',
                                type: 'rect',
                                rect: ['-4px', '14px', '56px', '2px', 'auto', 'auto'],
                                fill: ["rgba(255,0,0,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                transform: [[],['30']]
                            },
                            {
                                id: 'Rectangle2Copy',
                                type: 'rect',
                                rect: ['-23px', '28px', '73px', '2px', 'auto', 'auto'],
                                fill: ["rgba(255,0,0,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Rectangle2',
                                type: 'rect',
                                rect: ['-29px', '14px', '36px', '2px', 'auto', 'auto'],
                                fill: ["rgba(255,0,0,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                transform: [[],['132']]
                            },
                            {
                                id: 'G',
                                type: 'text',
                                rect: ['46px', '30px', '65px', '38px', 'auto', 'auto'],
                                text: "G",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [12, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "italic", "break-word", "normal"]
                            },
                            {
                                id: 'F',
                                type: 'text',
                                rect: ['-5px', '-16px', '36px', '19px', 'auto', 'auto'],
                                text: "F<br>",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [12, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "italic", "break-word", "normal"]
                            },
                            {
                                id: 'E',
                                type: 'text',
                                rect: ['-36px', '28px', '74px', '30px', 'auto', 'auto'],
                                text: "E",
                                align: "left",
                                font: ['\'Times New Roman\', Times, serif', [12, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(143, 7, 7)", "italic", "break-word", "normal"]
                            },
                            {
                                id: 'question3',
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
                            }]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['212px', '-1886px', '26px', '2px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'hint_2a',
                            display: 'none',
                            type: 'text',
                            rect: ['24px', '357px', '233px', '26px', 'auto', 'auto'],
                            text: "+3 units in the X direction",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint_2_b',
                            display: 'none',
                            type: 'text',
                            rect: ['10px', '268px', '178px', '38', 'auto', 'auto'],
                            text: "+ 1 unit in the Y direction",
                            align: "left",
                            font: ['Georgia, Times New Roman, Times, serif', [14, "px"], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hint2b',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint2b.mp3",aud+"hint2b.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'Line',
                            display: 'none',
                            type: 'rect',
                            rect: ['107px', '269px', '145px', '2px', 'auto', 'auto'],
                            fill: ["rgba(26,155,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['90']]
                        },
                        {
                            id: '_1-6',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['176px', '283px', '9px', '8px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(26,155,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_1-3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['174px', '323px', '9px', '8px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(26,155,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'point_1-3',
                            display: 'none',
                            type: 'text',
                            rect: ['188px', '277px', '65px', '19px', 'auto', 'auto'],
                            text: "(1, - 3)",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(26,155,255,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'point_1_-6',
                            display: 'none',
                            type: 'text',
                            rect: ['201px', '331px', '56px', '19px', 'auto', 'auto'],
                            text: "(1, - 6)",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(26,155,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'hint_3',
                            display: 'none',
                            type: 'text',
                            rect: ['343px', '326px', '178px', '53px', 'auto', 'auto'],
                            opacity: '1',
                            text: "A line through (1, -3) and (1, -6) will be a good line of reflection",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,95,219,1.00)", "normal", "none", "", "break-word", "normal"]
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
                            id: 'answer',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"answer.mp3",aud+"answer.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'Answer_Hint',
                            display: 'none',
                            type: 'text',
                            rect: ['343px', '410px', '232px', '105px', 'auto', 'auto'],
                            text: "We can not map the triangle EFG to triangle ABC using rigid transformations (not changing the size or shape), the two triangles are NOT congruent.",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,95,219,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'answer_no',
                            display: 'none',
                            type: 'text',
                            rect: ['348px', '531px', '145px', '30px', 'auto', 'auto'],
                            text: "The answer is NO.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(192,0,0,1.00)", "400", "none solid rgb(0, 95, 219)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'hint_3Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['343px', '326px', '178px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Are the two triangles congruent?",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1.00)", "normal", "none", "", "break-word", "normal"]
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
                    duration: 137000,
                    autoPlay: true,
                    labels: {
                        "Label 1": 0,
                        "Read Question": 2000,
                        "Hint 1": 11000,
                        "Hint 2": 31000,
                        "Hint 3": 78000,
                        "Hint 4": 99000,
                        "Answer Hint": 111000
                    },
                    data: [
                        [
                            "eid304",
                            "display",
                            96500,
                            0,
                            "linear",
                            "${point_1_-6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid305",
                            "display",
                            97000,
                            0,
                            "linear",
                            "${hint_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid291",
                            "display",
                            65740,
                            0,
                            "linear",
                            "${hint_2a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid268",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Answer_Container}",
                            'rgba(6,6,6,0.00)',
                            'rgba(6,6,6,0.00)'
                        ],
                        [
                            "eid316",
                            "color",
                            109250,
                            0,
                            "linear",
                            "${hint_3Copy}",
                            'rgba(157,0,9,1.00)',
                            'rgba(157,0,9,1.00)'
                        ],
                        [
                            "eid315",
                            "opacity",
                            108500,
                            750,
                            "linear",
                            "${hint_3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Answer_Container}",
                            'block',
                            'block'
                        ],
                        [
                            "eid311",
                            "display",
                            136499,
                            0,
                            "linear",
                            "${answer_no}",
                            'none',
                            'block'
                        ],
                        [
                            "eid294",
                            "display",
                            69000,
                            0,
                            "linear",
                            "${Hint_2_b}",
                            'none',
                            'block'
                        ],
                        [
                            "eid312",
                            "opacity",
                            108500,
                            500,
                            "linear",
                            "${hint_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid286",
                            "display",
                            70000,
                            0,
                            "linear",
                            "${Hint_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid313",
                            "display",
                            108500,
                            0,
                            "linear",
                            "${hint_3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid300",
                            "display",
                            96000,
                            0,
                            "linear",
                            "${Line}",
                            'none',
                            'block'
                        ],
                        [
                            "eid302",
                            "display",
                            96500,
                            0,
                            "linear",
                            "${_1-6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "display",
                            71000,
                            0,
                            "linear",
                            "${Hint_2c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid270",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${Answer_Container}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid303",
                            "display",
                            96500,
                            0,
                            "linear",
                            "${point_1-3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid276",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Answer_Container}",
                            '61px',
                            '61px'
                        ],
                        [
                            "eid269",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Answer_Container}",
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]],
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]
                        ],
                        [
                            "eid271",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${Answer_Container}",
                            'rgba(4,4,4,0.18)',
                            'rgba(4,4,4,0.18)'
                        ],
                        [
                            "eid280",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Grade_X}",
                            'none',
                            'none'
                        ],
                        [
                            "eid309",
                            "display",
                            118027,
                            0,
                            "linear",
                            "${Answer_Hint}",
                            'none',
                            'block'
                        ],
                        [
                            "eid277",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Answer_Container}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid290",
                            "location",
                            64000,
                            1000,
                            "linear",
                            "${EFG}",
                            [[118.5, 328, 0, 0, 0, 0,0],[155.5, 329, 0, 0, 0, 0,37.01]]
                        ],
                        [
                            "eid293",
                            "location",
                            67000,
                            1000,
                            "linear",
                            "${EFG}",
                            [[155.5, 329, 0, 0, 0, 0,0],[155.5, 315, 0, 0, 0, 0,14]]
                        ],
                        [
                            "eid307",
                            "location",
                            107114,
                            886,
                            "linear",
                            "${EFG}",
                            [[155.5, 315, 0, 0, 0, 0,0],[204.5, 314, 0, 0, 0, 0,49.01]]
                        ],
                        [
                            "eid306",
                            "scaleX",
                            107114,
                            886,
                            "linear",
                            "${EFG}",
                            '1',
                            '-1'
                        ],
                        [
                            "eid244",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Answer_Container}",
                            '218px',
                            '218px'
                        ],
                        [
                            "eid283",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${Hint1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid301",
                            "display",
                            96500,
                            0,
                            "linear",
                            "${_1-3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid281",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Grade_Check}",
                            'none',
                            'none'
                        ],
                        [
                            "eid278",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Answer_Container}",
                            '0px',
                            '0px'
                        ],
                            [ "eid282", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question3}', [] ] ],
                            [ "eid284", "trigger", 11000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1}', [] ] ],
                            [ "eid285", "trigger", 31000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2}', [] ] ],
                            [ "eid295", "trigger", 71000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2b}', [] ] ],
                            [ "eid299", "trigger", 78000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint3}', [] ] ],
                            [ "eid308", "trigger", 99000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint4}', [] ] ],
                            [ "eid310", "trigger", 111000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${answer}', [] ] ]
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                                type: 'text',
                                id: 'Text8',
                                text: 'E',
                                align: 'center',
                                rect: [0, 4, 27, '20px', 'auto', 'auto']
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
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
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                                id: 'EButton',
                                type: 'rect',
                                rect: [8, 157, 101, 26, 'auto', 'auto'],
                                symbolName: 'EButton_3'
                            },
                            {
                                id: 'DButton',
                                type: 'rect',
                                rect: [8, 121, 101, 26, 'auto', 'auto'],
                                symbolName: 'DButton_3'
                            },
                            {
                                id: 'CButton',
                                type: 'rect',
                                rect: [8, 86, 101, 26, 'auto', 'auto'],
                                symbolName: 'CButton_3'
                            },
                            {
                                id: 'BButton',
                                type: 'rect',
                                rect: [8, 50, 125, 26, 'auto', 'auto'],
                                symbolName: 'BButton_3'
                            },
                            {
                                id: 'AButton',
                                type: 'rect',
                                rect: [0, 0, 153, 42, 'auto', 'auto'],
                                symbolName: 'AButton_3'
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("problem_8GA2_1_edgeActions.js");
})("EdgeProblem");
