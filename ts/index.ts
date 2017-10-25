import * as React from 'react';

declare global {
	interface Window {
		tr?: Function;
	}
}

export function tr(...args: any[]): any { 
	if (!window.tr || !args[0]) {
		return args[0];
	}
	
	return React.createElement("span",
	{
		dangerouslySetInnerHTML: {
			__html: window.tr.apply(null, args)
		}
	});
}

export function trl(...args: any[]): any {
	if (!window.tr || !args[0] || typeof args[0] != "string") {
		return args[0];
	}
	
	return trls.call(null, args[0]);
}

export function trls(...args: any[]): any {
	if (!window.tr || !args[0]) {
		return args[0];
	}
	return window.tr.call(null, args[0]);
}
