import React, { useState } from 'react';
import india from '../image/india.svg';
import aus from '../image/aus.svg';
import br from '../image/br.svg';
import ca from '../image/ca.svg';
import de from '../image/de.svg';
import id from '../image/id.svg';
import jp from '../image/jp.svg';
import my from '../image/my.svg';
import mx from '../image/mx.svg';
import ru from '../image/ru.svg';
import sg from '../image/sg.svg';
import kr from '../image/kr.svg';
import gb from '../image/gb.svg';
import us from '../image/us.svg';
import vn from '../image/vn.svg';
import './Country.css';
import Navbar from '../Navbar/Navbar';

const Country = () => {
    const [searchInput, setSearchInput] = useState('');

    const countries = [
        { name: 'India', flag: india },
        { name: 'Australia', flag: aus },
        { name: 'Brazil', flag: br },
        { name: 'Canada', flag: ca },
        { name: 'Germany', flag: de },
        { name: 'Indonesia', flag: id },
        { name: 'Japan', flag: jp },
        { name: 'Malaysia', flag: my },
        { name: 'Mexico', flag: mx },
        { name: 'Russia', flag: ru },
        { name: 'Singapore', flag: sg },
        { name: 'South Korea', flag: kr },
        { name: 'United kingdom', flag: gb },
        { name: 'United stated', flag: us },
        { name: 'Vietnam', flag: vn },
    ];

    const handleSearch = (e) => {
        setSearchInput(e.target.value.toLowerCase());
    };

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchInput)
    );

    return (
        <div>
            <Navbar />
            <div className="available-country">
                <div className="country-search">
                    <h1 className='firsttext'>Available Countries</h1>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search for a country..."
                            onChange={handleSearch}
                            value={searchInput}
                            className="search-input"
                        />
                    </div>
                </div>
                <div className="container">
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((country, index) => (
                            <div key={index} className={`item item${index + 1}`}>
                                <img src={country.flag} alt={country.name} />
                                <h1 className="country-name">{country.name}</h1>
                            </div>
                        ))
                    ) : (
                        <p>No countries found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Country;
