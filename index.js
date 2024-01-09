let userscore = 0
let computerscore = 0
let choices = document.querySelectorAll(".choice")
let userscorepara= document.querySelector("#user-score")
let compscorepara =document.querySelector("#comp-score")

let msg = document.querySelector("#msg")
const gencomputerchoice =()=>{
  const options =["rock","paper","Scissors"]
  const randindex = Math.floor(Math.random() *3)// it will give one less elements index
  return options[randindex]
}
const draw =()=>{
    console.log("game was draw")
    msg.innerText ="Game was drawn,Play again"
}
 const showwinner =(userwin,userchoice,computerchoice)=>{
    if(userwin){
        userscore ++
        userscorepara.innerText =userscore
        console.log("you win")
        msg.innerText =`you win !${userchoice} beats ${computerchoice}`
        
    }
    else{
        computerscore ++
        compscorepara.innerText = computerscore
        console.log("you lose")
        msg.innerText =`you lose !${computerchoice} beats your ${userchoice}`
    }
 }

const playgame =(userchoice)=>{
    console.log(" user choice =",userchoice)
    //generate computer choices// modular programming reusable computers
    const computerchoice = gencomputerchoice();
    console.log("computerchoice=",computerchoice)
    if(userchoice===computerchoice){
        //draw game
        draw()
    }else{
        let userwin =true;
        if(userchoice==="rock"){
          userwin  = computerchoice==='paper'?false:true

        }
        else if(userchoice==="paper"){
         userwin =computerchoice==="Scissors" ? false:true
        }else{
            userwin=computerchoice==="rock" ?false:true;
        }
        showwinner(userwin,userchoice,computerchoice)
    }
}
choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id")
        // console.log("choice has been clicked",userchoice)
        playgame(userchoice)
    })
    
})