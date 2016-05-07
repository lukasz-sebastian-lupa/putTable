# putTable
jQuery plugin for creating an html table from an javascript array.<br/>
<br/>
Plugin adds a function to jQuery:<br/>
$('*').putTable(data, convert={}, prefix={}, suffix={}, firstRow=true, firstCol=true)<br/>
<br/>
'data' - an javascript Array<br/>
'convert' - json containing functions for converting and manipulating of 'data' array elements<br/>
'prefix' - json containg prefixes for specific row, columns and data types<br/>
'suffix' - json containg suffixes for specific row, columns and data types<br/>
'firstRow' - should function convert and aply prefixes and suffixes for the first row<br/>
'firstCol' - should function convert and aply prefixes and suffixes for the first column<br/>
<br/>
Elements &lt;tr&gt; and &lt;td&gt; are marked using ".firstRow" and ".firstCol" classes.<br/>
'Convert' can contain elements named like javascript data types:<br/>
{<br/>
&emsp;&emsp;string:function(val){return val},<br/>
&emsp;&emsp;number:function(val){return val},<br/>
&emsp;&emsp;boolean:function(val){return val},<br/>
&emsp;&emsp;array:function(val){return val},<br/>
&emsp;&emsp;object:function(val){return val},<br/>
}<br/>
'Prefix'/'suffix' can contain elements named like javascript data types and 'row'/'col' elements:<br/>
{<br/>
&emsp;&emsp;string:'', number:'', boolean:'', array:'', object:'',<br/>
&emsp;&emsp;row:{0:'',1:'',2:'',...}, col:{0:'',1:'',2:'',...}<br/>
}<br/>
<br/>
Example usage:<br/>
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
<br/>
$("div.output").putTable(table,<br/>
&emsp;&emsp;{<br/>
&emsp;&emsp;&emsp;&emsp;number:function(val){return val.toFixed(3);},<br/>
&emsp;&emsp;&emsp;&emsp;string:function(val){return '&lt;i&gt;'+val+'&lt;/i&gt;';}<br/>
&emsp;&emsp;},<br/>
&emsp;&emsp;{<br/>
&emsp;&emsp;&emsp;&emsp;string:'"',<br/>
&emsp;&emsp;&emsp;&emsp;col:{3:'-'}<br/>
&emsp;&emsp;},<br/>
&emsp;&emsp;{<br/>
&emsp;&emsp;&emsp;&emsp;string:'"',<br/>
&emsp;&emsp;&emsp;&emsp;number:' %'<br/>
&emsp;&emsp;},false,false<br/>
).css({<br/>
&emsp;&emsp;width:"80%",<br/>
&emsp;&emsp;fontSize:"12px"<br/>
}).find("td").css({<br/>
&emsp;&emsp;border:"dotted 1px",<br/>
&emsp;&emsp;padding:"2px"<br/>
});<br/>
<br/>
$('.firstCol').css({<br/>
&emsp;&emsp;fontWeight:'bold',<br/>
&emsp;&emsp;color:'red'<br/>
});<br/>
<br/>
$('.firstRow').css({<br/>
&emsp;&emsp;fontWeight:'bold',<br/>
&emsp;&emsp;color:'blue'<br/>
});<br/>
