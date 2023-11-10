import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

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
}

export const UserSchema = SchemaFactory.createForClass(User);