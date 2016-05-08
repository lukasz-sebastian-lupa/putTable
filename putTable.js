(function($) {
    $.fn.putTable = function(data, convert={}, prefix={}, suffix={}, firstRow=true, firstCol=true) {
        var tbl = $("<table/>");
        for (var i = 0; i < data.length; ++i) {
            var tr = $("<tr/>").appendTo(tbl);
            if(i==0) tr.addClass('firstRow');
            for(var j = 0; j < data[i].length; ++j) {
                var td = $("<td/>").appendTo(tr);
                if(i==0) td.addClass('firstRow');
                if(j==0) td.addClass('firstCol');
                if(!((i==0 && !firstRow) || (j==0 && !firstCol)) || (i!=0 && j !=0)) {
                    td.html(
                        ((typeof prefix.row !== 'undefined')?
                            ((typeof prefix.row[i] !== 'undefined')?
                                (prefix.row[i].toString()):
                                ('')
                            ):
                            ('')
                        )+
                        ((typeof prefix.col !== 'undefined')?
                            ((typeof prefix.col[j] !== 'undefined')?
                                (prefix.col[j].toString()):
                                ('')
                            ):
                            ('')
                        )+
                        ((typeof prefix[typeof data[i][j]] !== 'undefined')?
                            (prefix[typeof data[i][j]].toString()):
                            ('')
                        )+
                        (((typeof convert.row !== 'undefined')?(typeof convert.row[j] === 'function'):(false))?
                            (convert.row[j](data[i][j]).toString()):
                            (((typeof convert.col !== 'undefined')?(typeof convert.col[j] === 'function'):(false))?
                                (convert.col[j](data[i][j]).toString()):
                                ((typeof convert[typeof data[i][j]] === 'function')?
                                    (convert[typeof data[i][j]](data[i][j]).toString()):
                                    (data[i][j].toString())
                                )
                            )
                        )+
                        ((typeof suffix[typeof data[i][j]] !== 'undefined')?
                            (suffix[typeof data[i][j]].toString()):
                            ('')
                        )+
                        ((typeof suffix.col !== 'undefined')?
                            ((typeof suffix.col[j] !== 'undefined')?
                                (suffix.col[j].toString()):
                                ('')
                            ):
                            ('')
                        )+
                        ((typeof suffix.row !== 'undefined')?
                            ((typeof suffix.row[i] !== 'undefined')?
                                (suffix.row[i].toString()):
                                ('')
                            ):
                            ('')
                        )
                    );
                }
                else td.html(data[i][j].toString());
            }
        }
        return tbl.appendTo(this);//this.append(tbl);
    };
}(jQuery));
