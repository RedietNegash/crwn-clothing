

const INITIAL_STATE={ 

    sections: [
        {
          title: 'hats',
          imageUrl: '../../src/assets/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: '../../src/assets/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: '../../src/assets/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: '../../src/assets/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: '../../src/assets/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
     
}

const directoryReducer=(state = INITIAL_STATE, action )=>{
    switch(action.type){
         default:
            return state;
    }
};

export default directoryReducer;