// On commence par modifier les noms des variables pour qu'ils soient plus explicites

// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
let article1 = 10
let article2 = 20
let article3 = 50      // "50" on change la chaine de caractère en nombre

// Nous calculons le total
let totalArticles = article1 + article2

// Nous ajoutons a3 au total
let totalApresReduction = totalArticles + article3      // tot devient tot2 car une constante ne peut pas être modifiée

//Nous appliquons 20% de reduction
totalApresReduction = totalArticles - totalArticles * 0.2        // on met un . a la place de la virgule et on le remonte avec le console log

console.log("Le prix total avant reduction est de : ", totalArticles)
console.log("Le prix total après reduction est de : ", totalApresReduction)

