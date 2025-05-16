# DevTime Buddy

DevTime Buddy is an AI-powered daily developer summary tool that automates the creation of daily coding summaries based on Git activity. This tool helps developers keep track of their progress, tasks, and blockers by generating structured summaries from their Git commits and pull requests.

## Features

- Fetches commit and pull request data from Git or GitHub API.
- Analyzes Git activity to extract meaningful insights.
- Generates structured daily summaries including tasks, plans, and blockers.
- Provides a clean and shareable format for summaries.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/devtime-buddy.git
   cd devtime-buddy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your configuration settings.

## Configuration

Before running DevTime Buddy, you need to update the following variables in `src/app.ts`:

1. **Repository Path**: Update the `repoPath` variable to point to your Git repository:
   ```typescript
   const repoPath = '/path/to/your/git/repository';
   ```

2. **Plans for Tomorrow**: Add your planned tasks for tomorrow:
   ```typescript
   const plansForTomorrow = [
     'Complete feature X implementation',
     'Review PR #123',
     'Start refactoring Y module'
   ];
   ```

3. **Blockers**: Add any current blockers or challenges:
   ```typescript
   const blockers = [
     'Waiting for API documentation from team Z',
     'CI pipeline issue needs to be resolved'
   ];
   ```

## Usage

To run the application, use the following command:
```bash
npm start
```

The application will generate a daily summary based on your Git activity, plans for tomorrow, and blockers.

## Testing

To run the tests, use:
```bash
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.