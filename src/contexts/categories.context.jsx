import { createContext, useState, useEffect } from 'react';

import {
  // addCollectonAndDocuments,
  getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils.js';

/* Only use the code below to iniciate the Firebase DB - 'categories' collection */
// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  /* Only use the code below to iniciate the Firebase DB - 'categories' collection */
  // useEffect(() => {
  //   addCollectonAndDocuments('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
