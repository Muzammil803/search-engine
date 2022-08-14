function generateHtml(image, name, colors, price, camera) {
    var div = document.createElement("div");
    div.className += "cart"
    var image1 = document.createElement("img")
    image1.src = image

    var h2 = document.createElement("h2");
    var h2Text = document.createTextNode(name);
    h2.appendChild(h2Text);
    var h4 = document.createElement("h4");
    var h4Text = document.createTextNode(colors);
    h4.appendChild(h4Text);
    var h6 = document.createElement("h4");
    var h6Text = document.createTextNode(price);
    h6.appendChild(h6Text);
    var span = document.createElement("h4");
    var spanText = document.createTextNode(camera);
    span.appendChild(spanText);
    div.appendChild(image1)
    div.appendChild(h2);
    div.appendChild(h4);
    div.appendChild(h6);
    div.appendChild(span);

    return div;
}

generateHtml();

var mobiles = {
    iphone: {
        iphonex: {
            image: "iphonex.jpg",
            name: "Iphone x",
            colors: ["red", "white", "silver"],
            camera: 12 + "MP",
            price: 80000 + "PKR",
        },
        iphone6: {
            image: "iphone6.jpg",
            name: "Iphone 6",
            colors: ["golden", "black", "silver"],
            camera: 19 + "MP",
            price: 29999 + "PKR",
        },
        iphone10: {
            image: "iphone10.jpg",

            name: "Iphone 10",
            colors: ["golden", "black", "silver"],
            camera: 70 + "MP",
            price: 110000 + "PKR",



        },
        iphone13: {
            image: "iphone13.jpg",

            name: "Iphone 13 Pro",
            colors: ["golden", "black", "silver"],
            camera: 110 + "MP",
            price: 440000 + "PKR",



        }
    },

    samsung: {
        samsungs8: {
            image: "smasungs8.jpg",
            name: "Samsung S8",
            colors: ["red", "white", "silver"],
            camera: 32 + "MP",
            price: 83000 + "PKR",
        },
        samsungs10: {
            image: "smasungs10.jpg",
            name: "Samsung S10",
            colors: ["golden", "black", "silver"],
            camera: 48 + "MP",
            price: 9999 + "PKR",
        },
        samsungs21: {
            image: "smasungs21.jpg",

            name: "Samsung S21",
            colors: ["golden", "black", "silver"],
            camera: 70 + "MP",
            price: 130000 + "PKR",



        },
        samsunga51: {
            image: "smasungsa51.jpg",

            name: "Samsung A51",
            colors: ["golden", "black", "silver"],
            camera: 80 + "MP",
            price: 70000 + "PKR",



        }
    },
    infinix: {
        infinixnote8: {
            image: "infinixnote8.jpg",
            name: "Infinix Note 8",
            colors: ["red", "white", "silver"],
            camera: 32 + "MP",
            price: 83000 + "PKR",
        },
        infinixnote9: {
            image: "infinixnote9.jpg",
            name: "Infinix Note 9",
            colors: ["golden", "black", "silver"],
            camera: 48 + "MP",
            price: 9999 + "PKR",
        },
        infinixnote10: {
            image: "infinixnote10.jpg",

            name: "Infinix Note 10",
            colors: ["golden", "black", "silver"],
            camera: 70 + "MP",
            price: 130000 + "PKR",



        },
        infinixnote12: {
            image: "infinixnote12.jpg",

            name: "Infinix Note 12",
            colors: ["golden", "black", "silver"],
            camera: 80 + "MP",
            price: 70000 + "PKR",



        }
    },


};

var result = mobiles["iphone"]["iphonex"];
var result1 = mobiles["iphone"]["iphone6"];
var result2 = mobiles["iphone"]["iphone10"];
var result3 = mobiles["iphone"]["iphone13"];
var result4 = mobiles["samsung"]["samsungs8"]
var result5 = mobiles["samsung"]["samsungs10"]
var result6 = mobiles["samsung"]["samsungs21"]
var result7 = mobiles["samsung"]["samsunga51"]
var result8 = mobiles["infinix"]["infinixnote8"]
var result9 = mobiles["infinix"]["infinixnote9"]
var result10 = mobiles["infinix"]["infinixnote10"]
var result11 = mobiles["infinix"]["infinixnote12"]
console.log(result)
var main = document.getElementById("main");
// var image = document.createElement("img")
// image.src="iphonex.jpg"
// main.appendChild(image)

main.appendChild(
    generateHtml(result.image, result.name, result.colors, result.camera, result.price)
);

main.appendChild(
    generateHtml(result1.image, result1.name, result1.colors, result1.camera, result1.price)

)

main.appendChild(
    generateHtml(result2.image, result2.name, result2.colors, result2.camera, result2.price)

)

main.appendChild(
    generateHtml(result3.image, result3.name, result3.colors, result3.camera, result3.price)

)

main.appendChild(
    generateHtml(result4.image, result4.name, result4.colors, result4.camera, result4.price)

)
main.appendChild(
    generateHtml(result5.image, result5.name, result5.colors, result5.camera, result5.price)

)
main.appendChild(
    generateHtml(result6.image, result6.name, result6.colors, result6.camera, result6.price)

)
main.appendChild(
    generateHtml(result7.image, result7.name, result7.colors, result7.camera, result7.price)

)

main.appendChild(
    generateHtml(result8.image, result8.name, result8.colors, result8.camera, result8.price)

)


main.appendChild(
    generateHtml(result9.image, result9.name, result9.colors, result9.camera, result9.price)

)
main.appendChild(
    generateHtml(result10.image, result10.name, result10.colors, result10.camera, result10.price)

)
main.appendChild(
    generateHtml(result11.image, result11.name, result11.colors, result11.camera, result11.price)

)




// SEARCHING WORK   /////



function abc() {
    var select = document.getElementById("select")
    var selecttext = select.options[select.selectedIndex].text;
    console.log(selecttext)
    var input = document.getElementById("input")
    var search = document.getElementById("search")
    var answer = mobiles[selecttext][input.value]
    var ans = document.getElementById("ans")
    ans.style.display = "flex"
    ans.appendChild(
        generateHtml(answer.image, answer.name, answer.colors, answer.camera, answer.price)

    )

}


function inputclick() {
    var ans = document.getElementById("ans")
    ans.innerHTML = ""
    ans.style.display = "none"
}