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

    const data: Array<[number, number]> = [
        [Date.UTC(2023, 1, 1), 5],
        [Date.UTC(2023, 1, 2), 4],
        [Date.UTC(2023, 1, 3), 1],
        [Date.UTC(2023, 1, 4), -1],
        [Date.UTC(2023, 1, 5), 2],
        [Date.UTC(2023, 1, 6), 5],
        [Date.UTC(2023, 1, 7), 0],
        [Date.UTC(2023, 1, 8), 2],
        [Date.UTC(2023, 1, 9), 7],
        [Date.UTC(2023, 1, 10), 8],
        [Date.UTC(2023, 1, 11), 10]
    ]
    function formatDataLabel(data: [number, number]) {
        return new Intl.DateTimeFormat('fr-FR').format(new Date(data[0]));
    }
    function getValueColor(value: number) {
        if (value >= 8) {
            return "red";
        }
        if (value >= 5) {
            return "orange";
        }
        if (value > 0) {
            return "yellow";
        }
        return "white";
    }

    const minValue = data[0][0];
    const step = Date.UTC(0, 0, 1) - Date.UTC(0, 0, 0);
    const maxValue = data[data.length - 1][0];
    const initialValue = data[data.length - 1][0];
    document.body.append(
        wrapExample("date-picker",
            element("style", {
                children: /*css*/`
                    #date-picker {
                        display: flex;
                        flex-direction: column;
                        padding: 0 20px;
                    }

                    input[type="range"] {
                        position: relative;
                        height: 18px;
                        width: 100%;
                        z-index: 1;
                        margin: 0;
                        accent-color: initial;
                        margin-top: 12px;
                    }

                    input[type="range"]::before {
                        content: "";
                        height: 12px;
                        display: block;
                        position: absolute;
                        width: 100%;
                        background: linear-gradient(to right, ${data.map(data_i => getValueColor(data_i[1])).join(", ")});
                        border-radius: 6px;
                        transform: translateY(-100%);
                    }
                    
                    datalist {
                        display: flex;
                        /*flex-direction: column;*/
                        justify-content: space-between;
                        /*writing-mode: vertical-lr;*/
                        transform: translateY(-35px);
                    }
                    
                    option {
                        padding: 0;
                        padding-top: 40px;
                        user-select: none;
                        width: calc(100% / ${data.length});
                        transform: translateX(-50%);
                        margin-right: calc(100% / ${data.length} / ${data.length});
                    }

                    option:nth-child(even) {
                        color: transparent;
                    }

                    option:not([data-selected]) {
                        opacity: 0.3;
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
                            step: step
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
                                    const {label} = target;
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
                        children: data.map((data_i, i, data) => {
                            return element("option", {
                                attributes: {
                                    id: `${i}-option`,
                                    value: data_i[0],
                                    label: formatDataLabel(data_i)
                                },
                                dataset: {
                                    selected: i === data.length - 1
                                }
                            });
                        }),
                        listeners: {
                            /*click: (event) => {
                                const {target} = event;
                                if (target instanceof Option) {
                                    const input = <HTMLInputElement>document.getElementById("date-input");
                                    input.value = target.value;
                                    input.dispatchEvent(new InputEvent("input"));
                                }
                            },
                            pointerover: (event) => {
                                const {target} = <PointerEvent>event;
                                const tooltip = <HTMLEToolTipElement>document.getElementById("date-tooltip");
                                if (target instanceof Option) {
                                    const {label} = target;
                                    tooltip.textContent = label;
                                    tooltip.htmlFor = target.id;
                                    tooltip.show();
                                }
                            },
                            pointerleave: () => {
                                const tooltip = <HTMLEToolTipElement>document.getElementById("date-tooltip");
                                tooltip.hide();
                            }*/
                        }
                    })
                ]
            })
        )
    );
}