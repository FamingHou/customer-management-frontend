export class Customer {
    id: number;
    firstName: string = null;
    lastName: string = null;
    emailId: string = null;
    status: string = null;
}

export const StatusEnum = ['prospective', 'current', 'non-active']; // enum of status