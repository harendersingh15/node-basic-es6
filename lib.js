export function addTextToBody(text) {
    const div = document.createElement('div');
    div.textContent = text;
    document.body.appendChild(div);
}

var data = [{
        "id": 1,
        "name": "gp 1",
        "value": [{
                "id": 2,
                "name": "gp 1 child"
            },
            {
                "id": 3,
                "name": "gp 1 child"
            },
            {
                "id": 3,
                "name": "gp 1 child",
                "value": [{
                        "id": 2,
                        "name": "gp 1 child"
                    },
                    {
                        "id": 3,
                        "name": "gp 1 child"
                    },
                    {
                        "id": 3,
                        "name": "gp 1 child",
                        "value": [

                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 1,
        "name": "gp 1",
        value: [{
                "id": 2,
                "name": "gp 1 child"
            },
            {
                "id": 3,
                "name": "gp 1 child"
            },
            {
                "id": 3,
                "name": "gp 1 child"
            }
        ]
    }
]