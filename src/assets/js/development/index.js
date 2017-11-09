import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar.js';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

import Turbolinks from 'turbolinks';

import { LibraryPageNavigation } from './components/library-page-navigation';
import { domReady } from './../shared/misc';

const readyFunction = (fn) => {
  if( Turbolinks.supported ) {
    Turbolinks.start();
    document.addEventListener("turbolinks:load", function() {
      fn();
    });
  } else {
    domReady(fn);
  }
};

readyFunction(function() {

  new LibraryPageNavigation();

});