import './Search.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Search() {
    const navigateTo = useNavigate()
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProds, setFilteredProds] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const baseUrl = 'https://my-json-server.typicode.com/raja8807/grocery-app-data-'

    useEffect(() => {
        axios.get(baseUrl + 'vegetables/vegetables').then((res) => {
            setAllProducts(prev => [...prev, ...res.data])
        }).then(() => {
            axios.get(baseUrl + 'fruits/fruits').then((res) => {
                setAllProducts(prev => [...prev, ...res.data])
            })
        }).then(() => {
            axios.get(baseUrl + 'snacks/snacks').then((res) => {
                setAllProducts(prev => [...prev, ...res.data])
            })
        }).then(() => {
            axios.get(baseUrl + 'meats/meats').then((res) => {
                setAllProducts(prev => [...prev, ...res.data])
            })
        })
    }, [])

    function search(e) {
        setFilteredProds([])
        let filtered = allProducts.filter((prod) => {
            return prod.name.toLowerCase().includes(e.target.value)
        })
        if (filtered.length == 0) {
            setFilteredProds([{
                name: "No Products Found"
            }])
        }else {
            setFilteredProds([...filtered])
        }
        if (e.target.value == ''){
            setFilteredProds([])
        }
    }
    return (
        <div className='searchBar'>
            <i className='fa fa-search'></i>
            <input className='searchBox' placeholder='Search...' type='search' onChange={search} />

            {filteredProds.length > 0 && <div className='searchResultBox'>
                {
                    filteredProds.map((res) => {
                        return <div className='searchResult' key={Math.random()} onClick={() => {
                            if (filteredProds[0].name != "No Products Found"){
                                navigateTo(`/description/${res.category}/${res.id}`)
                            }
                            setFilteredProds([])
                            setSearchInput("")

                        }}>
                            <div className='searchResultName'>
                                <p>{res.name}</p>
                            </div>
                            <div className='searchResultCatagory'>
                                <p> in <span>{res.category}</span></p>
                            </div>
                        </div>
                    })
                }
                </div>}
        </div>
    )
}

export default Search;