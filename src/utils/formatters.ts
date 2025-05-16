export function formatSummary(summary: any): string {
    const { tasks, plans, blockers } = summary;
    let formatted = 'Daily Summary:\n\n';

    if (tasks.length > 0) {
        formatted += 'Tasks Completed:\n';
        tasks.forEach((task: string) => {
            formatted += `- ${task}\n`;
        });
    } else {
        formatted += 'No tasks completed today.\n';
    }

    if (plans.length > 0) {
        formatted += '\nPlans for Tomorrow:\n';
        plans.forEach((plan: string) => {
            formatted += `- ${plan}\n`;
        });
    } else {
        formatted += 'No plans for tomorrow.\n';
    }

    if (blockers.length > 0) {
        formatted += '\nBlockers:\n';
        blockers.forEach((blocker: string) => {
            formatted += `- ${blocker}\n`;
        });
    } else {
        formatted += 'No blockers reported.\n';
    }

    return formatted;
}