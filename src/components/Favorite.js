import React from 'react';
import './Favorite.css';
import favorite from '../Images/favourite.jpg';

const Favorite = () => {
	return (
		<div className="favContainer">
			<h2>Our favorite</h2>

			<div className="favContent">
					<img src={favorite} className="favImage" alt="cake" />
					<div className="textContent">
						<p>
							Strawberries and cream and spice with a zip of balsamic. This cake
							celebrates all the classic strawberry combinations, a little like a
							greatest hits album, but way more delicious!
						</p>
					</div>
			</div>
			<button className="favBtn">Order Now</button>
		</div>
	);
};

export default Favorite;