var charToInteger = {};
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
for (var i = 0; i < chars.length; i++) {
    charToInteger[chars.charCodeAt(i)] = i;
}
function encode(decoded) {
    var sourceFileIndex = 0; // second field
    var sourceCodeLine = 0; // third field
    var sourceCodeColumn = 0; // fourth field
    var nameIndex = 0; // fifth field
    var mappings = '';
    for (var i = 0; i < decoded.length; i++) {
        var line = decoded[i];
        if (i > 0)
            mappings += ';';
        if (line.length === 0)
            continue;
        var generatedCodeColumn = 0; // first field
        var lineMappings = [];
        for (var _i = 0, line_1 = line; _i < line_1.length; _i++) {
            var segment = line_1[_i];
            var segmentMappings = encodeInteger(segment[0] - generatedCodeColumn);
            generatedCodeColumn = segment[0];
            if (segment.length > 1) {
                segmentMappings +=
                    encodeInteger(segment[1] - sourceFileIndex) +
                        encodeInteger(segment[2] - sourceCodeLine) +
                        encodeInteger(segment[3] - sourceCodeColumn);
                sourceFileIndex = segment[1];
                sourceCodeLine = segment[2];
                sourceCodeColumn = segment[3];
            }
            if (segment.length === 5) {
                segmentMappings += encodeInteger(segment[4] - nameIndex);
                nameIndex = segment[4];
            }
            lineMappings.push(segmentMappings);
        }
        mappings += lineMappings.join(',');
    }
    return mappings;
}
function encodeInteger(num) {
    var result = '';
    num = num < 0 ? (-num << 1) | 1 : num << 1;
    do {
        var clamped = num & 31;
        num >>>= 5;
        if (num > 0) {
            clamped |= 32;
        }
        result += chars[clamped];
    } while (num > 0);
    return result;
}

var BitSet = function BitSet(arg) {
	this.bits = arg instanceof BitSet ? arg.bits.slice() : [];
};

BitSet.prototype.add = function add (n) {
	this.bits[n >> 5] |= 1 << (n & 31);
};

BitSet.prototype.has = function has (n) {
	return !!(this.bits[n >> 5] & (1 << (n & 31)));
};

var Chunk = function Chunk(start, end, content) {
	this.start = start;
	this.end = end;
	this.original = content;

	this.intro = '';
	this.outro = '';

	this.content = content;
	this.storeName = false;
	this.edited = false;

	// we make these non-enumerable, for sanity while debugging
	Object.defineProperties(this, {
		previous: { writable: true, value: null },
		next:     { writable: true, value: null }
	});
};

Chunk.prototype.appendLeft = function appendLeft (content) {
	this.outro += content;
};

Chunk.prototype.appendRight = function appendRight (content) {
	this.intro = this.intro + content;
};

Chunk.prototype.clone = function clone () {
	var chunk = new Chunk(this.start, this.end, this.original);

	chunk.intro = this.intro;
	chunk.outro = this.outro;
	chunk.content = this.content;
	chunk.storeName = this.storeName;
	chunk.edited = this.edited;

	return chunk;
};

Chunk.prototype.contains = function contains (index) {
	return this.start < index && index < this.end;
};

Chunk.prototype.eachNext = function eachNext (fn) {
	var chunk = this;
	while (chunk) {
		fn(chunk);
		chunk = chunk.next;
	}
};

Chunk.prototype.eachPrevious = function eachPrevious (fn) {
	var chunk = this;
	while (chunk) {
		fn(chunk);
		chunk = chunk.previous;
	}
};

Chunk.prototype.edit = function edit (content, storeName, contentOnly) {
	this.content = content;
	if (!contentOnly) {
		this.intro = '';
		this.outro = '';
	}
	this.storeName = storeName;

	this.edited = true;

	return this;
};

Chunk.prototype.prependLeft = function prependLeft (content) {
	this.outro = content + this.outro;
};

Chunk.prototype.prependRight = function prependRight (content) {
	this.intro = content + this.intro;
};

Chunk.prototype.split = function split (index) {
	var sliceIndex = index - this.start;

	var originalBefore = this.original.slice(0, sliceIndex);
	var originalAfter = this.original.slice(sliceIndex);

	this.original = originalBefore;

	var newChunk = new Chunk(index, this.end, originalAfter);
	newChunk.outro = this.outro;
	this.outro = '';

	this.end = index;

	if (this.edited) {
		// TODO is this block necessary?...
		newChunk.edit('', false);
		this.content = '';
	} else {
		this.content = originalBefore;
	}

	newChunk.next = this.next;
	if (newChunk.next) { newChunk.next.previous = newChunk; }
	newChunk.previous = this;
	this.next = newChunk;

	return newChunk;
};

Chunk.prototype.toString = function toString () {
	return this.intro + this.content + this.outro;
};

Chunk.prototype.trimEnd = function trimEnd (rx) {
	this.outro = this.outro.replace(rx, '');
	if (this.outro.length) { return true; }

	var trimmed = this.content.replace(rx, '');

	if (trimmed.length) {
		if (trimmed !== this.content) {
			this.split(this.start + trimmed.length).edit('', undefined, true);
		}
		return true;

	} else {
		this.edit('', undefined, true);

		this.intro = this.intro.replace(rx, '');
		if (this.intro.length) { return true; }
	}
};

Chunk.prototype.trimStart = function trimStart (rx) {
	this.intro = this.intro.replace(rx, '');
	if (this.intro.length) { return true; }

	var trimmed = this.content.replace(rx, '');

	if (trimmed.length) {
		if (trimmed !== this.content) {
			this.split(this.end - trimmed.length);
			this.edit('', undefined, true);
		}
		return true;

	} else {
		this.edit('', undefined, true);

		this.outro = this.outro.replace(rx, '');
		if (this.outro.length) { return true; }
	}
};

var btoa = function () {
	throw new Error('Unsupported environment: `window.btoa` or `Buffer` should be supported.');
};
if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
	btoa = function (str) { return window.btoa(unescape(encodeURIComponent(str))); };
} else if (typeof Buffer === 'function') {
	btoa = function (str) { return Buffer.from(str, 'utf-8').toString('base64'); };
}

var SourceMap = function SourceMap(properties) {
	this.version = 3;
	this.file = properties.file;
	this.sources = properties.sources;
	this.sourcesContent = properties.sourcesContent;
	this.names = properties.names;
	this.mappings = encode(properties.mappings);
};

SourceMap.prototype.toString = function toString () {
	return JSON.stringify(this);
};

SourceMap.prototype.toUrl = function toUrl () {
	return 'data:application/json;charset=utf-8;base64,' + btoa(this.toString());
};

function guessIndent(code) {
	var lines = code.split('\n');

	var tabbed = lines.filter(function (line) { return /^\t+/.test(line); });
	var spaced = lines.filter(function (line) { return /^ {2,}/.test(line); });

	if (tabbed.length === 0 && spaced.length === 0) {
		return null;
	}

	// More lines tabbed than spaced? Assume tabs, and
	// default to tabs in the case of a tie (or nothing
	// to go on)
	if (tabbed.length >= spaced.length) {
		return '\t';
	}

	// Otherwise, we need to guess the multiple
	var min = spaced.reduce(function (previous, current) {
		var numSpaces = /^ +/.exec(current)[0].length;
		return Math.min(numSpaces, previous);
	}, Infinity);

	return new Array(min + 1).join(' ');
}

function getRelativePath(from, to) {
	var fromParts = from.split(/[/\\]/);
	var toParts = to.split(/[/\\]/);

	fromParts.pop(); // get dirname

	while (fromParts[0] === toParts[0]) {
		fromParts.shift();
		toParts.shift();
	}

	if (fromParts.length) {
		var i = fromParts.length;
		while (i--) { fromParts[i] = '..'; }
	}

	return fromParts.concat(toParts).join('/');
}

var toString = Object.prototype.toString;

function isObject(thing) {
	return toString.call(thing) === '[object Object]';
}

function getLocator(source) {
	var originalLines = source.split('\n');
	var lineOffsets = [];

	for (var i = 0, pos = 0; i < originalLines.length; i++) {
		lineOffsets.push(pos);
		pos += originalLines[i].length + 1;
	}

	return function locate(index) {
		var i = 0;
		var j = lineOffsets.length;
		while (i < j) {
			var m = (i + j) >> 1;
			if (index < lineOffsets[m]) {
				j = m;
			} else {
				i = m + 1;
			}
		}
		var line = i - 1;
		var column = index - lineOffsets[line];
		return { line: line, column: column };
	};
}

var Mappings = function Mappings(hires) {
	this.hires = hires;
	this.generatedCodeLine = 0;
	this.generatedCodeColumn = 0;
	this.raw = [];
	this.rawSegments = this.raw[this.generatedCodeLine] = [];
	this.pending = null;
};

Mappings.prototype.addEdit = function addEdit (sourceIndex, content, loc, nameIndex) {
	if (content.length) {
		var segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
		if (nameIndex >= 0) {
			segment.push(nameIndex);
		}
		this.rawSegments.push(segment);
	} else if (this.pending) {
		this.rawSegments.push(this.pending);
	}

	this.advance(content);
	this.pending = null;
};

Mappings.prototype.addUneditedChunk = function addUneditedChunk (sourceIndex, chunk, original, loc, sourcemapLocations) {
	var originalCharIndex = chunk.start;
	var first = true;

	while (originalCharIndex < chunk.end) {
		if (this.hires || first || sourcemapLocations.has(originalCharIndex)) {
			this.rawSegments.push([this.generatedCodeColumn, sourceIndex, loc.line, loc.column]);
		}

		if (original[originalCharIndex] === '\n') {
			loc.line += 1;
			loc.column = 0;
			this.generatedCodeLine += 1;
			this.raw[this.generatedCodeLine] = this.rawSegments = [];
			this.generatedCodeColumn = 0;
			first = true;
		} else {
			loc.column += 1;
			this.generatedCodeColumn += 1;
			first = false;
		}

		originalCharIndex += 1;
	}

	this.pending = null;
};

Mappings.prototype.advance = function advance (str) {
	if (!str) { return; }

	var lines = str.split('\n');

	if (lines.length > 1) {
		for (var i = 0; i < lines.length - 1; i++) {
			this.generatedCodeLine++;
			this.raw[this.generatedCodeLine] = this.rawSegments = [];
		}
		this.generatedCodeColumn = 0;
	}

	this.generatedCodeColumn += lines[lines.length - 1].length;
};

var n = '\n';

var warned = {
	insertLeft: false,
	insertRight: false,
	storeName: false
};

var MagicString = function MagicString(string, options) {
	if ( options === void 0 ) options = {};

	var chunk = new Chunk(0, string.length, string);

	Object.defineProperties(this, {
		original:              { writable: true, value: string },
		outro:                 { writable: true, value: '' },
		intro:                 { writable: true, value: '' },
		firstChunk:            { writable: true, value: chunk },
		lastChunk:             { writable: true, value: chunk },
		lastSearchedChunk:     { writable: true, value: chunk },
		byStart:               { writable: true, value: {} },
		byEnd:                 { writable: true, value: {} },
		filename:              { writable: true, value: options.filename },
		indentExclusionRanges: { writable: true, value: options.indentExclusionRanges },
		sourcemapLocations:    { writable: true, value: new BitSet() },
		storedNames:           { writable: true, value: {} },
		indentStr:             { writable: true, value: guessIndent(string) }
	});

	this.byStart[0] = chunk;
	this.byEnd[string.length] = chunk;
};

MagicString.prototype.addSourcemapLocation = function addSourcemapLocation (char) {
	this.sourcemapLocations.add(char);
};

MagicString.prototype.append = function append (content) {
	if (typeof content !== 'string') { throw new TypeError('outro content must be a string'); }

	this.outro += content;
	return this;
};

MagicString.prototype.appendLeft = function appendLeft (index, content) {
	if (typeof content !== 'string') { throw new TypeError('inserted content must be a string'); }

	this._split(index);

	var chunk = this.byEnd[index];

	if (chunk) {
		chunk.appendLeft(content);
	} else {
		this.intro += content;
	}
	return this;
};

MagicString.prototype.appendRight = function appendRight (index, content) {
	if (typeof content !== 'string') { throw new TypeError('inserted content must be a string'); }

	this._split(index);

	var chunk = this.byStart[index];

	if (chunk) {
		chunk.appendRight(content);
	} else {
		this.outro += content;
	}
	return this;
};

MagicString.prototype.clone = function clone () {
	var cloned = new MagicString(this.original, { filename: this.filename });

	var originalChunk = this.firstChunk;
	var clonedChunk = (cloned.firstChunk = cloned.lastSearchedChunk = originalChunk.clone());

	while (originalChunk) {
		cloned.byStart[clonedChunk.start] = clonedChunk;
		cloned.byEnd[clonedChunk.end] = clonedChunk;

		var nextOriginalChunk = originalChunk.next;
		var nextClonedChunk = nextOriginalChunk && nextOriginalChunk.clone();

		if (nextClonedChunk) {
			clonedChunk.next = nextClonedChunk;
			nextClonedChunk.previous = clonedChunk;

			clonedChunk = nextClonedChunk;
		}

		originalChunk = nextOriginalChunk;
	}

	cloned.lastChunk = clonedChunk;

	if (this.indentExclusionRanges) {
		cloned.indentExclusionRanges = this.indentExclusionRanges.slice();
	}

	cloned.sourcemapLocations = new BitSet(this.sourcemapLocations);

	cloned.intro = this.intro;
	cloned.outro = this.outro;

	return cloned;
};

MagicString.prototype.generateDecodedMap = function generateDecodedMap (options) {
		var this$1$1 = this;

	options = options || {};

	var sourceIndex = 0;
	var names = Object.keys(this.storedNames);
	var mappings = new Mappings(options.hires);

	var locate = getLocator(this.original);

	if (this.intro) {
		mappings.advance(this.intro);
	}

	this.firstChunk.eachNext(function (chunk) {
		var loc = locate(chunk.start);

		if (chunk.intro.length) { mappings.advance(chunk.intro); }

		if (chunk.edited) {
			mappings.addEdit(
				sourceIndex,
				chunk.content,
				loc,
				chunk.storeName ? names.indexOf(chunk.original) : -1
			);
		} else {
			mappings.addUneditedChunk(sourceIndex, chunk, this$1$1.original, loc, this$1$1.sourcemapLocations);
		}

		if (chunk.outro.length) { mappings.advance(chunk.outro); }
	});

	return {
		file: options.file ? options.file.split(/[/\\]/).pop() : null,
		sources: [options.source ? getRelativePath(options.file || '', options.source) : null],
		sourcesContent: options.includeContent ? [this.original] : [null],
		names: names,
		mappings: mappings.raw
	};
};

MagicString.prototype.generateMap = function generateMap (options) {
	return new SourceMap(this.generateDecodedMap(options));
};

MagicString.prototype.getIndentString = function getIndentString () {
	return this.indentStr === null ? '\t' : this.indentStr;
};

MagicString.prototype.indent = function indent (indentStr, options) {
	var pattern = /^[^\r\n]/gm;

	if (isObject(indentStr)) {
		options = indentStr;
		indentStr = undefined;
	}

	indentStr = indentStr !== undefined ? indentStr : this.indentStr || '\t';

	if (indentStr === '') { return this; } // noop

	options = options || {};

	// Process exclusion ranges
	var isExcluded = {};

	if (options.exclude) {
		var exclusions =
			typeof options.exclude[0] === 'number' ? [options.exclude] : options.exclude;
		exclusions.forEach(function (exclusion) {
			for (var i = exclusion[0]; i < exclusion[1]; i += 1) {
				isExcluded[i] = true;
			}
		});
	}

	var shouldIndentNextCharacter = options.indentStart !== false;
	var replacer = function (match) {
		if (shouldIndentNextCharacter) { return ("" + indentStr + match); }
		shouldIndentNextCharacter = true;
		return match;
	};

	this.intro = this.intro.replace(pattern, replacer);

	var charIndex = 0;
	var chunk = this.firstChunk;

	while (chunk) {
		var end = chunk.end;

		if (chunk.edited) {
			if (!isExcluded[charIndex]) {
				chunk.content = chunk.content.replace(pattern, replacer);

				if (chunk.content.length) {
					shouldIndentNextCharacter = chunk.content[chunk.content.length - 1] === '\n';
				}
			}
		} else {
			charIndex = chunk.start;

			while (charIndex < end) {
				if (!isExcluded[charIndex]) {
					var char = this.original[charIndex];

					if (char === '\n') {
						shouldIndentNextCharacter = true;
					} else if (char !== '\r' && shouldIndentNextCharacter) {
						shouldIndentNextCharacter = false;

						if (charIndex === chunk.start) {
							chunk.prependRight(indentStr);
						} else {
							this._splitChunk(chunk, charIndex);
							chunk = chunk.next;
							chunk.prependRight(indentStr);
						}
					}
				}

				charIndex += 1;
			}
		}

		charIndex = chunk.end;
		chunk = chunk.next;
	}

	this.outro = this.outro.replace(pattern, replacer);

	return this;
};

MagicString.prototype.insert = function insert () {
	throw new Error('magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)');
};

MagicString.prototype.insertLeft = function insertLeft (index, content) {
	if (!warned.insertLeft) {
		console.warn('magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead'); // eslint-disable-line no-console
		warned.insertLeft = true;
	}

	return this.appendLeft(index, content);
};

MagicString.prototype.insertRight = function insertRight (index, content) {
	if (!warned.insertRight) {
		console.warn('magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead'); // eslint-disable-line no-console
		warned.insertRight = true;
	}

	return this.prependRight(index, content);
};

MagicString.prototype.move = function move (start, end, index) {
	if (index >= start && index <= end) { throw new Error('Cannot move a selection inside itself'); }

	this._split(start);
	this._split(end);
	this._split(index);

	var first = this.byStart[start];
	var last = this.byEnd[end];

	var oldLeft = first.previous;
	var oldRight = last.next;

	var newRight = this.byStart[index];
	if (!newRight && last === this.lastChunk) { return this; }
	var newLeft = newRight ? newRight.previous : this.lastChunk;

	if (oldLeft) { oldLeft.next = oldRight; }
	if (oldRight) { oldRight.previous = oldLeft; }

	if (newLeft) { newLeft.next = first; }
	if (newRight) { newRight.previous = last; }

	if (!first.previous) { this.firstChunk = last.next; }
	if (!last.next) {
		this.lastChunk = first.previous;
		this.lastChunk.next = null;
	}

	first.previous = newLeft;
	last.next = newRight || null;

	if (!newLeft) { this.firstChunk = first; }
	if (!newRight) { this.lastChunk = last; }
	return this;
};

