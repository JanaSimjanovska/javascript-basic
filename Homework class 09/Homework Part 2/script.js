

$(document).ready(function(){

    console.log(`HELLO!!!`)

    let userText = $('#parInput').first();
    
    let userColor = $('#colInput').first();
    
    let button = $('#btn').first();
    
    let resHead = $('#resHeader').first();
    
    console.log(userText, userColor, button, resHead);
    
    
    function checkIfColor(inputColor){
        let check = new Option().style; // Proverkava ja najdov na SO, ne mi e skroz jasno kako raboti, t.e. ne mi e poznato ova new Option().style    celovo, ama go modificirav toa so go najdov kako sto mi odgovara i da mi pravi toa sto mi treba, i raboti, pa se nadevam e vo red.
        check.color = inputColor;
        if(inputColor.length == 0){
            alert `The color of your header will be black, as this is the default color.`
        } else {
            if(check.color != inputColor){
                alert `You must enter a valid color name, e.g. red, green, blue...`
            } else {
                return inputColor;
            }
        }       
    }

      
    function check1(userText, element) {
        if(userText.length == 0){
            console.log(`tuka sum`);
            alert `Can't leave text area empty!!`
        } else {
            console.log(`sea tuka sum`);
            element.html(`<span id="resHeaderSpan">${userText}</span>`); // Mu staviv span so id za da probam da go stiliziram so css, procitav deka taka bi mozelo, ama ne mi raboti, ne znam zosto, ako znaete, do tell :)
        }
    }
    
      
    button.click(function(){
    
        check1(userText.val(), resHead);
        
        resHead.css('color', checkIfColor(userColor.val()));
    
    })
      

})


