export interface Signups {
    sport: string;
    signups: Signup[]
}

export interface Signup {
    name: string;
    age: number;
    gender: string;
}

// export interface Signups {
//     sport: string;
//     signups: {
//         name: string;
//         age: number;
//         gender: string;
//     }[];
// }
