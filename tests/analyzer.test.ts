import { Analyzer } from '../src/core/analyzer';

describe('Analyzer', () => {
    let analyzer: Analyzer;

    beforeEach(() => {
        analyzer = new Analyzer();
    });

    it('should correctly analyze commit data', () => {
        const commitData = [
            { message: 'Fix bug in feature X', author: 'dev@example.com', date: '2023-10-01' },
            { message: 'Add new feature Y', author: 'dev@example.com', date: '2023-10-02' },
        ];

        const result = analyzer.analyze(commitData);
        expect(result).toEqual({
            tasks: ['Fix bug in feature X', 'Add new feature Y'],
            plans: [],
            blockers: [],
        });
    });

    it('should handle empty commit data', () => {
        const commitData: any[] = [];
        const result = analyzer.analyze(commitData);
        expect(result).toEqual({
            tasks: [],
            plans: [],
            blockers: [],
        });
    });

    // Additional tests can be added here
});