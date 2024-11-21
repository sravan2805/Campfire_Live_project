import React, { useEffect, useState } from 'react';
import { MenuData } from '../../assets/assets';
import './Ourmenu.css'
import { useNavigate } from 'react-router-dom';
import { veg_biryani, Non_veg_biryani, VegFriedrice, nonvegFriedrice, vegsoups, nonvegsoups, curries_non_veg, curries_veg, Roti, Starters_babycorn, Starters_chicken, Starters_egg, Starters_fish, Starters_gobi, Starters_mushroom, Starters_mutton, Starters_panner, Starters_prawns, Starters_veg_spl, tandoori } from '../../assets/assets';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const navigate = useNavigate();

  const handleOurMenuClick = () => {
    navigate('/')
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const allItems = [
    ...veg_biryani,
    ...Non_veg_biryani,
    ...VegFriedrice,
    ...nonvegFriedrice,
    ...vegsoups,
    ...nonvegsoups,
    ...curries_non_veg,
    ...curries_veg,
    ...Roti,
    ...Starters_babycorn,
    ...Starters_chicken,
    ...Starters_egg,
    ...Starters_fish,
    ...Starters_gobi,
    ...Starters_mushroom,
    ...Starters_mutton,
    ...Starters_panner,
    ...Starters_prawns,
    ...Starters_veg_spl,
    ...tandoori,

  ];

  const filteredItems = selectedCategory === 'all'
    ? allItems
    : {
      'veg-biryani': veg_biryani,
      'non-veg-biryani': Non_veg_biryani,
      'VegFriedrice': VegFriedrice,
      'nonvegFriedrice': nonvegFriedrice,
      'vegsoups': vegsoups,
      'nonvegsoups': nonvegsoups,
      'curries_non_veg': curries_non_veg,
      'curries_veg': curries_veg,
      'Roti': Roti,
      'Starters_babycorn': Starters_babycorn,
      'Starters_chicken': Starters_chicken,
      'Starters_egg': Starters_egg,
      'Starters_fish': Starters_fish,
      'Starters_gobi': Starters_gobi,
      'Starters_mushroom': Starters_mushroom,
      'Starters_mutton': Starters_mutton,
      'Starters_panner': Starters_panner,
      'Starters_prawns': Starters_prawns,
      'Starters_veg_spl': Starters_veg_spl,
      'tandoori': tandoori,
    }[selectedCategory];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Heading */}
      <h1
        className="text-5xl font-bold text-center text-white-1000 mb-8"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Our Menu
      </h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {MenuData.map((category) => (
          <button
            key={category._id}
            onClick={() => setSelectedCategory(category.category)}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${selectedCategory === category.category
                ? "bg-amber-500 text-white shadow-lg"
                : "bg-white bg-opacity-50 text-black hover:bg-yellow-500 hover:text-white"
              }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item._id}
            className="bg-white bg-opacity-70 p-4 rounded-lg text-gray-800 shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-2">Price: {item.price} INR</p>
          </div>
        ))}
      </div>
      <div className='back'>
        {/* Back to Main Website Button */}
        <button
          onClick={handleOurMenuClick}
          className="mb-4 px-4 py-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors duration-300"
        >
          Back
        </button>
      </div>

    </div>
  );
};

export default Menu;