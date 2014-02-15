/*\
title: $:/plugins/bj/Dev/trace.js
type: application/javascript
module-type: wikimethod
Display stacktrace if supported by browser
\*/
if($tw.browser) {  
	$tw.utils.error2 = function (message, file, line, column, errorObj)
	{
		if (!!errorObj &&!!errorObj.stack) {
			alert(errorObj.stack);
		} else {
			$tw.utils.error(message, file, line);
		}    
	}
	window.onerror = $tw.utils.error2;
}
