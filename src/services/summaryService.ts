import { Analyzer } from "../core/analyzer";
import { Generator } from "../core/generator";
import { Summary } from "../models/summary";
import { GitService } from "./gitService";

export class SummaryService {
  private analyzer: Analyzer;
  private generator: Generator;
  private gitService: GitService;

  constructor(gitService: GitService) {
    this.gitService = gitService;
    this.analyzer = new Analyzer(null); // Initialize with null, will be updated in methods
    this.generator = new Generator(null); // Initialize with null, will be updated in methods
  }

  public async fetchGitData(repoPath: string = ".", since?: string) {
    const commits = await this.gitService.getTodaysUserCommits(repoPath);
    return {
      commits,
      repoPath,
    };
  }

  public async generateSummary(
    gitData: any,
    plansForTomorrow?: string[],
    blockers?: string[]
  ): Promise<string> {
    this.analyzer = new Analyzer(gitData);
    const insights = this.analyzer.analyze();
    this.generator = new Generator(insights);
    return this.generator.generateSummary();
  }

  public async generateDailySummary(gitData: any): Promise<Summary> {
    this.analyzer = new Analyzer(gitData);
    const insights = this.analyzer.analyze();
    this.generator = new Generator(insights);
    const summaryText = this.generator.generateSummary();
    return { content: summaryText } as Summary;
  }
}
