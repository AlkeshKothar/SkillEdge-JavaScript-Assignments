function country_function() {
    var a = document.getElementById("input").value;
    if (a === "India") {
        var arr = ["Select State", "Maharashtra", "Madya-Pradesh", "Gujrat", "Rajasthan"];
    } else if (a === "USA") {
        var arr = ["Select State", "Washington", "Texas", "Florida", "Hawaii"];
    }
    var string = "";

    for (i = 0; i < arr.length; i++) {
        string = string + "<option value=" + arr[i] + ">" + arr[i] + "</option>";
    }
    document.getElementById("output").innerHTML = string;
}

function state_function() {
    var a = document.getElementById("output").value;
    if (a === "Maharashtra") {
        var arr1 = ["Select City", "Pune", "Mumbai", "Nashik", "Nagpur"];
    } else if (a === "Madya-Pradesh") {
        var arr1 = ["Select City", "Bhopal", "Jalbalpur", "Itarsi", "Indore"];
    } else if (a === "Gujrat") {
        var arr1 = ["Select City", "Ahemdabad", "Rajkot", "Kaach", 'Anand'];
    } else if (a === "Rajasthan") {
        var arr1 = ["Select City", "Ajmer", "Jaipur", "Kota"];
    } else if (a === "Washington") {
        var arr1 = ["Select City", "Seattle", "Tacoma", "Yakima", "Richland"];
    } else if (a === "Texas") {
        var arr1 = ["Select City", "Houstan", "Austin", "Dallas"];
    } else if (a === "Florida") {
        var arr1 = ["Select City", "Miami", "Destin", "Florida City"];
    } else if (a === "Hawaii") {
        var arr1 = ["Select City", "Hilo", "Hawi", "Kapolie"];
    }


    var string2 = "";

    for (i = 0; i < arr1.length; i++) {
        string2 = string2 + "<option value=" + arr1[i] + ">" + arr1[i] + "</option>";
    }
    document.getElementById("output2").innerHTML = string2;
}