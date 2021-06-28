import React from "react";

interface IDataTable {
  data: {
    firstName: string;
    lastName: string;
    address: string;
    id: number;
  }[];
  handleDelete: (id: number) => void;
  editMode: boolean;
  setEditMode: (mode: boolean) => void;
  handleInitEdit: (id: number) => void;
}

const DataTable: React.FC<IDataTable> = (props) => {
  const handleClick = (id: number) => {
    props.setEditMode(true);
    props.handleInitEdit(id);
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.address}</td>
                <td className={"me-auto"}>
                  {props.editMode ? (
                    ""
                  ) : (
                    <>
                      <button
                        type="button"
                        className="btn btn-danger me-3"
                        onClick={() => {
                          props.handleDelete(item.id);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          handleClick(item.id);
                        }}
                        type="button"
                        className="btn btn-info"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
