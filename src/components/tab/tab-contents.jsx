import './tab-contents.scss';
import React from 'react';

const TabContents = ({ tabId, product }) => {
  switch (tabId) {
    case 0:
      return product ? (
        <div className='product-info'>
          <h3>{product.name}</h3>
          <p>
            Tea is an aromatic beverage prepared by pouring hot or boiling water
            over cured or fresh leaves of Camellia sinensis, an evergreen shrub
            native to China and East Asia. After water, it is the most widely
            consumed drink in the world. There are many different types of tea;
            some, like Chinese greens and Darjeeling, have a cooling, slightly
            bitter, and astringent flavour, while others have vastly different
            profiles that include sweet, nutty, floral, or grassy notes. Tea has
            a stimulating effect in humans primarily due to its caffeine
            content. The tea plant originated in the region encompassing today's
            Southwest China, Tibet, north Myanmar and Northeast India, where it
            was used as a medicinal drink by various ethnic groups. An early
            credible record of tea drinking dates to the 3rd century AD, in a
            medical text written by Hua Tuo. It was popularised as a
            recreational drink during the Chinese Tang dynasty, and tea drinking
            spread to other East Asian countries. Portuguese priests and
            merchants introduced it to Europe during the 16th century. During
            the 17th century, drinking tea became fashionable among the English,
            who started to plant tea on a large scale in India. The term herbal
            tea refers to drinks not made from Camellia sinensis: infusions of
            fruit, leaves, or other plant parts, such as steeps of rosehip,
            chamomile, or rooibos. These may be called tisanes or herbal
            infusions to prevent confusion with "tea" made from the tea plant.
            <br />
          </p>
        </div>
      ) : (
        <div>fail</div>
      );
    case 1:
      return (
        <div className='howto'>
          <h3>How To Drink</h3>
          <p>
            Tea is a delicious brewed beverage that is enjoyed all over the
            world as a comforting treat.
            <br />
            First, choose the type of tea you want to drink.
            <br />
            There are various types of tea that offer different health benefits
            and flavors.
            <br /> Next, boil a pot of water and pour it over your tea.
            <br />
            Allow your tea to steep for a few minutes before serving it.
            <br />
            If desired, add milk and sugar to enhance the flavor of bold teas or
            add honey to lightly flavored teas.
          </p>
          <img
            src='https://res.cloudinary.com/dukjzo7tf/image/upload/v1625387138/tea-shop/wallpaper/ioz77cmbvx0mwqiteo4a.jpg'
            alt='how to drink tea'
          />
        </div>
      );
    default:
      return new Error('Not matched tabId!');
  }
};

export default TabContents;
