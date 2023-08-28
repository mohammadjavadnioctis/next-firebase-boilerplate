import DashboardMenuItemsType from "@/utils/types/DashboardMenuItemsType";
import HouseIcon from "@/assets/images/icons/house-icon.svg";
import LeafIcon from "@/assets/images/icons/leaf-icon.svg";



const DashboardMenu : DashboardMenuItemsType[] = [
    {
      name: 'Ana Sayfa',
      href: 'dashboard-home',
      id: '1',
      Icon: HouseIcon
     
    },
    {
      name: 'Option one',
      href: '#1',
      id: '2',
      Icon: LeafIcon
    },
    {
      name: 'Option two',
      href: '#2',
      id: '3',
      Icon: LeafIcon
    },
    {
      name: 'Option three',
      href: '#3',
      id: '4',
      Icon: LeafIcon
    },
    {
      name: 'Option four',
      href: '#4',
      id: '5',
      Icon: LeafIcon
    },
    {
      name: 'Option five',
      href: '#5',
      id: '6',
      Icon: LeafIcon
    },
    // {
    //   name: 'My Messages',
    //   href: 'messages',
    //   id: '3',
    // //   Icon: FiMessageSquare
    // },
  ]
  

  export default DashboardMenu