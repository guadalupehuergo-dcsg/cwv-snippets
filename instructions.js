//1 - TO UPDATE THE SNIPPETS LIST 
// In Chrome (the one you want to save the snippets from) with the snippets open the inspector, then open again from there press ctr+shift+I
//
let exportSnippets
InspectorFrontendHost.getPreferences(_ => { exportSnippets = JSON.parse(_['script-snippets']) })

copy(exportSnippets)

//2 - TO ADD THE SNIPPETS ON A NEW CHROME INSTANCE
//In the new chrome open the inspector,  then open again from there press ctr+shift+I

//copy the JSON and add them into an array 
let importSnippets = []
// add at the end
InspectorFrontendHost.setPreference("script-snippets", JSON.stringify(importSnippets)); 
