# putTable
jQuery plugin for creating an html table from an javascript array.

Plugin adds a function to jQuery:
$('*').putTable(data, convert={}, prefix={}, suffix={}, firstRow=true, firstCol=true)

data - an javascript Array
convert - json containing functions for converting and manipulating of data array elements
prefix - json containg prefixes for specific row, columns and datatypes
suffix - json containg suffixes for specific row, columns and datatypes
firstRow - should function convert and aply prefixes and suffixes for the first row
firstCol - should function convert and aply prefixes and suffixes for the first column

Elements <tr> and <td> are marked using ".firstRow" and ".firstCol" classes.

Example usage:

var table = [];
var row = ['No.','Col 1','Col 2','Col 3'];
table.push(row);
var row = [1,12,2/9,'text 1'];
table.push(row);
var row = [2,34,5/9,'text 2'];
table.push(row);
var row = [2,56,8/9,'text 3'];
table.push(row);

$("div.output").putTable(table,
    {
        number:function(val){return val.toFixed(3);},
        string:function(val){return '<i>'+val+'</i>';}
    },
    {
        string:'"',
        col:{
            3:'-'
        }
    },
    {
        string:'"',
        number:' %'
    },false,false
).css({
    width:"80%",
    fontSize:"12px"
}).find("td").css({
    border:"dotted 1px",
    padding:"2px"
});

$('.firstCol').css({
    fontWeight:'bold',
    color:'red'
});

$('.firstRow').css({
    fontWeight:'bold',
    color:'blue'
});
