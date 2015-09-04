/*!
 * markdown-link <https://github.com/jonschlinkert/markdown-link>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var should = require('should');
var mdlink = require('./');

describe('markdown-link', function () {
  it('should generate a markdown link:', function () {
    mdlink('micromatch', 'https://github.com/jonschlinkert/micromatch').should.equal('[micromatch](https://github.com/jonschlinkert/micromatch)');
  });
  it('should support titles:', function () {
    mdlink('micromatch', 'https://github.com/jonschlinkert/micromatch', 'Faster, drop-in replacement to minimatch.').should.equal('[micromatch](https://github.com/jonschlinkert/micromatch "Faster, drop-in replacement to minimatch.")');
  });

  it('should throw an error on bad args:', function () {
    (function () {
      mdlink();
    }).should.throw('markdown-link expects anchor to be a string.');

    (function () {
      mdlink('foo');
    }).should.throw('markdown-link expects href to be a string.');
  });
});
