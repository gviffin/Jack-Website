/* ============================================================
   JACK'S SITE — site-wide settings.

   • Your name / tagline / about text: edit SITE below.
   • Your ARTWORK now lives in ONE FILE PER GALLERY CORRIDOR:
        works-school.js       works-personal.js
        works-sketchbook.js   works-projects.js
     Open those to add or organise the pieces in each corridor.
   • WORKS below is simply all of them combined (the home page
     uses it). You don't need to touch it.
   ============================================================ */

const SITE = {
  name: "Jack Griffin",
  jpName: "ジャック・グリフィン",
  tagline: "illustration & drawing — foundation year",
  about: "I'm Jack — an art and design student who draws every day. This site is my sketchbook corridor: every panel is a piece of work, and new chapters get added all the time. Say hi!",
  email: "",        // e.g. "jack@example.com" (leave "" to hide)
  instagram: ""     // e.g. "https://instagram.com/yourname" (leave "" to hide)
};

/* every corridor's works combined — for the home page. Leave this alone. */
function _grab(n){ return (typeof window !== 'undefined' && window[n]) ? window[n] : []; }
const WORKS = [].concat(
  _grab('WORKS_SCHOOL'),
  _grab('WORKS_PERSONAL'),
  _grab('WORKS_SKETCHBOOK'),
  _grab('WORKS_PROJECTS')
);
