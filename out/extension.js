"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const multiFileProvider_1 = require("./multiFileProvider");
function activate(context) {
    const multiFileProvider = new multiFileProvider_1.MultiFileProvider();
    // Create the Tree View with multi-file support
    const treeView = vscode.window.createTreeView('structuraView', {
        treeDataProvider: multiFileProvider,
        dragAndDropController: multiFileProvider,
        canSelectMany: false,
        showCollapseAll: true
    });
    context.subscriptions.push(treeView);
    // Refresh on editor change
    const editorChange = vscode.window.onDidChangeActiveTextEditor(() => {
        multiFileProvider.refresh();
    });
    // Refresh on document save
    const docSave = vscode.workspace.onDidSaveTextDocument(() => {
        multiFileProvider.refresh();
    });
    context.subscriptions.push(editorChange);
    context.subscriptions.push(docSave);
    // Register refresh command
    context.subscriptions.push(vscode.commands.registerCommand('structura.refresh', () => {
        multiFileProvider.refresh();
        vscode.window.showInformationMessage('Structura refreshed');
    }));
    // Initial refresh
    multiFileProvider.refresh();
    console.log('Structura extension activated with multi-file drag-drop support!');
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map