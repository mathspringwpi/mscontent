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
            id:'Problem_statement',
            type:'group',
            rect:['111px','149px','48','19','auto','auto'],
            c:[
            {
               id:'Question_Text',
               type:'text',
               rect:['-93px','-111px','219px','91px','auto','auto'],
               text:"There were 18 students in Mr. Cooper's class and 1/3 of them were seniors. Which of the following expressions can be used to find: ",
               align:"left",
               font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'of',
               type:'text',
               rect:['-20px','-1px','30px','19px','auto','auto'],
               text:"of",
               align:"left",
               font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_18',
               type:'text',
               rect:['0px','0px','48px','19px','auto','auto'],
               text:"18",
               align:"left",
               font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Problem_fraction',
               type:'group',
               rect:['-46px','21px','25','19','auto','auto'],
               c:[
               {
                  id:'_3_denominator',
                  type:'text',
                  rect:['1px','-8px','25px','19px','auto','auto'],
                  text:"3",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'_1_numerator',
                  type:'text',
                  rect:['0px','-32px','23px','19px','auto','auto'],
                  text:"1",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'fraction_sign',
                  type:'rect',
                  rect:['-4px','-13px','18px','0px','auto','auto'],
                  fill:["rgba(0,0,0,1.00)"],
                  stroke:[1,"rgba(0,0,0,1)","solid"]
               }]
            }]
         },
         {
            id:'Answers',
            type:'rect',
            rect:['48','181','auto','auto','auto','auto']
         },
         {
            id:'AnswerCText',
            type:'text',
            rect:['73px','262px','101px','19px','auto','auto'],
            text:"3 ÷ 18",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'AnswerDText',
            type:'text',
            rect:['73px','298px','109px','19px','auto','auto'],
            text:"18 ÷ 3",
            align:"left",
            font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint_2_one_third_of_18',
            type:'text',
            rect:['281px','51px','125px','22px','auto','auto'],
            text:"\" One-third of 18 \"",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(0,82,203,1.00)","normal","none","normal"]
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
            rect:['260px','49px','237px','187px','auto','auto'],
            text:"Let's pretend your hint starts here at 0:10. It does not really matter where the hints start and end, as long as they don't overlap. Don't worry that the X and Checks are showing up either - it's just because I set their timeline to 5 seconds in the symbol. They won't appear in the final animation.<br><br>This rectangle is a space for you to draw your animation. An example will follow in hint 2.",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Answer_A_',
            type:'group',
            rect:['73px','194px','48','12','auto','auto'],
            c:[
            {
               id:'_Answer_A_Problem_fraction',
               type:'group',
               rect:['37px','20px','25','19px','auto','auto'],
               c:[
               {
                  id:'_3_denominatorCopy',
                  type:'text',
                  rect:['1px','-8px','25px','19px','auto','auto'],
                  text:"3",
                  align:"left",
                  font:['Times New Roman, Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'_1_numeratorCopy',
                  type:'text',
                  rect:['0px','-28px','23px','19px','auto','auto'],
                  text:"1",
                  align:"left",
                  font:['Times New Roman, Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'fraction_signCopy',
                  type:'rect',
                  rect:['-4px','-13px','12px','0px','auto','auto'],
                  fill:["rgba(0,0,0,1.00)"],
                  stroke:[1,"rgba(0,0,0,1)","solid"]
               }]
            },
            {
               id:'_18_divided',
               type:'text',
               rect:['0px','0px','48px','12px','auto','auto'],
               text:"18  ÷",
               align:"left",
               font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'Answer_B',
            type:'group',
            rect:['77px','224px','48','12','auto','auto'],
            c:[
            {
               id:'_Answer_B_Problem_fractionCopy',
               type:'group',
               rect:['-1px','25px','25','19px','auto','auto'],
               c:[
               {
                  id:'_3_denominatorCopy2',
                  type:'text',
                  rect:['1px','-8px','25px','19px','auto','auto'],
                  text:"3",
                  align:"left",
                  font:['Times New Roman, Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'_1_numeratorCopy2',
                  type:'text',
                  rect:['0px','-28px','23px','19px','auto','auto'],
                  text:"1",
                  align:"left",
                  font:['Times New Roman, Times, serif',12,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'fraction_signCopy2',
                  type:'rect',
                  rect:['-4px','-13px','12px','0px','auto','auto'],
                  fill:["rgba(0,0,0,1.00)"],
                  stroke:[1,"rgba(0,0,0,1)","solid"]
               }]
            },
            {
               id:'_18_dividedCopy',
               type:'text',
               rect:['30px','8px','48px','12px','auto','auto'],
               text:"18",
               align:"left",
               font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'divide_sign',
               type:'text',
               rect:['15px','7px','36px','29px','auto','auto'],
               text:"÷",
               align:"left",
               font:['\'Times New Roman\', Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'Hint_2_expression_1',
            type:'group',
            rect:['261px','258px','48','19','auto','auto'],
            c:[
            {
               id:'multiply_signCopy',
               type:'text',
               rect:['-20px','-1px','30px','19px','auto','auto'],
               text:"x",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'equal_signCopy',
               type:'text',
               rect:['24px','2px','38px','12px','auto','auto'],
               text:"=",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_18Copy',
               type:'text',
               rect:['0px','0px','63px','22px','auto','auto'],
               text:"18<br>",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Problem_fractionCopy2',
               type:'group',
               rect:['-46px','21px','25','19','auto','auto'],
               c:[
               {
                  id:'_3_denominatorCopy7',
                  type:'text',
                  rect:['1px','-8px','25px','19px','auto','auto'],
                  text:"3<br>",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'_1_numeratorCopy4',
                  type:'text',
                  rect:['0px','-32px','23px','19px','auto','auto'],
                  text:"1",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'fraction_signCopy4',
                  type:'rect',
                  rect:['-4px','-13px','18px','0px','auto','auto'],
                  fill:["rgba(0,116,177,1.00)"],
                  stroke:[1,"rgba(0,0,0,1)","solid"]
               }]
            }]
         },
         {
            id:'Answer_expression_1',
            type:'group',
            rect:['213px','352px','14','19','auto','auto'],
            c:[
            {
               id:'fraction_one_fifith',
               type:'group',
               rect:['2px','-59px','20','19','auto','auto'],
               c:[
               {
                  id:'Rectangle5',
                  type:'rect',
                  rect:['-4px','18px','18px','0px','auto','auto'],
                  fill:["rgba(0,116,177,1.00)"],
                  stroke:[1,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'hint_2_3',
                  type:'text',
                  rect:['1px','24px','14px','19px','auto','auto'],
                  text:"3",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'hint_2_1',
                  type:'text',
                  rect:['0px','0px','20px','19px','auto','auto'],
                  text:"1",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
               }]
            },
            {
               id:'multiply_sign_hint_2',
               type:'text',
               rect:['25px','-50px','16px','21px','auto','auto'],
               text:"x",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'equal_sign_hint_2',
               type:'text',
               rect:['76px','-45px','25px','12px','auto','auto'],
               text:"=",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'fraction_18',
               type:'group',
               rect:['48px','-35px','16','12','auto','auto'],
               c:[
               {
                  id:'_1_hint_2',
                  type:'text',
                  rect:['0px','0px','16px','12px','auto','auto'],
                  text:"1",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'_18_hint_2',
                  type:'text',
                  rect:['-4px','-23px','36px','12px','auto','auto'],
                  text:"18",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'Rectangle6',
                  type:'rect',
                  rect:['-7px','-5px','23px','0px','auto','auto'],
                  fill:["rgba(0,0,0,1)"],
                  stroke:[1,"rgb(0, 0, 0)","solid"]
               }]
            }]
         },
         {
            id:'Answer_Hint_2',
            type:'group',
            rect:['328px','336px','14','22','auto','auto'],
            c:[
            {
               id:'fraction_18_over_3',
               type:'group',
               rect:['-4px','-20px','14','22','auto','auto'],
               c:[
               {
                  id:'_3_hint2',
                  type:'text',
                  rect:['0px','0px','14px','22px','auto','auto'],
                  text:"3",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(0,116,177,1)","normal","none","normal"]
               },
               {
                  id:'Rectangle7',
                  type:'rect',
                  rect:['-10px','-4px','28px','0px','auto','auto'],
                  fill:["rgba(0,116,177,1.00)"],
                  stroke:[1,"rgb(0, 116, 177)","solid"]
               },
               {
                  id:'_18_hint2_2_',
                  type:'text',
                  rect:['-4px','-24px','30px','19px','auto','auto'],
                  text:"18",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(0,116,177,1)","normal","none","normal"]
               }]
            },
            {
               id:'equal_sign_expression_3',
               type:'text',
               rect:['27px','-28px','25px','12px','auto','auto'],
               text:"=",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,116,177,1)","normal","none","normal"]
            }]
         },
         {
            id:'Answer_hint_3',
            type:'text',
            rect:['379px','307px','101px','20px','auto','auto'],
            text:"18 ÷ 3",
            align:"left",
            font:['Verdana, Geneva, sans-serif',16,"rgba(0,116,177,1)","normal","none","normal"]
         },
         {
            id:'Hint_1_text',
            type:'text',
            rect:['204px','183px','278px','36px','auto','auto'],
            text:"Let's take 1/3 of the whole class.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(146,1,1,1.00)","bold","none","normal"]
         },
         {
            id:'Choose_A',
            type:'text',
            rect:['378px','336px','101px','12px','auto','auto'],
            text:"Choose (D)",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,118,14,1.00)","700","none","normal"]
         },
         {
            id:'Squares',
            type:'group',
            rect:['262','73px','175','98','auto','auto'],
            c:[
            {
               id:'One_third_squares',
               type:'rect',
               rect:['0px','1px','172px','30px','auto','auto'],
               fill:["rgba(18,210,245,1.00)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'Rectangle',
               type:'rect',
               rect:['0px','0px','173px','96px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[1,"rgba(0,0,0,1.00)","solid"]
            },
            {
               id:'one_third_line',
               type:'rect',
               rect:['2px','33px','171px','0px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'two_third_line',
               type:'rect',
               rect:['0px','67px','173px','0px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'one_sixth',
               type:'rect',
               rect:['28px','1px','0px','95px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'two_sixth',
               type:'rect',
               rect:['58px','1px','0px','95px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'three_sixth',
               type:'rect',
               rect:['88px','1px','0px','95px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'four_sixth',
               type:'rect',
               rect:['118px','1px','0px','95px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'five_sixth',
               type:'rect',
               rect:['146px','1px','0px','95px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            }]
         },
         {
            id:'Hint_2_text',
            type:'group',
            rect:['382px','215px','48','20','auto','auto'],
            c:[
            {
               id:'Problem_fractionCopy3',
               type:'group',
               rect:['-168px','21px','25','19','auto','auto'],
               c:[
               {
                  id:'_3_denominatorCopy4',
                  type:'text',
                  rect:['1px','-8px','25px','19px','auto','auto'],
                  text:"3",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'_1_numeratorCopy6',
                  type:'text',
                  rect:['0px','-32px','23px','19px','auto','auto'],
                  text:"1",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'fraction_signCopy6',
                  type:'rect',
                  rect:['-4px','-13px','18px','0px','auto','auto'],
                  fill:["rgba(0,0,0,1.00)"],
                  stroke:[1,"rgba(0,116,177,1.00)","solid"]
               }]
            },
            {
               id:'Hint2_of_18_means',
               type:'text',
               rect:['-139px','1px','125px','12px','auto','auto'],
               text:"of 18 means<br>",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,116,177,1)","normal","none","normal"]
            },
            {
               id:'Hint_2x_18',
               type:'text',
               rect:['-13px','0px','48px','20px','auto','auto'],
               text:"x 18",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,116,177,1)","normal","none","normal"]
            },
            {
               id:'Problem_fractionCopy5',
               type:'group',
               rect:['-39px','20px','25','19','auto','auto'],
               c:[
               {
                  id:'_3_denominatorCopy6',
                  type:'text',
                  rect:['1px','-8px','25px','19px','auto','auto'],
                  text:"3",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'_1_numeratorCopy8',
                  type:'text',
                  rect:['0px','-32px','23px','19px','auto','auto'],
                  text:"1",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'fraction_signCopy8',
                  type:'rect',
                  rect:['-4px','-13px','18px','0px','auto','auto'],
                  fill:["rgba(0,0,0,1.00)"],
                  stroke:[1,"rgba(0,116,177,1.00)","solid"]
               }]
            }]
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
         "${_fraction_signCopy8}": [
            ["style", "top", '-13px'],
            ["color", "background-color", 'rgba(0,116,177,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '0px'],
            ["color", "border-color", 'rgba(0,116,177,1.00)'],
            ["style", "left", '-4px'],
            ["style", "width", '18px']
         ],
         "${_four_sixth}": [
            ["style", "height", '95px'],
            ["style", "left", '118px'],
            ["style", "top", '1px']
         ],
         "${_three_sixth}": [
            ["style", "height", '95px'],
            ["style", "left", '88px'],
            ["style", "top", '1px']
         ],
         "${_Problem_fractionCopy5}": [
            ["style", "left", '-39px'],
            ["style", "top", '20px']
         ],
         "${__1_numeratorCopy6}": [
            ["style", "top", '-32px'],
            ["color", "color", 'rgba(0,116,177,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_Hint_1_text}": [
            ["style", "top", '183px'],
            ["color", "color", 'rgba(146,1,1,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '204px'],
            ["style", "width", '278px']
         ],
         "${__18_hint_2}": [
            ["style", "top", '-23px'],
            ["style", "left", '-4px'],
            ["color", "color", 'rgba(0,116,177,1.00)']
         ],
         "${_Choose_A}": [
            ["style", "top", '336px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(0,118,14,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '378px'],
            ["style", "width", '101px']
         ],
         "${_fraction_signCopy4}": [
            ["style", "top", '-13px'],
            ["color", "background-color", 'rgba(0,116,177,1.00)'],
            ["style", "left", '-4px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '0px'],
            ["color", "border-color", 'rgba(0,116,177,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "width", '18px']
         ],
         "${__1_numerator}": [
            ["style", "top", '-32px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_Hint_2_expression_1}": [
            ["style", "top", '258px'],
            ["style", "opacity", '0'],
            ["style", "left", '261px']
         ],
         "${__1_numeratorCopy2}": [
            ["style", "top", '-28px'],
            ["style", "height", '19px'],
            ["style", "font-family", '\'Times New Roman\', Times, serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '12px']
         ],
         "${_hint_2_1}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,116,177,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px']
         ],
         "${_one_third_line}": [
            ["style", "top", '33px'],
            ["style", "left", '2px'],
            ["style", "width", '171px']
         ],
         "${_fraction_18_over_3}": [
            ["style", "top", '-20px'],
            ["style", "left", '-4px']
         ],
         "${__3_denominatorCopy3}": [
            ["style", "top", '-8px'],
            ["style", "height", '19px'],
            ["style", "left", '1px'],
            ["style", "font-size", '14px']
         ],
         "${__1_hint_2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(0,116,177,1.00)']
         ],
         "${_equal_sign_hint_2}": [
            ["style", "top", '-45px'],
            ["style", "left", '76px'],
            ["color", "color", 'rgba(0,116,177,1.00)']
         ],
         "${__1_numeratorCopy7}": [
            ["style", "top", '-32px'],
            ["color", "color", 'rgba(0,116,177,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${__3_denominatorCopy7}": [
            ["style", "top", '-8px'],
            ["style", "left", '1px'],
            ["color", "color", 'rgba(0,116,177,1.00)']
         ],
         "${__1_numeratorCopy8}": [
            ["style", "top", '-32px'],
            ["color", "color", 'rgba(0,116,177,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_fraction_signCopy6}": [
            ["style", "top", '-13px'],
            ["color", "background-color", 'rgba(0,116,177,1.00)'],
            ["style", "left", '-4px'],
            ["color", "border-color", 'rgba(0,116,177,1.00)'],
            ["style", "height", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '18px']
         ],
         "${_multiply_sign_hint_2}": [
            ["color", "color", 'rgba(0,116,177,1.00)'],
            ["style", "top", '-50px'],
            ["style", "left", '25px'],
            ["style", "width", '16px']
         ],
         "${_Answer_B}": [
            ["style", "top", '224px'],
            ["style", "left", '77px']
         ],
         "${_fraction_sign}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '-13px'],
            ["style", "border-width", '1px'],
            ["style", "height", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '-4px'],
            ["style", "width", '18px']
         ],
         "${_Answers}": [
            ["style", "top", '168px'],
            ["style", "left", '24px']
         ],
         "${_Sound_Container}": [
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden']
         ],
         "${__3_denominator}": [
            ["style", "top", '-8px'],
            ["style", "left", '1px'],
            ["style", "font-size", '14px']
         ],
         "${_divide_sign}": [
            ["style", "left", '15px'],
            ["style", "top", '7px']
         ],
         "${_fraction_18}": [
            ["style", "left", '48px'],
            ["style", "top", '-35px']
         ],
         "${_Hint_2_text}": [
            ["style", "top", '215px'],
            ["style", "opacity", '0'],
            ["style", "left", '382px']
         ],
         "${_One_third_squares}": [
            ["style", "top", '1px'],
            ["color", "background-color", 'rgba(18,210,245,1.00)'],
            ["style", "height", '30px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '172px']
         ],
         "${_Rectangle5}": [
            ["style", "top", '18px'],
            ["color", "border-color", 'rgba(0,116,177,1.00)'],
            ["style", "left", '-4px'],
            ["color", "background-color", 'rgba(0,116,177,1.00)']
         ],
         "${_Answer_expression_1}": [
            ["style", "top", '352px'],
            ["style", "opacity", '0'],
            ["style", "left", '213px']
         ],
         "${_hint_2_3}": [
            ["style", "top", '24px'],
            ["style", "left", '1px'],
            ["color", "color", 'rgba(0,116,177,1.00)']
         ],
         "${_fraction_one_fifith}": [
            ["style", "left", '2px'],
            ["style", "top", '-59px']
         ],
         "${_Squares}": [
            ["style", "top", '73px'],
            ["style", "opacity", '0']
         ],
         "${__3_denominatorCopy5}": [
            ["color", "color", 'rgba(0,116,177,1.00)'],
            ["style", "top", '-8px'],
            ["style", "left", '1px'],
            ["style", "font-size", '14px']
         ],
         "${_multiply_signCopy}": [
            ["style", "top", '-1px'],
            ["color", "color", 'rgba(0,116,177,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '-20px'],
            ["style", "width", '30px']
         ],
         "${_five_sixth}": [
            ["style", "height", '95px'],
            ["style", "left", '146px'],
            ["style", "top", '1px']
         ],
         "${_Rectangle7}": [
            ["style", "top", '-4px'],
            ["style", "left", '-10px'],
            ["color", "background-color", 'rgba(0,116,177,1.00)']
         ],
         "${_Question_Text}": [
            ["style", "top", '-111px'],
            ["style", "font-size", '16px'],
            ["style", "height", '91px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '-93px'],
            ["style", "width", '219px']
         ],
         "${__1_numeratorCopy}": [
            ["style", "top", '-28px'],
            ["style", "height", '19px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '12px']
         ],
         "${__18_hint2_2_}": [
            ["style", "left", '-4px'],
            ["style", "top", '-24px']
         ],
         "${__18_dividedCopy}": [
            ["style", "top", '8px'],
            ["style", "font-family", '\'Times New Roman\', Times, serif'],
            ["style", "left", '30px']
         ],
         "${__18}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${__18Copy}": [
            ["style", "top", '0px'],
            ["style", "font-size", '16px'],
            ["style", "height", '22px'],
            ["color", "color", 'rgba(0,116,177,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '63px']
         ],
         "${__3_denominatorCopy}": [
            ["style", "top", '-8px'],
            ["style", "height", '19px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '1px'],
            ["style", "font-size", '12px']
         ],
         "${_Hint2_of_18_means}": [
            ["style", "top", '1px'],
            ["color", "color", 'rgba(0,116,177,1)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '-139px'],
            ["style", "width", '125px']
         ],
         "${_Answer_hint_3}": [
            ["style", "top", '307px'],
            ["style", "height", '20px'],
            ["style", "opacity", '0'],
            ["style", "left", '379px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif']
         ],
         "${_Problem_fractionCopy2}": [
            ["style", "left", '-46px'],
            ["style", "top", '21px']
         ],
         "${_equal_signCopy}": [
            ["style", "top", '2px'],
            ["style", "left", '24px'],
            ["color", "color", 'rgba(0,116,177,1.00)']
         ],
         "${_Answer_Hint_2}": [
            ["style", "top", '336px'],
            ["style", "opacity", '0'],
            ["style", "left", '328px']
         ],
         "${__3_denominatorCopy2}": [
            ["style", "top", '-8px'],
            ["style", "height", '19px'],
            ["style", "font-family", '\'Times New Roman\', Times, serif'],
            ["style", "left", '1px'],
            ["style", "font-size", '12px']
         ],
         "${_Problem_statement}": [
            ["style", "top", '149px'],
            ["style", "left", '111px']
         ],
         "${_AnswerDText}": [
            ["style", "top", '298px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '14px'],
            ["style", "height", '19px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '73px'],
            ["style", "width", '109px']
         ],
         "${__3_denominatorCopy6}": [
            ["color", "color", 'rgba(0,116,177,1.00)'],
            ["style", "top", '-8px'],
            ["style", "left", '1px'],
            ["style", "font-size", '14px']
         ],
         "${_Hint_2x_18}": [
            ["style", "top", '0px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '-13px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '600px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${__1_numeratorCopy5}": [
            ["style", "top", '-32px'],
            ["style", "height", '19px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_AnswerCText}": [
            ["style", "top", '262px'],
            ["style", "font-size", '14px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '73px'],
            ["style", "width", '101px']
         ],
         "${_one_sixth}": [
            ["style", "height", '95px'],
            ["style", "left", '28px'],
            ["style", "top", '1px']
         ],
         "${__Answer_B_Problem_fractionCopy}": [
            ["style", "top", '25px'],
            ["style", "left", '-1px']
         ],
         "${__3_denominatorCopy4}": [
            ["style", "top", '-8px'],
            ["color", "color", 'rgba(0,116,177,1.00)'],
            ["style", "left", '1px'],
            ["style", "font-size", '14px']
         ],
         "${_two_third_line}": [
            ["style", "top", '67px'],
            ["style", "left", '0px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "top", '0px'],
            ["style", "height", '96px'],
            ["color", "border-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '173px']
         ],
         "${_TutorialText}": [
            ["style", "top", '51px'],
            ["style", "height", '187px'],
            ["style", "opacity", '1'],
            ["style", "left", '260px'],
            ["style", "display", 'none']
         ],
         "${_two_sixth}": [
            ["style", "height", '95px'],
            ["style", "left", '58px'],
            ["style", "top", '1px']
         ],
         "${_Problem_fractionCopy3}": [
            ["style", "left", '-168px'],
            ["style", "top", '21px']
         ],
         "${_equal_sign_expression_3}": [
            ["style", "left", '27px'],
            ["style", "top", '-28px']
         ],
         "${__3_hint2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '22px']
         ],
         "${_Question_TextCopy}": [
            ["style", "top", '-111px'],
            ["style", "width", '219px'],
            ["style", "height", '91px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '-93px'],
            ["style", "font-size", '16px']
         ],
         "${_ofCopy}": [
            ["style", "top", '-1px'],
            ["style", "width", '30px'],
            ["style", "height", '19px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '-20px'],
            ["style", "font-size", '14px']
         ],
         "${__1_numeratorCopy4}": [
            ["style", "top", '-32px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(0,116,177,1.00)']
         ],
         "${_fraction_signCopy2}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "top", '-13px'],
            ["style", "border-width", '1px'],
            ["style", "height", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '-4px'],
            ["style", "width", '12px']
         ],
         "${_Rectangle6}": [
            ["style", "top", '-5px'],
            ["color", "border-color", 'rgba(0,116,177,1.00)'],
            ["style", "left", '-7px'],
            ["color", "background-color", 'rgba(0,116,177,1.00)']
         ],
         "${_QuestionSound_Container}": [
            ["style", "height", '8px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(248,250,248,0.00)'],
            ["style", "width", '17px']
         ],
         "${__Answer_A_Problem_fraction}": [
            ["style", "top", '20px'],
            ["style", "left", '37px']
         ],
         "${_Hint_2_one_third_of_18}": [
            ["style", "top", '51px'],
            ["style", "height", '22px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(0,82,203,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '281px'],
            ["style", "width", '125px']
         ],
         "${__18_divided}": [
            ["style", "top", '0px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '0px']
         ],
         "${_Answer_A_}": [
            ["style", "top", '194px'],
            ["style", "left", '73px']
         ],
         "${_of}": [
            ["style", "top", '-1px'],
            ["style", "font-size", '14px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '-20px'],
            ["style", "width", '30px']
         ],
         "${_Problem_fraction}": [
            ["style", "left", '-46px'],
            ["style", "top", '21px']
         ],
         "${_fraction_signCopy}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "top", '-13px'],
            ["style", "left", '-4px'],
            ["style", "height", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '12px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 92000,
         autoPlay: true,
         labels: {
            "Read Question": 2000,
            "Hint 1": 17000,
            "Hint 2": 35000,
            "Answer Hint": 51000
         },
         timeline: [
            { id: "eid243", tween: [ "color", "${_Hint2_of_18_means}", "color", 'rgba(0,116,177,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1)'}], position: 46000, duration: 0 },
            { id: "eid196", tween: [ "color", "${__3_denominatorCopy7}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 50000, duration: 0 },
            { id: "eid216", tween: [ "style", "${_Answer_Hint_2}", "opacity", '1', { fromValue: '0.000000'}], position: 61000, duration: 1000 },
            { id: "eid211", tween: [ "color", "${_hint_2_1}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 68000, duration: 0 },
            { id: "eid203", tween: [ "style", "${_Answer_expression_1}", "opacity", '1', { fromValue: '0.000000'}], position: 59000, duration: 1000 },
            { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid233", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 24000, duration: 0 },
            { id: "eid200", tween: [ "color", "${_equal_signCopy}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 50000, duration: 0 },
            { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0 },
            { id: "eid268", tween: [ "color", "${__1_numeratorCopy8}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 92000, duration: 0 },
            { id: "eid232", tween: [ "style", "${_Choose_A}", "opacity", '1', { fromValue: '0.000000'}], position: 68000, duration: 1000 },
            { id: "eid208", tween: [ "color", "${__1_hint_2}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 68000, duration: 0 },
            { id: "eid250", tween: [ "color", "${_fraction_signCopy8}", "background-color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 92000, duration: 0 },
            { id: "eid198", tween: [ "color", "${__18Copy}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 50000, duration: 0 },
            { id: "eid245", tween: [ "color", "${__1_numeratorCopy6}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 46000, duration: 0 },
            { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 30000, duration: 3000 },
            { id: "eid210", tween: [ "color", "${_multiply_sign_hint_2}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 68000, duration: 0 },
            { id: "eid239", tween: [ "style", "${_Hint_1_text}", "opacity", '1', { fromValue: '0.000000'}], position: 31000, duration: 1000 },
            { id: "eid199", tween: [ "color", "${_multiply_signCopy}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 50000, duration: 0 },
            { id: "eid195", tween: [ "color", "${__1_numeratorCopy4}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 50000, duration: 0 },
            { id: "eid209", tween: [ "color", "${_equal_sign_hint_2}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 68000, duration: 0 },
            { id: "eid164", tween: [ "color", "${_Hint_2_one_third_of_18}", "color", 'rgba(0,82,203,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,82,203,1.00)'}], position: 25000, duration: 0 },
            { id: "eid246", tween: [ "color", "${__3_denominatorCopy4}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 46000, duration: 0 },
            { id: "eid207", tween: [ "color", "${__18_hint_2}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 68000, duration: 0 },
            { id: "eid194", tween: [ "style", "${_Hint_2_expression_1}", "opacity", '1', { fromValue: '0.000000'}], position: 49000, duration: 1000 },
            { id: "eid244", tween: [ "color", "${_fraction_signCopy6}", "background-color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 46000, duration: 0 },
            { id: "eid213", tween: [ "color", "${_Rectangle5}", "border-color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 68000, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid219", tween: [ "style", "${_Answer_hint_3}", "opacity", '1', { fromValue: '0.000000'}], position: 63000, duration: 1000 },
            { id: "eid236", tween: [ "style", "${_Squares}", "opacity", '1', { fromValue: '0.000000'}], position: 24000, duration: 1000 },
            { id: "eid269", tween: [ "color", "${__3_denominatorCopy6}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 92000, duration: 0 },
            { id: "eid168", tween: [ "style", "${_Hint_2_one_third_of_18}", "opacity", '1', { fromValue: '0.000000'}], position: 45000, duration: 1000 },
            { id: "eid242", tween: [ "style", "${_One_third_squares}", "opacity", '1', { fromValue: '0.000000'}], position: 33000, duration: 1000 },
            { id: "eid197", tween: [ "color", "${_fraction_signCopy4}", "border-color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 50000, duration: 0 },
            { id: "eid206", tween: [ "color", "${_Rectangle6}", "border-color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 68000, duration: 0 },
            { id: "eid272", tween: [ "style", "${_Hint_2_text}", "opacity", '1', { fromValue: '0.000000'}], position: 47000, duration: 1000 },
            { id: "eid212", tween: [ "color", "${_hint_2_3}", "color", 'rgba(0,116,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,116,177,1.00)'}], position: 68000, duration: 0 }         ]
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
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text8',
         text: 'E',
         align: 'center',
         rect: ['0px','4px','27px','20px','auto','auto']
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
      },
      {
         type: 'text',
         rect: ['36px','4px','101px','20px','auto','auto'],
         id: 'Text14',
         text: 'Answer E Text',
         align: 'left',
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal']
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
         type: 'text',
         rect: ['0px','4px','27px','20px','auto','auto'],
         id: 'Text8',
         text: 'E',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['36px','4px','101px','20px','auto','auto'],
         id: 'Text14',
         text: 'Answer E Text',
         align: 'left',
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal']
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
         rect: ['0px','4px','27px','20px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
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
         type: 'text',
         rect: ['0px','4px','27px','20px','auto','auto'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['36px','4px','101px','20px','auto','auto'],
         id: 'Text13',
         text: 'Answer D Text',
         align: 'left',
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal']
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
         type: 'text',
         rect: ['0px','4px','27px','20px','auto','auto'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['36px','4px','101px','20px','auto','auto'],
         id: 'Text13',
         text: 'Answer D Text',
         align: 'left',
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal']
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
         type: 'text',
         rect: ['0px','4px','27px','20px','auto','auto'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['36px','4px','94px','20px','auto','auto'],
         id: 'Text13',
         text: 'Answer Text D',
         align: 'left',
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal']
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
         rect: ['0px','5px','27px','19px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text4',
         text: 'B',
         align: 'center',
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
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'A',
         text: 'A<br><br><br>',
         align: 'center',
         rect: ['0px','3px','27px','19px','auto','auto']
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
         type: 'text',
         rect: ['0px','3px','27px','19px','auto','auto'],
         id: 'Text3',
         text: 'A<br><br><br>',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['36px','3px','109px','19px','auto','auto'],
         id: 'Text9',
         text: 'Answer Text A',
         align: 'left',
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal']
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


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EdgeProblem");
