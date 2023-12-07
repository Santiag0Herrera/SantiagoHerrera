export default function Reducer(state, action){
    switch (action.type) {
        case "THEME":
            return {...state, theme: state.theme === "light" ? "dark" : "light"};
    
        case "CHANGE_TAB":
            return {...state, activeTab: action.payload}
    }
}