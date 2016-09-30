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
                            id: 'gray16',
                            type: 'image',
                            rect: ['385', '319', '19px', '16px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gray16.gif",'0px','0px']
                        },
                        {
                            id: 'grayfoursquared2',
                            type: 'image',
                            rect: ['349', '315', '18px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"grayfoursquared2.gif",'0px','0px']
                        },
                        {
                            id: 'Question_Text',
                            type: 'text',
                            rect: ['24', '168', '380', '57', 'auto', 'auto'],
                            text: "In rectangle ABCD, sides AB and CD pass through the centers of the two circles. If AB=8 and AD=20, what is the area of the shaded region?",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Answers',
                            symbolName: 'Answers_1',
                            type: 'rect',
                            rect: ['5', '263', '156', '187', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.03743']]
                        },
                        {
                            id: 'AnswerDText',
                            type: 'text',
                            rect: ['78', '389', '85', '20px', 'auto', 'auto'],
                            text: "160-10π",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerCText',
                            type: 'text',
                            rect: ['78', '350', '80', '19px', 'auto', 'auto'],
                            text: "140",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerBText',
                            type: 'text',
                            rect: ['78', '316', '76', '19px', 'auto', 'auto'],
                            text: "160-12π",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerAText',
                            type: 'text',
                            rect: ['76', '279', '64', '19', 'auto', 'auto'],
                            text: "160",
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
                            rect: ['76', '425', '85', '20px', 'auto', 'auto'],
                            text: "160-16π<br>",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['55', '29', '0px', '101px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['59', '30', '242', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2',
                            type: 'ellipse',
                            rect: ['12', '30', '101', '98', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,251,251,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Ellipse2Copy',
                            type: 'ellipse',
                            rect: ['244', '30', '101', '98', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle5',
                            type: 'rect',
                            rect: ['295', '30', '2px', '100', 'auto', 'auto'],
                            fill: ["rgba(6,6,6,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5Copy',
                            type: 'rect',
                            rect: ['61', '30', '2px', '100', 'auto', 'auto'],
                            fill: ["rgba(6,6,6,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['59', '137', '23px', '19px', 'auto', 'auto'],
                            text: "A",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['61', '7px', '23px', '19px', 'auto', 'auto'],
                            text: "B",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['285', '7px', '23px', '19px', 'auto', 'auto'],
                            text: "C",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['290', '137px', '35px', '20px', 'auto', 'auto'],
                            text: "D",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'circle16cropped123',
                            type: 'image',
                            rect: ['61', '30', '54', '100', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"circle16cropped123.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['244px', '30px', '54px', '100px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,223,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['61', '30', '54', '99', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,229,214,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'circle16cropped123Copy',
                            type: 'image',
                            rect: ['244', '30', '54', '100', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"circle16cropped123.jpg",'0px','0px'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'Rectangle6',
                            type: 'rect',
                            rect: ['170px', '209px', '125px', '0px', 'auto', 'auto'],
                            fill: ["rgba(0,34,32,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle7',
                            type: 'rect',
                            rect: ['244', '147', '4', '125', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(157,0,9,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['90']]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['-3092', '-1587', '118', '35px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Shaded Area =",
                            font: ['Arial Black, Gadget, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['237', '233', '167', '35', 'auto', 'auto'],
                            opacity: '0',
                            text: "rectangle's area",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, ""], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['382', '233', '46', '20', 'auto', 'auto'],
                            opacity: '0',
                            text: "-<br>",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [16, "px"], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text9',
                            type: 'text',
                            rect: ['415', '233', '178', '24', 'auto', 'auto'],
                            opacity: '0',
                            text: "2 semicircle's area",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, "px"], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text29',
                            type: 'text',
                            rect: ['417', '233', '167', '35px', 'auto', 'auto'],
                            opacity: '0',
                            text: "full circle's area",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, ""], "rgba(86,79,79,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text19',
                            type: 'text',
                            rect: ['173', '316', '112px', '35px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Circle's Area =",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, ""], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text20',
                            type: 'text',
                            rect: ['287', '316', '89', '36', 'auto', 'auto'],
                            opacity: '0',
                            text: "π",
                            align: "left",
                            font: ['Times New Roman, Times, serif', [18, "px"], "rgba(232,18,18,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text20Copy3',
                            type: 'text',
                            rect: ['290', '314', '89', '36', 'auto', 'auto'],
                            opacity: '0',
                            text: "π",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [18, "px"], "rgba(85,75,76,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text20Copy5',
                            type: 'text',
                            rect: ['410', '317', '89', '36', 'auto', 'auto'],
                            opacity: '0',
                            text: "π",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [18, "px"], "rgba(85,75,76,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text20Copy4',
                            type: 'text',
                            rect: ['335', '314', '89', '36', 'auto', 'auto'],
                            opacity: '0',
                            text: "π",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [18, "px"], "rgba(85,75,76,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text20Copy2',
                            type: 'text',
                            rect: ['410', '316', '89', '36', 'auto', 'auto'],
                            opacity: '0',
                            text: "π",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [18, "px"], "rgba(232,18,18,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text20Copy8',
                            type: 'text',
                            rect: ['410', '394', '89', '36', 'auto', 'auto'],
                            opacity: '0',
                            text: "π",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [18, "px"], "rgba(232,18,18,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text20Copy',
                            type: 'text',
                            rect: ['335', '316', '24', '36', 'auto', 'auto'],
                            opacity: '0',
                            text: "π",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [18, "px"], "rgba(232,18,18,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text10',
                            type: 'text',
                            rect: ['43', '70', '19', '35px', 'auto', 'auto'],
                            opacity: '0',
                            text: "h",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, ""], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text11',
                            type: 'text',
                            rect: ['174', '137px', '23px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            text: "w",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, ""], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text12',
                            type: 'text',
                            rect: ['172', '282', '156', '35px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Rectangle's Area =",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, ""], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text13',
                            type: 'text',
                            rect: ['325', '281', '35px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            text: "h",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, ""], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text14',
                            type: 'text',
                            rect: ['339', '281', '19px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            text: "*",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, ""], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text15',
                            type: 'text',
                            rect: ['351', '281', '17', '9px', 'auto', 'auto'],
                            opacity: '0',
                            text: "w",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, ""], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text17',
                            type: 'text',
                            rect: ['172', '139', '19px', '35px', 'auto', 'auto'],
                            opacity: '0',
                            text: "20",
                            align: "left",
                            font: ['Arial Black, Gadget, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text16',
                            type: 'text',
                            rect: ['43', '70', '23px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            text: "8",
                            align: "left",
                            font: ['Arial Black, Gadget, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text22',
                            type: 'text',
                            rect: ['43', '70', '17px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            text: "8",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, ""], "rgba(78,75,75,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text23',
                            type: 'text',
                            rect: ['172', '137', '35px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            text: "20",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, ""], "rgba(78,75,75,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text18',
                            type: 'text',
                            rect: ['334', '282', '17px', '8', 'auto', 'auto'],
                            opacity: '0',
                            text: "x",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, ""], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text21',
                            type: 'text',
                            rect: ['377', '282', '76px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            text: "= 160",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, ""], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text21Copy',
                            type: 'text',
                            rect: ['393', '364', '76px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            text: " 160",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, ""], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'radiussquared2',
                            type: 'image',
                            rect: ['301', '317', '14px', '16px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"radiussquared2.gif",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['60', '30px', '4', '51', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(229,0,21,1.00)"],
                            stroke: [0,"rgba(244,12,12,1.00)","none"]
                        },
                        {
                            id: 'radius',
                            type: 'image',
                            rect: ['68', '50', '9px', '12px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"radius.gif",'0px','0px']
                        },
                        {
                            id: 'Text24',
                            type: 'text',
                            rect: ['321', '316', '23px', '21px', 'auto', 'auto'],
                            opacity: '0',
                            text: "=",
                            align: "left",
                            font: ['Arial Black, Gadget, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text24Copy3',
                            type: 'text',
                            rect: ['321', '316', '23px', '21px', 'auto', 'auto'],
                            opacity: '0',
                            text: "=",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, "px"], "rgba(85,75,76,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text24Copy4',
                            type: 'text',
                            rect: ['370', '316', '23px', '21px', 'auto', 'auto'],
                            opacity: '0',
                            text: "=",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, "px"], "rgba(85,75,76,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text24Copy',
                            type: 'text',
                            rect: ['370', '316', '23px', '21px', 'auto', 'auto'],
                            opacity: '0',
                            text: "=",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, "px"], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text25',
                            type: 'text',
                            rect: ['172', '316', '118px', '21px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Circle's Area =",
                            align: "left",
                            font: ['Arial Black, Gadget, sans-serif', [14, "px"], "rgba(85,75,76,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'grayrsquared',
                            type: 'image',
                            rect: ['301', '314', '17px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"grayrsquared.gif",'0px','0px']
                        },
                        {
                            id: 'Text26',
                            type: 'text',
                            rect: ['172', '281', '136px', '35px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Shaded Area =",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [14, ""], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text27',
                            type: 'text',
                            rect: ['417', '279', '17px', '12px', 'auto', 'auto'],
                            opacity: '0',
                            text: "-",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [16, "px"], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'redfoursquared3',
                            type: 'image',
                            rect: ['349', '315', '18px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"redfoursquared3.gif",'0px','0px']
                        },
                        {
                            id: 'redsixteen',
                            type: 'image',
                            rect: ['385', '319', '19px', '16px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"redsixteen.gif",'0px','0px']
                        },
                        {
                            id: 'redsixteen2',
                            type: 'image',
                            rect: ['385', '396', '19px', '16px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"redsixteen2.gif",'0px','0px']
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['173', '316', '298px', '35px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Choose (E)",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [20, "px"], "rgba(157,0,9,1)", "normal", "none", "normal", "break-word", ""]
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
                            id: 'hint1a',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint1a.mp3",aud+"hint1a.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'hint1b',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint1b.mp3",aud+"hint1b.ogg"],
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
                            id: 'hint6',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint6.mp3",aud+"hint6.ogg"],
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
                            id: 'answer',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"answer.mp3",aud+"answer.ogg"],
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
                    duration: 82713,
                    autoPlay: true,
                    labels: {
                        "Read Question": 3000,
                        "Hint 1": 16879,
                        "Hint 2": 30973,
                        "Hint 3": 37022,
                        "Hint 4": 44010,
                        "Hint 5": 54539,
                        "Hint 6": 63613,
                        "Hint 7": 68989,
                        "Hint 8": 76088,
                        "Answer": 80040
                    },
                    data: [
                        [
                            "eid387",
                            "opacity",
                            40635,
                            151,
                            "linear",
                            "${Text22}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid620",
                            "top",
                            76099,
                            1036,
                            "linear",
                            "${Text18}",
                            '282px',
                            '365px'
                        ],
                        [
                            "eid621",
                            "top",
                            77135,
                            53,
                            "linear",
                            "${Text18}",
                            '365px',
                            '364px'
                        ],
                        [
                            "eid461",
                            "opacity",
                            66586,
                            548,
                            "linear",
                            "${radius}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid246",
                            "background-color",
                            21524,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(0,229,214,1.00)',
                            'rgba(0,229,214,1.00)'
                        ],
                        [
                            "eid247",
                            "background-color",
                            21528,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(0,229,214,1.00)',
                            'rgba(0,229,214,1.00)'
                        ],
                        [
                            "eid417",
                            "color",
                            44021,
                            496,
                            "linear",
                            "${Text18}",
                            'rgba(157,0,9,1)',
                            'rgba(86,79,79,1.00)'
                        ],
                        [
                            "eid245",
                            "background-color",
                            21519,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'rgba(0,229,214,1.00)',
                            'rgba(0,229,214,1.00)'
                        ],
                        [
                            "eid342",
                            "opacity",
                            36803,
                            261,
                            "linear",
                            "${Rectangle7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid358",
                            "opacity",
                            39834,
                            270,
                            "linear",
                            "${Rectangle7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid512",
                            "opacity",
                            76091,
                            1022,
                            "linear",
                            "${grayrsquared}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid680",
                            "top",
                            76088,
                            1017,
                            "linear",
                            "${grayfoursquared2}",
                            '315px',
                            '390px'
                        ],
                        [
                            "eid687",
                            "left",
                            76070,
                            0,
                            "linear",
                            "${gray16}",
                            '385px',
                            '385px'
                        ],
                        [
                            "eid193",
                            "opacity",
                            23917,
                            2035,
                            "linear",
                            "${circle16cropped123}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid248",
                            "opacity",
                            27421,
                            927,
                            "linear",
                            "${circle16cropped123}",
                            '1',
                            '0'
                        ],
                        [
                            "eid425",
                            "opacity",
                            49517,
                            1038,
                            "linear",
                            "${circle16cropped123}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid714",
                            "opacity",
                            54552,
                            266,
                            "linear",
                            "${circle16cropped123}",
                            '1',
                            '0'
                        ],
                        [
                            "eid450",
                            "opacity",
                            54540,
                            486,
                            "linear",
                            "${Text19}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid577",
                            "opacity",
                            76100,
                            88,
                            "linear",
                            "${Text19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid523",
                            "left",
                            76096,
                            0,
                            "linear",
                            "${Text25}",
                            '172px',
                            '172px'
                        ],
                        [
                            "eid677",
                            "opacity",
                            76079,
                            1079,
                            "linear",
                            "${grayfoursquared2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid471",
                            "opacity",
                            71968,
                            975,
                            "linear",
                            "${Text20Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid580",
                            "opacity",
                            76100,
                            88,
                            "linear",
                            "${Text20Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid650",
                            "top",
                            77839,
                            478,
                            "linear",
                            "${Text21Copy}",
                            '364px',
                            '281px'
                        ],
                        [
                            "eid649",
                            "left",
                            77839,
                            478,
                            "linear",
                            "${Text21Copy}",
                            '393px',
                            '315px'
                        ],
                        [
                            "eid587",
                            "left",
                            76091,
                            0,
                            "linear",
                            "${Text13}",
                            '325px',
                            '325px'
                        ],
                        [
                            "eid513",
                            "opacity",
                            76091,
                            1013,
                            "linear",
                            "${Text20Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid528",
                            "left",
                            76096,
                            0,
                            "linear",
                            "${Text20Copy3}",
                            '290px',
                            '290px'
                        ],
                        [
                            "eid426",
                            "top",
                            49517,
                            0,
                            "linear",
                            "${circle16cropped123}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid336",
                            "opacity",
                            31887,
                            911,
                            "linear",
                            "${Text13}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid368",
                            "opacity",
                            40964,
                            735,
                            "linear",
                            "${Text13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid543",
                            "top",
                            76095,
                            1004,
                            "linear",
                            "${Text20Copy5}",
                            '317px',
                            '394px'
                        ],
                        [
                            "eid515",
                            "opacity",
                            76091,
                            1013,
                            "linear",
                            "${Text20Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid540",
                            "top",
                            76096,
                            1013,
                            "linear",
                            "${Text20Copy4}",
                            '314px',
                            '391px'
                        ],
                        [
                            "eid619",
                            "left",
                            76099,
                            1036,
                            "linear",
                            "${Text18}",
                            '334px',
                            '336px'
                        ],
                        [
                            "eid685",
                            "opacity",
                            76079,
                            1062,
                            "linear",
                            "${gray16}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid413",
                            "color",
                            44010,
                            507,
                            "linear",
                            "${Text12}",
                            'rgba(157,0,9,1)',
                            'rgba(85,75,76,1.00)'
                        ],
                        [
                            "eid469",
                            "opacity",
                            71968,
                            975,
                            "linear",
                            "${Text24}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid581",
                            "opacity",
                            76100,
                            88,
                            "linear",
                            "${Text24}",
                            '1',
                            '0'
                        ],
                        [
                            "eid294",
                            "opacity",
                            30823,
                            991,
                            "linear",
                            "${Text10}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid347",
                            "opacity",
                            39816,
                            265,
                            "linear",
                            "${Text10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid414",
                            "color",
                            44010,
                            507,
                            "linear",
                            "${Text13}",
                            'rgba(157,0,9,1)',
                            'rgba(85,75,76,1.00)'
                        ],
                        [
                            "eid335",
                            "opacity",
                            31887,
                            911,
                            "linear",
                            "${Text12}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid281",
                            "opacity",
                            27385,
                            2000,
                            "linear",
                            "${Text7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid592",
                            "top",
                            76091,
                            0,
                            "linear",
                            "${Text14}",
                            '281px',
                            '281px'
                        ],
                        [
                            "eid700",
                            "opacity",
                            80040,
                            266,
                            "linear",
                            "${Text6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid355",
                            "opacity",
                            39816,
                            274,
                            "linear",
                            "${Text17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid629",
                            "opacity",
                            77104,
                            478,
                            "linear",
                            "${Text27}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid283",
                            "opacity",
                            27385,
                            2000,
                            "linear",
                            "${Text5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid608",
                            "top",
                            76091,
                            1035,
                            "linear",
                            "${Text21}",
                            '282px',
                            '364px'
                        ],
                        [
                            "eid645",
                            "opacity",
                            76928,
                            212,
                            "linear",
                            "${Text20Copy8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid411",
                            "color",
                            44010,
                            507,
                            "linear",
                            "${Text17}",
                            'rgba(157,0,9,1)',
                            'rgba(85,75,76,1.00)'
                        ],
                        [
                            "eid388",
                            "opacity",
                            40635,
                            151,
                            "linear",
                            "${Text23}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid692",
                            "opacity",
                            76928,
                            195,
                            "linear",
                            "${redsixteen2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid511",
                            "opacity",
                            76091,
                            1004,
                            "linear",
                            "${Text24Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid204",
                            "opacity",
                            20985,
                            531,
                            "linear",
                            "${Rectangle3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid213",
                            "opacity",
                            22913,
                            542,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid638",
                            "opacity",
                            76945,
                            168,
                            "linear",
                            "${Text21Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid322",
                            "color",
                            30560,
                            274,
                            "linear",
                            "${Text7}",
                            'rgba(157,0,9,1)',
                            'rgba(86,79,79,1.00)'
                        ],
                        [
                            "eid688",
                            "top",
                            76070,
                            1044,
                            "linear",
                            "${gray16}",
                            '319px',
                            '395px'
                        ],
                        [
                            "eid371",
                            "left",
                            40800,
                            1021,
                            "linear",
                            "${Text16}",
                            '43px',
                            '320px'
                        ],
                        [
                            "eid609",
                            "left",
                            76091,
                            1035,
                            "linear",
                            "${Text16}",
                            '320px',
                            '322px'
                        ],
                        [
                            "eid526",
                            "left",
                            76096,
                            0,
                            "linear",
                            "${Text20Copy4}",
                            '335px',
                            '335px'
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
                            "eid616",
                            "top",
                            76091,
                            1035,
                            "linear",
                            "${Text12}",
                            '282px',
                            '364px'
                        ],
                        [
                            "eid593",
                            "top",
                            76091,
                            0,
                            "linear",
                            "${Text13}",
                            '281px',
                            '281px'
                        ],
                        [
                            "eid665",
                            "opacity",
                            72961,
                            1000,
                            "linear",
                            "${redsixteen}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid672",
                            "opacity",
                            76097,
                            97,
                            "linear",
                            "${redsixteen}",
                            '1',
                            '0'
                        ],
                        [
                            "eid538",
                            "top",
                            76095,
                            1004,
                            "linear",
                            "${Text24Copy4}",
                            '316px',
                            '393px'
                        ],
                        [
                            "eid542",
                            "top",
                            76096,
                            1013,
                            "linear",
                            "${Text20Copy3}",
                            '314px',
                            '391px'
                        ],
                        [
                            "eid369",
                            "left",
                            40800,
                            1003,
                            "linear",
                            "${Text17}",
                            '172px',
                            '351px'
                        ],
                        [
                            "eid611",
                            "left",
                            76091,
                            1035,
                            "linear",
                            "${Text17}",
                            '351px',
                            '353px'
                        ],
                        [
                            "eid541",
                            "top",
                            76096,
                            1022,
                            "linear",
                            "${Text25}",
                            '316px',
                            '393px'
                        ],
                        [
                            "eid518",
                            "opacity",
                            76091,
                            1022,
                            "linear",
                            "${Text24Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid681",
                            "left",
                            76088,
                            1017,
                            "linear",
                            "${grayfoursquared2}",
                            '349px',
                            '351px'
                        ],
                        [
                            "eid481",
                            "opacity",
                            72952,
                            1017,
                            "linear",
                            "${Text20Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid579",
                            "opacity",
                            76100,
                            88,
                            "linear",
                            "${Text20Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid321",
                            "color",
                            30560,
                            274,
                            "linear",
                            "${Text9}",
                            'rgba(157,0,9,1)',
                            'rgba(86,79,79,1.00)'
                        ],
                        [
                            "eid421",
                            "color",
                            44013,
                            504,
                            "linear",
                            "${Text9}",
                            'rgba(86,79,79,1)',
                            'rgba(157,0,9,1.00)'
                        ],
                        [
                            "eid438",
                            "color",
                            54535,
                            500,
                            "linear",
                            "${Text9}",
                            'rgba(157,0,9,1)',
                            'rgba(86,79,79,1.00)'
                        ],
                        [
                            "eid277",
                            "opacity",
                            27394,
                            2000,
                            "linear",
                            "${Text9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid704",
                            "opacity",
                            54541,
                            88,
                            "linear",
                            "${Text9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid696",
                            "top",
                            77840,
                            495,
                            "linear",
                            "${redsixteen2}",
                            '396px',
                            '283px'
                        ],
                        [
                            "eid337",
                            "opacity",
                            31887,
                            911,
                            "linear",
                            "${Text14}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid367",
                            "opacity",
                            40973,
                            708,
                            "linear",
                            "${Text14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid428",
                            "left",
                            49517,
                            1044,
                            "linear",
                            "${circle16cropped123}",
                            '61px',
                            '180px'
                        ],
                        [
                            "eid235",
                            "background-color",
                            21024,
                            509,
                            "linear",
                            "${Rectangle4}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,231,216,1.00)'
                        ],
                        [
                            "eid237",
                            "background-color",
                            22922,
                            523,
                            "linear",
                            "${Rectangle4}",
                            'rgba(0,231,216,1)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid527",
                            "left",
                            76095,
                            0,
                            "linear",
                            "${Text20Copy5}",
                            '410px',
                            '410px'
                        ],
                        [
                            "eid433",
                            "top",
                            49517,
                            0,
                            "linear",
                            "${circle16cropped123Copy}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid695",
                            "left",
                            77840,
                            495,
                            "linear",
                            "${redsixteen2}",
                            '385px',
                            '480px'
                        ],
                        [
                            "eid319",
                            "color",
                            30560,
                            274,
                            "linear",
                            "${Text8}",
                            'rgba(157,0,9,1)',
                            'rgba(86,79,79,1.00)'
                        ],
                        [
                            "eid292",
                            "opacity",
                            30823,
                            991,
                            "linear",
                            "${Text11}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid348",
                            "opacity",
                            39816,
                            265,
                            "linear",
                            "${Text11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid545",
                            "top",
                            76096,
                            1022,
                            "linear",
                            "${Text24Copy3}",
                            '316px',
                            '393px'
                        ],
                        [
                            "eid462",
                            "opacity",
                            66595,
                            548,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid320",
                            "color",
                            30560,
                            274,
                            "linear",
                            "${Text5}",
                            'rgba(157,0,9,1)',
                            'rgba(86,79,79,1.00)'
                        ],
                        [
                            "eid607",
                            "left",
                            76091,
                            1035,
                            "linear",
                            "${Text21}",
                            '377px',
                            '379px'
                        ],
                        [
                            "eid412",
                            "color",
                            44010,
                            507,
                            "linear",
                            "${Text14}",
                            'rgba(157,0,9,1)',
                            'rgba(85,75,76,1.00)'
                        ],
                        [
                            "eid482",
                            "opacity",
                            72952,
                            1017,
                            "linear",
                            "${Text24Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid582",
                            "opacity",
                            76100,
                            88,
                            "linear",
                            "${Text24Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid516",
                            "opacity",
                            76091,
                            1004,
                            "linear",
                            "${Text20Copy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid434",
                            "left",
                            49517,
                            1044,
                            "linear",
                            "${circle16cropped123Copy}",
                            '244px',
                            '126px'
                        ],
                        [
                            "eid524",
                            "left",
                            76095,
                            0,
                            "linear",
                            "${Text24Copy4}",
                            '370px',
                            '370px'
                        ],
                        [
                            "eid525",
                            "left",
                            76096,
                            0,
                            "linear",
                            "${Text24Copy3}",
                            '321px',
                            '321px'
                        ],
                        [
                            "eid410",
                            "color",
                            44010,
                            507,
                            "linear",
                            "${Text16}",
                            'rgba(157,0,9,1)',
                            'rgba(85,75,76,1.00)'
                        ],
                        [
                            "eid409",
                            "color",
                            44010,
                            507,
                            "linear",
                            "${Text21}",
                            'rgba(157,0,9,1)',
                            'rgba(85,75,76,1.00)'
                        ],
                        [
                            "eid449",
                            "opacity",
                            54540,
                            486,
                            "linear",
                            "${radiussquared2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid575",
                            "opacity",
                            76100,
                            88,
                            "linear",
                            "${radiussquared2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid628",
                            "opacity",
                            77104,
                            478,
                            "linear",
                            "${Text26}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid356",
                            "opacity",
                            39816,
                            274,
                            "linear",
                            "${Text16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid338",
                            "opacity",
                            31887,
                            911,
                            "linear",
                            "${Text15}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid366",
                            "opacity",
                            40982,
                            681,
                            "linear",
                            "${Text15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid448",
                            "opacity",
                            54540,
                            486,
                            "linear",
                            "${Text20}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid574",
                            "opacity",
                            76100,
                            88,
                            "linear",
                            "${Text20}",
                            '1',
                            '0'
                        ],
                        [
                            "eid370",
                            "top",
                            40800,
                            1003,
                            "linear",
                            "${Text17}",
                            '139px',
                            '282px'
                        ],
                        [
                            "eid612",
                            "top",
                            76091,
                            1035,
                            "linear",
                            "${Text17}",
                            '282px',
                            '364px'
                        ],
                        [
                            "eid586",
                            "left",
                            76091,
                            0,
                            "linear",
                            "${Text14}",
                            '339px',
                            '339px'
                        ],
                        [
                            "eid211",
                            "opacity",
                            20986,
                            550,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid212",
                            "opacity",
                            22916,
                            531,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid191",
                            "opacity",
                            23925,
                            2026,
                            "linear",
                            "${circle16cropped123Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid249",
                            "opacity",
                            27420,
                            928,
                            "linear",
                            "${circle16cropped123Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid431",
                            "opacity",
                            49517,
                            1038,
                            "linear",
                            "${circle16cropped123Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid713",
                            "opacity",
                            54552,
                            266,
                            "linear",
                            "${circle16cropped123Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid708",
                            "opacity",
                            54532,
                            97,
                            "linear",
                            "${Text29}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid661",
                            "opacity",
                            71961,
                            982,
                            "linear",
                            "${redfoursquared3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid669",
                            "opacity",
                            76093,
                            92,
                            "linear",
                            "${redfoursquared3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid372",
                            "top",
                            40800,
                            1021,
                            "linear",
                            "${Text16}",
                            '70px',
                            '282px'
                        ],
                        [
                            "eid610",
                            "top",
                            76091,
                            1035,
                            "linear",
                            "${Text16}",
                            '282px',
                            '364px'
                        ],
                        [
                            "eid514",
                            "opacity",
                            76091,
                            1022,
                            "linear",
                            "${Text25}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid657",
                            "top",
                            77848,
                            477,
                            "linear",
                            "${Text20Copy8}",
                            '394px',
                            '281px'
                        ],
                        [
                            "eid380",
                            "opacity",
                            41936,
                            363,
                            "linear",
                            "${Text21}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid658",
                            "left",
                            77848,
                            477,
                            "linear",
                            "${Text20Copy8}",
                            '410px',
                            '507px'
                        ],
                        [
                            "eid539",
                            "top",
                            76096,
                            1022,
                            "linear",
                            "${grayrsquared}",
                            '314px',
                            '391px'
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
                            "eid615",
                            "left",
                            76091,
                            1035,
                            "linear",
                            "${Text12}",
                            '172px',
                            '174px'
                        ],
                        [
                            "eid279",
                            "opacity",
                            27394,
                            1982,
                            "linear",
                            "${Text8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid522",
                            "left",
                            76096,
                            0,
                            "linear",
                            "${grayrsquared}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid376",
                            "opacity",
                            41317,
                            495,
                            "linear",
                            "${Text18}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid715", "trigger", 3013, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question}', [] ] ],
                            [ "eid716", "trigger", 16881, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1a}', [] ] ],
                            [ "eid717", "trigger", 22952, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1b}', [] ] ],
                            [ "eid718", "trigger", 31037, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2}', [] ] ],
                            [ "eid719", "trigger", 37014.270594537, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint3}', [] ] ],
                            [ "eid720", "trigger", 44039, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint4}', [] ] ],
                            [ "eid721", "trigger", 54557, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint5}', [] ] ],
                            [ "eid722", "trigger", 63566, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint6}', [] ] ],
                            [ "eid723", "trigger", 68975, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint7}', [] ] ],
                            [ "eid724", "trigger", 80055, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${answer}', [] ] ]
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
                            },
                            {
                                rect: [-8, -3, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                            },
                            {
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                type: 'image',
                                display: 'none',
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
                            id: 'E_Button',
                            type: 'group',
                            rect: ['0', '0', '25', '24', 'auto', 'auto'],
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
                                rect: ['0', '4', '27', '20px', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                                id: 'Text8',
                                text: 'E',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['-8', '-3', '42', '33', 'auto', 'auto'],
                                id: 'x',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                            },
                            {
                                rect: ['-8', '-16', '65', '42', 'auto', 'auto'],
                                id: 'check',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '101', '26']
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
                            },
                            {
                                rect: [-8, -3, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                            },
                            {
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                type: 'image',
                                display: 'none',
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
                            id: 'D_Button',
                            type: 'group',
                            rect: ['0', '0', '25', '24', 'auto', 'auto'],
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
                                rect: ['0', '4', '27', '20px', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                                id: 'Text7',
                                text: 'D<br>',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['-8', '-4', '42', '33', 'auto', 'auto'],
                                id: 'x',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                            },
                            {
                                rect: ['-8', '-16', '65', '42', 'auto', 'auto'],
                                id: 'check',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '101', '26']
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
                            },
                            {
                                rect: [-8, -4, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                            },
                            {
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                type: 'image',
                                display: 'none',
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
                            },
                            {
                                rect: [-8, -4, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'x.png', '0px', '0px']
                            },
                            {
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                type: 'image',
                                display: 'none',
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
                            id: 'C_Button',
                            type: 'group',
                            rect: ['0', '0', '25', '24', 'auto', 'auto'],
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
                                rect: ['0', '4', '27', '20px', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                                id: 'Text5',
                                text: 'C',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['-8', '-4', '42', '33', 'auto', 'auto'],
                                id: 'x',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                            },
                            {
                                rect: ['-8', '-16', '65', '42', 'auto', 'auto'],
                                id: 'check',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '101', '26']
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
                            id: 'B_Button',
                            type: 'group',
                            rect: ['0', '0', '25', '25', 'auto', 'auto'],
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
                                rect: ['0', '5', '27', '19', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                                id: 'Text4',
                                text: 'B',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['-8', '-4', '42', '33', 'auto', 'auto'],
                                id: 'x',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                            },
                            {
                                rect: ['-8', '-16', '65', '42', 'auto', 'auto'],
                                id: 'check',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '125', '26']
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
                            id: 'A_Button',
                            type: 'group',
                            rect: ['8', '16', '25', '24', 'auto', 'auto'],
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
                                rect: ['0', '3', '27', '19', 'auto', 'auto'],
                                font: ['Georgia, \'Times New Roman\', Times, serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', ''],
                                id: 'A',
                                text: 'A<br><br><br>',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['-8', '-16', '65', '42', 'auto', 'auto'],
                                id: 'check',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            },
                            {
                                rect: ['-8', '-4', '42', '33', 'auto', 'auto'],
                                id: 'x',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '153', '42']
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
                            },
                            {
                                rect: [-8, -16, 65, 42, 'auto', 'auto'],
                                id: 'check',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'check.png', '0px', '0px']
                            },
                            {
                                rect: [-8, -4, 42, 33, 'auto', 'auto'],
                                id: 'x',
                                type: 'image',
                                display: 'none',
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
                            id: 'Group',
                            type: 'group',
                            rect: ['0', '0', '153', '183', 'auto', 'auto'],
                            c: [
                            {
                                id: 'EButton',
                                symbolName: 'EButton_3',
                                rect: ['8', '157', '101', '26', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'DButton',
                                symbolName: 'DButton_3',
                                rect: ['8', '121', '101', '26', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'CButton',
                                symbolName: 'CButton_3',
                                rect: ['8', '86', '101', '26', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'BButton',
                                symbolName: 'BButton_3',
                                rect: ['8', '50', '125', '26', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'AButton',
                                symbolName: 'AButton_3',
                                rect: ['0', '0', '153', '42', 'auto', 'auto'],
                                type: 'rect'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '156', '187']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("problem_205_edgeActions.js");
})("EdgeProblem");
