import { HTMLEMenuElement, HTMLEMenuItemElement } from "editor/lib/elements/containers/menus";
import { HTMLEToolBarElement, HTMLEToolBarItemElement } from "editor/lib/elements/containers/toolbars";
import { HTMLETreeElement } from "editor/lib/elements/containers/trees";
import { HTMLEOptionElement, HTMLESelectElement } from "editor/lib/elements/controls/select";
import { CustomElement, element, fragment, reactiveElement } from "editor/lib/elements/Element";
import { ReactiveProperty, ModelEvent } from "editor/lib/models/Model";
import { TreeItemModelList, TreeItemModel, TreeView } from "editor/lib/views/TreeView";

export { MyTreeItemModel };
export { MyTreeItemModelList };
export { MyTreeView };

class MyTreeItemModel extends TreeItemModel {
    
    @ReactiveProperty()
    childCount: number;

    @ReactiveProperty()
    visibility: boolean;

    constructor(init: {id: string, type: "leaf" | "parent", items?: TreeItemModel[]}) {
        super(init);
        this.childCount = this.childItems.length;
        this.visibility = true;
        this.addEventListener("modelchange", this.#handleModelChangeEvent.bind(this));
    }

    show(): void {
        this.visibility = true;
    }

    hide(): void {
        this.visibility = false;
    }

    display(): void {
        console.log(this.id);
    }

    #handleModelChangeEvent(event: ModelEvent): void {
        const {target} = event;
        const {childItems} = this;
        if (target == childItems) {
            this.childCount = childItems.length;
        }
    }
}

class MyTreeItemModelList extends TreeItemModelList {
    declare readonly items: MyTreeItemModel[];

    constructor(items: MyTreeItemModel[]) {
        super(items);
    }

    get count(): number {
        return this.items.length;
    }

    show(): void {
        this.items.forEach(item_i => item_i.show());
    }

    hide(): void {
        this.items.forEach(item_i => item_i.hide());
    }
    
    display(): void {
        const result = this.items.map(item_i => item_i.id).join(" ");
        console.log(result);
    }
}

@CustomElement({
    name: "e-mytreeview"
})
class MyTreeView extends TreeView {

