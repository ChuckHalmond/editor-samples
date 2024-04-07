import { element } from "editor/lib/elements/Element";
import { GridColumnModel, GridModel, GridRowModel } from "editor/lib/views/GridView";
import { TreeModel } from "editor/lib/views/TreeView";

import { theme } from "editor/lib/stylesheets/Theme";

import { MyTreeItemModel, MyTreeView } from "./src/MyTreeView";
import { MyGridRowModel, MyGridView } from "./src/MyGridView";

import "editor/lib/elements/containers/lists";
import "editor/lib/elements/containers/tabs";
import "editor/lib/elements/containers/menus";
import "editor/lib/elements/containers/status";
import "editor/lib/elements/controls/select";
import "editor/lib/elements/misc";

export async function main() {
    document.adoptedStyleSheets = [theme.stylesheet];
    document.head.append(
        ...Object.values(theme.images()).map(
            (img) => element("link", {
                attributes: {
                    rel: "preload",
                    as: "image",
                    href: img,
                    crossorigin: "anonymous"
                }
            })
        )
    );
    
    const gridView = new MyGridView();
    gridView.setModel(
        new GridModel({
            columns: [
                new GridColumnModel({
                    name: "name",
                    type: String,
                    label: "Nom",
                    extract: (row) => (<MyGridRowModel>row).name
                }),
                new GridColumnModel({
                    name: "color",
                    type: String,
                    label: "Couleur",
                    extract: (row) => (<MyGridRowModel>row).color
                }),
                new GridColumnModel({
                    name: "age",
                    type: Number,
                    label: "Age",
                    extract: (row) => String((<MyGridRowModel>row).age),
                    filters: [{
                        name: "Minors",
                        filter: (row) => (<MyGridRowModel>row).age < 18
                    },{
                        name: "Majors",
                        filter: (row) => (<MyGridRowModel>row).age >= 18
                    }]
                })
            ],
            rows: [
                new MyGridRowModel({
                    id: 1,
                    name: "Louis",
                    age: 13,
                    color: "bleu"
                }),
                new MyGridRowModel({
                    id: 2,
                    name: "Marine",
                    age: 21,
                    color: "bleu"
                }),
                new MyGridRowModel({
                    id: 3,
                    name: "Jean-Christophe",
                    age: 32,
                    color: "rouge"
                }),
                new MyGridRowModel({
                    id: 4,
                    name: "Anne",
                    age: 54,
                    color: "jaune"
                }),
                new MyGridRowModel({
                    id: 5,
                    name: "Claude",
                    age: 61,
                    color: "noir"
                }),
                new MyGridRowModel({
                    id: 6,
                    name: "Benoît",
                    age: 38,
                    color: "vert"
                })
            ]
        })
    );
    document.body.append(gridView);
    gridView.render();

    const treeModel = new TreeModel({
        items: [
            new MyTreeItemModel({
                id: "TI 0",
                type: "parent",
                items: [
                    new MyTreeItemModel({
                        id: "TI 1A",
                        type: "parent",
                        items: [
                            new MyTreeItemModel({
                                type: "leaf",
                                id: "TI 1AX"
                            }),
                        ]
                    }),
                    new MyTreeItemModel({
                        type: "parent",
                        id: "TI 1B"
                    })
                ]
            }),
            new MyTreeItemModel({
                id: "TI 1",
                type: "parent",
                items: [
                    new MyTreeItemModel({
                        id: "TI 1A",
                        type: "parent",
                        items: [
                            new MyTreeItemModel({
                                type: "leaf",
                                id: "TI 1AX"
                            }),
                        ]
                    }),
                    new MyTreeItemModel({
                        type: "parent",
                        id: "TI 1B"
                    })
                ]
            }),
            new MyTreeItemModel({
                type: "leaf",
                id: "TI 2"
            }),
            new MyTreeItemModel({
                type: "leaf",
                id: "TI 3"
            })
        ]
    });

    const treeView = new MyTreeView();
    treeView.draggable = true;
    treeView.setModel(treeModel);
    treeView.render();
    document.body.append(treeView);

    document.body.append(
        ...[
            "builtins",
            "tablist",
            "select",
            "sash",
            "loaders",
            "tree",
            "menus",
            "list",
            "status"
        ].map(example => {
            return element("details", {
                children: [
                    element("summary", {
                        children: `${example}.html`
                    }),
                    element("e-import", {
                        attributes: {
                            src: `example/${example}.html`
                        }
                    })
                ]
            })
        })
    );
}