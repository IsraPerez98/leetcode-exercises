/**
 * Evaluates an AND expression.
 * 
 * @param {string} expression - The expression to evaluate.
 * @returns {string} 't' if all values are 't', otherwise 'f'.
 */
function expressionAnd(expression: string) {
    for(const value of expression) {
        if(value === 'f') return 'f';
    }
    return 't';
}

/**
 * Evaluates an OR expression.
 * 
 * @param {string} expression - The expression to evaluate.
 * @returns {string} 't' if any value is 't', otherwise 'f'.
 */
function expressionOr(expression: string) {
    for(const value of expression) {
        if(value === 't') return 't';
    }

    return 'f';
}

/**
 * Finds the index of the closing parenthesis in the expression.
 * 
 * @param {string} expression - The expression to search.
 * @param {number} [limit] - The limit up to which to search.
 * @returns {number} The index of the closing parenthesis, or -1 if not found.
 */
function findClosingParenthesis(expression: string, limit?: number) {
    limit = limit || expression.length;

    for(let i=0;i<limit;i++) {
        if(expression[i] === ')') return i;
    }

    return -1;
}

/**
 * Finds the index of the opening parenthesis in the expression.
 * 
 * @param {string} expression - The expression to search.
 * @param {number} [start] - The starting index from which to search backwards.
 * @returns {number} The index of the opening parenthesis, or -1 if not found.
 */
function findOpeningParenthesis(expression: string, start?: number) {
    start = start || expression.length-1;

    for(let i=start;i>=0;i--) {
        if(expression[i] === '(') return i;
    }

    return -1;
}

/**
 * Evaluates a boolean expression.
 * 
 * @param {string} expression - The expression to evaluate.
 * @returns {string} The result of the evaluation ('t' or 'f').
 * @throws {Error} If the expression is malformed.
 */
function evaluateExpresion(expression: string) {
    if(expression.length === 1) return expression;

    const closingParenthesisIndex = findClosingParenthesis(expression);

    const openingParenthesisIndex = findOpeningParenthesis(expression, closingParenthesisIndex);

    const operator = expression[openingParenthesisIndex-1];

    const subExpression = expression.substring(openingParenthesisIndex +1, closingParenthesisIndex);

    let result = '';

    if(operator === '!') {
        result = evaluateExpresion(subExpression) === 't' ? 'f': 't';
    } else if(operator === '&') {
        result = expressionAnd(subExpression);
    } else if(operator === '|') {
        result = expressionOr(subExpression);
    }

    expression = expression.substring(0, openingParenthesisIndex-1) + result + expression.substring(closingParenthesisIndex+1);

    return evaluateExpresion(expression);
}

/**
 * Parses and evaluates a boolean expression.
 * 
 * @param {string} expression - The boolean expression to parse.
 * @returns {boolean} The result of the evaluation.
 */
function parseBoolExpr(expression: string): boolean {
    return evaluateExpresion(expression) === 't';
};