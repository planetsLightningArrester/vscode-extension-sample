import vscode from 'vscode';

export class SampleHoverProvider implements vscode.HoverProvider {
  provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {
    const settings = vscode.workspace.getConfiguration('vscode-extension-sample-vite');
    const hoverEnabled = settings.get('enableHover');
    if (hoverEnabled) {
      return new vscode.Hover(new vscode.MarkdownString(`**This** is a \`Markdown\` *string*\n## With headers!\nand emojis 😄`));
    }
  }
}