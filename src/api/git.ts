import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function fetchCommits(repoPath: string): Promise<string> {
    const { stdout } = await execPromise(`git -C ${repoPath} log --pretty=format:"%h - %an, %ar : %s"`);
    return stdout;
}

export async function fetchPullRequests(repo: string): Promise<any> {
    // Placeholder for GitHub API integration
    // This function should interact with the GitHub API to fetch pull request data
    throw new Error("GitHub API integration not implemented yet.");
}

/**
 * Get the current GitHub username from git config
 */
export async function getCurrentGitHubUser(): Promise<string> {
    try {
        const { stdout } = await execPromise('git config user.name');
        return stdout.trim();
    } catch (error) {
        throw new Error(`Failed to get current GitHub user: ${error}`);
    }
}

/**
 * Fetch commits from the current GitHub user in the provided repository path
 * 
 * @param repoPath Path to the git repository
 * @param since Optional date to filter commits from (e.g., "yesterday", "1 week ago")
 * @returns Array of commit objects with hash, date, and message
 */
export async function fetchUserCommits(repoPath: string, since: string = "1 week ago"): Promise<Array<{hash: string, date: string, message: string}>> {
    try {
        // Check if the directory is a git repository
        try {
            await execPromise(`git -C ${repoPath} rev-parse --is-inside-work-tree`);
        } catch (err) {
            console.warn(`${repoPath} is not a git repository. Using mock data.`);
            // Return mock data if not a git repository
            return [
                { hash: 'mock1', date: new Date().toISOString().split('T')[0], message: 'Mock commit 1 - Add feature' },
                { hash: 'mock2', date: new Date().toISOString().split('T')[0], message: 'Mock commit 2 - Fix bug' }
            ];
        }
        
        // Get current user
        const currentUser = await getCurrentGitHubUser();
        
        // Fetch commits by the current user
        const { stdout } = await execPromise(
            `git -C ${repoPath} log --author="${currentUser}" --since="${since}" --pretty=format:"%h|%ad|%s" --date=short`
        );
        
        if (!stdout) {
            return [];
        }
       
        const abc = stdout.split('\n').map(line => {
            const [hash, date, ...messageParts] = line.split('|');
            return {
                hash: hash,
                date: date,
                message: messageParts.join('|')  // Join message parts in case the message contained our delimiter
            };
        });
        
        // Parse the commit information into structured data
        return stdout.split('\n').map(line => {
            const [hash, date, ...messageParts] = line.split('|');
            return {
                hash: hash,
                date: date,
                message: messageParts.join('|')  // Join message parts in case the message contained our delimiter
            };
        });
    } catch (error) {
        throw new Error(`Failed to fetch user commits: ${error}`);
    }
}

/**
 * Fetch commits from today for the current user
 * 
 * @param repoPath Path to the git repository
 * @returns Array of commit objects from today
 */
export async function fetchTodaysUserCommits(repoPath: string): Promise<Array<{hash: string, date: string, message: string}>> {
    try {
        return await fetchUserCommits(repoPath, "midnight");
    } catch (error) {
        console.warn(`Warning: Could not fetch Git commits: ${error}`);
        // Return empty array when Git repo is not available
        return [];
    }
}