function makeDiag(elem) {
  if(elem.tagName !== 'DIAG') {
    for(child of elem.body.children)
      makeDiag(child);
    return;
  }
  elem.classList.add("diag");
  elem.innerHTML = `<div class="diag-inner">${elem.innerHTML}</div>`

  let title = elem.attributes.title;
  if(title !== undefined) {
    elem.innerHTML = `<div class="diag-title">${title.value}</div>${elem.innerHTML}`
  }

  let align = elem.attributes.at;
  if(align !== undefined) {
    elem.classList.add(`diag-${align.value}`);
  }
}

window.addEventListener("load", () => {
  for(child of document.body.children)
    makeDiag(child);
});

const diag = {
  hide: (id) => {
    let elem = document.getElementById(id);
    if(elem.tagName !== 'DIAG') {
      for(child of elem.body.children)
        diag.hide(child.id);
      return;
    }
    elem.classList.add("diag-invisible");

  },
  show: (id) => {
    let elem = document.getElementById(id);
    if(elem.tagName !== 'DIAG') {
      for(child of elem.body.children)
        diag.hide(child.id);
      return;
    }
    elem.classList.remove("diag-invisible");
  },
  hideAll: () => {
    for(child of document.body.children)
      diag.hide(child.id);
  },
  showAll: () => {
    for(child of document.body.children)
      diag.show(child.id);
  },
};
