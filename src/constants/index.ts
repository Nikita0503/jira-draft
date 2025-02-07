import {
  ERequirementsDocumentSections,
  ISection,
} from 'interfaces/requirementsDocument';

export const EMPTY_PHOTO_URL =
  'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';

export const IMAGE_BASE_URL = 'http://localhost:5000';

export const SECTIONS: ISection[] = [
  {
    id: ERequirementsDocumentSections.GENERAL_DESCRIPTION,
    title: 'General Description',
  },
  { id: ERequirementsDocumentSections.SIGN_IN, title: 'Sign In' },
  { id: ERequirementsDocumentSections.SIGN_UP, title: 'Sign Up' },
  { id: ERequirementsDocumentSections.PROJECTS, title: 'Projects' },
  { id: ERequirementsDocumentSections.CREATE_TASK, title: 'Create Task' },
];
