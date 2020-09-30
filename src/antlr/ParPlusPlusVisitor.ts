// Generated from src/antlr/ParPlusPlus.g4 by ANTLR 4.7.3-SNAPSHOT
// @ts-nocheck

import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
import { If_stmtContext } from "./ParPlusPlusParser";
import { Else_stmtContext } from "./ParPlusPlusParser";
import { While_stmtContext } from "./ParPlusPlusParser";
import { For_stmtContext } from "./ParPlusPlusParser";
import { Rel_opContext } from "./ParPlusPlusParser";
import { Eq_opContext } from "./ParPlusPlusParser";
import { Addsub_opContext } from "./ParPlusPlusParser";
import { Muldiv_opContext } from "./ParPlusPlusParser";
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
import { Output_argsContext } from "./ParPlusPlusParser";
import { Main_functionContext } from "./ParPlusPlusParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ParPlusPlusParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ParPlusPlusVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.vars`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVars?: (ctx: VarsContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.var_id_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_id_decl?: (ctx: Var_id_declContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.var_ids_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_ids_decl?: (ctx: Var_ids_declContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.var_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_id?: (ctx: Var_idContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.var_ids`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_ids?: (ctx: Var_idsContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.func_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_params?: (ctx: Func_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.return_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_stmt?: (ctx: Return_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.if_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_stmt?: (ctx: If_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.else_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_stmt?: (ctx: Else_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.while_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_stmt?: (ctx: While_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.for_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_stmt?: (ctx: For_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.rel_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRel_op?: (ctx: Rel_opContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.eq_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEq_op?: (ctx: Eq_opContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.addsub_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddsub_op?: (ctx: Addsub_opContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.muldiv_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMuldiv_op?: (ctx: Muldiv_opContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.exp1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp1?: (ctx: Exp1Context) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.exp2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp2?: (ctx: Exp2Context) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.exp3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp3?: (ctx: Exp3Context) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.exp4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp4?: (ctx: Exp4Context) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.exp5`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp5?: (ctx: Exp5Context) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.exp6`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp6?: (ctx: Exp6Context) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.func_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_call?: (ctx: Func_callContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.func_call_args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_call_args?: (ctx: Func_call_argsContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.input_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput_stmt?: (ctx: Input_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.input_args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput_args?: (ctx: Input_argsContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.output_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput_stmt?: (ctx: Output_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.output_args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput_args?: (ctx: Output_argsContext) => Result;

	/**
	 * Visit a parse tree produced by `ParPlusPlusParser.main_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMain_function?: (ctx: Main_functionContext) => Result;
}

