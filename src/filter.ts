// Définition de l'interface représentant un utilisateur avec un nom et un âge.
export interface User {
    name: string;
    age: number;
}

// Fonction pour filtrer une liste d'utilisateurs en fonction de conditions spécifiques.
// `conditions` est un objet partiel de User, permettant de filtrer par un ou plusieurs champs.
export function filterUsers(users: User[], conditions: Partial<User>): User[] {
    return users.filter(user => 
        // Vérifie que toutes les conditions spécifiées sont remplies pour chaque utilisateur.
        Object.entries(conditions).every(([key, value]) =>
            user[key as keyof User] === value
        )
    );
}
