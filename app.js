onload= function(){
    var httpRequest = new XMLHttpRequest();
    var searchbutton= document.getElementById("btn");
    var hero= document.getElementById("textbox");
    var sults= document.getElementById("result")
    searchbutton.addEventListener('click',event => {
        var url = "superheroes.php?paramq="+hero.value;

        httpRequest.onreadystatechange = doSomething;
        httpRequest.open('GET', url);
        httpRequest.send();
    })


    
    function doSomething() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                sults.innerHTML= response;
                console.log(response)
                // alert(response);
            } else {
                console.log(response)
                // alert('There was a problem with the request.');
                sults.innerHTML= "There was a problem with the request.";
            }
        }
    }  

}
