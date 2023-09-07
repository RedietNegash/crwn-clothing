import React from "react";
import Collection from "../Collection-item/collection-item.component";
import './preview.styles.scss'
import CollectionItem from '../Collection-item/collection-item.component';
const Preview=({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item,idx)=>idx < 4)
                .map((item)=>(
                    <CollectionItem key={item.id} item={item}/>
                ))}

              
        </div>
        
    </div>
);
export default Preview;
