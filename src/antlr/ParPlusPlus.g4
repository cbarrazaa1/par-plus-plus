grammar ParPlusPlus;

/*
  Parser Rules
*/
program : 'program' ID ';' vars function* main_function
  ;

vars : ( 'var' ( type var_id_decl var_ids_decl ';' )+ )?
  ;

var_id_decl : ID ( '[' INT_VAL ']' ( '[' INT_VAL ']')? )?
  ;

var_ids_decl : ( ',' var_id_decl )*
  ;

var_id : ID ( '[' expr ']' ( '[' expr ']' )? )?
  ;

var_ids : ( ',' var_id )*
  ;

type : 'int' | 'float' | 'char'
  ;

function : ( type | 'void' ) 'module' ID '(' func_params ')' vars block
  ;

func_params : ( type ID ( ',' type ID )* )?
  ;

block : '{' statement* '}'
  ;

statement : assignment
  | return_stmt
  | if_stmt
  | while_stmt
  | for_stmt
  | func_call
  | input_stmt
  | output_stmt
  ;

assignment : var_id '=' expr ';'
  ;

return_stmt : 'return' '(' expr ')' ';'
  ;

if_expr : 'if' '(' expr ')' 'then'
  ;

if_stmt : if_expr block else_stmt
  ;

else_stmt : ( 'else' block )?
  ;

while_expr : 'while' '(' expr ')' 'do'
  ;

while_stmt : while_expr block
  ;

for_id : 'for' var_id
  ;

for_expr1 : '=' expr 'to'
  ;

for_expr2 : expr 'do'
  ;

for_stmt : for_id for_expr1 for_expr2 block
  ;

rel_op : '>' | '<' | '<=' | '>='
  ;

eq_op : '==' | '!='
  ;

addsub_op : '+' | '-'
  ;

muldiv_op : '*' | '/'
  ;

or_op : '|'
  ;

and_op : '&'
  ;

expr : exp1 ( or_op expr )*
  ;

exp1 : exp2 ( and_op exp1 )*
  ;

exp2 : exp3 ( eq_op exp3 )?
  ;

exp3 : exp4 ( rel_op exp4 )?
  ;

exp4 : exp5 ( addsub_op exp4 )*
  ;

exp5 : exp6 ( muldiv_op exp5 )*
  ;

exp6 : '(' expr ')'
  | var_id
  | func_call
  | INT_VAL
  | FLOAT_VAL
  | CHAR_VAL
  ;

func_call : ID '(' ( func_call_args )? ')' ( ';' )?
  ;

func_call_args : expr ( ',' expr )*
  ;

input_stmt : 'read' '(' input_args ')' ';'
  ;

input_args : var_id ( ',' var_id )*
  ;

output_stmt : 'write' '(' output_args ')' ';'
  ;

output_arg : ( expr | STR_VAL )
  ;

output_args : output_arg ( ',' output_arg )*
  ;

main_function : 'main()' block
  ;

/*
  Lexer Rules
*/
WHITESPACE : [ \t\n\r] -> skip
  ;

ID : [a-zA-Z][a-zA-Z0-9]*
  ;

FLOAT_VAL : [0-9]* '.' [0-9]+
  ;

INT_VAL : [0-9]+
  ;

CHAR_VAL : '\'' [a-zA-Z] '\''
  ;

STR_VAL : '"' .*? '"'
  ;