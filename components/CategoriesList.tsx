// @ts-nocheck
import { ratingdropdown, diffdropdown } from "./sa_pro_variables"
export function CategoriesList(props) {
    return (
        <table className="center" width="100%" id="subcat">
            <tr>
                <th
                    mt-2="true"
                    mb-0="true"
                    color-yellow="true"
                    d-none="true"
                    d-md-block="true"
                >
                    <a href={props.sap} className="class3">
                        SA Pro
                    </a>{" "}
                </th>
                <th
                    mt-2="true"
                    mb-0="true"
                    color-yellow="true"
                    d-none="true"
                    d-md-block="true"
                >
                    <a href={props.sasop} className="class3">
                        SASO Pro
                    </a>{" "}
                </th>
                <th
                    mt-2="true"
                    mb-0="true"
                    color-yellow="true"
                    d-none="true"
                    d-md-block="true"
                >
                    <a href={props.any} className="class3">
                        Any%
                    </a>{" "}
                </th>
                <th
                    mt-2="true"
                    mb-0="true"
                    color-yellow="true"
                    d-none="true"
                    d-md-block="true"
                >
                    <a href={props.sam} className="class3">
                        SA Master
                    </a>{" "}
                </th>
                <th
                    mt-2="true"
                    mb-0="true"
                    color-yellow="true"
                    d-none="true"
                    d-md-block="true"
                >
                    <a href={props.sasom} className="class3">
                        SASO Master
                    </a>{" "}
                </th>
            </tr>
        </table>
    )
}
