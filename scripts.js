const result = document.getElementById('result')
const output = document.getElementById('output')
const delstr = document.getElementById('delstrok')
const delall = document.getElementById('delall')
const delone = document.getElementById('del')
const one = document.getElementById('one')
const two = document.getElementById('two')
const tree = document.getElementById('tree')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const divide = document.getElementById('divide')
const multiply = document.getElementById('multiply')
const plusminus = document.getElementById('plusminus')
const dot = document.getElementById('dot')
const eqval = document.getElementById('eqval')
let condition = false
// function description
const plmi = () =>{
    if(result.value>0){
        result.value = "-" + result.value
    }
    else if (result.value<0){
        result.value = Math.abs(result.value)
    }
}
const point = () =>{
    if (result.value.indexOf('.')==-1 && result.value!=""){
    result.value = result.value + "."
    }
    else{
        result.value = result.value
    }

}
const calc = () => {
    condition = true
    const value = output.innerHTML + result.value
    if (result.value =="result is undefined"){
        result.value ="0"
    }
    else if (result.value==""){
        result.value="0"
    }
    else if (eval(value)==Infinity){
        result.value = "cannot be divided"
    }
    else if (isNaN(eval(value))){
        result.value = "result is undefined"
    }
    else if (eval(value)==undefined){
        result.value = "0"
    }
    else{
        result.value = (Math.round(eval(value)*10000000)/10000000)
    }
    output.innerHTML = ""
}
const number = (num) => {
    if(condition){
        result.value= num
        condition=false
    }
    else{
    if (num=="0" && result.value=="0"){
        result.value=result.value
    }
    else if (result.value=="0" && num!="0"){
        result.value=num
    }
    else{
        result.value +=num;
    }
}
}
const delAct = (index) =>{
    switch(index) {
        case 0:
            result.value = ""
          break
        case 1:
            result.value = "0"
            output.innerHTML = ""
          break
        case 2: 
        result.value = result.value.slice(0,-1)
          break
        }
}
const action = (element) => {
    if (result.value=="result is undefined" || result.value=="cannot be divided"){
    result.value=""
    output.innerHTML=""}
    if (result.value==""){
        result.value = 0
        const act = element.innerHTML
        output.innerHTML += (result.value += ` ${act}`)
        result.value = "0";
}
    else {
        const act = element.innerHTML
        const num =result.value
        output.innerHTML += (result.value += ` ${act}`)
        result.value = num;
        condition=true
}
}
// function application
const array = [
    zero, one, two, tree, four, five, six, seven, eight, nine
]
for (let i=0; i<array.length; i++){
    array[i].addEventListener('click',() => number(i))
}
const arraytwo = [plus, minus, multiply, divide]
for (let i=0; i<arraytwo.length; i++){
    arraytwo[i].addEventListener('click',()=> action(arraytwo[i]))
}
const arraytree = [delstr,delall,delone]
for (let i=0; i<arraytree.length; i++){
    arraytree[i].addEventListener('click',()=> delAct(i))
}
equal.addEventListener('click',() => calc())
dot.addEventListener('click',() => point())
plusminus.addEventListener('click',() => plmi())
//keyboard input
document.addEventListener('keydown', function(event) {
    if((event.key >= 0) && (event.key <= 9)){
        number(event.key)
        }
      else if (event.key == "+"){
          action(arraytwo[0])
        } 
      else if(event.key == "-"){
          action(arraytwo[1])
        }
      else if(event.key == "*"){
          action(arraytwo[2])
        }
      else if(event.key == "/"){
          action(arraytwo[3])
        }
      else if (event.key == "Backspace"){
          delAct(2)
        } 
      else if (event.key == "Delete"){
          delAct(0)
        }
      else if (event.key == "Enter"){
          calc()
          event.preventDefault()
        }
      else if (event.key == "." ){
          point()
        }
})