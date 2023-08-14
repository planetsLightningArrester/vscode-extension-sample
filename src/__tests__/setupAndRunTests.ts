import path from 'path';
import process from 'process';
import { runTests } from '@vscode/test-electron';

async function main() {
	try {
		// The folder containing the Extension Manifest package.json
		// Passed to `--extensionDevelopmentPath`
		const extensionDevelopmentPath = path.resolve(__dirname, '../../');

		// The path to test runner
		// Passed to --extensionTestsPath
		const extensionTestsPath = path.resolve(__dirname, 'runTests');

		// ? Can receive the first argument as the VS Code to be used. Default is 'stable'
		const version = process.argv.length > 2 ? process.argv[2] : 'stable';
		// Download VS Code, unzip it and run the integration test
		await runTests({ extensionDevelopmentPath, extensionTestsPath, launchArgs: ['--disable-extensions'], version });
	} catch (err) {
		console.error('Failed to run tests', err);
		process.exit(1);
	}
}

main();
