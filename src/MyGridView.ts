import { CustomElement, element } from "editor/lib/elements/Element";
import { ReactiveProperty } from "editor/lib/models/Model";
import { GridRowFilter, GridRowModel, GridView } from "editor/lib/views/GridView";

export { MyGridRowModel };
export { MyGridView };

class MyGridRowModel extends GridRowModel {
    @ReactiveProperty()
    name: string;

    @ReactiveProperty()
    age: number;

    @ReactiveProperty()
    color: string;
    
    constructor(init: {
        id: number;
        name: string;
        age: number;
        color: string;
    }) {
        super(init);
        const {name, age, color} = init;
        this.name = name;
        this.age = age;
        this.color = color;
    }
}

var style: string;

@CustomElement({
    name: "e-mygridview"
})
class MyGridView extends GridView {

    #searchFilter: GridRowFilter | null;

    static {
        style = /*css*/`
            e-gridcell[headers="age"] {
                text-align: right;
            }
        `;
    }

    constructor() {
        super();
        this.#searchFilter = null;
        const {shadowRoot} = this
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [
            ...shadowRoot.adoptedStyleSheets, adoptedStylesheet
        ];
    }

    override renderShadow(): Node {
        const shadowNode = super.renderShadow();
        shadowNode.insertBefore(
            element("div", {
                children: element("input", {
                    attributes: {
                        type: "search"
                    },
                    listeners: {
                        input: <EventListener>this.#handleSearchInputEvent.bind(this)
                    }
                })
            }),
            shadowNode.firstChild
        );
        return shadowNode;
    }

    filter(row: GridRowModel): boolean {
        const searchFilter = this.#searchFilter;
        return super.filter(row) &&
        (searchFilter ? searchFilter.filter(row) : true);
    }

    setSearchFilter(filter: GridRowFilter | null): void {
        const {model, gridElement} = this;
        const {rows} = model;
        this.#searchFilter = filter;
        Array.from(rows.values()).forEach((row_i) => {
            const rowElement = this.getRowElement(row_i);
            if (rowElement) {
                rowElement.hidden = !this.filter(row_i);
            }
        });
        gridElement.clearSelection();
    }

    #handleSearchInputEvent(event: InputEvent) {
        const {target} = event;
        if (target instanceof HTMLInputElement) {
            const {value} = target;
            if (value !== "") {
                this.setSearchFilter({
                    filter: (row) => (<MyGridRowModel>row).name.toLowerCase().includes(value.toLowerCase())
                });
            }
            else {
                this.setSearchFilter(null);
            }
        }
    }
}