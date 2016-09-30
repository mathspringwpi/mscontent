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
                            rect: ['24', '11px', '298', '64px', 'auto', 'auto'],
                            text: "The average mass of an adult human is about 62 kilograms. The average mass of an ant is about 4",
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
                            id: 'AnswerDText',
                            type: 'text',
                            rect: ['71', '511', '207px', '24px', 'auto', 'auto'],
                            text: "ants hundreds of times more than humans",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerCText',
                            type: 'text',
                            rect: ['71', '475', '207px', '23px', 'auto', 'auto'],
                            text: "humans hundreds of times more than ants",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerBText',
                            type: 'text',
                            rect: ['71', '443', '207px', '23px', 'auto', 'auto'],
                            text: "ants 10 times more than humans",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerAText',
                            type: 'text',
                            rect: ['71', '408', '224px', '23px', 'auto', 'auto'],
                            text: "humans 10 times more than ants",
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
                            rect: ['71', '549', '207px', '24px', 'auto', 'auto'],
                            text: "humans a little more than ants",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'InstructionsText',
                            type: 'text',
                            rect: ['24px', '68px', '298px', '110px', 'auto', 'auto'],
                            text: "approximately 7.4 billion humans in the world, and about 10,000 trillion ants. How does the total mass of all living humans compare to the total mass of all living ants?",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumber',
                            display: 'none',
                            type: 'text',
                            rect: ['278px', '195px', '313px', '105px', 'auto', 'auto'],
                            text: "(mass of one human) x (number of humans)<br><br>compared to<br><br>(mass of one ant) x (total number of ants)<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextBlueNumber',
                            display: 'none',
                            type: 'text',
                            rect: ['337px', '343px', '233px', '45px', 'auto', 'auto'],
                            text: "It will help to convert all masses to grams. <br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextBlue',
                            display: 'none',
                            type: 'text',
                            rect: ['368px', '68px', '201px', '64px', 'auto', 'auto'],
                            text: "We want to compare the total mass of humans to the total mass of ants: <br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['147px', '52px', 'auto', 'auto', 'auto', 'auto'],
                            text: "x",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['157px', '50px', 'auto', 'auto', 'auto', 'auto'],
                            text: "10",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['176px', '49px', 'auto', 'auto', 'auto', 'auto'],
                            text: "- 3",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [12, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['196px', '49px', 'auto', 'auto', 'auto', 'auto'],
                            text: "grams. There are",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [16, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
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
                            id: 'Question_TextBlueNumberCopy',
                            display: 'none',
                            type: 'text',
                            rect: ['337px', '403px', '233px', '95px', 'auto', 'auto'],
                            text: "It will help to express all numbers in this problem in scientific notation. (The mass of the ant is shown above in scientific notation.)<br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1.00)", "normal", "none", "normal", "break-word", ""]
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
                            id: 'Question_TextBlueCopy2',
                            display: 'none',
                            type: 'text',
                            rect: ['360px', '11px', '201px', '32px', 'auto', 'auto'],
                            text: "It will help to remember: <br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy',
                            display: 'none',
                            type: 'text',
                            rect: ['410px', '549px', '189px', '27px', 'auto', 'auto'],
                            text: "(total number of ants)<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy2',
                            display: 'none',
                            type: 'text',
                            rect: ['379px', '59px', '130px', '19px', 'auto', 'auto'],
                            text: "1 kilogram = 10",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy3',
                            display: 'none',
                            type: 'text',
                            rect: ['500px', '59px', '65px', '19px', 'auto', 'auto'],
                            text: "grams",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy4',
                            display: 'none',
                            type: 'text',
                            rect: ['471px', '54px', '65px', '19px', 'auto', 'auto'],
                            text: "3",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy5',
                            display: 'none',
                            type: 'text',
                            rect: ['370px', '194px', '130px', '19px', 'auto', 'auto'],
                            text: "1 billion = 10",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy6',
                            display: 'none',
                            type: 'text',
                            rect: ['462px', '188px', '47px', '19px', 'auto', 'auto'],
                            text: "9",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy10',
                            display: 'none',
                            type: 'text',
                            rect: ['375px', '223px', '121px', '19px', 'auto', 'auto'],
                            text: "1 trillion = 10",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy9',
                            display: 'none',
                            type: 'text',
                            rect: ['462px', '217px', '55px', '19px', 'auto', 'auto'],
                            text: "12",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy11',
                            display: 'none',
                            type: 'text',
                            rect: ['333px', '278px', '230px', '17px', 'auto', 'auto'],
                            text: "7.4 billion = 7.4 x  10",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy12',
                            display: 'none',
                            type: 'text',
                            rect: ['501px', '273px', '47px', '19px', 'auto', 'auto'],
                            text: "9",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextBlueCopy3',
                            display: 'none',
                            type: 'text',
                            rect: ['360px', '107px', '201px', '41px', 'auto', 'auto'],
                            text: "Convert the average mass of humans to grams.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextBlueCopy4',
                            display: 'none',
                            type: 'text',
                            rect: ['360px', '334px', '201px', '41px', 'auto', 'auto'],
                            text: "Write the number of ants in scientific notation.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextBlueCopy5',
                            display: 'none',
                            type: 'text',
                            rect: ['385px', '428px', '122px', '30px', 'auto', 'auto'],
                            text: "Now compare",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy13',
                            display: 'none',
                            type: 'text',
                            rect: ['267px', '475px', '166px', '27px', 'auto', 'auto'],
                            text: "(mass of one human) ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'Question_TextBlueCopy6',
                            display: 'none',
                            type: 'text',
                            rect: ['428px', '513px', '32px', '30px', 'auto', 'auto'],
                            text: "to",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy15',
                            display: 'none',
                            type: 'text',
                            rect: ['268px', '549px', '189px', '27px', 'auto', 'auto'],
                            text: "(mass of one ant)<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy16',
                            display: 'none',
                            type: 'text',
                            rect: ['414px', '549px', '26px', '27px', 'auto', 'auto'],
                            text: "x",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy17',
                            display: 'none',
                            type: 'text',
                            rect: ['413px', '475px', '26px', '27px', 'auto', 'auto'],
                            text: "x",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
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
                            id: 'Question_TextRedNumberCopy7',
                            display: 'none',
                            type: 'text',
                            rect: ['431px', '475px', '166px', '27px', 'auto', 'auto'],
                            text: "(total number of humans) ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'Hint3Text1',
                            display: 'none',
                            type: 'text',
                            rect: ['363px', '17px', '218px', '32px', 'auto', 'auto'],
                            text: "Average mass of one human:",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'CodeCogsEqn_1',
                            display: 'none',
                            type: 'image',
                            rect: ['328px', '57px', '223px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_1.svg",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_2',
                            display: 'none',
                            type: 'image',
                            rect: ['444px', '103px', '150px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_2.svg",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_3',
                            display: 'none',
                            type: 'image',
                            rect: ['444px', '148px', '128px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_3.svg",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_4',
                            display: 'none',
                            type: 'image',
                            rect: ['444px', '182px', '121px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_4.svg",'0px','0px']
                        },
                        {
                            id: 'Hint3Text2',
                            display: 'none',
                            type: 'text',
                            rect: ['363px', '230px', '218px', '32px', 'auto', 'auto'],
                            text: "Approximate number of humans:",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint3Text3',
                            display: 'none',
                            type: 'text',
                            rect: ['331px', '284px', '133px', '22px', 'auto', 'auto'],
                            text: "7.4 billion",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'CodeCogsEqn_5',
                            display: 'none',
                            type: 'image',
                            rect: ['443px', '280px', '105px', '21px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_5.svg",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_12',
                            display: 'none',
                            type: 'image',
                            rect: ['436px', '271px', '59px', '19px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_12.svg",'0px','0px']
                        },
                        {
                            id: 'Question_TextRedNumberCopy18',
                            display: 'none',
                            type: 'text',
                            rect: ['267px', '325px', '166px', '27px', 'auto', 'auto'],
                            text: "(mass of one human) ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy14',
                            display: 'none',
                            type: 'text',
                            rect: ['413px', '325px', '26px', '27px', 'auto', 'auto'],
                            text: "x",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Question_TextRedNumberCopy8',
                            display: 'none',
                            type: 'text',
                            rect: ['431px', '325px', '166px', '27px', 'auto', 'auto'],
                            text: "(total number of humans) ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'CodeCogsEqn_4a',
                            display: 'none',
                            type: 'image',
                            rect: ['468px', '188px', '97px', '24px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_4a.svg",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_5a',
                            display: 'none',
                            type: 'image',
                            rect: ['465px', '280px', '83px', '21px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_5a.svg",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_6',
                            display: 'none',
                            type: 'image',
                            rect: ['460px', '398px', '102px', '25px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_6.svg",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_14',
                            display: 'none',
                            type: 'image',
                            rect: ['441px', '399px', '121px', '25px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_14.svg",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_7',
                            display: 'none',
                            type: 'image',
                            rect: ['328px', '400px', '120px', '22px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_7.svg",'0px','0px']
                        },
                        {
                            id: 'Parentheses1',
                            display: 'none',
                            type: 'text',
                            rect: ['267px', '358px', '33px', '28px', 'auto', 'auto'],
                            text: "(",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Parentheses1Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['420px', '358px', '33px', '28px', 'auto', 'auto'],
                            text: "(",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Parentheses1Copy2',
                            display: 'none',
                            type: 'text',
                            rect: ['400px', '358px', '33px', '28px', 'auto', 'auto'],
                            text: ")",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Parentheses1Copy3',
                            display: 'none',
                            type: 'text',
                            rect: ['571px', '358px', '33px', '28px', 'auto', 'auto'],
                            text: ")",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint3TextGrams',
                            display: 'none',
                            type: 'text',
                            rect: ['565px', '397px', '33px', '28px', 'auto', 'auto'],
                            text: "g",
                            align: "center",
                            font: ['Georgia, Times New Roman, Times, serif', [20, "px"], "rgba(157,0,9,1.00)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'Hint3Text4',
                            display: 'none',
                            type: 'text',
                            rect: ['335px', '455px', '218px', '80px', 'auto', 'auto'],
                            text: "This is our estimate for the total mass of all humans.<br><br>Can you do the multiplication?",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
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
                            id: 'hint4',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint4.mp3",aud+"hint4.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'Hint4Text1',
                            display: 'none',
                            type: 'text',
                            rect: ['363px', '17px', '218px', '32px', 'auto', 'auto'],
                            text: "Average mass of one ant:",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint4Text2Copy3',
                            display: 'none',
                            type: 'text',
                            rect: ['363px', '124px', '218px', '32px', 'auto', 'auto'],
                            text: "Approximate number of ants:",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hint3Text3Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['318px', '170px', '133px', '22px', 'auto', 'auto'],
                            text: "10,000 trillion",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(157,0,9,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'CodeCogsEqn_10',
                            display: 'none',
                            type: 'image',
                            rect: ['437', '205px', '125px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_10.svg",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_11',
                            display: 'none',
                            type: 'image',
                            rect: ['437px', '240px', '80px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_11.svg",'0px','0px']
                        },
                        {
                            id: 'HInt4_TextRedNumberCopy19',
                            display: 'none',
                            type: 'text',
                            rect: ['275px', '325px', '146px', '27px', 'auto', 'auto'],
                            text: "(mass of one ant) ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'Hint4_TextRedNumberCopy20',
                            display: 'none',
                            type: 'text',
                            rect: ['431px', '325px', '166px', '27px', 'auto', 'auto'],
                            text: "(total number of ants) ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(157,0,9,1.00)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'CodeCogsEqn_13',
                            display: 'none',
                            type: 'image',
                            rect: ['363', '401px', '66px', '22px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_13.svg",'0px','0px']
                        },
                        {
                            id: 'Hint4Text4Copy22',
                            display: 'none',
                            type: 'text',
                            rect: ['335px', '455px', '218px', '118px', 'auto', 'auto'],
                            text: "This is our estimate for the total mass of all ants.<br><br>Do you remember how to combine positive and negative exponents?",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'CodeCogsEqn_8',
                            display: 'none',
                            type: 'image',
                            rect: ['412px', '60', '90px', '23px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_8.svg",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_8Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['412px', '60', '90px', '23px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_8.svg",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_12Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['479px', '271px', '59px', '19px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_12.svg",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_9',
                            display: 'none',
                            type: 'image',
                            rect: ['438px', '169px', '152px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_9.svg",'0px','0px']
                        },
                        {
                            id: 'Hint5Text1',
                            display: 'none',
                            type: 'text',
                            rect: ['363px', '204px', '218px', '32px', 'auto', 'auto'],
                            text: "Humans:",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'CodeCogsEqn_15',
                            display: 'none',
                            type: 'image',
                            rect: ['340px', '90px', '176px', '25px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_15.svg",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_16',
                            display: 'none',
                            type: 'image',
                            rect: ['393px', '132px', '151px', '25px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_16.svg",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_17',
                            display: 'none',
                            type: 'image',
                            rect: ['394px', '177px', '198px', '25px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_17.svg",'0px','0px']
                        },
                        {
                            id: 'Hint5Text3',
                            display: 'none',
                            type: 'text',
                            rect: ['363px', '302px', '218px', '32px', 'auto', 'auto'],
                            text: "Ants:",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'CodeCogsEqn_18',
                            display: 'none',
                            type: 'image',
                            rect: ['340', '322px', '147px', '25px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_18.svg",'0px','0px']
                        },
                        {
                            id: 'CodeCogsEqn_19',
                            display: 'none',
                            type: 'image',
                            rect: ['393px', '401px', '136px', '25px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_19.svg",'0px','0px']
                        },
                        {
                            id: 'Hint5Text4',
                            display: 'none',
                            type: 'text',
                            rect: ['340px', '477px', '241px', '79px', 'auto', 'auto'],
                            opacity: '1',
                            text: "Can you simplify the expressions for ants and humans? <br><br>Then you can compare their total masses.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'AnswerText3',
                            type: 'text',
                            rect: ['317px', '435px', '270px', '69px', 'auto', 'auto'],
                            opacity: '0',
                            text: "The total mass of humans is approximately 10 times the total mass of ants.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'CodeCogsEqn_22',
                            display: 'none',
                            type: 'image',
                            rect: ['393', '215px', '144px', '25px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_22.svg",'0px','0px']
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
                            id: 'CodeCogsEqn_20',
                            display: 'none',
                            type: 'image',
                            rect: ['392px', '240px', '124px', '28px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_20.svg",'0px','0px']
                        },
                        {
                            id: 'hint6',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"hint6.mp3",aud+"hint6.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'CodeCogsEqn_21',
                            display: 'none',
                            type: 'image',
                            rect: ['392px', '335px', '124px', '28px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CodeCogsEqn_21.svg",'0px','0px']
                        },
                        {
                            id: 'Hint6Text3',
                            type: 'text',
                            rect: ['363px', '548px', '218px', '32px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Who has more total mass?",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
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
                            id: 'AnswerText4',
                            display: 'none',
                            type: 'text',
                            rect: ['380px', '524px', '135px', '37px', 'auto', 'auto'],
                            opacity: '1',
                            text: "The answer is a.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,82,203,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'human_ant',
                            type: 'image',
                            rect: ['100px', '195px', '114px', '176px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"human_ant.jpg",'0px','0px']
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
                    duration: 420750,
                    autoPlay: true,
                    labels: {
                        "Read Question": 2000,
                        "Hint 1": 35750,
                        "Hint 2": 74500,
                        "Hint 3": 122500,
                        "Hint 4": 199000,
                        "Hint 5": 290053,
                        "Hint 6": 369040,
                        "Answer Hint": 403250
                    },
                    data: [
                        [
                            "eid673",
                            "display",
                            196250,
                            0,
                            "linear",
                            "${Hint3Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid729",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${Hint3Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid607",
                            "display",
                            152500,
                            0,
                            "linear",
                            "${CodeCogsEqn_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid686",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${CodeCogsEqn_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid738",
                            "display",
                            259436,
                            0,
                            "linear",
                            "${CodeCogsEqn_12Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid760",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${CodeCogsEqn_12Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid565",
                            "display",
                            114320,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid631",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid740",
                            "left",
                            261200,
                            1300,
                            "linear",
                            "${CodeCogsEqn_12Copy}",
                            '436px',
                            '479px'
                        ],
                        [
                            "eid559",
                            "display",
                            95453,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid592",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid676",
                            "top",
                            180061,
                            1189,
                            "linear",
                            "${CodeCogsEqn_4a}",
                            '188px',
                            '358px'
                        ],
                        [
                            "eid677",
                            "top",
                            181250,
                            0,
                            "linear",
                            "${CodeCogsEqn_4a}",
                            '358px',
                            '358px'
                        ],
                        [
                            "eid680",
                            "display",
                            160975,
                            0,
                            "linear",
                            "${CodeCogsEqn_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid691",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${CodeCogsEqn_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid678",
                            "display",
                            176000,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid705",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid706",
                            "display",
                            247161,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid757",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid816",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${CodeCogsEqn_15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid596",
                            "display",
                            125416,
                            0,
                            "linear",
                            "${Hint3Text1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid683",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${Hint3Text1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid664",
                            "display",
                            177000,
                            0,
                            "linear",
                            "${Parentheses1Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid715",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${Parentheses1Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid716",
                            "display",
                            251667,
                            0,
                            "linear",
                            "${Parentheses1Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid761",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${Parentheses1Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid739",
                            "top",
                            261200,
                            1300,
                            "linear",
                            "${CodeCogsEqn_12Copy}",
                            '271px',
                            '358px'
                        ],
                        [
                            "eid718",
                            "display",
                            264981,
                            0,
                            "linear",
                            "${CodeCogsEqn_13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid764",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${CodeCogsEqn_13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid850",
                            "opacity",
                            398795,
                            955,
                            "linear",
                            "${CodeCogsEqn_17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid692",
                            "display",
                            215000,
                            0,
                            "linear",
                            "${Hint3Text3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid751",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${Hint3Text3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid688",
                            "display",
                            212000,
                            0,
                            "linear",
                            "${Hint4Text2Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid750",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${Hint4Text2Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid720",
                            "display",
                            267951,
                            0,
                            "linear",
                            "${CodeCogsEqn_14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid765",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${CodeCogsEqn_14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid877",
                            "display",
                            418029,
                            0,
                            "linear",
                            "${AnswerText4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid569",
                            "display",
                            119000,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid651",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid853",
                            "display",
                            394500,
                            0,
                            "linear",
                            "${CodeCogsEqn_21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid242",
                            "display",
                            62000,
                            0,
                            "linear",
                            "${Question_TextBlueNumberCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid272",
                            "display",
                            74500,
                            0,
                            "linear",
                            "${Question_TextBlueNumberCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid567",
                            "display",
                            119000,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid649",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid247",
                            "display",
                            74500,
                            0,
                            "linear",
                            "${Question_TextBlueCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid598",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextBlueCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid817",
                            "display",
                            309000,
                            0,
                            "linear",
                            "${CodeCogsEqn_16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid727",
                            "display",
                            238721,
                            0,
                            "linear",
                            "${CodeCogsEqn_12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid755",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${CodeCogsEqn_12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid857",
                            "opacity",
                            400250,
                            500,
                            "linear",
                            "${Hint6Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid859",
                            "opacity",
                            403750,
                            1000,
                            "linear",
                            "${Hint6Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid239",
                            "display",
                            35750,
                            0,
                            "linear",
                            "${Question_TextBlue}",
                            'none',
                            'block'
                        ],
                        [
                            "eid250",
                            "display",
                            74500,
                            0,
                            "linear",
                            "${Question_TextBlue}",
                            'block',
                            'none'
                        ],
                        [
                            "eid284",
                            "display",
                            74500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid585",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid726",
                            "display",
                            235264,
                            0,
                            "linear",
                            "${CodeCogsEqn_11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid754",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${CodeCogsEqn_11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid558",
                            "display",
                            84418,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid591",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid275",
                            "display",
                            74500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid584",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid848",
                            "opacity",
                            398795,
                            955,
                            "linear",
                            "${CodeCogsEqn_19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid737",
                            "left",
                            257500,
                            1418,
                            "linear",
                            "${CodeCogsEqn_8Copy}",
                            '412px',
                            '306px'
                        ],
                        [
                            "eid604",
                            "display",
                            170000,
                            0,
                            "linear",
                            "${Hint3Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid695",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${Hint3Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid840",
                            "top",
                            385981,
                            1269,
                            "linear",
                            "${Hint5Text3}",
                            '280px',
                            '326px'
                        ],
                        [
                            "eid872",
                            "top",
                            404750,
                            1750,
                            "linear",
                            "${Hint5Text3}",
                            '326px',
                            '302px'
                        ],
                        [
                            "eid674",
                            "left",
                            180061,
                            1189,
                            "linear",
                            "${CodeCogsEqn_4a}",
                            '468px',
                            '303px'
                        ],
                        [
                            "eid675",
                            "left",
                            181250,
                            0,
                            "linear",
                            "${CodeCogsEqn_4a}",
                            '303px',
                            '303px'
                        ],
                        [
                            "eid633",
                            "display",
                            177682,
                            0,
                            "linear",
                            "${CodeCogsEqn_4a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid707",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${CodeCogsEqn_4a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid555",
                            "display",
                            84418,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid588",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid561",
                            "display",
                            105101,
                            0,
                            "linear",
                            "${Question_TextBlueCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid594",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextBlueCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid634",
                            "display",
                            181858,
                            0,
                            "linear",
                            "${CodeCogsEqn_5a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid708",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${CodeCogsEqn_5a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid838",
                            "top",
                            385981,
                            1269,
                            "linear",
                            "${CodeCogsEqn_18}",
                            '322px',
                            '368px'
                        ],
                        [
                            "eid560",
                            "display",
                            95453,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid593",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid867",
                            "top",
                            404750,
                            1750,
                            "linear",
                            "${CodeCogsEqn_20}",
                            '260px',
                            '240px'
                        ],
                        [
                            "eid834",
                            "opacity",
                            369040,
                            1460,
                            "linear",
                            "${Hint5Text4}",
                            '1',
                            '0'
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
                            "eid606",
                            "display",
                            158000,
                            0,
                            "linear",
                            "${CodeCogsEqn_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid687",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${CodeCogsEqn_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid240",
                            "display",
                            35750,
                            0,
                            "linear",
                            "${Question_TextRedNumber}",
                            'none',
                            'block'
                        ],
                        [
                            "eid270",
                            "display",
                            74500,
                            0,
                            "linear",
                            "${Question_TextRedNumber}",
                            'block',
                            'none'
                        ],
                        [
                            "eid845",
                            "opacity",
                            398795,
                            955,
                            "linear",
                            "${CodeCogsEqn_18}",
                            '1',
                            '0'
                        ],
                        [
                            "eid669",
                            "top",
                            183750,
                            800,
                            "linear",
                            "${CodeCogsEqn_5a}",
                            '280px',
                            '359px'
                        ],
                        [
                            "eid554",
                            "display",
                            74500,
                            0,
                            "linear",
                            "${Question_TextBlueCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid587",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextBlueCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid672",
                            "display",
                            193000,
                            0,
                            "linear",
                            "${Hint3TextGrams}",
                            'none',
                            'block'
                        ],
                        [
                            "eid721",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${Hint3TextGrams}",
                            'block',
                            'none'
                        ],
                        [
                            "eid741",
                            "display",
                            271948,
                            0,
                            "linear",
                            "${Hint3TextGrams}",
                            'none',
                            'block'
                        ],
                        [
                            "eid766",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${Hint3TextGrams}",
                            'block',
                            'none'
                        ],
                        [
                            "eid671",
                            "display",
                            191750,
                            0,
                            "linear",
                            "${CodeCogsEqn_6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid719",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${CodeCogsEqn_6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid742",
                            "display",
                            277186,
                            0,
                            "linear",
                            "${Hint4Text4Copy22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid767",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${Hint4Text4Copy22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid663",
                            "display",
                            177000,
                            0,
                            "linear",
                            "${Parentheses1Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid711",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${Parentheses1Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid712",
                            "display",
                            251667,
                            0,
                            "linear",
                            "${Parentheses1Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid768",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${Parentheses1Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid698",
                            "display",
                            247536,
                            0,
                            "linear",
                            "${Hint4_TextRedNumberCopy20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid758",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${Hint4_TextRedNumberCopy20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid568",
                            "display",
                            119667,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid650",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid818",
                            "display",
                            325750,
                            0,
                            "linear",
                            "${CodeCogsEqn_17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid665",
                            "display",
                            177000,
                            0,
                            "linear",
                            "${Parentheses1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid713",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${Parentheses1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid714",
                            "display",
                            251667,
                            0,
                            "linear",
                            "${Parentheses1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid762",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${Parentheses1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid661",
                            "display",
                            176000,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid699",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid556",
                            "display",
                            84418,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid590",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid562",
                            "display",
                            112231,
                            0,
                            "linear",
                            "${Question_TextBlueCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid595",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextBlueCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid819",
                            "display",
                            340013,
                            0,
                            "linear",
                            "${Hint5Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid670",
                            "display",
                            191000,
                            0,
                            "linear",
                            "${CodeCogsEqn_7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid717",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${CodeCogsEqn_7}",
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
                            "eid822",
                            "display",
                            366570,
                            0,
                            "linear",
                            "${Hint5Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid735",
                            "display",
                            255595,
                            0,
                            "linear",
                            "${CodeCogsEqn_8Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid759",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${CodeCogsEqn_8Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid839",
                            "top",
                            385981,
                            1269,
                            "linear",
                            "${CodeCogsEqn_19}",
                            '364px',
                            '410px'
                        ],
                        [
                            "eid852",
                            "top",
                            387250,
                            0,
                            "linear",
                            "${CodeCogsEqn_19}",
                            '410px',
                            '410px'
                        ],
                        [
                            "eid842",
                            "display",
                            386750,
                            0,
                            "linear",
                            "${CodeCogsEqn_20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid747",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${Hint5Text1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid682",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${Hint4Text1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid748",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${Hint4Text1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid602",
                            "display",
                            170000,
                            0,
                            "linear",
                            "${Hint3Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid690",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${Hint3Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid861",
                            "opacity",
                            411000,
                            1750,
                            "linear",
                            "${AnswerText3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid668",
                            "left",
                            183750,
                            800,
                            "linear",
                            "${CodeCogsEqn_5a}",
                            '465px',
                            '470px'
                        ],
                        [
                            "eid608",
                            "display",
                            136507,
                            0,
                            "linear",
                            "${CodeCogsEqn_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid685",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${CodeCogsEqn_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid736",
                            "top",
                            257500,
                            1418,
                            "linear",
                            "${CodeCogsEqn_8Copy}",
                            '60px',
                            '359px'
                        ],
                        [
                            "eid743",
                            "display",
                            220438,
                            0,
                            "linear",
                            "${CodeCogsEqn_9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid752",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${CodeCogsEqn_9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid733",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${CodeCogsEqn_8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid749",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${CodeCogsEqn_8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid837",
                            "display",
                            378000,
                            0,
                            "linear",
                            "${CodeCogsEqn_22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid576",
                            "display",
                            114320,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid630",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid557",
                            "display",
                            84418,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid589",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid868",
                            "top",
                            404750,
                            1750,
                            "linear",
                            "${CodeCogsEqn_21}",
                            '454px',
                            '335px'
                        ],
                        [
                            "eid681",
                            "display",
                            170000,
                            0,
                            "linear",
                            "${CodeCogsEqn_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid696",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${CodeCogsEqn_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid626",
                            "display",
                            176000,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid700",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid662",
                            "display",
                            177000,
                            0,
                            "linear",
                            "${Parentheses1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid709",
                            "display",
                            199000,
                            0,
                            "linear",
                            "${Parentheses1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid710",
                            "display",
                            251667,
                            0,
                            "linear",
                            "${Parentheses1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid763",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${Parentheses1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid241",
                            "display",
                            55459,
                            0,
                            "linear",
                            "${Question_TextBlueNumber}",
                            'none',
                            'block'
                        ],
                        [
                            "eid271",
                            "display",
                            74500,
                            0,
                            "linear",
                            "${Question_TextBlueNumber}",
                            'block',
                            'none'
                        ],
                        [
                            "eid820",
                            "display",
                            342643,
                            0,
                            "linear",
                            "${CodeCogsEqn_18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid566",
                            "display",
                            117216,
                            0,
                            "linear",
                            "${Question_TextBlueCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid648",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextBlueCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid280",
                            "display",
                            74500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid586",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid821",
                            "display",
                            356114,
                            0,
                            "linear",
                            "${CodeCogsEqn_19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid563",
                            "display",
                            114320,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid629",
                            "display",
                            122500,
                            0,
                            "linear",
                            "${Question_TextRedNumberCopy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid725",
                            "display",
                            229774,
                            0,
                            "linear",
                            "${CodeCogsEqn_10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid753",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${CodeCogsEqn_10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid847",
                            "opacity",
                            398795,
                            955,
                            "linear",
                            "${CodeCogsEqn_22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid846",
                            "opacity",
                            398795,
                            955,
                            "linear",
                            "${CodeCogsEqn_16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid849",
                            "opacity",
                            398795,
                            955,
                            "linear",
                            "${CodeCogsEqn_15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid871",
                            "top",
                            404750,
                            1750,
                            "linear",
                            "${Hint5Text1}",
                            '51px',
                            '204px'
                        ],
                        [
                            "eid697",
                            "display",
                            244709,
                            0,
                            "linear",
                            "${HInt4_TextRedNumberCopy19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid756",
                            "display",
                            290053,
                            0,
                            "linear",
                            "${HInt4_TextRedNumberCopy19}",
                            'block',
                            'none'
                        ],
                            [ "eid238", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${question}', [] ] ],
                            [ "eid244", "trigger", 35750, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint1}', [] ] ],
                            [ "eid526", "trigger", 74500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint2}', [] ] ],
                            [ "eid679", "trigger", 122500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint3}', [] ] ],
                            [ "eid684", "trigger", 199000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint4}', [] ] ],
                            [ "eid815", "trigger", 290053, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint5}', [] ] ],
                            [ "eid827", "trigger", 369040, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hint6}', [] ] ],
                            [ "eid858", "trigger", 403250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${answer}', [] ] ]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("8EE3_1_edgeActions.js");
})("EdgeProblem");
