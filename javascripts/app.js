
$(document).ready(function() {
	$( ".nav-items" ).hide();

$( "thevision" ).click(function() {
  $( "nav-tems" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});
}