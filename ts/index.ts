import * as React from 'react';

declare global {
	interface Window {
		tr?: Function;
		trl?: Function;
		tre?: Function;
	}
}

export function tr(...args: any[]): any { 
	if (!window.tr || !args[0]) {
		return args[0];
	}
	
	return React.createElement("span",
	{
		dangerouslySetInnerHTML: {
			__html: window.tr.apply(window, args)
		}
	});
}

export function trl(...args: any[]): any {
	if (!window.trl || !args[0]) {
		return args[0];
	}
	
	return window.trl.apply(window, args);
}

export function tre(...args: any[]): any {
	if (!window.tre || !args[0]) {
		return args[0];
	}
	
	return window.tre.apply(window, args);
}
