import { Flex,Box,list } from "@chakra-ui/react";
import {useRouter} from "next/router";
import { useEffect } from "react";
import axios from "axios";
const Pagination = ({ items, pageSize, currentPage, onPageChange,setProperties }) => {
   const pagesCount = Math.ceil(items / pageSize); // 100/10
  const router = useRouter()
  
  const handleClick = () => {
    

    }
      if (pagesCount === 1) return null;
      const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
      const fetchedPages= pages.map((page) => (
         <li 
         key={page}
         style={{
           "display": "flex",
          "justify-content": "center",
         " align-items": "center",
          "width": "2rem",
          "height": "2rem",
          "border": "1px solid #eaeaea",
          "border-radius": "0.5rem",
          "cursor": "pointer"
          }}
         //   className={
         //     page === currentPage ? styles.pageItemActive : styles.pageItem
         //   }
         >
           <a style={{ "cursor": "pointer"}}
           onClick={() => onPageChange(page)}
           >
             {page}
           </a>
         </li>
       ))
      // useEffect(() => {
      
      //   // axios.get(`http://127.0.0.1:8000/api/list-properties/?page=${currentPage}`)
      //   //   .then((response) => {
      //   //     setProperties(response.data.results);
      //   //   })
      //   //   .catch((error) => {
      //   //     console.log(error);
      //   //   });
      // }, []);
    
   return (
     <>
     
     <ul 

     style={{"display":"flex","justifyContent":"center","listStyle":"none","marginTop":"50px"}}
   //   className={styles.pagination}
     >
       {pages.length > 5? 'true' :{fetchedPages}
        }
     </ul>

   

     </>
   )
  }
  export default Pagination
