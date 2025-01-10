import { filterUsers } from './filter'; // Import de la fonction de filtrage.
import { logQuery } from './log'; // Import du système de log.
import { loadUsersFromFile, saveUsersToFile } from './fileHandler'; // Import des fonctions de gestion de fichiers.

// Liste d'utilisateurs en mémoire pour les tests.
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'John', age: 40 },
];

// --- Exemple de filtrage en mémoire ---
const conditions = { name: 'John', age: 25 }; // Conditions de filtrage.
logQuery(conditions); // Affiche les conditions sous forme de requête dans la console.
const filteredUsers = filterUsers(users, conditions); // Applique le filtre aux utilisateurs en mémoire.
console.log('Filtered users:', filteredUsers); // Affiche le résultat.

// --- Exemple de filtrage depuis un fichier ---
const filePath = './users.json'; // Chemin du fichier JSON contenant les utilisateurs.
const usersFromFile = loadUsersFromFile(filePath); // Charge les utilisateurs depuis le fichier.
logQuery(conditions); // Affiche les conditions sous forme de requête.
const filteredFromFile = filterUsers(usersFromFile, conditions); // Applique le filtre aux utilisateurs du fichier.
console.log('Filtered users from file:', filteredFromFile); // Affiche le résultat.

// Sauvegarder les utilisateurs filtrés dans un nouveau fichier JSON.
saveUsersToFile('./filteredUsers.json', filteredFromFile);
