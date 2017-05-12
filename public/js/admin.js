$(document).on("click",".admintype",function() { 
	var userid = $(this).attr('id');
	var name = $('#a-name-'+userid).text();
	var phone = $('#a-phone-'+userid).text();  
	var email = $('#a-email-'+userid).text();
	$.post( "/admintouser/", { id: userid})
	  .done(function( data ) {
	    $( ".a-td-"+userid ).addClass('animated bounceOutRight');
	    $( "#users").before('<tr class="u-td-'+userid+'">'+
                                    '<td><p id="u-name-'+userid+'">'+name+'</p></td>'+
                                    '<td><p id="u-phone-'+userid+'">'+phone+'</p></td>'+
                                    '<td><p id="u-email-'+userid+'">'+email+'</p></td>'+
                                    '<td><a class="usertype" id="'+userid+'"> user</td>'+
                                '</tr>');
	  });
});
$(document).on("click",".usertype",function() { 
	var userid = $(this).attr('id');
	var name = $('#u-name-'+userid).text();
	var phone = $('#u-phone-'+userid).text();  
	var email = $('#u-email-'+userid).text();
	$.post( "/admintouser/", { id: userid})
	  .done(function( data ) {
	    $( ".u-td-"+userid ).addClass('animated bounceOutLeft');
	    $( "#admins").before('<tr class="a-td-'+userid+'">'+
                                    '<td><p id="a-name-'+userid+'">'+name+'</p></td>'+
                                    '<td><p id="a-phone-'+userid+'">'+phone+'</p></td>'+
                                    '<td><p id="a-email-'+userid+'">'+email+'</p></td>'+
                                    '<td> <a class="admintype" id="'+userid+'"> admin </td>'+
                                '</tr>');
	  });
});

$(document).on("click",".priority",function() { 
	var timestamp = $(this).data("id");
	if ($(this).prop('checked')==true){
        $.post( "/setpriority/", { no: 0, timestamp: timestamp}).done(function( data ) {
        	$("#status_"+timestamp).html('<img class="primg" src="/images/premium.jpg">');
        	$("#tr_"+timestamp).addClass("up");
	  	});
    }else{
    	 $.post( "/setpriority/", { no: 1, timestamp:timestamp}).done(function( data ) {
        	$("#status_"+timestamp).html("Degraded");
        	$("#tr_"+timestamp).removeClass("up");
	  	});
    }
});