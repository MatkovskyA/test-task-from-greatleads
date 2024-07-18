const NavItem = ( {listItemStyle} ) => {
  const pagesTitle = [
    {text: "Главная"},
    {text: "Проекты"},
    {text: "О нас"},
    {text: "Контакты"},
  ];

  //вывел список без перехода по ссылкам и использования NavLink из react-router-dom
  const listItem = pagesTitle.map((title, index) => 
    <li className="cursor-pointer hover:opacity-30" key={index}>{title.text}</li>
  )
  return (
    <ul className={listItemStyle}>
      {listItem}
    </ul>
  )
}

export default NavItem;
