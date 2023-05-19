function bigger()
{
    document.getElementById("Textfield").style.fontSize = "24pt";
}

function changeFanciness()
{
    if (document.getElementById("fancy").checked == true)
    {
        document.getElementById("Textfield").style.fontWeight = "bold";
        document.getElementById("Textfield").style.color = "blue";
        document.getElementById("Textfield").style.textDecoration = "underline";
    }
    else if (document.getElementById("boring").checked == true)
    {
        document.getElementById("Textfield").style.fontWeight = "normal";
        document.getElementById("Textfield").style.color = "black";
        document.getElementById("Textfield").style.textDecoration = "none";
    }
}

function moo()
{
    var textString = document.getElementById("Textfield").value;
    textString = textString.toUpperCase();

    var stringParts = textString.split(".");
    textString = stringParts.join("-Moo.");

    document.getElementById("Textfield").value = textString;
}