
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export abstract class IQuery {
    abstract allUsers(): User[] | Promise<User[]>;

    abstract selectedUser(id: number): User | Promise<User>;
}

export class User {
    id?: number;
    name?: string;
}
