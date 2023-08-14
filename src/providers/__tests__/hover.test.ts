import fs from 'fs';
import vscode from 'vscode';
import assert from 'assert';

describe('check hover', () => {
  it('plaintext', async () => {
    const uri = vscode.Uri.file(`/tmp/${Math.random()}`);
    fs.writeFileSync(uri.fsPath, 'bla', 'utf-8');

    const position = new vscode.Position(0, 2);
    const expected = new vscode.MarkdownString(`**This** is a \`Markdown\` *string*\n## With headers!\nand emojis 😄`);

    const hoverResult = await vscode.commands.executeCommand<vscode.Hover[]>(
      'vscode.executeHoverProvider',
      uri,
      position
    );

    assert.notEqual(hoverResult, undefined, 'Hover result is undefined');
    assert.notEqual(hoverResult[0], undefined, 'Hover result is an empty array');
    assert.notEqual(hoverResult[0].contents, undefined, `Hover result doesn't have content`);
    const content = hoverResult[0].contents[0];
    if (typeof content === 'object' && 'value' in content) assert.deepStrictEqual(content.value, expected.value);
    else assert.fail(`Unexpected type for Hover`);

  });
});