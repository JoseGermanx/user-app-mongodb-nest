import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Roles } from './roles.user';

@Schema()
export class User {

    @Prop()
    name: string;

    @Prop()
    lastname: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({default:Roles.USER})
    role: Roles;

}

export const UserSchema = SchemaFactory.createForClass(User);
