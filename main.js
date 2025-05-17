const body = document.body;
const validOrder = ["section", "article", "div", "b"];
let answerString = "";

function validTreeStructure(node, level){
    
    const validElement = node.tagName.toLowerCase() === validOrder[level];
    
    const needsClassCheck = level != 3 || 
    level == 3 && 
    !node.className.includes("ref0") &&
     node.className.includes("ref")  ;

    if (!validElement) return;

    if (level==3 && needsClassCheck) {
        answerString = answerString + node.getAttribute("value");
        return; 
        

    }
    level++;
    for (const ele of node.childNodes){
        validTreeStructure(ele, level);
    }

return;
}

for (const element of document.body.children){
    validTreeStructure(element, 0);
}

console.log(answerString);

