function makeDiag(elem) {
  if(elem.tagName !== 'DIAG') {
    for(child of elem.body.children)
      makeDiag(child);
    return;
  }
  elem.classList.add("diag");
  elem.innerHTML = `<div class="diag-inner">${elem.innerHTML}</div>`

  let titleElem;
  let title = elem.attributes.title;
  if(title !== undefined) {
    elem.innerHTML = `<div class="diag-title">${title.value}</div>${elem.innerHTML}`
    titleElem = elem.children[0];
  }

  let align = elem.attributes.at;
  if(align !== undefined && align.value === "drag" && titleElem !== undefined) {
    titleElem.onmousedown = e => {
      let ix = e.clientX, iy = e.clientY;
      document.onmousemove = e => {
        e.preventDefault();
        let nx = ix - (ix - e.clientX),
            ny = iy - (iy - e.clientY) + (titleElem.clientHeight/2);
        elem.style.left = `${nx}px`;
        elem.style.top  = `${ny}px`;
      }
    }
    document.onmouseup = () => {
      document.onmousemove = () => {};
    }
    elem.classList.add("diag-center");
  } else if(align !== undefined) {
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
