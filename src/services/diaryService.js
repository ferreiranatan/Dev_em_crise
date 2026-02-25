import { mockDiaryData } from "../mocks/diaryData";

export function getAllEntries() {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(mockDiaryData);
    }, 500);
   });
  };

export async function getEntryById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const entry = mockDiaryData.find(
        (item) => item.id === Number(id)
      );

      if (entry) resolve(entry);
      else reject("Registro não encontrado");
    }, 500);
  });
}

