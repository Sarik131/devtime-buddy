import { Summary } from '../models/summary';
import { GitData } from './git';

export function generateSummary(gitData: GitData): Summary {
    const summary: Summary = {
        tasks: [],
        plans: [],
        blockers: []
    };

    // Process gitData to populate summary
    // Example logic to extract tasks, plans, and blockers from gitData
    gitData.commits.forEach(commit => {
        if (commit.message.includes('task')) {
            summary.tasks.push(commit.message);
        } else if (commit.message.includes('plan')) {
            summary.plans.push(commit.message);
        } else if (commit.message.includes('blocker')) {
            summary.blockers.push(commit.message);
        }
    });

    return summary;
}