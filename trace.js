/*\
title: $:/plugins/bj/Dev/trace.js
type: application/javascript
module-type: wikimethod
Display stacktrace
\*/
if($tw.browser) {  // alert("hilow");

$tw.utils.error2 = function (message, file, line, column, errorObj)
{
    var errobject;
    //if (!!errorObj &&!!errorObj.stack)  {alert("myerror"+errorObj.stack);}//throw(errorObj);}
    //else 
    $tw.utils.error(message, file, line, column, errorObj);
    
   //var trace = printStackTrace({e:errorObj});
//if (errobject ==true)
  // alert(errorObj+trace.join('\n\n'));
   //else
   //alert(trace.join('\n\n')); 
   //$tw.utils.errorOriginal(err);
   //alert("hi");
    
}
window.onerror = $tw.utils.error2;
}
