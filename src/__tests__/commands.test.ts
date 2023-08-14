import vscode from 'vscode';
import assert from 'assert';

describe('check commands', () => {
	it('promptMessage', async () => {
		const settings = vscode.workspace.getConfiguration('vscode-extension-sample-vite');
		const expected = settings.get('promptMessageContent');
		const messageDisplayed = await vscode.commands.executeCommand('vscode-extension-sample-vite.promptMessage');
		assert.strictEqual(messageDisplayed, expected);
	});
});
