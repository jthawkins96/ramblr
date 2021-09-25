import { BaseRepository } from './baseRepository';
import UserDocumentModel from 'models/firebase/UserDocumentModel';

export default class UserRepository extends BaseRepository<UserDocumentModel> {
    constructor() {
        super('users');
    }
}
