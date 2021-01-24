export const SEARCH = (e)=>{
    
    var listItems = document.querySelectorAll(".item");

    const matchText = (textEntered, listItem) =>{
        var textToMatch =  new RegExp(`${textEntered.toLowerCase()}`);
        var report = textToMatch.test(listItem.toLowerCase());
    
        return report
    }

    const displayResult = () => {
        listItems.forEach(each =>{
           const isAMatch = matchText(e.target.value, each.innerText)
          if(isAMatch){
              each.parentElement.style.display = "block";
          }else{
              each.parentElement.style.display = "none"
          }
        })
    }

    const showListItems = () =>{
        listItems.forEach(each => {
            each.parentElement.style.display = "block";
        })
    }
    
    if(e.target.value === ""){
        showListItems()
    }
    else{
        displayResult()
    }
}