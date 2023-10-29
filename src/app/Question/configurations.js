export const inputControls= [
{
    "name":"que",
    "lbl":"Question",
    "tag":"textarea",
    "val":"",
    "isRequired":true,
    //"criteria":["EmailFormat"]
    "criteria":[]

},
{
    "name":"opt1",
    "lbl":"Option 1",
    "tag":"input",
    "val":"",
    "type":"text",
    "isRequired":true,
    //"criteria":["DigitsOnly"]
    "criteria":[]
},
{
    "name":"opt2",
    "lbl":"Option 2",
    "tag":"input",
    "val":"",
    "type":"text",
    "isRequired":true,
    //"criteria":["NoSpace","Exactly10Digits"]
    "criteria":[]

},
{
    "name":"opt3",
    "lbl":"Option 3",
    "tag":"input",
    "val":"",
    "type":"text",
    //"isRequired":true,
    //"criteria":["SpecialCharsNotAllowed"]
    "criteria":[]
},
{
    "name":"opt4",
    "lbl":"Option 4",
    "tag":"input",
    "val":"",
    "type":"text",
    //"isRequired":true,
    //"criteria":["MinFiveMaxTenChars"]
    "criteria":[]
},

{
    "name":"type",
    "lbl":"Type",
    "tag":"input",
    "val":"",
    "type":"radio",
    "options":["Single","Multiple"],
    "values":["S","M"],
    "isRequired":true,
    "criteria":[]

},
{
    "name":"ans",
    "lbl":"Answer",
    "tag":"select",
    "val":"",
    "options":["A","B","C","D","AB","AC","AD","BC","BD","CD","ABC","ABD","ACD","BCD","ABCD"],
    "isRequired":true,
    "criteria":[]
}
]