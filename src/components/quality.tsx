import React from "react";
import {QualityProps} from "../types";

const Quality = (props: QualityProps) => {
    const quality = props.propertiesOfQuality
    return (
        <span key={quality.name} className={"py-1 px-2 text-white m-1 rounded "+ quality.color}>
                            {quality.name}
                        </span>
    )
}

export default Quality