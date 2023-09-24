import React from 'react';
import {useSelector,useDispatch} from "react-redux"
import {changeCountry} from "../redux/Covid/regionSlice";

function Input() {
    const dispatch = useDispatch();
    const {data, isLoading, country} = useSelector((state) => state.region);

  return (
    <div>
        <select name="" id="" value={country} onChange={(e) => dispatch(changeCountry(e.target.value))} >
            <option value=""> Select a country </option>
            {data.map((cntry,index) => {
                return <option key={index} value={cntry.iso}> {cntry.name}</option>
            })}
        </select>

    </div>
  )
}

export default Input