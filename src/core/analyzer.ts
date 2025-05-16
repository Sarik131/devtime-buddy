// src/core/analyzer.ts

export class Analyzer {
  private gitData: any;
  private plansForTomorrow: string[];
  private blockers: string[];

  constructor(gitData: any, plansForTomorrow = [], blockers = []) {
    this.gitData = gitData;
    this.plansForTomorrow = plansForTomorrow;
    this.blockers = blockers;
  }

  public analyze(): any {
    // Process the gitData to extract insights
    const insights = {
      tasksCompleted: this.extractTasksCompleted(),
      blockers: this.extractBlockers(),
      plansForTomorrow: this.extractPlansForTomorrow(), // Renamed to match what the generator expects
    };

    return insights;
  }

  private extractTasksCompleted(): string[] {
    // Extract tasks that were completed from the commit messages
    if (
      !this.gitData ||
      !this.gitData.commits ||
      !Array.isArray(this.gitData.commits)
    ) {
      return ["No tasks completed today"];
    }

    return this.gitData.commits.map((commit: any) => commit.message);
  }

  private extractBlockers(): string[] {
    // Logic to identify blockers from gitData
    if (!this.blockers?.length) {
      return ["No blockers"];
    }
    return this.blockers;
  }

  private extractPlansForTomorrow(): string[] {
    if (!this.plansForTomorrow?.length) return ["Continue working on ongoing tasks"];

    return this.plansForTomorrow;
  }
}
