 $(document).ready(function(){
        
        $('#random').click(function(){
            var randomSearch="https://en.wikipedia.org/wiki/Special:Random";
            window.open(randomSearch); 
        });
        $('#help').click(function(){
            var helpPage="help.html";
            window.open(helpPage);
        });
        $("#searchButton").click(function(){
            var q =$("#searchbox").val();
            $.getJSON("http://en.wikipedia.org/w/api.php?callback=?",
                      {
                srsearch:q,
                action:"query",
                list:"search",
                format:"json"
                
            },
                      function(data){
                $("#results").empty();
                
            $.each(data.query.search,function(i,item){
                     $("#results").append("<div id='resultDiv' class='center'>"+ item.title  + " " + item.snippet +  " ...<a href='http://en.wikipedia.org/wiki/"+ encodeURIComponent(item.title)+ " '> more</a>" + "</div>");
            });
                
            
        }); 
        
    });
       
    });
    
    
    
    
    
     
    
    