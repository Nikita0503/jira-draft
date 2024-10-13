export type TUserRole = 'ADMIN' | 'USER'

export interface IFile {
    id: number;
    commentId?: number;
    taskId?: number;
    name: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    role: TUserRole
}

export interface IProject {
    id: number;
    title: string;
    description: string;
    tasksCount: number;
    users: IUser[];
}

export interface IStatus {
    id: number;
    title: string;
    color: string;
}

export interface IType {
    id: number;
    title: string;
    color: string;
}

export interface ITask {
    id: number;
    title: string;
    description: string;
    timeTracked: number;
    timeAlloted: number;
    projectId: number;
    statusId: number;
    typeId: number;
    userId: number;
    status: IStatus;
    type: IType;
    user: IUser;
    files: IFile[];
}