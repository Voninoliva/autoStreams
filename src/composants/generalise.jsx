export const useSubmitDataToken = () => {
    const submitData = async (url, formData,token) => {
      try {
        const response = await fetch(url, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
        }
        // Vous pouvez traiter la réponse si nécessaire
        const responseData = await response.json();
        return responseData; // Retourne la réponse si besoin
      } catch (error) {
        throw error; // Propage l'erreur pour que le composant puisse la gérer
      }
    };
  
    return submitData;
  };
  export const useDeleteDataToken = () => {
    const submitData = async (url, formData,token) => {
      try {
        const response = await fetch(url, {
          method: 'DELETE', 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
        }
        // Vous pouvez traiter la réponse si nécessaire
        const responseData = await response.json();
        return responseData; // Retourne la réponse si besoin
      } catch (error) {
        throw error; // Propage l'erreur pour que le composant puisse la gérer
      }
    };
  
    return submitData;
  };