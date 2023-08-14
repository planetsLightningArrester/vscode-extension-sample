# vscode-extension-sample-vite

Visual Studio Code extension sample using Vite as bundler instead of webpack (🤢)

- [Marketplace](https://marketplace.visualstudio.com/items?itemName=planetsLightningArrester.vscode-extension-sample-vite) or download the [latest release VSIX](https://github.com/planetsLightningArrester/vscode-extension-sample-vite/releases/latest)

## Includes
* **Hover support**: hover over any word in a text file
* **Settings**: change command messages and enable/disable hover
* **Commands**: show messages based on settings

## Publishing
1. Go to [Azure DevOps](https://go.microsoft.com/fwlink/?LinkId=307137) and create an Organization
2. Go to https://dev.azure.com/{yourorganization}
3. Go to ***Personal Access Tokens*** > ***New Token***. On new token tab:
  1. Under ***Organizations***, select ***All accessible organizations***
  2. Under ***Scopes***, select ***Custom defined***, search for **Marketplace** and check ***Manage***
  3. Click on create. Copy the token and add as a secret in GitHub with the name `PAT_TOKEN`
4. [Go to your organization management](https://marketplace.visualstudio.com/manage)
5. Create a new publisher, which you'll be the same name as inside your `package.json` > `publisher` field
6. Change `package.json` > `publisher` field to the same publisher
7. Your extension will be automatically published by `.github/workflows/release.yaml` if you push with tags, like:
  1. `git tag v<major.minor.patch-others>`
  2. `git push -u origin main --tags`

[Learn more](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

## Troubleshooting

To prevent d-bus warnings when running in WSL due to [#2941](https://github.com/microsoft/WSL/issues/2941), run

```bash
# If it's the first time running, run sudo
sudo scripts/run-dbus.sh  
# Otherwise, just source it
source scripts/run-dbus.sh
```

This won't prevent GPU errors such `dri3 extension not supported`. Also, won't suppress warning when running `test:hidden` and `test:insiders:hidden`

# License
[Copyleft](https://www.gnu.org/licenses/copyleft.html) - All rights pǝsɹǝʌǝɹ

Icons by [Freepik - Flaticon](https://www.flaticon.com/br/icones-gratis/exemplo)