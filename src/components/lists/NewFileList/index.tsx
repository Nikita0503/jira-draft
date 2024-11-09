import NewFile from '@components/NewFile';
import UniversalStub from '@components/stubs/UniversalStub';
import styles from './NewFileList.module.css';

interface IProps {
  files: File[];
  deleteFile: (file: File) => void;
}

const NewFileList = ({ files, deleteFile }: IProps) => {
  if (files.length === 0) {
    return <UniversalStub text="No Files" />;
  }

  return (
    <>
      {files.map((file: File) => (
        <div key={file.lastModified} className={styles.fileContainer}>
          <NewFile file={file} deleteFile={deleteFile} />
        </div>
      ))}
    </>
  );
};

export default NewFileList;
