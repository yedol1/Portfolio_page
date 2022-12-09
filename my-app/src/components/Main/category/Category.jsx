import React from "react";
import "./category.css";
export default function Category({ category }) {
    console.log(category);
    return (
        <dl className="category">
            <dt className="a11y-hidden">Category</dt>
            {category.map((e, i) => {
                return (
                    <>
                        <dd>{e}</dd>
                    </>
                );
            })}
        </dl>
    );
}
