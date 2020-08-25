import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from '../entities/User';
const { hashPassword } = require('../utils');

@Resolver()
export class UserResolver {

    @Query(() => [User])
    async getUsers() {
        return User.find();
    }

    @Mutation(() => Boolean)
    async signup(
        @Arg("name") name: string,
        @Arg("email") email: string,
        @Arg("passwrod") password: string,
    ) {
        try {
            const hashedPassword = await hashPassword(password);
            const emailExist = await User.findOne({
                email: email
            });

            if (emailExist) {
                console.log('Email already exist')
                return false;
            }

            const newUser = new User(name, email, hashedPassword);
            newUser.save();
        } catch(err) {
            console.log('Something happened', err);
            return false;
        }
        return true;
    }
}