import { useEffect, useState } from "react";
import Loading from "./Loading";
import SingleMenuItem from "./SingleMenuItem";
const MenuList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const [InitalMenu, setInitalMenu] = useState([]);
  const [categories, setCategories] = useState([]);

  const URL = "http://localhost:3000/menu";
  const fetchData = async (url) => {
    setIsLoading(true);
    const response = await fetch(url);
    const menuJSONData = await response.json();
    setMenu(menuJSONData);
    setInitalMenu(menuJSONData);
    getCategories(menuJSONData);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData(URL);
  }, []);

  const filterMenu = (category) => {
    console.log(category);
    if (category === "All") {
      setMenu(InitalMenu);
      return;
    }
    setMenu(InitalMenu.filter((item) => item.category === category));
  };

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  const getCategories = (menuData) => {
    const arrayOfCategories = ["All"];
    menuData.forEach((item) => {
      arrayOfCategories.push(item.category);
    });
    //console.log(arrayOfCategories);
    setCategories(arrayOfCategories.filter(onlyUnique));
    return;
  };

  const displayMenuItems = () => {
    return menu.map((menuItem) => {
      return <SingleMenuItem key={menuItem.id} {...menuItem} />;
    });
  };

  const displayCategoryButtons = () => {
    return categories.map((category) => {
      return (
        <button
          className="btn"
          key={category}
          onClick={() => filterMenu(category)}
        >
          {category}
        </button>
      );
    });
  };

  return (
    <>
      <main>
        {isLoading ? (
          <Loading />
        ) : (
          <main>
            <div className="btn-container">{displayCategoryButtons()}</div>
            <div className="menu section-center">{displayMenuItems()}</div>
          </main>
        )}
      </main>
    </>
  );
};
export default MenuList;