MagicString.prototype.overwrite = function overwrite (start, end, content, options) {
	if (typeof content !== 'string') { throw new TypeError('replacement content must be a string'); }

	while (start < 0) { start += this.original.length; }
	while (end < 0) { end += this.original.length; }

	if (end > this.original.length) { throw new Error('end is out of bounds'); }
	if (start === end)
		{ throw new Error('Cannot overwrite a zero-length range – use appendLeft or prependRight instead'); }

	this._split(start);
	this._split(end);

	if (options === true) {
		if (!warned.storeName) {
			console.warn('The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string'); // eslint-disable-line no-console
			warned.storeName = true;
		}

		options = { storeName: true };
	}
	var storeName = options !== undefined ? options.storeName : false;
	var contentOnly = options !== undefined ? options.contentOnly : false;

	if (storeName) {
		var original = this.original.slice(start, end);
		this.storedNames[original] = true;
	}

	var first = this.byStart[start];
	var last = this.byEnd[end];

	if (first) {
		if (end > first.end && first.next !== this.byStart[first.end]) {
			throw new Error('Cannot overwrite across a split point');
		}

		first.edit(content, storeName, contentOnly);

		if (first !== last) {
			var chunk = first.next;
			while (chunk !== last) {
				chunk.edit('', false);
				chunk = chunk.next;
			}

			chunk.edit('', false);
		}
	} else {
		// must be inserting at the end
		var newChunk = new Chunk(start, end, '').edit(content, storeName);

		// TODO last chunk in the array may not be the last chunk, if it's moved...
		last.next = newChunk;
		newChunk.previous = last;
	}
	return this;
};

MagicString.prototype.prepend = function prepend (content) {
	if (typeof content !== 'string') { throw new TypeError('outro content must be a string'); }

	this.intro = content + this.intro;
	return this;
};

MagicString.prototype.prependLeft = function prependLeft (index, content) {
	if (typeof content !== 'string') { throw new TypeError('inserted content must be a string'); }

	this._split(index);

	var chunk = this.byEnd[index];

	if (chunk) {
		chunk.prependLeft(content);
	} else {
		this.intro = content + this.intro;
	}
	return this;
};

MagicString.prototype.prependRight = function prependRight (index, content) {
	if (typeof content !== 'string') { throw new TypeError('inserted content must be a string'); }

	this._split(index);

	var chunk = this.byStart[index];

	if (chunk) {
		chunk.prependRight(content);
	} else {
		this.outro = content + this.outro;
	}
	return this;
};

MagicString.prototype.remove = function remove (start, end) {
	while (start < 0) { start += this.original.length; }
	while (end < 0) { end += this.original.length; }

	if (start === end) { return this; }

	if (start < 0 || end > this.original.length) { throw new Error('Character is out of bounds'); }
	if (start > end) { throw new Error('end must be greater than start'); }

	this._split(start);
	this._split(end);

	var chunk = this.byStart[start];

	while (chunk) {
		chunk.intro = '';
		chunk.outro = '';
		chunk.edit('');

		chunk = end > chunk.end ? this.byStart[chunk.end] : null;
	}
	return this;
};

MagicString.prototype.lastChar = function lastChar () {
	if (this.outro.length)
		{ return this.outro[this.outro.length - 1]; }
	var chunk = this.lastChunk;
	do {
		if (chunk.outro.length)
			{ return chunk.outro[chunk.outro.length - 1]; }
		if (chunk.content.length)
			{ return chunk.content[chunk.content.length - 1]; }
		if (chunk.intro.length)
			{ return chunk.intro[chunk.intro.length - 1]; }
	} while (chunk = chunk.previous);
	if (this.intro.length)
		{ return this.intro[this.intro.length - 1]; }
	return '';
};

MagicString.prototype.lastLine = function lastLine () {
	var lineIndex = this.outro.lastIndexOf(n);
	if (lineIndex !== -1)
		{ return this.outro.substr(lineIndex + 1); }
	var lineStr = this.outro;
	var chunk = this.lastChunk;
	do {
		if (chunk.outro.length > 0) {
			lineIndex = chunk.outro.lastIndexOf(n);
			if (lineIndex !== -1)
				{ return chunk.outro.substr(lineIndex + 1) + lineStr; }
			lineStr = chunk.outro + lineStr;
		}

		if (chunk.content.length > 0) {
			lineIndex = chunk.content.lastIndexOf(n);
			if (lineIndex !== -1)
				{ return chunk.content.substr(lineIndex + 1) + lineStr; }
			lineStr = chunk.content + lineStr;
		}

		if (chunk.intro.length > 0) {
			lineIndex = chunk.intro.lastIndexOf(n);
			if (lineIndex !== -1)
				{ return chunk.intro.substr(lineIndex + 1) + lineStr; }
			lineStr = chunk.intro + lineStr;
		}
	} while (chunk = chunk.previous);
	lineIndex = this.intro.lastIndexOf(n);
	if (lineIndex !== -1)
		{ return this.intro.substr(lineIndex + 1) + lineStr; }
	return this.intro + lineStr;
};

MagicString.prototype.slice = function slice (start, end) {
		if ( start === void 0 ) start = 0;
		if ( end === void 0 ) end = this.original.length;

	while (start < 0) { start += this.original.length; }
	while (end < 0) { end += this.original.length; }

	var result = '';

	// find start chunk
	var chunk = this.firstChunk;
	while (chunk && (chunk.start > start || chunk.end <= start)) {
		// found end chunk before start
		if (chunk.start < end && chunk.end >= end) {
			return result;
		}

		chunk = chunk.next;
	}

	if (chunk && chunk.edited && chunk.start !== start)
		{ throw new Error(("Cannot use replaced character " + start + " as slice start anchor.")); }

	var startChunk = chunk;
	while (chunk) {
		if (chunk.intro && (startChunk !== chunk || chunk.start === start)) {
			result += chunk.intro;
		}

		var containsEnd = chunk.start < end && chunk.end >= end;
		if (containsEnd && chunk.edited && chunk.end !== end)
			{ throw new Error(("Cannot use replaced character " + end + " as slice end anchor.")); }

		var sliceStart = startChunk === chunk ? start - chunk.start : 0;
		var sliceEnd = containsEnd ? chunk.content.length + end - chunk.end : chunk.content.length;

		result += chunk.content.slice(sliceStart, sliceEnd);

		if (chunk.outro && (!containsEnd || chunk.end === end)) {
			result += chunk.outro;
		}

		if (containsEnd) {
			break;
		}

		chunk = chunk.next;
	}

	return result;
};

// TODO deprecate this? not really very useful
MagicString.prototype.snip = function snip (start, end) {
	var clone = this.clone();
	clone.remove(0, start);
	clone.remove(end, clone.original.length);

	return clone;
};

MagicString.prototype._split = function _split (index) {
	if (this.byStart[index] || this.byEnd[index]) { return; }

	var chunk = this.lastSearchedChunk;
	var searchForward = index > chunk.end;

	while (chunk) {
		if (chunk.contains(index)) { return this._splitChunk(chunk, index); }

		chunk = searchForward ? this.byStart[chunk.end] : this.byEnd[chunk.start];
	}
};

MagicString.prototype._splitChunk = function _splitChunk (chunk, index) {
	if (chunk.edited && chunk.content.length) {
		// zero-length edited chunks are a special case (overlapping replacements)
		var loc = getLocator(this.original)(index);
		throw new Error(
			("Cannot split a chunk that has already been edited (" + (loc.line) + ":" + (loc.column) + " – \"" + (chunk.original) + "\")")
		);
	}

	var newChunk = chunk.split(index);

	this.byEnd[index] = chunk;
	this.byStart[index] = newChunk;
	this.byEnd[newChunk.end] = newChunk;

	if (chunk === this.lastChunk) { this.lastChunk = newChunk; }

	this.lastSearchedChunk = chunk;
	return true;
};

MagicString.prototype.toString = function toString () {
	var str = this.intro;

	var chunk = this.firstChunk;
	while (chunk) {
		str += chunk.toString();
		chunk = chunk.next;
	}

	return str + this.outro;
};

MagicString.prototype.isEmpty = function isEmpty () {
	var chunk = this.firstChunk;
	do {
		if (chunk.intro.length && chunk.intro.trim() ||
				chunk.content.length && chunk.content.trim() ||
				chunk.outro.length && chunk.outro.trim())
			{ return false; }
	} while (chunk = chunk.next);
	return true;
};

MagicString.prototype.length = function length () {
	var chunk = this.firstChunk;
	var length = 0;
	do {
		length += chunk.intro.length + chunk.content.length + chunk.outro.length;
	} while (chunk = chunk.next);
	return length;
};

MagicString.prototype.trimLines = function trimLines () {
	return this.trim('[\\r\\n]');
};

MagicString.prototype.trim = function trim (charType) {
	return this.trimStart(charType).trimEnd(charType);
};

MagicString.prototype.trimEndAborted = function trimEndAborted (charType) {
	var rx = new RegExp((charType || '\\s') + '+$');

	this.outro = this.outro.replace(rx, '');
	if (this.outro.length) { return true; }

	var chunk = this.lastChunk;

	do {
		var end = chunk.end;
		var aborted = chunk.trimEnd(rx);

		// if chunk was trimmed, we have a new lastChunk
		if (chunk.end !== end) {
			if (this.lastChunk === chunk) {
				this.lastChunk = chunk.next;
			}

			this.byEnd[chunk.end] = chunk;
			this.byStart[chunk.next.start] = chunk.next;
			this.byEnd[chunk.next.end] = chunk.next;
		}

		if (aborted) { return true; }
		chunk = chunk.previous;
	} while (chunk);

	return false;
};

MagicString.prototype.trimEnd = function trimEnd (charType) {
	this.trimEndAborted(charType);
	return this;
};
MagicString.prototype.trimStartAborted = function trimStartAborted (charType) {
	var rx = new RegExp('^' + (charType || '\\s') + '+');

	this.intro = this.intro.replace(rx, '');
	if (this.intro.length) { return true; }

	var chunk = this.firstChunk;

	do {
		var end = chunk.end;
		var aborted = chunk.trimStart(rx);

		if (chunk.end !== end) {
			// special case...
			if (chunk === this.lastChunk) { this.lastChunk = chunk.next; }

			this.byEnd[chunk.end] = chunk;
			this.byStart[chunk.next.start] = chunk.next;
			this.byEnd[chunk.next.end] = chunk.next;
		}

		if (aborted) { return true; }
		chunk = chunk.next;
	} while (chunk);

	return false;
};

MagicString.prototype.trimStart = function trimStart (charType) {
	this.trimStartAborted(charType);
	return this;
};

var hasOwnProp = Object.prototype.hasOwnProperty;

var Bundle = function Bundle(options) {
	if ( options === void 0 ) options = {};

	this.intro = options.intro || '';
	this.separator = options.separator !== undefined ? options.separator : '\n';
	this.sources = [];
	this.uniqueSources = [];
	this.uniqueSourceIndexByFilename = {};
};

Bundle.prototype.addSource = function addSource (source) {
	if (source instanceof MagicString) {
		return this.addSource({
			content: source,
			filename: source.filename,
			separator: this.separator
		});
	}

	if (!isObject(source) || !source.content) {
		throw new Error('bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`');
	}

	['filename', 'indentExclusionRanges', 'separator'].forEach(function (option) {
		if (!hasOwnProp.call(source, option)) { source[option] = source.content[option]; }
	});

	if (source.separator === undefined) {
		// TODO there's a bunch of this sort of thing, needs cleaning up
		source.separator = this.separator;
	}

	if (source.filename) {
		if (!hasOwnProp.call(this.uniqueSourceIndexByFilename, source.filename)) {
			this.uniqueSourceIndexByFilename[source.filename] = this.uniqueSources.length;
			this.uniqueSources.push({ filename: source.filename, content: source.content.original });
		} else {
			var uniqueSource = this.uniqueSources[this.uniqueSourceIndexByFilename[source.filename]];
			if (source.content.original !== uniqueSource.content) {
				throw new Error(("Illegal source: same filename (" + (source.filename) + "), different contents"));
			}
		}
	}

	this.sources.push(source);
	return this;
};

Bundle.prototype.append = function append (str, options) {
	this.addSource({
		content: new MagicString(str),
		separator: (options && options.separator) || ''
	});

	return this;
};

Bundle.prototype.clone = function clone () {
	var bundle = new Bundle({
		intro: this.intro,
		separator: this.separator
	});

	this.sources.forEach(function (source) {
		bundle.addSource({
			filename: source.filename,
			content: source.content.clone(),
			separator: source.separator
		});
	});

	return bundle;
};

Bundle.prototype.generateDecodedMap = function generateDecodedMap (options) {
		var this$1$1 = this;
		if ( options === void 0 ) options = {};

	var names = [];
	this.sources.forEach(function (source) {
		Object.keys(source.content.storedNames).forEach(function (name) {
			if (!~names.indexOf(name)) { names.push(name); }
		});
	});

	var mappings = new Mappings(options.hires);

	if (this.intro) {
		mappings.advance(this.intro);
	}

	this.sources.forEach(function (source, i) {
		if (i > 0) {
			mappings.advance(this$1$1.separator);
		}

		var sourceIndex = source.filename ? this$1$1.uniqueSourceIndexByFilename[source.filename] : -1;
		var magicString = source.content;
		var locate = getLocator(magicString.original);

		if (magicString.intro) {
			mappings.advance(magicString.intro);
		}

		magicString.firstChunk.eachNext(function (chunk) {
			var loc = locate(chunk.start);

			if (chunk.intro.length) { mappings.advance(chunk.intro); }

			if (source.filename) {
				if (chunk.edited) {
					mappings.addEdit(
						sourceIndex,
						chunk.content,
						loc,
						chunk.storeName ? names.indexOf(chunk.original) : -1
					);
				} else {
					mappings.addUneditedChunk(
						sourceIndex,
						chunk,
						magicString.original,
						loc,
						magicString.sourcemapLocations
					);
				}
			} else {
				mappings.advance(chunk.content);
			}

			if (chunk.outro.length) { mappings.advance(chunk.outro); }
		});

		if (magicString.outro) {
			mappings.advance(magicString.outro);
		}
	});

	return {
		file: options.file ? options.file.split(/[/\\]/).pop() : null,
		sources: this.uniqueSources.map(function (source) {
			return options.file ? getRelativePath(options.file, source.filename) : source.filename;
		}),
		sourcesContent: this.uniqueSources.map(function (source) {
			return options.includeContent ? source.content : null;
		}),
		names: names,
		mappings: mappings.raw
	};
};

Bundle.prototype.generateMap = function generateMap (options) {
	return new SourceMap(this.generateDecodedMap(options));
};

Bundle.prototype.getIndentString = function getIndentString () {
	var indentStringCounts = {};

	this.sources.forEach(function (source) {
		var indentStr = source.content.indentStr;

		if (indentStr === null) { return; }

		if (!indentStringCounts[indentStr]) { indentStringCounts[indentStr] = 0; }
		indentStringCounts[indentStr] += 1;
	});

	return (
		Object.keys(indentStringCounts).sort(function (a, b) {
			return indentStringCounts[a] - indentStringCounts[b];
		})[0] || '\t'
	);
};

Bundle.prototype.indent = function indent (indentStr) {
		var this$1$1 = this;

	if (!arguments.length) {
		indentStr = this.getIndentString();
	}

	if (indentStr === '') { return this; } // noop

	var trailingNewline = !this.intro || this.intro.slice(-1) === '\n';

	this.sources.forEach(function (source, i) {
		var separator = source.separator !== undefined ? source.separator : this$1$1.separator;
		var indentStart = trailingNewline || (i > 0 && /\r?\n$/.test(separator));

		source.content.indent(indentStr, {
			exclude: source.indentExclusionRanges,
			indentStart: indentStart //: trailingNewline || /\r?\n$/.test( separator )  //true///\r?\n/.test( separator )
		});

		trailingNewline = source.content.lastChar() === '\n';
	});

	if (this.intro) {
		this.intro =
			indentStr +
			this.intro.replace(/^[^\n]/gm, function (match, index) {
				return index > 0 ? indentStr + match : match;
			});
	}

	return this;
};

Bundle.prototype.prepend = function prepend (str) {
	this.intro = str + this.intro;
	return this;
};

Bundle.prototype.toString = function toString () {
		var this$1$1 = this;

	var body = this.sources
		.map(function (source, i) {
			var separator = source.separator !== undefined ? source.separator : this$1$1.separator;
			var str = (i > 0 ? separator : '') + source.content.toString();

			return str;
		})
		.join('');

	return this.intro + body;
};

Bundle.prototype.isEmpty = function isEmpty () {
	if (this.intro.length && this.intro.trim())
		{ return false; }
	if (this.sources.some(function (source) { return !source.content.isEmpty(); }))
		{ return false; }
	return true;
};

Bundle.prototype.length = function length () {
	return this.sources.reduce(function (length, source) { return length + source.content.length(); }, this.intro.length);
};

Bundle.prototype.trimLines = function trimLines () {
	return this.trim('[\\r\\n]');
};

Bundle.prototype.trim = function trim (charType) {
	return this.trimStart(charType).trimEnd(charType);
};

Bundle.prototype.trimStart = function trimStart (charType) {
	var rx = new RegExp('^' + (charType || '\\s') + '+');
	this.intro = this.intro.replace(rx, '');

	if (!this.intro) {
		var source;
		var i = 0;

		do {
			source = this.sources[i++];
			if (!source) {
				break;
			}
		} while (!source.content.trimStartAborted(charType));
	}

	return this;
};

Bundle.prototype.trimEnd = function trimEnd (charType) {
	var rx = new RegExp((charType || '\\s') + '+$');

	var source;
	var i = this.sources.length - 1;

	do {
		source = this.sources[i--];
		if (!source) {
			this.intro = this.intro.replace(rx, '');
			break;
		}
	} while (!source.content.trimEndAborted(charType));

	return this;
};

