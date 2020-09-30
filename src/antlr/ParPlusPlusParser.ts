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
	public static readonly RULE_var_ids = 5;
	public static readonly RULE_type = 6;
	public static readonly RULE_function = 7;
	public static readonly RULE_func_params = 8;
	public static readonly RULE_block = 9;
	public static readonly RULE_statement = 10;
	public static readonly RULE_assignment = 11;
	public static readonly RULE_return_stmt = 12;
	public static readonly RULE_if_stmt = 13;
	public static readonly RULE_else_stmt = 14;
	public static readonly RULE_while_stmt = 15;
	public static readonly RULE_for_stmt = 16;
	public static readonly RULE_rel_op = 17;
	public static readonly RULE_eq_op = 18;
	public static readonly RULE_addsub_op = 19;
	public static readonly RULE_muldiv_op = 20;
	public static readonly RULE_expr = 21;
	public static readonly RULE_exp1 = 22;
	public static readonly RULE_exp2 = 23;
	public static readonly RULE_exp3 = 24;
	public static readonly RULE_exp4 = 25;
	public static readonly RULE_exp5 = 26;
	public static readonly RULE_exp6 = 27;
	public static readonly RULE_func_call = 28;
	public static readonly RULE_func_call_args = 29;
	public static readonly RULE_input_stmt = 30;
	public static readonly RULE_input_args = 31;
	public static readonly RULE_output_stmt = 32;
	public static readonly RULE_output_args = 33;
	public static readonly RULE_main_function = 34;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "vars", "var_id_decl", "var_ids_decl", "var_id", "var_ids", 
		"type", "function", "func_params", "block", "statement", "assignment", 
		"return_stmt", "if_stmt", "else_stmt", "while_stmt", "for_stmt", "rel_op", 
		"eq_op", "addsub_op", "muldiv_op", "expr", "exp1", "exp2", "exp3", "exp4", 
		"exp5", "exp6", "func_call", "func_call_args", "input_stmt", "input_args", 
		"output_stmt", "output_args", "main_function",
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
			this.state = 70;
			this.match(ParPlusPlusParser.T__0);
			this.state = 71;
			this.match(ParPlusPlusParser.ID);
			this.state = 72;
			this.match(ParPlusPlusParser.T__1);
			this.state = 73;
			this.vars();
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ParPlusPlusParser.T__6) | (1 << ParPlusPlusParser.T__7) | (1 << ParPlusPlusParser.T__8) | (1 << ParPlusPlusParser.T__9))) !== 0)) {
				{
				{
				this.state = 74;
				this.function();
				}
				}
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 80;
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
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParPlusPlusParser.T__2) {
				{
				this.state = 82;
				this.match(ParPlusPlusParser.T__2);
				this.state = 88;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 83;
						this.type();
						this.state = 84;
						this.var_id_decl();
						this.state = 85;
						this.var_ids_decl();
						this.state = 86;
						this.match(ParPlusPlusParser.T__1);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 90;
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
			this.state = 94;
			this.match(ParPlusPlusParser.ID);
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParPlusPlusParser.T__3) {
				{
				this.state = 95;
				this.match(ParPlusPlusParser.T__3);
				this.state = 96;
				this.match(ParPlusPlusParser.INT_VAL);
				this.state = 97;
				this.match(ParPlusPlusParser.T__4);
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParPlusPlusParser.T__3) {
					{
					this.state = 98;
					this.match(ParPlusPlusParser.T__3);
					this.state = 99;
					this.match(ParPlusPlusParser.INT_VAL);
					this.state = 100;
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
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParPlusPlusParser.T__5) {
				{
				{
				this.state = 105;
				this.match(ParPlusPlusParser.T__5);
				this.state = 106;
				this.var_id_decl();
				}
				}
				this.state = 111;
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
			this.state = 112;
			this.match(ParPlusPlusParser.ID);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParPlusPlusParser.T__3) {
				{
				this.state = 113;
				this.match(ParPlusPlusParser.T__3);
				this.state = 114;
				this.expr();
				this.state = 115;
				this.match(ParPlusPlusParser.T__4);
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParPlusPlusParser.T__3) {
					{
					this.state = 116;
					this.match(ParPlusPlusParser.T__3);
					this.state = 117;
					this.expr();
					this.state = 118;
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
	public var_ids(): Var_idsContext {
		let _localctx: Var_idsContext = new Var_idsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ParPlusPlusParser.RULE_var_ids);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParPlusPlusParser.T__5) {
				{
				{
				this.state = 124;
				this.match(ParPlusPlusParser.T__5);
				this.state = 125;
				this.var_id();
				}
				}
				this.state = 130;
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
		this.enterRule(_localctx, 12, ParPlusPlusParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
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
		this.enterRule(_localctx, 14, ParPlusPlusParser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParPlusPlusParser.T__6:
			case ParPlusPlusParser.T__7:
			case ParPlusPlusParser.T__8:
				{
				this.state = 133;
				this.type();
				}
				break;
			case ParPlusPlusParser.T__9:
				{
				this.state = 134;
				this.match(ParPlusPlusParser.T__9);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 137;
			this.match(ParPlusPlusParser.T__10);
			this.state = 138;
			this.match(ParPlusPlusParser.ID);
			this.state = 139;
			this.match(ParPlusPlusParser.T__11);
			this.state = 140;
			this.func_params();
			this.state = 141;
			this.match(ParPlusPlusParser.T__12);
			this.state = 142;
			this.vars();
			this.state = 143;
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
		this.enterRule(_localctx, 16, ParPlusPlusParser.RULE_func_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ParPlusPlusParser.T__6) | (1 << ParPlusPlusParser.T__7) | (1 << ParPlusPlusParser.T__8))) !== 0)) {
				{
				this.state = 145;
				this.type();
				this.state = 146;
				this.match(ParPlusPlusParser.ID);
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ParPlusPlusParser.T__5) {
					{
					{
					this.state = 147;
					this.match(ParPlusPlusParser.T__5);
					this.state = 148;
					this.type();
					this.state = 149;
					this.match(ParPlusPlusParser.ID);
					}
					}
					this.state = 155;
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
		this.enterRule(_localctx, 18, ParPlusPlusParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(ParPlusPlusParser.T__13);
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (ParPlusPlusParser.T__16 - 17)) | (1 << (ParPlusPlusParser.T__17 - 17)) | (1 << (ParPlusPlusParser.T__20 - 17)) | (1 << (ParPlusPlusParser.T__22 - 17)) | (1 << (ParPlusPlusParser.T__36 - 17)) | (1 << (ParPlusPlusParser.T__37 - 17)) | (1 << (ParPlusPlusParser.ID - 17)))) !== 0)) {
				{
				{
				this.state = 159;
				this.statement();
				}
				}
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 165;
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
		this.enterRule(_localctx, 20, ParPlusPlusParser.RULE_statement);
		try {
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 167;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 168;
				this.return_stmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 169;
				this.if_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 170;
				this.while_stmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 171;
				this.for_stmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 172;
				this.func_call();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 173;
				this.input_stmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 174;
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
		this.enterRule(_localctx, 22, ParPlusPlusParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.var_id();
			this.state = 178;
			this.match(ParPlusPlusParser.T__15);
			this.state = 179;
			this.expr();
			this.state = 180;
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
		this.enterRule(_localctx, 24, ParPlusPlusParser.RULE_return_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(ParPlusPlusParser.T__16);
			this.state = 183;
			this.match(ParPlusPlusParser.T__11);
			this.state = 184;
			this.expr();
			this.state = 185;
			this.match(ParPlusPlusParser.T__12);
			this.state = 186;
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
	public if_stmt(): If_stmtContext {
		let _localctx: If_stmtContext = new If_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ParPlusPlusParser.RULE_if_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.match(ParPlusPlusParser.T__17);
			this.state = 189;
			this.match(ParPlusPlusParser.T__11);
			this.state = 190;
			this.expr();
			this.state = 191;
			this.match(ParPlusPlusParser.T__12);
			this.state = 192;
			this.match(ParPlusPlusParser.T__18);
			this.state = 193;
			this.block();
			this.state = 194;
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
		this.enterRule(_localctx, 28, ParPlusPlusParser.RULE_else_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParPlusPlusParser.T__19) {
				{
				this.state = 196;
				this.match(ParPlusPlusParser.T__19);
				this.state = 197;
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
	public while_stmt(): While_stmtContext {
		let _localctx: While_stmtContext = new While_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ParPlusPlusParser.RULE_while_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(ParPlusPlusParser.T__20);
			this.state = 201;
			this.match(ParPlusPlusParser.T__11);
			this.state = 202;
			this.expr();
			this.state = 203;
			this.match(ParPlusPlusParser.T__12);
			this.state = 204;
			this.match(ParPlusPlusParser.T__21);
			this.state = 205;
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
	public for_stmt(): For_stmtContext {
		let _localctx: For_stmtContext = new For_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ParPlusPlusParser.RULE_for_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.match(ParPlusPlusParser.T__22);
			this.state = 208;
			this.var_id();
			this.state = 209;
			this.match(ParPlusPlusParser.T__15);
			this.state = 210;
			this.expr();
			this.state = 211;
			this.match(ParPlusPlusParser.T__23);
			this.state = 212;
			this.expr();
			this.state = 213;
			this.match(ParPlusPlusParser.T__21);
			this.state = 214;
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
		this.enterRule(_localctx, 34, ParPlusPlusParser.RULE_rel_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
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
		this.enterRule(_localctx, 36, ParPlusPlusParser.RULE_eq_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
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
		this.enterRule(_localctx, 38, ParPlusPlusParser.RULE_addsub_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
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
		this.enterRule(_localctx, 40, ParPlusPlusParser.RULE_muldiv_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
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
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ParPlusPlusParser.RULE_expr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.exp1();
			this.state = 229;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 225;
					this.match(ParPlusPlusParser.T__34);
					this.state = 226;
					this.expr();
					}
					}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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
		this.enterRule(_localctx, 44, ParPlusPlusParser.RULE_exp1);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.exp2();
			this.state = 237;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 233;
					this.match(ParPlusPlusParser.T__35);
					this.state = 234;
					this.exp1();
					}
					}
				}
				this.state = 239;
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
	public exp2(): Exp2Context {
		let _localctx: Exp2Context = new Exp2Context(this._ctx, this.state);
		this.enterRule(_localctx, 46, ParPlusPlusParser.RULE_exp2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.exp3();
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParPlusPlusParser.T__28 || _la === ParPlusPlusParser.T__29) {
				{
				this.state = 241;
				this.eq_op();
				this.state = 242;
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
		this.enterRule(_localctx, 48, ParPlusPlusParser.RULE_exp3);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.exp4();
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ParPlusPlusParser.T__24) | (1 << ParPlusPlusParser.T__25) | (1 << ParPlusPlusParser.T__26) | (1 << ParPlusPlusParser.T__27))) !== 0)) {
				{
				this.state = 247;
				this.rel_op();
				this.state = 248;
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
		this.enterRule(_localctx, 50, ParPlusPlusParser.RULE_exp4);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.exp5();
			this.state = 258;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 253;
					this.addsub_op();
					this.state = 254;
					this.exp4();
					}
					}
				}
				this.state = 260;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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
		this.enterRule(_localctx, 52, ParPlusPlusParser.RULE_exp5);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.exp6();
			this.state = 267;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 262;
					this.muldiv_op();
					this.state = 263;
					this.exp5();
					}
					}
				}
				this.state = 269;
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
	public exp6(): Exp6Context {
		let _localctx: Exp6Context = new Exp6Context(this._ctx, this.state);
		this.enterRule(_localctx, 54, ParPlusPlusParser.RULE_exp6);
		try {
			this.state = 279;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 270;
				this.match(ParPlusPlusParser.T__11);
				this.state = 271;
				this.expr();
				this.state = 272;
				this.match(ParPlusPlusParser.T__12);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 274;
				this.var_id();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 275;
				this.func_call();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 276;
				this.match(ParPlusPlusParser.INT_VAL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 277;
				this.match(ParPlusPlusParser.FLOAT_VAL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 278;
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
		this.enterRule(_localctx, 56, ParPlusPlusParser.RULE_func_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.match(ParPlusPlusParser.ID);
			this.state = 282;
			this.match(ParPlusPlusParser.T__11);
			this.state = 283;
			this.func_call_args();
			this.state = 284;
			this.match(ParPlusPlusParser.T__12);
			this.state = 286;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 285;
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
		this.enterRule(_localctx, 58, ParPlusPlusParser.RULE_func_call_args);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			this.expr();
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParPlusPlusParser.T__5) {
				{
				{
				this.state = 289;
				this.match(ParPlusPlusParser.T__5);
				this.state = 290;
				this.expr();
				}
				}
				this.state = 295;
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
		this.enterRule(_localctx, 60, ParPlusPlusParser.RULE_input_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.match(ParPlusPlusParser.T__36);
			this.state = 297;
			this.match(ParPlusPlusParser.T__11);
			this.state = 298;
			this.input_args();
			this.state = 299;
			this.match(ParPlusPlusParser.T__12);
			this.state = 300;
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
		this.enterRule(_localctx, 62, ParPlusPlusParser.RULE_input_args);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			this.var_id();
			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParPlusPlusParser.T__5) {
				{
				{
				this.state = 303;
				this.match(ParPlusPlusParser.T__5);
				this.state = 304;
				this.var_id();
				}
				}
				this.state = 309;
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
		this.enterRule(_localctx, 64, ParPlusPlusParser.RULE_output_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.match(ParPlusPlusParser.T__37);
			this.state = 311;
			this.match(ParPlusPlusParser.T__11);
			this.state = 312;
			this.output_args();
			this.state = 313;
			this.match(ParPlusPlusParser.T__12);
			this.state = 314;
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
	public output_args(): Output_argsContext {
		let _localctx: Output_argsContext = new Output_argsContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ParPlusPlusParser.RULE_output_args);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParPlusPlusParser.T__11:
			case ParPlusPlusParser.ID:
			case ParPlusPlusParser.FLOAT_VAL:
			case ParPlusPlusParser.INT_VAL:
			case ParPlusPlusParser.CHAR_VAL:
				{
				this.state = 316;
				this.expr();
				}
				break;
			case ParPlusPlusParser.STR_VAL:
				{
				this.state = 317;
				this.match(ParPlusPlusParser.STR_VAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParPlusPlusParser.T__5) {
				{
				{
				this.state = 320;
				this.match(ParPlusPlusParser.T__5);
				this.state = 323;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParPlusPlusParser.T__11:
				case ParPlusPlusParser.ID:
				case ParPlusPlusParser.FLOAT_VAL:
				case ParPlusPlusParser.INT_VAL:
				case ParPlusPlusParser.CHAR_VAL:
					{
					this.state = 321;
					this.expr();
					}
					break;
				case ParPlusPlusParser.STR_VAL:
					{
					this.state = 322;
					this.match(ParPlusPlusParser.STR_VAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 329;
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
		this.enterRule(_localctx, 68, ParPlusPlusParser.RULE_main_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.match(ParPlusPlusParser.T__38);
			this.state = 331;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\u0150\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02N\n\x02\f\x02" +
		"\x0E\x02Q\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x06\x03[\n\x03\r\x03\x0E\x03\\\x05\x03_\n\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04h\n\x04\x05\x04j\n\x04" +
		"\x03\x05\x03\x05\x07\x05n\n\x05\f\x05\x0E\x05q\v\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06{\n\x06\x05\x06}\n" +
		"\x06\x03\x07\x03\x07\x07\x07\x81\n\x07\f\x07\x0E\x07\x84\v\x07\x03\b\x03" +
		"\b\x03\t\x03\t\x05\t\x8A\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\x9A\n\n\f\n\x0E\n\x9D" +
		"\v\n\x05\n\x9F\n\n\x03\v\x03\v\x07\v\xA3\n\v\f\v\x0E\v\xA6\v\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xB2\n\f\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x05\x10\xC9\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x07\x17\xE6\n\x17\f\x17\x0E\x17\xE9\v\x17" +
		"\x03\x18\x03\x18\x03\x18\x07\x18\xEE\n\x18\f\x18\x0E\x18\xF1\v\x18\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x05\x19\xF7\n\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x05\x1A\xFD\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0103" +
		"\n\x1B\f\x1B\x0E\x1B\u0106\v\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C" +
		"\u010C\n\x1C\f\x1C\x0E\x1C\u010F\v\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u011A\n\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0121\n\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x07\x1F\u0126\n\x1F\f\x1F\x0E\x1F\u0129\v\x1F\x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03!\x03!\x03!\x07!\u0134\n!\f!\x0E!\u0137\v!\x03\"\x03\"\x03\"" +
		"\x03\"\x03\"\x03\"\x03#\x03#\x05#\u0141\n#\x03#\x03#\x03#\x05#\u0146\n" +
		"#\x07#\u0148\n#\f#\x0E#\u014B\v#\x03$\x03$\x03$\x03$\x02\x02\x02%\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
		"\x02\x07\x03\x02\t\v\x03\x02\x1B\x1E\x03\x02\x1F \x03\x02!\"\x03\x02#" +
		"$\x02\u0152\x02H\x03\x02\x02\x02\x04^\x03\x02\x02\x02\x06`\x03\x02\x02" +
		"\x02\bo\x03\x02\x02\x02\nr\x03\x02\x02\x02\f\x82\x03\x02\x02\x02\x0E\x85" +
		"\x03\x02\x02\x02\x10\x89\x03\x02\x02\x02\x12\x9E\x03\x02\x02\x02\x14\xA0" +
		"\x03\x02\x02\x02\x16\xB1\x03\x02\x02\x02\x18\xB3\x03\x02\x02\x02\x1A\xB8" +
		"\x03\x02\x02\x02\x1C\xBE\x03\x02\x02\x02\x1E\xC8\x03\x02\x02\x02 \xCA" +
		"\x03\x02\x02\x02\"\xD1\x03\x02\x02\x02$\xDA\x03\x02\x02\x02&\xDC\x03\x02" +
		"\x02\x02(\xDE\x03\x02\x02\x02*\xE0\x03\x02\x02\x02,\xE2\x03\x02\x02\x02" +
		".\xEA\x03\x02\x02\x020\xF2\x03\x02\x02\x022\xF8\x03\x02\x02\x024\xFE\x03" +
		"\x02\x02\x026\u0107\x03\x02\x02\x028\u0119\x03\x02\x02\x02:\u011B\x03" +
		"\x02\x02\x02<\u0122\x03\x02\x02\x02>\u012A\x03\x02\x02\x02@\u0130\x03" +
		"\x02\x02\x02B\u0138\x03\x02\x02\x02D\u0140\x03\x02\x02\x02F\u014C\x03" +
		"\x02\x02\x02HI\x07\x03\x02\x02IJ\x07+\x02\x02JK\x07\x04\x02\x02KO\x05" +
		"\x04\x03\x02LN\x05\x10\t\x02ML\x03\x02\x02\x02NQ\x03\x02\x02\x02OM\x03" +
		"\x02\x02\x02OP\x03\x02\x02\x02PR\x03\x02\x02\x02QO\x03\x02\x02\x02RS\x05" +
		"F$\x02S\x03\x03\x02\x02\x02TZ\x07\x05\x02\x02UV\x05\x0E\b\x02VW\x05\x06" +
		"\x04\x02WX\x05\b\x05\x02XY\x07\x04\x02\x02Y[\x03\x02\x02\x02ZU\x03\x02" +
		"\x02\x02[\\\x03\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]_\x03" +
		"\x02\x02\x02^T\x03\x02\x02\x02^_\x03\x02\x02\x02_\x05\x03\x02\x02\x02" +
		"`i\x07+\x02\x02ab\x07\x06\x02\x02bc\x07-\x02\x02cg\x07\x07\x02\x02de\x07" +
		"\x06\x02\x02ef\x07-\x02\x02fh\x07\x07\x02\x02gd\x03\x02\x02\x02gh\x03" +
		"\x02\x02\x02hj\x03\x02\x02\x02ia\x03\x02\x02\x02ij\x03\x02\x02\x02j\x07" +
		"\x03\x02\x02\x02kl\x07\b\x02\x02ln\x05\x06\x04\x02mk\x03\x02\x02\x02n" +
		"q\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02p\t\x03\x02\x02\x02" +
		"qo\x03\x02\x02\x02r|\x07+\x02\x02st\x07\x06\x02\x02tu\x05,\x17\x02uz\x07" +
		"\x07\x02\x02vw\x07\x06\x02\x02wx\x05,\x17\x02xy\x07\x07\x02\x02y{\x03" +
		"\x02\x02\x02zv\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x03\x02\x02\x02|s\x03" +
		"\x02\x02\x02|}\x03\x02\x02\x02}\v\x03\x02\x02\x02~\x7F\x07\b\x02\x02\x7F" +
		"\x81\x05\n\x06\x02\x80~\x03\x02\x02\x02\x81\x84\x03\x02\x02\x02\x82\x80" +
		"\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\r\x03\x02\x02\x02\x84\x82" +
		"\x03\x02\x02\x02\x85\x86\t\x02\x02\x02\x86\x0F\x03\x02\x02\x02\x87\x8A" +
		"\x05\x0E\b\x02\x88\x8A\x07\f\x02\x02\x89\x87\x03\x02\x02\x02\x89\x88\x03" +
		"\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\x07\r\x02\x02\x8C\x8D\x07" +
		"+\x02\x02\x8D\x8E\x07\x0E\x02\x02\x8E\x8F\x05\x12\n\x02\x8F\x90\x07\x0F" +
		"\x02\x02\x90\x91\x05\x04\x03\x02\x91\x92\x05\x14\v\x02\x92\x11\x03\x02" +
		"\x02\x02\x93\x94\x05\x0E\b\x02\x94\x9B\x07+\x02\x02\x95\x96\x07\b\x02" +
		"\x02\x96\x97\x05\x0E\b\x02\x97\x98\x07+\x02\x02\x98\x9A\x03\x02\x02\x02" +
		"\x99\x95\x03\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02" +
		"\x9B\x9C\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02" +
		"\x9E\x93\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\x13\x03\x02\x02\x02" +
		"\xA0\xA4\x07\x10\x02\x02\xA1\xA3\x05\x16\f\x02\xA2\xA1\x03\x02\x02\x02" +
		"\xA3\xA6\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02" +
		"\xA5\xA7\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA7\xA8\x07\x11\x02\x02" +
		"\xA8\x15\x03\x02\x02\x02\xA9\xB2\x05\x18\r\x02\xAA\xB2\x05\x1A\x0E\x02" +
		"\xAB\xB2\x05\x1C\x0F\x02\xAC\xB2\x05 \x11\x02\xAD\xB2\x05\"\x12\x02\xAE" +
		"\xB2\x05:\x1E\x02\xAF\xB2\x05> \x02\xB0\xB2\x05B\"\x02\xB1\xA9\x03\x02" +
		"\x02\x02\xB1\xAA\x03\x02\x02\x02\xB1\xAB\x03\x02\x02\x02\xB1\xAC\x03\x02" +
		"\x02\x02\xB1\xAD\x03\x02\x02\x02\xB1\xAE\x03\x02\x02\x02\xB1\xAF\x03\x02" +
		"\x02\x02\xB1\xB0\x03\x02\x02\x02\xB2\x17\x03\x02\x02\x02\xB3\xB4\x05\n" +
		"\x06\x02\xB4\xB5\x07\x12\x02\x02\xB5\xB6\x05,\x17\x02\xB6\xB7\x07\x04" +
		"\x02\x02\xB7\x19\x03\x02\x02\x02\xB8\xB9\x07\x13\x02\x02\xB9\xBA\x07\x0E" +
		"\x02\x02\xBA\xBB\x05,\x17\x02\xBB\xBC\x07\x0F\x02\x02\xBC\xBD\x07\x04" +
		"\x02\x02\xBD\x1B\x03\x02\x02\x02\xBE\xBF\x07\x14\x02\x02\xBF\xC0\x07\x0E" +
		"\x02\x02\xC0\xC1\x05,\x17\x02\xC1\xC2\x07\x0F\x02\x02\xC2\xC3\x07\x15" +
		"\x02\x02\xC3\xC4\x05\x14\v\x02\xC4\xC5\x05\x1E\x10\x02\xC5\x1D\x03\x02" +
		"\x02\x02\xC6\xC7\x07\x16\x02\x02\xC7\xC9\x05\x14\v\x02\xC8\xC6\x03\x02" +
		"\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\x1F\x03\x02\x02\x02\xCA\xCB\x07\x17" +
		"\x02\x02\xCB\xCC\x07\x0E\x02\x02\xCC\xCD\x05,\x17\x02\xCD\xCE\x07\x0F" +
		"\x02\x02\xCE\xCF\x07\x18\x02\x02\xCF\xD0\x05\x14\v\x02\xD0!\x03\x02\x02" +
		"\x02\xD1\xD2\x07\x19\x02\x02\xD2\xD3\x05\n\x06\x02\xD3\xD4\x07\x12\x02" +
		"\x02\xD4\xD5\x05,\x17\x02\xD5\xD6\x07\x1A\x02\x02\xD6\xD7\x05,\x17\x02" +
		"\xD7\xD8\x07\x18\x02\x02\xD8\xD9\x05\x14\v\x02\xD9#\x03\x02\x02\x02\xDA" +
		"\xDB\t\x03\x02\x02\xDB%\x03\x02\x02\x02\xDC\xDD\t\x04\x02\x02\xDD\'\x03" +
		"\x02\x02\x02\xDE\xDF\t\x05\x02\x02\xDF)\x03\x02\x02\x02\xE0\xE1\t\x06" +
		"\x02\x02\xE1+\x03\x02\x02\x02\xE2\xE7\x05.\x18\x02\xE3\xE4\x07%\x02\x02" +
		"\xE4\xE6\x05,\x17\x02\xE5\xE3\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02" +
		"\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8-\x03\x02\x02\x02" +
		"\xE9\xE7\x03\x02\x02\x02\xEA\xEF\x050\x19\x02\xEB\xEC\x07&\x02\x02\xEC" +
		"\xEE\x05.\x18\x02\xED\xEB\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF" +
		"\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0/\x03\x02\x02\x02\xF1" +
		"\xEF\x03\x02\x02\x02\xF2\xF6\x052\x1A\x02\xF3\xF4\x05&\x14\x02\xF4\xF5" +
		"\x052\x1A\x02\xF5\xF7\x03\x02\x02\x02\xF6\xF3\x03\x02\x02\x02\xF6\xF7" +
		"\x03\x02\x02\x02\xF71\x03\x02\x02\x02\xF8\xFC\x054\x1B\x02\xF9\xFA\x05" +
		"$\x13\x02\xFA\xFB\x054\x1B\x02\xFB\xFD\x03\x02\x02\x02\xFC\xF9\x03\x02" +
		"\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD3\x03\x02\x02\x02\xFE\u0104\x056\x1C" +
		"\x02\xFF\u0100\x05(\x15\x02\u0100\u0101\x054\x1B\x02\u0101\u0103\x03\x02" +
		"\x02\x02\u0102\xFF\x03\x02\x02\x02\u0103\u0106\x03\x02\x02\x02\u0104\u0102" +
		"\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u01055\x03\x02\x02\x02\u0106" +
		"\u0104\x03\x02\x02\x02\u0107\u010D\x058\x1D\x02\u0108\u0109\x05*\x16\x02" +
		"\u0109\u010A\x056\x1C\x02\u010A\u010C\x03\x02\x02\x02\u010B\u0108\x03" +
		"\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010D" +
		"\u010E\x03\x02\x02\x02\u010E7\x03\x02\x02\x02\u010F\u010D\x03\x02\x02" +
		"\x02\u0110\u0111\x07\x0E\x02\x02\u0111\u0112\x05,\x17\x02\u0112\u0113" +
		"\x07\x0F\x02\x02\u0113\u011A\x03\x02\x02\x02\u0114\u011A\x05\n\x06\x02" +
		"\u0115\u011A\x05:\x1E\x02\u0116\u011A\x07-\x02\x02\u0117\u011A\x07,\x02" +
		"\x02\u0118\u011A\x07.\x02\x02\u0119\u0110\x03\x02\x02\x02\u0119\u0114" +
		"\x03\x02\x02\x02\u0119\u0115\x03\x02\x02\x02\u0119\u0116\x03\x02\x02\x02" +
		"\u0119\u0117\x03\x02\x02\x02\u0119\u0118\x03\x02\x02\x02\u011A9\x03\x02" +
		"\x02\x02\u011B\u011C\x07+\x02\x02\u011C\u011D\x07\x0E\x02\x02\u011D\u011E" +
		"\x05<\x1F\x02\u011E\u0120\x07\x0F\x02\x02\u011F\u0121\x07\x04\x02\x02" +
		"\u0120\u011F\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121;\x03\x02" +
		"\x02\x02\u0122\u0127\x05,\x17\x02\u0123\u0124\x07\b\x02\x02\u0124\u0126" +
		"\x05,\x17\x02\u0125\u0123\x03\x02\x02\x02\u0126\u0129\x03\x02\x02\x02" +
		"\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128=\x03\x02" +
		"\x02\x02\u0129\u0127\x03\x02\x02\x02\u012A\u012B\x07\'\x02\x02\u012B\u012C" +
		"\x07\x0E\x02\x02\u012C\u012D\x05@!\x02\u012D\u012E\x07\x0F\x02\x02\u012E" +
		"\u012F\x07\x04\x02\x02\u012F?\x03\x02\x02\x02\u0130\u0135\x05\n\x06\x02" +
		"\u0131\u0132\x07\b\x02\x02\u0132\u0134\x05\n\x06\x02\u0133\u0131\x03\x02" +
		"\x02\x02\u0134\u0137\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135" +
		"\u0136\x03\x02\x02\x02\u0136A\x03\x02\x02\x02\u0137\u0135\x03\x02\x02" +
		"\x02\u0138\u0139\x07(\x02\x02\u0139\u013A\x07\x0E\x02\x02\u013A\u013B" +
		"\x05D#\x02\u013B\u013C\x07\x0F\x02\x02\u013C\u013D\x07\x04\x02\x02\u013D" +
		"C\x03\x02\x02\x02\u013E\u0141\x05,\x17\x02\u013F\u0141\x07/\x02\x02\u0140" +
		"\u013E\x03\x02\x02\x02\u0140\u013F\x03\x02\x02\x02\u0141\u0149\x03\x02" +
		"\x02\x02\u0142\u0145\x07\b\x02\x02\u0143\u0146\x05,\x17\x02\u0144\u0146" +
		"\x07/\x02\x02\u0145\u0143\x03\x02\x02\x02\u0145\u0144\x03\x02\x02\x02" +
		"\u0146\u0148\x03\x02\x02\x02\u0147\u0142\x03\x02\x02\x02\u0148\u014B\x03" +
		"\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A" +
		"E\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C\u014D\x07)\x02\x02" +
		"\u014D\u014E\x05\x14\v\x02\u014EG\x03\x02\x02\x02\x1EO\\^gioz|\x82\x89" +
		"\x9B\x9E\xA4\xB1\xC8\xE7\xEF\xF6\xFC\u0104\u010D\u0119\u0120\u0127\u0135" +
		"\u0140\u0145\u0149";
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
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
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


export class If_stmtContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
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


export class While_stmtContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
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


export class For_stmtContext extends ParserRuleContext {
	public var_id(): Var_idContext {
		return this.getRuleContext(0, Var_idContext);
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


export class ExprContext extends ParserRuleContext {
	public exp1(): Exp1Context {
		return this.getRuleContext(0, Exp1Context);
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
	public func_call_args(): Func_call_argsContext {
		return this.getRuleContext(0, Func_call_argsContext);
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


export class Output_argsContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public STR_VAL(): TerminalNode[];
	public STR_VAL(i: number): TerminalNode;
	public STR_VAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParPlusPlusParser.STR_VAL);
		} else {
			return this.getToken(ParPlusPlusParser.STR_VAL, i);
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


