import { getModelForClass, prop } from "@typegoose/typegoose";

export class Max {
    @prop()
    public deadlift1RM?: number;
}

export const MaxModel = getModelForClass(Max);
