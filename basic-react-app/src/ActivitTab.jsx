import Activity from "./activity";
function ActivityTab() {
    let styling = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItem: "center"
    }
    return (
        <div style={styling}>
    
            <Activity title="Logictech MX Master" index={0} />
            <Activity title="Apple Pencil(2nd Gen)" index={1} />
            <Activity title="Zebronics Zeb-Transformere" index={2} />
            <Activity title="Petronics toad 23" index={3} />
        </div>
    );
}
export default ActivityTab;