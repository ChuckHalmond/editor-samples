import { GridRowFilter, GridRowModel, GridView } from "editor/lib/views/GridView";
export { MyGridRowModel };
export { MyGridView };
declare class MyGridRowModel extends GridRowModel {
    name: string;
    age: number;
    color: string;
    constructor(init: {
        id: number;
        name: string;
        age: number;
        color: string;
    });
}
declare class MyGridView extends GridView {
    #private;
    constructor();
    renderShadow(): Node;
    filter(row: GridRowModel): boolean;
    setSearchFilter(filter: GridRowFilter | null): void;
}
