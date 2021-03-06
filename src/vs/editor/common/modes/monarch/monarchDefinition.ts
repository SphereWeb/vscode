/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

/**
 * Create a syntax highighter with a fully declarative JSON style lexer description
 * using regular expressions.
 */

import {ILexer} from 'vs/editor/common/modes/monarch/monarchCommon';
import {IRichEditConfiguration} from 'vs/editor/common/modes/supports/richEditSupport';

export function createRichEditSupport(lexer: ILexer): IRichEditConfiguration {

	return {

		wordPattern: lexer.wordDefinition,

		comments: {
			lineComment: lexer.lineComment,
			blockComment: [lexer.blockCommentStart, lexer.blockCommentEnd]
		},

		brackets: lexer.standardBrackets,

		__electricCharacterSupport: {
			// regexBrackets: lexer.enhancedBrackets,
			caseInsensitive: lexer.ignoreCase,
			embeddedElectricCharacters: lexer.outdentTriggers.split('')
		},

		__characterPairSupport: {
			autoClosingPairs: lexer.autoClosingPairs
		}
	};
}
