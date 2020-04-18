import React from "react";
import "../../style/css/style.css";
import "../../style/scss/style.scss";
import "../../style/overlay.css";

const Dashboard = ({ current }) => {
  const [isHover, setIsHover] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.gyftr.net/smartbuyapi/hdfc/api/v1/home/categories")
      .then(results => results.json())
      .then(response => {
        const { data } = response;
        setData(data);
      });
  }, []);

  const onMouseEnter = e => {
    e.preventDefault();
    if (e.target && e.target.accessKey) {
      let selectedItem = e.target.accessKey;
      let selectedItemData = data.find(item => item.name == selectedItem);
      selectedItemData = selectedItemData.brands_name.split(",");
      setSelectedCategory(selectedItemData);
    }
    setIsHover(true);
  };

  const onMouseLeave = e => {
    setIsHover(false);
  };

  return (
    <div>
      <section
        className="ftco-section contact-section ftco-no-pb"
        id="contact-section"
      >
        <nav
          className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target"
          id="ftco-navbar"
        >
          <div>
            <ul
              className="navbar-nav nav ml-auto"
              style={{ flexDirection: "row", marginTop: 100 }}
            >
              <ListItems
                list={data}
                onMouseLeave={onMouseLeave}
                onMouseEnter={onMouseEnter}
                current={current}
              />
            </ul>
          </div>
        </nav>
      </section>
      {isHover ? <Overlay selectedCategory={selectedCategory} /> : null}
    </div>
  );
};

const Overlay = ({ selectedCategory }) => {
  console.log("selectedCategory", selectedCategory);
  return (
    <div className="overlay" style={{ width: 350 }}>
      <div className="sidenav-container">
        <div className="list-group" style={{ textAlign: "center    " }}>
          <ul className="navbar-nav nav ml-auto">
            {selectedCategory.map(item => {
              return <li className="nav-item">{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ListItems = ({ list, onMouseLeave, onMouseEnter, current }) => {
  return list.map(item => {
    return (
      <li className="nav-item" key={item.name}>
        <a
          accessKey={item.name}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
          href="/dashboard"
          className="nav-link"
          style={current == "/" ? { color: "#fff" } : { color: "#000" }}
        >
          <figure>
            <img src={item.icon_url} alt={item.name} />
            <figcaption>{item.name}</figcaption>
          </figure>
        </a>
      </li>
    );
  });
};

export default Dashboard;
