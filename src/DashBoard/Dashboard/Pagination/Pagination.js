import React from 'react'
import './Pagination.css'
function Pagination({ totalpost, Postperpage, paginate }) {


    let pagenumbers = [];

    for (let i = 1; i <= Math.ceil(totalpost / Postperpage); i++) {
        pagenumbers.push(i)
    }
    return (
        <ul style={{ textAlign: "center", marginTop: "50px" }}>
            {
                pagenumbers.map((number) => {
                    return (
                        <li style={{ display: "inline" }} key={number}>
                            <a className='pagination' onClick={() => paginate(number)} >{number}</a>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default Pagination