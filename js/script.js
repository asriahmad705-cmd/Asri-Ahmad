import {initTheme} from './modules/theme.js';
import {initProjectDetail} from './modules/project-detail.js';
import {initLogin} from './modules/login.js';
import {initMotion} from './modules/motion.js';

document.addEventListener('DOMContentLoaded',()=>{
  initTheme();
  initProjectDetail();
  initLogin();
  initMotion();
});
