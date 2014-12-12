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
                id: 'Answers',
                type: 'rect',
                rect: ['48', '181','auto','auto','auto', 'auto']
            },
            {
                id: 'AnswerD',
                type: 'group',
                rect: ['71', '527','101','20','auto', 'auto'],
                c: [
                {
                    id: 'AnswerDText',
                    type: 'text',
                    rect: ['0px', '0px','101px','20px','auto', 'auto'],
                    text: "Answer D Text",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'AnswerC',
                type: 'group',
                rect: ['71', '483px','101','19','auto', 'auto'],
                c: [
                {
                    id: 'AnswerCText',
                    type: 'text',
                    rect: ['0px', '0px','101px','19px','auto', 'auto'],
                    text: "Answer C Text",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'AnswerA',
                type: 'group',
                rect: ['74px', '393px','109','19','auto', 'auto'],
                c: [
                {
                    id: 'AnswerAText',
                    type: 'text',
                    rect: ['0px', '0px','109px','19px','auto', 'auto'],
                    text: "Answer A Text",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'AnswerB',
                type: 'group',
                rect: ['74px', '434px','109','19','auto', 'auto'],
                c: [
                {
                    id: 'AnswerBText',
                    type: 'text',
                    rect: ['0px', '0px','109px','19px','auto', 'auto'],
                    text: "Answer B Text",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'AnswerE',
                type: 'group',
                rect: ['71', '569px','101','20','auto', 'auto'],
                c: [
                {
                    id: 'AnswerEText',
                    type: 'text',
                    rect: ['0px', '0px','101px','20px','auto', 'auto'],
                    text: "Answer E Text",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'ProblemStatement',
                type: 'group',
                rect: ['18', '20','494','75','auto', 'auto'],
                c: [
                {
                    id: 'ProblemText',
                    type: 'text',
                    rect: ['0px', '0px','494px','75px','auto', 'auto'],
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur tortor volutpat dolor volutpat, eu iaculis est venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur tortor ",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'ProblemFigure',
                type: 'rect',
                rect: ['18px', '120px','261px','220px','auto', 'auto'],
                fill: ["rgba(248,250,248,0)"],
                stroke: [1,"rgb(4, 4, 4)","none"]
            },
            {
                id: 'Hint1',
                type: 'group',
                rect: ['316', '102','226','467','auto', 'auto'],
                c: [
                {
                    id: 'Hint1_Text',
                    type: 'text',
                    rect: ['0px', '0px','221px','255px','auto', 'auto'],
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur tortor volutpat dolor volutpat, eu iaculis est venenatis. Ut ac ante nec arcu elementum tempor ac id mi. Nullam at eros nec felis suscipit ullamcorper non sed felis. Sed facilisis, magna ac finibus sollicitudin, lacus erat pharetra metus, non feugiat turpis est sed leo. Cras sit amet dictum dui, vel tempor ex.",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
                },
                {
                    id: 'Hint1_Figure',
                    type: 'rect',
                    rect: ['0px', '267px','224px','198px','auto', 'auto'],
                    fill: ["rgba(248,250,248,0)"],
                    stroke: [1,"rgb(4, 4, 4)","solid"]
                }]
            },
            {
                id: 'Hint2',
                type: 'group',
                rect: ['300px', '616px','226','467','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'Hint2_Text',
                    type: 'text',
                    rect: ['-5px', '222px','226px','255px','auto', 'auto'],
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur tortor volutpat dolor volutpat, eu iaculis est venenatis. Ut ac ante nec arcu elementum tempor ac id mi. Nullam at eros nec felis suscipit ullamcorper non sed felis. Sed facilisis, magna ac finibus sollicitudin, lacus erat pharetra metus, non feugiat turpis est sed leo. Cras sit amet dictum dui, vel tempor ex.",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
                },
                {
                    id: 'Hint2_Figure',
                    type: 'rect',
                    rect: ['-5px', '3px','224px','198px','auto', 'auto'],
                    fill: ["rgba(248,250,248,0)"],
                    stroke: [1,"rgb(4, 4, 4)","solid"]
                }]
            },
            {
                id: 'Hint3',
                type: 'group',
                rect: ['316px', '102px','226','467','auto', 'auto'],
                c: [
                {
                    id: 'Hint3_Text',
                    type: 'text',
                    rect: ['0px', '0px','226px','255px','auto', 'auto'],
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur tortor volutpat dolor volutpat, eu iaculis est venenatis. Ut ac ante nec arcu elementum tempor ac id mi. Nullam at eros nec felis suscipit ullamcorper non sed felis. Sed facilisis, magna ac finibus sollicitudin, lacus erat pharetra metus, non feugiat turpis est sed leo. Cras sit amet dictum dui, vel tempor ex.",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
                },
                {
                    id: 'Hint3_Figure',
                    type: 'rect',
                    rect: ['0px', '267px','224px','198px','auto', 'auto'],
                    fill: ["rgba(248,250,248,0)"],
                    stroke: [1,"rgb(4, 4, 4)","solid"]
                }]
            },
            {
                id: 'Hint4',
                type: 'group',
                rect: ['341px', '616px','226','467','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'Hint4_Text',
                    type: 'text',
                    rect: ['-5px', '222px','226px','255px','auto', 'auto'],
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur tortor volutpat dolor volutpat, eu iaculis est venenatis. Ut ac ante nec arcu elementum tempor ac id mi. Nullam at eros nec felis suscipit ullamcorper non sed felis. Sed facilisis, magna ac finibus sollicitudin, lacus erat pharetra metus, non feugiat turpis est sed leo. Cras sit amet dictum dui, vel tempor ex.",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
                },
                {
                    id: 'Hint4_Figure',
                    type: 'rect',
                    rect: ['-5px', '3px','224px','198px','auto', 'auto'],
                    fill: ["rgba(248,250,248,0)"],
                    stroke: [1,"rgb(4, 4, 4)","solid"]
                }]
            },
            {
                id: 'Hint5',
                type: 'group',
                rect: ['316px', '102px','226','467','auto', 'auto'],
                c: [
                {
                    id: 'Hint5_Text',
                    type: 'text',
                    rect: ['0px', '0px','226px','255px','auto', 'auto'],
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur tortor volutpat dolor volutpat, eu iaculis est venenatis. Ut ac ante nec arcu elementum tempor ac id mi. Nullam at eros nec felis suscipit ullamcorper non sed felis. Sed facilisis, magna ac finibus sollicitudin, lacus erat pharetra metus, non feugiat turpis est sed leo. Cras sit amet dictum dui, vel tempor ex.",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
                },
                {
                    id: 'Hint5_Figure',
                    type: 'rect',
                    rect: ['0px', '267px','224px','198px','auto', 'auto'],
                    fill: ["rgba(248,250,248,0)"],
                    stroke: [1,"rgb(4, 4, 4)","solid"]
                }]
            },
            {
                id: 'Hint6',
                type: 'group',
                rect: ['341px', '616px','226','467','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'Hint6_Text',
                    type: 'text',
                    rect: ['-5px', '222px','226px','255px','auto', 'auto'],
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur tortor volutpat dolor volutpat, eu iaculis est venenatis. Ut ac ante nec arcu elementum tempor ac id mi. Nullam at eros nec felis suscipit ullamcorper non sed felis. Sed facilisis, magna ac finibus sollicitudin, lacus erat pharetra metus, non feugiat turpis est sed leo. Cras sit amet dictum dui, vel tempor ex.",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
                },
                {
                    id: 'Hint6_Figure',
                    type: 'rect',
                    rect: ['-5px', '3px','224px','198px','auto', 'auto'],
                    fill: ["rgba(248,250,248,0)"],
                    stroke: [1,"rgb(4, 4, 4)","solid"]
                }]
            },
            {
                id: 'Hint7',
                type: 'group',
                rect: ['316px', '102px','226','467','auto', 'auto'],
                c: [
                {
                    id: 'Hint7_Text',
                    type: 'text',
                    rect: ['0px', '0px','226px','255px','auto', 'auto'],
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur tortor volutpat dolor volutpat, eu iaculis est venenatis. Ut ac ante nec arcu elementum tempor ac id mi. Nullam at eros nec felis suscipit ullamcorper non sed felis. Sed facilisis, magna ac finibus sollicitudin, lacus erat pharetra metus, non feugiat turpis est sed leo. Cras sit amet dictum dui, vel tempor ex.",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
                },
                {
                    id: 'Hint7_Figure',
                    type: 'rect',
                    rect: ['0px', '267px','224px','198px','auto', 'auto'],
                    fill: ["rgba(248,250,248,0)"],
                    stroke: [1,"rgb(4, 4, 4)","solid"]
                }]
            },
            {
                id: 'Hint8',
                type: 'group',
                rect: ['341px', '616px','226','467','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'Hint8_Img',
                    type: 'text',
                    rect: ['-5px', '222px','226px','255px','auto', 'auto'],
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur tortor volutpat dolor volutpat, eu iaculis est venenatis. Ut ac ante nec arcu elementum tempor ac id mi. Nullam at eros nec felis suscipit ullamcorper non sed felis. Sed facilisis, magna ac finibus sollicitudin, lacus erat pharetra metus, non feugiat turpis est sed leo. Cras sit amet dictum dui, vel tempor ex.",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
                },
                {
                    id: 'Hint8_Figure',
                    type: 'rect',
                    rect: ['-5px', '3px','224px','198px','auto', 'auto'],
                    fill: ["rgba(248,250,248,0)"],
                    stroke: [1,"rgb(4, 4, 4)","solid"]
                }]
            },
            {
                id: 'Hint9',
                type: 'group',
                rect: ['316px', '102px','226','467','auto', 'auto'],
                c: [
                {
                    id: 'Hint9_Img',
                    type: 'text',
                    rect: ['0px', '0px','226px','255px','auto', 'auto'],
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur tortor volutpat dolor volutpat, eu iaculis est venenatis. Ut ac ante nec arcu elementum tempor ac id mi. Nullam at eros nec felis suscipit ullamcorper non sed felis. Sed facilisis, magna ac finibus sollicitudin, lacus erat pharetra metus, non feugiat turpis est sed leo. Cras sit amet dictum dui, vel tempor ex.",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
                },
                {
                    id: 'Hint9_Figure',
                    type: 'rect',
                    rect: ['0px', '267px','224px','198px','auto', 'auto'],
                    fill: ["rgba(248,250,248,0)"],
                    stroke: [1,"rgb(4, 4, 4)","solid"]
                }]
            },
            {
                id: 'Answer',
                type: 'group',
                rect: ['314', '335','174','90','auto', 'auto'],
                c: [
                {
                    id: 'Answer_Text',
                    type: 'text',
                    rect: ['0px', '0px','174px','90px','auto', 'auto'],
                    text: "The answer is A.",
                    align: "left",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,85,68,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Hint1Thumb',
                type: 'group',
                rect: ['521px', '95','70','30','auto', 'auto'],
                c: [
                {
                    id: 'Hint1PressedThumb',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintpressed.png",'0px','0px']
                },
                {
                    id: 'Hint1ThumbImg',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintbutton.png",'0px','0px']
                },
                {
                    id: 'Hint1ThumbText',
                    type: 'text',
                    rect: ['5px', '6px','59px','19px','auto', 'auto'],
                    text: "Hint 1",
                    align: "center",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(32,61,29,1.00)", "700", "none", "normal"]
                }]
            },
            {
                id: 'Hint2Thumb',
                type: 'group',
                rect: ['521', '125','70','30','auto', 'auto'],
                c: [
                {
                    id: 'Hint2PressedThumb',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintpressed.png",'0px','0px']
                },
                {
                    id: 'Hint2ThumbImg',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintbutton.png",'0px','0px']
                },
                {
                    id: 'Hint2ThumbText',
                    type: 'text',
                    rect: ['5px', '5px','59px','19px','auto', 'auto'],
                    text: "Hint 2",
                    align: "center",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(32,61,29,1.00)", "700", "none", "normal"]
                }]
            },
            {
                id: 'Hint3Thumb',
                type: 'group',
                rect: ['521', '155','70','30','auto', 'auto'],
                c: [
                {
                    id: 'Hint3PressedThumb',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintpressed.png",'0px','0px']
                },
                {
                    id: 'Hint3ThumbImg',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintbutton.png",'0px','0px']
                },
                {
                    id: 'Hint3ThumbText',
                    type: 'text',
                    rect: ['5px', '5px','59px','19px','auto', 'auto'],
                    text: "Hint 3",
                    align: "center",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(32,61,29,1.00)", "700", "none", "normal"]
                }]
            },
            {
                id: 'Hint4Thumb',
                type: 'group',
                rect: ['521', '187','70','30','auto', 'auto'],
                c: [
                {
                    id: 'Hint4PressedThumb',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintpressed.png",'0px','0px']
                },
                {
                    id: 'Hint4ThumbImg',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintbutton.png",'0px','0px']
                },
                {
                    id: 'Hint4ThumbText',
                    type: 'text',
                    rect: ['5px', '5px','59px','19px','auto', 'auto'],
                    text: "Hint 4",
                    align: "center",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(32,61,29,1.00)", "700", "none", "normal"]
                }]
            },
            {
                id: 'Hint5Thumb',
                type: 'group',
                rect: ['521', '216','70','30','auto', 'auto'],
                c: [
                {
                    id: 'Hint5PressedThumb',
                    type: 'image',
                    rect: ['-1px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintpressed.png",'0px','0px']
                },
                {
                    id: 'Hint5ThumbImg',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintbutton.png",'0px','0px']
                },
                {
                    id: 'Hint5ThumbText',
                    type: 'text',
                    rect: ['5px', '5px','59px','19px','auto', 'auto'],
                    text: "Hint 5",
                    align: "center",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(32,61,29,1.00)", "700", "none", "normal"]
                }]
            },
            {
                id: 'Hint6Thumb',
                type: 'group',
                rect: ['521', '246','70','30','auto', 'auto'],
                c: [
                {
                    id: 'Hint6PressedThumb',
                    type: 'image',
                    rect: ['-1px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintpressed.png",'0px','0px']
                },
                {
                    id: 'Hint6ThumbImg',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintbutton.png",'0px','0px']
                },
                {
                    id: 'Hint6ThumbText',
                    type: 'text',
                    rect: ['5px', '5px','59px','19px','auto', 'auto'],
                    text: "Hint 6",
                    align: "center",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(32,61,29,1.00)", "700", "none", "normal"]
                }]
            },
            {
                id: 'Hint7Thumb',
                type: 'group',
                rect: ['521', '276','70','30','auto', 'auto'],
                c: [
                {
                    id: 'Hint7PressedThumb',
                    type: 'image',
                    rect: ['-1px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintpressed.png",'0px','0px']
                },
                {
                    id: 'Hint7ThumbImg',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintbutton.png",'0px','0px']
                },
                {
                    id: 'Hint7ThumbText',
                    type: 'text',
                    rect: ['5px', '5px','59px','19px','auto', 'auto'],
                    text: "Hint 7",
                    align: "center",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(32,61,29,1.00)", "700", "none", "normal"]
                }]
            },
            {
                id: 'Hint8Thumb',
                type: 'group',
                rect: ['520', '306','70','30','auto', 'auto'],
                c: [
                {
                    id: 'Hint8PressedThumb',
                    type: 'image',
                    rect: ['1px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintpressed.png",'0px','0px']
                },
                {
                    id: 'Hint8ThumbImg',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintbutton.png",'0px','0px']
                },
                {
                    id: 'Hint8ThumbText',
                    type: 'text',
                    rect: ['6px', '5px','59px','19px','auto', 'auto'],
                    text: "Hint 8",
                    align: "center",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(32,61,29,1.00)", "700", "none", "normal"]
                }]
            },
            {
                id: 'Hint9Thumb',
                type: 'group',
                rect: ['521', '336','70','30','auto', 'auto'],
                c: [
                {
                    id: 'Hint9PressedThumb',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintpressed.png",'0px','0px']
                },
                {
                    id: 'Hint9ThumbImg',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintbutton.png",'0px','0px']
                },
                {
                    id: 'Hint9ThumbText',
                    type: 'text',
                    rect: ['4px', '5px','59px','19px','auto', 'auto'],
                    text: "Hint 9",
                    align: "center",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(32,61,29,1.00)", "700", "none", "normal"]
                }]
            },
            {
                id: 'Hint10Thumb',
                type: 'group',
                rect: ['521', '366','70','30','auto', 'auto'],
                c: [
                {
                    id: 'Hint10PressedThumb',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintpressed.png",'0px','0px']
                },
                {
                    id: 'Hint10ThumbImg',
                    type: 'image',
                    rect: ['0px', '0px','70px','30px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hintbutton.png",'0px','0px']
                },
                {
                    id: 'Hint10ThumbText',
                    type: 'text',
                    rect: ['5px', '4px','59px','19px','auto', 'auto'],
                    text: "Answer",
                    align: "center",
                    font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(32,61,29,1.00)", "700", "none", "normal"]
                }]
            },
            {
                id: 'QuestionSound',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/question.mp3','media/question.ogg']
            },
            {
                id: 'Hint1Sound',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint1.ogg','media/hint1.mp3']
            },
            {
                id: 'Hint2Sound',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint2.mp3','media/hint2.ogg']
            },
            {
                id: 'Hint3Sound',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint3.ogg','media/hint3.mp3']
            },
            {
                id: 'Hint4Sound',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint4.ogg','media/hint4.mp3']
            },
            {
                id: 'Hint5Sound',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint5.mp3','media/hint5.ogg']
            },
            {
                id: 'Hint6Sound',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint6.ogg','media/hint6.mp3']
            },
            {
                id: 'Hint7Sound',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint7.ogg','media/hint7.mp3']
            },
            {
                id: 'Hint8Sound',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint8.mp3','media/hint8.ogg']
            },
            {
                id: 'Hint9Sound',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint9.ogg','media/hint9.mp3']
            },
            {
                id: 'AnswerSound',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer.mp3','media/answer.ogg']
            },
            {
                id: 'ShortAnswerBox',
                type: 'group',
                rect: ['47px', '412px','220','83px','auto', 'auto'],
                c: [
                {
                    id: 'Answer_Container',
                    display: 'block',
                    type: 'rect',
                    rect: ['-30px', '-410px','267px','64px','auto', 'auto'],
                    fill: ["rgba(248,250,248,0.00)"],
                    stroke: [1,"rgb(4, 4, 4)","solid"]
                },
                {
                    id: 'Grade_Check',
                    display: 'none',
                    type: 'image',
                    rect: ['187px', '32px','33px','31px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"check2.png",'0px','0px']
                },
                {
                    id: 'Grade_X',
                    display: 'none',
                    type: 'image',
                    rect: ['187px', '32px','33px','31px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"x2.png",'0px','0px']
                }]
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
            "${_ProblemText}": [
                ["style", "top", '0px'],
                ["style", "height", '75px'],
                ["style", "left", '0px'],
                ["style", "width", '494px']
            ],
            "${_Hint7ThumbText}": [
                ["style", "top", '5px'],
                ["style", "text-decoration", 'none'],
                ["color", "color", 'rgba(32,61,29,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '5px'],
                ["style", "font-size", '12px']
            ],
            "${_Hint3}": [
                ["style", "top", '92px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '591px']
            ],
            "${_Hint1_Text}": [
                ["style", "top", '0px'],
                ["style", "height", '255px'],
                ["style", "left", '0px'],
                ["style", "width", '221px']
            ],
            "${_Hint6_Figure}": [
                ["style", "top", '3px'],
                ["style", "height", '198px'],
                ["style", "left", '-5px'],
                ["style", "width", '224px']
            ],
            "${_Hint1_TextCopy7}": [
                ["style", "height", '255px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_AnswerE}": [
                ["style", "top", '569px']
            ],
            "${_Hint3PressedThumb}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_AnswerDText}": [
                ["style", "top", '0px'],
                ["style", "font-size", '14px'],
                ["style", "left", '0px'],
                ["style", "width", '101px']
            ],
            "${_Hint6ThumbImg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint1ThumbText}": [
                ["style", "top", '6px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(32,61,29,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '5px'],
                ["style", "font-size", '12px']
            ],
            "${_AnswerB}": [
                ["style", "left", '74px'],
                ["style", "top", '434px']
            ],
            "${_Hint5ThumbImg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint3_Figure}": [
                ["style", "top", '267px'],
                ["style", "height", '198px'],
                ["style", "left", '0px'],
                ["style", "width", '224px']
            ],
            "${_Hint1_TextCopy4}": [
                ["style", "height", '255px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint8PressedThumb}": [
                ["style", "left", '1px'],
                ["style", "top", '0px']
            ],
            "${_Hint7}": [
                ["style", "top", '95px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '591px']
            ],
            "${_AnswerA}": [
                ["style", "left", '74px'],
                ["style", "top", '393px']
            ],
            "${_Hint1_TextCopy2}": [
                ["style", "height", '255px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint3_TextCopy3}": [
                ["style", "height", '255px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint9ThumbText}": [
                ["style", "top", '5px'],
                ["style", "text-decoration", 'none'],
                ["color", "color", 'rgba(32,61,29,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '4px'],
                ["style", "font-size", '12px']
            ],
            "${_Hint7_Figure}": [
                ["style", "top", '267px'],
                ["style", "height", '198px'],
                ["style", "left", '0px'],
                ["style", "width", '224px']
            ],
            "${_Hint10PressedThumb}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint10ThumbImg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint4_TextCopy4}": [
                ["style", "height", '255px'],
                ["style", "left", '-5px'],
                ["style", "top", '222px']
            ],
            "${_Hint2_TextCopy2}": [
                ["style", "height", '255px'],
                ["style", "left", '-5px'],
                ["style", "top", '222px']
            ],
            "${_Answers}": [
                ["style", "top", '386px'],
                ["style", "left", '24px'],
                ["transform", "scaleY", '1.00535']
            ],
            "${_Hint7ThumbImg}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Hint2ThumbImg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Answer}": [
                ["style", "top", '86px'],
                ["style", "height", '273px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '242px'],
                ["style", "width", '262px']
            ],
            "${_Hint6_Text}": [
                ["style", "height", '255px'],
                ["style", "left", '-5px'],
                ["style", "top", '222px']
            ],
            "${_Answer_Text}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint4PressedThumb}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Grade_Check}": [
                ["style", "top", '32px'],
                ["style", "height", '31px'],
                ["style", "display", 'none'],
                ["style", "left", '187px'],
                ["style", "width", '33px']
            ],
            "${_Hint4_Text}": [
                ["style", "height", '255px'],
                ["style", "left", '-5px'],
                ["style", "top", '222px']
            ],
            "${_Hint5PressedThumb}": [
                ["style", "left", '-1px'],
                ["style", "top", '0px']
            ],
            "${_Grade_X}": [
                ["style", "top", '32px'],
                ["style", "height", '31px'],
                ["style", "display", 'none'],
                ["style", "left", '187px'],
                ["style", "width", '33px']
            ],
            "${_Hint6PressedThumb}": [
                ["style", "left", '-1px'],
                ["style", "top", '0px']
            ],
            "${_Hint1_TextCopy10}": [
                ["style", "height", '255px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '221px']
            ],
            "${_Hint4_TextCopy}": [
                ["style", "height", '255px'],
                ["style", "left", '-5px'],
                ["style", "top", '222px']
            ],
            "${_Hint5ThumbText}": [
                ["style", "top", '5px'],
                ["style", "text-decoration", 'none'],
                ["color", "color", 'rgba(32,61,29,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '5px'],
                ["style", "font-size", '12px']
            ],
            "${_Hint10ThumbText}": [
                ["style", "top", '4px'],
                ["style", "text-decoration", 'none'],
                ["color", "color", 'rgba(32,61,29,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '5px'],
                ["style", "font-size", '12px']
            ],
            "${_Hint5_Text}": [
                ["style", "height", '255px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint3ThumbText}": [
                ["style", "top", '5px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(32,61,29,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '5px'],
                ["style", "font-size", '12px']
            ],
            "${_Hint6}": [
                ["style", "top", '616px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '426px'],
                ["style", "opacity", '1'],
                ["style", "left", '263px'],
                ["style", "width", '144px']
            ],
            "${_Hint4_Figure}": [
                ["style", "height", '198px'],
                ["style", "top", '3px'],
                ["style", "left", '-5px'],
                ["style", "width", '224px']
            ],
            "${_Text5Copy}": [
                ["color", "color", 'rgba(32,61,29,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "font-size", '12px']
            ],
            "${_Hint1ThumbImg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint2ThumbText}": [
                ["style", "top", '5px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(32,61,29,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '5px'],
                ["style", "font-size", '12px']
            ],
            "${_Hint6ThumbText}": [
                ["style", "top", '5px'],
                ["style", "text-decoration", 'none'],
                ["color", "color", 'rgba(32,61,29,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '5px'],
                ["style", "font-size", '12px']
            ],
            "${_Hint3_TextCopy4}": [
                ["style", "height", '255px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint7PressedThumb}": [
                ["style", "left", '-1px'],
                ["style", "top", '0px']
            ],
            "${_Hint9_Figure}": [
                ["style", "height", '198px'],
                ["style", "top", '267px'],
                ["style", "left", '0px'],
                ["style", "width", '224px']
            ],
            "${_Hint8_Figure}": [
                ["style", "height", '198px'],
                ["style", "top", '3px'],
                ["style", "left", '-5px'],
                ["style", "width", '224px']
            ],
            "${_Hint3_Text}": [
                ["style", "height", '255px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint9PressedThumb}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint1}": [
                ["style", "top", '92px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '591px'],
                ["style", "width", '221px']
            ],
            "${_Hint5}": [
                ["style", "top", '92px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '591px']
            ],
            "${_AnswerEText}": [
                ["style", "top", '0px'],
                ["style", "font-size", '14px'],
                ["style", "left", '0px'],
                ["style", "width", '101px']
            ],
            "${_Hint3ThumbImg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint5_Figure}": [
                ["style", "height", '198px'],
                ["style", "top", '267px'],
                ["style", "left", '0px'],
                ["style", "width", '224px']
            ],
            "${_AnswerBText}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'left'],
                ["style", "height", '19px'],
                ["style", "width", '109px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_Hint1PressedThumb}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Hint9}": [
                ["style", "top", '95px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '591px']
            ],
            "${_AnswerCText}": [
                ["style", "top", '0px'],
                ["style", "font-size", '14px'],
                ["style", "left", '0px'],
                ["style", "width", '101px']
            ],
            "${_Hint2_Figure}": [
                ["style", "top", '3px'],
                ["style", "height", '198px'],
                ["style", "left", '-5px'],
                ["style", "width", '224px']
            ],
            "${_Hint4ThumbText}": [
                ["style", "top", '5px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(32,61,29,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '5px'],
                ["style", "font-size", '12px']
            ],
            "${_AnswerAText}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'left'],
                ["style", "height", '19px'],
                ["style", "font-size", '14px'],
                ["style", "left", '0px'],
                ["style", "width", '109px']
            ],
            "${_Hint9ThumbImg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint4}": [
                ["style", "top", '616px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '426px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '260px'],
                ["style", "width", '144px']
            ],
            "${_Hint2}": [
                ["style", "top", '616px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '426px'],
                ["style", "opacity", '1'],
                ["style", "left", '276px'],
                ["style", "width", '144px']
            ],
            "${_AnswerC}": [
                ["style", "top", '483px']
            ],
            "${_Hint1_Figure}": [
                ["style", "height", '198px'],
                ["style", "top", '267px'],
                ["style", "left", '0px'],
                ["style", "width", '224px']
            ],
            "${_Hint1_TextCopy5}": [
                ["style", "height", '255px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Answer_Container}": [
                ["color", "background-color", 'rgba(6,6,6,0)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '-30px'],
                ["style", "width", '267px'],
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["color", "border-color", 'rgba(4, 4, 4, 0.180392)'],
                ["style", "height", '64px'],
                ["style", "border-width", '1px']
            ],
            "${_Hint8ThumbImg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint3_TextCopy}": [
                ["style", "height", '255px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint8_Img}": [
                ["style", "height", '255px'],
                ["style", "left", '-5px'],
                ["style", "top", '222px']
            ],
            "${_Hint2PressedThumb}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_ShortAnswerBox}": [
                ["style", "top", '412px'],
                ["style", "left", '47px'],
                ["style", "height", '83px']
            ],
            "${_Hint4ThumbImg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Hint8ThumbText}": [
                ["style", "top", '5px'],
                ["style", "text-decoration", 'none'],
                ["color", "color", 'rgba(32,61,29,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '6px'],
                ["style", "font-size", '12px']
            ],
            "${_Hint9_Img}": [
                ["style", "height", '255px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_ProblemFigure}": [
                ["style", "height", '220px'],
                ["style", "border-style", 'none'],
                ["style", "left", '18px'],
                ["style", "top", '120px']
            ],
            "${_Hint2_Text}": [
                ["style", "height", '255px'],
                ["style", "left", '-5px'],
                ["style", "top", '222px']
            ],
            "${_Hint4_TextCopy3}": [
                ["style", "height", '255px'],
                ["style", "left", '-5px'],
                ["style", "top", '222px']
            ],
            "${_Hint8}": [
                ["style", "top", '616px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '426px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '272px'],
                ["style", "width", '144px']
            ],
            "${_Hint1_TextCopy9}": [
                ["style", "height", '255px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '221px']
            ],
            "${_Hint7_Text}": [
                ["style", "height", '255px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 158000,
            autoPlay: true,
            labels: {
                "Read Question": 2000,
                "Hint 1": 20000,
                "Hint 2": 35000,
                "Hint 3": 50000,
                "Hint 4": 65000,
                "Hint 5": 80000,
                "Hint 6": 95073,
                "Hint 7": 110000,
                "Hint 8": 125000,
                "Hint 9": 140000,
                "Show Answer": 155000
            },
            timeline: [
                { id: "eid589", tween: [ "style", "${_Answer}", "height", '273px', { fromValue: '273px'}], position: 158000, duration: 0 },
                { id: "eid359", tween: [ "style", "${_Hint3}", "left", '270px', { fromValue: '591px'}], position: 50250, duration: 500, easing: "swing" },
                { id: "eid360", tween: [ "style", "${_Hint3}", "left", '443px', { fromValue: '270px'}], position: 64750, duration: 250, easing: "swing" },
                { id: "eid357", tween: [ "transform", "${_Hint3}", "scaleX", '0.1', { fromValue: '1'}], position: 64750, duration: 250, easing: "swing" },
                { id: "eid560", tween: [ "transform", "${_Hint8}", "scaleY", '0.1', { fromValue: '1'}], position: 139750, duration: 250, easing: "swing" },
                { id: "eid355", tween: [ "style", "${_Hint3}", "top", '-61px', { fromValue: '92px'}], position: 64750, duration: 250, easing: "swing" },
                { id: "eid542", tween: [ "transform", "${_Hint7}", "scaleY", '0.1', { fromValue: '1'}], position: 124750, duration: 250, easing: "swing" },
                { id: "eid287", tween: [ "style", "${_Hint2}", "opacity", '1', { fromValue: '1'}], position: 35500, duration: 0, easing: "swing" },
                { id: "eid470", tween: [ "style", "${_Hint2}", "opacity", '0', { fromValue: '1'}], position: 49750, duration: 250, easing: "swing" },
                { id: "eid517", tween: [ "style", "${_Hint6}", "top", '82px', { fromValue: '616px'}], position: 95073, duration: 500, easing: "swing" },
                { id: "eid518", tween: [ "style", "${_Hint6}", "top", '86px', { fromValue: '82px'}], position: 95573, duration: 250, easing: "swing" },
                { id: "eid519", tween: [ "style", "${_Hint6}", "top", '59px', { fromValue: '86px'}], position: 109750, duration: 250, easing: "swing" },
                { id: "eid272", tween: [ "style", "${_Hint1}", "left", '270px', { fromValue: '591px'}], position: 20000, duration: 500, easing: "swing" },
                { id: "eid337", tween: [ "style", "${_Hint1}", "left", '452px', { fromValue: '270px'}], position: 34500, duration: 250, easing: "swing" },
                { id: "eid338", tween: [ "style", "${_Hint1}", "top", '-124px', { fromValue: '92px'}], position: 34500, duration: 250, easing: "swing" },
                { id: "eid566", tween: [ "transform", "${_Hint9}", "scaleX", '0.1', { fromValue: '1'}], position: 154750, duration: 250, easing: "swing" },
                { id: "eid552", tween: [ "style", "${_Hint8}", "top", '90px', { fromValue: '616px'}], position: 125000, duration: 500, easing: "swing" },
                { id: "eid563", tween: [ "style", "${_Hint8}", "top", '117px', { fromValue: '90px'}], position: 139750, duration: 250, easing: "swing" },
                { id: "eid564", tween: [ "style", "${_Hint9}", "top", '133px', { fromValue: '95px'}], position: 154750, duration: 250, easing: "swing" },
                { id: "eid586", tween: [ "style", "${_Answer}", "width", '262px', { fromValue: '262px'}], position: 158000, duration: 0 },
                { id: "eid492", tween: [ "style", "${_Hint5}", "top", '6px', { fromValue: '92px'}], position: 94750, duration: 250, easing: "swing" },
                { id: "eid570", tween: [ "style", "${_Hint9}", "left", '262px', { fromValue: '591px'}], position: 140000, duration: 560, easing: "swing" },
                { id: "eid571", tween: [ "style", "${_Hint9}", "left", '442px', { fromValue: '262px'}], position: 154750, duration: 250, easing: "swing" },
                { id: "eid370", tween: [ "transform", "${_Hint4}", "scaleX", '0.1', { fromValue: '1'}], position: 79750, duration: 250, easing: "swing" },
                { id: "eid347", tween: [ "style", "${_Hint2}", "left", '484px', { fromValue: '276px'}], position: 49750, duration: 250, easing: "swing" },
                { id: "eid562", tween: [ "style", "${_Hint8}", "left", '479px', { fromValue: '272px'}], position: 139750, duration: 250, easing: "swing" },
                { id: "eid587", tween: [ "style", "${_Answer}", "left", '242px', { fromValue: '242px'}], position: 158000, duration: 0 },
                { id: "eid493", tween: [ "transform", "${_Hint5}", "scaleY", '0.1', { fromValue: '1'}], position: 94750, duration: 250, easing: "swing" },
                { id: "eid541", tween: [ "transform", "${_Hint7}", "scaleX", '0.1', { fromValue: '1'}], position: 124750, duration: 250, easing: "swing" },
                { id: "eid602", tween: [ "style", "${_Hint6}", "left", '486px', { fromValue: '263px'}], position: 109750, duration: 250, easing: "swing" },
                { id: "eid274", tween: [ "style", "${_Hint1}", "opacity", '1', { fromValue: '0'}], position: 20000, duration: 500, easing: "swing" },
                { id: "eid468", tween: [ "style", "${_Hint1}", "opacity", '0', { fromValue: '1'}], position: 34500, duration: 250, easing: "swing" },
                { id: "eid533", tween: [ "style", "${_Hint7}", "opacity", '1', { fromValue: '0'}], position: 110000, duration: 560, easing: "swing" },
                { id: "eid543", tween: [ "style", "${_Hint7}", "opacity", '1', { fromValue: '1'}], position: 110560, duration: 0, easing: "swing" },
                { id: "eid547", tween: [ "style", "${_Hint7}", "opacity", '0', { fromValue: '1'}], position: 124750, duration: 250, easing: "swing" },
                { id: "eid328", tween: [ "transform", "${_Hint1}", "scaleY", '0.1', { fromValue: '1'}], position: 34500, duration: 250, easing: "swing" },
                { id: "eid567", tween: [ "style", "${_Hint9}", "opacity", '1', { fromValue: '0'}], position: 140000, duration: 560, easing: "swing" },
                { id: "eid569", tween: [ "style", "${_Hint9}", "opacity", '0', { fromValue: '1'}], position: 154750, duration: 250, easing: "swing" },
                { id: "eid366", tween: [ "style", "${_Hint4}", "top", '82px', { fromValue: '616px'}], position: 65250, duration: 500, easing: "swing" },
                { id: "eid367", tween: [ "style", "${_Hint4}", "top", '87px', { fromValue: '82px'}], position: 65750, duration: 250, easing: "swing" },
                { id: "eid368", tween: [ "style", "${_Hint4}", "top", '-16px', { fromValue: '87px'}], position: 79750, duration: 250, easing: "swing" },
                { id: "eid551", tween: [ "style", "${_Hint8}", "opacity", '1', { fromValue: '0'}], position: 125000, duration: 500, easing: "swing" },
                { id: "eid561", tween: [ "style", "${_Hint8}", "opacity", '0', { fromValue: '1'}], position: 139750, duration: 250, easing: "swing" },
                { id: "eid346", tween: [ "transform", "${_Hint2}", "scaleY", '0.1', { fromValue: '1'}], position: 49750, duration: 250, easing: "swing" },
                { id: "eid530", tween: [ "style", "${_Hint7}", "left", '265px', { fromValue: '591px'}], position: 110000, duration: 560, easing: "swing" },
                { id: "eid544", tween: [ "style", "${_Hint7}", "left", '446px', { fromValue: '265px'}], position: 124750, duration: 250, easing: "swing" },
                { id: "eid369", tween: [ "transform", "${_Hint4}", "scaleY", '0.1', { fromValue: '1'}], position: 79750, duration: 250, easing: "swing" },
                { id: "eid345", tween: [ "transform", "${_Hint2}", "scaleX", '0.1', { fromValue: '1'}], position: 49750, duration: 250, easing: "swing" },
                { id: "eid495", tween: [ "style", "${_Hint5}", "opacity", '1', { fromValue: '0'}], position: 80000, duration: 500, easing: "swing" },
                { id: "eid496", tween: [ "style", "${_Hint5}", "opacity", '0', { fromValue: '1'}], position: 94750, duration: 250, easing: "swing" },
                { id: "eid327", tween: [ "transform", "${_Hint1}", "scaleX", '0.1', { fromValue: '1'}], position: 34500, duration: 250, easing: "swing" },
                { id: "eid565", tween: [ "transform", "${_Hint9}", "scaleY", '0.1', { fromValue: '1'}], position: 154750, duration: 250, easing: "swing" },
                { id: "eid497", tween: [ "style", "${_Hint5}", "left", '265px', { fromValue: '591px'}], position: 80000, duration: 500, easing: "swing" },
                { id: "eid498", tween: [ "style", "${_Hint5}", "left", '443px', { fromValue: '265px'}], position: 94750, duration: 250, easing: "swing" },
                { id: "eid590", tween: [ "style", "${_Answer}", "top", '86px', { fromValue: '86px'}], position: 158000, duration: 0 },
                { id: "eid574", tween: [ "style", "${_Answer}", "opacity", '1', { fromValue: '0.000000'}], position: 155000, duration: 750, easing: "swing" },
                { id: "eid371", tween: [ "style", "${_Hint4}", "opacity", '1', { fromValue: '1'}], position: 65250, duration: 0, easing: "swing" },
                { id: "eid475", tween: [ "style", "${_Hint4}", "opacity", '0', { fromValue: '1'}], position: 79750, duration: 250, easing: "swing" },
                { id: "eid520", tween: [ "transform", "${_Hint6}", "scaleY", '0.1', { fromValue: '1'}], position: 109750, duration: 250, easing: "swing" },
                { id: "eid545", tween: [ "style", "${_Hint7}", "top", '67px', { fromValue: '95px'}], position: 124750, duration: 250, easing: "swing" },
                { id: "eid462", tween: [ "style", "${_Hint4}", "left", '260px', { fromValue: '260px'}], position: 65250, duration: 750, easing: "swing" },
                { id: "eid491", tween: [ "style", "${_Hint4}", "left", '491px', { fromValue: '260px'}], position: 79750, duration: 250, easing: "swing" },
                { id: "eid290", tween: [ "style", "${_Hint2}", "top", '82px', { fromValue: '616px'}], position: 35500, duration: 500, easing: "swing" },
                { id: "eid314", tween: [ "style", "${_Hint2}", "top", '86px', { fromValue: '82px'}], position: 36000, duration: 250, easing: "swing" },
                { id: "eid348", tween: [ "style", "${_Hint2}", "top", '-79px', { fromValue: '86px'}], position: 49750, duration: 250, easing: "swing" },
                { id: "eid522", tween: [ "style", "${_Hint6}", "opacity", '1', { fromValue: '1'}], position: 95073, duration: 0, easing: "swing" },
                { id: "eid523", tween: [ "style", "${_Hint6}", "opacity", '0', { fromValue: '1'}], position: 109750, duration: 250, easing: "swing" },
                { id: "eid494", tween: [ "transform", "${_Hint5}", "scaleX", '0.1', { fromValue: '1'}], position: 94750, duration: 250, easing: "swing" },
                { id: "eid559", tween: [ "transform", "${_Hint8}", "scaleX", '0.1', { fromValue: '1'}], position: 139750, duration: 250, easing: "swing" },
                { id: "eid358", tween: [ "style", "${_Hint3}", "opacity", '1', { fromValue: '0'}], position: 50250, duration: 500, easing: "swing" },
                { id: "eid473", tween: [ "style", "${_Hint3}", "opacity", '0', { fromValue: '1'}], position: 64750, duration: 250, easing: "swing" },
                { id: "eid356", tween: [ "transform", "${_Hint3}", "scaleY", '0.1', { fromValue: '1'}], position: 64750, duration: 250, easing: "swing" },
                { id: "eid521", tween: [ "transform", "${_Hint6}", "scaleX", '0.1', { fromValue: '1'}], position: 109750, duration: 250, easing: "swing" },
                { id: "eid476", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_QuestionSound}', [] ], ""], position: 2000 },
                { id: "eid477", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_Hint1Sound}', [] ], ""], position: 20000 },
                { id: "eid478", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_Hint2Sound}', [] ], ""], position: 35000 },
                { id: "eid479", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_Hint3Sound}', [] ], ""], position: 50000 },
                { id: "eid480", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_Hint4Sound}', [] ], ""], position: 65000 },
                { id: "eid575", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_Hint5Sound}', [] ], ""], position: 80000 },
                { id: "eid576", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_Hint6Sound}', [] ], ""], position: 95072.652816772 },
                { id: "eid577", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_Hint7Sound}', [] ], ""], position: 110000 },
                { id: "eid578", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_Hint8Sound}', [] ], ""], position: 125000 },
                { id: "eid579", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_Hint9Sound}', [] ], ""], position: 140000 },
                { id: "eid580", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_AnswerSound}', [] ], ""], position: 155000 }            ]
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
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "height", '42px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${_E_Button}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_EllipseCopy8}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '25px']
            ],
            "${_Text8}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "width", '27px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_x}": [
                ["style", "top", '-3px'],
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
                { id: "eid9", tween: [ "color", "${_EllipseCopy8}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
                { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }            ]
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
                    rect: ['0px', '20px', '25', '24', 'auto', 'auto'],
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
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
            ],
            "${_EllipseCopy8}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '25px']
            ],
            "${_E_Button}": [
                ["style", "top", '20px'],
                ["style", "left", '0px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "height", '42px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${_Text8}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "width", '27px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_x}": [
                ["style", "top", '-3px'],
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
                { id: "eid9", tween: [ "color", "${_EllipseCopy8}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
                { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid44", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid43", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 }            ]
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
            "${_Text14}": [
                ["style", "top", '4px'],
                ["style", "left", '36px'],
                ["style", "width", '101px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "height", '42px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${_E_Button}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_EllipseCopy8}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '25px']
            ],
            "${_Text8}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "width", '27px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_x}": [
                ["style", "top", '-3px'],
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
                { id: "eid9", tween: [ "color", "${_EllipseCopy8}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
                { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }            ]
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
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
            ],
            "${_Text14}": [
                ["style", "top", '4px'],
                ["style", "left", '36px'],
                ["style", "width", '101px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "height", '42px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${_E_Button}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_EllipseCopy8}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '25px']
            ],
            "${_Text8}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "width", '27px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_x}": [
                ["style", "top", '-3px'],
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
                { id: "eid9", tween: [ "color", "${_EllipseCopy8}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
                { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }            ]
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
                    rect: ['0px', '13px', '25', '24', 'auto', 'auto'],
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
            "${_Text7}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "width", '27px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
            ],
            "${_D_Button}": [
                ["style", "left", '0px'],
                ["style", "top", '13px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "height", '42px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${_EllipseCopy7}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '25px']
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
            "${_Text13}": [
                ["style", "top", '4px'],
                ["style", "left", '36px'],
                ["style", "width", '101px']
            ],
            "${_Text7}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "width", '27px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "height", '42px'],
                ["style", "display", 'none'],
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
                ["style", "border-width", '1px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '25px']
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
            "${_Text13}": [
                ["style", "top", '4px'],
                ["style", "left", '36px'],
                ["style", "width", '101px']
            ],
            "${_Text7}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "width", '27px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "height", '42px'],
                ["style", "display", 'none'],
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
                ["style", "border-width", '1px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '25px']
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
            "${_Text13}": [
                ["style", "top", '4px'],
                ["style", "left", '36px'],
                ["style", "width", '94px']
            ],
            "${_Text7}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "width", '27px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "height", '42px'],
                ["style", "display", 'none'],
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
                ["style", "border-width", '1px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '25px']
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
                    rect: ['0px', '2px', '25', '24', 'auto', 'auto'],
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
                        type: 'text',
                        rect: ['0px', '4px', '27px', '20px', 'auto', 'auto'],
                        id: 'Text5',
                        text: 'C',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "height", '42px'],
                ["style", "display", 'none'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '101px']
            ],
            "${_Text5}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "width", '27px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_C_Button}": [
                ["style", "left", '0px'],
                ["style", "top", '2px']
            ],
            "${_EllipseCopy6}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '25px']
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
                { id: "eid11", tween: [ "style", "${_EllipseCopy6}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid224", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid225", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid265", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid5", tween: [ "color", "${_EllipseCopy6}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
                { id: "eid253", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid254", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid264", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 }            ]
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
                    rect: ['0px', '-7px', '25', '25', 'auto', 'auto'],
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
                        type: 'text',
                        rect: ['0px', '5px', '27px', '19px', 'auto', 'auto'],
                        id: 'Text4',
                        text: 'B',
                        align: 'center',
                        font: ['Georgia, \'Times New Roman\', Times, serif', 14, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
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
            "${_B_Button}": [
                ["style", "left", '0px'],
                ["style", "top", '-7px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '125px']
            ],
            "${_Text4}": [
                ["style", "top", '5px'],
                ["style", "text-align", 'center'],
                ["style", "height", '19px'],
                ["style", "width", '27px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_EllipseCopy5}": [
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '25px']
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
                { id: "eid12", tween: [ "style", "${_EllipseCopy5}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid251", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid252", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid263", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 }            ]
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
                    rect: ['8px', '0px', '25', '24', 'auto', 'auto'],
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
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-16px', '65px', '42px', 'auto', 'auto'],
                        id: 'check',
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['-8px', '-4px', '42px', '33px', 'auto', 'auto'],
                        id: 'x',
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
                ["style", "top", '0px']
            ],
            "${_A}": [
                ["style", "top", '3px'],
                ["style", "text-align", 'center'],
                ["style", "height", '19px'],
                ["style", "font-size", '14px'],
                ["style", "left", '0px'],
                ["style", "width", '27px']
            ],
            "${_Ellipse}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(232,241,160,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '25px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "display", 'none'],
                ["style", "height", '42px'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
            ],
            "${symbolSelector}": [
                ["style", "height", '42px'],
                ["style", "width", '153px']
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
                ["style", "border-width", '1px'],
                ["style", "height", '24px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
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
                ["style", "font-size", '14px'],
                ["style", "left", '0px'],
                ["style", "width", '27px']
            ],
            "${_Text9}": [
                ["style", "top", '3px'],
                ["style", "text-align", 'left'],
                ["style", "width", '109px'],
                ["style", "left", '36px'],
                ["style", "font-size", '12px']
            ],
            "${_check}": [
                ["style", "top", '-16px'],
                ["style", "display", 'none'],
                ["style", "height", '42px'],
                ["style", "left", '-8px'],
                ["style", "width", '65px']
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
                    rect: ['1px', '4px', '155px', '204px', 'auto', 'auto'],
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
                ["style", "height", '204px'],
                ["style", "top", '4px'],
                ["style", "left", '1px'],
                ["style", "width", '155px']
            ],
            "${_AnswerText}": [
                ["style", "top", '3px'],
                ["style", "font-size", '12px'],
                ["style", "left", '36px'],
                ["style", "width", '109px']
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
