import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type yourapiDocument = yourapi & Document;

@Schema()
export class yourapi {
    @Prop()
    name: string;

    @Prop()
    iddb: string;
}

export const yourapiSchema = SchemaFactory.createForClass(yourapi);