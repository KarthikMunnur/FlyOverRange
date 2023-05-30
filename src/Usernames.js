import React, { Component } from 'react';
import names from "./names";

export default class Usernames extends Component {
    render() {
        var prename="thiru";
        return (
            <div>
                <select>
                    <option selected disabled="true">---Usernames--</option>
                    {
                        names.usernames.map((result,index)=>{return index <= 5 ?(<option text={result.id}>{prename}{result.Uname}</option>): undefined})
                    }
                    <option></option>
                </select>
            </div>
        )
    }
}
