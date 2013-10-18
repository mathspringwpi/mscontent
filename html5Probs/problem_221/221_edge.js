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
            id:'purple_highlight',
            display:'none',
            type:'rect',
            rect:['374px','174px','170px','54px','auto','auto'],
            fill:["rgba(190,131,236,0.40)"],
            stroke:[9,"rgb(27, 6, 173)","none"]
         },
         {
            id:'PurpleZedCont',
            type:'group',
            rect:['66px','165','135','135px','auto','auto'],
            clip:['rect(0px 135px 66.20001220703125px 0px)'],
            transform:[[],['72']],
            c:[
            {
               id:'PurpleZed',
               type:'ellipse',
               rect:['0px','0px','125px','125px','auto','auto'],
               clip:['rect(0px 135px 66.20001220703125px 0px)'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(200,181,215,1)"],
               stroke:[5,"rgb(190, 131, 236)","solid"],
               transform:[[],['-180']]
            }]
         },
         {
            id:'LowerXGroup',
            type:'group',
            rect:['68','166','135','135','auto','auto'],
            clip:['rect(0px 135px 65.39996337890625px 0px)'],
            c:[
            {
               id:'LowerX',
               type:'ellipse',
               rect:['0px','0px','125px','125px','auto','auto'],
               clip:['rect(0px 135px 66.20001220703125px 0px)'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(97,204,181,1.00)"],
               stroke:[5,"rgba(7,128,102,1.00)","solid"],
               transform:[[],['-181']]
            }]
         },
         {
            id:'LowerYCont',
            type:'group',
            rect:['69','165','135','69px','auto','auto'],
            clip:['rect(0px 135px 67px 0px)'],
            c:[
            {
               id:'LowerY',
               type:'ellipse',
               rect:['0px','0px','125px','125px','auto','auto'],
               clip:['rect(0px 135px 68.5999755859375px 0px)'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(243,201,108,1)"],
               stroke:[5,"rgb(241, 171, 15)","solid"],
               transform:[[],['180']]
            }]
         },
         {
            id:'YellowYCont',
            type:'group',
            rect:['170px','51','90','90','auto','auto'],
            clip:['rect(0px 90px 42.79998779296875px 0px)'],
            transform:[],
            c:[
            {
               id:'Yellow_Y',
               type:'ellipse',
               rect:['0px','0px','80px','80px','auto','auto'],
               clip:['rect(0px 90px 45.20001220703125px 0px)'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(243,201,108,1.00)"],
               stroke:[5,"rgba(241,171,15,1.00)","solid"],
               transform:[[],['182']]
            }]
         },
         {
            id:'GreenXGroup',
            type:'group',
            rect:['36','43','109','109','auto','auto'],
            clip:['rect(0px 109px 52.20001220703125px 0px)'],
            transform:[[],['1']],
            c:[
            {
               id:'GreenX',
               type:'ellipse',
               rect:['0px','0px','99px','99px','auto','auto'],
               clip:['rect(0px 109px 52.20001220703125px 0px)'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(97,204,181,1)"],
               stroke:[5,"rgb(7, 128, 102)","solid"],
               transform:[[],['-181']]
            },
            {
               id:'Ellipse3',
               type:'ellipse',
               rect:['137px','325px','212px','99px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(97,204,181,1)"],
               stroke:[5,"rgb(7, 128, 102)","solid"]
            }]
         },
         {
            id:'Question_Text',
            type:'text',
            rect:['15px','30px','219px','124px','auto','auto'],
            text:"In the figure above, <br>",
            align:"left",
            font:['Times New Roman, Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Zed',
            type:'rect',
            rect:['126px','191px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.75','0.75']]
         },
         {
            id:'Answers',
            type:'rect',
            rect:['48','181','auto','auto','auto','auto']
         },
         {
            id:'AnswerDText',
            type:'text',
            rect:['83px','434px','101px','20px','auto','auto'],
            text:"65",
            align:"left",
            font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerCText',
            type:'text',
            rect:['83px','398px','101px','19px','auto','auto'],
            text:"38<br>",
            align:"left",
            font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerBText',
            type:'text',
            rect:['83px','366px','112px','19px','auto','auto'],
            text:"73<br>",
            align:"left",
            font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerAText',
            type:'text',
            rect:['83px','331px','109px','19px','auto','auto'],
            text:"52<br>",
            align:"left",
            font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
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
            id:'AnswerEText',
            type:'text',
            rect:['83px','470px','101px','20px','auto','auto'],
            text:"47<br>",
            align:"left",
            font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'ANS_choose_E',
            display:'none',
            type:'text',
            rect:['358px','271px','202px','54px','auto','auto'],
            text:"Choose E",
            align:"left",
            font:['Verdana, Geneva, sans-serif',41,"rgba(133,78,176,1.00)","normal","none","normal"]
         },
         {
            id:'V',
            type:'group',
            rect:['72px','23px','170px','231','auto','auto'],
            transform:[[],[],[],['1','0.862']],
            c:[
            {
               id:'right_angle',
               type:'rect',
               rect:['-172px','225px','232px','0px','auto','auto'],
               fill:["rgba(2,2,2,0.01)"],
               stroke:[2,"rgb(0, 0, 0)","solid"],
               transform:[[],['75']]
            },
            {
               id:'left_angle',
               type:'rect',
               rect:['-171px','223px','232px','0px','auto','auto'],
               fill:["rgba(2,2,2,0.01)"],
               stroke:[2,"rgb(0, 0, 0)","solid"],
               transform:[[],['116']]
            }]
         },
         {
            id:'lineM',
            type:'rect',
            rect:['13px','236px','247px','0px','auto','auto'],
            fill:["rgba(2,2,2,0.0078)"],
            stroke:[2,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'lineL',
            type:'rect',
            rect:['18px','94px','247px','0px','auto','auto'],
            fill:["rgba(2,2,2,0.0078)"],
            stroke:[2,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'m',
            type:'image',
            rect:['266px','220px','50px','33px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"m.png",'0px','0px'],
            transform:[[],[],[],['0.606','0.606']]
         },
         {
            id:'mCopy',
            type:'image',
            rect:['327px','373px','50px','33px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"m.png",'0px','0px'],
            transform:[[],[],[],['0.346','0.346']]
         },
         {
            id:'lCopy',
            type:'image',
            rect:['293px','347px','34px','85px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"l.png",'0px','0px'],
            transform:[[],[],[],['0.235','0.235']]
         },
         {
            id:'para',
            type:'image',
            rect:['321px','370px','14px','40px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"para.png",'0px','0px'],
            transform:[[],[],[],['0.571','0.571']]
         },
         {
            id:'If',
            type:'rect',
            rect:['153px','409px','auto','auto','auto','auto']
         },
         {
            id:'and',
            type:'rect',
            rect:['239px','407px','auto','auto','auto','auto']
         },
         {
            id:'equals',
            type:'rect',
            rect:['299px','402px','auto','auto','auto','auto']
         },
         {
            id:'equalsCopy',
            type:'rect',
            rect:['190px','402px','auto','auto','auto','auto']
         },
         {
            id:'X',
            type:'rect',
            rect:['56','74px','auto','auto','auto','auto']
         },
         {
            id:'XCopy',
            type:'rect',
            rect:['170px','407px','auto','auto','auto','auto']
         },
         {
            id:'degree2',
            type:'rect',
            rect:['71','77px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'degree2Copy',
            type:'rect',
            rect:['245px','75px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'degree2Copy2',
            type:'rect',
            rect:['147px','188px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'Y2',
            type:'rect',
            rect:['227px','73px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.95','0.95']]
         },
         {
            id:'Y2Copy',
            type:'rect',
            rect:['276px','407px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.95','0.95']]
         },
         {
            id:'_73',
            type:'text',
            rect:['209px','407px','30px','20px','auto','auto'],
            text:"73<br>",
            align:"left",
            font:['Verdana, Geneva, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'_65',
            type:'text',
            rect:['321px','407px','62px','20px','auto','auto'],
            text:"60<br><br>",
            align:"left",
            font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Zed2',
            type:'rect',
            rect:['248px','434px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.81','0.75']]
         },
         {
            id:'what_does',
            type:'text',
            rect:['154px','434px','131px','47px','auto','auto'],
            text:"what does ",
            align:"left",
            font:['Times New Roman, Times, serif',18,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'equal',
            type:'text',
            rect:['274px','434px','70px','20px','auto','auto'],
            text:"equal?",
            align:"left",
            font:['Times New Roman, Times, serif',18,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'_180DegreeLBL',
            display:'none',
            type:'group',
            rect:['253','176','70','23','auto','auto'],
            c:[
            {
               id:'Text',
               type:'text',
               rect:['0px','0px','70px','23px','auto','auto'],
               text:"180",
               align:"left",
               font:['Verdana, Geneva, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'degree',
               type:'rect',
               rect:['35px','0px','auto','auto','auto','auto']
            }]
         },
         {
            id:'l',
            type:'image',
            rect:['525','142','34px','85px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"l.png",'0px','0px']
         },
         {
            id:'hint1',
            type:'group',
            rect:['316','28','271','106','auto','auto'],
            c:[
            {
               id:'Text2',
               type:'text',
               rect:['0px','0px','216px','106px','auto','auto'],
               text:"How do the other angels help you find the value of ",
               align:"left",
               font:['Verdana, Geneva, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'zed',
               type:'image',
               rect:['203px','0px','50px','44px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"zed.png",'0px','0px'],
               transform:[[],[],[],['0.484','0.484']]
            },
            {
               id:'Text3',
               type:'text',
               rect:['247px','11px','24px','21px','auto','auto'],
               text:"?",
               align:"left",
               font:['Verdana, Geneva, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'_60',
            display:'none',
            type:'image',
            rect:['200px','53px','77px','60px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"60.png",'0px','0px'],
            transform:[[],[],[],['0.394','0.394']]
         },
         {
            id:'_60Copy',
            display:'none',
            type:'image',
            rect:['161px','180px','77px','60px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"60.png",'0px','0px'],
            transform:[[],[],[],['0.721','0.721']]
         },
         {
            id:'_732',
            display:'none',
            type:'image',
            rect:['21px','49px','77px','60px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"73.png",'0px','0px'],
            transform:[[],[],[],['0.394','0.394']]
         },
         {
            id:'_732Copy',
            display:'none',
            type:'image',
            rect:['58px','179px','77px','60px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"73.png",'0px','0px'],
            transform:[[],[],[],['0.649','0.649']]
         },
         {
            id:'corrAng',
            display:'none',
            type:'text',
            rect:['344px','127px','188px','164px','auto','auto'],
            text:"These are called corresponding angles.",
            align:"center",
            font:['Times New Roman, Times, serif',20,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'_73_plus_60',
            display:'none',
            type:'text',
            rect:['351px','121px','202px','142px','auto','auto'],
            text:"73 +  60 = 133",
            align:"center",
            font:['Arial, Helvetica, sans-serif',26,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'_180cont',
            type:'group',
            rect:['51px','154px','166','76px','auto','auto'],
            clip:['rect(0px 166px 79px 0px)'],
            c:[
            {
               id:'_180',
               display:'none',
               type:'ellipse',
               rect:['0px','0px','148px','148px','auto','auto'],
               clip:['rect(0px 166px 79px 0px)'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(2,2,2,0.0039)"],
               stroke:[9,"rgba(27,6,173,1.00)","solid"],
               transform:[[],['-180']]
            }]
         },
         {
            id:'equ4Z',
            type:'group',
            rect:['289','176','267','76','auto','auto'],
            c:[
            {
               id:'_180num',
               display:'none',
               type:'text',
               rect:['0px','0px','170px','76px','auto','auto'],
               text:"180",
               align:"center",
               font:['Arial, Helvetica, sans-serif',34,"rgba(27,6,173,1.00)","normal","none","normal"]
            },
            {
               id:'_133',
               display:'none',
               type:'text',
               rect:['112px','0px','131px','67px','auto','auto'],
               text:"- 133 =",
               align:"center",
               font:['Arial, Helvetica, sans-serif',34,"rgba(240,3,3,1.00)","normal","none","normal"]
            },
            {
               id:'zed2',
               display:'none',
               type:'image',
               rect:['231px','3px','36px','35px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"zed.png",'0px','0px']
            }]
         },
         {
            id:'z47',
            display:'none',
            type:'group',
            rect:['389px','174','160','54','auto','auto'],
            c:[
            {
               id:'zed2Copy2',
               type:'image',
               rect:['132px','5px','36px','35px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"zed.png",'0px','0px']
            },
            {
               id:'_47z',
               type:'text',
               rect:['39px','0px','121px','54px','auto','auto'],
               text:"= 47",
               align:"center",
               font:['Arial, Helvetica, sans-serif',47,"rgba(2,2,2,1.00)","normal","none","normal"]
            }]
         }],
         symbolInstances: [
         {
            id:'XCopy',
            symbolName:'X'
         },
         {
            id:'Answers',
            symbolName:'Answers_1'
         },
         {
            id:'equalsCopy',
            symbolName:'equals'
         },
         {
            id:'degree2',
            symbolName:'degree'
         },
         {
            id:'Y2',
            symbolName:'Y'
         },
         {
            id:'If',
            symbolName:'If'
         },
         {
            id:'Zed',
            symbolName:'Zed'
         },
         {
            id:'equals',
            symbolName:'equals'
         },
         {
            id:'X',
            symbolName:'X'
         },
         {
            id:'Y2Copy',
            symbolName:'Y'
         },
         {
            id:'degree2Copy2',
            symbolName:'degree'
         },
         {
            id:'degree2Copy',
            symbolName:'degree'
         },
         {
            id:'degree',
            symbolName:'degree'
         },
         {
            id:'Zed2',
            symbolName:'Zed'
         },
         {
            id:'and',
            symbolName:'and'
         }
         ]
      },
   states: {
      "Base State": {
         "${_X}": [
            ["style", "top", '74px'],
            ["style", "opacity", '1']
         ],
         "${_right_angle}": [
            ["color", "background-color", 'rgba(2,2,2,0.01)'],
            ["transform", "rotateZ", '75deg'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '232px'],
            ["style", "top", '225px'],
            ["style", "-webkit-transform-origin", [99,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [99,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [99,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [99,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [99,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '0px'],
            ["color", "border-color", 'rgba(2,2,2,1.00)'],
            ["style", "left", '-172px'],
            ["style", "display", 'block']
         ],
         "${_m}": [
            ["transform", "scaleX", '0.60606'],
            ["style", "left", '266px'],
            ["transform", "scaleY", '0.60606'],
            ["style", "top", '220px']
         ],
         "${_ANS_choose_E}": [
            ["color", "color", 'rgba(133,78,176,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '358px'],
            ["style", "font-size", '41px']
         ],
         "${_Text2}": [
            ["style", "top", '0px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px']
         ],
         "${_Y2Copy}": [
            ["transform", "scaleX", '0.95'],
            ["style", "top", '407px'],
            ["style", "left", '276px'],
            ["transform", "scaleY", '0.95']
         ],
         "${_QuestionSound_Container}": [
            ["style", "height", '8px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(248,250,248,0.00)'],
            ["style", "width", '17px']
         ],
         "${_zed2}": [
            ["style", "top", '3px'],
            ["style", "display", 'none'],
            ["style", "height", '35px'],
            ["style", "left", '231px'],
            ["style", "width", '36px']
         ],
         "${_equal}": [
            ["style", "top", '434px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '274px'],
            ["style", "font-size", '18px']
         ],
         "${_AnswerDText}": [
            ["style", "top", '434px'],
            ["style", "font-size", '16px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '83px'],
            ["style", "width", '101px']
         ],
         "${_equalsCopy}": [
            ["style", "top", '402px'],
            ["style", "left", '190px']
         ],
         "${__180cont}": [
            ["style", "top", '154px'],
            ["style", "height", '76px'],
            ["style", "left", '51px'],
            ["style", "clip", [0,166,79,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_YellowYCont}": [
            ["style", "left", '170px'],
            ["style", "clip", [0,90,42.79998779296875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '0deg']
         ],
         "${_z47}": [
            ["style", "left", '389px'],
            ["style", "display", 'none']
         ],
         "${_hint1}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0']
         ],
         "${_degree2Copy}": [
            ["style", "top", '75px'],
            ["style", "opacity", '1'],
            ["style", "left", '245px']
         ],
         "${_Text3}": [
            ["style", "left", '247px'],
            ["style", "top", '11px']
         ],
         "${_PurpleZed}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '-180deg'],
            ["style", "height", '125px'],
            ["style", "clip", [0,135,66.20001220703125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "width", '125px']
         ],
         "${_Answers}": [
            ["style", "top", '309px'],
            ["style", "left", '36px']
         ],
         "${_para}": [
            ["style", "top", '370px'],
            ["transform", "scaleY", '0.57144'],
            ["style", "height", '40px'],
            ["transform", "scaleX", '0.57144'],
            ["style", "left", '321px'],
            ["style", "width", '14px']
         ],
         "${_V}": [
            ["style", "top", '23px'],
            ["transform", "scaleY", '0.86173'],
            ["style", "left", '72px'],
            ["style", "width", '170px']
         ],
         "${__732Copy}": [
            ["style", "top", '179px'],
            ["transform", "scaleY", '0.64935'],
            ["transform", "scaleX", '0.64935'],
            ["style", "left", '58px'],
            ["style", "display", 'none']
         ],
         "${__732}": [
            ["style", "top", '49px'],
            ["transform", "scaleY", '0.39355'],
            ["transform", "scaleX", '0.39355'],
            ["style", "left", '21px'],
            ["style", "display", 'none']
         ],
         "${_mCopy}": [
            ["transform", "scaleX", '0.34632'],
            ["style", "top", '373px'],
            ["style", "left", '327px'],
            ["transform", "scaleY", '0.34632']
         ],
         "${_degree2}": [
            ["style", "opacity", '1']
         ],
         "${_Text}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '600px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${__60}": [
            ["style", "top", '53px'],
            ["transform", "scaleY", '0.39355'],
            ["transform", "scaleX", '0.39355'],
            ["style", "left", '200px'],
            ["style", "display", 'none']
         ],
         "${_Zed2}": [
            ["transform", "scaleX", '0.80952'],
            ["style", "left", '236px'],
            ["transform", "scaleY", '0.75'],
            ["style", "top", '434px']
         ],
         "${__133}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(240,3,3,1.00)'],
            ["style", "left", '112px'],
            ["style", "display", 'none']
         ],
         "${_XCopy}": [
            ["style", "top", '407px'],
            ["style", "left", '170px']
         ],
         "${_l}": [
            ["style", "top", '50px'],
            ["transform", "scaleX", '0.50929'],
            ["style", "left", '274px'],
            ["transform", "scaleY", '0.50929']
         ],
         "${_zed2Copy2}": [
            ["style", "top", '9px'],
            ["style", "display", 'block'],
            ["style", "height", '35px'],
            ["style", "left", '0px'],
            ["style", "width", '36px']
         ],
         "${_GreenXGroup}": [
            ["style", "clip", [0,109,52.20001220703125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '1deg']
         ],
         "${_LowerYCont}": [
            ["style", "clip", [0,135,67,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '69px']
         ],
         "${__60Copy}": [
            ["style", "-webkit-transform-origin", [-19.51,71.91], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-19.51,71.91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-19.51,71.91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-19.51,71.91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-19.51,71.91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.72149'],
            ["transform", "scaleX", '0.72149'],
            ["style", "display", 'none'],
            ["style", "left", '161px'],
            ["style", "top", '180px']
         ],
         "${__180num}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(27,6,173,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '34px']
         ],
         "${__73_plus_60}": [
            ["style", "top", '121px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "height", '39px'],
            ["style", "left", '351px'],
            ["style", "font-size", '26px']
         ],
         "${_Question_Text}": [
            ["style", "top", '380px'],
            ["style", "font-size", '16px'],
            ["style", "height", '124px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '152px'],
            ["style", "width", '290px']
         ],
         "${__47z}": [
            ["color", "color", 'rgba(2,2,2,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '39px'],
            ["style", "font-size", '47px']
         ],
         "${_PurpleZedCont}": [
            ["style", "left", '66px'],
            ["style", "clip", [0,135,66.20001220703125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '72deg']
         ],
         "${_corrAng}": [
            ["style", "opacity", '1'],
            ["style", "left", '344px'],
            ["style", "font-size", '20px'],
            ["style", "top", '127px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '216px']
         ],
         "${_AnswerEText}": [
            ["style", "top", '470px'],
            ["style", "font-size", '16px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '83px'],
            ["style", "width", '101px']
         ],
         "${_AnswerBText}": [
            ["style", "top", '366px'],
            ["style", "font-size", '16px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '83px'],
            ["style", "width", '112px']
         ],
         "${_purple_highlight}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_equals}": [
            ["style", "top", '402px'],
            ["style", "left", '299px']
         ],
         "${_Sound_Container}": [
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden']
         ],
         "${_AnswerCText}": [
            ["style", "top", '398px'],
            ["style", "font-size", '16px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '83px'],
            ["style", "width", '101px']
         ],
         "${_lineM}": [
            ["style", "top", '231px'],
            ["style", "left", '13px'],
            ["color", "border-color", 'rgba(2,2,2,1.00)'],
            ["style", "border-width", '2px'],
            ["style", "width", '247px']
         ],
         "${_AnswerAText}": [
            ["style", "top", '331px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '16px'],
            ["style", "height", '19px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '83px'],
            ["style", "width", '109px']
         ],
         "${_zed}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.48387'],
            ["transform", "scaleX", '0.48387'],
            ["style", "height", '44px'],
            ["style", "left", '203px'],
            ["style", "width", '50px']
         ],
         "${_and}": [
            ["style", "top", '407px'],
            ["style", "left", '239px']
         ],
         "${_GreenX}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '-181deg'],
            ["style", "height", '99px'],
            ["style", "clip", [0,109,52.20001220703125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "width", '99px']
         ],
         "${_degree}": [
            ["style", "left", '35px'],
            ["style", "top", '0px']
         ],
         "${_If}": [
            ["style", "left", '153px'],
            ["style", "top", '409px']
         ],
         "${_Zed}": [
            ["style", "top", '191px'],
            ["style", "left", '126px'],
            ["transform", "scaleY", '0.75'],
            ["transform", "scaleX", '0.75']
         ],
         "${_degree2Copy2}": [
            ["style", "top", '188px'],
            ["style", "left", '147px']
         ],
         "${_Y2}": [
            ["style", "top", '73px'],
            ["transform", "scaleY", '0.95'],
            ["transform", "scaleX", '0.95'],
            ["style", "opacity", '1'],
            ["style", "left", '227px']
         ],
         "${__180}": [
            ["transform", "rotateZ", '-180deg'],
            ["style", "left", '0px'],
            ["style", "width", '148px'],
            ["style", "top", '0px'],
            ["style", "border-width", '9px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(27,6,173,1.00)'],
            ["style", "clip", [0,166,79,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '148px']
         ],
         "${_Yellow_Y}": [
            ["color", "background-color", 'rgba(243,201,108,1.00)'],
            ["style", "top", '0px'],
            ["style", "clip", [0,90,45.20001220703125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '182deg'],
            ["style", "height", '80px'],
            ["color", "border-color", 'rgba(241,171,15,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '80px']
         ],
         "${_LowerX}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '-181deg'],
            ["style", "clip", [0,135,66.20001220703125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "width", '125px']
         ],
         "${_what_does}": [
            ["style", "top", '434px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '154px'],
            ["style", "font-size", '18px']
         ],
         "${__73}": [
            ["style", "left", '209px'],
            ["style", "top", '407px']
         ],
         "${_lCopy}": [
            ["transform", "scaleX", '0.23529'],
            ["style", "top", '347px'],
            ["style", "left", '293px'],
            ["transform", "scaleY", '0.23529']
         ],
         "${_LowerY}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '125px'],
            ["style", "clip", [0,135,68.5999755859375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "width", '125px']
         ],
         "${_equ4Z}": [
            ["style", "top", '176px'],
            ["style", "opacity", '1'],
            ["style", "left", '289px']
         ],
         "${__180DegreeLBL}": [
            ["style", "display", 'none']
         ],
         "${_lineL}": [
            ["style", "top", '94px'],
            ["style", "left", '18px'],
            ["color", "border-color", 'rgba(2,2,2,1.00)'],
            ["style", "border-width", '2px'],
            ["style", "width", '247px']
         ],
         "${__65}": [
            ["style", "top", '407px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '321px']
         ],
         "${_LowerXGroup}": [
            ["style", "clip", [0,135,65.39996337890625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_left_angle}": [
            ["style", "-webkit-transform-origin", [99,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [99,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [99,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [99,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [99,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '116deg'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '232px'],
            ["style", "top", '223px'],
            ["style", "left", '-171px'],
            ["style", "height", '0px'],
            ["color", "border-color", 'rgba(2,2,2,1.00)'],
            ["color", "background-color", 'rgba(2,2,2,0.01)'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 55000,
         autoPlay: true,
         labels: {
            "Read Question": 1750,
            "Hint 1": 13500,
            "Hint 2": 26000,
            "ANS": 52500
         },
         timeline: [
            { id: "eid438", tween: [ "style", "${_zed2Copy2}", "display", 'none', { fromValue: 'block'}], position: 48000, duration: 0 },
            { id: "eid406", tween: [ "style", "${_zed2Copy2}", "display", 'none', { fromValue: 'none'}], position: 48500, duration: 0 },
            { id: "eid435", tween: [ "style", "${_zed2Copy2}", "display", 'block', { fromValue: 'none'}], position: 49500, duration: 0 },
            { id: "eid424", tween: [ "style", "${_zed2Copy2}", "display", 'block', { fromValue: 'block'}], position: 51500, duration: 0 },
            { id: "eid407", tween: [ "style", "${_zed2Copy2}", "display", 'block', { fromValue: 'block'}], position: 55000, duration: 0 },
            { id: "eid403", tween: [ "style", "${__73_plus_60}", "left", '368px', { fromValue: '351px'}], position: 35000, duration: 4500 },
            { id: "eid162", tween: [ "style", "${_Answers}", "left", '36px', { fromValue: '36px'}], position: 0, duration: 0 },
            { id: "eid452", tween: [ "style", "${_purple_highlight}", "opacity", '1', { fromValue: '0'}], position: 50500, duration: 1000 },
            { id: "eid282", tween: [ "style", "${__180DegreeLBL}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid273", tween: [ "style", "${__180DegreeLBL}", "display", 'none', { fromValue: 'none'}], position: 10000, duration: 0 },
            { id: "eid294", tween: [ "style", "${__180DegreeLBL}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid448", tween: [ "style", "${_purple_highlight}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid449", tween: [ "style", "${_purple_highlight}", "display", 'block', { fromValue: 'none'}], position: 50500, duration: 0 },
            { id: "eid410", tween: [ "style", "${_zed2Copy2}", "left", '0px', { fromValue: '0px'}], position: 55000, duration: 0 },
            { id: "eid404", tween: [ "style", "${_equ4Z}", "left", '318px', { fromValue: '289px'}], position: 46000, duration: 2000 },
            { id: "eid391", tween: [ "style", "${__180num}", "left", '0px', { fromValue: '0px'}], position: 44500, duration: 0 },
            { id: "eid477", tween: [ "style", "${_Zed2}", "left", '236px', { fromValue: '236px'}], position: 29077, duration: 0 },
            { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid382", tween: [ "transform", "${__180}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 39500, duration: 4500 },
            { id: "eid402", tween: [ "style", "${__73_plus_60}", "top", '64px', { fromValue: '121px'}], position: 35000, duration: 4500 },
            { id: "eid475", tween: [ "style", "${_Question_Text}", "font-size", '18px', { fromValue: '16px'}], position: 0, duration: 29077 },
            { id: "eid276", tween: [ "style", "${_lineM}", "top", '231px', { fromValue: '231px'}], position: 0, duration: 0 },
            { id: "eid447", tween: [ "transform", "${_PurpleZed}", "rotateZ", '-129deg', { fromValue: '-180deg'}], position: 45000, duration: 2000 },
            { id: "eid385", tween: [ "style", "${__73_plus_60}", "height", '39px', { fromValue: '39px'}], position: 39000, duration: 0 },
            { id: "eid159", tween: [ "style", "${_Question_Text}", "left", '152px', { fromValue: '152px'}], position: 0, duration: 0 },
            { id: "eid236", tween: [ "transform", "${_l}", "scaleY", '0.50929', { fromValue: '0.50929'}], position: 7250, duration: 0 },
            { id: "eid446", tween: [ "transform", "${_LowerX}", "rotateZ", '-107deg', { fromValue: '-181deg'}], position: 22000, duration: 1000 },
            { id: "eid240", tween: [ "color", "${_lineM}", "border-color", 'rgba(2,2,2,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,2,2,1.00)'}], position: 3750, duration: 0 },
            { id: "eid242", tween: [ "color", "${_lineM}", "border-color", 'rgba(240,3,3,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,2,2,1.00)'}], position: 4000, duration: 0 },
            { id: "eid248", tween: [ "color", "${_lineM}", "border-color", 'rgba(2,2,2,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(240,3,3,1.00)'}], position: 8750, duration: 0 },
            { id: "eid374", tween: [ "style", "${_corrAng}", "top", '11px', { fromValue: '127px'}], position: 27250, duration: 3750 },
            { id: "eid326", tween: [ "style", "${_Y2}", "opacity", '0', { fromValue: '1'}], position: 24000, duration: 500 },
            { id: "eid373", tween: [ "style", "${_corrAng}", "left", '365px', { fromValue: '344px'}], position: 27250, duration: 3750 },
            { id: "eid383", tween: [ "style", "${__180}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid384", tween: [ "style", "${__180}", "display", 'block', { fromValue: 'none'}], position: 39500, duration: 0 },
            { id: "eid275", tween: [ "style", "${_lineM}", "border-width", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
            { id: "eid250", tween: [ "style", "${_lineM}", "border-width", '2px', { fromValue: '2px'}], position: 3500, duration: 0 },
            { id: "eid343", tween: [ "style", "${_lineM}", "border-width", '2px', { fromValue: '2px'}], position: 4000, duration: 0 },
            { id: "eid344", tween: [ "style", "${_lineM}", "border-width", '2px', { fromValue: '2px'}], position: 6500, duration: 0 },
            { id: "eid160", tween: [ "style", "${_Question_Text}", "top", '380px', { fromValue: '380px'}], position: 0, duration: 0 },
            { id: "eid378", tween: [ "style", "${_corrAng}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid369", tween: [ "style", "${_corrAng}", "display", 'none', { fromValue: 'none'}], position: 20250, duration: 0 },
            { id: "eid370", tween: [ "style", "${_corrAng}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
            { id: "eid313", tween: [ "style", "${_degree2}", "opacity", '0', { fromValue: '1'}], position: 24500, duration: 500 },
            { id: "eid339", tween: [ "style", "${__732}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid334", tween: [ "style", "${__732}", "display", 'block', { fromValue: 'none'}], position: 27250, duration: 0 },
            { id: "eid473", tween: [ "color", "${_right_angle}", "border-color", 'rgb(240, 3, 3)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,2,2,1.00)'}], position: 29500, duration: 500 },
            { id: "eid474", tween: [ "color", "${_right_angle}", "border-color", 'rgba(2,2,2,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(240, 3, 3)'}], position: 31000, duration: 2000 },
            { id: "eid235", tween: [ "transform", "${_l}", "scaleX", '0.50929', { fromValue: '0.50929'}], position: 7250, duration: 0 },
            { id: "eid237", tween: [ "style", "${_l}", "left", '274px', { fromValue: '274px'}], position: 7250, duration: 0 },
            { id: "eid377", tween: [ "style", "${__73_plus_60}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid430", tween: [ "style", "${__73_plus_60}", "display", 'block', { fromValue: 'none'}], position: 31500, duration: 0 },
            { id: "eid379", tween: [ "style", "${__73_plus_60}", "display", 'block', { fromValue: 'block'}], position: 35000, duration: 0 },
            { id: "eid411", tween: [ "style", "${_zed2Copy2}", "top", '9px', { fromValue: '9px'}], position: 55000, duration: 0 },
            { id: "eid429", tween: [ "style", "${_z47}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid428", tween: [ "style", "${_z47}", "display", 'none', { fromValue: 'none'}], position: 47500, duration: 0 },
            { id: "eid427", tween: [ "style", "${_z47}", "display", 'none', { fromValue: 'none'}], position: 48000, duration: 0 },
            { id: "eid436", tween: [ "style", "${_z47}", "display", 'none', { fromValue: 'none'}], position: 49000, duration: 0 },
            { id: "eid439", tween: [ "style", "${_z47}", "display", 'block', { fromValue: 'none'}], position: 50500, duration: 0 },
            { id: "eid425", tween: [ "style", "${_z47}", "display", 'block', { fromValue: 'block'}], position: 51000, duration: 0 },
            { id: "eid426", tween: [ "style", "${_z47}", "display", 'block', { fromValue: 'block'}], position: 51500, duration: 0 },
            { id: "eid386", tween: [ "style", "${__180num}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid387", tween: [ "style", "${__180num}", "display", 'block', { fromValue: 'none'}], position: 40000, duration: 0 },
            { id: "eid390", tween: [ "style", "${__180num}", "opacity", '1', { fromValue: '0'}], position: 40000, duration: 3500 },
            { id: "eid328", tween: [ "style", "${_degree2Copy}", "opacity", '0', { fromValue: '1'}], position: 24000, duration: 250 },
            { id: "eid453", tween: [ "style", "${_ANS_choose_E}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid454", tween: [ "style", "${_ANS_choose_E}", "display", 'block', { fromValue: 'none'}], position: 52500, duration: 0 },
            { id: "eid341", tween: [ "style", "${__60}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid336", tween: [ "style", "${__60}", "display", 'block', { fromValue: 'none'}], position: 27250, duration: 0 },
            { id: "eid340", tween: [ "style", "${__60Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid337", tween: [ "style", "${__60Copy}", "display", 'block', { fromValue: 'none'}], position: 27250, duration: 0 },
            { id: "eid393", tween: [ "style", "${__133}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid395", tween: [ "style", "${__133}", "display", 'block', { fromValue: 'none'}], position: 44500, duration: 0 },
            { id: "eid239", tween: [ "color", "${_lineL}", "border-color", 'rgba(2,2,2,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,2,2,1.00)'}], position: 3750, duration: 0 },
            { id: "eid241", tween: [ "color", "${_lineL}", "border-color", 'rgba(240,3,3,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,2,2,1.00)'}], position: 4000, duration: 0 },
            { id: "eid247", tween: [ "color", "${_lineL}", "border-color", 'rgba(2,2,2,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(240,3,3,1.00)'}], position: 8750, duration: 0 },
            { id: "eid349", tween: [ "style", "${_lineL}", "border-width", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
            { id: "eid350", tween: [ "style", "${_lineL}", "border-width", '2px', { fromValue: '2px'}], position: 3500, duration: 0 },
            { id: "eid346", tween: [ "style", "${_lineL}", "border-width", '2px', { fromValue: '2px'}], position: 4000, duration: 0 },
            { id: "eid347", tween: [ "style", "${_lineL}", "border-width", '2px', { fromValue: '2px'}], position: 6500, duration: 0 },
            { id: "eid470", tween: [ "color", "${_left_angle}", "border-color", 'rgb(240, 3, 3)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,2,2,1.00)'}], position: 26500, duration: 2000 },
            { id: "eid471", tween: [ "color", "${_left_angle}", "border-color", 'rgba(2,2,2,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(240, 3, 3)'}], position: 29077, duration: 1000 },
            { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid445", tween: [ "transform", "${_GreenX}", "rotateZ", '-107deg', { fromValue: '-181deg'}], position: 22000, duration: 1000 },
            { id: "eid443", tween: [ "transform", "${_Yellow_Y}", "rotateZ", '114deg', { fromValue: '182deg'}], position: 20250, duration: 1250 },
            { id: "eid392", tween: [ "style", "${_zed2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid394", tween: [ "style", "${_zed2}", "display", 'block', { fromValue: 'none'}], position: 44500, duration: 0 },
            { id: "eid419", tween: [ "style", "${_corrAng}", "width", '216px', { fromValue: '216px'}], position: 28115, duration: 0 },
            { id: "eid338", tween: [ "style", "${__732Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid333", tween: [ "style", "${__732Copy}", "display", 'block', { fromValue: 'none'}], position: 27250, duration: 0 },
            { id: "eid371", tween: [ "style", "${_corrAng}", "opacity", '0', { fromValue: '1'}], position: 20250, duration: 250 },
            { id: "eid372", tween: [ "style", "${_corrAng}", "opacity", '1', { fromValue: '0'}], position: 20500, duration: 1500 },
            { id: "eid376", tween: [ "style", "${_corrAng}", "opacity", '0.6', { fromValue: '1'}], position: 29077, duration: 1923 },
            { id: "eid238", tween: [ "style", "${_l}", "top", '50px', { fromValue: '50px'}], position: 7250, duration: 0 },
            { id: "eid335", tween: [ "style", "${_l}", "top", '46px', { fromValue: '50px'}], position: 27250, duration: 0 },
            { id: "eid381", tween: [ "color", "${__73_plus_60}", "color", 'rgba(126,123,123,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 31500, duration: 6500 },
            { id: "eid280", tween: [ "style", "${_hint1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid462", tween: [ "style", "${_right_angle}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid461", tween: [ "style", "${_right_angle}", "display", 'block', { fromValue: 'block'}], position: 28115, duration: 0 },
            { id: "eid444", tween: [ "transform", "${_LowerY}", "rotateZ", '120deg', { fromValue: '180deg'}], position: 20250, duration: 1250 },
            { id: "eid405", tween: [ "style", "${_equ4Z}", "top", '104px', { fromValue: '176px'}], position: 46000, duration: 2000 },
            { id: "eid279", tween: [ "style", "${_hint1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid163", tween: [ "style", "${_Question_Text}", "width", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid161", tween: [ "style", "${_Answers}", "top", '309px', { fromValue: '309px'}], position: 0, duration: 0 },
            { id: "eid460", tween: [ "style", "${_left_angle}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid455", tween: [ "style", "${_left_angle}", "display", 'block', { fromValue: 'block'}], position: 26000, duration: 0 },
            { id: "eid401", tween: [ "style", "${_equ4Z}", "opacity", '0.5', { fromValue: '1'}], position: 46000, duration: 2000 },
            { id: "eid312", tween: [ "style", "${_X}", "opacity", '0', { fromValue: '1'}], position: 24500, duration: 500 }         ]
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
         type: 'text',
         rect: ['0px','4px','27px','20px','auto','auto'],
         id: 'Text8',
         text: 'E',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
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
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text8',
         text: 'E',
         align: 'center',
         rect: ['0px','4px','27px','20px','auto','auto']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['-8px','-3px','42px','33px','auto','auto'],
         id: 'x',
         fill: ['rgba(0,0,0,0)','images/x.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
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
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text8',
         text: 'E',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['36px','4px','101px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text14',
         text: 'Answer E Text',
         align: 'left',
         type: 'text'
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
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text8',
         text: 'E',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['36px','4px','101px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text14',
         text: 'Answer E Text',
         align: 'left',
         type: 'text'
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
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         rect: ['0px','4px','27px','20px','auto','auto']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         fill: ['rgba(0,0,0,0)','images/x.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         fill: ['rgba(0,0,0,0)','images/check.png','0px','0px']
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
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['36px','4px','101px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text13',
         text: 'Answer D Text',
         align: 'left',
         type: 'text'
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
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['36px','4px','101px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text13',
         text: 'Answer D Text',
         align: 'left',
         type: 'text'
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
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['36px','4px','94px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text13',
         text: 'Answer Text D',
         align: 'left',
         type: 'text'
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
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text5',
         text: 'C',
         align: 'center',
         rect: ['0px','4px','27px','20px','auto','auto']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         fill: ['rgba(0,0,0,0)','images/x.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         fill: ['rgba(0,0,0,0)','images/check.png','0px','0px']
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
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text4',
         text: 'B',
         align: 'center',
         rect: ['0px','5px','27px','19px','auto','auto']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         fill: ['rgba(0,0,0,0)','images/x.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         fill: ['rgba(0,0,0,0)','images/check.png','0px','0px']
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
         type: 'text',
         rect: ['0px','3px','27px','19px','auto','auto'],
         id: 'A',
         text: 'A<br><br><br>',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         fill: ['rgba(0,0,0,0)','images/check.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         fill: ['rgba(0,0,0,0)','images/x.png','0px','0px']
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
      rect: ['0px','2px','153','183','auto','auto'],
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
},
"If": {
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
      rect: ['0px','0px','70px','35px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text',
      text: 'If',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '35px'],
            ["style", "width", '70px']
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
"and": {
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
      rect: ['0px','0px','70px','20px','auto','auto'],
      font: ['Times New Roman, Times, serif',16,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2',
      text: 'and<br>',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '0px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '70px']
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
"equals": {
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
      font: ['Verdana, Geneva, sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: '=',
      align: 'left',
      rect: ['0px','0px','50px','20px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "font-size", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '50px']
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
"X": {
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
      id: 'x2',
      type: 'image',
      rect: ['0px','0px','16px','20px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/x2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '16px']
         ],
         "${_x2}": [
            ["style", "height", '20px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '16px']
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
"degree": {
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
      id: 'degree',
      type: 'image',
      rect: ['0px','0px','8px','7px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/degree.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '7px'],
            ["style", "width", '8px']
         ],
         "${_degree}": [
            ["style", "height", '7px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '8px']
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
"Y": {
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
      id: 'Y',
      type: 'image',
      rect: ['0px','0px','16px','20px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Y.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '16px']
         ],
         "${_Y}": [
            ["style", "height", '20px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '16px']
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
"Zed": {
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
      transform: [[0,0],[],[],['0.333','0.333']],
      id: 'zed',
      type: 'image',
      rect: ['-20px','-20px','62px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/zed.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_zed}": [
            ["transform", "scaleX", '0.33333'],
            ["transform", "scaleY", '0.33333'],
            ["style", "left", '-20px'],
            ["style", "top", '-20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '21px']
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
"Gwedge": {
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
      rect: ['51px','19px','86','86','auto','auto'],
      id: 'Group2Copy2',
      transform: [[0,0],['3']],
      clip: ['rect(0px 86px 45px 0px)'],
      type: 'group',
      c: [
      {
         transform: [[0,0],['115']],
         rect: ['-24px','0px','76px','76px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         type: 'ellipse',
         id: 'Ellipse3Copy2',
         stroke: [5,'rgb(7, 128, 102)','solid'],
         clip: ['rect(0px 86px 44px 0px)'],
         fill: ['rgba(97,204,181,1)']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Group2Copy2}": [
            ["style", "top", '19px'],
            ["style", "clip", [0,86,45,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '51px'],
            ["transform", "rotateZ", '3deg']
         ],
         "${_Ellipse3Copy2}": [
            ["style", "top", '0px'],
            ["style", "clip", [0,86,44,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-24px'],
            ["transform", "rotateZ", '115deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '116px'],
            ["style", "width", '139px']
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
"one80": {
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
      type: 'group',
      id: '_180Cont',
      clip: ['rect(0px 181.3333282470703px 83.66667175292969px 0px)'],
      rect: ['0px','0px','181','176','auto','auto'],
      c: [
      {
         transform: [],
         rect: ['27px','26px','110px','106px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         type: 'ellipse',
         id: '_180',
         stroke: [9,'rgb(7, 128, 102)','solid'],
         clip: ['rect(0px 128px 59.05897521972656px 0px)'],
         fill: ['rgba(97,204,181,1)']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__180}": [
            ["color", "background-color", 'rgba(97,204,181,0.02)'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1.41667'],
            ["style", "left", '27px'],
            ["style", "top", '26px'],
            ["transform", "scaleY", '1.41667'],
            ["color", "border-color", 'rgba(27,6,173,1.00)'],
            ["style", "clip", [0,128,59.05897521972656,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "border-width", '9px']
         ],
         "${symbolSelector}": [
            ["style", "height", '180px'],
            ["style", "width", '185px']
         ],
         "${__180Cont}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,181.3333282470703,83.66667175292969,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
            { id: "eid195", tween: [ "color", "${__180}", "background-color", 'rgba(97,204,181,0.02)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(97,204,181,0.02)'}], position: 0, duration: 0 },
            { id: "eid196", tween: [ "color", "${__180}", "border-color", 'rgba(27,6,173,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,6,173,1.00)'}], position: 0, duration: 0 }         ]
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
