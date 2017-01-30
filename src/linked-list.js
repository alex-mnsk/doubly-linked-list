const Node = require('./node');

class LinkedList {
    constructor() {
    	this.length = 0;
	    this._head = null;
	    this._tail = null;
    }

    append(data) {
    	var node = new Node(data);

    	if (!this.length) {
    		this._head = node;
       		this._tail = node;
       	} else {
    		this._tail.next = node;
    		node.prev = this._tail;
    		this._tail = node;
    	}

    	this.length++;
    	return this;
    }

    head() {
    	if (this._head) {
    		return this._head.data;
    	} else {
    		return this._head;
    	}
    }

    tail() {
    	if (this._head) {
    		return this._tail.data;
    	} else {
    		return this._head;    	
    	}
    }

    at(index) {
		var currNode = this._head;
		var count  = 0;

    	if (index >= this.length) {
        	return -1;
    	} 

	    while (count < index) {
	    	currNode = currNode.next;
	    	count++;
	    }	    	
	   	
	   	return currNode.data;
	}

    insertAt(index, data) {
	    var node = new Node(data);
	    var currNode = this._head;
	    var count = 0;

	    while (count < index) {
	        currNode = currNode.next;
	        count++;
	    }

	    if (!currNode) {
	        currNode = node;
	    } else {
	        node.prev = currNode.prev;
	        node.next = currNode;
	        currNode.prev = node;
	    	if (node.prev) {
	            node.prev.next = node;
	        }
        }

        this.length++;

        return this;
    }

    isEmpty() {
    	if (this.length) {
    		return false
    	}

    	return true;
    }

    clear() {
    	this._head = null;
	    this._tail = null;
	    this.length = 0;
	    return this;
    }

    deleteAt(index) {
    	var currNode = this._head;
    	var count = 0;

    	if (index >= this.length) {
        	return -1;
    	} else {
	    	while (count < this.length) {
	    		if (index === count) {
    				if (currNode.prev) {
						currNode.prev.next = currNode.next;
    				}
    				if (currNode.next) {
						currNode.next.prev = currNode.prev;
    				}
	    		
	    			this.length--;	    		
	    		}
	    		currNode = currNode.next;
	    		count++;
	    	}
			
		return this;
    	}
    }

    reverse() {
    	var headNode = this._head;
    	var tailNode = this._tail;
    	var tmp = null;
    	var count = 1;

    	while (count < this.length) {
    		tmp = headNode.data;
    		headNode.data = tailNode.data;
    		tailNode.data = tmp;
    		headNode = headNode.next;
    		tailNode = tailNode.prev
    		count+=2;
    	}
    	return this;
    }

    indexOf(data) {
    	var currNode = this._head;
        var count = 0;

        while (count < this.length) {
            if (currNode.data == data) {
                return count;
            }
            
            currNode = currNode.next;
            count++;
        }
        return -1;
    }
}

module.exports = LinkedList;
