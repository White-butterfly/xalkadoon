import { people01, people02, people03, facebook, instagram, 
	linkedin, twitter,  send, shield, star  } from "../assets";
      
      
	import ReactApexChart from "react-apexcharts";
      
	function logout() {
	  localStorage.removeItem("token");
	  localStorage.removeItem("user");
	  window.location.href = "http://127.0.0.1:5173/";
	}
      export const navLinks = [
	{
	  id: "/",
	  title: "Home",
	},
	{
	  id: "/Doctors",
	  title: "Doctors",
	},
	{
	  id: "/About",
	  title: "About",
	},
	{
	  id: "/Blogs",
	  title: "Blogs",
	},
	
	{
	  id: "/Register",
	  title: "Profile",
	},
      ];
      export const HeaderLinks= [
      
	{
	  id: "/",
	  title: "Home",
	},
	{
	  id: "/AddPatient",
	  title: "AddForm",
	},
	{
	  id: "/Reports", 
	  title: "Reports",
	},
       
      {
	id:`/Logout` ,
       title: "Logout",
      
      },
      
      ]
      export const AboutFeatures= [
	{
	  id: "feature-1",
	  icon: star,
	  title: "Rewards",
	  content:
	   ' Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
	},
	{
	  id: "feature-2",
	  icon: shield,
	  title: "100% reliable",
	  content:
	    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	},
	{
	  id: "feature-3",
	  icon: send,
	  title: "sit amet",
	  content:
	    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	},
      ];
      
      export const feedback = [
	{
	  id: "feedback-1",
	  content:
	  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam porro non quibusdam!",
	    name: "Hebel hebel",
	  title: "Founder & Leader",
	  img: people01,
	},
	{
	  id: "feedback-2",
	  content:
	   " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam porro non quibusdam!",
	  name: "hebel hebel",
	  title: "Founder & Leader",
	  img: people02,
	},
	{
	  id: "feedback-3",
	  content:
	  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam porro non quibusdam!",
	    name: "heblaayo hebel",
	  title: "Founder & Leader",
	  img: people03,
	},
      ];
      
      export const stats = [
	{
	  id: "stats-1",
	  title: "Users",
	  value: "280+",
	},
	{
	  id: "stats-2",
	  title: "Doctors",
	  value: "40+",
	},
	{
	  id: "stats-3",
	  title: "Nurses",
	  value: "97+",
	},
	// {
	//   id: "stats-3",
	//   title: "trusted patients",
	//   value: "1407+",
	// },
      ];
      
      export const footerLinks = [
	{
	  title: "Useful Links",
	  links: [
	    {
	      name: "Content",
	      link: "https://www.hospital.com/content/",
	    },
	    {
	      name: "How it Works",
	      link: "https://www.hospital.com/how-it-works/",
	    },
	    {
	      name: "Create",
	      link: "https://www.hospital.com/create/",
	    },
	    {
	      name: "Explore",
	      link: "https://www.hospital.com/explore/",
	    },
	    {
	      name: "Terms & Services",
	      link: "https://www.hospital.com/terms-and-services/",
	    },
	  ],
	},
	{
	  title: "Community",
	  links: [
	    {
	      name: "Help Center",
	      link: "https://www.hospital.com/help-center/",
	    },
	    {
	      name: "Partners",
	      link: "https://www.hospital.com/partners/",
	    },
	    {
	      name: "Suggestions",
	      link: "https://www.hospital.com/suggestions/",
	    },
	    {
	      name: "Blog",
	      link: "https://www.hospital.com/blog/",
	    },
	    {
	      name: "Newsletters",
	      link: "https://www.hospital.com/newsletters/",
	    },
	  ],
	},
	{
	  title: "Partner",
	  links: [
	    {
	      name: "Our Partner",
	      link: "https://www.hospital.com/our-partner/",
	    },
	    {
	      name: "Become a Partner",
	      link: "https://www.hospital.com/become-a-partner/",
	    },
	  ],
	},
      ];
      
      export const socialMedia = [
	{
	  id: "social-media-1",
	  icon: instagram,
	  link: "https://www.instagram.com/",
	},
	{
	  id: "social-media-2",
	  icon: facebook,
	  link: "https://www.facebook.com/",
	},
	{
	  id: "social-media-3",
	  icon: twitter,
	  link: "https://www.twitter.com/",
	},
	{
	  id: "social-media-4",
	  icon: linkedin,
	  link: "https://www.linkedin.com/",
	},
      ];
      
      // export const clients = [
      //   {
      //     id: "client-1",
      //     logo: telesom,
      //   },
      //   {
      //     id: "client-2",
      //     logo: somtel,
      //   },
      //   {
      //     id: "client-3",
      //     logo: so,
      //   },
      //   {
      //     id: "client-4",
      //     logo: mesaf,
      //   },
      // ];
      
      // export const receptionLink =  [
      // {
	
      //   series: [
      //     {
      //       name: "series1",
      //       data: [31, 40, 28, 51, 42, 109, 100],
      //     },
      //     {
      //       name: "series2",
      //       data: [11, 32, 45, 32, 34, 52, 41],
      //     },
      //   ], 
      // },
      // {
      //   options: {
      //     chart: {
      //       height: 350,
      //       type: "area",
      //     },
      //     dataLabels: {
      //       enabled: false,
      //     },
      //     stroke: {
      //       curve: "smooth",
      //     },
      //     xaxis: {
      //       type: "datetime",
      //       categories: [
      //         "2018-09-19T00:00:00.000Z",
      //         "2018-09-19T01:30:00.000Z",
      //         "2018-09-19T02:30:00.000Z",
      //         "2018-09-19T03:30:00.000Z",
      //         "2018-09-19T04:30:00.000Z",
      //         "2018-09-19T05:30:00.000Z",
      //         "2018-09-19T06:30:00.000Z",
      //       ],
      //     },
      //     tooltip: {
      //       x: {
      //         format: "dd/MM/yy HH:mm",
      //       },
      //     },
      //   },
      
      
      // }
      
      
      // ]
      
      
      
      export const doctorLinks = [
	{
	  id: "/",
	  title: "Home",
	},
      
	{
	  id: "/Reports",
	  title: "Reports",
	},
	
	{
	  id: "/Lab", 
	  title: "Laboratory",
	},
	
	{
	  id: "/Logout",
	  title: "Logout",
	},
      
      ];
      
      export const HeaderLinkscheck= [
      
	{
	  id: "/",
	  title: "Home",
	},
	{
	  id: "/Addchecking",
	  title: "Addchecking",
	},
	{
	  id: "/Report", 
	  title: "Report",
	},
      {
	id:`/Logout` ,
       title: "Logout",
      
      }]
      
      export const HeaderLinksPharmacy= [
      
	{
	  id: "/",
	  title: "Home",
	},
	{
	  id: "/Report", 
	  title: "Report",
	},
      {
	id:`/Logout` ,
       title: "Logout",
      
      }]
      
      
      export const HeaderLab= [
      
	{
	  id: "/",
	  title: "Home",
	},
	{
	  id: "/Report", 
	  title: "Report",
	},
      {
	id:`/Logout` ,
       title: "Logout",
      
      }]