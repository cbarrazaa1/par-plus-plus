// Generated from src/antlr/ParPlusPlus.g4 by ANTLR 4.7.3-SNAPSHOT
// @ts-nocheck

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ParPlusPlusListener } from "./ParPlusPlusListener";
import { ParPlusPlusVisitor } from "./ParPlusPlusVisitor";


export class ParPlusPlusParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly WHITESPACE = 40;
	public static readonly ID = 41;
	public static readonly FLOAT_VAL = 42;
	public static readonly INT_VAL = 43;
	public static readonly CHAR_VAL = 44;
	public static readonly STR_VAL = 45;
	public static readonly RULE_program = 0;
	public static readonly RULE_vars = 1;
	public static readonly RULE_var_id_decl = 2;
	public static readonly RULE_var_ids_decl = 3;
	public static readonly RULE_var_id = 4;
	public static readonly RULE_var_id_dims = 5;
	public static readonly RULE_var_id_vector = 6;
	public static readonly RULE_var_id_matrix = 7;
	public static readonly RULE_var_ids = 8;
	public static readonly RULE_type = 9;
	public static readonly RULE_function = 10;
	public static readonly RULE_func_params = 11;
	public static readonly RULE_block = 12;
	public static readonly RULE_statement = 13;
	public static readonly RULE_assignment = 14;
	public static readonly RULE_return_stmt = 15;
	public static readonly RULE_if_expr = 16;
	public static readonly RULE_if_stmt = 17;
	public static readonly RULE_else_stmt = 18;
	public static readonly RULE_while_expr = 19;
	public static readonly RULE_while_stmt = 20;
	public static readonly RULE_for_id = 21;
	public static readonly RULE_for_expr1 = 22;
	public static readonly RULE_for_expr2 = 23;
	public static readonly RULE_for_stmt = 24;
	public static readonly RULE_rel_op = 25;
	public static readonly RULE_eq_op = 26;
	public static readonly RULE_addsub_op = 27;
	public static readonly RULE_muldiv_op = 28;
	public static readonly RULE_or_op = 29;
	public static readonly RULE_and_op = 30;
	public static readonly RULE_minus_op = 31;
	public static readonly RULE_expr = 32;
	public static readonly RULE_exp1 = 33;
	public static readonly RULE_exp2 = 34;
	public static readonly RULE_exp3 = 35;
	public static readonly RULE_exp4 = 36;
	public static readonly RULE_exp5 = 37;
	public static readonly RULE_exp6 = 38;
	public static readonly RULE_func_call = 39;
	public static readonly RULE_func_call_args = 40;
	public static readonly RULE_input_stmt = 41;
	public static readonly RULE_input_args = 42;
	public static readonly RULE_output_stmt = 43;
	public static readonly RULE_output_arg = 44;
	public static readonly RULE_output_args = 45;
	public static readonly RULE_main_function = 46;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "vars", "var_id_decl", "var_ids_decl", "var_id", "var_id_dims", 
		"var_id_vector", "var_id_matrix", "var_ids", "type", "function", "func_params", 
		"block", "statement", "assignment", "return_stmt", "if_expr", "if_stmt", 
		"else_stmt", "while_expr", "while_stmt", "for_id", "for_expr1", "for_expr2", 
		"for_stmt", "rel_op", "eq_op", "addsub_op", "muldiv_op", "or_op", "and_op", 
		"minus_op", "expr", "exp1", "exp2", "exp3", "exp4", "exp5", "exp6", "func_call", 
		"func_call_args", "input_stmt", "input_args", "output_stmt", "output_arg", 
		"output_args", "main_function",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'program'", "';'", "'var'", "'['", "']'", "','", "'int'", 
		"'float'", "'char'", "'void'", "'module'", "'('", "')'", "'{'", "'}'", 
		"'='", "'return'", "'if'", "'then'", "'else'", "'while'", "'do'", "'for'", 
		"'to'", "'>'", "'<'", "'<='", "'>='", "'=='", "'!='", "'+'", "'-'", "'*'", 
		"'/'", "'|'", "'&'", "'read'", "'write'", "'main()'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "WHITESPACE", "ID", 
		"FLOAT_VAL", "INT_VAL", "CHAR_VAL", "STR_VAL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ParPlusPlusParser._LITERAL_NAMES, ParPlusPlusParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ParPlusPlusParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ParPlusPlus.g4"; }

	// @Override
	public get ruleNames(): string[] { return ParPlusPlusParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ParPlusPlusParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ParPlusPlusParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ParPlusPlusParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.match(ParPlusPlusParser.T__0);
			this.state = 95;
			this.match(ParPlusPlusParser.ID);
			this.state = 96;
			this.match(ParPlusPlusParser.T__1);
			this.state = 97;
			this.vars();
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ParPlusPlusParser.T__6) | (1 << ParPlusPlusParser.T__7) | (1 << ParPlusPlusParser.T__8) | (1 << ParPlusPlusParser.T__9))) !== 0)) {
				{
				{
				this.state = 98;
				this.function();
				}
				}
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 104;
			this.main_function();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public vars(): VarsContext {
		let _localctx: VarsContext = new VarsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ParPlusPlusParser.RULE_vars);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParPlusPlusParser.T__2) {
				{
				this.state = 106;
				this.match(ParPlusPlusParser.T__2);
				this.state = 112;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 107;
						this.type();
						this.state = 108;
						this.var_id_decl();
						this.state = 109;
						this.var_ids_decl();
						this.state = 110;
						this.match(ParPlusPlusParser.T__1);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 114;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_id_decl(): Var_id_declContext {
		let _localctx: Var_id_declContext = new Var_id_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ParPlusPlusParser.RULE_var_id_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(ParPlusPlusParser.ID);
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParPlusPlusParser.T__3) {
				{
				this.state = 119;
				this.match(ParPlusPlusParser.T__3);
				this.state = 120;
				this.match(ParPlusPlusParser.INT_VAL);
				this.state = 121;
				this.match(ParPlusPlusParser.T__4);
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParPlusPlusParser.T__3) {
					{
					this.state = 122;
					this.match(ParPlusPlusParser.T__3);
					this.state = 123;
					this.match(ParPlusPlusParser.INT_VAL);
					this.state = 124;
					this.match(ParPlusPlusParser.T__4);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_ids_decl(): Var_ids_declContext {
		let _localctx: Var_ids_declContext = new Var_ids_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ParPlusPlusParser.RULE_var_ids_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParPlusPlusParser.T__5) {
				{
				{
				this.state = 129;
				this.match(ParPlusPlusParser.T__5);
				this.state = 130;
				this.var_id_decl();
				}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_id(): Var_idContext {
		let _localctx: Var_idContext = new Var_idContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ParPlusPlusParser.RULE_var_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(ParPlusPlusParser.ID);
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParPlusPlusParser.T__3) {
				{
				this.state = 137;
				this.var_id_vector();
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParPlusPlusParser.T__3) {
					{
					this.state = 138;
					this.var_id_matrix();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_id_dims(): Var_id_dimsContext {
		let _localctx: Var_id_dimsContext = new Var_id_dimsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ParPlusPlusParser.RULE_var_id_dims);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(ParPlusPlusParser.T__3);
			this.state = 144;
			this.expr();
			this.state = 145;
			this.match(ParPlusPlusParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_id_vector(): Var_id_vectorContext {
		let _localctx: Var_id_vectorContext = new Var_id_vectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ParPlusPlusParser.RULE_var_id_vector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.var_id_dims();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_id_matrix(): Var_id_matrixContext {
		let _localctx: Var_id_matrixContext = new Var_id_matrixContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ParPlusPlusParser.RULE_var_id_matrix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.var_id_dims();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_ids(): Var_idsContext {
		let _localctx: Var_idsContext = new Var_idsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ParPlusPlusParser.RULE_var_ids);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParPlusPlusParser.T__5) {
				{
				{
				this.state = 151;
				this.match(ParPlusPlusParser.T__5);
				this.state = 152;
				this.var_id();
				}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ParPlusPlusParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ParPlusPlusParser.T__6) | (1 << ParPlusPlusParser.T__7) | (1 << ParPlusPlusParser.T__8))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ParPlusPlusParser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParPlusPlusParser.T__6:
			case ParPlusPlusParser.T__7:
			case ParPlusPlusParser.T__8:
				{
				this.state = 160;
				this.type();
				}
				break;
			case ParPlusPlusParser.T__9:
				{
				this.state = 161;
				this.match(ParPlusPlusParser.T__9);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 164;
			this.match(ParPlusPlusParser.T__10);
			this.state = 165;
			this.match(ParPlusPlusParser.ID);
			this.state = 166;
			this.match(ParPlusPlusParser.T__11);
			this.state = 167;
			this.func_params();
			this.state = 168;
			this.match(ParPlusPlusParser.T__12);
			this.state = 169;
			this.vars();
			this.state = 170;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_params(): Func_paramsContext {
		let _localctx: Func_paramsContext = new Func_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ParPlusPlusParser.RULE_func_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ParPlusPlusParser.T__6) | (1 << ParPlusPlusParser.T__7) | (1 << ParPlusPlusParser.T__8))) !== 0)) {
				{
				this.state = 172;
				this.type();
				this.state = 173;
				this.match(ParPlusPlusParser.ID);
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ParPlusPlusParser.T__5) {
					{
					{
					this.state = 174;
					this.match(ParPlusPlusParser.T__5);
					this.state = 175;
					this.type();
					this.state = 176;
					this.match(ParPlusPlusParser.ID);
					}
					}
					this.state = 182;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ParPlusPlusParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.match(ParPlusPlusParser.T__13);
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (ParPlusPlusParser.T__16 - 17)) | (1 << (ParPlusPlusParser.T__17 - 17)) | (1 << (ParPlusPlusParser.T__20 - 17)) | (1 << (ParPlusPlusParser.T__22 - 17)) | (1 << (ParPlusPlusParser.T__36 - 17)) | (1 << (ParPlusPlusParser.T__37 - 17)) | (1 << (ParPlusPlusParser.ID - 17)))) !== 0)) {
				{
				{
				this.state = 186;
				this.statement();
				}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 192;
			this.match(ParPlusPlusParser.T__14);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ParPlusPlusParser.RULE_statement);
		try {
			this.state = 202;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 194;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 195;
				this.return_stmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 196;
				this.if_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 197;
				this.while_stmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 198;
				this.for_stmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 199;
				this.func_call();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 200;
				this.input_stmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 201;
				this.output_stmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ParPlusPlusParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.var_id();
			this.state = 205;
			this.match(ParPlusPlusParser.T__15);
			this.state = 206;
			this.expr();
			this.state = 207;
			this.match(ParPlusPlusParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public return_stmt(): Return_stmtContext {
		let _localctx: Return_stmtContext = new Return_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ParPlusPlusParser.RULE_return_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.match(ParPlusPlusParser.T__16);
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParPlusPlusParser.T__11) {
				{
				this.state = 210;
				this.match(ParPlusPlusParser.T__11);
				this.state = 211;
				this.expr();
				this.state = 212;
				this.match(ParPlusPlusParser.T__12);
				}
			}

			this.state = 216;
			this.match(ParPlusPlusParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_expr(): If_exprContext {
		let _localctx: If_exprContext = new If_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ParPlusPlusParser.RULE_if_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.match(ParPlusPlusParser.T__17);
			this.state = 219;
			this.match(ParPlusPlusParser.T__11);
			this.state = 220;
			this.expr();
			this.state = 221;
			this.match(ParPlusPlusParser.T__12);
			this.state = 222;
			this.match(ParPlusPlusParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_stmt(): If_stmtContext {
		let _localctx: If_stmtContext = new If_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ParPlusPlusParser.RULE_if_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.if_expr();
			this.state = 225;
			this.block();
			this.state = 226;
			this.else_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public else_stmt(): Else_stmtContext {
		let _localctx: Else_stmtContext = new Else_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ParPlusPlusParser.RULE_else_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParPlusPlusParser.T__19) {
				{
				this.state = 228;
				this.match(ParPlusPlusParser.T__19);
				this.state = 229;
				this.block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public while_expr(): While_exprContext {
		let _localctx: While_exprContext = new While_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ParPlusPlusParser.RULE_while_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(ParPlusPlusParser.T__20);
			this.state = 233;
			this.match(ParPlusPlusParser.T__11);
			this.state = 234;
			this.expr();
			this.state = 235;
			this.match(ParPlusPlusParser.T__12);
			this.state = 236;
			this.match(ParPlusPlusParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public while_stmt(): While_stmtContext {
		let _localctx: While_stmtContext = new While_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ParPlusPlusParser.RULE_while_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.while_expr();
			this.state = 239;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_id(): For_idContext {
		let _localctx: For_idContext = new For_idContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ParPlusPlusParser.RULE_for_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.match(ParPlusPlusParser.T__22);
			this.state = 242;
			this.var_id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_expr1(): For_expr1Context {
		let _localctx: For_expr1Context = new For_expr1Context(this._ctx, this.state);
		this.enterRule(_localctx, 44, ParPlusPlusParser.RULE_for_expr1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.match(ParPlusPlusParser.T__15);
			this.state = 245;
			this.expr();
			this.state = 246;
			this.match(ParPlusPlusParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_expr2(): For_expr2Context {
		let _localctx: For_expr2Context = new For_expr2Context(this._ctx, this.state);
		this.enterRule(_localctx, 46, ParPlusPlusParser.RULE_for_expr2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.expr();
			this.state = 249;
			this.match(ParPlusPlusParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_stmt(): For_stmtContext {
		let _localctx: For_stmtContext = new For_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ParPlusPlusParser.RULE_for_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this.for_id();
			this.state = 252;
			this.for_expr1();
			this.state = 253;
			this.for_expr2();
			this.state = 254;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rel_op(): Rel_opContext {
		let _localctx: Rel_opContext = new Rel_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ParPlusPlusParser.RULE_rel_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ParPlusPlusParser.T__24) | (1 << ParPlusPlusParser.T__25) | (1 << ParPlusPlusParser.T__26) | (1 << ParPlusPlusParser.T__27))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eq_op(): Eq_opContext {
		let _localctx: Eq_opContext = new Eq_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ParPlusPlusParser.RULE_eq_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			_la = this._input.LA(1);
			if (!(_la === ParPlusPlusParser.T__28 || _la === ParPlusPlusParser.T__29)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addsub_op(): Addsub_opContext {
		let _localctx: Addsub_opContext = new Addsub_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ParPlusPlusParser.RULE_addsub_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			_la = this._input.LA(1);
			if (!(_la === ParPlusPlusParser.T__30 || _la === ParPlusPlusParser.T__31)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public muldiv_op(): Muldiv_opContext {
		let _localctx: Muldiv_opContext = new Muldiv_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ParPlusPlusParser.RULE_muldiv_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			_la = this._input.LA(1);
			if (!(_la === ParPlusPlusParser.T__32 || _la === ParPlusPlusParser.T__33)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public or_op(): Or_opContext {
		let _localctx: Or_opContext = new Or_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ParPlusPlusParser.RULE_or_op);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(ParPlusPlusParser.T__34);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public and_op(): And_opContext {
		let _localctx: And_opContext = new And_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ParPlusPlusParser.RULE_and_op);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.match(ParPlusPlusParser.T__35);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public minus_op(): Minus_opContext {
		let _localctx: Minus_opContext = new Minus_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ParPlusPlusParser.RULE_minus_op);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(ParPlusPlusParser.T__31);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ParPlusPlusParser.RULE_expr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.exp1();
			this.state = 276;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 271;
					this.or_op();
					this.state = 272;
					this.expr();
					}
					}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exp1(): Exp1Context {
		let _localctx: Exp1Context = new Exp1Context(this._ctx, this.state);
		this.enterRule(_localctx, 66, ParPlusPlusParser.RULE_exp1);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.exp2();
			this.state = 285;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 280;
					this.and_op();
					this.state = 281;
					this.exp1();
					}
					}
				}
				this.state = 287;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exp2(): Exp2Context {
		let _localctx: Exp2Context = new Exp2Context(this._ctx, this.state);
		this.enterRule(_localctx, 68, ParPlusPlusParser.RULE_exp2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			this.exp3();
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParPlusPlusParser.T__28 || _la === ParPlusPlusParser.T__29) {
				{
				this.state = 289;
				this.eq_op();
				this.state = 290;
				this.exp3();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exp3(): Exp3Context {
		let _localctx: Exp3Context = new Exp3Context(this._ctx, this.state);
		this.enterRule(_localctx, 70, ParPlusPlusParser.RULE_exp3);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this.exp4();
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ParPlusPlusParser.T__24) | (1 << ParPlusPlusParser.T__25) | (1 << ParPlusPlusParser.T__26) | (1 << ParPlusPlusParser.T__27))) !== 0)) {
				{
				this.state = 295;
				this.rel_op();
				this.state = 296;
				this.exp4();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exp4(): Exp4Context {
		let _localctx: Exp4Context = new Exp4Context(this._ctx, this.state);
		this.enterRule(_localctx, 72, ParPlusPlusParser.RULE_exp4);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this.exp5();
			this.state = 306;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 301;
					this.addsub_op();
					this.state = 302;
					this.exp4();
					}
					}
				}
				this.state = 308;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exp5(): Exp5Context {
		let _localctx: Exp5Context = new Exp5Context(this._ctx, this.state);
		this.enterRule(_localctx, 74, ParPlusPlusParser.RULE_exp5);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.exp6();
			this.state = 315;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 310;
					this.muldiv_op();
					this.state = 311;
					this.exp5();
					}
					}
				}
				this.state = 317;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exp6(): Exp6Context {
		let _localctx: Exp6Context = new Exp6Context(this._ctx, this.state);
		this.enterRule(_localctx, 76, ParPlusPlusParser.RULE_exp6);
		let _la: number;
		try {
			this.state = 333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 318;
				this.match(ParPlusPlusParser.T__11);
				this.state = 319;
				this.expr();
				this.state = 320;
				this.match(ParPlusPlusParser.T__12);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 322;
				this.var_id();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 323;
				this.func_call();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParPlusPlusParser.T__31) {
					{
					this.state = 324;
					this.minus_op();
					}
				}

				this.state = 327;
				this.match(ParPlusPlusParser.INT_VAL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParPlusPlusParser.T__31) {
					{
					this.state = 328;
					this.minus_op();
					}
				}

				this.state = 331;
				this.match(ParPlusPlusParser.FLOAT_VAL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 332;
				this.match(ParPlusPlusParser.CHAR_VAL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_call(): Func_callContext {
		let _localctx: Func_callContext = new Func_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ParPlusPlusParser.RULE_func_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.match(ParPlusPlusParser.ID);
			this.state = 336;
			this.match(ParPlusPlusParser.T__11);
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParPlusPlusParser.T__11 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ParPlusPlusParser.T__31 - 32)) | (1 << (ParPlusPlusParser.ID - 32)) | (1 << (ParPlusPlusParser.FLOAT_VAL - 32)) | (1 << (ParPlusPlusParser.INT_VAL - 32)) | (1 << (ParPlusPlusParser.CHAR_VAL - 32)))) !== 0)) {
				{
				this.state = 337;
				this.func_call_args();
				}
			}

			this.state = 340;
			this.match(ParPlusPlusParser.T__12);
			this.state = 342;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 341;
				this.match(ParPlusPlusParser.T__1);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_call_args(): Func_call_argsContext {
		let _localctx: Func_call_argsContext = new Func_call_argsContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ParPlusPlusParser.RULE_func_call_args);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this.expr();
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParPlusPlusParser.T__5) {
				{
				{
				this.state = 345;
				this.match(ParPlusPlusParser.T__5);
				this.state = 346;
				this.expr();
				}
				}
				this.state = 351;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public input_stmt(): Input_stmtContext {
		let _localctx: Input_stmtContext = new Input_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ParPlusPlusParser.RULE_input_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.match(ParPlusPlusParser.T__36);
			this.state = 353;
			this.match(ParPlusPlusParser.T__11);
			this.state = 354;
			this.input_args();
			this.state = 355;
			this.match(ParPlusPlusParser.T__12);
			this.state = 356;
			this.match(ParPlusPlusParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public input_args(): Input_argsContext {
		let _localctx: Input_argsContext = new Input_argsContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ParPlusPlusParser.RULE_input_args);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.var_id();
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParPlusPlusParser.T__5) {
				{
				{
				this.state = 359;
				this.match(ParPlusPlusParser.T__5);
				this.state = 360;
				this.var_id();
				}
				}
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public output_stmt(): Output_stmtContext {
		let _localctx: Output_stmtContext = new Output_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ParPlusPlusParser.RULE_output_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(ParPlusPlusParser.T__37);
			this.state = 367;
			this.match(ParPlusPlusParser.T__11);
			this.state = 368;
			this.output_args();
			this.state = 369;
			this.match(ParPlusPlusParser.T__12);
			this.state = 370;
			this.match(ParPlusPlusParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public output_arg(): Output_argContext {
		let _localctx: Output_argContext = new Output_argContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ParPlusPlusParser.RULE_output_arg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParPlusPlusParser.T__11:
			case ParPlusPlusParser.T__31:
			case ParPlusPlusParser.ID:
			case ParPlusPlusParser.FLOAT_VAL:
			case ParPlusPlusParser.INT_VAL:
			case ParPlusPlusParser.CHAR_VAL:
				{
				this.state = 372;
				this.expr();
				}
				break;
			case ParPlusPlusParser.STR_VAL:
				{
				this.state = 373;
				this.match(ParPlusPlusParser.STR_VAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public output_args(): Output_argsContext {
		let _localctx: Output_argsContext = new Output_argsContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ParPlusPlusParser.RULE_output_args);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.output_arg();
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParPlusPlusParser.T__5) {
				{
				{
				this.state = 377;
				this.match(ParPlusPlusParser.T__5);
				this.state = 378;
				this.output_arg();
				}
				}
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public main_function(): Main_functionContext {
		let _localctx: Main_functionContext = new Main_functionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ParPlusPlusParser.RULE_main_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.match(ParPlusPlusParser.T__38);
			this.state = 385;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\u0186\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x07\x02f\n\x02\f\x02\x0E\x02i\v\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03s\n\x03\r\x03\x0E\x03t\x05" +
		"\x03w\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x04\x80\n\x04\x05\x04\x82\n\x04\x03\x05\x03\x05\x07\x05\x86\n\x05\f\x05" +
		"\x0E\x05\x89\v\x05\x03\x06\x03\x06\x03\x06\x05\x06\x8E\n\x06\x05\x06\x90" +
		"\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03" +
		"\n\x07\n\x9C\n\n\f\n\x0E\n\x9F\v\n\x03\v\x03\v\x03\f\x03\f\x05\f\xA5\n" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x07\r\xB5\n\r\f\r\x0E\r\xB8\v\r\x05\r\xBA\n\r\x03\x0E\x03" +
		"\x0E\x07\x0E\xBE\n\x0E\f\x0E\x0E\x0E\xC1\v\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xCD\n" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\xD9\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14" +
		"\x05\x14\xE9\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03" +
		"\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03\"\x03\"\x07\"\u0115\n\"\f\"\x0E" +
		"\"\u0118\v\"\x03#\x03#\x03#\x03#\x07#\u011E\n#\f#\x0E#\u0121\v#\x03$\x03" +
		"$\x03$\x03$\x05$\u0127\n$\x03%\x03%\x03%\x03%\x05%\u012D\n%\x03&\x03&" +
		"\x03&\x03&\x07&\u0133\n&\f&\x0E&\u0136\v&\x03\'\x03\'\x03\'\x03\'\x07" +
		"\'\u013C\n\'\f\'\x0E\'\u013F\v\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05" +
		"(\u0148\n(\x03(\x03(\x05(\u014C\n(\x03(\x03(\x05(\u0150\n(\x03)\x03)\x03" +
		")\x05)\u0155\n)\x03)\x03)\x05)\u0159\n)\x03*\x03*\x03*\x07*\u015E\n*\f" +
		"*\x0E*\u0161\v*\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x07,\u016C" +
		"\n,\f,\x0E,\u016F\v,\x03-\x03-\x03-\x03-\x03-\x03-\x03.\x03.\x05.\u0179" +
		"\n.\x03/\x03/\x03/\x07/\u017E\n/\f/\x0E/\u0181\v/\x030\x030\x030\x030" +
		"\x02\x02\x021\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02\x02\x07\x03\x02\t\v\x03\x02\x1B\x1E\x03\x02\x1F \x03\x02!\"\x03" +
		"\x02#$\x02\u017F\x02`\x03\x02\x02\x02\x04v\x03\x02\x02\x02\x06x\x03\x02" +
		"\x02\x02\b\x87\x03\x02\x02\x02\n\x8A\x03\x02\x02\x02\f\x91\x03\x02\x02" +
		"\x02\x0E\x95\x03\x02\x02\x02\x10\x97\x03\x02\x02\x02\x12\x9D\x03\x02\x02" +
		"\x02\x14\xA0\x03\x02\x02\x02\x16\xA4\x03\x02\x02\x02\x18\xB9\x03\x02\x02" +
		"\x02\x1A\xBB\x03\x02\x02\x02\x1C\xCC\x03\x02\x02\x02\x1E\xCE\x03\x02\x02" +
		"\x02 \xD3\x03\x02\x02\x02\"\xDC\x03\x02\x02\x02$\xE2\x03\x02\x02\x02&" +
		"\xE8\x03\x02\x02\x02(\xEA\x03\x02\x02\x02*\xF0\x03\x02\x02\x02,\xF3\x03" +
		"\x02\x02\x02.\xF6\x03\x02\x02\x020\xFA\x03\x02\x02\x022\xFD\x03\x02\x02" +
		"\x024\u0102\x03\x02\x02\x026\u0104\x03\x02\x02\x028\u0106\x03\x02\x02" +
		"\x02:\u0108\x03\x02\x02\x02<\u010A\x03\x02\x02\x02>\u010C\x03\x02\x02" +
		"\x02@\u010E\x03\x02\x02\x02B\u0110\x03\x02\x02\x02D\u0119\x03\x02\x02" +
		"\x02F\u0122\x03\x02\x02\x02H\u0128\x03\x02\x02\x02J\u012E\x03\x02\x02" +
		"\x02L\u0137\x03\x02\x02\x02N\u014F\x03\x02\x02\x02P\u0151\x03\x02\x02" +
		"\x02R\u015A\x03\x02\x02\x02T\u0162\x03\x02\x02\x02V\u0168\x03\x02\x02" +
		"\x02X\u0170\x03\x02\x02\x02Z\u0178\x03\x02\x02\x02\\\u017A\x03\x02\x02" +
		"\x02^\u0182\x03\x02\x02\x02`a\x07\x03\x02\x02ab\x07+\x02\x02bc\x07\x04" +
		"\x02\x02cg\x05\x04\x03\x02df\x05\x16\f\x02ed\x03\x02\x02\x02fi\x03\x02" +
		"\x02\x02ge\x03\x02\x02\x02gh\x03\x02\x02\x02hj\x03\x02\x02\x02ig\x03\x02" +
		"\x02\x02jk\x05^0\x02k\x03\x03\x02\x02\x02lr\x07\x05\x02\x02mn\x05\x14" +
		"\v\x02no\x05\x06\x04\x02op\x05\b\x05\x02pq\x07\x04\x02\x02qs\x03\x02\x02" +
		"\x02rm\x03\x02\x02\x02st\x03\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02" +
		"\x02uw\x03\x02\x02\x02vl\x03\x02\x02\x02vw\x03\x02\x02\x02w\x05\x03\x02" +
		"\x02\x02x\x81\x07+\x02\x02yz\x07\x06\x02\x02z{\x07-\x02\x02{\x7F\x07\x07" +
		"\x02\x02|}\x07\x06\x02\x02}~\x07-\x02\x02~\x80\x07\x07\x02\x02\x7F|\x03" +
		"\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x82\x03\x02\x02\x02\x81y\x03" +
		"\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x07\x03\x02\x02\x02\x83\x84\x07" +
		"\b\x02\x02\x84\x86\x05\x06\x04\x02\x85\x83\x03\x02\x02\x02\x86\x89\x03" +
		"\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\t\x03" +
		"\x02\x02\x02\x89\x87\x03\x02\x02\x02\x8A\x8F\x07+\x02\x02\x8B\x8D\x05" +
		"\x0E\b\x02\x8C\x8E\x05\x10\t\x02\x8D\x8C\x03\x02\x02\x02\x8D\x8E\x03\x02" +
		"\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x8B\x03\x02\x02\x02\x8F\x90\x03\x02" +
		"\x02\x02\x90\v\x03\x02\x02\x02\x91\x92\x07\x06\x02\x02\x92\x93\x05B\"" +
		"\x02\x93\x94\x07\x07\x02\x02\x94\r\x03\x02\x02\x02\x95\x96\x05\f\x07\x02" +
		"\x96\x0F\x03\x02\x02\x02\x97\x98\x05\f\x07\x02\x98\x11\x03\x02\x02\x02" +
		"\x99\x9A\x07\b\x02\x02\x9A\x9C\x05\n\x06\x02\x9B\x99\x03\x02\x02\x02\x9C" +
		"\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E" +
		"\x13\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA1\t\x02\x02\x02\xA1" +
		"\x15\x03\x02\x02\x02\xA2\xA5\x05\x14\v\x02\xA3\xA5\x07\f\x02\x02\xA4\xA2" +
		"\x03\x02\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7" +
		"\x07\r\x02\x02\xA7\xA8\x07+\x02\x02\xA8\xA9\x07\x0E\x02\x02\xA9\xAA\x05" +
		"\x18\r\x02\xAA\xAB\x07\x0F\x02\x02\xAB\xAC\x05\x04\x03\x02\xAC\xAD\x05" +
		"\x1A\x0E\x02\xAD\x17\x03\x02\x02\x02\xAE\xAF\x05\x14\v\x02\xAF\xB6\x07" +
		"+\x02\x02\xB0\xB1\x07\b\x02\x02\xB1\xB2\x05\x14\v\x02\xB2\xB3\x07+\x02" +
		"\x02\xB3\xB5\x03\x02\x02\x02\xB4\xB0\x03\x02\x02\x02\xB5\xB8\x03\x02\x02" +
		"\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xBA\x03\x02\x02" +
		"\x02\xB8\xB6\x03\x02\x02\x02\xB9\xAE\x03\x02\x02\x02\xB9\xBA\x03\x02\x02" +
		"\x02\xBA\x19\x03\x02\x02\x02\xBB\xBF\x07\x10\x02\x02\xBC\xBE\x05\x1C\x0F" +
		"\x02\xBD\xBC\x03\x02\x02\x02\xBE\xC1\x03\x02\x02\x02\xBF\xBD\x03\x02\x02" +
		"\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x03\x02\x02\x02\xC1\xBF\x03\x02\x02" +
		"\x02\xC2\xC3\x07\x11\x02\x02\xC3\x1B\x03\x02\x02\x02\xC4\xCD\x05\x1E\x10" +
		"\x02\xC5\xCD\x05 \x11\x02\xC6\xCD\x05$\x13\x02\xC7\xCD\x05*\x16\x02\xC8" +
		"\xCD\x052\x1A\x02\xC9\xCD\x05P)\x02\xCA\xCD\x05T+\x02\xCB\xCD\x05X-\x02" +
		"\xCC\xC4\x03\x02\x02\x02\xCC\xC5\x03\x02\x02\x02\xCC\xC6\x03\x02\x02\x02" +
		"\xCC\xC7\x03\x02\x02\x02\xCC\xC8\x03\x02\x02\x02\xCC\xC9\x03\x02\x02\x02" +
		"\xCC\xCA\x03\x02\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD\x1D\x03\x02\x02\x02" +
		"\xCE\xCF\x05\n\x06\x02\xCF\xD0\x07\x12\x02\x02\xD0\xD1\x05B\"\x02\xD1" +
		"\xD2\x07\x04\x02\x02\xD2\x1F\x03\x02\x02\x02\xD3\xD8\x07\x13\x02\x02\xD4" +
		"\xD5\x07\x0E\x02\x02\xD5\xD6\x05B\"\x02\xD6\xD7\x07\x0F\x02\x02\xD7\xD9" +
		"\x03\x02\x02\x02\xD8\xD4\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA" +
		"\x03\x02\x02\x02\xDA\xDB\x07\x04\x02\x02\xDB!\x03\x02\x02\x02\xDC\xDD" +
		"\x07\x14\x02\x02\xDD\xDE\x07\x0E\x02\x02\xDE\xDF\x05B\"\x02\xDF\xE0\x07" +
		"\x0F\x02\x02\xE0\xE1\x07\x15\x02\x02\xE1#\x03\x02\x02\x02\xE2\xE3\x05" +
		"\"\x12\x02\xE3\xE4\x05\x1A\x0E\x02\xE4\xE5\x05&\x14\x02\xE5%\x03\x02\x02" +
		"\x02\xE6\xE7\x07\x16\x02\x02\xE7\xE9\x05\x1A\x0E\x02\xE8\xE6\x03\x02\x02" +
		"\x02\xE8\xE9\x03\x02\x02\x02\xE9\'\x03\x02\x02\x02\xEA\xEB\x07\x17\x02" +
		"\x02\xEB\xEC\x07\x0E\x02\x02\xEC\xED\x05B\"\x02\xED\xEE\x07\x0F\x02\x02" +
		"\xEE\xEF\x07\x18\x02\x02\xEF)\x03\x02\x02\x02\xF0\xF1\x05(\x15\x02\xF1" +
		"\xF2\x05\x1A\x0E\x02\xF2+\x03\x02\x02\x02\xF3\xF4\x07\x19\x02\x02\xF4" +
		"\xF5\x05\n\x06\x02\xF5-\x03\x02\x02\x02\xF6\xF7\x07\x12\x02\x02\xF7\xF8" +
		"\x05B\"\x02\xF8\xF9\x07\x1A\x02\x02\xF9/\x03\x02\x02\x02\xFA\xFB\x05B" +
		"\"\x02\xFB\xFC\x07\x18\x02\x02\xFC1\x03\x02\x02\x02\xFD\xFE\x05,\x17\x02" +
		"\xFE\xFF\x05.\x18\x02\xFF\u0100\x050\x19\x02\u0100\u0101\x05\x1A\x0E\x02" +
		"\u01013\x03\x02\x02\x02\u0102\u0103\t\x03\x02\x02\u01035\x03\x02\x02\x02" +
		"\u0104\u0105\t\x04\x02\x02\u01057\x03\x02\x02\x02\u0106\u0107\t\x05\x02" +
		"\x02\u01079\x03\x02\x02\x02\u0108\u0109\t\x06\x02\x02\u0109;\x03\x02\x02" +
		"\x02\u010A\u010B\x07%\x02\x02\u010B=\x03\x02\x02\x02\u010C\u010D\x07&" +
		"\x02\x02\u010D?\x03\x02\x02\x02\u010E\u010F\x07\"\x02\x02\u010FA\x03\x02" +
		"\x02\x02\u0110\u0116\x05D#\x02\u0111\u0112\x05<\x1F\x02\u0112\u0113\x05" +
		"B\"\x02\u0113\u0115\x03\x02\x02\x02\u0114\u0111\x03\x02\x02\x02\u0115" +
		"\u0118\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02" +
		"\x02\x02\u0117C\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011F" +
		"\x05F$\x02\u011A\u011B\x05> \x02\u011B\u011C\x05D#\x02\u011C\u011E\x03" +
		"\x02\x02\x02\u011D\u011A\x03\x02\x02\x02\u011E\u0121\x03\x02\x02\x02\u011F" +
		"\u011D\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120E\x03\x02\x02" +
		"\x02\u0121\u011F\x03\x02\x02\x02\u0122\u0126\x05H%\x02\u0123\u0124\x05" +
		"6\x1C\x02\u0124\u0125\x05H%\x02\u0125\u0127\x03\x02\x02\x02\u0126\u0123" +
		"\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127G\x03\x02\x02\x02\u0128" +
		"\u012C\x05J&\x02\u0129\u012A\x054\x1B\x02\u012A\u012B\x05J&\x02\u012B" +
		"\u012D\x03\x02\x02\x02\u012C\u0129\x03\x02\x02\x02\u012C\u012D\x03\x02" +
		"\x02\x02\u012DI\x03\x02\x02\x02\u012E\u0134\x05L\'\x02\u012F\u0130\x05" +
		"8\x1D\x02\u0130\u0131\x05J&\x02\u0131\u0133\x03\x02\x02\x02\u0132\u012F" +
		"\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02" +
		"\u0134\u0135\x03\x02\x02\x02\u0135K\x03\x02\x02\x02\u0136\u0134\x03\x02" +
		"\x02\x02\u0137\u013D\x05N(\x02\u0138\u0139\x05:\x1E\x02\u0139\u013A\x05" +
		"L\'\x02\u013A\u013C\x03\x02\x02\x02\u013B\u0138\x03\x02\x02\x02\u013C" +
		"\u013F\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02" +
		"\x02\x02\u013EM\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u0140\u0141" +
		"\x07\x0E\x02\x02\u0141\u0142\x05B\"\x02\u0142\u0143\x07\x0F\x02\x02\u0143" +
		"\u0150\x03\x02\x02\x02\u0144\u0150\x05\n\x06\x02\u0145\u0150\x05P)\x02" +
		"\u0146\u0148\x05@!\x02\u0147\u0146\x03\x02\x02\x02\u0147\u0148\x03\x02" +
		"\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u0150\x07-\x02\x02\u014A\u014C" +
		"\x05@!\x02\u014B\u014A\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C" +
		"\u014D\x03\x02\x02\x02\u014D\u0150\x07,\x02\x02\u014E\u0150\x07.\x02\x02" +
		"\u014F\u0140\x03\x02\x02\x02\u014F\u0144\x03\x02\x02\x02\u014F\u0145\x03" +
		"\x02\x02\x02\u014F\u0147\x03\x02\x02\x02\u014F\u014B\x03\x02\x02\x02\u014F" +
		"\u014E\x03\x02\x02\x02\u0150O\x03\x02\x02\x02\u0151\u0152\x07+\x02\x02" +
		"\u0152\u0154\x07\x0E\x02\x02\u0153\u0155\x05R*\x02\u0154\u0153\x03\x02" +
		"\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156" +
		"\u0158\x07\x0F\x02\x02\u0157\u0159\x07\x04\x02\x02\u0158\u0157\x03\x02" +
		"\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159Q\x03\x02\x02\x02\u015A\u015F" +
		"\x05B\"\x02\u015B\u015C\x07\b\x02\x02\u015C\u015E\x05B\"\x02\u015D\u015B" +
		"\x03\x02\x02\x02\u015E\u0161\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02" +
		"\u015F\u0160\x03\x02\x02\x02\u0160S\x03\x02\x02\x02\u0161\u015F\x03\x02" +
		"\x02\x02\u0162\u0163\x07\'\x02\x02\u0163\u0164\x07\x0E\x02\x02\u0164\u0165" +
		"\x05V,\x02\u0165\u0166\x07\x0F\x02\x02\u0166\u0167\x07\x04\x02\x02\u0167" +
		"U\x03\x02\x02\x02\u0168\u016D\x05\n\x06\x02\u0169\u016A\x07\b\x02\x02" +
		"\u016A\u016C\x05\n\x06\x02\u016B\u0169\x03\x02\x02\x02\u016C\u016F\x03" +
		"\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E" +
		"W\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u0170\u0171\x07(\x02\x02" +
		"\u0171\u0172\x07\x0E\x02\x02\u0172\u0173\x05\\/\x02\u0173\u0174\x07\x0F" +
		"\x02\x02\u0174\u0175\x07\x04\x02\x02\u0175Y\x03\x02\x02\x02\u0176\u0179" +
		"\x05B\"\x02\u0177\u0179\x07/\x02\x02\u0178\u0176\x03\x02\x02\x02\u0178" +
		"\u0177\x03\x02\x02\x02\u0179[\x03\x02\x02\x02\u017A\u017F\x05Z.\x02\u017B" +
		"\u017C\x07\b\x02\x02\u017C\u017E\x05Z.\x02\u017D\u017B\x03\x02\x02\x02" +
		"\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F\u0180\x03" +
		"\x02\x02\x02\u0180]\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0182" +
		"\u0183\x07)\x02\x02\u0183\u0184\x05\x1A\x0E\x02\u0184_\x03\x02\x02\x02" +
		"!gtv\x7F\x81\x87\x8D\x8F\x9D\xA4\xB6\xB9\xBF\xCC\xD8\xE8\u0116\u011F\u0126" +
		"\u012C\u0134\u013D\u0147\u014B\u014F\u0154\u0158\u015F\u016D\u0178\u017F";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ParPlusPlusParser.__ATN) {
			ParPlusPlusParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ParPlusPlusParser._serializedATN));
		}

		return ParPlusPlusParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ParPlusPlusParser.ID, 0); }
	public vars(): VarsContext {
		return this.getRuleContext(0, VarsContext);
	}
	public main_function(): Main_functionContext {
		return this.getRuleContext(0, Main_functionContext);
	}
	public function(): FunctionContext[];
	public function(i: number): FunctionContext;
	public function(i?: number): FunctionContext | FunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionContext);
		} else {
			return this.getRuleContext(i, FunctionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_program; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarsContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public var_id_decl(): Var_id_declContext[];
	public var_id_decl(i: number): Var_id_declContext;
	public var_id_decl(i?: number): Var_id_declContext | Var_id_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_id_declContext);
		} else {
			return this.getRuleContext(i, Var_id_declContext);
		}
	}
	public var_ids_decl(): Var_ids_declContext[];
	public var_ids_decl(i: number): Var_ids_declContext;
	public var_ids_decl(i?: number): Var_ids_declContext | Var_ids_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_ids_declContext);
		} else {
			return this.getRuleContext(i, Var_ids_declContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_vars; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterVars) {
			listener.enterVars(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitVars) {
			listener.exitVars(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitVars) {
			return visitor.visitVars(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_id_declContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ParPlusPlusParser.ID, 0); }
	public INT_VAL(): TerminalNode[];
	public INT_VAL(i: number): TerminalNode;
	public INT_VAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParPlusPlusParser.INT_VAL);
		} else {
			return this.getToken(ParPlusPlusParser.INT_VAL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_var_id_decl; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterVar_id_decl) {
			listener.enterVar_id_decl(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitVar_id_decl) {
			listener.exitVar_id_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitVar_id_decl) {
			return visitor.visitVar_id_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_ids_declContext extends ParserRuleContext {
	public var_id_decl(): Var_id_declContext[];
	public var_id_decl(i: number): Var_id_declContext;
	public var_id_decl(i?: number): Var_id_declContext | Var_id_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_id_declContext);
		} else {
			return this.getRuleContext(i, Var_id_declContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_var_ids_decl; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterVar_ids_decl) {
			listener.enterVar_ids_decl(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitVar_ids_decl) {
			listener.exitVar_ids_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitVar_ids_decl) {
			return visitor.visitVar_ids_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_idContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ParPlusPlusParser.ID, 0); }
	public var_id_vector(): Var_id_vectorContext | undefined {
		return this.tryGetRuleContext(0, Var_id_vectorContext);
	}
	public var_id_matrix(): Var_id_matrixContext | undefined {
		return this.tryGetRuleContext(0, Var_id_matrixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_var_id; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterVar_id) {
			listener.enterVar_id(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitVar_id) {
			listener.exitVar_id(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitVar_id) {
			return visitor.visitVar_id(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_id_dimsContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_var_id_dims; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterVar_id_dims) {
			listener.enterVar_id_dims(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitVar_id_dims) {
			listener.exitVar_id_dims(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitVar_id_dims) {
			return visitor.visitVar_id_dims(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_id_vectorContext extends ParserRuleContext {
	public var_id_dims(): Var_id_dimsContext {
		return this.getRuleContext(0, Var_id_dimsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_var_id_vector; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterVar_id_vector) {
			listener.enterVar_id_vector(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitVar_id_vector) {
			listener.exitVar_id_vector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitVar_id_vector) {
			return visitor.visitVar_id_vector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_id_matrixContext extends ParserRuleContext {
	public var_id_dims(): Var_id_dimsContext {
		return this.getRuleContext(0, Var_id_dimsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_var_id_matrix; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterVar_id_matrix) {
			listener.enterVar_id_matrix(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitVar_id_matrix) {
			listener.exitVar_id_matrix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitVar_id_matrix) {
			return visitor.visitVar_id_matrix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_idsContext extends ParserRuleContext {
	public var_id(): Var_idContext[];
	public var_id(i: number): Var_idContext;
	public var_id(i?: number): Var_idContext | Var_idContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_idContext);
		} else {
			return this.getRuleContext(i, Var_idContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_var_ids; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterVar_ids) {
			listener.enterVar_ids(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitVar_ids) {
			listener.exitVar_ids(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitVar_ids) {
			return visitor.visitVar_ids(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_type; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ParPlusPlusParser.ID, 0); }
	public func_params(): Func_paramsContext {
		return this.getRuleContext(0, Func_paramsContext);
	}
	public vars(): VarsContext {
		return this.getRuleContext(0, VarsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_function; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_paramsContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParPlusPlusParser.ID);
		} else {
			return this.getToken(ParPlusPlusParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_func_params; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterFunc_params) {
			listener.enterFunc_params(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitFunc_params) {
			listener.exitFunc_params(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitFunc_params) {
			return visitor.visitFunc_params(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_block; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public return_stmt(): Return_stmtContext | undefined {
		return this.tryGetRuleContext(0, Return_stmtContext);
	}
	public if_stmt(): If_stmtContext | undefined {
		return this.tryGetRuleContext(0, If_stmtContext);
	}
	public while_stmt(): While_stmtContext | undefined {
		return this.tryGetRuleContext(0, While_stmtContext);
	}
	public for_stmt(): For_stmtContext | undefined {
		return this.tryGetRuleContext(0, For_stmtContext);
	}
	public func_call(): Func_callContext | undefined {
		return this.tryGetRuleContext(0, Func_callContext);
	}
	public input_stmt(): Input_stmtContext | undefined {
		return this.tryGetRuleContext(0, Input_stmtContext);
	}
	public output_stmt(): Output_stmtContext | undefined {
		return this.tryGetRuleContext(0, Output_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_statement; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public var_id(): Var_idContext {
		return this.getRuleContext(0, Var_idContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_assignment; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_stmtContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_return_stmt; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterReturn_stmt) {
			listener.enterReturn_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitReturn_stmt) {
			listener.exitReturn_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitReturn_stmt) {
			return visitor.visitReturn_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_exprContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_if_expr; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterIf_expr) {
			listener.enterIf_expr(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitIf_expr) {
			listener.exitIf_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitIf_expr) {
			return visitor.visitIf_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_stmtContext extends ParserRuleContext {
	public if_expr(): If_exprContext {
		return this.getRuleContext(0, If_exprContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public else_stmt(): Else_stmtContext {
		return this.getRuleContext(0, Else_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_if_stmt; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterIf_stmt) {
			listener.enterIf_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitIf_stmt) {
			listener.exitIf_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitIf_stmt) {
			return visitor.visitIf_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Else_stmtContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_else_stmt; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterElse_stmt) {
			listener.enterElse_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitElse_stmt) {
			listener.exitElse_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitElse_stmt) {
			return visitor.visitElse_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class While_exprContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_while_expr; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterWhile_expr) {
			listener.enterWhile_expr(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitWhile_expr) {
			listener.exitWhile_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitWhile_expr) {
			return visitor.visitWhile_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class While_stmtContext extends ParserRuleContext {
	public while_expr(): While_exprContext {
		return this.getRuleContext(0, While_exprContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_while_stmt; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterWhile_stmt) {
			listener.enterWhile_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitWhile_stmt) {
			listener.exitWhile_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitWhile_stmt) {
			return visitor.visitWhile_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_idContext extends ParserRuleContext {
	public var_id(): Var_idContext {
		return this.getRuleContext(0, Var_idContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_for_id; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterFor_id) {
			listener.enterFor_id(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitFor_id) {
			listener.exitFor_id(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitFor_id) {
			return visitor.visitFor_id(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_expr1Context extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_for_expr1; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterFor_expr1) {
			listener.enterFor_expr1(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitFor_expr1) {
			listener.exitFor_expr1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitFor_expr1) {
			return visitor.visitFor_expr1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_expr2Context extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_for_expr2; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterFor_expr2) {
			listener.enterFor_expr2(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitFor_expr2) {
			listener.exitFor_expr2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitFor_expr2) {
			return visitor.visitFor_expr2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_stmtContext extends ParserRuleContext {
	public for_id(): For_idContext {
		return this.getRuleContext(0, For_idContext);
	}
	public for_expr1(): For_expr1Context {
		return this.getRuleContext(0, For_expr1Context);
	}
	public for_expr2(): For_expr2Context {
		return this.getRuleContext(0, For_expr2Context);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_for_stmt; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterFor_stmt) {
			listener.enterFor_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitFor_stmt) {
			listener.exitFor_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitFor_stmt) {
			return visitor.visitFor_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rel_opContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_rel_op; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterRel_op) {
			listener.enterRel_op(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitRel_op) {
			listener.exitRel_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitRel_op) {
			return visitor.visitRel_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Eq_opContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_eq_op; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterEq_op) {
			listener.enterEq_op(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitEq_op) {
			listener.exitEq_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitEq_op) {
			return visitor.visitEq_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Addsub_opContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_addsub_op; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterAddsub_op) {
			listener.enterAddsub_op(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitAddsub_op) {
			listener.exitAddsub_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitAddsub_op) {
			return visitor.visitAddsub_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Muldiv_opContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_muldiv_op; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterMuldiv_op) {
			listener.enterMuldiv_op(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitMuldiv_op) {
			listener.exitMuldiv_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitMuldiv_op) {
			return visitor.visitMuldiv_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Or_opContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_or_op; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterOr_op) {
			listener.enterOr_op(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitOr_op) {
			listener.exitOr_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitOr_op) {
			return visitor.visitOr_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class And_opContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_and_op; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterAnd_op) {
			listener.enterAnd_op(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitAnd_op) {
			listener.exitAnd_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitAnd_op) {
			return visitor.visitAnd_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Minus_opContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_minus_op; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterMinus_op) {
			listener.enterMinus_op(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitMinus_op) {
			listener.exitMinus_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitMinus_op) {
			return visitor.visitMinus_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public exp1(): Exp1Context {
		return this.getRuleContext(0, Exp1Context);
	}
	public or_op(): Or_opContext[];
	public or_op(i: number): Or_opContext;
	public or_op(i?: number): Or_opContext | Or_opContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Or_opContext);
		} else {
			return this.getRuleContext(i, Or_opContext);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_expr; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exp1Context extends ParserRuleContext {
	public exp2(): Exp2Context {
		return this.getRuleContext(0, Exp2Context);
	}
	public and_op(): And_opContext[];
	public and_op(i: number): And_opContext;
	public and_op(i?: number): And_opContext | And_opContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_opContext);
		} else {
			return this.getRuleContext(i, And_opContext);
		}
	}
	public exp1(): Exp1Context[];
	public exp1(i: number): Exp1Context;
	public exp1(i?: number): Exp1Context | Exp1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Exp1Context);
		} else {
			return this.getRuleContext(i, Exp1Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_exp1; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterExp1) {
			listener.enterExp1(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitExp1) {
			listener.exitExp1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitExp1) {
			return visitor.visitExp1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exp2Context extends ParserRuleContext {
	public exp3(): Exp3Context[];
	public exp3(i: number): Exp3Context;
	public exp3(i?: number): Exp3Context | Exp3Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Exp3Context);
		} else {
			return this.getRuleContext(i, Exp3Context);
		}
	}
	public eq_op(): Eq_opContext | undefined {
		return this.tryGetRuleContext(0, Eq_opContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_exp2; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterExp2) {
			listener.enterExp2(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitExp2) {
			listener.exitExp2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitExp2) {
			return visitor.visitExp2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exp3Context extends ParserRuleContext {
	public exp4(): Exp4Context[];
	public exp4(i: number): Exp4Context;
	public exp4(i?: number): Exp4Context | Exp4Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Exp4Context);
		} else {
			return this.getRuleContext(i, Exp4Context);
		}
	}
	public rel_op(): Rel_opContext | undefined {
		return this.tryGetRuleContext(0, Rel_opContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_exp3; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterExp3) {
			listener.enterExp3(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitExp3) {
			listener.exitExp3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitExp3) {
			return visitor.visitExp3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exp4Context extends ParserRuleContext {
	public exp5(): Exp5Context {
		return this.getRuleContext(0, Exp5Context);
	}
	public addsub_op(): Addsub_opContext[];
	public addsub_op(i: number): Addsub_opContext;
	public addsub_op(i?: number): Addsub_opContext | Addsub_opContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Addsub_opContext);
		} else {
			return this.getRuleContext(i, Addsub_opContext);
		}
	}
	public exp4(): Exp4Context[];
	public exp4(i: number): Exp4Context;
	public exp4(i?: number): Exp4Context | Exp4Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Exp4Context);
		} else {
			return this.getRuleContext(i, Exp4Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_exp4; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterExp4) {
			listener.enterExp4(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitExp4) {
			listener.exitExp4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitExp4) {
			return visitor.visitExp4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exp5Context extends ParserRuleContext {
	public exp6(): Exp6Context {
		return this.getRuleContext(0, Exp6Context);
	}
	public muldiv_op(): Muldiv_opContext[];
	public muldiv_op(i: number): Muldiv_opContext;
	public muldiv_op(i?: number): Muldiv_opContext | Muldiv_opContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Muldiv_opContext);
		} else {
			return this.getRuleContext(i, Muldiv_opContext);
		}
	}
	public exp5(): Exp5Context[];
	public exp5(i: number): Exp5Context;
	public exp5(i?: number): Exp5Context | Exp5Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Exp5Context);
		} else {
			return this.getRuleContext(i, Exp5Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_exp5; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterExp5) {
			listener.enterExp5(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitExp5) {
			listener.exitExp5(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitExp5) {
			return visitor.visitExp5(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exp6Context extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public var_id(): Var_idContext | undefined {
		return this.tryGetRuleContext(0, Var_idContext);
	}
	public func_call(): Func_callContext | undefined {
		return this.tryGetRuleContext(0, Func_callContext);
	}
	public INT_VAL(): TerminalNode | undefined { return this.tryGetToken(ParPlusPlusParser.INT_VAL, 0); }
	public minus_op(): Minus_opContext | undefined {
		return this.tryGetRuleContext(0, Minus_opContext);
	}
	public FLOAT_VAL(): TerminalNode | undefined { return this.tryGetToken(ParPlusPlusParser.FLOAT_VAL, 0); }
	public CHAR_VAL(): TerminalNode | undefined { return this.tryGetToken(ParPlusPlusParser.CHAR_VAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_exp6; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterExp6) {
			listener.enterExp6(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitExp6) {
			listener.exitExp6(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitExp6) {
			return visitor.visitExp6(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_callContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ParPlusPlusParser.ID, 0); }
	public func_call_args(): Func_call_argsContext | undefined {
		return this.tryGetRuleContext(0, Func_call_argsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_func_call; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterFunc_call) {
			listener.enterFunc_call(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitFunc_call) {
			listener.exitFunc_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitFunc_call) {
			return visitor.visitFunc_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_call_argsContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_func_call_args; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterFunc_call_args) {
			listener.enterFunc_call_args(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitFunc_call_args) {
			listener.exitFunc_call_args(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitFunc_call_args) {
			return visitor.visitFunc_call_args(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Input_stmtContext extends ParserRuleContext {
	public input_args(): Input_argsContext {
		return this.getRuleContext(0, Input_argsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_input_stmt; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterInput_stmt) {
			listener.enterInput_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitInput_stmt) {
			listener.exitInput_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitInput_stmt) {
			return visitor.visitInput_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Input_argsContext extends ParserRuleContext {
	public var_id(): Var_idContext[];
	public var_id(i: number): Var_idContext;
	public var_id(i?: number): Var_idContext | Var_idContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_idContext);
		} else {
			return this.getRuleContext(i, Var_idContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_input_args; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterInput_args) {
			listener.enterInput_args(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitInput_args) {
			listener.exitInput_args(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitInput_args) {
			return visitor.visitInput_args(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Output_stmtContext extends ParserRuleContext {
	public output_args(): Output_argsContext {
		return this.getRuleContext(0, Output_argsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_output_stmt; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterOutput_stmt) {
			listener.enterOutput_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitOutput_stmt) {
			listener.exitOutput_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitOutput_stmt) {
			return visitor.visitOutput_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Output_argContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public STR_VAL(): TerminalNode | undefined { return this.tryGetToken(ParPlusPlusParser.STR_VAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_output_arg; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterOutput_arg) {
			listener.enterOutput_arg(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitOutput_arg) {
			listener.exitOutput_arg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitOutput_arg) {
			return visitor.visitOutput_arg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Output_argsContext extends ParserRuleContext {
	public output_arg(): Output_argContext[];
	public output_arg(i: number): Output_argContext;
	public output_arg(i?: number): Output_argContext | Output_argContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Output_argContext);
		} else {
			return this.getRuleContext(i, Output_argContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_output_args; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterOutput_args) {
			listener.enterOutput_args(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitOutput_args) {
			listener.exitOutput_args(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitOutput_args) {
			return visitor.visitOutput_args(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Main_functionContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParPlusPlusParser.RULE_main_function; }
	// @Override
	public enterRule(listener: ParPlusPlusListener): void {
		if (listener.enterMain_function) {
			listener.enterMain_function(this);
		}
	}
	// @Override
	public exitRule(listener: ParPlusPlusListener): void {
		if (listener.exitMain_function) {
			listener.exitMain_function(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParPlusPlusVisitor<Result>): Result {
		if (visitor.visitMain_function) {
			return visitor.visitMain_function(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


