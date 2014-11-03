/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Question_Text',
                type: 'text',
                rect: ['15px', '30px','547px','56px','auto', 'auto'],
                text: "Amy and Lia wrote their names in some of the squares on a grid, as shown below. Which number sentence shows the fraction of squares on the grid that have Amy's name or Lia's name in them?",
                align: "left",
                font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['20px', '250px','auto','auto','auto', 'auto']
            },
            {
                id: 'QuestionSound_Container',
                display: 'none',
                type: 'rect',
                rect: ['15px', '10px','17px','8px','auto', 'auto'],
                fill: ["rgba(248,250,248,0.00)"],
                stroke: [1,"rgb(4, 4, 4)","solid"]
            },
            {
                id: 'Sound_Container',
                display: 'none',
                type: 'rect',
                rect: ['46px', '19px','164px','7px','auto', 'auto'],
                fill: ["rgba(248,250,248,1)"],
                stroke: [1,"rgb(4, 4, 4)","solid"]
            },
            {
                id: 'AnimationSpace',
                type: 'group',
                rect: ['234', '42','290','202','auto', 'auto'],
                c: [
                {
                    id: 'AnimationSpace-DeleteMe',
                    type: 'rect',
                    rect: ['0px', '0px','290px','202px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0.00)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                }]
            },
            {
                id: 'TutorialText',
                display: 'none',
                type: 'text',
                rect: ['260px', '49px','237px','187px','auto', 'auto'],
                text: "Let's pretend your hint starts here at 0:10. It does not really matter where the hints start and end, as long as they don't overlap. Don't worry that the X and Checks are showing up either - it's just because I set their timeline to 5 seconds in the symbol. They won't appear in the final animation.<br><br>This rectangle is a space for you to draw your animation. An example will follow in hint 2.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'question',
                type: 'audio',
                tag: 'audio',
                rect: ['288', '154','320px','45px','auto', 'auto'],
                source: ['media/question.ogg','media/question.mp3']
            },
            {
                id: 'Amy1',
                type: 'rect',
                rect: ['40px', '101px','31px','21px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Amy2',
                type: 'rect',
                rect: ['40px', '101px','31px','21px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Amy3',
                type: 'rect',
                rect: ['40px', '101px','31px','21px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Amy4',
                type: 'rect',
                rect: ['40px', '101px','31px','21px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Amy4Copy',
                type: 'rect',
                rect: ['40px', '101px','31px','21px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Amy_Fraction',
                type: 'group',
                rect: ['265px', '180px','35','25','auto', 'auto'],
                c: [
                {
                    id: 'Amy_fraction',
                    type: 'rect',
                    rect: ['-159px', '-69px','31px','21px','auto', 'auto'],
                    fill: ["rgba(251,246,246,0)"],
                    stroke: [2,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'Amy_text_in_green',
                    type: 'text',
                    rect: ['1px', '2px','35px','19px','auto', 'auto'],
                    text: "Amy",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'Fraction',
                    type: 'group',
                    rect: ['80px', '21px','20','19','auto', 'auto'],
                    c: [
                    {
                        id: '_7',
                        type: 'text',
                        rect: ['5px', '-28px','28px','20px','auto', 'auto'],
                        text: "7",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_15',
                        type: 'text',
                        rect: ['0px', '0px','20px','19px','auto', 'auto'],
                        text: "15",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle',
                        type: 'rect',
                        rect: ['-6px', '-7px','26px','0px','auto', 'auto'],
                        fill: ["rgba(192,192,192,1)"],
                        stroke: [1,"rgba(0,72,193,1.00)","solid"]
                    }]
                },
                {
                    id: 'of_the_grid',
                    type: 'text',
                    rect: ['118px', '4px','101px','19px','auto', 'auto'],
                    text: "of the grid",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'equals',
                    type: 'text',
                    rect: ['45px', '2px','35px','20px','auto', 'auto'],
                    text: "=",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1.00)", "normal", "none", ""]
                }]
            },
            {
                id: 'Amy5',
                type: 'rect',
                rect: ['40px', '101px','31px','21px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Amy6',
                type: 'rect',
                rect: ['40px', '101px','31px','21px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Amy7',
                type: 'rect',
                rect: ['40px', '101px','31px','21px','auto', 'auto'],
                fill: ["rgba(251,246,246,0)"],
                stroke: [2,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Lia1',
                type: 'rect',
                rect: ['75px', '101px','31px','21px','auto', 'auto'],
                fill: ["rgba(247,182,182,1.00)"],
                stroke: [2,"rgba(0, 0, 0, 0)","solid"]
            },
            {
                id: 'Lia2',
                type: 'rect',
                rect: ['40px', '126px','31px','21px','auto', 'auto'],
                fill: ["rgba(247,182,182,1.00)"],
                stroke: [2,"rgba(0, 0, 0, 0)","solid"]
            },
            {
                id: 'Lia3',
                type: 'rect',
                rect: ['75px', '151px','31px','21px','auto', 'auto'],
                fill: ["rgba(247,182,182,1.00)"],
                stroke: [2,"rgba(0, 0, 0, 0)","solid"]
            },
            {
                id: 'problem2',
                type: 'image',
                rect: ['0px', '56px','286px','174px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"problem.png",'0px','0px']
            },
            {
                id: 'Hint_1a',
                type: 'text',
                rect: ['249px', '77px','270px','56px','auto', 'auto'],
                text: "How many squares are there in total?",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Hint_1b',
                type: 'text',
                rect: ['249px', '101px','270px','30px','auto', 'auto'],
                text: "There are 15 squares in total.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1)", "400", "none", "normal"]
            },
            {
                id: 'Hint_1c',
                type: 'text',
                rect: ['250px', '126px','226px','42px','auto', 'auto'],
                text: "How many squares are Amy's?",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1)", "400", "none", "normal"]
            },
            {
                id: 'Hint_1d',
                type: 'text',
                rect: ['250px', '153px','206px','30px','auto', 'auto'],
                text: "What is Amy's fraction ?",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1)", "400", "none", "normal"]
            },
            {
                id: 'Hint_2_text',
                type: 'text',
                rect: ['252px', '226px','294px','43px','auto', 'auto'],
                text: "How many squares are Lia's? <br>What is Lia's fraction ?",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1)", "400", "none", "normal"]
            },
            {
                id: 'Lia_Fraction',
                type: 'group',
                rect: ['383px', '279px','77','19','auto', 'auto'],
                c: [
                {
                    id: 'of_the_grid_Lia',
                    type: 'text',
                    rect: ['0px', '0px','77px','19px','auto', 'auto'],
                    text: "of the grid<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1)", "400", "none", "normal"]
                },
                {
                    id: 'Fraction_L',
                    type: 'group',
                    rect: ['-44px', '15px','20','20','auto', 'auto'],
                    c: [
                    {
                        id: '_15_lia',
                        type: 'text',
                        rect: ['0px', '0px','20px','20px','auto', 'auto'],
                        text: "15",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_3',
                        type: 'text',
                        rect: ['4px', '-25px','20px','19px','auto', 'auto'],
                        text: "3",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Rectangle3',
                        type: 'rect',
                        rect: ['-3px', '-7px','24px','0px','auto', 'auto'],
                        fill: ["rgba(0,72,193,1.00)"],
                        stroke: [1,"rgba(0, 0, 0, 0)","solid"]
                    }]
                },
                {
                    id: 'equals_Lia',
                    type: 'text',
                    rect: ['-78px', '-4px','28px','19px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Lia_in_pink',
                    type: 'group',
                    rect: ['-119px', '-5px','46','20','auto', 'auto'],
                    c: [
                    {
                        id: 'Lia_pink',
                        type: 'rect',
                        rect: ['-4px', '-3px','31px','21px','auto', 'auto'],
                        fill: ["rgba(247,182,182,1.00)"],
                        stroke: [2,"rgba(0, 0, 0, 0)","solid"]
                    },
                    {
                        id: 'Lia_text',
                        type: 'text',
                        rect: ['0px', '0px','46px','20px','auto', 'auto'],
                        text: "Lia",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                    }]
                }]
            },
            {
                id: 'Hint_3_text',
                type: 'text',
                rect: ['251px', '313px','270px','42px','auto', 'auto'],
                text: "What fraction represents the filled squares ?",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1)", "400", "none", "normal"]
            },
            {
                id: 'Hint_4_text',
                type: 'text',
                rect: ['239px', '404px','auto','auto','auto', 'auto'],
                text: "Is there an answer that uses all of these fractions?",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1)", "400", "none", "normal"]
            },
            {
                id: 'Choose_C',
                type: 'text',
                rect: ['252px', '441px','206px','20px','auto', 'auto'],
                text: "Choose (C)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(15,134,3,1.00)", "700", "none", "normal"]
            },
            {
                id: 'Hint_4_Amy_Lia_grids',
                type: 'group',
                rect: ['300px', '366px','28','19','auto', 'auto'],
                c: [
                {
                    id: 'Amy_Plus_Lia_Fraction_',
                    type: 'group',
                    rect: ['83px', '21px','26','17','auto', 'auto'],
                    c: [
                    {
                        id: 'Of_the_grid_Hint_4',
                        type: 'text',
                        rect: ['34px', '-21px','101px','17px','auto', 'auto'],
                        text: "of the grid<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_15_Hint_4',
                        type: 'text',
                        rect: ['0px', '-9px','26px','17px','auto', 'auto'],
                        text: "15<br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1)", "400", "none", "normal"]
                    },
                    {
                        id: '_10_Hint_4',
                        type: 'text',
                        rect: ['0px', '-31px','20px','17px','auto', 'auto'],
                        text: "10",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'fraction_Hint_4',
                        type: 'rect',
                        rect: ['-3px', '-13px','24px','0px','auto', 'auto'],
                        fill: ["rgba(0,72,193,1.00)"],
                        stroke: [1,"rgba(0, 0, 0, 0)","solid"]
                    }]
                },
                {
                    id: 'Plus_hint_4',
                    type: 'text',
                    rect: ['0px', '0px','28px','19px','auto', 'auto'],
                    text: "+",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1.00)", "bold", "none", "normal"]
                },
                {
                    id: 'Amy_grid_Hint_4',
                    type: 'group',
                    rect: ['-41px', '0px','46','19','auto', 'auto'],
                    c: [
                    {
                        id: 'Amy_green_hint_4',
                        type: 'rect',
                        rect: ['-163px', '-177px','31px','21px','auto', 'auto'],
                        fill: ["rgba(251,246,246,0)"],
                        stroke: [2,"rgb(0, 0, 0)","solid"]
                    },
                    {
                        id: 'Amy_text_in_Hint_4',
                        type: 'text',
                        rect: ['0px', '0px','46px','19px','auto', 'auto'],
                        text: "Amy",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'Lia_gird_Hint_4',
                    type: 'group',
                    rect: ['26px', '0px','35','19','auto', 'auto'],
                    c: [
                    {
                        id: 'Lia_pink_Hint_4',
                        type: 'rect',
                        rect: ['-7px', '-4px','31px','21px','auto', 'auto'],
                        fill: ["rgba(247,182,182,1.00)"],
                        stroke: [2,"rgba(0, 0, 0, 0)","solid"]
                    },
                    {
                        id: 'Lia_text_hint_4',
                        type: 'text',
                        rect: ['0px', '0px','35px','19px','auto', 'auto'],
                        text: "Lia",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'equals_Hint_4',
                    type: 'text',
                    rect: ['63px', '0px','41px','17px','auto', 'auto'],
                    text: "=",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,72,193,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Answer_A',
                type: 'image',
                rect: ['28px', '249px','169px','77px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Answer%20A.png",'0px','0px']
            },
            {
                id: 'Answer_B',
                type: 'image',
                rect: ['32px', '285px','165px','77px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Answer_B.png",'0px','0px']
            },
            {
                id: 'Answer_C',
                type: 'image',
                rect: ['39px', '326px','147px','71px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Answer_C.png",'0px','0px']
            },
            {
                id: 'Answer_D',
                type: 'image',
                rect: ['39px', '362px','173px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Answer_D.png",'0px','0px']
            },
            {
                id: 'hint1',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1.ogg','media/hint1.mp3']
            },
            {
                id: 'hint2a',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2a.ogg','media/hint2a.mp3']
            },
            {
                id: 'hint2b',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2b.mp3','media/hint2b.ogg']
            },
            {
                id: 'hint3',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint3.ogg','media/hint3.mp3']
            },
            {
                id: 'hint4',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint4.ogg','media/hint4.mp3']
            },
            {
                id: 'answer',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer.mp3','media/answer.ogg']
            }],
            symbolInstances: [
            {
                id: 'Answers',
                symbolName: 'Answers_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_AnimationSpace-DeleteMe}": [
                ["color", "background-color", 'rgba(251,246,246,0.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "height", '202px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '290px']
            ],
            "${_Hint_4_textCopy}": [
                ["style", "top", '-1468px'],
                ["color", "color", 'rgba(0,72,193,1)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-3027px'],
                ["style", "width", '294px']
            ],
            "${_Amy_text_in_Hint_4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Lia_text}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Amy7}": [
                ["style", "top", '151px'],
                ["color", "background-color", 'rgba(158,236,117,1.00)'],
                ["style", "opacity", '0'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '40px'],
                ["style", "width", '31px']
            ],
            "${__15_lia}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${__3}": [
                ["style", "left", '4px'],
                ["style", "top", '-25px']
            ],
            "${_Amy_fraction}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(158,236,117,1.00)'],
                ["style", "opacity", '0'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '31px']
            ],
            "${_equals_Hint_4}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(0,72,193,1.00)'],
                ["style", "left", '63px'],
                ["style", "height", '17px']
            ],
            "${_Hint_4_Amy_Lia_grids}": [
                ["style", "top", '366px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '300px']
            ],
            "${_Fraction}": [
                ["style", "left", '80px'],
                ["style", "top", '21px']
            ],
            "${_Amy4}": [
                ["style", "top", '125px'],
                ["color", "background-color", 'rgba(158,236,117,1.00)'],
                ["style", "opacity", '0'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '75px'],
                ["style", "width", '31px']
            ],
            "${_Amy_grid_Hint_4}": [
                ["style", "left", '-41px'],
                ["style", "top", '0px']
            ],
            "${_Amy2}": [
                ["color", "background-color", 'rgba(158,236,117,1.00)'],
                ["style", "opacity", '0'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '109px'],
                ["style", "width", '31px']
            ],
            "${_equals_Lia}": [
                ["style", "top", '-4px'],
                ["color", "color", 'rgba(0,72,193,1.00)'],
                ["style", "left", '-78px'],
                ["style", "width", '28px']
            ],
            "${_Hint_3_text}": [
                ["style", "top", '313px'],
                ["style", "height", '42px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '251px'],
                ["style", "width", '270px']
            ],
            "${_Answer_B}": [
                ["style", "top", '285px'],
                ["style", "height", '77px'],
                ["style", "left", '32px'],
                ["style", "width", '165px']
            ],
            "${_Amy4Copy}": [
                ["style", "top", '125px'],
                ["color", "background-color", 'rgba(158,236,117,1.00)'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "height", '21px'],
                ["style", "opacity", '0'],
                ["style", "left", '75px'],
                ["style", "width", '31px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_Amy6}": [
                ["style", "top", '125px'],
                ["color", "background-color", 'rgba(158,236,117,1.00)'],
                ["style", "opacity", '0'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '144px'],
                ["style", "width", '31px']
            ],
            "${_Hint_1c}": [
                ["style", "top", '126px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '250px']
            ],
            "${_Answer_C}": [
                ["style", "top", '326px'],
                ["style", "height", '71px'],
                ["style", "left", '39px'],
                ["style", "width", '147px']
            ],
            "${_Hint_2_text}": [
                ["style", "top", '226px'],
                ["style", "height", '43px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '252px'],
                ["style", "width", '294px']
            ],
            "${_of_the_grid}": [
                ["style", "top", '4px'],
                ["color", "color", 'rgba(0,72,193,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '118px'],
                ["style", "font-size", '16px']
            ],
            "${__10_Hint_4}": [
                ["style", "left", '0px'],
                ["style", "top", '-31px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '600px']
            ],
            "${__7Copy}": [
                ["style", "left", '5px'],
                ["style", "top", '-28px']
            ],
            "${_Amy3}": [
                ["color", "background-color", 'rgba(158,236,117,1.00)'],
                ["style", "opacity", '0'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '144px'],
                ["style", "width", '31px']
            ],
            "${_Choose_C}": [
                ["style", "top", '441px'],
                ["color", "color", 'rgba(15,134,3,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '252px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Amy5}": [
                ["style", "top", '125px'],
                ["color", "background-color", 'rgba(158,236,117,1.00)'],
                ["style", "opacity", '0'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '109px'],
                ["style", "width", '31px']
            ],
            "${_Amy_Fraction}": [
                ["style", "top", '180px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '265px']
            ],
            "${_Amy_green_hint_4}": [
                ["style", "top", '-6px'],
                ["color", "background-color", 'rgba(158,236,117,1.00)'],
                ["style", "opacity", '0'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '-4px'],
                ["style", "width", '31px']
            ],
            "${_Lia1}": [
                ["color", "background-color", 'rgba(247,182,182,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '75px']
            ],
            "${_Answer_A}": [
                ["style", "height", '77px'],
                ["style", "top", '249px'],
                ["style", "left", '28px'],
                ["style", "width", '169px']
            ],
            "${_Question_Text}": [
                ["style", "top", '30px'],
                ["style", "width", '547px'],
                ["style", "height", '56px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '15px'],
                ["style", "font-size", '16px']
            ],
            "${__15Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Lia_Fraction}": [
                ["style", "top", '279px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '383px']
            ],
            "${_Lia_pink}": [
                ["color", "background-color", 'rgba(247,182,182,1.00)'],
                ["style", "left", '-4px'],
                ["style", "top", '-3px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(0,72,193,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "left", '-3px'],
                ["style", "top", '-7px']
            ],
            "${_problem2}": [
                ["style", "height", '174px'],
                ["style", "top", '56px'],
                ["style", "left", '0px'],
                ["style", "width", '286px']
            ],
            "${_fraction_Hint_4}": [
                ["color", "background-color", 'rgba(0,72,193,1.00)'],
                ["style", "top", '-13px'],
                ["style", "border-width", '1px'],
                ["style", "left", '-3px']
            ],
            "${_of_the_grid_Lia}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_AnimationSpace}": [
                ["style", "left", '239px'],
                ["style", "opacity", '0']
            ],
            "${_Lia_gird_Hint_4}": [
                ["style", "left", '26px'],
                ["style", "top", '0px']
            ],
            "${_Lia_text_hint_4}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_TutorialText}": [
                ["style", "top", '51px'],
                ["style", "height", '187px'],
                ["style", "opacity", '1'],
                ["style", "left", '260px'],
                ["style", "display", 'none']
            ],
            "${_Hint_1d}": [
                ["style", "top", '153px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '250px']
            ],
            "${_Lia2}": [
                ["color", "background-color", 'rgba(247,182,182,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '40px'],
                ["style", "top", '126px']
            ],
            "${_Amy_text_in_green}": [
                ["style", "top", '2px'],
                ["style", "width", '35px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '1px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle}": [
                ["style", "top", '-7px'],
                ["style", "border-style", 'solid'],
                ["color", "border-color", 'rgba(0,72,193,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "left", '-6px']
            ],
            "${__15_Hint_4}": [
                ["style", "left", '0px'],
                ["style", "top", '-9px']
            ],
            "${_Plus_hint_4}": [
                ["color", "color", 'rgba(0,72,193,1.00)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Amy_Plus_Lia_Fraction_}": [
                ["style", "top", '21px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '83px']
            ],
            "${_Hint_1b}": [
                ["style", "top", '101px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '249px']
            ],
            "${_Of_the_grid_Hint_4}": [
                ["style", "top", '-21px'],
                ["style", "left", '34px'],
                ["style", "width", '101px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${__15}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Lia3}": [
                ["color", "background-color", 'rgba(247,182,182,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '75px'],
                ["style", "top", '151px']
            ],
            "${_Hint_1a}": [
                ["style", "top", '77px'],
                ["style", "opacity", '0.000000'],
                ["style", "height", '30px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '249px'],
                ["color", "color", 'rgba(0,72,193,1.00)']
            ],
            "${_Hint_4_text}": [
                ["style", "top", '404px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '239px']
            ],
            "${__7}": [
                ["style", "left", '5px'],
                ["style", "top", '-28px']
            ],
            "${_Amy1}": [
                ["color", "background-color", 'rgba(158,236,117,1.00)'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "width", '31px']
            ],
            "${_Lia_in_pink}": [
                ["style", "top", '-5px'],
                ["style", "left", '-119px']
            ],
            "${_Lia_pink_Hint_4}": [
                ["color", "background-color", 'rgba(247,182,182,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-7px'],
                ["style", "top", '-4px']
            ],
            "${_Fraction_L}": [
                ["style", "left", '-44px'],
                ["style", "top", '15px']
            ],
            "${_Answers}": [
                ["style", "top", '250px'],
                ["style", "left", '20px']
            ],
            "${_equals}": [
                ["style", "top", '2px'],
                ["style", "font-size", '16px'],
                ["style", "height", '20px'],
                ["color", "color", 'rgba(0,72,193,1.00)'],
                ["style", "left", '45px'],
                ["style", "width", '35px']
            ],
            "${_Answer_D}": [
                ["style", "height", '75px'],
                ["style", "top", '362px'],
                ["style", "left", '39px'],
                ["style", "width", '173px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 83000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 16000,
                "Hint 2": 33000,
                "Hint 3": 51000,
                "Hint 4": 64000,
                "Answer Hint": 80000
            },
            timeline: [
                { id: "eid179", tween: [ "color", "${_Amy1}", "border-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 33000, duration: 0 },
                { id: "eid209", tween: [ "style", "${_Amy4}", "top", '125px', { fromValue: '125px'}], position: 33000, duration: 0 },
                { id: "eid204", tween: [ "color", "${_Amy6}", "background-color", 'rgba(158,236,117,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,236,117,1.00)'}], position: 33000, duration: 0 },
                { id: "eid299", tween: [ "style", "${_Lia3}", "opacity", '1', { fromValue: '0.000000'}], position: 51000, duration: 1000 },
                { id: "eid332", tween: [ "style", "${_Lia_pink_Hint_4}", "opacity", '1', { fromValue: '0.000000'}], position: 51000, duration: 1000 },
                { id: "eid276", tween: [ "style", "${_Amy1}", "opacity", '1', { fromValue: '0.000000'}], position: 39000, duration: 1000 },
                { id: "eid210", tween: [ "style", "${_Amy5}", "top", '125px', { fromValue: '125px'}], position: 33000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid181", tween: [ "color", "${_Amy2}", "background-color", 'rgba(158,236,117,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,236,117,1.00)'}], position: 33000, duration: 0 },
                { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0 },
                { id: "eid243", tween: [ "style", "${_Amy5}", "opacity", '1', { fromValue: '0'}], position: 39000, duration: 1000 },
                { id: "eid281", tween: [ "color", "${_Amy4Copy}", "border-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 33000, duration: 0 },
                { id: "eid277", tween: [ "style", "${_Amy4Copy}", "top", '125px', { fromValue: '125px'}], position: 33000, duration: 0 },
                { id: "eid268", tween: [ "style", "${_Amy3}", "opacity", '1', { fromValue: '0'}], position: 39000, duration: 1000 },
                { id: "eid328", tween: [ "color", "${_Amy_green_hint_4}", "background-color", 'rgba(158,236,117,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,236,117,1.00)'}], position: 33000, duration: 0 },
                { id: "eid158", tween: [ "style", "${_AnimationSpace}", "left", '239px', { fromValue: '239px'}], position: 0, duration: 0 },
                { id: "eid287", tween: [ "style", "${_Amy_fraction}", "left", '0px', { fromValue: '0px'}], position: 33000, duration: 0 },
                { id: "eid280", tween: [ "style", "${_Amy4Copy}", "left", '75px', { fromValue: '75px'}], position: 33000, duration: 0 },
                { id: "eid330", tween: [ "style", "${_Amy_green_hint_4}", "left", '-4px', { fromValue: '-4px'}], position: 33000, duration: 0 },
                { id: "eid301", tween: [ "style", "${_Lia2}", "opacity", '1', { fromValue: '0.000000'}], position: 51000, duration: 1000 },
                { id: "eid344", tween: [ "style", "${_Hint_4_text}", "opacity", '1', { fromValue: '0.000000'}], position: 77000, duration: 1000 },
                { id: "eid291", tween: [ "style", "${_Amy_Fraction}", "opacity", '1', { fromValue: '0.000000'}], position: 44000, duration: 1000 },
                { id: "eid202", tween: [ "color", "${_Amy6}", "border-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 33000, duration: 0 },
                { id: "eid247", tween: [ "style", "${_Amy4}", "opacity", '1', { fromValue: '0'}], position: 39000, duration: 1000 },
                { id: "eid272", tween: [ "style", "${_Amy2}", "opacity", '1', { fromValue: '0'}], position: 39000, duration: 1000 },
                { id: "eid196", tween: [ "color", "${_Amy5}", "background-color", 'rgba(158,236,117,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,236,117,1.00)'}], position: 33000, duration: 0 },
                { id: "eid188", tween: [ "color", "${_Amy3}", "border-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 33000, duration: 0 },
                { id: "eid177", tween: [ "style", "${_Hint_1d}", "opacity", '1', { fromValue: '0.000000'}], position: 29000, duration: 1000 },
                { id: "eid212", tween: [ "color", "${_Amy7}", "border-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 33000, duration: 0 },
                { id: "eid288", tween: [ "style", "${_Amy_fraction}", "opacity", '1', { fromValue: '0'}], position: 39000, duration: 1000 },
                { id: "eid285", tween: [ "color", "${_Amy_fraction}", "background-color", 'rgba(158,236,117,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,236,117,1.00)'}], position: 33000, duration: 0 },
                { id: "eid329", tween: [ "color", "${_Amy_green_hint_4}", "border-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 33000, duration: 0 },
                { id: "eid303", tween: [ "style", "${_Lia1}", "opacity", '1', { fromValue: '0.000000'}], position: 51000, duration: 1000 },
                { id: "eid279", tween: [ "style", "${_Amy4Copy}", "opacity", '1', { fromValue: '0'}], position: 39000, duration: 1000 },
                { id: "eid309", tween: [ "style", "${_Hint_3_text}", "opacity", '1', { fromValue: '0.000000'}], position: 59000, duration: 1000 },
                { id: "eid294", tween: [ "style", "${_Hint_2_text}", "opacity", '1', { fromValue: '0.000000'}], position: 46500, duration: 1000 },
                { id: "eid315", tween: [ "style", "${_Choose_C}", "opacity", '1', { fromValue: '0.000000'}], position: 81437, duration: 1000 },
                { id: "eid173", tween: [ "style", "${_Hint_1c}", "opacity", '1', { fromValue: '0.000000'}], position: 27000, duration: 1000 },
                { id: "eid331", tween: [ "style", "${_Amy_green_hint_4}", "opacity", '1', { fromValue: '0'}], position: 39000, duration: 1000 },
                { id: "eid214", tween: [ "color", "${_Amy7}", "background-color", 'rgba(158,236,117,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,236,117,1.00)'}], position: 33000, duration: 0 },
                { id: "eid187", tween: [ "color", "${_Amy3}", "background-color", 'rgba(158,236,117,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,236,117,1.00)'}], position: 33000, duration: 0 },
                { id: "eid183", tween: [ "style", "${_Amy2}", "left", '109px', { fromValue: '109px'}], position: 33000, duration: 0 },
                { id: "eid335", tween: [ "style", "${_Hint_4_Amy_Lia_grids}", "opacity", '1', { fromValue: '0.000000'}], position: 61000, duration: 1000 },
                { id: "eid235", tween: [ "style", "${_Amy7}", "opacity", '1', { fromValue: '0'}], position: 39000, duration: 1000 },
                { id: "eid197", tween: [ "color", "${_Amy5}", "border-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 33000, duration: 0 },
                { id: "eid170", tween: [ "style", "${_Hint_1b}", "opacity", '1', { fromValue: '0.000000'}], position: 22000, duration: 1000 },
                { id: "eid200", tween: [ "style", "${_Amy5}", "left", '109px', { fromValue: '109px'}], position: 33000, duration: 0 },
                { id: "eid338", tween: [ "style", "${_Amy_Plus_Lia_Fraction_}", "opacity", '1', { fromValue: '0.000000'}], position: 74000, duration: 1000 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid191", tween: [ "color", "${_Amy4}", "background-color", 'rgba(158,236,117,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,236,117,1.00)'}], position: 33000, duration: 0 },
                { id: "eid182", tween: [ "color", "${_Amy2}", "border-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 33000, duration: 0 },
                { id: "eid306", tween: [ "style", "${_Lia_Fraction}", "opacity", '1', { fromValue: '0.000000'}], position: 54000, duration: 1000 },
                { id: "eid219", tween: [ "style", "${_Amy7}", "left", '40px', { fromValue: '40px'}], position: 33000, duration: 0 },
                { id: "eid239", tween: [ "style", "${_Amy6}", "opacity", '1', { fromValue: '0'}], position: 39000, duration: 1000 },
                { id: "eid229", tween: [ "style", "${_Amy6}", "top", '125px', { fromValue: '125px'}], position: 33000, duration: 0 },
                { id: "eid192", tween: [ "color", "${_Amy4}", "border-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 33000, duration: 0 },
                { id: "eid284", tween: [ "style", "${_Amy_fraction}", "top", '0px', { fromValue: '0px'}], position: 33000, duration: 0 },
                { id: "eid205", tween: [ "style", "${_Amy6}", "left", '144px', { fromValue: '144px'}], position: 33000, duration: 0 },
                { id: "eid286", tween: [ "color", "${_Amy_fraction}", "border-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 33000, duration: 0 },
                { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 28000, duration: 3000 },
                { id: "eid180", tween: [ "color", "${_Amy1}", "background-color", 'rgba(158,236,117,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,236,117,1.00)'}], position: 33000, duration: 0 },
                { id: "eid190", tween: [ "style", "${_Amy3}", "left", '144px', { fromValue: '144px'}], position: 33000, duration: 0 },
                { id: "eid327", tween: [ "style", "${_Amy_green_hint_4}", "top", '-6px', { fromValue: '-6px'}], position: 33000, duration: 0 },
                { id: "eid194", tween: [ "style", "${_Amy4}", "left", '75px', { fromValue: '75px'}], position: 33000, duration: 0 },
                { id: "eid278", tween: [ "color", "${_Amy4Copy}", "background-color", 'rgba(158,236,117,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,236,117,1.00)'}], position: 33000, duration: 0 },
                { id: "eid228", tween: [ "style", "${_Amy7}", "top", '151px', { fromValue: '151px'}], position: 33000, duration: 0 },
                { id: "eid165", tween: [ "style", "${_Hint_1a}", "opacity", '1', { fromValue: '0.000000'}], position: 20000, duration: 1000 },
                { id: "eid160", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid316", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 16000 },
                { id: "eid317", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2a}', [0] ], ""], position: 33000 },
                { id: "eid318", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2b}', [] ], ""], position: 41000 },
                { id: "eid319", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 53000 },
                { id: "eid320", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4}', [] ], ""], position: 64000 },
                { id: "eid321", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 80000 }            ]
        }
    }
},
"EButton": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'E_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy8',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "display", 'none'],
                ["style", "height", '42px'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
            ],
            "${_E_Button}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_EllipseCopy8}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '25px']
            ],
            "${_Text8}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '14px'],
                ["style", "left", '0px'],
                ["style", "width", '27px']
            ],
            "${_x}": [
                ["style", "top", '-3px'],
                ["style", "height", '33px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '42px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            labels: {
                "Nothing Selected": 0,
                "Answer Selected": 5000
            },
            timeline: [
                { id: "eid9", tween: [ "color", "${_EllipseCopy8}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
                { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }            ]
        }
    }
},
"EButton_3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            labels: {
                "Nothing Selected": 0,
                "Answer Incorrect": 5000,
                "Answer Correct": 10000
            },
            timeline: [
            ]
        }
    }
},
"EButton_2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'E_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy8',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        id: 'Text14',
                        text: 'Answer E Text',
                        align: 'left',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-3px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "display", 'none'],
                ["style", "height", '42px'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${_Text8}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '14px'],
                ["style", "left", '0px'],
                ["style", "width", '27px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
            ],
            "${_E_Button}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_EllipseCopy8}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '25px']
            ],
            "${_Text14}": [
                ["style", "top", '4px'],
                ["style", "left", '36px'],
                ["style", "width", '101px']
            ],
            "${_x}": [
                ["style", "top", '-3px'],
                ["style", "height", '33px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '42px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            labels: {
                "Nothing Selected": 0,
                "Answer Selected": 5000
            },
            timeline: [
                { id: "eid9", tween: [ "color", "${_EllipseCopy8}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
                { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }            ]
        }
    }
},
"EButton_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'E_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy8',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        id: 'Text14',
                        text: 'Answer E Text',
                        align: 'left',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "display", 'none'],
                ["style", "height", '42px'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${_Text8}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '14px'],
                ["style", "left", '0px'],
                ["style", "width", '27px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
            ],
            "${_E_Button}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_EllipseCopy8}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '25px']
            ],
            "${_Text14}": [
                ["style", "top", '4px'],
                ["style", "left", '36px'],
                ["style", "width", '101px']
            ],
            "${_x}": [
                ["style", "top", '-3px'],
                ["style", "height", '33px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '42px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            labels: {
                "Nothing Selected": 0,
                "Answer Selected": 5000
            },
            timeline: [
                { id: "eid9", tween: [ "color", "${_EllipseCopy8}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
                { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }            ]
        }
    }
},
"DButton_3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'D_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy7',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '14px'],
                ["style", "left", '0px'],
                ["style", "width", '27px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
            ],
            "${_x}": [
                ["style", "top", '-4px'],
                ["style", "height", '33px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '42px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "display", 'none'],
                ["style", "height", '42px'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${_EllipseCopy7}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '25px']
            ],
            "${_D_Button}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            labels: {
                "Nothing Selected": 0,
                "Answer Incorrect": 5000,
                "Answer Correct": 10000
            },
            timeline: [
                { id: "eid3", tween: [ "color", "${_EllipseCopy7}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
                { id: "eid226", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid227", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid267", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid10", tween: [ "style", "${_EllipseCopy7}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid255", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid256", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid266", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 }            ]
        }
    }
},
"DButton_2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'D_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy7',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        id: 'Text13',
                        text: 'Answer D Text',
                        align: 'left',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_x}": [
                ["style", "top", '-4px'],
                ["style", "height", '33px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '42px']
            ],
            "${_Text7}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '14px'],
                ["style", "left", '0px'],
                ["style", "width", '27px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "display", 'none'],
                ["style", "height", '42px'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
            ],
            "${_D_Button}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_EllipseCopy7}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '25px']
            ],
            "${_Text13}": [
                ["style", "top", '4px'],
                ["style", "left", '36px'],
                ["style", "width", '101px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            labels: {
                "Nothing Selected": 0,
                "Answer Selected": 5000
            },
            timeline: [
                { id: "eid3", tween: [ "color", "${_EllipseCopy7}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
                { id: "eid226", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid227", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid10", tween: [ "style", "${_EllipseCopy7}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid255", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid256", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }            ]
        }
    }
},
"DButton_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'D_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy7',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        id: 'Text13',
                        text: 'Answer D Text',
                        align: 'left',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_x}": [
                ["style", "top", '-4px'],
                ["style", "height", '33px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '42px']
            ],
            "${_Text7}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '14px'],
                ["style", "left", '0px'],
                ["style", "width", '27px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "display", 'none'],
                ["style", "height", '42px'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
            ],
            "${_D_Button}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_EllipseCopy7}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '25px']
            ],
            "${_Text13}": [
                ["style", "top", '4px'],
                ["style", "left", '36px'],
                ["style", "width", '101px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            labels: {
                "Nothing Selected": 0,
                "Answer Selected": 5000
            },
            timeline: [
                { id: "eid3", tween: [ "color", "${_EllipseCopy7}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
                { id: "eid226", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid227", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid10", tween: [ "style", "${_EllipseCopy7}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid255", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid256", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }            ]
        }
    }
},
"DButton": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'D_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy7',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['36px', '4px', '94px', '20px', 'auto', 'auto'],
                        id: 'Text13',
                        text: 'Answer Text D',
                        align: 'left',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_x}": [
                ["style", "top", '-4px'],
                ["style", "height", '33px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '42px']
            ],
            "${_Text7}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '14px'],
                ["style", "left", '0px'],
                ["style", "width", '27px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "display", 'none'],
                ["style", "height", '42px'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
            ],
            "${_D_Button}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_EllipseCopy7}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '25px']
            ],
            "${_Text13}": [
                ["style", "top", '4px'],
                ["style", "left", '36px'],
                ["style", "width", '94px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            labels: {
                "Nothing Selected": 0,
                "Answer Selected": 5000
            },
            timeline: [
                { id: "eid3", tween: [ "color", "${_EllipseCopy7}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
                { id: "eid226", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid227", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid10", tween: [ "style", "${_EllipseCopy7}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid255", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid256", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }            ]
        }
    }
},
"CButton_3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'C_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy6',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text5',
                        text: 'C',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "display", 'none'],
                ["style", "height", '42px'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${_EllipseCopy6}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '25px']
            ],
            "${_C_Button}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text5}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '14px'],
                ["style", "left", '0px'],
                ["style", "width", '27px']
            ],
            "${_x}": [
                ["style", "top", '-4px'],
                ["style", "height", '33px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '42px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            labels: {
                "Nothing Selected": 0,
                "Answer Incorrect": 5000,
                "Answer Correct": 10000
            },
            timeline: [
                { id: "eid11", tween: [ "style", "${_EllipseCopy6}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid224", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid225", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid265", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid253", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid254", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid264", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid5", tween: [ "color", "${_EllipseCopy6}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 }            ]
        }
    }
},
"BButton_3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'B_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '25', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'EllipseCopy5',
                        stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        rect: ['0px', '5px', '27px', '19px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text4',
                        text: 'B',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_B_Button}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '125px']
            ],
            "${_x}": [
                ["style", "top", '-4px'],
                ["style", "height", '33px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '42px']
            ],
            "${_EllipseCopy5}": [
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '25px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "display", 'none'],
                ["style", "height", '42px'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${_Text4}": [
                ["style", "top", '5px'],
                ["style", "text-align", 'center'],
                ["style", "height", '19px'],
                ["style", "font-size", '14px'],
                ["style", "left", '0px'],
                ["style", "width", '27px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            labels: {
                "Nothing Selected": 0,
                "Answer Incorrect": 5000,
                "Answer Correct": 10000
            },
            timeline: [
                { id: "eid7", tween: [ "color", "${_EllipseCopy5}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
                { id: "eid222", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid223", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid262", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid251", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid252", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid263", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid12", tween: [ "style", "${_EllipseCopy5}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }            ]
        }
    }
},
"AButton_3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'A_Button',
                    type: 'group',
                    rect: ['8px', '16px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'Ellipse',
                        stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(232,241,160,1.00)']
                    },
                    {
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'A',
                        text: 'A<br><br><br>',
                        align: 'center',
                        rect: ['0px', '3px', '27px', '19px', 'auto', 'auto']
                    },
                    {
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    },
                    {
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/x.png', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_A_Button}": [
                ["style", "left", '8px'],
                ["style", "top", '16px']
            ],
            "${_A}": [
                ["style", "top", '3px'],
                ["style", "text-align", 'center'],
                ["style", "height", '19px'],
                ["style", "width", '27px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_Ellipse}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '25px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "height", '42px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${symbolSelector}": [
                ["style", "height", '42px'],
                ["style", "width", '153px']
            ],
            "${_x}": [
                ["style", "top", '-4px'],
                ["style", "display", 'none'],
                ["style", "height", '33px'],
                ["style", "left", '-8px'],
                ["style", "width", '42px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            labels: {
                "Nothing Selected": 0,
                "Answer Incorrect": 5000,
                "Answer Correct": 10000
            },
            timeline: [
                { id: "eid220", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid221", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid261", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid259", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid260", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid42", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 }            ]
        }
    }
},
"AButton": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'A_Button',
                    type: 'group',
                    rect: ['8px', '16px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'Ellipse',
                        stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(232,241,160,1.00)']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '3px', '27px', '19px', 'auto', 'auto'],
                        id: 'Text3',
                        text: 'A<br><br><br>',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['36px', '3px', '109px', '19px', 'auto', 'auto'],
                        id: 'Text9',
                        text: 'Answer Text A',
                        align: 'left',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_A_Button}": [
                ["style", "left", '8px'],
                ["style", "top", '16px']
            ],
            "${_Ellipse}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '25px']
            ],
            "${symbolSelector}": [
                ["style", "height", '42px'],
                ["style", "width", '153px']
            ],
            "${_Text3}": [
                ["style", "top", '3px'],
                ["style", "text-align", 'center'],
                ["style", "height", '19px'],
                ["style", "width", '27px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_Text9}": [
                ["style", "top", '3px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '12px'],
                ["style", "left", '36px'],
                ["style", "width", '109px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "height", '42px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${_x}": [
                ["style", "top", '-4px'],
                ["style", "display", 'none'],
                ["style", "height", '33px'],
                ["style", "left", '-8px'],
                ["style", "width", '42px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            labels: {
                "Nothing Selected": 0,
                "Answer Selected": 5000
            },
            timeline: [
                { id: "eid220", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid221", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid259", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid260", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }            ]
        }
    }
},
"Answers_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Group',
                    type: 'group',
                    rect: ['0px', '2px', '153', '183', 'auto', 'auto'],
                    c: [
                    {
                        id: 'EButton',
                        type: 'rect',
                        rect: ['8px', '157px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'DButton',
                        type: 'rect',
                        rect: ['8px', '121px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'CButton',
                        type: 'rect',
                        rect: ['8px', '86px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'BButton',
                        type: 'rect',
                        rect: ['8px', '50px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'AButton',
                        type: 'rect',
                        rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'DButton',
                symbolName: 'DButton_3',
                autoPlay: {

               }
            },
            {
                id: 'EButton',
                symbolName: 'EButton_3',
                autoPlay: {

               }
            },
            {
                id: 'BButton',
                symbolName: 'BButton_3',
                autoPlay: {

               }
            },
            {
                id: 'CButton',
                symbolName: 'CButton_3',
                autoPlay: {

               }
            },
            {
                id: 'AButton',
                symbolName: 'AButton_3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Group}": [
                ["style", "top", '2px'],
                ["style", "left", '0px']
            ],
            "${_AnswerText}": [
                ["style", "top", '3px'],
                ["style", "width", '109px'],
                ["style", "left", '36px'],
                ["style", "font-size", '12px']
            ],
            "${_DButton}": [
                ["style", "left", '8px'],
                ["style", "top", '121px']
            ],
            "${symbolSelector}": [
                ["style", "height", '187px'],
                ["style", "width", '156px']
            ],
            "${_BButton}": [
                ["style", "left", '8px'],
                ["style", "top", '50px']
            ],
            "${_AButton}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_CButton}": [
                ["style", "left", '8px'],
                ["style", "top", '86px']
            ],
            "${_EButton}": [
                ["style", "left", '8px'],
                ["style", "top", '157px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EdgeProblem");
