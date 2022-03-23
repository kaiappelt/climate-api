import { IUser } from '../../domain/models/IUser';
import {
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('users')
class User implements IUser {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    zip_code: string;

    @Column()
    city: string;

    @Column()
    uf: string;

    @Column()
    lat: string;

    @Column()
    lon: string;
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;
