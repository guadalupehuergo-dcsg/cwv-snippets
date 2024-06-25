//on the  chrome  with the snippets open the inspector , then open again from there ctr shift I
let exportSnippets
InspectorFrontendHost.getPreferences(_ => { exportSnippets = JSON.parse(_['script-snippets']) })

copy(exportSnippets)

//on the new chrome open the inspector , then open again from there ctr shift I

//copy the json and add them into an array 
let importSnippets = []
// add at the end
InspectorFrontendHost.setPreference("script-snippets", JSON.stringify(importSnippets)); 
