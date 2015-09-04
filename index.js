'use strict';

module.exports = mdlink;

/**
 * ```js
 * mdlink('foo', 'https://github.com/bar/foo', 'baz');
 * //=> [foo](https://github.com/bar/foo "baz")
 *
 * mdlink('foo', 'https://github.com/bar/foo');
 * //=> [foo](https://github.com/bar/foo)
 * ```
 *
 * @param  {String} `anchor`
 * @param  {String} `href`
 * @param  {String} `title`
 * @api public
 */


function mdlink(anchor, href, title) {
  if (typeof anchor !== 'string') {
    throw new TypeError('markdown-link expects anchor to be a string.');
  }
  if (typeof href !== 'string') {
    throw new TypeError('markdown-link expects href to be a string.');
  }

  title = title ? ' "' + title + '"' : '';
  return '[' + anchor + '](' + href + title + ')';
};
