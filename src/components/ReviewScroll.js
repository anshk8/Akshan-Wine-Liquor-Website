import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewScroll = () => {
  // Example reviews
  const reviews = [
    { name: '- Kevin Cassidy', review: '"Most affordable prices and the owner is so personable and will take his time to special order specific items for you."', rating: 5 },
    { name: '- Joey Dado', review: '"Akshan is friendly and professional. The store is clean and beautiful and has all the drinks you need! Great place with great prices if you ever need to stop for some booze!"', rating: 5 },
    { name: '- Lauren Jeanne', review: ' "The nicest owners; always friendly and pleasant, the prices cannot be beat, and they\'re open when all the others are closed so switch liquor stores and go here instead! You won\'t regret it :)"', rating: 5 },
    { name: '- Jonathan Redditt', review: '"Akshan is the man. He hooked me up countless times with high end bourbon. He has a fantastic selection and top notch customer service. I will definitely frequent his store."', rating: 5 },
    { name: '- Anthony Scotto', review: '"Go see Akshan, really helpful and a very nice guy. Good selection and good price. If you\'re looking for something they don\'t have, he will try to get it."', rating: 5 },
    { name: '- Kevin Gordon', review: '"Amazing selection and service. My go to store for all my event needs!"', rating: 5 },
   
    ];

  return (
    <div className="w-full p-5 mt-5 ml-0.5 mr-0.5 border border-black">
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
       
              {
                reviews.map((customer, index) => {
                      
                    return <ReviewCard key={index} review={customer.review} name={customer.name} rating={customer.rating} />
                })
              }
      </div>
    </div>
  );
};

export default ReviewScroll;
