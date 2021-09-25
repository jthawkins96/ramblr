import { db } from 'firebase/firebase.utils';
import { collection, CollectionReference, DocumentData, getDoc, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';
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

    addOrUpdateAsync(document: TDocument) {
        return setDoc(doc(db, this.collectionName, document.id), document);
    }

    deleteAsync(id: string) {
        return deleteDoc(doc(db, this.collectionName, id));
    }
}
