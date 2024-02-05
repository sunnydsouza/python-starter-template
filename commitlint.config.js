module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'chore', 'ci', 'refactor', 'test', 'perf']],
      'scope-enum': [2, 'always', ['ui', 'backend', 'api', 'deployment']],
      'header-max-length': [2, 'always', 100]
    }
  };
  