import { ListNode } from 'ListNode';

export default class LinkedList {

    constructor(){
        this.head = null;
        this.length = 0;
    }

    insertHead(data){
        node = new ListNode(data);
        node.next = head;
        head = node;
    }

    traverse(callback){
        p = head;
        while(p != null){
            callback(p.data);
        }
    }

}