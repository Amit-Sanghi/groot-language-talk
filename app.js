var btnTranslate = document.querySelector("#translate")
var inputtxt = document.querySelector("#txt-input")
var outputtxt = document.querySelector("#output")

var url ="https://api.funtranslations.com/translate/groot.json"

function serverURL(text) {
        return url + "?" + "text=" + text
}

function errorHandler(){
    console.log("error occured", error)
    alert("something went wrong")
}

function clickHandler(){
    console.log("clicked!")
    var text = inputtxt.value
    
    fetch(serverURL(text))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated
        outputtxt.innerText = translatedText
    })
    .catch(errorHandler)

}

document.getElementById("translate").addEventListener("click", clickHandler)
