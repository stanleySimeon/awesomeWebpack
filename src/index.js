import './style.css';
import { DateTime } from '../node_modules/luxon/src/luxon.js';
import { navigations } from './navigation.js';
import BookCollection from './collection.js';

const date = document.getElementById('date');
date.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

navigations();
BookCollection();