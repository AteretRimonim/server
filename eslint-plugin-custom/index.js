module.exports = {
    rules: {
      'no-hebrew': {
        create: function (context) {
          return {
            Program(node) {
              const sourceCode = context.getSourceCode();
              const text = sourceCode.getText(node);
  
              if (/[א-ת]/.test(text)) {
                context.report({
                  node,
                  message: 'hebrew is not allowed in the code!',
                });
              }
            },
          };
        },
      },
    },
  };
  