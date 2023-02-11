
import './App.css';
import employees from './Resources/Employee.json';
import { DataGrid } from '@mui/x-data-grid';

function App() {
  const columns = [
    {
      field: 'id',
      headerName: 'job_id',
      width: 175
    },
    {
      field: 'jobtitle',
      headerName: 'job_title',
      width: 175
    },
    {
      field: 'name',
      headerName: 'name',
      width: 175
    }
  ]
  const rows = employees.Employees
  return (
    <div className="tabularcomponents-centered">
     <div className="textaligned">
      <h1>Employee Data</h1>
      <div style={{height:400,width: "100%"}}>
     <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        
        />
     </div>
     </div>
     
    </div>
  );
}

export default App;
