'use strict';
/* globals numWords, readTime */


const entries = document.querySelectorAll(`.entry`);
const entryinfos = document.querySelectorAll(`.entry__info`);
const posts = document.querySelectorAll(`.entry__content`);
const bodyEl = document.querySelector(`body`);
const postTitles = document.querySelectorAll(`.entry__title`);

const nav = document.createElement(`nav`);
bodyEl.appendChild(nav);

for (let i = 0; i < entryinfos.length; i++) {
  const navlink = document.createElement(`a`);
  nav.appendChild(navlink);

  navlink.setAttribute(`href`, `#${entries[i].id}`);
  navlink.innerText = `${postTitles[i].innerText}`;

  const readtime = document.createElement(`li`);
  readtime.classList.add(`read-time`);
  entryinfos[i].appendChild(readtime);
// find text in article, use text in readtime, and then show to user
  readtime.innerText = `${readTime(posts[i].innerText, 200)} mins`;
}

// create nav element and append it to the body
