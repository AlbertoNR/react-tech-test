import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import { motion } from 'framer-motion';

const SearchFilterPanel = ({ render, data }) => {
  const customContainerStyles = base => ({
    ...base,
    width: '15%' 
  });
  const optionTypes = useMemo(() =>
    [].concat.apply([], data.map(item => item.types))
  ).filter(function(value, index, array) {
    return array.indexOf(value) == index;
  });
  const [state, setState] = useState({ query: '', filter: '', items: data });


  const handleInputOnChange = e => {
    let items = data;
    items = items.filter(item => {
      return (
        item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    setState({ query: e.target.value, filter: state.filter, items });
  };

  const handleSelectChange = option => {
    
    const filterItems = state.query ? state.items.filter( item => item.types.includes(option.value)) : data.filter( item => item.types.includes(option.value));
    console.log({'filterITems': filterItems}) 
    setState({
      query: state.query,
      filter: option,
      items: filterItems
    });
  };

  const handleReset = () => {
    setState({ query: '', filter: '', items: data });
  }

  return (
    <>
      <div className='search-box'>
        <input
          type='text'
          placeholder='Search...'
          onChange={handleInputOnChange}
          value={state.query}
        />
        <div className="select-wrapper">    
        <Select
          placeholder={'Type'}
          value={state.filter}
          autosize={true}
          onChange={handleSelectChange}
          styles={{ container: customContainerStyles }}
          options={optionTypes.map(item => ({ label: item, value: item }))}
        />
        <style jsx>{`
          div :global(.react-select) {
            width: 20%;           
          }
        `}</style>
        </div>
        <a href="#" className="resetButton" onClick={handleReset} >Reset</a>          
      </div>
      <motion.div initial="initial" animate="enter" exit="exit" variants={{ enter: { staggerChildren: 0.1  } }} className="content">
        {render(state.items)}
      </motion.div> 
    </>
  );
};

export { SearchFilterPanel };
