disPrice = function () {
  var num1 = document.getElementById("price").value;
  var num2 = document.getElementById("discount").value;
  var disAmt = document.getElementById("disAmount");
  var final = document.getElementById("total");

  disAmt.value = (num1 * num2) / 100;
  final.value = num1 - disAmt.value;
}
function Reset() {
  document.getElementById("price").value = " ";
  document.getElementById("discount").value = " ";
  document.getElementById("disAmount").value = " ";
  document.getElementById("total").value = " ";
}
