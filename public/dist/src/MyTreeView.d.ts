import { HTMLEMenuElement } from "editor/lib/elements/containers/menus";
import { HTMLEToolBarElement } from "editor/lib/elements/containers/toolbars";
import { TreeItemModelList, TreeItemModel, TreeView } from "editor/lib/views/TreeView";
export { MyTreeItemModel };
export { MyTreeItemModelList };
export { MyTreeView };
declare class MyTreeItemModel extends TreeItemModel {
    #private;
    childCount: number;
    visibility: boolean;
    constructor(init: {
        id: string;
        type: "leaf" | "parent";
        items?: TreeItemModel[];
    });
    show(): void;
    hide(): void;
    display(): void;
}
declare class MyTreeItemModelList extends TreeItemModelList {
    readonly items: MyTreeItemModel[];
    constructor(items: MyTreeItemModel[]);
    get count(): number;
    show(): void;
    hide(): void;
    display(): void;
}
declare class MyTreeView extends TreeView {
    #private;
    render(): void;
    itemContentDelegate(item: MyTreeItemModel): DocumentFragment;
    itemToolbarDelegate(this: MyTreeView, item: MyTreeItemModel): HTMLEToolBarElement;
    itemMenuDelegate(this: MyTreeView): HTMLEMenuElement;
    showEditItemDialog(item: MyTreeItemModel): void;
}
