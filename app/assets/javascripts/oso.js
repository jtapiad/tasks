$(document).ready(function() {
var oso = $("a[href='/tasks/new']");
$("a[href='/tasks/new']").remove();
$("#aqui").append(oso);

});