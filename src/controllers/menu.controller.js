import { Menu } from "../models/menu.model.js";

const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).send(menus);
  } catch (error) {
    res.status(500).send({ error: "Failed to retrieve menus" }); // 500 for server errors
  }
};

export { getMenus };
