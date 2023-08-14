import fs from 'fs';
import vscode from 'vscode';
import assert from 'assert';

describe('check settings', () => {
  const settings = vscode.workspace.getConfiguration('vscode-extension-sample-vite');

  afterEach(async () => {
    await settings.update('enableHover', undefined, vscode.ConfigurationTarget.Global);
    await settings.update('promptMessageContent', undefined, vscode.ConfigurationTarget.Global);
  });

  it('promptMessageContent', async () => {
    await vscode.workspace.openTextDocument();
    const newValue = 'new value';
    await settings.update('promptMessageContent', newValue, vscode.ConfigurationTarget.Global);
    const messageDisplayed = await vscode.commands.executeCommand('vscode-extension-sample-vite.promptMessage');
    assert.strictEqual(messageDisplayed, newValue);
  });

  it('enableHover', async () => {
    await vscode.workspace.openTextDocument();
    const newValue = false;
    await settings.update('enableHover', newValue, vscode.ConfigurationTarget.Global);

    const uri = vscode.Uri.file(`/tmp/${Math.random()}`);
    fs.writeFileSync(uri.fsPath, 'bla', 'utf-8');
    const position = new vscode.Position(0, 2);

    const hoverResult = await vscode.commands.executeCommand<vscode.Hover[]>(
      'vscode.executeHoverProvider',
      uri,
      position
    );

    assert.notEqual(hoverResult, undefined, 'Hover result is undefined');
    assert.strictEqual(hoverResult[0], undefined, 'Hover result should be disabled');
  });
});
