import { Router, Request, Response } from 'express';
import { Reminder, IReminder } from '../db/mongo/models/reminder';
import { validateReminder, validateGetReminder } from './validations/reminder';

const router = Router();


router.get('/reminders/:userId', async (req: Request, res: Response) => {
  try {
    const userId = req?.params?.userId;
    const validationError = validateGetReminder(userId)
    if (validationError) {
       res.status(400).json(validationError);
       return
    }
    const reminders = await Reminder.find<IReminder>({ userId }).sort({ reminderDateTime: "desc"});
    
    res.status(200).json({data: reminders});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reminders', error });
  }
});

router.post('/reminders', async (req: Request<IReminder>, res: Response) => {
  try {
    
  const validationError = validateReminder(req.body)
    if (validationError) {
       res.status(400).json(validationError);
       return
    }
    const newReminder: IReminder = new Reminder(req.body);

    await newReminder.save();
    res.status(201).json(newReminder);
  } catch (error) {
    res.status(500).json({ message: 'Error creating reminder', error });
  }
});


export default router;