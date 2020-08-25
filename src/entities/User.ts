import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column("text", { nullable: true })
    name: string;

    @Field()
    @Column("text", { nullable: true })
    email: string;

    @Field()
    @Column("text", { nullable: true })
    password: string;

    constructor(name: string, email: string, password: string) {
        super();
        this.name = name;
        this.email = email;
        this.password = password;
    }

}
