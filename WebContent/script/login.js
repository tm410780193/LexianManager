$(function () {
	$('#j-sigin-btn').on('click', function(event) {
		event.preventDefault();
		var username = $('username').val();
		var pwd = $('password').val();
		$.get('/manager/signIn.do', function(data) {
			alert(data);
			console.log(data);
		});
	});
});