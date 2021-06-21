import { DocumentType, getModelForClass, prop } from "@typegoose/typegoose";

export class MaxClass {
    @prop({required: true})
    public date!: Date;

    @prop()
    public squat1RM?: number;
    @prop()
    public bench1RM?: number;
    @prop()
    public deadlift1RM?: number;
    @prop()
    public press1RM?: number;
}

export type Max = MaxClass & DocumentType<MaxClass>;

export const MaxModel = getModelForClass(MaxClass);
