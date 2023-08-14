import vscode from 'vscode';
import { SampleHoverProvider } from '@providers';

export function activate(context?: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscode-extension-sample-vite" is now active!');

	const disposals: Array<{ dispose(): any; }> = [];

	// Add a command
	disposals.push(vscode.commands.registerCommand('vscode-extension-sample-vite.promptMessage', () => {
		// Configurations are defined inside package.json
		const settings = vscode.workspace.getConfiguration('vscode-extension-sample-vite');
		const message = settings.get('promptMessageContent');
		if (typeof message === 'string') {
			vscode.window.showInformationMessage(message);
			return message;
		}
	}));

	// Add hover support for text files
	disposals.push(vscode.languages.registerHoverProvider('plaintext', new SampleHoverProvider()));

	if (context) context.subscriptions.push(...disposals);
}

export function deactivate() { }
