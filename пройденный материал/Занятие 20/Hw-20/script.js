'use strict';
    
let draggedEl,
    grabPointY,
    grabPointX,
    addNoteBtnEl,
    saveNote,
    deleteNote,
    loadNotes;
    
let onDragStart = function (ev) {
    let boundingClientRect;
    if (ev.target.className.indexOf('bar') === -1) {
        return;
    }
      
    draggedEl = this;
      
    boundingClientRect = draggedEl.getBoundingClientRect();
      
    grabPointY = boundingClientRect.top - ev.clientY;
    grabPointX = boundingClientRect.left - ev.clientX;
};
    
let onDrag = function (ev) {
    if (!draggedEl) {
        return;
    }
      
    let posX = ev.clientX + grabPointX,
        posY = ev.clientY + grabPointY;
      
    if (posX < 0) {
        posX = 0;
    }
      
    if (posY < 0) {
        posY = 0;
    }
      
    draggedEl.style.transform = "translateX(" + posX + "px) translateY(" + posY + "px)";
};
    
let onDragEnd = function () { 
      draggedEl = null;
      grabPointX = null;
      grabPointY = null;
};
    
let getNoteObject = function (el) {
    let textarea = el.querySelector('textarea');
    return {
        transformCSSValue: el.style.transform,
        content: textarea.value,
        id: el.id,
        textarea: {
          width: textarea.style.width,
          height: textarea.style.height,
        }
      };
};
    
let onAddNoteBtnClick = function () {
    createNote();
};
    
let createNote = function (options) {
      let stickerEl = document.createElement('div'),
          barEl = document.createElement('div'),
          saveBtnEl = document.createElement('button'),
          deleteBtnEl = document.createElement('button'),
          textareaEl = document.createElement('textarea'),
          BOUNDARIES = 400,
          noteConfig = options || {
            transformCSSValue: "translateX(" + Math.random() * BOUNDARIES + "px) translateY(" + Math.random() * BOUNDARIES + "px)",
            content: '',
            id: "sticker_" + new Date().getTime(),
          };
      
      if (noteConfig.textarea) {
        textareaEl.style.width = noteConfig.textarea.width;
        textareaEl.style.height = noteConfig.textarea.height;
        textareaEl.style.resize = 'none';
      }
      
    let onSave = function () {
        saveNote(
          getNoteObject(stickerEl)
        );
    };
  
    let onDelete = function () {
        deleteNote(
          getNoteObject(stickerEl)
        );
  
        document.body.removeChild(stickerEl);
    };
      
      stickerEl.style.transform = noteConfig.transformCSSValue; 
      stickerEl.id = noteConfig.id;
      textareaEl.value = noteConfig.content;
      
      saveBtnEl.classList.add('saveButton');
      saveBtnEl.addEventListener('click', onSave, false);
      
      deleteBtnEl.classList.add('deleteButton');
      deleteBtnEl.addEventListener('click', onDelete, false);
      
      barEl.classList.add('bar');
      stickerEl.classList.add('sticker');
      
      barEl.appendChild(saveBtnEl);
      barEl.appendChild(deleteBtnEl);
      
      stickerEl.appendChild(barEl);
      stickerEl.appendChild(textareaEl); 
      
      stickerEl.addEventListener('mousedown', onDragStart, false);
      
      document.body.appendChild(stickerEl);
    };
    
    let testLocalStorage = function () {
      let foo = 'foo';
      try {
        localStorage.setItem(foo, foo);
        localStorage.removeItem(foo);
        return true;
      } catch (e) {
        return false;
      }
    };
    
let init = function () {
      
      if (!testLocalStorage) {
        let message = "We are sorry but you cannot use localStorage";
        saveNote = function () {
          console.warn(message);
        };
        
        deleteNote = function () {
          console.warn(message);
        };
      } else {
        saveNote = function (note) {
          localStorage.setItem(note.id, JSON.stringify(note));
        };
  
        deleteNote = function (note) {
          localStorage.removeItem(note.id);
        };
  
        loadNotes = function () {
          for(let i = 0; i < localStorage.length; i++) {
            let noteObject = JSON.parse(
              localStorage.getItem(
                localStorage.key(i)
              )
            );
            createNote(noteObject);
          };
        };
        loadNotes();      
      }
  
      addNoteBtnEl = document.querySelector('.addNoteBtn');
      addNoteBtnEl.addEventListener('click', onAddNoteBtnClick, false);
      document.addEventListener('mousemove', onDrag, false);
      document.addEventListener('mouseup', onDragEnd, false);
};
    
init();