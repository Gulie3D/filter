import { logQuery } from '../log'; // Import de la fonction de log.

describe('logQuery', () => {
    it('should log the correct query string', () => {
        // Mock la console pour capturer les logs.
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        // Appelle logQuery avec des conditions.
        logQuery({ name: 'John', age: 25 });

        // Vérifie que la bonne requête est affichée.
        expect(consoleSpy).toHaveBeenCalledWith('Filter: WHERE "name" = "John" AND "age" = "25"');

        // Restaure le comportement par défaut de console.log.
        consoleSpy.mockRestore();
    });
});
