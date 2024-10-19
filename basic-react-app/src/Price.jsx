export default function Price({ oldPrice, newPrice }) {
    let oldStyling = {
        textDecoration: "line-through",
    };

    let newStyling = {
        fontWeight: "bold",
    };

    let styling = {
        backgroundColor: "#e0c367",
        height: "30px",
        borderBottomLeftRadius: "14px", 
        borderBottomRightRadius: "14px", 
    };

    return (
        <div style={styling}>
            <span style={oldStyling}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyling}>{newPrice}</span>
        </div>
    );
}