export { Bundle, SourceMap, MagicString as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFnaWMtc3RyaW5nLmVzLTk0MDAwYWVhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc291cmNlbWFwLWNvZGVjQDEuNC44L25vZGVfbW9kdWxlcy9zb3VyY2VtYXAtY29kZWMvZGlzdC9zb3VyY2VtYXAtY29kZWMuZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWFnaWMtc3RyaW5nQDAuMjUuNy9ub2RlX21vZHVsZXMvbWFnaWMtc3RyaW5nL2Rpc3QvbWFnaWMtc3RyaW5nLmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjaGFyVG9JbnRlZ2VyID0ge307XG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykge1xuICAgIGNoYXJUb0ludGVnZXJbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpO1xufVxuZnVuY3Rpb24gZGVjb2RlKG1hcHBpbmdzKSB7XG4gICAgdmFyIGRlY29kZWQgPSBbXTtcbiAgICB2YXIgbGluZSA9IFtdO1xuICAgIHZhciBzZWdtZW50ID0gW1xuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgIF07XG4gICAgdmFyIGogPSAwO1xuICAgIGZvciAodmFyIGkgPSAwLCBzaGlmdCA9IDAsIHZhbHVlID0gMDsgaSA8IG1hcHBpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gbWFwcGluZ3MuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPT09IDQ0KSB7IC8vIFwiLFwiXG4gICAgICAgICAgICBzZWdtZW50aWZ5KGxpbmUsIHNlZ21lbnQsIGopO1xuICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA9PT0gNTkpIHsgLy8gXCI7XCJcbiAgICAgICAgICAgIHNlZ21lbnRpZnkobGluZSwgc2VnbWVudCwgaik7XG4gICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgIGRlY29kZWQucHVzaChsaW5lKTtcbiAgICAgICAgICAgIGxpbmUgPSBbXTtcbiAgICAgICAgICAgIHNlZ21lbnRbMF0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGludGVnZXIgPSBjaGFyVG9JbnRlZ2VyW2NdO1xuICAgICAgICAgICAgaWYgKGludGVnZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgKCcgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpICsgJyknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoYXNDb250aW51YXRpb25CaXQgPSBpbnRlZ2VyICYgMzI7XG4gICAgICAgICAgICBpbnRlZ2VyICY9IDMxO1xuICAgICAgICAgICAgdmFsdWUgKz0gaW50ZWdlciA8PCBzaGlmdDtcbiAgICAgICAgICAgIGlmIChoYXNDb250aW51YXRpb25CaXQpIHtcbiAgICAgICAgICAgICAgICBzaGlmdCArPSA1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHNob3VsZE5lZ2F0ZSA9IHZhbHVlICYgMTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA+Pj49IDE7XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZE5lZ2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID09PSAwID8gLTB4ODAwMDAwMDAgOiAtdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlZ21lbnRbal0gKz0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gc2hpZnQgPSAwOyAvLyByZXNldFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNlZ21lbnRpZnkobGluZSwgc2VnbWVudCwgaik7XG4gICAgZGVjb2RlZC5wdXNoKGxpbmUpO1xuICAgIHJldHVybiBkZWNvZGVkO1xufVxuZnVuY3Rpb24gc2VnbWVudGlmeShsaW5lLCBzZWdtZW50LCBqKSB7XG4gICAgLy8gVGhpcyBsb29rcyB1Z2x5LCBidXQgd2UncmUgY3JlYXRpbmcgc3BlY2lhbGl6ZWQgYXJyYXlzIHdpdGggYSBzcGVjaWZpY1xuICAgIC8vIGxlbmd0aC4gVGhpcyBpcyBtdWNoIGZhc3RlciB0aGFuIGNyZWF0aW5nIGEgbmV3IGFycmF5ICh3aGljaCB2OCBleHBhbmRzIHRvXG4gICAgLy8gYSBjYXBhY2l0eSBvZiAxNyBhZnRlciBwdXNoaW5nIHRoZSBmaXJzdCBpdGVtKSwgb3Igc2xpY2luZyBvdXQgYSBzdWJhcnJheVxuICAgIC8vICh3aGljaCBpcyBzbG93KS4gTGVuZ3RoIDQgaXMgYXNzdW1lZCB0byBiZSB0aGUgbW9zdCBmcmVxdWVudCwgZm9sbG93ZWQgYnlcbiAgICAvLyBsZW5ndGggNSAoc2luY2Ugbm90IGV2ZXJ5dGhpbmcgd2lsbCBoYXZlIGFuIGFzc29jaWF0ZWQgbmFtZSksIGZvbGxvd2VkIGJ5XG4gICAgLy8gbGVuZ3RoIDEgKGl0J3MgcHJvYmFibHkgcmFyZSBmb3IgYSBzb3VyY2Ugc3Vic3RyaW5nIHRvIG5vdCBoYXZlIGFuXG4gICAgLy8gYXNzb2NpYXRlZCBzZWdtZW50IGRhdGEpLlxuICAgIGlmIChqID09PSA0KVxuICAgICAgICBsaW5lLnB1c2goW3NlZ21lbnRbMF0sIHNlZ21lbnRbMV0sIHNlZ21lbnRbMl0sIHNlZ21lbnRbM11dKTtcbiAgICBlbHNlIGlmIChqID09PSA1KVxuICAgICAgICBsaW5lLnB1c2goW3NlZ21lbnRbMF0sIHNlZ21lbnRbMV0sIHNlZ21lbnRbMl0sIHNlZ21lbnRbM10sIHNlZ21lbnRbNF1dKTtcbiAgICBlbHNlIGlmIChqID09PSAxKVxuICAgICAgICBsaW5lLnB1c2goW3NlZ21lbnRbMF1dKTtcbn1cbmZ1bmN0aW9uIGVuY29kZShkZWNvZGVkKSB7XG4gICAgdmFyIHNvdXJjZUZpbGVJbmRleCA9IDA7IC8vIHNlY29uZCBmaWVsZFxuICAgIHZhciBzb3VyY2VDb2RlTGluZSA9IDA7IC8vIHRoaXJkIGZpZWxkXG4gICAgdmFyIHNvdXJjZUNvZGVDb2x1bW4gPSAwOyAvLyBmb3VydGggZmllbGRcbiAgICB2YXIgbmFtZUluZGV4ID0gMDsgLy8gZmlmdGggZmllbGRcbiAgICB2YXIgbWFwcGluZ3MgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlY29kZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGxpbmUgPSBkZWNvZGVkW2ldO1xuICAgICAgICBpZiAoaSA+IDApXG4gICAgICAgICAgICBtYXBwaW5ncyArPSAnOyc7XG4gICAgICAgIGlmIChsaW5lLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB2YXIgZ2VuZXJhdGVkQ29kZUNvbHVtbiA9IDA7IC8vIGZpcnN0IGZpZWxkXG4gICAgICAgIHZhciBsaW5lTWFwcGluZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBsaW5lXzEgPSBsaW5lOyBfaSA8IGxpbmVfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBzZWdtZW50ID0gbGluZV8xW19pXTtcbiAgICAgICAgICAgIHZhciBzZWdtZW50TWFwcGluZ3MgPSBlbmNvZGVJbnRlZ2VyKHNlZ21lbnRbMF0gLSBnZW5lcmF0ZWRDb2RlQ29sdW1uKTtcbiAgICAgICAgICAgIGdlbmVyYXRlZENvZGVDb2x1bW4gPSBzZWdtZW50WzBdO1xuICAgICAgICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnRNYXBwaW5ncyArPVxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVJbnRlZ2VyKHNlZ21lbnRbMV0gLSBzb3VyY2VGaWxlSW5kZXgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kZUludGVnZXIoc2VnbWVudFsyXSAtIHNvdXJjZUNvZGVMaW5lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGVJbnRlZ2VyKHNlZ21lbnRbM10gLSBzb3VyY2VDb2RlQ29sdW1uKTtcbiAgICAgICAgICAgICAgICBzb3VyY2VGaWxlSW5kZXggPSBzZWdtZW50WzFdO1xuICAgICAgICAgICAgICAgIHNvdXJjZUNvZGVMaW5lID0gc2VnbWVudFsyXTtcbiAgICAgICAgICAgICAgICBzb3VyY2VDb2RlQ29sdW1uID0gc2VnbWVudFszXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnRNYXBwaW5ncyArPSBlbmNvZGVJbnRlZ2VyKHNlZ21lbnRbNF0gLSBuYW1lSW5kZXgpO1xuICAgICAgICAgICAgICAgIG5hbWVJbmRleCA9IHNlZ21lbnRbNF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW5lTWFwcGluZ3MucHVzaChzZWdtZW50TWFwcGluZ3MpO1xuICAgICAgICB9XG4gICAgICAgIG1hcHBpbmdzICs9IGxpbmVNYXBwaW5ncy5qb2luKCcsJyk7XG4gICAgfVxuICAgIHJldHVybiBtYXBwaW5ncztcbn1cbmZ1bmN0aW9uIGVuY29kZUludGVnZXIobnVtKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIG51bSA9IG51bSA8IDAgPyAoLW51bSA8PCAxKSB8IDEgOiBudW0gPDwgMTtcbiAgICBkbyB7XG4gICAgICAgIHZhciBjbGFtcGVkID0gbnVtICYgMzE7XG4gICAgICAgIG51bSA+Pj49IDU7XG4gICAgICAgIGlmIChudW0gPiAwKSB7XG4gICAgICAgICAgICBjbGFtcGVkIHw9IDMyO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSBjaGFyc1tjbGFtcGVkXTtcbiAgICB9IHdoaWxlIChudW0gPiAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgeyBkZWNvZGUsIGVuY29kZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c291cmNlbWFwLWNvZGVjLmVzLmpzLm1hcFxuIiwiaW1wb3J0IHsgZW5jb2RlIH0gZnJvbSAnc291cmNlbWFwLWNvZGVjJztcblxudmFyIEJpdFNldCA9IGZ1bmN0aW9uIEJpdFNldChhcmcpIHtcblx0dGhpcy5iaXRzID0gYXJnIGluc3RhbmNlb2YgQml0U2V0ID8gYXJnLmJpdHMuc2xpY2UoKSA6IFtdO1xufTtcblxuQml0U2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKG4pIHtcblx0dGhpcy5iaXRzW24gPj4gNV0gfD0gMSA8PCAobiAmIDMxKTtcbn07XG5cbkJpdFNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzIChuKSB7XG5cdHJldHVybiAhISh0aGlzLmJpdHNbbiA+PiA1XSAmICgxIDw8IChuICYgMzEpKSk7XG59O1xuXG52YXIgQ2h1bmsgPSBmdW5jdGlvbiBDaHVuayhzdGFydCwgZW5kLCBjb250ZW50KSB7XG5cdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0dGhpcy5lbmQgPSBlbmQ7XG5cdHRoaXMub3JpZ2luYWwgPSBjb250ZW50O1xuXG5cdHRoaXMuaW50cm8gPSAnJztcblx0dGhpcy5vdXRybyA9ICcnO1xuXG5cdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cdHRoaXMuc3RvcmVOYW1lID0gZmFsc2U7XG5cdHRoaXMuZWRpdGVkID0gZmFsc2U7XG5cblx0Ly8gd2UgbWFrZSB0aGVzZSBub24tZW51bWVyYWJsZSwgZm9yIHNhbml0eSB3aGlsZSBkZWJ1Z2dpbmdcblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuXHRcdHByZXZpb3VzOiB7IHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogbnVsbCB9LFxuXHRcdG5leHQ6ICAgICB7IHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogbnVsbCB9XG5cdH0pO1xufTtcblxuQ2h1bmsucHJvdG90eXBlLmFwcGVuZExlZnQgPSBmdW5jdGlvbiBhcHBlbmRMZWZ0IChjb250ZW50KSB7XG5cdHRoaXMub3V0cm8gKz0gY29udGVudDtcbn07XG5cbkNodW5rLnByb3RvdHlwZS5hcHBlbmRSaWdodCA9IGZ1bmN0aW9uIGFwcGVuZFJpZ2h0IChjb250ZW50KSB7XG5cdHRoaXMuaW50cm8gPSB0aGlzLmludHJvICsgY29udGVudDtcbn07XG5cbkNodW5rLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIGNsb25lICgpIHtcblx0dmFyIGNodW5rID0gbmV3IENodW5rKHRoaXMuc3RhcnQsIHRoaXMuZW5kLCB0aGlzLm9yaWdpbmFsKTtcblxuXHRjaHVuay5pbnRybyA9IHRoaXMuaW50cm87XG5cdGNodW5rLm91dHJvID0gdGhpcy5vdXRybztcblx0Y2h1bmsuY29udGVudCA9IHRoaXMuY29udGVudDtcblx0Y2h1bmsuc3RvcmVOYW1lID0gdGhpcy5zdG9yZU5hbWU7XG5cdGNodW5rLmVkaXRlZCA9IHRoaXMuZWRpdGVkO1xuXG5cdHJldHVybiBjaHVuaztcbn07XG5cbkNodW5rLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zIChpbmRleCkge1xuXHRyZXR1cm4gdGhpcy5zdGFydCA8IGluZGV4ICYmIGluZGV4IDwgdGhpcy5lbmQ7XG59O1xuXG5DaHVuay5wcm90b3R5cGUuZWFjaE5leHQgPSBmdW5jdGlvbiBlYWNoTmV4dCAoZm4pIHtcblx0dmFyIGNodW5rID0gdGhpcztcblx0d2hpbGUgKGNodW5rKSB7XG5cdFx0Zm4oY2h1bmspO1xuXHRcdGNodW5rID0gY2h1bmsubmV4dDtcblx0fVxufTtcblxuQ2h1bmsucHJvdG90eXBlLmVhY2hQcmV2aW91cyA9IGZ1bmN0aW9uIGVhY2hQcmV2aW91cyAoZm4pIHtcblx0dmFyIGNodW5rID0gdGhpcztcblx0d2hpbGUgKGNodW5rKSB7XG5cdFx0Zm4oY2h1bmspO1xuXHRcdGNodW5rID0gY2h1bmsucHJldmlvdXM7XG5cdH1cbn07XG5cbkNodW5rLnByb3RvdHlwZS5lZGl0ID0gZnVuY3Rpb24gZWRpdCAoY29udGVudCwgc3RvcmVOYW1lLCBjb250ZW50T25seSkge1xuXHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRpZiAoIWNvbnRlbnRPbmx5KSB7XG5cdFx0dGhpcy5pbnRybyA9ICcnO1xuXHRcdHRoaXMub3V0cm8gPSAnJztcblx0fVxuXHR0aGlzLnN0b3JlTmFtZSA9IHN0b3JlTmFtZTtcblxuXHR0aGlzLmVkaXRlZCA9IHRydWU7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5DaHVuay5wcm90b3R5cGUucHJlcGVuZExlZnQgPSBmdW5jdGlvbiBwcmVwZW5kTGVmdCAoY29udGVudCkge1xuXHR0aGlzLm91dHJvID0gY29udGVudCArIHRoaXMub3V0cm87XG59O1xuXG5DaHVuay5wcm90b3R5cGUucHJlcGVuZFJpZ2h0ID0gZnVuY3Rpb24gcHJlcGVuZFJpZ2h0IChjb250ZW50KSB7XG5cdHRoaXMuaW50cm8gPSBjb250ZW50ICsgdGhpcy5pbnRybztcbn07XG5cbkNodW5rLnByb3RvdHlwZS5zcGxpdCA9IGZ1bmN0aW9uIHNwbGl0IChpbmRleCkge1xuXHR2YXIgc2xpY2VJbmRleCA9IGluZGV4IC0gdGhpcy5zdGFydDtcblxuXHR2YXIgb3JpZ2luYWxCZWZvcmUgPSB0aGlzLm9yaWdpbmFsLnNsaWNlKDAsIHNsaWNlSW5kZXgpO1xuXHR2YXIgb3JpZ2luYWxBZnRlciA9IHRoaXMub3JpZ2luYWwuc2xpY2Uoc2xpY2VJbmRleCk7XG5cblx0dGhpcy5vcmlnaW5hbCA9IG9yaWdpbmFsQmVmb3JlO1xuXG5cdHZhciBuZXdDaHVuayA9IG5ldyBDaHVuayhpbmRleCwgdGhpcy5lbmQsIG9yaWdpbmFsQWZ0ZXIpO1xuXHRuZXdDaHVuay5vdXRybyA9IHRoaXMub3V0cm87XG5cdHRoaXMub3V0cm8gPSAnJztcblxuXHR0aGlzLmVuZCA9IGluZGV4O1xuXG5cdGlmICh0aGlzLmVkaXRlZCkge1xuXHRcdC8vIFRPRE8gaXMgdGhpcyBibG9jayBuZWNlc3Nhcnk/Li4uXG5cdFx0bmV3Q2h1bmsuZWRpdCgnJywgZmFsc2UpO1xuXHRcdHRoaXMuY29udGVudCA9ICcnO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuY29udGVudCA9IG9yaWdpbmFsQmVmb3JlO1xuXHR9XG5cblx0bmV3Q2h1bmsubmV4dCA9IHRoaXMubmV4dDtcblx0aWYgKG5ld0NodW5rLm5leHQpIHsgbmV3Q2h1bmsubmV4dC5wcmV2aW91cyA9IG5ld0NodW5rOyB9XG5cdG5ld0NodW5rLnByZXZpb3VzID0gdGhpcztcblx0dGhpcy5uZXh0ID0gbmV3Q2h1bms7XG5cblx0cmV0dXJuIG5ld0NodW5rO1xufTtcblxuQ2h1bmsucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuXHRyZXR1cm4gdGhpcy5pbnRybyArIHRoaXMuY29udGVudCArIHRoaXMub3V0cm87XG59O1xuXG5DaHVuay5wcm90b3R5cGUudHJpbUVuZCA9IGZ1bmN0aW9uIHRyaW1FbmQgKHJ4KSB7XG5cdHRoaXMub3V0cm8gPSB0aGlzLm91dHJvLnJlcGxhY2UocngsICcnKTtcblx0aWYgKHRoaXMub3V0cm8ubGVuZ3RoKSB7IHJldHVybiB0cnVlOyB9XG5cblx0dmFyIHRyaW1tZWQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZShyeCwgJycpO1xuXG5cdGlmICh0cmltbWVkLmxlbmd0aCkge1xuXHRcdGlmICh0cmltbWVkICE9PSB0aGlzLmNvbnRlbnQpIHtcblx0XHRcdHRoaXMuc3BsaXQodGhpcy5zdGFydCArIHRyaW1tZWQubGVuZ3RoKS5lZGl0KCcnLCB1bmRlZmluZWQsIHRydWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblxuXHR9IGVsc2Uge1xuXHRcdHRoaXMuZWRpdCgnJywgdW5kZWZpbmVkLCB0cnVlKTtcblxuXHRcdHRoaXMuaW50cm8gPSB0aGlzLmludHJvLnJlcGxhY2UocngsICcnKTtcblx0XHRpZiAodGhpcy5pbnRyby5sZW5ndGgpIHsgcmV0dXJuIHRydWU7IH1cblx0fVxufTtcblxuQ2h1bmsucHJvdG90eXBlLnRyaW1TdGFydCA9IGZ1bmN0aW9uIHRyaW1TdGFydCAocngpIHtcblx0dGhpcy5pbnRybyA9IHRoaXMuaW50cm8ucmVwbGFjZShyeCwgJycpO1xuXHRpZiAodGhpcy5pbnRyby5sZW5ndGgpIHsgcmV0dXJuIHRydWU7IH1cblxuXHR2YXIgdHJpbW1lZCA9IHRoaXMuY29udGVudC5yZXBsYWNlKHJ4LCAnJyk7XG5cblx0aWYgKHRyaW1tZWQubGVuZ3RoKSB7XG5cdFx0aWYgKHRyaW1tZWQgIT09IHRoaXMuY29udGVudCkge1xuXHRcdFx0dGhpcy5zcGxpdCh0aGlzLmVuZCAtIHRyaW1tZWQubGVuZ3RoKTtcblx0XHRcdHRoaXMuZWRpdCgnJywgdW5kZWZpbmVkLCB0cnVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cblx0fSBlbHNlIHtcblx0XHR0aGlzLmVkaXQoJycsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cblx0XHR0aGlzLm91dHJvID0gdGhpcy5vdXRyby5yZXBsYWNlKHJ4LCAnJyk7XG5cdFx0aWYgKHRoaXMub3V0cm8ubGVuZ3RoKSB7IHJldHVybiB0cnVlOyB9XG5cdH1cbn07XG5cbnZhciBidG9hID0gZnVuY3Rpb24gKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGVudmlyb25tZW50OiBgd2luZG93LmJ0b2FgIG9yIGBCdWZmZXJgIHNob3VsZCBiZSBzdXBwb3J0ZWQuJyk7XG59O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRidG9hID0gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gd2luZG93LmJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpKTsgfTtcbn0gZWxzZSBpZiAodHlwZW9mIEJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRidG9hID0gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gQnVmZmVyLmZyb20oc3RyLCAndXRmLTgnKS50b1N0cmluZygnYmFzZTY0Jyk7IH07XG59XG5cbnZhciBTb3VyY2VNYXAgPSBmdW5jdGlvbiBTb3VyY2VNYXAocHJvcGVydGllcykge1xuXHR0aGlzLnZlcnNpb24gPSAzO1xuXHR0aGlzLmZpbGUgPSBwcm9wZXJ0aWVzLmZpbGU7XG5cdHRoaXMuc291cmNlcyA9IHByb3BlcnRpZXMuc291cmNlcztcblx0dGhpcy5zb3VyY2VzQ29udGVudCA9IHByb3BlcnRpZXMuc291cmNlc0NvbnRlbnQ7XG5cdHRoaXMubmFtZXMgPSBwcm9wZXJ0aWVzLm5hbWVzO1xuXHR0aGlzLm1hcHBpbmdzID0gZW5jb2RlKHByb3BlcnRpZXMubWFwcGluZ3MpO1xufTtcblxuU291cmNlTWFwLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcblx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xufTtcblxuU291cmNlTWFwLnByb3RvdHlwZS50b1VybCA9IGZ1bmN0aW9uIHRvVXJsICgpIHtcblx0cmV0dXJuICdkYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJ0b2EodGhpcy50b1N0cmluZygpKTtcbn07XG5cbmZ1bmN0aW9uIGd1ZXNzSW5kZW50KGNvZGUpIHtcblx0dmFyIGxpbmVzID0gY29kZS5zcGxpdCgnXFxuJyk7XG5cblx0dmFyIHRhYmJlZCA9IGxpbmVzLmZpbHRlcihmdW5jdGlvbiAobGluZSkgeyByZXR1cm4gL15cXHQrLy50ZXN0KGxpbmUpOyB9KTtcblx0dmFyIHNwYWNlZCA9IGxpbmVzLmZpbHRlcihmdW5jdGlvbiAobGluZSkgeyByZXR1cm4gL14gezIsfS8udGVzdChsaW5lKTsgfSk7XG5cblx0aWYgKHRhYmJlZC5sZW5ndGggPT09IDAgJiYgc3BhY2VkLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gTW9yZSBsaW5lcyB0YWJiZWQgdGhhbiBzcGFjZWQ/IEFzc3VtZSB0YWJzLCBhbmRcblx0Ly8gZGVmYXVsdCB0byB0YWJzIGluIHRoZSBjYXNlIG9mIGEgdGllIChvciBub3RoaW5nXG5cdC8vIHRvIGdvIG9uKVxuXHRpZiAodGFiYmVkLmxlbmd0aCA+PSBzcGFjZWQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuICdcXHQnO1xuXHR9XG5cblx0Ly8gT3RoZXJ3aXNlLCB3ZSBuZWVkIHRvIGd1ZXNzIHRoZSBtdWx0aXBsZVxuXHR2YXIgbWluID0gc3BhY2VkLnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXMsIGN1cnJlbnQpIHtcblx0XHR2YXIgbnVtU3BhY2VzID0gL14gKy8uZXhlYyhjdXJyZW50KVswXS5sZW5ndGg7XG5cdFx0cmV0dXJuIE1hdGgubWluKG51bVNwYWNlcywgcHJldmlvdXMpO1xuXHR9LCBJbmZpbml0eSk7XG5cblx0cmV0dXJuIG5ldyBBcnJheShtaW4gKyAxKS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIGdldFJlbGF0aXZlUGF0aChmcm9tLCB0bykge1xuXHR2YXIgZnJvbVBhcnRzID0gZnJvbS5zcGxpdCgvWy9cXFxcXS8pO1xuXHR2YXIgdG9QYXJ0cyA9IHRvLnNwbGl0KC9bL1xcXFxdLyk7XG5cblx0ZnJvbVBhcnRzLnBvcCgpOyAvLyBnZXQgZGlybmFtZVxuXG5cdHdoaWxlIChmcm9tUGFydHNbMF0gPT09IHRvUGFydHNbMF0pIHtcblx0XHRmcm9tUGFydHMuc2hpZnQoKTtcblx0XHR0b1BhcnRzLnNoaWZ0KCk7XG5cdH1cblxuXHRpZiAoZnJvbVBhcnRzLmxlbmd0aCkge1xuXHRcdHZhciBpID0gZnJvbVBhcnRzLmxlbmd0aDtcblx0XHR3aGlsZSAoaS0tKSB7IGZyb21QYXJ0c1tpXSA9ICcuLic7IH1cblx0fVxuXG5cdHJldHVybiBmcm9tUGFydHMuY29uY2F0KHRvUGFydHMpLmpvaW4oJy8nKTtcbn1cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gaXNPYmplY3QodGhpbmcpIHtcblx0cmV0dXJuIHRvU3RyaW5nLmNhbGwodGhpbmcpID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYXRvcihzb3VyY2UpIHtcblx0dmFyIG9yaWdpbmFsTGluZXMgPSBzb3VyY2Uuc3BsaXQoJ1xcbicpO1xuXHR2YXIgbGluZU9mZnNldHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMCwgcG9zID0gMDsgaSA8IG9yaWdpbmFsTGluZXMubGVuZ3RoOyBpKyspIHtcblx0XHRsaW5lT2Zmc2V0cy5wdXNoKHBvcyk7XG5cdFx0cG9zICs9IG9yaWdpbmFsTGluZXNbaV0ubGVuZ3RoICsgMTtcblx0fVxuXG5cdHJldHVybiBmdW5jdGlvbiBsb2NhdGUoaW5kZXgpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0dmFyIGogPSBsaW5lT2Zmc2V0cy5sZW5ndGg7XG5cdFx0d2hpbGUgKGkgPCBqKSB7XG5cdFx0XHR2YXIgbSA9IChpICsgaikgPj4gMTtcblx0XHRcdGlmIChpbmRleCA8IGxpbmVPZmZzZXRzW21dKSB7XG5cdFx0XHRcdGogPSBtO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aSA9IG0gKyAxO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR2YXIgbGluZSA9IGkgLSAxO1xuXHRcdHZhciBjb2x1bW4gPSBpbmRleCAtIGxpbmVPZmZzZXRzW2xpbmVdO1xuXHRcdHJldHVybiB7IGxpbmU6IGxpbmUsIGNvbHVtbjogY29sdW1uIH07XG5cdH07XG59XG5cbnZhciBNYXBwaW5ncyA9IGZ1bmN0aW9uIE1hcHBpbmdzKGhpcmVzKSB7XG5cdHRoaXMuaGlyZXMgPSBoaXJlcztcblx0dGhpcy5nZW5lcmF0ZWRDb2RlTGluZSA9IDA7XG5cdHRoaXMuZ2VuZXJhdGVkQ29kZUNvbHVtbiA9IDA7XG5cdHRoaXMucmF3ID0gW107XG5cdHRoaXMucmF3U2VnbWVudHMgPSB0aGlzLnJhd1t0aGlzLmdlbmVyYXRlZENvZGVMaW5lXSA9IFtdO1xuXHR0aGlzLnBlbmRpbmcgPSBudWxsO1xufTtcblxuTWFwcGluZ3MucHJvdG90eXBlLmFkZEVkaXQgPSBmdW5jdGlvbiBhZGRFZGl0IChzb3VyY2VJbmRleCwgY29udGVudCwgbG9jLCBuYW1lSW5kZXgpIHtcblx0aWYgKGNvbnRlbnQubGVuZ3RoKSB7XG5cdFx0dmFyIHNlZ21lbnQgPSBbdGhpcy5nZW5lcmF0ZWRDb2RlQ29sdW1uLCBzb3VyY2VJbmRleCwgbG9jLmxpbmUsIGxvYy5jb2x1bW5dO1xuXHRcdGlmIChuYW1lSW5kZXggPj0gMCkge1xuXHRcdFx0c2VnbWVudC5wdXNoKG5hbWVJbmRleCk7XG5cdFx0fVxuXHRcdHRoaXMucmF3U2VnbWVudHMucHVzaChzZWdtZW50KTtcblx0fSBlbHNlIGlmICh0aGlzLnBlbmRpbmcpIHtcblx0XHR0aGlzLnJhd1NlZ21lbnRzLnB1c2godGhpcy5wZW5kaW5nKTtcblx0fVxuXG5cdHRoaXMuYWR2YW5jZShjb250ZW50KTtcblx0dGhpcy5wZW5kaW5nID0gbnVsbDtcbn07XG5cbk1hcHBpbmdzLnByb3RvdHlwZS5hZGRVbmVkaXRlZENodW5rID0gZnVuY3Rpb24gYWRkVW5lZGl0ZWRDaHVuayAoc291cmNlSW5kZXgsIGNodW5rLCBvcmlnaW5hbCwgbG9jLCBzb3VyY2VtYXBMb2NhdGlvbnMpIHtcblx0dmFyIG9yaWdpbmFsQ2hhckluZGV4ID0gY2h1bmsuc3RhcnQ7XG5cdHZhciBmaXJzdCA9IHRydWU7XG5cblx0d2hpbGUgKG9yaWdpbmFsQ2hhckluZGV4IDwgY2h1bmsuZW5kKSB7XG5cdFx0aWYgKHRoaXMuaGlyZXMgfHwgZmlyc3QgfHwgc291cmNlbWFwTG9jYXRpb25zLmhhcyhvcmlnaW5hbENoYXJJbmRleCkpIHtcblx0XHRcdHRoaXMucmF3U2VnbWVudHMucHVzaChbdGhpcy5nZW5lcmF0ZWRDb2RlQ29sdW1uLCBzb3VyY2VJbmRleCwgbG9jLmxpbmUsIGxvYy5jb2x1bW5dKTtcblx0XHR9XG5cblx0XHRpZiAob3JpZ2luYWxbb3JpZ2luYWxDaGFySW5kZXhdID09PSAnXFxuJykge1xuXHRcdFx0bG9jLmxpbmUgKz0gMTtcblx0XHRcdGxvYy5jb2x1bW4gPSAwO1xuXHRcdFx0dGhpcy5nZW5lcmF0ZWRDb2RlTGluZSArPSAxO1xuXHRcdFx0dGhpcy5yYXdbdGhpcy5nZW5lcmF0ZWRDb2RlTGluZV0gPSB0aGlzLnJhd1NlZ21lbnRzID0gW107XG5cdFx0XHR0aGlzLmdlbmVyYXRlZENvZGVDb2x1bW4gPSAwO1xuXHRcdFx0Zmlyc3QgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsb2MuY29sdW1uICs9IDE7XG5cdFx0XHR0aGlzLmdlbmVyYXRlZENvZGVDb2x1bW4gKz0gMTtcblx0XHRcdGZpcnN0ID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0b3JpZ2luYWxDaGFySW5kZXggKz0gMTtcblx0fVxuXG5cdHRoaXMucGVuZGluZyA9IG51bGw7XG59O1xuXG5NYXBwaW5ncy5wcm90b3R5cGUuYWR2YW5jZSA9IGZ1bmN0aW9uIGFkdmFuY2UgKHN0cikge1xuXHRpZiAoIXN0cikgeyByZXR1cm47IH1cblxuXHR2YXIgbGluZXMgPSBzdHIuc3BsaXQoJ1xcbicpO1xuXG5cdGlmIChsaW5lcy5sZW5ndGggPiAxKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdHRoaXMuZ2VuZXJhdGVkQ29kZUxpbmUrKztcblx0XHRcdHRoaXMucmF3W3RoaXMuZ2VuZXJhdGVkQ29kZUxpbmVdID0gdGhpcy5yYXdTZWdtZW50cyA9IFtdO1xuXHRcdH1cblx0XHR0aGlzLmdlbmVyYXRlZENvZGVDb2x1bW4gPSAwO1xuXHR9XG5cblx0dGhpcy5nZW5lcmF0ZWRDb2RlQ29sdW1uICs9IGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLmxlbmd0aDtcbn07XG5cbnZhciBuID0gJ1xcbic7XG5cbnZhciB3YXJuZWQgPSB7XG5cdGluc2VydExlZnQ6IGZhbHNlLFxuXHRpbnNlcnRSaWdodDogZmFsc2UsXG5cdHN0b3JlTmFtZTogZmFsc2Vcbn07XG5cbnZhciBNYWdpY1N0cmluZyA9IGZ1bmN0aW9uIE1hZ2ljU3RyaW5nKHN0cmluZywgb3B0aW9ucykge1xuXHRpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuXHR2YXIgY2h1bmsgPSBuZXcgQ2h1bmsoMCwgc3RyaW5nLmxlbmd0aCwgc3RyaW5nKTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG5cdFx0b3JpZ2luYWw6ICAgICAgICAgICAgICB7IHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogc3RyaW5nIH0sXG5cdFx0b3V0cm86ICAgICAgICAgICAgICAgICB7IHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogJycgfSxcblx0XHRpbnRybzogICAgICAgICAgICAgICAgIHsgd3JpdGFibGU6IHRydWUsIHZhbHVlOiAnJyB9LFxuXHRcdGZpcnN0Q2h1bms6ICAgICAgICAgICAgeyB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IGNodW5rIH0sXG5cdFx0bGFzdENodW5rOiAgICAgICAgICAgICB7IHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogY2h1bmsgfSxcblx0XHRsYXN0U2VhcmNoZWRDaHVuazogICAgIHsgd3JpdGFibGU6IHRydWUsIHZhbHVlOiBjaHVuayB9LFxuXHRcdGJ5U3RhcnQ6ICAgICAgICAgICAgICAgeyB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHt9IH0sXG5cdFx0YnlFbmQ6ICAgICAgICAgICAgICAgICB7IHdyaXRhYmxlOiB0cnVlLCB2YWx1ZToge30gfSxcblx0XHRmaWxlbmFtZTogICAgICAgICAgICAgIHsgd3JpdGFibGU6IHRydWUsIHZhbHVlOiBvcHRpb25zLmZpbGVuYW1lIH0sXG5cdFx0aW5kZW50RXhjbHVzaW9uUmFuZ2VzOiB7IHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogb3B0aW9ucy5pbmRlbnRFeGNsdXNpb25SYW5nZXMgfSxcblx0XHRzb3VyY2VtYXBMb2NhdGlvbnM6ICAgIHsgd3JpdGFibGU6IHRydWUsIHZhbHVlOiBuZXcgQml0U2V0KCkgfSxcblx0XHRzdG9yZWROYW1lczogICAgICAgICAgIHsgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB7fSB9LFxuXHRcdGluZGVudFN0cjogICAgICAgICAgICAgeyB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IGd1ZXNzSW5kZW50KHN0cmluZykgfVxuXHR9KTtcblxuXHR0aGlzLmJ5U3RhcnRbMF0gPSBjaHVuaztcblx0dGhpcy5ieUVuZFtzdHJpbmcubGVuZ3RoXSA9IGNodW5rO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLmFkZFNvdXJjZW1hcExvY2F0aW9uID0gZnVuY3Rpb24gYWRkU291cmNlbWFwTG9jYXRpb24gKGNoYXIpIHtcblx0dGhpcy5zb3VyY2VtYXBMb2NhdGlvbnMuYWRkKGNoYXIpO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIGFwcGVuZCAoY29udGVudCkge1xuXHRpZiAodHlwZW9mIGNvbnRlbnQgIT09ICdzdHJpbmcnKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ291dHJvIGNvbnRlbnQgbXVzdCBiZSBhIHN0cmluZycpOyB9XG5cblx0dGhpcy5vdXRybyArPSBjb250ZW50O1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbk1hZ2ljU3RyaW5nLnByb3RvdHlwZS5hcHBlbmRMZWZ0ID0gZnVuY3Rpb24gYXBwZW5kTGVmdCAoaW5kZXgsIGNvbnRlbnQpIHtcblx0aWYgKHR5cGVvZiBjb250ZW50ICE9PSAnc3RyaW5nJykgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnNlcnRlZCBjb250ZW50IG11c3QgYmUgYSBzdHJpbmcnKTsgfVxuXG5cdHRoaXMuX3NwbGl0KGluZGV4KTtcblxuXHR2YXIgY2h1bmsgPSB0aGlzLmJ5RW5kW2luZGV4XTtcblxuXHRpZiAoY2h1bmspIHtcblx0XHRjaHVuay5hcHBlbmRMZWZ0KGNvbnRlbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuaW50cm8gKz0gY29udGVudDtcblx0fVxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk1hZ2ljU3RyaW5nLnByb3RvdHlwZS5hcHBlbmRSaWdodCA9IGZ1bmN0aW9uIGFwcGVuZFJpZ2h0IChpbmRleCwgY29udGVudCkge1xuXHRpZiAodHlwZW9mIGNvbnRlbnQgIT09ICdzdHJpbmcnKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ2luc2VydGVkIGNvbnRlbnQgbXVzdCBiZSBhIHN0cmluZycpOyB9XG5cblx0dGhpcy5fc3BsaXQoaW5kZXgpO1xuXG5cdHZhciBjaHVuayA9IHRoaXMuYnlTdGFydFtpbmRleF07XG5cblx0aWYgKGNodW5rKSB7XG5cdFx0Y2h1bmsuYXBwZW5kUmlnaHQoY29udGVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5vdXRybyArPSBjb250ZW50O1xuXHR9XG5cdHJldHVybiB0aGlzO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gY2xvbmUgKCkge1xuXHR2YXIgY2xvbmVkID0gbmV3IE1hZ2ljU3RyaW5nKHRoaXMub3JpZ2luYWwsIHsgZmlsZW5hbWU6IHRoaXMuZmlsZW5hbWUgfSk7XG5cblx0dmFyIG9yaWdpbmFsQ2h1bmsgPSB0aGlzLmZpcnN0Q2h1bms7XG5cdHZhciBjbG9uZWRDaHVuayA9IChjbG9uZWQuZmlyc3RDaHVuayA9IGNsb25lZC5sYXN0U2VhcmNoZWRDaHVuayA9IG9yaWdpbmFsQ2h1bmsuY2xvbmUoKSk7XG5cblx0d2hpbGUgKG9yaWdpbmFsQ2h1bmspIHtcblx0XHRjbG9uZWQuYnlTdGFydFtjbG9uZWRDaHVuay5zdGFydF0gPSBjbG9uZWRDaHVuaztcblx0XHRjbG9uZWQuYnlFbmRbY2xvbmVkQ2h1bmsuZW5kXSA9IGNsb25lZENodW5rO1xuXG5cdFx0dmFyIG5leHRPcmlnaW5hbENodW5rID0gb3JpZ2luYWxDaHVuay5uZXh0O1xuXHRcdHZhciBuZXh0Q2xvbmVkQ2h1bmsgPSBuZXh0T3JpZ2luYWxDaHVuayAmJiBuZXh0T3JpZ2luYWxDaHVuay5jbG9uZSgpO1xuXG5cdFx0aWYgKG5leHRDbG9uZWRDaHVuaykge1xuXHRcdFx0Y2xvbmVkQ2h1bmsubmV4dCA9IG5leHRDbG9uZWRDaHVuaztcblx0XHRcdG5leHRDbG9uZWRDaHVuay5wcmV2aW91cyA9IGNsb25lZENodW5rO1xuXG5cdFx0XHRjbG9uZWRDaHVuayA9IG5leHRDbG9uZWRDaHVuaztcblx0XHR9XG5cblx0XHRvcmlnaW5hbENodW5rID0gbmV4dE9yaWdpbmFsQ2h1bms7XG5cdH1cblxuXHRjbG9uZWQubGFzdENodW5rID0gY2xvbmVkQ2h1bms7XG5cblx0aWYgKHRoaXMuaW5kZW50RXhjbHVzaW9uUmFuZ2VzKSB7XG5cdFx0Y2xvbmVkLmluZGVudEV4Y2x1c2lvblJhbmdlcyA9IHRoaXMuaW5kZW50RXhjbHVzaW9uUmFuZ2VzLnNsaWNlKCk7XG5cdH1cblxuXHRjbG9uZWQuc291cmNlbWFwTG9jYXRpb25zID0gbmV3IEJpdFNldCh0aGlzLnNvdXJjZW1hcExvY2F0aW9ucyk7XG5cblx0Y2xvbmVkLmludHJvID0gdGhpcy5pbnRybztcblx0Y2xvbmVkLm91dHJvID0gdGhpcy5vdXRybztcblxuXHRyZXR1cm4gY2xvbmVkO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLmdlbmVyYXRlRGVjb2RlZE1hcCA9IGZ1bmN0aW9uIGdlbmVyYXRlRGVjb2RlZE1hcCAob3B0aW9ucykge1xuXHRcdHZhciB0aGlzJDEgPSB0aGlzO1xuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdHZhciBzb3VyY2VJbmRleCA9IDA7XG5cdHZhciBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuc3RvcmVkTmFtZXMpO1xuXHR2YXIgbWFwcGluZ3MgPSBuZXcgTWFwcGluZ3Mob3B0aW9ucy5oaXJlcyk7XG5cblx0dmFyIGxvY2F0ZSA9IGdldExvY2F0b3IodGhpcy5vcmlnaW5hbCk7XG5cblx0aWYgKHRoaXMuaW50cm8pIHtcblx0XHRtYXBwaW5ncy5hZHZhbmNlKHRoaXMuaW50cm8pO1xuXHR9XG5cblx0dGhpcy5maXJzdENodW5rLmVhY2hOZXh0KGZ1bmN0aW9uIChjaHVuaykge1xuXHRcdHZhciBsb2MgPSBsb2NhdGUoY2h1bmsuc3RhcnQpO1xuXG5cdFx0aWYgKGNodW5rLmludHJvLmxlbmd0aCkgeyBtYXBwaW5ncy5hZHZhbmNlKGNodW5rLmludHJvKTsgfVxuXG5cdFx0aWYgKGNodW5rLmVkaXRlZCkge1xuXHRcdFx0bWFwcGluZ3MuYWRkRWRpdChcblx0XHRcdFx0c291cmNlSW5kZXgsXG5cdFx0XHRcdGNodW5rLmNvbnRlbnQsXG5cdFx0XHRcdGxvYyxcblx0XHRcdFx0Y2h1bmsuc3RvcmVOYW1lID8gbmFtZXMuaW5kZXhPZihjaHVuay5vcmlnaW5hbCkgOiAtMVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWFwcGluZ3MuYWRkVW5lZGl0ZWRDaHVuayhzb3VyY2VJbmRleCwgY2h1bmssIHRoaXMkMS5vcmlnaW5hbCwgbG9jLCB0aGlzJDEuc291cmNlbWFwTG9jYXRpb25zKTtcblx0XHR9XG5cblx0XHRpZiAoY2h1bmsub3V0cm8ubGVuZ3RoKSB7IG1hcHBpbmdzLmFkdmFuY2UoY2h1bmsub3V0cm8pOyB9XG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0ZmlsZTogb3B0aW9ucy5maWxlID8gb3B0aW9ucy5maWxlLnNwbGl0KC9bL1xcXFxdLykucG9wKCkgOiBudWxsLFxuXHRcdHNvdXJjZXM6IFtvcHRpb25zLnNvdXJjZSA/IGdldFJlbGF0aXZlUGF0aChvcHRpb25zLmZpbGUgfHwgJycsIG9wdGlvbnMuc291cmNlKSA6IG51bGxdLFxuXHRcdHNvdXJjZXNDb250ZW50OiBvcHRpb25zLmluY2x1ZGVDb250ZW50ID8gW3RoaXMub3JpZ2luYWxdIDogW251bGxdLFxuXHRcdG5hbWVzOiBuYW1lcyxcblx0XHRtYXBwaW5nczogbWFwcGluZ3MucmF3XG5cdH07XG59O1xuXG5NYWdpY1N0cmluZy5wcm90b3R5cGUuZ2VuZXJhdGVNYXAgPSBmdW5jdGlvbiBnZW5lcmF0ZU1hcCAob3B0aW9ucykge1xuXHRyZXR1cm4gbmV3IFNvdXJjZU1hcCh0aGlzLmdlbmVyYXRlRGVjb2RlZE1hcChvcHRpb25zKSk7XG59O1xuXG5NYWdpY1N0cmluZy5wcm90b3R5cGUuZ2V0SW5kZW50U3RyaW5nID0gZnVuY3Rpb24gZ2V0SW5kZW50U3RyaW5nICgpIHtcblx0cmV0dXJuIHRoaXMuaW5kZW50U3RyID09PSBudWxsID8gJ1xcdCcgOiB0aGlzLmluZGVudFN0cjtcbn07XG5cbk1hZ2ljU3RyaW5nLnByb3RvdHlwZS5pbmRlbnQgPSBmdW5jdGlvbiBpbmRlbnQgKGluZGVudFN0ciwgb3B0aW9ucykge1xuXHR2YXIgcGF0dGVybiA9IC9eW15cXHJcXG5dL2dtO1xuXG5cdGlmIChpc09iamVjdChpbmRlbnRTdHIpKSB7XG5cdFx0b3B0aW9ucyA9IGluZGVudFN0cjtcblx0XHRpbmRlbnRTdHIgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpbmRlbnRTdHIgPSBpbmRlbnRTdHIgIT09IHVuZGVmaW5lZCA/IGluZGVudFN0ciA6IHRoaXMuaW5kZW50U3RyIHx8ICdcXHQnO1xuXG5cdGlmIChpbmRlbnRTdHIgPT09ICcnKSB7IHJldHVybiB0aGlzOyB9IC8vIG5vb3BcblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHQvLyBQcm9jZXNzIGV4Y2x1c2lvbiByYW5nZXNcblx0dmFyIGlzRXhjbHVkZWQgPSB7fTtcblxuXHRpZiAob3B0aW9ucy5leGNsdWRlKSB7XG5cdFx0dmFyIGV4Y2x1c2lvbnMgPVxuXHRcdFx0dHlwZW9mIG9wdGlvbnMuZXhjbHVkZVswXSA9PT0gJ251bWJlcicgPyBbb3B0aW9ucy5leGNsdWRlXSA6IG9wdGlvbnMuZXhjbHVkZTtcblx0XHRleGNsdXNpb25zLmZvckVhY2goZnVuY3Rpb24gKGV4Y2x1c2lvbikge1xuXHRcdFx0Zm9yICh2YXIgaSA9IGV4Y2x1c2lvblswXTsgaSA8IGV4Y2x1c2lvblsxXTsgaSArPSAxKSB7XG5cdFx0XHRcdGlzRXhjbHVkZWRbaV0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0dmFyIHNob3VsZEluZGVudE5leHRDaGFyYWN0ZXIgPSBvcHRpb25zLmluZGVudFN0YXJ0ICE9PSBmYWxzZTtcblx0dmFyIHJlcGxhY2VyID0gZnVuY3Rpb24gKG1hdGNoKSB7XG5cdFx0aWYgKHNob3VsZEluZGVudE5leHRDaGFyYWN0ZXIpIHsgcmV0dXJuIChcIlwiICsgaW5kZW50U3RyICsgbWF0Y2gpOyB9XG5cdFx0c2hvdWxkSW5kZW50TmV4dENoYXJhY3RlciA9IHRydWU7XG5cdFx0cmV0dXJuIG1hdGNoO1xuXHR9O1xuXG5cdHRoaXMuaW50cm8gPSB0aGlzLmludHJvLnJlcGxhY2UocGF0dGVybiwgcmVwbGFjZXIpO1xuXG5cdHZhciBjaGFySW5kZXggPSAwO1xuXHR2YXIgY2h1bmsgPSB0aGlzLmZpcnN0Q2h1bms7XG5cblx0d2hpbGUgKGNodW5rKSB7XG5cdFx0dmFyIGVuZCA9IGNodW5rLmVuZDtcblxuXHRcdGlmIChjaHVuay5lZGl0ZWQpIHtcblx0XHRcdGlmICghaXNFeGNsdWRlZFtjaGFySW5kZXhdKSB7XG5cdFx0XHRcdGNodW5rLmNvbnRlbnQgPSBjaHVuay5jb250ZW50LnJlcGxhY2UocGF0dGVybiwgcmVwbGFjZXIpO1xuXG5cdFx0XHRcdGlmIChjaHVuay5jb250ZW50Lmxlbmd0aCkge1xuXHRcdFx0XHRcdHNob3VsZEluZGVudE5leHRDaGFyYWN0ZXIgPSBjaHVuay5jb250ZW50W2NodW5rLmNvbnRlbnQubGVuZ3RoIC0gMV0gPT09ICdcXG4nO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNoYXJJbmRleCA9IGNodW5rLnN0YXJ0O1xuXG5cdFx0XHR3aGlsZSAoY2hhckluZGV4IDwgZW5kKSB7XG5cdFx0XHRcdGlmICghaXNFeGNsdWRlZFtjaGFySW5kZXhdKSB7XG5cdFx0XHRcdFx0dmFyIGNoYXIgPSB0aGlzLm9yaWdpbmFsW2NoYXJJbmRleF07XG5cblx0XHRcdFx0XHRpZiAoY2hhciA9PT0gJ1xcbicpIHtcblx0XHRcdFx0XHRcdHNob3VsZEluZGVudE5leHRDaGFyYWN0ZXIgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY2hhciAhPT0gJ1xccicgJiYgc2hvdWxkSW5kZW50TmV4dENoYXJhY3Rlcikge1xuXHRcdFx0XHRcdFx0c2hvdWxkSW5kZW50TmV4dENoYXJhY3RlciA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0XHRpZiAoY2hhckluZGV4ID09PSBjaHVuay5zdGFydCkge1xuXHRcdFx0XHRcdFx0XHRjaHVuay5wcmVwZW5kUmlnaHQoaW5kZW50U3RyKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3NwbGl0Q2h1bmsoY2h1bmssIGNoYXJJbmRleCk7XG5cdFx0XHRcdFx0XHRcdGNodW5rID0gY2h1bmsubmV4dDtcblx0XHRcdFx0XHRcdFx0Y2h1bmsucHJlcGVuZFJpZ2h0KGluZGVudFN0cik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2hhckluZGV4ICs9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2hhckluZGV4ID0gY2h1bmsuZW5kO1xuXHRcdGNodW5rID0gY2h1bmsubmV4dDtcblx0fVxuXG5cdHRoaXMub3V0cm8gPSB0aGlzLm91dHJvLnJlcGxhY2UocGF0dGVybiwgcmVwbGFjZXIpO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydCAoKSB7XG5cdHRocm93IG5ldyBFcnJvcignbWFnaWNTdHJpbmcuaW5zZXJ0KC4uLikgaXMgZGVwcmVjYXRlZC4gVXNlIHByZXBlbmRSaWdodCguLi4pIG9yIGFwcGVuZExlZnQoLi4uKScpO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLmluc2VydExlZnQgPSBmdW5jdGlvbiBpbnNlcnRMZWZ0IChpbmRleCwgY29udGVudCkge1xuXHRpZiAoIXdhcm5lZC5pbnNlcnRMZWZ0KSB7XG5cdFx0Y29uc29sZS53YXJuKCdtYWdpY1N0cmluZy5pbnNlcnRMZWZ0KC4uLikgaXMgZGVwcmVjYXRlZC4gVXNlIG1hZ2ljU3RyaW5nLmFwcGVuZExlZnQoLi4uKSBpbnN0ZWFkJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXHRcdHdhcm5lZC5pbnNlcnRMZWZ0ID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiB0aGlzLmFwcGVuZExlZnQoaW5kZXgsIGNvbnRlbnQpO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLmluc2VydFJpZ2h0ID0gZnVuY3Rpb24gaW5zZXJ0UmlnaHQgKGluZGV4LCBjb250ZW50KSB7XG5cdGlmICghd2FybmVkLmluc2VydFJpZ2h0KSB7XG5cdFx0Y29uc29sZS53YXJuKCdtYWdpY1N0cmluZy5pbnNlcnRSaWdodCguLi4pIGlzIGRlcHJlY2F0ZWQuIFVzZSBtYWdpY1N0cmluZy5wcmVwZW5kUmlnaHQoLi4uKSBpbnN0ZWFkJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXHRcdHdhcm5lZC5pbnNlcnRSaWdodCA9IHRydWU7XG5cdH1cblxuXHRyZXR1cm4gdGhpcy5wcmVwZW5kUmlnaHQoaW5kZXgsIGNvbnRlbnQpO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiBtb3ZlIChzdGFydCwgZW5kLCBpbmRleCkge1xuXHRpZiAoaW5kZXggPj0gc3RhcnQgJiYgaW5kZXggPD0gZW5kKSB7IHRocm93IG5ldyBFcnJvcignQ2Fubm90IG1vdmUgYSBzZWxlY3Rpb24gaW5zaWRlIGl0c2VsZicpOyB9XG5cblx0dGhpcy5fc3BsaXQoc3RhcnQpO1xuXHR0aGlzLl9zcGxpdChlbmQpO1xuXHR0aGlzLl9zcGxpdChpbmRleCk7XG5cblx0dmFyIGZpcnN0ID0gdGhpcy5ieVN0YXJ0W3N0YXJ0XTtcblx0dmFyIGxhc3QgPSB0aGlzLmJ5RW5kW2VuZF07XG5cblx0dmFyIG9sZExlZnQgPSBmaXJzdC5wcmV2aW91cztcblx0dmFyIG9sZFJpZ2h0ID0gbGFzdC5uZXh0O1xuXG5cdHZhciBuZXdSaWdodCA9IHRoaXMuYnlTdGFydFtpbmRleF07XG5cdGlmICghbmV3UmlnaHQgJiYgbGFzdCA9PT0gdGhpcy5sYXN0Q2h1bmspIHsgcmV0dXJuIHRoaXM7IH1cblx0dmFyIG5ld0xlZnQgPSBuZXdSaWdodCA/IG5ld1JpZ2h0LnByZXZpb3VzIDogdGhpcy5sYXN0Q2h1bms7XG5cblx0aWYgKG9sZExlZnQpIHsgb2xkTGVmdC5uZXh0ID0gb2xkUmlnaHQ7IH1cblx0aWYgKG9sZFJpZ2h0KSB7IG9sZFJpZ2h0LnByZXZpb3VzID0gb2xkTGVmdDsgfVxuXG5cdGlmIChuZXdMZWZ0KSB7IG5ld0xlZnQubmV4dCA9IGZpcnN0OyB9XG5cdGlmIChuZXdSaWdodCkgeyBuZXdSaWdodC5wcmV2aW91cyA9IGxhc3Q7IH1cblxuXHRpZiAoIWZpcnN0LnByZXZpb3VzKSB7IHRoaXMuZmlyc3RDaHVuayA9IGxhc3QubmV4dDsgfVxuXHRpZiAoIWxhc3QubmV4dCkge1xuXHRcdHRoaXMubGFzdENodW5rID0gZmlyc3QucHJldmlvdXM7XG5cdFx0dGhpcy5sYXN0Q2h1bmsubmV4dCA9IG51bGw7XG5cdH1cblxuXHRmaXJzdC5wcmV2aW91cyA9IG5ld0xlZnQ7XG5cdGxhc3QubmV4dCA9IG5ld1JpZ2h0IHx8IG51bGw7XG5cblx0aWYgKCFuZXdMZWZ0KSB7IHRoaXMuZmlyc3RDaHVuayA9IGZpcnN0OyB9XG5cdGlmICghbmV3UmlnaHQpIHsgdGhpcy5sYXN0Q2h1bmsgPSBsYXN0OyB9XG5cdHJldHVybiB0aGlzO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLm92ZXJ3cml0ZSA9IGZ1bmN0aW9uIG92ZXJ3cml0ZSAoc3RhcnQsIGVuZCwgY29udGVudCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIGNvbnRlbnQgIT09ICdzdHJpbmcnKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ3JlcGxhY2VtZW50IGNvbnRlbnQgbXVzdCBiZSBhIHN0cmluZycpOyB9XG5cblx0d2hpbGUgKHN0YXJ0IDwgMCkgeyBzdGFydCArPSB0aGlzLm9yaWdpbmFsLmxlbmd0aDsgfVxuXHR3aGlsZSAoZW5kIDwgMCkgeyBlbmQgKz0gdGhpcy5vcmlnaW5hbC5sZW5ndGg7IH1cblxuXHRpZiAoZW5kID4gdGhpcy5vcmlnaW5hbC5sZW5ndGgpIHsgdGhyb3cgbmV3IEVycm9yKCdlbmQgaXMgb3V0IG9mIGJvdW5kcycpOyB9XG5cdGlmIChzdGFydCA9PT0gZW5kKVxuXHRcdHsgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgb3ZlcndyaXRlIGEgemVyby1sZW5ndGggcmFuZ2Ug4oCTIHVzZSBhcHBlbmRMZWZ0IG9yIHByZXBlbmRSaWdodCBpbnN0ZWFkJyk7IH1cblxuXHR0aGlzLl9zcGxpdChzdGFydCk7XG5cdHRoaXMuX3NwbGl0KGVuZCk7XG5cblx0aWYgKG9wdGlvbnMgPT09IHRydWUpIHtcblx0XHRpZiAoIXdhcm5lZC5zdG9yZU5hbWUpIHtcblx0XHRcdGNvbnNvbGUud2FybignVGhlIGZpbmFsIGFyZ3VtZW50IHRvIG1hZ2ljU3RyaW5nLm92ZXJ3cml0ZSguLi4pIHNob3VsZCBiZSBhbiBvcHRpb25zIG9iamVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yaWNoLWhhcnJpcy9tYWdpYy1zdHJpbmcnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cdFx0XHR3YXJuZWQuc3RvcmVOYW1lID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRvcHRpb25zID0geyBzdG9yZU5hbWU6IHRydWUgfTtcblx0fVxuXHR2YXIgc3RvcmVOYW1lID0gb3B0aW9ucyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5zdG9yZU5hbWUgOiBmYWxzZTtcblx0dmFyIGNvbnRlbnRPbmx5ID0gb3B0aW9ucyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jb250ZW50T25seSA6IGZhbHNlO1xuXG5cdGlmIChzdG9yZU5hbWUpIHtcblx0XHR2YXIgb3JpZ2luYWwgPSB0aGlzLm9yaWdpbmFsLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXHRcdHRoaXMuc3RvcmVkTmFtZXNbb3JpZ2luYWxdID0gdHJ1ZTtcblx0fVxuXG5cdHZhciBmaXJzdCA9IHRoaXMuYnlTdGFydFtzdGFydF07XG5cdHZhciBsYXN0ID0gdGhpcy5ieUVuZFtlbmRdO1xuXG5cdGlmIChmaXJzdCkge1xuXHRcdGlmIChlbmQgPiBmaXJzdC5lbmQgJiYgZmlyc3QubmV4dCAhPT0gdGhpcy5ieVN0YXJ0W2ZpcnN0LmVuZF0pIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignQ2Fubm90IG92ZXJ3cml0ZSBhY3Jvc3MgYSBzcGxpdCBwb2ludCcpO1xuXHRcdH1cblxuXHRcdGZpcnN0LmVkaXQoY29udGVudCwgc3RvcmVOYW1lLCBjb250ZW50T25seSk7XG5cblx0XHRpZiAoZmlyc3QgIT09IGxhc3QpIHtcblx0XHRcdHZhciBjaHVuayA9IGZpcnN0Lm5leHQ7XG5cdFx0XHR3aGlsZSAoY2h1bmsgIT09IGxhc3QpIHtcblx0XHRcdFx0Y2h1bmsuZWRpdCgnJywgZmFsc2UpO1xuXHRcdFx0XHRjaHVuayA9IGNodW5rLm5leHQ7XG5cdFx0XHR9XG5cblx0XHRcdGNodW5rLmVkaXQoJycsIGZhbHNlKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gbXVzdCBiZSBpbnNlcnRpbmcgYXQgdGhlIGVuZFxuXHRcdHZhciBuZXdDaHVuayA9IG5ldyBDaHVuayhzdGFydCwgZW5kLCAnJykuZWRpdChjb250ZW50LCBzdG9yZU5hbWUpO1xuXG5cdFx0Ly8gVE9ETyBsYXN0IGNodW5rIGluIHRoZSBhcnJheSBtYXkgbm90IGJlIHRoZSBsYXN0IGNodW5rLCBpZiBpdCdzIG1vdmVkLi4uXG5cdFx0bGFzdC5uZXh0ID0gbmV3Q2h1bms7XG5cdFx0bmV3Q2h1bmsucHJldmlvdXMgPSBsYXN0O1xuXHR9XG5cdHJldHVybiB0aGlzO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbiBwcmVwZW5kIChjb250ZW50KSB7XG5cdGlmICh0eXBlb2YgY29udGVudCAhPT0gJ3N0cmluZycpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignb3V0cm8gY29udGVudCBtdXN0IGJlIGEgc3RyaW5nJyk7IH1cblxuXHR0aGlzLmludHJvID0gY29udGVudCArIHRoaXMuaW50cm87XG5cdHJldHVybiB0aGlzO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLnByZXBlbmRMZWZ0ID0gZnVuY3Rpb24gcHJlcGVuZExlZnQgKGluZGV4LCBjb250ZW50KSB7XG5cdGlmICh0eXBlb2YgY29udGVudCAhPT0gJ3N0cmluZycpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5zZXJ0ZWQgY29udGVudCBtdXN0IGJlIGEgc3RyaW5nJyk7IH1cblxuXHR0aGlzLl9zcGxpdChpbmRleCk7XG5cblx0dmFyIGNodW5rID0gdGhpcy5ieUVuZFtpbmRleF07XG5cblx0aWYgKGNodW5rKSB7XG5cdFx0Y2h1bmsucHJlcGVuZExlZnQoY29udGVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5pbnRybyA9IGNvbnRlbnQgKyB0aGlzLmludHJvO1xuXHR9XG5cdHJldHVybiB0aGlzO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLnByZXBlbmRSaWdodCA9IGZ1bmN0aW9uIHByZXBlbmRSaWdodCAoaW5kZXgsIGNvbnRlbnQpIHtcblx0aWYgKHR5cGVvZiBjb250ZW50ICE9PSAnc3RyaW5nJykgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnNlcnRlZCBjb250ZW50IG11c3QgYmUgYSBzdHJpbmcnKTsgfVxuXG5cdHRoaXMuX3NwbGl0KGluZGV4KTtcblxuXHR2YXIgY2h1bmsgPSB0aGlzLmJ5U3RhcnRbaW5kZXhdO1xuXG5cdGlmIChjaHVuaykge1xuXHRcdGNodW5rLnByZXBlbmRSaWdodChjb250ZW50KTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLm91dHJvID0gY29udGVudCArIHRoaXMub3V0cm87XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5NYWdpY1N0cmluZy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChzdGFydCwgZW5kKSB7XG5cdHdoaWxlIChzdGFydCA8IDApIHsgc3RhcnQgKz0gdGhpcy5vcmlnaW5hbC5sZW5ndGg7IH1cblx0d2hpbGUgKGVuZCA8IDApIHsgZW5kICs9IHRoaXMub3JpZ2luYWwubGVuZ3RoOyB9XG5cblx0aWYgKHN0YXJ0ID09PSBlbmQpIHsgcmV0dXJuIHRoaXM7IH1cblxuXHRpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRoaXMub3JpZ2luYWwubGVuZ3RoKSB7IHRocm93IG5ldyBFcnJvcignQ2hhcmFjdGVyIGlzIG91dCBvZiBib3VuZHMnKTsgfVxuXHRpZiAoc3RhcnQgPiBlbmQpIHsgdGhyb3cgbmV3IEVycm9yKCdlbmQgbXVzdCBiZSBncmVhdGVyIHRoYW4gc3RhcnQnKTsgfVxuXG5cdHRoaXMuX3NwbGl0KHN0YXJ0KTtcblx0dGhpcy5fc3BsaXQoZW5kKTtcblxuXHR2YXIgY2h1bmsgPSB0aGlzLmJ5U3RhcnRbc3RhcnRdO1xuXG5cdHdoaWxlIChjaHVuaykge1xuXHRcdGNodW5rLmludHJvID0gJyc7XG5cdFx0Y2h1bmsub3V0cm8gPSAnJztcblx0XHRjaHVuay5lZGl0KCcnKTtcblxuXHRcdGNodW5rID0gZW5kID4gY2h1bmsuZW5kID8gdGhpcy5ieVN0YXJ0W2NodW5rLmVuZF0gOiBudWxsO1xuXHR9XG5cdHJldHVybiB0aGlzO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLmxhc3RDaGFyID0gZnVuY3Rpb24gbGFzdENoYXIgKCkge1xuXHRpZiAodGhpcy5vdXRyby5sZW5ndGgpXG5cdFx0eyByZXR1cm4gdGhpcy5vdXRyb1t0aGlzLm91dHJvLmxlbmd0aCAtIDFdOyB9XG5cdHZhciBjaHVuayA9IHRoaXMubGFzdENodW5rO1xuXHRkbyB7XG5cdFx0aWYgKGNodW5rLm91dHJvLmxlbmd0aClcblx0XHRcdHsgcmV0dXJuIGNodW5rLm91dHJvW2NodW5rLm91dHJvLmxlbmd0aCAtIDFdOyB9XG5cdFx0aWYgKGNodW5rLmNvbnRlbnQubGVuZ3RoKVxuXHRcdFx0eyByZXR1cm4gY2h1bmsuY29udGVudFtjaHVuay5jb250ZW50Lmxlbmd0aCAtIDFdOyB9XG5cdFx0aWYgKGNodW5rLmludHJvLmxlbmd0aClcblx0XHRcdHsgcmV0dXJuIGNodW5rLmludHJvW2NodW5rLmludHJvLmxlbmd0aCAtIDFdOyB9XG5cdH0gd2hpbGUgKGNodW5rID0gY2h1bmsucHJldmlvdXMpO1xuXHRpZiAodGhpcy5pbnRyby5sZW5ndGgpXG5cdFx0eyByZXR1cm4gdGhpcy5pbnRyb1t0aGlzLmludHJvLmxlbmd0aCAtIDFdOyB9XG5cdHJldHVybiAnJztcbn07XG5cbk1hZ2ljU3RyaW5nLnByb3RvdHlwZS5sYXN0TGluZSA9IGZ1bmN0aW9uIGxhc3RMaW5lICgpIHtcblx0dmFyIGxpbmVJbmRleCA9IHRoaXMub3V0cm8ubGFzdEluZGV4T2Yobik7XG5cdGlmIChsaW5lSW5kZXggIT09IC0xKVxuXHRcdHsgcmV0dXJuIHRoaXMub3V0cm8uc3Vic3RyKGxpbmVJbmRleCArIDEpOyB9XG5cdHZhciBsaW5lU3RyID0gdGhpcy5vdXRybztcblx0dmFyIGNodW5rID0gdGhpcy5sYXN0Q2h1bms7XG5cdGRvIHtcblx0XHRpZiAoY2h1bmsub3V0cm8ubGVuZ3RoID4gMCkge1xuXHRcdFx0bGluZUluZGV4ID0gY2h1bmsub3V0cm8ubGFzdEluZGV4T2Yobik7XG5cdFx0XHRpZiAobGluZUluZGV4ICE9PSAtMSlcblx0XHRcdFx0eyByZXR1cm4gY2h1bmsub3V0cm8uc3Vic3RyKGxpbmVJbmRleCArIDEpICsgbGluZVN0cjsgfVxuXHRcdFx0bGluZVN0ciA9IGNodW5rLm91dHJvICsgbGluZVN0cjtcblx0XHR9XG5cblx0XHRpZiAoY2h1bmsuY29udGVudC5sZW5ndGggPiAwKSB7XG5cdFx0XHRsaW5lSW5kZXggPSBjaHVuay5jb250ZW50Lmxhc3RJbmRleE9mKG4pO1xuXHRcdFx0aWYgKGxpbmVJbmRleCAhPT0gLTEpXG5cdFx0XHRcdHsgcmV0dXJuIGNodW5rLmNvbnRlbnQuc3Vic3RyKGxpbmVJbmRleCArIDEpICsgbGluZVN0cjsgfVxuXHRcdFx0bGluZVN0ciA9IGNodW5rLmNvbnRlbnQgKyBsaW5lU3RyO1xuXHRcdH1cblxuXHRcdGlmIChjaHVuay5pbnRyby5sZW5ndGggPiAwKSB7XG5cdFx0XHRsaW5lSW5kZXggPSBjaHVuay5pbnRyby5sYXN0SW5kZXhPZihuKTtcblx0XHRcdGlmIChsaW5lSW5kZXggIT09IC0xKVxuXHRcdFx0XHR7IHJldHVybiBjaHVuay5pbnRyby5zdWJzdHIobGluZUluZGV4ICsgMSkgKyBsaW5lU3RyOyB9XG5cdFx0XHRsaW5lU3RyID0gY2h1bmsuaW50cm8gKyBsaW5lU3RyO1xuXHRcdH1cblx0fSB3aGlsZSAoY2h1bmsgPSBjaHVuay5wcmV2aW91cyk7XG5cdGxpbmVJbmRleCA9IHRoaXMuaW50cm8ubGFzdEluZGV4T2Yobik7XG5cdGlmIChsaW5lSW5kZXggIT09IC0xKVxuXHRcdHsgcmV0dXJuIHRoaXMuaW50cm8uc3Vic3RyKGxpbmVJbmRleCArIDEpICsgbGluZVN0cjsgfVxuXHRyZXR1cm4gdGhpcy5pbnRybyArIGxpbmVTdHI7XG59O1xuXG5NYWdpY1N0cmluZy5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuXHRcdGlmICggc3RhcnQgPT09IHZvaWQgMCApIHN0YXJ0ID0gMDtcblx0XHRpZiAoIGVuZCA9PT0gdm9pZCAwICkgZW5kID0gdGhpcy5vcmlnaW5hbC5sZW5ndGg7XG5cblx0d2hpbGUgKHN0YXJ0IDwgMCkgeyBzdGFydCArPSB0aGlzLm9yaWdpbmFsLmxlbmd0aDsgfVxuXHR3aGlsZSAoZW5kIDwgMCkgeyBlbmQgKz0gdGhpcy5vcmlnaW5hbC5sZW5ndGg7IH1cblxuXHR2YXIgcmVzdWx0ID0gJyc7XG5cblx0Ly8gZmluZCBzdGFydCBjaHVua1xuXHR2YXIgY2h1bmsgPSB0aGlzLmZpcnN0Q2h1bms7XG5cdHdoaWxlIChjaHVuayAmJiAoY2h1bmsuc3RhcnQgPiBzdGFydCB8fCBjaHVuay5lbmQgPD0gc3RhcnQpKSB7XG5cdFx0Ly8gZm91bmQgZW5kIGNodW5rIGJlZm9yZSBzdGFydFxuXHRcdGlmIChjaHVuay5zdGFydCA8IGVuZCAmJiBjaHVuay5lbmQgPj0gZW5kKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGNodW5rID0gY2h1bmsubmV4dDtcblx0fVxuXG5cdGlmIChjaHVuayAmJiBjaHVuay5lZGl0ZWQgJiYgY2h1bmsuc3RhcnQgIT09IHN0YXJ0KVxuXHRcdHsgdGhyb3cgbmV3IEVycm9yKChcIkNhbm5vdCB1c2UgcmVwbGFjZWQgY2hhcmFjdGVyIFwiICsgc3RhcnQgKyBcIiBhcyBzbGljZSBzdGFydCBhbmNob3IuXCIpKTsgfVxuXG5cdHZhciBzdGFydENodW5rID0gY2h1bms7XG5cdHdoaWxlIChjaHVuaykge1xuXHRcdGlmIChjaHVuay5pbnRybyAmJiAoc3RhcnRDaHVuayAhPT0gY2h1bmsgfHwgY2h1bmsuc3RhcnQgPT09IHN0YXJ0KSkge1xuXHRcdFx0cmVzdWx0ICs9IGNodW5rLmludHJvO1xuXHRcdH1cblxuXHRcdHZhciBjb250YWluc0VuZCA9IGNodW5rLnN0YXJ0IDwgZW5kICYmIGNodW5rLmVuZCA+PSBlbmQ7XG5cdFx0aWYgKGNvbnRhaW5zRW5kICYmIGNodW5rLmVkaXRlZCAmJiBjaHVuay5lbmQgIT09IGVuZClcblx0XHRcdHsgdGhyb3cgbmV3IEVycm9yKChcIkNhbm5vdCB1c2UgcmVwbGFjZWQgY2hhcmFjdGVyIFwiICsgZW5kICsgXCIgYXMgc2xpY2UgZW5kIGFuY2hvci5cIikpOyB9XG5cblx0XHR2YXIgc2xpY2VTdGFydCA9IHN0YXJ0Q2h1bmsgPT09IGNodW5rID8gc3RhcnQgLSBjaHVuay5zdGFydCA6IDA7XG5cdFx0dmFyIHNsaWNlRW5kID0gY29udGFpbnNFbmQgPyBjaHVuay5jb250ZW50Lmxlbmd0aCArIGVuZCAtIGNodW5rLmVuZCA6IGNodW5rLmNvbnRlbnQubGVuZ3RoO1xuXG5cdFx0cmVzdWx0ICs9IGNodW5rLmNvbnRlbnQuc2xpY2Uoc2xpY2VTdGFydCwgc2xpY2VFbmQpO1xuXG5cdFx0aWYgKGNodW5rLm91dHJvICYmICghY29udGFpbnNFbmQgfHwgY2h1bmsuZW5kID09PSBlbmQpKSB7XG5cdFx0XHRyZXN1bHQgKz0gY2h1bmsub3V0cm87XG5cdFx0fVxuXG5cdFx0aWYgKGNvbnRhaW5zRW5kKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRjaHVuayA9IGNodW5rLm5leHQ7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gVE9ETyBkZXByZWNhdGUgdGhpcz8gbm90IHJlYWxseSB2ZXJ5IHVzZWZ1bFxuTWFnaWNTdHJpbmcucHJvdG90eXBlLnNuaXAgPSBmdW5jdGlvbiBzbmlwIChzdGFydCwgZW5kKSB7XG5cdHZhciBjbG9uZSA9IHRoaXMuY2xvbmUoKTtcblx0Y2xvbmUucmVtb3ZlKDAsIHN0YXJ0KTtcblx0Y2xvbmUucmVtb3ZlKGVuZCwgY2xvbmUub3JpZ2luYWwubGVuZ3RoKTtcblxuXHRyZXR1cm4gY2xvbmU7XG59O1xuXG5NYWdpY1N0cmluZy5wcm90b3R5cGUuX3NwbGl0ID0gZnVuY3Rpb24gX3NwbGl0IChpbmRleCkge1xuXHRpZiAodGhpcy5ieVN0YXJ0W2luZGV4XSB8fCB0aGlzLmJ5RW5kW2luZGV4XSkgeyByZXR1cm47IH1cblxuXHR2YXIgY2h1bmsgPSB0aGlzLmxhc3RTZWFyY2hlZENodW5rO1xuXHR2YXIgc2VhcmNoRm9yd2FyZCA9IGluZGV4ID4gY2h1bmsuZW5kO1xuXG5cdHdoaWxlIChjaHVuaykge1xuXHRcdGlmIChjaHVuay5jb250YWlucyhpbmRleCkpIHsgcmV0dXJuIHRoaXMuX3NwbGl0Q2h1bmsoY2h1bmssIGluZGV4KTsgfVxuXG5cdFx0Y2h1bmsgPSBzZWFyY2hGb3J3YXJkID8gdGhpcy5ieVN0YXJ0W2NodW5rLmVuZF0gOiB0aGlzLmJ5RW5kW2NodW5rLnN0YXJ0XTtcblx0fVxufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLl9zcGxpdENodW5rID0gZnVuY3Rpb24gX3NwbGl0Q2h1bmsgKGNodW5rLCBpbmRleCkge1xuXHRpZiAoY2h1bmsuZWRpdGVkICYmIGNodW5rLmNvbnRlbnQubGVuZ3RoKSB7XG5cdFx0Ly8gemVyby1sZW5ndGggZWRpdGVkIGNodW5rcyBhcmUgYSBzcGVjaWFsIGNhc2UgKG92ZXJsYXBwaW5nIHJlcGxhY2VtZW50cylcblx0XHR2YXIgbG9jID0gZ2V0TG9jYXRvcih0aGlzLm9yaWdpbmFsKShpbmRleCk7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0KFwiQ2Fubm90IHNwbGl0IGEgY2h1bmsgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGVkaXRlZCAoXCIgKyAobG9jLmxpbmUpICsgXCI6XCIgKyAobG9jLmNvbHVtbikgKyBcIiDigJMgXFxcIlwiICsgKGNodW5rLm9yaWdpbmFsKSArIFwiXFxcIilcIilcblx0XHQpO1xuXHR9XG5cblx0dmFyIG5ld0NodW5rID0gY2h1bmsuc3BsaXQoaW5kZXgpO1xuXG5cdHRoaXMuYnlFbmRbaW5kZXhdID0gY2h1bms7XG5cdHRoaXMuYnlTdGFydFtpbmRleF0gPSBuZXdDaHVuaztcblx0dGhpcy5ieUVuZFtuZXdDaHVuay5lbmRdID0gbmV3Q2h1bms7XG5cblx0aWYgKGNodW5rID09PSB0aGlzLmxhc3RDaHVuaykgeyB0aGlzLmxhc3RDaHVuayA9IG5ld0NodW5rOyB9XG5cblx0dGhpcy5sYXN0U2VhcmNoZWRDaHVuayA9IGNodW5rO1xuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbk1hZ2ljU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcblx0dmFyIHN0ciA9IHRoaXMuaW50cm87XG5cblx0dmFyIGNodW5rID0gdGhpcy5maXJzdENodW5rO1xuXHR3aGlsZSAoY2h1bmspIHtcblx0XHRzdHIgKz0gY2h1bmsudG9TdHJpbmcoKTtcblx0XHRjaHVuayA9IGNodW5rLm5leHQ7XG5cdH1cblxuXHRyZXR1cm4gc3RyICsgdGhpcy5vdXRybztcbn07XG5cbk1hZ2ljU3RyaW5nLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gaXNFbXB0eSAoKSB7XG5cdHZhciBjaHVuayA9IHRoaXMuZmlyc3RDaHVuaztcblx0ZG8ge1xuXHRcdGlmIChjaHVuay5pbnRyby5sZW5ndGggJiYgY2h1bmsuaW50cm8udHJpbSgpIHx8XG5cdFx0XHRcdGNodW5rLmNvbnRlbnQubGVuZ3RoICYmIGNodW5rLmNvbnRlbnQudHJpbSgpIHx8XG5cdFx0XHRcdGNodW5rLm91dHJvLmxlbmd0aCAmJiBjaHVuay5vdXRyby50cmltKCkpXG5cdFx0XHR7IHJldHVybiBmYWxzZTsgfVxuXHR9IHdoaWxlIChjaHVuayA9IGNodW5rLm5leHQpO1xuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbk1hZ2ljU3RyaW5nLnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbiBsZW5ndGggKCkge1xuXHR2YXIgY2h1bmsgPSB0aGlzLmZpcnN0Q2h1bms7XG5cdHZhciBsZW5ndGggPSAwO1xuXHRkbyB7XG5cdFx0bGVuZ3RoICs9IGNodW5rLmludHJvLmxlbmd0aCArIGNodW5rLmNvbnRlbnQubGVuZ3RoICsgY2h1bmsub3V0cm8ubGVuZ3RoO1xuXHR9IHdoaWxlIChjaHVuayA9IGNodW5rLm5leHQpO1xuXHRyZXR1cm4gbGVuZ3RoO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLnRyaW1MaW5lcyA9IGZ1bmN0aW9uIHRyaW1MaW5lcyAoKSB7XG5cdHJldHVybiB0aGlzLnRyaW0oJ1tcXFxcclxcXFxuXScpO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLnRyaW0gPSBmdW5jdGlvbiB0cmltIChjaGFyVHlwZSkge1xuXHRyZXR1cm4gdGhpcy50cmltU3RhcnQoY2hhclR5cGUpLnRyaW1FbmQoY2hhclR5cGUpO1xufTtcblxuTWFnaWNTdHJpbmcucHJvdG90eXBlLnRyaW1FbmRBYm9ydGVkID0gZnVuY3Rpb24gdHJpbUVuZEFib3J0ZWQgKGNoYXJUeXBlKSB7XG5cdHZhciByeCA9IG5ldyBSZWdFeHAoKGNoYXJUeXBlIHx8ICdcXFxccycpICsgJyskJyk7XG5cblx0dGhpcy5vdXRybyA9IHRoaXMub3V0cm8ucmVwbGFjZShyeCwgJycpO1xuXHRpZiAodGhpcy5vdXRyby5sZW5ndGgpIHsgcmV0dXJuIHRydWU7IH1cblxuXHR2YXIgY2h1bmsgPSB0aGlzLmxhc3RDaHVuaztcblxuXHRkbyB7XG5cdFx0dmFyIGVuZCA9IGNodW5rLmVuZDtcblx0XHR2YXIgYWJvcnRlZCA9IGNodW5rLnRyaW1FbmQocngpO1xuXG5cdFx0Ly8gaWYgY2h1bmsgd2FzIHRyaW1tZWQsIHdlIGhhdmUgYSBuZXcgbGFzdENodW5rXG5cdFx0aWYgKGNodW5rLmVuZCAhPT0gZW5kKSB7XG5cdFx0XHRpZiAodGhpcy5sYXN0Q2h1bmsgPT09IGNodW5rKSB7XG5cdFx0XHRcdHRoaXMubGFzdENodW5rID0gY2h1bmsubmV4dDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5ieUVuZFtjaHVuay5lbmRdID0gY2h1bms7XG5cdFx0XHR0aGlzLmJ5U3RhcnRbY2h1bmsubmV4dC5zdGFydF0gPSBjaHVuay5uZXh0O1xuXHRcdFx0dGhpcy5ieUVuZFtjaHVuay5uZXh0LmVuZF0gPSBjaHVuay5uZXh0O1xuXHRcdH1cblxuXHRcdGlmIChhYm9ydGVkKSB7IHJldHVybiB0cnVlOyB9XG5cdFx0Y2h1bmsgPSBjaHVuay5wcmV2aW91cztcblx0fSB3aGlsZSAoY2h1bmspO1xuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbk1hZ2ljU3RyaW5nLnByb3RvdHlwZS50cmltRW5kID0gZnVuY3Rpb24gdHJpbUVuZCAoY2hhclR5cGUpIHtcblx0dGhpcy50cmltRW5kQWJvcnRlZChjaGFyVHlwZSk7XG5cdHJldHVybiB0aGlzO1xufTtcbk1hZ2ljU3RyaW5nLnByb3RvdHlwZS50cmltU3RhcnRBYm9ydGVkID0gZnVuY3Rpb24gdHJpbVN0YXJ0QWJvcnRlZCAoY2hhclR5cGUpIHtcblx0dmFyIHJ4ID0gbmV3IFJlZ0V4cCgnXicgKyAoY2hhclR5cGUgfHwgJ1xcXFxzJykgKyAnKycpO1xuXG5cdHRoaXMuaW50cm8gPSB0aGlzLmludHJvLnJlcGxhY2UocngsICcnKTtcblx0aWYgKHRoaXMuaW50cm8ubGVuZ3RoKSB7IHJldHVybiB0cnVlOyB9XG5cblx0dmFyIGNodW5rID0gdGhpcy5maXJzdENodW5rO1xuXG5cdGRvIHtcblx0XHR2YXIgZW5kID0gY2h1bmsuZW5kO1xuXHRcdHZhciBhYm9ydGVkID0gY2h1bmsudHJpbVN0YXJ0KHJ4KTtcblxuXHRcdGlmIChjaHVuay5lbmQgIT09IGVuZCkge1xuXHRcdFx0Ly8gc3BlY2lhbCBjYXNlLi4uXG5cdFx0XHRpZiAoY2h1bmsgPT09IHRoaXMubGFzdENodW5rKSB7IHRoaXMubGFzdENodW5rID0gY2h1bmsubmV4dDsgfVxuXG5cdFx0XHR0aGlzLmJ5RW5kW2NodW5rLmVuZF0gPSBjaHVuaztcblx0XHRcdHRoaXMuYnlTdGFydFtjaHVuay5uZXh0LnN0YXJ0XSA9IGNodW5rLm5leHQ7XG5cdFx0XHR0aGlzLmJ5RW5kW2NodW5rLm5leHQuZW5kXSA9IGNodW5rLm5leHQ7XG5cdFx0fVxuXG5cdFx0aWYgKGFib3J0ZWQpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRjaHVuayA9IGNodW5rLm5leHQ7XG5cdH0gd2hpbGUgKGNodW5rKTtcblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5NYWdpY1N0cmluZy5wcm90b3R5cGUudHJpbVN0YXJ0ID0gZnVuY3Rpb24gdHJpbVN0YXJ0IChjaGFyVHlwZSkge1xuXHR0aGlzLnRyaW1TdGFydEFib3J0ZWQoY2hhclR5cGUpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbnZhciBoYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIEJ1bmRsZSA9IGZ1bmN0aW9uIEJ1bmRsZShvcHRpb25zKSB7XG5cdGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG5cdHRoaXMuaW50cm8gPSBvcHRpb25zLmludHJvIHx8ICcnO1xuXHR0aGlzLnNlcGFyYXRvciA9IG9wdGlvbnMuc2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnNlcGFyYXRvciA6ICdcXG4nO1xuXHR0aGlzLnNvdXJjZXMgPSBbXTtcblx0dGhpcy51bmlxdWVTb3VyY2VzID0gW107XG5cdHRoaXMudW5pcXVlU291cmNlSW5kZXhCeUZpbGVuYW1lID0ge307XG59O1xuXG5CdW5kbGUucHJvdG90eXBlLmFkZFNvdXJjZSA9IGZ1bmN0aW9uIGFkZFNvdXJjZSAoc291cmNlKSB7XG5cdGlmIChzb3VyY2UgaW5zdGFuY2VvZiBNYWdpY1N0cmluZykge1xuXHRcdHJldHVybiB0aGlzLmFkZFNvdXJjZSh7XG5cdFx0XHRjb250ZW50OiBzb3VyY2UsXG5cdFx0XHRmaWxlbmFtZTogc291cmNlLmZpbGVuYW1lLFxuXHRcdFx0c2VwYXJhdG9yOiB0aGlzLnNlcGFyYXRvclxuXHRcdH0pO1xuXHR9XG5cblx0aWYgKCFpc09iamVjdChzb3VyY2UpIHx8ICFzb3VyY2UuY29udGVudCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignYnVuZGxlLmFkZFNvdXJjZSgpIHRha2VzIGFuIG9iamVjdCB3aXRoIGEgYGNvbnRlbnRgIHByb3BlcnR5LCB3aGljaCBzaG91bGQgYmUgYW4gaW5zdGFuY2Ugb2YgTWFnaWNTdHJpbmcsIGFuZCBhbiBvcHRpb25hbCBgZmlsZW5hbWVgJyk7XG5cdH1cblxuXHRbJ2ZpbGVuYW1lJywgJ2luZGVudEV4Y2x1c2lvblJhbmdlcycsICdzZXBhcmF0b3InXS5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb24pIHtcblx0XHRpZiAoIWhhc093blByb3AuY2FsbChzb3VyY2UsIG9wdGlvbikpIHsgc291cmNlW29wdGlvbl0gPSBzb3VyY2UuY29udGVudFtvcHRpb25dOyB9XG5cdH0pO1xuXG5cdGlmIChzb3VyY2Uuc2VwYXJhdG9yID09PSB1bmRlZmluZWQpIHtcblx0XHQvLyBUT0RPIHRoZXJlJ3MgYSBidW5jaCBvZiB0aGlzIHNvcnQgb2YgdGhpbmcsIG5lZWRzIGNsZWFuaW5nIHVwXG5cdFx0c291cmNlLnNlcGFyYXRvciA9IHRoaXMuc2VwYXJhdG9yO1xuXHR9XG5cblx0aWYgKHNvdXJjZS5maWxlbmFtZSkge1xuXHRcdGlmICghaGFzT3duUHJvcC5jYWxsKHRoaXMudW5pcXVlU291cmNlSW5kZXhCeUZpbGVuYW1lLCBzb3VyY2UuZmlsZW5hbWUpKSB7XG5cdFx0XHR0aGlzLnVuaXF1ZVNvdXJjZUluZGV4QnlGaWxlbmFtZVtzb3VyY2UuZmlsZW5hbWVdID0gdGhpcy51bmlxdWVTb3VyY2VzLmxlbmd0aDtcblx0XHRcdHRoaXMudW5pcXVlU291cmNlcy5wdXNoKHsgZmlsZW5hbWU6IHNvdXJjZS5maWxlbmFtZSwgY29udGVudDogc291cmNlLmNvbnRlbnQub3JpZ2luYWwgfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB1bmlxdWVTb3VyY2UgPSB0aGlzLnVuaXF1ZVNvdXJjZXNbdGhpcy51bmlxdWVTb3VyY2VJbmRleEJ5RmlsZW5hbWVbc291cmNlLmZpbGVuYW1lXV07XG5cdFx0XHRpZiAoc291cmNlLmNvbnRlbnQub3JpZ2luYWwgIT09IHVuaXF1ZVNvdXJjZS5jb250ZW50KSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcigoXCJJbGxlZ2FsIHNvdXJjZTogc2FtZSBmaWxlbmFtZSAoXCIgKyAoc291cmNlLmZpbGVuYW1lKSArIFwiKSwgZGlmZmVyZW50IGNvbnRlbnRzXCIpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aGlzLnNvdXJjZXMucHVzaChzb3VyY2UpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbkJ1bmRsZS5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gYXBwZW5kIChzdHIsIG9wdGlvbnMpIHtcblx0dGhpcy5hZGRTb3VyY2Uoe1xuXHRcdGNvbnRlbnQ6IG5ldyBNYWdpY1N0cmluZyhzdHIpLFxuXHRcdHNlcGFyYXRvcjogKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXBhcmF0b3IpIHx8ICcnXG5cdH0pO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuQnVuZGxlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIGNsb25lICgpIHtcblx0dmFyIGJ1bmRsZSA9IG5ldyBCdW5kbGUoe1xuXHRcdGludHJvOiB0aGlzLmludHJvLFxuXHRcdHNlcGFyYXRvcjogdGhpcy5zZXBhcmF0b3Jcblx0fSk7XG5cblx0dGhpcy5zb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdGJ1bmRsZS5hZGRTb3VyY2Uoe1xuXHRcdFx0ZmlsZW5hbWU6IHNvdXJjZS5maWxlbmFtZSxcblx0XHRcdGNvbnRlbnQ6IHNvdXJjZS5jb250ZW50LmNsb25lKCksXG5cdFx0XHRzZXBhcmF0b3I6IHNvdXJjZS5zZXBhcmF0b3Jcblx0XHR9KTtcblx0fSk7XG5cblx0cmV0dXJuIGJ1bmRsZTtcbn07XG5cbkJ1bmRsZS5wcm90b3R5cGUuZ2VuZXJhdGVEZWNvZGVkTWFwID0gZnVuY3Rpb24gZ2VuZXJhdGVEZWNvZGVkTWFwIChvcHRpb25zKSB7XG5cdFx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cdFx0aWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cblx0dmFyIG5hbWVzID0gW107XG5cdHRoaXMuc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRPYmplY3Qua2V5cyhzb3VyY2UuY29udGVudC5zdG9yZWROYW1lcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuXHRcdFx0aWYgKCF+bmFtZXMuaW5kZXhPZihuYW1lKSkgeyBuYW1lcy5wdXNoKG5hbWUpOyB9XG5cdFx0fSk7XG5cdH0pO1xuXG5cdHZhciBtYXBwaW5ncyA9IG5ldyBNYXBwaW5ncyhvcHRpb25zLmhpcmVzKTtcblxuXHRpZiAodGhpcy5pbnRybykge1xuXHRcdG1hcHBpbmdzLmFkdmFuY2UodGhpcy5pbnRybyk7XG5cdH1cblxuXHR0aGlzLnNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlLCBpKSB7XG5cdFx0aWYgKGkgPiAwKSB7XG5cdFx0XHRtYXBwaW5ncy5hZHZhbmNlKHRoaXMkMS5zZXBhcmF0b3IpO1xuXHRcdH1cblxuXHRcdHZhciBzb3VyY2VJbmRleCA9IHNvdXJjZS5maWxlbmFtZSA/IHRoaXMkMS51bmlxdWVTb3VyY2VJbmRleEJ5RmlsZW5hbWVbc291cmNlLmZpbGVuYW1lXSA6IC0xO1xuXHRcdHZhciBtYWdpY1N0cmluZyA9IHNvdXJjZS5jb250ZW50O1xuXHRcdHZhciBsb2NhdGUgPSBnZXRMb2NhdG9yKG1hZ2ljU3RyaW5nLm9yaWdpbmFsKTtcblxuXHRcdGlmIChtYWdpY1N0cmluZy5pbnRybykge1xuXHRcdFx0bWFwcGluZ3MuYWR2YW5jZShtYWdpY1N0cmluZy5pbnRybyk7XG5cdFx0fVxuXG5cdFx0bWFnaWNTdHJpbmcuZmlyc3RDaHVuay5lYWNoTmV4dChmdW5jdGlvbiAoY2h1bmspIHtcblx0XHRcdHZhciBsb2MgPSBsb2NhdGUoY2h1bmsuc3RhcnQpO1xuXG5cdFx0XHRpZiAoY2h1bmsuaW50cm8ubGVuZ3RoKSB7IG1hcHBpbmdzLmFkdmFuY2UoY2h1bmsuaW50cm8pOyB9XG5cblx0XHRcdGlmIChzb3VyY2UuZmlsZW5hbWUpIHtcblx0XHRcdFx0aWYgKGNodW5rLmVkaXRlZCkge1xuXHRcdFx0XHRcdG1hcHBpbmdzLmFkZEVkaXQoXG5cdFx0XHRcdFx0XHRzb3VyY2VJbmRleCxcblx0XHRcdFx0XHRcdGNodW5rLmNvbnRlbnQsXG5cdFx0XHRcdFx0XHRsb2MsXG5cdFx0XHRcdFx0XHRjaHVuay5zdG9yZU5hbWUgPyBuYW1lcy5pbmRleE9mKGNodW5rLm9yaWdpbmFsKSA6IC0xXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtYXBwaW5ncy5hZGRVbmVkaXRlZENodW5rKFxuXHRcdFx0XHRcdFx0c291cmNlSW5kZXgsXG5cdFx0XHRcdFx0XHRjaHVuayxcblx0XHRcdFx0XHRcdG1hZ2ljU3RyaW5nLm9yaWdpbmFsLFxuXHRcdFx0XHRcdFx0bG9jLFxuXHRcdFx0XHRcdFx0bWFnaWNTdHJpbmcuc291cmNlbWFwTG9jYXRpb25zXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWFwcGluZ3MuYWR2YW5jZShjaHVuay5jb250ZW50KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNodW5rLm91dHJvLmxlbmd0aCkgeyBtYXBwaW5ncy5hZHZhbmNlKGNodW5rLm91dHJvKTsgfVxuXHRcdH0pO1xuXG5cdFx0aWYgKG1hZ2ljU3RyaW5nLm91dHJvKSB7XG5cdFx0XHRtYXBwaW5ncy5hZHZhbmNlKG1hZ2ljU3RyaW5nLm91dHJvKTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0ZmlsZTogb3B0aW9ucy5maWxlID8gb3B0aW9ucy5maWxlLnNwbGl0KC9bL1xcXFxdLykucG9wKCkgOiBudWxsLFxuXHRcdHNvdXJjZXM6IHRoaXMudW5pcXVlU291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMuZmlsZSA/IGdldFJlbGF0aXZlUGF0aChvcHRpb25zLmZpbGUsIHNvdXJjZS5maWxlbmFtZSkgOiBzb3VyY2UuZmlsZW5hbWU7XG5cdFx0fSksXG5cdFx0c291cmNlc0NvbnRlbnQ6IHRoaXMudW5pcXVlU291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMuaW5jbHVkZUNvbnRlbnQgPyBzb3VyY2UuY29udGVudCA6IG51bGw7XG5cdFx0fSksXG5cdFx0bmFtZXM6IG5hbWVzLFxuXHRcdG1hcHBpbmdzOiBtYXBwaW5ncy5yYXdcblx0fTtcbn07XG5cbkJ1bmRsZS5wcm90b3R5cGUuZ2VuZXJhdGVNYXAgPSBmdW5jdGlvbiBnZW5lcmF0ZU1hcCAob3B0aW9ucykge1xuXHRyZXR1cm4gbmV3IFNvdXJjZU1hcCh0aGlzLmdlbmVyYXRlRGVjb2RlZE1hcChvcHRpb25zKSk7XG59O1xuXG5CdW5kbGUucHJvdG90eXBlLmdldEluZGVudFN0cmluZyA9IGZ1bmN0aW9uIGdldEluZGVudFN0cmluZyAoKSB7XG5cdHZhciBpbmRlbnRTdHJpbmdDb3VudHMgPSB7fTtcblxuXHR0aGlzLnNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0dmFyIGluZGVudFN0ciA9IHNvdXJjZS5jb250ZW50LmluZGVudFN0cjtcblxuXHRcdGlmIChpbmRlbnRTdHIgPT09IG51bGwpIHsgcmV0dXJuOyB9XG5cblx0XHRpZiAoIWluZGVudFN0cmluZ0NvdW50c1tpbmRlbnRTdHJdKSB7IGluZGVudFN0cmluZ0NvdW50c1tpbmRlbnRTdHJdID0gMDsgfVxuXHRcdGluZGVudFN0cmluZ0NvdW50c1tpbmRlbnRTdHJdICs9IDE7XG5cdH0pO1xuXG5cdHJldHVybiAoXG5cdFx0T2JqZWN0LmtleXMoaW5kZW50U3RyaW5nQ291bnRzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0XHRyZXR1cm4gaW5kZW50U3RyaW5nQ291bnRzW2FdIC0gaW5kZW50U3RyaW5nQ291bnRzW2JdO1xuXHRcdH0pWzBdIHx8ICdcXHQnXG5cdCk7XG59O1xuXG5CdW5kbGUucHJvdG90eXBlLmluZGVudCA9IGZ1bmN0aW9uIGluZGVudCAoaW5kZW50U3RyKSB7XG5cdFx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0aW5kZW50U3RyID0gdGhpcy5nZXRJbmRlbnRTdHJpbmcoKTtcblx0fVxuXG5cdGlmIChpbmRlbnRTdHIgPT09ICcnKSB7IHJldHVybiB0aGlzOyB9IC8vIG5vb3BcblxuXHR2YXIgdHJhaWxpbmdOZXdsaW5lID0gIXRoaXMuaW50cm8gfHwgdGhpcy5pbnRyby5zbGljZSgtMSkgPT09ICdcXG4nO1xuXG5cdHRoaXMuc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UsIGkpIHtcblx0XHR2YXIgc2VwYXJhdG9yID0gc291cmNlLnNlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gc291cmNlLnNlcGFyYXRvciA6IHRoaXMkMS5zZXBhcmF0b3I7XG5cdFx0dmFyIGluZGVudFN0YXJ0ID0gdHJhaWxpbmdOZXdsaW5lIHx8IChpID4gMCAmJiAvXFxyP1xcbiQvLnRlc3Qoc2VwYXJhdG9yKSk7XG5cblx0XHRzb3VyY2UuY29udGVudC5pbmRlbnQoaW5kZW50U3RyLCB7XG5cdFx0XHRleGNsdWRlOiBzb3VyY2UuaW5kZW50RXhjbHVzaW9uUmFuZ2VzLFxuXHRcdFx0aW5kZW50U3RhcnQ6IGluZGVudFN0YXJ0IC8vOiB0cmFpbGluZ05ld2xpbmUgfHwgL1xccj9cXG4kLy50ZXN0KCBzZXBhcmF0b3IgKSAgLy90cnVlLy8vXFxyP1xcbi8udGVzdCggc2VwYXJhdG9yIClcblx0XHR9KTtcblxuXHRcdHRyYWlsaW5nTmV3bGluZSA9IHNvdXJjZS5jb250ZW50Lmxhc3RDaGFyKCkgPT09ICdcXG4nO1xuXHR9KTtcblxuXHRpZiAodGhpcy5pbnRybykge1xuXHRcdHRoaXMuaW50cm8gPVxuXHRcdFx0aW5kZW50U3RyICtcblx0XHRcdHRoaXMuaW50cm8ucmVwbGFjZSgvXlteXFxuXS9nbSwgZnVuY3Rpb24gKG1hdGNoLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4gaW5kZXggPiAwID8gaW5kZW50U3RyICsgbWF0Y2ggOiBtYXRjaDtcblx0XHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5CdW5kbGUucHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbiBwcmVwZW5kIChzdHIpIHtcblx0dGhpcy5pbnRybyA9IHN0ciArIHRoaXMuaW50cm87XG5cdHJldHVybiB0aGlzO1xufTtcblxuQnVuZGxlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcblx0XHR2YXIgdGhpcyQxID0gdGhpcztcblxuXHR2YXIgYm9keSA9IHRoaXMuc291cmNlc1xuXHRcdC5tYXAoZnVuY3Rpb24gKHNvdXJjZSwgaSkge1xuXHRcdFx0dmFyIHNlcGFyYXRvciA9IHNvdXJjZS5zZXBhcmF0b3IgIT09IHVuZGVmaW5lZCA/IHNvdXJjZS5zZXBhcmF0b3IgOiB0aGlzJDEuc2VwYXJhdG9yO1xuXHRcdFx0dmFyIHN0ciA9IChpID4gMCA/IHNlcGFyYXRvciA6ICcnKSArIHNvdXJjZS5jb250ZW50LnRvU3RyaW5nKCk7XG5cblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fSlcblx0XHQuam9pbignJyk7XG5cblx0cmV0dXJuIHRoaXMuaW50cm8gKyBib2R5O1xufTtcblxuQnVuZGxlLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gaXNFbXB0eSAoKSB7XG5cdGlmICh0aGlzLmludHJvLmxlbmd0aCAmJiB0aGlzLmludHJvLnRyaW0oKSlcblx0XHR7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodGhpcy5zb3VyY2VzLnNvbWUoZnVuY3Rpb24gKHNvdXJjZSkgeyByZXR1cm4gIXNvdXJjZS5jb250ZW50LmlzRW1wdHkoKTsgfSkpXG5cdFx0eyByZXR1cm4gZmFsc2U7IH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG5CdW5kbGUucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uIGxlbmd0aCAoKSB7XG5cdHJldHVybiB0aGlzLnNvdXJjZXMucmVkdWNlKGZ1bmN0aW9uIChsZW5ndGgsIHNvdXJjZSkgeyByZXR1cm4gbGVuZ3RoICsgc291cmNlLmNvbnRlbnQubGVuZ3RoKCk7IH0sIHRoaXMuaW50cm8ubGVuZ3RoKTtcbn07XG5cbkJ1bmRsZS5wcm90b3R5cGUudHJpbUxpbmVzID0gZnVuY3Rpb24gdHJpbUxpbmVzICgpIHtcblx0cmV0dXJuIHRoaXMudHJpbSgnW1xcXFxyXFxcXG5dJyk7XG59O1xuXG5CdW5kbGUucHJvdG90eXBlLnRyaW0gPSBmdW5jdGlvbiB0cmltIChjaGFyVHlwZSkge1xuXHRyZXR1cm4gdGhpcy50cmltU3RhcnQoY2hhclR5cGUpLnRyaW1FbmQoY2hhclR5cGUpO1xufTtcblxuQnVuZGxlLnByb3RvdHlwZS50cmltU3RhcnQgPSBmdW5jdGlvbiB0cmltU3RhcnQgKGNoYXJUeXBlKSB7XG5cdHZhciByeCA9IG5ldyBSZWdFeHAoJ14nICsgKGNoYXJUeXBlIHx8ICdcXFxccycpICsgJysnKTtcblx0dGhpcy5pbnRybyA9IHRoaXMuaW50cm8ucmVwbGFjZShyeCwgJycpO1xuXG5cdGlmICghdGhpcy5pbnRybykge1xuXHRcdHZhciBzb3VyY2U7XG5cdFx0dmFyIGkgPSAwO1xuXG5cdFx0ZG8ge1xuXHRcdFx0c291cmNlID0gdGhpcy5zb3VyY2VzW2krK107XG5cdFx0XHRpZiAoIXNvdXJjZSkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9IHdoaWxlICghc291cmNlLmNvbnRlbnQudHJpbVN0YXJ0QWJvcnRlZChjaGFyVHlwZSkpO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5CdW5kbGUucHJvdG90eXBlLnRyaW1FbmQgPSBmdW5jdGlvbiB0cmltRW5kIChjaGFyVHlwZSkge1xuXHR2YXIgcnggPSBuZXcgUmVnRXhwKChjaGFyVHlwZSB8fCAnXFxcXHMnKSArICcrJCcpO1xuXG5cdHZhciBzb3VyY2U7XG5cdHZhciBpID0gdGhpcy5zb3VyY2VzLmxlbmd0aCAtIDE7XG5cblx0ZG8ge1xuXHRcdHNvdXJjZSA9IHRoaXMuc291cmNlc1tpLS1dO1xuXHRcdGlmICghc291cmNlKSB7XG5cdFx0XHR0aGlzLmludHJvID0gdGhpcy5pbnRyby5yZXBsYWNlKHJ4LCAnJyk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH0gd2hpbGUgKCFzb3VyY2UuY29udGVudC50cmltRW5kQWJvcnRlZChjaGFyVHlwZSkpO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFnaWNTdHJpbmc7XG5leHBvcnQgeyBCdW5kbGUsIFNvdXJjZU1hcCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFnaWMtc3RyaW5nLmVzLmpzLm1hcFxuIl0sIm5hbWVzIjpbInRoaXMkMSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxhQUFhLEdB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LE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQjtBQUNBLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUI7QUFDQSxDQUFDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7QUFDOUIsQ0FBQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQzFCO0FBQ0EsQ0FBQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUU7QUFDM0QsQ0FBQyxJQUFJLE9BQU8sR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzdEO0FBQ0EsQ0FBQyxJQUFJLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUU7QUFDMUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEVBQUU7QUFDL0M7QUFDQSxDQUFDLElBQUksT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtBQUN2QyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRTtBQUM1QztBQUNBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN0RCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ2pCLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0FBQ2xDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQzdCLEVBQUU7QUFDRjtBQUNBLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDMUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUM7QUFDOUI7QUFDQSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxFQUFFO0FBQzNDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUU7QUFDMUMsQ0FBQyxPQUFPLElBQUksQ0FBQztBQUNiLENBQUMsQ0FBQztBQUNGO0FBQ0EsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3BGLENBQUMsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUUsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsRUFBRTtBQUNsRztBQUNBLENBQUMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDckQsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUNqRDtBQUNBLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRTtBQUM3RSxDQUFDLElBQUksS0FBSyxLQUFLLEdBQUc7QUFDbEIsRUFBRSxFQUFF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R0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUNuQyxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ2hDLEdBQUcsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVDLEdBQUcsSUFBSSxTQUFTLEtBQUssQ0FBQyxDQUFDO0FBQ3ZCLElBQUksRUFBRSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRTtBQUM3RCxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUNyQyxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzlCLEdBQUcsU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFDLEdBQUcsSUFBSSxTQUFTLEtBQUssQ0FBQyxDQUFDO0FBQ3ZCLElBQUksRUFBRSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRTtBQUMzRCxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUNuQyxHQUFHO0FBQ0gsRUFBRSxRQUFRLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ2xDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsSUFBSSxTQUFTLEtBQUssQ0FBQyxDQUFDO0FBQ3JCLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxP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
