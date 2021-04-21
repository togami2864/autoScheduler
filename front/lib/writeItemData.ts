import 'firebase/firestore';
import { db } from '../firebase/clientApp';
import { getJSTDate } from './getJSTDate';

export const writeNewItemData = async (
  date: string,
  description: string,
  status: string,
) => {
  const created_at = getJSTDate(new Date());
  await db
    .collection('todos')
    .doc(date)
    .set({
      items: [
        {
          description: description,
          created_at: created_at,
          status: status,
        },
      ],
      updated: created_at,
    });
};

export const isItemExist = async (date: string): Promise<boolean> => {
  const flag = await db.collection('todos').doc(date).get();
  if (flag.exists) {
    return true;
  }
  return false;
};

export const insertItemData = async (
  date: string,
  description: string,
  status: string,
) => {
  const created_at = getJSTDate(new Date());
  const itemDataRef = db.collection('todos').doc(date);
  await itemDataRef.set(
    {
      items: [
        { description: description, created_at: created_at, status: status },
      ],
    },
    { merge: true },
  );
  await itemDataRef.update({
    updated: created_at,
  });
};
