// const BASE_URL = "http://localhost:3200/notes";

import { FirebaseApp } from "utils/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";


export class NoteAPI {
  static async create(formValues) {
    // return (await axios.post(`${BASE_URL}`, formValues)).data;
  }
  static async fetchAll() {
    // return (await axios.get(`${BASE_URL}`)).data;
    const q = query(collection(FirebaseApp.db, 'notes'), orderBy('created_at', 'asc'));
    const response = await getDocs(q)
    return response.docs.map((document) => {
      return {
        id: document.id,
        ... document.data()
      }
    })
  }
  static async deleteById(noteId) {
    // return (await axios.delete(`${BASE_URL}/${noteId}`)).data;
  }
  static async updateById(id, values) {
    // return (await axios.patch(`${BASE_URL}/${id}`, values)).data;
  }
  // static async fetchById(noteId) {
  //   return (await axios.get(`${BASE_URL}/${noteId}`)).data;
  // }
}