    override render(): void {
        super.render();
        const {shadowRoot, treeElement} = this;
        shadowRoot.prepend(
            element("link", {
                attributes: {
                    rel: "stylesheet",
                    href: "../css/mytreeview.css"
                }
            })
        );
        treeElement!.addEventListener("keydown", this.#handleKeyDownEvent.bind(this));
    }

    override itemContentDelegate(item: MyTreeItemModel) {
        return fragment(
            reactiveElement(
                item,
                element("span", {
                    attributes: {
                        class: "label"
                    }
                }),
                ["id"],
                (label, property, oldValue, newValue) => {
                    label.textContent = newValue;
                }
            ),
            reactiveElement(
                item,
                element("span", {
                    attributes: {
                        class: "badge"
                    }
                }),
                ["childCount", "type"],
                (badge, property, oldValue, newValue) => {
                    switch (property) {
                        case "type": {
                            if (newValue === "leaf") {
                                badge.textContent = null;
                                badge.hidden = true;
                            }
                            else {
                                badge.textContent = `(${item.childCount})`;
                                badge.hidden = false;
                            }
                            break;
                        }
                        case "childCount": {
                            badge.textContent = `(${newValue})`;
                            break;
                        }
                    }
                }
            )
        );
    }

    override itemToolbarDelegate(this: MyTreeView, item: MyTreeItemModel): HTMLEToolBarElement {
        return reactiveElement(
            item,
            element("e-toolbar", {
                children: [
                    element("e-toolbaritem", {
                        attributes: {
                            name: "edit",
                            type: "button",
                            label: "Edit",
                            iconed: true
                        },
                        listeners: {
                            click: () => {
                                this.showEditItemDialog(item);
                            }
                        }
                    }),
                    element("e-toolbaritem", {
                        attributes: {
                            name: "visibility",
                            type: "checkbox",
                            label: "Visibility",
                            iconed: true
                        },
                        listeners: {
                            click: (event) => {
                                item.visibility ?
                                    item.hide() :
                                    item.show();
                                event.stopPropagation();
                            }
                        }
                    })
                ]
            }),
            ["visibility", "type"],
            (toolbar, property, oldValue, newValue) => {
                switch (property) {
                    case "visibility": {
                        const visibilityItem = toolbar
                            .querySelector<HTMLEToolBarItemElement>("e-toolbaritem[name=visibility]");
                        if (visibilityItem) {
                            const label = newValue ? "Hide" : "Show";
                            visibilityItem.label = label;
                            visibilityItem.title = label;
                            visibilityItem.pressed = newValue;
                        }
                        break;
                    }
                    case "type": {
                        const typeSelect = toolbar
                            .querySelector<HTMLESelectElement>("e-toolbaritem[name=type] e-select");
                        if (typeSelect) {
                            typeSelect
                                .querySelector<HTMLEOptionElement>(`e-option[value="${newValue}"]`)!
                                .selected = true;
                        }
                        break;
                    }
                }
            }
        )
    }

    override itemMenuDelegate(this: MyTreeView): HTMLEMenuElement {
        console.log("here");
        const {treeElement} = this;
        const {activeItem: activeItemElement} = treeElement!;
        const selectedItems = <MyTreeItemModel[]>this.selectedItems();
        const activeItem = <MyTreeItemModel>this.activeItem();
        return element("e-menu", {
            attributes: {
                contextual: true
            },
            children: [
                element("e-menuitemgroup", {
                    children: [
                        element("e-menuitem", {
                            attributes: {
                                type: "button",
                                label: "Edit"
                            },
                            children: "Edit",
                            listeners: {
                                click: <EventListener>(
                                    function(this: MyTreeView) {
                                        selectedItems.forEach((selectItem) => {
                                            this.showEditItemDialog(selectItem);
                                        });
                                    }
                                ).bind(this)
                            }
                        }),
                        element("e-menuitem", {
                            attributes: {
                                type: "checkbox",
                                label: activeItem.visibility ? "Hide" : "Show"
                            },
                            children: activeItem.visibility ? "Hide" : "Show",
                            listeners: {
                                click: () => {
                                    const selectedItemsList = selectedItems.includes(activeItem) ?
                                        new MyTreeItemModelList(selectedItems) : new MyTreeItemModelList([activeItem]);
                                    activeItem.visibility ?
                                        selectedItemsList.hide() :
                                        selectedItemsList.show();
                                    activeItemElement!.focus();
                                }
                            }
                        })
                    ]
                }),
                element("e-separator"),
                element("e-menuitemgroup", {
                    children: [
                        element("e-menuitem", {
                            attributes: {
                                label: "Delete"
                            },
                            children: "Delete",
                            listeners: {
                                click: () => {
                                    const selectedItemsList = selectedItems.includes(activeItem) ?
                                        new MyTreeItemModelList(selectedItems) : new MyTreeItemModelList([activeItem]);
                                    const {count} = selectedItemsList;
                                    const doRemove = confirm(`Remove ${count} items?`);
                                    if (doRemove) {
                                        selectedItemsList.remove();
                                    }
                                    treeElement!.focus();
                                }
                            }
                        })
                    ]
                })
            ]
        });
    }

    #handleKeyDownEvent(event: KeyboardEvent) {
        const {currentTarget, key} = event;
        const targetTree = <HTMLETreeElement>currentTarget;
        const {activeItem} = targetTree;
        if (activeItem) {
            const activeItemModel = <MyTreeItemModel>this.treeItem(activeItem!)!;
            switch (key) {
                case "Delete": {
                    const selectedItems = this.selectedItems();
                    const selectedItemsList = selectedItems.includes(activeItemModel) ?
                        new TreeItemModelList(selectedItems) : new TreeItemModelList([activeItemModel]);
                    const {count} = selectedItemsList;
                    const doRemove = confirm(`Remove ${count} items?`);
                    if (doRemove) {
                        selectedItemsList.remove();
                    }
                    targetTree.focus();
                    event.preventDefault();
                    break;
                }
            }
        }
    }

