function checkPalindrome(){
    var revStr = "";
    var str = document.getElementById("palindrome").value;
    // var i = str.length;
    for(var j=str.length -1  ; j>=0; j--){
        console.log(str[j]);
        revStr = revStr + str[j];
    }
    if(str.toLowerCase() == revStr.toLowerCase()){
        alert(str+" is Palindrome");
    }else{
        alert(str+" is not Palindrome");
    }
}
