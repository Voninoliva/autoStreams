import { useEffect } from "react";

function OptionKely({ip,idvoiture}){
    const useFetchData = (url) => {
        const [donnees, setDonnees] = useState([]);
      
        useEffect(() => {
          (async () => {
            try {
              const response = await fetch(url);
      
              if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
              }
      
              const data = await response.json();
              setDonnees(data); 
            } catch (error) {
              console.error(`Erreur lors de la récupération des données depuis ${url} :`, error);
            }
          })();
        }, [url]);
      
        return donnees;
      };
    useEffect(()=>{
        
    });
return (
    <>
    
    </>
);
}
export default OptionKely