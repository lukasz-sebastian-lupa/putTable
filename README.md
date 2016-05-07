# putTable
jQuery plugin for creating an html table from an javascript array.
<br/>
Plugin adds a function to jQuery:
$('*').putTable(data, convert={}, prefix={}, suffix={}, firstRow=true, firstCol=true)
<br/>
data - an javascript Array
convert - json containing functions for converting and manipulating of data array elements
prefix - json containg prefixes for specific row, columns and datatypes
suffix - json containg suffixes for specific row, columns and datatypes
firstRow - should function convert and aply prefixes and suffixes for the first row
firstCol - should function convert and aply prefixes and suffixes for the first column
<br/>
Elements <tr> and <td> are marked using ".firstRow" and ".firstCol" classes.
<br/>
Example usage:
<br/>
var table = [];<br/>
var row = ['No.','Col 1','Col 2','Col 3'];<br/>
table.push(row);<br/>
var row = [1,12,2/9,'text 1'];<br/>
table.push(row);<br/>
var row = [2,34,5/9,'text 2'];<br/>
table.push(row);<br/>
var row = [2,56,8/9,'text 3'];<br/>
table.push(row);<br/>

$("div.output").putTable(table,<br/>
    {<br/>
        number:function(val){return val.toFixed(3);},<br/>
        string:function(val){return '&lt;i&gt;'+val+'&lt;/i&gt;';}<br/>
    },<br/>
    {<br/>
        string:'"',<br/>
        col:{<br/>
            3:'-'<br/>
        }<br/>
    },<br/>
    {<br/>
        string:'"',<br/>
        number:' %'<br/>
    },false,false<br/>
).css({<br/>
    width:"80%",<br/>
    fontSize:"12px"<br/>
}).find("td").css({<br/>
    border:"dotted 1px",<br/>
    padding:"2px"<br/>
});<br/>

$('.firstCol').css({<br/>
    fontWeight:'bold',<br/>
    color:'red'<br/>
});<br/>

$('.firstRow').css({<br/>
    fontWeight:'bold',<br/>
    color:'blue'<br/>
});<br/>
