# putTable
jQuery plugin for creating an html table from an javascript array.<br/>
<br/>
Plugin adds a function to jQuery:<br/>
$('*').putTable(data, convert={}, prefix={}, suffix={}, firstRow=true, firstCol=true)<br/>
<br/>
data - an javascript Array<br/>
convert - json containing functions for converting and manipulating of data array elements<br/>
prefix - json containg prefixes for specific row, columns and datatypes<br/>
suffix - json containg suffixes for specific row, columns and datatypes<br/>
firstRow - should function convert and aply prefixes and suffixes for the first row<br/>
firstCol - should function convert and aply prefixes and suffixes for the first column<br/>
<br/>
Elements <tr> and <td> are marked using ".firstRow" and ".firstCol" classes.<br/>
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
&emsp;&emsp;&emsp;&emsp;col:{<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;3:'-'<br/>
&emsp;&emsp;&emsp;&emsp;}<br/>
&emsp;&emsp;},<br/>
&emsp;&emsp;{<br/>
&emsp;&emsp;&emsp;&emsp;string:'"',<br/>
&emsp;&emsp;&emsp;&emsp;number:' %'<br/>
&emsp;&emsp;&emsp;&emsp;},false,false<br/>
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
