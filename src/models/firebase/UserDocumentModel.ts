import BaseDocumentModel from './BaseDocumentModel';

export default interface UserDocumentModel extends BaseDocumentModel {
    name: string;
    email: string;
}
