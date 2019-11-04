// onDragStart = function (ev) {
//     var boundingClientRect;
//     if (ev.target.className.indexOf('bar') === -1) {
//       return;
//     }
    
//     draggedEl = this;
    
//     boundingClientRect = draggedEl.getBoundingClientRect();
    
//     grabPointY = boundingClientRect.top - ev.clientY;
//     grabPointX = boundingClientRect.left - ev.clientX;
//   };

//   onDrag = function (ev) {
//     if (!draggedEl) {
//       return;
//     }
    
//     var posX = ev.clientX + grabPointX,
//         posY = ev.clientY + grabPointY;
    
//     if (posX < 0) {
//       posX = 0;
//     }
    
//     if (posY < 0) {
//       posY = 0;
//     }
    
//     draggedEl.style.transform = "translateX(" + posX + "px) translateY(" + posY + "px)";
//   };

//   onDragEnd = function () { 
//     draggedEl = null;
//     grabPointX = null;
//     grabPointY = null;
//   };

// getNoteObject = function (el) {
//     var textarea = el.querySelector('textarea');
//     return {
//       transformCSSValue: el.style.transform,
//       content: textarea.value,
//       id: el.id,
//       textarea: {
//         width: textarea.style.width,
//         height: textarea.style.height,
//       }
//     };
// };
  
// onAddNoteBtnClick = function () {
//     createNote();
// };