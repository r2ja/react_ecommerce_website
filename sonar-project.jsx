const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl: 'https://your-sonarqube-server.com',
    token: 'your-sonarqube-token',
    options: {
      'sonar.sources': 'src',
      'sonar.tests': 'src',
      'sonar.test.inclusions': '**/*.test.js,**/*.test.jsx,**/*.test.ts,**/*.test.tsx',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'test-report.xml',
      'sonar.sourceEncoding': 'UTF-8',
    },
  },
  () => process.exit()
);