import { filterUsers, User } from '../filter'; // Import de la logique de filtrage et de l'interface User.

describe('filterUsers', () => {
    // Jeu de données de test.
    const users: User[] = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'John', age: 40 },
    ];

    it('should filter users by name', () => {
        // Filtre les utilisateurs dont le nom est "John".
        const result = filterUsers(users, { name: 'John' });
        // Vérifie que le résultat correspond aux attentes.
        expect(result).toEqual([
            { name: 'John', age: 25 },
            { name: 'John', age: 40 },
        ]);
    });

    it('should filter users by name and age', () => {
        // Filtre les utilisateurs dont le nom est "John" et l'âge est 25.
        const result = filterUsers(users, { name: 'John', age: 25 });
        // Vérifie que le résultat contient uniquement l'utilisateur correspondant.
        expect(result).toEqual([{ name: 'John', age: 25 }]);
    });

    it('should return an empty array if no match', () => {
        // Filtre les utilisateurs avec une condition qui ne correspond à aucun utilisateur.
        const result = filterUsers(users, { name: 'Alice' });
        // Vérifie que le résultat est un tableau vide.
        expect(result).toEqual([]);
    });
});
