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
            id:'Question',
            type:'group',
            rect:['16px','42px','219','124','auto','auto'],
            c:[
            {
               id:'Question_Text',
               type:'text',
               rect:['0px','0px','219px','124px','auto','auto'],
               text:"Evaluate ",
               align:"left",
               font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'problem_fraction',
               type:'group',
               rect:['75px','16px','60','19','auto','auto'],
               c:[
               {
                  id:'_5d_numerator',
                  type:'text',
                  rect:['0px','0px','60px','19px','auto','auto'],
                  text:"5d",
                  align:"left",
                  font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'Rectangle2',
                  type:'rect',
                  rect:['-10px','-5px','40px','2px','auto','auto'],
                  fill:["rgba(9,9,9,1.00)"],
                  stroke:[0,"rgba(0,0,0,1)","none"]
               },
               {
                  id:'_8C_denominator',
                  type:'text',
                  rect:['0px','-26px','88px','20px','auto','auto'],
                  text:"8c",
                  align:"left",
                  font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
               }]
            },
            {
               id:'problem_text',
               type:'text',
               rect:['-1px','43px','156px','48px','auto','auto'],
               text:"where  c = -10 and d = 4 ",
               align:"left",
               font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'Answers',
            type:'rect',
            rect:['48','181','auto','auto','auto','auto']
         },
         {
            id:'AnswerDText',
            type:'text',
            rect:['71px','293px','101px','20px','auto','auto'],
            text:"4",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerCText',
            type:'text',
            rect:['71px','257px','101px','19px','auto','auto'],
            text:"- 0.64",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerBText',
            type:'text',
            rect:['71px','225px','112px','19px','auto','auto'],
            text:"1.6",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerAText',
            type:'text',
            rect:['71px','190px','109px','19px','auto','auto'],
            text:"- 4",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
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
            id:'TutorialText',
            display:'none',
            type:'text',
            rect:['261px','49px','237px','187px','auto','auto'],
            text:"Let's pretend your hint starts here at 0:10. It does not really matter where the hints start and end, as long as they don't overlap. Don't worry that the X and Checks are showing up either - it's just because I set their timeline to 5 seconds in the symbol. They won't appear in the final animation.<br><br>This rectangle is a space for you to draw your animation. An example will follow in hint 2.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint_2_parentheses_left',
            display:'none',
            type:'text',
            rect:['294px','132px','19px','14px','auto','auto'],
            text:"(",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint_2_problem_fraction_2',
            type:'group',
            rect:['279px','157px','60','19','auto','auto'],
            c:[
            {
               id:'_5d_numeratorCopy2',
               type:'text',
               rect:['0px','0px','19px','19px','auto','auto'],
               text:"5",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'dCopy',
               type:'text',
               rect:['11px','0px','39px','23px','auto','auto'],
               text:"d",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Rectangle2Copy2',
               type:'rect',
               rect:['-10px','-5px','60px','2px','auto','auto'],
               fill:["rgba(9,9,9,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'_8C_denominatorCopy2',
               type:'text',
               rect:['0px','-24px','19px','20px','auto','auto'],
               text:"8",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'cCopy',
               type:'text',
               rect:['10px','-24px','40px','15px','auto','auto'],
               text:"c",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'Hint_2_equal_sign_1',
            type:'text',
            rect:['250px','147','19px','auto','auto','auto'],
            text:"=",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint_2_problem_fraction',
            type:'group',
            rect:['210px','156px','60','19','auto','auto'],
            c:[
            {
               id:'_5d_numeratorCopy',
               type:'text',
               rect:['0px','0px','19px','19px','auto','auto'],
               text:"5",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'d',
               type:'text',
               rect:['11px','0px','39px','23px','auto','auto'],
               text:"d",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Rectangle2Copy',
               type:'rect',
               rect:['-10px','-5px','40px','2px','auto','auto'],
               fill:["rgba(9,9,9,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'_8C_denominatorCopy',
               type:'text',
               rect:['0px','-26px','19px','20px','auto','auto'],
               text:"8",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'c',
               type:'text',
               rect:['10px','-26px','40px','15px','auto','auto'],
               text:"c",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'AnswerEText',
            type:'text',
            rect:['71px','329px','101px','20px','auto','auto'],
            text:"- 2",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint_2_C_value',
            type:'group',
            rect:['240px','87px','40','34','auto','auto'],
            c:[
            {
               id:'_-10_',
               type:'text',
               rect:['29px','0px','49px','34px','auto','auto'],
               text:"- 10",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'c_equals',
               type:'text',
               rect:['0px','0px','40px','34px','auto','auto'],
               text:"c =",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'Hint_2_d_value',
            type:'group',
            rect:['370','87','88','34','auto','auto'],
            c:[
            {
               id:'_4',
               type:'text',
               rect:['0px','0px','19px','20px','auto','auto'],
               text:"4",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'d_equals',
               type:'text',
               rect:['-30px','0px','60px','20px','auto','auto'],
               text:"d =",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'Hint_1_text',
            type:'group',
            rect:['146','276','345','34','auto','auto'],
            c:[
            {
               id:'Hint_1_text_2',
               type:'text',
               rect:['0px','0px','345px','34px','auto','auto'],
               text:"Then, we will know the value of the entire expression.",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(1,110,207,1)","normal","none","normal"]
            },
            {
               id:'Hint_1_text_1',
               type:'text',
               rect:['0px','-52px','335px','48px','auto','auto'],
               text:"Since we know what the values for c and d are, we can substitute them into the expression.",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(1,110,207,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'Hint_2_text',
            type:'text',
            rect:['180px','225px','320px','74px','auto','auto'],
            text:"Can you solve the values of the denominator and numerator of this fraction?",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(1,110,207,1.00)","normal","none","normal"]
         },
         {
            id:'Hint_3_text',
            type:'text',
            rect:['166px','225px','304px','61px','auto','auto'],
            text:"A positive times a negative is negative.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(1,110,207,1)","normal","none","normal"]
         },
         {
            id:'Hint_4_text',
            type:'text',
            rect:['188px','218px','270px','48px','auto','auto'],
            text:"What is the greatest common factor of - 80 and 20 ?",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(1,110,207,1)","normal","none","normal"]
         },
         {
            id:'Hint_5_text',
            type:'text',
            rect:['147px','262px','376px','66px','auto','auto'],
            text:"The greatest common factor of - 80 and 20 is 20",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(1,110,207,1)","normal","none","normal"]
         },
         {
            id:'Hint_2__-10_red',
            type:'text',
            rect:['269px','87px','40px','15px','auto','auto'],
            text:"- 10",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint_2__4_red_Copy',
            type:'text',
            rect:['370px','87px','30px','20px','auto','auto'],
            text:"4",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint_2_Multiply_signCopy',
            display:'none',
            type:'text',
            rect:['290px','155px','19px','14px','auto','auto'],
            text:"∙",
            align:"left",
            font:['Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint_2_equal_sign_1Copy',
            type:'text',
            rect:['340px','148px','19px','auto','auto','auto'],
            text:"=",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint_3_fraction',
            type:'group',
            rect:['359px','133','30','15','auto','auto'],
            c:[
            {
               id:'_-_80',
               type:'text',
               rect:['0px','0px','30px','15px','auto','auto'],
               text:"- 80",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(188,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'_20',
               type:'text',
               rect:['9px','28px','43px','20px','auto','auto'],
               text:"20",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(188,0,0,1)","normal","none","normal"]
            },
            {
               id:'Rectangle',
               type:'rect',
               rect:['-5px','21px','70px','2px','auto','auto'],
               fill:["rgba(9,9,9,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            }]
         },
         {
            id:'Hint_2_parenthese_right',
            display:'none',
            type:'text',
            rect:['328px','132px','41px','20px','auto','auto'],
            text:")",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(188,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'Answer_hint_divided_by_20',
            type:'text',
            rect:['390px','133px','40px','23px','auto','auto'],
            text:"/ 20",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(1,110,207,1.00)","normal","none","normal"]
         },
         {
            id:'Answer_hint_divided_by_20Copy',
            type:'text',
            rect:['390px','162px','40px','23px','auto','auto'],
            text:"/ 20",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(1,110,207,1.00)","normal","none","normal"]
         },
         {
            id:'Answer_Hint_equal_sign',
            type:'text',
            rect:['430px','148px','30px','20px','auto','auto'],
            text:"=",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Answer_Hint_fraction',
            type:'group',
            rect:['448px','156','19','2','auto','auto'],
            c:[
            {
               id:'rectangle',
               type:'rect',
               rect:['0px','0px','19px','2px','auto','auto'],
               fill:["rgba(9,9,9,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'_-4_red',
               type:'text',
               rect:['-2px','-20px','40px','14px','auto','auto'],
               text:"- 4",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(188,0,0,1)","normal","none","normal"]
            },
            {
               id:'_1_red',
               type:'text',
               rect:['5px','8px','19px','15px','auto','auto'],
               text:"1",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(188,0,0,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'Answer',
            type:'group',
            rect:['489','147','30','34','auto','auto'],
            c:[
            {
               id:'_4_red',
               type:'text',
               rect:['0px','0px','30px','34px','auto','auto'],
               text:"- 4",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(188,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'Answer__equal_sign',
               type:'text',
               rect:['-15px','1px','30px','34px','auto','auto'],
               text:"= ",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'Choose_A',
            type:'text',
            rect:['151px','199px','136px','20px','auto','auto'],
            text:"Choose (A)",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(17,132,50,1.00)","700","none","normal"]
         }],
         symbolInstances: [
         {
            id:'Answers',
            symbolName:'Answers_1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '-5px'],
            ["style", "height", '2px'],
            ["style", "left", '-10px'],
            ["color", "background-color", 'rgba(9,9,9,1.00)']
         ],
         "${_Answer_Hint_equal_sign}": [
            ["style", "top", '148px'],
            ["style", "font-size", '16px'],
            ["style", "opacity", '0'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '430px'],
            ["style", "width", '30px']
         ],
         "${_Answer_hint_divided_by_20}": [
            ["style", "top", '133px'],
            ["style", "width", '40px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(1,110,207,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '390px'],
            ["style", "font-size", '14px']
         ],
         "${_cCopy}": [
            ["style", "top", '-24px'],
            ["style", "left", '10px'],
            ["style", "display", 'block']
         ],
         "${_Hint_2_problem_fraction}": [
            ["style", "top", '156px'],
            ["style", "opacity", '0'],
            ["style", "left", '210px']
         ],
         "${__8C_denominatorCopy}": [
            ["style", "top", '-26px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_Hint_1_text_2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_QuestionSound_Container}": [
            ["style", "display", 'none'],
            ["style", "height", '8px'],
            ["color", "background-color", 'rgba(248,250,248,0.00)'],
            ["style", "width", '17px']
         ],
         "${_c_equals}": [
            ["style", "top", '0px'],
            ["style", "font-size", '16px'],
            ["style", "height", '34px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '40px']
         ],
         "${_Choose_A}": [
            ["style", "top", '199px'],
            ["color", "color", 'rgba(17,132,50,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '151px'],
            ["style", "font-weight", '700']
         ],
         "${_Hint_2_parentheses_left}": [
            ["style", "top", '132px'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(188,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '294px'],
            ["style", "width", '19px']
         ],
         "${__8C_denominatorCopy2}": [
            ["style", "top", '-24px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_Hint_1_text}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0']
         ],
         "${_d}": [
            ["style", "left", '11px'],
            ["style", "top", '0px']
         ],
         "${_Hint_3_fraction}": [
            ["style", "left", '359px']
         ],
         "${_AnswerDText}": [
            ["style", "top", '293px'],
            ["style", "width", '101px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "font-size", '14px']
         ],
         "${__8C_denominator}": [
            ["style", "top", '-26px'],
            ["style", "left", '0px']
         ],
         "${_Hint_1_text_1}": [
            ["style", "top", '-52px'],
            ["color", "color", 'rgba(1,110,207,1.00)'],
            ["style", "height", '48px'],
            ["style", "left", '0px'],
            ["style", "width", '335px']
         ],
         "${_Question_Text}": [
            ["style", "top", '0px'],
            ["style", "width", '219px'],
            ["style", "height", '124px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px']
         ],
         "${__5d_numeratorCopy2}": [
            ["style", "top", '0px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_Hint_2__-10_red}": [
            ["style", "top", '87px'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(188,0,0,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "height", '15px'],
            ["style", "opacity", '0'],
            ["style", "left", '269px'],
            ["style", "width", '40px']
         ],
         "${_Hint_3_text}": [
            ["style", "top", '225px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '166px'],
            ["style", "width", '304px']
         ],
         "${_problem_text}": [
            ["style", "top", '43px'],
            ["style", "left", '-1px'],
            ["style", "width", '156px']
         ],
         "${_Hint_2__4_red_Copy}": [
            ["style", "top", '87px'],
            ["style", "width", '30px'],
            ["style", "height", '20px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(188,0,0,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '370px'],
            ["style", "font-size", '16px']
         ],
         "${_Rectangle2Copy}": [
            ["style", "height", '2px'],
            ["color", "background-color", 'rgba(9,9,9,1.00)'],
            ["style", "left", '-10px'],
            ["style", "top", '-5px']
         ],
         "${_d_equals}": [
            ["style", "top", '0px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '-30px'],
            ["style", "font-size", '16px']
         ],
         "${__1_red}": [
            ["style", "top", '8px'],
            ["color", "color", 'rgba(188,0,0,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '5px'],
            ["style", "font-size", '16px']
         ],
         "${_Rectangle2Copy2}": [
            ["style", "top", '-5px'],
            ["style", "height", '2px'],
            ["color", "background-color", 'rgba(9,9,9,1)'],
            ["style", "left", '-10px'],
            ["style", "width", '60px']
         ],
         "${_Hint_2_C_value}": [
            ["style", "top", '87px'],
            ["style", "opacity", '0'],
            ["style", "left", '240px']
         ],
         "${__4_red}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(188,0,0,1.00)']
         ],
         "${_dCopy}": [
            ["style", "top", '0px'],
            ["style", "left", '11px'],
            ["style", "display", 'block']
         ],
         "${_Hint_2_problem_fraction_2}": [
            ["style", "top", '157px'],
            ["style", "opacity", '0'],
            ["style", "left", '279px']
         ],
         "${_AnswerEText}": [
            ["style", "top", '329px'],
            ["style", "width", '101px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "font-size", '14px']
         ],
         "${__-10_}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '29px'],
            ["style", "font-size", '16px']
         ],
         "${__5d_numerator}": [
            ["style", "font-style", 'normal'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_AnswerBText}": [
            ["style", "top", '225px'],
            ["style", "width", '112px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "font-size", '14px']
         ],
         "${_AnswerCText}": [
            ["style", "top", '257px'],
            ["style", "width", '101px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "font-size", '14px']
         ],
         "${_Hint_5_text}": [
            ["style", "top", '262px'],
            ["style", "opacity", '0'],
            ["style", "left", '147px'],
            ["style", "width", '376px']
         ],
         "${_Hint_2_equal_sign_1}": [
            ["style", "width", '19px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "opacity", '0'],
            ["style", "left", '250px'],
            ["style", "font-size", '16px']
         ],
         "${_problem_fraction}": [
            ["style", "top", '16px'],
            ["style", "left", '75px']
         ],
         "${_AnswerAText}": [
            ["style", "top", '190px'],
            ["style", "text-align", 'left'],
            ["style", "width", '109px'],
            ["style", "height", '19px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '71px'],
            ["style", "font-size", '14px']
         ],
         "${__5d_numeratorCopy}": [
            ["style", "top", '0px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_c}": [
            ["style", "left", '10px'],
            ["style", "top", '-26px']
         ],
         "${_TutorialText}": [
            ["style", "top", '51px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "height", '187px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '261px'],
            ["style", "font-size", '16px']
         ],
         "${_Rectangle}": [
            ["style", "top", '21px'],
            ["style", "height", '2px'],
            ["style", "opacity", '0'],
            ["style", "left", '-5px'],
            ["style", "width", '70px']
         ],
         "${__-_80}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(188,0,0,1.00)']
         ],
         "${_Sound_Container}": [
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden']
         ],
         "${__20}": [
            ["style", "top", '28px'],
            ["style", "opacity", '0'],
            ["style", "left", '9px']
         ],
         "${_Answers}": [
            ["style", "top", '168px'],
            ["style", "left", '24px']
         ],
         "${_Hint_2_Multiply_signCopy}": [
            ["style", "top", '155px'],
            ["style", "font-size", '20px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '290px'],
            ["style", "width", '19px']
         ],
         "${__4}": [
            ["style", "top", '0px'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "height", '20px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_Hint_2_equal_sign_1Copy}": [
            ["style", "top", '148px'],
            ["style", "width", '19px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '340px'],
            ["style", "font-size", '16px']
         ],
         "${_Answer}": [
            ["style", "opacity", '0']
         ],
         "${__-4_red}": [
            ["style", "left", '-2px'],
            ["style", "top", '-20px']
         ],
         "${_Hint_4_text}": [
            ["style", "top", '218px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '188px'],
            ["style", "width", '270px']
         ],
         "${_Hint_2_text}": [
            ["style", "opacity", '0'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(1,110,207,1.00)'],
            ["style", "font-size", '16px']
         ],
         "${_Hint_2_d_value}": [
            ["style", "opacity", '0']
         ],
         "${_rectangle}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Hint_2_parenthese_right}": [
            ["style", "top", '132px'],
            ["style", "display", 'none'],
            ["style", "height", '20px'],
            ["color", "color", 'rgba(188,0,0,1.00)'],
            ["style", "left", '328px'],
            ["style", "width", '41px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '600px'],
            ["style", "width", '600px']
         ],
         "${_Answer__equal_sign}": [
            ["style", "top", '1px'],
            ["style", "height", '34px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '-15px'],
            ["style", "font-size", '16px']
         ],
         "${_Answer_Hint_fraction}": [
            ["style", "left", '448px'],
            ["style", "opacity", '0']
         ],
         "${_Answer_hint_divided_by_20Copy}": [
            ["style", "top", '162px'],
            ["style", "font-size", '14px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(1,110,207,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '390px'],
            ["style", "width", '40px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 128000,
         autoPlay: true,
         labels: {
            "Read Question": 2000,
            "Hint 1": 14000,
            "Hint 2": 30000,
            "Hint 3": 59000,
            "Hint 4": 93000,
            "Hint 5": 102000,
            "Answer Hint": 119000
         },
         timeline: [
            { id: "eid207", tween: [ "style", "${_Hint_2__4_red_Copy}", "left", '302px', { fromValue: '370px'}], position: 40500, duration: 1500 },
            { id: "eid160", tween: [ "color", "${__-10_}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 30000, duration: 0 },
            { id: "eid240", tween: [ "style", "${__20}", "opacity", '1', { fromValue: '0.000000'}], position: 91000, duration: 1000 },
            { id: "eid285", tween: [ "color", "${_Hint_2_parentheses_left}", "color", 'rgba(188,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(188,0,0,1.00)'}], position: 38500, duration: 0 },
            { id: "eid241", tween: [ "style", "${_Hint_3_text}", "display", 'none', { fromValue: 'block'}], position: 93000, duration: 0 },
            { id: "eid245", tween: [ "style", "${_Hint_4_text}", "display", 'none', { fromValue: 'block'}], position: 102000, duration: 0 },
            { id: "eid217", tween: [ "style", "${_Hint_2_text}", "display", 'none', { fromValue: 'block'}], position: 74000, duration: 0 },
            { id: "eid272", tween: [ "style", "${_Answer_hint_divided_by_20Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 119000, duration: 1000 },
            { id: "eid195", tween: [ "style", "${_cCopy}", "display", 'none', { fromValue: 'block'}], position: 38000, duration: 0 },
            { id: "eid248", tween: [ "style", "${_Hint_5_text}", "opacity", '1', { fromValue: '0.000000'}], position: 109000, duration: 1000 },
            { id: "eid268", tween: [ "style", "${_Answer_hint_divided_by_20}", "opacity", '1', { fromValue: '0'}], position: 119000, duration: 1000 },
            { id: "eid281", tween: [ "style", "${_Answer_Hint_fraction}", "opacity", '1', { fromValue: '0.000000'}], position: 122000, duration: 1000 },
            { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
            { id: "eid179", tween: [ "style", "${_Hint_2_equal_sign_1}", "opacity", '1', { fromValue: '0.000000'}], position: 34000, duration: 1000 },
            { id: "eid284", tween: [ "style", "${_Choose_A}", "opacity", '1', { fromValue: '0.000000'}], position: 127000, duration: 1000 },
            { id: "eid234", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0.000000'}], position: 77000, duration: 1000 },
            { id: "eid237", tween: [ "style", "${__-_80}", "opacity", '1', { fromValue: '0.000000'}], position: 78000, duration: 1000 },
            { id: "eid172", tween: [ "style", "${_Hint_2_problem_fraction}", "opacity", '1', { fromValue: '0.000000'}], position: 32000, duration: 1000 },
            { id: "eid229", tween: [ "style", "${_Hint_2_equal_sign_1Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 76000, duration: 1000 },
            { id: "eid275", tween: [ "style", "${_Answer_Hint_equal_sign}", "opacity", '1', { fromValue: '0.000000'}], position: 121000, duration: 1000 },
            { id: "eid184", tween: [ "color", "${_Hint_2__-10_red}", "color", 'rgba(188,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(188,0,0,1.00)'}], position: 36000, duration: 0 },
            { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 3000 },
            { id: "eid202", tween: [ "style", "${_Hint_2__4_red_Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 39500, duration: 1000 },
            { id: "eid194", tween: [ "style", "${_Hint_2__-10_red}", "top", '132px', { fromValue: '87px'}], position: 37000, duration: 1500 },
            { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid164", tween: [ "color", "${__4}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 30000, duration: 0 },
            { id: "eid213", tween: [ "style", "${_Hint_1_text}", "display", 'none', { fromValue: 'block'}], position: 57000, duration: 0 },
            { id: "eid193", tween: [ "style", "${_Hint_2__-10_red}", "left", '300px', { fromValue: '269px'}], position: 37000, duration: 1500 },
            { id: "eid163", tween: [ "style", "${_Hint_2_C_value}", "opacity", '1', { fromValue: '0.000000'}], position: 30000, duration: 1000 },
            { id: "eid244", tween: [ "style", "${_Hint_4_text}", "opacity", '1', { fromValue: '0.000000'}], position: 100000, duration: 1000 },
            { id: "eid211", tween: [ "style", "${_dCopy}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0 },
            { id: "eid278", tween: [ "style", "${_Answer}", "opacity", '1', { fromValue: '0.000000'}], position: 123000, duration: 1000 },
            { id: "eid198", tween: [ "color", "${_Hint_2__4_red_Copy}", "color", 'rgba(188,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(188,0,0,1.00)'}], position: 39500, duration: 0 },
            { id: "eid187", tween: [ "style", "${_Hint_2__-10_red}", "opacity", '1', { fromValue: '0.000000'}], position: 36000, duration: 1000 },
            { id: "eid208", tween: [ "style", "${_Hint_2__4_red_Copy}", "top", '158px', { fromValue: '87px'}], position: 40500, duration: 1500 },
            { id: "eid286", tween: [ "style", "${_Hint_2_parenthese_right}", "display", 'block', { fromValue: 'none'}], position: 38500, duration: 0 },
            { id: "eid176", tween: [ "style", "${_Hint_1_text}", "opacity", '1', { fromValue: '0.000000'}], position: 28000, duration: 1000 },
            { id: "eid196", tween: [ "style", "${_Hint_2_parentheses_left}", "display", 'block', { fromValue: 'none'}], position: 38500, duration: 0 },
            { id: "eid182", tween: [ "style", "${_Hint_2_problem_fraction_2}", "opacity", '1', { fromValue: '0.000000'}], position: 34000, duration: 1000 },
            { id: "eid216", tween: [ "style", "${_Hint_2_text}", "opacity", '1', { fromValue: '0.000000'}], position: 57000, duration: 1000 },
            { id: "eid228", tween: [ "style", "${_Hint_3_text}", "opacity", '1', { fromValue: '0.000000'}], position: 74000, duration: 1000 },
            { id: "eid212", tween: [ "style", "${_Hint_2_Multiply_signCopy}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0 },
            { id: "eid169", tween: [ "style", "${_Hint_2_d_value}", "opacity", '1', { fromValue: '0.000000'}], position: 30000, duration: 1000 }         ]
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
            { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }         ]
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
         "${_EllipseCopy8}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(232,241,160,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '24px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '25px']
         ],
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
            { id: "eid9", tween: [ "color", "${_EllipseCopy8}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 },
            { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid44", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
            { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid43", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
            { id: "eid13", tween: [ "style", "${_EllipseCopy8}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }         ]
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
            { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }         ]
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
            { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 }         ]
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
            { id: "eid5", tween: [ "color", "${_EllipseCopy6}", "background-color", 'rgba(232,241,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,241,160,1.00)'}], position: 0, duration: 0 }         ]
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
            { id: "eid12", tween: [ "style", "${_EllipseCopy5}", "border-width", '1px', { fromValue: '1px'}], position: 0, duration: 0 }         ]
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
         rect: ['-8px','-16px','65px','42px','auto','auto'],
         id: 'check',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/check.png','0px','0px']
      },
      {
         rect: ['-8px','-4px','42px','33px','auto','auto'],
         id: 'x',
         type: 'image',
         display: 'none',
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


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EdgeProblem");
