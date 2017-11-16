export class User {
    id: number;
    email: string;
    password: string;
    location: string;
    age: number;
    job: string;
    name: string;
}

export const usersDB = [
    {
        id: 0,
        email: "ilaria.kazuko@email.com",
        password: "japan",
        location: "Florence",
        age: 27,
        job: "Fashion Blogger - Fitness Teacher",
        name: "Ilaria Kazuko"
    },
    {
        id: 1,
        email: "fabio.russo@email.com",
        password: "russia",
        location: "Milan",
        age: 40,
        job: "Model Agency Owner",
        name: "Fabio Russo"
    },
    {
        id: 2,
        email: "luca.fabiani@email.com",
        password: "italy",
        location: "Venice",
        age: 45,
        job: "Fashion Designer",
        name: "Luca Fabiani"
    },
    {
        id: 3,
        email: "stefania.muller@email.com",
        password: "germany",
        location: "Rome",
        age: 37,
        job: "Photographer",
        name: "Stefania Muller"
    },
    {
        id: 4,
        email: "fernando.giannitrapani@email.com",
        password: "america",
        location: "Milan",
        age: 32,
        job: "Hairstylist - Make-Up Artist",
        name: "Fernando Giannitrapani"
    }
];