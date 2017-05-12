$( document ).ready(function() {
  $('#searchtable').hide();

});
$("#searchloccation").on("keyup change",function() {
  var loc = $('#searchloccation').val().toLowerCase();
  $.post( "/search/", { location: loc})
    .done(function( data ) 
      {       
        $('#searchtable').show();
        $("#searchlength").text(data.length);
        $("#searchcity").text(loc);
        var xL = data.length;
        var html = "";
      for(i=0; i<xL; i++){
        if(data[i].priority==0) {
        html = html + '<tr class="trtags up"><td><a class="link" href="detailedproperty/'+data[i].timestamp+'"><span class="pr_fr_hi">'+data[i].priority+'</span> <img class="primg" src="/images/premium.jpg"> View More</a></td><td>  '+data[i].fulladdress+'</td><td> '+data[i].cost+' USD</td><td>'+data[i].area+' SQ Feet</td><td>'+data[i].bedroom+' rooms</td></tr>';

        }else{
        html = html + '<tr class="trtags"><td><a class="link" href="detailedproperty/'+data[i].timestamp+'"><span class="pr_fr_hi">'+data[i].priority+'</span> View More</a></td><td> '+data[i].fulladdress+'</td><td> '+data[i].cost+' USD</td><td>'+data[i].area+' SQ Feet</td><td>'+data[i].bedroom+' rooms</td></tr>';
        }
        }
        $("#displaysearch").empty();
        var temp = '<table width="100%" id="example1"><thead><tr><th>View more</th><th>Address</th><th>Price</th><th>Area</th><th>Bedroom</th></tr></thead><tbody id="displaysearch">'+html+'</tbody></table>';
        $('#showsearch').html(temp);
        $('#example1').dataTable({"sPaginationType": "full_numbers", "oLanguage": {
            "sSearch": "FILTER:",
            "order": [[ 1, "asc" ]]
          },"bDestroy": true, "iDisplayLength": 10});
            $(".dataTables_length select").addClass("selectEntry").attr("placeholder", "Filter search").append('<br><br><br><br>');
        $(".dataTables_filter input").addClass("searchInput").attr("placeholder", "Filter search");;
        });

});