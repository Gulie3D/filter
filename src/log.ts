// Fonction pour afficher une requête SQL-like dans la console, correspondant aux conditions de filtrage.
export function logQuery(conditions: Partial<Record<string, any>>): void {
    // Convertit les conditions en une chaîne de requête de type "WHERE key = value".
    const query = Object.entries(conditions)
        .map(([key, value]) => `"${key}" = "${value}"`) // Formatte chaque condition.
        .join(" AND "); // Combine les conditions avec "AND".
    
    // Affiche la requête dans la console.
    console.log(`Filter: WHERE ${query}`);
}
