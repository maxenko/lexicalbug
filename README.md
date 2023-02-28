## To run:

    npm i
    npm run develop

paste a guid into the editor:

    3af35138-9a63-4b5a-9497-4c7feef77ce2

## Trigger:

src\pages\lexical\nodes\MetaGuidNode.js

      function $createMetaGuidNode(text = ''){
          const n = new MetaGuidNode(text); // <-- breakpoint here, the step over
          return $applyNodeReplacement(new MetaGuidNode(text));
      }