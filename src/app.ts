import { GitService } from './services/gitService';
import { SummaryService } from './services/summaryService';

const gitService = new GitService();
const summaryService = new SummaryService(gitService);

async function main() {
    try {
        // Get current working directory - replace with actual repo path if needed
        const repoPath = '/home/sarik/Projects/devtime-buddy';
        const plansForTomorrow = [] as string[];
        const blockers = [] as string[];

        // Fetch git data first using the method from SummaryService
        const gitData = await summaryService.fetchGitData(repoPath);
        
        // Generate a summary using the fetched data
        const summary = await summaryService.generateSummary(gitData, plansForTomorrow, blockers);
        console.log(summary);
    } catch (error) {
        console.error('Error generating summary:', error);
    }
}

main();