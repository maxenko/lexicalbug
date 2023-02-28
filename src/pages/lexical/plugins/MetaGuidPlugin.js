import { useLexicalTextEntity } from "@lexical/react/useLexicalTextEntity";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback, useEffect } from "react";
import { MetaGuidNode, $createMetaGuidNode, $isMetaGuidNodeNode } from "../nodes/MetaGuidNode";

const rxGuid = /([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/gi;

function MetaGuidPlugin() {

    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        if (!editor.hasNodes([MetaGuidNode])) {
            throw new Error('MetaGuidPlugin: MetaGuidNode not registered on editor');
        }
    }, [editor]);

    const createMetaGuidNode = useCallback(textNode => {
        return $createMetaGuidNode(textNode.getTextContent());
    }, []);

    const getMetaGuidMatch = useCallback(text => {
        
        const matchArr = rxGuid.exec(text);

        if (matchArr === null) {
            return null;
        }
        
        const startOffset = matchArr.index;
        const endOffset = startOffset + 36;
        
        return {
            end: endOffset,
            start: startOffset
        };

    }, []);

    useLexicalTextEntity(getMetaGuidMatch, MetaGuidNode, createMetaGuidNode);
    return null;
}

export default MetaGuidPlugin; 