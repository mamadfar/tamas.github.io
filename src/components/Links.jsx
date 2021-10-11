import React from "react";
import {ArrowLeft} from "react-feather";

export const Links = ({data}) => {
    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>
                    <a href={item.link}>
                        <div>
                            <ArrowLeft/>
                            <span>{item.title}</span>
                            {item.icon}
                        </div>
                    </a>
                </li>
            ))}
        </ul>    )
}
