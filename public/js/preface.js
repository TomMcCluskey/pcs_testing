$(function(){
	function refreshExports() {
		//console.log(this.value);
		$.get('/notes/'+this.value+'.md')
		 .done(function(res){
			$('#exports').val(res);
		 })
		 .fail(function(res){
		 	$('#exports').val('');
		 })
	}
	$('#testSelector').change(refreshExports).trigger('change');
})
