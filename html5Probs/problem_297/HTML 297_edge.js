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
                rect: ['15px', '28px','311px','151px','auto', 'auto'],
                text: "Thomas plays a number game using a spinner with four congruent sections. The sections are labeled W, X, Y, and Z.  In the game, a player receives the number of points represented by the expression in the section where the arrow stops. The first player to get 20 points or more wins. <br>Which section is the most desirable for the arrow to land on?",
                align: "justify",
                font: ['Times New Roman, Times, serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Answers',
                type: 'rect',
                rect: ['26px', '403px','auto','auto','auto', 'auto']
            },
            {
                id: 'AnswerDText',
                type: 'text',
                rect: ['73px', '544px','101px','20px','auto', 'auto'],
                text: "Z",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerCText',
                type: 'text',
                rect: ['73px', '508px','101px','19px','auto', 'auto'],
                text: "Y",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerBText',
                type: 'text',
                rect: ['73px', '474px','112px','19px','auto', 'auto'],
                text: "X",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'AnswerAText',
                type: 'text',
                rect: ['73px', '439px','109px','19px','auto', 'auto'],
                text: "W",
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
                rect: ['260px', '51px','237px','187px','auto', 'auto'],
                text: "Let's pretend your hint starts here at 0:10. It does not really matter where the hints start and end, as long as they don't overlap. Don't worry that the X and Checks are showing up either - it's just because I set their timeline to 5 seconds in the symbol. They won't appear in the final animation.<br><br>This rectangle is a space for you to draw your animation. An example will follow in hint 2.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Problem_figure',
                type: 'group',
                rect: ['218', '319','26','19','auto', 'auto'],
                c: [
                {
                    id: 'Y',
                    type: 'text',
                    rect: ['0px', '0px','26px','19px','auto', 'auto'],
                    text: "Y",
                    align: "justify",
                    font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1.00)", "800", "none", "normal"]
                },
                {
                    id: 'Z',
                    type: 'text',
                    rect: ['-38px', '0px','26px','19px','auto', 'auto'],
                    text: "Z",
                    align: "justify",
                    font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1.00)", "800", "none", "normal"]
                },
                {
                    id: 'X',
                    type: 'text',
                    rect: ['8px', '-120px','26px','29px','auto', 'auto'],
                    text: "X",
                    align: "justify",
                    font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1.00)", "800", "none", "normal"]
                },
                {
                    id: 'W',
                    type: 'text',
                    rect: ['-46px', '-120px','26px','20px','auto', 'auto'],
                    text: "W",
                    align: "justify",
                    font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1.00)", "800", "none", "normal"]
                },
                {
                    id: '_2SQRT7',
                    type: 'image',
                    rect: ['8px', '-46px','34px','17px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"2SQRT7.svg",'0px','0px']
                },
                {
                    id: '_5_plus_SQRT_3',
                    type: 'image',
                    rect: ['-77px', '-76px','48px','18px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"5%20plus%20SQRT%203.svg",'0px','0px']
                },
                {
                    id: 'HTML_297_problem_figure',
                    type: 'image',
                    rect: ['-108px', '-147px','203px','183px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"HTML%20297%20problem%20figure.png",'0px','0px']
                },
                {
                    id: '_3Squared',
                    type: 'image',
                    rect: ['-47px', '-43px','18px','19px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"3Squared.svg",'0px','0px']
                },
                {
                    id: 'X_value',
                    type: 'text',
                    rect: ['3px', '-75px','46px','16px','auto', 'auto'],
                    text: "8-2x3",
                    align: "justify",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Tips',
                type: 'group',
                rect: ['350px', '31px','58','20','auto', 'auto'],
                c: [
                {
                    id: 'Tip_text',
                    type: 'text',
                    rect: ['0px', '0px','58px','20px','auto', 'auto'],
                    text: "Tip:",
                    align: "left",
                    font: ['Verdana, Geneva, sans-serif', 16, "rgba(4,115,152,1.00)", "800", "none", "normal"]
                },
                {
                    id: '_equals_1',
                    type: 'text',
                    rect: ['46px', '40px','58px','16px','auto', 'auto'],
                    text: "= 1",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(20,150,40,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'equals_2',
                    type: 'text',
                    rect: ['29px', '84px','48px','16px','auto', 'auto'],
                    text: "= 2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(20,150,40,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'equals_3',
                    type: 'text',
                    rect: ['29px', '130px','42px','20px','auto', 'auto'],
                    text: "= 3",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(20,150,40,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'SQRT4',
                    type: 'image',
                    rect: ['0px', '83px','24px','18px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"SQRT4.svg",'0px','0px']
                },
                {
                    id: 'SQRT9',
                    type: 'image',
                    rect: ['0px', '129px','24px','18px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"SQRT9.svg",'0px','0px']
                },
                {
                    id: 'SQRT1',
                    type: 'image',
                    rect: ['0px', '30px','24px','18px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"SQRT1.svg",'0px','0px']
                }]
            },
            {
                id: 'Hint1_text',
                type: 'text',
                rect: ['310px', '207px','179px','36px','auto', 'auto'],
                text: "Which is the largest value in the four sections?<br>",
                align: "justify",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(114,3,3,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'W_value',
                type: 'text',
                rect: ['326px', '209px','119px','20px','auto', 'auto'],
                text: "6&lt;W&lt;7",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1.00)", "800", "none", "normal"]
            },
            {
                id: 'Hint_2_W',
                type: 'text',
                rect: ['172px', '199px','26px','20px','auto', 'auto'],
                text: "W",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1.00)", "800", "none", "normal"]
            },
            {
                id: 'W_equals',
                type: 'text',
                rect: ['336px', '209px','58px','16px','auto', 'auto'],
                text: "= ? ",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1)", "800", "none", "normal"]
            },
            {
                id: 'SQRT3_equals_question',
                type: 'text',
                rect: ['379px', '87px','58px','16px','auto', 'auto'],
                text: "= ?",
                align: "justify",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(170,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'SQRT7_equal_question',
                type: 'text',
                rect: ['379px', '138px','52px','16px','auto', 'auto'],
                text: "= ?",
                align: "justify",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(170,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'SQRT3',
                type: 'image',
                rect: ['350px', '85px','24px','18px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SQRT3.svg",'0px','0px']
            },
            {
                id: 'Hint_3_5_SQRT_1',
                type: 'group',
                rect: ['313px', '244px','50','30','auto', 'auto'],
                c: [
                {
                    id: 'Hint3_5plus_SQRT1',
                    type: 'image',
                    rect: ['0px', '0px','50px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Hint3%205plus%20SQRT1.svg",'0px','0px']
                },
                {
                    id: 'Hint3_5_plus_1',
                    type: 'text',
                    rect: ['61px', '2px','52px','16px','auto', 'auto'],
                    text: "= 5 +1",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'equals_6',
                    type: 'text',
                    rect: ['113px', '2px','58px','16px','auto', 'auto'],
                    text: "= 6",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Hint3_6_blue',
                type: 'text',
                rect: ['437px', '242px','18px','17px','auto', 'auto'],
                text: "6",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1)", "800", "none", "normal"]
            },
            {
                id: 'Hint4_SQRT7',
                type: 'image',
                rect: ['350px', '136px','24px','18px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Hint4%20SQRT7.svg",'0px','0px']
            },
            {
                id: 'Hint_3_5_plus_SQRT_3',
                type: 'group',
                rect: ['313', '275','48px','18px','auto', 'auto'],
                c: [
                {
                    id: 'Hint3_5_plus_SQRT3',
                    type: 'image',
                    rect: ['-173px', '-32px','50px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Hint3%205%20plus%20SQRT3.svg",'0px','0px']
                },
                {
                    id: 'Hint3_equals_question_mark',
                    type: 'text',
                    rect: ['61px', '4px','79px','16px','auto', 'auto'],
                    text: "= ?",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(170,0,0,1.00)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Hint_3_5_Plus_SQRT_4',
                type: 'group',
                rect: ['313', '305','50','30','auto', 'auto'],
                c: [
                {
                    id: 'Hint3_5_plus_SQRT4',
                    type: 'image',
                    rect: ['0px', '0px','50px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Hint3%205%20plus%20SQRT4.svg",'0px','0px']
                },
                {
                    id: 'Hint3_5_plus_2',
                    type: 'text',
                    rect: ['61px', '2px','56px','16px','auto', 'auto'],
                    text: "= 5 + 2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Hint3_equals_7',
                    type: 'text',
                    rect: ['114px', '3px','52px','17px','auto', 'auto'],
                    text: "= 7",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Hint_4_Y',
                type: 'text',
                rect: ['218px', '320px','26px','17px','auto', 'auto'],
                text: "Y",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1.00)", "800", "none", "normal"]
            },
            {
                id: 'Hint_5_Y_value',
                type: 'text',
                rect: ['320px', '202px','101px','17px','auto', 'auto'],
                text: "4&lt;Y&lt;6",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1)", "800", "none", "normal"]
            },
            {
                id: 'Hint3_7_blue',
                type: 'text',
                rect: ['438px', '304px','19px','20px','auto', 'auto'],
                text: "7<br>",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1)", "800", "none", "normal"]
            },
            {
                id: 'Hint_4_Y_equals_question',
                type: 'text',
                rect: ['332px', '200px','58px','17px','auto', 'auto'],
                text: "= ?",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1)", "800", "none", "normal"]
            },
            {
                id: 'Hint_5_2SQRT4',
                display: 'block',
                type: 'group',
                rect: ['305', '232','60','20','auto', 'auto'],
                c: [
                {
                    id: 'Hint5_2_times_SQRT4',
                    type: 'image',
                    rect: ['0px', '0px','60px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Hint5%202%20times%20SQRT4.svg",'0px','0px']
                },
                {
                    id: 'Hint5_equals_2_times_2',
                    type: 'text',
                    rect: ['69px', '2px','77px','16px','auto', 'auto'],
                    text: "= 2 x 2 =",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "normal", "none", ""]
                },
                {
                    id: 'Hint5_4',
                    type: 'text',
                    rect: ['148px', '3px','25px','16px','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Hint_5_2SQRT9',
                display: 'block',
                type: 'group',
                rect: ['375px', '305px','64','16','auto', 'auto'],
                c: [
                {
                    id: 'Hint5_equals_2_times_3',
                    type: 'text',
                    rect: ['0px', '0px','78px','16px','auto', 'auto'],
                    text: "= 2 x 3 =",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Hint5_2_times_SQRT9',
                    type: 'image',
                    rect: ['-69px', '-2px','60px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Hint5%202%20times%20SQRT9.svg",'0px','0px']
                },
                {
                    id: 'Hint_5_6',
                    type: 'text',
                    rect: ['77px', '0px','27px','17px','auto', 'auto'],
                    text: "6",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Hint_5_2_SQRT7',
                display: 'block',
                type: 'group',
                rect: ['305', '270','60','20','auto', 'auto'],
                c: [
                {
                    id: 'Hint5_2_times_SQRT7',
                    type: 'image',
                    rect: ['-79px', '2px','60px','20px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Hint5%202%20times%20SQRT7.svg",'0px','0px']
                },
                {
                    id: 'Hint5_equals_question_mark',
                    type: 'text',
                    rect: ['72px', '2px','76px','16px','auto', 'auto'],
                    text: "= ?",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(170,0,0,1.00)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Hint_5_blue_6',
                type: 'text',
                rect: ['451px', '303px','18px','16px','auto', 'auto'],
                text: "6",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1)", "800", "none", "normal"]
            },
            {
                id: 'Hint5_blue_4',
                type: 'text',
                rect: ['451px', '232px','34px','16px','auto', 'auto'],
                text: "4",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1)", "800", "none", "normal"]
            },
            {
                id: 'Hint_6_X',
                type: 'text',
                rect: ['226px', '200px','26px','29px','auto', 'auto'],
                text: "X",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1.00)", "800", "none", "normal"]
            },
            {
                id: 'Hint_6_equals_question_mark',
                type: 'text',
                rect: ['329px', '199px','76px','16px','auto', 'auto'],
                text: "= ?",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1)", "800", "none", "normal"]
            },
            {
                id: 'Hint_6_blue_equals',
                type: 'text',
                rect: ['326px', '199px','34px','16px','auto', 'auto'],
                text: "=",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1)", "800", "none", "normal"]
            },
            {
                id: 'X_Value',
                type: 'text',
                rect: ['306px', '199px','56px','16px','auto', 'auto'],
                text: " X = 2",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1)", "800", "none", "normal"]
            },
            {
                id: 'Hint_6_X_expression_solving_equation',
                display: 'block',
                type: 'group',
                rect: ['304', '248','46','16','auto', 'auto'],
                c: [
                {
                    id: 'Hint_6_X_value',
                    type: 'text',
                    rect: ['-83px', '-4px','46px','16px','auto', 'auto'],
                    text: "8-2x3",
                    align: "justify",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Hint_6_equals_8_minus_6',
                    type: 'text',
                    rect: ['44px', '0px','60px','16px','auto', 'auto'],
                    text: "= 8- 6 =",
                    align: "justify",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                },
                {
                    id: 'Hint_6_2',
                    type: 'text',
                    rect: ['104px', '0px','34px','16px','auto', 'auto'],
                    text: "2",
                    align: "justify",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'Hint_6_blue_2',
                type: 'text',
                rect: ['408px', '244px','34px','20px','auto', 'auto'],
                text: "2",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1)", "800", "none", "normal"]
            },
            {
                id: 'Hint_7_equals_question_mark',
                type: 'text',
                rect: ['340px', '209px','46px','16px','auto', 'auto'],
                text: "= ?",
                align: "justify",
                font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1)", "800", "none", "normal"]
            },
            {
                id: 'Hint_7_Z_value',
                type: 'group',
                rect: ['340', '209','34','25','auto', 'auto'],
                c: [
                {
                    id: 'Hint_7_Z',
                    type: 'text',
                    rect: ['-160px', '110px','26px','19px','auto', 'auto'],
                    text: "Z",
                    align: "justify",
                    font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1.00)", "800", "none", "normal"]
                },
                {
                    id: 'Hint_7_blue_equals',
                    type: 'text',
                    rect: ['0px', '0px','34px','25px','auto', 'auto'],
                    text: "=",
                    align: "justify",
                    font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1)", "800", "none", "normal"]
                },
                {
                    id: 'Hint_7_9_blue',
                    type: 'text',
                    rect: ['63px', '43px','26px','16px','auto', 'auto'],
                    text: "9",
                    align: "justify",
                    font: ['Verdana, Geneva, sans-serif', 18, "rgba(7,66,195,1)", "800", "none", "normal"]
                }]
            },
            {
                id: 'question',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/question.mp3','media/question.ogg']
            },
            {
                id: 'Hint_7_3SquaredCOPY',
                type: 'image',
                rect: ['171px', '276px','18px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3Squared.svg",'0px','0px']
            },
            {
                id: 'Hint_7_3_times_3_equals',
                type: 'text',
                rect: ['337px', '255px','65px','17px','auto', 'auto'],
                text: "= 3 x 3 =",
                align: "justify",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Hint_7_9',
                type: 'text',
                rect: ['403px', '255px','26px','16px','auto', 'auto'],
                text: "9",
                align: "justify",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Choose_d',
                type: 'text',
                rect: ['363px', '355px','115px','28px','auto', 'auto'],
                text: "Choose (D)",
                align: "justify",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(26,130,2,1.00)", "600", "none", "normal"]
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
                id: 'hint5a',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint5a.mp3','media/hint5a.ogg']
            },
            {
                id: 'hint5b',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint5b.ogg','media/hint5b.mp3']
            },
            {
                id: 'hint6a',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint6a.ogg','media/hint6a.mp3']
            },
            {
                id: 'hint6b',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint6b.mp3','media/hint6b.ogg']
            },
            {
                id: 'hint7a',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint7a.ogg','media/hint7a.mp3']
            },
            {
                id: 'hint7b',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint7b.mp3','media/hint7b.ogg']
            },
            {
                id: 'hint7c',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint7c.ogg','media/hint7c.mp3']
            },
            {
                id: 'answerhint',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answerhint.mp3','media/answerhint.ogg']
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
            "${_X}": [
                ["style", "top", '-120px'],
                ["style", "height", '29px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(7,66,195,1.00)'],
                ["style", "font-weight", '800'],
                ["style", "left", '8px'],
                ["style", "font-size", '18px']
            ],
            "${_Hint3_equals_question_mark}": [
                ["style", "top", '4px'],
                ["style", "opacity", '0'],
                ["style", "left", '61px'],
                ["color", "color", 'rgba(170,0,0,1.00)']
            ],
            "${_Hint4_SQRT7}": [
                ["style", "top", '136px'],
                ["style", "height", '18px'],
                ["style", "opacity", '0'],
                ["style", "left", '350px'],
                ["style", "width", '24px']
            ],
            "${_Hint_3_5_plus_SQRT_3}": [
                ["style", "height", '18px'],
                ["style", "opacity", '1'],
                ["style", "width", '48px']
            ],
            "${__equals_1}": [
                ["style", "top", '32px'],
                ["color", "color", 'rgba(20,150,40,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '29px'],
                ["style", "font-size", '16px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_equals_2}": [
                ["style", "top", '84px'],
                ["style", "left", '29px'],
                ["color", "color", 'rgba(20,150,40,1.00)']
            ],
            "${_SQRT9}": [
                ["style", "top", '129px'],
                ["style", "height", '18px'],
                ["style", "left", '0px'],
                ["style", "width", '24px']
            ],
            "${_AnswerDText}": [
                ["style", "top", '544px'],
                ["style", "width", '101px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '73px'],
                ["style", "font-size", '14px']
            ],
            "${_Hint3_5_plus_2}": [
                ["style", "top", '2px'],
                ["style", "opacity", '0'],
                ["style", "left", '61px'],
                ["style", "width", '56px']
            ],
            "${_Hint_4_Y_equals_question}": [
                ["style", "top", '200px'],
                ["style", "opacity", '0'],
                ["style", "left", '332px']
            ],
            "${_Hint_6_blue_equals}": [
                ["style", "top", '199px'],
                ["style", "opacity", '0'],
                ["style", "left", '326px']
            ],
            "${_X_value}": [
                ["style", "top", '-75px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '3px']
            ],
            "${_Hint_6_blue_2}": [
                ["style", "top", '244px'],
                ["style", "opacity", '0'],
                ["style", "left", '408px']
            ],
            "${_Hint_6_X}": [
                ["style", "top", '200px'],
                ["style", "opacity", '0'],
                ["style", "height", '29px'],
                ["style", "font-weight", '800'],
                ["color", "color", 'rgba(7,66,195,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '226px'],
                ["style", "font-size", '18px']
            ],
            "${_Hint_5_2_SQRT7}": [
                ["style", "display", 'block']
            ],
            "${_W_equals}": [
                ["style", "top", '209px'],
                ["style", "opacity", '0'],
                ["style", "left", '336px']
            ],
            "${_Hint_5_2SQRT9}": [
                ["style", "top", '305px'],
                ["style", "left", '375px'],
                ["style", "display", 'block']
            ],
            "${_SQRT1}": [
                ["style", "top", '30px'],
                ["style", "height", '18px'],
                ["style", "left", '0px'],
                ["style", "width", '24px']
            ],
            "${_Hint_7_Z}": [
                ["style", "top", '110px'],
                ["style", "opacity", '0'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(7,66,195,1.00)'],
                ["style", "font-weight", '800'],
                ["style", "left", '-160px'],
                ["style", "font-size", '18px']
            ],
            "${_Y}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '800'],
                ["color", "color", 'rgba(7,66,195,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ],
            "${_TutorialText}": [
                ["style", "top", '51px'],
                ["style", "height", '187px'],
                ["style", "opacity", '1'],
                ["style", "left", '260px'],
                ["style", "display", 'none']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_HTML_297_problem_figure}": [
                ["style", "height", '183px'],
                ["style", "top", '-147px'],
                ["style", "left", '-108px'],
                ["style", "width", '203px']
            ],
            "${_Hint3_equals_7}": [
                ["style", "top", '3px'],
                ["style", "opacity", '0'],
                ["style", "left", '114px']
            ],
            "${_equals_3}": [
                ["style", "top", '130px'],
                ["style", "width", '42px'],
                ["color", "color", 'rgba(20,150,40,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '29px'],
                ["style", "font-size", '16px']
            ],
            "${__2SQRT7}": [
                ["style", "height", '17px'],
                ["style", "top", '-46px'],
                ["style", "left", '8px'],
                ["style", "width", '34px']
            ],
            "${_Hint5_equals_question_mark}": [
                ["style", "top", '2px'],
                ["style", "opacity", '0'],
                ["style", "left", '72px'],
                ["color", "color", 'rgba(170,0,0,1.00)']
            ],
            "${_Hint_7_3SquaredCOPY}": [
                ["style", "top", '276px'],
                ["style", "height", '19px'],
                ["style", "opacity", '0'],
                ["style", "left", '171px'],
                ["style", "width", '18px']
            ],
            "${_Hint_4_Y}": [
                ["color", "color", 'rgba(7,66,195,1.00)'],
                ["style", "font-weight", '800'],
                ["style", "left", '218px'],
                ["style", "font-size", '18px'],
                ["style", "top", '320px'],
                ["style", "height", '17px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "opacity", '0'],
                ["style", "width", '26px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '600px']
            ],
            "${__3Squared}": [
                ["style", "height", '19px'],
                ["style", "top", '-43px'],
                ["style", "left", '-47px'],
                ["style", "width", '18px']
            ],
            "${_Hint3_5_plus_1}": [
                ["style", "top", '2px'],
                ["style", "font-size", '16px'],
                ["style", "opacity", '0'],
                ["style", "left", '61px'],
                ["style", "width", '52px']
            ],
            "${_Hint_5_6}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '77px'],
                ["style", "width", '27px']
            ],
            "${_X_Value}": [
                ["style", "top", '199px'],
                ["style", "opacity", '0'],
                ["style", "left", '306px']
            ],
            "${_W}": [
                ["style", "top", '-120px'],
                ["style", "font-weight", '800'],
                ["color", "color", 'rgba(7,66,195,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '-46px'],
                ["style", "font-size", '18px']
            ],
            "${__5_plus_SQRT_3}": [
                ["style", "height", '18px'],
                ["style", "top", '-76px'],
                ["style", "left", '-77px'],
                ["style", "width", '48px']
            ],
            "${_SQRT3}": [
                ["style", "top", '85px'],
                ["style", "height", '18px'],
                ["style", "opacity", '0'],
                ["style", "left", '350px'],
                ["style", "width", '24px']
            ],
            "${_Hint_7_Z_value}": [
                ["style", "left", '340px'],
                ["style", "top", '209px']
            ],
            "${_Hint5_blue_4}": [
                ["style", "top", '232px'],
                ["style", "opacity", '0'],
                ["style", "left", '451px']
            ],
            "${_Hint1_text}": [
                ["style", "top", '207px'],
                ["style", "font-size", '14px'],
                ["style", "height", '36px'],
                ["color", "color", 'rgba(114,3,3,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '310px'],
                ["style", "width", '179px']
            ],
            "${_Hint_7_equals_question_mark}": [
                ["style", "top", '209px'],
                ["style", "opacity", '0'],
                ["style", "left", '340px']
            ],
            "${_Hint5_2_times_SQRT4}": [
                ["style", "top", '0px'],
                ["style", "height", '20px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '60px']
            ],
            "${_Hint5_4}": [
                ["style", "top", '3px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '148px'],
                ["style", "width", '25px']
            ],
            "${_Tips}": [
                ["style", "top", '31px'],
                ["style", "opacity", '0'],
                ["style", "left", '350px']
            ],
            "${_equals_6}": [
                ["style", "top", '2px'],
                ["style", "opacity", '0'],
                ["style", "left", '113px']
            ],
            "${_Hint_6_X_value}": [
                ["style", "top", '-4px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-83px'],
                ["style", "opacity", '0']
            ],
            "${_Hint3_5_plus_SQRT3}": [
                ["style", "top", '-32px'],
                ["style", "height", '18px'],
                ["style", "opacity", '0'],
                ["style", "left", '-173px'],
                ["style", "width", '48px']
            ],
            "${_Hint_5_2SQRT4}": [
                ["style", "display", 'block'],
                ["style", "opacity", '1']
            ],
            "${_Hint3_7_blue}": [
                ["style", "top", '304px'],
                ["style", "opacity", '0'],
                ["style", "left", '438px'],
                ["style", "width", '19px']
            ],
            "${_Question_Text}": [
                ["style", "top", '28px'],
                ["style", "text-align", 'justify'],
                ["style", "width", '311px'],
                ["style", "height", '151px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '15px'],
                ["style", "font-size", '16px']
            ],
            "${_Hint_6_equals_8_minus_6}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '44px'],
                ["style", "width", '60px']
            ],
            "${_Hint5_equals_2_times_2}": [
                ["style", "top", '2px'],
                ["style", "width", '77px'],
                ["style", "opacity", '0'],
                ["style", "left", '69px'],
                ["style", "font-size", '18px']
            ],
            "${_Hint5_2_times_SQRT9}": [
                ["style", "top", '-2px'],
                ["style", "height", '20px'],
                ["style", "opacity", '0'],
                ["style", "left", '-69px'],
                ["style", "width", '60px']
            ],
            "${_AnswerBText}": [
                ["style", "top", '474px'],
                ["style", "width", '112px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '73px'],
                ["style", "font-size", '14px']
            ],
            "${_Hint_3_5_SQRT_1}": [
                ["style", "opacity", '1']
            ],
            "${_Hint_6_X_expression_solving_equation}": [
                ["style", "display", 'block']
            ],
            "${_Z}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '800'],
                ["color", "color", 'rgba(7,66,195,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '-38px'],
                ["style", "font-size", '18px']
            ],
            "${_AnswerCText}": [
                ["style", "top", '508px'],
                ["style", "width", '101px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '73px'],
                ["style", "font-size", '14px']
            ],
            "${_Hint_3_5_Plus_SQRT_4}": [
                ["style", "opacity", '1']
            ],
            "${_AnswerAText}": [
                ["style", "top", '439px'],
                ["style", "text-align", 'left'],
                ["style", "width", '109px'],
                ["style", "height", '19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '73px'],
                ["style", "font-size", '14px']
            ],
            "${_Hint_6_equals_question_mark}": [
                ["style", "top", '199px'],
                ["style", "opacity", '0'],
                ["style", "left", '329px']
            ],
            "${_SQRT4}": [
                ["style", "top", '83px'],
                ["style", "height", '18px'],
                ["style", "left", '0px'],
                ["style", "width", '24px']
            ],
            "${_Hint_2_W}": [
                ["color", "color", 'rgba(7,66,195,1.00)'],
                ["style", "font-weight", '800'],
                ["style", "left", '172px'],
                ["style", "width", '26px'],
                ["style", "top", '199px'],
                ["style", "height", '20px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "opacity", '1'],
                ["style", "font-size", '18px']
            ],
            "${_Hint_6_2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '104px']
            ],
            "${_SQRT3_equals_question}": [
                ["style", "top", '87px'],
                ["style", "opacity", '0'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(170,0,0,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '379px'],
                ["style", "font-size", '14px']
            ],
            "${_W_value}": [
                ["style", "top", '209px'],
                ["style", "height", '20px'],
                ["color", "color", 'rgba(7,66,195,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '326px'],
                ["style", "width", '76px']
            ],
            "${_Hint5_equals_2_times_3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '78px']
            ],
            "${_Hint_5_blue_6}": [
                ["style", "top", '303px'],
                ["style", "opacity", '0'],
                ["style", "left", '451px']
            ],
            "${_Hint3_6_blue}": [
                ["style", "top", '242px'],
                ["style", "opacity", '0'],
                ["style", "left", '437px'],
                ["style", "width", '18px']
            ],
            "${_Hint3_5_plus_SQRT4}": [
                ["style", "top", '0px'],
                ["style", "height", '18px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '48px']
            ],
            "${_Hint5_2_times_SQRT7}": [
                ["style", "top", '2px'],
                ["style", "height", '20px'],
                ["style", "opacity", '0'],
                ["style", "left", '-79px'],
                ["style", "width", '60px']
            ],
            "${_Hint_7_9}": [
                ["style", "top", '255px'],
                ["style", "opacity", '0'],
                ["style", "left", '403px']
            ],
            "${_Hint_5_Y_value}": [
                ["style", "top", '202px'],
                ["style", "height", '27px'],
                ["style", "opacity", '0'],
                ["style", "left", '320px'],
                ["style", "width", '88px']
            ],
            "${_Hint_7_9_blue}": [
                ["style", "top", '43px'],
                ["color", "color", 'rgba(7,66,195,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '63px'],
                ["style", "font-size", '18px']
            ],
            "${_Hint_7_blue_equals}": [
                ["style", "top", '0px'],
                ["style", "height", '25px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(7,66,195,1)']
            ],
            "${_SQRT7_equal_question}": [
                ["style", "top", '138px'],
                ["style", "opacity", '0'],
                ["style", "left", '379px']
            ],
            "${_Hint_7_3_times_3_equals}": [
                ["style", "top", '255px'],
                ["style", "opacity", '0'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '337px'],
                ["style", "width", '65px']
            ],
            "${_Hint3_5plus_SQRT1}": [
                ["style", "top", '0px'],
                ["style", "height", '18px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '48px']
            ],
            "${_Answers}": [
                ["style", "top", '403px'],
                ["style", "left", '26px']
            ],
            "${_Tip_text}": [
                ["style", "top", '0px'],
                ["style", "width", '58px'],
                ["color", "color", 'rgba(4,115,152,1.00)'],
                ["style", "font-weight", '800'],
                ["style", "height", '20px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_Choose_d}": [
                ["style", "top", '355px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(26,130,2,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "height", '28px'],
                ["style", "font-weight", '600'],
                ["style", "left", '363px'],
                ["style", "width", '115px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 709000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 37000,
                "Hint 2": 91000,
                "Hint 3": 129000,
                "Hint 4": 203000,
                "Hint 5": 237000,
                "Hint 6": 300000,
                "Hint 7": 336000,
                "Answer Hint": 390000
            },
            timeline: [
                { id: "eid198", tween: [ "color", "${_SQRT3_equals_question}", "color", 'rgba(170,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(170,0,0,1.00)'}], position: 129000, duration: 0, easing: "easeInQuad" },
                { id: "eid386", tween: [ "style", "${_Hint5_2_times_SQRT9}", "opacity", '1', { fromValue: '0.000000'}], position: 266000, duration: 1000 },
                { id: "eid527", tween: [ "style", "${_Hint_7_Z}", "top", '0px', { fromValue: '110px'}], position: 345000, duration: 2000, easing: "easeInCubic" },
                { id: "eid373", tween: [ "style", "${_Hint_4_Y_equals_question}", "opacity", '1', { fromValue: '0.000000'}], position: 205000, duration: 1000, easing: "easeInQuad" },
                { id: "eid409", tween: [ "style", "${_Hint_4_Y_equals_question}", "opacity", '0', { fromValue: '1'}], position: 285000, duration: 1000, easing: "easeInQuart" },
                { id: "eid516", tween: [ "color", "${_X}", "color", 'rgba(130,130,130,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(7,66,195,1)'}], position: 334000, duration: 1000, easing: "easeInQuad" },
                { id: "eid468", tween: [ "style", "${_Hint_5_2SQRT4}", "display", 'none', { fromValue: 'block'}], position: 300000, duration: 0, easing: "easeInCubic" },
                { id: "eid383", tween: [ "style", "${_Hint5_equals_2_times_2}", "opacity", '1', { fromValue: '0.000000'}], position: 264000, duration: 1000 },
                { id: "eid399", tween: [ "style", "${_Hint5_4}", "opacity", '1', { fromValue: '0.000000'}], position: 281000, duration: 1000, easing: "easeInQuart" },
                { id: "eid212", tween: [ "style", "${_Hint3_5_plus_2}", "opacity", '1', { fromValue: '0.000000'}], position: 165500, duration: 1000 },
                { id: "eid567", tween: [ "color", "${_Hint_7_9_blue}", "color", 'rgba(203,4,4,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(7,66,195,1)'}], position: 390000, duration: 2000, easing: "easeOutQuart" },
                { id: "eid272", tween: [ "style", "${_Hint3_5_plus_SQRT3}", "width", '48px', { fromValue: '48px'}], position: 173000, duration: 0, easing: "easeInCubic" },
                { id: "eid571", tween: [ "color", "${_Hint_7_Z}", "color", 'rgba(203,4,4,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(7,66,195,1)'}], position: 390000, duration: 2000, easing: "easeOutQuart" },
                { id: "eid268", tween: [ "style", "${_Hint3_5plus_SQRT1}", "width", '48px', { fromValue: '48px'}], position: 173000, duration: 0, easing: "easeInCubic" },
                { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid551", tween: [ "style", "${_Hint_7_9_blue}", "left", '22px', { fromValue: '63px'}], position: 371500, duration: 1500, easing: "easeOutCubic" },
                { id: "eid326", tween: [ "style", "${_W_value}", "top", '226px', { fromValue: '209px'}], position: 198500, duration: 3500, easing: "easeInCubic" },
                { id: "eid456", tween: [ "style", "${_Hint3_6_blue}", "top", '209px', { fromValue: '242px'}], position: 190000, duration: 2000, easing: "easeOutQuart" },
                { id: "eid190", tween: [ "style", "${_W_equals}", "opacity", '1', { fromValue: '0.000000'}], position: 99000, duration: 1000, easing: "easeInQuad" },
                { id: "eid274", tween: [ "style", "${_W_equals}", "opacity", '0', { fromValue: '1'}], position: 187000, duration: 0, easing: "easeInCubic" },
                { id: "eid324", tween: [ "style", "${_W_value}", "height", '20px', { fromValue: '20px'}], position: 198500, duration: 0, easing: "easeInQuad" },
                { id: "eid250", tween: [ "style", "${_Hint3_equals_question_mark}", "opacity", '1', { fromValue: '0.000000'}], position: 172000, duration: 1000, easing: "easeInCubic" },
                { id: "eid452", tween: [ "style", "${_Hint3_6_blue}", "opacity", '1', { fromValue: '0.000000'}], position: 189000, duration: 1000, easing: "easeOutCubic" },
                { id: "eid464", tween: [ "style", "${_Hint3_6_blue}", "opacity", '0', { fromValue: '1'}], position: 197000, duration: 0, easing: "easeOutCubic" },
                { id: "eid277", tween: [ "style", "${_Hint_2_W}", "width", '26px', { fromValue: '26px'}], position: 187000, duration: 0, easing: "easeInCubic" },
                { id: "eid269", tween: [ "style", "${_Hint3_5plus_SQRT1}", "height", '18px', { fromValue: '18px'}], position: 173000, duration: 0, easing: "easeInCubic" },
                { id: "eid517", tween: [ "style", "${_Hint_6_X_expression_solving_equation}", "display", 'none', { fromValue: 'block'}], position: 336000, duration: 0, easing: "easeInQuad" },
                { id: "eid369", tween: [ "style", "${_Hint_4_Y}", "left", '310px', { fromValue: '218px'}], position: 203500, duration: 1500, easing: "easeInQuad" },
                { id: "eid412", tween: [ "style", "${_Hint_4_Y}", "left", '349px', { fromValue: '310px'}], position: 286000, duration: 2000, easing: "easeOutCubic" },
                { id: "eid395", tween: [ "style", "${_Hint5_2_times_SQRT7}", "left", '0px', { fromValue: '-79px'}], position: 269000, duration: 2000, easing: "easeInQuart" },
                { id: "eid478", tween: [ "style", "${_Hint_6_X}", "top", '199px', { fromValue: '200px'}], position: 311500, duration: 1500, easing: "easeInQuart" },
                { id: "eid271", tween: [ "style", "${_Hint3_5_plus_SQRT4}", "height", '18px', { fromValue: '18px'}], position: 173000, duration: 0, easing: "easeInCubic" },
                { id: "eid406", tween: [ "style", "${_Hint5_equals_question_mark}", "opacity", '1', { fromValue: '0.000000'}], position: 271000, duration: 1000, easing: "easeInQuart" },
                { id: "eid462", tween: [ "style", "${_Hint3_7_blue}", "left", '391px', { fromValue: '438px'}], position: 194000, duration: 2000, easing: "easeOutCubic" },
                { id: "eid389", tween: [ "style", "${_Hint5_equals_2_times_3}", "opacity", '1', { fromValue: '0.000000'}], position: 267000, duration: 1000 },
                { id: "eid429", tween: [ "style", "${_Hint_5_blue_6}", "top", '202px', { fromValue: '303px'}], position: 291500, duration: 1500, easing: "easeOutQuint" },
                { id: "eid359", tween: [ "style", "${_SQRT7_equal_question}", "opacity", '1', { fromValue: '0.000000'}], position: 227000, duration: 1000 },
                { id: "eid484", tween: [ "style", "${_Hint_6_X_value}", "opacity", '1', { fromValue: '0.000000'}], position: 315000, duration: 1000, easing: "easeInQuart" },
                { id: "eid523", tween: [ "style", "${_Hint_7_Z}", "opacity", '1', { fromValue: '0.000000'}], position: 345000, duration: 500 },
                { id: "eid441", tween: [ "style", "${_Hint_5_Y_value}", "left", '206px', { fromValue: '320px'}], position: 296000, duration: 2000, easing: "easeOutCubic" },
                { id: "eid501", tween: [ "style", "${_Hint_6_blue_2}", "left", '348px', { fromValue: '408px'}], position: 330000, duration: 1000, easing: "easeInQuart" },
                { id: "eid396", tween: [ "style", "${_Hint5_2_times_SQRT7}", "top", '0px', { fromValue: '2px'}], position: 269000, duration: 2000, easing: "easeInQuart" },
                { id: "eid511", tween: [ "style", "${_X_Value}", "left", '216px', { fromValue: '306px'}], position: 332000, duration: 2000, easing: "easeInQuad" },
                { id: "eid440", tween: [ "style", "${_Hint_5_Y_value}", "top", '290px', { fromValue: '202px'}], position: 296000, duration: 2000, easing: "easeOutCubic" },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid497", tween: [ "style", "${_Hint_6_blue_2}", "opacity", '1', { fromValue: '0.000000'}], position: 329000, duration: 1000, easing: "easeInQuart" },
                { id: "eid504", tween: [ "style", "${_Hint_6_blue_2}", "opacity", '0', { fromValue: '1'}], position: 332000, duration: 0, easing: "easeInQuart" },
                { id: "eid512", tween: [ "style", "${_X_Value}", "top", '222px', { fromValue: '199px'}], position: 332000, duration: 2000, easing: "easeInQuad" },
                { id: "eid362", tween: [ "style", "${_Hint_4_Y}", "opacity", '1', { fromValue: '0.000000'}], position: 203000, duration: 500 },
                { id: "eid437", tween: [ "style", "${_Hint_4_Y}", "opacity", '0', { fromValue: '1'}], position: 295000, duration: 0, easing: "easeOutQuint" },
                { id: "eid543", tween: [ "style", "${_Hint_7_9}", "opacity", '1', { fromValue: '0.000000'}], position: 369000, duration: 1000, easing: "easeOutQuart" },
                { id: "eid422", tween: [ "style", "${_Hint5_blue_4}", "top", '202px', { fromValue: '232px'}], position: 288500, duration: 1500, easing: "easeOutQuart" },
                { id: "eid356", tween: [ "style", "${_Hint4_SQRT7}", "opacity", '1', { fromValue: '0.000000'}], position: 225000, duration: 1000 },
                { id: "eid574", tween: [ "style", "${_Choose_d}", "opacity", '1', { fromValue: '0.000000'}], position: 402000, duration: 1000, easing: "easeOutQuart" },
                { id: "eid471", tween: [ "style", "${_Hint_5_2_SQRT7}", "display", 'none', { fromValue: 'block'}], position: 300000, duration: 0, easing: "easeInCubic" },
                { id: "eid207", tween: [ "style", "${_equals_6}", "opacity", '1', { fromValue: '0'}], position: 162000, duration: 1000 },
                { id: "eid469", tween: [ "style", "${_Hint_5_2SQRT9}", "display", 'none', { fromValue: 'block'}], position: 300000, duration: 0, easing: "easeInCubic" },
                { id: "eid430", tween: [ "style", "${_Hint_5_blue_6}", "left", '378px', { fromValue: '451px'}], position: 291500, duration: 1500, easing: "easeOutQuint" },
                { id: "eid247", tween: [ "style", "${_Hint3_5_plus_SQRT3}", "top", '0px', { fromValue: '-32px'}], position: 169750, duration: 2250, easing: "easeInCubic" },
                { id: "eid186", tween: [ "style", "${_Hint_2_W}", "left", '310px', { fromValue: '172px'}], position: 98000, duration: 1000, easing: "easeInQuad" },
                { id: "eid279", tween: [ "style", "${_Hint_2_W}", "left", '354px', { fromValue: '310px'}], position: 187000, duration: 1000, easing: "easeInQuart" },
                { id: "eid426", tween: [ "style", "${_Hint_5_blue_6}", "opacity", '1', { fromValue: '0.000000'}], position: 291000, duration: 500, easing: "easeOutQuart" },
                { id: "eid436", tween: [ "style", "${_Hint_5_blue_6}", "opacity", '0', { fromValue: '1'}], position: 295000, duration: 0, easing: "easeOutQuint" },
                { id: "eid316", tween: [ "style", "${_W_value}", "opacity", '1', { fromValue: '0'}], position: 196000, duration: 1000, easing: "easeInQuart" },
                { id: "eid500", tween: [ "style", "${_Hint_6_blue_2}", "top", '199px', { fromValue: '244px'}], position: 330000, duration: 1000, easing: "easeInQuart" },
                { id: "eid278", tween: [ "style", "${_Hint_2_W}", "height", '20px', { fromValue: '20px'}], position: 187000, duration: 0, easing: "easeInCubic" },
                { id: "eid569", tween: [ "color", "${_Hint_7_blue_equals}", "color", 'rgba(203,4,4,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(7,66,195,1)'}], position: 390000, duration: 2000, easing: "easeOutQuart" },
                { id: "eid423", tween: [ "style", "${_Hint5_blue_4}", "left", '320px', { fromValue: '451px'}], position: 288500, duration: 1500, easing: "easeOutQuart" },
                { id: "eid402", tween: [ "style", "${_Hint_5_6}", "opacity", '1', { fromValue: '0.000000'}], position: 283000, duration: 1000, easing: "easeInQuart" },
                { id: "eid270", tween: [ "style", "${_Hint3_5_plus_SQRT4}", "width", '48px', { fromValue: '48px'}], position: 173000, duration: 0, easing: "easeInCubic" },
                { id: "eid243", tween: [ "style", "${_Hint3_5_plus_SQRT3}", "opacity", '1', { fromValue: '0.000000'}], position: 169000, duration: 750, easing: "easeInQuart" },
                { id: "eid175", tween: [ "style", "${_Hint_2_W}", "opacity", '1', { fromValue: '1'}], position: 98000, duration: 0 },
                { id: "eid313", tween: [ "style", "${_Hint_2_W}", "opacity", '0', { fromValue: '1'}], position: 196000, duration: 1000, easing: "easeInQuart" },
                { id: "eid487", tween: [ "style", "${_Hint_6_X_value}", "left", '0px', { fromValue: '-83px'}], position: 316000, duration: 2000, easing: "easeInQuad" },
                { id: "eid215", tween: [ "style", "${_Hint3_equals_7}", "opacity", '1', { fromValue: '0.000000'}], position: 167000, duration: 1000 },
                { id: "eid169", tween: [ "style", "${_Tips}", "opacity", '1', { fromValue: '0.000000'}], position: 56000, duration: 1000 },
                { id: "eid481", tween: [ "style", "${_Hint_6_equals_question_mark}", "opacity", '1', { fromValue: '0.000000'}], position: 313000, duration: 1000, easing: "easeInQuart" },
                { id: "eid502", tween: [ "style", "${_Hint_6_equals_question_mark}", "opacity", '0', { fromValue: '1'}], position: 331000, duration: 0, easing: "easeInQuart" },
                { id: "eid533", tween: [ "style", "${_Hint_7_3SquaredCOPY}", "opacity", '1', { fromValue: '0.000000'}], position: 363000, duration: 750, easing: "easeInCubic" },
                { id: "eid513", tween: [ "style", "${_X_Value}", "opacity", '0', { fromValue: '0'}], position: 331000, duration: 0, easing: "easeInQuad" },
                { id: "eid507", tween: [ "style", "${_X_Value}", "opacity", '1', { fromValue: '0'}], position: 332000, duration: 0, easing: "easeInQuart" },
                { id: "eid520", tween: [ "style", "${_Hint_6_blue_equals}", "opacity", '0', { fromValue: '0'}], position: 330000, duration: 0 },
                { id: "eid519", tween: [ "style", "${_Hint_6_blue_equals}", "opacity", '1', { fromValue: '0'}], position: 331000, duration: 0 },
                { id: "eid505", tween: [ "style", "${_Hint_6_blue_equals}", "opacity", '0', { fromValue: '1'}], position: 332000, duration: 0, easing: "easeInQuart" },
                { id: "eid329", tween: [ "color", "${_W}", "color", 'rgba(130,130,130,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(7,66,195,1)'}], position: 202000, duration: 1000, easing: "easeInCubic" },
                { id: "eid187", tween: [ "style", "${_Hint_2_W}", "top", '209px', { fromValue: '199px'}], position: 98000, duration: 1000, easing: "easeInQuad" },
                { id: "eid276", tween: [ "style", "${_Hint_2_W}", "top", '209px', { fromValue: '209px'}], position: 187000, duration: 0, easing: "easeInCubic" },
                { id: "eid273", tween: [ "style", "${_Hint3_5_plus_SQRT3}", "height", '18px', { fromValue: '18px'}], position: 173000, duration: 0, easing: "easeInCubic" },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid547", tween: [ "style", "${_Hint_7_9_blue}", "opacity", '1', { fromValue: '0.000000'}], position: 371000, duration: 500, easing: "easeOutQuart" },
                { id: "eid449", tween: [ "color", "${_Y}", "color", 'rgba(130,130,130,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(7,66,195,1)'}], position: 298000, duration: 1000, easing: "easeInQuart" },
                { id: "eid536", tween: [ "style", "${_Hint_7_3SquaredCOPY}", "left", '313px', { fromValue: '171px'}], position: 363750, duration: 2250, easing: "easeOutQuart" },
                { id: "eid459", tween: [ "style", "${_Hint3_7_blue}", "opacity", '1', { fromValue: '0.000000'}], position: 193000, duration: 1000, easing: "easeOutQuart" },
                { id: "eid465", tween: [ "style", "${_Hint3_7_blue}", "opacity", '0', { fromValue: '1'}], position: 197000, duration: 0, easing: "easeOutCubic" },
                { id: "eid488", tween: [ "style", "${_Hint_6_X_value}", "top", '0px', { fromValue: '-4px'}], position: 316000, duration: 2000, easing: "easeInQuad" },
                { id: "eid204", tween: [ "style", "${_Hint3_5_plus_1}", "opacity", '1', { fromValue: '0.000000'}], position: 160500, duration: 1000 },
                { id: "eid340", tween: [ "style", "${_Hint_3_5_SQRT_1}", "opacity", '0', { fromValue: '1'}], position: 202000, duration: 500 },
                { id: "eid323", tween: [ "style", "${_W_value}", "width", '76px', { fromValue: '76px'}], position: 198500, duration: 0, easing: "easeInQuad" },
                { id: "eid537", tween: [ "style", "${_Hint_7_3SquaredCOPY}", "top", '254px', { fromValue: '276px'}], position: 363750, duration: 2250, easing: "easeOutQuart" },
                { id: "eid347", tween: [ "style", "${_Hint_3_5_plus_SQRT_3}", "opacity", '0', { fromValue: '1'}], position: 202000, duration: 500 },
                { id: "eid434", tween: [ "style", "${_Hint_5_Y_value}", "opacity", '1', { fromValue: '0.000000'}], position: 294000, duration: 1000, easing: "easeOutQuint" },
                { id: "eid370", tween: [ "style", "${_Hint_4_Y}", "top", '200px', { fromValue: '320px'}], position: 203500, duration: 1500, easing: "easeInQuad" },
                { id: "eid413", tween: [ "style", "${_Hint_4_Y}", "top", '202px', { fromValue: '200px'}], position: 286000, duration: 2000, easing: "easeOutCubic" },
                { id: "eid172", tween: [ "style", "${_Hint1_text}", "opacity", '1', { fromValue: '0.000000'}], position: 89000, duration: 1000 },
                { id: "eid173", tween: [ "style", "${_Hint1_text}", "opacity", '0', { fromValue: '1'}], position: 91000, duration: 0 },
                { id: "eid419", tween: [ "style", "${_Hint5_blue_4}", "opacity", '1', { fromValue: '0.000000'}], position: 288000, duration: 500, easing: "easeOutCubic" },
                { id: "eid435", tween: [ "style", "${_Hint5_blue_4}", "opacity", '0', { fromValue: '1'}], position: 295000, duration: 0, easing: "easeOutQuint" },
                { id: "eid530", tween: [ "style", "${_Hint_7_equals_question_mark}", "opacity", '1', { fromValue: '0.000000'}], position: 347000, duration: 1000, easing: "easeInCubic" },
                { id: "eid552", tween: [ "style", "${_Hint_7_equals_question_mark}", "opacity", '0', { fromValue: '1'}], position: 373000, duration: 0, easing: "easeOutCubic" },
                { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 3000 },
                { id: "eid376", tween: [ "style", "${_Hint5_2_times_SQRT4}", "opacity", '1', { fromValue: '0.000000'}], position: 263000, duration: 1000 },
                { id: "eid561", tween: [ "color", "${_Z}", "color", 'rgba(130,130,130,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(7,66,195,1)'}], position: 378000, duration: 1000, easing: "easeOutQuart" },
                { id: "eid554", tween: [ "style", "${_Hint_7_blue_equals}", "opacity", '0', { fromValue: '0'}], position: 372000, duration: 0, easing: "easeOutCubic" },
                { id: "eid553", tween: [ "style", "${_Hint_7_blue_equals}", "opacity", '1', { fromValue: '0'}], position: 373000, duration: 0, easing: "easeOutCubic" },
                { id: "eid194", tween: [ "style", "${_SQRT3}", "opacity", '1', { fromValue: '0.000000'}], position: 125000, duration: 1000, easing: "easeInQuad" },
                { id: "eid325", tween: [ "style", "${_W_value}", "left", '125px', { fromValue: '326px'}], position: 198500, duration: 3500, easing: "easeInCubic" },
                { id: "eid526", tween: [ "style", "${_Hint_7_Z}", "left", '-23px', { fromValue: '-160px'}], position: 345000, duration: 2000, easing: "easeInCubic" },
                { id: "eid558", tween: [ "style", "${_Hint_7_Z_value}", "top", '290px', { fromValue: '209px'}], position: 375000, duration: 3000, easing: "easeOutQuart" },
                { id: "eid540", tween: [ "style", "${_Hint_7_3_times_3_equals}", "opacity", '1', { fromValue: '0.000000'}], position: 367000, duration: 1000, easing: "easeOutQuart" },
                { id: "eid477", tween: [ "style", "${_Hint_6_X}", "left", '306px', { fromValue: '226px'}], position: 311500, duration: 1500, easing: "easeInQuart" },
                { id: "eid209", tween: [ "style", "${_Hint3_5_plus_SQRT4}", "opacity", '1', { fromValue: '0.000000'}], position: 164000, duration: 1000 },
                { id: "eid474", tween: [ "style", "${_Hint_6_X}", "opacity", '1', { fromValue: '0.000000'}], position: 310000, duration: 1500, easing: "easeInCubic" },
                { id: "eid506", tween: [ "style", "${_Hint_6_X}", "opacity", '0', { fromValue: '1'}], position: 332000, duration: 0, easing: "easeInQuart" },
                { id: "eid201", tween: [ "style", "${_Hint3_5plus_SQRT1}", "opacity", '1', { fromValue: '0.000000'}], position: 159000, duration: 1000 },
                { id: "eid491", tween: [ "style", "${_Hint_6_equals_8_minus_6}", "opacity", '1', { fromValue: '0.000000'}], position: 319000, duration: 1000, easing: "easeInQuad" },
                { id: "eid557", tween: [ "style", "${_Hint_7_Z_value}", "left", '163px', { fromValue: '340px'}], position: 375000, duration: 3000, easing: "easeOutQuart" },
                { id: "eid246", tween: [ "style", "${_Hint3_5_plus_SQRT3}", "left", '0px', { fromValue: '-173px'}], position: 169750, duration: 2250, easing: "easeInCubic" },
                { id: "eid494", tween: [ "style", "${_Hint_6_2}", "opacity", '1', { fromValue: '0.000000'}], position: 321000, duration: 1000, easing: "easeInQuad" },
                { id: "eid550", tween: [ "style", "${_Hint_7_9_blue}", "top", '0px', { fromValue: '43px'}], position: 371500, duration: 1500, easing: "easeOutCubic" },
                { id: "eid392", tween: [ "style", "${_Hint5_2_times_SQRT7}", "opacity", '1', { fromValue: '0.000000'}], position: 269000, duration: 500 },
                { id: "eid350", tween: [ "style", "${_Hint_3_5_Plus_SQRT_4}", "opacity", '0', { fromValue: '1'}], position: 202000, duration: 500 },
                { id: "eid455", tween: [ "style", "${_Hint3_6_blue}", "left", '326px', { fromValue: '437px'}], position: 190000, duration: 2000, easing: "easeOutQuart" },
                { id: "eid197", tween: [ "style", "${_SQRT3_equals_question}", "opacity", '1', { fromValue: '0.000000'}], position: 127000, duration: 1000, easing: "easeInQuad" },
                { id: "eid463", tween: [ "style", "${_Hint3_7_blue}", "top", '210px', { fromValue: '304px'}], position: 194000, duration: 2000, easing: "easeOutCubic" },
                { id: "eid575", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid576", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1a}', [] ], ""], position: 37000 },
                { id: "eid577", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1b}', [] ], ""], position: 58000 },
                { id: "eid578", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2a}', [] ], ""], position: 91000 },
                { id: "eid579", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2b}', [] ], ""], position: 101000 },
                { id: "eid580", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3a}', [] ], ""], position: 129000 },
                { id: "eid581", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3b}', [] ], ""], position: 174000 },
                { id: "eid582", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4a}', [] ], ""], position: 207000 },
                { id: "eid583", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4b}', [] ], ""], position: 229000 },
                { id: "eid584", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint5a}', [] ], ""], position: 236995 },
                { id: "eid585", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint5b}', [] ], ""], position: 273000 },
                { id: "eid586", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint6a}', [] ], ""], position: 300000 },
                { id: "eid587", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint6b}', [] ], ""], position: 323000 },
                { id: "eid588", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint7a}', [] ], ""], position: 336000 },
                { id: "eid589", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint7b}', [] ], ""], position: 349000 },
                { id: "eid590", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint7c}', [] ], ""], position: 379000 },
                { id: "eid591", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answerhint}', [] ], ""], position: 393000 }            ]
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
                    rect: ['0px', '15px', '153', '183', 'auto', 'auto'],
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
                ["style", "top", '15px'],
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
            "${_EButton}": [
                ["style", "left", '8px'],
                ["style", "top", '157px']
            ],
            "${_CButton}": [
                ["style", "left", '8px'],
                ["style", "top", '86px']
            ],
            "${_AButton}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
