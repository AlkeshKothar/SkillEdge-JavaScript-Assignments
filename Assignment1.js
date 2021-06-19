// grabbing all buttons
const submitbtn = document.getElementById('pbtn1')
const resetbtn = document.getElementById('pbtn2')
const clearbtn = document.getElementById('pbtn3')

// grabbing all textfeidl note: all text feild is text11
const text11 = document.querySelector('.ptext1')
const text22 = document.querySelector('.ptext2')
const text33 = document.querySelector('.ptext3')
const text44 = document.querySelector('.ptext4')


showData(); // used to show Data if we already have entries
//event for submit
submitbtn.addEventListener('click', function() {

    let addtext1 = text11.value;
    let addtext2 = text22.value;
    let addtext3 = "Rs " + text33.value;
    let addtext4 = text44.value;

    if (addtext1 == "" || addtext2 == "" || addtext3 == "" || addtext4 == "") {
        alert("All Feilds are required\nUse NA if not data available")

    } else {
        // Create local starge for 

        // for ID
        let productId = localStorage.getItem('productId');
        if (productId == null) {
            productIdObj = [];
        } else {
            productIdObj = JSON.parse(productId);
        }
        productIdObj.push(addtext1);
        localStorage.setItem('productId', JSON.stringify(productIdObj));

        // for name

        let productName = localStorage.getItem('productName');
        if (productName == null) {
            productNameObj = [];
        } else {
            productNameObj = JSON.parse(productName);
        }
        productNameObj.push(addtext2);
        localStorage.setItem('productName', JSON.stringify(productNameObj));

        // for price

        let productPrice = localStorage.getItem('productPrice');
        if (productPrice == null) {
            productPriceObj = [];
        } else {
            productPriceObj = JSON.parse(productPrice);
        }
        productPriceObj.push(addtext3);
        localStorage.setItem('productPrice', JSON.stringify(productPriceObj));

        // for descrp

        let productDescription = localStorage.getItem('productDescription');
        if (productDescription == null) {
            productDescriptionObj = [];
        } else {
            productDescriptionObj = JSON.parse(productDescription);
        }
        productDescriptionObj.push(addtext4);
        localStorage.setItem('productDescription', JSON.stringify(productDescriptionObj));
        showData();
        let text1 = text11.value = "";
        let text2 = text22.value = "";
        let text3 = text33.value = "";
        let text4 = text44.value = "";
    }
})

function showData() {
    // to show, we loop from only ID, and we can parse other array using stringy, hence one loop fixes all
    let productId = localStorage.getItem('productId');
    let productName = localStorage.getItem('productName');
    let productPrice = localStorage.getItem('productPrice');
    let productDescription = localStorage.getItem('productDescription');
    let dataName = JSON.parse(productName);
    let dataPrice = JSON.parse(productPrice);
    let dataDescription = JSON.parse(productDescription);

    if (productId == null) {
        productIdObj = [];
    } else {
        productIdObj = JSON.parse(productId);
    }
    let html = "";

    // data is the actual data, index is the loop postion, 
    productIdObj.forEach(function(data, index) {
        html += `<div class="Panswers finallist" id="addinghtml" style= "height: 35px" >
        <div style="float: left; width: 15%;   text-align: center;">${data}</div>
        <div style="float: left; width: 15%;  text-align: center;"> ${dataName[index]}</div>
        <div style="float: left; width: 20%;  text-align: center;">${dataPrice[index]}</div>
        <div style="float: left; width: 40%; overflow: auto;  text-align: center;"><textarea disabled style= "height: 30px ; border: none; resize: none; background-color: aliceblue; width: 80%; disabled">${dataDescription[index]}</textarea></div>
        <button id="${index}" onclick="deleteEntry(this.id)" class="deletebtn" style="background-color: lightslategray; border-radius: 2px; width: 9%;">Delete</button>
        </div>`;
    })
    var div = document.getElementById('addinghtml')
    div.innerHTML = html;
}

function deleteEntry(index) {

    //for id delete
    let productId = localStorage.getItem('productId');
    if (productId == null) {
        productIdObj = [];
    } else {
        productIdObj = JSON.parse(productId);
    }
    productIdObj.splice(index, 1)
    localStorage.setItem('productId', JSON.stringify(productIdObj));

    //for name delete
    let productName = localStorage.getItem('productName');
    if (productName == null) {
        productNameObj = [];
    } else {
        productNameObj = JSON.parse(productName);
    }
    productNameObj.splice(index, 1)
    localStorage.setItem('productName', JSON.stringify(productNameObj));

    // for price delete
    let productPrice = localStorage.getItem('productPrice');
    if (productPrice == null) {
        productPriceObj = [];
    } else {
        productPriceObj = JSON.parse(productPrice);
    }
    productPriceObj.splice(index, 1)
    localStorage.setItem('productPrice', JSON.stringify(productPriceObj));

    // for Description
    let productDescription = localStorage.getItem('productDescription');
    if (productDescription == null) {
        productDescriptionObj = [];
    } else {
        productDescriptionObj = JSON.parse(productDescription);
    }
    productDescriptionObj.splice(index, 1)
    localStorage.setItem('productDescription', JSON.stringify(productDescriptionObj));
    showData();
}



//event for reset button
resetbtn.addEventListener('click', function() {
    let text1 = text11.value = "";
    let text2 = text22.value = "";
    let text3 = text33.value = "";
    let text4 = text44.value = "";
});

clearbtn.addEventListener("click", function() {
    if (confirm('Are you sure you want to Delete all entries permanently?')) {
        let productId = localStorage.getItem('productId');
        if (productId == null) {
            productIdObj = [];
        } else {
            productIdObj = JSON.parse(productId);
        }
        productIdObj.splice(0)
        localStorage.setItem('productId', JSON.stringify(productIdObj));

        //for name delete
        let productName = localStorage.getItem('productName');
        if (productName == null) {
            productNameObj = [];
        } else {
            productNameObj = JSON.parse(productName);
        }
        productNameObj.splice(0)
        localStorage.setItem('productName', JSON.stringify(productNameObj));

        // for price delete
        let productPrice = localStorage.getItem('productPrice');
        if (productPrice == null) {
            productPriceObj = [];
        } else {
            productPriceObj = JSON.parse(productPrice);
        }
        productPriceObj.splice(0)
        localStorage.setItem('productPrice', JSON.stringify(productPriceObj));

        // for Description
        let productDescription = localStorage.getItem('productDescription');
        if (productDescription == null) {
            productDescriptionObj = [];
        } else {
            productDescriptionObj = JSON.parse(productDescription);
        }
        productDescriptionObj.splice(0)
        localStorage.setItem('productDescription', JSON.stringify(productDescriptionObj));
        showData();
    } else {

        alert("Your Data can't be retrieved back, please take backup before Deleting.")
    }

})



//scscsc