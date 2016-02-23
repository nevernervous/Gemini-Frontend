class UalDataSourceListController {
    /*@ngInject*/
    constructor() {
        this.name = 'ualDataSourceList';
        this.dataSourceList = [
            {
                name: "Group 1",
                elements: [
                    {
                        id: 1,
                        name: "South"
                    },
                    {
                        id: 2,
                        name: "Alosuiana"
                    },
                    {
                        id: 3,
                        name: "Carolina"
                    }
                ]
            },
            {
                name: "Group 2",
                elements: [
                    {
                        id: 4,
                        name: "Michig"
                    },
                    {
                        id: 5,
                        name: "Adobe"
                    },
                    {
                        id: 7,
                        name: "Mankires"
                    }
                ]
            },
            {
                name: "Group 3",
                elements: [
                    {
                        id: 6,
                        name: "Loui"
                    },
                    {
                        id: 9,
                        name: "Hendrix"
                    },
                    {
                        id: 12,
                        name: "Monumen"
                    },
                    {
                        id: 45,
                        name: "Balquis"
                    },
                    {
                        id: 56,
                        name: "Creed"
                    }
                ]
            },
            {
                name: "Group 3",
                elements: [
                    {
                        id: 6,
                        name: "Loui"
                    },
                    {
                        id: 9,
                        name: "Hendrix"
                    },
                    {
                        id: 12,
                        name: "Monumen"
                    },
                    {
                        id: 45,
                        name: "Balquis"
                    },
                    {
                        id: 56,
                        name: "Creed"
                    }
                ]
            },
             {
                name: "Group 3",
                elements: [
                    {
                        id: 6,
                        name: "Loui"
                    },
                    {
                        id: 9,
                        name: "Hendrix"
                    },
                    {
                        id: 12,
                        name: "Monumen"
                    },
                    {
                        id: 45,
                        name: "Balquis"
                    },
                    {
                        id: 56,
                        name: "Creed"
                    }
                ]
            },
             {
                name: "Group 3",
                elements: [
                    {
                        id: 6,
                        name: "Loui"
                    },
                    {
                        id: 9,
                        name: "Hendrix"
                    },
                    {
                        id: 12,
                        name: "Monumen"
                    },
                    {
                        id: 45,
                        name: "Balquis"
                    },
                    {
                        id: 56,
                        name: "Creed"
                    }
                ]
            },
             {
                name: "Group 3",
                elements: [
                    {
                        id: 6,
                        name: "Loui"
                    },
                    {
                        id: 9,
                        name: "Hendrix"
                    },
                    {
                        id: 12,
                        name: "Monumen"
                    },
                    {
                        id: 45,
                        name: "Balquis"
                    },
                    {
                        id: 56,
                        name: "Creed"
                    }
                ]
            },
             {
                name: "Group 3",
                elements: [
                    {
                        id: 6,
                        name: "Loui"
                    },
                    {
                        id: 9,
                        name: "Hendrix"
                    },
                    {
                        id: 12,
                        name: "Monumen"
                    },
                    {
                        id: 45,
                        name: "Balquis"
                    },
                    {
                        id: 56,
                        name: "Creed"
                    }
                ]
            }
        ];
    }
    
    setActive(dataSource){
        this.activeDataSource = dataSource;
    }
    
    getActive(){
        return this.activeDataSource;
    }
}

export default UalDataSourceListController;
