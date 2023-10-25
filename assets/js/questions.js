let questions =[
 {
  number:1,
  questionTitle:'Declare a variable called username ?',
  questionCode : '... username',
  answer:'var',
  options:[
   'var',
   'string',
   'char',
   'declare',
  ]

} ,
{
  number:2,
  question:'Assign data of integer data type to the following variable ?',
  questionCode : 'firstNumber = ...',
  answer:80 ,
  options:[
    3.14,
    '8',
    "20",
     80,
  ]

} ,
{
  number:3,
  question:'What is the expected output of the following code ?',
  questionCode : `let x = 2 
                  console.log(++x)`,
  answer:3,
  options:[
    2,
    3,
    4,
    'Syntax error',
  ]

} ,
{
  number:4,
  question:'What is the expected output of the following code ?',
  questionCode : `let x = 2 
                  console.log(x++)`,
  answer:2,
  options:[
    2,
    3,
    4,
    'Syntax error',
  ]

} ,

{
  number:5,
  question:'What is the expected output of the following code ?',
  questionCode : `let x = 2 
                  console.log((x++))`,
  answer:2,
  options:[
    2,
    3,
    4,
    'Syntax error',
  ]

} ,
{
  number:6,
  question:'Set an alert to show the sum of 2 variables ?',
  questionCode : `let x = 2, y = 5
                  ...(x+y)`,
  answer:'alert',
  options:[
    'setAlert',
    'console.alert',
    'alert',
    'No correct answer',
  ]

} ,
{
  number:7,
  question:'What is the expected output of the following code ?',
  questionCode : `var x = 2
  let x = 10
  console.log(x)`,
  answer:'Syntax error',
  options:[
    2,
    10,
    'Syntax error',
    'No correct answer',
  ]

} ,
{
  number:8,
  question:'What is the expected output of the following code ?',
  questionCode : `var x = 2
  var x = 10
  console.log(x)`,
  answer:10,
  options:[
    2,
    10,
    'Syntax error',
    'No correct answer',
  ]

} ,
{
  number:9,
  question:'Execute a function called calculateSum ?',
  questionCode : ``,
  answer:'calculateSum()',
  options:[
    'calculateSum',
    'calculateSum[]',
    'calculateSum{}',
    'calculateSum()',
  ]
} ,
{
  number:10,
  question:'Complete the following code to create a function that returns the sum of 2 parameters ?',
  questionCode : `function calculateSum(x, y){
    ...
          }`,
  answer:'return x+y',
  options:[
    'return x+y',
    'console.log(x+y)',
    'alert(x+y)',
    'No correct answer',
  ]
} ,
]
export { questions };