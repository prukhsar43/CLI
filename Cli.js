const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
  });
  const bankData = {}
  
  function BankApplication(){
    readline.question(`What is your name?\n`, name=>{
      bankData.name = name;
  
      
      deposit(function(money){
        bankData.money = money
  
        
        withDraw(function(withDraw){
          bankData.withDraw = withDraw
  
          
          currBalance(function(currBalance, cb){
            bankData.currBalance = currBalance
            
            if(readline.input=="yes"){
            console.log("you have only $800 left")
            }
            else if(readline.input==="no"){
            console.log("Okh Dear..")
            }
            else{
              console.log("Type yes or no.")
              }
          })
        })
      })
    })
  }
  
  
  
  function deposit(cb){
    readline.question(`How much money u want to deposit?\n`, money =>{
      money,
        cb(money)
    })
  }
  
  
  
  function withDraw(cb){
    readline.question(`How much money u want to withDraw?\n`, withDraw =>{
      withDraw,
        cb(withDraw)
    })
  }
  
  
  function currBalance(cb){
    readline.question(`Do u want to know ur balance?\n`, currBalance =>{
      currBalance,
        cb(currBalance)
    })
  }
  
  
  BankApplication()