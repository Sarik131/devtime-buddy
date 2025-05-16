export class Generator {
    private insights: any;

    constructor(insights: any) {
        this.insights = insights;
    }

    public generateSummary(): string {
        const summary = `
        Daily Summary:
        --------------------
        Today's Task: ${this.insights.tasksCompleted}
        Tomorrow's Plan: ${this.insights.plansForTomorrow}
        Blockers: ${this.insights.blockers}
        `;
        return summary;
    }
}