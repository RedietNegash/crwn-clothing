import React from "react";
import Collection from "../Collection-item/collection-item.component";
import './preview.styles.scss'

const Preview=({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item,idx)=>idx < 4)
                .map((item)=>(
                    <Collection key={item.id} item={item}/>
                ))}

              
        </div>
        
    </div>
);
const mapStateToProps=createStructuredSelector({
    collections:selectCollections
})
export default connect(mapStateToProps, Preview);
