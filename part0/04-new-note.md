## New note 

```mermaid
sequenceDiagram
  participant browser
  participant server
  note right of browser: Payload:  {'note': 'New note'}
  browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note 
  
  activate server
  server ->> browser: 302 Redirect /notes
  deactivate server
  note left of server: New note object with content and time added to notes array

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  activate server
  server-->>browser: HTML document
  deactivate server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate server
  server-->>browser: the css file
  deactivate server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  activate server
  server-->>browser: the JavaScript file
  deactivate server

  Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate server
  server-->>browser: [{ "content": "New note", "date": "2023-1-1" }, ... ]
  deactivate server
```