    showEditItemDialog(item: MyTreeItemModel): void {
        const {shadowRoot} = this;
        const {visibility, id, type} = item;
        const dialog = element("dialog", {
            children: [
                element("form", {
                    attributes: {
                        method: "dialog"
                    },
                    children: [
                        element("e-menubar", {
                            attributes: {
                                tabindex: 0
                            },
                            children: [
                                element("e-menuitem", {
                                    attributes: {
                                        type: "menu",
                                        label: "Menu 1"
                                    },
                                    children: [
                                        "Menu 1",
                                        element("e-menu", {
                                            attributes: {
                                                slot: "menu"
                                            },
                                            children: [
                                                element("e-menuitem", {
                                                    attributes: {
                                                        type: "checkbox"
                                                    },
                                                    children: "Menuitem 1"
                                                }),
                                                element("e-menuitem", {
                                                    attributes: {
                                                        type: "checkbox"
                                                    },
                                                    children: "Menuitem 2"
                                                }),
                                                element("e-menuitem", {
                                                    attributes: {
                                                        type: "submenu"
                                                    },
                                                    children: [
                                                        "Submenu 1",
                                                        element("e-menu", {
                                                            attributes: {
                                                                slot: "menu"
                                                            },
                                                            children: [
                                                                element("e-menuitem", {
                                                                    attributes: {
                                                                        label: "SubmenuItem 1",
                                                                        name: "radio",
                                                                        value: String(0),
                                                                        type: "radio"
                                                                    },
                                                                    children: "SubmenuItem 1"
                                                                }),
                                                                element("e-menuitem", {
                                                                    attributes: {
                                                                        label: "SubmenuItem 2",
                                                                        name: "radio",
                                                                        value: String(1),
                                                                        type: "radio"
                                                                    },
                                                                    children: "SubmenuItem 2"
                                                                }),
                                                                element("e-menuitem", {
                                                                    attributes: {
                                                                        label: "SubmenuItem 3",
                                                                        name: "radio",
                                                                        value: String(3),
                                                                        type: "radio"
                                                                    },
                                                                    children: "SubmenuItem 3"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        element("e-tablist", {
                            attributes: {
                                tabindex: 0
                            },
                            children: [
                                element("e-tab", {
                                    attributes: {
                                        controls: "properties"
                                    },
                                    children: "Properties"
                                })
                            ]
                        }),
                        element("e-tabpanel", {
                            attributes: {
                                id: "properties"
                            },
                            children: [
                                element("fieldset", {
                                    children: [
                                        element("legend", {
                                            children: "Item information"
                                        }),
                                        element("div", {
                                            attributes: {
                                                class: "form-content"
                                            },
                                            children: [
                                                element("label", {
                                                    attributes: {
                                                        for: "visibility"
                                                    },
                                                    children: "Visibility"
                                                }),
                                                element("input", {
                                                    attributes: {
                                                        id: "visibility",
                                                        type: "checkbox",
                                                        name: "visibility",
                                                        checked: visibility,
                                                        tabindex: 0,
                                                        autofocus: true
                                                    }
                                                }),
                                                element("label", {
                                                    attributes: {
                                                        for: "id"
                                                    },
                                                    children: "ID"
                                                }),
                                                element("input", {
                                                    attributes: {
                                                        id: "id",
                                                        type: "text",
                                                        name: "id",
                                                        value: id,
                                                        tabindex: 0
                                                    }
                                                }),
                                                element("label", {
                                                    attributes: {
                                                        for: "type"
                                                    },
                                                    children: "Type"
                                                }),
                                                element("select", {
                                                    attributes: {
                                                        id: "type",
                                                        name: "type",
                                                        tabindex: 0
                                                    },
                                                    children: ["parent", "leaf"].map(
                                                        type_i => element("option", {
                                                            attributes: {
                                                                label: type_i,
                                                                value: type_i,
                                                                selected: type === type_i
                                                            }
                                                        })
                                                    )
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        element("footer", {
                            attributes: {
                                class: "dialog-footer"
                            },
                            children: [
                                element("button", {
                                    attributes: {
                                        type: "submit",
                                        value: "confirm"
                                    },
                                    children: "Confirm"
                                }),
                                element("button", {
                                    attributes: {
                                        value: "cancel"
                                    },
                                    children: "Cancel"
                                })
                            ]
                        })
                    ]
                })
            ],
            listeners: {
                close: (event) => {
                    const {currentTarget} = event;
                    const targetDialog = <HTMLDialogElement>currentTarget;
                    if (targetDialog.returnValue === "confirm") {
                        const form = targetDialog.querySelector("form")!;
                        const formData = new FormData(form);
                        item.visibility = Boolean(formData.get("visibility"));
                        item.type = <"leaf" | "parent">String(formData.get("type"));
                        item.id = String(formData.get("id"));
                    }
                    targetDialog.remove();
                }
            }
        });
        shadowRoot.append(dialog);
        dialog.showModal();
    }
};