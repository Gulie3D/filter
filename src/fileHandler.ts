import fs from 'fs';
import { User } from './filter'; // Assurez-vous que l'import de User est correct

// Charge les utilisateurs depuis un fichier JSON
export function loadUsersFromFile(filePath: string): User[] {
    const data = fs.readFileSync(filePath, 'utf-8'); // Lit le contenu du fichier
    return JSON.parse(data) as User[]; // Convertit en tableau d'objets User
}

// Sauvegarde les utilisateurs dans un fichier JSON
export function saveUsersToFile(filePath: string, users: User[]): void {
    const data = JSON.stringify(users, null, 2); // Convertit en JSON formaté
    fs.writeFileSync(filePath, data, 'utf-8'); // Écrit les données dans le fichier
}
