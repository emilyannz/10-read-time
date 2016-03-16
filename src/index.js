'use strict';
/* globals numWords, readTime */


const entryinfos = document.querySelectorAll(`.entry__info`);
const entries = document.querySelectorAll(`.entry__content`);

for (let i = 0; i < entryinfos.length; i++) {
  const readtime = document.createElement(`li`);
  readtime.classList.add(`read-time`);
  entryinfos[i].appendChild(readtime);

  readtime.innerText = `${readTime(entries[i].innerText, 200)} mins`;
}
// find text in article, use text in readtime, and then show to user
