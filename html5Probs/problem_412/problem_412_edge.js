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
                            id: 'Answers',
                            symbolName: 'Answers_1',
                            type: 'rect',
                            rect: ['22', '115', '156', '187', 'auto', 'auto'],
                            transform: [[],[],[],['1.19872','1.40642']]
                        },
                        {
                            id: 'Question_Text',
                            type: 'text',
                            rect: ['18', '29', '266', '24', 'auto', 'auto'],
                            text: "Order from least to greatest:",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [20, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
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
                            id: 'b3',
                            type: 'image',
                            rect: ['337', '23', '31px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
                        },
                        {
                            id: 'b3Copy7',
                            display: 'none',
                            type: 'image',
                            rect: ['290', '349', '31px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
                        },
                        {
                            id: 'b1',
                            type: 'image',
                            rect: ['279', '22', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b1.gif",'0px','0px']
                        },
                        {
                            id: 'b5',
                            type: 'image',
                            rect: ['410', '22', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
                        },
                        {
                            id: 'b5Copy7',
                            display: 'none',
                            type: 'image',
                            rect: ['346', '348', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
                        },
                        {
                            id: 'b2',
                            type: 'image',
                            rect: ['300', '22', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
                        },
                        {
                            id: 'b2Copy7',
                            display: 'none',
                            type: 'image',
                            rect: ['392', '348', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
                        },
                        {
                            id: 'Text5',
                            display: 'none',
                            type: 'text',
                            rect: ['328', '367', '18px', '9px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text5Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['381', '367', '18px', '9px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'b3Copy6',
                            display: 'none',
                            type: 'image',
                            rect: ['352', '131', '31px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
                        },
                        {
                            id: 'b5Copy6',
                            display: 'none',
                            type: 'image',
                            rect: ['410', '130', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
                        },
                        {
                            id: 'b2Copy6',
                            display: 'none',
                            type: 'image',
                            rect: ['294', '130', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
                        },
                        {
                            id: 'b4',
                            type: 'image',
                            rect: ['385', '22', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b4.gif",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['404', '41', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy3',
                            type: 'text',
                            rect: ['373', '41', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['329', '41', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['294', '41', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'b3Copy',
                            type: 'image',
                            rect: ['125', '102', '31px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
                        },
                        {
                            id: 'b1Copy',
                            type: 'image',
                            rect: ['67', '101', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b1.gif",'0px','0px']
                        },
                        {
                            id: 'b5Copy',
                            type: 'image',
                            rect: ['198', '101', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
                        },
                        {
                            id: 'b2Copy',
                            type: 'image',
                            rect: ['88', '101', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
                        },
                        {
                            id: 'b4Copy',
                            type: 'image',
                            rect: ['173', '101', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b4.gif",'0px','0px']
                        },
                        {
                            id: 'TextCopy7',
                            type: 'text',
                            rect: ['192', '120', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy6',
                            type: 'text',
                            rect: ['161', '120', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy5',
                            type: 'text',
                            rect: ['117', '120', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy4',
                            type: 'text',
                            rect: ['82', '120', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'b3Copy2',
                            type: 'image',
                            rect: ['130', '150', '31px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
                        },
                        {
                            id: 'b1Copy2',
                            type: 'image',
                            rect: ['176', '150', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b1.gif",'0px','0px']
                        },
                        {
                            id: 'b5Copy2',
                            type: 'image',
                            rect: ['93', '149', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
                        },
                        {
                            id: 'b2Copy2',
                            type: 'image',
                            rect: ['57', '149', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
                        },
                        {
                            id: 'b4Copy2',
                            type: 'image',
                            rect: ['210', '150', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b4.gif",'0px','0px']
                        },
                        {
                            id: 'TextCopy11',
                            type: 'text',
                            rect: ['192', '168', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy10',
                            type: 'text',
                            rect: ['167', '168', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy9',
                            type: 'text',
                            rect: ['124', '168', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy8',
                            type: 'text',
                            rect: ['87', '168', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'b3Copy3',
                            type: 'image',
                            rect: ['57', '202', '31px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
                        },
                        {
                            id: 'b1Copy3',
                            type: 'image',
                            rect: ['175', '201', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b1.gif",'0px','0px']
                        },
                        {
                            id: 'b5Copy3',
                            type: 'image',
                            rect: ['95', '201', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
                        },
                        {
                            id: 'b2Copy3',
                            type: 'image',
                            rect: ['132', '201', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
                        },
                        {
                            id: 'b4Copy3',
                            type: 'image',
                            rect: ['210', '201', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b4.gif",'0px','0px']
                        },
                        {
                            id: 'TextCopy15',
                            type: 'text',
                            rect: ['189', '220', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy14',
                            type: 'text',
                            rect: ['163', '220', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy13',
                            type: 'text',
                            rect: ['125', '220', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy12',
                            type: 'text',
                            rect: ['90', '220', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'b3Copy10',
                            display: 'none',
                            type: 'image',
                            rect: ['293', '402', '31px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
                        },
                        {
                            id: 'b1Copy6',
                            display: 'none',
                            type: 'image',
                            rect: ['415', '401', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b1.gif",'0px','0px']
                        },
                        {
                            id: 'b5Copy9',
                            display: 'none',
                            type: 'image',
                            rect: ['330', '401', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
                        },
                        {
                            id: 'b2Copy9',
                            display: 'none',
                            type: 'image',
                            rect: ['368', '401', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
                        },
                        {
                            id: 'b4Copy6',
                            display: 'none',
                            type: 'image',
                            rect: ['452', '401', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b4.gif",'0px','0px']
                        },
                        {
                            id: 'TextCopy27',
                            display: 'none',
                            type: 'text',
                            rect: ['431', '420', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy26',
                            display: 'none',
                            type: 'text',
                            rect: ['400', '420', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy25',
                            display: 'none',
                            type: 'text',
                            rect: ['356', '420', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy24',
                            display: 'none',
                            type: 'text',
                            rect: ['324', '420', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'b3Copy4',
                            type: 'image',
                            rect: ['57', '250', '31px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
                        },
                        {
                            id: 'b1Copy4',
                            type: 'image',
                            rect: ['173', '249', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b1.gif",'0px','0px']
                        },
                        {
                            id: 'b5Copy4',
                            type: 'image',
                            rect: ['131', '249', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
                        },
                        {
                            id: 'b2Copy4',
                            type: 'image',
                            rect: ['96', '249', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
                        },
                        {
                            id: 'b4Copy4',
                            type: 'image',
                            rect: ['210', '249', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b4.gif",'0px','0px']
                        },
                        {
                            id: 'TextCopy19',
                            type: 'text',
                            rect: ['191', '268', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy18',
                            type: 'text',
                            rect: ['163', '268', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy17',
                            type: 'text',
                            rect: ['125', '268', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy16',
                            type: 'text',
                            rect: ['92', '268', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'b3Copy5',
                            type: 'image',
                            rect: ['92', '300', '31px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
                        },
                        {
                            id: 'b1Copy5',
                            type: 'image',
                            rect: ['176', '299', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b1.gif",'0px','0px']
                        },
                        {
                            id: 'b5Copy5',
                            type: 'image',
                            rect: ['57', '299', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
                        },
                        {
                            id: 'b2Copy5',
                            type: 'image',
                            rect: ['131', '299', '24px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
                        },
                        {
                            id: 'b4Copy5',
                            type: 'image',
                            rect: ['210', '299', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b4.gif",'0px','0px']
                        },
                        {
                            id: 'TextCopy23',
                            type: 'text',
                            rect: ['191', '318', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy22',
                            type: 'text',
                            rect: ['161', '318', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy21',
                            type: 'text',
                            rect: ['124', '318', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy20',
                            type: 'text',
                            rect: ['88', '318', '24', '24px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text2',
                            display: 'none',
                            type: 'text',
                            rect: ['265', '93', '302', '37px', 'auto', 'auto'],
                            text: "Let's deal with the negative fractions first.",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'b6',
                            display: 'none',
                            type: 'image',
                            rect: ['307', '182', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b6.gif",'0px','0px']
                        },
                        {
                            id: 'b62',
                            display: 'none',
                            type: 'image',
                            rect: ['297', '113', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b62.gif",'0px','0px']
                        },
                        {
                            id: 'b9',
                            display: 'none',
                            type: 'image',
                            rect: ['317', '113', '71px', '38px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b9.gif",'0px','0px']
                        },
                        {
                            id: 'b72',
                            display: 'none',
                            type: 'image',
                            rect: ['297', '249', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b72.gif",'0px','0px']
                        },
                        {
                            id: 'b82',
                            display: 'none',
                            type: 'image',
                            rect: ['293', '182', '18px', '38px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b82.gif",'0px','0px']
                        },
                        {
                            id: 'b7',
                            display: 'none',
                            type: 'image',
                            rect: ['428', '180', '9px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b7.gif",'0px','0px']
                        },
                        {
                            id: 'b8',
                            display: 'none',
                            type: 'image',
                            rect: ['365', '182', '18px', '38px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b8.gif",'0px','0px']
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
                            id: 'b11',
                            display: 'none',
                            type: 'image',
                            rect: ['317', '249', '71px', '38px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b11.gif",'0px','0px']
                        },
                        {
                            id: 'b10',
                            display: 'none',
                            type: 'image',
                            rect: ['317', '182', '71px', '38px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b10.gif",'0px','0px']
                        },
                        {
                            id: 'b12',
                            display: 'none',
                            type: 'image',
                            rect: ['394', '113', '39px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b12.gif",'0px','0px']
                        },
                        {
                            id: 'b13',
                            display: 'none',
                            type: 'image',
                            rect: ['394', '182', '39px', '38px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b13.gif",'0px','0px']
                        },
                        {
                            id: 'b14',
                            display: 'none',
                            type: 'image',
                            rect: ['394', '249', '39px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b14.gif",'0px','0px']
                        },
                        {
                            id: 'b17',
                            display: 'none',
                            type: 'image',
                            rect: ['395', '303', '18px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b17.gif",'0px','0px']
                        },
                        {
                            id: 'b15',
                            display: 'none',
                            type: 'image',
                            rect: ['302', '303', '18px', '38px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b15.gif",'0px','0px']
                        },
                        {
                            id: 'Text3',
                            display: 'none',
                            type: 'text',
                            rect: ['328', '325', '18px', '9px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text3Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['381', '325', '18px', '9px', 'auto', 'auto'],
                            text: ",",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'b16',
                            display: 'none',
                            type: 'image',
                            rect: ['353', '303', '18px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b16.gif",'0px','0px']
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
                            id: 'Text4',
                            display: 'none',
                            type: 'text',
                            rect: ['288', '307', '18px', '9px', 'auto', 'auto'],
                            text: "_",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy4',
                            display: 'none',
                            type: 'text',
                            rect: ['383', '307', '18px', '9px', 'auto', 'auto'],
                            text: "_",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy3',
                            display: 'none',
                            type: 'text',
                            rect: ['337', '307', '18px', '9px', 'auto', 'auto'],
                            text: "_",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text6',
                            display: 'none',
                            type: 'text',
                            rect: ['26px', '349px', '228px', '37px', 'auto', 'auto'],
                            text: "We just have to add the two positive fractions to this list -&gt;",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text7',
                            display: 'none',
                            type: 'text',
                            rect: ['306px', '458px', '131px', '38px', 'auto', 'auto'],
                            text: "Choose (C)",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(255,0,0,1.00)", "400", "none", "normal", "break-word", ""]
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
                            id: 'hint4',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint4.mp3",aud+"hint4.ogg"],
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
                    duration: 101354,
                    autoPlay: true,
                    labels: {
                        "Read Question": 2000,
                        "Hint 1": 12000,
                        "Hint 2": 35750,
                        "Hint 3": 72000,
                        "Hint 4": 85500,
                        "Answer Hint": 96250
                    },
                    data: [
                        [
                            "eid323",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid328",
                            "display",
                            84500,
                            0,
                            "linear",
                            "${Text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid300",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b72}",
                            'none',
                            'none'
                        ],
                        [
                            "eid301",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${b72}",
                            'none',
                            'block'
                        ],
                        [
                            "eid326",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b2Copy7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid331",
                            "display",
                            84500,
                            0,
                            "linear",
                            "${b2Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid310",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid315",
                            "display",
                            70000,
                            0,
                            "linear",
                            "${b17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid336",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b5Copy9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid345",
                            "display",
                            96250,
                            0,
                            "linear",
                            "${b5Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid316",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid319",
                            "display",
                            83000,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid271",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid274",
                            "display",
                            32000,
                            0,
                            "linear",
                            "${b7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid282",
                            "display",
                            47592,
                            0,
                            "linear",
                            "${b7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid335",
                            "display",
                            0,
                            0,
                            "linear",
                            "${TextCopy24}",
                            'none',
                            'none'
                        ],
                        [
                            "eid344",
                            "display",
                            96250,
                            0,
                            "linear",
                            "${TextCopy24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid308",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid313",
                            "display",
                            70000,
                            0,
                            "linear",
                            "${b16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid342",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b4Copy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid351",
                            "display",
                            96250,
                            0,
                            "linear",
                            "${b4Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid244",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b2Copy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid248",
                            "display",
                            17500,
                            0,
                            "linear",
                            "${b2Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid283",
                            "display",
                            47592,
                            0,
                            "linear",
                            "${b2Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid324",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b5Copy7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid329",
                            "display",
                            84500,
                            0,
                            "linear",
                            "${b5Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid306",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid311",
                            "display",
                            70000,
                            0,
                            "linear",
                            "${b15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid288",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b62}",
                            'none',
                            'none'
                        ],
                        [
                            "eid289",
                            "display",
                            48000,
                            0,
                            "linear",
                            "${b62}",
                            'none',
                            'block'
                        ],
                        [
                            "eid296",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid297",
                            "display",
                            54000,
                            0,
                            "linear",
                            "${b10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid294",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b82}",
                            'none',
                            'none'
                        ],
                        [
                            "eid295",
                            "display",
                            52500,
                            0,
                            "linear",
                            "${b82}",
                            'none',
                            'block'
                        ],
                        [
                            "eid302",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid303",
                            "display",
                            58500,
                            0,
                            "linear",
                            "${b11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid270",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid273",
                            "display",
                            32000,
                            0,
                            "linear",
                            "${b8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid281",
                            "display",
                            47592,
                            0,
                            "linear",
                            "${b8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid339",
                            "display",
                            0,
                            0,
                            "linear",
                            "${TextCopy26}",
                            'none',
                            'none'
                        ],
                        [
                            "eid348",
                            "display",
                            96250,
                            0,
                            "linear",
                            "${TextCopy26}",
                            'none',
                            'block'
                        ],
                        [
                            "eid332",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid333",
                            "display",
                            87250,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid245",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b3Copy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid249",
                            "display",
                            17500,
                            0,
                            "linear",
                            "${b3Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid284",
                            "display",
                            47592,
                            0,
                            "linear",
                            "${b3Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid325",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text5Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid330",
                            "display",
                            84500,
                            0,
                            "linear",
                            "${Text5Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid322",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b3Copy7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid327",
                            "display",
                            84500,
                            0,
                            "linear",
                            "${b3Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid246",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b5Copy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid250",
                            "display",
                            17500,
                            0,
                            "linear",
                            "${b5Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid285",
                            "display",
                            47592,
                            0,
                            "linear",
                            "${b5Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid317",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid320",
                            "display",
                            83000,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid340",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b1Copy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid349",
                            "display",
                            96250,
                            0,
                            "linear",
                            "${b1Copy6}",
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
                            "eid341",
                            "display",
                            0,
                            0,
                            "linear",
                            "${TextCopy27}",
                            'none',
                            'none'
                        ],
                        [
                            "eid350",
                            "display",
                            96250,
                            0,
                            "linear",
                            "${TextCopy27}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            55500,
                            0,
                            "linear",
                            "${b13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid352",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid353",
                            "display",
                            99750,
                            0,
                            "linear",
                            "${Text7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid307",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid312",
                            "display",
                            70000,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid290",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid291",
                            "display",
                            49500,
                            0,
                            "linear",
                            "${b9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid269",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid272",
                            "display",
                            32000,
                            0,
                            "linear",
                            "${b6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid280",
                            "display",
                            47592,
                            0,
                            "linear",
                            "${b6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid337",
                            "display",
                            0,
                            0,
                            "linear",
                            "${TextCopy25}",
                            'none',
                            'none'
                        ],
                        [
                            "eid346",
                            "display",
                            96250,
                            0,
                            "linear",
                            "${TextCopy25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid334",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b3Copy10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid343",
                            "display",
                            96250,
                            0,
                            "linear",
                            "${b3Copy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid243",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid247",
                            "display",
                            17500,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid286",
                            "display",
                            47592,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid338",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b2Copy9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid347",
                            "display",
                            96250,
                            0,
                            "linear",
                            "${b2Copy9}",
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
                            "eid292",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid293",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${b12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid304",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid305",
                            "display",
                            60000,
                            0,
                            "linear",
                            "${b14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid318",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4Copy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid321",
                            "display",
                            83000,
                            0,
                            "linear",
                            "${Text4Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid309",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text3Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid314",
                            "display",
                            70000,
                            0,
                            "linear",
                            "${Text3Copy}",
                            'none',
                            'block'
                        ],
                            [ "eid268", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question}', [] ] ],
                            [ "eid275", "trigger", 12000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1}', [] ] ],
                            [ "eid287", "trigger", 35750, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2a}', [] ] ],
                            [ "eid354", "trigger", 61000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2b}', [] ] ],
                            [ "eid355", "trigger", 72000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint3}', [] ] ],
                            [ "eid358", "trigger", 85500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint4}', [] ] ],
                            [ "eid357", "trigger", 96250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${answer}', [] ] ]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("problem_412_edgeActions.js");
})("EdgeProblem");
