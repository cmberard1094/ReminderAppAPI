import mongoose, { Schema, Document } from 'mongoose';

export interface IReminder extends Document {
  userId: string;
  reminderText: string;
  reminderDateTime: Date
}

const ReminderSchema: Schema = new Schema({
  userId: { type: String, required: true },
  reminderText: { type: String, required: true },
  reminderDateTime: { type: Date, required: true}
});

export const Reminder = mongoose.model<IReminder>('Reminder', ReminderSchema);