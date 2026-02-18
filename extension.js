//link js to vscode

const vscode = require('vscode');
const TextSwapper = require('./TextSwapper');

function activate(context) {
    let disposable = vscode.commands.registerCommand('swap-split.execute', function () {

        //get active editor
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }
        const document = editor.document;
        
        //perform the edit
        editor.edit(editBuilder => {

            editor.selections.forEach(selection => {
                const position = selection.active;
                const line = document.lineAt(position.line);
                const lineText = line.text;
                const newText = TextSwapper.swap(lineText, position.character);
                
                //apply the edit to vscode
                editBuilder.replace(line.range, newText);
            });
        });
    });
    
    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};  