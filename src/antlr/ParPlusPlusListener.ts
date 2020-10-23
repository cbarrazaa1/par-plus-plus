// Generated from src/antlr/ParPlusPlus.g4 by ANTLR 4.7.3-SNAPSHOT
// @ts-nocheck

import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./ParPlusPlusParser";
import { VarsContext } from "./ParPlusPlusParser";
import { Var_id_declContext } from "./ParPlusPlusParser";
import { Var_ids_declContext } from "./ParPlusPlusParser";
import { Var_idContext } from "./ParPlusPlusParser";
import { Var_idsContext } from "./ParPlusPlusParser";
import { TypeContext } from "./ParPlusPlusParser";
import { FunctionContext } from "./ParPlusPlusParser";
import { Func_paramsContext } from "./ParPlusPlusParser";
import { BlockContext } from "./ParPlusPlusParser";
import { StatementContext } from "./ParPlusPlusParser";
import { AssignmentContext } from "./ParPlusPlusParser";
import { Return_stmtContext } from "./ParPlusPlusParser";
import { If_exprContext } from "./ParPlusPlusParser";
import { If_stmtContext } from "./ParPlusPlusParser";
import { Else_stmtContext } from "./ParPlusPlusParser";
import { While_exprContext } from "./ParPlusPlusParser";
import { While_stmtContext } from "./ParPlusPlusParser";
import { For_idContext } from "./ParPlusPlusParser";
import { For_expr1Context } from "./ParPlusPlusParser";
import { For_expr2Context } from "./ParPlusPlusParser";
import { For_stmtContext } from "./ParPlusPlusParser";
import { Rel_opContext } from "./ParPlusPlusParser";
import { Eq_opContext } from "./ParPlusPlusParser";
import { Addsub_opContext } from "./ParPlusPlusParser";
import { Muldiv_opContext } from "./ParPlusPlusParser";
import { Or_opContext } from "./ParPlusPlusParser";
import { And_opContext } from "./ParPlusPlusParser";
import { ExprContext } from "./ParPlusPlusParser";
import { Exp1Context } from "./ParPlusPlusParser";
import { Exp2Context } from "./ParPlusPlusParser";
import { Exp3Context } from "./ParPlusPlusParser";
import { Exp4Context } from "./ParPlusPlusParser";
import { Exp5Context } from "./ParPlusPlusParser";
import { Exp6Context } from "./ParPlusPlusParser";
import { Func_callContext } from "./ParPlusPlusParser";
import { Func_call_argsContext } from "./ParPlusPlusParser";
import { Input_stmtContext } from "./ParPlusPlusParser";
import { Input_argsContext } from "./ParPlusPlusParser";
import { Output_stmtContext } from "./ParPlusPlusParser";
import { Output_argContext } from "./ParPlusPlusParser";
import { Output_argsContext } from "./ParPlusPlusParser";
import { Main_functionContext } from "./ParPlusPlusParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ParPlusPlusParser`.
 */
