# Significance of union and intersection types in TypeScript.

## Union Type in TypeScript
To express union type use (|). union type variable contain multiple types but it allow to use one type.
```bash 
const var: string | number;
var = "next level" // it is hold string type data
var = 406 // it is hold number type data 

```
## Intersection Type in TypeScript
To express intersection type use (&). intersection type variable contain also multiple types but it enforce to combine to one type.

## Example

```bash 
type Dal = {
    dalType: string;
}

type MasErMatha = {
    masType = string;
}

type MuriGhonto = Dal \& MasErMatha; // it is hold both type data 

const muriGhonto : MuriGhonto = {
    dalType: "Musur dal"
    masType: "Katla mas"
}
```
