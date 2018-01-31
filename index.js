function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget(){ // we used this bc we had a v specific thing to get
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  n = parseInt(n);
  let rankedLists = document.querySelectorAll('.ranked-list')
  console.log(rankedLists)
  // needed to an array of 
  for (let i = 0; i < rankedLists.length; i++){
    let children = rankedLists[i].children
  
  for (let j = 0; j < children.length; j++){
    children[j].innerHTML = parseInt(children[j].innerHTML) + n
  }
 }
}

function deepestChild(){
  let nodeOne = document.getElementById('grand-node')
  let nextNode = nodeOne.children[0]

  while (nextNode){
    nodeOne = nextNode;
    nextNode = nodeOne.children[0];
  }
  return nodeOne;
}