export interface ParPlusPlusListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.vars`.
	 * @param ctx the parse tree
	 */
	enterVars?: (ctx: VarsContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.vars`.
	 * @param ctx the parse tree
	 */
	exitVars?: (ctx: VarsContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.var_id_decl`.
	 * @param ctx the parse tree
	 */
	enterVar_id_decl?: (ctx: Var_id_declContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.var_id_decl`.
	 * @param ctx the parse tree
	 */
	exitVar_id_decl?: (ctx: Var_id_declContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.var_ids_decl`.
	 * @param ctx the parse tree
	 */
	enterVar_ids_decl?: (ctx: Var_ids_declContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.var_ids_decl`.
	 * @param ctx the parse tree
	 */
	exitVar_ids_decl?: (ctx: Var_ids_declContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.var_id`.
	 * @param ctx the parse tree
	 */
	enterVar_id?: (ctx: Var_idContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.var_id`.
	 * @param ctx the parse tree
	 */
	exitVar_id?: (ctx: Var_idContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.var_ids`.
	 * @param ctx the parse tree
	 */
	enterVar_ids?: (ctx: Var_idsContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.var_ids`.
	 * @param ctx the parse tree
	 */
	exitVar_ids?: (ctx: Var_idsContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.func_params`.
	 * @param ctx the parse tree
	 */
	enterFunc_params?: (ctx: Func_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.func_params`.
	 * @param ctx the parse tree
	 */
	exitFunc_params?: (ctx: Func_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.return_stmt`.
	 * @param ctx the parse tree
	 */
	enterReturn_stmt?: (ctx: Return_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.return_stmt`.
	 * @param ctx the parse tree
	 */
	exitReturn_stmt?: (ctx: Return_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.if_expr`.
	 * @param ctx the parse tree
	 */
	enterIf_expr?: (ctx: If_exprContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.if_expr`.
	 * @param ctx the parse tree
	 */
	exitIf_expr?: (ctx: If_exprContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.if_stmt`.
	 * @param ctx the parse tree
	 */
	enterIf_stmt?: (ctx: If_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.if_stmt`.
	 * @param ctx the parse tree
	 */
	exitIf_stmt?: (ctx: If_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.else_stmt`.
	 * @param ctx the parse tree
	 */
	enterElse_stmt?: (ctx: Else_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.else_stmt`.
	 * @param ctx the parse tree
	 */
	exitElse_stmt?: (ctx: Else_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.while_expr`.
	 * @param ctx the parse tree
	 */
	enterWhile_expr?: (ctx: While_exprContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.while_expr`.
	 * @param ctx the parse tree
	 */
	exitWhile_expr?: (ctx: While_exprContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.while_stmt`.
	 * @param ctx the parse tree
	 */
	enterWhile_stmt?: (ctx: While_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.while_stmt`.
	 * @param ctx the parse tree
	 */
	exitWhile_stmt?: (ctx: While_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.for_id`.
	 * @param ctx the parse tree
	 */
	enterFor_id?: (ctx: For_idContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.for_id`.
	 * @param ctx the parse tree
	 */
	exitFor_id?: (ctx: For_idContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.for_expr1`.
	 * @param ctx the parse tree
	 */
	enterFor_expr1?: (ctx: For_expr1Context) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.for_expr1`.
	 * @param ctx the parse tree
	 */
	exitFor_expr1?: (ctx: For_expr1Context) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.for_expr2`.
	 * @param ctx the parse tree
	 */
	enterFor_expr2?: (ctx: For_expr2Context) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.for_expr2`.
	 * @param ctx the parse tree
	 */
	exitFor_expr2?: (ctx: For_expr2Context) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.for_stmt`.
	 * @param ctx the parse tree
	 */
	enterFor_stmt?: (ctx: For_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.for_stmt`.
	 * @param ctx the parse tree
	 */
	exitFor_stmt?: (ctx: For_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.rel_op`.
	 * @param ctx the parse tree
	 */
	enterRel_op?: (ctx: Rel_opContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.rel_op`.
	 * @param ctx the parse tree
	 */
	exitRel_op?: (ctx: Rel_opContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.eq_op`.
	 * @param ctx the parse tree
	 */
	enterEq_op?: (ctx: Eq_opContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.eq_op`.
	 * @param ctx the parse tree
	 */
	exitEq_op?: (ctx: Eq_opContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.addsub_op`.
	 * @param ctx the parse tree
	 */
	enterAddsub_op?: (ctx: Addsub_opContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.addsub_op`.
	 * @param ctx the parse tree
	 */
	exitAddsub_op?: (ctx: Addsub_opContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.muldiv_op`.
	 * @param ctx the parse tree
	 */
	enterMuldiv_op?: (ctx: Muldiv_opContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.muldiv_op`.
	 * @param ctx the parse tree
	 */
	exitMuldiv_op?: (ctx: Muldiv_opContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.or_op`.
	 * @param ctx the parse tree
	 */
	enterOr_op?: (ctx: Or_opContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.or_op`.
	 * @param ctx the parse tree
	 */
	exitOr_op?: (ctx: Or_opContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.and_op`.
	 * @param ctx the parse tree
	 */
	enterAnd_op?: (ctx: And_opContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.and_op`.
	 * @param ctx the parse tree
	 */
	exitAnd_op?: (ctx: And_opContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.exp1`.
	 * @param ctx the parse tree
	 */
	enterExp1?: (ctx: Exp1Context) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.exp1`.
	 * @param ctx the parse tree
	 */
	exitExp1?: (ctx: Exp1Context) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.exp2`.
	 * @param ctx the parse tree
	 */
	enterExp2?: (ctx: Exp2Context) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.exp2`.
	 * @param ctx the parse tree
	 */
	exitExp2?: (ctx: Exp2Context) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.exp3`.
	 * @param ctx the parse tree
	 */
	enterExp3?: (ctx: Exp3Context) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.exp3`.
	 * @param ctx the parse tree
	 */
	exitExp3?: (ctx: Exp3Context) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.exp4`.
	 * @param ctx the parse tree
	 */
	enterExp4?: (ctx: Exp4Context) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.exp4`.
	 * @param ctx the parse tree
	 */
	exitExp4?: (ctx: Exp4Context) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.exp5`.
	 * @param ctx the parse tree
	 */
	enterExp5?: (ctx: Exp5Context) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.exp5`.
	 * @param ctx the parse tree
	 */
	exitExp5?: (ctx: Exp5Context) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.exp6`.
	 * @param ctx the parse tree
	 */
	enterExp6?: (ctx: Exp6Context) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.exp6`.
	 * @param ctx the parse tree
	 */
	exitExp6?: (ctx: Exp6Context) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.func_call`.
	 * @param ctx the parse tree
	 */
	enterFunc_call?: (ctx: Func_callContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.func_call`.
	 * @param ctx the parse tree
	 */
	exitFunc_call?: (ctx: Func_callContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.func_call_args`.
	 * @param ctx the parse tree
	 */
	enterFunc_call_args?: (ctx: Func_call_argsContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.func_call_args`.
	 * @param ctx the parse tree
	 */
	exitFunc_call_args?: (ctx: Func_call_argsContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.input_stmt`.
	 * @param ctx the parse tree
	 */
	enterInput_stmt?: (ctx: Input_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.input_stmt`.
	 * @param ctx the parse tree
	 */
	exitInput_stmt?: (ctx: Input_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.input_args`.
	 * @param ctx the parse tree
	 */
	enterInput_args?: (ctx: Input_argsContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.input_args`.
	 * @param ctx the parse tree
	 */
	exitInput_args?: (ctx: Input_argsContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.output_stmt`.
	 * @param ctx the parse tree
	 */
	enterOutput_stmt?: (ctx: Output_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.output_stmt`.
	 * @param ctx the parse tree
	 */
	exitOutput_stmt?: (ctx: Output_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.output_arg`.
	 * @param ctx the parse tree
	 */
	enterOutput_arg?: (ctx: Output_argContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.output_arg`.
	 * @param ctx the parse tree
	 */
	exitOutput_arg?: (ctx: Output_argContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.output_args`.
	 * @param ctx the parse tree
	 */
	enterOutput_args?: (ctx: Output_argsContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.output_args`.
	 * @param ctx the parse tree
	 */
	exitOutput_args?: (ctx: Output_argsContext) => void;

	/**
	 * Enter a parse tree produced by `ParPlusPlusParser.main_function`.
	 * @param ctx the parse tree
	 */
	enterMain_function?: (ctx: Main_functionContext) => void;
	/**
	 * Exit a parse tree produced by `ParPlusPlusParser.main_function`.
	 * @param ctx the parse tree
	 */
	exitMain_function?: (ctx: Main_functionContext) => void;
}

