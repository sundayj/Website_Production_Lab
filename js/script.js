// JavaScript source code
var stateBtn = document.getElementById("statebtn");

var FYIstates = {
    "linesofbusiness": [
        {
            "name": "General Liability",
            "discountstate": "South Carolina",
            "discount": "20%"
        },
        {
            "name": "Worker's Compensation",
            "discountstate": "Georgia",
            "discount": "15%"
        },
        {
            "name": "Fire, Theft, Property",
            "discountstate": "Connecticut",
            "discount": "8%"
        },
        {
            "name": "Inland Marine",
            "discountstate": "Connecticut",
            "discount": "12%"
        }
    ]
};

function showInfo()
    {
        "use strict";
        
        var showDis = document.getElementById("showdiscounts"),
            infoLoop = FYIstates.linesofbusiness.length,
            i,
            j;
        
        for (i = 0; i < infoLoop; i++)
            {
                j = i + 1
                alert("Line of Business: " + FYIstates.linesofbusiness[i].name + "\n" + "State: " + FYIstates.linesofbusiness[i].discountstate + "\n" + "Discount: " + FYIstates.linesofbusiness[i].discount + "\n \n" + "            (" + j + " of 4)");
            }
    }
stateBtn.addEventListener("click", showInfo, false);


//The following was a part of the javascript lab project ha we commented out for the main website lab.
//function discountRoll()
//{
//    "use strict";
//    showDis.innerHTML = "Show me the Discounts!" + "\n";
//    var infoLoop = FYIstates.linesofbusiness.length, i;
//    for (i = 1; i < infoLoop; i++)
//    {
//        if (FYIstates.linesofbusiness[i].name === "Worker's Compensation") {
//            showDis.innerHTML += '<p style= "color: red;">' + i + '. Line of Business: ' + FYIstates.linesofbusiness[i].name + '<br/>State: ' + FYIstates.linesofbusiness[i].discountstate + '<br/>Discount: ' + FYIstates.linesofbusiness[i].discount;
        
//        } else if (FYIstates.linesofbusiness[i].name === "General Liability") {
//            showDis.innerHTML += '<p style= "background-color: goldenrod;">' + i + '. Line of Business: ' + FYIstates.linesofbusiness[i].name + '<br/>State: ' + FYIstates.linesofbusiness[i].discountstate + '<br/>Discount: ' + FYIstates.linesofbusiness[i].discount;
        
//        } else {
//            showDis.innerHTML += '<p>' + i + '. Line of Business: ' + FYIstates.linesofbusiness[i].name + '<br/>State: ' + FYIstates.linesofbusiness[i].discountstate + '<br/>Discount: ' + FYIstates.linesofbusiness[i].discount;
//        }

//    }
//};

//function discountRollBack()
//{
//    "use strict";
//    showDis.innerHTML = "Show me the Discounts!" + "\n";
//}
