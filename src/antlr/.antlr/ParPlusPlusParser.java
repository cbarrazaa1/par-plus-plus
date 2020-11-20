// Generated from d:\Google Drive\ITC\Séptimo Semestre\Diseño de compiladores\ProyectoFinal\Compiler\src\antlr\ParPlusPlus.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ParPlusPlusParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, WHITESPACE=40, ID=41, FLOAT_VAL=42, INT_VAL=43, CHAR_VAL=44, 
		STR_VAL=45;
	public static final int
		RULE_program = 0, RULE_vars = 1, RULE_var_id_decl = 2, RULE_var_ids_decl = 3, 
		RULE_var_id = 4, RULE_var_id_dims = 5, RULE_var_id_vector = 6, RULE_var_id_matrix = 7, 
		RULE_var_ids = 8, RULE_type = 9, RULE_function = 10, RULE_func_params = 11, 
		RULE_block = 12, RULE_statement = 13, RULE_assignment = 14, RULE_return_stmt = 15, 
		RULE_if_expr = 16, RULE_if_stmt = 17, RULE_else_stmt = 18, RULE_while_expr = 19, 
		RULE_while_stmt = 20, RULE_for_id = 21, RULE_for_expr1 = 22, RULE_for_expr2 = 23, 
		RULE_for_stmt = 24, RULE_rel_op = 25, RULE_eq_op = 26, RULE_addsub_op = 27, 
		RULE_muldiv_op = 28, RULE_or_op = 29, RULE_and_op = 30, RULE_minus_op = 31, 
		RULE_expr = 32, RULE_exp1 = 33, RULE_exp2 = 34, RULE_exp3 = 35, RULE_exp4 = 36, 
		RULE_exp5 = 37, RULE_exp6 = 38, RULE_func_call = 39, RULE_func_call_args = 40, 
		RULE_input_stmt = 41, RULE_input_args = 42, RULE_output_stmt = 43, RULE_output_arg = 44, 
		RULE_output_args = 45, RULE_main_function = 46;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "vars", "var_id_decl", "var_ids_decl", "var_id", "var_id_dims", 
			"var_id_vector", "var_id_matrix", "var_ids", "type", "function", "func_params", 
			"block", "statement", "assignment", "return_stmt", "if_expr", "if_stmt", 
			"else_stmt", "while_expr", "while_stmt", "for_id", "for_expr1", "for_expr2", 
			"for_stmt", "rel_op", "eq_op", "addsub_op", "muldiv_op", "or_op", "and_op", 
			"minus_op", "expr", "exp1", "exp2", "exp3", "exp4", "exp5", "exp6", "func_call", 
			"func_call_args", "input_stmt", "input_args", "output_stmt", "output_arg", 
			"output_args", "main_function"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'program'", "';'", "'var'", "'['", "']'", "','", "'int'", "'float'", 
			"'char'", "'void'", "'module'", "'('", "')'", "'{'", "'}'", "'='", "'return'", 
			"'if'", "'then'", "'else'", "'while'", "'do'", "'for'", "'to'", "'>'", 
			"'<'", "'<='", "'>='", "'=='", "'!='", "'+'", "'-'", "'*'", "'/'", "'|'", 
			"'&'", "'read'", "'write'", "'main()'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, "WHITESPACE", "ID", "FLOAT_VAL", "INT_VAL", "CHAR_VAL", 
			"STR_VAL"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "ParPlusPlus.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ParPlusPlusParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ParPlusPlusParser.ID, 0); }
		public VarsContext vars() {
			return getRuleContext(VarsContext.class,0);
		}
		public Main_functionContext main_function() {
			return getRuleContext(Main_functionContext.class,0);
		}
		public List<FunctionContext> function() {
			return getRuleContexts(FunctionContext.class);
		}
		public FunctionContext function(int i) {
			return getRuleContext(FunctionContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(94);
			match(T__0);
			setState(95);
			match(ID);
			setState(96);
			match(T__1);
			setState(97);
			vars();
			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9))) != 0)) {
				{
				{
				setState(98);
				function();
				}
				}
				setState(103);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(104);
			main_function();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarsContext extends ParserRuleContext {
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public List<Var_id_declContext> var_id_decl() {
			return getRuleContexts(Var_id_declContext.class);
		}
		public Var_id_declContext var_id_decl(int i) {
			return getRuleContext(Var_id_declContext.class,i);
		}
		public List<Var_ids_declContext> var_ids_decl() {
			return getRuleContexts(Var_ids_declContext.class);
		}
		public Var_ids_declContext var_ids_decl(int i) {
			return getRuleContext(Var_ids_declContext.class,i);
		}
		public VarsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vars; }
	}

	public final VarsContext vars() throws RecognitionException {
		VarsContext _localctx = new VarsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_vars);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__2) {
				{
				setState(106);
				match(T__2);
				setState(112); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(107);
						type();
						setState(108);
						var_id_decl();
						setState(109);
						var_ids_decl();
						setState(110);
						match(T__1);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(114); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Var_id_declContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ParPlusPlusParser.ID, 0); }
		public List<TerminalNode> INT_VAL() { return getTokens(ParPlusPlusParser.INT_VAL); }
		public TerminalNode INT_VAL(int i) {
			return getToken(ParPlusPlusParser.INT_VAL, i);
		}
		public Var_id_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_id_decl; }
	}

	public final Var_id_declContext var_id_decl() throws RecognitionException {
		Var_id_declContext _localctx = new Var_id_declContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_var_id_decl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			match(ID);
			setState(127);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__3) {
				{
				setState(119);
				match(T__3);
				setState(120);
				match(INT_VAL);
				setState(121);
				match(T__4);
				setState(125);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__3) {
					{
					setState(122);
					match(T__3);
					setState(123);
					match(INT_VAL);
					setState(124);
					match(T__4);
					}
				}

				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Var_ids_declContext extends ParserRuleContext {
		public List<Var_id_declContext> var_id_decl() {
			return getRuleContexts(Var_id_declContext.class);
		}
		public Var_id_declContext var_id_decl(int i) {
			return getRuleContext(Var_id_declContext.class,i);
		}
		public Var_ids_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_ids_decl; }
	}

	public final Var_ids_declContext var_ids_decl() throws RecognitionException {
		Var_ids_declContext _localctx = new Var_ids_declContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_var_ids_decl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(129);
				match(T__5);
				setState(130);
				var_id_decl();
				}
				}
				setState(135);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Var_idContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ParPlusPlusParser.ID, 0); }
		public Var_id_vectorContext var_id_vector() {
			return getRuleContext(Var_id_vectorContext.class,0);
		}
		public Var_id_matrixContext var_id_matrix() {
			return getRuleContext(Var_id_matrixContext.class,0);
		}
		public Var_idContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_id; }
	}

	public final Var_idContext var_id() throws RecognitionException {
		Var_idContext _localctx = new Var_idContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_var_id);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			match(ID);
			setState(141);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__3) {
				{
				setState(137);
				var_id_vector();
				setState(139);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__3) {
					{
					setState(138);
					var_id_matrix();
					}
				}

				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Var_id_dimsContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public Var_id_dimsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_id_dims; }
	}

	public final Var_id_dimsContext var_id_dims() throws RecognitionException {
		Var_id_dimsContext _localctx = new Var_id_dimsContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_var_id_dims);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			match(T__3);
			setState(144);
			expr();
			setState(145);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Var_id_vectorContext extends ParserRuleContext {
		public Var_id_dimsContext var_id_dims() {
			return getRuleContext(Var_id_dimsContext.class,0);
		}
		public Var_id_vectorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_id_vector; }
	}

	public final Var_id_vectorContext var_id_vector() throws RecognitionException {
		Var_id_vectorContext _localctx = new Var_id_vectorContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_var_id_vector);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			var_id_dims();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Var_id_matrixContext extends ParserRuleContext {
		public Var_id_dimsContext var_id_dims() {
			return getRuleContext(Var_id_dimsContext.class,0);
		}
		public Var_id_matrixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_id_matrix; }
	}

	public final Var_id_matrixContext var_id_matrix() throws RecognitionException {
		Var_id_matrixContext _localctx = new Var_id_matrixContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_var_id_matrix);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			var_id_dims();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Var_idsContext extends ParserRuleContext {
		public List<Var_idContext> var_id() {
			return getRuleContexts(Var_idContext.class);
		}
		public Var_idContext var_id(int i) {
			return getRuleContext(Var_idContext.class,i);
		}
		public Var_idsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_ids; }
	}

	public final Var_idsContext var_ids() throws RecognitionException {
		Var_idsContext _localctx = new Var_idsContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_var_ids);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(151);
				match(T__5);
				setState(152);
				var_id();
				}
				}
				setState(157);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << T__8))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ParPlusPlusParser.ID, 0); }
		public Func_paramsContext func_params() {
			return getRuleContext(Func_paramsContext.class,0);
		}
		public VarsContext vars() {
			return getRuleContext(VarsContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public FunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function; }
	}

	public final FunctionContext function() throws RecognitionException {
		FunctionContext _localctx = new FunctionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__6:
			case T__7:
			case T__8:
				{
				setState(160);
				type();
				}
				break;
			case T__9:
				{
				setState(161);
				match(T__9);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(164);
			match(T__10);
			setState(165);
			match(ID);
			setState(166);
			match(T__11);
			setState(167);
			func_params();
			setState(168);
			match(T__12);
			setState(169);
			vars();
			setState(170);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_paramsContext extends ParserRuleContext {
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public List<TerminalNode> ID() { return getTokens(ParPlusPlusParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(ParPlusPlusParser.ID, i);
		}
		public Func_paramsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_params; }
	}

	public final Func_paramsContext func_params() throws RecognitionException {
		Func_paramsContext _localctx = new Func_paramsContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_func_params);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << T__8))) != 0)) {
				{
				setState(172);
				type();
				setState(173);
				match(ID);
				setState(180);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__5) {
					{
					{
					setState(174);
					match(T__5);
					setState(175);
					type();
					setState(176);
					match(ID);
					}
					}
					setState(182);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			match(T__13);
			setState(189);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__16) | (1L << T__17) | (1L << T__20) | (1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << ID))) != 0)) {
				{
				{
				setState(186);
				statement();
				}
				}
				setState(191);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(192);
			match(T__14);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public Return_stmtContext return_stmt() {
			return getRuleContext(Return_stmtContext.class,0);
		}
		public If_stmtContext if_stmt() {
			return getRuleContext(If_stmtContext.class,0);
		}
		public While_stmtContext while_stmt() {
			return getRuleContext(While_stmtContext.class,0);
		}
		public For_stmtContext for_stmt() {
			return getRuleContext(For_stmtContext.class,0);
		}
		public Func_callContext func_call() {
			return getRuleContext(Func_callContext.class,0);
		}
		public Input_stmtContext input_stmt() {
			return getRuleContext(Input_stmtContext.class,0);
		}
		public Output_stmtContext output_stmt() {
			return getRuleContext(Output_stmtContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_statement);
		try {
			setState(202);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(194);
				assignment();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(195);
				return_stmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(196);
				if_stmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(197);
				while_stmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(198);
				for_stmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(199);
				func_call();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(200);
				input_stmt();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(201);
				output_stmt();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentContext extends ParserRuleContext {
		public Var_idContext var_id() {
			return getRuleContext(Var_idContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
			var_id();
			setState(205);
			match(T__15);
			setState(206);
			expr();
			setState(207);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Return_stmtContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public Return_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_return_stmt; }
	}

	public final Return_stmtContext return_stmt() throws RecognitionException {
		Return_stmtContext _localctx = new Return_stmtContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_return_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			match(T__16);
			setState(214);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__11) {
				{
				setState(210);
				match(T__11);
				setState(211);
				expr();
				setState(212);
				match(T__12);
				}
			}

			setState(216);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class If_exprContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public If_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if_expr; }
	}

	public final If_exprContext if_expr() throws RecognitionException {
		If_exprContext _localctx = new If_exprContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_if_expr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			match(T__17);
			setState(219);
			match(T__11);
			setState(220);
			expr();
			setState(221);
			match(T__12);
			setState(222);
			match(T__18);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class If_stmtContext extends ParserRuleContext {
		public If_exprContext if_expr() {
			return getRuleContext(If_exprContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public Else_stmtContext else_stmt() {
			return getRuleContext(Else_stmtContext.class,0);
		}
		public If_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if_stmt; }
	}

	public final If_stmtContext if_stmt() throws RecognitionException {
		If_stmtContext _localctx = new If_stmtContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_if_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			if_expr();
			setState(225);
			block();
			setState(226);
			else_stmt();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Else_stmtContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public Else_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_else_stmt; }
	}

	public final Else_stmtContext else_stmt() throws RecognitionException {
		Else_stmtContext _localctx = new Else_stmtContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_else_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(230);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__19) {
				{
				setState(228);
				match(T__19);
				setState(229);
				block();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class While_exprContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public While_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_while_expr; }
	}

	public final While_exprContext while_expr() throws RecognitionException {
		While_exprContext _localctx = new While_exprContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_while_expr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(232);
			match(T__20);
			setState(233);
			match(T__11);
			setState(234);
			expr();
			setState(235);
			match(T__12);
			setState(236);
			match(T__21);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class While_stmtContext extends ParserRuleContext {
		public While_exprContext while_expr() {
			return getRuleContext(While_exprContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public While_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_while_stmt; }
	}

	public final While_stmtContext while_stmt() throws RecognitionException {
		While_stmtContext _localctx = new While_stmtContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_while_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			while_expr();
			setState(239);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class For_idContext extends ParserRuleContext {
		public Var_idContext var_id() {
			return getRuleContext(Var_idContext.class,0);
		}
		public For_idContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_id; }
	}

	public final For_idContext for_id() throws RecognitionException {
		For_idContext _localctx = new For_idContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_for_id);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(241);
			match(T__22);
			setState(242);
			var_id();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class For_expr1Context extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public For_expr1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_expr1; }
	}

	public final For_expr1Context for_expr1() throws RecognitionException {
		For_expr1Context _localctx = new For_expr1Context(_ctx, getState());
		enterRule(_localctx, 44, RULE_for_expr1);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(244);
			match(T__15);
			setState(245);
			expr();
			setState(246);
			match(T__23);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class For_expr2Context extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public For_expr2Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_expr2; }
	}

	public final For_expr2Context for_expr2() throws RecognitionException {
		For_expr2Context _localctx = new For_expr2Context(_ctx, getState());
		enterRule(_localctx, 46, RULE_for_expr2);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(248);
			expr();
			setState(249);
			match(T__21);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class For_stmtContext extends ParserRuleContext {
		public For_idContext for_id() {
			return getRuleContext(For_idContext.class,0);
		}
		public For_expr1Context for_expr1() {
			return getRuleContext(For_expr1Context.class,0);
		}
		public For_expr2Context for_expr2() {
			return getRuleContext(For_expr2Context.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public For_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_stmt; }
	}

	public final For_stmtContext for_stmt() throws RecognitionException {
		For_stmtContext _localctx = new For_stmtContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_for_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(251);
			for_id();
			setState(252);
			for_expr1();
			setState(253);
			for_expr2();
			setState(254);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Rel_opContext extends ParserRuleContext {
		public Rel_opContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rel_op; }
	}

	public final Rel_opContext rel_op() throws RecognitionException {
		Rel_opContext _localctx = new Rel_opContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_rel_op);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(256);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__24) | (1L << T__25) | (1L << T__26) | (1L << T__27))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Eq_opContext extends ParserRuleContext {
		public Eq_opContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eq_op; }
	}

	public final Eq_opContext eq_op() throws RecognitionException {
		Eq_opContext _localctx = new Eq_opContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_eq_op);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			_la = _input.LA(1);
			if ( !(_la==T__28 || _la==T__29) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Addsub_opContext extends ParserRuleContext {
		public Addsub_opContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addsub_op; }
	}

	public final Addsub_opContext addsub_op() throws RecognitionException {
		Addsub_opContext _localctx = new Addsub_opContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_addsub_op);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(260);
			_la = _input.LA(1);
			if ( !(_la==T__30 || _la==T__31) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Muldiv_opContext extends ParserRuleContext {
		public Muldiv_opContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_muldiv_op; }
	}

	public final Muldiv_opContext muldiv_op() throws RecognitionException {
		Muldiv_opContext _localctx = new Muldiv_opContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_muldiv_op);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(262);
			_la = _input.LA(1);
			if ( !(_la==T__32 || _la==T__33) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Or_opContext extends ParserRuleContext {
		public Or_opContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_or_op; }
	}

	public final Or_opContext or_op() throws RecognitionException {
		Or_opContext _localctx = new Or_opContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_or_op);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			match(T__34);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class And_opContext extends ParserRuleContext {
		public And_opContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_and_op; }
	}

	public final And_opContext and_op() throws RecognitionException {
		And_opContext _localctx = new And_opContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_and_op);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			match(T__35);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Minus_opContext extends ParserRuleContext {
		public Minus_opContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_minus_op; }
	}

	public final Minus_opContext minus_op() throws RecognitionException {
		Minus_opContext _localctx = new Minus_opContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_minus_op);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(268);
			match(T__31);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public Exp1Context exp1() {
			return getRuleContext(Exp1Context.class,0);
		}
		public List<Or_opContext> or_op() {
			return getRuleContexts(Or_opContext.class);
		}
		public Or_opContext or_op(int i) {
			return getRuleContext(Or_opContext.class,i);
		}
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_expr);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(270);
			exp1();
			setState(276);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(271);
					or_op();
					setState(272);
					expr();
					}
					} 
				}
				setState(278);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Exp1Context extends ParserRuleContext {
		public Exp2Context exp2() {
			return getRuleContext(Exp2Context.class,0);
		}
		public List<And_opContext> and_op() {
			return getRuleContexts(And_opContext.class);
		}
		public And_opContext and_op(int i) {
			return getRuleContext(And_opContext.class,i);
		}
		public List<Exp1Context> exp1() {
			return getRuleContexts(Exp1Context.class);
		}
		public Exp1Context exp1(int i) {
			return getRuleContext(Exp1Context.class,i);
		}
		public Exp1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp1; }
	}

	public final Exp1Context exp1() throws RecognitionException {
		Exp1Context _localctx = new Exp1Context(_ctx, getState());
		enterRule(_localctx, 66, RULE_exp1);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(279);
			exp2();
			setState(285);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(280);
					and_op();
					setState(281);
					exp1();
					}
					} 
				}
				setState(287);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Exp2Context extends ParserRuleContext {
		public List<Exp3Context> exp3() {
			return getRuleContexts(Exp3Context.class);
		}
		public Exp3Context exp3(int i) {
			return getRuleContext(Exp3Context.class,i);
		}
		public Eq_opContext eq_op() {
			return getRuleContext(Eq_opContext.class,0);
		}
		public Exp2Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp2; }
	}

	public final Exp2Context exp2() throws RecognitionException {
		Exp2Context _localctx = new Exp2Context(_ctx, getState());
		enterRule(_localctx, 68, RULE_exp2);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(288);
			exp3();
			setState(292);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__28 || _la==T__29) {
				{
				setState(289);
				eq_op();
				setState(290);
				exp3();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Exp3Context extends ParserRuleContext {
		public List<Exp4Context> exp4() {
			return getRuleContexts(Exp4Context.class);
		}
		public Exp4Context exp4(int i) {
			return getRuleContext(Exp4Context.class,i);
		}
		public Rel_opContext rel_op() {
			return getRuleContext(Rel_opContext.class,0);
		}
		public Exp3Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp3; }
	}

	public final Exp3Context exp3() throws RecognitionException {
		Exp3Context _localctx = new Exp3Context(_ctx, getState());
		enterRule(_localctx, 70, RULE_exp3);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(294);
			exp4();
			setState(298);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__24) | (1L << T__25) | (1L << T__26) | (1L << T__27))) != 0)) {
				{
				setState(295);
				rel_op();
				setState(296);
				exp4();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Exp4Context extends ParserRuleContext {
		public Exp5Context exp5() {
			return getRuleContext(Exp5Context.class,0);
		}
		public List<Addsub_opContext> addsub_op() {
			return getRuleContexts(Addsub_opContext.class);
		}
		public Addsub_opContext addsub_op(int i) {
			return getRuleContext(Addsub_opContext.class,i);
		}
		public List<Exp4Context> exp4() {
			return getRuleContexts(Exp4Context.class);
		}
		public Exp4Context exp4(int i) {
			return getRuleContext(Exp4Context.class,i);
		}
		public Exp4Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp4; }
	}

	public final Exp4Context exp4() throws RecognitionException {
		Exp4Context _localctx = new Exp4Context(_ctx, getState());
		enterRule(_localctx, 72, RULE_exp4);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(300);
			exp5();
			setState(306);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(301);
					addsub_op();
					setState(302);
					exp4();
					}
					} 
				}
				setState(308);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Exp5Context extends ParserRuleContext {
		public Exp6Context exp6() {
			return getRuleContext(Exp6Context.class,0);
		}
		public List<Muldiv_opContext> muldiv_op() {
			return getRuleContexts(Muldiv_opContext.class);
		}
		public Muldiv_opContext muldiv_op(int i) {
			return getRuleContext(Muldiv_opContext.class,i);
		}
		public List<Exp5Context> exp5() {
			return getRuleContexts(Exp5Context.class);
		}
		public Exp5Context exp5(int i) {
			return getRuleContext(Exp5Context.class,i);
		}
		public Exp5Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp5; }
	}

	public final Exp5Context exp5() throws RecognitionException {
		Exp5Context _localctx = new Exp5Context(_ctx, getState());
		enterRule(_localctx, 74, RULE_exp5);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(309);
			exp6();
			setState(315);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(310);
					muldiv_op();
					setState(311);
					exp5();
					}
					} 
				}
				setState(317);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Exp6Context extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public Var_idContext var_id() {
			return getRuleContext(Var_idContext.class,0);
		}
		public Func_callContext func_call() {
			return getRuleContext(Func_callContext.class,0);
		}
		public TerminalNode INT_VAL() { return getToken(ParPlusPlusParser.INT_VAL, 0); }
		public Minus_opContext minus_op() {
			return getRuleContext(Minus_opContext.class,0);
		}
		public TerminalNode FLOAT_VAL() { return getToken(ParPlusPlusParser.FLOAT_VAL, 0); }
		public TerminalNode CHAR_VAL() { return getToken(ParPlusPlusParser.CHAR_VAL, 0); }
		public Exp6Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp6; }
	}

	public final Exp6Context exp6() throws RecognitionException {
		Exp6Context _localctx = new Exp6Context(_ctx, getState());
		enterRule(_localctx, 76, RULE_exp6);
		int _la;
		try {
			setState(333);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(318);
				match(T__11);
				setState(319);
				expr();
				setState(320);
				match(T__12);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(322);
				var_id();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(323);
				func_call();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(325);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__31) {
					{
					setState(324);
					minus_op();
					}
				}

				setState(327);
				match(INT_VAL);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(329);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__31) {
					{
					setState(328);
					minus_op();
					}
				}

				setState(331);
				match(FLOAT_VAL);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(332);
				match(CHAR_VAL);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_callContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ParPlusPlusParser.ID, 0); }
		public Func_call_argsContext func_call_args() {
			return getRuleContext(Func_call_argsContext.class,0);
		}
		public Func_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_call; }
	}

	public final Func_callContext func_call() throws RecognitionException {
		Func_callContext _localctx = new Func_callContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_func_call);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(335);
			match(ID);
			setState(336);
			match(T__11);
			setState(338);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__31) | (1L << ID) | (1L << FLOAT_VAL) | (1L << INT_VAL) | (1L << CHAR_VAL))) != 0)) {
				{
				setState(337);
				func_call_args();
				}
			}

			setState(340);
			match(T__12);
			setState(342);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				{
				setState(341);
				match(T__1);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_call_argsContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public Func_call_argsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_call_args; }
	}

	public final Func_call_argsContext func_call_args() throws RecognitionException {
		Func_call_argsContext _localctx = new Func_call_argsContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_func_call_args);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(344);
			expr();
			setState(349);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(345);
				match(T__5);
				setState(346);
				expr();
				}
				}
				setState(351);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Input_stmtContext extends ParserRuleContext {
		public Input_argsContext input_args() {
			return getRuleContext(Input_argsContext.class,0);
		}
		public Input_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_input_stmt; }
	}

	public final Input_stmtContext input_stmt() throws RecognitionException {
		Input_stmtContext _localctx = new Input_stmtContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_input_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(352);
			match(T__36);
			setState(353);
			match(T__11);
			setState(354);
			input_args();
			setState(355);
			match(T__12);
			setState(356);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Input_argsContext extends ParserRuleContext {
		public List<Var_idContext> var_id() {
			return getRuleContexts(Var_idContext.class);
		}
		public Var_idContext var_id(int i) {
			return getRuleContext(Var_idContext.class,i);
		}
		public Input_argsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_input_args; }
	}

	public final Input_argsContext input_args() throws RecognitionException {
		Input_argsContext _localctx = new Input_argsContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_input_args);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(358);
			var_id();
			setState(363);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(359);
				match(T__5);
				setState(360);
				var_id();
				}
				}
				setState(365);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Output_stmtContext extends ParserRuleContext {
		public Output_argsContext output_args() {
			return getRuleContext(Output_argsContext.class,0);
		}
		public Output_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_output_stmt; }
	}

	public final Output_stmtContext output_stmt() throws RecognitionException {
		Output_stmtContext _localctx = new Output_stmtContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_output_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(366);
			match(T__37);
			setState(367);
			match(T__11);
			setState(368);
			output_args();
			setState(369);
			match(T__12);
			setState(370);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Output_argContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode STR_VAL() { return getToken(ParPlusPlusParser.STR_VAL, 0); }
		public Output_argContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_output_arg; }
	}

	public final Output_argContext output_arg() throws RecognitionException {
		Output_argContext _localctx = new Output_argContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_output_arg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(374);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__11:
			case T__31:
			case ID:
			case FLOAT_VAL:
			case INT_VAL:
			case CHAR_VAL:
				{
				setState(372);
				expr();
				}
				break;
			case STR_VAL:
				{
				setState(373);
				match(STR_VAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Output_argsContext extends ParserRuleContext {
		public List<Output_argContext> output_arg() {
			return getRuleContexts(Output_argContext.class);
		}
		public Output_argContext output_arg(int i) {
			return getRuleContext(Output_argContext.class,i);
		}
		public Output_argsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_output_args; }
	}

	public final Output_argsContext output_args() throws RecognitionException {
		Output_argsContext _localctx = new Output_argsContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_output_args);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(376);
			output_arg();
			setState(381);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(377);
				match(T__5);
				setState(378);
				output_arg();
				}
				}
				setState(383);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Main_functionContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public Main_functionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_main_function; }
	}

	public final Main_functionContext main_function() throws RecognitionException {
		Main_functionContext _localctx = new Main_functionContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_main_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(384);
			match(T__38);
			setState(385);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3/\u0186\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\3\2\3\2\3\2\3\2\3\2\7\2f\n\2\f\2\16\2"+
		"i\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\6\3s\n\3\r\3\16\3t\5\3w\n\3\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\5\4\u0080\n\4\5\4\u0082\n\4\3\5\3\5\7\5\u0086"+
		"\n\5\f\5\16\5\u0089\13\5\3\6\3\6\3\6\5\6\u008e\n\6\5\6\u0090\n\6\3\7\3"+
		"\7\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\7\n\u009c\n\n\f\n\16\n\u009f\13\n\3"+
		"\13\3\13\3\f\3\f\5\f\u00a5\n\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\7\r\u00b5\n\r\f\r\16\r\u00b8\13\r\5\r\u00ba\n\r\3\16"+
		"\3\16\7\16\u00be\n\16\f\16\16\16\u00c1\13\16\3\16\3\16\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\17\5\17\u00cd\n\17\3\20\3\20\3\20\3\20\3\20\3\21"+
		"\3\21\3\21\3\21\3\21\5\21\u00d9\n\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\23\3\23\3\23\3\23\3\24\3\24\5\24\u00e9\n\24\3\25\3\25\3\25\3\25"+
		"\3\25\3\25\3\26\3\26\3\26\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\31\3\31"+
		"\3\31\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36"+
		"\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3\"\3\"\7\"\u0115\n\"\f\"\16\"\u0118\13"+
		"\"\3#\3#\3#\3#\7#\u011e\n#\f#\16#\u0121\13#\3$\3$\3$\3$\5$\u0127\n$\3"+
		"%\3%\3%\3%\5%\u012d\n%\3&\3&\3&\3&\7&\u0133\n&\f&\16&\u0136\13&\3\'\3"+
		"\'\3\'\3\'\7\'\u013c\n\'\f\'\16\'\u013f\13\'\3(\3(\3(\3(\3(\3(\3(\5(\u0148"+
		"\n(\3(\3(\5(\u014c\n(\3(\3(\5(\u0150\n(\3)\3)\3)\5)\u0155\n)\3)\3)\5)"+
		"\u0159\n)\3*\3*\3*\7*\u015e\n*\f*\16*\u0161\13*\3+\3+\3+\3+\3+\3+\3,\3"+
		",\3,\7,\u016c\n,\f,\16,\u016f\13,\3-\3-\3-\3-\3-\3-\3.\3.\5.\u0179\n."+
		"\3/\3/\3/\7/\u017e\n/\f/\16/\u0181\13/\3\60\3\60\3\60\3\60\2\2\61\2\4"+
		"\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNP"+
		"RTVXZ\\^\2\7\3\2\t\13\3\2\33\36\3\2\37 \3\2!\"\3\2#$\2\u017f\2`\3\2\2"+
		"\2\4v\3\2\2\2\6x\3\2\2\2\b\u0087\3\2\2\2\n\u008a\3\2\2\2\f\u0091\3\2\2"+
		"\2\16\u0095\3\2\2\2\20\u0097\3\2\2\2\22\u009d\3\2\2\2\24\u00a0\3\2\2\2"+
		"\26\u00a4\3\2\2\2\30\u00b9\3\2\2\2\32\u00bb\3\2\2\2\34\u00cc\3\2\2\2\36"+
		"\u00ce\3\2\2\2 \u00d3\3\2\2\2\"\u00dc\3\2\2\2$\u00e2\3\2\2\2&\u00e8\3"+
		"\2\2\2(\u00ea\3\2\2\2*\u00f0\3\2\2\2,\u00f3\3\2\2\2.\u00f6\3\2\2\2\60"+
		"\u00fa\3\2\2\2\62\u00fd\3\2\2\2\64\u0102\3\2\2\2\66\u0104\3\2\2\28\u0106"+
		"\3\2\2\2:\u0108\3\2\2\2<\u010a\3\2\2\2>\u010c\3\2\2\2@\u010e\3\2\2\2B"+
		"\u0110\3\2\2\2D\u0119\3\2\2\2F\u0122\3\2\2\2H\u0128\3\2\2\2J\u012e\3\2"+
		"\2\2L\u0137\3\2\2\2N\u014f\3\2\2\2P\u0151\3\2\2\2R\u015a\3\2\2\2T\u0162"+
		"\3\2\2\2V\u0168\3\2\2\2X\u0170\3\2\2\2Z\u0178\3\2\2\2\\\u017a\3\2\2\2"+
		"^\u0182\3\2\2\2`a\7\3\2\2ab\7+\2\2bc\7\4\2\2cg\5\4\3\2df\5\26\f\2ed\3"+
		"\2\2\2fi\3\2\2\2ge\3\2\2\2gh\3\2\2\2hj\3\2\2\2ig\3\2\2\2jk\5^\60\2k\3"+
		"\3\2\2\2lr\7\5\2\2mn\5\24\13\2no\5\6\4\2op\5\b\5\2pq\7\4\2\2qs\3\2\2\2"+
		"rm\3\2\2\2st\3\2\2\2tr\3\2\2\2tu\3\2\2\2uw\3\2\2\2vl\3\2\2\2vw\3\2\2\2"+
		"w\5\3\2\2\2x\u0081\7+\2\2yz\7\6\2\2z{\7-\2\2{\177\7\7\2\2|}\7\6\2\2}~"+
		"\7-\2\2~\u0080\7\7\2\2\177|\3\2\2\2\177\u0080\3\2\2\2\u0080\u0082\3\2"+
		"\2\2\u0081y\3\2\2\2\u0081\u0082\3\2\2\2\u0082\7\3\2\2\2\u0083\u0084\7"+
		"\b\2\2\u0084\u0086\5\6\4\2\u0085\u0083\3\2\2\2\u0086\u0089\3\2\2\2\u0087"+
		"\u0085\3\2\2\2\u0087\u0088\3\2\2\2\u0088\t\3\2\2\2\u0089\u0087\3\2\2\2"+
		"\u008a\u008f\7+\2\2\u008b\u008d\5\16\b\2\u008c\u008e\5\20\t\2\u008d\u008c"+
		"\3\2\2\2\u008d\u008e\3\2\2\2\u008e\u0090\3\2\2\2\u008f\u008b\3\2\2\2\u008f"+
		"\u0090\3\2\2\2\u0090\13\3\2\2\2\u0091\u0092\7\6\2\2\u0092\u0093\5B\"\2"+
		"\u0093\u0094\7\7\2\2\u0094\r\3\2\2\2\u0095\u0096\5\f\7\2\u0096\17\3\2"+
		"\2\2\u0097\u0098\5\f\7\2\u0098\21\3\2\2\2\u0099\u009a\7\b\2\2\u009a\u009c"+
		"\5\n\6\2\u009b\u0099\3\2\2\2\u009c\u009f\3\2\2\2\u009d\u009b\3\2\2\2\u009d"+
		"\u009e\3\2\2\2\u009e\23\3\2\2\2\u009f\u009d\3\2\2\2\u00a0\u00a1\t\2\2"+
		"\2\u00a1\25\3\2\2\2\u00a2\u00a5\5\24\13\2\u00a3\u00a5\7\f\2\2\u00a4\u00a2"+
		"\3\2\2\2\u00a4\u00a3\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6\u00a7\7\r\2\2\u00a7"+
		"\u00a8\7+\2\2\u00a8\u00a9\7\16\2\2\u00a9\u00aa\5\30\r\2\u00aa\u00ab\7"+
		"\17\2\2\u00ab\u00ac\5\4\3\2\u00ac\u00ad\5\32\16\2\u00ad\27\3\2\2\2\u00ae"+
		"\u00af\5\24\13\2\u00af\u00b6\7+\2\2\u00b0\u00b1\7\b\2\2\u00b1\u00b2\5"+
		"\24\13\2\u00b2\u00b3\7+\2\2\u00b3\u00b5\3\2\2\2\u00b4\u00b0\3\2\2\2\u00b5"+
		"\u00b8\3\2\2\2\u00b6\u00b4\3\2\2\2\u00b6\u00b7\3\2\2\2\u00b7\u00ba\3\2"+
		"\2\2\u00b8\u00b6\3\2\2\2\u00b9\u00ae\3\2\2\2\u00b9\u00ba\3\2\2\2\u00ba"+
		"\31\3\2\2\2\u00bb\u00bf\7\20\2\2\u00bc\u00be\5\34\17\2\u00bd\u00bc\3\2"+
		"\2\2\u00be\u00c1\3\2\2\2\u00bf\u00bd\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0"+
		"\u00c2\3\2\2\2\u00c1\u00bf\3\2\2\2\u00c2\u00c3\7\21\2\2\u00c3\33\3\2\2"+
		"\2\u00c4\u00cd\5\36\20\2\u00c5\u00cd\5 \21\2\u00c6\u00cd\5$\23\2\u00c7"+
		"\u00cd\5*\26\2\u00c8\u00cd\5\62\32\2\u00c9\u00cd\5P)\2\u00ca\u00cd\5T"+
		"+\2\u00cb\u00cd\5X-\2\u00cc\u00c4\3\2\2\2\u00cc\u00c5\3\2\2\2\u00cc\u00c6"+
		"\3\2\2\2\u00cc\u00c7\3\2\2\2\u00cc\u00c8\3\2\2\2\u00cc\u00c9\3\2\2\2\u00cc"+
		"\u00ca\3\2\2\2\u00cc\u00cb\3\2\2\2\u00cd\35\3\2\2\2\u00ce\u00cf\5\n\6"+
		"\2\u00cf\u00d0\7\22\2\2\u00d0\u00d1\5B\"\2\u00d1\u00d2\7\4\2\2\u00d2\37"+
		"\3\2\2\2\u00d3\u00d8\7\23\2\2\u00d4\u00d5\7\16\2\2\u00d5\u00d6\5B\"\2"+
		"\u00d6\u00d7\7\17\2\2\u00d7\u00d9\3\2\2\2\u00d8\u00d4\3\2\2\2\u00d8\u00d9"+
		"\3\2\2\2\u00d9\u00da\3\2\2\2\u00da\u00db\7\4\2\2\u00db!\3\2\2\2\u00dc"+
		"\u00dd\7\24\2\2\u00dd\u00de\7\16\2\2\u00de\u00df\5B\"\2\u00df\u00e0\7"+
		"\17\2\2\u00e0\u00e1\7\25\2\2\u00e1#\3\2\2\2\u00e2\u00e3\5\"\22\2\u00e3"+
		"\u00e4\5\32\16\2\u00e4\u00e5\5&\24\2\u00e5%\3\2\2\2\u00e6\u00e7\7\26\2"+
		"\2\u00e7\u00e9\5\32\16\2\u00e8\u00e6\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9"+
		"\'\3\2\2\2\u00ea\u00eb\7\27\2\2\u00eb\u00ec\7\16\2\2\u00ec\u00ed\5B\""+
		"\2\u00ed\u00ee\7\17\2\2\u00ee\u00ef\7\30\2\2\u00ef)\3\2\2\2\u00f0\u00f1"+
		"\5(\25\2\u00f1\u00f2\5\32\16\2\u00f2+\3\2\2\2\u00f3\u00f4\7\31\2\2\u00f4"+
		"\u00f5\5\n\6\2\u00f5-\3\2\2\2\u00f6\u00f7\7\22\2\2\u00f7\u00f8\5B\"\2"+
		"\u00f8\u00f9\7\32\2\2\u00f9/\3\2\2\2\u00fa\u00fb\5B\"\2\u00fb\u00fc\7"+
		"\30\2\2\u00fc\61\3\2\2\2\u00fd\u00fe\5,\27\2\u00fe\u00ff\5.\30\2\u00ff"+
		"\u0100\5\60\31\2\u0100\u0101\5\32\16\2\u0101\63\3\2\2\2\u0102\u0103\t"+
		"\3\2\2\u0103\65\3\2\2\2\u0104\u0105\t\4\2\2\u0105\67\3\2\2\2\u0106\u0107"+
		"\t\5\2\2\u01079\3\2\2\2\u0108\u0109\t\6\2\2\u0109;\3\2\2\2\u010a\u010b"+
		"\7%\2\2\u010b=\3\2\2\2\u010c\u010d\7&\2\2\u010d?\3\2\2\2\u010e\u010f\7"+
		"\"\2\2\u010fA\3\2\2\2\u0110\u0116\5D#\2\u0111\u0112\5<\37\2\u0112\u0113"+
		"\5B\"\2\u0113\u0115\3\2\2\2\u0114\u0111\3\2\2\2\u0115\u0118\3\2\2\2\u0116"+
		"\u0114\3\2\2\2\u0116\u0117\3\2\2\2\u0117C\3\2\2\2\u0118\u0116\3\2\2\2"+
		"\u0119\u011f\5F$\2\u011a\u011b\5> \2\u011b\u011c\5D#\2\u011c\u011e\3\2"+
		"\2\2\u011d\u011a\3\2\2\2\u011e\u0121\3\2\2\2\u011f\u011d\3\2\2\2\u011f"+
		"\u0120\3\2\2\2\u0120E\3\2\2\2\u0121\u011f\3\2\2\2\u0122\u0126\5H%\2\u0123"+
		"\u0124\5\66\34\2\u0124\u0125\5H%\2\u0125\u0127\3\2\2\2\u0126\u0123\3\2"+
		"\2\2\u0126\u0127\3\2\2\2\u0127G\3\2\2\2\u0128\u012c\5J&\2\u0129\u012a"+
		"\5\64\33\2\u012a\u012b\5J&\2\u012b\u012d\3\2\2\2\u012c\u0129\3\2\2\2\u012c"+
		"\u012d\3\2\2\2\u012dI\3\2\2\2\u012e\u0134\5L\'\2\u012f\u0130\58\35\2\u0130"+
		"\u0131\5J&\2\u0131\u0133\3\2\2\2\u0132\u012f\3\2\2\2\u0133\u0136\3\2\2"+
		"\2\u0134\u0132\3\2\2\2\u0134\u0135\3\2\2\2\u0135K\3\2\2\2\u0136\u0134"+
		"\3\2\2\2\u0137\u013d\5N(\2\u0138\u0139\5:\36\2\u0139\u013a\5L\'\2\u013a"+
		"\u013c\3\2\2\2\u013b\u0138\3\2\2\2\u013c\u013f\3\2\2\2\u013d\u013b\3\2"+
		"\2\2\u013d\u013e\3\2\2\2\u013eM\3\2\2\2\u013f\u013d\3\2\2\2\u0140\u0141"+
		"\7\16\2\2\u0141\u0142\5B\"\2\u0142\u0143\7\17\2\2\u0143\u0150\3\2\2\2"+
		"\u0144\u0150\5\n\6\2\u0145\u0150\5P)\2\u0146\u0148\5@!\2\u0147\u0146\3"+
		"\2\2\2\u0147\u0148\3\2\2\2\u0148\u0149\3\2\2\2\u0149\u0150\7-\2\2\u014a"+
		"\u014c\5@!\2\u014b\u014a\3\2\2\2\u014b\u014c\3\2\2\2\u014c\u014d\3\2\2"+
		"\2\u014d\u0150\7,\2\2\u014e\u0150\7.\2\2\u014f\u0140\3\2\2\2\u014f\u0144"+
		"\3\2\2\2\u014f\u0145\3\2\2\2\u014f\u0147\3\2\2\2\u014f\u014b\3\2\2\2\u014f"+
		"\u014e\3\2\2\2\u0150O\3\2\2\2\u0151\u0152\7+\2\2\u0152\u0154\7\16\2\2"+
		"\u0153\u0155\5R*\2\u0154\u0153\3\2\2\2\u0154\u0155\3\2\2\2\u0155\u0156"+
		"\3\2\2\2\u0156\u0158\7\17\2\2\u0157\u0159\7\4\2\2\u0158\u0157\3\2\2\2"+
		"\u0158\u0159\3\2\2\2\u0159Q\3\2\2\2\u015a\u015f\5B\"\2\u015b\u015c\7\b"+
		"\2\2\u015c\u015e\5B\"\2\u015d\u015b\3\2\2\2\u015e\u0161\3\2\2\2\u015f"+
		"\u015d\3\2\2\2\u015f\u0160\3\2\2\2\u0160S\3\2\2\2\u0161\u015f\3\2\2\2"+
		"\u0162\u0163\7\'\2\2\u0163\u0164\7\16\2\2\u0164\u0165\5V,\2\u0165\u0166"+
		"\7\17\2\2\u0166\u0167\7\4\2\2\u0167U\3\2\2\2\u0168\u016d\5\n\6\2\u0169"+
		"\u016a\7\b\2\2\u016a\u016c\5\n\6\2\u016b\u0169\3\2\2\2\u016c\u016f\3\2"+
		"\2\2\u016d\u016b\3\2\2\2\u016d\u016e\3\2\2\2\u016eW\3\2\2\2\u016f\u016d"+
		"\3\2\2\2\u0170\u0171\7(\2\2\u0171\u0172\7\16\2\2\u0172\u0173\5\\/\2\u0173"+
		"\u0174\7\17\2\2\u0174\u0175\7\4\2\2\u0175Y\3\2\2\2\u0176\u0179\5B\"\2"+
		"\u0177\u0179\7/\2\2\u0178\u0176\3\2\2\2\u0178\u0177\3\2\2\2\u0179[\3\2"+
		"\2\2\u017a\u017f\5Z.\2\u017b\u017c\7\b\2\2\u017c\u017e\5Z.\2\u017d\u017b"+
		"\3\2\2\2\u017e\u0181\3\2\2\2\u017f\u017d\3\2\2\2\u017f\u0180\3\2\2\2\u0180"+
		"]\3\2\2\2\u0181\u017f\3\2\2\2\u0182\u0183\7)\2\2\u0183\u0184\5\32\16\2"+
		"\u0184_\3\2\2\2!gtv\177\u0081\u0087\u008d\u008f\u009d\u00a4\u00b6\u00b9"+
		"\u00bf\u00cc\u00d8\u00e8\u0116\u011f\u0126\u012c\u0134\u013d\u0147\u014b"+
		"\u014f\u0154\u0158\u015f\u016d\u0178\u017f";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}