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
                            id: 'd11',
                            display: 'none',
                            type: 'image',
                            rect: ['376', '277', '53px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d11.gif",'0px','0px']
                        },
                        {
                            id: 'Text8',
                            display: 'none',
                            type: 'text',
                            rect: ['214', '422', '95', '21px', 'auto', 'auto'],
                            text: "Choose (C)",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(255,0,0,1.00)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'd9',
                            display: 'none',
                            type: 'image',
                            rect: ['550', '361', '18px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d9.gif",'0px','0px']
                        },
                        {
                            id: 'Answers',
                            symbolName: 'Answers_1',
                            type: 'rect',
                            rect: ['27', '328', '156', '187', 'auto', 'auto'],
                            transform: [[],[],[],['1.17949','1.50267']]
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
                            id: 'd3',
                            type: 'image',
                            rect: ['71', '362', '33px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d3.gif",'0px','0px']
                        },
                        {
                            id: 'd5',
                            type: 'image',
                            rect: ['71', '465', '33px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d5.gif",'0px','0px']
                        },
                        {
                            id: 'd4',
                            type: 'image',
                            rect: ['71', '414', '33px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d4.gif",'0px','0px']
                        },
                        {
                            id: 'd6',
                            type: 'image',
                            rect: ['72', '517', '33px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d6.gif",'0px','0px']
                        },
                        {
                            id: 'd1Copy2',
                            type: 'image',
                            rect: ['48', '36', '89px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d1.gif",'0px','0px']
                        },
                        {
                            id: 'Text3',
                            display: 'none',
                            type: 'text',
                            rect: ['419', '238', '20', '25', 'auto', 'auto'],
                            text: "?",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [18, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4',
                            display: 'none',
                            type: 'text',
                            rect: ['396', '231', '33px', '25px', 'auto', 'auto'],
                            text: "_",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [18, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text9',
                            display: 'none',
                            type: 'text',
                            rect: ['419', '240', '20px', '21px', 'auto', 'auto'],
                            text: "?",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [18, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'd2',
                            type: 'image',
                            rect: ['78', '307', '20px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d2.gif",'0px','0px']
                        },
                        {
                            id: 'Text',
                            display: 'none',
                            type: 'text',
                            rect: ['188', '96', '390', '56px', 'auto', 'auto'],
                            text: "When we divide a positive number by a negative number, what is the sign of the quotient?",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [18, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text2',
                            display: 'none',
                            type: 'text',
                            rect: ['188px', '165', '390', '47px', 'auto', 'auto'],
                            text: "Since we're dividing a positive number by a negative number, the answer will be negative.",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [18, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Rectangle2',
                            display: 'none',
                            type: 'rect',
                            rect: ['188', '308px', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy8',
                            display: 'none',
                            type: 'rect',
                            rect: ['188', '436', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy7',
                            display: 'none',
                            type: 'rect',
                            rect: ['188', '420', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['188', '404', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['188', '388', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['188', '372', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['188', '356', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy5',
                            display: 'none',
                            type: 'rect',
                            rect: ['188', '340', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy6',
                            display: 'none',
                            type: 'rect',
                            rect: ['188', '324', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy17',
                            display: 'none',
                            type: 'rect',
                            rect: ['291', '308px', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy16',
                            display: 'none',
                            type: 'rect',
                            rect: ['291', '436', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy15',
                            display: 'none',
                            type: 'rect',
                            rect: ['291', '420', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy14',
                            display: 'none',
                            type: 'rect',
                            rect: ['291', '404', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy13',
                            display: 'none',
                            type: 'rect',
                            rect: ['291', '388', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy12',
                            display: 'none',
                            type: 'rect',
                            rect: ['291', '372', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy11',
                            display: 'none',
                            type: 'rect',
                            rect: ['291', '356', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy10',
                            display: 'none',
                            type: 'rect',
                            rect: ['291', '340', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy9',
                            display: 'none',
                            type: 'rect',
                            rect: ['291', '324', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy26',
                            display: 'none',
                            type: 'rect',
                            rect: ['389', '308px', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy25',
                            display: 'none',
                            type: 'rect',
                            rect: ['389', '436', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy24',
                            display: 'none',
                            type: 'rect',
                            rect: ['389', '420', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy23',
                            display: 'none',
                            type: 'rect',
                            rect: ['389', '404', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy22',
                            display: 'none',
                            type: 'rect',
                            rect: ['389', '388', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy21',
                            display: 'none',
                            type: 'rect',
                            rect: ['389', '372', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy20',
                            display: 'none',
                            type: 'rect',
                            rect: ['389', '356', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy19',
                            display: 'none',
                            type: 'rect',
                            rect: ['389', '340', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy18',
                            display: 'none',
                            type: 'rect',
                            rect: ['389', '324', '70', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,166,10,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'd7',
                            display: 'none',
                            type: 'image',
                            rect: ['504', '308', '43px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d7.gif",'0px','0px']
                        },
                        {
                            id: 'd8',
                            display: 'none',
                            type: 'image',
                            rect: ['504', '361', '20px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d8.gif",'0px','0px']
                        },
                        {
                            id: 'd14',
                            display: 'none',
                            type: 'image',
                            rect: ['327', '232', '66px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d14.gif",'0px','0px']
                        },
                        {
                            id: 'Text5',
                            display: 'none',
                            type: 'text',
                            rect: ['534', '369', 'auto', 'auto', 'auto', 'auto'],
                            text: "=",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [18, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text6',
                            display: 'none',
                            type: 'text',
                            rect: ['558', '372', '20px', '16px', 'auto', 'auto'],
                            text: "?",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [18, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'd102',
                            display: 'none',
                            type: 'image',
                            rect: ['283', '277', '87px', '38px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d102.gif",'0px','0px']
                        },
                        {
                            id: 'Text7',
                            display: 'none',
                            type: 'text',
                            rect: ['383px', '289px', '20px', '16px', 'auto', 'auto'],
                            text: "?",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [18, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'd12',
                            display: 'none',
                            type: 'image',
                            rect: ['434', '277', '53px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d12.gif",'0px','0px']
                        },
                        {
                            id: 'd132',
                            display: 'none',
                            type: 'image',
                            rect: ['497', '277', '33px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d132.gif",'0px','0px']
                        },
                        {
                            id: 'd92',
                            display: 'none',
                            type: 'image',
                            rect: ['550', '361', '18px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d92.gif",'0px','0px']
                        },
                        {
                            id: 'd82',
                            display: 'none',
                            type: 'image',
                            rect: ['300', '232', '20px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d82.gif",'0px','0px']
                        },
                        {
                            id: 'answer',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"answer.mp3",aud+"answer.ogg"],
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
                            id: 'hint4',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint4.mp3",aud+"hint4.ogg"],
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
                            id: 'question',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"question.mp3",aud+"question.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'd15',
                            display: 'none',
                            type: 'image',
                            rect: ['188', '277', '87px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"d15.gif",'0px','0px']
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
                    duration: 57960,
                    autoPlay: true,
                    labels: {
                        "Read Question": 2000,
                        "Hint 1": 8967,
                        "Hint 2": 16615,
                        "Hint 3": 24005,
                        "Hint 4": 36010,
                        "Hint 5": 44114,
                        "Answer Hint": 51363
                    },
                    data: [
                        [
                            "eid431",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid432",
                            "display",
                            33051,
                            0,
                            "linear",
                            "${Text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid421",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Text5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid292",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy19}",
                            'none',
                            'none'
                        ],
                        [
                            "eid319",
                            "display",
                            34326,
                            0,
                            "linear",
                            "${Rectangle2Copy19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid411",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid277",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid304",
                            "display",
                            34337,
                            0,
                            "linear",
                            "${Rectangle2Copy17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid400",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid163",
                            "top",
                            14500,
                            0,
                            "linear",
                            "${Answers}",
                            '328px',
                            '328px'
                        ],
                        [
                            "eid293",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy18}",
                            'none',
                            'none'
                        ],
                        [
                            "eid320",
                            "display",
                            34325,
                            0,
                            "linear",
                            "${Rectangle2Copy18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid410",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid329",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid330",
                            "display",
                            37033,
                            0,
                            "linear",
                            "${d9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid420",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${d9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid331",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d92}",
                            'none',
                            'none'
                        ],
                        [
                            "eid332",
                            "display",
                            37389,
                            0,
                            "linear",
                            "${d92}",
                            'none',
                            'block'
                        ],
                        [
                            "eid278",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid305",
                            "display",
                            34322,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid401",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid434",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid435",
                            "display",
                            44128,
                            0,
                            "linear",
                            "${d15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid283",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid310",
                            "display",
                            34330,
                            0,
                            "linear",
                            "${Rectangle2Copy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid403",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid270",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid297",
                            "display",
                            34329,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid397",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid348",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d102}",
                            'none',
                            'none'
                        ],
                        [
                            "eid349",
                            "display",
                            47545,
                            0,
                            "linear",
                            "${d102}",
                            'none',
                            'block'
                        ],
                        [
                            "eid340",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid342",
                            "display",
                            21471,
                            0,
                            "linear",
                            "${d14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid324",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid326",
                            "display",
                            33036,
                            0,
                            "linear",
                            "${d8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid419",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${d8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid289",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid316",
                            "display",
                            34321,
                            0,
                            "linear",
                            "${Rectangle2Copy22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid414",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid238",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid239",
                            "display",
                            8972,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid339",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d82}",
                            'none',
                            'none'
                        ],
                        [
                            "eid341",
                            "display",
                            21471,
                            0,
                            "linear",
                            "${d82}",
                            'none',
                            'block'
                        ],
                        [
                            "eid345",
                            "display",
                            38170,
                            0,
                            "linear",
                            "${d82}",
                            'block',
                            'none'
                        ],
                        [
                            "eid282",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid309",
                            "display",
                            34340,
                            0,
                            "linear",
                            "${Rectangle2Copy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid402",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid287",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy24}",
                            'none',
                            'none'
                        ],
                        [
                            "eid314",
                            "display",
                            34340,
                            0,
                            "linear",
                            "${Rectangle2Copy24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid416",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy24}",
                            'block',
                            'none'
                        ],
                        [
                            "eid268",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid295",
                            "display",
                            34320,
                            0,
                            "linear",
                            "${Rectangle2Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid399",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid354",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid355",
                            "display",
                            52788,
                            0,
                            "linear",
                            "${d12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid285",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid312",
                            "display",
                            34337,
                            0,
                            "linear",
                            "${Rectangle2Copy16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid408",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid335",
                            "left",
                            37389,
                            1374,
                            "linear",
                            "${d92}",
                            '550px',
                            '300px'
                        ],
                        [
                            "eid336",
                            "top",
                            37389,
                            1374,
                            "linear",
                            "${d92}",
                            '361px',
                            '230px'
                        ],
                        [
                            "eid286",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy25}",
                            'none',
                            'none'
                        ],
                        [
                            "eid313",
                            "display",
                            34335,
                            0,
                            "linear",
                            "${Rectangle2Copy25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid417",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid272",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            34332,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid395",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid291",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy20}",
                            'none',
                            'none'
                        ],
                        [
                            "eid318",
                            "display",
                            34328,
                            0,
                            "linear",
                            "${Rectangle2Copy20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid412",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid284",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid311",
                            "display",
                            34319,
                            0,
                            "linear",
                            "${Rectangle2Copy15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid407",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid280",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid307",
                            "display",
                            34333,
                            0,
                            "linear",
                            "${Rectangle2Copy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid405",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid325",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid327",
                            "display",
                            33036,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid328",
                            "display",
                            36010,
                            0,
                            "linear",
                            "${Text6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid358",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid359",
                            "display",
                            56367,
                            0,
                            "linear",
                            "${Text8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid279",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid306",
                            "display",
                            34337,
                            0,
                            "linear",
                            "${Rectangle2Copy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid406",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid275",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid302",
                            "display",
                            34322,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid392",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid350",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid351",
                            "display",
                            49121,
                            0,
                            "linear",
                            "${Text7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid422",
                            "display",
                            51398,
                            0,
                            "linear",
                            "${Text7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid356",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d132}",
                            'none',
                            'none'
                        ],
                        [
                            "eid357",
                            "display",
                            54321,
                            0,
                            "linear",
                            "${d132}",
                            'none',
                            'block'
                        ],
                        [
                            "eid294",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy26}",
                            'none',
                            'none'
                        ],
                        [
                            "eid321",
                            "display",
                            34330,
                            0,
                            "linear",
                            "${Rectangle2Copy26}",
                            'none',
                            'block'
                        ],
                        [
                            "eid409",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy26}",
                            'block',
                            'none'
                        ],
                        [
                            "eid271",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid298",
                            "display",
                            34327,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid396",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid352",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid353",
                            "display",
                            51374,
                            0,
                            "linear",
                            "${d11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid281",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid308",
                            "display",
                            34325,
                            0,
                            "linear",
                            "${Rectangle2Copy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid404",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid274",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid301",
                            "display",
                            34337,
                            0,
                            "linear",
                            "${Rectangle2Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid393",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid247",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid250",
                            "display",
                            21583,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid273",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid300",
                            "display",
                            34320,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid394",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
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
                            "eid322",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid323",
                            "display",
                            31987,
                            0,
                            "linear",
                            "${d7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid418",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${d7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid344",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid288",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy23}",
                            'none',
                            'none'
                        ],
                        [
                            "eid315",
                            "display",
                            34323,
                            0,
                            "linear",
                            "${Rectangle2Copy23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid415",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid269",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid296",
                            "display",
                            34325,
                            0,
                            "linear",
                            "${Rectangle2Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid398",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy7}",
                            'block',
                            'none'
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
                            "eid276",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid303",
                            "display",
                            34328,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid391",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid246",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid343",
                            "display",
                            21563,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid240",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid241",
                            "display",
                            16609,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid290",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy21}",
                            'none',
                            'none'
                        ],
                        [
                            "eid317",
                            "display",
                            34330,
                            0,
                            "linear",
                            "${Rectangle2Copy21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid413",
                            "display",
                            44144,
                            0,
                            "linear",
                            "${Rectangle2Copy21}",
                            'block',
                            'none'
                        ],
                            [ "eid433", "trigger", 1996, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question}', [] ] ],
                            [ "eid424", "trigger", 8972, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1}', [] ] ],
                            [ "eid425", "trigger", 16614, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2}', [] ] ],
                            [ "eid426", "trigger", 23995, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint3}', [] ] ],
                            [ "eid427", "trigger", 36017, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint4}', [] ] ],
                            [ "eid428", "trigger", 44125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint5}', [] ] ],
                            [ "eid429", "trigger", 52790.731686259, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${answer}', [] ] ]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("problem_807_edgeActions.js");
})("EdgeProblem");
