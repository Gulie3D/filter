import fs from 'fs';
import path from 'path';
import { loadUsersFromFile, saveUsersToFile } from '../fileHandler';
import { User } from '../filter'; // Assurez-vous que l'import de User est correct

describe('fileHandler (using real files)', () => {
    const tempFilePath = path.join(__dirname, 'tempUsers.json'); // Chemin vers un fichier temporaire
    const mockUsers: User[] = [{ name: 'John', age: 25 }]; // Exemple d'utilisateur

    afterEach(() => {
        // Supprime le fichier temporaire après chaque test pour éviter des conflits
        if (fs.existsSync(tempFilePath)) {
            fs.unlinkSync(tempFilePath);
        }
    });

    it('should load users from file', () => {
        // Écrit un fichier JSON temporaire avec des utilisateurs fictifs
        fs.writeFileSync(tempFilePath, JSON.stringify(mockUsers, null, 2), 'utf-8');

        // Charge les utilisateurs depuis le fichier temporaire
        const result = loadUsersFromFile(tempFilePath);

        // Vérifie que les utilisateurs chargés correspondent aux utilisateurs écrits
        expect(result).toEqual(mockUsers);
    });

    it('should save users to file', () => {
        // Sauvegarde les utilisateurs dans le fichier temporaire
        saveUsersToFile(tempFilePath, mockUsers);

        // Lit le fichier temporaire
        const fileContent = fs.readFileSync(tempFilePath, 'utf-8');

        // Vérifie que le contenu du fichier correspond aux utilisateurs
        expect(JSON.parse(fileContent)).toEqual(mockUsers);
    });
});
