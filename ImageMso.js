function myItemFunc(text, input){
  return Awesomplete.$.create("li", {
    innerHTML: text.replace(RegExp(input.trim(), "gi"), "<mark>$&amp;</mark>"),
    "aria-selected": "false"
  });
}
var input = document.getElementById("countries");
var awesomplete = new Awesomplete(input, {
  item: myItemFunc
});