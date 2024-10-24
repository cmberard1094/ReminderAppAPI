import { IReminder } from "../../db/mongo/models/reminder";
import { ErrorResponseObj } from "../types/error";

export const validateGetReminder = (userId?:string): ErrorResponseObj | undefined => {
    // would ideally grab the userID from the JWT token 
    if (!userId) {
        return { validationError: "UserId is required" }
    }
}

export const validateReminder = (reminder?: IReminder): ErrorResponseObj | undefined => {
    console.log(reminder)
    // would ideally grab the userID from the JWT token 
    if (!reminder?.userId) {
        return { validationError: "UserId is required" }
    }
    // would add extra validations like max length per buisness requirements
    if (!reminder?.reminderText) {
        return { validationError: "reminderText is required" }
    }
    // if reminider exists and is not the default date time then throw error
    // allowing reminders in the past
    if (!reminder?.reminderDateTime || (reminder?.reminderDateTime &&  reminder?.reminderDateTime === new Date())) {
        return { validationError: "reminderText is required" }
    }
}