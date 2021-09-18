import { db } from 'firebase/firebase.utils';
import {
    collection,
    addDoc,
    CollectionReference,
    DocumentData,
    getDoc,
    doc,
    getDocs,
    setDoc,
    deleteDoc,
} from 'firebase/firestore';
import BaseDocumentModel from 'models/firebase/BaseDocumentModel';

export class BaseRepository<TDocument extends BaseDocumentModel> {
    readonly collectionName: string;
    readonly collection: CollectionReference<DocumentData>;

    constructor(collectionName: string) {
        this.collectionName = collectionName;
        this.collection = collection(db, collectionName);
    }

    getAsync(id: string) {
        return getDoc(doc(db, this.collectionName, id));
    }

    getAllAsync() {
        return getDocs(this.collection);
    }

    addAsync(document: TDocument) {
        try {
            return addDoc(this.collection, document);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    }

    updateAsync(document: TDocument) {
        try {
            return setDoc(doc(db, this.collectionName, document.id), document);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    }

    deleteAsync(id: string) {
        return deleteDoc(doc(db, this.collectionName, id));
    }
}
