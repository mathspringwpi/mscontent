/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Question_Text',
            type:'text',
            rect:['15px','30px','219px','124px','auto','auto'],
            text:"<br><br>In the figure on the right, what is the value of ",
            align:"left",
            font:['Georgia, Times New Roman, Times, serif',18,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerDText',
            type:'text',
            rect:['71px','293px','101px','20px','auto','auto'],
            text:"36",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerCText',
            type:'text',
            rect:['71px','257px','101px','19px','auto','auto'],
            text:"28<br>",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerBText',
            type:'text',
            rect:['71px','225px','112px','19px','auto','auto'],
            text:"20",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerAText',
            type:'text',
            rect:['71px','190px','109px','19px','auto','auto'],
            text:"10",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'QuestionSound_Container',
            display:'none',
            type:'rect',
            rect:['15px','10px','17px','8px','auto','auto'],
            fill:["rgba(248,250,248,0.00)"],
            stroke:[1,"rgb(4, 4, 4)","solid"]
         },
         {
            id:'Sound_Container',
            display:'none',
            type:'rect',
            rect:['46px','19px','164px','7px','auto','auto'],
            fill:["rgba(248,250,248,1)"],
            stroke:[1,"rgb(4, 4, 4)","solid"]
         },
         {
            id:'TextCopy',
            type:'text',
            rect:['523px','261px','auto','auto','auto','auto'],
            text:"T<br>",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',24,"rgba(0,0,0,1)","normal","none","italic"]
         },
         {
            id:'TextCopy2',
            type:'text',
            rect:['419px','90px','auto','auto','auto','auto'],
            text:"S<br>",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',24,"rgba(0,0,0,1)","normal","none","italic"]
         },
         {
            id:'Text',
            type:'text',
            rect:['245','261px','auto','auto','auto','auto'],
            text:"R",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',24,"rgba(0,0,0,1)","normal","none","italic"]
         },
         {
            id:'Triangle',
            type:'group',
            rect:['270','125px','249','136','auto','auto'],
            c:[
            {
               id:'Rectangle3',
               type:'rect',
               rect:['-23px','66px','207px','4px','auto','auto'],
               fill:["rgba(6,6,6,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[[],['-40']]
            },
            {
               id:'Rectangle3Copy',
               type:'rect',
               rect:['125px','66px','156px','4px','auto','auto'],
               fill:["rgba(6,6,6,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[[],['56']]
            },
            {
               id:'Rectangle2',
               type:'rect',
               rect:['0px','132px','249px','4px','auto','auto'],
               fill:["rgba(3,3,3,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            }]
         },
         {
            id:'TextCopy5',
            type:'text',
            rect:['471px','228px','auto','auto','auto','auto'],
            text:"2a",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',24,"rgba(0,0,0,1)","normal","none","italic"]
         },
         {
            id:'TextCopy4',
            type:'text',
            rect:['410px','138px','auto','auto','auto','auto'],
            text:"3a",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',24,"rgba(0,0,0,1)","normal","none","italic"]
         },
         {
            id:'TextCopy3',
            type:'text',
            rect:['297px','228px','auto','auto','auto','auto'],
            text:"40˚",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',24,"rgba(0,0,0,1)","normal","none","italic"]
         },
         {
            id:'height',
            type:'text',
            rect:['241px','102px','19px','27px','auto','auto'],
            text:"102",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'width',
            type:'text',
            rect:['270px','64px','68px','13px','auto','auto'],
            text:"241",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerEText',
            type:'text',
            rect:['71px','329px','101px','20px','auto','auto'],
            text:"45",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Angle_R',
            type:'group',
            rect:['271','214','69','47','auto','auto'],
            c:[
            {
               id:'Rectangle',
               type:'rect',
               rect:['-1px','26px','66px','4px','auto','auto'],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'RectangleCopy',
               type:'rect',
               rect:['-1px','26px','66px','4px','auto','auto'],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'TextCopy6',
               type:'text',
               rect:['26px','14px','auto','auto','auto','auto'],
               text:"40˚",
               align:"left",
               font:['Georgia, \'Times New Roman\', Times, serif',24,"rgba(0,0,0,1)","normal","none","italic"]
            }]
         },
         {
            id:'Angle_T',
            type:'group',
            rect:['450','201','69','60','auto','auto'],
            c:[
            {
               id:'Rectangle4Copy3',
               type:'rect',
               rect:['-252px','-11px','69px','0px','auto','auto'],
               fill:["rgba(212,17,17,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle4Copy2',
               type:'rect',
               rect:['-252px','-11px','69px','0px','auto','auto'],
               fill:["rgba(212,17,17,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text2',
               type:'text',
               rect:['56px','-21px','auto','auto','auto','auto'],
               text:"2a",
               align:"left",
               font:['Georgia, \'Times New Roman\', Times, serif',24,"rgba(0,0,0,1)","normal","none","italic"]
            }]
         },
         {
            id:'Angle_S',
            type:'group',
            rect:['385','124','75','47','auto','auto'],
            c:[
            {
               id:'Rectangle5',
               type:'rect',
               rect:['-122px','14px','54px','0px','auto','auto'],
               fill:["rgba(212,17,17,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle5Copy3',
               type:'rect',
               rect:['-122px','14px','54px','0px','auto','auto'],
               fill:["rgba(212,17,17,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'TextCopy7',
               type:'text',
               rect:['25px','14px','auto','auto','auto','auto'],
               text:"3a",
               align:"left",
               font:['Georgia, \'Times New Roman\', Times, serif',24,"rgba(0,0,0,1)","normal","none","italic"]
            }]
         },
         {
            id:'Text4Copy',
            type:'text',
            rect:['291','293','auto','auto','auto','auto'],
            text:"40˚+ 3a + 2a =",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4Copy2',
            type:'text',
            rect:['291','293','auto','auto','auto','auto'],
            text:"40˚+ 3a",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4Copy3',
            type:'text',
            rect:['291','293','auto','auto','auto','auto'],
            text:"40˚+ 3a + 2a = 180˚",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4Copy4',
            type:'text',
            rect:['386px','318px','auto','auto','auto','auto'],
            text:"a =",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4Copy5',
            type:'text',
            rect:['376px','318px','auto','auto','auto','auto'],
            text:"5a =",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4Copy9',
            type:'text',
            rect:['386px','339px','auto','auto','auto','auto'],
            text:"a =",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4Copy6',
            type:'text',
            rect:['415px','318px','auto','auto','auto','auto'],
            text:"180˚",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4Copy7',
            type:'text',
            rect:['457px','317px','auto','auto','auto','auto'],
            text:"- 40˚",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4Copy15',
            type:'text',
            rect:['427px','295px','auto','auto','auto','auto'],
            text:"?",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4Copy8',
            type:'text',
            rect:['510px','318px','auto','auto','auto','auto'],
            text:"= 140˚",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4Copy10',
            type:'text',
            rect:['526px','343px','auto','auto','auto','auto'],
            text:"140˚/ 5",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4Copy12',
            type:'text',
            rect:['526px','370px','auto','auto','auto','auto'],
            text:"28˚",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4Copy11',
            type:'text',
            rect:['386px','370px','auto','auto','auto','auto'],
            text:"a =",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4',
            type:'text',
            rect:['291','293','auto','auto','auto','auto'],
            text:"40˚",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4Copy14',
            type:'text',
            rect:['427px','295px','auto','auto','auto','auto'],
            text:"?",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4Copy16',
            type:'text',
            rect:['427px','295px','auto','auto','auto','auto'],
            text:"?",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text3',
            type:'text',
            rect:['175px','93px','auto','auto','auto','auto'],
            text:"a",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',18,"rgba(17,111,64,1.00)","normal","none","italic"]
         },
         {
            id:'Text5',
            type:'text',
            rect:['193px','93px','auto','auto','auto','auto'],
            text:"?",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',18,"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'Answers_1',
            type:'rect',
            rect:['54','276','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Answers_1',
            symbolName:'Answers_1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(3,3,3,1.00)'],
            ["style", "height", '4px'],
            ["style", "left", '0px'],
            ["style", "top", '132px']
         ],
         "${_Text2}": [
            ["style", "top", '27px'],
            ["style", "opacity", '1'],
            ["style", "left", '21px'],
            ["color", "color", 'rgba(214,11,11,1)']
         ],
         "${_QuestionSound_Container}": [
            ["style", "height", '8px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(248,250,248,0.00)'],
            ["style", "width", '17px']
         ],
         "${_Answers_1}": [
            ["style", "left", '29px'],
            ["style", "top", '167px']
         ],
         "${_Text4Copy12}": [
            ["style", "top", '370px'],
            ["color", "color", 'rgba(5,68,15,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '526px'],
            ["style", "font-size", '18px']
         ],
         "${_AnswerDText}": [
            ["style", "top", '293px'],
            ["style", "left", '71px'],
            ["style", "width", '101px']
         ],
         "${_Text4Copy}": [
            ["color", "color", 'rgba(5,68,15,1)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '18px']
         ],
         "${_Text4Copy9}": [
            ["style", "top", '344px'],
            ["color", "color", 'rgba(5,68,15,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '386px'],
            ["style", "font-size", '18px']
         ],
         "${_Question_Text}": [
            ["style", "top", '30px'],
            ["style", "font-size", '18px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '124px'],
            ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
            ["style", "left", '15px'],
            ["style", "width", '219px']
         ],
         "${_Text4Copy7}": [
            ["style", "top", '317px'],
            ["color", "color", 'rgba(5,68,15,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '457px'],
            ["style", "font-size", '18px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '66px'],
            ["transform", "rotateZ", '-40deg'],
            ["style", "height", '4px'],
            ["color", "background-color", 'rgba(6,6,6,1.00)'],
            ["style", "left", '-23px'],
            ["style", "width", '207px']
         ],
         "${_Text4Copy4}": [
            ["style", "top", '318px'],
            ["color", "color", 'rgba(5,68,15,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '386px'],
            ["style", "font-size", '18px']
         ],
         "${_TextCopy5}": [
            ["style", "top", '228px'],
            ["style", "font-style", 'italic'],
            ["style", "left", '471px'],
            ["style", "font-size", '24px']
         ],
         "${_Text4Copy8}": [
            ["style", "top", '318px'],
            ["color", "color", 'rgba(5,68,15,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '510px'],
            ["style", "font-size", '18px']
         ],
         "${_Rectangle3Copy}": [
            ["style", "top", '66px'],
            ["transform", "rotateZ", '56deg'],
            ["style", "height", '4px'],
            ["color", "background-color", 'rgba(6,6,6,1)'],
            ["style", "left", '125px'],
            ["style", "width", '156px']
         ],
         "${_TextCopy4}": [
            ["style", "top", '138px'],
            ["style", "font-style", 'italic'],
            ["style", "left", '410px'],
            ["style", "font-size", '24px']
         ],
         "${_Text4Copy16}": [
            ["style", "top", '295px'],
            ["color", "color", 'rgba(5,68,15,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '427px'],
            ["style", "font-size", '18px']
         ],
         "${_Text4Copy13}": [
            ["color", "color", 'rgba(5,68,15,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '18px']
         ],
         "${_Text4Copy2}": [
            ["color", "color", 'rgba(5,68,15,1)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '18px']
         ],
         "${_TextCopy}": [
            ["style", "top", '261px'],
            ["style", "font-style", 'italic'],
            ["style", "left", '523px'],
            ["style", "font-size", '24px']
         ],
         "${_Angle_T}": [
            ["style", "top", '201px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '60px'],
            ["style", "opacity", '0'],
            ["style", "left", '450px'],
            ["style", "width", '69px']
         ],
         "${_Text4Copy11}": [
            ["style", "top", '370px'],
            ["color", "color", 'rgba(5,68,15,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '386px'],
            ["style", "font-size", '18px']
         ],
         "${_Text4Copy6}": [
            ["style", "top", '318px'],
            ["color", "color", 'rgba(5,68,15,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '415px'],
            ["style", "font-size", '18px']
         ],
         "${_Rectangle5Copy3}": [
            ["style", "top", '19px'],
            ["transform", "rotateZ", '-40deg'],
            ["style", "height", '4px'],
            ["style", "opacity", '1'],
            ["style", "left", '-5px']
         ],
         "${_AnswerEText}": [
            ["style", "top", '329px'],
            ["style", "left", '71px'],
            ["style", "width", '101px']
         ],
         "${_AnswerBText}": [
            ["style", "top", '225px'],
            ["style", "left", '71px'],
            ["style", "width", '112px']
         ],
         "${_Text4Copy3}": [
            ["color", "color", 'rgba(5,68,15,1)'],
            ["style", "opacity", '0.000000'],
            ["style", "font-size", '18px']
         ],
         "${_Text5}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '93px'],
            ["style", "left", '193px'],
            ["style", "font-style", 'normal']
         ],
         "${_Text4Copy14}": [
            ["style", "top", '319px'],
            ["color", "color", 'rgba(5,68,15,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '427px'],
            ["style", "font-size", '18px']
         ],
         "${_AnswerCText}": [
            ["style", "top", '257px'],
            ["style", "left", '71px'],
            ["style", "width", '101px']
         ],
         "${_Text4Copy5}": [
            ["style", "top", '318px'],
            ["color", "color", 'rgba(5,68,15,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '376px'],
            ["style", "font-size", '18px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '21px'],
            ["color", "background-color", 'rgba(212,17,17,1)'],
            ["style", "left", '-6px'],
            ["transform", "rotateZ", '-40deg']
         ],
         "${_TextCopy2}": [
            ["style", "top", '90px'],
            ["style", "font-style", 'italic'],
            ["style", "left", '419px'],
            ["style", "font-size", '24px']
         ],
         "${_Text4Copy10}": [
            ["style", "top", '343px'],
            ["color", "color", 'rgba(5,68,15,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '526px'],
            ["style", "font-size", '18px']
         ],
         "${_Rectangle}": [
            ["style", "top", '43px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(212,17,17,1.00)']
         ],
         "${_Sound_Container}": [
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden']
         ],
         "${_Text4Copy15}": [
            ["style", "top", '295px'],
            ["color", "color", 'rgba(5,68,15,1)'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '427px'],
            ["style", "font-size", '18px']
         ],
         "${_Angle_R}": [
            ["style", "top", '214px'],
            ["style", "opacity", '0'],
            ["style", "left", '271px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_TextCopy3}": [
            ["style", "top", '228px'],
            ["style", "font-style", 'italic'],
            ["style", "left", '297px'],
            ["style", "font-size", '24px']
         ],
         "${_Triangle}": [
            ["style", "top", '125px']
         ],
         "${_Rectangle5}": [
            ["style", "top", '22px'],
            ["transform", "rotateZ", '56deg'],
            ["style", "height", '4px'],
            ["style", "opacity", '1'],
            ["style", "left", '31px']
         ],
         "${_AnswerAText}": [
            ["style", "top", '190px'],
            ["style", "text-align", 'left'],
            ["style", "height", '19px'],
            ["style", "font-size", '12px'],
            ["style", "left", '71px'],
            ["style", "width", '109px']
         ],
         "${_Rectangle4Copy2}": [
            ["style", "top", '28px'],
            ["transform", "rotateZ", '56deg'],
            ["style", "height", '4px'],
            ["style", "opacity", '1'],
            ["style", "left", '14px']
         ],
         "${_Rectangle4Copy3}": [
            ["style", "height", '4px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "top", '56px']
         ],
         "${_Text3}": [
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(17,111,64,1.00)'],
            ["style", "left", '175px'],
            ["style", "top", '93px']
         ],
         "${_Angle_S}": [
            ["style", "top", '124px'],
            ["style", "opacity", '0'],
            ["style", "left", '385px']
         ],
         "${_Text4}": [
            ["color", "color", 'rgba(5,68,15,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '18px']
         ],
         "${_Text}": [
            ["style", "top", '261px'],
            ["style", "font-style", 'italic'],
            ["style", "font-size", '24px']
         ],
         "${_height}": [
            ["style", "top", '102px'],
            ["style", "width", '57px'],
            ["color", "color", 'rgba(4,4,4,1.00)'],
            ["style", "display", 'block'],
            ["style", "height", '31px'],
            ["style", "left", '241px'],
            ["style", "font-size", '12px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '600px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_width}": [
            ["style", "top", '64px'],
            ["style", "width", '68px'],
            ["color", "color", 'rgba(8,8,8,1.00)'],
            ["style", "display", 'block'],
            ["style", "height", '13px'],
            ["style", "left", '270px'],
            ["style", "font-size", '12px']
         ],
         "${_TextCopy6}": [
            ["style", "top", '13px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(201,11,11,1.00)'],
            ["style", "left", '26px'],
            ["style", "font-size", '24px']
         ],
         "${_TextCopy7}": [
            ["style", "top", '14px'],
            ["color", "color", 'rgba(220,9,9,1.00)'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '1'],
            ["style", "left", '25px'],
            ["style", "font-size", '24px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 92500,
         autoPlay: true,
         labels: {
            "Read Question": 2000,
            "Hint 1": 10000,
            "Hint 2": 23000,
            "Hint3": 35000,
            "hint4": 54500,
            "answer": 69000
         },
         timeline: [
            { id: "eid269", tween: [ "transform", "${_Rectangle5}", "rotateZ", '56deg', { fromValue: '56deg'}], position: 14000, duration: 0 },
            { id: "eid268", tween: [ "style", "${_Rectangle5}", "height", '4px', { fromValue: '4px'}], position: 14000, duration: 0 },
            { id: "eid294", tween: [ "style", "${_Text4}", "font-size", '18px', { fromValue: '18px'}], position: 28500, duration: 0 },
            { id: "eid212", tween: [ "style", "${_TextCopy6}", "left", '26px', { fromValue: '26px'}], position: 14000, duration: 0 },
            { id: "eid321", tween: [ "style", "${_Text4Copy4}", "opacity", '1', { fromValue: '0'}], position: 50000, duration: 750 },
            { id: "eid367", tween: [ "style", "${_Text4Copy4}", "opacity", '0', { fromValue: '1'}], position: 72250, duration: 500 },
            { id: "eid336", tween: [ "style", "${_Text4Copy9}", "left", '386px', { fromValue: '386px'}], position: 72750, duration: 0 },
            { id: "eid205", tween: [ "style", "${_RectangleCopy}", "left", '-6px', { fromValue: '-6px'}], position: 14000, duration: 0 },
            { id: "eid250", tween: [ "style", "${_Angle_T}", "opacity", '1', { fromValue: '0'}], position: 11500, duration: 250 },
            { id: "eid312", tween: [ "style", "${_Angle_T}", "opacity", '0', { fromValue: '1'}], position: 42500, duration: 1500 },
            { id: "eid397", tween: [ "style", "${_Text4Copy16}", "opacity", '1', { fromValue: '0'}], position: 32000, duration: 750 },
            { id: "eid398", tween: [ "style", "${_Text4Copy16}", "opacity", '0', { fromValue: '1'}], position: 45000, duration: 500 },
            { id: "eid290", tween: [ "style", "${_Angle_S}", "top", '24px', { fromValue: '124px'}], position: 14000, duration: 3250 },
            { id: "eid394", tween: [ "style", "${_Text4Copy14}", "opacity", '1', { fromValue: '0'}], position: 51139, duration: 361 },
            { id: "eid395", tween: [ "style", "${_Text4Copy14}", "opacity", '0', { fromValue: '1'}], position: 59250, duration: 500 },
            { id: "eid400", tween: [ "style", "${_Answers_1}", "top", '167px', { fromValue: '167px'}], position: 66500, duration: 0 },
            { id: "eid308", tween: [ "style", "${_Text4Copy2}", "opacity", '1', { fromValue: '0.000000'}], position: 29250, duration: 500 },
            { id: "eid369", tween: [ "style", "${_Text4Copy2}", "opacity", '0', { fromValue: '1'}], position: 65000, duration: 500 },
            { id: "eid374", tween: [ "style", "${_Text4Copy12}", "opacity", '1', { fromValue: '0'}], position: 75500, duration: 750 },
            { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid342", tween: [ "style", "${_Text4Copy10}", "opacity", '1', { fromValue: '0'}], position: 72250, duration: 500 },
            { id: "eid384", tween: [ "style", "${_Text4Copy10}", "opacity", '0.50604248046875', { fromValue: '1'}], position: 74750, duration: 750 },
            { id: "eid160", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(212,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(212,17,17,1.00)'}], position: 14000, duration: 0 },
            { id: "eid289", tween: [ "style", "${_Angle_S}", "left", '339px', { fromValue: '385px'}], position: 14000, duration: 3250 },
            { id: "eid284", tween: [ "style", "${_Rectangle5}", "left", '31px', { fromValue: '31px'}], position: 14000, duration: 0 },
            { id: "eid215", tween: [ "transform", "${_Angle_R}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 14000, duration: 3250 },
            { id: "eid393", tween: [ "style", "${_Text4Copy14}", "top", '319px', { fromValue: '319px'}], position: 51139, duration: 0 },
            { id: "eid329", tween: [ "style", "${_Text4Copy8}", "opacity", '1', { fromValue: '0'}], position: 65000, duration: 1000 },
            { id: "eid363", tween: [ "style", "${_Text4Copy8}", "opacity", '0.50509643554688', { fromValue: '1'}], position: 72250, duration: 500 },
            { id: "eid340", tween: [ "style", "${_Text4Copy9}", "top", '344px', { fromValue: '344px'}], position: 72750, duration: 0 },
            { id: "eid92", tween: [ "style", "${_width}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid165", tween: [ "transform", "${_RectangleCopy}", "rotateZ", '-40deg', { fromValue: '-40deg'}], position: 14000, duration: 0 },
            { id: "eid218", tween: [ "style", "${_Angle_R}", "opacity", '1', { fromValue: '0'}], position: 11500, duration: 250 },
            { id: "eid317", tween: [ "style", "${_Angle_R}", "opacity", '0', { fromValue: '1'}], position: 42500, duration: 1500 },
            { id: "eid93", tween: [ "style", "${_height}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid209", tween: [ "style", "${_TextCopy6}", "top", '13px', { fromValue: '13px'}], position: 14000, duration: 0 },
            { id: "eid173", tween: [ "color", "${_TextCopy6}", "color", 'rgba(201,11,11,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(201,11,11,1.00)'}], position: 14000, duration: 0 },
            { id: "eid319", tween: [ "style", "${_Rectangle4Copy2}", "opacity", '0', { fromValue: '1'}], position: 42500, duration: 1500 },
            { id: "eid287", tween: [ "color", "${_TextCopy7}", "color", 'rgba(220,9,9,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(220,9,9,1.00)'}], position: 14000, duration: 0 },
            { id: "eid372", tween: [ "style", "${_Text4Copy11}", "opacity", '1', { fromValue: '0'}], position: 74250, duration: 500 },
            { id: "eid315", tween: [ "style", "${_Rectangle5Copy3}", "opacity", '0', { fromValue: '1'}], position: 42500, duration: 1500 },
            { id: "eid292", tween: [ "style", "${_Angle_S}", "opacity", '1', { fromValue: '0'}], position: 11500, duration: 250 },
            { id: "eid316", tween: [ "style", "${_Angle_S}", "opacity", '0', { fromValue: '1'}], position: 42500, duration: 1500 },
            { id: "eid283", tween: [ "style", "${_Rectangle5}", "top", '22px', { fromValue: '22px'}], position: 14000, duration: 0 },
            { id: "eid245", tween: [ "transform", "${_Angle_T}", "rotateZ", '-180deg', { fromValue: '0deg'}], position: 14000, duration: 3250 },
            { id: "eid295", tween: [ "color", "${_Text4}", "color", 'rgba(5,68,15,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(5,68,15,1.00)'}], position: 28500, duration: 0 },
            { id: "eid325", tween: [ "style", "${_Text4Copy6}", "opacity", '1', { fromValue: '0'}], position: 60500, duration: 500 },
            { id: "eid365", tween: [ "style", "${_Text4Copy6}", "opacity", '0.50509643554688', { fromValue: '1'}], position: 72250, duration: 500 },
            { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid399", tween: [ "style", "${_Answers_1}", "left", '29px', { fromValue: '29px'}], position: 66500, duration: 0 },
            { id: "eid208", tween: [ "style", "${_Rectangle}", "top", '43px', { fromValue: '43px'}], position: 14000, duration: 0 },
            { id: "eid318", tween: [ "style", "${_TextCopy7}", "opacity", '0', { fromValue: '1'}], position: 42500, duration: 1500 },
            { id: "eid314", tween: [ "style", "${_Rectangle4Copy3}", "opacity", '0', { fromValue: '1'}], position: 42500, duration: 1500 },
            { id: "eid247", tween: [ "style", "${_Angle_T}", "top", '25px', { fromValue: '201px'}], position: 14000, duration: 3250 },
            { id: "eid311", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 42500, duration: 1500 },
            { id: "eid310", tween: [ "style", "${_Text4Copy3}", "opacity", '1', { fromValue: '0'}], position: 46000, duration: 750 },
            { id: "eid368", tween: [ "style", "${_Text4Copy3}", "opacity", '0.51922607421875', { fromValue: '1'}], position: 65000, duration: 500 },
            { id: "eid302", tween: [ "style", "${_Text4Copy}", "opacity", '1', { fromValue: '0'}], position: 30750, duration: 500 },
            { id: "eid370", tween: [ "style", "${_Text4Copy}", "opacity", '0', { fromValue: '1'}], position: 65000, duration: 500 },
            { id: "eid246", tween: [ "style", "${_Angle_T}", "left", '384px', { fromValue: '450px'}], position: 14000, duration: 3250 },
            { id: "eid331", tween: [ "style", "${_Text4Copy9}", "opacity", '1', { fromValue: '0'}], position: 71000, duration: 500 },
            { id: "eid383", tween: [ "style", "${_Text4Copy9}", "opacity", '0.50604248046875', { fromValue: '1'}], position: 74750, duration: 750 },
            { id: "eid323", tween: [ "style", "${_Text4Copy5}", "opacity", '1', { fromValue: '0'}], position: 56750, duration: 750 },
            { id: "eid364", tween: [ "style", "${_Text4Copy5}", "opacity", '0.50509643554688', { fromValue: '1'}], position: 72250, duration: 500 },
            { id: "eid313", tween: [ "style", "${_Rectangle5}", "opacity", '0', { fromValue: '1'}], position: 42500, duration: 1500 },
            { id: "eid297", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 28000, duration: 500 },
            { id: "eid298", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 44000, duration: 250 },
            { id: "eid327", tween: [ "style", "${_Text4Copy7}", "opacity", '1', { fromValue: '0'}], position: 62000, duration: 750 },
            { id: "eid366", tween: [ "style", "${_Text4Copy7}", "opacity", '0.50509643554688', { fromValue: '1'}], position: 72250, duration: 500 },
            { id: "eid196", tween: [ "style", "${_RectangleCopy}", "top", '21px', { fromValue: '21px'}], position: 14000, duration: 0 },
            { id: "eid207", tween: [ "style", "${_Rectangle}", "left", '0px', { fromValue: '0px'}], position: 14000, duration: 0 },
            { id: "eid213", tween: [ "style", "${_Angle_R}", "top", '25px', { fromValue: '214px'}], position: 14000, duration: 3250 },
            { id: "eid214", tween: [ "style", "${_Angle_R}", "left", '312px', { fromValue: '271px'}], position: 14000, duration: 3250 }         ]
      }
   }
},
"EButton_3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'E_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy8',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text8',
         text: 'E',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['-8px','-3px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/x2.png','0px','0px']
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/check2.png','0px','0px']
      }]
   }],
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
            { id: "eid43", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 }         ]
      }
   }
},
"EButton_2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'E_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy8',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text8',
         text: 'E',
         align: 'center',
         rect: ['0px','4px','27px','20px','auto','auto']
      },
      {
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text14',
         text: 'Answer E Text',
         align: 'left',
         rect: ['36px','4px','101px','20px','auto','auto']
      },
      {
         rect: ['-8px','-3px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/x.png','0px','0px']
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/check.png','0px','0px']
      }]
   }],
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
            { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }         ]
      }
   }
},
"EButton_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'E_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy8',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text8',
         text: 'E',
         align: 'center',
         rect: ['0px','4px','27px','20px','auto','auto']
      },
      {
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text14',
         text: 'Answer E Text',
         align: 'left',
         rect: ['36px','4px','101px','20px','auto','auto']
      },
      {
         rect: ['-8px','-3px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','x.png','0px','0px']
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','check.png','0px','0px']
      }]
   }],
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
            { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }         ]
      }
   }
},
"EButton": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'E_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy8',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text8',
         text: 'E',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['-8px','-3px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','x.png','0px','0px']
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','check.png','0px','0px']
      }]
   }],
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
            { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }         ]
      }
   }
},
"DButton_3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'D_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy7',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/x2.png','0px','0px']
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/check2.png','0px','0px']
      }]
   }],
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
            { id: "eid266", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 }         ]
      }
   }
},
"DButton_2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'D_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy7',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         rect: ['0px','4px','27px','20px','auto','auto']
      },
      {
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text13',
         text: 'Answer D Text',
         align: 'left',
         rect: ['36px','4px','101px','20px','auto','auto']
      },
      {
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/x.png','0px','0px']
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/check.png','0px','0px']
      }]
   }],
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
            { id: "eid256", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }         ]
      }
   }
},
"DButton_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'D_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy7',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         rect: ['0px','4px','27px','20px','auto','auto']
      },
      {
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text13',
         text: 'Answer D Text',
         align: 'left',
         rect: ['36px','4px','101px','20px','auto','auto']
      },
      {
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','x.png','0px','0px']
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','check.png','0px','0px']
      }]
   }],
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
            { id: "eid256", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }         ]
      }
   }
},
"DButton": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'D_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy7',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         rect: ['0px','4px','27px','20px','auto','auto']
      },
      {
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text13',
         text: 'Answer Text D',
         align: 'left',
         rect: ['36px','4px','94px','20px','auto','auto']
      },
      {
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','x.png','0px','0px']
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','check.png','0px','0px']
      }]
   }],
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
            { id: "eid256", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }         ]
      }
   }
},
"CButton_3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'C_Button',
      type: 'group',
      rect: ['0px','0px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy6',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text5',
         text: 'C',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/x2.png','0px','0px']
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/check2.png','0px','0px']
      }]
   }],
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
            { id: "eid264", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 }         ]
      }
   }
},
"BButton_3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'B_Button',
      type: 'group',
      rect: ['0px','0px','25','25','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy5',
         stroke: [0,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['0px','5px','27px','19px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text4',
         text: 'B',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/x2.png','0px','0px']
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/check2.png','0px','0px']
      }]
   }],
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
            { id: "eid263", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 }         ]
      }
   }
},
"Answers_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group',
      type: 'group',
      rect: ['0px','0px','153','183','auto','auto'],
      c: [
      {
         id: 'EButton',
         type: 'rect',
         rect: ['8px','157px','auto','auto','auto','auto']
      },
      {
         id: 'DButton',
         type: 'rect',
         rect: ['8px','121px','auto','auto','auto','auto']
      },
      {
         id: 'CButton',
         type: 'rect',
         rect: ['8px','86px','auto','auto','auto','auto']
      },
      {
         id: 'BButton',
         type: 'rect',
         rect: ['8px','50px','auto','auto','auto','auto']
      },
      {
         id: 'AButton',
         type: 'rect',
         rect: ['0px','0px','auto','auto','auto','auto']
      }]
   }],
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
   }   ]
   },
   states: {
      "Base State": {
         "${_CButton}": [
            ["style", "left", '8px'],
            ["style", "top", '86px']
         ],
         "${_EButton}": [
            ["style", "left", '8px'],
            ["style", "top", '157px']
         ],
         "${_Group}": [
            ["style", "top", '0px'],
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
},
"AButton_3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'A_Button',
      type: 'group',
      rect: ['8px','16px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(232,241,160,1.00)']
      },
      {
         rect: ['0px','3px','27px','19px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'A',
         text: 'A<br><br><br>',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/check2.png','0px','0px']
      },
      {
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/x2.png','0px','0px']
      }]
   }],
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
            { id: "eid42", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 }         ]
      }
   }
},
"AButton": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'A_Button',
      type: 'group',
      rect: ['8px','16px','25','24','auto','auto'],
      c: [
      {
         rect: ['0px','0px','25px','24px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'ellipse',
         fill: ['rgba(232,241,160,1.00)']
      },
      {
         rect: ['0px','3px','27px','19px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text3',
         text: 'A<br><br><br>',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['36px','3px','109px','19px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text9',
         text: 'Answer Text A',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','check.png','0px','0px']
      },
      {
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','x.png','0px','0px']
      }]
   }],
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
            { id: "eid260", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EdgeProblem");
