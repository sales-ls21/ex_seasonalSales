var Products = (function(){
  var offerings = [];
  var sections = [];

  return {
    loadOfferings: function(callback){
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function() {
        offerings = JSON.parse(this.responseText);
        callback(offerings);
      });
      loader.open("GET", "products.json");
      loader.send();
    },

    loadSections: function(functionCall){
      var secLoad = new XMLHttpRequest();
      secLoad.addEventListener("load", function(){
        sections = JSON.parse(this.responseText);
        functionCall(sections);
      });
      secLoad.open("GET", "categories.json")
      secLoad.send();
    }
  }
})();