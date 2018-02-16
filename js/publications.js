//global variables
var categories = [];

$(document).ready(function() {
    pageCategory = $('meta[name=category]').attr("content");

    //Dynamically load recent news
     $.ajax({
        type: "GET",
        url: "../data/publications.csv",
        dataType: "text",
        success: function(data) {processPublications(data);}
    });
});

function processPublications(allText) {
    arrData = parseCsv(allText);

    var rowNum = -1;
    for (var i=1; i<arrData.length; i++) {
        var data = arrData[i];

        var publication = {id:i, title:data[1], authors:data[2], publication:data[3], link:data[4], category:data[5], demo:data[6], data:data[7], software:data[8], bibtex:data[9], abstract:data[10]};

        if(!publication.title) {
            continue;
        }

        //Is this year already in the array?
        var found = false;
        for(var j=0; j<categories.length; j++) {
            if(categories[j].name==publications.category) {
                found = true;
                categories[j].publications.push(publication);
                break;
            }
        }
        if(!found) {
            var category = {name:publications.category, publications:[publication]};
            categories.push(category);
        }

        for(var i=0; i<categories.length; ++i) {
            $('#publications').append('<h2 class="featurette-heading">' + categories[i].name + '</h2>');
            for(var j=0; j<categories[i].publications.length; ++j) {
                publication = categories[i].publications[j];

                entry = showPublication(publication,true);
                $('#publications').append(entry);
            }
        }
    }
}
