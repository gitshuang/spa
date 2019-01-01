//import { combineReducers } from 'redux';

export let initialState = {
   
    groupLists:[//可拖拽卡片
        {
            index:0,
            groupName:"第一组",
            type:'group',
            apps:[
                {
                    cardId:'111',
                    type:'card',
                    gridX:0,
                    gridy:0,
                    width:1,
                    height:1,
                    name:'111'
                },
                {
                    cardId:'222',
                    type:'card',
                    gridX:1,
                    gridy:0,
                    width:1,
                    height:1,
                    name:'2222'
                },
                {
                    cardId:'333',
                    type:'card',
                    gridX:2,
                    gridy:0,
                    width:1,
                    height:1,
                    name:'333'
                },
                {
                    cardId:'444',
                    type:'card',
                    gridX:3,
                    gridy:0,
                    width:1,
                    height:1,
                    name:'444'
                },
                {
                    cardId:'5555',
                    type:'card',
                    gridX:0,
                    gridy:1,
                    width:1,
                    height:1,
                    name:'5555'
                }
            ]
        },
        {
            index:1,
            groupName:"第二组",
            type:'group',
            apps:[
                {
                    cardId:'aaa',
                    type:'card',
                    gridX:0,
                    gridy:0,
                    width:1,
                    height:1,
                    name:'aaaa'
                },
                {
                    cardId:'bbbb',
                    type:'card',
                    gridX:1,
                    gridy:0,
                    width:1,
                    height:1,
                    name:'bbbb'
                }
            ]
        },
    ]
};

let manageGroupList = function(state,action){
    switch (action.type){
        case ("setGroupLists"):
            return {...state,groupLists:action.payload}
        default:
            return {...state}
    }
};

export default manageGroupList;
