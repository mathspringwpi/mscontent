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
                rect: ['22px', '115px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1.19872','1.40642']]
            },
            {
                id: 'Question_Text',
                type: 'text',
                rect: ['18px', '29px','266px','24px','auto', 'auto'],
                text: "Order from least to greatest:",
                align: "left",
                font: ['Georgia, Times New Roman, Times, serif', 20, "rgba(0,0,0,1)", "normal", "none", "normal"]
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
                id: 'b3',
                type: 'image',
                rect: ['337px', '23px','31px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
            },
            {
                id: 'b3Copy7',
                display: 'none',
                type: 'image',
                rect: ['290px', '349px','31px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
            },
            {
                id: 'b1',
                type: 'image',
                rect: ['279px', '22px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b1.gif",'0px','0px']
            },
            {
                id: 'b5',
                type: 'image',
                rect: ['410px', '22px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
            },
            {
                id: 'b5Copy7',
                display: 'none',
                type: 'image',
                rect: ['346px', '348px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
            },
            {
                id: 'b2',
                type: 'image',
                rect: ['300px', '22px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
            },
            {
                id: 'b2Copy7',
                display: 'none',
                type: 'image',
                rect: ['392px', '348px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['328px', '367px','18px','9px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text5Copy',
                display: 'none',
                type: 'text',
                rect: ['381px', '367px','18px','9px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'b3Copy6',
                display: 'none',
                type: 'image',
                rect: ['352px', '131px','31px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
            },
            {
                id: 'b5Copy6',
                display: 'none',
                type: 'image',
                rect: ['410px', '130px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
            },
            {
                id: 'b2Copy6',
                display: 'none',
                type: 'image',
                rect: ['294px', '130px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
            },
            {
                id: 'b4',
                type: 'image',
                rect: ['385px', '22px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b4.gif",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['404px', '41px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy3',
                type: 'text',
                rect: ['373px', '41px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['329px', '41px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['294px', '41px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'b3Copy',
                type: 'image',
                rect: ['125px', '102px','31px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
            },
            {
                id: 'b1Copy',
                type: 'image',
                rect: ['67px', '101px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b1.gif",'0px','0px']
            },
            {
                id: 'b5Copy',
                type: 'image',
                rect: ['198px', '101px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
            },
            {
                id: 'b2Copy',
                type: 'image',
                rect: ['88px', '101px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
            },
            {
                id: 'b4Copy',
                type: 'image',
                rect: ['173px', '101px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b4.gif",'0px','0px']
            },
            {
                id: 'TextCopy7',
                type: 'text',
                rect: ['192px', '120px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy6',
                type: 'text',
                rect: ['161px', '120px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy5',
                type: 'text',
                rect: ['117px', '120px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy4',
                type: 'text',
                rect: ['82px', '120px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'b3Copy2',
                type: 'image',
                rect: ['130px', '150px','31px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
            },
            {
                id: 'b1Copy2',
                type: 'image',
                rect: ['176px', '150px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b1.gif",'0px','0px']
            },
            {
                id: 'b5Copy2',
                type: 'image',
                rect: ['93px', '149px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
            },
            {
                id: 'b2Copy2',
                type: 'image',
                rect: ['57px', '149px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
            },
            {
                id: 'b4Copy2',
                type: 'image',
                rect: ['210px', '150px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b4.gif",'0px','0px']
            },
            {
                id: 'TextCopy11',
                type: 'text',
                rect: ['192px', '168px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy10',
                type: 'text',
                rect: ['167px', '168px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy9',
                type: 'text',
                rect: ['124px', '168px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy8',
                type: 'text',
                rect: ['87px', '168px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'b3Copy3',
                type: 'image',
                rect: ['57px', '202px','31px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
            },
            {
                id: 'b1Copy3',
                type: 'image',
                rect: ['175px', '201px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b1.gif",'0px','0px']
            },
            {
                id: 'b5Copy3',
                type: 'image',
                rect: ['95px', '201px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
            },
            {
                id: 'b2Copy3',
                type: 'image',
                rect: ['132px', '201px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
            },
            {
                id: 'b4Copy3',
                type: 'image',
                rect: ['210px', '201px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b4.gif",'0px','0px']
            },
            {
                id: 'TextCopy15',
                type: 'text',
                rect: ['189px', '220px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy14',
                type: 'text',
                rect: ['163px', '220px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy13',
                type: 'text',
                rect: ['125px', '220px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy12',
                type: 'text',
                rect: ['90px', '220px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'b3Copy10',
                display: 'none',
                type: 'image',
                rect: ['293px', '402px','31px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
            },
            {
                id: 'b1Copy6',
                display: 'none',
                type: 'image',
                rect: ['415px', '401px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b1.gif",'0px','0px']
            },
            {
                id: 'b5Copy9',
                display: 'none',
                type: 'image',
                rect: ['330px', '401px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
            },
            {
                id: 'b2Copy9',
                display: 'none',
                type: 'image',
                rect: ['368px', '401px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
            },
            {
                id: 'b4Copy6',
                display: 'none',
                type: 'image',
                rect: ['452px', '401px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b4.gif",'0px','0px']
            },
            {
                id: 'TextCopy27',
                display: 'none',
                type: 'text',
                rect: ['431px', '420px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy26',
                display: 'none',
                type: 'text',
                rect: ['400px', '420px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy25',
                display: 'none',
                type: 'text',
                rect: ['356px', '420px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy24',
                display: 'none',
                type: 'text',
                rect: ['324px', '420px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'b3Copy4',
                type: 'image',
                rect: ['57px', '250px','31px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
            },
            {
                id: 'b1Copy4',
                type: 'image',
                rect: ['173px', '249px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b1.gif",'0px','0px']
            },
            {
                id: 'b5Copy4',
                type: 'image',
                rect: ['131px', '249px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
            },
            {
                id: 'b2Copy4',
                type: 'image',
                rect: ['96px', '249px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
            },
            {
                id: 'b4Copy4',
                type: 'image',
                rect: ['210px', '249px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b4.gif",'0px','0px']
            },
            {
                id: 'TextCopy19',
                type: 'text',
                rect: ['191px', '268px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy18',
                type: 'text',
                rect: ['163px', '268px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy17',
                type: 'text',
                rect: ['125px', '268px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy16',
                type: 'text',
                rect: ['92px', '268px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'b3Copy5',
                type: 'image',
                rect: ['92px', '300px','31px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b3.gif",'0px','0px']
            },
            {
                id: 'b1Copy5',
                type: 'image',
                rect: ['176px', '299px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b1.gif",'0px','0px']
            },
            {
                id: 'b5Copy5',
                type: 'image',
                rect: ['57px', '299px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b5.gif",'0px','0px']
            },
            {
                id: 'b2Copy5',
                type: 'image',
                rect: ['131px', '299px','24px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b2.gif",'0px','0px']
            },
            {
                id: 'b4Copy5',
                type: 'image',
                rect: ['210px', '299px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b4.gif",'0px','0px']
            },
            {
                id: 'TextCopy23',
                type: 'text',
                rect: ['191px', '318px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy22',
                type: 'text',
                rect: ['161px', '318px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy21',
                type: 'text',
                rect: ['124px', '318px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy20',
                type: 'text',
                rect: ['88px', '318px','24px','24px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['265px', '93px','302px','37px','auto', 'auto'],
                text: "Let's deal with the negative fractions first.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'b6',
                display: 'none',
                type: 'image',
                rect: ['307px', '182px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b6.gif",'0px','0px']
            },
            {
                id: 'b62',
                display: 'none',
                type: 'image',
                rect: ['297px', '113px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b62.gif",'0px','0px']
            },
            {
                id: 'b9',
                display: 'none',
                type: 'image',
                rect: ['317px', '113px','71px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b9.gif",'0px','0px']
            },
            {
                id: 'b72',
                display: 'none',
                type: 'image',
                rect: ['297px', '249px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b72.gif",'0px','0px']
            },
            {
                id: 'b82',
                display: 'none',
                type: 'image',
                rect: ['293px', '182px','18px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b82.gif",'0px','0px']
            },
            {
                id: 'b7',
                display: 'none',
                type: 'image',
                rect: ['428px', '180px','9px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b7.gif",'0px','0px']
            },
            {
                id: 'b8',
                display: 'none',
                type: 'image',
                rect: ['365px', '182px','18px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b8.gif",'0px','0px']
            },
            {
                id: 'question',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/question.mp3','media/question.ogg']
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
                id: 'b11',
                display: 'none',
                type: 'image',
                rect: ['317px', '249px','71px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b11.gif",'0px','0px']
            },
            {
                id: 'b10',
                display: 'none',
                type: 'image',
                rect: ['317px', '182px','71px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b10.gif",'0px','0px']
            },
            {
                id: 'b12',
                display: 'none',
                type: 'image',
                rect: ['394px', '113px','39px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b12.gif",'0px','0px']
            },
            {
                id: 'b13',
                display: 'none',
                type: 'image',
                rect: ['394px', '182px','39px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b13.gif",'0px','0px']
            },
            {
                id: 'b14',
                display: 'none',
                type: 'image',
                rect: ['394px', '249px','39px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b14.gif",'0px','0px']
            },
            {
                id: 'b17',
                display: 'none',
                type: 'image',
                rect: ['395px', '303px','18px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b17.gif",'0px','0px']
            },
            {
                id: 'b15',
                display: 'none',
                type: 'image',
                rect: ['302px', '303px','18px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b15.gif",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['328px', '325px','18px','9px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy',
                display: 'none',
                type: 'text',
                rect: ['381px', '325px','18px','9px','auto', 'auto'],
                text: ",",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'b16',
                display: 'none',
                type: 'image',
                rect: ['353px', '303px','18px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b16.gif",'0px','0px']
            },
            {
                id: 'hint3',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint3.ogg','media/hint3.mp3']
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['288px', '307px','18px','9px','auto', 'auto'],
                text: "_",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy4',
                display: 'none',
                type: 'text',
                rect: ['383px', '307px','18px','9px','auto', 'auto'],
                text: "_",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy3',
                display: 'none',
                type: 'text',
                rect: ['337px', '307px','18px','9px','auto', 'auto'],
                text: "_",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['26px', '349px','228px','37px','auto', 'auto'],
                text: "We just have to add the two positive fractions to this list -&gt;",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['306px', '458px','131px','38px','auto', 'auto'],
                text: "Choose (C)",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'answer',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/answer.mp3','media/answer.ogg']
            },
            {
                id: 'hint4',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/hint4.ogg','media/hint4.mp3']
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
            "${_TextCopy9}": [
                ["style", "top", '168px'],
                ["style", "left", '124px'],
                ["style", "width", '24px']
            ],
            "${_Text3Copy}": [
                ["style", "top", '325px'],
                ["style", "left", '381px'],
                ["style", "display", 'none']
            ],
            "${_Text5Copy2}": [
                ["style", "top", '367px'],
                ["style", "left", '381px'],
                ["style", "display", 'none']
            ],
            "${_b3}": [
                ["style", "left", '337px'],
                ["style", "top", '23px']
            ],
            "${_QuestionSound_Container}": [
                ["style", "height", '8px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(248,250,248,0.00)'],
                ["style", "width", '17px']
            ],
            "${_TextCopy26}": [
                ["style", "top", '420px'],
                ["style", "display", 'none'],
                ["style", "left", '400px'],
                ["style", "width", '24px']
            ],
            "${_TextCopy22}": [
                ["style", "top", '318px'],
                ["style", "left", '161px'],
                ["style", "width", '24px']
            ],
            "${_b5Copy5}": [
                ["style", "left", '57px'],
                ["style", "top", '299px']
            ],
            "${_b2Copy9}": [
                ["style", "top", '401px'],
                ["style", "left", '368px'],
                ["style", "display", 'none']
            ],
            "${_b3Copy5}": [
                ["style", "left", '92px'],
                ["style", "top", '300px']
            ],
            "${_b5Copy4}": [
                ["style", "top", '249px'],
                ["style", "left", '131px']
            ],
            "${_b3Copy}": [
                ["style", "left", '125px'],
                ["style", "top", '102px']
            ],
            "${_TextCopy15}": [
                ["style", "top", '220px'],
                ["style", "left", '189px'],
                ["style", "width", '24px']
            ],
            "${_b4Copy6}": [
                ["style", "top", '401px'],
                ["style", "left", '452px'],
                ["style", "display", 'none']
            ],
            "${_TextCopy12}": [
                ["style", "top", '220px'],
                ["style", "left", '90px'],
                ["style", "width", '24px']
            ],
            "${_TextCopy8}": [
                ["style", "top", '168px'],
                ["style", "left", '87px'],
                ["style", "width", '24px']
            ],
            "${_b5Copy}": [
                ["style", "left", '198px'],
                ["style", "top", '101px']
            ],
            "${_TextCopy}": [
                ["style", "top", '41px'],
                ["style", "left", '294px'],
                ["style", "width", '24px']
            ],
            "${_b3Copy10}": [
                ["style", "top", '402px'],
                ["style", "left", '293px'],
                ["style", "display", 'none']
            ],
            "${_TextCopy11}": [
                ["style", "top", '168px'],
                ["style", "left", '192px'],
                ["style", "width", '24px']
            ],
            "${_TextCopy23}": [
                ["style", "top", '318px'],
                ["style", "left", '191px'],
                ["style", "width", '24px']
            ],
            "${_Text3}": [
                ["style", "top", '325px'],
                ["style", "left", '328px'],
                ["style", "display", 'none']
            ],
            "${_Text5Copy3}": [
                ["style", "top", '367px'],
                ["style", "left", '328px'],
                ["style", "display", 'none']
            ],
            "${_b8}": [
                ["style", "top", '182px'],
                ["style", "left", '365px'],
                ["style", "display", 'none']
            ],
            "${_Answers}": [
                ["transform", "scaleX", '1.19872'],
                ["transform", "scaleY", '1.40642'],
                ["style", "left", '22px'],
                ["style", "top", '115px']
            ],
            "${_Sound_Container}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden']
            ],
            "${_b4Copy4}": [
                ["style", "top", '249px'],
                ["style", "left", '210px']
            ],
            "${_b1Copy2}": [
                ["style", "left", '176px'],
                ["style", "top", '150px']
            ],
            "${_b2Copy6}": [
                ["style", "top", '130px'],
                ["style", "left", '294px'],
                ["style", "display", 'none']
            ],
            "${_b10}": [
                ["style", "top", '182px'],
                ["style", "left", '317px'],
                ["style", "display", 'none']
            ],
            "${_TextCopy24}": [
                ["style", "top", '420px'],
                ["style", "display", 'none'],
                ["style", "left", '324px'],
                ["style", "width", '24px']
            ],
            "${_b5Copy9}": [
                ["style", "top", '401px'],
                ["style", "left", '330px'],
                ["style", "display", 'none']
            ],
            "${_TextCopy7}": [
                ["style", "top", '120px'],
                ["style", "left", '192px'],
                ["style", "width", '24px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_b5Copy6}": [
                ["style", "top", '130px'],
                ["style", "left", '410px'],
                ["style", "display", 'none']
            ],
            "${_b4Copy}": [
                ["style", "top", '101px'],
                ["style", "left", '173px']
            ],
            "${_b12}": [
                ["style", "top", '113px'],
                ["style", "left", '394px'],
                ["style", "display", 'none']
            ],
            "${_TextCopy14}": [
                ["style", "top", '220px'],
                ["style", "left", '163px'],
                ["style", "width", '24px']
            ],
            "${_b4}": [
                ["style", "top", '22px'],
                ["style", "left", '385px']
            ],
            "${_b2}": [
                ["style", "top", '22px'],
                ["style", "left", '300px']
            ],
            "${_Text6}": [
                ["style", "display", 'none']
            ],
            "${_b2Copy7}": [
                ["style", "top", '348px'],
                ["style", "left", '392px'],
                ["style", "display", 'none']
            ],
            "${_b1Copy}": [
                ["style", "left", '67px'],
                ["style", "top", '101px']
            ],
            "${_Text4Copy3}": [
                ["style", "top", '307px'],
                ["style", "left", '337px'],
                ["style", "display", 'none']
            ],
            "${_b62}": [
                ["style", "top", '113px'],
                ["style", "left", '297px'],
                ["style", "display", 'none']
            ],
            "${_b1}": [
                ["style", "left", '279px'],
                ["style", "top", '22px']
            ],
            "${_b1Copy3}": [
                ["style", "left", '175px'],
                ["style", "top", '201px']
            ],
            "${_b13}": [
                ["style", "top", '182px'],
                ["style", "left", '394px'],
                ["style", "display", 'none']
            ],
            "${_b72}": [
                ["style", "top", '249px'],
                ["style", "left", '297px'],
                ["style", "display", 'none']
            ],
            "${_Text5Copy}": [
                ["style", "top", '367px'],
                ["style", "left", '381px'],
                ["style", "display", 'none']
            ],
            "${_TextCopy25}": [
                ["style", "top", '420px'],
                ["style", "display", 'none'],
                ["style", "left", '356px'],
                ["style", "width", '24px']
            ],
            "${_b1Copy5}": [
                ["style", "left", '176px'],
                ["style", "top", '299px']
            ],
            "${_Text4}": [
                ["style", "top", '307px'],
                ["style", "left", '288px'],
                ["style", "display", 'none']
            ],
            "${_b2Copy4}": [
                ["style", "top", '249px'],
                ["style", "left", '96px']
            ],
            "${_b6}": [
                ["style", "top", '182px'],
                ["style", "left", '307px'],
                ["style", "display", 'none']
            ],
            "${_b2Copy}": [
                ["style", "top", '101px'],
                ["style", "left", '88px']
            ],
            "${_Question_Text}": [
                ["style", "top", '29px'],
                ["style", "font-size", '20px'],
                ["style", "height", '24px'],
                ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
                ["style", "left", '18px'],
                ["style", "width", '266px']
            ],
            "${_b82}": [
                ["style", "top", '182px'],
                ["style", "left", '293px'],
                ["style", "display", 'none']
            ],
            "${_b15}": [
                ["style", "top", '303px'],
                ["style", "left", '302px'],
                ["style", "display", 'none']
            ],
            "${_b5}": [
                ["style", "left", '410px'],
                ["style", "top", '22px']
            ],
            "${_TextCopy20}": [
                ["style", "top", '318px'],
                ["style", "left", '88px'],
                ["style", "width", '24px']
            ],
            "${_TextCopy17}": [
                ["style", "top", '268px'],
                ["style", "left", '125px'],
                ["style", "width", '24px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '41px'],
                ["style", "left", '373px'],
                ["style", "width", '24px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '120px'],
                ["style", "left", '117px'],
                ["style", "width", '24px']
            ],
            "${_b14}": [
                ["style", "top", '249px'],
                ["style", "left", '394px'],
                ["style", "display", 'none']
            ],
            "${_b4Copy3}": [
                ["style", "top", '201px'],
                ["style", "left", '210px']
            ],
            "${_b1Copy4}": [
                ["style", "top", '249px'],
                ["style", "left", '173px']
            ],
            "${_b7}": [
                ["style", "top", '180px'],
                ["style", "left", '428px'],
                ["style", "display", 'none']
            ],
            "${_b9}": [
                ["style", "top", '113px'],
                ["style", "left", '317px'],
                ["style", "display", 'none']
            ],
            "${_b11}": [
                ["style", "top", '249px'],
                ["style", "left", '317px'],
                ["style", "display", 'none']
            ],
            "${_TextCopy13}": [
                ["style", "top", '220px'],
                ["style", "left", '125px'],
                ["style", "width", '24px']
            ],
            "${_Text7}": [
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-size", '18px']
            ],
            "${_b17}": [
                ["style", "top", '303px'],
                ["style", "left", '395px'],
                ["style", "display", 'none']
            ],
            "${_b5Copy7}": [
                ["style", "top", '348px'],
                ["style", "left", '346px'],
                ["style", "display", 'none']
            ],
            "${_b1Copy6}": [
                ["style", "top", '401px'],
                ["style", "left", '415px'],
                ["style", "display", 'none']
            ],
            "${_Text5}": [
                ["style", "top", '367px'],
                ["style", "left", '328px'],
                ["style", "display", 'none']
            ],
            "${_b4Copy5}": [
                ["style", "top", '299px'],
                ["style", "left", '210px']
            ],
            "${_Text}": [
                ["style", "top", '41px'],
                ["style", "left", '404px'],
                ["style", "width", '24px']
            ],
            "${_b5Copy2}": [
                ["style", "left", '93px'],
                ["style", "top", '149px']
            ],
            "${_Text2}": [
                ["style", "top", '93px'],
                ["style", "display", 'none'],
                ["style", "width", '302px'],
                ["style", "left", '265px'],
                ["style", "font-size", '16px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '41px'],
                ["style", "left", '329px'],
                ["style", "width", '24px']
            ],
            "${_TextCopy18}": [
                ["style", "top", '268px'],
                ["style", "left", '163px'],
                ["style", "width", '24px']
            ],
            "${_TextCopy10}": [
                ["style", "top", '168px'],
                ["style", "left", '167px'],
                ["style", "width", '24px']
            ],
            "${_TextCopy21}": [
                ["style", "top", '318px'],
                ["style", "left", '124px'],
                ["style", "width", '24px']
            ],
            "${_TextCopy27}": [
                ["style", "top", '420px'],
                ["style", "display", 'none'],
                ["style", "left", '431px'],
                ["style", "width", '24px']
            ],
            "${_b3Copy7}": [
                ["style", "top", '349px'],
                ["style", "left", '290px'],
                ["style", "display", 'none']
            ],
            "${_b2Copy5}": [
                ["style", "top", '299px'],
                ["style", "left", '131px']
            ],
            "${_b3Copy3}": [
                ["style", "left", '57px'],
                ["style", "top", '202px']
            ],
            "${_TextCopy4}": [
                ["style", "top", '120px'],
                ["style", "left", '82px'],
                ["style", "width", '24px']
            ],
            "${_TextCopy19}": [
                ["style", "top", '268px'],
                ["style", "left", '191px'],
                ["style", "width", '24px']
            ],
            "${_b5Copy3}": [
                ["style", "left", '95px'],
                ["style", "top", '201px']
            ],
            "${_TextCopy16}": [
                ["style", "top", '268px'],
                ["style", "left", '92px'],
                ["style", "width", '24px']
            ],
            "${_b2Copy3}": [
                ["style", "top", '201px'],
                ["style", "left", '132px']
            ],
            "${_b3Copy6}": [
                ["style", "top", '131px'],
                ["style", "left", '352px'],
                ["style", "display", 'none']
            ],
            "${_b3Copy4}": [
                ["style", "top", '250px'],
                ["style", "left", '57px']
            ],
            "${_b16}": [
                ["style", "top", '303px'],
                ["style", "left", '353px'],
                ["style", "display", 'none']
            ],
            "${_b2Copy2}": [
                ["style", "top", '149px'],
                ["style", "left", '57px']
            ],
            "${_b4Copy2}": [
                ["style", "top", '150px'],
                ["style", "left", '210px']
            ],
            "${_Text4Copy4}": [
                ["style", "top", '307px'],
                ["style", "left", '383px'],
                ["style", "display", 'none']
            ],
            "${_b3Copy2}": [
                ["style", "left", '130px'],
                ["style", "top", '150px']
            ],
            "${_TextCopy6}": [
                ["style", "top", '120px'],
                ["style", "left", '161px'],
                ["style", "width", '24px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
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
            timeline: [
                { id: "eid269", tween: [ "style", "${_b6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid272", tween: [ "style", "${_b6}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid280", tween: [ "style", "${_b6}", "display", 'none', { fromValue: 'block'}], position: 47592, duration: 0 },
                { id: "eid290", tween: [ "style", "${_b9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid291", tween: [ "style", "${_b9}", "display", 'block', { fromValue: 'none'}], position: 49500, duration: 0 },
                { id: "eid294", tween: [ "style", "${_b82}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid295", tween: [ "style", "${_b82}", "display", 'block', { fromValue: 'none'}], position: 52500, duration: 0 },
                { id: "eid316", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid319", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 83000, duration: 0 },
                { id: "eid323", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid328", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 84500, duration: 0 },
                { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid342", tween: [ "style", "${_b4Copy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid351", tween: [ "style", "${_b4Copy6}", "display", 'block', { fromValue: 'none'}], position: 96250, duration: 0 },
                { id: "eid292", tween: [ "style", "${_b12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid293", tween: [ "style", "${_b12}", "display", 'block', { fromValue: 'none'}], position: 51000, duration: 0 },
                { id: "eid308", tween: [ "style", "${_b16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid313", tween: [ "style", "${_b16}", "display", 'block', { fromValue: 'none'}], position: 70000, duration: 0 },
                { id: "eid339", tween: [ "style", "${_TextCopy26}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid348", tween: [ "style", "${_TextCopy26}", "display", 'block', { fromValue: 'none'}], position: 96250, duration: 0 },
                { id: "eid318", tween: [ "style", "${_Text4Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid321", tween: [ "style", "${_Text4Copy4}", "display", 'block', { fromValue: 'none'}], position: 83000, duration: 0 },
                { id: "eid288", tween: [ "style", "${_b62}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid289", tween: [ "style", "${_b62}", "display", 'block', { fromValue: 'none'}], position: 48000, duration: 0 },
                { id: "eid324", tween: [ "style", "${_b5Copy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid329", tween: [ "style", "${_b5Copy7}", "display", 'block', { fromValue: 'none'}], position: 84500, duration: 0 },
                { id: "eid243", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid247", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
                { id: "eid286", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 47592, duration: 0 },
                { id: "eid298", tween: [ "style", "${_b13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid299", tween: [ "style", "${_b13}", "display", 'block', { fromValue: 'none'}], position: 55500, duration: 0 },
                { id: "eid245", tween: [ "style", "${_b3Copy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid249", tween: [ "style", "${_b3Copy6}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
                { id: "eid284", tween: [ "style", "${_b3Copy6}", "display", 'none', { fromValue: 'block'}], position: 47592, duration: 0 },
                { id: "eid334", tween: [ "style", "${_b3Copy10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid343", tween: [ "style", "${_b3Copy10}", "display", 'block', { fromValue: 'none'}], position: 96250, duration: 0 },
                { id: "eid326", tween: [ "style", "${_b2Copy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid331", tween: [ "style", "${_b2Copy7}", "display", 'block', { fromValue: 'none'}], position: 84500, duration: 0 },
                { id: "eid304", tween: [ "style", "${_b14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid305", tween: [ "style", "${_b14}", "display", 'block', { fromValue: 'none'}], position: 60000, duration: 0 },
                { id: "eid271", tween: [ "style", "${_b7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid274", tween: [ "style", "${_b7}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid282", tween: [ "style", "${_b7}", "display", 'none', { fromValue: 'block'}], position: 47592, duration: 0 },
                { id: "eid332", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid333", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 87250, duration: 0 },
                { id: "eid302", tween: [ "style", "${_b11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid303", tween: [ "style", "${_b11}", "display", 'block', { fromValue: 'none'}], position: 58500, duration: 0 },
                { id: "eid244", tween: [ "style", "${_b2Copy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid248", tween: [ "style", "${_b2Copy6}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
                { id: "eid283", tween: [ "style", "${_b2Copy6}", "display", 'none', { fromValue: 'block'}], position: 47592, duration: 0 },
                { id: "eid306", tween: [ "style", "${_b15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid311", tween: [ "style", "${_b15}", "display", 'block', { fromValue: 'none'}], position: 70000, duration: 0 },
                { id: "eid296", tween: [ "style", "${_b10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid297", tween: [ "style", "${_b10}", "display", 'block', { fromValue: 'none'}], position: 54000, duration: 0 },
                { id: "eid336", tween: [ "style", "${_b5Copy9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid345", tween: [ "style", "${_b5Copy9}", "display", 'block', { fromValue: 'none'}], position: 96250, duration: 0 },
                { id: "eid325", tween: [ "style", "${_Text5Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid330", tween: [ "style", "${_Text5Copy}", "display", 'block', { fromValue: 'none'}], position: 84500, duration: 0 },
                { id: "eid270", tween: [ "style", "${_b8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid273", tween: [ "style", "${_b8}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid281", tween: [ "style", "${_b8}", "display", 'none', { fromValue: 'block'}], position: 47592, duration: 0 },
                { id: "eid337", tween: [ "style", "${_TextCopy25}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid346", tween: [ "style", "${_TextCopy25}", "display", 'block', { fromValue: 'none'}], position: 96250, duration: 0 },
                { id: "eid307", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid312", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 70000, duration: 0 },
                { id: "eid335", tween: [ "style", "${_TextCopy24}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid344", tween: [ "style", "${_TextCopy24}", "display", 'block', { fromValue: 'none'}], position: 96250, duration: 0 },
                { id: "eid338", tween: [ "style", "${_b2Copy9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid347", tween: [ "style", "${_b2Copy9}", "display", 'block', { fromValue: 'none'}], position: 96250, duration: 0 },
                { id: "eid352", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid353", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 99750, duration: 0 },
                { id: "eid341", tween: [ "style", "${_TextCopy27}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid350", tween: [ "style", "${_TextCopy27}", "display", 'block', { fromValue: 'none'}], position: 96250, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid340", tween: [ "style", "${_b1Copy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid349", tween: [ "style", "${_b1Copy6}", "display", 'block', { fromValue: 'none'}], position: 96250, duration: 0 },
                { id: "eid300", tween: [ "style", "${_b72}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid301", tween: [ "style", "${_b72}", "display", 'block', { fromValue: 'none'}], position: 57000, duration: 0 },
                { id: "eid317", tween: [ "style", "${_Text4Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid320", tween: [ "style", "${_Text4Copy3}", "display", 'block', { fromValue: 'none'}], position: 83000, duration: 0 },
                { id: "eid322", tween: [ "style", "${_b3Copy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid327", tween: [ "style", "${_b3Copy7}", "display", 'block', { fromValue: 'none'}], position: 84500, duration: 0 },
                { id: "eid246", tween: [ "style", "${_b5Copy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid250", tween: [ "style", "${_b5Copy6}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
                { id: "eid285", tween: [ "style", "${_b5Copy6}", "display", 'none', { fromValue: 'block'}], position: 47592, duration: 0 },
                { id: "eid309", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid314", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 70000, duration: 0 },
                { id: "eid310", tween: [ "style", "${_b17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid315", tween: [ "style", "${_b17}", "display", 'block', { fromValue: 'none'}], position: 70000, duration: 0 },
                { id: "eid268", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_question}', [] ], ""], position: 2000 },
                { id: "eid275", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint1}', [] ], ""], position: 12000 },
                { id: "eid287", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2a}', [] ], ""], position: 35750 },
                { id: "eid354", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint2b}', [] ], ""], position: 61000 },
                { id: "eid355", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint3}', [] ], ""], position: 72000 },
                { id: "eid358", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_hint4}', [] ], ""], position: 85500 },
                { id: "eid357", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_answer}', [] ], ""], position: 96250 }            ]
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
                ["style", "top", '0px'],
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
                ["style", "top", '0px']
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
                ["style", "top", '0px']
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
                ["style", "top", '0px']
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
                ["style", "top", '16px']
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
