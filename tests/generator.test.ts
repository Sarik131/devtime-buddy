Sure, here's the content for the file `/devtime-buddy/devtime-buddy/tests/generator.test.ts`:

import { Generator } from '../src/core/generator';
import { Summary } from '../src/models/summary';

describe('Generator', () => {
    let generator: Generator;

    beforeEach(() => {
        generator = new Generator();
    });

    it('should format summary correctly', () => {
        const summaryData: Summary = {
            tasks: ['Task 1', 'Task 2'],
            plans: ['Plan 1', 'Plan 2'],
            blockers: ['Blocker 1']
        };

        const formattedSummary = generator.formatSummary(summaryData);
        expect(formattedSummary).toContain('Tasks:');
        expect(formattedSummary).toContain('Task 1');
        expect(formattedSummary).toContain('Plans:');
        expect(formattedSummary).toContain('Plan 1');
        expect(formattedSummary).toContain('Blockers:');
        expect(formattedSummary).toContain('Blocker 1');
    });

    it('should handle empty summary', () => {
        const summaryData: Summary = {
            tasks: [],
            plans: [],
            blockers: []
        };

        const formattedSummary = generator.formatSummary(summaryData);
        expect(formattedSummary).toContain('No tasks, plans, or blockers for today.');
    });
});