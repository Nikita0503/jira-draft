export interface ISection {
  id: number;
  title: string;
}

export enum ERequirementsDocumentSections {
  GENERAL_DESCRIPTION = 1,
  SIGN_IN = 2,
  SIGN_UP = 3,
  PROJECTS = 4,
  CREATE_TASK = 5,
}
