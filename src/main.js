import Vue from 'vue';
import App from '@/views/App';
import './asset/style/index.scss';

import '../script/performence';

export default new Vue({
  el: '#app',
  render(h) {
    return h(App);
  },
});
