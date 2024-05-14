/* tslint:disable:max-line-length */
export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Thomas's Wein App",
            "formList": [
                {
                    "id": "OwnUserForm",
                    "title": "NotImplemented",
                    "formFieldList": [
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "NotImplementedForm",
                    "title": "Not Implemented",
                    "url": "/dummyform",
                    "headerVisible": false,
                    "footerVisible": false,
                    "borderStyle": "None",
                    "formFieldList": [
                        {
                            "id": "NotImplemented",
                            "type": "label",
                            "name": "NotImplementedMessage",
                            "width": 2
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "NotImplementedFormModal",
                    "title": "NotImplemented",
                    "url": "/dummyform",
                    "formFieldList": [
                        {
                            "id": "NotImplemented",
                            "type": "label",
                            "name": "NotImplementedMessage",
                            "width": 2
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ToDoForm",
                    "title": { default: "ToDo" },
                    "url": "/todo",
                    "formFieldList": [
                        {
                            "id": "title",
                            "type": "text",
                            "name": { default: "Titel" },
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "description",
                            "type": "text",
                            "name": { default: "Text" },
                            "newRow": true,
                            "maxLength": 4000,
                            "height": 4,
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "WeinForm",
                    "title": { default: "Wein Loader" },
                    "url": "/wein",
                    "formFieldList": [
                     {
                        "id": "title",
                        "type": "text",
                        "name": { default: "Wein Name" },
                        "required": true,
                        "width": 2
                    },
                    {
                        "id": "description",
                        "type": "text",
                        "name": { default: "Wein Beschreibung" },
                        "newRow": true,
                        "maxLength": 4000,
                        "height": 4,
                        "width": 2
                    },
                    {
                        "type": "deleteButton",
                        "name": "Delete"
                    },
                    {
                        "type": "cancelButton",
                        "name": "Cancel"
                    },
                    {
                        "type": "okButton",
                        "name": "Ok"
                    }
                    ]
                    },
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "pageLabel",
                            "value": "<h4>Willkommen bei DevOps</h4>",
                            "newRow": true
                        },
                        {
                            "type": "button",
                            "name": { default: "ToDo-List" },
                            "icon": "fa-file-alt",
                            "color": "wet-asphalt",
                            "page": "toDoPage",
                            "width": 2,
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": { default: "Weine" },
                            "icon": "fa-solid fa-wine-bottle",
                            "color": "alizarin",
                            "page": "WeinPage",
                            "width": 2,
                        },
                        {
                            "type": "button",
                            "name": { default: "Softgetränke" },
                            "icon": "fa-solid fa-wine-bottle",
                            "color": "green",
                            "page": "WeinPage",
                            "width": 2,
                        },
                        {
                            "type": "button",
                            "name": { default: "Branntwein" },
                            "icon": "fa-solid fa-wine-bottle",
                            "color": "blue",
                            "page": "WeinPage",
                            "width": 2,
                        },
                    ]
                },
                {
                    "id": "toDoPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": { default: "Neues ToDo" },
                            "icon": "fa-user",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "ToDoForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "ToDo",
                            "icon": "fa-user",
                            "color": "wet-asphalt",
                            "search": true,
                            "url": "/todo",
                            "form": {
                                "form": "ToDoForm"
                            }
                        }
                    ]
                },
                {
                    "id": "WeinPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": { default: "Neuer Wein" },
                            "icon": "fa-solid fa-plus",
                            "color": "orange",
                            "width": 2,
                            "form": {
                                "form": "WeinForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Wein",
                            "icon": "fa-glas",
                            "color": "alizarin",
                            "search": true,
                            "url": "/wein",
                            "form": {
                            "form": "WeinForm"
                            }
                            
                        }

                    ]
                }
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
