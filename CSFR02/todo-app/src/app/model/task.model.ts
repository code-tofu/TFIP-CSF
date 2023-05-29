// export class _Task{
//     private _name!: string;
//     private _priority!: number;
//     private _status!: boolean;
//     private _dueDate!: string;
//     private _steps!: string[];
//     private _category!: string;
//     private _attachments!: File[];    
// }


export interface Task{
    name: string;
    priority: number;
    complete: boolean;
    dueDate: string;
    description: string;
    steps: string[];
    categories: string[];
    attachments: File[];    
}