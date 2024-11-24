/*
this structure use for dropdown menu

motors, tools, Dya
    lubricants
    motorcycle
        standard bike
        electric bike
        scootr

*/

const categories = [
    {
        name: "motors, tools, Dya",
        children: [
            {
                name: "lubricants",
                children: null
            },
            {
                name: "motorcycle",
                children: [
                    {
                       name: "standard bike",
                       children: null
                    }, 
                    {
                        name: "electric bike",
                        children: null
                    },
                    {
                        name: "scootr",
                        children: null
                    }
                ]
            }
        ]

    }
]

