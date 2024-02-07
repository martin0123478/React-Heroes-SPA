import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) =>{
    const validerPublishers = ['DC Comics','Marvel Comics']
    if(!validerPublishers.includes(publisher)){
        throw new Error (`${publisher} is not valid publisher`)
    }
    return heroes.filter(heroe => heroe.publisher=== publisher)
}