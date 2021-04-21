import firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from '../firebase/clientApp';
import { getJSTDate } from './getJSTDate';

export const writeNewItemData = async (
  date: string,
  description: string,
  status: string,
) => {
  const created_at = getJSTDate(new Date());
  await db.collection('todos').add({
    items: [
      {
        description: description,
        created_at: created_at,
        status: status,
      },
    ],
    date: date,
    updated: created_at,
  });
};
