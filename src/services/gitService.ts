import { exec } from 'child_process';
import { promisify } from 'util';
import { fetchUserCommits, fetchTodaysUserCommits, getCurrentGitHubUser } from '../api/git';

const execPromise = promisify(exec);

export class GitService {
    async fetchCommits(repoPath: string): Promise<string> {
        const { stdout, stderr } = await execPromise(`git -C ${repoPath} log --oneline`);
        if (stderr) {
            throw new Error(`Error fetching commits: ${stderr}`);
        }
        return stdout;
    }

    async fetchBranches(repoPath: string): Promise<string> {
        const { stdout, stderr } = await execPromise(`git -C ${repoPath} branch`);
        if (stderr) {
            throw new Error(`Error fetching branches: ${stderr}`);
        }
        return stdout;
    }

    async fetchStatus(repoPath: string): Promise<string> {
        const { stdout, stderr } = await execPromise(`git -C ${repoPath} status`);
        if (stderr) {
            throw new Error(`Error fetching status: ${stderr}`);
        }
        return stdout;
    }
    
    /**
     * Get the current GitHub username
     */
    async getCurrentUser(): Promise<string> {
        return getCurrentGitHubUser();
    }
    
    /**
     * Fetch commits from the current user within a specific timeframe
     * 
     * @param repoPath Path to the git repository
     * @param since Optional timeframe (e.g., "yesterday", "1 week ago")
     * @returns Array of commit objects
     */
    async getUserCommits(repoPath: string, since?: string): Promise<Array<{hash: string, date: string, message: string}>> {
        return fetchUserCommits(repoPath, since);
    }
    
    /**
     * Fetch today's commits from the current user
     * 
     * @param repoPath Path to the git repository
     * @returns Array of today's commit objects
     */
    async getTodaysUserCommits(repoPath: string): Promise<Array<{hash: string, date: string, message: string}>> {
        return fetchTodaysUserCommits(repoPath);
    }
}