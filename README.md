# putTable
<pre>
jQuery plugin for creating an html table from an javascript array.

Plugin adds a function to jQuery:
$('*').putTable(data, convert={}, prefix={}, suffix={}, firstRow=true, firstCol=true)

'data' - an javascript Array
'convert' - json containing functions for converting and manipulating of 'data' array elements
'prefix' - json containg prefixes for specific row, columns and data types
'suffix' - json containg suffixes for specific row, columns and data types
'firstRow' - should function convert and aply prefixes and suffixes for the first row
'firstCol' - should function convert and aply prefixes and suffixes for the first column

Elements &lt;tr&gt; and &lt;td&gt; are marked using ".firstRow" and ".firstCol" classes.

'Convert' can contain functions for convertion of specific javascript data types and functions for convertion of specific rows and columns:
{
    row:{
        0:function(val){return val},
        1:function(val){return val},
        2:function(val){return val},
        ...
    },
    col:{
        0:function(val){return val},
        1:function(val){return val},
        2:function(val){return val},
        ...
    },
    string:function(val){return val},
    number:function(val){return val},
    boolean:function(val){return val},
    array:function(val){return val},
    object:function(val){return val},
}
Only one convert function is used - first convert seeks for 'row' function, then for 'col' function, and in the end for a data type function. If none of the convert functions is found the unconverted value is used.

'Prefix'/'suffix' can contain elements named like javascript data types and 'row'/'col' elements:
{
    row:{0:'',1:'',2:'',...}, col:{0:'',1:'',2:'',...},
    string:'', number:'', boolean:'', array:'', object:''
}

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
        string:function(val){return '&lt;i&gt;'+val+'&lt;/i&gt;';}
    },{
        string:'"',
        col:{3:'-'}
    },{
        string:'"',
        number:' %'
    },false,false
).css(
    {
        width:"80%",
        fontSize:"12px"
    }
).find("td").css(
    {
        border:"dotted 1px",
        padding:"2px"
    }
);

$('.firstCol').css({
    fontWeight:'bold',
    color:'red'
});

$('.firstRow').css({
    fontWeight:'bold',
    color:'blue'
});
</pre>
