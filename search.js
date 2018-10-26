var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        var searchTerm = "midterm";
        var begin_date = "20180101";
        var end_date = "20181231";

        // meta response 
        var metaR;

        // docs 

        var docs;

        url += '?' + $.param({
            'api-key': "713a790bf1954fe5a4b6751836099aed",
            'q': searchTerm, // id q in HTML 
            'begin_date': begin_date, 
            'end_date': end_date,
            'sort': sort

        });
        console.log($.param({ test: "123", q: "midterm" }));
        console.log(url);
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            metaR = result.response.meta;
            docs = result.response.docs;
            console.log(docs);
            console.log(metaR);
        }).fail(function (err) {
            throw err;
        });