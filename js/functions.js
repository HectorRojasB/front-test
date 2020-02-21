
function update() { 
    var element = document.getElementById("myprogressBar");    
    var width = 1; 
    var identity = setInterval(scene, 5); 
    function scene() { 
      if (width >= 100) { 
        clearInterval(identity); 
      } else { 
        width= width+0.5;  
        element.style.width = width + '%';  
      } 
    } 
  } 

function next($q){
    this.update();
    document.getElementById($q).style.display = "none";
    document.getElementById($q+1).style.display = "block";

    if($q=="4")
    {
        this.end();
    }
}

function isPalindrome(str){
    var normalized = str.toLowerCase().match(/[a-z]/gi).reverse();
    return normalized.join('') === normalized.reverse().join('');
}

function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
    return joinArray; 
}

function checkTech(){
    if(document.getElementById('tech1').checked == true)
    {
        document.getElementById('result2').innerHTML += "AngularJS is correct<br />";
    }

    if(document.getElementById('tech2').checked == true)
    {
        document.getElementById('result2').innerHTML += "Ember is correct<br />";
    }

    if(document.getElementById('tech3').checked == true)
    {
        document.getElementById('result2').innerHTML += "VueJS is correct<br />";
    }

    if(document.getElementById('tech4').checked == true)
    {
        document.getElementById('result2').innerHTML += "Java is Not correct<br />";
    }
    
    if(document.getElementById('tech5').checked == true)
    {
        document.getElementById('result2').innerHTML += "C# is Not correct";
    }
}

function checkPali(){
    var pali = document.getElementById("palindrome").value;

    document.getElementById('result3').innerHTML += "you said: " + pali;

    if(this.isPalindrome(pali)){
        document.getElementById('result3').innerHTML += ", and it IS a palindrome!"
    }else{
        document.getElementById('result3').innerHTML += ", and that it NOT a palindrome :("
    }
}


function end()
{
    document.getElementById('result1').innerHTML = document.getElementById("q1").value;
    //check tech
    this.checkTech();
    this.checkPali();

    var original = document.getElementById("sentence").value ;
    var reverse = document.getElementById("reverse").value ; 
    document.getElementById('result4').innerHTML +="Original: "+ original;
    document.getElementById('result4').innerHTML +="<br>"
    document.getElementById('result4').innerHTML +="Reverse: "+ reverse ;
    document.getElementById('result4').innerHTML +="<br>"


    if((this.reverseString(original) == reverse))
    {
        document.getElementById('result4').innerHTML += "it IS a palindrome"
    }
    else{
        document.getElementById('result4').innerHTML += "it's NOT a palindrome"
    }

    alert("Select your favorite San Diego restaurant");
    document.getElementById("restaurants").style.display = "block";
}

