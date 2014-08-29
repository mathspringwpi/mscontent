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
                id: 'Question_text',
                type: 'group',
                rect: ['15px', '30px','205','36','auto', 'auto'],
                c: [
                {
                    id: 'Question_Text',
                    type: 'text',
                    rect: ['0px', '0px','178px','36px','auto', 'auto'],
                    text: "What is the value of the expression below ?",
                    align: "left",
                    font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Question_expression',
                    type: 'text',
                    rect: ['18px', '48px','117px','28px','auto', 'auto'],
                    text: "- 6 |3³ - 30| + 2",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['48', '181','auto','auto','auto', 'auto']
            },
            {
                id: 'AnswerDText',
                type: 'text',
                rect: ['71px', '293px','101px','20px','auto', 'auto'],
                text: "-16",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['71px', '257px','101px','19px','auto', 'auto'],
                text: "-190",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerBText',
                type: 'text',
                rect: ['71px', '225px','112px','19px','auto', 'auto'],
                text: "-340",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['71px', '190px','109px','19px','auto', 'auto'],
                text: "20",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
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
                id: 'TutorialText',
                display: 'none',
                type: 'text',
                rect: ['260px', '54px','237px','187px','auto', 'auto'],
                text: "Let's pretend your hint starts here at 0:10. It does not really matter where the hints start and end, as long as they don't overlap. Don't worry that the X and Checks are showing up either - it's just because I set their timeline to 5 seconds in the symbol. They won't appear in the final animation.<br><br>This rectangle is a space for you to draw your animation. An example will follow in hint 2.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerEText',
                type: 'text',
                rect: ['71px', '329px','101px','20px','auto', 'auto'],
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint_1_text_1',
                display: 'block',
                type: 'group',
                rect: ['71px', '109px','42','20','auto', 'auto'],
                c: [
                {
                    id: 'The',
                    type: 'text',
                    rect: ['0px', '0px','42px','20px','auto', 'auto'],
                    text: "The",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(207,0,0,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'absolute_value',
                    type: 'text',
                    rect: ['28px', '0px','126px','20px','auto', 'auto'],
                    text: "Absolute Value",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(207,0,0,1.00)", "700", "none", "italic"]
                },
                {
                    id: 'the_rest_of_sentence',
                    type: 'text',
                    rect: ['144px', '0px','236px','20px','auto', 'auto'],
                    text: "of a number is its distance from zero.",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(207,0,0,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Number_Line',
                display: 'block',
                type: 'group',
                rect: ['362', '169','32','20','auto', 'auto'],
                c: [
                {
                    id: '_2',
                    type: 'text',
                    rect: ['0px', '0px','32px','20px','auto', 'auto'],
                    text: "2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: '_-1_line',
                    type: 'rect',
                    rect: ['-194px', '-40px','0px','24px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [2,"rgb(3, 3, 3)","solid"]
                },
                {
                    id: '_2_line',
                    type: 'rect',
                    rect: ['2px', '-40px','0px','24px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [2,"rgb(3, 3, 3)","solid"]
                },
                {
                    id: '_1_line',
                    type: 'rect',
                    rect: ['-46px', '-40px','0px','24px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [2,"rgb(3, 3, 3)","solid"]
                },
                {
                    id: '_1',
                    type: 'text',
                    rect: ['-46px', '0px','18px','19px','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: '_0',
                    type: 'text',
                    rect: ['-97px', '0px','18px','19px','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: '_-1',
                    type: 'text',
                    rect: ['-149px', '0px','32px','19px','auto', 'auto'],
                    text: "-1",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: '_-2',
                    type: 'text',
                    rect: ['-201px', '0px','18px','19px','auto', 'auto'],
                    text: "-2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: '_-2_line',
                    type: 'rect',
                    rect: ['-146px', '-40px','0px','24px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [2,"rgb(3, 3, 3)","solid"]
                },
                {
                    id: '_0_line',
                    type: 'rect',
                    rect: ['-97px', '-40px','0px','24px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [2,"rgb(3, 3, 3)","solid"]
                },
                {
                    id: 'number_line',
                    type: 'rect',
                    rect: ['-235px', '-26px','276px','0px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [2,"rgb(3, 3, 3)","solid"]
                },
                {
                    id: 'distance_0_to_-2',
                    display: 'block',
                    type: 'rect',
                    rect: ['-191px', '-29px','86px','0px','auto', 'auto'],
                    fill: ["rgba(241,0,0,0.9766)"],
                    stroke: [4,"rgba(241, 0, 0, 0.976563)","solid"]
                },
                {
                    id: 'distance_0_to_2',
                    display: 'block',
                    type: 'rect',
                    rect: ['-85px', '1px','10px','0px','auto', 'auto'],
                    fill: ["rgba(241,0,0,0.98)"],
                    stroke: [4,"rgba(241,0,0,0.98)","solid"]
                }]
            },
            {
                id: 'Absolute_value_of_2',
                display: 'block',
                type: 'text',
                rect: ['315px', '252px','78px','50px','auto', 'auto'],
                text: "|2| = 2",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,59,236,0.9766)", "bold", "none", "normal"]
            },
            {
                id: 'Distance_2_from_0_text',
                display: 'block',
                type: 'text',
                rect: ['280px', '103px','217px','20px','auto', 'auto'],
                text: "A distance of 2 away from 0",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,59,236,0.98)", "700", "none", "normal"]
            },
            {
                id: 'Absolute_value_of_-2',
                display: 'block',
                type: 'text',
                rect: ['210px', '252px','70px','50px','auto', 'auto'],
                text: "|-2| = 2",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(1,153,168,0.98)", "bold", "none", "normal"]
            },
            {
                id: 'distance_0_to_-2_text',
                display: 'block',
                type: 'text',
                rect: ['49px', '148px','225px','36px','auto', 'auto'],
                text: "A distance of 2 away from 0",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(1,153,168,0.98)", "bold", "none", "normal"]
            },
            {
                id: '_3x_avsolute_value_of_-2',
                display: 'block',
                type: 'text',
                rect: ['211px', '298px','112px','67px','auto', 'auto'],
                text: "3|-2| = 3 x (2)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(163,0,0,0.98)", "bold", "none", "normal"]
            },
            {
                id: 'Order_of_Operations',
                type: 'group',
                rect: ['280px', '173px','227','36','auto', 'auto'],
                c: [
                {
                    id: 'Addition_or_Subtraction',
                    type: 'text',
                    rect: ['0px', '0px','205px','36px','auto', 'auto'],
                    text: "Addition OR Subtraction",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(6,74,151,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'Multiplication_or_division',
                    type: 'text',
                    rect: ['0px', '-35px','205px','43px','auto', 'auto'],
                    text: "Multiplication OR Division",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(6,74,151,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'Exponents',
                    type: 'text',
                    rect: ['0px', '-71px','112px','36px','auto', 'auto'],
                    text: "Exponents",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(6,74,151,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'Parentheses',
                    type: 'text',
                    rect: ['0px', '-107px','101px','36px','auto', 'auto'],
                    text: "Parentheses",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(6,74,151,1.00)", "normal", "none", ""]
                },
                {
                    id: 'arrow',
                    type: 'image',
                    rect: ['-116px', '-57px','136px','36px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                    transform: [[],['90']]
                },
                {
                    id: 'order_of_operations',
                    type: 'text',
                    rect: ['-60px', '-136px','310px','23px','auto', 'auto'],
                    text: "Order of Operations:",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "700", "none", "normal"]
                }]
            },
            {
                id: 'Hint2_text',
                type: 'text',
                rect: ['131px', '207px','344px','36px','auto', 'auto'],
                text: "Simplify the expression inside the absolute value symbol first! ",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(144,0,14,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'choose_D',
                type: 'text',
                rect: ['296px', '414px','156px','20px','auto', 'auto'],
                text: "The Answer is (D)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(37,127,2,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Hint_3',
                type: 'group',
                rect: ['214px', '256px','71','19','auto', 'auto'],
                c: [
                {
                    id: 'Hint3_27_minus_30',
                    type: 'text',
                    rect: ['0px', '0px','71px','19px','auto', 'auto'],
                    text: "|27- 30|",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(219,0,13,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Hint__3_-3',
                    type: 'text',
                    rect: ['61px', '-1px','85px','16px','auto', 'auto'],
                    text: "= |-3|",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(219,0,13,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Hint3_3_cubed_minus_30_',
                    type: 'text',
                    rect: ['-81px', '-1px','84px','20px','auto', 'auto'],
                    text: "|3³ - 30| =",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(219,0,13,1.00)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Hint_4_second',
                type: 'group',
                rect: ['133px', '311px','30','17','auto', 'auto'],
                c: [
                {
                    id: 'Hint_4_-6',
                    type: 'text',
                    rect: ['0px', '0px','30px','17px','auto', 'auto'],
                    text: "- 6",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(3,3,3,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'Hint4_absoulte_-3',
                    type: 'text',
                    rect: ['159px', '-56px','38px','24px','auto', 'auto'],
                    text: "|-3|",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(219,0,13,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Hint_4_plus_2_second',
                    type: 'text',
                    rect: ['51px', '1px','39px','16px','auto', 'auto'],
                    text: "+ 2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(9,9,9,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'Hint4_-6_second',
                    type: 'text',
                    rect: ['85px', '1px','48px','21px','auto', 'auto'],
                    text: "= - 6",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(9,9,9,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Hint_4_parentheses3',
                    type: 'text',
                    rect: ['126px', '0px','65px','15px','auto', 'auto'],
                    text: "(3)",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(219,0,13,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'Hint_4_plus_2_third',
                    type: 'text',
                    rect: ['156px', '1px','39px','16px','auto', 'auto'],
                    text: "+ 2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(13,13,13,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Hint_4_-18_plus_2',
                    type: 'text',
                    rect: ['189px', '1px','84px','15px','auto', 'auto'],
                    text: "= - 18 + 2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(13,13,13,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Hint_4_first',
                type: 'group',
                rect: ['223', '286','73','16','auto', 'auto'],
                c: [
                {
                    id: 'Hint_4_-6_first',
                    type: 'text',
                    rect: ['-90px', '0px','30px','17px','auto', 'auto'],
                    text: "- 6",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(3,3,3,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'Hint_4_3_cubed_minus_30_Copy',
                    type: 'text',
                    rect: ['-65px', '0px','84px','20px','auto', 'auto'],
                    text: "|3³ - 30|",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(219,0,13,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'Hint_4_plus_2_first',
                    type: 'text',
                    rect: ['0px', '0px','73px','16px','auto', 'auto'],
                    text: "+ 2 = ?",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(9,9,9,1.00)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Answer_Hint_-16',
                type: 'text',
                rect: ['406px', '312px','85px','21px','auto', 'auto'],
                text: "= - 16",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(13,13,13,1)", "normal", "none", "normal"]
            },
            {
                id: 'question',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/question.mp3','media/question.ogg']
            },
            {
                id: 'hint1a',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1a.mp3','media/hint1a.ogg']
            },
            {
                id: 'hint1b',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1b.mp3','media/hint1b.ogg']
            },
            {
                id: 'hint1c',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1c.ogg','media/hint1c.mp3']
            },
            {
                id: 'hint1d',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1d.ogg','media/hint1d.mp3']
            },
            {
                id: 'hint1e',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1e.mp3','media/hint1e.ogg']
            },
            {
                id: 'hint2a',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2a.ogg','media/hint2a.mp3']
            },
            {
                id: 'hint2b',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2b.mp3','media/hint2b.ogg']
            },
            {
                id: 'hint2c',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2c.ogg','media/hint2c.mp3']
            },
            {
                id: 'hint3a',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint3a.mp3','media/hint3a.ogg']
            },
            {
                id: 'hint3b',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint3b.ogg','media/hint3b.mp3']
            },
            {
                id: 'hint3c',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint3c.ogg','media/hint3c.mp3']
            },
            {
                id: 'hint4a',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint4a.mp3','media/hint4a.ogg']
            },
            {
                id: 'hint4b',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint4b.ogg','media/hint4b.mp3']
            },
            {
                id: 'answerhint1',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answerhint1.ogg','media/answerhint1.mp3']
            },
            {
                id: 'answerhint2',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answerhint2.ogg','media/answerhint2.mp3']
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
            "${__-1_line}": [
                ["style", "top", '-40px'],
                ["style", "left", '-194px'],
                ["style", "height", '24px']
            ],
            "${_Hint_4_plus_2_first}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(9,9,9,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '73px']
            ],
            "${_Absolute_value_of_-2}": [
                ["style", "top", '252px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(1,153,168,0.98)'],
                ["style", "height", '50px'],
                ["style", "opacity", '0'],
                ["style", "left", '210px'],
                ["style", "width", '70px']
            ],
            "${__2}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_Question_expression}": [
                ["style", "top", '48px'],
                ["style", "left", '18px'],
                ["style", "width", '117px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_choose_D}": [
                ["color", "color", 'rgba(37,127,2,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '296px'],
                ["style", "top", '414px']
            ],
            "${_Addition_or_Subtraction}": [
                ["style", "top", '0px'],
                ["style", "width", '205px'],
                ["color", "color", 'rgba(6,74,151,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ],
            "${_Hint4_absoulte_-3}": [
                ["style", "top", '-56px'],
                ["style", "opacity", '0'],
                ["style", "left", '159px'],
                ["style", "width", '38px']
            ],
            "${_Hint_4_-6_first}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(3,3,3,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '-90px'],
                ["style", "width", '30px']
            ],
            "${__1}": [
                ["style", "top", '0px'],
                ["style", "left", '-46px']
            ],
            "${_Hint_4_parentheses3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '126px'],
                ["color", "color", 'rgba(219,0,13,1.00)']
            ],
            "${_Parentheses}": [
                ["style", "top", '-107px'],
                ["color", "color", 'rgba(6,74,151,1.00)'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ],
            "${_AnswerDText}": [
                ["style", "top", '508px'],
                ["style", "width", '101px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '74px'],
                ["style", "font-size", '14px']
            ],
            "${__-2_line}": [
                ["style", "top", '-40px'],
                ["style", "left", '-146px'],
                ["style", "height", '24px']
            ],
            "${_Number_Line}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '378px'],
                ["style", "top", '224px']
            ],
            "${_Question_Text}": [
                ["style", "top", '0px'],
                ["style", "width", '178px'],
                ["style", "height", '36px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '16px']
            ],
            "${__1_line}": [
                ["style", "top", '-40px'],
                ["style", "left", '-46px'],
                ["style", "height", '24px']
            ],
            "${_Absolute_value_of_2}": [
                ["style", "top", '252px'],
                ["style", "height", '50px'],
                ["style", "opacity", '0'],
                ["style", "left", '315px'],
                ["style", "display", 'block']
            ],
            "${_order_of_operations}": [
                ["style", "top", '-136px'],
                ["style", "font-weight", '700'],
                ["style", "left", '-60px']
            ],
            "${_Exponents}": [
                ["style", "top", '-71px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(6,74,151,1.00)']
            ],
            "${__0}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-97px'],
                ["style", "font-size", '16px']
            ],
            "${_Hint2_text}": [
                ["style", "top", '207px'],
                ["color", "color", 'rgba(144,0,14,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '131px'],
                ["style", "width", '344px']
            ],
            "${_Multiplication_or_division}": [
                ["style", "top", '-35px'],
                ["style", "font-size", '18px'],
                ["color", "color", 'rgba(6,74,151,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '205px']
            ],
            "${__-1}": [
                ["style", "left", '-149px'],
                ["style", "top", '0px']
            ],
            "${_arrow}": [
                ["style", "top", '-57px'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '36px'],
                ["style", "left", '-116px'],
                ["style", "width", '136px']
            ],
            "${_Hint_4_3_cubed_minus_30_Copy}": [
                ["color", "color", 'rgba(219,0,13,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '-65px'],
                ["style", "top", '0px']
            ],
            "${_Answers}": [
                ["style", "top", '383px'],
                ["style", "left", '27px']
            ],
            "${__-2}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-201px']
            ],
            "${_Hint_1_text_1}": [
                ["style", "top", '109px'],
                ["style", "opacity", '0'],
                ["style", "left", '71px'],
                ["style", "display", 'block']
            ],
            "${_AnswerEText}": [
                ["style", "top", '329px'],
                ["style", "width", '101px'],
                ["style", "left", '71px'],
                ["style", "font-size", '14px']
            ],
            "${_Hint_4_plus_2_third}": [
                ["style", "top", '1px'],
                ["style", "opacity", '0'],
                ["style", "left", '156px']
            ],
            "${_Hint_3}": [
                ["style", "top", '256px'],
                ["style", "left", '214px']
            ],
            "${_AnswerBText}": [
                ["style", "top", '440px'],
                ["style", "width", '112px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '74px'],
                ["style", "font-size", '14px']
            ],
            "${_Hint4_-6_second}": [
                ["style", "top", '1px'],
                ["style", "height", '21px'],
                ["style", "opacity", '0'],
                ["style", "left", '85px'],
                ["style", "width", '48px']
            ],
            "${_Hint_4_plus_2_second}": [
                ["style", "top", '1px'],
                ["color", "color", 'rgba(9,9,9,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '51px'],
                ["style", "width", '39px']
            ],
            "${_The}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(207,0,0,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '42px']
            ],
            "${_AnswerCText}": [
                ["style", "top", '472px'],
                ["style", "width", '101px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '74px'],
                ["style", "font-size", '14px']
            ],
            "${_distance_0_to_-2}": [
                ["style", "top", '-29px'],
                ["color", "background-color", 'rgba(1,153,168,0.98)'],
                ["style", "opacity", '0'],
                ["style", "display", 'block'],
                ["color", "border-color", 'rgba(1,153,168,0.98)'],
                ["style", "left", '-191px'],
                ["style", "width", '86px']
            ],
            "${_AnswerAText}": [
                ["style", "top", '405px'],
                ["style", "text-align", 'left'],
                ["style", "width", '109px'],
                ["style", "height", '19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '74px'],
                ["style", "font-size", '14px']
            ],
            "${_Hint_4_-6}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(3,3,3,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '30px']
            ],
            "${_TutorialText}": [
                ["style", "top", '54px'],
                ["style", "height", '187px'],
                ["style", "opacity", '1'],
                ["style", "left", '260px'],
                ["style", "display", 'none']
            ],
            "${_distance_0_to_2}": [
                ["color", "background-color", 'rgba(0,59,236,0.98)'],
                ["style", "top", '-29px'],
                ["style", "left", '-93px'],
                ["color", "border-color", 'rgba(0,59,236,0.98)'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "border-width", '4px'],
                ["style", "width", '87px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_Hint_4_second}": [
                ["style", "left", '133px']
            ],
            "${_the_rest_of_sentence}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(207,0,0,1.00)'],
                ["style", "font-style", 'normal'],
                ["style", "font-weight", '400'],
                ["style", "left", '144px'],
                ["style", "width", '236px']
            ],
            "${__2_line}": [
                ["style", "top", '-40px'],
                ["style", "left", '2px'],
                ["style", "height", '24px']
            ],
            "${_Order_of_Operations}": [
                ["style", "top", '173px'],
                ["style", "opacity", '0'],
                ["style", "left", '280px']
            ],
            "${_Distance_2_from_0_text}": [
                ["style", "top", '148px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(0,59,236,0.98)'],
                ["style", "font-weight", '700'],
                ["style", "left", '280px'],
                ["style", "width", '217px']
            ],
            "${_Hint_4_-18_plus_2}": [
                ["style", "top", '1px'],
                ["style", "opacity", '0'],
                ["style", "left", '189px']
            ],
            "${_Hint__3_-3}": [
                ["style", "top", '-1px'],
                ["style", "opacity", '0'],
                ["style", "left", '61px'],
                ["color", "color", 'rgba(219,0,13,1)']
            ],
            "${_Hint3_27_minus_30}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(219,0,13,1)']
            ],
            "${_Answer_Hint_-16}": [
                ["style", "top", '312px'],
                ["style", "opacity", '0'],
                ["style", "left", '406px'],
                ["style", "height", '21px']
            ],
            "${_number_line}": [
                ["style", "top", '-26px'],
                ["style", "left", '-235px'],
                ["style", "width", '276px']
            ],
            "${_Hint3_3_cubed_minus_30_}": [
                ["color", "color", 'rgba(219,0,13,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-81px'],
                ["style", "top", '-1px']
            ],
            "${__3x_avsolute_value_of_-2}": [
                ["style", "top", '298px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(163,0,0,0.98)'],
                ["style", "height", '67px'],
                ["style", "opacity", '0'],
                ["style", "left", '211px'],
                ["style", "width", '112px']
            ],
            "${_distance_0_to_-2_text}": [
                ["style", "top", '148px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(1,153,168,0.98)'],
                ["style", "opacity", '0'],
                ["style", "left", '49px'],
                ["style", "width", '225px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '600px']
            ],
            "${_Hint_4_first}": [
                ["style", "opacity", '0']
            ],
            "${_absolute_value}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(207,0,0,1.00)'],
                ["style", "font-style", 'italic'],
                ["style", "height", '20px'],
                ["style", "font-weight", '700'],
                ["style", "left", '28px'],
                ["style", "width", '126px']
            ],
            "${__0_line}": [
                ["style", "top", '-40px'],
                ["style", "left", '-97px'],
                ["style", "height", '24px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 182000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 7000,
                "Hint 2": 68000,
                "Hint 3": 102000,
                "Hint 4": 132000,
                "Answer Hint": 170000
            },
            timeline: [
                { id: "eid178", tween: [ "style", "${_Distance_2_from_0_text}", "opacity", '1', { fromValue: '0.000000'}], position: 33500, duration: 1000 },
                { id: "eid314", tween: [ "color", "${_Hint3_27_minus_30}", "color", 'rgba(219,0,13,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(219,0,13,1)'}], position: 112000, duration: 0 },
                { id: "eid357", tween: [ "style", "${_Answers}", "left", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
                { id: "eid194", tween: [ "style", "${_distance_0_to_2}", "width", '87px', { fromValue: '87px'}], position: 34500, duration: 0 },
                { id: "eid168", tween: [ "color", "${_The}", "color", 'rgba(207,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(207,0,0,1.00)'}], position: 11000, duration: 0 },
                { id: "eid171", tween: [ "style", "${_Number_Line}", "opacity", '1', { fromValue: '0.000000'}], position: 30000, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid362", tween: [ "style", "${_AnswerDText}", "top", '508px', { fromValue: '508px'}], position: 0, duration: 0 },
                { id: "eid236", tween: [ "style", "${_Order_of_Operations}", "opacity", '1', { fromValue: '0.000000'}], position: 75000, duration: 1000 },
                { id: "eid216", tween: [ "style", "${_distance_0_to_2}", "display", 'none', { fromValue: 'block'}], position: 68000, duration: 0 },
                { id: "eid359", tween: [ "style", "${_AnswerAText}", "left", '74px', { fromValue: '74px'}], position: 0, duration: 0 },
                { id: "eid318", tween: [ "color", "${_Hint__3_-3}", "color", 'rgba(219,0,13,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(219,0,13,1)'}], position: 114000, duration: 0 },
                { id: "eid204", tween: [ "style", "${_Absolute_value_of_-2}", "opacity", '1', { fromValue: '0.000000'}], position: 42000, duration: 1000 },
                { id: "eid303", tween: [ "style", "${_distance_0_to_2}", "left", '-93px', { fromValue: '-93px'}], position: 38500, duration: 0 },
                { id: "eid302", tween: [ "style", "${_distance_0_to_2}", "top", '-29px', { fromValue: '-29px'}], position: 38500, duration: 0 },
                { id: "eid296", tween: [ "style", "${_choose_D}", "opacity", '1', { fromValue: '0.000000'}], position: 181000, duration: 1000 },
                { id: "eid167", tween: [ "color", "${_absolute_value}", "color", 'rgba(207,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(207,0,0,1.00)'}], position: 18000, duration: 0 },
                { id: "eid317", tween: [ "style", "${_Hint__3_-3}", "opacity", '1', { fromValue: '0.000000'}], position: 114000, duration: 1000 },
                { id: "eid214", tween: [ "style", "${_Distance_2_from_0_text}", "display", 'none', { fromValue: 'block'}], position: 68000, duration: 0 },
                { id: "eid363", tween: [ "style", "${_AnswerBText}", "left", '74px', { fromValue: '74px'}], position: 0, duration: 0 },
                { id: "eid346", tween: [ "style", "${_Answer_Hint_-16}", "opacity", '1', { fromValue: '0.000000'}], position: 176000, duration: 1000, easing: "easeInCubic" },
                { id: "eid354", tween: [ "style", "${_Hint4_absoulte_-3}", "opacity", '1', { fromValue: '0.000000'}], position: 141000, duration: 667, easing: "easeInQuart" },
                { id: "eid309", tween: [ "style", "${_Hint3_3_cubed_minus_30_}", "opacity", '1', { fromValue: '0.000000'}], position: 110000, duration: 1000 },
                { id: "eid229", tween: [ "color", "${_Parentheses}", "color", 'rgba(6,74,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(6,74,151,1.00)'}], position: 75000, duration: 0 },
                { id: "eid333", tween: [ "style", "${_Hint4_-6_second}", "opacity", '1', { fromValue: '0.000000'}], position: 148000, duration: 1000, easing: "easeInCubic" },
                { id: "eid349", tween: [ "style", "${_Hint_4_first}", "opacity", '1', { fromValue: '0.000000'}], position: 137000, duration: 1000 },
                { id: "eid365", tween: [ "style", "${_AnswerCText}", "left", '74px', { fromValue: '74px'}], position: 0, duration: 0 },
                { id: "eid304", tween: [ "style", "${_Number_Line}", "left", '378px', { fromValue: '378px'}], position: 38500, duration: 0 },
                { id: "eid190", tween: [ "color", "${_distance_0_to_-2_text}", "color", 'rgba(1,153,168,0.98)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(1,153,168,0.98)'}], position: 37500, duration: 0 },
                { id: "eid343", tween: [ "style", "${_Hint_4_-18_plus_2}", "opacity", '1', { fromValue: '0.000000'}], position: 152500, duration: 1000, easing: "easeInCubic" },
                { id: "eid205", tween: [ "color", "${__3x_avsolute_value_of_-2}", "color", 'rgba(163,0,0,0.98)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(163,0,0,0.98)'}], position: 58000, duration: 0 },
                { id: "eid234", tween: [ "color", "${_Addition_or_Subtraction}", "color", 'rgba(6,74,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(6,74,151,1.00)'}], position: 75000, duration: 0 },
                { id: "eid240", tween: [ "style", "${_Hint2_text}", "opacity", '1', { fromValue: '0.000000'}], position: 100000, duration: 1000 },
                { id: "eid232", tween: [ "color", "${_Exponents}", "color", 'rgba(6,74,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(6,74,151,1.00)'}], position: 75000, duration: 0 },
                { id: "eid334", tween: [ "color", "${_Hint_4_parentheses3}", "color", 'rgba(219,0,13,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(219,0,13,1.00)'}], position: 149000, duration: 0, easing: "easeInCubic" },
                { id: "eid193", tween: [ "style", "${_distance_0_to_-2_text}", "opacity", '1', { fromValue: '0.000000'}], position: 37500, duration: 1000 },
                { id: "eid174", tween: [ "style", "${_distance_0_to_2}", "opacity", '1', { fromValue: '0.000000'}], position: 32000, duration: 500 },
                { id: "eid212", tween: [ "style", "${_Absolute_value_of_-2}", "display", 'none', { fromValue: 'block'}], position: 68000, duration: 0 },
                { id: "eid201", tween: [ "style", "${_Absolute_value_of_2}", "opacity", '1', { fromValue: '0.000000'}], position: 40000, duration: 1000 },
                { id: "eid321", tween: [ "style", "${_Hint_4_-6}", "opacity", '1', { fromValue: '0.000000'}], position: 139000, duration: 1000 },
                { id: "eid366", tween: [ "style", "${_AnswerCText}", "top", '472px', { fromValue: '472px'}], position: 0, duration: 0 },
                { id: "eid340", tween: [ "style", "${_Hint_4_plus_2_third}", "opacity", '1', { fromValue: '0.000000'}], position: 150500, duration: 1000, easing: "easeInCubic" },
                { id: "eid364", tween: [ "style", "${_AnswerBText}", "top", '440px', { fromValue: '440px'}], position: 0, duration: 0 },
                { id: "eid217", tween: [ "style", "${_Number_Line}", "display", 'none', { fromValue: 'block'}], position: 68000, duration: 0 },
                { id: "eid310", tween: [ "color", "${_Hint3_3_cubed_minus_30_}", "color", 'rgba(219,0,13,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(219,0,13,1.00)'}], position: 110000, duration: 0 },
                { id: "eid358", tween: [ "style", "${_Answers}", "top", '383px', { fromValue: '383px'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 3000 },
                { id: "eid215", tween: [ "style", "${_Absolute_value_of_2}", "display", 'none', { fromValue: 'block'}], position: 68000, duration: 0 },
                { id: "eid165", tween: [ "style", "${_Hint_1_text_1}", "opacity", '1', { fromValue: '0.000000'}], position: 18000, duration: 1000 },
                { id: "eid184", tween: [ "color", "${_distance_0_to_2}", "background-color", 'rgba(0,59,236,0.98)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,59,236,0.98)'}], position: 32000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid210", tween: [ "style", "${__3x_avsolute_value_of_-2}", "display", 'none', { fromValue: 'block'}], position: 68000, duration: 0 },
                { id: "eid233", tween: [ "color", "${_Multiplication_or_division}", "color", 'rgba(6,74,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(6,74,151,1.00)'}], position: 75000, duration: 0 },
                { id: "eid198", tween: [ "style", "${_distance_0_to_-2}", "opacity", '1', { fromValue: '0.000000'}], position: 36000, duration: 500 },
                { id: "eid313", tween: [ "style", "${_Hint3_27_minus_30}", "opacity", '1', { fromValue: '0.000000'}], position: 112000, duration: 1000 },
                { id: "eid209", tween: [ "style", "${__3x_avsolute_value_of_-2}", "opacity", '1', { fromValue: '0.000000'}], position: 58000, duration: 1000 },
                { id: "eid356", tween: [ "style", "${_Hint4_absoulte_-3}", "top", '0px', { fromValue: '-56px'}], position: 141000, duration: 4000, easing: "easeInQuart" },
                { id: "eid185", tween: [ "color", "${_distance_0_to_2}", "border-color", 'rgba(0,59,236,0.98)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,59,236,0.98)'}], position: 32000, duration: 0 },
                { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid211", tween: [ "style", "${_distance_0_to_-2_text}", "display", 'none', { fromValue: 'block'}], position: 68000, duration: 0 },
                { id: "eid166", tween: [ "color", "${_the_rest_of_sentence}", "color", 'rgba(207,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(207,0,0,1.00)'}], position: 18000, duration: 0 },
                { id: "eid330", tween: [ "style", "${_Hint_4_plus_2_second}", "opacity", '1', { fromValue: '0.000000'}], position: 146000, duration: 1000, easing: "easeInCubic" },
                { id: "eid355", tween: [ "style", "${_Hint4_absoulte_-3}", "left", '23px', { fromValue: '159px'}], position: 141000, duration: 4000, easing: "easeInQuart" },
                { id: "eid218", tween: [ "style", "${_Hint_1_text_1}", "display", 'none', { fromValue: 'block'}], position: 68000, duration: 0 },
                { id: "eid305", tween: [ "style", "${_Number_Line}", "top", '224px', { fromValue: '224px'}], position: 38500, duration: 0 },
                { id: "eid361", tween: [ "style", "${_AnswerDText}", "left", '74px', { fromValue: '74px'}], position: 0, duration: 0 },
                { id: "eid337", tween: [ "style", "${_Hint_4_parentheses3}", "opacity", '1', { fromValue: '0.000000'}], position: 149000, duration: 1000, easing: "easeInCubic" },
                { id: "eid360", tween: [ "style", "${_AnswerAText}", "top", '405px', { fromValue: '405px'}], position: 0, duration: 0 },
                { id: "eid213", tween: [ "style", "${_distance_0_to_-2}", "display", 'none', { fromValue: 'block'}], position: 68000, duration: 0 },
                { id: "eid367", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid368", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1a}', [] ], ""], position: 7000 },
                { id: "eid369", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1b}', [] ], ""], position: 11000 },
                { id: "eid370", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1c}', [] ], ""], position: 20000 },
                { id: "eid371", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1d}', [] ], ""], position: 44000 },
                { id: "eid372", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1e}', [] ], ""], position: 60000 },
                { id: "eid373", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2a}', [] ], ""], position: 68011 },
                { id: "eid374", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2b}', [] ], ""], position: 77000 },
                { id: "eid375", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2c}', [] ], ""], position: 88000 },
                { id: "eid376", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3a}', [] ], ""], position: 102000 },
                { id: "eid377", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3b}', [] ], ""], position: 116000 },
                { id: "eid378", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3c}', [] ], ""], position: 125000 },
                { id: "eid379", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4a}', [] ], ""], position: 132000 },
                { id: "eid380", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4b}', [] ], ""], position: 154500 },
                { id: "eid381", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answerhint1}', [] ], ""], position: 170000 },
                { id: "eid382", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answerhint2}', [] ], ""], position: 178000 }            ]
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
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
            dom: [
                {
                    id: 'E_Button',
                    type: 'group',
                    rect: ['0px', '0px', '25', '24', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text8',
                        type: 'text'
                    },
                    {
                        rect: ['-8px', '-3px', '42px', '33px', 'auto', 'auto'],
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
            "${_E_Button}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
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
            duration: 10000,
            autoPlay: true,
            labels: {
                "Nothing Selected": 0,
                "Answer Incorrect": 5000,
                "Answer Correct": 10000
            },
            timeline: [
                { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid43", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid44", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 }            ]
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
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text14',
                        text: 'Answer E Text',
                        align: 'left',
                        type: 'text'
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
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text8',
                        text: 'E',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text14',
                        text: 'Answer E Text',
                        align: 'left',
                        type: 'text'
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
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
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text13',
                        text: 'Answer D Text',
                        align: 'left',
                        type: 'text'
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
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['36px', '4px', '101px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text13',
                        text: 'Answer D Text',
                        align: 'left',
                        type: 'text'
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
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text7',
                        text: 'D<br>',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['36px', '4px', '94px', '20px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text13',
                        text: 'Answer Text D',
                        align: 'left',
                        type: 'text'
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text5',
                        text: 'C',
                        align: 'center',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto']
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
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text',
                        id: 'Text4',
                        text: 'B',
                        align: 'center',
                        rect: ['0px', '5px', '27px', '19px', 'auto', 'auto']
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
                        type: 'text',
                        rect: ['0px', '3px', '27px', '19px', 'auto', 'auto'],
                        id: 'A',
                        text: 'A<br><br><br>',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
                        rect: ['0px', '3px', '27px', '19px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text3',
                        text: 'A<br><br><br>',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['36px', '3px', '109px', '19px', 'auto', 'auto'],
                        font: ['Georgia, \'Times New Roman\', Times, serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        id: 'Text9',
                        text: 'Answer Text A',
                        align: 'left',
                        type: 'text'
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
                symbolName: 'DButton_3'
            },
            {
                id: 'EButton',
                symbolName: 'EButton_3'
            },
            {
                id: 'BButton',
                symbolName: 'BButton_3'
            },
            {
                id: 'CButton',
                symbolName: 'CButton_3'
            },
            {
                id: 'AButton',
                symbolName: 'AButton_3'
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
            duration: 0,
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
