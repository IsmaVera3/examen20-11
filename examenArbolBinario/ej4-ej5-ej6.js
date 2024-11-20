class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
        this.muestro = []; //ejercicio 4 y 5
        this.suma = 0; //ejercicio 6
    }

    insert(value){
        const newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
        }else{
            this._insertRecursively(this.root, newNode);

        }
    }

    _insertRecursively(currentNode, newNode){
        if(newNode.value > currentNode.value){
            if(currentNode.right === null){
                currentNode.right = newNode
            }
            else{
                this._insertRecursively(currentNode.right, newNode);
            }
        }else{
            if(currentNode.left === null){
                currentNode.left = newNode;
            }
            else{
                this._insertRecursively(currentNode.left, newNode);
            }
        }
        return currentNode;
    }

    preOrderTraversal(node = this.root){
        if(node !== null){
            this.muestro.push(node.value);  
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
            this.suma += node.value;//ejercicio 6
        }
    }

    printPreOrder(){
        this.preOrderTraversal();
        console.log("preOrder",this.muestro);
        console.log("Suma usando preOrder: ", this.suma);//ejercicio 6
        this.suma = 0;//ejercicio 6
        this.muestro = [];
    }

    inOrderTraversal(node = this.root){
        if(node !== null){
            this.inOrderTraversal(node.left);
            this.muestro.push(node.value);
            this.inOrderTraversal(node.right);
            this.suma += node.value;//ejercicio 6
        }
    }

    printInOrder(){
        this.inOrderTraversal();
        console.log("inOrder", this.muestro);
        console.log("Suma usando inOrder: ", this.suma);//ejercicio 6
        this.suma = 0; //ejercicio 6
        this.muestro = [];
    }

    postOrderTraversal(node = this.root){
        if(node !== null){
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            this.muestro.push(node.value);
            this.suma += node.value;//ejercicio 6
        }
    }

    printPostOrder(){
        this.postOrderTraversal();
        console.log("postOrder", this.muestro);
        console.log("Suma usando posOrder: ", this.suma);//ejercicio 6
        this.suma = 0; //ejercicio 6
        this.muestro = [];
    }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(20);
tree.insert(15);
tree.insert(25);

tree.printPreOrder(); //ejercicio 4
tree.printPostOrder(); //ejercicio 5
tree.printInOrder(); //ejercicio 5

