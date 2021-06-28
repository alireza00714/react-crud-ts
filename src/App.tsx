import "./App.css";
// import TextArea from "./components/textArea";
import MyInput from "./components/input";
import { useEffect, useState } from "react";
import { IformValues } from "./types";
import DataTable from "./components/dataTable";

interface IStorage extends IformValues {
  id: number;
}

function App() {
  const [formValue, setFormValue] = useState<IformValues>();
  const [storage, setStorage] = useState<IStorage[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editId, setEditId] = useState<number>(0);

  const AddData = (fname: string, lname: string, address: string) => {
    setStorage([...storage, { firstName: fname, lastName: lname, address: address, id: Date.now() }]);
  };

  const handleAdd = () => {
    formValue && AddData(formValue!.firstName, formValue!.lastName, formValue!.address);
    setFormValue(undefined);
  };

  const handleDelete = (id: number) => {
    setStorage(storage.filter((item) => item.id !== id));
  };

  const handleInitEdit = (id: number) => {
    setEditId(id);
  };

  const handleEdit = () => {
    let oldStorage = storage;
    oldStorage = oldStorage.filter((i) => i.id !== editId);
    let newValues = formValue as IStorage;
    newValues.id = Date.now();
    oldStorage.push(newValues);
    setStorage(oldStorage);
    setEditMode(false);
  };

  useEffect(() => {
    console.log(storage);
  }, [storage]);

  useEffect(() => {
    console.log(formValue);
  }, [formValue]);

  return (
    <>
      <div className={"w-50 mx-auto bg-warning p-3 mt-2 mb-5 rounded-3"}>
        <div className={"mb-4"}>
          <MyInput formValue={formValue} setFormValue={setFormValue} name={"firstName"} label={"Firstname"} />
        </div>
        <div className={"mb-4"}>
          <MyInput formValue={formValue} setFormValue={setFormValue} name={"lastName"} label={"Lastname"} />
        </div>
        <div className={"mb-5"}>
          <MyInput formValue={formValue} setFormValue={setFormValue} name={"address"} label={"Address"} />
        </div>
        <button
          className={`btn btn-${editMode ? "primary" : "success"} px-5 py-3 w-100`}
          onClick={() => {
            editMode ? handleEdit() : handleAdd();
          }}
        >
          {editMode ? "Save" : "Add"}
        </button>
      </div>
      <div className={"w-75 mx-auto"}>
        <DataTable
          handleInitEdit={handleInitEdit}
          editMode={editMode}
          setEditMode={setEditMode}
          handleDelete={handleDelete}
          data={storage}
        />
      </div>
    </>
  );
}

export default App;
