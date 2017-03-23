import React from 'react';
import './FeaturedArtists.css';
import OwlCarousel from 'react-owl-carousel';
import DisplayCard from './DisplayCard';


export default class MyFeaturedArtists extends React.Component {
	render(){
		return(
   <OwlCarousel slideSpeed={300} itemsDesktop autoPlay >
    <div><DisplayCard /></div>
    <div><DisplayCard /></div>
    <div><DisplayCard /></div>
    <div><DisplayCard /></div>
    <div><DisplayCard /></div>
    <div><DisplayCard /></div>
    <div><DisplayCard /></div>
</OwlCarousel>
		)
	}
}