function productPull(offerings) {
  var productListing= "";
  var productLoc = offerings.products;
  // console.log(productLoc);

  for (var i = 0; i < productLoc.length; i++){
      productListing += "<div class = 'card'>" + "<p class='ident'>" + productLoc[i].id + "</p>" + "<p class='name'>" + productLoc[i].name + "</p> " +
      "<p class='price'>" + productLoc[i].price + "</p> " + "<p class='kind'>" + productLoc[i].category_id + "</p>" + "</div>";
      document.getElementById("productDiv").innerHTML = productListing;
      // console.log(productListing);
  }
};



Products.loadOfferings(productPull);
var secId = "";
var secName = "";
var season = "";
var discount = " ";

function sectionPull(sections){
  var offeringLoc = sections.categories;
  for (var i = 0; i < offeringLoc.length; i++){
    secId = offeringLoc[i].id;
    secName = offeringLoc[i].name;
    season = offeringLoc[i].season_discount;
    discount = offeringLoc[i].discount;
  }
};

Products.loadSections(sectionPull);
var select = document.getElementById("select");
select.addEventListener("change", showDiscounts);


function showDiscounts () {
	if (select.value === "Winter") {
		for (var i = 0; i < document.getElementsByClassName("kind").length; i++){
			if(document.getElementsByClassName("kind")[i].innerHTML === "1"){
				var winterPrice = Number(document.getElementsByClassName("price")[i].innerHTML) - (Number(document.getElementsByClassName("price")[i].innerHTML) * .10);
				document.getElementsByClassName("price")[i].innerHTML = winterPrice.toFixed(2);
			}	

		} 
  } else if (select.value === "Spring"){
			for (var i = 0; i < document.getElementsByClassName("kind").length; i++){
        if(document.getElementsByClassName("kind")[i].innerHTML === "2"){
        var springPrice = Number(document.getElementsByClassName("price")[i].innerHTML) - (Number(document.getElementsByClassName("price")[i].innerHTML) * .25);
        document.getElementsByClassName("price")[i].innerHTML = springPrice.toFixed(2);
        } 
		  }
    } else if (select.value === "Fall"){
      for (var i = 0; i < document.getElementsByClassName("kind").length; i++){
      if(document.getElementsByClassName("kind")[i].innerHTML === "3"){
        var fallPrice = Number(document.getElementsByClassName("price")[i].innerHTML) - (Number(document.getElementsByClassName("price")[i].innerHTML) * .15);
        document.getElementsByClassName("price")[i].innerHTML = fallPrice.toFixed(2);
      } 
      }
    }
    else alert("There are no discounts available.");

}


	
