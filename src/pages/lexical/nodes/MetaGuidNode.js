import { TextNode, $applyNodeReplacement } from 'lexical';
import { utils } from '@lexical/utils';

class MetaGuidNode extends TextNode {
    static getType(){
        return 'metaguid';
    }
    static clone(node){
        return new MetaGuidNode(node.__text, node.__key);
    }

    constructor(text, key) {
        super(text, key);
    }

    createDOM(config){
        const element = super.createDOM(config);
        utils.addClassNamesToElement(element, config.theme.metaguid);
        return element;
    }

    static importJSON(serializedNode){
        const node = $createMetaGuidNode(serializedNode.text);
        node.setFormat(serializedNode.format);
        node.setDetail(serializedNode.detail);
        node.setMode(serializedNode.mode);
        node.setStyle(serializedNode.style);
        return node;
    }
    exportJSON(){
        return {
            ...super.exportJSON(),
            type: 'metaguid'
        };
    }
    canInsertTextBefore(){
        return false;
    }
    isTextEntity(){
        return true;
    }
}

function $createMetaGuidNode(text = ''){
    const n = new MetaGuidNode(text);
    return $applyNodeReplacement(new MetaGuidNode(text));
}
function $isMetaGuidNodeNode(node){
    return node instanceof MetaGuidNode;
}

export { MetaGuidNode, $createMetaGuidNode, $isMetaGuidNodeNode };
export default MetaGuidNode;