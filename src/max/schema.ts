import { getModelForClass, prop } from "@typegoose/typegoose";

export class Max {
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

export const MaxModel = getModelForClass(Max);
