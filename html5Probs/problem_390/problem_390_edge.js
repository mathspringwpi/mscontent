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
            rect:['15px','30px','219px','20px','auto','auto'],
            text:"What is :",
            align:"left",
            font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Answers',
            type:'rect',
            rect:['48','181','auto','auto','auto','auto']
         },
         {
            id:'Answer_B',
            type:'group',
            rect:['89px','240px','18','16','auto','auto'],
            c:[
            {
               id:'_35',
               type:'text',
               rect:['0px','-4px','18px','16px','auto','auto'],
               text:"35",
               align:"left",
               font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_9',
               type:'text',
               rect:['1px','-25px','18px','20px','auto','auto'],
               text:"9",
               align:"left",
               font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Rectangle6',
               type:'rect',
               rect:['-6px','-9px','22px','0px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            }]
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
            id:'Problem_statement__expression',
            type:'group',
            rect:['78px','82px','24','30','auto','auto'],
            c:[
            {
               id:'problem_fraction_3_over_7',
               type:'group',
               rect:['19px','6px','24','2','auto','auto'],
               c:[
               {
                  id:'problem_7',
                  type:'text',
                  rect:['7px','5px','18px','19px','auto','auto'],
                  text:"7",
                  align:"left",
                  font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'problem_3_second',
                  type:'text',
                  rect:['7px','-19px','18px','16px','auto','auto'],
                  text:"3",
                  align:"left",
                  font:['\'Times New Roman\', Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'Rectangle4',
                  type:'rect',
                  rect:['0px','0px','22px','0px','auto','auto'],
                  fill:["rgba(0,0,0,1)"],
                  stroke:[1,"rgb(0, 0, 0)","solid"]
               }]
            },
            {
               id:'Problem_fraction_3_over_5',
               type:'group',
               rect:['-35px','6px','24','2','auto','auto'],
               c:[
               {
                  id:'Rectangle3',
                  type:'rect',
                  rect:['0px','0px','22px','0px','auto','auto'],
                  fill:["rgba(0,0,0,1)"],
                  stroke:[1,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'problem_3',
                  type:'text',
                  rect:['7px','-19px','24px','20px','auto','auto'],
                  text:"3",
                  align:"left",
                  font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'problem_5',
                  type:'text',
                  rect:['7px','5px','24px','19px','auto','auto'],
                  text:"5",
                  align:"left",
                  font:['Times New Roman, Times, serif',16,"rgba(0,0,0,1)","normal","none","normal"]
               }]
            },
            {
               id:'Multiplication',
               type:'text',
               rect:['0px','0px','24px','30px','auto','auto'],
               text:"x",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'Answer_A',
            type:'group',
            rect:['81px','191px','18','2','auto','auto'],
            c:[
            {
               id:'Rectangle5',
               type:'rect',
               rect:['0px','0px','22px','0px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'_12',
               type:'text',
               rect:['5px','7px','18px','16px','auto','auto'],
               text:"12",
               align:"left",
               font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_6',
               type:'text',
               rect:['8px','-16px','18px','16px','auto','auto'],
               text:"6",
               align:"left",
               font:['Times New Roman, Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'Answer_C',
            type:'group',
            rect:['95px','289px','18','16','auto','auto'],
            c:[
            {
               id:'_15',
               type:'text',
               rect:['-8px','-11px','18px','16px','auto','auto'],
               text:"15",
               align:"left",
               font:['\'Times New Roman\', Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_21',
               type:'text',
               rect:['-7px','-32px','24px','16px','auto','auto'],
               text:"21",
               align:"left",
               font:['\'Times New Roman\', Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Rectangle7',
               type:'rect',
               rect:['-11px','-17px','22px','0px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            }]
         },
         {
            id:'Answer_D',
            type:'group',
            rect:['92px','323px','18','16','auto','auto'],
            c:[
            {
               id:'_35_d',
               type:'text',
               rect:['-3px','-6px','18px','16px','auto','auto'],
               text:"35",
               align:"left",
               font:['\'Times New Roman\', Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'_3',
               type:'text',
               rect:['-1px','-26px','18px','16px','auto','auto'],
               text:"3",
               align:"left",
               font:['\'Times New Roman\', Times, serif',14,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Rectangle8',
               type:'rect',
               rect:['-9px','-11px','22px','0px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            }]
         },
         {
            id:'Hint_1_text',
            type:'group',
            rect:['273px','236px','118','20','auto','auto'],
            c:[
            {
               id:'Problem_statement__expressionCopy',
               type:'group',
               rect:['-59px','-1px','24','30','auto','auto'],
               c:[
               {
                  id:'problem_fraction_3_over_7Copy',
                  type:'group',
                  rect:['19px','6px','24','2','auto','auto'],
                  c:[
                  {
                     id:'problem_7Copy',
                     type:'text',
                     rect:['7px','5px','18px','19px','auto','auto'],
                     text:"7",
                     align:"left",
                     font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
                  },
                  {
                     id:'problem_3_secondCopy',
                     type:'text',
                     rect:['7px','-19px','18px','16px','auto','auto'],
                     text:"3",
                     align:"left",
                     font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
                  },
                  {
                     id:'Rectangle4Copy',
                     type:'rect',
                     rect:['0px','0px','22px','0px','auto','auto'],
                     fill:["rgba(0,0,0,1)"],
                     stroke:[1,"rgb(0, 0, 0)","solid"]
                  }]
               },
               {
                  id:'Problem_fraction_3_over_5Copy',
                  type:'group',
                  rect:['-35px','6px','24','2','auto','auto'],
                  c:[
                  {
                     id:'Rectangle3Copy',
                     type:'rect',
                     rect:['0px','0px','22px','0px','auto','auto'],
                     fill:["rgba(0,0,0,1)"],
                     stroke:[1,"rgb(0, 0, 0)","solid"]
                  },
                  {
                     id:'problem_3Copy',
                     type:'text',
                     rect:['7px','-19px','24px','20px','auto','auto'],
                     text:"3",
                     align:"left",
                     font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
                  },
                  {
                     id:'problem_5Copy',
                     type:'text',
                     rect:['7px','5px','24px','19px','auto','auto'],
                     text:"5",
                     align:"left",
                     font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
                  }]
               },
               {
                  id:'MultiplicationCopy',
                  type:'text',
                  rect:['0px','0px','24px','30px','auto','auto'],
                  text:"x",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
               }]
            },
            {
               id:'is_the_same_as_',
               type:'text',
               rect:['0px','0px','118px','20px','auto','auto'],
               text:"is the same as ",
               align:"left",
               font:['Arial, Helvetica, sans-serif',14,"rgba(2,70,147,1)","normal","none","normal"]
            },
            {
               id:'Problem_statement__expressionCopy3',
               type:'group',
               rect:['147px','-1px','24px','30','auto','auto'],
               c:[
               {
                  id:'problem_fraction_3_over_7Copy3',
                  type:'group',
                  rect:['19px','6px','24px','2','auto','auto'],
                  c:[
                  {
                     id:'problem_7Copy3',
                     type:'text',
                     rect:['7px','5px','18px','19px','auto','auto'],
                     text:"7",
                     align:"left",
                     font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
                  },
                  {
                     id:'problem_3_secondCopy3',
                     type:'text',
                     rect:['7px','-19px','18px','16px','auto','auto'],
                     text:"3",
                     align:"left",
                     font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
                  },
                  {
                     id:'Rectangle4Copy3',
                     type:'rect',
                     rect:['0px','0px','22px','0px','auto','auto'],
                     fill:["rgba(0,0,0,1)"],
                     stroke:[1,"rgb(0, 0, 0)","solid"]
                  }]
               },
               {
                  id:'Problem_fraction_3_over_5Copy3',
                  type:'group',
                  rect:['-35px','6px','24px','2','auto','auto'],
                  c:[
                  {
                     id:'Rectangle3Copy3',
                     type:'rect',
                     rect:['0px','0px','22px','0px','auto','auto'],
                     fill:["rgba(0,0,0,1)"],
                     stroke:[1,"rgb(0, 0, 0)","solid"]
                  },
                  {
                     id:'problem_3Copy3',
                     type:'text',
                     rect:['7px','-19px','24px','20px','auto','auto'],
                     text:"3",
                     align:"left",
                     font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
                  },
                  {
                     id:'problem_5Copy3',
                     type:'text',
                     rect:['7px','5px','24px','19px','auto','auto'],
                     text:"5",
                     align:"left",
                     font:['Arial, Helvetica, sans-serif',14,"rgba(0,0,0,1)","normal","none","normal"]
                  }]
               },
               {
                  id:'MultiplicationCopy3_Of',
                  type:'text',
                  rect:['-2px','0px','24px','30px','auto','auto'],
                  text:"of",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
               }]
            }]
         },
         {
            id:'Hint_2_text_1_3_of_fifths',
            type:'text',
            rect:['191px','183px','250px','30px','auto','auto'],
            text:"We are going to fill in three of the fifths.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(128,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'Hint_4_expression',
            type:'group',
            rect:['210px','313px','46','16','auto','auto'],
            c:[
            {
               id:'_5x7',
               type:'text',
               rect:['0px','-2px','46px','16px','auto','auto'],
               text:"5 x 7",
               align:"left",
               font:['Arial, Helvetica, sans-serif',14,"rgba(2,70,147,1)","normal","none","normal"]
            },
            {
               id:'_3x3',
               type:'text',
               rect:['0px','-29px','46px','16px','auto','auto'],
               text:"3 x 3",
               align:"left",
               font:['Arial, Helvetica, sans-serif',14,"rgba(2,70,147,1.00)","normal","none","normal"]
            },
            {
               id:'Rectangle28',
               type:'rect',
               rect:['-12px','-10px','55px','0px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[1,"rgba(0,0,0,1)","solid"]
            },
            {
               id:'equals',
               type:'text',
               rect:['56px','-13px','46px','16px','auto','auto'],
               text:"=",
               align:"left",
               font:['Arial, Helvetica, sans-serif',14,"rgba(2,70,147,1)","normal","none","normal"]
            }]
         },
         {
            id:'Hint_1_rectangle',
            type:'rect',
            rect:['186px','43px','270px','118px','auto','auto'],
            fill:["rgba(2,70,147,0.00)"],
            stroke:[1,"rgba(0,0,0,1.00)","solid"]
         },
         {
            id:'Yellow_rectangle',
            type:'rect',
            rect:['186px','43px','116px','118px','auto','auto'],
            fill:["rgba(223,223,40,1.00)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Blue_rectangle_3',
            type:'rect',
            rect:['186px','91px','116px','22px','auto','auto'],
            fill:["rgba(23,185,208,1)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Blue_rectangle_2',
            type:'rect',
            rect:['186px','66px','116px','22px','auto','auto'],
            fill:["rgba(23,185,208,1)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Blue_rectangle_1',
            type:'rect',
            rect:['186px','43px','116px','20px','auto','auto'],
            fill:["rgba(23,185,208,1.00)"],
            stroke:[1,"rgba(0,0,0,1)","solid"]
         },
         {
            id:'Vertical_lines',
            type:'group',
            rect:['418','43','2','120','auto','auto'],
            c:[
            {
               id:'veetical_1',
               type:'rect',
               rect:['-193px','0px','0px','118px','auto','auto'],
               fill:["rgba(2,70,147,0)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'vertical_2',
               type:'rect',
               rect:['-154px','0px','0px','118px','auto','auto'],
               fill:["rgba(2,70,147,0)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'vertical_3',
               type:'rect',
               rect:['-114px','0px','0px','118px','auto','auto'],
               fill:["rgba(2,70,147,0)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'vertical_4',
               type:'rect',
               rect:['-76px','0px','0px','118px','auto','auto'],
               fill:["rgba(2,70,147,0)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'vertical_5',
               type:'rect',
               rect:['-38px','0px','0px','118px','auto','auto'],
               fill:["rgba(2,70,147,0)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'vertical_6',
               type:'rect',
               rect:['0px','0px','0px','118px','auto','auto'],
               fill:["rgba(2,70,147,0)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            }]
         },
         {
            id:'Horizontal_a',
            type:'group',
            rect:['186','65','118','2','auto','auto'],
            c:[
            {
               id:'h_1_a',
               type:'rect',
               rect:['0px','0px','116px','0px','auto','auto'],
               fill:["rgba(0,0,0,1.00)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'h_2_a',
               type:'rect',
               rect:['0px','25px','116px','0px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'h_3_a',
               type:'rect',
               rect:['0px','50px','116px','0px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'h_4_a',
               type:'rect',
               rect:['0px','74px','116px','0px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            }]
         },
         {
            id:'Horizontal_b',
            type:'group',
            rect:['308px','139','153','2','auto','auto'],
            c:[
            {
               id:'h_4_b',
               type:'rect',
               rect:['-2px','0px','150px','0px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'h_3_b',
               type:'rect',
               rect:['-5px','-24px','153px','0px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'h_2_b',
               type:'rect',
               rect:['-3px','-49px','150px','0px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'h_1_b',
               type:'rect',
               rect:['-2px','-74px','150px','0px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[1,"rgb(0, 0, 0)","solid"]
            }]
         },
         {
            id:'Hint_1_text_2_3_of_7th',
            type:'text',
            rect:['191px','216px','289px','30px','auto','auto'],
            text:"We are going to fill in three of the sevenths.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(128,0,0,1)","normal","none","normal"]
         },
         {
            id:'Hint_3_text_',
            type:'text',
            rect:['191px','249px','281px','33px','auto','auto'],
            text:"There are 7 x 5 = 35 parts.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(5,90,156,1.00)","normal","none","normal"]
         },
         {
            id:'Hint_4_text_warning',
            type:'text',
            rect:['170px','206px','318px','53px','auto','auto'],
            text:"WARNING: This does not work for adding fractions! It only works for multiplying fractions.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(109,113,115,1)","normal","none","normal"]
         },
         {
            id:'Answer_Hint',
            type:'group',
            rect:['289px','323','46','16','auto','auto'],
            c:[
            {
               id:'answer_35',
               type:'text',
               rect:['9px','-10px','46px','16px','auto','auto'],
               text:"35",
               align:"left",
               font:['Arial, Helvetica, sans-serif',14,"rgba(2,70,147,1)","normal","none","normal"]
            },
            {
               id:'answer_9',
               type:'text',
               rect:['12px','-37px','46px','22px','auto','auto'],
               text:"9",
               align:"left",
               font:['Arial, Helvetica, sans-serif',14,"rgba(2,70,147,1.00)","normal","none","normal"]
            },
            {
               id:'Rectangle29',
               type:'rect',
               rect:['0px','-17px','36px','0px','auto','auto'],
               fill:["rgba(2,70,147,1.00)"],
               stroke:[1,"rgba(2,70,147,1)","solid"]
            }]
         },
         {
            id:'Choose_B',
            type:'text',
            rect:['350px','301px','118px','30px','auto','auto'],
            text:"Choose (B)",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(3,130,27,1.00)","700","none","normal"]
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
         "${_problem_3_secondCopy}": [
            ["style", "top", '-19px'],
            ["color", "color", 'rgba(2,70,147,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '7px'],
            ["style", "font-size", '14px']
         ],
         "${_problem_3_second}": [
            ["style", "left", '7px'],
            ["style", "top", '-19px']
         ],
         "${__6}": [
            ["style", "top", '-16px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '8px']
         ],
         "${_Hint_1_text}": [
            ["style", "top", '236px'],
            ["style", "opacity", '0'],
            ["style", "left", '273px']
         ],
         "${_h_1_b}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "top", '-74px'],
            ["color", "border-color", 'rgb(0, 0, 0)'],
            ["style", "left", '-2px'],
            ["style", "width", '150px']
         ],
         "${_problem_5Copy}": [
            ["style", "top", '5px'],
            ["color", "color", 'rgba(2,70,147,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '7px'],
            ["style", "font-size", '14px']
         ],
         "${_Problem_statement__expressionCopy}": [
            ["style", "top", '-1px'],
            ["style", "left", '-59px']
         ],
         "${_Answer_Hint}": [
            ["style", "left", '289px'],
            ["style", "opacity", '0']
         ],
         "${_Rectangle4}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_problem_3Copy3}": [
            ["style", "top", '-19px'],
            ["style", "font-size", '14px'],
            ["color", "color", 'rgba(2,70,147,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '7px'],
            ["style", "width", '24px']
         ],
         "${__21}": [
            ["style", "left", '-7px'],
            ["style", "top", '-32px']
         ],
         "${_Problem_fraction_3_over_5Copy3}": [
            ["style", "top", '6px'],
            ["style", "left", '-35px']
         ],
         "${_vertical_5}": [
            ["style", "left", '-38px'],
            ["style", "top", '0px']
         ],
         "${_Problem_fraction_3_over_5}": [
            ["style", "left", '-35px'],
            ["style", "top", '6px']
         ],
         "${_h_1_a}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '116px']
         ],
         "${_Rectangle3Copy}": [
            ["color", "background-color", 'rgba(2,70,147,1.00)'],
            ["color", "border-color", 'rgba(2,70,147,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${__9}": [
            ["style", "top", '-25px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '1px']
         ],
         "${_answer_9}": [
            ["color", "color", 'rgba(2,70,147,1.00)'],
            ["style", "left", '12px'],
            ["style", "top", '-37px']
         ],
         "${_problem_7}": [
            ["style", "left", '7px'],
            ["style", "top", '5px']
         ],
         "${_problem_3Copy}": [
            ["style", "top", '-19px'],
            ["color", "color", 'rgba(2,70,147,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '7px'],
            ["style", "font-size", '14px']
         ],
         "${_h_4_b}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "top", '0px'],
            ["color", "border-color", 'rgb(0, 0, 0)'],
            ["style", "left", '-2px'],
            ["style", "width", '150px']
         ],
         "${_h_3_b}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "top", '-24px'],
            ["color", "border-color", 'rgb(0, 0, 0)'],
            ["style", "left", '-5px'],
            ["style", "width", '153px']
         ],
         "${_Vertical_lines}": [
            ["style", "opacity", '0']
         ],
         "${_Rectangle4Copy3}": [
            ["style", "top", '0px'],
            ["color", "border-color", 'rgba(2,70,147,1.00)'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(2,70,147,1.00)']
         ],
         "${_Answer_B}": [
            ["style", "left", '89px'],
            ["style", "top", '240px']
         ],
         "${_Rectangle4Copy}": [
            ["style", "top", '0px'],
            ["color", "border-color", 'rgba(2,70,147,1.00)'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(2,70,147,1.00)']
         ],
         "${_Answers}": [
            ["style", "top", '168px'],
            ["style", "left", '24px']
         ],
         "${_Sound_Container}": [
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden']
         ],
         "${_answer_35}": [
            ["style", "top", '-10px'],
            ["style", "left", '9px'],
            ["color", "color", 'rgba(2,70,147,1)']
         ],
         "${_Answer_D}": [
            ["style", "left", '92px'],
            ["style", "top", '323px']
         ],
         "${_problem_fraction_3_over_7}": [
            ["style", "left", '19px'],
            ["style", "top", '6px']
         ],
         "${_MultiplicationCopy3_Of}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(2,70,147,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '-2px'],
            ["style", "width", '24px']
         ],
         "${_Answer_C}": [
            ["style", "left", '95px'],
            ["style", "top", '289px']
         ],
         "${__35}": [
            ["style", "top", '-4px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '0px']
         ],
         "${_Choose_B}": [
            ["style", "top", '301px'],
            ["color", "color", 'rgba(3,130,27,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '350px'],
            ["style", "font-weight", '700']
         ],
         "${_problem_5Copy3}": [
            ["style", "top", '5px'],
            ["style", "font-size", '14px'],
            ["color", "color", 'rgba(2,70,147,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '7px'],
            ["style", "width", '24px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '600px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Hint_4_text_warning}": [
            ["color", "color", 'rgba(170,2,2,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '170px'],
            ["style", "width", '318px']
         ],
         "${_Horizontal_a}": [
            ["style", "opacity", '0']
         ],
         "${_h_2_b}": [
            ["style", "top", '-49px'],
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["color", "border-color", 'rgb(0, 0, 0)'],
            ["style", "left", '-3px'],
            ["style", "width", '150px']
         ],
         "${_MultiplicationCopy}": [
            ["style", "top", '0px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(2,70,147,1.00)']
         ],
         "${_is_the_same_as_}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle5}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '22px']
         ],
         "${__15}": [
            ["style", "left", '-8px'],
            ["style", "top", '-11px']
         ],
         "${_Hint_2_text_1_3_of_fifths}": [
            ["style", "top", '183px'],
            ["style", "width", '250px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(128,0,0,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '191px'],
            ["style", "font-size", '14px']
         ],
         "${_veetical_1}": [
            ["style", "top", '0px'],
            ["style", "left", '-193px']
         ],
         "${_Answer_A}": [
            ["style", "left", '81px'],
            ["style", "top", '191px']
         ],
         "${_Rectangle7}": [
            ["style", "top", '-17px'],
            ["style", "left", '-11px'],
            ["style", "width", '22px']
         ],
         "${_Problem_fraction_3_over_5Copy}": [
            ["style", "left", '-35px'],
            ["style", "top", '6px']
         ],
         "${_Blue_rectangle_3}": [
            ["color", "background-color", 'rgba(21,196,92,1.00)'],
            ["style", "opacity", '0'],
            ["style", "top", '91px']
         ],
         "${_Question_Text}": [
            ["style", "top", '30px'],
            ["style", "font-size", '16px'],
            ["style", "height", '20px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '15px'],
            ["style", "width", '219px']
         ],
         "${_Rectangle29}": [
            ["style", "top", '-17px'],
            ["color", "background-color", 'rgba(2,70,147,1.00)'],
            ["color", "border-color", 'rgb(2, 70, 147)'],
            ["style", "left", '0px'],
            ["style", "width", '36px']
         ],
         "${_Hint_3_text_}": [
            ["style", "top", '249px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(5,90,156,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '191px'],
            ["style", "font-size", '14px']
         ],
         "${_Blue_rectangle_2}": [
            ["color", "background-color", 'rgba(21,196,92,1.00)'],
            ["style", "opacity", '0'],
            ["style", "height", '22px']
         ],
         "${__12}": [
            ["style", "top", '7px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '5px']
         ],
         "${_h_3_a}": [
            ["style", "top", '50px'],
            ["style", "left", '0px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["color", "border-color", 'rgb(0, 0, 0)']
         ],
         "${_Problem_statement__expressionCopy3}": [
            ["style", "top", '-1px'],
            ["style", "left", '147px']
         ],
         "${_QuestionSound_Container}": [
            ["style", "height", '8px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(248,250,248,0.00)'],
            ["style", "width", '17px']
         ],
         "${_h_4_a}": [
            ["style", "top", '74px'],
            ["style", "left", '0px']
         ],
         "${_h_2_a}": [
            ["style", "top", '25px'],
            ["style", "left", '0px']
         ],
         "${_problem_3_secondCopy2}": [
            ["style", "left", '7px'],
            ["style", "top", '-19px']
         ],
         "${__3x3}": [
            ["color", "color", 'rgba(2,70,147,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '-29px']
         ],
         "${__3}": [
            ["style", "left", '-1px'],
            ["style", "top", '-26px']
         ],
         "${_problem_7Copy3}": [
            ["style", "top", '5px'],
            ["style", "font-size", '14px'],
            ["color", "color", 'rgba(2,70,147,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '7px'],
            ["style", "width", '18px']
         ],
         "${_Hint_1_text_2_3_of_7th}": [
            ["style", "top", '216px'],
            ["style", "height", '30px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(128,0,0,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '191px'],
            ["style", "width", '289px']
         ],
         "${_vertical_4}": [
            ["style", "left", '-76px'],
            ["style", "top", '0px']
         ],
         "${_Problem_statement__expression}": [
            ["style", "top", '82px'],
            ["style", "left", '78px']
         ],
         "${_Yellow_rectangle}": [
            ["color", "background-color", 'rgba(223,223,40,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '186px'],
            ["style", "top", '43px']
         ],
         "${_equals}": [
            ["style", "top", '-13px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '56px']
         ],
         "${_Blue_rectangle_1}": [
            ["style", "top", '43px'],
            ["style", "height", '20px'],
            ["style", "opacity", '0'],
            ["style", "left", '186px'],
            ["color", "background-color", 'rgba(21,196,92,1.00)']
         ],
         "${_problem_3Copy2}": [
            ["style", "top", '-19px'],
            ["style", "font-family", '\'Times New Roman\', Times, serif'],
            ["style", "left", '7px']
         ],
         "${_MultiplicationCopy2}": [
            ["style", "top", '0px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px']
         ],
         "${_problem_3_secondCopy3}": [
            ["style", "top", '-19px'],
            ["style", "font-size", '14px'],
            ["color", "color", 'rgba(2,70,147,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '7px'],
            ["style", "width", '18px']
         ],
         "${_problem_3}": [
            ["style", "top", '-19px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '7px']
         ],
         "${_vertical_2}": [
            ["style", "left", '-154px'],
            ["style", "top", '0px']
         ],
         "${_problem_5Copy2}": [
            ["style", "top", '5px'],
            ["style", "font-family", '\'Times New Roman\', Times, serif'],
            ["style", "left", '7px']
         ],
         "${_Hint_4_expression}": [
            ["style", "top", '313px'],
            ["style", "opacity", '0']
         ],
         "${_Rectangle8}": [
            ["style", "top", '-11px'],
            ["style", "left", '-9px'],
            ["style", "width", '22px']
         ],
         "${_Rectangle28}": [
            ["style", "top", '-10px'],
            ["color", "border-color", 'rgba(2,70,147,1.00)'],
            ["style", "left", '-12px']
         ],
         "${_vertical_6}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Hint_1_rectangle}": [
            ["color", "background-color", 'rgba(2,70,147,0.00)'],
            ["style", "opacity", '0'],
            ["color", "border-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '186px'],
            ["style", "top", '43px']
         ],
         "${_problem_7Copy}": [
            ["style", "top", '5px'],
            ["color", "color", 'rgba(2,70,147,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '7px'],
            ["style", "font-size", '14px']
         ],
         "${_Rectangle3Copy3}": [
            ["color", "background-color", 'rgba(2,70,147,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "border-color", 'rgba(2,70,147,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid']
         ],
         "${_problem_5}": [
            ["style", "top", '5px'],
            ["style", "font-family", 'Times New Roman, Times, serif'],
            ["style", "left", '7px']
         ],
         "${__5x7}": [
            ["style", "left", '0px'],
            ["style", "top", '-2px']
         ],
         "${_Rectangle6}": [
            ["style", "top", '-9px'],
            ["style", "left", '-6px'],
            ["style", "width", '22px']
         ],
         "${_problem_fraction_3_over_7Copy}": [
            ["style", "left", '19px'],
            ["style", "top", '6px']
         ],
         "${_problem_fraction_3_over_7Copy3}": [
            ["style", "top", '6px'],
            ["style", "left", '19px']
         ],
         "${_vertical_3}": [
            ["style", "left", '-114px'],
            ["style", "top", '0px']
         ],
         "${_Horizontal_b}": [
            ["style", "opacity", '0'],
            ["style", "left", '308px'],
            ["color", "border-color", 'rgba(179,176,176,1.00)']
         ],
         "${_problem_7Copy2}": [
            ["style", "left", '7px'],
            ["style", "top", '5px']
         ],
         "${_TutorialText}": [
            ["style", "top", '51px'],
            ["style", "height", '187px'],
            ["style", "opacity", '1'],
            ["style", "left", '260px'],
            ["style", "display", 'none']
         ],
         "${_Multiplication}": [
            ["style", "top", '0px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '0px']
         ],
         "${__35_d}": [
            ["style", "left", '-3px'],
            ["style", "top", '-6px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 148000,
         autoPlay: true,
         labels: {
            "Read Question": 2000,
            "Hint 1": 7000,
            "Hint 2": 48000,
            "Hint 3": 95000,
            "Hint 4": 113000,
            "Answer Hint": 139000
         },
         timeline: [
            { id: "eid169", tween: [ "color", "${_problem_7Copy}", "color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid234", tween: [ "color", "${_Blue_rectangle_2}", "background-color", 'rgba(21,196,92,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(21,196,92,1.00)'}], position: 82000, duration: 0 },
            { id: "eid306", tween: [ "color", "${_Choose_B}", "color", 'rgba(3,130,27,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(3,130,27,1.00)'}], position: 147000, duration: 0 },
            { id: "eid278", tween: [ "style", "${_Hint_3_text_}", "opacity", '1', { fromValue: '0.000000'}], position: 111000, duration: 1000 },
            { id: "eid193", tween: [ "style", "${_Horizontal_a}", "opacity", '1', { fromValue: '0.000000'}], position: 59000, duration: 2500 },
            { id: "eid215", tween: [ "style", "${_Hint_1_text_2_3_of_7th}", "opacity", '1', { fromValue: '0.000000'}], position: 33000, duration: 1000 },
            { id: "eid177", tween: [ "color", "${_problem_3_secondCopy3}", "color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid305", tween: [ "style", "${_Answer_Hint}", "opacity", '1', { fromValue: '0.000000'}], position: 139000, duration: 1000 },
            { id: "eid174", tween: [ "color", "${_Rectangle3Copy3}", "border-color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid218", tween: [ "style", "${_Hint_2_text_1_3_of_fifths}", "opacity", '1', { fromValue: '0.000000'}], position: 78000, duration: 1000 },
            { id: "eid209", tween: [ "color", "${_h_3_b}", "border-color", 'rgba(179,176,176,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 72000, duration: 1000 },
            { id: "eid272", tween: [ "color", "${_h_3_b}", "border-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,176,176,1)'}], position: 95000, duration: 1000 },
            { id: "eid203", tween: [ "color", "${_h_1_b}", "border-color", 'rgba(179,176,176,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 72000, duration: 1000 },
            { id: "eid248", tween: [ "color", "${_h_1_b}", "border-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,176,176,1)'}], position: 95000, duration: 1000 },
            { id: "eid295", tween: [ "style", "${_Hint_3_text_}", "display", 'none', { fromValue: 'block'}], position: 137000, duration: 0 },
            { id: "eid284", tween: [ "color", "${_Hint_3_text_}", "color", 'rgba(109,113,115,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(5,90,156,1)'}], position: 124000, duration: 500 },
            { id: "eid29", tween: [ "style", "${_QuestionSound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid170", tween: [ "color", "${_MultiplicationCopy3_Of}", "color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid173", tween: [ "color", "${_Rectangle3Copy3}", "background-color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid164", tween: [ "color", "${_Rectangle3Copy}", "background-color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid91", tween: [ "style", "${_TutorialText}", "display", 'block', { fromValue: 'none'}], position: 61000, duration: 0 },
            { id: "eid168", tween: [ "color", "${_problem_3_secondCopy}", "color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid175", tween: [ "color", "${_Rectangle4Copy3}", "background-color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid162", tween: [ "color", "${_problem_5Copy}", "color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid300", tween: [ "color", "${_answer_9}", "color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 139000, duration: 0 },
            { id: "eid238", tween: [ "color", "${_Blue_rectangle_3}", "background-color", 'rgba(21,196,92,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(21,196,92,1.00)'}], position: 83500, duration: 0 },
            { id: "eid237", tween: [ "style", "${_Blue_rectangle_2}", "opacity", '1', { fromValue: '0.000000'}], position: 82000, duration: 1000 },
            { id: "eid296", tween: [ "color", "${_Hint_4_text_warning}", "color", 'rgba(170,2,2,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(170,2,2,1.00)'}], position: 137000, duration: 0 },
            { id: "eid301", tween: [ "color", "${_answer_35}", "color", 'rgba(2,70,147,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1)'}], position: 139000, duration: 0 },
            { id: "eid233", tween: [ "color", "${_Blue_rectangle_1}", "background-color", 'rgba(21,196,92,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(21,196,92,1.00)'}], position: 82000, duration: 0 },
            { id: "eid299", tween: [ "style", "${_Hint_4_text_warning}", "opacity", '1', { fromValue: '0'}], position: 137000, duration: 1000 },
            { id: "eid289", tween: [ "color", "${_Rectangle28}", "border-color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 125000, duration: 0 },
            { id: "eid176", tween: [ "color", "${_Rectangle4Copy3}", "border-color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid165", tween: [ "color", "${_Rectangle3Copy}", "border-color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid190", tween: [ "style", "${_Yellow_rectangle}", "opacity", '1', { fromValue: '0.000000'}], position: 36000, duration: 1000 },
            { id: "eid163", tween: [ "color", "${_problem_3Copy}", "color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid288", tween: [ "color", "${_Hint_2_text_1_3_of_fifths}", "color", 'rgba(109,113,115,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(128,0,0,1)'}], position: 124000, duration: 500 },
            { id: "eid53", tween: [ "style", "${_TutorialText}", "opacity", '0', { fromValue: '1'}], position: 36000, duration: 11000 },
            { id: "eid309", tween: [ "style", "${_Choose_B}", "opacity", '1', { fromValue: '0.000000'}], position: 147000, duration: 1000 },
            { id: "eid241", tween: [ "style", "${_Blue_rectangle_3}", "opacity", '1', { fromValue: '0.000000'}], position: 83500, duration: 1000 },
            { id: "eid286", tween: [ "color", "${_Hint_1_text_2_3_of_7th}", "color", 'rgba(109,113,115,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(128,0,0,1)'}], position: 124000, duration: 500 },
            { id: "eid28", tween: [ "style", "${_Sound_Container}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid211", tween: [ "color", "${_h_4_b}", "border-color", 'rgba(179,176,176,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 72000, duration: 1000 },
            { id: "eid275", tween: [ "color", "${_h_4_b}", "border-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,176,176,1)'}], position: 95000, duration: 1000 },
            { id: "eid167", tween: [ "color", "${_Rectangle4Copy}", "background-color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid196", tween: [ "style", "${_Horizontal_b}", "opacity", '1', { fromValue: '0.000000'}], position: 59000, duration: 2500 },
            { id: "eid166", tween: [ "color", "${_Rectangle4Copy}", "border-color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid178", tween: [ "color", "${_problem_7Copy3}", "color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid229", tween: [ "style", "${_Blue_rectangle_1}", "opacity", '1', { fromValue: '0.000000'}], position: 81000, duration: 1000 },
            { id: "eid207", tween: [ "color", "${_h_2_b}", "border-color", 'rgba(179,176,176,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 72000, duration: 1000 },
            { id: "eid269", tween: [ "color", "${_h_2_b}", "border-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,176,176,1)'}], position: 95000, duration: 1000 },
            { id: "eid161", tween: [ "color", "${_MultiplicationCopy}", "color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid172", tween: [ "color", "${_problem_3Copy3}", "color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid292", tween: [ "style", "${_Hint_4_expression}", "opacity", '1', { fromValue: '0.000000'}], position: 125000, duration: 1000 },
            { id: "eid293", tween: [ "style", "${_Hint_2_text_1_3_of_fifths}", "display", 'none', { fromValue: 'block'}], position: 137000, duration: 0 },
            { id: "eid181", tween: [ "style", "${_Hint_1_text}", "opacity", '1', { fromValue: '0.000000'}], position: 15000, duration: 1000 },
            { id: "eid212", tween: [ "style", "${_Hint_1_text}", "opacity", '0', { fromValue: '1'}], position: 32000, duration: 0 },
            { id: "eid160", tween: [ "color", "${_Rectangle3}", "border-color", 'rgb(0, 0, 0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(0, 0, 0)'}], position: 2000, duration: 0 },
            { id: "eid184", tween: [ "style", "${_Hint_1_rectangle}", "opacity", '1', { fromValue: '0.000000'}], position: 25000, duration: 1000 },
            { id: "eid171", tween: [ "color", "${_problem_5Copy3}", "color", 'rgba(2,70,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,70,147,1.00)'}], position: 14000, duration: 0 },
            { id: "eid302", tween: [ "color", "${_Rectangle29}", "border-color", 'rgb(2, 70, 147)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(2, 70, 147)'}], position: 139000, duration: 0 },
            { id: "eid294", tween: [ "style", "${_Hint_1_text_2_3_of_7th}", "display", 'none', { fromValue: 'block'}], position: 137000, duration: 0 },
            { id: "eid187", tween: [ "style", "${_Vertical_lines}", "opacity", '0.99000000953674', { fromValue: '0'}], position: 27000, duration: 1000 }         ]
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
         "${_E_Button}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
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
            { id: "eid257", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "style", "${_check}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid43", tween: [ "style", "${_check}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
            { id: "eid230", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid231", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid44", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 }         ]
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
         type: 'text',
         rect: ['0px','4px','27px','20px','auto','auto'],
         id: 'Text7',
         text: 'D<br>',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
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
         type: 'text',
         rect: ['0px','4px','27px','20px','auto','auto'],
         id: 'Text5',
         text: 'C',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
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
         type: 'text',
         rect: ['0px','5px','27px','19px','auto','auto'],
         id: 'Text4',
         text: 'B',
         align: 'center',
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal']
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
         rect: ['0px','3px','27px','19px','auto','auto'],
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'A',
         text: 'A<br><br><br>',
         align: 'center',
         type: 'text'
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
         font: ['Georgia, \'Times New Roman\', Times, serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text3',
         text: 'A<br><br><br>',
         align: 'center',
         rect: ['0px','3px','27px','19px','auto','auto']
      },
      {
         font: ['Georgia, \'Times New Roman\', Times, serif',12,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text9',
         text: 'Answer Text A',
         align: 'left',
         rect: ['36px','3px','109px','19px','auto','auto']
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
