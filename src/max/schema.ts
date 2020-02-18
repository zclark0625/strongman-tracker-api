import { getModelForClass, prop } from "@typegoose/typegoose";

export class MaxSchema {
    @prop()
    public deadlift1RM?: number;
}

export const Max = getModelForClass(MaxSchema);
