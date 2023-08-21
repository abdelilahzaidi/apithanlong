import { UserGender } from './../enums/gender.enum';
import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserStatus } from "../enums/status.enum";

@Entity('users')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string; 

    @Column({ type: 'enum', enum: UserGender, default: UserGender.MALE  })
    gender: UserGender;

    @Column()
    birthDate: Date;

    @Column()
    adress: string;

    @Column({default: true })
    actif: boolean;

    @Column()
    attributionDate: Date;

    @Column()
    gsm: string;

    @Column({unique: true})
    email: string;

    @Column()
    @Exclude()
    password: string;

    @Column({ type: 'enum', enum: UserStatus, default: UserStatus.MEMBER })
    status: UserStatus;
}