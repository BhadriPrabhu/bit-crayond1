
import MerchantView from "../../components/customerView/merchantView";
import Customer from "../../assets/icons/customer";
import Calender from "../../assets/icons/calender";
import Phone from "../../assets/icons/phone";
import Email from "../../assets/icons/email";
import Star from "../../assets/icons/star";
import Budget from "../../assets/icons/money";
import Address from "../../assets/icons/address";

export default function customerViewIndex() {
  const info = [
    {
      id: 1,
      icon: Customer,
      name: "Customer name",
      data: "Sam Richard",
    },
    {
      id: 2,
      icon: Calender,
      name: "Date of joining",
      data: "29-11-2023",
    },
   {
      id: 3,
      icon: Phone,
      name: "Mobile number",
      data: "+966 7896545643",
    },
    {
      id:4,
      icon: Email,
      name:"Email",
      data:"samrichard@gmail.com"
    },
    {
      id:5,
      icon: Star,
      name:"In loyalty program",
      data:"Yes"
    },
    {
      id:6,
      icon: Budget,
      name:"Loyalty credits",
      data:"500"
    },
    {
      id:7,
      icon: Address,
      name:"Address",
      data:"5140 Prince Muhammad Ibn Abd Al Aziz, As Sulimaniyah, Riyadh 12243, Saudi Arabia"
    },
   
  ];
  const offers = [
    {
      id:1,
      timeanddate:"10:45 AM, 25-09-2023",
      discounttxt:"Get discount of SAR 50 for every SAR 10,000 spent",
      name:" • Cashier name",
      discountname:"SPEND&EARN",
      status:"Redeemed",

    },
    {
      id:2,
      timeanddate:"10:45 AM, 25-09-2023",
      discounttxt:"Loyalty credits",
      feedback:"Customer got a damaged item which cannot be returned",
      name:"• Sam",
      credits:"1800 Credits",
      SAR:"(SAR 800.00)",
      status:"Added manually",

    },
    {
      id:3,
      timeanddate:"10:45 AM, 25-09-2023",
      discounttxt:"Get 5% off on all orders",
      name:"• Sam",
      discountname:"5%OFF",
      status:"Redeemed",

    },
    {
      id:4,
      timeanddate:"10:45 AM, 25-09-2023",
      discounttxt:"Free coffee with 5 coffee",
      name:"• Sam",
      discountname:"1COFFEEFOR5COFFEE",
      status:"Redeemed",
    },
    {
      id:5,
      timeanddate:"10:45 AM, 25-09-2023",
      discounttxt:"10 Creadits for every SAR 100",
      name:"• Sam",
      discountname:"10CFOR100SPENT",
      credits:"10 Credits",
      SAR:"(SAR 100.00)",
      status:"Earned",

    },
    {
      id:6,
      timeanddate:"10:45 AM, 25-09-2023",
      discounttxt:"Free coffee with 5 coffee",
      name:"• Sam",
      discountname:"1COFFEEFOR5COFFEE",
      status:"Redeemed",
    },
    {
      id:7,
      timeanddate:"10:45 AM, 25-09-2023",
      discounttxt:"Loyalty credits",
      feedback:"Customer got a damaged item which cannot be returned",
      name:"• Sam",
      credits:"1800 Credits",
      SAR:"(SAR 800.00)",
      status:"Added manually",

    },
    {
      id:8,
      timeanddate:"10:45 AM, 25-09-2023",
      discounttxt:"10 Creadits for every SAR 100",
      name:"• Sam",
      discountname:"10CFOR100SPENT",
      credits:"10 Credits",
      SAR:"(SAR 100.00)",
      status:"Earned",

    },
    {
      id:9,
      timeanddate:"10:45 AM, 25-09-2023",
      discounttxt:"Get discount of SAR 50 for every SAR 10,000 spent",
      name:" • Cashier name",
      discountname:"SPEND&EARN",
      status:"Redeemed",

    },
    {
      id:10,
      timeanddate:"10:45 AM, 25-09-2023",
      discounttxt:"Get discount of SAR 50 for every SAR 10,000 spent",
      name:" • Cashier name",
      discountname:"SPEND&EARN",
      status:"Redeemed",

    },
   
  ];
  const phnum = [

    {
      id:1,
      label:"+966",
    },
    {
      id:2,
      label:"+886",
    },
    {
      id:3,
      label:"+60",
    },
    {
      id:4,
      label:"+380",
    },
    {
      id:2,
      label:"+379",
    },
  ]
  return (
    <>
     <MerchantView
        customername="Sam Richard"
        basicinfotxt="Basic information"
        addcredits="Add credits"
        edit="Edit"
        lcredits="500 Loyalty credits"
        offers={offers}
        transaction="Transaction history"
        info={info}
        amount="Enter amount to be added as credits"
        sar="SAR"
        equivalent="Equivalent to"
        creditsnum="Credits"
        remarks="Remarks"
        edittxt="Edit Information"
        save="Save"
        phnum={phnum}
        
      />
      
    </>
  );
}
