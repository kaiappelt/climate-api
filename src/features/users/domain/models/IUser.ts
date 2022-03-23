export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    zip_code: string;
    city: string;
    uf: string;
    lat: number;
    lon: number;
    created_at: Date;
    updated_at: Date;
}
