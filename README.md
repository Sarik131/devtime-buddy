# DevTime Buddy

DevTime Buddy is a daily developer summary tool that automates the creation of coding summaries based on Git activity. This tool helps developers keep track of their progress, tasks, and blockers by generating structured summaries from their Git commits.

## Features

- Automatically fetches commit data from Git repositories.
- Identifies your daily commits using Git's native API.
- Analyzes Git activity to extract insights and organize them into categories.
- Generates structured daily summaries including tasks completed, plans for tomorrow, and blockers.
- Provides a clean and readable format for summaries.

## Project Structure

```
devtime-buddy/
├── config/              # Configuration files
│   └── config.ts        # App configuration
├── src/
│   ├── api/             # API integration layer
│   │   ├── git.ts       # Git API methods
│   │   └── summary.ts   # Summary API methods
│   ├── cli/             # CLI interface
│   │   └── prompt.ts    # Command line prompts
│   ├── core/            # Core application logic
│   │   ├── analyzer.ts  # Git data analysis
│   │   └── generator.ts # Summary generation
│   ├── models/          # Data models
│   │   └── summary.ts   # Summary data structure
│   ├── services/        # Service layer
│   │   ├── gitService.ts    # Git service implementation
│   │   └── summaryService.ts # Summary service
│   ├── utils/           # Utility functions
│   │   ├── dateUtils.ts # Date handling utilities
│   │   └── formatters.ts # Output formatting
│   └── app.ts           # Application entry point
└── tests/               # Test files
    ├── analyzer.test.ts
    └── generator.test.ts
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sarik131/devtime-buddy.git
   cd devtime-buddy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following settings:
   ```
   GITHUB_TOKEN=your_github_token
   API_URL=https://api.github.com
   SUMMARY_OUTPUT_FORMAT=text
   ```

## Configuration

Before running DevTime Buddy, you need to modify the following in the `src/app.ts` file:

1. **Repository Path**: Update the `repoPath` variable to point to your Git repository:
   ```typescript
   const repoPath = '/path/to/your/git/repository';
   ```

2. **Plans for Tomorrow**: Add your planned tasks for tomorrow (optional):
   ```typescript
   const plansForTomorrow = [
     'Complete feature X implementation',
     'Review PR #123',
     'Start refactoring Y module'
   ];
   ```

3. **Blockers**: Add any current blockers or challenges (optional):
   ```typescript
   const blockers = [
     'Waiting for API documentation from team Z',
     'CI pipeline issue needs to be resolved'
   ];
   ```

## Usage

Run the application with:
```bash
npm start
```

The application will:
1. Check your Git repository for commits made today
2. Analyze the commit messages and categorize them
3. Generate a summary with:
   - Tasks completed (based on your commits)
   - Plans for tomorrow (specified in configuration)
   - Blockers (specified in configuration)

Example output:
```
Daily Summary:
--------------------
Today's Task: Implemented login feature, Fixed navigation bug, Updated user profile
Tomorrow's Plan: Complete user settings page, Start API integration
Blockers: Waiting for design mockups
```

## Advanced Usage

### Using Environment Variables

You can customize the behavior using environment variables in your `.env` file:

```
# GitHub API authentication (required for GitHub API features)
GITHUB_TOKEN=your_github_token

# API URL (defaults to GitHub API)
API_URL=https://api.github.com

# Summary output format (text, json, markdown)
SUMMARY_OUTPUT_FORMAT=text
```

### Customizing the Output Format

Edit the `formatters.ts` utility to customize how your summary is formatted. The current implementation provides a simple text-based format, but you can modify it to output JSON, HTML, or other formats.

## Testing

Run the test suite with:
```bash
npm test
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Thanks to the Git community for providing robust APIs for repository interaction.
- Built with TypeScript and Node.js.