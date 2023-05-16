/// <reference path='crud.d.ts' >
import { RowElement, RowID } from "./interface";
import * as CRUD from './crud.js'
// import { insertRow } from "./crud";

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
}

const newRowId: RowID = CRUD.insertRow()
const updatedRow: RowElement = {
    ...row,
    age : 23
}

const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125
