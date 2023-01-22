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
import "editor/lib/elements/misc";
import { HTMLEToolTipElement } from "editor/lib/elements/misc";

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

    const wrapExample = (name: string, ...html: Element[]) => element("details", {
        children: [
            element("summary", {
                children: name
            }),
            ...html
        ]
    })

    function formatDateValue(value: number) {
        return `${String(value + 1).padStart(2, "0")}-01-2023`;   
    }
    const minValue = 0;
    const maxValue = 6;
    const initialValue = 3;
    document.body.append(
        wrapExample("date-picker",
            element("style", {
                children: /*css*/`
                    #date-picker {
                        display: inline-block;
                    }
                    input[type=range] {
                        position: relative;
                        z-index: 1;
                        width: 200px;
                        margin: 0;
                    }
                    
                    datalist {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        writing-mode: vertical-lr;
                        width: 200px;
                        transform: translateY(-30px);
                    }
                    
                    option {
                        padding: 0;
                        padding-top: 30px;
                        user-select: none;
                    }

                    option[data-selected] {
                        font-weight: bold;
                    }
                `
            }),
            element("div", {
                attributes: {
                    id: "date-picker"
                },
                children: [
                    element("input", {
                        attributes: {
                            id: "date-input",
                            type: "range",
                            list: "markers",
                            min: minValue,
                            max: maxValue,
                            value: initialValue,
                            step: 1
                        },
                        listeners: {
                            input: (event) => {
                                const {currentTarget} = event;
                                const input = <HTMLInputElement>currentTarget;
                                const {value} = input;
                                const datalist = document.getElementById("markers");
                                if (datalist) {
                                    const selectedOption = datalist.querySelector<HTMLOptionElement>("option[data-selected]")!;
                                    const targetOption = datalist.querySelector<HTMLOptionElement>(`option[value='${value}']`)!;
                                    if (selectedOption !== targetOption) {
                                        if (selectedOption) {
                                            delete selectedOption.dataset.selected;
                                        }
                                        if (targetOption) {
                                            targetOption.dataset.selected = "";
                                        }
                                    }
                                }
                            },
                            pointermove: (event) => {
                                const {x, y} = <PointerEvent>event;
                                const target = document.elementsFromPoint(x, y).find(el => el instanceof Option);
                                const tooltip = <HTMLEToolTipElement>document.getElementById("date-tooltip");
                                if (target instanceof Option) {
                                    const {value} = target;
                                    const label = formatDateValue(Number(value));
                                    tooltip.textContent = label;
                                    tooltip.htmlFor = target.id;
                                    tooltip.show();
                                }
                            }
                        }
                    }),
                    element("e-tooltip", {
                        attributes: {
                            id: "date-tooltip",
                            position: "top",
                            for: "date-picker"
                        }
                    }),
                    element("datalist", {
                        attributes: {
                            id: "markers"
                        },
                        children: new Array(maxValue - minValue + 1).fill(0).map((_, i) => {
                            return element("option", {
                                attributes: {
                                    id: `${i}-option`,
                                    value: i,
                                    label: formatDateValue(i)
                                },
                                dataset: {
                                    selected: i === initialValue
                                }
                            });
                        }),
                        listeners: {
                            click: (event) => {
                                const {target} = event;
                                if (target instanceof Option) {
                                    const input = <HTMLInputElement>document.getElementById("date-input");
                                    input.value = target.value;
                                    input.dispatchEvent(new InputEvent("input"));
                                }
                            },
                            pointerover: (event) => {
                                const {target} = event;
                                const tooltip = <HTMLEToolTipElement>document.getElementById("date-tooltip");
                                if (target instanceof Option) {
                                    const {value} = target;
                                    const label = formatDateValue(Number(value));
                                    tooltip.textContent = label;
                                    tooltip.htmlFor = target.id;
                                    tooltip.show();
                                }
                            }
                        }
                    })
                ]
            })
        )
    );
}